import path from 'path'
import { fileURLToPath } from 'url'

// https://stackoverflow.com/a/50052194/1123955
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const REPO_ROOT = path.join(__dirname, '..')

const stripRepoRoot = (filename: string) => filename.replace(REPO_ROOT + '/', '')

export {
  stripRepoRoot,
  REPO_ROOT,
}
