---
title: Wechaty chatbot architecture
---

![Wechaty: Conversational RPA SDK for Chatbot Makers](/img/wechaty-logo.svg)

When building a chatbot, the choice of architecture model used is informed primarily by the core purpose of the project. In the Wechaty ecosystem, there are several interrelated and interdependent components that constitute a chatbot. Highlighted below are some of these key components. It is important to understand them and how they fit together to take full advantage of the features offered by the Wechaty ecosystem.

```asciiart
  +-------------------------------------------------------+
  |                        Wechaty                        |
  |                                                       |
  |                 TypeScript/JavaScript                 |
  |          Python, Go, Java, .NET, PHP, Scala           |
  +-------------------------------------------------------+

  +-------------------------------------------------------+
  |                Wechaty Puppet Abstract                |
  |                                                       |
  |                (wechaty-puppet-service)               |
  +-------------------------------------------------------+

    +--------------------+  gRPC  +---------------------+

+-----------------------------------------------------------+
|                  Wechaty Puppet Service                   |
|                        (Provider)                         |
|       <https://wechaty.js.org/docs/puppet-services>       |
+-----------------------------------------------------------+

  +-------------------------------------------------------+
  |                 Wechaty Puppet Abstract               |
  +-------------------------------------------------------+

  +--------------------------+ +--------------------------+
  |       Pad Protocol:      | |       Web Protocol:      |
  | wechaty-puppet-padlocal  | | wechaty-puppet-wechat |
  +--------------------------+ +--------------------------+
  +--------------------------+ +--------------------------+
  |     Windows Protocol:    | |       Mac Protocol:      |
  |  wechaty-puppet-wxwork   | |  wechaty-puppet-macpro   |
  +--------------------------+ +--------------------------+
```

- **Instant Messaging platforms**

  With Wechaty, you can build chatbots for Instant Messaging systems such as [Wechat and Whatsapp among others](#placeholder-link). They constitute the front-end interface your clients will interact with. One prominent advantage Wechaty has over other SDKs is that you write code once and use the same code for all Instant Messaging platforms. Your source code should work for different IM service tokens without making any changes to the codebase. What is required is just switching the service token.

- **Wechaty Puppet Abstract**

  This is a standard for maintaining compatibility between IM systems and the Wechaty API. It defines the universal interface for compatibility between Wechaty API and variants of Instant Messaging systems. All Wechaty Puppet Providers are developed based on this standard.
  <!-- Not very sure about the correctness of this explanation. Need clarification from a core Wechaty contributor -->

- **Wechaty Puppet Providers**

  In the Wechaty ecosystem, different Instant Messaging systems require different plugins for compatibility with the Wechaty API. These plugins are referred to as Wechaty Puppet Providers. The Wechaty Puppet Provider required to develop a chatbot for Whatsapp is referred to as `Wechaty-puppet-whatsapp` and the one for Wechat is referred to as `wechaty-puppet-wechat`. Wechaty Puppet Providers are named following the naming convention `wechaty-puppet-INSTANT_MESSAGING_PLATFORM` where `INSTANT_MESSAGING_PLATFORM` is the name of the Instant Messaging Platform.

  These Puppet Providers have been developed by members of the Wechaty community. You are welcome to start developing Wechaty Puppet if you are interested. For a complete list of the available Wechaty puppets and how to start developing them, check the [References section](#placeholder-link) of the documentation.

- **Wechaty Puppet Service**

  Different Instant Messaging (IM) systems such as WeChat and Whatsapp require different [RPA](#placeholder-link) modules referred to as Wechaty puppet providers as explained above. These modules have been developed and maintained by members of the Wechaty community. Most of them are distributed via [npm](#placeholder-link). They have varying licenses and terms of service. To build a chatbot using Wechaty, you need **_access_** to a Wechaty Puppet Service. You can set up your puppet service, generate a service token and use the token in your chatbot. However, the puppet developers and maintainers offer Wechaty puppet service which you can use without having to worry about setting up and maintaining your service.

  Using Wechaty puppet as a service saves you from dealing with setup, downtime, and maintenance overheads. What you need is an access TOKEN and it just works out of the box. Most puppet services offer limited free plans for testing. If you are a contributor to Wechaty, you are entitled to a **free service TOKEN** after joining the [developer program](#placeholder-link). Therefore, a Wechaty Puppet Service is an important component of a Wechaty chatbot architecture.

- **Wechaty gRPC**

  Initially, Wechaty was built using TypeScript. Support for other languages such as Python, Go, Java, PHP, .NET, and Scala was later introduced in 2020 so that chatbot makers can build chatbots in their preferred language. This version of Wechaty which offers multi-language support is referred to as **Wechaty polyglot**. The introduction of Wechaty polyglot however came with its challenges because all Wechaty puppet providers were built using TypeScript and delivered via npm. Translating all of them to the languages supported by Wechaty polyglot was a monumental challenge. To solve this problem, Wechaty gRPC was created. The goal of Wechaty RPC is to *cloudify* Wechaty Puppet Providers. It ensures we can use the Wechaty Puppet Providers remotely via network and Polyglot Wechaty can use the Wechaty Puppet API from the TypeScript ecosystem.
