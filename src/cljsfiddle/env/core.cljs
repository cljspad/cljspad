(ns cljsfiddle.env.core
  (:require [cljs.core.async :as async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.js :as cljs.js]
            [cljs.tools.reader.edn :as edn]
            [cognitect.transit :as transit]))

(defn state []
  (cljs.js/empty-state))

(defn load-cache [sandbox-version opts]
  (js/Request. "http://localhost:3000"
               (clj->js {:method "POST"
                         :body   (pr-str {:sandbox/version sandbox-version
                                          :request         :env/load
                                          :opts            opts})})))

(defn http-req [req]
  (go (<p! (-> (js/fetch req)
               (.then (fn [response]
                        (when (.-ok response)
                          (.text response))))))))

(defn loader [sandbox-version ctx cb]
  (go (let [resp (async/<! (http-req (load-cache sandbox-version ctx)))]
        (if-let [resp (some-> resp edn/read-string)]
          (cb (update resp
                      :cache (fn [c]
                               (when c
                                 (let [rdr (transit/reader :json)]
                                   (transit/read rdr c))))))
          (cb nil)))))

(defn eval-opts [sandbox-version]
  {:eval cljs.js/js-eval
   :load (partial loader sandbox-version)})

(defn eval!
  [compiler-state sandbox-version form]
  (go (<p! (js/Promise. #(cljs.js/eval-str compiler-state form nil (eval-opts sandbox-version) %)))))

(defn init!
  [compiler-state sandbox-version]
  #_(go (async/<! (eval! compiler-state "(require '[cljsfiddle :as cljsfiddle])")))
  (go nil))

(defn restart-env!
  [{:keys [compiler-state]} sandbox-version {:keys [metadata source]}]
  (go #_(reset! compiler-state (deref (state)))
      (async/<! (init! compiler-state sandbox-version))
      (async/<! (eval! compiler-state sandbox-version source))))