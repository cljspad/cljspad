(ns cljsfiddle.env.core
  (:require [cljs.core.async :as async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.js :as cljs.js]
            [clojure.string :as str]
            [cognitect.transit :as transit]))

(defn state []
  (cljs.js/empty-state))

(goog-define cache-root
  "cljs-out/dev/")

(defn sym->classpath [sym]
  (-> sym
      name
      (str/replace "." "/")
      (str/replace "-" "_")))

(defn GET [href]
  (go (<p! (-> (js/fetch href)
               (.then (fn [response]
                        (when (.-ok response)
                          (.text response))))))))

(defn source-path [ns ext]
  (str cache-root (sym->classpath ns) "." (name ext)))

(defn cache-path [ns ext]
  (str cache-root (sym->classpath ns) "." (name ext) ".cache.json"))

(def load-ns!
  (constantly nil))

(defn loader [{:keys [name macros] :as ctx} cb]
  (go (let [source (if macros
                     (or (async/<! (GET (source-path name :clj)))
                         (async/<! (GET (source-path name :cljc))))
                     (or (async/<! (GET (source-path name :cljs)))
                         (async/<! (GET (source-path name :cljc)))
                         (async/<! (GET (source-path name :clj)))))
            cache  (or (async/<! (GET (cache-path name :cljs)))
                       (async/<! (GET (cache-path name :cljc)))
                       (async/<! (GET (cache-path name :clj))))
            rdr    (transit/reader :json)]
        (prn "SOURCE =---= " name (pr-str ctx))
        (if source
          (cb {:lang   :clj
               :source source
               :cache  (when (and false cache)
                         (transit/read rdr cache))})
          (cb {:lang :clj :source (str `('js/require ~(str name)))})))))

(def eval-opts
  {:eval cljs.js/js-eval
   :load loader})

(defn eval!
  [compiler-state form]
  (go (<p! (js/Promise. #(cljs.js/eval-str compiler-state form nil eval-opts %)))))

(defn init!
  [compiler-state]
  (go nil))

(defn restart-env!
  [{:keys [compiler-state]} {:keys [metadata source]}]
  #_(go (reset! compiler-state (deref (state)))
      (async/<! (init! compiler-state))
      (async/<! (eval! compiler-state source)))
  (go nil))