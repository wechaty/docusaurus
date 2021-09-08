---
title: "发段子 舔狗 毒鸡汤 美图bot"
author: generalbao
categories: project
tags:
  - padplus
  - social
image: /assets/2020/paipiange-bot/1.png
---

[![Wechaty Badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Everything about Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

个人比较喜欢看看段子,毒鸡汤，舔狗日记，电影，美图，还有虎扑步行街，所以就收集了很多数据放在网站上，同时有一些群需要管理，我希望活跃气氛，就希望做了个这样的bot，通过一番学习之后，之前的itchat vbot都是web协议 都用不了了 然后了解到wechaty，是可以提供ipad协议，具体添加 botorange_yeah 微信 然后就有15天试用，然后你可以通过review 而且写一遍博客关于wechaty就可以 for free  

Any developers can add JuziBOT Inc's staff ( Wechat number : botorange_yeah ) as a Wechat friend. You will receive a review form after adding. If you pass the review and willing to write a blog in Wechaty , you can use our iPad protocol for free！
链接：<https://github.com/juzibot/Welcome/wiki/Support-Developers>

## 功能

- 段子
- 毒鸡汤
- 舔狗日志
- 美图

## 准备开发功能

- 定时发送 给对象 我们在一起xx日了 爱你每一天
- 监听虎扑xx基地发帖 一发帖就通过微信通知
- 发送每天互联网的大事

## 实现逻辑

wechaty具体有如下模块：

- FriendShip：主要处理好友请求
- Message：处理消息模块
- Contact：好友管理
- 当wechaty实例监听到某一事件触发时，会去执行对应的消息监听逻辑。
- 这样看来，其实主要的操作逻辑在于消息模块，也就是message事件触发时，

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
  // 这里使用获取到的ipad token 填写你申请的token 具体查看./handler/message.ts
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

```

## 本地运行

1. 克隆项目

```shell
git clone https://github.com/generalbao/paipiange-wechat-bot
```

也可以参考 这位仁兄的代码 我也是参考他的

```shell
git clone https://github.com/H3lloTom/wechat-bot/
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

![效果图](/assets/2020/paipiange-bot/1.png)
![效果图](/assets/2020/paipiange-bot/2.png)
![效果图](/assets/2020/paipiange-bot/4.png)

## 致谢

- 感谢[Wechaty](https://wechaty.github.io)团队提供这么好的一个工具，让我们开发者可以持续增强我们的国民级应用。希望能够有更多的人参与进来，来继续扩大wechaty的生态圈。
- 感谢[juzibot](https://www.juzibot.com)提供的api-token

> 作者: [generalbao](https://github.com/generalbao/)
> Code: [Github](https://github.com/generalbao/paipiange-wechat-bot)
