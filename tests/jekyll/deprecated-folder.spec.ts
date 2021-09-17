#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import path from 'path'
import fs   from 'fs'
import util from 'util'

import globCB         from 'glob'

import {
  REPO_ROOT,
  stripRepoRoot,
}                     from '../../src/repo-root.js'

const glob = util.promisify(globCB)

test('misplaced files', async t => {
  const DEPRECATED_FOLDER_LIST = {
    // 👇 https://github.com/wechaty/wechaty.js.org/pull/648/commits/6e435f65ef26b251375561b5c82d1b66cc2d7619
    jekyll  : 'jekyll/*.md',
  }

  const WHITE_LIST = [
    'jekyll/README.md',
  ]

  const isNotWhiteListed = (file: string) => !WHITE_LIST.includes(file)

  const missPlacedFileListList = await Promise.all(
    Object.values(DEPRECATED_FOLDER_LIST)
      .map(matchGlob => path.join(REPO_ROOT, matchGlob))
      .map(matchGlob => glob(matchGlob))
  )
  const missPlacedFileList = missPlacedFileListList
    .flat()
    .map(stripRepoRoot)
    .filter(isNotWhiteListed)

  const isGood = missPlacedFileList.length === 0
  t.true(isGood, `should no miss placed files. ${missPlacedFileList.join(', ')}`)
})

test('folder _contributors/, _posts/, and assets/ has been moved to `jekyll/` (e.g. _posts/ => jekyll/_posts/)', async t => {
  const DEPRECATED_FOLDER_LIST = {
    _contributor  : '_contributor might a typo of `jekyll/_contributors`',
    _contributors : '_contributors/ has been moved to `jekyll/_contributors`',
    _developer  : '_developer might a typo of `jekyll/_contributors`',
    _developers : '_developers/ has been moved to `jekyll/_contributors`',
    // 👇 https://github.com/wechaty/wechaty.js.org/pull/648
    _post       : '_post might a typo of `jekyll/_posts`',
    _posts      : '_posts/ has been moved to `jekyll/_posts`',
    assets      : 'assets/ has been moved to `jekyll/assets`',
  }

  for (const [folder, memo] of Object.entries(DEPRECATED_FOLDER_LIST)) {
    const existDeprecatedFolder = fs.existsSync(path.join(REPO_ROOT, folder))
    if (existDeprecatedFolder) {
      t.fail(`${folder}/ should not exist: ${memo}`)
    }
  }

  t.pass(`${Object.keys(DEPRECATED_FOLDER_LIST).length} deprecated folders checked.`)
})
