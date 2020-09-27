#! /bin/sh
set -euxo pipefail

clj-kondo --lint src
clj -m cljsfiddle.manifest