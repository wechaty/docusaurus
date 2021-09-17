import fs from 'fs'
import yfm from 'yaml-front-matter'

const getFrontmatterTeaserList = (filename: string): string[] => {
  const content = fs.readFileSync(filename)
  const front   = yfm.loadFront(content)

  if (front['image']) {
    return [front['image']]
  }
  return []
}

export { getFrontmatterTeaserList }
