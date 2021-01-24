(ns cljspad.editor2
  (:require ["@codemirror/closebrackets" :refer [closeBrackets]]
            ["@codemirror/fold" :as fold]
            ["@codemirror/gutter" :refer [lineNumbers]]
            ["@codemirror/highlight" :as highlight]
            ["@codemirror/history" :refer [history historyKeymap]]
            ["@codemirror/state" :refer [EditorState]]
            ["@codemirror/view" :as view :refer [EditorView]]
            ["react" :as react]
            [goog.object :as obj]
            [cljspad.env :as env]
            [nextjournal.clojure-mode :as cm-clj]
            [nextjournal.clojure-mode.live-grammar :as live-grammar]
            [nextjournal.clojure-mode.test-utils :as test-utils]
            [nextjournal.clojure-mode.extensions.eval-region :as eval-region]
            [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]))

(goog-define live-reloading? false)

(def theme
  {:$content           {:white-space "pre-wrap"
                        :padding     "10px 0"}
   :$$focused          {:outline "none"}
   :$line              {:padding     "0 9px"
                        :line-height "1.6"
                        :font-size   "16px"
                        :font-family "var(--code-font)"}
   :$matchingBracket   {:border-bottom "1px solid var(--teal-color)"
                        :color         "inherit"}
   :$gutters           {:background "transparent"
                        :border     "none"}
   :$gutterElement     {:margin-left "5px"}
   ;; only show cursor when focused
   :$cursor            {:visibility "hidden"}
   "$$focused $cursor" {:visibility "visible"}})

(defn eval-form
  [compiler-state o]
  (let [source (obj/getValueByKeys o "state" "doc")]
    (env/eval-form compiler-state (str source))))

(defn eval-top-level
  [compiler-state o]
  (let [state  (obj/getValueByKeys o "state")
        source (eval-region/cursor-node-string state)]
    (env/eval-form compiler-state source)))

(defn eval-at-cursor
  [compiler-state o]
  (let [state  (obj/getValueByKeys o "state")
        source (eval-region/cursor-node-string state)]
    (env/eval-form compiler-state source)))

(defn eval-keymap
  [compiler-state]
  [{:key "Mod-Enter"
    :run (partial eval-form compiler-state)}
   {:key   "Alt-Enter"
    :shift (partial eval-top-level compiler-state)
    :run   (partial eval-at-cursor compiler-state)}])

(defn extensions
  [compiler-state]
  ;; Adapted from https://github.com/nextjournal/clojure-mode/blob/master/demo/src/nextjournal/clojure_mode/demo.cljs
  #js[(.theme EditorView (clj->js theme))
      (history)
      highlight/defaultHighlightStyle
      (view/drawSelection)
      (lineNumbers)
      (fold/foldGutter)
      (.. EditorState -allowMultipleSelections (of true))
      (if live-reloading?
        ;; use live-reloading grammar
        #js[(cm-clj/syntax live-grammar/parser)
            (.slice cm-clj/default-extensions 1)]
        cm-clj/default-extensions)
      (.of view/keymap cm-clj/complete-keymap)
      (.of view/keymap historyKeymap)
      (.of view/keymap (clj->js (eval-keymap compiler-state)))])

(defn editor-opts
  [compiler-state ^js ref source]
  {:state  (test-utils/make-state (extensions compiler-state) source)
   :parent (.-current ref)})

(defui editor
  [{:keys [db compiler-state]} {:keys [height]}]
  (let [ref (react/useRef)
        [source _] (rehook/use-atom-path db [:source])]

    (rehook/use-effect
     (fn []
       (let [editor (EditorView. (clj->js (editor-opts compiler-state ref source)))]
         #(.destroy editor)))
     [])
    [:div {:style {:width "100%" :height height}}
     [:div {:ref ref :style {:max-height "420px"}}]]))