import path from 'path'

const REPO_ROOT = path.join(__dirname, '..')

const stripRepoRoot = (filename: string) => filename.replace(REPO_ROOT + '/', '')

export {
  stripRepoRoot,
  REPO_ROOT,
}
