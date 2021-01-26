#!/usr/bin/env ts-node

import test  from 'tstest'

import fs from 'fs'
import util from 'util'

import probeImageSize from 'probe-image-size'
import globCB         from 'glob'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

import {
  stripRepoRoot,
}                             from '../../src/repo-root'

const glob = util.promisify(globCB)

test('image size should be fit for the web (no more than 1MB and 1920x1080)', async t => {
  const MAX_WIDTH = 1920         // HD
  const MAX_SIZE  = 1024 * 1024  // 1MB

  const fileList = await glob(`${JEKYLL_FOLDER.assets}/**/*.{jpg,jpeg,png}`)
  t.true(fileList.length > 0, 'should get image file list')

  for (const file of fileList) {
    const dim = await probeImageSize(fs.createReadStream(file))
    const size = fs.statSync(file).size

    const fit = dim.width <= MAX_WIDTH && size <= MAX_SIZE
    t.true(fit, `"${stripRepoRoot(file)}" should not exceed the max limit: width: ${dim.width}, size: ${size}.`)

    if (!fit) {
      console.error(`use "scripts/fit-image.sh <FILE>" to adjust it fit MAX_WIDTH: ${MAX_WIDTH} & MAX_SIZE: ${MAX_SIZE}`)
    }
  }
})
