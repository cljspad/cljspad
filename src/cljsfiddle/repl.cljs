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
  [compiler-state curr-repl-state cb ev]
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

      ;; TODO: implement history...
      "ArrowUp"
      nil

      "ArrowDown"
      nil

      "Backspace"
      (when (pos? (:pos curr-repl-state))
        (cb (-> curr-repl-state
                (update :form #(apply str (butlast %)))
                (update :pos dec)
                (assoc :term-commands [["write" "\b \b"]]))))

      "Enter"
      (when-not (str/blank? (:form curr-repl-state))
        (go (let [result (async/<! (env/eval! compiler-state (:form curr-repl-state)))]
              (js/console.log "???" (:form curr-repl-state) result)
              (cb (-> curr-repl-state
                      (assoc :pos 0)
                      (assoc :form "")
                      (assoc :term-commands [["writeln" ""]
                                             ["writeln" (if-some [value (or (:value result) (:error result))]
                                                          ;; TODO: a nicer pretty printing fn
                                                          (pr-str value)
                                                          "nil")]
                                             ["write" (str (:ns result "cljs.user") " => ")]]))))))

      (cb (-> curr-repl-state
              (update :form str-insert key (:pos curr-repl-state))
              (update :pos inc)
              (assoc :term-commands [["write" key]]))))))

(defn mutate-repl!
  [state term {:keys [form pos history term-commands]}]

  (reset! state {:form form :pos pos :history history})

  (doseq [[cmd val] term-commands]
    (case cmd
      "write" (.write term val)
      "writeln" (.writeln term val)
      (js/console.warn "Unknown term command " cmd))))

(defui repl [{:keys [compiler-state]} _]
  (let [container (react/useRef)]
    (rehook/use-effect
     (fn []
       (let [fit   (FitAddon.)
             term  (terminal fit)
             state (atom {:form    ""
                          :pos     0
                          :history []})
             cb   (partial mutate-repl! state term)]
         (let [current (aget container "current")]
           (.open term current)
           (.fit fit)
           (.write term "cljs.user => ")
           (.onKey term #(handle-repl-key compiler-state @state cb %))
           (fn []
             (.dispose term)))))
     [])

    [:div {:style {:width "100%" :height "200px"}
           :ref   container}]))