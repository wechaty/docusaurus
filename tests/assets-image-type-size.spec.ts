#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import fs from 'fs'
import util from 'util'

import probeImageSize from 'probe-image-size'
import globCB         from 'glob'

import {
  DOCUSAURUS_FOLDER,
}                             from '../src/docusaurus/mod.js'

import {
  stripRepoRoot,
}                             from '../src/repo-root.js'

import {
  NOT_WEBP_TO_BE_FIXED_FILE_LIST,
  BIG_SIZE_TO_BE_FIXED_FILE_LIST,
  inList,
}                                   from './workaround.js'

const glob = util.promisify(globCB)

const allImageList = async () => {
  const extList = [
    'gif',
    'jpeg',
    'jpg',
    'png',
    'tiff',
    'webp',
  ]
  const extListStr = extList.join(',')

  const fileList = [
    ...await glob(`${DOCUSAURUS_FOLDER.static}/**/*.{${extListStr}}`),
  ]

  if (fileList.length <= 0) {
    throw new Error('should get empty image file list')
  }

  return fileList
}

test('image size should be fit for the web (no more than 1MB and 1920x1080)', async t => {

  const MAX_WIDTH = 1920         // HD
  const MAX_SIZE  = 1024 * 1024  // 1MB

  const fileList = await allImageList()

  const isNotWhitelist  = (file: string) => !inList(BIG_SIZE_TO_BE_FIXED_FILE_LIST)(file)
  const checkFileList   = fileList.filter(isNotWhitelist)

  // console.info('fileList len', fileList.length)
  // console.info('fileList not white len', fileList.filter(isNotWhitelist).length)

  for (const file of checkFileList) {
    const dim   = await probeImageSize(fs.createReadStream(file))
    const size  = fs.statSync(file).size

    const fit = dim.width <= MAX_WIDTH && size <= MAX_SIZE

    if (!fit) {
      console.error('\n\nTIP: use "scripts/fit-image.sh <FILE>" to adjust it to fit\n\n')
      t.fail(`"${stripRepoRoot(file)}" (width: ${dim.width}, size: ${size}) exceed the maximum limitation: width<=${MAX_WIDTH} size<=${MAX_SIZE}`)
    }
  }

  t.pass(`${fileList.length} files checked`)
})

test('we enforce all image type to .webp (#1035)', async t => {
  /**
   * https://github.com/wechaty/wechaty.js.org/issues/1035
   */
  const fileList = await allImageList()

  const isNotWebp       = (file: string) => !file.endsWith('.webp')
  const isNotWhitelist  = (file: string) => !inList(NOT_WEBP_TO_BE_FIXED_FILE_LIST)(file)

  // console.info('fileList len', fileList.length)
  // console.info('fileList not webp len', fileList.filter(isNotWebp).length)
  // console.info('fileList not white len', fileList.filter(isNotWhitelist).length)

  const checkFileList = fileList
    .filter(isNotWebp)
    .filter(isNotWhitelist)

  let failed = false
  for (const file of checkFileList) {
    void file
    t.fail(`${file} should be changed to use the .webp format`)
    if (!failed) {
      failed = true
    }
  }

  if (!failed) {
    t.pass('all image files are .webp')
  }
})
