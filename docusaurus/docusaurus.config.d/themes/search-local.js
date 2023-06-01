const searchLocal = [
  require.resolve('@easyops-cn/docusaurus-search-local'),
  /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
  ({
    hashed: true,
    highlightSearchTermsOnTargetPage: true
  }),
]

module.exports = searchLocal
