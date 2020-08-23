---
sidebar_label: General
hide_title: true
title: 'Wechaty FAQ: General'
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
