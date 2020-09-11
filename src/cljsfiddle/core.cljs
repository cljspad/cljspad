(ns cljsfiddle.core
  (:require [cljs.core.async :as async :refer-macros [go]]
            [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle]
            [cljs.reader :as reader]
            [cljsfiddle.effects :as effects]
            [cljsfiddle.env.core :as env]
            [cljsfiddle.env.packages :as packages]
            ["codemirror" :as CodeMirror]
            ["react" :as react]
            ["react-dom" :as react-dom])
  (:import (goog History)))

(defn system []
  {:compiler-state (env/state)
   :history        (History.)
   :db             (atom {:loading? true
                          :error?   false
                          :source   ""
                          :packages {}})})

(defn code-mirror-on-change [compiler-state x _]
  (let [s (.getValue x)]
    (try
      (let [form (reader/read-string s)]
        (env/eval! compiler-state form))
      (catch :default e (prn e)))))

(defui code-editor [{:keys [compiler-state db]} _]
  (let [container (react/useRef)
        [source _] (rehook/use-atom-path db [:source])]

    (js/console.log "Source..." source)

    (rehook/use-effect
     (fn []
       (let [dom         (aget container "current")
             opts        #js {:mode  "clojure"
                              :value "Hello world"}
             code-mirror (CodeMirror/fromTextArea dom opts)]
         (.on code-mirror "change" (partial code-mirror-on-change compiler-state))
         (.setValue code-mirror source)
         (fn []
           (.toTextArea code-mirror))))
     [source])

    [:div {:style {:width "100%" :height "100%"}}
     [:textarea {:ref      container
                 :value    ""
                 :onChange (constantly nil)}]]))

(defui package [{:keys [db]} {:keys [id]}]
  (let [[checked? set-checked] (rehook/use-atom-path db [:packages id])]
    [:div {:key (str "package-" (name id))}
     [:input {:type     "checkbox"
              :checked  (boolean checked?)
              :onChange #(set-checked true)}]
     [:label (name id)]]))

(defui env-meta [{:keys [compiler-state]} _]
  (let [[st _] (rehook/use-atom-path compiler-state [:cljs.analyzer/namespaces])]
    [:code (pr-str (keys st))]))

(defui app [_ _]
  [:div {:style {:display     "flex"}}
   [:div {:style {:width "200px"
                  :padding "5px"
                  :height "100vh"
                  :borderRight "1px solid #ccc"}}
    [:h3 "Env"]
    [env-meta]
    [:h3 "Packages"]
    (for [[k _] (sort (methods packages/load-package))]
      [package {:id k}])]

   [code-editor]])

(defui dominant-component [{:keys [db]} _]
  (let [[loading? _] (rehook/use-atom-path db [:loading?])
        [error _] (rehook/use-atom-path db [:error])]
    (cond
      loading? [:div "loading"]
      error    [:div (str error)]
      :else    [app])))

(defui root-component [_ _]
  [:<>
   [effects/compiler]
   [effects/package]
   [effects/history]
   [dominant-component]])

(defonce state
  (system))

(defn ^:dev/after-load render []
  (react-dom/render
   (dom.browser/bootstrap state identity clj->js root-component)
   (js/document.getElementById "app")))

(defn main []
  (render))