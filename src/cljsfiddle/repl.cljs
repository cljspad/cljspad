(ns cljsfiddle.repl
  (:require [rehook.core :as rehook]
            [rehook.dom :refer-macros [defui ui]]
            [cljsfiddle.env.core :as env]
            [goog.object :as obj]
            [cljs.core.async :as async :refer-macros [go]]
            [clojure.string :as str]
            ["react" :as react]
            ["xterm" :refer [Terminal]]
            ["xterm-addon-fit" :refer [FitAddon]]))

(defn terminal [fit-addon]
  (doto (Terminal.)
    (.loadAddon fit-addon)
    (.setOption "theme" #js {:background "#fff" :foreground "#0c1323" :cursor "#0c1323"})
    (.setOption "fontFamily" "Hack, monospace")
    (.setOption "fontSize" 12)
    (.setOption "cursorBlink" true)))

(defn str-insert
  [s c i]
  (str (subs s 0 i) c (subs s i)))

(defn handle-repl-key
  [compiler-state version curr-repl-state cb ev]
  (let [key  (aget ev "key")
        code (obj/getValueByKeys ev "domEvent" "code")]
    (case code
      "ArrowRight"
      (when (<= (:pos curr-repl-state) (count (:form curr-repl-state)))
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
                  (assoc :term-commands (conj (vec (repeat (count (:form curr-repl-state)) ["write" "\b \b"]))
                                              ["write" history-form]))))))

      "ArrowDown"
      (let [next-history-index (dec (:history-index curr-repl-state))]
        (if-let [history-form (nth (:history curr-repl-state) next-history-index nil)]
          (cb (-> curr-repl-state
                  (assoc :history-index next-history-index)
                  (assoc :form history-form)
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
        (cb (-> curr-repl-state
                (update :form #(apply str (butlast %)))
                (update :pos dec)
                (assoc :term-commands [["write" "\b \b"]]))))

      "Enter"
      (when-not (str/blank? (:form curr-repl-state))
        (go (let [result (async/<! (env/eval! compiler-state version (:form curr-repl-state)))]
              (js/console.log "REPL output => " (:form curr-repl-state) result)
              (cb (-> curr-repl-state
                      (assoc :pos 0)
                      (assoc :form "")
                      (update :history
                              (fn [curr-history]
                                (take (:max-history-items curr-repl-state)
                                      (if (= curr-history (first curr-history))
                                        curr-history
                                        (conj curr-history (:form curr-repl-state))))))
                      (assoc :term-commands [["writeln" ""]
                                             ["writeln" (if-some [value (or (:value result) (:error result))]
                                                          ;; TODO: a nicer pretty printing fn perhaps...
                                                          (pr-str value)
                                                          "nil")]
                                             ["write" (str (or (:ns result) "cljs.user") " => ")]]))))))

      ("Home" "PageUp" "PageDown" "End")
      nil

      ;; Else, treat as regular keypress
      (cb (-> curr-repl-state
              (update :form str-insert key (:pos curr-repl-state))
              (update :pos inc)
              (assoc :term-commands [["write" key]]))))))

(defn mutate-repl!
  [state term next-state]

  (reset! state next-state)

  (doseq [[cmd val] (:term-commands next-state)]
    (case cmd
      "write" (.write term val)
      "writeln" (.writeln term val)
      (js/console.warn "Unknown term command " cmd))))

(def initial-state
  {:form              ""
   :pos               0
   :history-index     -1
   :max-history-items 50
   :history           '()})

(defui repl [{:keys [compiler-state db]} _]
  (let [container (react/useRef)
        [version _] (rehook/use-atom-path db [:version])]
    (rehook/use-effect
     (fn []
       (let [fit     (FitAddon.)
             term    (terminal fit)
             state   (atom initial-state)
             repl-cb (partial mutate-repl! state term)
             current (aget container "current")]
         (.open term current)
         (.fit fit)
         (.write term "cljs.user => ")
         (.onKey term #(handle-repl-key compiler-state version @state repl-cb %))
         (fn []
           (.dispose term))))
     [version])

    [:div {:style {:width "100%" :height "200px"}
           :ref   container}]))