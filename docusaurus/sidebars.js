const showcases = {
  label: 'Showcases',
  items: [
    'showcases/overview',
    'showcases/osschat-bot',
    'showcases/rui-bot',
    'showcases/friday-bot',
    'showcases/projects-using-wechaty',
  ],
}

const api = {
  label: 'API',
  items: [
    'api/overview',
    'api/wechaty',
    'api/message',
    'api/contact',
    'api/room',
    'api/room-invitation',
    'api/friendship',
  ],
}

const polyglot = {
  label: 'Polyglot',
  items: [
    'polyglot/overview',
    'polyglot/openapi/overview',
    'polyglot/typescript/overview',
    'polyglot/python/overview',
    'polyglot/go/overview',
    'polyglot/java/overview',
    'polyglot/scala/overview',
    'polyglot/php/overview',
    'polyglot/dotnet/overview',
    'polyglot/rust/overview',
    'polyglot/diy/overview',
  ],
}

const puppetProviders = {
  label: 'Puppet Providers',
  items: [
    'puppet-providers/overview',
    'puppet-providers/wechat',
    'puppet-providers/whatsapp',
    'puppet-providers/official-account',
    'puppet-providers/gitter',
    'puppet-providers/lark',
    'puppet-providers/padlocal',
    'puppet-providers/wechat4u',
    'puppet-providers/service',
    'puppet-providers/mock',
    'puppet-providers/diy',
  ],
}

const puppetServices = {
  label: 'Puppet Services',
  items: [
    'puppet-services/overview',
    'puppet-services/wxwork',
    'puppet-services/padlocal',
    'puppet-services/paimon',
    'puppet-services/donut',
    'puppet-services/compatibility',
    'puppet-services/diy',
  ]
}

const specs = {
  label: 'Specifications',
  items: [
    'specs/overview',
    'specs/wechaty',
    'specs/puppet',
    'specs/service',
    'specs/token',
  ],
}

const contributing = {
  label: 'Contributing',
  items: [
    'contributing/overview',
    'contributing/contributor-program',
    'contributing/new-contributors',
    'contributing/committing-code',
    'contributing/publish-blog',
    'contributing/writing-documentation',
    'contributing/writing-code',
    'contributing/working-with-git',
  ],
}

const caseStudy = {
  label: 'Case Study',
  items: [
    'case-study/overview',
    'case-study/coaxer-bot',
  ],
}

const gettingStarted = {
  label: 'Getting Started',
  items: [
    'getting-started/overview',
    'getting-started/quick-start',
    'getting-started/hard-way',
  ],
}

const events = {
  label: 'Events',
  items: [
    'events',
    {
      type: 'category',
      label: '开源软件供应链点亮计划',
      items: [
        'ospp/overview',
        'ospp/2021',
        'ospp/2020',
      ],
    },
    {
      type: 'category',
      label: 'Google Season of Docs',
      items: [
        'gsod/overview',
        'gsod/2021',
      ],
    },
    'bot5/overview',
    {
      type: 'category',
      label: 'Google Summer of Code',
      items: [
        'gsoc/overview',
        'gsoc/2021',
      ],
    },
  ],
}

const others = {
  label: 'Others',
  items: [
    'changelog',
    'cheatsheet',
    'awesome-wechaty',
    'advanced',
    'resources',
    'glossary',
    {
      type: 'category',
      label: 'Docusaurus',
      items: [
        'test/doc1',
        'test/doc2',
        'test/doc3',
        'test/mdx',
      ],
    },
  ]
}

/*********************************
 *
 * Category Helper function
 *
 */
const subMenu = (data) => ({
  label: data.label,
  items: data.items,
  type: 'category',
})

/*********************************
 *
 * Introduction
 *
 */
const introduction = {
  label: 'Introduction',
  items: [
    'introduction/overview',
    'introduction/wechaty',
    'introduction/what-is-wechaty',
    subMenu(showcases),
    subMenu(contributing),
    subMenu(events),
  ],
}

/****************************************************************************
 * Documentation System
 *  https://documentation.divio.com/
 *
 *  The Grand Unified Theory of Documentation
 *
 *  Issue #704 - https://github.com/wechaty/wechaty.js.org/issues/704
 ****************************************************************************/
const tutorials = {
  label: 'Tutorials',
  items: [
    'tutorials/overview',
    subMenu(gettingStarted),
    subMenu(caseStudy),
    'tutorials/video-tutorial',
    'tutorials/docker',
    'tutorials/usage-with-typescript',
    'tutorials/usage-with-heroku',
    'tutorials/using-plugin-with-wechaty',
    'tutorials/using-vorpal-with-wechaty',
    'tutorials/using-redux-with-wechaty',
    'examples',
    'examples2',
  ],
}

const howtos = {
  label: 'How-to Guides',
  items: [
    'howto/overview',
    'howto/install',
    'howto/wechaty',
    'howto/event',
    'howto/message',
    'howto/contact',
    'howto/room',
    'howto/friendship',
    'howto/file-box',
  ],
}

const references = {
  label: 'References',
  items: [
    'references/overview',
    subMenu(api),
    subMenu(polyglot),
    subMenu(puppetProviders),
    subMenu(puppetServices),
    subMenu(specs),
  ]
}

const explainations = {
  label: 'Explainations',
  items: [
    'explainations/overview',
    'explainations/motivations',
    'explainations/concepts',
    'explainations/architecture',
    'explainations/lifecycle',
    'explainations/alternatives',
    'faq',
    'troubleshooting',
    subMenu(others),
  ],
}

module.exports = {
  docs: {
    [introduction.label]  : [...introduction.items],
    [tutorials.label]     : [...tutorials.items],
    [explainations.label] : [...explainations.items],
    [references.label]    : [...references.items],
    [howtos.label]        : [...howtos.items],
  },
}
