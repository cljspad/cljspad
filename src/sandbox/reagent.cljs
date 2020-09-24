(ns sandbox.reagent
  (:require [reagent.dom :as dom]))

(defn render [comp]
  (dom/render comp (js/__cljsfiddle_sandbox)))