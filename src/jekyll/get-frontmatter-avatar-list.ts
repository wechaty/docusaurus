import fs from 'fs'

import { loadFront }  from 'yaml-front-matter'

const getFrontmatterAvatarList = (file: string): string[] => {
  const front = loadFront(fs.readFileSync(file))
  if (front.avatar) {
    return [front.avatar]
  }
  return []
}

export {
  getFrontmatterAvatarList,
}
