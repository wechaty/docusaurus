/**
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */

/**
 * Support sidebar.ts in TypeScript
 */
require('ts-node/register')

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
  themeConfig: {
    image: 'img/wechaty-icon.png',
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'We are looking to revamp our website, please comment on <a target="_blank" href="https://github.com/wechaty/wechaty.js.org/issues/440">this issue</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      title: '',  // Huan(202104): need to be empty. title will be displayed after the logo.
      logo: { alt: 'Wechaty Logo', src: 'img/wechaty-logo.svg' },
      hideOnScroll: true,
      items: [
        { label: 'News',            href: 'https://wechaty.js.org/news/',         position: 'right', target: '_self' },
        { label: 'Blog',            href: 'https://wechaty.js.org/blog/',         position: 'right', target: '_self' },
        { label: 'Contributors',    href: 'https://wechaty.js.org/contributors/', position: 'right' },

        { label: 'Docs',            to: 'docs/', position: 'right', activeBasePath: 'docs',
          items: [
            { label: 'Introduction',  to: 'docs/wechaty' },
            { label: 'Tutorials',     to: 'docs/tutorials/' },
            { label: 'How-to Guides', to: 'docs/howto/' },
            { label: 'References',    to: 'docs/references/' },
            { label: 'explanations', to: 'docs/explanations/' },
          ],
        },
        { label: 'GitHub',          href: 'https://github.com/wechaty/wechaty#readme',   position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction',  to: 'docs/' },
            { label: 'Tutorials',     to: 'docs/tutorials/' },
            { label: 'explanations', to: 'docs/explanations/' },
            { label: 'References',    to: 'docs/references/' },
            { label: 'Howto Guides',  to: 'docs/howto/' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Gitter',          href: 'https://gitter.im/wechaty/wechaty' },
            { label: 'Discussion',      href: 'https://github.com/wechaty/wechaty/discussions' },
            { label: 'Stack Overflow',  href: 'https://stackoverflow.com/questions/tagged/wechaty' },
            { label: 'Telegram',        href: 'https://t.me/wechaty' },
            { label: 'Twitter',         href: 'https://twitter.com/chatieio' },
            { label: 'YouTube',         href: 'https://bit.ly/3aoLE86' },
            { label: 'Open Collective', href: 'https://opencollective.com/wechaty' },
            { label: 'Google Drive',    href: 'https://bit.ly/33Dfkuf' },
            { label: 'Photo Album',     href: 'https://photos.app.goo.gl/LkmYMWypGoJdyvEJ6' },
            { label: 'Meeting Notes',   href: 'https://bit.ly/2zpi2XG' },
            { label: "Hall of Fame",    href: 'https://bit.ly/2J6ziXa' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog',      href: 'https://wechaty.js.org/blog/' },
            { label: 'Book',      href: 'http://www.bot5.ml/blogs/chatbot-0-1/' },
            { label: 'Branding',  to:   'branding' },
            { label: 'Press',     to:   'press' },
            { label: 'GitHub',    href: 'https://github.com/wechaty/wechaty#readme' },
            { label: 'Status',    href: 'https://chatie.statuspage.io/' },
          ],
        },
      ],
      logo: {
        alt  : 'Wechaty Logo',
        src  : 'img/wechaty-logo.svg',
        href : 'https://wechaty.js.org/',
      },
      copyright: `Copyright © 2016-${ new Date().getFullYear() } Wechaty Contributors`,
    },
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
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
          customCss: require.resolve('./src/css/custom.css'),
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
  ],
  plugins: [
    '@ionic-internal/docusaurus-plugin-tag-manager',
    require.resolve('./src/plugins/qrcode'),
  ],
}

module.exports = config
