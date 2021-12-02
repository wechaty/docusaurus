---
title: "重磅：使用UOS微信桌面版协议登录，wechaty免费版web协议重放荣光"
author: leochen-g
categories: article
tags:
  - code
  - wechaty-puppet-wechat
  - web-protocol
  - news
image: /assets/2021/04-wechaty-uos-web/wechaty-puppet-wechat.webp
---

很高兴能够写这篇文章通知大家Wechaty的web协议又能大放光彩了，如果之前你的微信提示不能登录web端，那么这个更新将会是你的福音。因为现在的`wechaty-puppet-wechat`已经支持使用UOS微信桌面版协议登录，赶快来尝试一下吧。

## 如何使用

> 关键依赖：npm install wechaty-puppet-wechat --save

对现有代码无任何侵入性，只是更新一下依赖即可

一、首先安装最新的`wechaty-puppet-wechat`依赖和配置环境

```shell
npm install qrcode-terminal --save
npm install wechaty 
npm install wechaty-puppet-wechat --save // 这个依赖是关键
export WECHATY_PUPPET=wechaty-puppet-wechat // 这里也是关键，需要配置你使用的puppet
```

二、请保证你的puppet配置的是`wechaty-puppet-wechat`

如果你使用的是`ipadlocal`，又想体验一下web协议，那么也需要按照一下配置进行

案例：

index.js

```javascript

import { Wechaty }  from 'wechaty';

const name = 'wechat-puppet-wechat';
let bot = '';
bot = new Wechaty({
  name, // generate xxxx.memory-card.json and save login data for the next login
});

//  二维码生成
function onScan(qrcode, status) {
  require('qrcode-terminal').generate(qrcode); // 在console端显示二维码
  const qrcodeImageUrl = [
    'https://wechaty.js.org/qrcode/',
    encodeURIComponent(qrcode),
  ].join('');
  console.log(qrcodeImageUrl);
}

// 登录
async function onLogin(user) {
  console.log(`贴心小助理${user}登录了`);
  if (config.AUTOREPLY) {
    console.log(`已开启机器人自动聊天模式`);
  }
  // 登陆后创建定时任务
  await initDay();
}

//登出
function onLogout(user) {
  console.log(`小助手${user} 已经登出`);
}

bot.on('scan', onScan);
bot.on('login', onLogin);
bot.on('logout', onLogout);
bot
  .start()
  .then(() => console.log('开始登陆微信'))
  .catch((e) => console.error(e));

```

按照以上配置，拿起你的手机扫码即可，你会发现以前不能登录的微信也可以登录了，惊喜不，意外不。

## 常见问题

1、为什么我更新了最新依赖还是提示无法登录web端微信？

请查看你项目的根目录，是否存在`wechaty-puppet-wechat.memory-card.json`这样的文件，如果有请把它删除后重新执行即可，这个存储的cookies
有可能已经过期(最新版本已经修复此问题)

2、这个puppet可以保证一直能绕过web登录么？

目前看来是可以绕过web端的限制，但是不保证以后会变化

3、绕过这个限制会被微信发现封禁么？

目前采用的绕过方式其实是使用了UOS的桌面版微信请求头，所以如果你不做违反微信协议的事情，大概率是没问题的。如果你违反了微信规定，那就不知道了

更多问题后续会根据反馈继续补充

## 原理

