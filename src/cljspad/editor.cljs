(ns cljspad.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [cljspad.env :as env]
            [goog.object :as obj]
            [clojure.string :as str]
            ["monaco" :as MonacoEditor]
            ["react" :as react]))

(defn ^js ref->editor [ref]
  (obj/getValueByKeys ref "current" "editor"))

(defn monaco-value [^js editor]
  (when editor
    (let [model (.getModel editor)]
      (.getValue model))))

(defn copy-to-clipboard [^js editor]
  (when-let [value (monaco-value editor)]
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

(defn set-model-markers
  [model id markers]
  (let [f (obj/getValueByKeys js/monaco "editor" "setModelMarkers")]
    (f model id (clj->js markers))))

(defn position [[line column]]
  (js/monaco.Position. line column))

;; TODO: more accurate markers...
(defn eval-form-markers
  [^js model {:keys [pos error]}]
  (when error
    (let [[start-pos end-pos] (js->clj (.matchBracket model (position pos)) :keywordize-keys true)
          start-line-number (or (:startLineNumber start-pos) (first pos))
          start-column      (or (:startColumn start-pos) (second pos))
          end-line-number   (or (:endLineNumber end-pos) (inc (first pos)))
          end-column        (or (:endColumn end-pos) (second pos))
          marker            {:startLineNumber start-line-number
                             :startColumn     start-column
                             :endLineNumber   end-line-number
                             :endColumn       end-column
                             :message         (str (:message error))
                             :severity        4}]
      (set-model-markers model "cljspad" [marker]))))

(defn run-code
  [compiler-state ^js editor]
  (let [model (.getModel editor)
        value (.getValue model)]
    (set-model-markers model "cljspad" [])
    (env/eval-form compiler-state value (partial eval-form-markers model))))

(defui run-icon [{:keys [compiler-state]} _]
  (let [[loading? _] (rehook/use-atom-path compiler-state [::env/evaluating?])]
    (if loading?
      [:span.cljspad-loading-icon]
      [:span.cljspad-run-icon])))

(defui toolbar
  [{:keys [monaco compiler-state]} _]
  [:div.toolbar
   [:div.button {:onClick #(some->> @monaco (run-code compiler-state))}
    [run-icon] "Run"]])

(defui monaco-editor [{:keys [db monaco]} _]
  (let [ref (react/useRef)
        [source _] (rehook/use-atom-path db [:source])]

    (rehook/use-effect
     (fn []
       (let [editor (ref->editor ref)
             resize (fn [] (.layout editor))
             unload (fn []
                      (let [model (.getModel editor)
                            value (.getValue model)]
                        (when-not (str/blank? value)
                          true)))]
         (reset! monaco editor)
         (js/window.addEventListener "resize" resize)
         (aset js/window "onbeforeunload" unload)
         (fn []
           (reset! monaco nil)
           (aset js/window "onbeforeunload" nil)
           (js/window.removeEventListener "resize" resize))))
     [])

    [MonacoEditor {:language "clojure"
                   :theme    "vs-light"
                   :height   "100%"
                   :width    "100%"
                   :value    source
                   :options  {:minimap {:enabled false}}
                   :ref      ref}]))

(defui editor [_ {:keys [height]}]
  [:div {:style {:width "100%" :height height}}
   [toolbar]
   [monaco-editor]])