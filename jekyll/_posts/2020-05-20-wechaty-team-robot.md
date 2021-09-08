---
title: "团队小助手"
author: suruozhong
categories: project
tags:
  - padplus
  - productivity
image: /assets/2020/wechaty-team-robot/2020-05-20-wechaty-team-robot0.jpg 
---

之前跟一个律师的朋友聊天了解到，他们很多保全的业务，如果忘记保全，标的大的话损失就严重了，非常需要一个提醒的功能，而这个提醒可以通知团队里的多个同事。如果能以微信的方式通知是最好不过，通过微信和小程序模版消息来做通知的话，无法通知到每一个团队成员。用微信机器人来实现的话是再好不过了。于是在Github找了很多开源的产品，经多方面了解，wechaty是目前市场上最好的机器人
--Wechaty是适用于微信个人的Bot SDK ，可以使用6行 js 创建一个机器人
--具有包括linux，Windows，MacOS和 Docker 在内的跨平台支持，基于Node.js
--让天下没有难开发的机器人
--说干就干，开始了我的微信机器人之旅

## 项目

wechaty-team-robot

### 结构

```js
|-- src/
|---- api/
|------ api.js              #请求的接口
|------ request.js          #request请求
|---- constant/
|------ config.js           #参数配置文件
|---- event/
|------ friendship.js       # 好友添加监听回调
|------ message.js          # 消息监听回调
|------ room.js             # 进入房间监听回调
|------ roomInvitation.js   # 群邀请监听回调
|-- index.js                # 入口文件
|- package.json
```

## 实现

- 方案：
  1. 使用 `Node.js` 开发，使用`wechaty/wechaty-puppet-padplus`等功能库；
  2. 团队成员按格式发送消息，调用接口分析消息，存入数据库，接口返回消息处理结果
  3. 定时轮询接口，获取待发送的消息

### 机器人登录扫码，退出登录，消息处理，好友添加，加入群聊，入群邀请，各种事件回调

```js

bot
  .on('scan', (qrcode, status) => { //扫码登录
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true
      })
    }
  })
  .on('login', (user) =>{
    isLogin = true
    console.log("机器人登录成功",user)
  })
  .on('logout', (user) =>{
    isLogin = false
    clearInterval(sendTimeMsg)
    console.log("机器人退出登录",user)
  })
  .on('message', onMessage(bot)) //消息处理
  .on("friendship", friendship) // 好友添加
  .on("room-join", room) // 加入群聊
  .on("room-invite", roomInvitation) // 入群邀请
  .start()

```

### 接收消息并交给接口处理

```js

// 消息处理
exports.onMessage = bot =>{
    return async function onMessage(msg){
        console.log("收到消息",msg)
        const contact = msg.from() //发送消息的联系人
        const text = msg.text() //消息内容
        const room = msg.room()  //群消息，null则不是
        // 判断消息来自自己，直接return
        if (msg.self()) return;
        // 判断此消息类型是否为文本
        if (msg.type() == Message.Type.Text) {
            if(room==null){
                //调用接口处理消息
                var ret = await api.handle({msg: text,wxId: contact.payload.id,wxName: contact.payload.name,type: 1})//type=1私聊，2群聊
                //回复消息
                await msg.say(ret.data)
            }else{
                //群消息
                //调用接口处理消息
                var ret = await api.handle({msg: text,wxId: room.id,wxName: contact.payload.name,type: 2})
                if(ret.data){
                    //回复消息
                    await room.say(ret.data)
                }
            }
        }else{
            console.log("非文本消息不做处理")
        }
    }
}

```

### 接口列表

```js

module.exports ={
  handle : params => { //消息处理
    return get({
      api: "/taskMsg/handle",
      data: params
    })
  },
  setSend : params => { //将消息置为已发送
    return get({
  api: "/taskMsg/setSend",
  data: params
    })
  },
  list : params => { //未发送消息列表
    return get({
  api: "/taskMsg/list",
  data: params
    })
  }
}
```

### 轮询获取待发送的消息，发送给联系人或者群里@联系人

```javascript

//先用轮询，查询是否有要发的消息
const sendTimeMsg = setInterval(() => {
  if(isLogin){
    taskSendMessage(bot)
  }
}, 60000);


//查询待发送的任务消息
exports.taskSendMessage = async function(bot){
    var ret = await api.list()
    var list = ret.data
    if(list && list.length>0){
        for (let i = 0; i < list.length; i++) {
            const vo = list[i];
            if(vo.type === 1){  //type=1私聊，2群聊
                const contact = await bot.Contact.find({id: vo.wxId})
                if(contact!=null){
                    await contact.say(vo.msg)
                    await api.setSend({id: vo.id,status: 1})  //设置该任务已发送,status=1为已执行
                }else{
                    api.setSend({id: vo.id,status: 3})  
                }
            }else if(vo.type === 2){
                const room = await bot.Room.find({id: vo.wxId})
                if(room!=null){
                    //获取@的成员
                    var names = vo.wxName.split(",")
                    var atList = []
                    for(var y=0; y<names.length; y++){
                        let roomContact = await room.member({name: names[y]})
                        if(roomContact!=null){
                            atList.push(roomContact)
                        }else{
                            //群内昵称查询
                            roomContact = await room.member({roomAlias: names[y]})
                            if(roomContact!=null){
                                atList.push(roomContact)
                            }
                        }
                    }
                    await room.say(vo.msg, ...atList)
                    await api.setSend({id: vo.id,status: 1})  //设置该任务已发送
                }else{
                    api.setSend({id: vo.id,status: 3})  
                }
            }
        }

    }

}

```

## 已实现的功能

- 自动通过好友验证
- 私聊群聊自动回复
  - 回复 `帮助` 查看功能介绍
  - 回复 `小助手` 开启自动回复
  - 回复 `安静点` 关闭自动回复
- 自动聊天
  - 群聊私聊中开启自动回复后，可以和机器人聊天
- 定时获取并发送的待办提醒（私聊或者群聊@多人）
- 中英文互译
- 成语词典
- 每日一句
- 数字计算
- 天气预报
- 空气质量

## 效果图

![1](/assets/2020/wechaty-team-robot/2020-05-20-wechaty-team-robot1.jpg)
![2](/assets/2020/wechaty-team-robot/2020-05-20-wechaty-team-robot2.jpg)
![3](/assets/2020/wechaty-team-robot/2020-05-20-wechaty-team-robot3.jpg)
![4](/assets/2020/wechaty-team-robot/2020-05-20-wechaty-team-robot4.jpg)

## 待实现需求

- 日报收集，定时统计日报，定时@未提交日报的成员。
- 每天早上爬取热点新闻发送
- 等等团队需要的功能待挖掘实现

wechaty-team-robot 还是一个正在开发中的项目, 欢迎留言交流你对它的看法，以及你需要的功能

## 感谢

[Wechaty](https://wechaty.github.io/)开源项目及[JuziBot](https://www.juzibot.com)公司提供的接口和token，为开发者带来极大便利！

> 作者: [suruozhong](https://github.com/suruozhong)
> Code: [Github](https://github.com/suruozhong/wechaty-team-robot)
