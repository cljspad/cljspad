(ns cljsfiddle.helpers.markdown)

(def marked
  (js/require "marked"))

(defn render! [md-str]
  (aset (js/__cljsfiddle_sandbox) "innerHTML" (marked md-str)))