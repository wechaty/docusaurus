#!/usr/bin/env ts-node

import test  from 'tstest'

import path   from 'path'
import util   from 'util'
import fs     from 'fs'
import globCB from 'glob'
import fetch  from 'node-fetch'
import { loadFront } from 'yaml-front-matter'

import {
  JEKYLL_FOLDER,
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
    t.true(author, `"${stripRepoRoot(file)}" author has been set to ${author}`)

    const authorFile = path.join(JEKYLL_FOLDER.root, '_contributors', author + '.md')
    const good = fs.existsSync(authorFile)
    t.true(good, `"${stripRepoRoot(file)}" author profile at ${stripRepoRoot(authorFile)}`)
  }
})

test('developer profile file (jekyll/_contributors/__AUTHOR__.md) filename must match /[a-z0-9_-.]+/', async t => {
  const REGEX = new RegExp('/[a-z0-9_.-]+.md$')

  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/**/*`)
  const nameList = contributorsFileList.map(stripRepoRoot)

  for (const filename of nameList) {
    const good = REGEX.test(filename)
    t.true(good, `"${filename}" is match ${REGEX}`)
  }
})

test('developer project avatar should be put under assets/contributors/ folder', async t => {
  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/*.md`)

  for (const file of contributorsFileList) {
    const content = fs.readFileSync(file)
    const front   = loadFront(content)

    t.true(front.avatar, `"${stripRepoRoot(file)}" should have avatar("${front.avatar}")`)

    const startWithSlash = /^\//.test(front.avatar)
    t.true(startWithSlash, `"${front.avatar}" should start with '/'`)

    if (/^http/i.test(front.avatar)) {
      t.fail(`${stripRepoRoot(file)} should put avatar files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_FOLDER.root, front.avatar)
      const good = fs.existsSync(filename)
      t.true(good, `${stripRepoRoot(filename)} should exist`)
    }
  }
})

test('developer profile name must be GitHub username', async t => {
  const pickName = (filePath: string) => {
    const matches = /\/([^./]+?)\.md$/.exec(filePath)
    if (!matches) {
      throw new Error('no matches for profile name')
    }
    return matches[1]
  }

  /**
   * https://stackoverflow.com/a/30219553/1123955
   * curl -w '%{response_code}' 'https://api.github.com/users/zixiaxxx'
   */
  const userNameExist = async (userName: string) => {
    try {
      const response = await fetch(
        `https://github.com/${userName}`,
        {
          method: 'HEAD',
        },
      )
      // console.info(response)
      return response.ok
    } catch (e) {
      console.error(e)
      return false
    }
  }

  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/**/*`)
  const nameList = contributorsFileList.map(pickName)

  const resultList = await Promise.all(nameList.map(userNameExist))

  for (const [i, isExist] of resultList.entries()) {
    t.true(isExist, `"${nameList[i]}" should exist on GitHub`)
  }
})
