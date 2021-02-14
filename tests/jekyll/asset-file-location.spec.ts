#!/usr/bin/env ts-node

import test  from 'tstest'

import util from 'util'
import path from 'path'

import globCB         from 'glob'

import {
  getFrontmatterTeaserList,
  getMarkdownImageList,
  getYearMonth,
  isNotWhiteListedRemoteUrl,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

import {
  stripRepoRoot,
}                             from '../../src/repo-root'

const glob = util.promisify(globCB)

test('all asset files should be put into folder `/assets/YYYY/MM-slug-...-slug/` (slugs should be the same as the post)', async t => {
  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const filename of postsFileList) {
    const { year, month } = getYearMonth(filename)

    /**
     * Huan(202101): do not check paths before 2021
     */
    if (parseInt(year) < 2021) {
      continue
    }

    const teaserList = getFrontmatterTeaserList(filename)
    const imageList  = getMarkdownImageList(filename)
    const allList = [
      ...teaserList,
      ...imageList,
    ].filter(isNotWhiteListedRemoteUrl)

    // console.info('processing: ', filename)
    // console.info('teaserList:', teaserList.length)
    // console.info('imgeList:', imageList.length)

    const slugs = getSlugs(filename)
    const expectedFolder = path.join(
      'assets',
      year,
      `${month}-${slugs}`,
    )

    for (const imageFile of allList) {
      const good = imageFile.includes(expectedFolder)
      if (!good) {
        t.fail(`"${imageFile}" from "${stripRepoRoot(filename)}" should be save to "${expectedFolder}/"`)
      }
    }

  }

  t.pass(`total ${postsFileList.length} files checked.`)

  function getSlugs (filename: string): string {
    const matches = filename.match(/\/\d\d\d\d-\d\d-\d\d-(.+)\.md$/)
    if (!matches) {
      throw new Error(`${filename} parse slugs fail`)
    }
    return matches[1]
  }
})
