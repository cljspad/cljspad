#! /bin/sh

rm -rf resources/public/bootstrap
rm -rf resources/public/cljsfiddle
rm -rf resources/public/monaco

shadow-cljs compile app bootstrap
npx webpack --mode=production