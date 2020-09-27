(ns sandbox.markdown
  (:require ["marked" :as marked]))

(defn render [md-str]
  (aset (js/__cljsfiddle_sandbox) "innerHTML" (marked md-str)))