(ns cljsfiddle.effects
  "Global effects"
  (:require [rehook.dom :refer-macros [defui]]
            [rehook.core :as rehook]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.tools.reader.edn :as edn]
            ["highlight.js" :as hljs]
            ["marked" :as marked]
            ["react" :as react]
            [cljsfiddle.logging :as log]))

(defui manifest [{:keys [db]} _]
  (let [[version _] (rehook/use-atom-path db [:version])]
    (rehook/use-effect
     (fn []
       (-> (js/fetch (str "/sandbox/" version "/cljsfiddle.manifest.edn"))
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
                                           (aget (hljs/highlight lang code) "value"))})
     (constantly nil))
   []))

(defui logging [_ _]
  (rehook/use-effect
   (fn []
     (log/init!)
     (fn []
       (enable-console-print!)))
   []))

(defn load-gist
  [db id]
  (-> (js/fetch (str "/api/v1/gist/" id))
      (.then (fn [resp]
               (if (aget resp "ok")
                 (.text resp)
                 (prn (str "Failed to load gist " id ". Server responded with " (aget resp "status"))))))
      (.then (fn [source]
               (swap! db assoc :source source)))
      (.catch (fn [err]
                (prn err)))))

(defui gist [{:keys [db]} _]
  (let [[gist-id _] (rehook/use-atom-path db [:opts :gist_id])]
    (rehook/use-effect
     (fn []
       (when gist-id
         (load-gist db gist-id))
       (constantly nil))
     [(str gist-id)])))

;; monaco has to be global to support auxiliary functionality (copy to clipboard, eval gist on load)
(defui monaco-ref
  [{:keys [monaco]} _]
  (let [ref (react/useRef)]
    (rehook/use-effect
     (fn []
       (reset! monaco ref)
       (fn []
         (reset! monaco nil))))))

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