(ns cljsfiddle.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [cljsfiddle.env.core :as env]
            [goog.object :as obj]
            ["react-monaco-editor" :as monaco]
            ["react" :as react]))

(def MonacoEditor
  (aget monaco "default"))

(defn run-code
  [compiler-state monaco]
  (fn [_]
    (let [model (.getModel monaco)
          value (.getValue model)]
      (try
        (env/eval! compiler-state value)
        (catch :default e (prn e))))))

(defui editor [{:keys [compiler-state]} _]
  (let [ref (react/useRef)
        [run set-run] (rehook/use-state nil)]

    (rehook/use-effect
     (fn []
       (let [monaco (obj/getValueByKeys ref "current" "editor")]
         (set-run {:run (run-code compiler-state monaco)}))
       (constantly nil))
     [])

    [:div {:style {:width "100%" :height "calc(100vH - 250px)"}}
     [:div {:style {:height          "25px"
                    :backgroundColor "rgb(51,51,51)"
                    :padding         "3px"}}
      [:button {:onClick (:run run)}
       "Run"]]

     [MonacoEditor {:language "clojure"
                    :theme    "vs-dark"
                    :ref      ref}]]))