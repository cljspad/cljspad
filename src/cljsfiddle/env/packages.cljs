(ns cljsfiddle.env.packages
  (:require [cljs.core.async :refer-macros [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljsfiddle.env.core :as env]))

(defmulti load-package (fn [_ctx id] id))

(defmethod load-package :core.async
  [{:keys [compiler-state]} _]
  (go (<p! (env/load-ns! compiler-state 'cljs.core.async 'async))))

(defmethod load-package :reagent
  [{:keys [compiler-state]} _]
  (go (<p! (env/load-ns! compiler-state 'reagent.core 'rg))
      (<p! (env/load-ns! compiler-state 're-frame.core 'rf))))

(defmethod load-package :rehook
  [{:keys [compiler-state]} _]
  (go (<p! (env/load-ns! compiler-state 'rehook.core 'rehook))))

(defmethod load-package :rum
  [{:keys [compiler-state]} _]
  (go (<p! (env/load-ns! compiler-state 'rum.core 'rum))))

(defmethod load-package :transit
  [{:keys [compiler-state]} _]
  (go (<p! (env/load-ns! compiler-state 'cognitect.transit 'transit))))