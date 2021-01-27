#!/usr/bin/env ts-node

import test  from 'tstest'

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

test('front matter key `tags` must contact at least one tag and not black listed', async t => {
  const TAG_BLACK_LIST = [
    'wechaty', // we should not add wechaty because everything is related to wechaty
    // TODO: should we permit space in tag name?
    // TODO: should we only permit the lowercase tag characters? or CamelCase?
  ]
  const isNotBlackList = (tag: string) => !TAG_BLACK_LIST.includes(tag)
  const isNotIncludeSpace = (tag: string) => !/\s+/.test(tag)

  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)

    let tagList  = front.tags
    if (!Array.isArray(tagList)) {
      tagList = tagList
        ? [tagList]
        : []
    }
    t.true(tagList.length, `"${stripRepoRoot(file)}" tags(${tagList.length}) has at least one tag`)

    const notBlackListed = tagList.every(isNotBlackList)
    t.true(notBlackListed, `"${stripRepoRoot(file)}" tags(${notBlackListed ? tagList.length : tagList.join(',')}) has no black listed`)

    const notIncludeSpace = tagList.every(isNotIncludeSpace)
    t.true(notIncludeSpace, `"${stripRepoRoot(file)}" tags(${notIncludeSpace ? tagList.length : tagList.join(',')}) does not include space in tag`)
  }
})
