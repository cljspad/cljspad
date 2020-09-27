(ns cljsfiddle.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle.effects :as effects]
            [cljsfiddle.env :as env]
            [cljsfiddle.repl :as repl]
            [cljsfiddle.editor :as editor]
            [cljsfiddle.logging :as log]
            [cljsfiddle.right-pane :as right-pane]
            [cljsfiddle.embed :as embed]
            ["react-dom" :as react-dom]))

(goog-define version "dev")

(def initial-state
  {:loading?     true
   :error?       false
   :version      version
   :manifest     {}
   :source       ""
   :selected-tab :readme})

(defn system [opts]
  (let [compiler-state (env/state)
        db             (atom (assoc initial-state :opts opts))]
    ;; TODO: move this effect into cljsfiddle.effects
    (env/init compiler-state version #(swap! db assoc :loading? false))
    {:compiler-state compiler-state
     :console        {:stdout log/stdout
                      :stderr log/stderr}
     :monaco         (atom nil)
     :db             db}))

(defui loading [_ _]
  ;; TODO: better loading state
  [:div "Loading..."])

(defui left-pane [_ _]
  [:div.cljsfiddle-left-pane
   [:div {:style {:display       "flex"
                  :flexDirection "column"}}
    [editor/editor {:height "calc(100vH - 250px)"}]
    [repl/repl {:height "200px"}]]])

(defui right-pane [_ _]
  [:div.cljsfiddle-right-pane
   [right-pane/right-pane-tabs]
   [right-pane/readme]
   [right-pane/packages]
   [right-pane/export]
   [right-pane/sandbox]])

(defui app [_ _]
  [:div.cljsfiddle-container
   [left-pane]
   [right-pane]])

(defui embed [_ _]
  [:<>
   [embed/tabs]
   [embed/editor]
   [embed/repl]
   [right-pane/sandbox]])

(defui dominant-component [{:keys [db]} _]
  (let [[loading? _] (rehook/use-atom-path db [:loading?])
        [error _] (rehook/use-atom-path db [:error])
        [embed? _] (rehook/use-atom-path db [:opts :embed])]
    (cond
      loading? [loading]
      error [:div (str error)]
      embed? [embed]
      :else [app])))

(defui root-component [_ _]
  [:<>
   [effects/default-embed-tab]
   [effects/monaco-ref]
   [effects/gist]
   [effects/highlight]
   [effects/logging]
   [effects/manifest]
   [dominant-component]])

(defonce app-state
  (atom nil))

(defn ^:dev/after-load render []
  (react-dom/render
   (dom.browser/bootstrap @app-state identity clj->js root-component)
   (js/document.getElementById "app")))

(defn ^:export main [opts]
  (let [opts (js->clj opts :keywordize-keys true)
        sys  (system opts)]
    (reset! app-state sys)
    (render)))