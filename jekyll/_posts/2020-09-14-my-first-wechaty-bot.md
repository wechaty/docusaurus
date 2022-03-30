---
title: "构建我的第一个微信机器人"
author: chenj-freedom
image: /assets/2020/my-first-wechaty-bot/2020-09-my-first-wechaty-bot.webp
categories: project
tags:
  - windows
  - other
---

手头上的事情越来越多，回复微信都是件很麻烦的事，对于IT行业的人来说，能用机器解决的事就不应该手动去做，于是就有了构建微信机器人的想法。

## 技术选型

首先，自然是对底层架构的选型，在网上也查找了很久，也尝试了许多其他的开源库，很多前两年（今天是2020年9月12日）的微信机器人库都已经过期无法使用了，主要原因他们都是基于web微信的协议，而腾讯的安全策略屏蔽了web微信协议。所以，经过一番挑挑拣拣，发现网上也就剩下最后一个可用的库，那就是这篇文章的主角，wechaty，官方github地址：[https://github.com/wechaty](https://github.com/wechaty)。

这是一个商业公司（北京句子互动科技有限公司）开发的一套半开源半商业的库，基于web微信协议的库确实都开源了，但是基于上述腾讯的政策，web微信现在基本是都用不了了，所以web微信这套开源库，也就只能学学而已。但是他们还开发了一套基于pad微信协议的库，github地址：[https://github.com/wechaty/wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus)。这个可以用，但是呢，需要token，每个月收费200RMB，不过可以试用，15天的试用期，15天后，有机会把token试用期最长延期到1年，需要写博客支持他们发起的一个开源计划，说白了，就是替他们公司宣传这个库，只能说各取所需吧。这个开源计划可以参考：[https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)。

## 了解原理

开发之前呢，最好还是了解下这个架构的原理，具体的不细说，有兴趣的github上都可以找到答案。这里就放一张官方的原理图。

![image](/assets/2020/my-first-wechaty-bot/1.webp)

最底层是各个协议，基于pad微信的协议（本文重点，github库名称是wechaty-puppet-padplus），基于web微信协议的（github库名称是wechaty-puppet-puppeteer），基于windows pc端微信协议的（github库名称是wechaty-puppet-windows）等等。

中间是一层抽象层，wechaty puppet（github库名称是wechaty-puppet）。

再上一层是wechaty puppet service

再上一层就是各种语言的实现，js、python、go、java等等。官方支持最好的是ts或者js，因为官方自身就是用ts开发的。

顺便说一句，我们走了他们公司的协议，那数据肯定是有经过他们公司的服务器的，这个风险自己可以评估下。

## 开始开发

按上文说的，参加开源计划，领取15天试用token，记录为token_tmp，然后就可以开始我们的开发了。

因为我们用基于pad协议的wechaty。那么就按wechaty-puppet-padplus的readme.md先做一些基础环境配置吧。我的开发环境是window10，先下载安装好nodejs。创建我们的项目目录wechaty_bot，进入该目录，然后开始配置。这里我们用nodejs开发。

**step1：windows环境一些工具安装。**

```bash
npm install -g windows-build-tools
npm install -g node-gyp
```

**step2：安装wechaty相关包。**

```bash
npm install wechaty@next
npm install wechaty-puppet-padplus@next
```

**step3：安装其他依赖包。**

```bash
npm install qrcode-terminal
```

**step4：编写代码。**

因为是初次接触，我们就实现下最基本的自动回复功能吧，跑通基本流程， 后续进阶的功能可以慢慢完善添加。

```javascript
const {
    Wechaty,
    ScanStatus,
    log,
  }               = require('wechaty')

import { PuppetPadplus }  from 'wechaty-puppet-padplus'

function onScan (qrcode, status) {
    if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
        require('qrcode-terminal').generate(qrcode, { small: true })  // show qrcode on console

        const qrcodeImageUrl = [
        'https://wechaty.js.org/qrcode/',
        encodeURIComponent(qrcode),
        ].join('')

        log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)

    } else {
        log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
    }
}

function onLogin (user) {
    log.info('StarterBot', '%s login', user)
}

function onLogout (user) {
    log.info('StarterBot', '%s logout', user)
}

async function onMessage (msg) {
    log.info('StarterBot', msg.toString())

    if (msg.text() === '12345') {
        await msg.say('hello world')
        }
}

const bot = new Wechaty({
    name: 'bot',
    puppet: new PuppetPadplus({
        token: '替换成你自己申请的token'
        })
})

bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('message', onMessage)

bot.start()
.then(() => log.info('StarterBot', 'Starter Bot Started.'))
.catch(e => log.error('StarterBot', e))
```

然后执行命令如下命令运行：

```bash
node bot.js
```

成功运行：
![image.png](/assets/2020/my-first-wechaty-bot/2.webp)
之后就可以手机微信扫码登录，当别人给你当前登录的微信号发送消息“12345”，就会自动回复“hello world”。

## 遇到的问题

开发之中也是碰到了一些问题，其实都可以从github官方的issues里面找到答案，我这边记录下我遇到的问题。

### cmd窗口二维码显示扫码不完善

![image.png](/assets/2020/my-first-wechaty-bot/3.webp)

解决办法是修改cmd窗口的属性，可以参考：[https://github.com/wechaty/wechaty/issues/2055](https://github.com/wechaty/wechaty/issues/2055)。
结束！
