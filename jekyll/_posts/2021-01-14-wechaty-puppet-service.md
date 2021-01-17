---
title: "Introducing Wechaty Puppet Service (Providers)"
author: huan
categories: announcement
tags:
  - puppet-service
  - news
image: /assets/2021/01-wechaty-puppet-service/5-puppets.jpg
---

Wechaty is an SDK for chatbot makers. It uses [Robotic Progress Automation (RPA)](https://en.wikipedia.org/wiki/Robotic_process_automation) technology to help developers to be more productive for building [Conversational User Interface (CUI)](https://en.wikipedia.org/wiki/Conversational_user_interface), which we call it a [Chatbot](https://en.wikipedia.org/wiki/Chatbot).

## Wechaty Puppet

For different instant messaging (IM) systems (such as WeChat, Whatsapp, and Lark), the Wechaty community builds separate RPA modules for each, and we call those modules [Wechaty Puppet](https://github.com/wechaty/wechaty-puppet). _Wechaty Puppet_ is the core concept in the Wechaty ecosystem, which is in charge of connecting the Wechaty API to the underlying IM Platform bot account.

## Wechaty Puppet Abstract

_Wechaty Puppet_ is a standard for maintaining compatibility between IM systems. _Wechaty Puppet_ defines the universal IM interface for compatibility with Wechaty API to variants of IM systems.

## Wechaty Puppet Provider

Different IM systems need different Wechaty Puppets, and they have different names and all implementing the Wechaty Puppet API, we call them the **Wechaty Puppet Provider**. For example, the Wechaty Puppet Provider who is supporting WeChat is named [wechaty-puppet-puppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer), supporting Whatsapp is named [wechaty-puppet-whatsapp](https://github.com/wechaty/wechaty-puppet-whatsapp), and supporting Lark is named [wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark).

When we published Wechaty in May 2016, we were using WebDriver/Puppeteer([wechaty-puppet-puppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer)) and [wechaty-puppet-wechat4u](https://github.com/wechaty/wechaty-puppet-wechat4u) to hook to the Web WeChat code. Still, later the [Web Protocol has been deprecated](https://github.com/wechaty/wechaty/issues/603), and we have to find other ways to get the job done.

Beyonds the Web Protocol, the community have tried many technologies in the past years, such as:

1. Windows Hook
    1. [WxWork](https://github.com/juzibot/wxwork-tester)
    1. [Donut](https://github.com/juzibot/donut-tester)
1. Pad Protocol
    1. [PadLocal](https://github.com/padlocal/wechaty-puppet-padlocal)
    1. [PadChat (deprecated)](https://www.npmjs.com/package/wechaty-puppet-padchat)
    1. [PadPro (deprecated)](https://www.npmjs.com/package/wechaty-puppet-padpro)
    1. [PadPlus (deprecated)](https://github.com/wechaty/wechaty-puppet-padplus)
1. Mac Hook
    1. [macOS (under construction)](https://github.com/wechaty/wechaty-puppet-macOS)
    1. [MacPro (deprecated)](https://github.com/juzibot/wechaty-puppet-macpro)
1. App Hook: [IosBird (deprecated)](https://github.com/juzibot/wechaty-puppet-iosbird)

To learn about all Wechaty Puppet Providers, you can go to our [Wechaty Puppet Directory](https://github.com/wechaty/wechaty-puppet/wiki/Directory)

## Using Wechaty Puppet Providers

Let's see a code example (in TypeScript) of how to change Wechaty Puppet Providers.

We have the following six lines code, which is the world's shortest chatbot:

```ts
// bot.ts
import { Wechaty } from 'wechaty'

Wechaty.instance() // Global Instance
.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
.on('login',            user => console.log(`User ${user} logged in`))
.on('message',       message => console.log(`Message: ${message}`))
.start()
```

The above code will use the default Wechaty Puppet Provider (which is [wechaty-puppet-puppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer)) because we have not specified manually.

If we want this bot to serve on Whatsapp, we need to specify a Wechaty Puppet Provider for Whatsapp.

We have two methods to specify Wechaty Puppet Providers for our program:

1. Using the `WECHATY_PUPPET` environment variable
1. Import the Wechaty Puppet manually in code

### 1. Using the `WECHATY_PUPPET` environment variable

The `WECHATY_PUPPET` environment will be used as the Wechaty Puppet Provider NPM name, and then you are all set.

```sh
export WECHATY_PUPPET=wechaty-puppet-whatsapp
node -r ts-node/register bot.ts
```

The above shell commands set the [wechaty-puppet-whatsapp](https://github.com/wechaty/wechaty-puppet-whatsapp) to the environment variable `WECHATY_PUPPET` and our Wechaty system will use it.

### 2. Import the Wechaty Puppet manually in code

On the other hand, you can import the Wechaty Puppet Provider NPM module directly in your code and then add an option when instantiating the Wechaty with the object name `puppet`:

```diff
// bot.ts
import { Wechaty } from 'wechaty'
+ import { PuppetWhatsapp } from 'wechaty-puppet-whatsapp'

- Wechaty.instance() // Global Instance
+ Wechaty.instance({ puppet: new PuppetWhatsapp() })
.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
.on('login',            user => console.log(`User ${user} logged in`))
.on('message',       message => console.log(`Message: ${message}`))
.start()
```

The above code can be self-explained: the Wechaty will use `PuppetWhatsapp` from the `wechaty-puppet-whatsapp` module.

## Build Polyglot(Multi-language) Wechaty with the TypeScript Ecosystem

Wechaty, Wechaty Puppet, and Wechaty Puppet Providers are all written in TypeScript (before 2020). We are pleased with TypeScript because it's robust, scalable, and portable.

In 2020, we started to build Wechaty in many other languages, like Python, Go, Java, PHP, .NET, Scala, etc. Wechaty community started to translate Wechaty from TypeScript to those languages ([Issue #1927](https://github.com/wechaty/wechaty/discussions/1927)), and the plan was going very smoothly. Polyglot Wechaty has been published, and almost all developers from all programming languages are happy with Wechaty by developing using their favorite language now.

However, as we mentioned, all the Wechaty ecosystems are build on top of TypeScript, especially all the Wechaty Puppets. How can we reuse them in Polyglot Wechaty?

Our goal is to reuse all the TypeScript ecosystems with the Polyglot Wechaty. But how?

## RPC for Rescue

The key to using the TypeScript ecosystem in other languages is to cloudify the Wechaty Puppet API.

As we mentioned before:

> _Wechaty Puppet_ is a standard for maintaining compatibility between IM systems. _Wechaty Puppet_ defines the universal IM interface for compatibility with Wechaty API to variants of IM systems.

Wechaty is built on top of the Wechaty Puppet API. If we can use the Wechaty Puppet Providers remotely via network, then Polyglot Wechaty will be able to use the Wechaty Puppet API from the TypeScript ecosystem.

How can we use a Wechaty Puppet Provider remotely via network? The answer is that we can convert it to Remote Procedure Call (RPC).

The goal of Wechaty RPC is to cloudify our Wechaty Puppet Providers. A Wechaty Puppet Provider, like [PadLocal](https://github.com/padlocal/wechaty-puppet-padlocal), is written in TypeScript and can only be used in TypeScript program locally.

With RPC, we can design our Wechaty Ecosystem Architecture as the following diagram:

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
  |                (wechaty-puppet-hostie)                |
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
  | wechaty-puppet-padlocal  | | wechaty-puppet-puppeteer |
  +--------------------------+ +--------------------------+
  +--------------------------+ +--------------------------+
  |     Windows Protocol:    | |       Mac Protocol:      |
  |  wechaty-puppet-wxwork   | |  wechaty-puppet-macpro   |
  +--------------------------+ +--------------------------+
```

## Google Remote Procedure Call (gRPC)

Google Remote Procedure Call ([gRPC](https://grpc.io/)) is a modern open source high performance RPC framework that can run in any environment.

Currently, gRPC provides support for many languages like Node.js, Python, Golang, .NET, C++, Java, etc.

It is very easy to generate the gRPC client and server interfaces from `.proto` service definition by using protocol buffer compiler `protoc` with a special gRPC polyglot plugin to generate gRPC services in all supported languages.

In Feb 2020, we finished the [Wechaty gRPC](https://github.com/wechaty/grpc) service abstracting module with the [wechaty-puppet-hostie](https://github.com/wechaty/wechaty-puppet-hostie) implementation.

Wechaty gRPC is always auto-generating gRPC client from our [wechaty.proto](https://github.com/wechaty/grpc/tree/master/proto/wechaty) service defination, and publish them as multi-language modules. Learn more about how it works of our DevOps pipeline by reading our [GitHub Action Workflows](https://github.com/wechaty/grpc/tree/master/.github/workflows).

## Wechaty Puppet Service

_Wechaty Puppet Service_ is gRPC for _Wechaty Puppet Provider_.

For example, we can cloudify the _Wechaty Puppet Provider_ `wechaty-puppet-padlocal` to a _Wechaty Puppet Service_ by running our _Wechaty Puppet Service Token Gateway_.

## Using Wechaty Puppet Service Token Gateway to Setup Wechaty Puppet Service

_Wechaty Puppet Service Token Gateway_ is a gateway for converting the _Wechaty Puppet Provider_ to a _Wechaty Puppet Service_.

Here's an example for setup a Wechaty Puppet Service for the PadLocal Puppet Provider.

Firstly, define the underlying Wechaty Puppet Provider and its parameters:

```sh
export WECHATY_PUPPET='wechaty-puppet-padlocal'
export WECHATY_PUPPET_PADLOCAL_TOKEN='puppet_padlocal_xxx'
```

Secondly, specify the token of our Wechaty Puppet Service, with a port for the service(will be used for the docker port mapping)

```sh
export WECHATY_TOKEN='puppet_hostie_yyy'
export WECHATY_HOSTIE_PORT=8788 // any available port can be visited from internet
```

Thirdly, set log to `verbose` to get more debug log messages.

```sh
export WECHATY_LOG="verbose"
```

At last, everything we need has been packaged to the docker image `wechaty/wechaty`. All you need is to use a docker command to start your Wechaty Puppet Service Token Gateway with the above configuration:

```sh
docker run -ti --rm \
  \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  \
  -e WECHATY_TOKEN \
  -e WECHATY_HOSTIE_PORT \
  \
  -e WECHATY_LOG \
  \
  -p "$WECHATY_HOSTIE_PORT:$WECHATY_HOSTIE_PORT” \
  wechaty/wechaty
```

You can see lots of the output log messages in your terminal with the above command.

Then you can confirm your Wechaty Puppet Service is online by visiting:

```sh
https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}
```

> Replace ${WECHATY\_TOKEN} to your real token in the above configuration

✅ If you get an HTTP/200 response with a JSON object body that includes your `ip` and `port`, then you are all set.  
❌ If you get an HTTP/404 response, your Puppet Service Gateway has some issues and needs to be troubleshooting.

## Using Wechaty Puppet Service with Wechaty

Using Wechaty Puppet Service is very easy. Just set the `WECHATY_PUPPET` to `wechaty-puppet-hostie` and `WECHATY_PUPPET_HOSTIE_TOKEN` to your Wechaty Puppet Service Token.

```sh
export WECHATY_PUPPET=wechaty-puppet-hostie
export WECHATY_PUPPET_HOSTIE_TOKEN=${__WECHATY_PUPPET_SERVICE_TOKEN__}
node -r ts-node/register bot.ts
```

You may have a question of what is the value of `WECHATY_PUPPET_HOSTIE_TOKEN`? The answer is that the value should be the `WECHATY_TOKEN` when you set up your Wechaty Puppet Service Gateway in the previous step.

## Ready-to-use Wechaty Puppet Services

With the power of _Wechaty Puppet Service Token Gateway_, we can convert any _Wechaty Puppet Provider_ to _Wechaty Puppet Service_ by yourself.

However, it would be lots of reasons that you need a ready-to-use Wechaty Puppet Service:

1. You are a Polyglot Wechaty developer, but you do not want to run another docker container in your system.
1. You are a TpyeScript Wechaty developer, but the Wechaty Puppet Provider needs a complicated system setup, like an X11 System, Wine, or Android Emulator.
1. etc.

And there has another scenario for the Wechaty Puppet Provider is closed source, which means you will not be able to install it, but only can use it as a Wechaty Puppet Service.

## Introducing Wechaty Puppet Service Provider

Our Wechaty Community now has serval Wechaty Puppet Services which works out-of-the-box. All you need is to get a Wechaty Puppet Service Token, then use `wechaty-puppet-hostie` with that token.

For now, the Wechaty community has four official Wechaty Puppet Services:

1. [WXWork](https://wechaty.js.org/docs/puppet-services/wxwork/): WeCom Windows Protocol
1. [PadLocal](https://wechaty.js.org/docs/puppet-services/padlocal/): WeChat Pad Protocol
1. [Paimon](https://wechaty.js.org/docs/puppet-services/paimon/): WeChat Pad Protocol
1. [Donut](https://wechaty.js.org/docs/puppet-services/donut/): WeChat Windows Protocol

More Puppet Service Providers are welcomed, please learn more from <https://github.com/wechaty/puppet-services> and feel free to contact us at Gitter (<https://gitter.im/wechaty/wechaty>) if you have any questions.

Learn more about all the Wechaty Puppet Services at our official website: <https://wechaty.js.org/docs/puppet-services/>

## Summary

In this post, we clarified the following core concepts of Wechaty:

1. __Wechaty Puppet__
1. __Wechaty Puppet Abstract__
1. __Wechaty Puppet Provider__
1. __Wechaty gRPC__
1. __Wechaty Puppet Service__
1. __Wechaty Puppet Service Token__
1. __Wechaty Puppet Service Provider__

I hope it can help our developer to understand Wechaty ecosystem better.

The Wechaty Puppet Core repo is [here](https://github.com/wechaty/wechaty-puppet) and gRPC repo is [there](https://github.com/wechaty/grpc).

Interested in RPA, building chatbots & providing service for developers? [Join the Wechaty community on Gitter](https://gitter.im/wechaty/wechaty)!

## Appendix

The following topics on GitHub was created when we were building the Wechaty Puppet Service ecosystem. Please feel free to read them and join the discussion by commenting those issues/discussions.

1. [Deprecated Announcement: Padplus service will end on Dec 1st, 2020 #11](https://github.com/wechaty/puppet-services/discussions/11)
1. [go-wechaty implementation wechaty-puppet-hostie discussion. #22](https://github.com/wechaty/go-wechaty/issues/22)
1. [How to create your own Wechaty Hostie Token with the Web Protocol #1986](https://github.com/wechaty/wechaty/discussions/1986)
1. [MemoryCard support: required for stateless puppet service #16](https://github.com/wechaty/puppet-services/discussions/16)
1. [Puppet Service Specifications #54](https://github.com/wechaty/puppet-services/discussions/54)
1. [Support rock puppet service provider. #98](https://github.com/wechaty/wechaty-puppet-hostie/issues/98)
1. [the relationship between hostie, grpc, and puppet. #1947](https://github.com/wechaty/wechaty/issues/1947)
1. [Using your Puppet PadPlus token with Python, Java, and Go Wechaty #1985](https://github.com/wechaty/wechaty/discussions/1985)
1. [Wechaty is All You Need: Python, Go, and Java Translation Project #1927](https://github.com/wechaty/wechaty/discussions/1927)
1. [Wechaty Puppet Service Provider FAQ #1](https://github.com/wechaty/puppet-services/discussions/1)
1. [Wechaty Puppet Service Registration & Discovery (w.r.t. token) #39](https://github.com/wechaty/puppet-services/discussions/39)
1. [Wechaty Workshop for Puppet Makers: How to Make a Puppet for Wechaty](https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/)
1. [Support GRPC in Go #50](https://github.com/wechaty/grpc/issues/50)
