(ns cljspad.editor
  (:require ["@codemirror/fold" :as fold]
            ["@codemirror/gutter" :refer [lineNumbers]]
            ["@codemirror/highlight" :as highlight]
            ["@codemirror/history" :refer [history historyKeymap]]
            ["@codemirror/state" :refer [EditorState]]
            ["@codemirror/view" :as view :refer [EditorView]]
            ["@codemirror/lint" :as lint :refer [Diagnostic]]
            ["react" :as react]
            [goog.object :as obj]
            [cljspad.env :as env]
            [nextjournal.clojure-mode :as cm-clj]
            [nextjournal.clojure-mode.live-grammar :as live-grammar]
            [nextjournal.clojure-mode.extensions.eval-region :as eval-region]
            [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [cljs.core.async :as async]))

(goog-define live-reload? false)

(defn editor-value
  [editor-view]
  (when editor-view
    (str (obj/getValueByKeys editor-view "state" "doc"))))

(defn copy-to-clipboard
  [editor-view]
  (when-let [value (editor-value editor-view)]
    (try
      (let [elem (js/document.createElement "textarea")]
        (js/document.body.appendChild elem)
        (aset elem "value" value)
        (.select elem)
        (js/document.execCommand "copy")
        (js/document.body.removeChild elem)
        true)
      (catch :default e
        (prn e)
        false))))

(def theme
  {:$content           {:white-space "pre-wrap"
                        :padding     "10px 0"}
   :$$focused          {:outline "none"}
   :$line              {:padding     "0 9px"
                        :line-height "1.6"
                        :font-size   "14px"
                        :font-family "Hack, monospace"}
   :$matchingBracket   {:border-bottom "1px solid #008080"
                        :color         "inherit"}
   :$gutters           {:background "transparent"
                        :border     "none"}
   :$gutterElement     {:margin-left "5px"}
   ;; only show cursor when focused
   :$cursor            {:visibility "hidden"}
   "$$focused $cursor" {:visibility "visible"}})

(defn set-diagnostics!
  [^js editor-view ^js state diagnostics]
  (let [effect (lint/setDiagnostics state (clj->js diagnostics))
        tx     (.update state effect)]
    (.dispatch editor-view tx)))

(defn result->diagnostic
  [{:keys [editor-view state node console]} result]
  (when (and editor-view state node)
    (when-let [error (:error result)]
      (let [from       (obj/get node "from")
            to         (obj/get node "to")
            diagnostic {:from     from
                        :to       to
                        :severity "error"
                        :message  (obj/getValueByKeys error "cause" "message")}]
        (when-let [error-ch (:stderr console)]
          (async/put! error-ch [(obj/getValueByKeys error "cause" "stack")]))
        (set-diagnostics! editor-view state [diagnostic])))))

(def log
  (obj/getValueByKeys js/window "console" "log"))

(defn eval-callback
  [ctx result]
  (result->diagnostic ctx result)
  (prn (-> result :value)))

(defn eval-error-callback
  [ctx result]
  (result->diagnostic ctx result))

(defn eval-form
  [compiler-state console editor-view]
  (set-diagnostics! editor-view (obj/get editor-view "state") [])
  (let [state (obj/get editor-view "state")
        to    (obj/getValueByKeys state "doc" "length")
        node  #js {"from" 0
                   "to"   to}
        ctx   {:editor-view editor-view :state state :node node :console console}]
    (env/eval-form compiler-state
                   (editor-value editor-view)
                   (partial eval-callback ctx))))

(defn eval-top-level
  [compiler-state console editor-view]
  (let [state  (obj/get editor-view "state")
        _      (set-diagnostics! editor-view state [])
        state  (obj/get editor-view "state")
        source (eval-region/top-level-string state)
        node   (eval-region/top-level-node state)
        ctx    {:editor-view editor-view :state state :node node :console console}]
    (-> (env/eval-str-promise compiler-state source)
        (.then (partial eval-callback ctx))
        (.catch (partial eval-error-callback ctx)))))

(defn eval-at-cursor
  [compiler-state console editor-view]
  (let [state  (obj/get editor-view "state")
        _      (set-diagnostics! editor-view state [])
        state  (obj/get editor-view "state")
        source (eval-region/cursor-node-string state)
        node   (eval-region/node-at-cursor state)
        ctx    {:editor-view editor-view :state state :node node :console console}]
    (-> (env/eval-str-promise compiler-state source)
        (.then (partial eval-callback ctx))
        (.catch (partial eval-error-callback ctx)))))

(defn eval-keymap
  [compiler-state console]
  [{:key "Mod-Enter"
    :run (partial eval-form compiler-state console)}
   {:key   "Alt-Enter"
    :shift (partial eval-top-level compiler-state console)
    :run   (partial eval-at-cursor compiler-state console)}])

(defn extensions
  [compiler-state console]
  ;; Adapted from https://github.com/nextjournal/clojure-mode/blob/master/demo/src/nextjournal/clojure_mode/demo.cljs
  #js[(.theme EditorView (clj->js theme))
      (history)
      highlight/defaultHighlightStyle
      (view/drawSelection)
      (lineNumbers)
      (fold/foldGutter)
      (.. EditorState -allowMultipleSelections (of true))
      (if live-reload?
        ;; use live-reloading grammar
        #js[(cm-clj/syntax live-grammar/parser)
            (.slice cm-clj/default-extensions 1)]
        cm-clj/default-extensions)
      (.of view/keymap cm-clj/complete-keymap)
      (.of view/keymap historyKeymap)
      (.of view/keymap (clj->js (eval-keymap compiler-state console)))])

(defn editor-opts
  [compiler-state console ^js ref source]
  {:state  (.create EditorState (clj->js {:doc        (str source)
                                          :extensions (extensions compiler-state console)}))
   :parent (.-current ref)})

(defui editor
  [{:keys [db compiler-state editor-view console]} {:keys [height]}]
  (let [ref (react/useRef)
        [source _] (rehook/use-atom-path db [:source])]

    (rehook/use-effect
     (fn []
       (let [editor (EditorView. (clj->js (editor-opts compiler-state console ref source)))]
         ;; editor needs to be global so that auxiliary functionality like export/copy-to-clipboard work
         (reset! editor-view editor)
         (fn []
           (.destroy editor)
           (reset! editor-view nil))))
     [source])

    [:div {:style {:overflow "auto" :height height}
           :ref   ref}]))