const path = require('path')

module.exports = {
  title: 'Wechaty',
  tagline: 'RPA SDK for Chatbot Makers',
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
      title: '',
      logo: { alt: 'Wechaty Logo', src: 'img/wechaty-logo.svg' },
      hideOnScroll: true,
      items: [
        { label: 'News',            href: 'https://wechaty.js.org/news/',         position: 'right', target: '_self' },
        { label: 'Blog',            href: 'https://wechaty.js.org/blog/',         position: 'right', target: '_self' },
        { label: 'Contributors',    href: 'https://wechaty.js.org/contributors/', position: 'right' },

        { label: 'Docs',            to: 'docs/', position: 'right', activeBasePath: 'docs',
          items: [
            { label: 'Introduction',        to: 'docs/introduction/' },
            { label: 'Getting Started',     to: 'docs/getting-started/' },
            { label: 'Case Study',          to: 'docs/case-study/' },
            { label: 'Puppet Service',      to: 'docs/puppet-services/' },
            { label: 'Contributor Program', to: 'docs/contributor-program/' },
            { label: 'API',                 to: 'docs/api/' },
            { label: 'FAQ',                 to: 'docs/faq/' },
          ],
        },

        // { label: 'Docs',            to:   'docs/introduction/',    position: 'right' },
        // { label: 'Getting Started', to:   'docs/getting-started',  position: 'right' },
        // { label: 'Tutorial',        to:   'docs/tutorials/',       position: 'right' },
        // { label: 'Recipes',         to:   'docs/recipes/',         position: 'right' },
        // { label: 'Case Study',      to:   'docs/case-study/',      position: 'right' },
        // { label: 'API',             to:   'docs/api/',             position: 'right' },
        // { label: 'FAQ',             to:   'docs/faq/',             position: 'right' },
        // { label: 'Troubleshooting', to:   'docs/troubleshooting',  position: 'right' },

        { label: 'GitHub',          href: 'https://github.com/wechaty/wechaty#readme',   position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: 'docs/getting-started/' },
            { label: 'Tutorial',        to: 'docs/tutorials/' },
            { label: 'FAQ',             to: 'docs/faq/' },
            { label: 'API Reference',   to: 'docs/api/' },
            { label: 'Puppet Service',  to: 'docs/puppet-services/' },
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
            { label: 'Book',      href: 'http://www.bot5.club/blogs/chatbot-0-1/' },
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
    googleAnalytics: {
      trackingID: 'UA-88739146-3',
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
          sidebarPath: require.resolve('./sidebars.js'),
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
  ],
  plugins: [
    require.resolve('./src/plugins/qrcode'),
  ],
}
