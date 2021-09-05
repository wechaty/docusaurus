---
title: "wechaty-rainbowbot 基于Wechaty实现的企业业务系统与营销团队微信群之间通信的桥梁"
author: cavoncheng
categories: project
tags:
  - padplus
  - project
  - koa
  - weixin-openai
  - productivity
image: /assets/2020/wechaty-rainbowbot/rainbow.jpg
---

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

据我所知，大部分中小型公司，甚至某些传统大型销售公司，对销售团队的管理工作几乎依赖于微信、微信群，本人所处的公司也不例外。公司已有内部的web端业务数据系统，但是通常情况下数据只有发送到下级营销管理团队的微信群或者一线业务员的微信群中，才能发挥出相应的营销作用。

<!--more-->

### 典型的场景

- 每日评选销售精英团队Top10，在微信群中展示业绩数据（或者海报），并对销售欠佳的团队给予勉励，等等；

- 在某一销售阶段中，对达成业务目标的业务员，即时性地在微信群中给予祝贺（贺词或图文贺报）、奖励公示等。

顺便说一句，熟悉微商行业的应该知道，微商团队把微信群管理营销发挥到了极致，最典型的是他们的“报单”场景，小伙伴开单后立即向团队群汇报，群内一阵庆贺、鼓励，不得不说，这样的操作对团队积极性的调动是最直接的，对维持团队开单活动率的正向效果明显。所以传统行业在走向微信群营销管理的时候，自然而然地也会选择这种“接地气”的营销方式。

### 痛点

大部分传统行业，这类工作是人工执行，甚至需要设立专职人员监控业务系统的数据情况，（尽量的）及时编辑文案，发送给相应的微信营销群或者个人。然而作为一个有程序猿背景的业务管理者，这样重复的人工浪费是我无法忍受的。为什么不能接入一个微信robot，把这些事务性的繁琐工作接管，自动执行从业务系统到微信群的发送工作呢。当然，痛点也是显而易见的：业务系统与团队微信群本身是相互独立地存在，两者之间缺少一个通信连接的桥梁。

### 关键需求

外部的业务系统可以根据数据达成情况主动地向特定的微信群和个人发送消息。

### 关键实现

微信robot要暴露外部通信接口，第三方系统能够通过调用接口，实现微信消息（图片、文字、视频、文件等）的发送。

## 结缘Wechaty

首先在微信robot实现框架的选型上，我也考察过多个开源项目，基本上都是基于web端协议的，而web协议存在诸多使用限制（许多up主的文章已经做过比较详细的解释，在此不在赘述），况且许多这类项目已经好几年没有update了，果断放弃。至于基于Hook的PC端协议解决方案，必须依赖于固定版本的windows微信客户端，考虑到我需要的是一个运行在Linux服务器上的长期稳定的API，这种方案也是不可取的。

