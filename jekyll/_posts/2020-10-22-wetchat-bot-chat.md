---
title: "基于Wechaty打造定时多功能机器人(一)"
author: slx1997
image: /assets/2020/wetchat-bot-chat/demo.webp
email: shiliux@foxmail.com
site: https://github.com/slx1997
categories: project
tags:
  - padplus
  - productivity
  - nodejs
---

智能群聊天机器人

## 1. 微信机器人的魅力

在网上看到别人做的那些多多少少的机器人基于自己的微信开发的，发送给好友的机器人，或多或少勾引起我的折腾的心。这个想法在很早就已经产生了，奈何那个时候在赶着做毕设，就没有实现，现在毕业了，工作之后，这个想法越来越想要把它给实现出来，本来就是想要在起床的时候收到天气预报的提醒，本来是打算做一个短信每天定时发送短信，这样就可以达到目的了，用了一段时间的短信后，发现钱包实在消耗不起了，一家人看上了我的短信发送，都说给他们也做一个，什么七大姑八大姨的，都来了。虽然现在还开放着天气的发送，下个月可能就要关停了，用微信发送天气预报了。

大家的需求我陆陆续续的了解了一下，年轻人无非就是说，每天都夸自己漂亮一下，年龄稍微大一点的就是说很多APP都要去学，觉得太过麻烦了，就想着说就搞个整合一点的就好了。所以，现在的微信机器人就只有：

1. 天气预报。
2. 语义聊天。
3. 每日一则彩虹屁。

后续的话，可能要考虑加上快递查询，菜鸟驿站的到件通知什么的，这些要过几天再具体的了解大家的需求才会着手开发。

在此之前，有一个很困难的问题摆在我的面前，因为我的微信没有办法使用web协议，所以就只能另外开辟一条道路，在我的不懈努力下，在git上找到了[Weachaty](https://github.com/wechaty/wechaty)，发现了这个就是我要的，可发送可接收，立马开始着手制作了。

## 2. Wechaty是什么

在[Weachaty](https://github.com/wechaty/wechaty) 官网上有详细的介绍，我主要是通过官方文档来进行编写的，官方文档分为[中文版](https://wechaty.js.org/v/zh/)、[英文版](https://wechaty.js.org/docs/api)英文版的文档更新更全更新。

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

包括了最基础的好友收发消息，还有拉人入群，自动同意好友等等。

## 3. 使用Wechaty

首先需要初始化页面数据，我这边采用的是默认创建方式

``` bash
npm init -y
```

采用默认的生成package.json文件：

``` json
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "node-schedule": "^1.3.2",
    "qr-image": "^3.2.0",
    "response": "^0.18.0",
    "tencentcloud-sdk-nodejs": "^4.0.4",
    "wechaty": "^0.48.13",
    "wechaty-puppet-padplus": "^0.6.6",
    "ws": "^7.3.1"
  }
}

```

官方给我的是临时的puppetPadPlus协议，所以我需要安装的puppet是PadPlus版的，为了让二维码可以显示出来，我将二维码导出在页面，我这边引入的插件为qr-image
我们安装**wechaty**、**wechaty-puppet-padplus**。

``` base
npm i --save wechaty
npm i --save wechaty-puppet-padplus
npm i --save qr-image
```

修改index.js源代码如下：

``` Typescript
//引入必须的包
var express = require("express");
var qrImg = require('qr-image');
import { Wechaty }  from 'wechaty' // Wechaty核心包
import { PuppetPadplus }  from 'wechaty-puppet-padplus' // padplus协议包
import { Friendship }  from 'wechaty'
import config  from './src/config' // 配置文件
//引入定时任务
import schedule  from 'node-schedule';
var fs = require('fs');
var request = require('request');
//连接mysql数据库
import conn  from './src/mysqlconfig';
const connectionmysql = conn();
//创建腾讯闲聊机器人
import tencentcloud  from 'tencentcloud-sdk-nodejs';
const NlpClient = tencentcloud.nlp.v20190408.Client;

var app = express();

const addFriendKeywords = config.personal.addFriendKeywords

// 初始化
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.token
  }),
  name: config.name
})

//初始化腾讯闲聊机器人，创建链接
const clientConfig = {
  credential: {
    secretId: "你的腾讯AI的secretId",
    secretKey: "以及对应的密码",
  },
  region: "ap-guangzhou",
  profile: {
    httpProfile: {
      endpoint: "nlp.tencentcloudapi.com",
    },
  },
};

const client = new NlpClient(clientConfig);

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

bot
  .on("scan", function onScan(qrcode, status) {
    var img = qrImg.image(qrcode, { size: 10 });
    img.pipe(fs.createWriteStream("logo.png"));
    })
    .on('login', async user => {
      console.log(JSON.stringify(user))
    })
    .on("message", async message => {
      console.log(JSON.stringify(message))
    })
    .on("friendship", function onFriendShip(friendship){
      switch (friendship.type()) {
        case Friendship.Type.Receive:
          if (addFriendKeywords.some(v => v == friendship.hello())) {
            friendship.accept()
        }
        break
      }
   })
   .start();

var server = app.listen(8090, function() {
    var host = server.address().address;
    var port = server.address().port;
})

```

接下来我们在服务器上运行该项目：

``` bash
cd 到目录列表
npm i pm2
pm2 start pm2.json
如果没有pm2
node index.js
```

运行后，扫码登录之后后台就打印出已确认的日志：

``` bash
=================================================
    QRCODE_SCAN MSG : 已扫码，请在手机端确认登陆...
=================================================
=================================================
            QRCODE_SCAN MSG : 已确认
=================================================
```

目前来讲我们已经成功运行Wechaty项目了，想要实现上面的需求只需要实现具体的业务代码即可。

## 4.目前实现功能

- 自动通过好友验证
  - 当有人添加机器人时，判断验证消息关键字后通过或直接通过
- 每日定时任务（每天在早上6.30的时候发送夸夸语句和今日天气）
- 自动聊天
  - 私聊发送消息即可聊天

[这些在源码中已经体现，源码中有部分注释可以查看](https://github.com/slx1997/Watchaty-chat)

## 5.以后将要实现的功能

- 当博客有内容新增的时候，将通过助手发送数据给订阅者
  - 在开始订阅的时候需要设置信息
- 增加每个人私人时间定时，不在是固定的一个时间统一发送
- 拉人入群
-以及还有功能没有考虑清楚的
- 还将对接音乐播放，点歌等等
