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
  /**
   * Huan(202107): we forgot to check the limit of gif files before... -_-b
   */
  const WHITELIST = [
    '2018/birthday-cake-chickens.gif',
    '2018/techiefestival-24.gif',
    '2020/wechaty-log-monitor/archy-demo.gif',
    '2020/your-wechat-bot/demo.gif',
    '2021/06-summer-2021-open-source/002.webp',
    '2021/07-wechaty-with-paddlepaddle/botbay.gif',
    '2021/07-wechaty-with-paddlepaddle/panda_emoji.gif',
    '2021/07-wechaty-with-paddlepaddle/pic_mask.gif',
    '2021/07-wechaty-with-paddlepaddle/wanderer.gif',
  ]

  const MAX_WIDTH = 1920         // HD
  const MAX_SIZE  = 1024 * 1024  // 1MB

  const fileList = await glob(`${JEKYLL_FOLDER.assets}/**/*.{jpg,jpeg,png,gif,webp}`)
  if (!fileList.length) {
    t.fail('should get image file list')
  }

  for (const file of fileList) {
    const dim = await probeImageSize(fs.createReadStream(file))
    const size = fs.statSync(file).size

    const fit = dim.width <= MAX_WIDTH && size <= MAX_SIZE

    if (!fit && !WHITELIST.some(white => file.includes(white))) {
      console.error('\n\nTIP: use "scripts/fit-image.sh <FILE>" to adjust it to fit\n\n')
      t.fail(`"${stripRepoRoot(file)}" (width: ${dim.width}, size: ${size}) exceed the maximum limitation: width<=${MAX_WIDTH} size<=${MAX_SIZE}`)
    }
  }

  t.pass(`${fileList.length} files checked`)
})
