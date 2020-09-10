(ns cljsfiddle
  (:require ["react" :as react]
            ["react-dom" :as react-dom]
            [rehook.dom.browser :as dom.browser]
            [reagent.dom :as dom]
            [rum.core :as rum]))

(defn reagent-render!
  [comp]
  (dom/render comp (js/document.getElementById "right")))

(defn rum-redner!
  [comp]
  (rum/mount comp (js/document.getElementById "right")))

(defn rehook-render!
  ([comp]
   (rehook-render! {} identity clj->js comp))

  ([system ctx-f props-f comp]
   (react-dom/render
    (dom.browser/bootstrap system ctx-f props-f comp)
    (js/document.getElementById "right"))))