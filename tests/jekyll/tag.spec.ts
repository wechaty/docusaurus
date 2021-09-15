#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import util   from 'util'
import fs     from 'fs'
import globCB from 'glob'

import { loadFront } from 'yaml-front-matter'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod.js'

import {
  stripRepoRoot,
}                             from '../../src/repo-root.js'
import { getFrontmatterCategoryList } from '../../src/jekyll/get-frontmatter-category-list.js'

const glob = util.promisify(globCB)

const getFileToTagsMap = async () => {
  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  const fileTagMap = {} as { [file: string]: string[] }

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)

    let tagList  = front['tags']
    if (!Array.isArray(tagList)) {
      tagList = tagList
        ? [tagList]
        : []
    }

    fileTagMap[file] = tagList
  }

  return fileTagMap
}

test('front matter key `tags` must contact at least one tag', async t => {
  const tagMap = await getFileToTagsMap()

  for (const [file, tagList] of Object.entries(tagMap)) {
    /**
     * Must has at least 1 tag
     */
    if (!tagList.length) {
      t.fail(`"${stripRepoRoot(file)}" tags(${tagList.length}) has at least one tag`)
    }
  }

  t.pass(`total ${Object.keys(tagMap).length} files checked`)
})

test('front matter key `tags` must not black listed', async t => {
  const TAG_BLACK_LIST = [
    [
      /^wechaty$/,
      'Everything is related to wechaty, so no need to add it.',
    ],
    [
      /\s/,
      'Space is not allowed in tag',
    ],
    [
      /[A-Z]/,
      'Upper case is not allowed in tag',
    ],
  ] as [RegExp, string][]

  const isBlacked = (tag: string) => {
    let isBlacked = false
    for (const black of TAG_BLACK_LIST) {
      isBlacked = black[0].test(tag)
      if (isBlacked) {
        return black[1]
      }
    }
    return false
  }

  const tagMap = await getFileToTagsMap()

  for (const [file, tagList] of Object.entries(tagMap)) {
    for (const tag of tagList) {
      const msg = isBlacked(tag)
      if (msg) {
        t.fail(`"${stripRepoRoot(file)}" tag(${tag}): ${msg}`)
      }
    }
  }

  t.pass(`total ${Object.keys(tagMap).length} files checked`)
})

test('tags naming convension', async t => {
  const recommendedTags = {
    donut: [
      'wechaty-puppet-donut',
    ],
    dotnet: [
      'csharp-wechaty',
      'dotnet-wechaty',
    ],
    go: [
      'go-wechaty',
    ],
    java: [
      'java-wechaty',
    ],
    padlocal: [
      'wechaty-puppet-padlocal',
    ],
    'puppet-provider': [
      'puppet-providers',
      'wechaty-puppet-provider',
    ],
    'puppet-service': [
      'puppet-services',
      'wechaty-puppet-service',
    ],
    python: [
      'python-wechaty',
    ],
  } as {
    [tag: string]: string[],
  }

  const typoToGoodTagMap = {} as { [typo: string]: undefined | string }
  Object.entries(recommendedTags)
    .forEach(([goodTag, typoTagList]) => {
      typoTagList.forEach(typoTag => { typoToGoodTagMap[typoTag] = goodTag })
    })

  const hasTypoTag = (tag: string) => typoToGoodTagMap[tag]

  const fileTagsMap = await getFileToTagsMap()

  // const tagList = [...new Set(Object.values(fileTagsMap).flat())]
  // for (const tag of tagList.sort()) {
  //   console.info(tag)
  // }

  for (const [file, tagList] of Object.entries(fileTagsMap)) {
    for (const tag of tagList) {
      const recommendedTag = hasTypoTag(tag)
      if (recommendedTag) {
        t.fail(`"${stripRepoRoot(file)}" tag ${tag} need to be renamed to ${recommendedTag}`)
      }
    }
  }

  t.pass(`total ${Object.keys(fileTagsMap).length} files checked`)
})

/**
 * #710 - Enforce blog posts with category 'project' to contain one of the tags
 *  https://github.com/wechaty/wechaty.js.org/issues/710
 */
test('tags for project category', async t => {
  /**
   * Categories for Chatbots
   *  https://research.aimultiple.com/chatbot-applications/
   */
  const TAGS = {
    automotive    : 'Cars',
    devops        : 'DevOps & CI/CD',
    ecommerce     : 'E-Commerce',
    ecosystem     : 'Ecosystem for Wechaty community',
    education     : 'learning, talk to the professor, application management, and manage course schedules',
    entertainment : 'Movie updates, booking tickets, etc.',
    finance       : 'banking and Insurance: Account updates, OTPs, account transactions, Suspicious account, Insurance premium updates, and payment, recommend right insurance products, compare insurance premiums, password setting, and new loans, credit card updates, etc.',
    game          : 'Interactive games',
    healthcare    : '',
    hospitality   : '',
    insurance     : '',
    media         : 'Send digital newspapers, etc.',
    other         : '',
    productivity  : '',
    'real-estate' : 'Real Estates',
    social        : '',
    travel        : 'Browse hotels and tickets, booking, send boarding pass, etc',
    utility       : '',
  }

  const postsFileList   = await glob(`${JEKYLL_FOLDER.posts}/**/*`)
  const tagMap = await getFileToTagsMap()

  for (const file of postsFileList) {
    const categoryList  = getFrontmatterCategoryList(file)
    const tagList = tagMap[file]!

    if (tagList?.length <= 0) {
      continue
    }

    if (!categoryList.includes('project')) {
      continue
    }

    const tagOk = tagList.some(tag => tag in TAGS)
    if (!tagOk) {
      t.fail([
        `"${stripRepoRoot(file)}" has category "project":`,
        `   it's tags should contain one of "${Object.keys(TAGS).join(',')}"`,
        '',
        '   Learn more from Issue #710: Enforce blog posts with category "project" to contain one of the tags',
        '     Url: https://github.com/wechaty/wechaty.js.org/issues/710',
      ].join('\n'))
    }
  }

  t.pass(`total ${Object.keys(tagMap).length} files checked`)
})
