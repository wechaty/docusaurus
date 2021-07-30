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
    'puppet-providers/xp',
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
    'specs/plugin',
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
    'case-study/money-bot',
    'case-study/assistant-bot',
    'case-study/coaxer-bot',
  ],
}

const quickStart: SubMenuData = {
  label: 'Quick Start',
  items: [
    'quick-start/running-on-google-cloud-shell',
    'quick-start/running-on-gitpod',
  ],
}

const usingReduxWithWechaty: SubMenuData = {
  label: 'Using Redux with Wechaty',
  items: [
    'using-redux-with-wechaty/overview',
    'using-redux-with-wechaty/vannila-redux',
    'using-redux-with-wechaty/ducks-proposal',
  ]
}

const usingPluginWithWechaty: SubMenuData = {
  label: 'Using Plugin with Wechaty',
  items: [
    'using-plugin-with-wechaty/overview',
    'using-plugin-with-wechaty/event-logger',
    'using-plugin-with-wechaty/qr-code-terminal',
    'using-plugin-with-wechaty/heartbeat',
  ]
}

const community: SubMenuData = {
  label: 'Community',
  items: [
    'community/overview',
    'community/code-of-conduct',
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
    'marketing/branding',
    'marketing/co-marketing',
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
    subMenu(caseStudy),
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
 const basic = {
  label: 'Basic',
  items: [
    'examples/basic/the-worlds-shortest-chatbot-code-in-6-lines',
    'examples/basic/ding-dong-bot',
    'examples/basic/contact-bot',
  ],
}

const advanced = {
  label: 'Advanced',
  items: [
    'examples/advanced/demo-in-tutorial',
    'examples/advanced/busy-bot',
    'examples/advanced/media-file-bot',
    'examples/advanced/room-bot',
    'examples/advanced/friend-bot',
    'examples/advanced/gist-bot',
  ],
}

const professional = {
  label: 'Professional',
  items: [
    'examples/professional/hot-import-bot',
    'examples/professional/ctrl-c-signal-bot',
    'examples/professional/monster-bot',
    'examples/professional/api-ai-bot',
    'examples/professional/speech-to-text-bot',
    'examples/professional/tuling123-bot',
    'examples/professional/telegram-roger-bot',
    'examples/professional/blessed-twins-bot',
  ],
}

 const examples = {
  label: 'Examples',
  items: [
    'examples/overview',
    subMenu(basic),
    subMenu(advanced),
    subMenu(professional),
  ],
}

const gettingStarted: SubMenuData = {
  label: 'Getting Started',
  items: [
    'getting-started/overview',
    subMenu(quickStart),
    'getting-started/running-locally',
  ],
}

const tutorials = {
  label: 'Tutorials',
  items: [
    'tutorials/overview',
    'tutorials/installation',
    subMenu(gettingStarted),
    'tutorials/video-tutorial',
    'tutorials/docker',
    'tutorials/usage-with-heroku',
    subMenu(usingPluginWithWechaty),
    'tutorials/using-vorpal-with-wechaty',
    subMenu(usingReduxWithWechaty),
    'tutorials/cheatsheet',
    subMenu(examples),
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
    'explainations/chatbot-testing',
    'explainations/faq',
    'explainations/troubleshooting',
    subMenu(docusaurus),
  ],
}

const docs = {
  [introduction.label]  : [...introduction.items],
  [tutorials.label]     : [...tutorials.items],
  [howtos.label]        : [...howtos.items],
  [references.label]    : [...references.items],
  [explainations.label] : [...explainations.items],
}

export { docs }
