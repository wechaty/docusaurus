---
title: FAQ
---

## Table of Contents

- **General Info**
  - [Cannot log in using WeChat account](#i-cannot-log-in-with-my-wechat-account)
  - [What Wechaty cannot do on WeChat?](#does-wechaty-support-red-envelope-and-can-transfer-money-at-the-moment)
- **Others**
  - [Can Wechaty send url rich media message?](#can-wechaty-send-url-rich-media-message)
  - [Does Wechaty provide support for official WeChat personal account?](#does-wechaty-provide-support-for-official-wechat-personal-account)
  - [What is a `Puppet` in Wechaty](#what-is-a-puppet-in-wechaty)
  - [Wechaty and Queue](#wechaty-and-queue)
  - [What is the difference between Wechaty and WeChat4U?](#what-is-the-difference-between-wechaty-and-wechat4u)
  - [How to ask questions the smart way?](#how-to-ask-questions-the-smart-way)

## General Info

### I cannot log in with my WeChat account

- WeChat accounts that are registered after 2017 will not be able to login via Web API. Learn more about it [here](https://github.com/wechaty/wechaty/issues/872). In order to fix this problem, Wechaty also support protocols other than Web APIs, such as:
  - [Ipad protocol: PadLocal](http://wechaty.js.org/docs/puppet-services/padlocal)
  - [Windows protocol: xp](https://github.com/wechaty/wechaty-puppet-xp)

### Does Wechaty support Red Envelope and can transfer money at the moment?

Short answer is **NO** and here are the reasons why:

- **Payment**: We do not support this because this is related to property security.
- **@ someone in the room**: We support mention (@ someone in the room) in [Ipad protocol: PadLocal](http://wechaty.js.org/docs/puppet-services/padlocal) and [WeCom Solution: WxWork](http://wechaty.js.org/docs/puppet-services/wxwork).
- **Send Contact Card**: We support this in iPad solution.
- **Send Share Card**: We support Send Share Card in [Ipad protocol: PadLocal](http://wechaty.js.org/docs/puppet-services/padlocal) and [WeCom Solution: WxWork](http://wechaty.js.org/docs/puppet-services/wxwork).
- **Send Voice**: We support Send Voice in [Ipad protocol: PadLocal](http://wechaty.js.org/docs/puppet-services/padlocal).
- **At the moment**: We are planning to support this, check [this issue](https://github.com/wechaty/wechaty/issues/1880).

### Can Wechaty send url rich media message?

Yes, Wechaty can send url rich media message. Check [Ipad protocol: PadLocal](http://wechaty.js.org/docs/puppet-services/padlocal) and [WeCom Solution: WxWork](http://wechaty.js.org/docs/puppet-services/wxwork).

### Does Wechaty provide support for official WeChat personal account?

Yes, Wechaty already supports WeChat Official Account, see:

- [GitHub Repository](https://github.com/wechaty/wechaty-puppet-official-account)
- [Introduction](http://wechaty.js.org/docs/puppet-providers/official-account)

### What is a `Puppet` in Wechaty

The term `Puppet` in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the components that help Wechaty to control Wechat\(that's the reason we call it a puppet\).

The plugins are named `XXXPuppet`; like `PuppetWechat` is using the Chrome puppeteer to control the WeChat Web API via the Chrome browser; `PuppetPadLocal` is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad WeChat program.

### Wechaty and Queue

In order **not** to be blocked by wechat, we add a queue in Wechaty. For more information, refer to [rx-queue](https://github.com/huan/rx-queue).

### What is the difference between Wechaty and WeChat4U?

Wechaty can implement many wechat protocol plugins. The plugins are the components that help Wechaty to control Wechat. Wechaty provides the same APIs in web, iPad, and iOS solutions. [WeChat4U](https://github.com/nodeWechat/wechat4u) is [SPACELAN](https://github.com/spacelan) written as a web solution on GitHub. Wechaty can use the Wechaty API to call the WeChat4U API.

> Is this correct: Wechaty has all APIs in WeChat4U, but WeChat4U does not have all APIs that Wechaty has?
> No. Wechaty only uses its own APIs for WeChat4U. Wechaty and WeChat4U are totally two (2) different entities and do not own each others' APIs.

### How to ask questions the smart way?

For more information, read these [tips](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md).
