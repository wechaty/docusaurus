/**
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */

/**
 * Support sidebar.ts in TypeScript
 */
require('ts-node/register')

const {
  plugins,
  themeConfig,
  presets,
}               = require('./config/mod.js')

const config = {
  title: 'Wechaty',
  tagline: 'Conversational RPA SDK for Chatbot Makers',
  url: 'https://wechaty.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'wechaty',    // Usually your GitHub org/user name.
  projectName: 'wechaty.js.org',  // Usually your repo name.
  stylesheets: [
    '/css/gitter-sidecar.css',
  ],
  scripts: [
    '/js/gitter-sidecar.js',
    { src: 'https://sidecar.gitter.im/dist/sidecar.v1.js', async: true },
  ],
  themeConfig,
  presets,
  plugins,
}

module.exports = config
