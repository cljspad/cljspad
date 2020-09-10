(ns cljsfiddle
  (:require ["react" :as react]
            ["react-dom" :as react-dom]
            [reagent.dom :as dom]))

(defn reagent-render! [comp]
  (dom/render comp (js/document.getElementById "right")))