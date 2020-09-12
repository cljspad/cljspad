(ns cljsfiddle.env.core
  (:require [cljs.core.async :as async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.js :as cljs.js]
            [cljs.tools.reader.edn :as edn]
            [cognitect.transit :as transit]))

(defn state []
  (cljs.js/empty-state))

(defn load-cache [opts]
  (js/Request. "http://localhost:3000"
               (clj->js {:method "POST"
                         :body   (pr-str {:sandbox/version "1"
                                          :request         :env/load
                                          :opts            opts})})))

(defn http-req [req]
  (go (<p! (-> (js/fetch req)
               (.then (fn [response]
                        (when (.-ok response)
                          (.text response))))))))

(def load-ns!
  (constantly nil))

(defn loader [ctx cb]
  (go (let [resp (async/<! (http-req (load-cache ctx)))]
        (if-let [resp (some-> resp edn/read-string)]
          (cb (update resp
                      :cache (fn [c]
                               (when c
                                 (let [rdr (transit/reader :json)]
                                   (transit/read rdr c))))))
          (cb nil)))))

(def eval-opts
  {:eval cljs.js/js-eval
   :load loader})

(defn eval!
  [compiler-state form]
  (go (<p! (js/Promise. #(cljs.js/eval-str compiler-state form nil eval-opts %)))))

(defn init!
  [compiler-state]
  (go (async/<! (eval! compiler-state "(require '[cljsfiddle :as cljsfiddle])"))))

(defn restart-env!
  [{:keys [compiler-state]} {:keys [metadata source]}]
  (go #_(reset! compiler-state (deref (state)))
      (async/<! (init! compiler-state))
      (async/<! (eval! compiler-state source))))