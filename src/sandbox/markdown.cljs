(ns sandbox.markdown
  (:require ["marked" :as marked]))

(defn render [md-str]
  (aset (js/__cljspad_sandbox) "innerHTML" (marked md-str)))