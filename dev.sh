#! /bin/sh

rm -rf resources/public/cljsfiddle
clj -m cljs.main -co build.edn -c
npx webpack --mode=development
