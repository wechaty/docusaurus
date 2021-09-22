#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import fs from 'fs'
import util from 'util'

import globCB         from 'glob'

import {
  JEKYLL_FOLDER,
}                             from '../src/jekyll/mod.js'
import {
  DOCUSAURUS_FOLDER,
}                             from '../src/docusaurus/mod.js'

import {
  stripRepoRoot,
}                             from '../src/repo-root.js'

import {
  BIG_SIZE_TO_BE_FIXED_FILE_LIST,
  inList,
}                                   from './workaround.js'

const glob = util.promisify(globCB)

const allPdfList = async () => {
  const extList = [
    'pdf',
    'dummy', // Huan(202109): we need this to make the glob work. ({pdf,dummy})
  ]
  const extListStr = extList.join(',')

  const fileList = [
    ...await glob(`${JEKYLL_FOLDER.assets}/**/*.{${extListStr}}`),
    ...await glob(`${DOCUSAURUS_FOLDER.static}/**/*.{${extListStr}}`),
  ]

  if (fileList.length <= 0) {
    throw new Error('should get empty image file list')
  }

  return fileList
}

test('PDF size should be fit for the web (no more than 3MB)', async t => {

  const MAX_SIZE  = 3 * 1024 * 1024  // 3MB

  const fileList = await allPdfList()

  const isNotWhitelist  = (file: string) => !inList(BIG_SIZE_TO_BE_FIXED_FILE_LIST)(file)
  const checkFileList   = fileList.filter(isNotWhitelist)

  // console.info('fileList len', fileList.length)
  // console.info('fileList not white len', fileList.filter(isNotWhitelist).length)

  for (const file of checkFileList) {
    const size  = fs.statSync(file).size

    if (size > MAX_SIZE) {
      console.error('\n\nTIP: use "https://www.ilovepdf.com/compress_pdf" to adjust it to fit\n\n')
      t.fail(`"${stripRepoRoot(file)}" (size: ${size}) exceed the maximum limitation: size<=${MAX_SIZE}`)
    }
  }

  t.pass(`${fileList.length} files checked`)
})
