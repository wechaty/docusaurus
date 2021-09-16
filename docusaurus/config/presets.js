const presets = [
  [
    '@docusaurus/preset-classic',
    {
      docs: {
        sidebarPath: require.resolve('../sidebars.ts'),
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
        customCss: require.resolve('../src/css/custom.css'),
      },
    },
  ],
  [
    "redocusaurus",
    {
      specs: [
        {
          routePath: "/docs/openapi/",
          specUrl: "https://cdn.jsdelivr.net/npm/wechaty-grpc/dist/generated/wechaty/puppet.swagger.json",
        },
        {
          routePath: "/docs/openapi@latest",
          specUrl: "https://cdn.jsdelivr.net/npm/wechaty-grpc@latest/dist/generated/wechaty/puppet.swagger.json",
        },
        {
          routePath: "/docs/openapi@next",
          specUrl: "https://cdn.jsdelivr.net/npm/wechaty-grpc@next/dist/generated/wechaty/puppet.swagger.json",
        },
      ],
      theme: {
        primaryColor: '#1890ff',
        redocOptions: { hideDownloadButton: false },
      },
    },
  ],
]

module.exports = presets
