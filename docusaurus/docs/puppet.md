---
title: Wechaty Puppet
---

The term [Puppet](https://github.com/wechaty/wechaty/wiki/Puppet) in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat\(that's the reason we call it puppet\).

The plugins are named `PuppetXXX`, like [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer) is using the [google puppeteer](https://github.com/GoogleChrome/puppeteer) to control the [WeChat Web API](https://wx.qq.com) via a chrome browser, [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat) is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program. More detail you could go [Puppet in wiki](https://github.com/wechaty/wechaty-puppet/wiki).

For a deeper understanding of the Puppet in Wechaty, you can read its source code if you like at [https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts](https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts)

![Puppet Structure](../static/img/docs/architecture.png)

## 2. Wechaty Puppet List

### 2.1. For Puppet User

| Wechaty Puppet | Backend Protocol | Npm Name | Npm Version | Stage |
| :--- | :--- | :--- | :--- | :--- |
| [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer) | Web API via Browser Hooking | wechaty-puppet-puppeteer | ![PuppetPuppeteer](https://badge.fury.io/js/wechaty-puppet-puppeteer.svg) [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-puppeteer/next.svg)](https://www.npmjs.com/package/wechaty-puppet-puppeteer?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |
| [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat) | iPad Protocol | wechaty-puppet-padchat | ![PuppetPadchat](https://badge.fury.io/js/wechaty-puppet-padchat.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-padchat/next.svg)](https://www.npmjs.com/package/wechaty-puppet-padchat?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |
| [PuppetPadpro](https://github.com/botorange/wechaty-puppet-padpro) | iPad Protocol | Enhance wechaty-puppet-padchat, see more [issue1668](https://github.com/wechaty/wechaty/issues/1668) | ![PuppetPadpro](https://badge.fury.io/js/wechaty-puppet-padpro.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-padpro.svg)](https://www.npmjs.com/package/wechaty-puppet-padpro?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |
| [PuppetWechat4u](https://github.com/wechaty/wechaty-puppet-wechat4u) | Web API via HTTP | wechaty-puppet-wechat4u | ![PuppetWechat4u](https://badge.fury.io/js/wechaty-puppet-wechat4u.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-wechat4u/next.svg)](https://www.npmjs.com/package/wechaty-puppet-wechat4u?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Alpha-red.svg) |
| [PuppetIosbird](https://github.com/botorange/wechaty-puppet-iosbird) | iPhone Hook | wechaty-puppet-iosbird | ![PuppetIosbird](https://badge.fury.io/js/wechaty-puppet-iosbird.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-iosbird.svg)](https://www.npmjs.com/package/wechaty-puppet-iosbird?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Alpha-red.svg) |
| TBW | Android Hook | Android | 0.0.0 | ![Stage:Release](https://img.shields.io/badge/Stage-Plan-lightgrey.svg) |
| TBW | Win32 Hook | Win32 | 0.0.0 | ![Stage:Release](https://img.shields.io/badge/Stage-Plan-lightgrey.svg) |

### 2.2. For Puppet Builder

| Wechaty Puppet | Backend Protocol | Npm Name | Npm Version | Stage |
| :--- | :--- | :--- | :--- | :--- |
| [Puppet](https://github.com/wechaty/wechaty-puppet) | Abstract Base Class | wechaty-puppet | ![Puppet](https://badge.fury.io/js/wechaty-puppet.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet/next.svg)](https://www.npmjs.com/package/wechaty-puppet?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |
| [PuppetMock](https://github.com/wechaty/wechaty-puppet-mock) | Mocking | wechaty-puppet-mock | ![PuppetMock](https://badge.fury.io/js/wechaty-puppet-mock.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg)](https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |

## 3. Wechaty Puppet Compatibility

### 3.1 Puppet Contact API

| Contact API | wechat4u & puppeteer | padchat | Iosbird |
| :--- | :---: | :---: | :---: |
| Permanent ContactPayload.id | ~~No~~ | Yes | Yes |
| ContactPayload.friend | ~~No~~ | Yes | Yes |
| weixin\(\) | ~~No~~ | Yes | Yes |

### 3.2 Puppet Message API

| Message API | wechat4u & puppeteer | padchat | Iosbird |
| :--- | :---: | :---: | :---: |
| messageSendContact\(\) | ~~No~~ | Yes | ~~No~~ |
| messageFile\(\) | Yes | Yes for Image/Audio/Video No for other Attachments | Yes for Image/Audio/Video/other Attachments/UrlLink |
| messageSendFile\(\) | Yes | Yes for Image/Audio/Video No for other Attachments | Yes for Image No for other Attachment |
| messageSendUrl\(\) | ~~No~~ | Yes | ~~No~~ |

### 3.3 Puppet Room API

| Room API | wechat4u & puppeteer | padchat | Iosbird |
| :--- | :---: | :---: | :---: |
| Permanent RoomPayload.id | ~~No~~ | Yes | Yes |
| roomQrcode\(\) | ~~No~~ | Yes | Yes |
| roomCreate\(\) | ~~No~~ | Yes | Yes |
| roomAdd\(\) | ~~No~~ | Yes | Yes |
| roomDel\(\) | ~~No~~ | Yes | Yes |
| roomQuit\(\) | ~~No~~ | Yes | Yes |
| roomAnnounce\(\) | ~~No~~ | Yes | Yes |
| roomPayload.owner | ~~No~~ | Yes | ~~No~~ |

## 4. Learn More

Learn more about Wechaty Puppet at [https://github.com/wechaty/wechaty-puppet/wiki](https://github.com/wechaty/wechaty-puppet/wiki)

* Repository: [https://github.com/wechaty/wechaty-puppet](https://github.com/wechaty/wechaty-puppet)
* Documentation: [https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html](https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html)
* Puppet Development Guide: [https://github.com/wechaty/wechaty-puppet/wiki/Development](https://github.com/wechaty/wechaty-puppet/wiki/Development)
* Puppet Related Links: [https://github.com/wechaty/wechaty-puppet/wiki/Links](https://github.com/wechaty/wechaty-puppet/wiki/Links)

