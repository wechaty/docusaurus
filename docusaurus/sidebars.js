const CHATBOT_1_TO_2 = {
  type: 'category',
  label: 'Chatbot 1 to 2',
  items: [
    'chatbot-1-to-2/README',
    {
      type: 'category',
      label: '基础篇',
      items: [
        'chatbot-1-to-2/basic/typescript',
        'chatbot-1-to-2/basic/basic-wechaty',
        'chatbot-1-to-2/basic/seven-lines-code-chatbot',
        'chatbot-1-to-2/basic/ding-dong-bot',
      ],
    },
    {
      type: 'category',
      label: '应用篇',
      items: [
        'chatbot-1-to-2/applications/1.words-per-day',
        'chatbot-1-to-2/applications/2.contact-and-room-management',
        'chatbot-1-to-2/applications/3.group-chatbot',
        'chatbot-1-to-2/applications/4.group-qa-chatbot',
      ],
    },
    {
      type: 'category',
      label: '进阶篇',
      items: [
        'chatbot-1-to-2/advanced/1.multi-languages',
        'chatbot-1-to-2/advanced/2.multi-platform',
        'chatbot-1-to-2/advanced/3.multi-plugins',
        'chatbot-1-to-2/advanced/4.deployment',
        'chatbot-1-to-2/advanced/5.wechaty-with-ai',
        'chatbot-1-to-2/advanced/6.story-of-open-source',
      ],
    },
  ],
}

module.exports = {
  docs: {
    Introduction: [
      'introduction/README',
      'introduction/multi-language',
      'introduction/puppet',
      'introduction/concepts',
      'introduction/motivations',
      'examples',
      'examples2',
      'introduction/alternatives',
    ],
    'Getting Started': [
      'getting-started',
    ],
    Tutorials: [
      'tutorials/README',
      'tutorials/video-tutorial',
      CHATBOT_1_TO_2,
    ],
    Recipes: [
      'recipes/README',
      'recipes/configure-wechaty',
      'recipes/usage-with-typescript',
      'recipes/usage-with-docker',
      'recipes/usage-with-heroku',
      'recipes/using-plugin-with-wechaty',
      'recipes/using-vorpal-with-wechaty',
      'recipes/using-redux-with-wechaty',
    ],
    'Case Study': [
      'case-study/README',
      'case-study/friday-bot',
      'case-study/osschat-bot',
      'case-study/rui-bot',
      'case-study/projects-using-wechaty',
    ],
    'Puppet Services': [
      'puppet-services/README',
      'puppet-services/wxwork',
      'puppet-services/padlocal',
      'puppet-services/paimon',
      'puppet-services/donut',
    ],
    'Developer Program': [
      'developer-program/README',
      'developer-program/publish-blog',
    ],
    'API Reference': [
      'api/README',
      'api/wechaty',
      'api/message',
      'api/contact',
      'api/room',
      'api/room-invitation',
      'api/friendship',
    ],
    FAQ: [
      'faq/README',
      'faq/general',
      'faq/puppet',
      'faq/miscellaneous',
    ],
    Troubleshooting: [
      'troubleshooting',
    ],
    Others: [
      'changelog',
      'others/cheatsheet',
      'awesome-wechaty',
      'advanced',
      'resources',
      'glossary',
      'contributing',
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
    ],
  },
}
