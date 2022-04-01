import path from 'path'

import { REPO_ROOT } from './repo-root.js'

const root = path.join(REPO_ROOT, 'docusaurus')

const DOCUSAURUS_FOLDER = {
  root,
  static       : path.join(root, 'static'),
}

export {
  DOCUSAURUS_FOLDER,
}
