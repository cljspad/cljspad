#! /bin/sh

rm -rf resources/public/bootstrap
rm -rf resources/public/cljsfiddle
rm -rf resources/public/monaco

npx webpack --mode=development
shadow-cljs watch app bootstrap