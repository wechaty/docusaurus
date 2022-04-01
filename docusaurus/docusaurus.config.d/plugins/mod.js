const docusaurusPluginPwa = require('./docusaurus-plugin-pwa')

const plugins = [
  '@ionic-internal/docusaurus-plugin-tag-manager',
  require.resolve('../../src/plugins/qrcode'),
  docusaurusPluginPwa,
]

module.exports = plugins
