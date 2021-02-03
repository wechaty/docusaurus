#!/usr/bin/env ts-node

import test  from 'tstest'

import fs   from 'fs'
import path from 'path'
import util from 'util'

import globCB         from 'glob'
import { loadFront }  from 'yaml-front-matter'

import {
  getFrontmatterTeaserList,
  getMarkdownImageList,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

const glob = util.promisify(globCB)

test('all images linked from the post should be stored local (in the repo) for preventing the 404 error in the future.', async t => {
  const URL_WHITE_LIST_REGEX = [
    /badge\.fury\.io/i,
    /dockeri\.co\/image/i,
    /github\.com\/.*\/workflows\//i,
    /githubusercontent\.com/i,
    /herokucdn\.com/i,
    /images\.microbadger\.com/i,
    /img\.shields\.io/i,
    /pepy\.tech\/badge/i,
    /sourcerer\.io/i,
    /wechaty\.github\.io/i,
    /wechaty\.js\.org/i,
  ]
  const isNotWhiteList = (url: string) => !URL_WHITE_LIST_REGEX.some(regex => regex.test(url))

  const postsFileList        = await glob(`${JEKYLL_FOLDER.posts}/*.md`)
  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/*.md`)

  const getAvatarList = (file: string): string[] => {
    const front = loadFront(fs.readFileSync(file))
    if (front.avatar) {
      return [front.avatar]
    }
    return []
  }

  const allImageList = [
    ...postsFileList.map(getFrontmatterTeaserList).flat(),
    ...postsFileList.map(getMarkdownImageList).flat(),
    ...contributorsFileList.map(getAvatarList).flat(),
  ].filter(isNotWhiteList)

  for (const image of allImageList) {
    if (/^http/i.test(image)) {
      t.fail(`"${image}" should put image files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_FOLDER.root, image)
      const good = fs.existsSync(filename)
      t.true(good, `"${image}" should exist`)
    }
  }
})
