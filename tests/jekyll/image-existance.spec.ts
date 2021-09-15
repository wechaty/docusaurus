#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import fs   from 'fs'
import path from 'path'
import lodash   from 'lodash'

import {
  isWhiteListedRemoteUrl,
  isUrlExist,
  getAllImageList,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod.js'

const not = (func: (...args: any[]) => boolean) => (...args: any) => !func(...args)

// const isGitHubUserContent = (url: string) => /\.githubusercontent.com\//i.test(url)

const getRecentRemoteImageList = async () => {
  const allImageList = await getAllImageList({
    since: '1 week ago',
  })

  const remoteImageList = allImageList
    .filter(isWhiteListedRemoteUrl)
    // .filter(not(isGitHubUserContent))

  return remoteImageList
}

const getLocalImageList = async () => {
  const allImageList = await getAllImageList()
  const localImageList  = allImageList.filter(not(isWhiteListedRemoteUrl))
  return localImageList
}

test('all remote images linked from the post should be exist.', async t => {

  // Get rid of duplicated urls
  let remoteImageList = await getRecentRemoteImageList()

  // console.info('remoteImageList', remoteImageList)

  remoteImageList = lodash.shuffle(
    Array.from(
      new Set(
        remoteImageList
      )
    )
  )

  // void chunk
  // void urlExist
  // console.info(remoteImageList)

  const CHUNK_SIZE = 10

  const chunkList = lodash.chunk(
    remoteImageList,
    CHUNK_SIZE,
  )

  for (const chunk of chunkList) {
    // console.info('remoteImageList chunk', chunk)

    process.stdout.write(
      Array(chunk.length + 1).join('.')
    )

    const resultList = await Promise.all(
      chunk.map(isUrlExist)
    )

    // sleep 3 seconds before next check
    await new Promise(resolve => setTimeout(resolve, 3000))

    for (const [i, result] of resultList.entries()) {
      if (!result) {
        t.fail(`"${remoteImageList[i]}" should be http response ok`)
      }
    }
  }

  process.stdout.write('\n')

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
