#! /bin/sh
set -euxo

npx clj-kondo --lint src
clj -m cljsfiddle.manifest
