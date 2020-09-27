(ns cljsfiddle.manifest
  (:require [clojure.spec.alpha :as s]
            #?(:clj [expound.alpha :as expound])
            #?(:clj [clojure.edn :as edn])))

(s/def :sandbox/version string?)
(s/def :clojurescript/version string?)

(s/def :sandbox.library/name string?)
(s/def :sandbox.library/type #{:cljs :js})
(s/def :sandbox.library/coord (s/tuple symbol? string?))
(s/def :sandbox.library/doc string?)
(s/def :sandbox.library/url string?)
(s/def :sandbox.library/render-fn symbol?)
(s/def :sandbox.library/require (s/coll-of (s/coll-of (s/tuple symbol?))))

(s/def :sandbox.library.example/name string?)
(s/def :sandbox.library.example/gist-id string?)

(s/def :sandbox.library/example
  (s/keys :req-un [:sandbox.library.example/name
                   :sandbox.library.example/gist-id]))

(s/def :sandbox.library/examples
  (s/coll-of :sandbox.library/example))

(s/def :sandbox/library
  (s/keys :req-un [:sandbox.library/name
                   :sandbox.library/type
                   :sandbox.library/coord
                   :sandbox.library/require]
          :opt-un [:sandbox.library/doc
                   :sandbox.library/url
                   :sandbox.library/render-fn
                   :sandbox.library/examples]))

(s/def :sandbox/libraries
  (s/coll-of :sandbox/library))

(s/def ::manifest
  (s/keys :req [:sandbox/version
                :clojurescript/version
                :sandbox/libraries]))

#?(:clj
   (defn -main [& _]
     (let [manifest (edn/read-string (slurp "resources/public/cljsfiddle.manifest.edn"))]
       (if (s/valid? ::manifest manifest)
         (System/exit 0)
         (do (expound/expound ::manifest manifest)
             (System/exit 1))))))