const footer = {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [
        { label: 'Introduction',  to: 'docs/' },
        { label: 'Tutorials',     to: 'docs/tutorials/' },
        { label: 'Explanations', to: 'docs/explanations/' },
        { label: 'References',    to: 'docs/references/' },
        { label: 'How-to Guides',  to: 'docs/howto/' },
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
}

module.exports = footer
