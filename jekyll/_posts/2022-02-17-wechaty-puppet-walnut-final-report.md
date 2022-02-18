---
title: "2022-基于5G平台开发puppet模块接入wechaty"
author: fabian
categories:
  - project
image: /assets/2022/02-wechaty-puppet-walnut-final-report/puppet-walnut.webp
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

- 基于 5G 平台的开放 api 进行封装，实现可以收发消息的机器人 bot。
- 丰富机器人的扩展性功能，完善对于 Wechaty 的 api 适配。

### 项目进展

1. 完成图片、文件、音视频、联系人卡片消息的实现。
2. 封装和抽象消息模块的数据结构。

### 多种类消息的处理

这里我们通过改善`messageRawPayloadParserz`这一个方法来进行实现

~~~ts
override async messageRawPayloadParser (rawPayload: WalnutMessagePayload): Promise<PUPPET.payloads.Message> {
    const res = {
      fromId: rawPayload.senderAddress.replace('tel:+86', ''),
      id: rawPayload.messageId,
      text: rawPayload.messageList[0]!.contentText.toString(),
      timestamp: Date.parse(rawPayload.dateTime),
      toId: rawPayload.destinationAddress,
      type: PUPPET.types.Message.Text,
    }
    const file = rawPayload.messageList[0]?.contentText[0] as FileItem
    // 通过 rawPayload.messageItem 字段来分析消息的类型
    switch (rawPayload.messageItem) {
      case MessageRawType.text:
        break
      case MessageRawType.image:
        res.type = PUPPET.types.Message.Image
        res.text = 'image'
        break
      case MessageRawType.video:
        res.type = PUPPET.types.Message.Video
        res.text = 'video'
        break
      case MessageRawType.audio:
        res.type = PUPPET.types.Message.Audio
        res.text = 'audio'
        break
      case MessageRawType.location:
        res.type = PUPPET.types.Message.Location
        res.text = 'location'
        break
      case MessageRawType.other:
        res.type = PUPPET.types.Message.Attachment
        res.text = 'file'
        if (file.contentType === 'text/vcard') {
          res.type = PUPPET.types.Message.Contact
          res.text = 'contact'
        }
        break
    }
    return res
  }
~~~

### Message Api 的实现

这里我们实现了几个消息内容的拆箱方法

~~~ts
// 图片消息
override async messageImage (messageId: string, imageType: ImageType) : Promise<FileBoxInterface> {
    log.verbose('PuppetWalnut', 'messageImage(%s, %s)', messageId, imageType)
    const messagePayload = await this.messageRawPayload(messageId)
    let file = messagePayload?.messageList[0]?.contentText[1] as FileItem
    if (imageType === PUPPET.types.Image.Thumbnail) {
      file = messagePayload?.messageList[0]?.contentText[0] as FileItem
    }
    return FileBox.fromUrl(file.url)
  }
~~~

~~~ts
// 文件消息
override async messageFile (messageId: string) : Promise<FileBoxInterface> {
    log.verbose('PuppetWalnut', 'messageFile(%s)', messageId)
    const messagePayload = await this.messageRawPayload(messageId)
    let file = messagePayload?.messageList[0]?.contentText[0] as FileItem
    if (messagePayload?.messageItem === MessageRawType.video) {
      file = messagePayload.messageList[0]?.contentText[1] as FileItem
    }
    return FileBox.fromUrl(file.url)
  }
~~~

~~~ts
// 联系人卡片消息
override async messageContact (messageId: string) : Promise<string> {
    log.verbose('PuppetWalnut', 'messageContact(%s)', messageId)
    const messagePayload = await this.messageRawPayload(messageId)
    const file = messagePayload?.messageList[0]?.contentText[0] as FileItem
    const contact = await FileBox.fromUrl(file.url).toBuffer()
    const cards = parse(contact.toString())
    return cards.TEL.value
  }
~~~

### 消息种类支持

| 消息类型 | 从属(根据接口返回) | 获取方式               | 接收 | 发送 | 群聊 |
| -------- | ------------------ | ---------------------- | ---- | ---- | ---- |
| 文本     | `text`             | `message.text`         | ✅    | ✅    | ❌    |
| 图片     | `image`            | `message.toImage()`    | ✅    | ✅    | ❌    |
| 视频     | `video`            | `message.toFilebox()`  | ✅    | ❌    | ❌    |
| 音频     | `audio`            | `message.toFilebox()`  | ✅    | ❌    | ❌    |
| 位置     | `location`         | `message.toLocation()` | ❌    | ❌    | ❌    |
| 文件     | `other`            | `message.toFilebox()`  | ✅    | ❌    | ❌    |
| 联系人   | `other`            | `message.toContact()`  | ✅    | ❌    | ❌    |

### 视频展示

{% include iframe.html src="https://youtu.be/gqR2Mbouc4E" %}

### 答辩报告

{% include iframe.html src="/assets/2022/02-wechaty-puppet-walnut-final-report/wechaty-puppet-walnut-final-report" %}

### 未来与展望

- 对 walnut 进行细节的补充和完善。
- 尽可能增加对其他功能的支持、并且持序维护。

> Author: [@fabian](https://github.com/fabian4)
