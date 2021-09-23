const docusaurusPluginPwa = [
  '@docusaurus/plugin-pwa',
  {
    debug: true,
    offlineModeActivationStrategies: [
      'appInstalled',
      'standalone',
      'queryString',
    ],
    pwaHead: [
      {
        tagName: 'link',
        rel: 'icon',
        href: '/img/icon.png',
      },
      {
        tagName: 'link',
        rel: 'manifest',
        href: '/manifest.json', // your PWA manifest
      },
      {
        tagName: 'meta',
        name: 'theme-color',
        content: 'rgb(8, 168, 56)',
      },
    ],
  }
]

module.exports = docusaurusPluginPwa
