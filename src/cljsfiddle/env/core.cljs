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
  [compiler-state sandbox-version]
  (let [path (str "/sandbox/" sandbox-version "/bootstrap")]
    (go (<p! (js/Promise. #(boot/init compiler-state {:path path :load-on-init #{'cljs.user}} %))))))

(defn eval-opts
  [compiler-state]
  {:eval    cljs.js/js-eval
   :load    (partial boot/load compiler-state)
   :context :expr})

(defn eval-str
  [compiler-state form]
  (go (<p! (js/Promise. #(cljs.js/eval-str compiler-state form "[test]" (eval-opts compiler-state) %)))))

(defn eval
  [compiler-state form]
  (go (<p! (js/Promise. #(cljs.js/eval compiler-state form (eval-opts compiler-state) %)))))