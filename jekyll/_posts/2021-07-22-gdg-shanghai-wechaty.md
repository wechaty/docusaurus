---
title: 'Wechaty: 6 行代码构建基于 Whatsapp 和个人微信的对话式人机交互界面应用'
author: huan
categories:
  - talk
image: /assets/2021/07-gdg-shanghai-wechaty/community-wechaty.webp
tags:
  - gdg
  - google
---

在本周四晚 8 点的《社区说》中，上海 GDG 社区邀请嘉宾李卓桓（Huan）老师在 B 站直播间与伙伴们畅聊他的聊天机器人SDK：Wechaty

![huan intro](/assets/2021/07-gdg-shanghai-wechaty/huan-intro.webp)

## 讲师介绍

- 李卓桓
- 谷歌开发者专家（机器学习方向), Conversational SDK Wechaty 作者
- TensorFlow.js布道师，Angular爱好者
- 《Chatbot从0到1》、《简明的TensorFlow 2》联合作者，GitHub万星开源 Conversational SDK Wechaty 作者
- PreAngel 天使投资人，专注AI/Chatbot领域创业团队和项目
- 清华大学本科，中欧国际工商学院EMBA
- 紫霞 BBS、水木清华 BBS 站长，前优酷网首席科学家。

## 对话式人机交互界面趋势

李老师讲述在人机交互中，机器如何从“笨”变“聪明”、从打孔磁带到语音助手，交互方式一步步简化，机器越来越能够理解人所传达的指令。

## 人工智能前沿发展

李老师介绍了像 GPT-3 和 DALL·E 在自然语言处理上，通过简单的的一句自然语言，让机器生成有一定复杂度的文章或图片组。

![gpt-3](/assets/2021/07-gdg-shanghai-wechaty/gpt-3.webp)

![dall-e](/assets/2021/07-gdg-shanghai-wechaty/dall-e.webp)

关于 Conversation AI, 李老师提到机器人聊天对话应用的种种困难，讲述了AI在提升这类机器人理解能力上的作用，以及人机合作如何在一定程度上改进用户体验。

## Wechaty 介绍

李老师分享到他最初做 Wechaty 的灵感，来源于2014年他的微信消息和好友列表爆满...以至于影响使用效率，于是希望将重复性高的工作整合给机器人完成，实现自动化。

根据 Wechaty 官方介绍，

> Wechaty 是一个开源的的对话机器人 SDK，支持个人号微信。它是一个使用 Typescript 构建的 Node.js 应用。支持多种微信接入方案，包括网页，iPad，iOS，Windows， Android 等。同时支持 Linux, Windows, Darwin (OSX / Mac) 和 Docker 多个平台。

Wechaty 帮助开发者实现一个让用户无感知的在 IM (Instant Messaging) 平台与接入的机器人对话或交互。开发者在 IM 平台扫码接入，自由选择底层并设计应用层，最终实现智能对话。

Wechaty 现支持多种即时通讯平台，可用多种编程语言实现：

![wechaty-puppets](/assets/2021/07-gdg-shanghai-wechaty/wechaty-puppets.webp)

- GitHub Repo: <https://github.com/wechaty/wechaty>
- 官网: <https://wechaty.js.org>

## Live Demo

李老师在直播现场演示如何快速配置一个微信机器人

首先通过指令

```sh
git clone git@github.com:wechaty/wechaty-getting-started.git
```

将 wechaty-getting-started 仓库克隆至本地；

然后输入指令

```sh
WECHATY_PUPPET=wechaty-puppet-wechat npm start
```

以启动基于微信的 wechaty 机器人，

或者输入指令

```sh
WECHATY_PUPPET=wechaty-puppet-whatsapp npm start
```

以启动基于 WhatsApp 的 Wechaty 机器人。

在 Demo 中，个人微信号扫码登陆 web 版微信化身成为机器人，收到带有关键字 “ding” 的消息后，会自动发送 “dong” 作为回复：

![ding-dong](/assets/2021/07-gdg-shanghai-wechaty/ding-dong.webp)

Wechaty 开源社区自成立来，已获多项荣誉，百万量级的下载量，其开发者群体数量庞大且国内外影响力广，如图展示：

![awards-honors](/assets/2021/07-gdg-shanghai-wechaty/honors.webp)

问答环节中同学们针对 Wechaty 的安全性、限制、多轮语义分析等方面提出了精彩的问题，感兴趣的伙伴们可以查看回放：

{% include iframe.html src="https://youtu.be/q7a6x81RLA8" %}

- 00:00 社区说：主持人介绍GDG社区
- 06:27 Talk 开场
- 09:25 李卓桓介绍
- 11:43 对话式人机交互界面趋势
- 15:11 人工智能前沿发展
- 23:00 Conversation AI 场景
- 26:58 Wechaty 介绍
- 29:40 Live Demo
- 45:26 Wechaty 总结
- 47:46 Chatbot 行业前景
- 49:45 Q/A

> Bilibili: <https://www.bilibili.com/video/BV13f4y1575J>

## Slides

{% include iframe.html src="/assets/2021/07-gdg-shanghai-wechaty/wechaty-community-talk-live-demo.pdf" %}

> 小编认为可以让一个 bot 来做发送文件的事情呢 ^_^

## 关于社区说

「社区说」是一个由谷歌开发者社区 (Google Developer Group) 主导的，与热爱技术的开发者们交流技术，直播代码，讨论产品，分享心得的小型线上会议，每次时长 45 分钟到 1 个小时。

活动将由不同的谷歌开发者社区举办并邀请来自国内的不同技术方向的谷歌开发者专家以及对技术有热情、愿意分享的嘉宾，一起来聊一聊最近做的项目，最近写的代码，或者三五技术好友互相探讨聊天。

> 编辑：陈君瑶
> Source: [GDG](https://mp.weixin.qq.com/s/xz4w1BOFJmfqeIzBq239hw)
