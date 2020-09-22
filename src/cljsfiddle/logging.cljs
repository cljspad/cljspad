(ns cljsfiddle.logging
  (:require [cljs.core.async :as async]))

(defonce stderr
  (async/chan))

(defonce stdout
  (async/chan))

(defn init! []
  (set! *print-newline* false)

  (set-print-fn!
   (fn [& args]
     (async/put! stdout args)))

  (set-print-err-fn!
   (fn [& args]
     (async/put! stderr args))))