(ns cljsfiddle.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle.effects :as effects]
            [cljsfiddle.env.core :as env]
            [cljsfiddle.repl :as repl]
            [cljsfiddle.editor :as editor]
            [cljs.js :as cljs]
            [clojure.set :as set]
            ["react" :as react]
            ["react-dom" :as react-dom]
            [clojure.string :as str])
  (:import (goog History)))

(goog-define server-endpoint
  "http://localhost:3000")

(defn system []
  {:compiler-state (env/state)
   :history        (History.)
   :db             (atom {:loading?        true
                          :error?          false
                          :version         "1.0.0"
                          :server-endpoint server-endpoint
                          :source          ""})})

(defui env-meta [{:keys [compiler-state]} _]
  (let [[st _] (rehook/use-atom-path compiler-state [:cljs.analyzer/namespaces])]
    [:code (pr-str (keys st))]))

(defui app [_ _]
  [:div {:style {:display     "flex"}}
   [:div {:style {:width "200px"
                  :padding "5px"
                  :height "calc(100vh - 51px)"
                  :borderRight "1px solid #ccc"}}
    [:h3 "Packages"]]

   [:div {:style {:display "flex"
                  :flexDirection "column"
                  :width "100%"}}
    [editor/editor]
    [repl/repl]]])

(defui loading [{:keys [compiler-state]} _]
  (let [[st _] (rehook/use-atom-fn
                compiler-state
                (fn [x]
                  (into #{} (map first) (:cljs.analyzer/namespaces x)))
                (constantly nil))
        [n set-n] (rehook/use-state #{})]

    (rehook/use-effect
     (fn []
       (set-n (set/union st n))
       (constantly nil))
     [(pr-str st)])
    [:div {:style {:display        "flex"
                   :height         "calc(100vh - 51px)"
                   :width          "100%"
                   :justifyContent "center"}}

     [:strong {:style {:fontSize "20px"}}
      (str "Loading... " (first (set/difference st n)))]]))

(defui dominant-component [{:keys [db]} _]
  (let [[loading? _] (rehook/use-atom-path db [:loading?])
        [error _] (rehook/use-atom-path db [:error])]
    (cond
      loading? [loading]
      error    [:div (str error)]
      :else    [app])))

(defui root-component [_ _]
  [:<>
   [effects/compiler]
   [effects/history]
   [effects/manifest]
   [dominant-component]])

(defonce state
  (system))

(defn ^:dev/after-load render []
  (react-dom/render
   (dom.browser/bootstrap state identity clj->js root-component)
   (js/document.getElementById "app")))

(defn main []
  (render))

(render)

(comment
 (cljs/eval-str (:compiler-state state) "(+ 1 2)" nil {:eval cljs/js-eval} prn)
 (prn "foobar"))