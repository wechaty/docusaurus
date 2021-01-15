---
title: FAQ
---

## Table of Contents

- **General**
  - [Cannot login](#11-i-can-not-login-with-my-wechat-account)
  - [What wechaty cannot do on wechat](#a)
- **Others**
  - [Can wechaty send url rich media message?](#b)
  - [I don't know wechaty support for personal account of wechat official account?](#c)

## General

### I can not login with my Wechat account

Wechat account that registered after 2017 will not be able to login via Web API. Learn more at [https://github.com/wechaty/wechaty/issues/872](https://github.com/wechaty/wechaty/issues/872)

Solution: Wechaty support protocols other than Web API, such as pad. Learn more at [https://github.com/wechaty/wechaty/issues/1296](https://github.com/wechaty/wechaty/issues/1296)

### Does wechaty support Red envelope, transfer money, moment?

Short answer: NO

Long answer:

- Payment: we won't support this because this related to property security
- @ someone in the room: we will support this in the future in solutions other than Web API.
- Send Contact Card: we support this in ipad solution.
- Send Share Card: we will support this in the future in solutions other than Web API.
- Send Voice: we will support this in the future in solutions other than Web API.
- Moment: we haven't decide yet whether to support this function

### Can wechaty send url rich media message?

Not yet at this moment, will support later

Related Issue：

- [Add support for send url rich media message](https://github.com/wechaty/wechaty/issues/718)
- [can wechaty send share card msg](https://github.com/wechaty/wechaty/issues/824)

### I don't know wechaty support for personal account of wechat official account

At this moment, wechaty only support personal account

Related Issue:

- [Using wechaty to start a wechatOA account](https://github.com/wechaty/wechaty/issues/1016)

### What is a `Puppet` in Wechaty

The term `Puppet` in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat\(that's the reason we call it puppet\).

The plugins are named `XXXPuppet`, like `PuppetPuppeteer` is using the chrome puppeteer to control the WeChat Web API via a chrome browser, `PuppetPadchat` is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program.

### Wechaty & Queue

In order not blocked by wechat, we add queue in wechaty, see more: [rx-queue](https://github.com/zixia/rx-queue)

### What's the difference between wechaty and wechat4u?

Wechaty can implement many wechat protocol plughins. The plugins are the component that helps Wechaty to control the Wechat. Wechaty provide same API in web, ipad, ios solutions. [wechat4u](https://github.com/nodeWechat/wechat4u) is [SPACELAN](https://github.com/spacelan) write as a web solution on github. Wechaty can use wechaty API call wechat 4u API

> Is this right: wechaty has All api in wechat4u, but wechat 4u don't have all api wechaty has.

No, wechaty use wechaty itself API for wechat4u. They are totally 2 different project and no one contains another.

### How To Ask Questions The Smart Way

<https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md>
