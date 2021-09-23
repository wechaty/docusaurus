---
title: "基于wechaty开发网课答案查询机器人"
author: hurely
image: /assets/2020/wanke-bot/banner.jpg
categories: project
tags:
  - puppet
  - padlocal
  - wangke
  - education
---

自己有运营一个网课答案查询的微信公众号，无奈服务器压力有时候会大，会出现回复不及时的问题，所以突发冥想开发一个个人号作为备用。

## 项目地址

github：[https://github.com/hurely/wechaty-wangke](https://github.com/hurely/wechaty-wangke)

## 技术栈

- wechaty --适用于微信个人的 Bot SDK ，可以使用 6 行 js 创建一个机器人
- wechaty-puppet-padplus --同是 wechaty 团队开发，不同于网上基于微信 web 端的库，它是基于 iPad 协议
- axios --node 请求库
- qrcode-terminal --终端显示二维码
- nodemon --node 文件热部署
- xml-js --xml 和 json 解析（非必须）

## 功能

- 根据关键字和用户 id 自动回复网课答案
- 接收小程序后发送小程序小程序 appId 和路径
- 后续其他功能

## 项目展示

- 自动回复网课答案
  ![回复网课答案](/assets/2020/wanke-bot/20201015105732.png)

- 接收小程序
  ![接收小程序](/assets/2020/wanke-bot/20201015112724.png)

## 核心代码

1.src/index.js --wechaty 启动的入口文件

```js
import config  from '../config/config'

const {
  Wechaty,
  ScanStatus,
  log,
}   = require('wechaty')

import { PuppetPadplus }  from 'wechaty-puppet-padplus'

import replyToAMessage  from './utils/reply'

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
  log.info('StarterBot', msg)
  var reply = await replyToAMessage(msg)
  await msg.say(reply)
}

function onMini(msg){
  log.info('onMini', msg)
}

const bot = new Wechaty({
  name: config.name,
  puppet: new PuppetPadplus({
      token: config.token
  })
})

bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('message', onMessage)
// bot.on('mini',onMini)

bot.start()
.then(() => log.info('StarterBot', 'Starter Bot Started.'))
.catch(e => log.error('StarterBot', e))
```

2.config/config.js 基础的配置文件

```js
module.exports = {
    // 设定协议的token，本项目基于wechaty-puppet-padplus
    token: "puppet_XXXXXXXX",
    // 机器人名字
    name: "XXXXXXXX",
    //题库地址 申请链接为 http://api.51aidian.com/index.php?id=kunggggyoyoyo
    tikuApi:"",
    //bmob数据库配置 后续自行配置题库可以用到
    bombApplicationId:'',
    bombRestApiKey:'',
    bombSecretKey:'',
    bombMasterKey:'',
    bombSafeCode:'',//API安全码
    bmobHost:'https://api.bmobcloud.com/1/classes/',//数据库对应
}
```

3.src/utils/reply.js 根据关键字，回复内容

```js
import axios  from 'axios';
const {
  FileBox
} = require("file-box") const {
  log
} = require('wechaty') import config  from '../../config/config' const {
  pareMiniProgramMsg,
  pareseXmlToJson
} = require("../utils/utils")
module.exports = (msg, length) = >{
  return new Promise(async(resolve, reject) = >{
    if (msg.payload.type === 9 && msg.payload.fromId === 'mishi19900806') {
      let text = msg.payload.text text = pareMiniProgramMsg(text) result = pareseXmlToJson(text) result = JSON.parse(result) var response = '小程序appId：' + result.msg.appmsg.weappinfo.appid._cdata response += '\n\n小程序路径为：' + (result.msg.appmsg.weappinfo.pagepath._cdata).replace('.html', '') resolve(response);
    }
    else if (msg.text().indexOf('答案') > -1 && msg.payload.fromId === 'mishi19900806') {
      let requestUrl = "";
      requestUrl = config.tikuApi + encodeURI(msg.text()) axios.get(requestUrl).then(async(response) = >{
        log.info('接口回调正常----', response) let result = "❓问题：" + response.data.question + " " + "💡答案：" + response.data.answer resolve(result);
      }).
      catch(function(err) {
        log.info('接口回调错误----', err) resolve("嗯~~~,这个问题人家还不会呢~")
      })
    } else {
      resolve('')
    }
  })
}
```

为了开发方便，做了判断，只允许我另外一个微信号发送消息回复内容

4.src/utils/utils.js 工具类

```js
var convert = require('xml-js')

function pareseXmlToJson(xml) {
  var json = convert.xml2json(xml, {
    compact: true,
    spaces: 4
  }) return json
}

function pareseJsonToXml(json) {
  var options = {
    compact: true,
    ignoreComment: true,
    spaces: 4
  }
  var xml = convert.json2xml(json, options)
  return xml
}

/*
* 解析发送微信小程序的内容 具体接收内容查看msg.xml文件
**/
function pareMiniProgramMsg(msg) {
  var str = msg.replace(/'\n'/g, '').replace(/'\t'/g, '').replace(/'\'/g, '')
  return str
}

module.exports = {
  pareseXmlToJson,
  pareseJsonToXml,
  pareMiniProgramMsg
}

```

## Wechaty 的 Token 申请方法

[官方文档介绍](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 网课答案接口用法

![网课答案接口](/assets/2020/wanke-bot/20201015141509.png)

1.访问[http://api.51aidian.com/index.php?id=kunggggyoyoyo](http://api.51aidian.com/index.php?id=kunggggyoyoyo)

2.按照页面要求自定义一个 id，如`wangkebot`，记下此时的 token`73eF71417eC4652C561D4F30893a7F51`点击授权

3.将申请的 id 和 token 拼接成`http://api.51aidian.com/api/adct.php?uid=wangkebot&token=73eF71417eC4652C561D4F30893a7F51&q=`(注意接口是付费的)

完成以上步骤后，一个简易的网课答案查询的微信机器人就做好了。

## 总结

以上代码实现非常简单。通过 wechaty 方便了很多。可以把公众号粉丝引流到个人号，便于后期进行私域运营。

## 遇到的坑点

- 避免微信号被封锁，建议开发的时候用微信小号进行开发，并根据特定的情况回复内容；
- wechaty-puppet 版本问题，参见 [wechaty 文档](https://github.com/wechaty/wechaty/issues/1930)

## 运行

```js
npm install
npm start
```
