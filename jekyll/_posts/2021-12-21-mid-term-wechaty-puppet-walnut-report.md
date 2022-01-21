---
title: "2021-期中报告-基于5G平台开发puppet模块接入wechaty"
author: fabian
categories:
  - project
image: /assets/2021/12-mid-term-wechaty-puppet-walnut-report/puppet-walnut.webp
tags:
  - 5g
  - puppet-walnut
  - chatbot
  - ecosystem
  - plan
---

## 基于 5G 平台开发 puppet 模块接入 wechaty

- 项目名称：基于5G消息的 Wechaty Puppet 模块的设计与实现
- 学生：鲍耀龙
- 导师：苏畅
- 项目介绍：<https://github.com/juzibot/intern/issues/1>
- 代码地址：<https://github.com/wechaty/puppet-walnut>

### 背景介绍

- Wechaty 社区目前已经支持微信、Whatsapp、企业微信、飞书等常见流行即时通讯工具，并且能够通过多语言 SDK （比如 Python Wechaty） 进行调用。
- [5G Chatbot (RCS)](https://wechaty.js.org/2021/03/27/rcs-messaging-chatbot/) 是近期中国电信运营商基于 5G 的消息战略落地平台，未来的 5G 手机将会内置 RCS 消息的处理能力。
- [硬核桃社区](https://www.5g-msg.com/#/) 的 [电信运营商商5G Chatbot](https://wechaty.js.org/2021/03/27/rcs-messaging-chatbot/) 平台。

### 目标计划

- 基于 5G 平台的开放 api 进行封装，实现简单的`ding-dong-bot`。
- 丰富 5G 的消息模式，实现支持富文本、文件、css等多样消息格式的 puppet。

### 项目进展

- 已经实现的puppet的封装，支持简单消息、位置消息等多样信息格式。
- 完善了联系人的模块，实现联系人的数据结构整合方便wechaty的调用。
- 引入了本地缓存，将消息和联系人模块都接入缓存，实现快速的加载和存储。

### 构建细节

#### 1. `Wechaty`与`Puppet`的交互

![WechatyPuppetWalnut](/assets/2021/12-mid-term-wechaty-puppet-walnut-report/wechatypuppetwalnut.webp)

- 开发者通过`Wechaty`提供的 Api 来进行具体的交互操作。
- `Wechaty`只需要具体调用**开发者指定的`Puppet`**即此处的`Walnut`来实现开发者需要的逻辑。
- 我们的`Walnut`继承于抽象的`Puppet`父类，实现其预定义的抽象方法来实现具体的能力。
- 具体的`Walnut`会和`5G`平台进行数据交互从而实现真正的 ChatBot。

#### 2. 待实现的抽象方法

关于需要我们去实现的抽象方法都被定义在[Wechaty Puppet的mixins目录下](https://github.com/wechaty/puppet/tree/main/src/mixins)。

~~~typescript
// 比如这里 MessageMixin 中定义的一些与消息模块中待实现的方法，来实现我们消息的多种格式发送。

    /**
    *
    * Message
    *
    */
    abstract messageContact      (messageId: string)                       : Promise<string>
    abstract messageFile         (messageId: string)                       : Promise<FileBoxInterface>
    abstract messageImage        (messageId: string, imageType: ImageType) : Promise<FileBoxInterface>
    abstract messageMiniProgram  (messageId: string)                       : Promise<MiniProgramPayload>
    abstract messageUrl          (messageId: string)                       : Promise<UrlLinkPayload>
    abstract messageLocation     (messageId: string)                       : Promise<LocationPayload>

    abstract messageForward         (conversationId: string, messageId: string,)                     : Promise<void | string>
    abstract messageSendContact     (conversationId: string, contactId: string)                      : Promise<void | string>
    // 发送文件
    abstract messageSendFile        (conversationId: string, file: FileBoxInterface)                 : Promise<void | string>
    abstract messageSendMiniProgram (conversationId: string, miniProgramPayload: MiniProgramPayload) : Promise<void | string>
    // 发送文本信息
    abstract messageSendText        (conversationId: string, text: string, mentionIdList?: string[]) : Promise<void | string>
    abstract messageSendUrl         (conversationId: string, urlLinkPayload: UrlLinkPayload)         : Promise<void | string>
    // 发送位置信息
    abstract messageSendLocation    (conversationId: string, locationPayload: LocationPayload)       : Promise<void | string>

    abstract messageRecall (messageId: string) : Promise<boolean>
~~~

#### 3. 消息接收

 由于`Wechaty`和`Puppet`的约定原因，我们需要去实现消息的缓存模式，来真正的让`Wechaty`可以获得到`Puppet`所接收到的消息内容。

~~~typescript
// 1. 当我们的 sever 监听到有用户发送消息，此时我们就需要去对消息的具体内容做一个缓存。
    // 这里我们需要自己实现一个缓存模块，将 message 的具体内容存储进去，并且返回 id。
    // 推荐李卓桓老师开发的缓存组件：flash-store。 https://github.com/huan/flash-store

// 2. 然后我们用 Puppet 触发一个 message 事件，把我们本地缓存的 id 传出去。
this.emit('message', { messageId: messageId })

// 3. 这时候 Wechaty 已经拿到我们消息的 id ，这个时候会根据一个需要我们实现的查询方法来获取本地缓存。
override async messageRawPayload (messageId: string): Promise<WalnutMessagePayload | undefined> {
  log.verbose('PuppetWalnut', 'messageRawPayload(%s)', messageId)
  // 这里根据 id 去缓存中查出来刚刚存入的消息
}

// 4. 当查出具体的消息内容后，其实和我们 Wechaty 中预定义的消息结构可能不太一致，需要我们进行一个转换。
override async messageRawPayloadParser (rawPayload: WalnutMessagePayload): Promise<PUPPET.payloads.Message> {
  // 这里实现转换规则：WalnutMessagePayload ===> PUPPET.payloads.Message
}

// 不过这里要注意，在每次进行收发消息的时候 Wechaty 都会去加载一遍我们的联系人缓存。所以对应的联系人缓存的模块也需要实现：
// contactRawPayload
// contactRawPayloadParser
~~~

### 关于 5G

1. 联系人模块

   5G 方面，联系人的概念可能与我们平常其他 IM 中的不同。依托于运营商的缘故，我们只需要一个手机号码就可以去直接发送消息，免去了加好友之类繁琐的操作。**所以对应 Walnut 我们会对所有的发送过消息的联系人存入缓存，这样可以快速有效的积累我们的联系人。**

2. 多媒体消息

   依据 [接口文档](https://github.com/wechaty/puppet-walnut/blob/main/docs/api-documentation-for-5G-platform.md#18) 给出的信息，5G 这边支持多样的消息格式：

   - 带菜单按钮的消息
   - 文件等多媒体消息
   - 地理位置回落信息
   - 带CSS样式的富文本消息

### 视频展示

{% include iframe.html src="https://youtu.be/i5UohqZ9uTs" %}

### 答辩报告

{% include iframe.html src="/assets/2021/12-mid-term-wechaty-puppet-walnut-report/mid-term-wechaty-puppet-walnut-report.pdf" %}

### 计划安排

- 完善 Walnut 的周边文档，包括 README、getting-started等。
- 落实富文本等多种信息格式的具体实现。
- 优化项目结构，进行项目部署和稳定性测试。

> Author: [@fabian](https://github.com/fabian4)
