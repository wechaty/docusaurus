#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import path from 'path'

import { JEKYLL_FOLDER } from './folders.js'

import { getMarkdownImageList } from './get-markdown-image-list.js'

test('getMarkdownImageList', async t => {
  const FILE = path.join(
    JEKYLL_FOLDER.posts,
    '2021-01-15-carpool-bot-with-wechaty-1.md',
  )
  const EXPECTED_IMAGE_LIST = [
    '/assets/2021/01-carpool-bot-with-wechaty-1/1.jpg',
    '/assets/2021/01-carpool-bot-with-wechaty-1/2.jpg',
    '/assets/2021/01-carpool-bot-with-wechaty-1/3.jpg',
  ].sort()
  const imageList = getMarkdownImageList(FILE).sort()
  t.deepEqual(imageList, EXPECTED_IMAGE_LIST, 'should get markdown image list')
})
