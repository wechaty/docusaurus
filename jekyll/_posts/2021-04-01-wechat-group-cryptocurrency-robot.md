---
title: "微信群中的加密货币报价机器人"
author: heygum
categories: tutorial
tags:
  - cryptocurrency
  - padplus
image: /assets/2021/04-wechat-group-cryptocurrency-robot/header.jpg
---

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://wechaty.js.org)

## 背景

当今正时大牛市 (或者牛快结束了), 在很多时候并没有办法打开App软件看币价, 比如在上课的时候, 在上班摸鱼的时候, 在地铁上的时候, 所以在微信群中,查询自己所需要的币的价格是很有必要的.

## 部署环境

Node.js16+ (目前不要上15的车)

TypeScript

qrcode-terminal
wechaty
wechaty-puppet-padlocal

在此项目中, 目前使用的是免费无限制的非小号API, 大致能用, 没上二线交易所以上的币一般没有.

本人运行环境 Debian 10.

## 实现

刚开始使用尝试的是python实现,后来遇到了连接不上的问题(搭了gateway也连不上), 后面使用Typescript实现时再次遇到了连接不上的问题.

后面发现是服务器的问题, 建议用服务器:

```sh
ping gateway.pad-local.com
```

尝试能不能ping通.

在此项目中,大致框架借鉴的是 [wechaty-puppet-padlocal-demo](https://github.com/padlocal/wechaty-puppet-padlocal-demo), 在此基础上进行修改,在部署时可以先按着Demo进行操作.

Demo使用没问题时, 便可以进行二次修改.

```js
// coinBot.ts
import { PuppetPadlocal } from "wechaty-puppet-padlocal";
import { Contact, log, Message, ScanStatus, Wechaty } from "wechaty";

const puppet = new PuppetPadlocal({
    token: "puppet_padlocal_yourTokenHere" // 输入你的token.
}) 

const bot = new Wechaty({
    name: "TestBot",
    puppet,
})

    .on("scan", (qrcode: string, status: ScanStatus) => {
        if (status === ScanStatus.Waiting && qrcode) {
            const qrcodeImageUrl = [
                'https://wechaty.js.org/qrcode/',
                encodeURIComponent(qrcode),
            ].join('')

            log.info("TestBot", `onScan: ${ScanStatus[status]}(${status}) - ${qrcodeImageUrl}`);

            require('qrcode-terminal').generate(qrcode, { small: true })  // show qrcode on console
        } else {
            log.info("TestBot", `onScan: ${ScanStatus[status]}(${status})`);
        }
    })

    .on("login", (user: Contact) => {
        log.info("TestBot", `${user} login`);
    })

    .on("logout", (user: Contact, reason: string) => {
        log.info("TestBot", `${user} logout, reason: ${reason}`);
    })

    .on("message", async (message: Message) => {
        if(message.text().toString().includes(".-")){  // 这里的反应前缀可以根据需求修改
            log.info(message.text().toString()); // 打印一下反应的Text.
            const s1 = message.text().toString().split("-")[1]; 
            let result = await coinBot(s1);
            const member = message.talker();
            if(result != null)
            {
                message.room().say("\n" + result,member);
            }
            else{
                log.info(message.toString());
                message.room().say("\n" + "没这币",member);
            }    
        };
    })

    .on("error", (error) => {
        log.error("TestBot", 'on error: ', error.stack);
    })

bot.start().then(() => {
    log.info("TestBot", "started.");
});

    async function coinBot(s1){
    var result;
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://fxhapi.feixiaohao.com/public/v1/ticker', // 这里使用的非小号的API
    qs: {
    'start': '0',
    'limit': '5000',  //非小号最高数据5000
    'convert': 'USD'
    },
    json: true,
    gzip: true
    };

    let response = await rp(requestOptions);
    for(var each in response)
    {
        if(response[each]["symbol"].toLowerCase() == s1)
        {
            result = "[币种]: " + response[each]["symbol"] +`\n` + "[价格]: " +response[each]["price_usd"] + '\n' + "[24小时涨幅]: " + response[each]["percent_change_24h"] + "%";
            break;
        }
    }
    return result;
}

```

## 运行效果

![效果图](/assets/2021/04-wechat-group-cryptocurrency-robot/result.png)

## 致谢

谢谢Wechaty团队‘好大’的指导.

> 作者: [heygum](https://github.com/heygum)
