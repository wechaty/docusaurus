module.exports = {
  title: 'Wechaty',
  tagline: 'Conversational SDK for Chatbot Makers',
  url: 'https://wechaty.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'wechaty', // Usually your GitHub org/user name.
  projectName: 'wechaty.js.org', // Usually your repo name.
  stylesheets: [
    '/css/gitter-sidecar.css',
  ],
  scripts: [
    '/js/gitter-sidecar.js',
    {
      src: 'https://sidecar.gitter.im/dist/sidecar.v1.js',
      async: true,
    },
  ],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Wechaty Logo',
        src: 'img/wechaty-logo.svg',
      },
      items: [
        {
          label: 'News',
          href: 'http://wechaty.js.org/news/index.html',
          position: 'right'
        },
        {
          label: 'Community',
          href: 'http://wechaty.js.org/community/index.html',
          position: 'right'
        },
        {
          activeBasePath: 'docs',
          label: 'Docs',
          to: 'docs/',
          position: 'right',
        },
        {
          label: 'Getting Started',
          to: 'docs/getting-started',
          position: 'right',
        },
        {
          label: 'Tutorial',
          to: 'docs/video-tutorial',
          position: 'right',
        },
        { label: 'API', to: 'docs/api/README', position: 'right' },
        { label: 'FAQ', to: 'docs/faq/README', position: 'right' },
        {
          label: 'GitHub',
          href: 'https://github.com/wechaty/wechaty',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'FAQ',
              to: 'docs/faq/README',
            },
            {
              label: 'Tutorial',
              to: 'docs/video-tutorial',
            },
            {
              label: 'API Reference',
              to: 'docs/api/README',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/wechaty',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/Chatie/wechaty',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/chatieio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wechaty/wechaty#readme',
            },
          ],
        },
      ],
      logo: {
        alt: 'Wechaty Logo',
        src: 'img/wechaty-logo.svg',
        href: 'https://wechaty.js.org/',
      },
      copyright: `Copyright © 2016-${new Date().getFullYear()} Wechaty Contributors`,
    },
    algolia: {
      apiKey: 'cd8ca324c447a803e8a196a5c8fa22dd',
      indexName: 'wechaty',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    googleAnalytics: {
      trackingID: 'UA-88739146-3',
    },
    prism: {
      additionalLanguages: [
        'csharp',
        'kotlin',
        'scala',
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`` path).
          homePageId: 'README',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wechaty/wechaty.js.org/edit/master/website/',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/wechaty/wechaty.js.org/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
