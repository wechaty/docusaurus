#!/usr/bin/env bash
#
# Huan(202101): Only show unit tests that failed for easier debug
#

# GitHub Actions is using `shell: /bin/bash -e {0}`
# set +e

if npm test > /dev/null 2>&1; then
  echo 'NPM Testing passed.'
  exit 0
fi

echo 1
2>/dev/null npm test  | grep '^not ok ' || true
echo 2
1>/dev/null npm test                    || true
echo 3

exit 1
