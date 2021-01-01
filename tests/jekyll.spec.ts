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

const stripRepoRoot = (filename: string) => filename.replace(REPO_ROOT + '/', '')
const getDate = (filename: string) => {
  const matches = filename.match(/\/(\d\d\d\d)-(\d\d)-\d\d-/)
  if (!matches) {
    throw new Error(`${filename} parse month fail!`)
  }
  return {
    month : matches[2],
    year  : matches[1],
  }
}

const getTeaserList = (filename: string): string[] => {
  const content = fs.readFileSync(filename)
  const front   = loadFront(content)

  if (front.image) {
    return [front.image]
  }
  return []
}

const getImageList = (filename: string): string[] => {
  const content = fs.readFileSync(filename).toString()

  // https://stackoverflow.com/a/37981325
  const REGEXP = /!\[.*?\]\((.*?)\)/g

  const imageList: string[] = []

  let matches = REGEXP.exec(content)
  while (matches != null) {
    imageList.push(matches[1])
    matches = REGEXP.exec(content)
  }

  return imageList
}

test('image size should be fit for the web (no more than 1MB and 1920x1080)', async t => {
  const MAX_WIDTH = 1920         // HD
  const MAX_SIZE  = 1024 * 1024  // 1MB

  const fileList = await glob(`${ASSETS_FOLDER}/**/*.{jpg,jpeg,png}`)
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
test('filename only allow [a-z0-9-_.]', async t => {
  const REGEX = /^[a-z0-9/_.-]+$/
  const WHITE_LIST_REGEX_LIST = [
    new RegExp('/assets/js/viewer-js'),
  ]

  const assetsFileList  = await glob(`${ASSETS_FOLDER}/**/*`)
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  const isNotWhiteList = (filename: string) => WHITE_LIST_REGEX_LIST.every(regex => !regex.test(filename))

  const filenameList = [...assetsFileList, ...postsFileList]
    .filter(isNotWhiteList)
    .map(stripRepoRoot)

  for (const filename of filenameList) {
    const ok = REGEX.test(filename)
    t.true(ok, `"${filename}" contains all lowercase and no specicial characters`)
  }
})

test('front matter key `tags` must contact at least one tag', async t => {
  const postsFileList = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)

    const tagCount = front.tags && Array.isArray(front.tags)
      ? front.tags.length
      : 0
    t.true(tagCount, `"${stripRepoRoot(file)}" tags(${tagCount}) has at least one tag`)
  }
})

test('front matter key `categories` must contains at lease one preset category', async t => {
  const PRESET_CATEGORIES_LIST = [
    'announcement',
    'article',
    'event',
    'feature',
    'fun',
    'hacking',
    'interview',
    'migration',
    'npm',
    'project',
    'shop',
    'story',
    'talk',
    'tutorial',
  ]
  const isPreset = (category: string) => PRESET_CATEGORIES_LIST.includes(category)

  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const content       = fs.readFileSync(file)
    const front         = loadFront(content)

    let categoryList  = front.categories
    if (!Array.isArray(categoryList)) {
      categoryList = categoryList
        ? [categoryList]
        : []
    }

    t.true(categoryList.length, `"${stripRepoRoot(file)}" categories(${categoryList.length}) has at lease one category`)

    const allPreset = categoryList.every(isPreset)
    t.true(allPreset, `"${stripRepoRoot(file)}" categories(${categoryList.join(',')}) is in preset(${allPreset ? '...' : PRESET_CATEGORIES_LIST.join(',')})`)
  }
})

test('files in `_posts/` must have name prefix with `YYYY-MM-DD-`', async t => {
  const REGEX = /\/\d\d\d\d-\d\d-\d\d-.+/
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    t.true(good, `"${filename}" have name started with YYYY-MM-DD-`)
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

    t.true(good, `"${filename.replace(POSTS_FOLDER + '/', '')}" have at least 3 slugs`)
  }
})

test('files in `_posts/` must end with `.md` file extension', async t => {
  const REGEX = /\.md$/
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const filename of postsFileList) {
    const good = REGEX.test(filename)
    t.true(good, `"${stripRepoRoot(filename)}" end with .md`)
  }
})

test('front matter key `author` should has a value exist in jekyll/_developers/__VALUE__.md file', async t => {
  const postsFileList = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const author = front.author
    t.true(author, `"${stripRepoRoot(file)}" author has been set to ${author}`)

    const authorFile = path.join(JEKYLL_ROOT, '_developers', author + '.md')
    const good = fs.existsSync(authorFile)
    t.true(good, `"${stripRepoRoot(file)}" author profile at ${stripRepoRoot(authorFile)}`)
  }
})

