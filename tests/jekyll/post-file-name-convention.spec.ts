#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import util   from 'util'
import globCB from 'glob'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod.js'

import {
  stripRepoRoot,
}                             from '../../src/repo-root.js'

const glob = util.promisify(globCB)

test('files in `_posts/` must have name prefix with `YYYY-MM-DD-`', async t => {
  const REGEX = /\/\d\d\d\d-\d\d-\d\d-.+/
  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    if (!good) {
      t.fail(`"${filename}" have name started with YYYY-MM-DD-`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked`)
})

test('files in `_posts/` must contain at least three slugs connected by dash after the date prefix (slug1-slug2-slug3)', async t => {
  const PREFIX_REGEX = /^.+\/\d\d\d\d-\d\d-\d\d-/
  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    let name = filename.replace(PREFIX_REGEX, '')
    name = name.replace(/\.md$/, '')

    const slugList = name.split('-')
    const good = slugList.length >= 3

    if (!good) {
      t.fail(`"${filename.replace(JEKYLL_FOLDER.posts + '/', '')}" have at least 3 slugs`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked.`)
})

test('files in `_posts/` must end with `.md` file extension', async t => {
  const REGEX = /\.md$/
  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    if (!good) {
      t.fail(`"${stripRepoRoot(filename)}" end with .md`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked.`)
})
