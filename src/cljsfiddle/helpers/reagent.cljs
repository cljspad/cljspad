(ns cljsfiddle.helpers.reagent
  (:require [reagent.core]
            [reagent.dom :as dom]))

(defn reagent-render! [comp]
  (dom/render comp (js/__cljsfiddle_sandbox)))