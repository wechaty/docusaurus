#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import path from 'path'

import { JEKYLL_FOLDER } from './folders.js'

import { getFrontmatterTeaserList } from './get-frontmatter-teaser-list.js'

test('getFrontmatterTeaserList', async t => {
  const FILE = path.join(
    JEKYLL_FOLDER.posts,
    '2021-01-15-carpool-bot-with-wechaty-1.md',
  )
  const EXPECTED_TEASER_NUM = 1
  const EXPECTED_TEASER_URL = '/assets/2021/01-carpool-bot-with-wechaty-1/4.jpeg'

  const imageList = getFrontmatterTeaserList(FILE)

  t.equal(imageList.length, EXPECTED_TEASER_NUM, `should get ${EXPECTED_TEASER_NUM} teaser images`)
  t.equal(imageList[0], EXPECTED_TEASER_URL, 'should get teaser url')
})
