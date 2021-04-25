#!/usr/bin/env ts-node

import test from 'tstest'

import { contributorFilenameToUsername } from './contributor-filename-to-username'

test('contributorFilenameToUsername()', async t => {
  const FILE_NAME = 'jekyll/_contributors/nibble0101.md'
  const EXPECTED_USER_NAME = 'nibble0101'

  const userName = contributorFilenameToUsername(FILE_NAME)
  t.equal(userName, EXPECTED_USER_NAME, 'should get expected username from filename')
})
