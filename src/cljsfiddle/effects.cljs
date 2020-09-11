(ns cljsfiddle.effects
  "Root effects"
  (:require [rehook.dom :refer-macros [defui]]
            [rehook.core :as rehook]
            [cljs.core.async :as async :refer-macros [go]]
            [cljsfiddle.env.packages :as packages]
            [goog.events :as ev]
            [cljsfiddle.env.core :as env]
            [cljsfiddle.gist :as gist]
            [clojure.string :as str]))

(defui package
  [{:keys [compiler-state db]} _]
  (let [[packages _] (rehook/use-atom-path db [:packages])]
    (rehook/use-effect
     (fn []
       (doseq [[package enabled?] packages
               :when enabled?]
         (prn "Load " (pr-str package))
         (packages/load-package {:compiler-state compiler-state} package))
       (constantly nil))
     [(pr-str packages)])))

(defn load-gist [{:keys [db] :as ctx} id]
  (go
   (swap! db assoc :loading? true)
   (let [result (async/<! (gist/load-gist id))]
     (if (:success? result)
       (do (async/<! (env/restart-env! ctx result))
           (swap! db assoc :loading? false :source (:source result)))
       (swap! db assoc :error (:ex result) :loading? false)))))

(defn nav-callback
  [ctx ev]
  (let [token (aget ev "token")
        [_ type id] (str/split token #"/")]
    (case type
      "gist" (load-gist ctx id)
      (js/console.log "Unknown type " type))))

(defui history [{:keys [history] :as ctx} _]
  (rehook/use-effect
   (fn []
     (let [ev (ev/listen history "navigate" (partial nav-callback ctx))]
       (.setEnabled history true)
       (fn []
         (.setEnabled history false)
         (ev/unlistenByKey ev))))
   []))

(defui compiler [{:keys [compiler-state db]} _]
  (rehook/use-effect
   (fn []
     (go
      (async/<! (env/init! compiler-state))
      (swap! db assoc :loading? false))
     (constantly nil))
   []))