test('developer profile file (jekyll/_developers/__AUTHOR__.md) filename must match /[a-z0-9_-.]+/', async t => {
  const REGEX = new RegExp('/[a-z0-9_.-]+.md$')

  const developersFileList = await glob(`${DEVELOPERS_FOLDER}/**/*`)
  const nameList = developersFileList.map(stripRepoRoot)

  for (const filename of nameList) {
    const good = REGEX.test(filename)
    t.true(good, `"${filename}" is match ${REGEX}`)
  }
})

/**
 * Issue #351: https://github.com/wechaty/wechaty.js.org/issues/351
 *  Should add teaser for the blog
 */
test('front matter key `image` must has a value to define the teaser image', async t => {
  const postsFileList   = await glob(`${POSTS_FOLDER}/**/*`)

  for (const file of postsFileList) {
    const { year } = getDate(file)
    /**
     * Huan(202101): We leave the posts before 2021 as it is
     */
    if (parseInt(year) < 2021) {
      continue
    }

    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const image = front.image
    t.true(image, `"${stripRepoRoot(file)}" image(${image}) has been set`)
  }
})

test('developer project avatar should be put under assets/developers/ folder', async t => {
  const developersFileList = await glob(`${DEVELOPERS_FOLDER}/*.md`)

  for (const file of developersFileList) {
    const content = fs.readFileSync(file)
    const front   = loadFront(content)

    t.true(front.avatar, `"${stripRepoRoot(file)}" should have avatar("${front.avatar}")`)

    if (/^http/i.test(front.avatar)) {
      t.fail(`${stripRepoRoot(file)} should put avatar files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_ROOT, front.avatar)
      const good = fs.existsSync(filename)
      t.true(good, `${stripRepoRoot(filename)} should exist`)
    }
  }
})

test.only('all images linked from the post should be stored local (in the repo) for preventing the 404 error in the future.', async t => {
  const URL_WHITE_LIST_REGEX = [
    /badge\.fury\.io/i,
    /dockeri\.co\/image/i,
    /github\.com\/.*\/workflows\//i,
    /herokucdn\.com/i,
    /img\.shields\.io/i,
    /pepy\.tech\/badge/i,
    /sourcerer\.io/i,
    /wechaty\.js\.org/i,
  ]
  const isNotWhiteList = (url: string) => !URL_WHITE_LIST_REGEX.some(regex => regex.test(url))

  const postsFileList      = await glob(`${POSTS_FOLDER}/*.md`)
  const developersFileList = await glob(`${DEVELOPERS_FOLDER}/*.md`)

  const getAvatarList = (file: string): string[] => {
    const front = loadFront(fs.readFileSync(file))
    if (front.avatar) {
      return [front.avatar]
    }
    return []
  }

  const allImageList = [
    ...postsFileList.map(getTeaserList).flat(),
    ...postsFileList.map(getImageList).flat(),
    ...developersFileList.map(getAvatarList).flat(),
  ].filter(isNotWhiteList)

  for (const image of allImageList) {
    if (/^http/i.test(image)) {
      t.fail(`"${image}" should put image files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_ROOT, image)
      const good = fs.existsSync(filename)
      t.true(good, `"${image}" should exist`)
    }
  }
})

test('all asset files should be put into folder `/assets/YYYY/MM-slug-slug-slug/` (slugs should be the same as the post)', async t => {
  const postsFileList = await glob(`${POSTS_FOLDER}/**/*`)

  for (const filename of postsFileList) {
    const { year, month } = getDate(filename)

    /**
     * Huan(202101): do not check paths before 2021
     */
    if (parseInt(year) < 2021) {
      continue
    }

    const slugs           = getSlugs(filename)
    const teaserList      = getTeaserList(filename)
    const imageList       = getImageList(filename)

    const expectedFolder = path.join(
      'assets',
      year,
      `${month}-${slugs}`,
    )

    for (const imageFile of [...teaserList, ...imageList]) {
      const good = imageFile.includes(expectedFolder)
      t.true(good, `"${imageFile}" from "${stripRepoRoot(filename)}" should be save to "${expectedFolder}/"`)
    }
  }

  function getSlugs (filename: string): string {
    const matches = filename.match(/\/\d\d\d\d-\d\d-\d\d-(.+)\.md$/)
    if (!matches) {
      throw new Error(`${filename} parse slugs fail`)
    }
    return matches[1]
  }
})
