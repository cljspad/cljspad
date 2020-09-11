(ns cljsfiddle.gist
  (:require [cljs.core.async :as async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [clojure.string :as str]
            [cljs.tools.reader :as reader]
            [cljs.tools.reader.edn :as edn]))

(goog-define client-id "aeba21b955ff07ac6ce4")
(goog-define client-secret "ea122e0f2a247968c853d90eb5654686224abde6")

(def headers
  (doto (js/Headers.)
    (.set "Authorization" (str "Basic " (js/btoa (str client-id ":" client-secret))))))

(defn get-gist [id]
  (go (<p! (-> (js/fetch (str "https://api.github.com/gists/" id) #js {:headers headers})
               (.then #(.text %))
               (.then #(js->clj (js/JSON.parse %) :keywordize-keys true))))))

(defn get-gist-file [file]
  (go (<p! (-> (js/fetch (str file))
               (.then #(.text %))))))

(defn load-gist [id]
  (go (let [resp         (async/<! (get-gist id))
            metadata-url (get-in resp [:files :cljsfiddle.edn :raw_url])
            source-url   (some (fn [[k {:keys [raw_url]}]]
                                 (when (str/ends-with? (name k) ".cljs")
                                   raw_url))
                               (:files resp))
            err-ctx      (fn [error-id]
                           {:id           id
                            :resp         resp
                            :metadata-url metadata-url
                            :source-url   source-url
                            :error        error-id})]
        (cond
          (nil? resp)
          {:success? false
           :ex       (ex-info "gist not found" (err-ctx :gist-not-found))}

          (nil? metadata-url)
          {:success? false
           :ex       (ex-info "gist not found" (err-ctx :cljsfiddle-edn-not-found))}

          (nil? source-url)
          {:success? false
           :ex       (ex-info "gist not found" (err-ctx :no-cljs-file-found))}

          :else
          (let [metadata-str (async/<! (get-gist-file metadata-url))
                source-str   (async/<! (get-gist-file source-url))]
            (if-let [metadata (try (edn/read-string metadata-str)
                                   (catch :default _ nil))]
              {:metadata metadata
               :source   source-str
               :success? true}

              {:success? false
               :ex       (ex-info "gist not found" (err-ctx :malformed-cljsfiddle-edn))}))))))