#!/usr/bin/env ts-node

import test  from 'tstest'

import util   from 'util'
import globCB from 'glob'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

import {
  stripRepoRoot,
}                             from '../../src/repo-root'
import { getFrontmatterCategoryList } from '../../src/jekyll/get-frontmatter-category-list'

const glob = util.promisify(globCB)

test('front matter key `categories` must contains at lease one preset category', async t => {
  const PRESET_CATEGORIES_LIST = [
    'announcement',
    'article',
    'event',
    'feature',
    'fun',
    'gsod', // Googl Season of Docs
    'ospp', // Open Source Promotion Plan, Chinese clone of Google summer of code
    'hacking',
    'interview',
    'migration',
    'milestone',
    'npm',
    'project',
    'proposal',
    'shop',
    'story',
    'talk',
    'tutorial',
  ]
  const isPreset = (category: string) => PRESET_CATEGORIES_LIST.includes(category)

  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const categoryList  = getFrontmatterCategoryList(file)

    if (!categoryList.length) {
      t.fail(`"${stripRepoRoot(file)}" categories(${categoryList.length}) should have at lease one category`)
    }

    const allPreset = categoryList.every(isPreset)
    if (!allPreset) {
      t.fail(`"${stripRepoRoot(file)}" non of categories(${categoryList.join(',')}) is in preset(${allPreset ? '...' : PRESET_CATEGORIES_LIST.join(',')})`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked.`)
})
