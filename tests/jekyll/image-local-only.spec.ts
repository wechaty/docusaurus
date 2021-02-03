#!/usr/bin/env ts-node

import test  from 'tstest'

import fs   from 'fs'
import path from 'path'
import util from 'util'
import https from 'https'

import globCB         from 'glob'
import { loadFront }  from 'yaml-front-matter'
import fetch from 'node-fetch'

import {
  getFrontmatterTeaserList,
  getMarkdownImageList,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

const glob = util.promisify(globCB)

test('all images linked from the post should be stored local (in the repo) for preventing the 404 error in the future (except the whitelist ones).', async t => {
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
  const isWhiteList = (url: string) => URL_WHITE_LIST_REGEX.some(regex => regex.test(url))
  const not         = (func: (...args: any[]) => boolean) => (...args: any) => !func(...args)

  // https://stackoverflow.com/a/59944400/1123955
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })
  const httpsOptions = {
    agent: httpsAgent,
  }
  const urlExist = async (url: string) => {
    try {
      const response = await fetch(
        encodeURI(url),
        {
          method: 'HEAD',
          .../^https/.test(url) ? httpsOptions : undefined,
        },
      )
      return response.ok
    } catch (e) {
      console.error(e)
      t.fail(`${url} is invalid`)
      return false
    }
  }

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
  ]

  const remoteImageList = allImageList.filter(isWhiteList)
  const localImageList  = allImageList.filter(not(isWhiteList))

  for (const imageUrl of remoteImageList) {
    if (!/^http/i.test(imageUrl)) {
      t.fail(`"${imageUrl}" should be a remote url for white listed image`)
    } else {
      const good = urlExist(imageUrl)
      t.true(good, `"${imageUrl}" should be HTTP/200`)
    }
  }

  for (const imagePath of localImageList) {
    if (/^http/i.test(imagePath)) {
      t.fail(`"${imagePath}" should put image files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_FOLDER.root, imagePath)
      const good = fs.existsSync(filename)
      t.true(good, `"${imagePath}" should exist`)
    }
  }
})
