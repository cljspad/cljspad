(ns cljspad.effects
  "Global effects"
  (:require [rehook.dom :refer-macros [defui]]
            [rehook.core :as rehook]
            [clojure.string :as str]
            [cljs.tools.reader.edn :as edn]
            [cljspad.logging :as log]
            [cljspad.env :as env]
            [cljspad.util :as util]
            ["highlight.js" :as hljs]
            ["marked" :as marked]))

(defui manifest [{:keys [db]} _]
  (let [[version _] (rehook/use-atom-path db [:version])]
    (rehook/use-effect
     (fn []
       (-> (js/fetch (str "/sandbox/" version "/cljspad.manifest.edn"))
           (.then #(.text %))
           (.then #(edn/read-string %))
           (.then #(swap! db assoc-in [:manifest version] %))
           (.catch #(js/console.log "Could not load manifest" %)))
       (constantly nil))
     [version])))

(defui highlight [_ _]
  (rehook/use-effect
   (fn []
     (hljs/initHighlightingOnLoad)
     (.setOptions marked #js {:highlight (fn [code lang]
                                           (when-not (str/blank? lang)
                                             (aget (hljs/highlight lang code) "value")))})
     (constantly nil))
   []))

(defui logging [_ _]
  (rehook/use-effect
   (fn []
     (log/init!)
     enable-console-print!)
   []))

(defn load-gist
  [db compiler-state id]
  (-> (js/fetch (str "/api/v1/gist/" id))
      (.then (fn [resp]
               (if (aget resp "ok")
                 (.text resp)
                 (prn (str "Failed to load gist " id ". Server responded with " (aget resp "status"))))))
      (.then (fn [source]
               (when source
                 (swap! db assoc :source source)
                 (env/eval-form compiler-state source))))
      (.catch (fn [err]
                (prn err)))))

(defn load-snippet
  [db compiler-state id]
  (-> (js/fetch (str "/api/v1/gitlab/" id))
      (.then (fn [resp]
               (if (aget resp "ok")
                 (.text resp)
                 (prn (str "Failed to load snippet " id ". Server responded with " (aget resp "status"))))))
      (.then (fn [source]
               (when source
                 (swap! db assoc :source source)
                 (env/eval-form compiler-state source))))
      (.catch (fn [err]
                (prn err)))))

(defui gist [{:keys [db compiler-state]} _]
  (let [[gist-id _] (rehook/use-atom-path db [:opts :gist_id])
        [sandbox-ready? _] (rehook/use-atom-path db [:sandbox/ready?])]
    (rehook/use-effect
     (fn []
       (when (and gist-id sandbox-ready?)
         (load-gist db compiler-state gist-id))
       (constantly nil))
     [(str gist-id) sandbox-ready?])))

(defui gitlab-snippet [{:keys [db compiler-state]} _]
  (let [[snippet-id _] (rehook/use-atom-path db [:opts :snippet_id])
        [sandbox-ready? _] (rehook/use-atom-path db [:sandbox/ready?])]
    (rehook/use-effect
     (fn []
       (when (and snippet-id sandbox-ready?)
         (load-snippet db compiler-state snippet-id))
       (constantly nil))
     [(str snippet-id) sandbox-ready?])))

(defui default-embed-tab
  [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:opts :selected_tab])
        [embed? _] (rehook/use-atom-path db [:opts :embed])]
    (rehook/use-effect
     (fn []
       (when embed?
         (swap! db assoc :selected-tab (keyword (or selected-tab "editor"))))

       (constantly nil))
     [embed? (str selected-tab)])))

(defui load-share-code
  [{:keys [db compiler-state]} _]
  (let [[code _] (rehook/use-atom-path db [:opts :share_code])
        [sandbox-ready? _] (rehook/use-atom-path db [:sandbox/ready?])]
    (rehook/use-effect
     (fn []
       (when (and sandbox-ready? code)
         (try
           (let [value (util/inflate-str code)]
             (swap! db assoc :source value)
             (env/eval-form compiler-state value))
           (catch :default e
             (prn "Error: unable to load share code. Check browser console for stacktrace")
             (js/console.error e))))
       (constantly nil))
     [code sandbox-ready?])))

(defui depstrap
  [{:keys [db compiler-state]} _]
  (let [[version _]  (rehook/use-atom-path db [:version])
        [manifest _] (rehook/use-atom-path db [:manifest version])]
    (rehook/use-effect
     (fn []
       (when manifest
         (env/init compiler-state manifest #(swap! db assoc :loading? false)))
       (constantly nil))
     [(pr-str manifest)])))