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

/**
 * Issue #325: Keep all filenames & url as lowercase, and use - to connect words instead of spac
 *  https://github.com/wechaty/wechaty.js.org/issues/325
 *
 * Issue #585: Blog post author should be all lowercase #585
 *  https://github.com/wechaty/wechaty.js.org/issues/585
 */
test('filename only allow [a-z0-9-_.]', async t => {
  const REGEX = /^[a-z0-9/_.-]+$/
  const WHITE_LIST_REGEX_LIST = [
    new RegExp('/assets/js/viewer-js'),
  ]

  const assetsFileList       = await glob(`${JEKYLL_FOLDER.assets}/**/*`)
  const postsFileList        = await glob(`${JEKYLL_FOLDER.posts}/**/*`)
  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/**/*`)

  const isNotWhiteList = (filename: string) => WHITE_LIST_REGEX_LIST.every(regex => !regex.test(filename))

  const filenameList = [
    ...assetsFileList,
    ...contributorsFileList,
    ...postsFileList,
  ].filter(isNotWhiteList)
    .map(stripRepoRoot)

  for (const filename of filenameList) {
    const ok = REGEX.test(filename)
    if (!ok) {
      t.fail(`"${filename}" contains all lowercase and no specicial characters`)
    }
  }

  t.pass(`total ${filenameList.length} files checked.`)
})
