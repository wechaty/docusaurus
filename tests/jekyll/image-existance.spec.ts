#!/usr/bin/env ts-node

import test  from 'tstest'

import fs   from 'fs'
import path from 'path'
import {
  chunk,
  shuffle,
}               from 'lodash'

import {
  isWhiteListedRemoteUrl,
  isUrlExist,
  getAllImageList,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

const not = (func: (...args: any[]) => boolean) => (...args: any) => !func(...args)

// const isGitHubUserContent = (url: string) => /\.githubusercontent.com\//i.test(url)

const getRemoteImageList = async () => {
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
  let remoteImageList = await getRemoteImageList()

  // console.info('remoteImageList', remoteImageList)

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

  const CONCURRENCY = 10

  const chunkList = chunk(
    remoteImageList,
    CONCURRENCY,
  )

  for (const chunk of chunkList) {
    process.stdout.write(
      Array(chunk.length).join('.')
    )

    const resultList = await Promise.all(
      chunk.map(isUrlExist)
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
