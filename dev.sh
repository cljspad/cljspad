#! /bin/sh
set -e

export SANDBOX_VERSION="dev"
export SANDBOX_ASSET_PATH="/sandbox/${SANDBOX_VERSION}/cljsfiddle"

rm -rf resources/public/bootstrap
rm -rf resources/public/cljsfiddle
rm -rf resources/public/monaco

npm install
npx webpack --mode=development
shadow-cljs watch app bootstrap
