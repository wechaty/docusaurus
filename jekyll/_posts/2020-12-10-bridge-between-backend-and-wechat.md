---
title: "沟通后端系统和微信消息的桥梁"
author: johnwang71
image: /assets/2020/12-johnwang71/avartar.webp
categories: project
tags:
  - nodejs
  - donut
  - productivity
---

困惑于各类后端系统与同事、客户和其他相关方的沟通：一方面是后端系统纷繁复杂，开发语言众多；另一方面是不同人群对邮件、短信等各自的喜好程度不同，相对而言，微信是商务人群中使用量较大的，虽然微信提供了公众号等方式集成，但恰恰是大多数微信使用者只会在非常必须才会去用的服务方式。

之前基于微信网页版的插件较多，也尝试过集成，不幸的是微信收掉了绝大多数微信用户的网页版登录权限。最近一个偶然机会接触到[wechaty](https://github.com/wechaty)，阅读了先前贡献者们的经验分享，立即有了参与的冲动，按机器人指导完成了注册获取token，开始了体验开发之旅。

## 超小的微信网关

本来最熟悉Java，但wechaty是js的，正好也用nodejs在做其他工作，就从它开始吧。考虑到需要与其他系统集成，将wechaty封装成微信通讯网关，设计使用restful的双向调用，解耦网关和后端系统。虽然最近特别事杂，紧赶慢赶也终于在15天token有效期完成了最小化产品的提交，可以满足包括好友、微信群操作和文字类消息互动的全部商务需求，仅仅100行代码出头。
运行也很简单，参考README即可：
![安装](/assets/2020/12-johnwang71/wechaty-integration.webp)

感谢wechaty提供了很好的思路，感谢wechaty-puppet提供了良好的设计，让我能够站在巨人肩膀之上快速完成工作，感谢所有帮助过和感兴趣的小伙伴！

经过一段时间测试，基本没发现掉线，服务也正常。
如果喜欢，请了解体验审阅 <https://github.com/johnwang71/wechaty-integration> 这段短小的代码，更欢迎提出好的建议和问题！
