(ns cljsfiddle.env.core
  (:refer-clojure :exclude [eval])
  (:require [cljs.core.async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.js :as cljs.js]
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

(defn ^js js-promise [fn]
  (js/Promise. fn))

(defn eval-str
  [compiler-state form cb]
  (try (cljs.js/eval-str compiler-state form "[repl]" (eval-opts compiler-state) cb)
       (catch :default e
         (cb {:error e}))))

(def ignored-error-messages
  ;; This is a bit of a hack... (require '[...]) throws this exception
  ;; in compiled mode, despite the require succeeding.
  ;; Possibly a bug in shadow-cljs?
  #{"Namespace \"sandbox.user\" already declared."})

(defn eval-result-xf [result]
  (let [err-msg (error-message result)]
    (when-not (ignored-error-messages err-msg)
      result)))

(defn eval-str-chan
  [compiler-state form]
  (go (<p!  (-> (partial eval-str compiler-state form)
                (js-promise)
                (.then eval-result-xf)
                (.catch prn)))))

(defn eval
  [compiler-state form cb]
  (try (cljs.js/eval compiler-state form (eval-opts compiler-state) cb)
       (catch :default e
         (cb {:error e}))))

(defn eval-chan [compiler-state form]
  (go (<p! (-> (partial eval compiler-state form)
               (js-promise)
               (.then eval-result-xf)
               (.catch prn)))))