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

target=$1

if [ -z "$target" ]; then
  >&2 echo "You need to provide a folder name to store the build artifact fles."
  exit 1
elif [ ! -d "$target" ]; then
  >&2 echo "$target directory not exist!"
  exit 1
fi

buildDocusarus
buildJekyll

cp -Rav docusaurus/build/* "$target"
cp -Rav _site/* "$target"

touch "$target"/.nojekyll
