#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import util   from 'util'
import fs     from 'fs'
import globCB from 'glob'

import { loadFront } from 'yaml-front-matter'

import {
  getYearMonth,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod.js'

import {
  stripRepoRoot,
}                             from '../../src/repo-root.js'

const glob = util.promisify(globCB)

/**
 * Issue #351: https://github.com/wechaty/wechaty.js.org/issues/351
 *  Should add teaser for the blog
 */
test('front matter key `image` must has a value to define the teaser image', async t => {
  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const { year } = getYearMonth(file)
    /**
     * Huan(202101): We leave the posts before 2021 as it is
     */
    if (parseInt(year || '0') < 2021) {
      continue
    }

    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const image = front['image']

    if (!image) {
      t.fail(`"${stripRepoRoot(file)}" 'frontmatter.image' should set to a beautiful teaser image`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked`)
})
