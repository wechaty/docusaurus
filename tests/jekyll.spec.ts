#!/usr/bin/env ts-node

/**
 * Issue #298: https://github.com/wechaty/wechaty.js.org/issues/298
 *  Common pitfalls #298
 *
 * The goal of all these unit tests in this file is to
 * help the developers who is submitting their blog posts via the PR
 * to follow all styles from our website rules.
 *
 * And the most important is to check for errors early via the CI tools.
 */

import test  from 'tstest'

import fs from 'fs'
import path from 'path'
import util from 'util'

import probeImageSize from 'probe-image-size'
import globCB         from 'glob'
import { loadFront }  from 'yaml-front-matter'

const glob = util.promisify(globCB)

const REPO_ROOT         = path.join(__dirname, '..')
const JEKYLL_ROOT       = path.join(REPO_ROOT, 'jekyll')
const ASSETS_FOLDER     = path.join(JEKYLL_ROOT, 'assets')
const DEVELOPERS_FOLDER = path.join(JEKYLL_ROOT, '_developers')
const POSTS_FOLDER      = path.join(JEKYLL_ROOT, '_posts')

test.skip('image size should be fit for the web (no more than 1MB and 1920x1080)', async t => {
  const MAX_WIDTH = 1920         // HD
  const MAX_SIZE  = 1024 * 1024  // 1MB

  const fileList = await glob(`${ASSETS_FOLDER}/**/*.{jpg,jpeg,png}`)
  t.true(fileList.length > 0, 'should get image file list')

  for (const file of fileList) {
    const dim = await probeImageSize(fs.createReadStream(file))
    const size = fs.statSync(file).size

    const fit = dim.width <= MAX_WIDTH && size <= MAX_SIZE
    t.true(fit, `${file.replace(/.*\//, '')} should not exceed the max limit: width: ${dim.width}, size: ${size}.`)

    if (!fit) {
      console.error(`use "scripts/fit-image.sh <FILE>" to adjust it fit MAX_WIDTH: ${MAX_WIDTH} & MAX_SIZE: ${MAX_SIZE}`)
    }

  }
})

test('folder _developers/ and _posts/ has been moved to `jekyll/` (e.g. _posts/ => jekyll/_posts/)', async t => {
  const wrongDevelopersFolder = fs.existsSync(path.join(REPO_ROOT, '_developers'))
  t.false(wrongDevelopersFolder, '_developers/ should not exist because it has been moved to `jekyll/` sub folder')

  const wrongPostsFolder = fs.existsSync(path.join(REPO_ROOT, '_posts'))
  t.false(wrongPostsFolder, '_posts/ should not exist because it has been moved to `jekyll/` sub folder')
})

/**
 * Issue #325: Keep all filenames & url as lowercase, and use - to connect words instead of spac
 *  https://github.com/wechaty/wechaty.js.org/issues/325
 *
 * Issue #585: Blog post author should be all lowercase #585
 *  https://github.com/wechaty/wechaty.js.org/issues/585
 */
test.skip('filename only allow [a-z0-9-_.]', async t => {
  const REGEX = /^[a-z0-9/_.-]+$/
  const WHITE_LIST_REGEX_LIST = [
    new RegExp('/assets/js/viewer-js'),
  ]

  const assetsFileList  = await glob(`${ASSETS_FOLDER}/**/*`)
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  const stripRepoRoot  = (filename: string) => filename.replace(REPO_ROOT + '/', '')
  const isNotWhiteList = (filename: string) => WHITE_LIST_REGEX_LIST.every(regex => !regex.test(filename))

  const filenameList = [...assetsFileList, ...postsFileList]
    .filter(isNotWhiteList)
    .map(stripRepoRoot)

  for (const filename of filenameList) {
    const ok = REGEX.test(filename)
    t.true(ok, `${filename} contains all lowercase and no specicial characters`)
  }
})

test.only('front matter key `tags` must contact at least one tag', async t => {
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)

    const tagCount = front.tags && Array.isArray(front.tags)
      ? front.tags.length
      : 0
    t.true(tagCount, `${file} front matter: tags(${tagCount}) has at least one tag`)
  }
})

