#! /bin/sh
set -euxo pipefail

npx clj-kondo --lint src
clj -m cljsfiddle.manifest
