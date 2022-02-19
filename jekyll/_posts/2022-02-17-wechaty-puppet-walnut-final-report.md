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

- 基于 5G 平台的开放 api 进行封装，实现简单的`ding-dong-bot`。
- 丰富 5G 的消息模式，实现支持富文本、文件、css等多样消息格式的 puppet。

### 需求分析与设计

#### 1. `Wechaty`与`Puppet`的交互

![WechatyPuppetWalnut](assets/2022/02-wechaty-puppet-walnut-final-report/wechatypuppetwalnut.webp)

- 开发者通过`Wechaty`提供的 Api 来进行具体的交互操作。
- `Wechaty`只需要具体调用**开发者指定的`Puppet`**即此处的`Walnut`来实现开发者需要的逻辑。
- 我们的`Walnut`继承于抽象的`Puppet`父类，实现其预定义的抽象方法来实现具体的能力。
- 具体的`Walnut`会和`5G`平台进行数据交互从而实现真正的 ChatBot。

#### 2. 抽象方法的实现

在继承了抽象父类之后，我们就可以按照自己需要去实现具体的方法。

1. messageMixin: 消息相关的抽象方法

   ```ts
   abstract messageContact      (messageId: string)                       : Promise<string>
   abstract messageFile         (messageId: string)                       : Promise<FileBoxInterface>
   abstract messageImage        (messageId: string, imageType: ImageType) : Promise<FileBoxInterface>
   abstract messageMiniProgram  (messageId: string)                       : Promise<MiniProgramPayload>
   abstract messageUrl          (messageId: string)                       : Promise<UrlLinkPayload>
   abstract messageLocation     (messageId: string)                       : Promise<LocationPayload>
   
   abstract messageForward         (conversationId: string, messageId: string,)                     : Promise<void | string>
   abstract messageSendContact     (conversationId: string, contactId: string)                      : Promise<void | string>
   abstract messageSendFile        (conversationId: string, file: FileBoxInterface)                 : Promise<void | string>
   abstract messageSendMiniProgram (conversationId: string, miniProgramPayload: MiniProgramPayload) : Promise<void | string>
   abstract messageSendText        (conversationId: string, text: string, mentionIdList?: string[]) : Promise<void | string>
   abstract messageSendUrl         (conversationId: string, urlLinkPayload: UrlLinkPayload)         : Promise<void | string>
   abstract messageSendLocation    (conversationId: string, locationPayload: LocationPayload)       : Promise<void | string>
   
   abstract messageRecall (messageId: string) : Promise<boolean>
   ```

2. contactMixin: 联系人相关的抽象方法

   ```ts
   abstract contactSelfName (name: string)           : Promise<void>
   abstract contactSelfQRCode ()                     : Promise<string /* QR Code Value */>
   abstract contactSelfSignature (signature: string) : Promise<void>
   abstract contactAlias (contactId: string)                       : Promise<string>
   abstract contactAlias (contactId: string, alias: string | null) : Promise<void>
   abstract contactAvatar (contactId: string)                : Promise<FileBoxInterface>
   abstract contactAvatar (contactId: string, file: FileBoxInterface) : Promise<void>
   abstract contactPhone (contactId: string, phoneList: string[]) : Promise<void>
   abstract contactCorporationRemark (contactId: string, corporationRemark: string | null): Promise<void>
   abstract contactDescription (contactId: string, description: string | null): Promise<void>
   abstract contactList (): Promise<string[]>
   abstract contactRawPayload (contactId: string): Promise<any>
   abstract contactRawPayloadParser (rawPayload: any) : Promise<ContactPayload>
   ```

#### 3. 缓存模块

1. 当我们的 sever 监听到有用户发送消息，此时我们就需要去对消息的具体内容做一个缓存。

   这里我们需要自己实现一个缓存模块，将 message 的具体内容存储进去，并且返回 id。

   > 推荐李卓桓老师开发的缓存组件：**flash-store**。 https://github.com/huan/flash-store

2. 然后我们用 Puppet 触发一个 message 事件，把我们本地缓存的 id 传出去。

   ~~~ts
   this.emit('message', { messageId: messageId })
   ~~~

3. 这时候 Wechaty 已经拿到我们消息的 id ，这个时候会根据一个需要我们实现的查询方法来获取本地缓存。

   ~~~ts
   override async messageRawPayload (messageId: string): Promise<WalnutMessagePayload | undefined> {
     log.verbose('PuppetWalnut', 'messageRawPayload(%s)', messageId)
     // 这里根据 id 去缓存中查出来刚刚存入的消息
   }
   ~~~

