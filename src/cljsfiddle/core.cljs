(ns cljsfiddle.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle.effects :as effects]
            [cljsfiddle.env :as env]
            [cljsfiddle.repl :as repl]
            [cljsfiddle.editor :as editor]
            [clojure.set :as set]
            [cljs.core.async :refer-macros [go]]
            ["react" :as react]
            ["react-dom" :as react-dom]
            ["marked" :as marked]
            [clojure.string :as str]
            [cljsfiddle.logging :as log])
  (:import (goog History)))

(goog-define version "dev")

(def initial-state
  {:loading?     true
   :error?       false
   :version      version
   :manifest     {}
   :source       ""
   :selected-tab :readme})

(defn system []
  (let [compiler-state (env/state)
        db             (atom initial-state)]
    ;; TODO: move this effect into cljsfiddle.effects
    (env/init compiler-state version #(swap! db assoc :loading? false))
    {:compiler-state compiler-state
     :history        (History.)
     :console        {:stdout log/stdout
                      :stderr log/stderr}
     :db             db}))

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

(defui package-meta
  [_ {:keys [package]}]
  (let [[expanded set-expanded] (rehook/use-state false)]
    [:div {:style {:marginBottom "5px"}}

     [:div.button
      {:onClick #(set-expanded (not expanded))
       :style {:width "300px"}}
      [:span (:name package) " (" (-> package :type name) ")"]
      [:span {:style {:float "right"}
              :className (if expanded
                           "cljsfiddle-caret-down-icon"
                           "cljsfiddle-caret-right-icon")}]]

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

        [:table {:style {:marginTop "10px"
                         :marginBottom "10px"}}
         [:tbody
          [:tr
           [:td [:strong "About"]]
           [:td (:doc package)]]
          (when-let [website (:url package)]
            [:tr
             [:td [:strong "Website"]]
             [:td [:a {:href website} website]]])
          (when-let [render-fn (:render-fn package)]
            [:tr
             [:td [:strong "Render fn"]]
             [:td [:code.cljsfiddle-code (str render-fn)]]])
          (when-let [requires (seq (:require package))]
            [:tr
             [:td [:strong "Namespaces"]]
             [:td (for [r requires]
                    [:div [:code.cljsfiddle-code (pr-str r)]])]])]]

        [:h3 "Examples"]])]))

(defui loaded-packages
  [_ {:keys [manifest]}]
  [:div
   (for [package (sort-by :name (:packages manifest))]
     [:div {:key (str "loaded-package-" (:name package))}
      [package-meta {:package package :available? false}]])])

(defui manifest [{:keys [db]} _]
  (let [[version _]  (rehook/use-atom-path db [:version])
        [manifest _] (rehook/use-atom-path db [:manifest version])]
    [:div
     [:h1 "Packages"]
     [loaded-packages {:manifest manifest}]]))

(defui left-pane [_ _]
  [:div.cljsfiddle-left-pane
   [:div {:style {:display       "flex"
                  :flexDirection "column"}}
    [editor/editor]
    [repl/repl]]])

(defui readme [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])
        ref (react/useRef)]

    (rehook/use-effect
     (fn []
       (when (= selected-tab :readme)
         (-> (js/fetch "https://gist.githubusercontent.com/wavejumper/70f86410a293069a194be8ce85d9a018/raw/77014ca2ded7bc89d8bfb1bdd034769b61e3f08b/README.md")
             (.then #(.text %))
             (.then #(aset (aget ref "current") "innerHTML" (marked %)))))
       (constantly nil))
     [])

    [:div.cljsfiddle-readme
     {:ref ref
      :style (when-not (= selected-tab :readme)
               {:display "none"})}]))

(defui sandbox [{:keys [db]} _]
  (let [[selected-tab set-selected-tab] (rehook/use-atom-path db [:selected-tab])
        ref (react/useRef)]

    (rehook/use-effect
     (fn []
       (set! js/__cljsfiddle_sandbox
             (fn []
               (set-selected-tab :sandbox)
               (aget ref "current")))
       (fn []
         (set! js/__cljsfiddle_sandbox
               (fn []
                 (throw (ex-info "Cannot render, sandbox has been unmounted from DOM." {})))))))

    [:div.cljsfiddle-sandbox
     {:ref   ref
      :style (when-not (= selected-tab :sandbox)
               {:display "none"})}]))

(defui right-pane-tabs [{:keys [db]} _]
  (let [[selected-tab set-selected-tab] (rehook/use-atom-path db [:selected-tab])]
    [:div.toolbar
     [:div.button
      {:className (when (= selected-tab :readme) "active")
       :onClick   #(set-selected-tab :readme)}
      "README.md"]
     [:div.button
      {:className (when (= selected-tab :packages) "active")
       :onClick   #(set-selected-tab :packages)}
      "Packages"]
     [:div.button
      {:className (when (= selected-tab :export) "active")
       :onClick   #(set-selected-tab :export)}
      "Export"]
     [:div.button
      {:className (when (= selected-tab :sandbox) "active")
       :onClick   #(set-selected-tab :sandbox)} "Sandbox"]
     [:a.button {:style {:marginLeft "auto"}
                 :href  "https://github.com/cljsfiddle/cljsfiddle"}
      [:span.cljsfiddle-github-icon]]]))

(defui packages [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])]
    [:div.cljsfiddle-packages
     {:style (when-not (= selected-tab :packages)
               {:display "none"})}
     [manifest]]))

(defui export [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])
        [version _] (rehook/use-atom-path db [:version])]
    [:div.cljsfiddle-export
     {:style (when-not (= selected-tab :export)
               {:display "none"})}
     [:h1 "Export instructions"]

     [:p "Your cljsfiddle creation can be exported by creating a new public GitHub "
      [:a {:href "https://gist.github.com"} "gist"]]

     [:div.button "Copy code to clipboard"]

     [:h3 "Sharing"]
     [:p "Once you have created a gist, you can use this link to share your creation:"]
     [:code "https://cljsfiddle.dev/gist/" version "/GIST_ID"]
     [:p "Where " [:samp "GIST_ID"] " is the id of your freshly created gist (found in the navbar)"]

     [:h3 "Embedding"]
     [:p "If you would like to embed your creation, you can add this IFrame to your website:"]
     [:code "<iframe src=\"" "https://cljsfiddlle.dev/gist/" version "/GIST_ID/embed\"></iframe>"]]))

(defui right-pane [_ _]
  [:div.cljsfiddle-right-pane
   [right-pane-tabs]
   [readme]
   [packages]
   [export]
   [sandbox]])

(defui app [_ _]
  [:div.cljsfiddle-container
   [left-pane]
   [right-pane]])

(defui dominant-component [{:keys [db]} _]
  (let [[loading? _] (rehook/use-atom-path db [:loading?])
        [error _] (rehook/use-atom-path db [:error])]
    (cond
      loading? [loading]
      error    [:div (str error)]
      :else    [app])))

(defui root-component [_ _]
  [:<>
   ;;[effects/history]
   [effects/highlight]
   [effects/logging]
   [effects/manifest]
   [dominant-component]])

(defonce state
  (system))

(defn ^:dev/after-load render []
  (react-dom/render
   (dom.browser/bootstrap state identity clj->js root-component)
   (js/document.getElementById "app")))

(defn main []
  (aset js/window "onbeforeunload" (constantly true))
  (render))

(main)