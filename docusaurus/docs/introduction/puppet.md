---
title: Wechaty Puppet
---

<!-- A channel is a connection between communication applications and a bot. A bot, registered with Azure, uses channels to facilitate the communication with users. -->

<!-- WhatsApp is the most popular OTT app in many parts of the world. With the WhatsApp Business API with Twilio, you can reach more than 1.5 billion WhatsApp users. You can send notifications, have two-way conversations, or build chatbots. If you're trying to reach – and better converse with – users in LATAM, EMEA, and APAC, you need to consider using WhatsApp. -->

<!-- :::
The WhatsApp Business API with Twilio is now available in an early-access program, to allow developers to start building and prototyping in a sandbox. To launch apps in production, start by requesting access to enable WhatsApp on your Twilio number. WhatsApp is currently providing this access in a limited availability program, for which WhatsApp approval is required for all customers who wish to create their own profiles.
::: -->

The term [Puppet](https://github.com/wechaty/wechaty/wiki/Puppet) in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat\(that's the reason we call it puppet\).

The plugins are named `PuppetXXX`, like [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer) is using the [google puppeteer](https://github.com/GoogleChrome/puppeteer) to control the [WeChat Web API](https://wx.qq.com) via a chrome browser, [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat) is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program. More detail you could go [Puppet in wiki](https://github.com/wechaty/wechaty-puppet/wiki).

For a deeper understanding of the Puppet in Wechaty, you can read its source code if you like at [https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts](https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts)

![Puppet Structure](../../static/img/docs/architecture.png)

## 2. Wechaty Puppet List

### 2.1. For Puppet User

| Protocol | Puppet Provider | Environment Variable |
| --- | --- | --- |
| Web | [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer) | `export WECHATY_PUPPET=wechaty-puppet-puppeteer` |
| Windows | [PuppetWxwork](https://github.com/juzibot/wxwork-tester) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |
| Web | [PuppetWechat4u](https://github.com/wechaty/wechaty-puppet-wechat4u) | `export WECHATY_PUPPET=wechaty-puppet-wechat4u` |
| iPad | [PuppetRock](https://github.com/wechaty/puppet-services) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |
| iPad | [PuppetPadLocal](https://github.com/wechaty/puppet-services) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |
| Windows | [PuppetDonut](https://github.com/wechaty/puppet-services) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |
| iPad | ~~PuppetPadpro~~ **DEPRECATED** | `export WECHATY_PUPPET=wechaty-puppet-padpro` |
| iPad | ~~PuppetPadchat~~ **DEPRECATED** | `export WECHATY_PUPPET=wechaty-puppet-padchat` |
| iPad | ~~PuppetPadplus~~ **DEPRECATED** | `export WECHATY_PUPPET=wechaty-puppet-padplus` |
| Mac | ~~PuppetMacpro~~ **DEPRECATED** | `export WECHATY_PUPPET=wechaty-puppet-macpro` |

### 2.2. For Puppet Builder

| Wechaty Puppet | Backend Protocol | Npm Name | Npm Version | Stage |
| :--- | :--- | :--- | :--- | :--- |
| [Puppet](https://github.com/wechaty/wechaty-puppet) | Abstract Base Class | wechaty-puppet | ![Puppet](https://badge.fury.io/js/wechaty-puppet.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet/next.svg)](https://www.npmjs.com/package/wechaty-puppet?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |
| [PuppetMock](https://github.com/wechaty/wechaty-puppet-mock) | Mocking | wechaty-puppet-mock | ![PuppetMock](https://badge.fury.io/js/wechaty-puppet-mock.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg)](https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |

## 3. Wechaty Puppet Compatibility

### Puppet Comparison

Puppet | donut | padplus | wxwork | rock
:---|:---:|:---:| :---:| :---:
支持账号|个人微信|个人微信|企业微信|个人微信
**<消息>**|  |  |  |
收发文本| ✅  | ✅  |✅ |✅
收发个人名片| ✅  |✅   |✅ |✅
收发图文链接| ✅  |✅   |✅ |✅
发送图片、文件| ✅  | ✅（对内容有大小限制，20M以下）  |✅ |✅（较慢）
接收图片、文件| ✅  | ✅（对内容有大小限制，25M以下）  |✅ |✅
发送视频| ✅  | ✅   |✅ |✅（较慢）
接收视频| ✅  | ✅   |✅ |✅
发送小程序| ✅  | ✅   |✅ |✅
接收动图| ❌  | ✅   |✅|❌
发送动图| ✅  | ✅  |✅ |✅（以文件形式发送）
接收语音消息| ✅  | ✅   |✅|❌
发送语音消息| ❌  | ❌  |❌ |❌
转发文本| ✅  | ✅   |✅ |✅
转发图片| ✅  | ✅  |✅ |✅
转发图文链接| ✅  | ✅  |✅|❌
转发音频| ✅ | ❌   |✅ |❌
转发视频| ✅  | ✅   |✅ |✅
转发文件| ✅  | ✅   |✅|✅
转发动图| ❌  | ❌   |✅| ❌
转发小程序| ✅ | ✅   |✅ |✅
**<群组>**|   |    |
创建群聊|✅|✅ |✅|✅
设置群公告|✅|✅|✅|✅
获取群公告|❌|✅|❌|✅
群二维码|❌|✅ |❌|❌
拉人进群|✅|✅ |✅|✅
踢人出群|✅|✅ |✅|✅
退出群聊|✅|✅ |❌|✅
改群名称|✅|✅ |✅|❌
入群事件|✅|✅ |✅|✅
离群事件|✅|✅ |✅|✅
群名称变更事件|✅|✅|✅|❌
@群成员|✅|✅|✅|✅
群列表|✅|✅ |✅|✅
群成员列表|✅|✅|✅|✅
群详情|✅|✅|✅|✅
**<联系人>**|  |   |
修改备注|✅|✅ |✅|❌
添加好友|✅|✅|✅|❌
自动通过好友|✅|✅|✅|✅
好友列表|✅|✅ |✅|✅
好友详情|✅|✅|✅|✅
**<其他>**|  |   |
登录事件|✅|✅|✅|✅
扫码状态|❌|✅|❌|❌
登出事件|✅|✅|✅|❌
主动退出登录|✅|✅|❌|✅
依赖协议|Windows|iPad| Windows|iPad

## 4. Learn More

Learn more about Wechaty Puppet at [https://github.com/wechaty/wechaty-puppet/wiki](https://github.com/wechaty/wechaty-puppet/wiki)

* Contact Puppet Creators & Get Puppet Token: [https://github.com/wechaty/puppet-services](https://github.com/wechaty/puppet-services)
* Repository: [https://github.com/wechaty/wechaty-puppet](https://github.com/wechaty/wechaty-puppet)
* Documentation: [https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html](https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html)
* Puppet Development Guide: [https://github.com/wechaty/wechaty-puppet/wiki/Development](https://github.com/wechaty/wechaty-puppet/wiki/Development)
* Puppet Related Links: [https://github.com/wechaty/wechaty-puppet/wiki/Links](https://github.com/wechaty/wechaty-puppet/wiki/Links)
