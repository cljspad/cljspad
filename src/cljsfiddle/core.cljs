(ns cljsfiddle.core
  (:require [cljs.core.async :as async :refer-macros [go]]
            [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle]
            [cljs.reader :as reader]
            [cljsfiddle.env.core :as env]
            ["codemirror" :as CodeMirror]
            ["react" :as react]
            ["react-dom" :as react-dom]))

(defn system []
  {:compiler-state (env/state)
   :db             (atom {:loading? true :error? false})})

(defn code-mirror-on-change [compiler-state x _]
  (let [s (.getValue x)]
    (prn "update")
    (try
      (let [form (reader/read-string s)]
        (env/eval! compiler-state form))
      (catch :default e (prn e)))))

(defui code-editor [{:keys [compiler-state]} _]
  (let [container (react/useRef)]

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
                 :onChange (constantly nil)}]]))

(defui app [_ _]
  [:div {:style {:display "flex"}}
   [code-editor]])

(defui root-component [{:keys [db compiler-state]} _]
  (let [[loading? set-loading] (rehook/use-atom-path db [:loading?])
        [error _] (rehook/use-atom-path db [:error])]

    (rehook/use-effect
     (fn []
       (go
        (async/<! (env/init! compiler-state))
        (set-loading false))
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