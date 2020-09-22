(ns cljsfiddle.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [cljsfiddle.env.core :as env]
            [goog.object :as obj]
            [cljs.core.async :as async :refer-macros [go]]
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
      (go (let [resp (async/<! (env/eval! compiler-state version value))]
            (some-> resp :error ex-cause ex-message prn))))))

(defui editor [{:keys [compiler-state db]} _]
  (let [ref (react/useRef)
        [run set-run] (rehook/use-state nil)
        [version _] (rehook/use-atom-path db [:version])
        [source _] (rehook/use-atom-path db [:source])]

    (rehook/use-effect
     (fn []
       (let [monaco (obj/getValueByKeys ref "current" "editor")
             resize (fn [] (.layout monaco))]
         (js/window.addEventListener "resize" resize)
         (set-run {:run (run-code compiler-state version monaco)})
         (fn []
           (js/window.removeEventListener "resize" resize))))
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
                    :height   "100%"
                    :width    "100%"
                    :value    source
                    :ref      ref}]]))