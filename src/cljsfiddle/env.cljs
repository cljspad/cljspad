(ns cljsfiddle.env
  (:refer-clojure :exclude [eval])
  (:require [cljs.js :as cljs.js]
            [shadow.cljs.bootstrap.browser :as boot]))

(defn error-message [result]
  (-> result :error ex-cause ex-message))

(defn state []
  (cljs.js/empty-state))

(defn init
  [compiler-state sandbox-version cb]
  (let [path (str "/sandbox/" sandbox-version "/bootstrap")]
    (boot/init compiler-state {:path path :load-on-init '#{sandbox.user}} cb)))

(defn eval-opts
  [compiler-state]
  {:eval cljs.js/js-eval
   :load (partial boot/load compiler-state)
   :ns   (symbol "sandbox.user")})

(defn eval-str
  [compiler-state form cb]
  (cljs.js/eval-str compiler-state form nil (eval-opts compiler-state) cb))

(def ignored-error-messages
  ;; This is a bit of a hack... (require '[...]) throws this exception
  ;; in compiled mode, despite the require succeeding.
  ;; Possibly a bug in shadow-cljs?
  #{"Namespace \"sandbox.user\" already declared."})

(defn eval-result-xf [result]
  (let [err-msg (error-message result)]
    (when-not (ignored-error-messages err-msg)
      result)))

(defn ^js eval-str-promise
  [compiler-state form]
  (-> (partial eval-str compiler-state form)
      (js/Promise.)
      (.then eval-result-xf)))