4. 当查出具体的消息内容后，其实和我们 Wechaty 中预定义的消息结构可能不太一致，需要我们进行一个转换。

   ~~~ts
   override async messageRawPayloadParser (rawPayload: WalnutMessagePayload): Promise<PUPPET.payloads.Message> {
     // 这里实现转换规则：WalnutMessagePayload ===> PUPPET.payloads.Message
   }
   ~~~

5. 不过这里要注意，在每次进行收发消息的时候 Wechaty 都会去加载一遍我们的联系人缓存。
   所以对应的联系人缓存的模块也需要实现：

   - contactRawPayloa
   - contactRawPayloadParser

### 项目成果

#### 1. Contact Api 支持

- #### [Properties](https://wechaty.js.org/docs/api/contact#properties)

  | Name | Type     | Description                                                  | Support | Details      |
  | ---- | -------- | ------------------------------------------------------------ | ------- | ------------ |
  | id   | `string` | Get Contact id. This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table) | ✅       | Phone number |

- #### [Instance Methods](https://wechaty.js.org/docs/api/contact#instance-methods)

  | Instance Methods             | Return type                                                  | Support | Details               |
  | ---------------------------- | ------------------------------------------------------------ | ------- | --------------------- |
  | say(text Or Contact Or File) | `Promise`                                                    | ✅       | ⚠Contact not Support  |
  | name()                       | `String`                                                     | ✅       | Phone number          |
  | alias(newAlias)              | `Promise`                                                    | ✅       |                       |
  | friend()                     | `Boolean or null`                                            | ✅       | True                  |
  | type()                       | `ContactType.Unknown or ContactType.Personal or ContactType.Official` | ✅       | ContactType.Personal  |
  | gender()                     | `ContactGender.Unknown or ContactGender.Male or ContactGender.Female` | ✅       | ContactGender.Unknown |
  | province()                   | `String or null`                                             | ❌       |                       |
  | city()                       | `String or null`                                             | ❌       |                       |
  | avatar()                     | `Promise`                                                    | ✅       | Default avatar        |
  | sync()                       | `Promise`                                                    | ✅       |                       |
  | self()                       | `Boolean`                                                    | ✅       |                       |

  > Default avatar 👉 <https://raw.githubusercontent.com/wechaty/puppet-walnut/main/docs/images/avatar.webp>

- #### [Static Methods](https://wechaty.js.org/docs/api/contact#static-methods)

  | Static Methods            | Return Type                | Support | Detail |
  | ------------------------- | -------------------------- | ------- | ------ |
  | find(query)               | `Promise <Contact | null>` | ✅       |        |
  | findAll(Query Arguements) | `Promise <Contact []>`     | ✅       |        |

#### 2. Message Api 支持

- #### [Instance Methods](https://wechaty.js.org/docs/api/message#instance-methods)

  | Instance methods             | Return type         | Support | Detail               |
  | ---------------------------- | ------------------- | ------- | -------------------- |
  | from()                       | `Contact` or `null` | ✅       |                      |
  | to()                         | `Contact` or `null` | ✅       |                      |
  | room()                       | `Room` or `null`    | ✅       | null                 |
  | text()                       | `string`            | ✅       |                      |
  | say(text Or Contact Or File) | `Promise`           | ✅       | ⚠Contact not Support |
  | type()                       | `MessageType`       | ✅       | Message.Text         |
  | self()                       | `boolean`           | ✅       |                      |
  | mention()                    | `Promise`           | ❌       |                      |
  | mentionSelf()                | `Promise`           | ❌       |                      |
  | forward(to)                  | `Promise`           | ✅       |                      |
  | date()                       | `Date`              | ✅       |                      |
  | age()                        | `Number`            | ✅       |                      |
  | toFileBox()                  | `Promise`           | ✅       |                      |
  | toContact()                  | `Promise`           | ✅       |                      |
  | toUrlLink()                  | `Promise`           | ✅       |                      |

- #### [Static Method](https://wechaty.js.org/docs/api/message#static-method)

  | Static Methods | Return type | Support | Detail |
  | -------------- | ----------- | ------- | ------ |
  | find()         | `Promise`   | ✅       |        |
  | findAll()      | `Promise`   | ✅       |        |

#### 3. 消息格式支持

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
