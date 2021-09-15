#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import path         from 'path'
import util         from 'util'

import fs     from 'fs'
import globCB from 'glob'
import { loadFront } from 'yaml-front-matter'
import {
  chunk,
  shuffle,
}               from 'lodash'

import {
  JEKYLL_FOLDER,
  isUrlExist,
  getChangedFileList,
  contributorFilenameToUsername,
}                                 from '../../src/jekyll/mod.js'

import {
  stripRepoRoot,
}                             from '../../src/repo-root.js'

const glob = util.promisify(globCB)

test('front matter key `author` should has a value exist in jekyll/_contributors/__VALUE__.md file', async t => {
  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const author = front['author']
    if (!author) {
      t.fail(`"${stripRepoRoot(file)}" author should set to ${author}`)
    }

    const authorFile = path.join(JEKYLL_FOLDER.root, '_contributors', author + '.md')
    const good = fs.existsSync(authorFile)
    if (!good) {
      t.fail(`"${stripRepoRoot(file)}" author profile should exist at ${stripRepoRoot(authorFile)}`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked.`)
})

test('developer profile file (jekyll/_contributors/__AUTHOR__.md) filename must match /[a-z0-9_-.]+/', async t => {
  const REGEX = new RegExp('/[a-z0-9_.-]+.md$')

  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/**/*`)
  const nameList = contributorsFileList.map(stripRepoRoot)

  for (const filename of nameList) {
    const good = REGEX.test(filename)
    if (!good) {
      t.fail(`"${filename}" should match ${REGEX}`)
    }
  }

  t.pass(`total ${nameList.length} files checked.`)
})

test('developer project avatar should be put under assets/contributors/ folder', async t => {
  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/*.md`)

  for (const file of contributorsFileList) {
    const content = fs.readFileSync(file)
    const front   = loadFront(content)

    if (!front['avatar']) {
      t.fail(`"${stripRepoRoot(file)}" should have avatar("${front['avatar']}")`)
    }

    const startWithSlash = /^\//.test(front['avatar'])
    if (!startWithSlash) {
      t.fail(`"${front['avatar']}" should start with '/'`)
    }

    const userName = contributorFilenameToUsername(file)
    const userNameRe = new RegExp(`/contributors/${userName}/`)
    if (!userNameRe.test(front['avatar'])) {
      t.fail(`avatar "${front['avatar']}" must be saved to folder "assets/contributors/${userName}"`)
    }

    if (/^http/i.test(front['avatar'])) {
      t.fail(`${stripRepoRoot(file)} should put avatar files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_FOLDER.root, front['avatar'])
      const good = fs.existsSync(filename)
      if (!good) {
        t.fail(`${stripRepoRoot(filename)} should exist`)
      }
    }
  }

  t.pass(`total ${contributorsFileList.length} files checked`)
})

test('developer profile name must be GitHub username', async t => {
  const allContributorsFileList = (await glob(`${JEKYLL_FOLDER.contributors}/**/*`))
    .map(stripRepoRoot)

  const changedFileList = await getChangedFileList({
    since: '1 week ago',
  })

  const needToBeChecked = (file: string) => changedFileList.includes(file)

  // console.info('changedFileList', changedFileList)
  // console.info('allContributorsFileList', allContributorsFileList)

  let urlList = allContributorsFileList
    .filter(needToBeChecked)
    .map(contributorFilenameToUsername)
    .map(name => `https://github.com/${name}`)

  /**
   * Huan(202107): Only check part of them because of the limitation of GitHub API
   *
   *  Question: what is the maximum number for the following code?
   */
  const MAX_NUM   = 50
  const CHUNK_NUM = 10

  const SLEEP_SECONDS_BETWEEN_CHUNKS = 2

  const allUrlNum = urlList.length

  if (urlList.length > MAX_NUM) {
    urlList = shuffle(urlList)
      .slice(0, MAX_NUM)
  }

  // console.info(urlList)

  const nameListChunk = chunk(urlList, CHUNK_NUM)

  for (const chunk of nameListChunk) {
    process.stdout.write(Array(chunk.length + 1).join('.'))
    const resultList = await Promise.all(
      chunk.map(isUrlExist)
    )

    await new Promise(resolve => setTimeout(resolve, SLEEP_SECONDS_BETWEEN_CHUNKS))

    for (const [i, isExist] of resultList.entries()) {
      if (!isExist) {
        process.stdout.write('\n')
        t.fail(`"${chunk[i]}" should exist on GitHub`)
      } else {
        // t.pass(`"${chunk[i]}" should exist on GitHub`)
      }
    }
  }

  process.stdout.write('\n')

  t.pass(`${urlList.length}/${allUrlNum} contributors profile names checked`)
})
