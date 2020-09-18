(ns cljsfiddle.helpers.markdown)

(def marked
  (js/require "marked"))

(defn markdown-render! [md-str]
  (aset (js/document.getElementById "sandbox") "innerHTML" (marked md-str)))