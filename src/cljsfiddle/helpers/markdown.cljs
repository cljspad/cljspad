(ns cljsfiddle.helpers.markdown)

(def marked
  (js/require "marked"))

(defn markdown-render! [md-str]
  (aset (js/__cljsfiddle_sandbox) "innerHTML" (marked md-str)))