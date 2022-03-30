---
title: 基于Wechaty打造实时爬取产品信息并分享给用户群
author: zcr20090430
categories: project
tags:
  - padplus
  - project
  - python
  - typescript
  - ecommerce
---

基于Wechaty打造实时爬取产品信息并分享给用户群

## 1. 主要功能

公司想实现通过爬取walmart的降价信息或者是新入库的产品来提供给客户，方便客户及时地获得这些信息，用来抢购。

1. 通过walmart提供的api，用python多线程异步地爬取产品，从而得到降价信息
2. python把读取到的产品写入一个具有‘read false’标志位的txt文件中
3. wechaty通过设置定时任务读取这个txt文件，并将标志位置为‘read True’
4. wechaty处理爬取到的字符串，并将处理后的产品图像，产品信息实时的发送到群聊中

## 2. Wechaty框架介绍

[Weachaty](https://github.com/wechaty/wechaty) 是一个开源的的对话机器人 SDK，支持个人微信号。它是一个使用Typescript 构建的Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。
在GitHub上可以找到很多支持微信个人号接入的第三方类库，其中大多都是基于Web Wechat的API来实现的，如基于Python的WeixinBot，基于Node.js的Wechaty等。少数支持非Web协议的库，大多是商业私有闭源的，Wechaty是少有的开源项目支持非Web协议的类库。且目前来讲，Wechaty已经开始陆续支持多种编程语言了（Go、Python、Java等等）。官方说只需要6行代码，就可以做到自动管理微信消息了。

``` JavaScript
import { Wechaty } from 'wechaty'
Wechaty.instance()
.on('scan',         qrcode      => console.log('扫码登录'))
.on('login',        user        => console.log('登录成功：' + user))
.on('message',      message     => console.log('收到消息：' + message))
.on('friendship',   friendship  => console.log('收到好友请求：' + friendship))
.on('room-invite',  invitation  => console.log('收到入群邀请：' + invitation))
.start()
```

可以看到，Wechaty能做到的事情很多，可以收消息、发消息、好友管理、群管理，更多功能可以参考官方文档[中文版](https://wechaty.js.org/v/zh/)、[英文版](https://wechaty.js.org/docs/introduction/README)英文版的文档更新更全更新。

## 3. 安装Wechaty

原本一开始我是想着用Python版本的 [Wechaty](https://github.com/wechaty/python-wechaty-getting-started) 的，因为爬虫写的也用的是python，这样就可以直接把机器人和爬虫更好的整合，但是python版本的机器人运行时会出现报错，所以就选择了社区更为完善的ts版本。对于typescript语言来说是javascript的一个超集，对于使用过React框架开发的人员来说还是比较友好的。

### 使用wechaty

我使用的系统是windows10，第一步首先是在github处克隆源码

``` bash
git clone https://github.com/wechaty/wechaty-getting-started.git
```

安装完毕进入文件夹目录下，下载相关的依赖

``` bash
npm install
npm start
```

### 如何使用Wechaty

本来想图个方便使用网页版微信来实现这些功能，但是由于微信官方的原因，我的账号的网页版功能已经不能使用，所以就只好使用padplus的令牌来实现微信机器人的功能，首先要初始化wechaty类

``` Typescript
const bot = new Wechaty({
  name: 'ding-dong-bot',
  /**
   * Specify a `puppet` for a specific protocol (Web/Pad/Mac/Windows, etc).
   *
   * You can use the following providers:
   *  - wechaty-puppet-service
   *  - wechaty-puppet-puppeteer
   *  - padplus
  - project
   *  - etc.
   *
   * Learn more about Wechaty Puppet Providers at:
   *  https://github.com/wechaty/wechaty-puppet/wiki/Directory
   */

  puppet: puppet,

})
const token = 'your token'
const puppet = new PuppetPadplus({
  token,
})
```

为了实现业务逻辑，那么必须要调整onlogin()函数的功能，在里面加入main()函数，当然main是一个定时器函数，设定间隔读取爬虫和机器人的接口文件，如果读取到了，就接下来找到群来发送读取到的信息。

``` Typescript
function onLogin (user: Contact) {
  log.info('StarterBot', '%s login', user)
  main()
}
async function main () {
  let imagehref0 = ''
  let jslistofpd0 = ''
  let flagOfSay = 0
  // let imagehref1 = ''
  let jslistofpd1 = ''
  // let imagehref2 = ''
  // let jslistofpd2 = ''
  // todo 改变文件路径位置，与沃尔玛的文件位置同源

  setInterval( function () {
    fs.readFile(
      'D:\\scriptworm\\walmart-data-local\\productPriceDropAndRestock0.txt',
      (err:any,data:any) =>
    {
      if (err) {
              console.error(err)
              return
            }
      console.log('[datatostring]', data.toString())
      // imagehref0  = jslistofpd0.substring(jslistofpd0.search(/imagehref/) + 10, jslistofpd0.search(/FFFFFF/) + 6)
      // jslistofpd0 = jslistofpd0.substring(jslistofpd0.search(/name/), jslistofpd0.search(/onlyapi/) + 7)
      let str1 = data.toString()
      let a1 = str1.search(/_read_False_/)
      console.log(a1)
      let a2 = str1.search(/_read_True_/)
      console.log(a2)
      if (a1 == 0) {
        // todo: contact.say(something)
        console.log(str1)
        jslistofpd0 = data.toString()
        console.log(jslistofpd0)
        imagehref0  = jslistofpd0.substring(jslistofpd0.search(/imagehref/) + 10, jslistofpd0.search(/FFFFFF/) + 6)

        jslistofpd1 = jslistofpd0.substring(jslistofpd0.search(/购物链接/) + 5, jslistofpd0.search(/%3Faffp1%3D/))
        jslistofpd0 = jslistofpd0.substring(jslistofpd0.search(/商品名称/) + 5, jslistofpd0.search(/购物链接/))
        fs.writeFile('D:\\scriptworm\\walmart-data-local\\productPriceDropAndRestock0.txt', '_read_True_', () => {flagOfSay = 1})
                   }
    }
  )
  }, 1000* 10)
  setInterval(async function () {

      if(imagehref0 != '') {
        let fileBox0 = FileBox.fromUrl(imagehref0)

        //const contac = await bot.Contact.find({name: 'xxx'})
         const contac = await bot.Room.find({ topic: 'your wanted room' })
        // await new Promise(() =>
        if (contac && flagOfSay == 1) {

          await contac.say(jslistofpd0)
            .then(() => setTimeout(function () { contac.say(jslistofpd1)}, 1000))
            .then(() => setTimeout(function () { contac.say(fileBox0)}, 2000))

          flagOfSay = 0

        }
      }
    }, 1000 * 10)
}

```

这里不少的功能都可以在wechaty的官方文档有所解释，比如filebox(用于发送图片等复杂信息)，还有诸如contact.say()，room.say().
对于typescript语言的异步功能可以参阅JavaScript的官方文档，大同小异，可以直接在ts文件里面写js的代码，只需要指定一些变量的属性。
下面是完整的代码(出于隐私问题，令牌以及群名已被替换掉)

``` Typescript
/**
 * Wechaty - WeChat Bot SDK for Personal Account, Powered by TypeScript, Docker, and 💖
 *  - https://github.com/wechaty/wechaty
 */
import { FileBox } from 'file-box'
import {
  Contact,
  Message,
  ScanStatus,
  Wechaty,
  log,
}               from 'wechaty'

import { generate } from 'qrcode-terminal'
import { PuppetPadplus } from 'wechaty-puppet-padplus'

// You can safely ignore the next line because it is using for CodeSandbox
require('./.code-sandbox.js')
import fs  from 'fs'

const token = 'puppet_padplus_xxxxxx'
const puppet = new PuppetPadplus({
  token,
})
function onScan (qrcode: string, status: ScanStatus) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    generate(qrcode, { small: true })  // show qrcode on console

    const qrcodeImageUrl = [
      'https://wechaty.js.org/qrcode/',
      encodeURIComponent(qrcode),
    ].join('')

    log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)
  } else {
    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
  }
}

function onLogin (user: Contact) {
  log.info('StarterBot', '%s login', user)
  main()
}

function onLogout (user: Contact) {
  log.info('StarterBot', '%s logout', user)
}

async function onMessage (msg: Message) {
  log.info('StarterBot', msg.toString())

  const contact = msg.from()
  log.info('name', contact?.name())
  // if (contact) { await contact.say('[自动回复]主人暂时不在，稍后看到再回复') }
  if (msg.text() === 'ding') {
    await msg.say('dong')
  }
}
// const WECHATY_PUPPET_PADPLUS_TOKEN = 'puppet_padplus_285b71c97d022f21'
const bot = new Wechaty({
  name: 'ding-dong-bot',
  /**
   * Specify a `puppet` for a specific protocol (Web/Pad/Mac/Windows, etc).
   *
   * You can use the following providers:
   *  - wechaty-puppet-service
   *  - wechaty-puppet-puppeteer
   *  - padplus
  - project
   *  - etc.
   *
   * Learn more about Wechaty Puppet Providers at:
   *  https://github.com/wechaty/wechaty-puppet/wiki/Directory
   */

  puppet: puppet,

})

bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('message', onMessage)
bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
async function main () {
  let imagehref0 = ''
  let jslistofpd0 = ''
  let flagOfSay = 0
  // let imagehref1 = ''
  let jslistofpd1 = ''
  // let imagehref2 = ''
  // let jslistofpd2 = ''
  // todo 改变文件路径位置，与沃尔玛的文件位置同源

  setInterval( function () {
    fs.readFile(
      'D:\\scriptworm\\walmart-data-local\\productPriceDropAndRestock0.txt',
      (err:any,data:any) =>
    {
      if (err) {
              console.error(err)
              return
            }
      console.log('[datatostring]', data.toString())
      // imagehref0  = jslistofpd0.substring(jslistofpd0.search(/imagehref/) + 10, jslistofpd0.search(/FFFFFF/) + 6)
      // jslistofpd0 = jslistofpd0.substring(jslistofpd0.search(/name/), jslistofpd0.search(/onlyapi/) + 7)
      let str1 = data.toString()
      let a1 = str1.search(/_read_False_/)
      console.log(a1)
      let a2 = str1.search(/_read_True_/)
      console.log(a2)
      if (a1 == 0) {
        // todo: contact.say(something)
        console.log(str1)
        jslistofpd0 = data.toString()
        console.log(jslistofpd0)
        imagehref0  = jslistofpd0.substring(jslistofpd0.search(/imagehref/) + 10, jslistofpd0.search(/FFFFFF/) + 6)

        jslistofpd1 = jslistofpd0.substring(jslistofpd0.search(/购物链接/) + 5, jslistofpd0.search(/%3Faffp1%3D/))
        jslistofpd0 = jslistofpd0.substring(jslistofpd0.search(/商品名称/) + 5, jslistofpd0.search(/购物链接/))
        fs.writeFile('D:\\scriptworm\\walmart-data-local\\productPriceDropAndRestock0.txt', '_read_True_', () => {flagOfSay = 1})
                   }
    }
  )
  }, 1000* 10)
  setInterval(async function () {

      if(imagehref0 != '') {
        let fileBox0 = FileBox.fromUrl(imagehref0)

        //const contac = await bot.Contact.find({name: 'xxx'})
         const contac = await bot.Room.find({ topic: 'xxx' })
        // await new Promise(() =>
        if (contac && flagOfSay == 1) {

          await contac.say(jslistofpd0)
            .then(() => setTimeout(function () { contac.say(jslistofpd1)}, 1000))
            .then(() => setTimeout(function () { contac.say(fileBox0)}, 2000))

          flagOfSay = 0

        }
      }
    }, 1000 * 10)
}

```

用npm命令运行后扫码登录

``` bash
npm start
```

重新运行后，扫码登录之后后台就打印出已确认的日志：

``` bash
=================================================
    QRCODE_SCAN MSG : 已扫码，请在手机端确认登陆...
=================================================
=================================================
            QRCODE_SCAN MSG : 已确认
=================================================
```

接下来就能在指定的群聊中，实时的发送得到的数据了。
