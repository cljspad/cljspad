#! /bin/sh
set -e

npx clj-kondo --lint src
clj -m cljspad.manifest
