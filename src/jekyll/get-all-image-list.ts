import util     from 'util'
import globCB   from 'glob'

import {
  getFrontmatterTeaserList,
  getMarkdownImageList,
  getFrontmatterAvatarList,
  getChangedFileList,
  JEKYLL_FOLDER,
}                             from '../../src/jekyll/mod.js'

import type { ChangeOptions } from './get-changed-file-list.js'
import { stripRepoRoot } from '../repo-root.js'

const glob = util.promisify(globCB)

async function getAllImageList (
  options?: ChangeOptions,
): Promise<string[]> {
  let changedFileList: undefined | string[]
  if (options?.since) {
    changedFileList = await getChangedFileList(options)
  }

  let postsFileList = await glob(`${JEKYLL_FOLDER.posts}/*.md`)
  if (changedFileList) {
    postsFileList = postsFileList
      .filter(name => changedFileList!.includes(stripRepoRoot(name)))
  }

  let contributorsFileList = await glob(`${JEKYLL_FOLDER.contributors}/*.md`)
  if (changedFileList) {
    contributorsFileList = contributorsFileList
      .filter(file => changedFileList!.includes(stripRepoRoot(file)))
  }

  const allImageList = [
    ...postsFileList.map(getFrontmatterTeaserList).flat(),
    ...postsFileList.map(getMarkdownImageList).flat(),
    ...contributorsFileList.map(getFrontmatterAvatarList).flat(),
  ]

  return allImageList
}

export { getAllImageList }
