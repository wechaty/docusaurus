---
title: "用「Wechaty」和「微信对话开放平台」做个助理"
author: windmemory
categories: tutorial
tags: 
  - openai
  - talk
  - featured
image: /assets/2020/wechaty-weixin-openai/teaser-image.png
---

应 [WWC(Women Who Code)](#women-who-code) 邀请，我在线上分享了如何用「Wechaty」和「微信对话开放平台」做个助理帮助回答常见问题。

活动介绍: [https://mp.weixin.qq.com/s/6HyEZlwWbuRGY9T_KotXEw](WWC在线分享: 如何用 Wechaty 和 微信对话开放平台 创建你的个人助理)

![wechaty-weixin-openai][teaser]

随着社会节奏的不断变快，每天，我都有越来越多的微信消息需要回复，其中不乏很多重复的问题反复找到我。作为一个程序员，都是不愿意在重复的工作中浪费自己宝贵的时间的。这次，将给大家分享如何用 Wechaty 和 OpenAI 创建一个属于你的个人助理，帮助你来处理那些重复的问题，解放你的时间。

## 我们要做什么？

一个微信助理机器人带有以下功能：

- 我@他，并且提问的时候，自动把准备好的材料等都发出来
- 别人问他的时候，可以自动匹配到常见问题并回答
- 当没有匹配到回答的时候，转接给我
  - 消息在群里且我在群里：@我让我回答
  - 私聊或者我不在群里：把我的名片发出来，引导加我好友

## 我们需要通过代码来控制微信

这个时候就是 `Wechaty` 大显身手的时候了，下面是接入代码：

```ts
import { Wechaty, Message, UrlLink } from 'wechaty'
import { PuppetPadplus } from 'wechaty-puppet-padplus'
import { EventLogger, QRCodeTerminal } from 'wechaty-plugin-contrib'

import { padplusToken } from './const'

const puppet = new PuppetPadplus({
  token: padplusToken,
})

const bot = new Wechaty({
  name: 'wwc-agent',
  puppet,
})

bot.use(EventLogger())
bot.use(QRCodeTerminal({ small: true }))

bot.start()
```

代码很简单，就是创建了一个 `puppet` 的实例，然后作为参数传给了 `Wechaty` 的构造函数，创建了一个新的 `Wechaty` 实例，然后启动了 `Wechaty` 实例。

中间用到了两个插件，一个是 `EventLogger`，可以把所有的 `Wechaty` 事件都打印到控制台中，另外一个是 `QRCodeTerminal`，可以把扫码事件里面的二维码直接打印到控制台，方便扫码登录。

上面的代码运行起来，就能看到命令行里打印的二维码，扫码之后就可以看到账号登录啦，效果如下：

```shell
19:27:44 INFO WeixinOpenAI constructor(your-, your-opena)
19:27:44 INFO PuppetPadplus start()
19:27:47 INFO WechatyPluginContrib EventLogger heartbeat:
19:27:48 INFO WechatyPluginContrib EventLogger scan: http://weixin.qq.com/x/QfsfuToGOs-EVGgaa-gn,2,

19:27:48 INFO WechatyPluginContrib QRCodeTerminal Login QR Code Status: Waiting(2)
QR Code Image URL: https://wechaty.js.org/qrcode/http%3A%2F%2Fweixin.qq.com%2Fx%2FQfsfuToGOs-EVGgaa-gn
19:27:55 INFO PadplusManager
            =================================================
            QRCODE_SCAN MSG : 已扫码，请在手机端确认登陆...
            =================================================

19:27:55 INFO WechatyPluginContrib EventLogger scan: ,3,
19:27:55 INFO WechatyPluginContrib QRCodeTerminal onScan: Scanned(3)
19:27:57 INFO PadplusManager
            =================================================
            QRCODE_SCAN MSG : 已确认
            =================================================

19:27:57 INFO WechatyPluginContrib EventLogger scan: ,4,
19:27:57 INFO WechatyPluginContrib QRCodeTerminal onScan: Confirmed(4)
19:28:03 INFO WechatyPluginContrib EventLogger heartbeat:
19:28:03 INFO WechatyPluginContrib EventLogger login: Contact<小助手>
```

## 实现素材推送

这一步就比较容易，简单的代码逻辑实现一下就可以了

```ts
bot.on('message', async (message: Message) => {
  const room = message.room()
  const from = message.from()
  const mentionSelf = await message.mentionSelf()
  const text = message.text()

  if (room !== null && from.id === bossId && mentionSelf) {
    if (/句子互动/.test(text)) {
      await room.say(juzibotIntro)
      await room.say(new UrlLink(juzibotIntroUrl))
    } else if (/高原/.test(text)) {
      await room.say(new UrlLink(yuanIntroUrl))
    }
  }
}).start()
```

这样，当我在群里@机器人来介绍`句子互动`或者我自己的时候，机器人就会帮我自动发送一些介绍的话术，我就可以不需要

![mobile-screenshot-1][mobile-screenshot-1]

## 实现常见问答

想让机器人帮我回答一些常见的问题，首先想到的就是直接通过关键词匹配来回复，三行搞定~

```ts
if (/句子互动/.test(message.text())) {
  await message.say(juzibotIntro)
}
```

但是，当我想要同时支持另外一个问题的时候，就有点不好办了

```ts
if (/句子互动/.test(message.text())) {
  await message.say(juzibotIntro)
} else if (/技术栈/.test(message.text())) {
  await message.say(techStackAnswer)
}
```

如果问的问题是`句子互动的技术栈是什么？`，上面的代码就不能正确的回答上来答案了。当然，我可以通过调整两个`if`判断的顺序来解决这个问题，但是如果我有20个常见问题，这样的`if-else`写法一定有问题。除此之外，每个问题都可能有很多种不同的问法，比如说问我们公司介绍的，可能还会说：

- 你们公司做什么的？
- 介绍下你们的情况？
- 你们做什么业务的？
- 等等……

所以单纯用代码来写`if-else`是无法很好的解决这个问题的。

那么，是时候展现真正的技术了：[`微信对话开放平台`](#微信对话开放平台)

依照我个人的理解，`微信对话开放平台`是一个帮助你**快速创建聊天机器人**的**云服务**

### 配置微信对话开放平台

那接下来，我们需要做的就是先注册一个`微信对话开放平台`的账号：[https://openai.weixin.qq.com](https://openai.weixin.qq.com)

然后在平台上创建一个机器人，我叫他`我的助理`，然后给他添加一个自定义的普通技能`助理技能`

![openai-screenshot][openai-screenshot]

接下来，就是给技能里面添加自定义的问答了，我创建了几个，如下图：

![openai-qna][openai-qna]

这里我遇到了一个麻烦的问题，我配置了关于`句子互动`和`技术栈`的问答，但是我发现当我问`句子互动的技术栈`的时候，匹配的是`句子互动`而不是`技术栈`，所以如上图可见，我在`句子互动`里面创建了一个**反例**。它的意思是，当问题匹配到这个相似问的时候，说明问题并不属于当前这个问答，这样就可以完美解决`句子互动的技术栈`匹配错的问题了。

### 将微信对话开放平台接入到 Wechaty 上

为了方便接入，我写了一个`Wechaty`的插件 [wechaty-weixin-openai](https://github.com/wechaty/wechaty-weixin-openai) 方便快速接入`微信对话开放平台`

首先，我把前面我们写的素材回复的代码封装成了一个函数，方便后面我们使用插件的时候来调用，并且我增加了一个`boolean`的返回值，目的是告诉调用的函数，我是否在当前函数里面对消息做了回复的处理，这样调用的函数知道我已经处理过这个消息了，就可以不再重复处理消息了。

```ts
const processCommonMaterial = async (message: Message) => {
  const room = message.room()
  const from = message.from()
  const mentionSelf = await message.mentionSelf()
  const text = message.text()

  if (room !== null && from.id === bossId && mentionSelf) {
    if (/句子互动/.test(text)) {
      await room.say(juzibotIntro)
      await room.say(new UrlLink(juzibotIntroUrl))
      return true
    } else if (/高原/.test(text)) {
      await room.say(new UrlLink(yuanIntroUrl))
      return true
    }
  }
  return false
}
```

然后，就是在`Wechaty`里面引用和配置插件了

```ts
const openAIToken = 'openai-token'
const openAIEncodingAESKey = 'openai-encoding-aes-key'

const preAnswerHook = async (message: Message) => {
  const isCommonMaterial = await processCommonMaterial(message)
  if (isCommonMaterial) {
    return false
  }
}

/**
 * Use wechaty-weixin-openai plugin here with given config
 */
bot.use(WechatyWeixinOpenAI({
  token: openAIToken,
  encodingAESKey: openAIEncodingAESKey,
  preAnswerHook,
}))
```

插件的使用其实非常简单，只要传入`微信对话开放平台`里面开放服务接入的`TOKEN`和`EncodingAESKey`即可，就能连接到`微信对话开放平台`了

![openai-config][openai-config]

另外，大家可以看到，这个插件的配置里面还有一个叫做`preAnswerHook`的函数，这个函数的作用就如他的名字一样，是在`wechaty-weixin-openai`插件用`微信对话开放平台`的结果回复之前，调用的一个函数，可以让我们在回复之前做一些自定义的其他逻辑。

比如我们上面做的就是，当机器人检测到消息是在群里，并且是我发出的消息，而且匹配到了某个之前定义好的素材，那么就回复这个素材，并且不再进行后续的逻辑了（包括不使用`微信对话开放平台`返回的答案来回复）

这样，我们在使用`微信对话开放平台`的时候，就有一定的灵活度来搭配自己的自定义逻辑。

## 实现转接功能

转接也比较容易实现，这里直接上代码：

```ts
/**
 * Function to get boss contact
 */
const getBoss = async () => {
  const contact = bot.Contact.load(bossId)
  await contact.sync()
  return contact
}

const noAnswerHook = async (message: Message) => {
  const room = message.room()
  const from = message.from()
  if (!room) {
    const boss = await getBoss()
    await room.say`${from}，你的问题我不会回答，你可以联系我的老板`
    await room.say(boss)
    return;
  }
  const members = await room.memberAll()
  const bossInRoom = members.find(m => m.id === bossId)
  if (bossInRoom) {
    await room.say`${bossInRoom}，${from}问的问题我不知道，你帮我回答一下吧。`
  } else {
    const boss = await getBoss()
    await room.say`${from}，你的问题我不会回答，你可以联系我的老板`
    await room.say(boss)
  }
}

/**
 * Use wechaty-weixin-openai plugin here with given config
 */
bot.use(WechatyWeixinOpenAI({
  token: openAIToken,
  encodingAESKey: openAIEncodingAESKey,
  noAnswerHook,
  preAnswerHook,
}))
```

这里新引入了另外一个`wechaty-weixin-openai`里面的函数`noAnswerHook`，同样，直译这个名字，就是这个函数的作用。当`微信对话开放平台`没有找到合适的回答的时候，会调用这个函数，这样我们可以在这个函数里面对于这种不清楚用户问什么的情况做一个兜底处理，比如我们这次就希望当不会回答的时候，可以把这个对话转接给我。

这样，在这个回调函数里面，根据当前对话发生在群聊还是私聊做了区分，如果是私聊，就直接发送我的名片来引导加好友了。如果发生在群聊，则先获取一下群成员，并且判断我是不是在群里，如果在的话，直接@我回复，不在的话，同样发名片，代码很简单。

截止到这，我们就已经基本完成了我们一开始设想的这些功能，但是我们能不能基于`微信对话开放平台`的AI能力，再玩出来点什么有意思的呢？

## One More Thing

最后，我们一起再来实现这样一个好玩的功能吧：**当机器人识别出用户有负面的情绪，则给我和那个用户拉一个群，然后让我来和用户沟通**

说干就干，下面是代码：

```ts
const preAnswerHook = async (message: Message, _: any, sentiment: SentimentData) => {
  const isCommonMaterial = await processCommonMaterial(message)
  if (isCommonMaterial) {
    return false
  }

  const hate = sentiment.hate
  const angry = sentiment.angry
  const score = (hate || 0) + (angry || 0)
  if (score > 0.9) {
    const boss = await getBoss()
    const from = message.from()
    const room = await bot.Room.create([boss, from])
    await new Promise(r => setTimeout(r, 3000))
    await room.say`${boss}，你帮帮我吧，${from}和我聊天已经聊得不耐烦了`
    return false
  }
}

bot.use(WechatyWeixinOpenAI({
  token: openAIToken,
  encodingAESKey: openAIEncodingAESKey,
  includeSentiment: true,
  noAnswerHook,
  preAnswerHook,
}))
```

这里用到了新的插件参数`includeSentiment`，这个参数决定在`preAnswerHook`函数里面是否同时传入`微信对话开放平台`里查到的当前消息的情绪值参数，我们这里是设置成了`true`，这样会在`preAnswerHook`函数里面带上情绪数据。

然后，我们基于这个情绪数据，来判断当前用户是不是出于一个负面情绪很重的状态中，如果是的话，则执行拉群，向我求助的操作。

PS：在现场演示过程中，我们的测试了很多种的负面情绪的消息，但是有一些消息的解析并不如我们所料，所以最后选择了使用`hate`加上`angry`的和来表示负面情绪。

## 最后效果

![final-screenshot][final-screenshot]

完整代码请见 [https://github.com/windmemory/wwc-wechaty](https://github.com/windmemory/wwc-wechaty)

## Live Coding

{% include iframe.html src="https://www.youtube.com/embed/PYFg8wYZbvI" %}

> Bilibili: <https://www.bilibili.com/video/BV1LV411r756/>

## 微信对话开放平台

[微信对话开放平台](https://openai.weixin.qq.com/) 是**以对话交互为核心**，为有客服需求的个人、企业和组织，提供智能业务服务与用户管理能力的**技能配置平台**，技能开发者可利用平台提供的工具自助完成客服机器人的搭建。

![openai-banner][openai-banner]

## Women Who Code

[Women Who Code Beijing](https://mp.weixin.qq.com/s?__biz=MzIyMzc0NDgzMg==&mid=100000001&idx=1&sn=2cb2c65673dd989cebac1e69abad5ccd&chksm=6818c72e5f6f4e386470525349192f23c8407a77e0a628cec7dbee3e75d9704223a2ef7f2d95) 于2015年10月在北京成立，希望能够帮助和鼓励在这个城市生活和工作的 女性工程师在职业发展的道路上顺利前行。我们相信IT行业也会因为有更多的女性的加入变得更有生产力和创造力。

[teaser]: /assets/2020/wechaty-weixin-openai/teaser-image.png
[mobile-screenshot-1]: /assets/2020/wechaty-weixin-openai/mobile-screenshot-1.jpg
[openai-screenshot]: /assets/2020/wechaty-weixin-openai/openai-screenshot.jpg
[openai-qna]: /assets/2020/wechaty-weixin-openai/openai-qna.jpg
[openai-config]: /assets/2020/wechaty-weixin-openai/openai-config.jpg
[openai-banner]: /assets/2020/wechaty-weixin-openai/openai-banner.jpg
[final-screenshot]: /assets/2020/wechaty-weixin-openai/final-screenshot.jpg

> Author: [@windmemory](https://github.com/windmemory) Wechaty contributor, author of [wechaty-puppet-padchat](https://github.com/wechaty/wechaty-puppet-padchat), [wechaty-puppet-padpro](https://github.com/wechaty/wechaty-puppet-padpro), [wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus). CTO of [Juzi.Bot](https://pre-angel.com/portfolios/juzibot/)
>
> Code: [wwc-wechaty](https://github.com/windmemory/wwc-wechaty)
