(ns cljsfiddle.env.core
  (:require [cljs.core.async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.js :as cljs.js]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]))

(defn state []
  (env/default-compiler-env))

(defn init
  [compiler-state sandbox-version]
  (let [path (str "/sandbox/" sandbox-version "/bootstrap")]
    (go (<p! (js/Promise. #(boot/init compiler-state {:path path} %))))))

(defn eval-opts
  [compiler-state]
  {:eval cljs.js/js-eval
   :load (partial boot/load compiler-state)})

(defn eval!
  [compiler-state form]
  (go (<p! (js/Promise. #(cljs.js/eval-str compiler-state form nil (eval-opts compiler-state) %)))))

#_(defn restart-env!
  [{:keys [compiler-state]} sandbox-version {:keys [metadata source]}]
  (go #_(reset! compiler-state (deref (state)))
   (async/<! (eval! compiler-state sandbox-version source))))