#! /bin/sh
set -euxo

npx clj-kondo --lint src
clojure -m cljsfiddle.manifest
