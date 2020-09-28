#! /bin/sh
set -e

clojure -Sdeps '{:deps {cljfmt {:mvn/version "0.7.0"}}}' \
  -m cljfmt.main fix \
  --indents indentation.edn