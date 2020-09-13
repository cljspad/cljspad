(ns cljsfiddle.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [cljsfiddle.env.core :as env]
            [goog.object :as obj]
            ["react-monaco-editor" :as monaco]
            ["react" :as react]))

;; TODO: does :target :bundle support :default in require?
(def MonacoEditor
  (aget monaco "default"))

(defn run-code
  [compiler-state version monaco]
  (fn [_]
    (let [model (.getModel monaco)
          value (.getValue model)]
      (try
        (env/eval! compiler-state version value)
        (catch :default e (prn e))))))

(defui editor [{:keys [compiler-state db]} _]
  (let [ref (react/useRef)
        [run set-run] (rehook/use-state nil)
        [version _] (rehook/use-atom-path db [:version])]

    (rehook/use-effect
     (fn []
       (let [monaco (obj/getValueByKeys ref "current" "editor")]
         (set-run {:run (run-code compiler-state version monaco)}))
       (constantly nil))
     [version])

    [:div {:style {:width "100%" :height "calc(100vH - 250px)"}}
     [:div {:style {:height          "25px"
                    :backgroundColor "#fafafa"
                    :borderBottom    "1px solid #ccc"
                    :padding         "3px"}}
      [:button {:onClick (:run run)}
       "Run"]]

     [MonacoEditor {:language "clojure"
                    :theme    "vs-light"
                    :ref      ref}]]))