最后我发现了 [Wechaty](https://github.com/wechaty) 这个项目，Wechaty的社区是目前我发现的最活跃的微信robot开源社区。该社区的主创人员还会经常举行线上分享会，把Wechaty的最新发展情况、以及Wechaty的新应用、新玩法介绍给大家，还会现场解答user/developer反馈的问题。也正是在后来的一次分享会的视频上，最后提问环节中[@Gcaufy](https://github.com/Gcaufy)的问题解答，使我明确了Wechaty能够完美满足我的需求。

另外，wechaty支持 iPad 协议，虽然需要付费获取 token，但是可以申请[参与开源激励计划](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty#2免费Token参与开源激励计划)来获取免费甚至长期有效的 token。

> Wechaty 是一个开源的的个人号微信机器人接口，是一个使用 Typescript 构建的 Node.js  应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持 Linux, Windows,  Darwin(OSX/Mac) 和 Docker 多个平台。

## 搞起来

为了避免重复制造轮子，我翻阅了不少已有的Wechaty项目，有基于爬虫+定时任务来实现外部系统与微信端通信的应用，但这与我的需求还是有区别的。我希望实现的是（理论上）任意时间点，外部系统主动调用接口与微信之间进行通信。最后决定自己动手搞起来，理论模型已经很清晰，一个最简单的实现结构是这样的：

![结构图](/assets/2020/wechaty-rainbowbot/pic1.png)

RainbowBot作为中间通信桥梁，就像一弯`彩虹`，连接起远在天边的两个独立系统。

## 依赖

服务端基于 nodejs, koa, koa-jwt, multer

- wechaty核心库 [wechaty](https://github.com/wechaty/wechaty)
- wechaty的 ipad协议 [wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus/)

## 实现逻辑

- nodejs+koa启动服务端容器
- Wechaty启动创建bot，并将bot注册到服务端全局
- 服务端监听外部POST请求，通过JWT进行身份验证
- 按照请求提供的消息内容、接收方等信息，调用bot发送消息

### 核心代码

```javascript
const robot = {
    // [roomTopics, contactNames, contents, file_box] - 请求端字段名必须一致
    // 发送[多]文件消息
    sendFile: async (ctx, next) => {
        let paths = null
        try {
            paths = await uploadFiles(ctx, next, 'file_box')
            const roomTopics = ctx.request.body.roomTopics
            const contactNames = ctx.request.body.contactNames
            const fileBoxes = await buildFileBoxes(paths)
            const sended = await multiSend(roomTopics, contactNames, fileBoxes)
            await delFiles(paths)
            ctx.body = {}
        } catch (err) {
            throw err
        } finally{
            if(paths) await delFiles(paths)
        }
    },
    // 发送[多]文本消息
    sendText: async (ctx) => {
        try {
            const roomTopics = ctx.request.body.roomTopics
            const contactNames = ctx.request.body.contactNames
            const contents = ctx.request.body.contents
            await multiSend(roomTopics, contactNames, contents)
            ctx.body = {}
        } catch (err) { throw err }
    },
    // 发送文本文件混合消息
    sendMix: async (ctx, next) => {
        await robot.sendFile(ctx, next)
        await robot.sendText(ctx)
    }

}
```

具体代码请参阅GitHub项目[RainbowBot](https://github.com/CavonCheng/rainbow-bot)

### 接入微信对话开放平台

RainbowBot不只实现了系统与微信之间的通信，也扩展微信助理的能力，比如关键字问答能力。 7月16日中午WWC举办了线上分享会，句子互动联合创始人&CTO [@高原](https://github.com/windmemory)为我们分享了如何[用「Wechaty」和「微信对话开放平台」做个助理](https://wechaty.github.io/wechaty-openai-agent/)，让我大开眼界。因为通过接入微信对话开放平台，能够将关键词判断逻辑与bot发消息模块解耦。其次更重要的一点是，接入了微信对话开放平台的AI能力，平台能够根据传入的用户消息，自动判断用户意图，从而响应指定的信息。

因此，我在会后就立即为RainbowBot开通了微信对话平台API，并将关键词触发逻辑移接到平台端。高原先生也为我们封装好了Wechaty接入微信对话开放平台的插件[wechaty-weixin-openai](https://github.com/wechaty/wechaty-weixin-openai) ，让我可以仅用少量的代码就能够快速的实现接入平台和机器人的对话逻辑的配置。

在此推荐大家都看一下分享会的实况视频：[https://www.bilibili.com/video/BV1LV411r756/](https://www.bilibili.com/video/BV1LV411r756/)

## 本地运行

- ### 克隆项目

```Shell
git clone g https://github.com/CavonCheng/rainbow-bot
cd rainbow-bot
```

- ### 安装依赖

```Shell
npm install
```

- ### 修改配置

  1. 修改`config/index.js` 文件，将里面的配置改为自己的。
  2. 修改`config/openai.js`、`config/puppet.js`，分别设置自己的微信对话开放平台 token和wechaty-puppet token。 [微信对话平台官网](https://openai.weixin.qq.com/)，扫码登录提交开发者信息即可获得api token。

### 启动

- #### 启动项目

```shell
node app
```

启动成功后终端会出现一个二维码，扫码登录即可。

## 感谢

感谢[@beclass](https://github.com/beclass/beclass)的开源项目[`wxbot`](https://github.com/beclass/wxbot)，这是一套优秀的BS版微信robot后台管理系统，让我这枚nodejs全栈初级修炼者学习到了很多，受益匪浅。感谢[Wechaty](https://wechaty.github.io/)团队提供微信机器人SDK，让开发者可以专注于业务代码。 感谢[句子互动](https://www.juzibot.com)提供的pad协议版token。

> Author: [@CavonCheng](https://github.com/CavonCheng)
> Code: [@rainbow-bot](https://github.com/CavonCheng/rainbow-bot)
