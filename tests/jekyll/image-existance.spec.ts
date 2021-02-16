#!/usr/bin/env ts-node

import test  from 'tstest'

import fs   from 'fs'
import path from 'path'
import util from 'util'
import https from 'https'
import { URL } from 'url'

import globCB    from 'glob'
import {
  chunk,
  shuffle,
}               from 'lodash'

import fetch            from 'node-fetch'
import AbortController  from 'abort-controller'
import {
  getFrontmatterTeaserList,
  getMarkdownImageList,
  getFrontmatterAvatarList,
  isWhiteListedRemoteUrl,
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

const not = (func: (...args: any[]) => boolean) => (...args: any) => !func(...args)

const isGitHubUserContent = (url: string) => /\.githubusercontent.com\//i.test(url)

const getRemoteImageList = async () => {
  const allImageList = await getAllImageList()
  const remoteImageList = allImageList
    .filter(isWhiteListedRemoteUrl)
    .filter(not(isGitHubUserContent))

  return remoteImageList
}

const getLocalImageList = async () => {
  const allImageList = await getAllImageList()
  const localImageList  = allImageList.filter(not(isWhiteListedRemoteUrl))
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

  // Get rid of duplicated urls
  let remoteImageList = await getRemoteImageList()

  remoteImageList = shuffle(
    Array.from(
      new Set(
        remoteImageList
      )
    )
  )

  // void chunk
  // void urlExist
  // console.info(remoteImageList)

  const CONCURRENCY = 20

  const chunkList = chunk(
    remoteImageList,
    CONCURRENCY,
  )

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
    } else if (!/^\//.test(imagePath)) {
      t.fail(`"${imagePath}" should be absoluted path (start with '/')`)
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
