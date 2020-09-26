(ns cljsfiddle.editor
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [cljsfiddle.env :as env]
            [goog.object :as obj]
            [clojure.string :as str]
            [cljs.tools.reader :as reader]
            [cljs.tools.reader.reader-types :refer [string-push-back-reader]]
            ["react" :as react]
            ["monaco" :as MonacoEditor]))

(defn ^js ref->editor [ref]
  (obj/getValueByKeys ref "current" "editor"))

(defn copy-to-clipboard [monaco-ref]
  (try (let [editor (ref->editor monaco-ref)
             model  (.getModel editor)
             value  (.getValue model)
             elem   (js/document.createElement "textarea")]
         (js/document.body.appendChild elem)
         (aset elem "value" value)
         (.select elem)
         (js/document.execCommand "copy")
         (js/document.body.removeChild elem)
         true)
       (catch :default e
         (prn e)
         false)))

(defn read* [reader]
  (try (reader/read {:eof nil} reader)
       (catch :default e
         (prn (-> e ex-message))
         nil)))

;; TODO: smarter reading. Tracking of line numbers where exceptions occur would be ideal...
;; having errors reflected inside of monaco would be even cooler
(defn eval-form [compiler-state set-loading reader]
  (if-let [form (read* reader)]
    ;; TODO: another (possible) shadow or cljs.js bug
    ;; cljs.js/eval returns exception: 'no *eval-fn* defined' on initial evaluation
    ;; cljs.js/eval-str does not exhibit this behaviour.
    ;;
    ;; So unfortunately we have to read string then serialise the form back to a string...
    ;;
    ;; So why even read the editors contents at all?
    ;; It appears that evaluating:
    ;; (defn foo [] 1)
    ;; (inc (foo))
    ;;
    ;; Will not evaluate, as it complains `foo` has not been defined when incrementing.
    ;; This may be the intended behaviour of `:context :expr` in cljs.js, I am not sure.
    ;;
    ;; Breaking down the evaliation into a sequence of forms has the advantage of being able
    ;; to eventually have better error handling/feedback (see comment at top of defn)
    (-> (env/eval-str-promise compiler-state (str form))
        (.then (fn [result]
                 (if-let [err (env/error-message result)]
                   (do (prn err)
                       (set-loading false))
                   (eval-form compiler-state set-loading reader))))
        (.catch (fn [err]
                  (prn err)
                  (set-loading false))))

    (set-loading false)))

(defn run-code
  [compiler-state ^js editor]
  (fn [set-loading]
    (set-loading true)
    (let [model  (.getModel editor)
          value  (.getValue model)
          reader (string-push-back-reader value)]

      (eval-form compiler-state set-loading reader))))

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

(defui editor [{:keys [compiler-state db monaco]} _]
  (let [[monaco _] (rehook/use-atom monaco)
        [run set-run] (rehook/use-state nil)
        [source _] (rehook/use-atom-path db [:source])]
    (when monaco
      (rehook/use-effect
       (fn []
         (let [editor (ref->editor monaco)
               resize (fn [] (.layout editor))
               unload (fn []
                        (let [model (.getModel editor)
                              value (.getValue model)]
                          (when-not (str/blank? value)
                            true)))]
           (js/window.addEventListener "resize" resize)
           (set-run {:run (run-code compiler-state editor)})
           (aset js/window "onbeforeunload" unload)
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
                      :ref      monaco}]])))