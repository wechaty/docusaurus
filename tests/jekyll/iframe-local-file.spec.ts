#!/usr/bin/env ts-node

import test  from 'tstest'

import fs   from 'fs'
import path from 'path'
import util from 'util'

import globCB         from 'glob'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

const glob = util.promisify(globCB)

test('{% include iframe.html src=... %} should exist in assets/ folder', async t => {
  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    const fileList = getIncludeSrcList(filename)
    if (fileList.length) {
      const good = fileList.every(isExist)
      t.true(good, `${fileList.map(s => `"${s}"`).join(', ')} should exist`)
    }
  }

  function isExist (file: string): boolean {
    return fs.existsSync(path.join(JEKYLL_FOLDER.root, file))
  }

  function getIncludeSrcList (filename: string): string[] {
    const content = fs.readFileSync(filename).toString()

    // '{% include iframe.html src="/assets/2020/11-summer-2020-summit-talks/wechaty-summer-2020-introduction.pdf" %}'
    const REGEXP = /{%\s+include\s+iframe.html\s+src="\/([^"]+?)"\s+%}/g

    const fileList: string[] = []

    let matches = REGEXP.exec(content)
    while (matches != null) {
      fileList.push(matches[1])
      matches = REGEXP.exec(content)
    }

    return fileList
  }

})
