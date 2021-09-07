---
title: "如何用PadPro实现发送微信小程序"
author: limingth
categories: feature
tags:
  - code
  - featured
image: /assets/2019/maodou-ketang-demo.png
---

3个月前，也就是2019.4.18，我们公司启动了一个小程序项目 -- **毛豆课堂**。这个项目是依托[毛豆网](https://maodou.io)的音视频互动直播技术，搭建一个专注少儿素质课程的在线教育平台。

目前这个小程序的MVP已经通过微信审核上线，初步实现了家长（例如孩子妈妈）给孩子的课程设定时间提醒，提醒的方式包括小程序消息，短信，电话，邮件等四种常用通知方式。转发这个课程还可以邀请和课程有关的人（例如孩子爸爸，同学家长和课程老师等）也加入这个课程提醒，未来计划还会开发一些类似家长朋友圈的社交功能。有兴趣体验的朋友，可以扫这个[毛豆课堂小程序二维码](/assets/2019/maodou-ketang-invite-qrcode.png)。

1个月前，我们觉得通过这个小程序创建课程提醒的流程还是不够方便，想到了能否在微信里通过聊天方式来创建提醒，例如孩子妈妈发过来一条消息`”今天晚上6点晨晨英语课，在商务会馆1101“`，收到消息的爸爸就可以转发给一个微信机器人bot，从而为爸爸建好这个课程提醒，爸爸加入后就可以提醒他去送孩子上课。有这个想法的时候，正好有一天带娃路上偶遇了李卓桓，很自然就想到了要用[Wechaty](https://github.com/wechaty/wechaty/)这个牛逼闪闪的微信机器人开源项目。

其实知道这个项目已经有好几年了，但登录到github上看到[huan](https://github.com/huan)的5000多次commits还是把我惊了一跳，心中无数个草泥马翻腾而过，想说zixia还是那个zixia，你大爷居然还在写代码。Orz 钦佩之余，接下来一个多星期我也日夜奋战，虽然只有C语言和ARM汇编的基础，但在学习了[xiaoli-news-bot](https://github.com/wechaty/wechaty-getting-started/tree/master/examples/third-party/xiaoli)代码框架的基础上，实现了我们的[maodou-ketang-bot](https://github.com/maodouio/wechaty-getting-started/blob/master/examples/third-party/maodou/README.md)。有兴趣体验的朋友，可以扫这个[毛豆课堂小助手二维码](/assets/2019/maodou-ketang-qrcode.png)，加好友之后，转给它那条孩子妈妈的消息。

![毛豆课堂演示](/assets/2019/maodou-ketang-demo.png)

大家看到小助手回复了2条消息，一条是文字，解析了这段文本中的时间、地点和标题；一条是小程序，创建了相应的消息提醒。但当时Wechaty底层是不支持发送小程序的，只能发送文字，图片，名片和链接。

初期测试我们使用的wechaty+puppeteer，发现不能发送图片和小程序，和李卓桓联系沟通后，建议使用puppet-padpro，还把他珍藏的两个token送了一个给我们做开发。这时我们发现wechaty真的很强大，可以挂接不同的puppet，而puppet-padpro就是ipad版本的puppet。

同时，我们了解到[Simon大侠](https://github.com/lhr0909)已经在puppet-padpro上做了很多这方面的[底层改造工作](https://github.com/xanthous-tech/wechaty-puppet-padpro/commit/057927caf64f4b811b7269adfc18c7c8dec86efd)，就差一点即可实现发送小程序，因为时间关系没能继续完成。于是在他的基础上，我们进行了实验和修改，发现只需要在底层xml协议中加上filekey字段就可以了。随后我发了一个相关的#issue [Send Mini-Program](https://github.com/wechaty/wechaty/issues/1806)，接下来我的同事[@zhaoic](https://github.com/zhaoic)参与完成了后继的开发工作，初步解决了这个问题并提交了代码的PR。

对这次 PR 想仔细了解的可以直接进入下面的3个链接，重要的代码部分我也摘录在本文中，便于给想了解这个工作的人多一些线索。

* <https://github.com/wechaty/wechaty/pull/1822/files>
* <https://github.com/wechaty/wechaty-puppet/pull/55/files>
* <https://github.com/botorange/wechaty-puppet-padpro/pull/172/files>

下面，我就重点介绍一下我们是如何实现发送微信小程序的。

## 内容纲要

* 毛豆课堂项目背景介绍  
* 如何用PadPro实现发送微信小程序  
* 进一步需要完成的工作  

## 如何用PadPro实现发送微信小程序

实现发送小程序改造代码的过程，需要涉及 wechaty，wechaty-puppet和wechaty-puppet-padpro 三个库。关于这三个库的关系，推荐读一下另一位大侠[苏畅](https://github.com/su-chang)写的这篇[Summary of Learning Wechaty and Padpro](https://wechaty.github.io/summary-of-learning-wechaty-and-padpro)，非常清晰的勾画出了从上到下的三个层，即接口层-抽象层-实现层的逻辑关系，这里我就不再赘述，主要说明一下我们所做的代码改动过程。

要想从上到下整个改动，涉及的代码修改量很大，为了尽快跑通小程序的流程，经过分析后，我们发现UrlLink结构，和小程序比较接近。这样我们就不需要动wechaty和wechaty-puppet这两个库，只修改wechaty-puppet-padpro这一个库，大大减轻了工作量。

Simon的wechaty-puppet-padpro库，对小程序大多数功能都已经实现了，在此基础上，我们先改造了 puppet-padpro.ts文件的`forwardAttachment`函数，该函数调用`generateAttachmentXMLMessageFromRaw`函数，我们把分析出来的小程序xml替换这个函数的内容后，转发小程序成功了，基本流程跑通了。

接下来，继续改造`messageSendUrl`函数，仿照`generateAttachmentXMLMessageFromRaw`，创建了一个`generateMiniProgramXMLMessageFromRaw`函数，把messageSendUrl底层调用改成这个新的函数 `await this.padproManager.GrpcSendApp(id, generateMiniProgramXMLMessageFromRaw(urlLinkPayload))`
通过`urlLinkPayload`传递两个参数，小程序的`title`和`url`。经过测试后，通过`say(urlLink)`，可以实现小程序的发送。

经过了可行性的验证，确认了底层能够发送小程序之后，下面我们就开始在三个库里进行具体的代码和文件的修改工作。

### wechaty接口层

* 新增一个文件 src/user/mini-program.ts ，定义一个新 Class

```ts
export class MiniProgram {

  /**
   *
   * Create
   *
   */
  public static async create (): Promise<MiniProgram> {
    log.verbose('MiniProgram', 'create()')

    // TODO: get title/description/thumbnailUrl from url automatically
    const payload: MiniProgramPayload = {
      appid              : 'todo',
      description        : 'todo',
      pagepath           : 'todo',
      thumbnailurl       : 'todo',
      title              : 'todo',
      username           : 'todo',
    }

    return new MiniProgram(payload)
  }

  constructor (
    public readonly payload: MiniProgramPayload,
  ) {
    log.verbose('MiniProgram', 'constructor()')
  }

  public appid (): undefined | string {
    return this.payload.appid
  }

  public title (): undefined | string {
    return this.payload.title
  }

  public pagepath (): undefined | string {
    return this.payload.pagepath
  }

  public username (): undefined | string {
    return this.payload.username
  }

  public description (): undefined | string {
    return this.payload.description
  }

  public thumbnailurl (): undefined | string {
    return this.payload.thumbnailurl
  }

}
```

* 更新三个文件 src/user/contact.ts ，src/user/message.ts ，src/user/room.ts ，加入 say 接口

src/user/contact.ts

```ts
  public async say (textOrContactOrFileOrUrlOrMini: string | Contact | FileBox | UrlLink | MiniProgram): Promise<void> {
    log.verbose('Contact', 'say(%s)', textOrContactOrFileOrUrlOrMini)

    if (typeof textOrContactOrFileOrUrlOrMini === 'string') {
      /**
       * 1. Text
       */
      await this.puppet.messageSendText({
        contactId: this.id,
      }, textOrContactOrFileOrUrlOrMini)
    } else if (textOrContactOrFileOrUrlOrMini instanceof Contact) {
      /**
       * 2. Contact
       */
      await this.puppet.messageSendContact({
        contactId: this.id,
      }, textOrContactOrFileOrUrlOrMini.id)
    } else if (textOrContactOrFileOrUrlOrMini instanceof FileBox) {
      /**
       * 3. File
       */
      await this.puppet.messageSendFile({
        contactId: this.id,
      }, textOrContactOrFileOrUrlOrMini)
    } else if (textOrContactOrFileOrUrlOrMini instanceof UrlLink) {
      /**
       * 4. Link Message
       */
      await this.puppet.messageSendUrl({
        contactId : this.id,
      }, textOrContactOrFileOrUrlOrMini.payload)
    } else if (textOrContactOrFileOrUrlOrMini instanceof MiniProgram) {
      /**
       * 5. Mini Program
       */
      await this.puppet.messageSendMiniProgram({
        contactId : this.id,
      }, textOrContactOrFileOrUrlOrMini.payload)
    } else {
      throw new Error('unsupported arg: ' + textOrContactOrFileOrUrlOrMini)
    }
  }
```

src/user/message.ts

```ts
  public async say (
    textOrContactOrFileOrUrlOrMini : string | Contact | FileBox | UrlLink | MiniProgram,
  ): Promise<void> {
    log.verbose('Message', 'say(%s)', textOrContactOrFileOrUrlOrMini)

    // const user = this.puppet.userSelf()
    const from = this.from()
    // const to   = this.to()
    const room = this.room()

    if (typeof textOrContactOrFileOrUrlOrMini === 'string') {
      /**
       * Text Message
       */
      await this.puppet.messageSendText({
        contactId : (from && from.id) || undefined,
        roomId    : (room && room.id) || undefined,
      }, textOrContactOrFileOrUrlOrMini)
    } else if (textOrContactOrFileOrUrlOrMini instanceof Contact) {
      /**
       * Contact Card
       */
      await this.puppet.messageSendContact({
        contactId : (from && from.id) || undefined,
        roomId    : (room && room.id) || undefined,
      }, textOrContactOrFileOrUrlOrMini.id)
    } else if (textOrContactOrFileOrUrlOrMini instanceof FileBox) {
      /**
       * File Message
       */
      await this.puppet.messageSendFile({
        contactId : (from && from.id) || undefined,
        roomId    : (room && room.id) || undefined,
      }, textOrContactOrFileOrUrlOrMini)
    } else if (textOrContactOrFileOrUrlOrMini instanceof UrlLink) {
      /**
       * Link Message
       */
      await this.puppet.messageSendUrl({
        contactId : (from && from.id) || undefined,
        roomId    : (room && room.id) || undefined,
      }, textOrContactOrFileOrUrlOrMini.payload)
    } else if (textOrContactOrFileOrUrlOrMini instanceof MiniProgram) {
      /**
       * MiniProgram
       */
      await this.puppet.messageSendMiniProgram({
        contactId : (from && from.id) || undefined,
        roomId    : (room && room.id) || undefined,
      }, textOrContactOrFileOrUrlOrMini.payload)
    } else {
      throw new Error('unknown msg: ' + textOrContactOrFileOrUrlOrMini)
    }
  }
```

src/user/room.ts

```ts
  public async say (
    textOrListOrContactOrFileOrUrl : string | Contact | FileBox | UrlLink | MiniProgram | TemplateStringsArray,
    ...mentionList                 : Contact[]
  ): Promise<void> {

    log.verbose('Room', 'say(%s, %s)',
      textOrListOrContactOrFileOrUrl,
      mentionList.join(', '),
    )

    let text: string

    if (typeof textOrListOrContactOrFileOrUrl === 'string') {

      if (mentionList.length > 0) {
        const AT_SEPARATOR = FOUR_PER_EM_SPACE
        const mentionAlias = await Promise.all(mentionList.map(async contact =>
          '@' + (await this.alias(contact) || contact.name())
        ))
        const mentionText = mentionAlias.join(AT_SEPARATOR)

        text = mentionText + ' ' + textOrListOrContactOrFileOrUrl
      } else {
        text = textOrListOrContactOrFileOrUrl
      }
      const receiver = {
        contactId : (mentionList.length && mentionList[0].id) || undefined,
        roomId    : this.id,
      }
      await this.puppet.messageSendText(
        receiver,
        text,
        mentionList.map(c => c.id),
      )
    } else if (textOrListOrContactOrFileOrUrl instanceof FileBox) {
      /**
       * 2. File Message
       */
      await this.puppet.messageSendFile({
        roomId: this.id,
      }, textOrListOrContactOrFileOrUrl)
    } else if (textOrListOrContactOrFileOrUrl instanceof Contact) {
      /**
       * 3. Contact Card
       */
      await this.puppet.messageSendContact({
        roomId: this.id,
      }, textOrListOrContactOrFileOrUrl.id)
    } else if (textOrListOrContactOrFileOrUrl instanceof UrlLink) {
      /**
       * 4. Link Message
       */
      await this.puppet.messageSendUrl({
        contactId : this.id,
      }, textOrListOrContactOrFileOrUrl.payload)
    } else if (textOrListOrContactOrFileOrUrl instanceof MiniProgram) {
      /**
       * 5. Mini Program
       */
      await this.puppet.messageSendMiniProgram({
        contactId : this.id,
      }, textOrListOrContactOrFileOrUrl.payload)
    } else if (textOrListOrContactOrFileOrUrl instanceof Array) {
      await this.sayTemplateStringsArray(
        textOrListOrContactOrFileOrUrl,
        ...mentionList,
      )
    } else {
      throw new Error('arg unsupported: ' + textOrListOrContactOrFileOrUrl)
    }
  }
```

### wechaty-puppet抽象层

* 新增一个文件 src/schemas/mini-program.ts，定义一个 Interface

```ts
export interface MiniProgramPayload {
    appid?          : string,    // optional, appid, get from wechat (mp.weixin.qq.com)
    description?    : string,    // optional, mini program title
    pagepath?       : string,    // optional, mini program page path
    thumbnailurl?   : string,    // optional, default picture, convert to thumbnail
    title?          : string,    // optional, mini program title
    username?       : string,    // original ID, get from wechat (mp.weixin.qq.com)
}
```

* 更新 src/puppet.ts ，声明 messageMiniProgram 和 messageSendMiniProgram 抽象接口

```ts
  public abstract async messageMiniProgram (messageId: string)  : Promise<MiniProgramPayload>

  public abstract async messageSendMiniProgram (receiver: Receiver, miniProgramPayload: MiniProgramPayload)          : Promise<void>
```

### wechaty-puppet-padpro实现层

* 更新 src/puppet-padpro.ts ，加入 messageMiniProgram，messageSendMiniProgram 的实现

```ts
  public async messageSendMiniProgram (
    receiver: Receiver,
    miniProgramPayload: MiniProgramPayload
  ): Promise<void> {
    log.verbose(PRE, `messageSendLink("${JSON.stringify(receiver)}", ${JSON.stringify(miniProgramPayload)})`)

    if (!this.padproManager) {
      throw new Error('no padpro manager')
    }

    // Send to the Room if there's a roomId
    const id = receiver.roomId || receiver.contactId

    if (!id) {
      throw Error('no id')
    }

    await this.padproManager.GrpcSendApp(id, generateMiniProgramXMLMessage(miniProgramPayload))
  }
```

```ts
  public async messageMiniProgram (messageId: string): Promise<MiniProgramPayload> {

    const rawPayload = await this.messageRawPayload(messageId)
    const payload = await this.messagePayload(messageId)

    if (payload.type !== MessageType.MiniProgram) {
      throw new Error('Can not get miniProgram from non miniProgram payload')
    } else {
      const appPayload = await appMessageParser(rawPayload)
      if (appPayload) {
        return {
        }
      } else {
        throw new Error('Can not parse miniProgram message payload')
      }
    }
  }
```

* 更新 src/pure-function-helpers/app-message-generator.ts，增加 generateMiniProgramXMLMessage 的实现

```ts
export const generateMiniProgramXMLMessage = (payload: MiniProgramPayload): string => {
  return `
  <appmsg appid="" sdkver="0">
    <title>${payload.title}</title>
    <des>${payload.description}</des>
    <action/>
    <type>33</type>
    <showtype>0</showtype>
    <soundtype>0</soundtype>
    <mediatagname/>
    <messageext/>
    <messageaction/>
    <content/>
    <contentattr>0</contentattr>
    <url>https://mp.weixin.qq.com/mp/waerrpage?appid=${payload.appid}&amp;type=upgrade&amp;upgradetype=3#wechat_redirect</url>
    <lowurl/>
    <dataurl/>
    <lowdataurl/>
    <appattach>
      <totallen>0</totallen>
      <attachid/>
      <emoticonmd5/>
      <fileext/>
      <cdnthumburl></cdnthumburl>
      <cdnthumbmd5></cdnthumbmd5>
      <cdnthumblength></cdnthumblength>
      <cdnthumbwidth></cdnthumbwidth>
      <cdnthumbheight></cdnthumbheight>
      <cdnthumbaeskey></cdnthumbaeskey>
      <aeskey></aeskey>
      <encryver>0</encryver>
      <filekey></filekey>
    </appattach>
    <extinfo/>
    <sourceusername>${payload.username}@app</sourceusername>
    <sourcedisplayname>${payload.description}</sourcedisplayname>
    <thumburl/>
    <md5/>
    <statextstr/>
    <weappinfo>
      <username><![CDATA[${payload.username}@app]]></username>
      <appid><![CDATA[${payload.appid}]]></appid>
      <type>2</type>
      <version></version>
      <weappiconurl><![CDATA[]]></weappiconurl>
      <pagepath><![CDATA[${payload.pagepath}]]></pagepath>
      <shareId><![CDATA[0_${payload.appid}_858901320_1563444358_0]]></shareId>
      <appservicetype>0</appservicetype>
    </weappinfo>
  </appmsg>
  <fromusername></fromusername>
  <scene>0</scene>
  <appinfo>
    <version>1</version>
    <appname/>
  </appinfo>
  <commenturl/>`
}
```

## 进一步需要完成的工作

### 底层小程序的xml协议分析

padpro中想要发送一个小程序需要先打开调试开关`PADPRO_LOG='silly'`接收一个小程序，才能获得到诸如以上的信息。这样我们对保存的信息进行序列化操作，摸索规律，找到变量，提取公共模板数据，从而程序化的构造出一个发送小程序的 XML 数据。

大体流程：

1. 根据appid查询小程序信息（需要调研下如何进行）
2. 将获得到的信息进行存储（若查询便利的话应该可以省去该操作）
3. 构造公共模板
4. 将获得到的信息嵌入模板
5. 得到的XML结构作为messageSendMiniProgram的返回数据

我们把抓到的底层 xml 协议发到了[这里](https://github.com/wechaty/wechaty/issues/1806)，有兴趣深入研究的朋友可以继续分析这些底层的协议字段。虽然我们猜出了一些关键字段，实现了基本的发送功能，但不知道微信服务器那边会不会监测字段的完整性或者正确性，毕竟通过这样Hack的方法要把bot拉入黑名单也很容易。

### thumbnailUrl的CDN上传

一个发送出来的小程序，其视图和接口传入数据的关系，如下图所示

![MiniProgramPayload](/assets/2019/maodou-miniprogram-spec.png)

目前，appid、description、pagepath、title和username都比较容易获得，thumbnailUrl 我们参考了 UrlLink 结构，这块区域的缩略图可以让调用者传入一个图片的 thumbnailUrl ，底层代码里未来还应该做如下2个后继的工作，目前因为时间关系也还未实现。

1. 调用 FileBox.fromUrl 获得这个图片文件
2. 调用微信提供的 CDN 上传文件功能，获得如下的数据结构

```json
  thumbnail: {
    cdnthumburl:
    cdnthumbmd5:
    cdnthumblength:
    cdnthumbwidth:
    cdnthumbheight:
    cdnthumbaeskey:
    aeskey:
    filekey:
  }
```

目前底层发送的xml协议里面，cdnthumbnailurl, aeskey, filekey等字段，都是从已有小程序中提取出来的，后续这里可能还需要继续完善。

### NLP的Help needed

目前bot采用的NLP Parser是微软提供的[@microsoft/recognizers-text-suite](https://github.com/microsoft/Recognizers-Text)，我们用它实现了从一句话中提取出时间变量，也就是 `const time = parseTime(msgText)` 这样一个简单函数。但微软NLP处理的结果，其实是一个复杂的Json返回值，还需要我们写不少代码来筛选出我们期待的时间结果，这些代码在 [getTimeInResults](https://github.com/maodouio/wechaty-getting-started/blob/master/examples/third-party/maodou/maodou-nlp.js) 这个函数里，显得啰嗦又低级，期待谁能告诉我们一个更美好的 parseTime。

除了时间之外，识别出一句话的课程标题和上课地点，也是我们所需要的，但微软NLP还不支持，所以我们又用了另外一个[BasonNLP NER](http://docs.bosonnlp.com/ner.html)，但它的处理结果同样也是一个复杂的Json返回值，还需要借助词性来拼凑出我们期待的结果，这些代码在另外一个函数 [parseTitleAndLocation](https://github.com/maodouio/wechaty-getting-started/blob/master/examples/third-party/maodou/maodou-nlp.js)里，显得低级又业余，也同样期待更优雅的ai来拯救一下。

如今NLP在各个大厂提供的智能API套件里面都是标配了，但从腾讯百度阿里到科大讯飞到复旦FudanNLP测了一圈，也没有发现能够很方便很准确地实现识别时间/地点/主题的api。如果谁对这方面比较了解，可以告诉我，欢迎加我微信: limingth

## 致谢

* **Simon Liang** 的代码，其实已经做完了大部分的底层工作。如果不是他的开创性成果在前面开路，我们很难有勇气最终完成这个任务。
* **苏畅** 写的本地开发环境搭建的文档，为我们本地跑通开发环境节省了时间，同时在代码修改过程中也提供了热心的帮助，更重要的是人还长得帅。
* 还要感谢微信PR群里的 @高原ོ 和 @杉木，帮我们确认了CDNManager可以解决未完成工作里的thumbnailUrl，期待以后能够一起再完善这部分的代码。
* 最后感谢Wechaty团队提供这么好的一个工具，感谢李卓桓，李佳芮前期做了那么多奠基性的工作，也很高兴通过这个项目认识了正在做[Teamin群协作](https://www.teamin.cc/)的李云军，这么多姓李的，在一起搞事情很开心！:P

> 作者: [limingth](https://github.com/limingth)，[zhaoic](https://github.com/zhaoic) 毛豆网
