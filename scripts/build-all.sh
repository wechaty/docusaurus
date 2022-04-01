#!/usr/bin/env bash

set -eo pipefail

function buildDocusarus () {
  pushd docusaurus
  rm -fr build
  npm install
  npx docusaurus build
  mv build/sitemap.xml build/sitemap-docusaurus.xml
  popd
}

function buildManifest () {
  FILE=$1
  VERSION=$(npx pkg-jq -r .version)
  cat <<_POD_ > "$FILE"
{"version":"$VERSION"}
_POD_
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

rm -f "$target"/README.md
touch "$target"/.nojekyll
buildManifest "$target"/manifest.json
