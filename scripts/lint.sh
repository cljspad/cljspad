#! /bin/sh
set -e

npx clj-kondo --lint src

clojure -Sdeps '{:deps {cljfmt {:mvn/version "0.7.0"}}}' \
  -m cljfmt.main check \
  --indents indentation.edn

clojure -m cljspad.manifest
