#!/usr/bin/env ts-node

import test  from 'tstest'

import util   from 'util'
import globCB from 'glob'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

import {
  stripRepoRoot,
}                             from '../../src/repo-root'

const glob = util.promisify(globCB)

test('files in `_posts/` must have name prefix with `YYYY-MM-DD-`', async t => {
  const REGEX = /\/\d\d\d\d-\d\d-\d\d-.+/
  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    t.true(good, `"${filename}" have name started with YYYY-MM-DD-`)
  }
})

test('files in `_posts/` must contain at least three slugs connected by dash after the date prefix (slug1-slug2-slug3)', async t => {
  const PREFIX_REGEX = /^.+\/\d\d\d\d-\d\d-\d\d-/
  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    let name = filename.replace(PREFIX_REGEX, '')
    name = name.replace(/\.md$/, '')

    const slugList = name.split('-')
    const good = slugList.length >= 3

    t.true(good, `"${filename.replace(JEKYLL_FOLDER.posts + '/', '')}" have at least 3 slugs`)
  }
})

test('files in `_posts/` must end with `.md` file extension', async t => {
  const REGEX = /\.md$/
  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    t.true(good, `"${stripRepoRoot(filename)}" end with .md`)
  }
})
