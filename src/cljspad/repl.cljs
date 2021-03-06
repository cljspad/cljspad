(ns cljspad.repl
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui]]
            [cljspad.env :as env]
            [goog.object :as obj]
            [cljs.core.async :as async :refer-macros [go-loop]]
            [cljs.tools.reader.edn :as edn]
            [clojure.string :as str]
            [zprint.core :as zp]
            ["react" :as react]
            ["xterm" :refer [Terminal]]
            ["xterm-addon-fit" :refer [FitAddon]]
            ["ansi-escapes" :refer [eraseLine cursorLeft cursorForward cursorBackward]]))

(defn terminal [fit-addon]
  (doto (Terminal.)
    (.loadAddon fit-addon)
    (.setOption "theme" #js {:background "#fff" :foreground "#0c1323" :cursor "#0c1323"})
    (.setOption "fontFamily" "Hack, monospace")
    (.setOption "fontSize" 14)
    (.setOption "cursorBlink" true)))

(defn str-insert
  [s c i]
  (str (subs s 0 i) c (subs s i)))

(defn backspace
  [s pos]
  (:str (reduce
         (fn [ctx x]
           (if (= pos (:idx ctx))
             (update ctx :idx inc)
             (-> ctx
                 (update :str str x)
                 (update :idx inc))))
         {:idx 0 :str ""}
         s)))

(defn handle-input
  [curr-repl-state next-pos next-form ns-str]
  (-> curr-repl-state
      (assoc :form next-form)
      (assoc :term-commands [["clearLine"]
                             ["cursorBackward" (+ (count ns-str) (count (:form curr-repl-state)))]
                             ["write" ns-str]
                             ["write" next-form]
                             (when (pos? (- (count next-form) next-pos))
                               ["cursorBackward" (- (count next-form) next-pos)])])
      (assoc :pos next-pos)))

(defn handle-repl-key
  [compiler-state curr-repl-state cb ev]
  (let [key   (aget ev "key")
        code  (obj/getValueByKeys ev "domEvent" "code")
        ctrl? (obj/getValueByKeys ev "domEvent" "ctrlKey")
        code  (if ctrl?
                (str "Ctrl+" code)
                code)]

    (case code
      "ArrowRight"
      (when (< (:pos curr-repl-state) (count (:form curr-repl-state)))
        (cb (-> curr-repl-state
                (update :pos inc)
                (assoc :term-commands [["write" key]]))))

      "ArrowLeft"
      (when (pos? (:pos curr-repl-state))
        (cb (-> curr-repl-state
                (update :pos dec)
                (assoc :term-commands [["write" key]]))))

      "ArrowUp"
      (let [next-history-index (inc (:history-index curr-repl-state))]
        (when-let [history-form (nth (:history curr-repl-state) next-history-index nil)]
          (cb (-> curr-repl-state
                  (assoc :history-index next-history-index)
                  (assoc :form history-form)
                  (assoc :pos (count history-form))
                  (assoc :term-commands (conj (vec (repeat (count (:form curr-repl-state)) ["write" "\b \b"]))
                                              ["write" history-form]))))))

      "ArrowDown"
      (let [next-history-index (dec (:history-index curr-repl-state))]
        (if-let [history-form (nth (:history curr-repl-state) next-history-index nil)]
          (cb (-> curr-repl-state
                  (assoc :history-index next-history-index)
                  (assoc :form history-form)
                  (assoc :pos (count history-form))
                  (assoc :term-commands (conj (vec (repeat (count (:form curr-repl-state)) ["write" "\b \b"]))
                                              ["write" history-form]))))
          (when (= -1 next-history-index)
            (cb (-> curr-repl-state
                    (assoc :form "")
                    (assoc :term-commands (conj (vec (repeat (count (:form curr-repl-state)) ["write" "\b \b"]))
                                                ["write" ""]))
                    (assoc :history-index -1))))))

      "Backspace"
      (when (pos? (:pos curr-repl-state))
        (let [next-pos  (dec (:pos curr-repl-state))
              next-form (backspace (:form curr-repl-state) next-pos)
              ns-str    (str (:ns curr-repl-state) "=> ")]
          (cb (handle-input curr-repl-state next-pos next-form ns-str))))

      "Delete"
      (when (pos? (:pos curr-repl-state))
        (let [next-pos  (:pos curr-repl-state)
              next-form (backspace (:form curr-repl-state) next-pos)
              ns-str    (str (:ns curr-repl-state) "=> ")]
          (cb (handle-input curr-repl-state next-pos next-form ns-str))))

      "Enter"
      (if (str/blank? (:form curr-repl-state))
        (cb (assoc curr-repl-state :term-commands [["writeln" ""]
                                                   ["writeln" ""]
                                                   ["write" (str (:ns curr-repl-state) "=> ")]]))
        (-> (env/eval-str-promise compiler-state (:form curr-repl-state))
            (.then (fn [result]
                     (let [ns  (or (:ns result) (:ns curr-repl-state))]
                       (cb (-> curr-repl-state
                               (assoc :pos 0)
                               (assoc :form "")
                               (assoc :ns ns)
                               (update :history
                                       (fn [curr-history]
                                         (take (:max-history-items curr-repl-state)
                                               (if (= curr-history (first curr-history))
                                                 curr-history
                                                 (conj curr-history (:form curr-repl-state))))))
                               (assoc :term-commands [["writeln" ""]
                                                      ["writeln" (if-some [value (or (:value result) (env/error-message result))]
                                                                   (zp/czprint-str value)
                                                                   "nil")]
                                                      ["write" (str ns "=> ")]]))))))
            (.catch #(prn %))))

      "Ctrl+KeyL"
      (cb (-> curr-repl-state
              (assoc :pos 0)
              (assoc :form "")
              (assoc :term-commands [["clear"]])))

      ("Home" "PageUp" "PageDown" "End")
      nil

      ;; Else, treat as regular keypress
      (when-not ctrl?
        (let [next-form (str-insert (:form curr-repl-state) key (:pos curr-repl-state))
              next-pos  (inc (:pos curr-repl-state))
              ns-str    (str (:ns curr-repl-state) "=> ")]
          (cb (handle-input curr-repl-state next-pos next-form ns-str)))))))

(defn read-repl-history
  []
  (try (or (some-> (js/localStorage.getItem "repl-history")
                   (edn/read-string))
           '())
       (catch :default _ '())))

(defn write-repl-history
  [history]
  (try (js/localStorage.setItem "repl-history" (pr-str history))
       (catch :default _ nil)))

(defn mutate-repl!
  [state term next-state]

  (reset! state next-state)
  (write-repl-history (:history next-state))

  (doseq [[cmd val] (:term-commands next-state)]
    (case cmd
      "clearLine" (.write term eraseLine)
      "cursorLeft" (.write term cursorLeft)
      "cursorForward" (.write term (cursorForward val))
      "cursorBackward" (.write term (cursorBackward val))
      "clear" (.clear term)
      "write" (.write term val)
      "writeln" (.writeln term val)
      nil nil
      (js/console.warn "Unknown term command " cmd))))

(defn initial-state []
  {:form              ""
   :pos               0
   :history-index     -1
   :max-history-items 50
   :ns                "sandbox.user"
   :history           (read-repl-history)})

(defn write-lines
  [term curr-state lines]
  (try (.writeln term "")
       (doseq [line lines]
         (.write term (str line " ")))
       (.writeln term "")
       (when (str/blank? (:form curr-state))
         (.write term (str (:ns curr-state) "=> ")))
       (catch :default e
         (js/console.log e))))

(defn console-loop
  [term close-ch state {:keys [stderr stdout]}]
  (go-loop []
    (when-let [[val p] (async/alts! [close-ch stderr stdout])]
      (let [curr-state @state]
        (cond
          (= p stderr)
          ;; TODO: update zprint colors to be an err red
          (do (write-lines term curr-state val)
              (recur))

          (= p stdout)
          (do (write-lines term curr-state val)
              (recur)))))))

(defui evaluating [{:keys [compiler-state]} _]
  (let [[evaluating? _] (rehook/use-atom-path compiler-state [::env/evaluating?])
        dots-seq (cycle ["..." ".." "."])
        [dots set-dots] (rehook/use-state 0)]

    (rehook/use-effect
     (fn []
       (if evaluating?
         (let [interval (js/setInterval
                         (fn []
                           (set-dots (inc dots)))
                         2000)]
           #(js/clearTimeout interval))
         (constantly nil)))
     [evaluating?])

    (when evaluating?
      [:span " | Loading namespace" (nth dots-seq dots)])))

(defui repl-header [{:keys [db compiler-state]} _]
  (let [[version _] (rehook/use-atom-path db [:version])
        [cljs-version _] (rehook/use-atom-path db [:manifest version :clojurescript/version])
        [nses _] (rehook/use-atom-fn compiler-state (fn [x]
                                                      (keys (:cljs.analyzer/namespaces x)))
                                     nil)
        [gist-id _] (rehook/use-atom-path db [:opts :gist_id])
        [latest _] (rehook/use-atom-path db [:opts :latest])]

    [:div {:style {:borderTop       "1px solid #ccc"
                   :backgroundColor "#fafafa"
                   :borderBottom    "1px solid #ccc"
                   :zIndex          "9999"
                   :padding         "5px"
                   :width           "100%"}}
     [:div {:style {:display "flex"}}
      [:div {:style {:flex 1}}
       [:span.cljspad-repl-icon {}]
       [:strong " REPL"]]
      [:div {:style {:flex       2
                     :textAlign  "right"
                     :fontSize   "10px"
                     :lineHeight "20px"
                     :userSelect "none"}}
       [:span.hint--top.hint--large
        {:aria-label (pr-str (sort nses))}
        (count nses) " namespaces loaded"]
       " | "
       [:span "Cljs version: " [:strong (str cljs-version)]]
       " | "
       [:span "Sandbox version: " [:strong (str version)]]
       (when (and gist-id (not= version latest))
         (let [href (str "/gist/" gist-id)]
           [:<> " | " [:a {:href href} "Switch to latest sandbox"]]))
       [evaluating]]]]))

(defui repl [{:keys [compiler-state console]} {:keys [height]}]
  (let [container (react/useRef)]
    (rehook/use-effect
     (fn []
       (let [fit      (FitAddon.)
             term     (terminal fit)
             state    (atom (initial-state))
             repl-cb  (partial mutate-repl! state term)
             current  (aget container "current")
             close-ch (async/chan)]
         (.open term current)
         (.fit fit)
         (.write term "sandbox.user=> ")
         (.onKey term #(handle-repl-key compiler-state @state repl-cb %))
         (console-loop term close-ch state console)
         (fn []
           (async/close! close-ch)
           (.dispose term))))
     [])

    [:<>
     [repl-header]
     [:div {:style {:width   "100%"
                    :height  height
                    :padding "5px"}
            :ref   container}]]))