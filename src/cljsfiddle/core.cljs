(ns cljsfiddle.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle.effects :as effects]
            [cljsfiddle.env.core :as env]
            [cljsfiddle.repl :as repl]
            [cljsfiddle.editor :as editor]
            [clojure.set :as set]
            ["marked"]
            ["react" :as react]
            ["react-dom" :as react-dom]
            [clojure.string :as str])
  (:import (goog History)))

(goog-define server-endpoint
  "http://localhost:3000")

(def initial-state
  {:loading?        false
   :error?          false
   :version         "1.0.0"
   :server-endpoint server-endpoint
   :manifest        {}
   :source          ""})

(defn system []
  {:compiler-state (env/state)
   :history        (History.)
   :db             (atom initial-state)})

(defui env-meta [{:keys [compiler-state]} _]
  (let [[st _] (rehook/use-atom-path compiler-state [:cljs.analyzer/namespaces])]
    [:code (pr-str (keys st))]))

(defui loading [{:keys [compiler-state]} _]
  (let [[st _] (rehook/use-atom-fn
                compiler-state
                (fn [x]
                  (into #{} (map first) (:cljs.analyzer/namespaces x)))
                (constantly nil))
        [n set-n] (rehook/use-state #{})]

    (rehook/use-effect
     (fn []
       (let [timeout (js/setTimeout
                      #(set-n (set/union st n))
                      200)]
         (fn []
           (js/clearTimeout timeout))))
     [(pr-str st)])

    (when-let [ns (first (set/difference st n))]
      [:span {} "Loading: "
       [:strong {} (str ns)]])))

(defui available-packages [_ {:keys [manifest]}]
  (let [[expanded set-expanded] (rehook/use-state #{})]
    [:div
     (for [package (sort-by :name (:packages manifest))]
       [:div {:key (str "package-" (:name package))}
        [:div
         [:div.cljsfiddle-action
          {:onClick #(if (expanded (:name package))
                       (set-expanded (disj expanded (:name package)))
                       (set-expanded (conj expanded (:name package))))}
          [:span (:name package) " (" (-> package :type name) ")"]]
         (when (expanded (:name package))
           [:div {:style {:marginTop     "5px"
                          :marginBottom  "5px"
                          :paddingLeft   "5px"
                          :paddingRight  "5px"
                          :paddingTop    "10px"
                          :paddingBottom "10px"
                          :border        "1px solid #ccc"
                          :borderRadius  "4px"}}
            [:div (if-let [coord (:coord package)]
                    [:code.cljsfiddle-code (pr-str coord)]
                    [:code.cljsfiddle-code (:name package)])]

            [:p (:doc package)]

            (when-let [website (:url package)]
              [:p [:a {:href website :target "_blank"}
                   "Website"]])

            (when-let [render-fn (:render-fn package)]
              [:div [:span "Render fn: " [:code.cljsfiddle-code (str render-fn)]]])

            [:div {:style {:marginBottom "10px"}}
             [:p "Requires:"]
             (for [r (:require package)]
               [:p [:code.cljsfiddle-code (pr-str r)]])]

            [:button {} "Load package"]])]])]))

(defui manifest [{:keys [db]} _]
  (let [[version _]  (rehook/use-atom-path db [:version])
        [manifest _] (rehook/use-atom-path db [:manifest version])]
    [:div
     [:h3 "Sandbox"]
     [:div [:span "Version: " [:strong version]]]
     [:div [:span "Cljs version: " [:strong (:clojurescript/version manifest)]]]
     [:div [loading]]
     [:h3 "Available Packages"]
     [available-packages {:manifest manifest}]]))

(defui app [_ _]
  [:div {:style {:display "flex"
                 :width   "100%"}}
   [:div {:style {:width       "250px"
                  :maxWidth    "250px"
                  :minWidth    "250px"
                  :padding     "5px"
                  :height      "calc(100vh - 51px)"
                  :borderRight "1px solid #ccc"}}
    [manifest]]

   [:div {:style {:flex 1}}
    [:div {:style {:display       "flex"
                   :flexDirection "column"}}
     [editor/editor]
     [repl/repl]]]])

(defui dominant-component [{:keys [db]} _]
  (let [[loading? _] (rehook/use-atom-path db [:loading?])
        [error _] (rehook/use-atom-path db [:error])]
    (cond
      loading? [loading]
      error    [:div (str error)]
      :else    [app])))

(defui root-component [_ _]
  [:<>
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