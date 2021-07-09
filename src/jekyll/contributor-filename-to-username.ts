const contributorFilenameToUsername = (filePath: string) => {
  const matches = /\/([^./]+?)\.md$/.exec(filePath)
  if (!matches) {
    throw new Error(`no matches for profile name for "${filePath}"`)
  }
  return matches[1]
}

export { contributorFilenameToUsername }
