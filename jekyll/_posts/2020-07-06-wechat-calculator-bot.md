---
title: "微信计算器机器人（wechat robot calculator）"
author: ray
categories: project
tags:
  - padplus
  - productivity
image: /assets/2020/wechat-calc/header.jpg
---

[![Wechaty Badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Everything about Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

很早开始就在关注微信机器人，自己是做前端开发的，对nodejs有不错的了解。想自己做一个微信机器人的计算器，因为每次需要用计算器就很不方便，手机里的app我都放在很深的目录，不好找，放在首页又太浪费了。所以就想到用wechaty来实现个人号微信计算器机器人，实现常规的加减乘除功能；

## 功能

加、减、乘、除

## 实现逻辑

逻辑可以说是很简单；利用wechaty接收用户消息，对消息过滤，用户输入：1+1，然后直接eval 计算结果返回给用户；

## 依赖

- wechaty：wechaty核心库  
- wechaty-puppet-padplus：wechaty的ipad协议实现

## 实现过程

```javascript

function calculator(intxt, callback) {
  return new Promise(function (resolve, reject) {
    var a = intxt;
    try {
      intxt = intxt.replace(/=|等|等于|\?/, '');
      intxt = intxt.replace(/加/g, '+').replace(/减/g, '-').replace(/乘/g, '*').replace(/除/g, '/');
      a = eval(intxt);
    } catch(e){
      // console.log('========error', e);
    }
      resolve(a);
    });
}

async function onMessage (msg) {
  const contact = msg.from()
  let text = msg.text()
  const room = msg.room();

  if (room) return;
  if(msg.self()){ // 自己发消息
    return;
  }
  if (text) {
    text = text.replace(/[。，、,.]$/gi, '').replace(/\s*/gi, "");
  }
  if (msg.type() === bot.Message.Type.Text && /^\d+.{1}\d+/gi.test(text)) { // 文本消息
    let result = await CalcFunc.calculator(text);
    await msg.say(result+'');
  }
}

```

## 本地运行

1. 克隆项目

```shell
git clone g https://github.com/leiroc/wechat-calculator.git
cd wechat-calculator
```

1. 安装依赖

```shell
npm install
```

1. 启动项目

```shell
node app.js
```

## 效果图

![效果图](/assets/2020/wechat-calc/demo.jpg)

## 致谢

感谢[Wechaty](https://wechaty.github.io/)团队提供微信机器人SDK，让开发者可以专注于业务代码。  
感谢[句子互动](https://www.juzibot.com)提供的pad协议版token，看到很多基于dll的实现，太费时就没有研究了

> 作者: [Ray](https://github.com/leiroc/)
> Code: [Github](https://github.com/leiroc/wechat-calculator)
