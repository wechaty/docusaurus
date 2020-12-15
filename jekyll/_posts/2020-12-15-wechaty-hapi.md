---
title: "实现表情包转图片链接"
author: wlisdog
image: /assets/2020/12-johnwang71/avartar.jpeg
tags:
  - nodejs
  - wechaty
  - wechaty-puppet-padplus
---
>简单介绍一下Wechaty是一款适用于Chatbot Makers的会话型SDK，可以帮助您使用6行JavaScript，Python，Go和Java创建一个bot ，并具有包括Linux，Windows，MacOS和Docker在内的跨平台支持。（官方介绍）

大白话: Wechaty就相当于是一个实现与微信会话交互的插件工具包，针对于node，其他语言也不太清楚。（个人理解）

正常实现，网上也都有好多种基本的安装入门教程等等就不罗列了， 总的来说网页版登录就甭想了，直接就开ipad协议版本的wechaty-puppet-padplus

ipad协议版本与网页版的区别， 就是需要一个特定的token，token如何获取呢，请见[token获取](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

想最快速度的ipad协议版本的机器人就直接看这个官方案例就可以[直接看例子](https://github.com/juzibot/donut-tester#example)，写的都很清楚。

在我获取token时，就立马写了个demo 跑了起来，报了一个错记录一下。

![报错记录](/assets/2020/12-wechaty-hapi/WechatIMG10.png)

Token是无效的，查阅了[官方API](https://wechaty.js.org/docs/api/)，无果。

怎么解决的呢， 隔了几天，想起来了，又试了一下，还是熟悉的token，熟悉的代码，一个标点都没有改，就跑起来。 认为就是返回的token 可能不是实时有效，具体多久不太清楚。

当时能跑起来。真的是开心到飞起~ 出现二维码，意味着已经成功了。直接绑定，他会跟一个名为Bot Sentry的公众号关联到一块，并发送信息，就证明你已经存在绑定关系了。

## 言归正题

到这里， 你就可以实现你自己各种的脑洞功能，就开脑洞开脑洞开脑洞，实现各种奇奇怪怪的功能。我这个人平时用表情包多，比如说在微信中保存的表情，我想用特别喜欢的表情做头像啊，或者我想在钉钉的聊天里也使用这个表情，那么需求来了，就准备实现吧。

1. 先看一下再机器人微信对话中message，都有哪些消息。

2. 在返回的消息中提取有用的链接，关键字。

3. 如果有现成的链接图片，将链接返回给用户。

这样我们目测列一下，一步一步实现，看上去基本上就能去实现了。

```javascript
  const fs = require("fs");
  const path = require('path');
  const dir = path.join(__dirname + '/../images');
  
  bot.on('message', async (message) => {
    if (message.self()) return;
    let return_text = message.text().replace(/\s/g,"").replace(/&amp;/g, "&");
    let url;
    if (return_text.indexOf('emoji') > -1) {
      url = return_text.split('cdnurl=')[1].split('designerid')[0];
      if (url.indexOf('emoji') > -1) {
        await message.say(url);
      } else {
        let timestamp = new Date().getTime();
        request(url).pipe(fs.createWriteStream(`${dir}/${timestamp}.jpg`));
        await message.say(`api.yangdagang.com/src/images/${timestamp}.jpg`);
      }
    }
  });


感谢wechaty提供了很好的思路，感谢wechaty-puppet-hostie提供了良好的设计，六行代码其实很简洁，但是在其中我们可以联想脑洞发挥的更多，通过自己一步一

步去实现，做自己的产品经理美坏了。
