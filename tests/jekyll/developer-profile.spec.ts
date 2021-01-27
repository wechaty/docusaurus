#!/usr/bin/env ts-node

import test  from 'tstest'

import path   from 'path'
import util   from 'util'
import fs     from 'fs'
import globCB from 'glob'

import { loadFront } from 'yaml-front-matter'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

import {
  stripRepoRoot,
}                             from '../../src/repo-root'

const glob = util.promisify(globCB)

test('front matter key `author` should has a value exist in jekyll/_developers/__VALUE__.md file', async t => {
  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const author = front.author
    t.true(author, `"${stripRepoRoot(file)}" author has been set to ${author}`)

    const authorFile = path.join(JEKYLL_FOLDER.root, '_developers', author + '.md')
    const good = fs.existsSync(authorFile)
    t.true(good, `"${stripRepoRoot(file)}" author profile at ${stripRepoRoot(authorFile)}`)
  }
})

test('developer profile file (jekyll/_developers/__AUTHOR__.md) filename must match /[a-z0-9_-.]+/', async t => {
  const REGEX = new RegExp('/[a-z0-9_.-]+.md$')

  const developersFileList = await glob(`${JEKYLL_FOLDER.developers}/**/*`)
  const nameList = developersFileList.map(stripRepoRoot)

  for (const filename of nameList) {
    const good = REGEX.test(filename)
    t.true(good, `"${filename}" is match ${REGEX}`)
  }
})

test('developer project avatar should be put under assets/developers/ folder', async t => {
  const developersFileList = await glob(`${JEKYLL_FOLDER.developers}/*.md`)

  for (const file of developersFileList) {
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
