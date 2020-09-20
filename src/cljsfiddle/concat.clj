(ns cljsfiddle.concat
  (:require [com.stuartsierra.dependency :as dep]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clj-polyglot.core :as poly]
            [clj-polyglot.js :as poly.js])
  (:import (java.io File)))

(def js-builder
  (-> (poly.js/default-builder)
      (.allowIO true)
      (.option "js.commonjs-require" "true")))

(defn absolute-path
  [^File f]
  (str (.getAbsoluteFile f)))

(defn eval-deps
  [output-dir]
  (let [src   (slurp (io/resource "concat.js"))
        ctx   (poly.js/js-ctx js-builder src)
        f     (poly.js/from ctx "evalDeps")
        files [(absolute-path (io/file output-dir "goog" "deps.js"))
               (absolute-path (io/file output-dir "cljs_deps.js"))]]
    (poly/deserialize (.execute f (into-array Object (map poly/serialize-arg [files]))))))

(defn dep-lookup
  [bundle]
  (reduce
   (fn [deps-map [dep provides]]
     (into deps-map
           (map (fn [ns]
                  [ns dep]))
           provides))
   {}
   bundle))

(defn deps
  [bundle]
  (let [dep-lookup (dep-lookup bundle)]
    (dep/topo-sort
     (reduce
      (fn [graph [dep _ requires]]
        (reduce
         (fn [graph require]
           (dep/depend graph dep (get dep-lookup require)))
         graph
         requires))
      (dep/graph)
      bundle))))

(defn file-exists?
  [^File file]
  (.exists file))

(defn write-deps!
  [out-file output-dir deps]
  (io/delete-file out-file :silently true)
  (let [deps (->> deps
                  (map #(io/file output-dir "goog" %))
                  (filter file-exists?))]
    (with-open [writer (io/writer out-file :append true)]
      (doseq [dep deps]
        (.write writer (slurp dep))))))

(defn unmangle-index!
  [{:keys [asset-path output-to]} out-file]
  (let [bundle (str asset-path "/" out-file)
        lines  (->> (slurp output-to)
                    (str/split-lines)
                    (remove #(str/starts-with? % "document.write"))
                    (into []))
        js     (->> (conj lines (format "document.write('<script src=\"%s\"></script>');" bundle))
                    (str/join "\n"))]
    (spit output-to js)))

(defn -main
  [build-edn out-file]
  (let [build    (edn/read-string (slurp build-edn))
        output-dir (:output-dir build)]
    (write-deps! (io/file output-dir out-file) output-dir (deps (eval-deps output-dir)))
    (unmangle-index! build out-file)))