import fs from 'fs'
import { loadFront } from 'yaml-front-matter'

const getFrontmatterTeaserList = (filename: string): string[] => {
  const content = fs.readFileSync(filename)
  const front   = loadFront(content)

  if (front.image) {
    return [front.image]
  }
  return []
}

export { getFrontmatterTeaserList }
