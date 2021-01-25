import path from 'path'

import { REPO_ROOT } from '../repo-root'

const root = path.join(REPO_ROOT, 'jekyll')

const JEKYLL_FOLDER = {
  assets     : path.join(root, 'assets'),
  developers : path.join(root, '_developers'),
  posts      : path.join(root, '_posts'),
  root,
}

export {
  JEKYLL_FOLDER,
}
