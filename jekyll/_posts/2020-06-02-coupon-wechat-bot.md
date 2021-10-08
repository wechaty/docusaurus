---
title: "优惠券搜索机器人（Coupon wechat bot）"
author: h3llotom
categories: project
tags:
  - padplus
  - ecommerce
image: /assets/2020/coupon-wechat-bot/coupon-wechat-bot.webp
---

[![Wechaty Badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Everything about Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

由于疫情的影响，家里人一直窝在家里面，每天除了数窗外的鸟叫声，也就只能在家里疯狂购物剁手了。时间一长，我发现他们需要到很多地方去找商品的优惠信息，非常麻烦。作为一个程序员，怎么能忍受这么低效率的工作呢，所以就写了个爬虫，去定期爬取某网站优惠券信息。再借助wechaty的微信bot功能，在微信里“足不出户”，即可享受到最新的商品优惠信息。

通过一番学习之后，大致了解了一下wechaty的架构信息，wechaty提供了对外的API封装，wechaty-puppet将内部的实现逻辑进行了封装，再由各个平台具体的protocal去实现数据的获取。

## 功能

- 商品搜索
- 优惠券搜索
- 账单查询

## 实现逻辑

wechaty具体有如下模块：

- FriendShip：主要处理好友请求
- Message：处理消息模块
- Contact：好友管理
- 当wechaty实例监听到某一事件触发时，会去执行对应的消息监听逻辑。
- 这样看来，其实主要的操作逻辑在于消息模块，也就是message事件触发时，处理消息内容，返回优惠券下单地址，一般发送的是网址或是口令信息，则认定为是优惠券搜索。

## 依赖

- axios：网络请求库
- wechaty：wechaty核心库
- wechaty-puppet-padplus：wechaty的ipad协议实现

## 实现过程

```javascript
import { Contact, Message, Wechaty } from 'wechaty';
import { ScanStatus } from 'wechaty-puppet';
import { PuppetPadplus } from 'wechaty-puppet-padplus';
import QrcodeTerminal from 'qrcode-terminal';
import './service/';
import onFriendship from './handler/friendship';
import onMessage from './handler/message';

async function bootstrap() {
  // 这里使用获取到的ipad token
  const token = process.env.WECHATY_TOKEN;

  // 创建puppet实例
  const puppet = new PuppetPadplus({
    token,
  });

  const name = 'wechat-bot';

  // 传入pupoet，创建wechaty实例
  const bot = new Wechaty({
    puppet,
    name,
  });

  // 链式调用，将事件监听函数传入，并且启动wechaty
  bot
    .on('scan', (qrcode, status) => {
      if (status === ScanStatus.Waiting) {
        QrcodeTerminal.generate(qrcode, {
          small: true,
        });
      }
    })
    .on('login', (user: Contact) => {
      console.log(`login success, user: ${user}`);
    })
    .on('logout', (user: Contact, reason: string) => {
      console.log(`logout user: ${user}, reason : ${reason}`);
    })
    .on('message', (msg) => onMessage(bot, msg))
    .on('friendship', (friendship) => onFriendship(bot, friendship))
    .start();
}

bootstrap();
<a name="OFtbO"></a>
```

## 本地运行

1. 克隆项目

```shell
git clone git@github.com:H3lloTom/wechat-bot.git
```

1. 安装依赖

```shell
yarn
```

1. 启动项目

```shell
yarn start
```

## 效果图

![效果图](/assets/2020/coupon-wechat-bot/coupon-wechat-bot.webp)

## 致谢

- 感谢[Wechaty](https://wechaty.github.io)团队提供这么好的一个工具，让我们开发者可以持续增强我们的国民级应用。希望能够有更多的人参与进来，来继续扩大wechaty的生态圈。
- 感谢[句子互动](https://www.juzibot.com)提供的api-token

> 作者: [h3llotom](https://github.com/h3llotom/)
> Code: [Github](https://github.com/h3llotom/wechat-bot)
