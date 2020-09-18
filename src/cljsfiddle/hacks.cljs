(ns cljsfiddle.hacks)

;; This exists because :target :bundle and cljsjs deps/foreign libs seem to be a little unhappy.
;; Possibly related to: https://github.com/drapanjanas/re-natal/issues/201
;; Maybe a cljs bug(?) - revist/remove when either rum stops depending on cljsjs, or there's a fix in cljs.

(aset js/goog "nodeGlobalRequire" js/require)