import fs from 'fs'
import yfm from 'yaml-front-matter'

const getFrontmatterCategoryList = (filename: string): string[] => {
  const content = fs.readFileSync(filename)
  const front   = yfm.loadFront(content)

  let categoryList  = front['categories']
  if (!Array.isArray(categoryList)) {
    categoryList = categoryList
      ? [categoryList]
      : []
  }

  return categoryList
}

export { getFrontmatterCategoryList }
