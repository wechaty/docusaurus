#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

// import path from 'path'

// import { JEKYLL_FOLDER } from './jekyll-folder.js'

import { getChangedFileList } from './get-changed-file-list.js'

const TOTAL_REPO_FILE_NUM = 4105  // 20210218

test('getChangedFileList()', async t => {
  const fileList = await getChangedFileList()
  t.true(fileList.length > TOTAL_REPO_FILE_NUM, 'should get all repo files')

  t.true(fileList.includes('jekyll/_contributors/huan.md'), 'should include huan.md')
})

test('getChangedFileList({ since: 1 month ago })', async t => {
  const fileList = await getChangedFileList({
    since: '1 month ago',
  })
  t.true(fileList.length < TOTAL_REPO_FILE_NUM, 'should not get all repo files')
})
