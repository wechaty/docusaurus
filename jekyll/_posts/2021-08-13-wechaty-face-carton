# wechaty-face-carton 卡通人像插件

Wechaty 人像转换插件，让你的 Wechaty 机器人实现照片卡通化，年龄变化，性别变化等功能。之前有看到过一些机器学习视频，可以把照片漫画化，感觉很有意思，就想着能不能结合 Wechaty 做一个可以自动返回动漫化照片的机器人。经过一番资料查找，发现腾讯有个人脸变换的功能，经过测试后，发现就是我想要的功能，而且效果还不错，关键是每个月有 1000 次的免费额度，这就很香了。三种转换模式就是 3000 次，白嫖不香么 😏，白嫖腾讯这就更香了，哈哈。

如果你说你的微信没法登陆网页版微信，没关系`wechaty-puppet-wechat`协议是基于 UOS 桌面版的，新账号也可以用的。

本项目实现功能：

- 多轮交互式对话实现
  - 人脸照片动漫化
  - 人脸年龄变化
  - 人脸性别转换

## 效果展示

<img src="./doc/picall.png"/>

## 准备腾讯云账号

### 开通照片转换功能

登录[腾讯云](https://curl.qcloud.com/ZtRitpvH)账号，没有就直接 QQ 登录，直接点击管理控制台开通即可，不用付费，也不用选资源包，开通后自动有每个月 1000 次的免费额度，如果自己和朋友玩完全足够了。如果你是想活跃社群或者土豪，就随便充值了

<img src="./doc/tencent.png" height="200px"/>

### 获取腾讯的 secretid 和 secretkey

访问此页面[https://console.cloud.tencent.com/cam/capi](https://console.cloud.tencent.com/cam/capi)获取你的`secretid`和`secretkey`,配置插件的时候需要用的到

## 使用步骤

### 安装插件和 wechaty

```terminal
npm install wechaty wechaty-face-carton wechaty-puppet-wechat --save
```

### #主要代码

index.js

```javascript
const { Wechaty } = require('wechaty')
const WechatyFaceCartonPlugin = require('wechaty-face-carton')
const name = 'wechat-carton'
const bot = new Wechaty({ name, puppet: 'wechaty-puppet-wechat' })
bot
  .use(
    WechatyFaceCartonPlugin({
      maxuser: 20, // 支持最多多少人进行对话，建议不要设置太多，否则占用内存会增加
      secretId: '腾讯secretId', // 腾讯secretId
      secretKey: '腾讯secretKey', // 腾讯secretKey
      allowUser: ['Leo_chen'], // 允许哪些好友使用人像漫画化功能，为空[]代表所有人开启
      allowRoom: ['测试1'], // 允许哪些群使用人像漫画化功能，为空[]代表不开启任何一个群
      quickModel: true, // 快速体验模式 默认关闭 开启后可直接生成二维码扫描体验，如果自己代码有登录逻辑可以不配置此项
      tipsword: '卡通', // 私聊发送消息，触发照片卡通化提示 如果直接发送图片，默认进入图片卡通化功能，不填则当用户初次发送文字消息时不做任何处理
    })
  )
  .start()
  .catch((e) => console.error(e))
```

## 参数说明

| 参数名     | 必填 | 默认值 | 说明                                                                                                                                       |
| ---------- | ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| maxuser    | 否   | 20     | 支持最多多少人进行对话，建议不要设置太多，否则占用内存会增加                                                                               |
| secretId:  | 是   | ''     | 腾讯 secretId                                                                                                                              |
| secretKey  | 是   | ''     | 腾讯 secretKey                                                                                                                             |
| allowUser  | 否   | []     | 允许哪些好友使用人像漫画化功能，为空[]代表所有人开启                                                                                       |
| allowRoom  | 否   | []     | 允许哪些群使用人像漫画化功能，为空[]代表不开启任何一个群                                                                                   |
| quickModel | 否   | false  | 快速体验模式 默认关闭 开启后可直接生成二维码扫描体验，如果自己代码有登录逻辑可以不配置此项，如果是单独使用此插件，建议开启                 |
| tipsword   | 否   | '卡通' | 私聊发送消息，触发照片卡通化提示。如果直接发送图片，默认进入图片卡通化功能，不填则当用户初次发送文字消息时不做任何处理，建议填写触发关键词 |

### 运行

```angular2html
node index.js
```

扫码登录，即可

## 注意

要注意一下，不要把额度用超了，用超了就不能用了。

## 问题

如有使用问题可以直接加小助手，回复`卡通`，进微信群交流

![](https://user-gold-cdn.xitu.io/2019/2/28/1693401c6c3e6b02?w=430&h=430&f=png&s=53609)
