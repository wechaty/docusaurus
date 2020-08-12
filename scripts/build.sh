#!/usr/bin/env bash

set -eo pipefail

function buildDocusarus () {
  pushd docusaurus
  rm -fr build
  npx docusaurus build
  popd
}

function buildJekyll () {
  make build
}


target=${1:-new-gh-pages}
[ -d "$target" ] || {
  >&2 echo "$target directory not exist!"
  exit 1
}

buildDocusarus
buildJekyll

cp -Rav docusaurus/build/* "$target"
cp -Rav _site/* "$target"
