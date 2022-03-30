---
title: Puppet-Whatsapp 1.0 Released!
author: windmemory
categories: announcement
tags:
  - news
  - open-source
  - puppet
image: /assets/2022/03-puppet-whatsapp-1.0-released/logo.webp
---

[`Puppet-Whatsapp`](https://github.com/wechaty/puppet-whstsapp) has been published for more than a year, [announcement here]({% post_url 2021-02-15-publishment-of-wechaty-whatsapp-puppet %}), and it was still in alpha stage with only login and text message supported. Recently [Juzi.bot](https://juzibot.com) was planning to support whatsapp in the web application, so we started working on the project.

[中文版](https://tech-blog.juzibot.com/zh/puppet-whatsapp-1.0-released)

## Primary Goals

***Make puppet-whatsapp to be enterprise beta ready***

To achieve this goal, [Juzi.bot](https://juzibot.com) worked from below aspects:

- improve code structure
- improve stability
- improve functionality

## Improve code structure

Code structure is also related to the application structure. Before we started, we looked into the code, and found that all the main code logic are written into a huge class called `PuppetWhatsapp`. This is okay for an alpha stage puppet, but the scalability and flexibility will be limited by the structure. To make sure we have an enterprise beta ready puppet, we need to have a better foundation. Based on the experience working on other puppets, we extract below components from the huge class:

- [`WhatsappManager`](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/whatsapp/whatsapp-manager.ts): in charge of everything that connects to `whatsapp-web.js`
- ['mixins'](https://github.com/wechaty/puppet-whatsapp/tree/main/src/puppet-mixin): separate implementation of different entities' into different mixins

Besides, we also added a new manager layer to the `PuppetWhatsapp`. With a new `PuppetManager`, we are able to make the `PuppetWhatsapp` class with least logic, and most code are pretty short and easy to read.

## Improve stability

Stability is really important for an enterprise ready puppet.

### Login Session

The first step for stability project of a puppet is always keep the login session. Two advantage with an persistent login session:

1. easier for develop phase, since restart application won't require a new scan login
1. easier to maintain stability, when we encounter an unknown state that causes application hangs or crashes, we could confidently restart the application and automatically re-login, recover the application with minor down time

So we spent a lot of time working on the login session. We've also found some issues in `whatsapp-web.js` project. To make sure we could finish `PuppetWhatsapp` within a reasonable time, we decide to fork the `whatsapp-web.js` and fix the problem, then raise PRs to `whatsapp-web.js` project.

### Request Control

`whatsapp-web.js` is using the `puppeteer` to control the whatsapp web application, so the api calling rate and amount needs to be considered, if we are making requests too frequent, the `puppeteer` might crash, if we are making too many requests, we might trigger the risk control mechanism of whatsapp. So request control is another key point to ensure stability.

To control the request sent to whatsapp application, there are two different ways, both are important:

1. programmatically limit the request rate
1. use cache to reduce the get requests to whatsapp

#### Request Manager

We created a new class called [`RequestManager`](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/request/request-manager.ts) to handle all request related stuff, and within the `RequestManager`, we added another component called [`RateManager`](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/request/rate-manager.ts), with `RateManager`, we are able to control the request rate separately for different apis, and also it provides a queue mechanism, so we can control the request rate better. For detailed code changes, please refer to [this PR](https://github.com/wechaty/puppet-whatsapp/pull/279)

#### Cache Manager

We created a new class called [`CacheManager`](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/data/cache-manager.ts') to manager different caches. We use [`flash-store`](https://github.com/huan/flash-store) as the underlying data persistent library, which is actually an old friend of puppets.

With `CacheManager`, requests to get same contact or room will be served by cache, from previous experience, this will significant reduce the get requests to IMs.

## Improve functionality

The alpha version only supports login and text messages, which is too basic for an enterprise ready puppet. So we started to add more features to the `Puppet-Whatsapp`.

Refer to new Wechaty 1.0 mixin design, we decide to also use mixins to implement the new functions. We've added 7 mixins

- [contact-self](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/puppet-mixin/contact-self.ts)
- [contact](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/puppet-mixin/contact.ts)
- [conversation](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/puppet-mixin/conversation.ts)
- [friendship](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/puppet-mixin/friendship.ts)
- [message](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/puppet-mixin/message.ts)
- [room](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/puppet-mixin/room.ts)
- [tag](https://github.com/wechaty/puppet-whatsapp/blob/9d9db5d308e253d92dae085f32e9b4ffea6fac3f/src/puppet-mixin/tag.ts)

Some of the mixin has only un-implemented methods, but they are placeholders for future implementations.

## Thanks To

With all works described above, we've glad to announce the `Puppet-Whatsapp` 1.0 are launched!

![Open Source Win](/assets/2022/03-puppet-whatsapp-1.0-released/launched.webp)

Thanks to developers contributing to the project

- [SuperChang](https://github.com/su-chang)
- [NickWang](https://github.com/hcfw007)
- [Bung](https://github.com/bung87)
- [述不作](https://github.com/wedreamer)
- [Kelly](https://github.com/guo40020)

![Open Source Win](/assets/2022/03-puppet-whatsapp-1.0-released/kickoff.webp)

### New PuppetWhatsapp Maintainers

To award the excellent contribution to `Puppet-Whatsapp`, author of Wechaty, [Huan](https://github.com/huan), announced two new `Puppet-Whatsapp` maintainers, they are [SuperChang](https://github.com/su-chang) and [NickWang](https://github.com/hcfw007). And a Github T-shirt, a bag of Github stickers and a Github brooch were given as the maintainer gifts. Additionally, to reward [SuperChang](https://github.com/su-chang)'s continuous contribution to Wechaty, a special edition Github cup was rewarded.

![Open Source Win](/assets/2022/03-puppet-whatsapp-1.0-released/maintainer.webp)

## Reference

Code base: <https://github.com/wechaty/puppet-whatsapp>
Main Issue: <https://github.com/wechaty/puppet-whatsapp/issues/263>
