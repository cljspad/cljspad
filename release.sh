#! /bin/sh

rm -rf resources/public/cljsfiddle
clj -m cljs.main -co build.edn -O none --compile
clj -m cljsfiddle.concat build.edn bundle.js
npx webpack