(ns cljsfiddle.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [cljsfiddle.env.core :as env]
            [goog.object :as obj]
            [cljs.core.async :as async :refer-macros [go]]
            ["react" :as react]
            ["monaco" :as MonacoEditor]))

(defn run-code
  [compiler-state ^js monaco]
  (fn []
    (let [model (.getModel monaco)
          value (.getValue model)]
      (go (let [resp (async/<! (env/eval! compiler-state value))]
            (when-let [err (env/error-message resp)]
              (prn err)))))))

(defui editor [{:keys [compiler-state db]} _]
  (let [ref (react/useRef)
        [run set-run] (rehook/use-state nil)
        [source _] (rehook/use-atom-path db [:source])]

    (rehook/use-effect
     (fn []
       (let [monaco (obj/getValueByKeys ref "current" "editor")
             resize (fn [] (.layout monaco))]
         (js/window.addEventListener "resize" resize)
         (set-run {:run (run-code compiler-state monaco)})
         (fn []
           (js/window.removeEventListener "resize" resize))))
     [])

    [:div {:style {:width "100%" :height "calc(100vH - 250px)"}}
     [:div.toolbar
      [:div.button {:onClick (:run run)}
       [:span.cljsfiddle-run-icon] "Run"]]

     [MonacoEditor {:language "clojure"
                    :theme    "vs-light"
                    :height   "100%"
                    :width    "100%"
                    :value    source
                    :options  {:minimap {:enabled false}}
                    :ref      ref}]]))