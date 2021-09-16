const presetClassic = [
  '@docusaurus/preset-classic',
  {
    docs: {
      sidebarPath: require.resolve('../../sidebars.ts'),
      // Please change this to your repo.
      editUrl: 'https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/',
      // Equivalent to `enableUpdateBy`.
      showLastUpdateAuthor: true,
      // Equivalent to `enableUpdateTime`.
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
