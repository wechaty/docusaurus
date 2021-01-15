const getYearMonth = (filename: string) => {
  const matches = filename.match(/\/(\d\d\d\d)-(\d\d)-\d\d-/)
  if (!matches) {
    throw new Error(`${filename} parse month fail!`)
  }
  return {
    month : matches[2],
    year  : matches[1],
  }
}

export { getYearMonth }
