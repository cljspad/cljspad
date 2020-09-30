(ns cljspad.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [cljspad.env :as env]
            [goog.object :as obj]
            [clojure.string :as str]
            ["monaco" :as MonacoEditor]))

(defn ^js ref->editor [ref]
  (obj/getValueByKeys ref "current" "editor"))

(defn monaco-value [monaco-ref]
  (let [editor (ref->editor monaco-ref)
        model  (.getModel editor)]
    (.getValue model)))

(defn copy-to-clipboard [monaco-ref]
  (try (let [value  (monaco-value monaco-ref)
             elem   (js/document.createElement "textarea")]
         (js/document.body.appendChild elem)
         (aset elem "value" value)
         (.select elem)
         (js/document.execCommand "copy")
         (js/document.body.removeChild elem)
         true)
       (catch :default e
         (prn e)
         false)))

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
  (fn []
    (let [model (.getModel editor)
          value (.getValue model)]
      (set-model-markers model "cljspad" [])
      (env/eval-form compiler-state value (partial eval-form-markers model)))))

(defui toolbar
  [{:keys [compiler-state]} {:keys [run]}]
  (let [[loading? _] (rehook/use-atom-path compiler-state [::env/evaluating?])
        run (:run run)]
    [:div.toolbar
     [:div.button {:onClick #(run)}
      (if loading?
        [:span.cljspad-loading-icon]
        [:span.cljspad-run-icon])
      "Run"]]))

(defui editor [{:keys [compiler-state db monaco]} {:keys [height]}]
  (let [[monaco _] (rehook/use-atom monaco)
        [run set-run] (rehook/use-state nil)
        [source _] (rehook/use-atom-path db [:source])]
    (when monaco
      (rehook/use-effect
       (fn []
         (let [editor (ref->editor monaco)
               resize (fn [] (.layout editor))
               unload (fn []
                        (let [model (.getModel editor)
                              value (.getValue model)]
                          (when-not (str/blank? value)
                            true)))]
           (js/window.addEventListener "resize" resize)
           (set-run {:run (run-code compiler-state editor)})
           (aset js/window "onbeforeunload" unload)
           (fn []
             (js/window.removeEventListener "resize" resize))))
       [])

      [:div {:style {:width "100%" :height height}}
       [toolbar {:run run}]
       [MonacoEditor {:language "clojure"
                      :theme    "vs-light"
                      :height   "100%"
                      :width    "100%"
                      :value    source
                      :options  {:minimap {:enabled false}}
                      :ref      monaco}]])))