test('front matter key `categories` must contact one and only one category', async t => {
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)

    const ok = front.categories && Array.isArray(front.categories) && front.tags.length === 1
    t.true(ok, `${file} front matter: categories has one category`)
  }
})

test('files in `_posts/` must have name prefix with `YYYY-MM-DD-`', async t => {
  const REGEX = /\/\d\d\d\d-\d\d-\d\d-.+/
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    t.true(good, `${filename} have name started with YYYY-MM-DD-`)
  }
})

test('files in `_posts/` must contain at least three slugs connected by dash after the date prefix (slug1-slug2-slug3)', async t => {
  const PREFIX_REGEX = /^.+\/\d\d\d\d-\d\d-\d\d-/
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const filename of postsFileList) {
    let name = filename.replace(PREFIX_REGEX, '')
    name = name.replace(/\.md$/, '')

    const slugList = name.split('-')
    const good = slugList.length >= 3

    t.true(good, `${name} have at least 3 slugs`)
  }
})

test('files in `_posts/` must end with `.md` file extension', async t => {
  const REGEX = /\.md$/
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    t.true(good, `${filename} end with .md`)
  }
})

test('front matter key `author` should has a value exist in jekyll/_developers/__VALUE__.md file', async t => {
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const author = front.author
    t.true(author, `${file} front matter: author has been set`)

    const authorFile = path.join(JEKYLL_ROOT, '_developers', author + '.md')
    const good = fs.existsSync(authorFile)
    t.true(good, `${file} author profile found`)
  }
})

test('developer profile file (jekyll/_developers/__AUTHOR__.md) filename must match /[a-z0-9_-.]+/', async t => {
  const REGEX = /^[a-z0-9_-.]+$/

  const developersFileList = await glob(`${DEVELOPERS_FOLDER}/**/*`)

  for (const filename of developersFileList) {
    const good = REGEX.test(filename)
    t.true(good, `${filename} is match ${REGEX}`)
  }
})

/**
 * Issue #351: https://github.com/wechaty/wechaty.js.org/issues/351
 *  Should add teaser for the blog
 */
test('front matter key `image` must has a value to define the teaser image', async t => {
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const image = front.image
    t.true(image, `${file} front matter: image(${image}) has been set`)
  }
})

test('all images linked from the post should be stored local (in the repo) for preventing the 404 error in the future.', async t => {
  t.skip('tbw')
})

test('all asset files should be put into folder `/assets/YYYY/MM-slug-slug-slug/` (slugs should be the same as the post)', async t => {
  const postsFileList = await glob(`${POSTS_FOLDER}/**/*`)

  for (const filename of postsFileList) {
    const { year, month } = getDate(filename)
    const slugs           = getSlugs(filename)
    const teaser          = getTeaser(filename)
    const imageList       = getImageList(filename)

    const expectedFolder = path.join(
      'assets',
      year,
      `${month}-${slugs}`,
    )

    for (const imageFile of [teaser, ...imageList]) {
      const good = imageFile.includes(expectedFolder)
      t.true(good, `${imageFile} in ${filename} is in ${expectedFolder} folder`)
    }
  }

  function getDate (filename: string) {
    const matches = filename.match(/^(\d\d\d\d)-(\d\d)-\d\d-/)
    if (!matches) {
      throw new Error(`${filename} parse month fail!`)
    }
    return {
      month : matches[2],
      year  : matches[1],
    }
  }

  function getSlugs (filename: string): string {
    const matches = filename.match(/^\d\d\d\d-\d\d-\d\d-(.+)\.md/)
    if (!matches) {
      throw new Error(`${filename} parse slugs fail`)
    }
    return matches[1]
  }

  function getTeaser (filename: string): string {
    const content = fs.readFileSync(filename)
    const front   = loadFront(content)

    if (!front.image) {
      throw new Error(`${filename} has no teaser!`)
    }
    return front.image
  }

  function getImageList (filename: string): string[] {
    void filename
    // TODO(huan Jan 1, 2021): get all the image files in markdown content
    return []
  }
})
