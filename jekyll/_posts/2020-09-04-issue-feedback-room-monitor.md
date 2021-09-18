---
title: 实现微信产品问题反馈群实时监控与问题自动录入
author: tomallv
categories: tutorial
tags:
  - issue
  - padplus
image: /assets/2020/issue-feedback-room-monitor/way.jpg
---

因为我们的用户都喜欢通过微信群讨论的方式进行产品问题反馈，这无疑给日常的线上问题处理的效率带来极大的影响。曾经尝试对用户习惯进行线上填写方式的引导，但最终以失败告终。无奈下看看弄一个微信群监控机器人是否可行。

在之前公司我曾经用python通过itchat弄过一个群播报BI数据的机器人，但因为itcaht采用的是微信web协议，微信监控特别严，很多号都不能使用，即使登录上去了还会经常莫名掉线，极不稳定。因此这回肯定不能再通过web协议的方式来弄了。于是带着一点点期盼发现了Wechaty这个支持微信ipad协议的SDK。

## Wechaty官方定义：

> Wechaty是一个开源的的个人号微信机器人接口，使用Typescript构建的Node.js应用。支持多种微信接入方案，包括网页，ipad，ios，windows，android 等。同时支持 Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。

这里必须要重点提一下，Token 是 Wechaty 开放源代码项目中所设计和支持的一种认证技术，是句子互动公司基于 Wechaty 的 Puppet 实现插件对云服务 API 的授权账号。这也就意味着你在使用Wechaty开发基于ipad协议的机器人之前必须要先拿到可用的token。你可以从Wechaty社区申请到一个15天有效的试用Token，过了试用期后可以选择付费购买（200RMB/月）或者按照如下介绍尝试获取长期免费的Token：[Wechaty Token 申请及使用文档和常见问题](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)  

Wechaty目前已经支持了`Java`、`Python`、`Go`、`PHP`等多种语言，但是该SDK原生是用`TypeScript`编写的，并且github上大量的demo和开源项目都是用`node.js`写的，再加上Wechaty宣称可以通过6行代码就可以实现一个机器人，于是最终决定用之前一点稚嫩的`JavaScript`前端开发经验拥抱`node.js`吧！

### 参考资料：

