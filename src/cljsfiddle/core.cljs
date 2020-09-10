(ns cljsfiddle.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljs.js :as cljs.js]
            [goog.net.XhrIo :as xhr]
            [helpers]
            [cognitect.transit :as transit]
            [cljs.reader :as reader]
            ["react" :as react]
            ["react-dom" :as react-dom]))

(defn GET [path cb]
  #_(xhr/send path
            (fn [resp]
              (cb (-> resp .-target .getResponseText)))))

(defn load-cache [cstate db]
  #_(let [path "cache/builds/app/dev/ana/helpers.cljs.cache.transit.json"]
    (GET path (fn [source-map]
                (try
                  (let [rdr   (transit/reader :json)
                        cache (transit/read rdr source-map)]
                    (prn cache)
                    (cljs/load-analysis-cache! cstate 'helpers cache)
                    (swap! db assoc :loading? false))
                  (catch :default e
                    (prn e)
                    (swap! db assoc :error e :loading? false)))))))

(defn system []
  {:compiler-state (cljs.js/empty-state)
   :db             (atom {:loading? true :error? false})})

(defn code-mirror-on-change [compiler-state x _]
  (let [s (.getValue x)]
    (prn @compiler-state)
    (cljs.js/eval compiler-state
                  '(pprint 1)
                  {:eval js/eval :context :expr}
                  prn)))

(defui code-editor [{:keys [compiler-state]} _]
  #_(let [container (react/useRef)]
    (rehook/use-effect
     (fn []
       (let [dom         (aget container "current")
             opts        #js {:mode  "clojure"
                              :value "Hello world"}
             code-mirror (CodeMirror/fromTextArea dom opts)]
         (.on code-mirror "change" (partial code-mirror-on-change compiler-state))
         (fn []
           (.toTextArea code-mirror))))
     [])
    [:div {:style {:width "50%" :height "100%"}}
     [:textarea {:ref      container
                 :value    "(inc 1)"
                 :onChange (constantly nil)}]])

  [:div "foo"])

(defui app [_ _]
  [:div {:style {:display "flex"}}
   [code-editor]
   [:div "Right hand pane"]])

(defui root-component [{:keys [db compiler-state]} _]
  (let [[loading? _] (rehook/use-atom-path db [:loading?])
        [error _] (rehook/use-atom-path db [:error])]

    (rehook/use-effect
     (fn []
       (load-cache compiler-state db)
       (constantly nil))
     [])

    (cond
      loading? [:div "loading"]
      error [:div (str error)]
      :else [app])))

(defonce state
  (system))

(defn ^:dev/after-load render []
  (react-dom/render
   (dom.browser/bootstrap state identity clj->js root-component)
   (js/document.getElementById "app")))

(defn main []
  (render))