#!/usr/bin/env ts-node

import test from 'tstest'

import path from 'path'

import { JEKYLL_FOLDER } from './folders'

import { getFrontmatterAvatarList } from './get-frontmatter-avatar-list'

test('getFrontmatterAvatarList', async t => {
  const FILE = path.join(
    JEKYLL_FOLDER.contributors,
    'huan.md',
  )
  const EXPECTED_AVATAR_NUM = 1
  const EXPECTED_AVATAR_PATH = '/assets/contributors/huan/avatar.webp'

  const imageList = getFrontmatterAvatarList(FILE)

  t.equal(imageList.length, EXPECTED_AVATAR_NUM, `should get ${EXPECTED_AVATAR_NUM} avatar images`)
  t.equal(imageList[0], EXPECTED_AVATAR_PATH, 'should get avatar url')
})
