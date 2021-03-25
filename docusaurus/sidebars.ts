/**
 * Docusaurus Sidebar
 */
interface SubMenuData {
  label: string,
  items: (SubMenuData | string)[],
  type?: string,
}

const showcases: SubMenuData = {
  label: 'Showcases',
  items: [
    'showcases/overview',
    'showcases/osschat-bot',
    'showcases/rui-bot',
    'showcases/friday-bot',
    'showcases/awesome-wechaty',
  ],
}

const api: SubMenuData = {
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

const polyglot: SubMenuData = {
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

const puppetProviders: SubMenuData = {
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

const puppetServices: SubMenuData = {
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

const specs: SubMenuData = {
  label: 'Specifications',
  items: [
    'specs/overview',
    'specs/wechaty',
    'specs/puppet',
    'specs/service',
    'specs/token',
  ],
}

const contributing: SubMenuData = {
  label: 'Contributing',
  items: [
    'contributing/overview',
    'contributing/new-contributors',
    'contributing/documentation',
    'contributing/contributor-program',
    'contributing/devops',
    'contributing/pulls',
    'contributing/blog',
    'contributing/coding',
    'contributing/git',
    'contributing/issues',
    'contributing/testing',
  ],
}

const caseStudy: SubMenuData = {
  label: 'Case Study',
  items: [
    'case-study/overview',
    'case-study/assistant-bot',
    'case-study/coaxer-bot',
  ],
}

const gettingStarted: SubMenuData = {
  label: 'Getting Started',
  items: [
    'getting-started/overview',
    'getting-started/quick-start',
    'getting-started/hard-way',
  ],
}

const community: SubMenuData = {
  label: 'Community',
  items: [
    'community',
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
        'gsod/ideas',
        'gsod/2021',
      ],
    },
    'bot5/overview',
    {
      type: 'category',
      label: 'Google Summer of Code',
      items: [
        'gsoc/overview',
        'gsoc/ideas',
        'gsoc/2021',
      ],
    },
  ],
}

const docusaurus: SubMenuData = {
  label: 'Docusaurus',
  items: [
    'docusaurus/doc1',
    'docusaurus/mdx',
  ],
}

/*********************************
 *
 * Category Helper function
 *
 */
const subMenu = (data: SubMenuData) => ({
  label : data.label,
  items : data.items,
  type  : data.type ?? 'category',
})

/*********************************
 *
 * Introduction
 *
 */
const introduction = {
  label: 'Introduction',
  items: [
    'overview',
    'wechaty',
    subMenu(showcases),
    subMenu(community),
    subMenu(contributing),
    'changelog',
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
    'tutorials/usage-with-heroku',
    'tutorials/using-plugin-with-wechaty',
    'tutorials/using-vorpal-with-wechaty',
    'tutorials/using-redux-with-wechaty',
    'tutorials/cheatsheet',
    'tutorials/examples',
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
    'howto/testing',
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
    'references/deprecations',
  ]
}

const explainations = {
  label: 'Explainations',
  items: [
    'explainations/overview',
    'explainations/conversational',
    'explainations/rpa',
    'explainations/motivations',
    'explainations/concepts',
    'explainations/architecture',
    'explainations/lifecycle',
    'explainations/alternatives',
    'explainations/glossary',
    'explainations/faq',
    'explainations/troubleshooting',
    subMenu(docusaurus),
  ],
}

const docs = {
  [introduction.label]  : [...introduction.items],
  [tutorials.label]     : [...tutorials.items],
  [explainations.label] : [...explainations.items],
  [references.label]    : [...references.items],
  [howtos.label]        : [...howtos.items],
}

export { docs }
