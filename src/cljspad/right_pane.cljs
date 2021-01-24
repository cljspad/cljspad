(ns cljspad.right-pane
  (:require [cljspad.editor :as editor]
            [cljspad.util :as util]
            [nextjournal.clojure-mode.keymap :as keymap]
            [clojure.string :as str]
            [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [rehook.util :as rehook.util]
            [cljs.pprint :as pprint]
            ["highlight.js/lib/core" :as hljs]
            ["marked" :as marked]
            ["react" :as react]))

(defui library-meta
  [_ {:keys [library]}]
  (let [[expanded set-expanded] (rehook/use-state false)]
    [:div {:style {:marginBottom "5px"}}

     [:div.cljspad-button
      {:onClick #(set-expanded (not expanded))
       :style   {:width "300px"}}
      [:span (:name library) " (" (-> library :type name) ")"]
      [:span {:style     {:float "right"}
              :className (if expanded
                           "cljspad-caret-down-icon"
                           "cljspad-caret-right-icon")}]]

     (when expanded
       [:div {:style {:marginTop     "5px"
                      :marginBottom  "5px"
                      :paddingLeft   "5px"
                      :paddingRight  "5px"
                      :paddingTop    "10px"
                      :paddingBottom "10px"
                      :border        "1px solid #ccc"
                      :borderRadius  "4px"}}
        [:div (if-let [coord (:coord library)]
                [:code.cljspad-code (pr-str coord)]
                [:code.cljspad-code (:name library)])]

        [:table {:style {:marginTop    "10px"
                         :marginBottom "10px"}}
         [:tbody
          [:tr
           [:td [:strong "About"]]
           [:td (:doc library)]]
          (when-let [website (:url library)]
            [:tr
             [:td [:strong "Website"]]
             [:td [:a {:href website} website]]])
          (when-let [render-fn (:render-fn library)]
            [:tr
             [:td [:strong "Render fn"]]
             [:td [:code.cljspad-code (str render-fn)]]])
          (when-let [requires (seq (:require library))]
            [:tr
             [:td [:strong "Namespaces"]]
             [:td (for [r requires]
                    [:div [:code.cljspad-code (pr-str r)]])]])]]

        (when-let [examples (seq (:examples library))]
          [:<>
           [:h3 "Examples"]
           [:table {:style {:marginTop "10px"
                            :marginBottom "10px"}}
            [:tbody
             (for [example examples]
               (let [href (str "https://cljspad.dev/gist/" (:gist-id example))]
                 [:tr {:key (str "loaded-library-" (:name library) "-example-" (:name example))}
                  [:td (:name example)]
                  [:td [:a {:href href} href]]]))]]])])]))

(defui manifest-libraries
  [_ {:keys [manifest]}]
  [:div
   (for [library (sort-by :name (:sandbox/libraries manifest))]
     [:div {:key (str "loaded-library-" (:name library))}
      [library-meta {:library library :available? false}]])])

(defui manifest [{:keys [db]} _]
  (let [[version _] (rehook/use-atom-path db [:version])
        [manifest _] (rehook/use-atom-path db [:manifest version])]
    [:div
     [:h1 "Libraries"]
     [manifest-libraries {:manifest manifest}]]))

(defui readme [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])
        ref (react/useRef)]

    (rehook/use-effect
     (fn []
       (when (= selected-tab :readme)
         (-> (js/fetch "https://raw.githubusercontent.com/cljspad/cljspad/master/README.md")
             (.then #(.text %))
             (.then #(aset (aget ref "current") "innerHTML" (marked %)))))
       (constantly nil))
     [])

    [:div.cljspad-readme
     {:ref   ref
      :style (when-not (= selected-tab :readme)
               {:display "none"})}]))

(defui sandbox [{:keys [db]} _]
  (let [[selected-tab set-selected-tab] (rehook/use-atom-path db [:selected-tab])
        ref (react/useRef)]

    (rehook/use-effect
     (fn []
       (swap! db assoc :sandbox/ready? true)
       (set! js/__cljspad_sandbox
             (fn []
               (set-selected-tab :sandbox)
               (aget ref "current")))
       (fn []
         (swap! db assoc :sandbox/ready? false)
         (set! js/__cljspad_sandbox
               (fn []
                 (throw (ex-info "Cannot render, sandbox has been unmounted from DOM." {})))))))

    [:div.cljspad-sandbox#cljspad--sandbox
     {:ref   ref
      :style (when-not (= selected-tab :sandbox)
               {:display "none"})}]))

(defui right-pane-tabs [{:keys [db]} _]
  (let [[selected-tab set-selected-tab] (rehook/use-atom-path db [:selected-tab])]
    [:div.cljspad-toolbar
     [:div.cljspad-button
      {:className (when (= selected-tab :readme) "active")
       :onClick   #(set-selected-tab :readme)}
      "README.md"]
     [:div.cljspad-button
      {:className (when (= selected-tab :keybindings) "active")
       :onClick #(set-selected-tab :keybindings)}
      "Keybindings"]
     [:div.cljspad-button
      {:className (when (= selected-tab :library) "active")
       :onClick   #(set-selected-tab :library)}
      "Libraries"]
     [:div.cljspad-button
      {:className (when (= selected-tab :export) "active")
       :onClick   #(set-selected-tab :export)}
      "Export"]
     [:div.cljspad-button
      {:className (when (= selected-tab :sandbox) "active")
       :onClick   #(set-selected-tab :sandbox)} "Output"]
     [:a.cljspad-button {:style {:marginLeft "auto"}
                         :href  "https://github.com/cljspad/cljspad"}
      [:span.cljspad-github-icon]]]))

(defui libraries [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])]
    [:div.cljspad-library
     {:style (when-not (= selected-tab :library)
               {:display "none"})}
     [manifest]]))

(defui highlight [_ props]
  (let [ref (react/useRef)]
    (rehook/use-effect
     (fn []
       (hljs/highlightBlock (aget ref "current"))
       (constantly nil)))

    [:pre
     [:code {:ref ref :className "language-clojure"}
      (rehook.util/children props)]]))

(defui copy-to-clipboard [{:keys [editor-view]} _]
  (let [initial-copy-text "Copy code to clipboard"
        [copy-text set-copy-text] (rehook/use-state initial-copy-text)]

    (rehook/use-effect
     (fn []
       (if-not (= copy-text initial-copy-text)
         (let [f (js/setTimeout #(set-copy-text initial-copy-text) 1000)]
           #(js/clearTimeout f))
         (constantly nil)))
     [copy-text])

    [:div.cljspad-button {:onClick #(if (editor/copy-to-clipboard @editor-view)
                                      (set-copy-text "Copied to clipboard!")
                                      (set-copy-text "Failed to copy to clipboard :("))}
     copy-text]))

(defui deps-edn [{:keys [compiler-state db]} _]
  (let [[version _] (rehook/use-atom-path db [:version])
        [cljs-version _] (rehook/use-atom-path db [:manifest version :clojurescript/version])
        [nses _] (rehook/use-atom-fn compiler-state
                                     #(set (keys (:cljs.analyzer/namespaces %)))
                                     (constantly nil))
        [libraries _] (rehook/use-atom-path db [:manifest version :sandbox/libraries])
        clj-deps (->> libraries
                      (filter (fn [{:keys [require]}]
                                (some (fn [[r & _]]
                                        (contains? nses r))
                                      require)))
                      (filter #(= :cljs (:type %)))
                      (keep :coord))]
    [highlight (with-out-str
                 (pprint/pprint
                  {:deps (into {'org.clojure/clojurescript {:mvn/version cljs-version}}
                               (map (fn [[dep coord]]
                                      [(symbol dep) {:mvn/version coord}])
                                    clj-deps))}))]))

(defui package-json [{:keys [compiler-state db]} _]
  (let [[version _] (rehook/use-atom-path db [:version])
        [nses _] (rehook/use-atom-fn compiler-state
                                     #(set (keys (:cljs.analyzer/namespaces %)))
                                     (constantly nil))
        [libraries _] (rehook/use-atom-path db [:manifest version :sandbox/libraries])
        js-deps (->> libraries
                     (filter (fn [{:keys [require]}]
                               (some (fn [[r & _]]
                                       (contains? nses r))
                                     require)))
                     (filter #(= :js (:type %)))
                     (keep :coord)
                     (into {}))]
    [highlight (js/JSON.stringify
                (clj->js {:name            ""
                          :description     ""
                          :version         "0.1.0"
                          :dependencies    js-deps
                          :devDependencies {}})
                nil 2)]))

(defui embed-options
  [_ _]
  [:<>
   [:p "You can configure cljspad by passing through the following query params:"]
   [:ul
    [:li [:samp "selected_tab"] " - (enum) the initial tab on load. Options: sandbox, repl, editor (default: editor)"]
    [:li [:samp "defer_load"] " - (bool) whether to defer the loading of cljspad (default: true)"]]])

(defui export-gist
  [_ {:keys [version sandbox-version]}]
  [:<>
   [:h3 "GitHub Gist"]
   [:p "Your cljspad creation can be exported by creating a new public GitHub "
    [:a {:href "https://gist.github.com" :target "_blank"} "gist"]]
   [copy-to-clipboard]

   [:h3 "Sharing"]
   [:p "Once you have created a gist, you can use this link to share your creation:"]
   [highlight (if (= "stable" sandbox-version)
                (str "https://cljspad.dev/gist/" version "/GIST_ID")
                (str "https://cljspad.dev/gist/GIST_ID"))]
   [:p "Where " [:samp "GIST_ID"] " is the id of your freshly created gist (found in the navbar)"]

   [:h3 "Embedding"]
   [:p "If you would like to embed your creation, you can add this iframe to your website:"]
   [highlight (if (= "stable" sandbox-version)
                (str "<iframe src=\"" "https://cljsfiddlle.dev/embed/gist/" version "/GIST_ID\" width=\"100%\" height=\"400px\" style=\"border:1px solid #ccc;\"></iframe>")
                (str "<iframe src=\"" "https://cljsfiddlle.dev/embed/gist/GIST_ID\" " "\"width=\"100%\" height=\"400px\" style=\"border:1px solid #ccc;\"></iframe>"))]
   [embed-options]])

(defui export-snippet
  [_ {:keys [version sandbox-version]}]
  [:<>
   [:h3 "GitLab Snippet"]
   [:p "Your cljspad creation can be exported by creating a new public GitLab "
    [:a {:href "https://gitlab.com/-/snippets/new" :target "_blank"} "snippet"]]
   [copy-to-clipboard]

   [:h3 "Sharing"]
   [:p "Once you have created a snippet, you can use this link to share your creation:"]
   [highlight (if (= "stable" sandbox-version)
                (str "https://cljspad.dev/gitlab/" version "/SNIPPET_ID")
                (str "https://cljspad.dev/gitlab/SNIPPET_ID"))]
   [:p "Where " [:samp "SNIPPET_ID"] " is the id of your freshly created snippet (found in the navbar)"]

   [:h3 "Embedding"]
   [:p "If you would like to embed your creation, you can add this iframe to your website:"]
   [highlight (if (= "stable" sandbox-version)
                (str "<iframe src=\"" "https://cljsfiddlle.dev/embed/gitlab/" version "/SNIPPET_ID\" width=\"100%\" height=\"400px\" style=\"border:1px solid #ccc;\"></iframe>")
                (str "<iframe src=\"" "https://cljsfiddlle.dev/embed/gitlab/SNIPPET_ID\" " "\"width=\"100%\" height=\"400px\" style=\"border:1px solid #ccc;\"></iframe>"))]
   [embed-options]])

(defui export-clj [_ _]
  [:<>
   [:h3 "Clojure project"]
   [:p "If you would like to build a Clojure project out of your creation:"]
   [:h4 "deps.edn"]
   [deps-edn]
   [:h4 "package.json"]
   [package-json]
   [:h4 "shadow-cljs.edn"]
   [highlight (with-out-str
                (pprint/pprint
                 '{:deps   true
                   :builds {:app {:target  :browser
                                  :modules {:base {:entries [app.main]}}}}}))]
   [:h4 "src/app/main.cljs"]
   [copy-to-clipboard]
   [:div {:style {:height "20px"}}]])

(defui export-link [{:keys [editor-view]} {:keys [sandbox-version version]}]
  (let [[copy-link set-copy-link] (rehook/use-state nil)]
    [:<>
     [:h3 "Clojure project"]
     [:p "Export creation as a hyperlink:"]
     [:div.cljspad-button {:onClick #(some-> @editor-view editor/editor-value util/deflate-str set-copy-link)}
      "Generate link"]
     (if (> (count (str copy-link)) 1024)
       [:div
        [:p [:strong "Unable to generate link"]]
        [:p "Compressed code exceeds 1024 characters, the maximum suggested character limit of a query string."]
        [:p "Perhaps try exporting as a gist instead?"]]

       (when copy-link
         (let [link (if (= "stable" sandbox-version)
                      (str "https://cljspad.dev/share/" version "?c=" copy-link)
                      (str "https://cljspad.dev/share?c=" copy-link))]
           [:div {:style {:marginTop "10px"
                          :wordBreak "break-all"}}
            [:a {:href link} link]])))]))

(defui export [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])
        [version _] (rehook/use-atom-path db [:version])
        [sandbox-version set-sandbox-version] (rehook/use-state "stable")
        [export-as set-export-as] (rehook/use-state "gist")]
    [:div.cljspad-export
     {:style (when-not (= selected-tab :export)
               {:display "none"})}
     [:h1 "Export instructions"]

     [:h3 "Export Options"]
     [:label "Sandbox version: "]
     [:select {:onChange #(set-sandbox-version (-> % .-target .-value))
               :value    sandbox-version}
      [:option {:value "stable"}
       "Stable"]
      [:option {:value "latest"}
       "Latest"]]
     [:br]
     [:label "Export as: "]
     [:select {:onChange #(set-export-as (-> % .-target .-value))
               :value    export-as}
      #_[:option {:value "link"}
         "Link"]
      [:option {:value "gist"}
       "GitHub Gist"]
      [:option {:value "snippet"}
       "GitLab Snippet"]
      [:option {:value "clj"}
       "Clojure Project"]]

     [:hr {:style {:border    "none"
                   :borderTop "1px solid #ccc"}}]

     (case export-as
       #_"link"
       #_[export-link {:version         version
                       :sandbox-version sandbox-version}]

       "gist"
       [export-gist {:version         version
                     :sandbox-version sandbox-version}]

       "snippet"
       [export-snippet {:version         version
                        :sandbox-version sandbox-version}]

       "clj"
       [export-clj]

       nil)]))

(defn linux? []
  (some? (re-find #"(Linux)|(X11)" js/navigator.userAgent)))

(defn mac? []
  (and (not (linux?))
       (some? (re-find #"(Mac)|(iPhone)|(iPad)|(iPod)" js/navigator.platform))))

(defn key-mapping []
  (cond-> {"ArrowUp" "↑"
           "ArrowDown" "↓"
           "ArrowRight" "→"
           "ArrowLeft" "←"
           "Mod" "Ctrl"}
    (mac?)
    (merge {"Alt" "⌥"
            "Shift" "⇧"
            "Enter" "⏎"
            "Ctrl" "⌃"
            "Mod" "⌘"})))

(defn render-key [key]
  (let [keys (into [] (map #(get ((memoize key-mapping)) % %) (str/split key #"-")))]
    (into [:span]
          (map-indexed (fn [i k]
                         [:<>
                          (when-not (zero? i) [:span " + "])
                          [:kbd.kbd k]]) keys))))

(def eval-keymap
  {:eval-cell
   [{:key "Mod-Enter"
     :doc "Evaluate cell"}]
   :eval-at-cursor
   [{:key "Alt-Enter"
     :doc "Evaluates form at cursor"}]
   :eval-top-level
   [{:key  "Alt-Shift-Enter"
     :doc "Evaluates top-level form at cursor"}]})

;; Adapted from https://github.com/nextjournal/clojure-mode/blob/master/demo/src/nextjournal/clojure_mode/demo.cljs#L131
(defui keybindings-table [_ _]
  [:table.w-full.text-sm
   [:thead
    [:tr.border-t
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 "Command"]
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 "Keybinding"]
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 "Alternate Binding"]
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 {:style {:min-width 290}} "Description"]]]
   (into [:tbody]
         (->> keymap/paredit-keymap*
              (merge eval-keymap)
              (sort-by first)
              (map (fn [[command [{:keys [key shift doc]} & [{alternate-key :key}]]]]
                     [:<>
                      [:tr.border-t.hover:bg-gray-100
                       [:td.px-3.py-1.align-top.monospace.whitespace-no-wrap [:b (name command)]]
                       [:td.px-3.py-1.align-top.text-right.text-sm.whitespace-no-wrap (render-key key)]
                       [:td.px-3.py-1.align-top.text-right.text-sm.whitespace-no-wrap (some-> alternate-key render-key)]
                       [:td.px-3.py-1.align-top doc]]
                      (when shift
                        [:tr.border-t.hover:bg-gray-100
                         [:td.px-3.py-1.align-top [:b (name shift)]]
                         [:td.px-3.py-1.align-top.text-sm.whitespace-no-wrap.text-right
                          (render-key (str "Shift-" key))]
                         [:td.px-3.py-1.align-top.text-sm]
                         [:td.px-3.py-1.align-top]])]))))])

(defui keybindings
  [{:keys [db]} _]
  (let [[selected-tab _] (rehook/use-atom-path db [:selected-tab])]
    [:div {:style (when-not (= selected-tab :keybindings)
                    {:display "none"})}
     [keybindings-table]]))