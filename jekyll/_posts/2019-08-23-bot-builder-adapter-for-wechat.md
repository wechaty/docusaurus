---
title: "Connect to Wechat: Bot Builder Adapter for Wechat Individual Account"
author: juzibot
categories: announcement
tags:
  - talk
  - news
  - meetup
  - featured
  - adapter
  - botbuilder
  - botframework
image: /assets/2019/08-bot-builder-adapter-for-wechat-Individual-account/000.webp
---

## 适用于微信个人帐户的Microsoft Bot Framework v4 适配器

- Github：<https://github.com/huan/botbuilder-wechaty-adapter>
- NPM：<https://www.npmjs.com/package/botbuilder-wechaty-adapter>
如果您正在查找此适配器的 Bot Framework v3 版本，请转到：
在[V3.0](https://github.com/huan/botbuilder-wechaty-adapter/tree/v3.0)分支，或
NPM [botbuilder-wechaty-connecter@3](https://www.npmjs.com/package/botbuilder-wechaty-connector)

- 特征

1. 为 Microsoft Bot Framework v4 做好准备
2. 不需要在[dev.botframework.com](https://dev.botframework.com/)上注册机器人，但需要一个微信个人（非官方！）帐户。
3. 由[Wechaty](https://github.com/chatie/wechaty)提供支持
4. 支持接收和发送几乎所有微信消息类型（WIP）

- 安装

```sh
npm install botbuilder-wechaty-adapter
```

- 准备

我们假设您已经有一个微信个人账号。

- 举例

假设一个示例位于examples/目录中。使用以下命令运行它。

```sh
git clone git@github.com:huan/botbuilder-wechaty-adapter.git
cd botbuilder-wechaty-adapter
npm install
npm run example
```

```sh
import {
  ActivityTypes,
  TurnContext,
}                 from 'botbuilder'

import { WechatyAdapter } from 'botbuilder-wechaty-adapter'

export class EchoBot {

  public async onTurn (
    turnContext: TurnContext,
  ): Promise<void> {
    console.info('EchoBot', 'onTurn() %s', turnContext)
    if (turnContext.activity.type === ActivityTypes.Message) {
      const text = turnContext.activity.text
      console.info('RECV:', text)
      switch (text.toLowerCase()) {
        case 'quit':
          console.info('Quiting...')
          process.exit(0)
          break

        case 'ding':
          console.info('Replying `dong`...')
          await turnContext.sendActivity('dong')
          console.info('Replied.')
          break

        default:
          console.info('EchoBot', 'onTurn() skip message "%s"', text)
      }
    }
  }

}

const echoBot = new EchoBot()
const adapter = new WechatyAdapter()
adapter.listen(async (turnContext: TurnContext) => {
  await echoBot.onTurn(turnContext)
}).catch(console.error)

console.info('> Wechaty EchoBot is online. I will reply `dong` if you send me `ding`!')
console.info('> Say "quit" to end.\n')
```

## Bot Friday 会议

- [Bot Friday 第六次会议纪要](http://bot5.ml/events/seminar-minutes-6/)
![006](/assets/2019/08-bot-builder-adapter-for-wechat-Individual-account/006.webp)
- [Bot Friday 第五次会议纪要](http://bot5.ml/events/seminar-minutes-5/)
![005](/assets/2019/08-bot-builder-adapter-for-wechat-Individual-account/005.webp)
- [Bot Friday 第四次会议纪要](http://bot5.ml/events/seminar-minutes-4/)
![004](/assets/2019/08-bot-builder-adapter-for-wechat-Individual-account/004.webp)
- [Bot Friday 第三次会议纪要](http://bot5.ml/events/seminar-minutes-3/)
![003](/assets/2019/08-bot-builder-adapter-for-wechat-Individual-account/003.webp)
- [Bot Friday 第二次会议纪要](http://bot5.ml/events/seminar-minutes-2/)
