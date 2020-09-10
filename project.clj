(defproject wavejumper/cljsfiddle "0.1.0"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.764"]
                 [rehook "2.1.11"]
                 [com.cognitect/transit-cljs "0.8.264"]]

  :plugins [[lein-figwheel "0.5.18"]]

  :figwheel {:http-server-root "public"}

  :cljsbuild {:builds [{:id           "cljsfiddle"
                        :source-paths ["src/"]
                        :figwheel     true
                        :compiler     {:main          "cljsfiddle.core"
                                       :asset-path    "js/out"
                                       :output-to     "resources/public/js/main.js"
                                       :output-dir    "resources/public/js/out"
                                       :optimizations :none
                                       :pretty-print  false
                                       :infer-externs true
                                       :install-deps  true
                                       :npm-deps      {"prop-types"            "^15.7.2"
                                                       "react"                 "^16.13.1"
                                                       "react-dom"             "^16.13.1"
                                                       "react-error-boundary"  "1.2.5"
                                                       "react-frame-component" "4.1.3"
                                                       "react-highlight"       "0.12.0"}}}]})