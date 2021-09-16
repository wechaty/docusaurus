const lightCodeTheme  = require('prism-react-renderer/themes/github')
const darkCodeTheme   = require('prism-react-renderer/themes/dracula')

const navbar = require('./navbar')
const footer = require('./footer')

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  navbar,
  footer,
  algolia: {
    apiKey           : 'cd8ca324c447a803e8a196a5c8fa22dd',
    indexName        : 'wechaty',
    searchParameters : {},                                   // Optional (if provided by Algolia)
  },
  tagManager: {
    trackingID: 'GTM-PD2PL84',
  },
  prism: {
    additionalLanguages: [
      'python',
      'go',
      'java',
      'kotlin',
      'scala',
      'php',
      'csharp',
      'rust',
    ],
    darkTheme : darkCodeTheme,
    theme     : lightCodeTheme,
  },
  //  Refer to https://docusaurus.io/docs/configuration#site-metadata,
  // and https://docusaurus.io/docs/api/themes/configuration#metadatas
  // know more about Metadata configuration.
  image: 'img/wechaty-logo.svg',
  metadatas: [
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:image', content: 'img/wechaty-icon.png'},
    {name: 'twitter:title', content: 'Wechaty'},
    {name: 'twitter:description', content: 'Wechaty Official Website for News, Blogs, Contributor Profiles, and Documentations.'},
  ],
}

module.exports = themeConfig
