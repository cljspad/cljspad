(ns cljspad.util
  (:require ["ansi-styles" :as ansi-styles]
            ["pako" :as pako]))

(defn deflate-str [s]
  (js/btoa (pako/deflate s #js {:to "string"})))

(defn inflate-str [s]
  (pako/inflate (js/atob s) #js {:to "string"}))

(defn ansi-style [styles s]
  (reduce
   (fn [s style-name]
     (if-let [style (aget ansi-styles (name style-name))]
       (str (aget style "open") s (aget style "close"))
       s))
   s
   styles))