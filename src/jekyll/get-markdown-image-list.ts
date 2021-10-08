import marked from 'marked'
import fs     from 'fs'

function markdownImageReducer (
  imageList : string[],
  token     : marked.Token,
): string[] {
  // console.info('srcList', srcList, 'token: ', token)
  if ('tokens' in token && token.tokens) {
    if ((token.type as any) === 'table') {
      /**
       * Huan(202101): Table has `tokens` which is different type
       *  (also undocumented, without any typing)
       */
      // console.info((token.tokens as any).header)
      // console.info((token.tokens as any).cells)
      return imageList
    }
    if (!Array.isArray(token.tokens)) {
      throw new Error('token.tokens is not Array!')
    }
    return token.tokens.reduce(markdownImageReducer, imageList)
  } else if ('items' in token && token.items) {
    // image in a list
    return token.items.reduce(markdownImageReducer, imageList)
  } else if ('type' in token && token.type === 'image') {
    imageList.push(token.href)
    return imageList
  } else {
    return imageList
  }
}

function getMarkdownImageList (file: string): string[] {
  const markdown  = fs.readFileSync(file).toString()
  const tokenList = marked.lexer(markdown)

  const imageList = tokenList.reduce(
    markdownImageReducer,
    [],
  )
  return imageList
}

export { getMarkdownImageList }
