#! /bin/sh
set -e

if [ -z "$*" ]; then
  echo "Missing version argument: ./release.sh VERSION_NUMBER"
  exit 1;
fi

./scripts/lint.sh

export SANDBOX_VERSION=$1
export SANDBOX_ASSET_PATH="/sandbox/${SANDBOX_VERSION}/cljspad"

rm -rf resources/public/bootstrap
rm -rf resources/public/cljspad
rm -rf resources/public/monaco

npm install
npx webpack --mode=production
shadow-cljs compile app