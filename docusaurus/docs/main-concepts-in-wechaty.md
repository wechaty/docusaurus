---
title: Main concepts in Wechaty
---

This section explains the main concepts in Wechaty. If you are new to software or chatbot development, start from this glossary to familiarize yourself with the terminology.

- **Bot**

  A bot is a software application that is programmed to perform specific tasks. Bots usually imitate human behavior and perform certain repetitive tasks faster. Bots are automated therefore, do not need to be started manually by a human being.

- **Chatbot**

  These are bots that are designed for interacting with humans in voice or text-based conversation. Chatbots simulate human conversation by responding to certain phrases or words with programmed responses. Wechaty is a software program for developing chatbots for Instant Messaging services such as Wechat and Whatsapp. You can check our [Introduction section](overview.mdx) for a list of all the supported Instant Messaging systems.

- **Wechaty Puppet**

  Wechaty Puppet is a standard for maintaining compatibility between Instant Messaging(IM) systems. Wechaty Puppet defines the universal Instant Messaging interface for compatibility between Wechaty API and variants of IM systems.

- **Puppet provider**

  Wechaty puppet provider refers to RPA module used for connecting Wechaty API to the corresponding Instant Messaging platform(Wechat, Whatsapp and Tiktok) bot account. Each supported Instant Messaging system has its own Puppet provider. The Puppet Provider for WeChat is [wechaty-puppet-wechat](https://github.com/wechaty/wechaty-puppet-wechat), for Whatsapp is [wechaty-puppet-whatsapp](https://github.com/wechaty/wechaty-puppet-whatsapp), and the one for Lark is [wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark). See [Puppet Providers](puppet-providers/overview.mdx) section for a complete list of puppet providers.

- **Puppet service provider**

  Puppet service providers refer to Wechaty developers who provide puppet cloud services for the different Instant Messaging systems.

- **Puppet service**

  Wechaty Puppet Service is gRPC for Wechaty Puppet Provider. For example, we can cloudify the Wechaty Puppet Provider wechaty-puppet-padlocal to a Wechaty Puppet Service by running Wechaty Puppet Service Token Gateway.

- **Wechaty Puppet Service Token**

  This is a unique key for authorizing the service from Wechaty Puppet Service Provider access. This token is issued by Puppet service providers.

- **Robotic process automation**

  Robotic process automation (RPA) refers to the technology that allows users to configure software robots to execute business processes and automate repetitive tasks across applications and systems without human intervention.

- **Software Development Kit**

  Software development kit (SDK) is a toolkit used by developers to create applications for a specific platform, operating system or device. A great example would be **Wechaty**, wherein it is called a **_conversational RPA SDK_** that is used by developers to create customized chatbots.

- **Wechaty gRPC**

  Initially, Wechaty was built using TypeScript. Support for other languages such as Python, Go, Java, PHP, .NET, and Scala was later introduced in 2020 so that chatbot makers can build chatbots in their preferred language. This version of Wechaty which offers multi-language support is referred to as **Wechaty polyglot**. The introduction of Wechaty polyglot however came with its challenges because all Wechaty puppet providers were built using TypeScript and delivered via npm. Translating all of them to the languages supported by Wechaty polyglot was a monumental challenge. To solve this problem, Wechaty gRPC was created. The goal of Wechaty RPC is to _cloudify_ Wechaty Puppet Providers. It ensures we can use the Wechaty Puppet Providers remotely via network and Polyglot Wechaty can use the Wechaty Puppet API from the TypeScript ecosystem.
