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
  (fn [set-loading]
    (set-loading true)
    (let [model (.getModel monaco)
          value (.getValue model)]
      (go (let [result (async/<! (env/eval! compiler-state value))]
            (prn (or (:value result) (env/error-message result)))
            (set-loading false))))))

(defui toolbar
  [_ {:keys [run]}]
  (let [[loading set-loading] (rehook/use-state false)
        run (:run run)]
    [:div.toolbar
     [:div.button {:onClick #(run set-loading)}
      (if loading
        [:span.cljsfiddle-loading-icon]
        [:span.cljsfiddle-run-icon])
      "Run"]]))

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
     [toolbar {:run run}]
     [MonacoEditor {:language "clojure"
                    :theme    "vs-light"
                    :height   "100%"
                    :width    "100%"
                    :value    source
                    :options  {:minimap {:enabled false}}
                    :ref      ref}]]))