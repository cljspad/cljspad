(ns cljsfiddle.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [cljsfiddle.env.core :as env]
            [goog.object :as obj]
            [cljs.core.async :as async :refer-macros [go go-loop]]
            [cljs.tools.reader :as reader]
            [cljs.tools.reader.reader-types :refer [string-push-back-reader]]
            ["react" :as react]
            ["monaco" :as MonacoEditor]))

(defn read* [reader]
  (try (reader/read {:eof nil} reader)
       (catch :default e
         (prn (-> e ex-message))
         nil)))

(defn run-code
  [compiler-state ^js monaco]
  (fn [set-loading]
    (set-loading true)
    (let [model  (.getModel monaco)
          value  (.getValue model)
          reader (string-push-back-reader value)]

      ;; TODO: smarter reading. Tracking of line numbers where exceptions occur would be ideal -
      (go-loop []
        (if-let [form (read* reader)]
          (let [result (async/<! (env/eval compiler-state form))]
            (if-let [err (env/error-message result)]
              (do (prn err)
                  (set-loading false))
              (recur)))

          (set-loading false))))))

(defui toolbar
  [_ {:keys [run]}]
  (let [[loading set-loading] (rehook/use-state false)
        run (:run run)]
    [:div.toolbar
     [:div.button {:onClick #(run set-loading)}
      (if loading
        [:span.cljsfiddle-loading-icon]
        [:span.cljsfiddle-run-icon])
      "Run"]]))

(defui editor [{:keys [compiler-state db]} _]
  (let [ref (react/useRef)
        [run set-run] (rehook/use-state nil)
        [source _] (rehook/use-atom-path db [:source])]

    (rehook/use-effect
     (fn []
       (let [monaco (obj/getValueByKeys ref "current" "editor")
             resize (fn [] (.layout monaco))]
         (js/window.addEventListener "resize" resize)
         (set-run {:run (run-code compiler-state monaco)})
         (fn []
           (js/window.removeEventListener "resize" resize))))
     [])

    [:div {:style {:width "100%" :height "calc(100vH - 250px)"}}
     [toolbar {:run run}]
     [MonacoEditor {:language "clojure"
                    :theme    "vs-light"
                    :height   "100%"
                    :width    "100%"
                    :value    source
                    :options  {:minimap {:enabled false}}
                    :ref      ref}]]))