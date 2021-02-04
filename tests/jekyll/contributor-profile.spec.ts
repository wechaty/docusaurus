#!/usr/bin/env ts-node

import test   from 'tstest'

import path         from 'path'
import util         from 'util'
import childProcess from 'child_process'

import fs     from 'fs'
import globCB from 'glob'
import { loadFront } from 'yaml-front-matter'
import { chunk } from 'lodash'

import fetch  from 'node-fetch'
import AbortController  from 'abort-controller'

import {
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod'

import {
  stripRepoRoot,
}                             from '../../src/repo-root'

const glob = util.promisify(globCB)

test('front matter key `author` should has a value exist in jekyll/_contributors/__VALUE__.md file', async t => {
  const postsFileList = await glob(`${JEKYLL_FOLDER.posts}/**/*`)

  for (const file of postsFileList) {
    const content = fs.readFileSync(file)
    const front = loadFront(content)
    const author = front.author
    if (!author) {
      t.fail(`"${stripRepoRoot(file)}" author should set to ${author}`)
    }

    const authorFile = path.join(JEKYLL_FOLDER.root, '_contributors', author + '.md')
    const good = fs.existsSync(authorFile)
    if (!good) {
      t.fail(`"${stripRepoRoot(file)}" author profile should exist at ${stripRepoRoot(authorFile)}`)
    }
  }

  t.pass(`total ${postsFileList.length} files checked.`)
})

test('developer profile file (jekyll/_contributors/__AUTHOR__.md) filename must match /[a-z0-9_-.]+/', async t => {
  const REGEX = new RegExp('/[a-z0-9_.-]+.md$')

  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/**/*`)
  const nameList = contributorsFileList.map(stripRepoRoot)

  for (const filename of nameList) {
    const good = REGEX.test(filename)
    if (!good) {
      t.fail(`"${filename}" should match ${REGEX}`)
    }
  }

  t.pass(`total ${nameList.length} files checked.`)
})

test('developer project avatar should be put under assets/contributors/ folder', async t => {
  const contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/*.md`)

  for (const file of contributorsFileList) {
    const content = fs.readFileSync(file)
    const front   = loadFront(content)

    if (!front.avatar) {
      t.fail(`"${stripRepoRoot(file)}" should have avatar("${front.avatar}")`)
    }

    const startWithSlash = /^\//.test(front.avatar)
    if (!startWithSlash) {
      t.fail(`"${front.avatar}" should start with '/'`)
    }

    if (/^http/i.test(front.avatar)) {
      t.fail(`${stripRepoRoot(file)} should put avatar files to local repo instead of using URL`)
    } else {
      const filename = path.join(JEKYLL_FOLDER.root, front.avatar)
      const good = fs.existsSync(filename)
      if (!good) {
        t.fail(`${stripRepoRoot(filename)} should exist`)
      }
    }
  }

  t.pass(`total ${contributorsFileList.length} files checked`)
})

test('developer profile name must be GitHub username', async t => {
  const pickName = (filePath: string) => {
    const matches = /\/([^./]+?)\.md$/.exec(filePath)
    if (!matches) {
      throw new Error(`no matches for profile name for "${filePath}"`)
    }
    return matches[1]
  }

  /**
   * https://stackoverflow.com/a/30219553/1123955
   * curl -w '%{response_code}' 'https://api.github.com/users/zixiaxxx'
   */
  const userNameExist = async (userName: string) => {
    const controller = new AbortController()
    const timer = setTimeout(
      () => controller.abort(),
      10 * 1000,  // 10 seconds
    )

    try {
      const options = {
        method: 'HEAD',
        signal: controller.signal,
      }

      const response = await fetch(
        `https://github.com/${userName}`,
        options,
      )

      // console.info(response)
      return response.ok

    } catch (e) {
      console.error(e)
      return false
    } finally {
      clearTimeout(timer)
    }
  }

  /**
   * Git show files that were changed in the last 2 days
   *  https://stackoverflow.com/a/7500276/1123955
   *
   * git log --since="1 month ago" --name-only --pretty=format: | sort | uniq | grep jekyll/_contributors
   */
  const exec = util.promisify(childProcess.exec)
  const output = await exec([
    'git log',
    '--since="1 month ago"',
    '--name-only',
    '--pretty=format:',
    '| sort',
    '| uniq',
    '| grep "jekyll/_contributors/"',
    // Huan(202002) it seems that the GitHub HTTP has a limit that X request per Y seconds.
    '| head -50',
  ].join(' '))

  const allContributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/**/*`)
  const changedContributorsFileList = output.stdout
    .split('\n')
    .filter(s => !!s)

  const allContributorsNameList     = allContributorsFileList.map(pickName)
  const changedContributorsNameList = changedContributorsFileList.map(pickName)

  // filter out the name that has been changed.
  // e.g. name_1 -> name_2
  const nameList = changedContributorsNameList
    .filter(name => allContributorsNameList.includes(name))

  const nameListChunk = chunk(nameList, 10)

  for (const chunk of nameListChunk) {
    process.stdout.write(Array(chunk.length + 1).join('.'))
    const resultList = await Promise.all(
      chunk.map(userNameExist)
    )

    // await new Promise(resolve => setTimeout(resolve, 5000))

    for (const [i, isExist] of resultList.entries()) {
      if (!isExist) {
        console.info()
        t.fail(`"${chunk[i]}" should exist on GitHub`)
      } else {
        // t.pass(`"${chunk[i]}" should exist on GitHub`)
      }
    }
  }

  console.info()
  t.pass(`${nameList.length} contributors profile names checked`)
})
