#!/usr/bin/env ts-node

import test from 'tstest'

import path from 'path'

import { JEKYLL_FOLDER } from './folders'

import { getFrontmatterCategoryList } from './get-frontmatter-category-list'

test('getFrontmatterCategoryList', async t => {
  const FILE = path.join(
    JEKYLL_FOLDER.posts,
    '2016-12-03-welcome-to-wechaty.md',
  )
  const EXPECTED_CATEGORY_NUM  = 1
  const EXPECTED_POST_CATEGORY = 'announcement'

  const categoryList = getFrontmatterCategoryList(FILE)

  t.equal(categoryList.length, EXPECTED_CATEGORY_NUM, `should get ${EXPECTED_CATEGORY_NUM} categories`)
  t.equal(categoryList[0], EXPECTED_POST_CATEGORY, 'should get announcement category')
})
