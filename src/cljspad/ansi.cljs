(ns cljspad.ansi
  (:require ["ansi-styles" :as ansi-styles]))

(defn style-str [styles s]
  (reduce
   (fn [s style-name]
     (if-let [style (aget ansi-styles (name style-name))]
       (str (aget style "open") s (aget style "close"))
       s))
   s
   styles))