* **官方** [API文档](https://wechaty.js.org/docs/)

* **官方demo：**[wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started)  

* **wechaty-puppet-padplus** [示例](https://github.com/wechaty/wechaty-puppet-padplus) 。

* **Wechaty社区** [开源项目](https://wechaty.js.org/blog/)

通过短时间的学习和尝试后，发现基本微信机器人常用的功能实现几乎都能从这些开源的项目中直接拿到，然后再结合自己的需求再进行改装就可以了，确实开发起来挺方便的。

### 开发之前，首先要明确一下此次的功能需求：

* **自动聊天**：群聊中通过 `@[机器人]xxx`,  机器人回复问题反馈模版信息  （已完成）

* **加入群聊自动欢迎**：当新的小伙伴加入群聊后自动 `@[新的小伙伴]` 发一个文字欢迎  （已完成）

* **推送机器人登陆二维码到企业微信**：机器人掉线后，自动将二维码信息推送给指定企业微信群（已完成）

* **监控群聊信息**：实时将聊天记录入库  （已完成）

* **自动识别问题反馈信息**：自动识别判断群聊中问题反馈类信息，并收纳入问题库  （开发中）

* **群播报功**：每天下班前播报问题收纳和未关闭问题情况  （未开始）

项目github地址：  [https://github.com/tomallv/wechat-group-chat-monitoring-robot](https://github.com/tomallv/wechat-group-chat-monitoring-robot)

### 一、项目结构

```shell
|-- src/  
|---- index.js                   # 入口文件  
|---- config.js                  # 配置文件  
|---- onScan.js                  # 机器人需要扫描二维码时监听回调  
|---- onRoomJoin.js              # 进入房间监听回调  
|---- onMessage.js               # 消息监听回调  
|---- onFriendShip.js            # 好友添加监听回调  
|---- onDatabaseOperation.js     # MySQL数据库操作回调  
|---- onEnterpriseWechatBot.js   # 企业微信群消息发送回调  
|---- onFileIO.js                # 文件读取回调  
|-- package.json
```

### 二、核心包：

* **Wechaty核心包**：  `npm install --save wechaty`

* **padplus协议包**：  `npm install --save wechaty-puppet-padplus`

* **生成二维码**：  `npm install --save qrcode-terminal`

### 三、接下来介绍几个核心代码文件

**1、配置文件**（ `src/config.js`）：

```javascript
module.exports = {
// puppet_padplus Token
token: "xxxxxxxxxx",

// 机器人名字
name: "xxxxxxxxxx",

// 房间/群聊
room: {
     // 加入房间回复
     roomJoinReply: `\n您好，欢迎您的加入，请自觉遵守群规则，文明交流！ 😊\n\n如您需要反馈问题，请按照如下模版进行拷贝填写，谢谢：\n问题反馈\n[1-问题描述]:\n[2-截图信息]:\n[3-账号信息]: \n[4-操作系统]:\n[5-浏览器]:\n[6-屏幕分辨率]:\n[7-移动设备型号(APP、小程序相关问题)]:\n[8-App、小程序版本信息(APP、小程序相关问题)]:\n[9-模块信息]: A-官网前台、B-小程序、C-APP、D-句芒后台、D-学习中心、F-CRM、G-H5网页、H-老后台、I-其他`
},

// 私人
personal: {
     // 好友验证自动通过关键字
     addFriendKeywords: ["xxxxxx", "xxxxxxx"],

     // 是否开启加群
     addRoom: false
},

// mysql数据库配置信息
mysql_db: {
    host: 'xxx.xxx.xxx.xxxx',
    port: '3306',
    user: 'xxxxxxxxxx',
    password: 'xxxxxxx',
    database: 'xxxxxxx',
    charset : 'xxxxxxx'
},

// 要推送机器人二维码登陆信息的切页微信群webhook_key
webhook_key: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",

// 机器人登陆二维码图片文件名称
qrcode_png: "xxxxxxx.png"
}

```

**2、入口文件（ `src/index.js`）：**

```javascript
import { Wechaty }  from 'wechaty' // Wechaty核心包  
import { PuppetPadplus }  from 'wechaty-puppet-padplus' // padplus协议包  
import config  from './config' // 配置文件

//初始化bot
const bot = new Wechaty({  
 puppet: new PuppetPadplus({  
 token: config.token  
 }),  
 name: config.name  
})

//调用，监听，启动
import onScan  from './onScan'  
import onRoomJoin  from './onRoomJoin'  
import onMessage  from './onMessage'  
import onFriendShip  from './onFriendShip'  
bot  
 .on("scan", onScan) // 机器人需要扫描二维码时监听  
 .on("room-join", onRoomJoin) // 加入房间监听  
 .on("message", onMessage(bot)) // 消息监听  
 .on("friendship", onFriendShip) // 好友添加监听  
 .start()
```

**3、机器人掉线监听回调（`src/onScan.js`）**

当机器人掉线的时候，很多开源项目都是将二维码生成到程序log中，供扫描使用。但是一般情况当机器人放到服务器的时候，扫描二维码就会变得非常不方便，因此这里结合企业微信群机器人API实现了一旦掉线就把登陆二维码推送到企业微信群中，这样随时随地都可以进行扫描登陆操作了。同时也考虑基本上机器人都是后半夜会发生掉线情况，因此这里设置了有效推送时间段，以防止干扰正常休息。

```javascript
import Qrterminal  from 'qrcode-terminal';
import qrimage  from 'qr-image'
import fs  from 'fs'
import wechat_bot  from './onEnterpriseWechatBot' // 企业微信机器人群发
import config  from './config'
import path  from 'path';
const defpath=path.join(__dirname,'../');
const qrcode_png_path = path.join(defpath,config.qrcode_png)
const weboot_key = config.webhook_key

module.exports = function onScan(qrcode, status) {
    Qrterminal.generate(qrcode, { small: true })
    const myDate = new Date()
    const current_hour = myDate.getHours();
    console.log("当前小时数： " + current_hour);
    console.log("状态码： " + status);

    // 设置早上8点到晚上24点之间才推送掉线二维码
    if (current_hour >= 8 && current_hour <=23) {
          let link = ""
          if (status == 2){
                console.log("机器人已经下线，请重新扫描二维码登陆: " + qrcode);
                const temp_qrcode = qrimage.image(qrcode, {size :6, margin: 4}) // 生成机器人登陆二维码图片
                temp_qrcode.pipe(require('fs').createWriteStream(qrcode_png_path).on('finish', function() {console.log('write finished')}))
                link = '机器人掉线了，请点击如下链接查看登陆二维码:\n https://wechaty.js.org/qrcode/'+ qrcode
          } else if (status == 3) {
                link = "已扫码，请在手机端确认登陆..."
          } else if (status == 4) {
                link = "已确认,登陆成功！"
          } else if (status == 5) {
                link = "二维码已过期！"
          } else {
               link = '机器人掉线了，请点击如下链接查看登陆二维码:\n https://wechaty.js.org/qrcode/'+ qrcode
          }
          wechat_bot.send_text(link,weboot_key)
}
}
```

功能实现截图：

 ![1](/assets/2020/issue-feedback-room-monitor/qrcode-push.png)

**4、消息监听回调（`src/onMessage.js`）**

主要实现对群消息进行监听，将监听到聊天消息写入mysql中。

```javascript
import { Message }  from 'wechaty'
import config  from './config' // 配置文件
const name = config.name // 机器人名字
import mysqldb  from './onDatabaseOperation' // 连接MySQL数据库

// 消息监听回调
module.exports = bot => {
         return async function onMessage(msg) {
             // 判断消息来自自己，直接return
             if (msg.self()) return
             console.log("=============================")
             console.log(`msg : ${msg}`)
             console.log(`from: ${msg.from() ? msg.from().name() : null}: ${msg.from() ? msg.from().id : null} `)
             console.log(`to: ${msg.to()}`)
             console.log(`send_time: ${msg.date()}`)
             console.log(`text: ${msg.text()} `)
             console.log(`isRoom: ${msg.room()} : ${msg.room() ? msg.room().id : null}`)
             console.log("=============================")

             // 判断此消息类型是否为群消息
             if (msg.room()) {
                  const room = await msg.room() // 获取群聊
                  const room_name = `${room} ` // 获取群名称
                  console.log(`群名称：` + room_name.substring(5,room_name.length-2))
                  const room_id = room.id // 获取群ID
                  console.log(`群id ：` + room_id)
                  let sender_alias = await room.alias(msg.from()) //获取发信人群昵称
                  console.log(`发信人的群昵称：` + sender_alias)
             if (sender_alias == null){
                  sender_alias = ""
             }
             console.log(`发信人的群昵称：` + sender_alias)
             const sender_name = msg.from().name() //获取发信人微信名称
             console.log(`发信人的微信名称：` + sender_name)
             const msg_date = msg.date() // 获取消息发送时间
             console.log(`消息发送时间: ${msg.date()}`)
             const msg_type = msg.type() // 获取消息类型
             console.log(`消息类型：` + msg_type)
             var msg_content = "" // 获取消息内容

             if (msg_type == Message.Type.Text || msg_type == Message.Type.Url){
                  msg_content = msg.text()
             } else if (msg_type == Message.Type.Attachment){
                  msg_content = "消息内容类型为附件"
             } else if (msg_type == Message.Type.Audio){
                  msg_content = "消息内容类型为音频"
             } else if (msg_type == Message.Type.Contact){
                  msg_content = "消息内容类型为联系人"
             } else if (msg_type == Message.Type.Emoticon){
                  msg_content = "消息内容类型为表情包"
             } else if (msg_type == Message.Type.Image){
                  msg_content = "消息内容类型为图片"
             } else if (msg_type == Message.Type.Video){
                  msg_content = "消息内容类型为视频"
             } else {
                  msg_content = "消息内容类型为未知"
             }
             console.log(`消息内容：` + msg_content)

             // 消息入库sql
             var sql = "insert into wechat_room_chat_record(id,room_name,room_id,sender_name,sender_alias,msg_content,msg_type,issue_flag,msg_date) values(?,?,?,?,?,?,?,?,?)"

             // 入库sql消息变量
             var sqlParams = [process.hrtime.bigint(),room_name.substring(5,room_name.length-2),room_id,sender_name,sender_alias,msg_content,msg_type,0,msg_date]
             mysqldb.InsertData(sql,sqlParams)
             console.log(`入库时间戳：` + process.hrtime.bigint())

             // 收到消息，提到自己
             if (await msg.mentionSelf()) {
                   // 获取提到自己的名字
                   let self = await msg.to()
                   self_format = "@" + self.name()
                   const self_name = self.name() //获取机器人自己的微信名称
                   console.log("自己的微信名称：" + self_name)
                   const self_alias = await room.alias(msg.to()) //获取机器人自己的群昵称
                   console.log("自己的群昵称：" + self_alias)
                   // 获取消息内容，拿到整个消息文本，去掉 @+名字
                   let sendText = msg.text().replace(self_format, "").substring(1,)
                   // 规定回复问题反馈模版
                   var report_template = "如您需要反馈问题，请按照如下模版进行拷贝填写，谢谢：\n问题反馈\n[1-问题描述]:\n[2-截图信息]:\n[3-账号信息]: \n[4-操作系统]:\n[5-浏览器]:\n[6-屏幕分辨率]:\n[7-移动设备型号(APP、小程序相关问题)]:\n[8-App、小程序版本信息(APP、小程序相关问题)]:\n[9-模块信息]: A-官网前台、B-小程序、C-APP、D-句芒后台、D-学习中心、F-CRM、G-H5网页、H-老后台、I-其他"
                   console.log("自动回复内容：" + report_template)

                   // 返回消息，并@来自人
                   var Datetemp1= new Date();
                   room.say(report_template, msg.from())
                   const sql = "insert into wechat_room_chat_record(id,room_name,room_id,sender_name,sender_alias,msg_content,msg_type,issue_flag,msg_date) values(?,?,?,?,?,?,?,?,?)"
                   const sqlParams = [process.hrtime.bigint(),room_name.substring(5,room_name.length-2), room_id,self_name,self_alias,report_template,Message.Type.Text,0,Datetemp1]
                   mysqldb.InsertData(sql,sqlParams)
                   return
             }
         } else{
         // 非群聊不做任何处理
        return
}}}

```

当在群里@机器人的时候，机器人会自动回复问题反馈的模版信息：  

![2](/assets/2020/issue-feedback-room-monitor/feedback-template.jpg)  

这里由于时间问题，做的相对简单。如果时间充分完全可以做一个微服务，支撑机器人更好在群里与他人互动。

消息入库示例：

![3](/assets/2020/issue-feedback-room-monitor/chat-insert-into-db.jpg)

这块目前只是实现了消息入库，但是对聊天中的图片、视频和音频文件的保存的功能部分还没有整合进去，相关部分还处于本地调试过程中。后续会在github上更新此部分代码。

对于自动识别判断聊天信息是否为问题反馈点的功能部分。目前使用Python利用Jieba的分词方案结合人工后期统计的热词字典，已经达到识别正确率>90%，误识别率<10%的效果。这块也正处于本地测试中，稍后会把这块功能移植到node.js，并集成到该项目中。

至于最后两个环节，一个是将问题反馈的录入问题系统以及每天机器人群内播报当天问题情况的功能，也会在稍后进行开发。并集成到该项目中。
