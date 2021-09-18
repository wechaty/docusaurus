const navbar = {
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
}

module.exports = navbar
