#!/usr/bin/env ts-node

import test   from 'tstest'

import path         from 'path'
import util         from 'util'

import fs     from 'fs'
import globCB from 'glob'
import { loadFront } from 'yaml-front-matter'
import { chunk } from 'lodash'

import {
  JEKYLL_FOLDER,
  isUrlExist,
  getChangedFileList,
}                             from '../../src/jekyll/mod'

import {
  stripRepoRoot,
}                             from '../../src/repo-root'

const glob = util.promisify(globCB)

test('front matter key `author` should has a value exist in jekyll/_contributors/__VALUE__.md file', async t => {
  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const author = front.author
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

    if (!front.avatar) {
      t.fail(`"${stripRepoRoot(file)}" should have avatar("${front.avatar}")`)
    }

    const startWithSlash = /^\//.test(front.avatar)
    if (!startWithSlash) {
      t.fail(`"${front.avatar}" should start with '/'`)
    }

    if (/^http/i.test(front.avatar)) {
      t.fail(`${stripRepoRoot(file)} should put avatar files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_FOLDER.root, front.avatar)
      const good = fs.existsSync(filename)
      if (!good) {
        t.fail(`${stripRepoRoot(filename)} should exist`)
      }
    }
  }

  t.pass(`total ${contributorsFileList.length} files checked`)
})

test('developer profile name must be GitHub username', async t => {
  const pickName = (filePath: string) => {
    const matches = /\/([^./]+?)\.md$/.exec(filePath)
    if (!matches) {
      throw new Error(`no matches for profile name for "${filePath}"`)
    }
    return matches[1]
  }

  const allContributorsFileList = (await glob(`${JEKYLL_FOLDER.contributors}/**/*`))
    .map(stripRepoRoot)

  const changedFileList = await getChangedFileList({
    since: '1 week ago',
  })

  // console.info('changedFileList', changedFileList)
  // console.info('allContributorsFileList', allContributorsFileList)

  const urlList = allContributorsFileList
    .filter(file => changedFileList.includes(file))
    .map(pickName)
    .map(name => `https://github.com/${name}`)

  // console.info(urlList)

  const nameListChunk = chunk(urlList, 10)

  for (const chunk of nameListChunk) {
    process.stdout.write(Array(chunk.length + 1).join('.'))
    const resultList = await Promise.all(
      chunk.map(isUrlExist)
    )

    // await new Promise(resolve => setTimeout(resolve, 5000))

    for (const [i, isExist] of resultList.entries()) {
      if (!isExist) {
        console.info()
        t.fail(`"${chunk[i]}" should exist on GitHub`)
      } else {
        // t.pass(`"${chunk[i]}" should exist on GitHub`)
      }
    }
  }

  console.info()
  t.pass(`${urlList.length} contributors profile names checked`)
})
