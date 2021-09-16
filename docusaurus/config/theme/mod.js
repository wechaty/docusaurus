const navbar = require('./navbar')
const footer = require('./footer')

const themeConfig = {
  image: 'img/wechaty-icon.png',
  announcementBar: {
    id: 'support_us', // Any value that will identify this message.
    content:
      'We are looking to revamp our website, please comment on <a target="_blank" href="https://github.com/wechaty/wechaty.js.org/issues/440">this issue</a>',
    backgroundColor: '#fafbfc', // Defaults to `#fff`.
    textColor: '#091E42', // Defaults to `#000`.
  },
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
  },
  //  Refer to https://docusaurus.io/docs/configuration#site-metadata,
  // and https://docusaurus.io/docs/api/themes/configuration#metadatas
  // know more about Metadata configuration.
  image: 'img/wechaty-logo.svg',
  metadatas: [{name: 'twitter:card', content: 'summary_large_image'}, {name: 'twitter:image', content: 'img/wechaty-icon.png'}, {name: 'twitter:title', content: 'Wechaty'}, {name: 'twitter:description', content: 'Wechaty Official Website for News, Blogs, Contributor Profiles, and Documentations.'}],
}

module.exports = themeConfig
