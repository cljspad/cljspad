(ns cljsfiddle.env.core
  (:require [cljs.core.async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.js :as cljs.js]
            [cognitect.transit :as transit]
            [clojure.string :as str]))

(defn state []
  (cljs.js/empty-state))

(defn load-ns!
  ([compiler-state sym]
   (load-ns! compiler-state sym (constantly nil)))

  ([compiler-state sym cb]
   (let [path (str "cache/builds/app/dev/ana/" (str/replace (name sym) "." "/") ".cljs.cache.transit.json")]
     (-> (js/fetch path)
         (.then (fn [response]
                  (.text response)))
         (.then (fn [body]
                  (let [rdr   (transit/reader :json)
                        cache (transit/read rdr body)]
                    (cljs.js/load-analysis-cache! compiler-state sym cache)
                    (cb compiler-state sym cache))))))))

(defn eval!
  [compiler-state form]
  (js/Promise. (fn [respond]
                 (cljs.js/eval compiler-state form {:eval cljs.js/js-eval} respond))))

(defn init!
  [compiler-state]
  (go (<p! (load-ns! compiler-state 'cljs.core))
      (<p! (load-ns! compiler-state 'cljsfiddle))
      (<p! (eval! compiler-state '(cljsfiddle/reagent-render! [:div "Hello from a bootstrapped world!"])))))