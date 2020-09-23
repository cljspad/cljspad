(ns cljsfiddle.helpers.rum
  (:require-macros rum.core)
  (:require [rum.core :as rum :refer-macros [defc]]))

(defc repeat-label [n text]
  [:div (replicate n [:.label text])])

(defn render! [element]
  (rum/mount element (js/__cljsfiddle_sandbox)))