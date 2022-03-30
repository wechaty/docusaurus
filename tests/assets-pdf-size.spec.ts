#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import fs from 'fs'
import util from 'util'

import globCB         from 'glob'

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
    ...await glob(`${DOCUSAURUS_FOLDER.static}/**/*.{${extListStr}}`),
  ]

  if (fileList.length <= 0) {
    throw new Error('should get empty image file list')
  }

  return fileList
}

test('PDF size should be fit for the web (no more than 3MB)', async t => {

  const MAX_SIZE  = 1 * 1024 * 1024  // 3MB

  const fileList = await allPdfList()

  const isNotWhitelist  = (file: string) => !inList(BIG_SIZE_TO_BE_FIXED_FILE_LIST)(file)
  const checkFileList   = fileList.filter(isNotWhitelist)

  // console.info('fileList len', fileList.length)
  // console.info('fileList not white len', fileList.filter(isNotWhitelist).length)

  for (const file of checkFileList) {
    const size  = fs.statSync(file).size

    if (size > MAX_SIZE) {
      console.error([
        'Tip 1: upload your slides to google slides then embed it by `{% include iframe.html src="..." %}`,',
        '  see: https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/',
        'TIP 2 (not recommended): use "https://www.ilovepdf.com/compress_pdf" to adjust it to fit;',
      ].join('\n'))
      t.fail(`"${stripRepoRoot(file)}" (size: ${size}) exceed the maximum limitation: size<=${MAX_SIZE}`)
    }
  }

  t.pass(`${fileList.length} files checked`)
})
