(ns cljsfiddle.helpers.rum
  (:require-macros rum.core)
  (:require [rum.core :as rum]))

(defn render! [element]
  (rum/mount element (js/__cljsfiddle_sandbox)))