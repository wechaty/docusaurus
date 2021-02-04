#!/usr/bin/env ts-node

import test  from 'tstest'

import fs   from 'fs'
import path from 'path'
import util from 'util'
import https from 'https'
import { URL } from 'url'

import globCB    from 'glob'
import { chunk } from 'lodash'

import fetch            from 'node-fetch'
import AbortController  from 'abort-controller'
import {
  getFrontmatterTeaserList,
  getMarkdownImageList,
  getFrontmatterAvatarList,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

const glob = util.promisify(globCB)

const getAllImageList = async () => {
  const postsFileList        = await glob(`${JEKYLL_FOLDER.posts}/*.md`)
  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/*.md`)

  const allImageList = [
    ...postsFileList.map(getFrontmatterTeaserList).flat(),
    ...postsFileList.map(getMarkdownImageList).flat(),
    ...contributorsFileList.map(getFrontmatterAvatarList).flat(),
  ]

  return allImageList
}

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

const getRemoteImageList = async () => {
  const allImageList = await getAllImageList()
  const remoteImageList = allImageList.filter(isWhiteList)
  return remoteImageList
}

const getLocalImageList = async () => {
  const allImageList = await getAllImageList()
  const localImageList  = allImageList.filter(not(isWhiteList))
  return localImageList
}

test('all remote images linked from the post should be exist.', async t => {
  // https://stackoverflow.com/a/59944400/1123955
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })
  const httpsOptions = {
    agent: httpsAgent,
  }

  const urlExist = async (strUrl: string) => {
    const url = new URL(strUrl)

    const controller = new AbortController()
    const timer = setTimeout(
      () => controller.abort(),
      10 * 1000,  // 10 seconds
    )
    try {
      const baseOptions = {
        signal: controller.signal,
        .../^https/.test(url.protocol) ? httpsOptions : undefined,
      }
      const headOptions = {
        ...baseOptions,
        method: 'HEAD',
      }
      const getOptions = {
        ...baseOptions,
        method: 'GET',
      }

      let response = await fetch(
        url,
        headOptions,
      )

      if (!response.ok) {
        response = await fetch(
          url,
          getOptions
        )
      }

      return response.ok

    } catch (e) {
      console.error(e)
      t.fail(`${url} is not accessable`)
      return false
    } finally {
      clearTimeout(timer)
    }
  }

  const remoteImageList = await getRemoteImageList()
  const chunkList = chunk(remoteImageList, 30)

  for (const chunk of chunkList) {
    process.stdout.write(
      Array(chunk.length).join('.')
    )

    const resultList = await Promise.all(
      chunk.map(urlExist)
    )

    await new Promise(resolve => setTimeout(resolve, 1000))

    for (const [i, result] of resultList.entries()) {
      if (!result) {
        t.fail(`"${remoteImageList[i]}" should be http response ok`)
      }
    }
  }

  console.info()
  t.pass(`total ${remoteImageList.length} remote image urls checked`)
})

test('all local images linked from the post should be exist.', async t => {
  const localImageList = await getLocalImageList()
  for (const imagePath of localImageList) {
    if (/^http/i.test(imagePath)) {
      t.fail(`"${imagePath}" should put image files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_FOLDER.root, imagePath)
      const good = fs.existsSync(filename)
      if (!good) {
        t.fail(`"${imagePath}" should exist`)
      }
    }
  }

  t.pass(`total ${localImageList.length} local image files checked`)
})
