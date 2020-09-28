(ns cljspad.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [rehook.dom.browser :as dom.browser]
            [cljspad.effects :as effects]
            [cljspad.env :as env]
            [cljspad.repl :as repl]
            [cljspad.editor :as editor]
            [cljspad.logging :as log]
            [cljspad.right-pane :as right-pane]
            [cljspad.embed :as embed]
            ["react-dom" :as react-dom]))

(goog-define version "dev")

(def initial-state
  {:loading?     true
   :version      version
   :manifest     {}
   :source       ""
   :selected-tab :readme})

(defn system [opts]
  (let [compiler-state (env/state)
        db             (atom (assoc initial-state :opts opts))]
    ;; TODO: move this effect into cljspad.effects
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
  [:div.cljspad-left-pane
   [:div {:style {:display       "flex"
                  :flexDirection "column"}}
    [editor/editor {:height "calc(100vH - 250px)"}]
    [repl/repl {:height "200px"}]]])

(defui right-pane [_ _]
  [:div.cljspad-right-pane
   [right-pane/right-pane-tabs]
   [right-pane/readme]
   [right-pane/libraries]
   [right-pane/export]
   [right-pane/sandbox]])

(defui app [_ _]
  [:div.cljspad-container
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
        [embed? _] (rehook/use-atom-path db [:opts :embed])]
    (cond
      loading? [loading]
      embed? [embed]
      :else [app])))

(defui root-component [_ _]
  [:<>
   [effects/default-embed-tab]
   [effects/monaco-ref]
   [effects/gist]
   [effects/gitlab-snippet]
   [effects/highlight]
   [effects/logging]
   [effects/manifest]
   [dominant-component]])

(defonce app-state nil)

(defn ^:dev/after-load render []
  (react-dom/render
   (dom.browser/bootstrap app-state identity clj->js root-component)
   (js/document.getElementById "app")))

(defn ^:export main [opts]
  (let [opts (js->clj opts :keywordize-keys true)
        sys  (system opts)]
    (set! app-state sys)
    (render)))