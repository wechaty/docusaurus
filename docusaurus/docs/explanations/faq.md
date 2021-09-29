---
title: FAQ
---

## Table of Contents

- **General Info**
  - [Cannot log in using WeChat account](#11-i-can-not-login-with-my-wechat-account)
  - [What Wechaty cannot do on WeChat?](#a)
- **Others**
  - [Can Wechaty send url rich media message?](#b)
  - Does Wechaty provide support for official WeChat personal account?

## General Info

### I cannot log in with my WeChat account

- WeChat accounts that are registered after 2017 will not be able to login via Web API. Learn more about it [here](https://github.com/wechaty/wechaty/issues/872).
- Wechaty also supports protocols other than Web APIs, such as **PadChat**. Learn more about it [here](https://github.com/wechaty/wechaty/issues/1296). 

### Does Wechaty support Red Envelope and can transfer money at the moment?

Short answer is **NO** and here are the reasons why:
- **Payment**: We do not support this because this is related to property security.
- **@ someone in the room**: We plan to support this in the future and provide solutions other than Web API.
- **Send Contact Card**: We support this in iPad solution.
- **Send Share Card**: We plan to support this in the future and provide solutions other than Web API.
- **Send Voice**: We plan to support this in the future and provide solutions other than Web API.
- **At the moment**: We haven't decided yet whether to support such functions.

### Can Wechaty send url rich media message?
Not at the moment but we plan to provide support in the future.

**Related Issues**
- [Add support for send url rich media message](https://github.com/wechaty/wechaty/issues/718)
- [Can Wechaty send share card msg?](https://github.com/wechaty/wechaty/issues/824)

### Does Wechaty provide support for official WeChat personal account?
Currently, Wechaty only supports personal account created in Wechaty.

**Related Issue**
- [Using Wechaty to start a wechatOA account](https://github.com/wechaty/wechaty/issues/1016)

### What is a `Puppet` in Wechaty

The term `Puppet` in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the components that help Wechaty to control Wechat\(that's the reason we call it a puppet\).

The plugins are named `XXXPuppet`; like `PuppetPuppeteer` is using the Chrome puppeteer to control the WeChat Web API via the Chrome browser; `PuppetPadchat` is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad WeChat program.

### Wechaty & Queue

In order **not** to be blocked by wechat, we add a queue in Wechaty. For more information, refer to [rx-queue](https://github.com/zixia/rx-queue).

### What's the difference between Wechaty and WeChat4U?

Wechaty can implement many wechat protocol plugins. The plugins are the components that help Wechaty to control Wechat. Wechaty provides the same APIs in web, iPad, and iOS solutions. [WeChat4U](https://github.com/nodeWechat/wechat4u) is [SPACELAN](https://github.com/spacelan) written as a web solution on GitHub. Wechaty can use the Wechaty API to call the WeChat4U API.

> Is this correct: Wechaty has all APIs in WeChat4U, but WeChat4U does not have all APIs that Wechaty has?
No. Wechaty only uses its own APIs for WeChat4U. Wechaty and WeChat4U are totally two (2) different entities and do not own each others' APIs.

### How to ask questions the smart way?
For more information, read these [tips](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md). 

