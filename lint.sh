#! /bin/sh
set -euxo pipefail

clj-kondo --lint src
