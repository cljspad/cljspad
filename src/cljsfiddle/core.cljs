(ns cljsfiddle.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle.effects :as effects]
            [cljsfiddle.env.core :as env]
            [cljsfiddle.repl :as repl]
            [cljsfiddle.editor :as editor]
            [clojure.set :as set]
            [cljs.core.async :as async :refer-macros [go]]
            ["react" :as react]
            ["react-dom" :as react-dom]
            [clojure.string :as str]
            [cljsfiddle.sandbox])
  (:import (goog History)))

(goog-define version "dev")

(def initial-state
  {:loading? false
   :error?   false
   :version  version
   :manifest {}
   :source   ""})

(defn system []
  {:compiler-state (env/state)
   :history        (History.)
   :db             (atom initial-state)})

(defui env-meta [{:keys [compiler-state]} _]
  (let [[st _] (rehook/use-atom-path compiler-state [:cljs.analyzer/namespaces])]
    [:code (pr-str (keys st))]))

(defn loaded-namespaces [x]
  (into #{} (map first) (:cljs.analyzer/namespaces x)))

(defui loading [{:keys [compiler-state]} _]
  (let [[st _]    (rehook/use-atom-fn compiler-state loaded-namespaces (constantly nil))
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

(defn load-package [compiler-state version package]
  (go (doseq [r (:require package)]
        (let [s (str "(require '" (pr-str r) ")")]
          (async/<! (env/eval! compiler-state version s))))))

(defui package-meta
  [{:keys [compiler-state db]} {:keys [package available?]}]
  (let [[expanded set-expanded] (rehook/use-state false)
        [version _]             (rehook/use-atom-path db [:version])]
    [:div
     [:div.cljsfiddle-action
      {:onClick #(set-expanded (not expanded))}
      [:span (:name package) " (" (-> package :type name) ")"]]
     (when expanded
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

        (when available?
          [:button {:onClick #(load-package compiler-state version package)}
           "Load package"])])]))

(defui available-packages
  [{:keys [compiler-state]} {:keys [manifest]}]
  (let [[nses _]           (rehook/use-atom-fn compiler-state loaded-namespaces (constantly nil))
        available-packages (filter (fn [package]
                                     (every? (comp (complement nses) first) (:require package)))
                                   (:packages manifest))]
    [:div
     (for [package (sort-by :name available-packages)]
       [:div {:key (str "available-package-" (:name package))}
        [package-meta {:package package :available? true}]])]))

(defui loaded-packages
  [{:keys [compiler-state]} {:keys [manifest]}]
  (let [[nses _]           (rehook/use-atom-fn compiler-state loaded-namespaces (constantly nil))
        available-packages (filter (fn [package]
                                     (every? (comp nses first) (:require package)))
                                   (:packages manifest))]
    [:div
     (for [package (sort-by :name available-packages)]
       [:div {:key (str "loaded-package-" (:name package))}
        [package-meta {:package package :available? false}]])]))

(defui manifest [{:keys [db]} _]
  (let [[version _]  (rehook/use-atom-path db [:version])
        [manifest _] (rehook/use-atom-path db [:manifest version])]
    [:div
     [:h3 "Sandbox"]
     [:div [:span "Version: " [:strong version]]]
     [:div [:span "Cljs version: " [:strong (:clojurescript/version manifest)]]]
     [:div [loading]]
     [:h3 "Loaded Packages"]
     [loaded-packages {:manifest manifest}]
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

(main)