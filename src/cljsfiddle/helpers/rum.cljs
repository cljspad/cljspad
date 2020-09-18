(ns cljsfiddle.helpers.rum
  (:require-macros rum.core)
  (:require [rum.core :as rum]))

(defn rum-render! [element]
  (rum/mount element (js/document.getElementById "sandbox")))
