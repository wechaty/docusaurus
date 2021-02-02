#!/usr/bin/env bash
#
# Huan(202101): Only show unit tests that failed for easier debug
#

# GitHub Actions is using `shell: /bin/bash -e {0}`
set +e

if npm test > /dev/null 2>&1; then
  echo 'NPM Testing passed.'
  exit 0
fi

2>/dev/null npm test  | grep '^not ok '
1>/dev/null npm test
exit 1
