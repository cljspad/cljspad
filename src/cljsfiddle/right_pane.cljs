(ns cljsfiddle.right-pane
  (:require [cljsfiddle.editor :as editor]
            [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            ["marked" :as marked]
            ["react" :as react]))

(defui package-meta
  [_ {:keys [package]}]
  (let [[expanded set-expanded] (rehook/use-state false)]
    [:div {:style {:marginBottom "5px"}}

     [:div.button
      {:onClick #(set-expanded (not expanded))
       :style   {:width "300px"}}
      [:span (:name package) " (" (-> package :type name) ")"]
      [:span {:style     {:float "right"}
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

        [:table {:style {:marginTop    "10px"
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
  (let [[version _] (rehook/use-atom-path db [:version])
        [manifest _] (rehook/use-atom-path db [:manifest version])]
    [:div
     [:h1 "Packages"]
     [loaded-packages {:manifest manifest}]]))

(defui readme [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])
        ref (react/useRef)]

    (rehook/use-effect
     (fn []
       (when (= selected-tab :readme)
         (-> (js/fetch "https://gist.githubusercontent.com/wavejumper/70f86410a293069a194be8ce85d9a018/raw/5551d5d780a4f2071b18fac097fb6a46e6f75559/README.md")
             (.then #(.text %))
             (.then #(aset (aget ref "current") "innerHTML" (marked %)))))
       (constantly nil))
     [])

    [:div.cljsfiddle-readme
     {:ref   ref
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

(defui export [{:keys [db monaco]} _]
  (let [[monaco _] (rehook/use-atom monaco)
        [selected-tab _] (rehook/use-atom-path db [:selected-tab])
        [version _] (rehook/use-atom-path db [:version])
        initial-copy-text "Copy code to clipboard"
        [copy-text set-copy-text] (rehook/use-state initial-copy-text)]

    (rehook/use-effect
     (fn []
       (if-not (= copy-text initial-copy-text)
         (let [f (js/setTimeout #(set-copy-text initial-copy-text) 1000)]
           #(js/clearTimeout f))
         (constantly nil)))
     [copy-text])

    [:div.cljsfiddle-export
     {:style (when-not (= selected-tab :export)
               {:display "none"})}
     [:h1 "Export instructions"]

     [:p "Your cljsfiddle creation can be exported by creating a new public GitHub "
      [:a {:href "https://gist.github.com" :target "_blank"} "gist"]]

     (when monaco
       [:div.button {:onClick #(if (editor/copy-to-clipboard monaco)
                                 (set-copy-text "Copied to clipboard!")
                                 (set-copy-text "Failed to copy to clipboard :("))}
        copy-text])

     [:h3 "Sharing"]
     [:p "Once you have created a gist, you can use this link to share your creation:"]
     [:code "https://cljsfiddle.dev/gist/" version "/GIST_ID"]
     [:p "Where " [:samp "GIST_ID"] " is the id of your freshly created gist (found in the navbar)"]

     [:h3 "Embedding"]
     [:p "If you would like to embed your creation, you can add this IFrame to your website:"]
     [:code "<iframe src=\"" "https://cljsfiddlle.dev/gist/" version "/GIST_ID/embed\"></iframe>"]]))
