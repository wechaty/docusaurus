---
title: "传统工业与信息化的结合"
author: jiucl
categories: project
tags:
  - bot
  - car
  - automotive
image: /assets/2020/rcbot/rcbot.jpg
---

## 现状与目标：我是谁？我要做什么？

* 汽车配件行业
* 传统工业与信息化的结合
* 用户无需联系销售或者技术支持，即可快捷地获取产品信息
  * 零延时：无需等待销售或者技术支持回复
  * 信息更准确：不会出现销售或者技术支持回复错误的情况
  * 信息更新：当信息更新时，仅需在服务器上进行数据更新，而无需推送同步到销售或者技术支持
* 公众号的入口过于繁琐，以期以群聊和私聊的方式为用户提供更便捷的服务

## 业务：我的业务需求

* 产品信息查询：根据客户提供的产品编码（国际通用产品编码 OR 自身产品编码），查询产品信息（参数？价格？位置？......）
* 产品编码查询：根据客户提供的汽车VIN码（文字 OR 图片），查询车辆信息（品牌？车型？排量？......）及适配产品的产品编码，并进一步查询产品信息
* 未来的其它功能......

## 设计：我要如何实现它？

* 前期手动完成的工作
  * 添加用户为好友并拉入群聊
* 机器人
  * 接收消息并检索关键字
    * 如果是文字消息，在消息中检索汽车VIN码或者产品编码
    * 如果是图片消息，进行OCR识别（通过百度AI的API），尝试提取汽车VIN码
  * 根据关键字查询信息
    * 如果是产品编码，根据产品编码查询产品信息（由于数据量不大，映射关系保存在本地的JSON文件中）
    * 如果是汽车VIN码，根据VIN码查询车辆信息及适配产品的产品编码（通过网络请求接口），然后根据适配产品的产品编码查询产品信息（本地JSON文件）
  * 将查询到的所有车辆信息+产品编码+产品信息发送出去（还可以@用户）

## 代码：目前的成果

### 前期准备

先导入所需的库，初始化日志模块

```js
// 导入TS库
import {Contact, Message, Wechaty} from 'wechaty'
import {MessageType, ScanStatus} from 'wechaty-puppet'
import {PuppetPadplus} from 'wechaty-puppet-padplus'
import QrcodeTerminal from 'qrcode-terminal'
// 导入JS库
import fs  from 'fs';
let log4js = require('log4js');
// 初始化日志库
log4js.configure({
    appenders: {
        production: {
            type: 'dateFile',
            filename: 'log.txt'
        }
    },
    categories: {
        default: { appenders: [ 'production' ], level: 'debug' }
    }
});
let logger = log4js.getLogger();
```

### 从本地的JSON文件中解析产品编码到产品信息的映射

通过同步方式读取文件

```js
// 读取json文件，解析成映射字典
let maps = JSON.parse(fs.readFileSync('20200719.json','utf-8'));
// 文件初步示例
// {
//     "D242": "BFD0001，64mm，北京仓库",
//     "D302": "BFD0002，70mm，上海仓库"
// }
```

### 创建机器人实例

然后根据文档，创建机器人实例。这里的token和name由开发者自定义

```js
// 固定参数
const token = 'yourtoken';
const name  = 'rcbot';
// 创建机器人实例
const puppet = new PuppetPadplus({token, });
// generate xxxx.memory-card.json and save login data for the next login
const bot = new Wechaty({puppet, name, });
```

### 编写登录、登出回调函数

在账号登录、登出的时候可以调用回调函数，我这里仅仅做了日志记录

```js
// 登录消息处理函数
function onlogin(user: Contact){
    logger.info(`用户：${user.name()}登陆成功`);
}
// 登出事件处理函数
function onlogout(user: Contact, reason: string){
    logger.info(`用户：${user.name()}登出成功，登出原因：${reason}`);
}
```

### 核心：接收消息的回调函数

这里是核心部分，即提供业务功能的部分。

在判断收到的消息为文字消息之后，在消息中检索产品编码，如果检索到，则通过映射查询产品信息，发送出去

```js
// 接收消息处理函数
async function onmessage(msg: Message) {
    // 如果是自己发出去的消息，直接返回
    if (msg.self())
        return 0;
    // 如果收到别人发来的消息
    const room = msg.room();
    const from = msg.from();
    const to = msg.to();
    // 记录日志
    if(room){   // 如果是群消息
        const topic = await room.topic();   // 获取群名称
        logger.info(`在群${topic}中，收到由${from?.name()}发来的消息：${msg.text()}`);
    } else if (to){    // 如果不是群消息
        logger.info(`私聊消息，收到由${from?.name()}发来的消息：${msg.text()}`);
    }
    // 判断消息类型
    if(msg.type() === Message.Type.Text){   // 如果是文字消息
        let msgu = msg.text().toUpperCase();
        let keyhit = '';
        for (let key in maps) {
            if (maps.hasOwnProperty(key)) {
                if (msgu.includes(key)) {   // 如果匹配到key
                    // 如果该key以S或者D开头，且包含BF，则代表匹配上，则比较长度
                    if (((key[0] === 'B') || (!msgu.includes(`BF${key}`))) && (keyhit.length < key.length))
                        keyhit = key;
                }
            }
        }
        if(keyhit !== ''){
            await sleep(1000);   // 休眠1S
            logger.info(`回复消息：${maps[keyhit]}`);
            await msg.say(maps[keyhit]);   // 回复消息
        }
    }
}
```

### 注册回调函数

在回调函数写完之后，将回调函数注册到事件

```js
// 注册处理函数
// 扫描消息处理函数直接内置处理，因为存在类型指定问题
bot.on('scan', (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
        QrcodeTerminal.generate(qrcode, {
            small: true
        })
    }
}).on('login', onlogin).on('message', onmessage).on('logout', onlogout).start();

```

## 根据目前的设计，未完成的功能

* 图片OCR识别：接收图片消息，进行OCR识别（通过百度AI的API），尝试提取汽车VIN码
* 根据汽车VIN码查询车辆信息及适配产品的产品编码（通过网络请求接口）

## 计划：未来的需求与开发计划

* 模块化
  * 拆分业务代码为多个模块，方便后期维护
* 代码性能优化：目前的检索算法效率较低，需要进行优化
* 功能
  * 分群分业务：根据不同的群，提供不同的业务、信息或者数据
  * 本地训练模型，进行OCR识别
  * 未来的其它功能......

## 致谢

感谢 [Wechaty](https://wechaty.js.org/) 提供的微信机器人SDK

感谢 [句子互动](https://www.juzibot.com/) 提供的ipad协议版token

> 作者: [jiucl](https://github.com/jiucl/)
> 项目地址：[rcbot](https://github.com/jiucl/rcbot)
