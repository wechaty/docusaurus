/**
 * Support sidebar.ts in TypeScript
 */
 require('ts-node/register')

 const presetClassic = [
  '@docusaurus/preset-classic',
  /** @type {import('@docusaurus/preset-classic').Options} */
  {
    docs: {
      sidebarPath: require.resolve('../../sidebars.ts'),
      editUrl: 'https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/',
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
    // blog: {
    //   showReadingTime: true,
    //   // Please change this to your repo.
    //   editUrl:
    //     'https://github.com/wechaty/wechaty.js.org/edit/master/docusaurusblog/',
    // },
    theme: {
      customCss: require.resolve('../../src/css/custom.css'),
    },
  },
]

module.exports = presetClassic
