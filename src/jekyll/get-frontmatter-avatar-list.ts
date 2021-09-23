import fs from 'fs'

import yfm from 'yaml-front-matter'

const getFrontmatterAvatarList = (file: string): string[] => {
  const front = yfm.loadFront(fs.readFileSync(file))
  if (front['avatar']) {
    return [front['avatar']]
  }
  return []
}

export {
  getFrontmatterAvatarList,
}