具体的实现原理可以参考这个[issues](https://github.com/wechaty/wechaty-puppet-wechat/issues/127) ，代码修改参见 [https://github.com/wechaty/wechaty-puppet-wechat/pull/129](https://github.com/wechaty/wechaty-puppet-wechat/pull/129)

大概的意思就是UOS下的微信只是网页版套了个electron，所以呢有大神就对比了一下请求头，发现了只要在请求的地址上首先加一个`?target=t`就是这样`https://wx.qq.com/?target=t`

然后在扫码登陆后拦截 `https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage` 这个请求，并在请求头上添加两个固定的参数

```shell
extspam ='Gp8ICJkIEpkICggwMDAwMDAwMRAGGoAI1GiJSIpeO1RZTq9QBKsRbPJdi84ropi16EYI10WB6g74sGmRwSNXjPQnYUKYotKkvLGpshucCaeWZMOylnc6o2AgDX9grhQQx7fm2DJRTyuNhUlwmEoWhjoG3F0ySAWUsEbH3bJMsEBwoB//0qmFJob74ffdaslqL+IrSy7LJ76/G5TkvNC+J0VQkpH1u3iJJs0uUYyLDzdBIQ6Ogd8LDQ3VKnJLm4g/uDLe+G7zzzkOPzCjXL+70naaQ9medzqmh+/SmaQ6uFWLDQLcRln++wBwoEibNpG4uOJvqXy+ql50DjlNchSuqLmeadFoo9/mDT0q3G7o/80P15ostktjb7h9bfNc+nZVSnUEJXbCjTeqS5UYuxn+HTS5nZsPVxJA2O5GdKCYK4x8lTTKShRstqPfbQpplfllx2fwXcSljuYi3YipPyS3GCAqf5A7aYYwJ7AvGqUiR2SsVQ9Nbp8MGHET1GxhifC692APj6SJxZD3i1drSYZPMMsS9rKAJTGz2FEupohtpf2tgXm6c16nDk/cw+C7K7me5j5PLHv55DFCS84b06AytZPdkFZLj7FHOkcFGJXitHkX5cgww7vuf6F3p0yM/W73SoXTx6GX4G6Hg2rYx3O/9VU2Uq8lvURB4qIbD9XQpzmyiFMaytMnqxcZJcoXCtfkTJ6pI7a92JpRUvdSitg967VUDUAQnCXCM/m0snRkR9LtoXAO1FUGpwlp1EfIdCZFPKNnXMeqev0j9W9ZrkEs9ZWcUEexSj5z+dKYQBhIICviYUQHVqBTZSNy22PlUIeDeIs11j7q4t8rD8LPvzAKWVqXE+5lS1JPZkjg4y5hfX1Dod3t96clFfwsvDP6xBSe1NBcoKbkyGxYK0UvPGtKQEE0Se2zAymYDv41klYE9s+rxp8e94/H8XhrL9oGm8KWb2RmYnAE7ry9gd6e8ZuBRIsISlJAE/e8y8xFmP031S6Lnaet6YXPsFpuFsdQs535IjcFd75hh6DNMBYhSfjv456cvhsb99+fRw/KVZLC3yzNSCbLSyo9d9BI45Plma6V8akURQA/qsaAzU0VyTIqZJkPDTzhuCl92vD2AD/QOhx6iwRSVPAxcRFZcWjgc2wCKh+uCYkTVbNQpB9B90YlNmI3fWTuUOUjwOzQRxJZj11NsimjOJ50qQwTTFj6qQvQ1a/I+MkTx5UO+yNHl718JWcR3AXGmv/aa9rD1eNP8ioTGlOZwPgmr2sor2iBpKTOrB83QgZXP+xRYkb4zVC+LoAXEoIa1+zArywlgREer7DLePukkU6wHTkuSaF+ge5Of1bXuU4i938WJHj0t3D8uQxkJvoFi/EYN/7u2P1zGRLV4dHVUsZMGCCtnO6BBigFMAA='
client-version' = '2.0.0', 
```

这样就可以完美使用桌面版协议了，真的是非常感谢 [@Luv Letter](https://github.com/luvletter2333) 的解释和 [@artxia](https://github.com/https://github.com/artxia) 的chrome插件代码让我有机会为`wechaty-puppet-wechat`添砖加瓦

## 快速体验

如果想快速体验Wechaty的完整功能，以及可视化配置功能，可以关注我的 [《微信每日说》](https://github.com/gengchen528/wechatBot)  和  [《智能微秘书》](https://github.com/gengchen528/wechat-assistant-pro) 项目，以上项目均已更新最新版web协议，全部支持web登录。

> 历史文章

* [wechaty-web-panel可视化插件](https://wechaty.js.org/2020/05/31/wechaty-web-panel-plugin/)
* [三步教你用Node做一个微信脱单神器，小白可上手](https://wechaty.js.org/2019/06/21/three-step-get-girlfriend/)

> 作者: [Leo_chen](https://github.com/leochen-g/)，高级前端工程师，喜欢使用node做各种项目
