---
title: "CPS chat bot"
author: wss793062366
image: /assets/2020/cps-chat-bot/goodsmsg.webp
categories: project
tags:
  - ecommerce
---

tips: 使用微信群，推广电商商品及优惠券，机器人使用 wechaty-puppet-padplus.

## 简介

推广营销机器人是一个微信助手，可以帮助推广者在自己的微信群，查询优惠商品及优惠券并转发到自己所在的微信群

## 需求描述

1.推广者启动机器人，查询商品

- 当推广者，发送指令查询商品类目后， 微信助手通过接口查询到商品列表。

2.查询到的商品信息，发送到微信群

- 例如, 发送

```log
【京东】君乐宝 涨芝士啦酸奶芝芝多莓口味 180g*12袋
京东价：¥ 59.9

-------------------
商品入口 https://union-click.jd.com/jdc?e=&p=AyIGZRhYFQARAlYeWxMyFQVcGF8dAxoCUx9rUV1KWQorAlBHU0VeBUVNR0ZbSkAOClBMW0scWRwBFg9UE14TBg1eEEcGJQdmAg9dP2tScQdSHjJIR1lmM3s9cUQeC2UeWhQDEgFdHVMXMhIGVBhSFgMSBlUraxUHIkY7HVIXBBIAZRlaFAEXD1MbXhUyEgNdG1IUAhMFUx1dFDISD1ErAEBsZ3UOTRpXVkdCPkgPJTIiBGUraxUyETcLdVpGAUFTABwLe1hBDwwSBkwEfAVWGF0cBSIFVBpZFw%3D%3D

```

## Quick Start

### 新建项目

```bash
mkdir bot & cd ./bot
npm init -y
```

安装项目依赖

``` bash
npm install --save wechaty
npm install --save wechaty-puppet-padplus
npm install --save qrcode-terminal

```

### 开始编码

项目目录如下

```log
- src
  - my-chat-bot.js
- config
  - config.ts
```

#### config.js

配置信息

```js
module.exports = {
  // puppet_padplus Token
  token: "puppet_padplus_..."
}
```

#### my-chat-bot.js

```js
/**
 * wechaty-puppet-padplus index
 */

import { Wechaty }  from 'wechaty'
import { PuppetPadplus }  from 'wechaty-puppet-padplus'
import config  from '../config/config'

// init
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.token
  }),
  name: config.name
})

bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('message', onMessage)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))

```

#### 收商品指令

收到查询商品指令

```js
/**
 * onMessage
 */
async function onMessage (msg: Message) {
  // log.info('StarterBot', msg.toString())

  if (msg.type() === bot.Message.Type.Text) {
    if (msg.text().includes('#查询商品：')) {
        queryJingFenGoodsAndSendMsg(msg);
    } else if (msg.text().includes('ready stop')) {
      console.log('ready stop');
    }
  }
}


```

#### 查询商品

```js
const eliteIds: Array<Number> =
[
  1, //好券商品,
  22, //热销爆品,
  2, //超级大卖场,
  10, //9.9专区,
  23, //为你推荐
];
var eliteIdIndex = 0;
/**
 * QueryJFGoodsAndSendMsg
 */
function queryJingFenGoodsAndSendMsg(msg: Message) {
  var eliteId: Number = 1;
  // 查询商品
  queryJingFenGoods(eliteId).then(res => {
    var index = 0
    if (eliteIdsIndex < eliteIds.length) {
      eliteId = eliteIds[eliteIdsIndex];
      eliteIdsIndex ++;
    } else {
        eliteIdsIndex = 0;
    }

    if (index < res.length) {
    var goods: JFGoodsInfo = res[index];
    index ++;
    // 领链
    getCpsUrl(goods).then(res => {
        var cpsInfo: CpsInfo = res;
        // 发消息
        sendPromotionMsg(msg, goods, cpsInfo)
    });
    }

  }, rej => {
    console.log('rej = ', rej);
  });

/**
 * 根据类目查询商品
 */
async function queryJingFenGoods(eliteId: Number) {
  return new Promise((resolve: (value: Array<JFGoodsInfo>) => void, reject) => {
    var uParam = {
      goodsReq: {
        pageIndex: 1,
        pageSize: pageSize,
        eliteId: eliteId
      },
    };

    requestAPI('https://router.jd.com/api', JSON.stringify(uParam))
    .then(res => {
      if (res.code === '0') {
          var dataArr = res.data;
          var list = [];
          for (let d of dataArr) {
            var goods = new JFGoodsInfo(d)
            list.push(goods);
          }

          resolve(list)
      }
    }, rej => {
        reject('Server error');
    });
  });
}

/**
 * 领链
 */
async function getCpsUrl(goodsInfo: JFGoodsInfo) {
  return new Promise((resolve: (value: CpsInfo) => void) => {
    var materialId: string = goodsInfo.materialUrl;
    // console.log('indexof http = ', materialId.indexOf('http'))
    if (materialId.indexOf('http') !== 0) {
      materialId = 'https://' + materialId;
    }
    const appId = 000000; // your app id

    var promotionCodeReq = {
      materialId: materialId,
      siteId: appId,
      positionId: 000000, // your positionId
      couponUrl: ''
    }

    var coupon = goodsInfo.coupon;
    if (coupon && coupon.link) {
      promotionCodeReq.couponUrl = encodeURIComponent(coupon.link);
    }
    var uParam = {
      promotionCodeReq
    }

    requestAPI('https://router.jd.com/api', JSON.stringify(uParam))
    .then(res => {
      if (res.code === '0') {
        var cpsInfo: CpsInfo = res.data;
        // 发品
        resolve(cpsInfo);
      }
    });
  });
}

/**
 *
 */
function sendPromotionMsg(msg: Message, goods:JFGoodsInfo, cpsInfo: CpsInfo) {
  (async () => {
    // 发商品图
    var urlInfo: UrlInfo = goods.imageInfo.imageList[0];
    if (urlInfo.url) {
      const fileBox = FileBox.fromUrl(urlInfo.url)
      await msg.say(fileBox);
    }

    // 发送商品信息
    var jd;
    if (goods.owner === 'g') {
      jd = '京东自营';
    } else {
      jd = '京东';
    }

    var text = '【'+ jd +'】' + goods.skuName + '\n\r'
    + '----------------' + '\n'
    + '京东价：¥ ' + goods.priceInfo.price + '\n'
    + '券后价：¥ ' + goods.priceInfo.lowestCouponPrice + '\n\r'
    + '商品入口：' + cpsInfo.clickURL

    await msg.say(text);
  })();
}

```

### 试运行

启动脚本 'package.json'

```json
{
  ...

  "scripts": {
    "start": "cross-env WECHATY_LOG=verbose nodemon  my-chat-bot.ts"
  },

  ...
}

```

运行

```bash
npm run start
```

---

### 效果图

![效果图](/assets/2020/cps-chat-bot/goodsmsg.webp)

### 致谢

- 感谢[Wechaty](https://wechaty.github.io)团队。
- 感谢[句子互动](https://www.juzibot.com)提供的api-token

项目链接

<https://github.com/wss793062366/my-padplus-bot>

> Author: [@wss793062366](https://github.com/wss793062366) your one-line bio at here
> Code: [@my-padplus-bot](https://github.com/wss793062366/my-padplus-bot)
