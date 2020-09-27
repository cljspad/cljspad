(ns cljspad.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [cljspad.env :as env]
            [goog.object :as obj]
            [clojure.string :as str]
            ["monaco" :as MonacoEditor]))

(defn ^js ref->editor [ref]
  (obj/getValueByKeys ref "current" "editor"))

(defn copy-to-clipboard [monaco-ref]
  (try (let [editor (ref->editor monaco-ref)
             model  (.getModel editor)
             value  (.getValue model)
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

(defn run-code
  [compiler-state ^js editor]
  (fn []
    (let [model (.getModel editor)
          value (.getValue model)]
      (env/eval-form compiler-state value))))

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