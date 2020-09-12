(ns cljsfiddle.core
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [rehook.dom.browser :as dom.browser]
            [cljsfiddle.effects :as effects]
            [cljsfiddle.env.core :as env]
            [cljsfiddle.env.packages :as packages]
            [goog.object :as obj]
            [cljs.core.async :as async :refer-macros [go]]
            [cljs.js :as cljs]
            [clojure.set :as set]
            ["xterm" :refer [Terminal]]
            ["xterm-addon-fit" :refer [FitAddon]]
            ["codemirror" :as CodeMirror]
            ["react" :as react]
            ["react-dom" :as react-dom]
            [clojure.string :as str])
  (:import (goog History)))

(defn system []
  {:compiler-state (env/state)
   :history        (History.)
   :db             (atom {:loading? true
                          :error?   false
                          :source   ""
                          :packages {}})})

(defn run-code-mirror
  [compiler-state code-mirror]
  (fn [_]
    (try
      (env/eval! compiler-state (.getValue code-mirror))
      (catch :default e (prn e)))))

(defui code-editor [{:keys [compiler-state db]} _]
  (let [container (react/useRef)
        [source _] (rehook/use-atom-path db [:source])
        [run set-run] (rehook/use-state {:run (constantly nil)})]

    (js/console.log "Source..." source)

    (rehook/use-effect
     (fn []
       (let [dom         (aget container "current")
             opts        #js {:mode  "clojure"
                              :value "Hello world"}
             code-mirror (CodeMirror/fromTextArea dom opts)]
         (.setValue code-mirror source)
         (set-run {:run (run-code-mirror compiler-state code-mirror)})
         (fn []
           (.toTextArea code-mirror))))
     [source])


    [:div {:style {:width "100%" :height "calc(100vH - 250px)"}}
     [:div {:style {:height          "25px"
                    :backgroundColor "rgb(51,51,51)"
                    :padding         "3px"}}
      [:button {:onClick (:run run)}
       "Run"]]

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

(defn terminal [fit-addon]
  (doto (Terminal.)
    (.loadAddon fit-addon)
    (.setOption "theme" #js {:background "#fff" :foreground "#0c1323" :cursor "#0c1323"})
    (.setOption "fontFamily" "Hack, monospace")
    (.setOption "fontSize" 12)
    (.setOption "cursorBlink" true)))

(defn handle-repl-key
  [compiler-state term form ev]
  (let [key  (aget ev "key")
        code (obj/getValueByKeys ev "domEvent" "code")]
    (case code
      "Backspace"
      (do (.write term "\b \b")
          (swap! form #(apply str (butlast %))))

      "Enter"
      (try
        (go (let [result (async/<! (env/eval! compiler-state @form))]
              (js/console.log "???" @form result)
              (.writeln term "")
              (.writeln term (if-some [value (:value result)]
                               (str value)
                               (str (:error result))))
              (.write term "cljs.user => ")
              (reset! form "")))
        (catch :default e
          (.writeln term "")
          (.writeln term (str e))
          (.write term "cljs.user => ")
          (reset! form "")))

      (do (swap! form str key)
          (.write term key)))))

(defui repl [{:keys [compiler-state]} _]
  (let [container (react/useRef)]
    (rehook/use-effect
     (fn []
       (let [fit  (FitAddon.)
             term (terminal fit)
             form (atom "")]
         (let [current (aget container "current")]
           (.open term current)
           (.fit fit)
           (.write term "cljs.user => ")
           (.onKey term (partial handle-repl-key compiler-state term form))
           (fn []
             (.dispose term)))))
     [])

    [:div {:style {:width "100%" :height "200px"}
           :ref container}]))

(defui app [_ _]
  [:div {:style {:display     "flex"}}
   [:div {:style {:width "200px"
                  :padding "5px"
                  :height "calc(100vh - 51px)"
                  :borderRight "1px solid #ccc"}}
    [:h3 "Packages"]
    (for [[k _] (sort (methods packages/load-package))]
      [package {:id k}])]

   [:div {:style {:display "flex"
                  :flexDirection "column"
                  :width "100%"}}
    [code-editor]
    [repl]]])

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

(render)

(comment
 (cljs/eval-str (:compiler-state state) "(+ 1 2)" nil {:eval cljs/js-eval} prn)
 (prn "foobar"))