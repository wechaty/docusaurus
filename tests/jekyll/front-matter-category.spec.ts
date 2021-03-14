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

test('front matter key `categories` must contains at lease one preset category', async t => {
  const PRESET_CATEGORIES_LIST = [
    'announcement',
    'article',
    'event',
    'feature',
    'fun',
    'hacking',
    'interview',
    'migration',
    'npm',
    'project',
    'shop',
    'story',
    'tutorial',
  ]
  const isPreset = (category: string) => PRESET_CATEGORIES_LIST.includes(category)

  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const content       = fs.readFileSync(file)
    const front         = loadFront(content)

    let categoryList  = front.categories
    if (!Array.isArray(categoryList)) {
      categoryList = categoryList
        ? [categoryList]
        : []
    }

    if (!categoryList.length) {
      t.fail(`"${stripRepoRoot(file)}" categories(${categoryList.length}) should have at lease one category`)
    }

    const allPreset = categoryList.every(isPreset)
    if (!allPreset) {
      t.fail(`"${stripRepoRoot(file)}" should only use categories(${categoryList.join(',')}) is in preset(${allPreset ? '...' : PRESET_CATEGORIES_LIST.join(',')})`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked.`)
})
