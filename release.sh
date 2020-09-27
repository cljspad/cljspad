#! /bin/sh
set -e

if [ -z "$*" ]; then
  echo "Missing version argument: ./release.sh VERSION_NUMBER"
  exit 1;
fi

./lint.sh

export SANDBOX_VERSION=$1
export SANDBOX_ASSET_PATH="/sandbox/${SANDBOX_VERSION}/cljsfiddle"

rm -rf resources/public/bootstrap
rm -rf resources/public/cljsfiddle
rm -rf resources/public/monaco

npm install
npx webpack --mode=production
shadow-cljs compile bootstrap app
