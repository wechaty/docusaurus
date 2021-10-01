---
title: "Nio bot蔚来车主群服务机器人"
author: leons828
categories: project
tags:
  - padplus
  - automotive
image: /assets/2020/nio-bot/bio-photo.webp
---

## 需求

一个车主群成员过多, 为有效识别成员, 需要成员以固定格式修改群昵称. 若每个人都需要管理员依次进行提醒并检查, 将会产生大量的重复性工作.
因此, 需要一个群成员管理机器人来替代人工. 在成员进群时发出欢迎词, 提示修改昵称, 并每天定时检查是否仍存在不符合格式的昵称.
后期, 会针对经常提出的问题, 使用自动问答机器人进行自动回答.

## Wechaty / wxpy / itchat

作者在调研微信机器人方案是, 最先看到的是wxpy及itchat. 在做出beta版本后, 尝试使用新注册账号登录却屡屡失败. 后来才知道原来Web微信已经不对新注册账号开放.
而且, web微信功能受限, 例如:不能@群成员.
再次调研后, 发现了wechaty & wechaty-puppet-padplus. 此方法基于ipad协议, 突破了web微信的限制, 且wechaty提供了更加丰富的功能接口, 大大简化了开发者的开发流程.

## 架构

- 目标：
  1. 新成员进群欢迎辞
  2. 每日10:00定时校验群成员昵称, 并@成员进行修改

- 方案：
  1. 使用`wechaty/wechaty-puppet-padplus`等功能库；
  2. 使用`node-schedule`进行定时任务规划

## 实现

### 接收消息并交给处理

```javascript

// 进入房间监听回调 room-群聊 inviteeList-受邀者名单 inviter-邀请者
module.exports = async function onRoomJoin(room, inviteeList, inviter) {
  // 判断配置项群组id数组中是否存在该群聊id
  if (config.roomList.indexOf(room.id) >= 0) {
    inviteeList.map(c => {
      // 发送消息并@
      room.say(generateWelcome(c.name()), c)
    })
  }
}

function generateWelcome (username) {
    // 加入房间回复
    return  '欢迎加入京蔚軍大家庭!\n\n' +
            '①请复制并修改群昵称:\n\n' +
            username + '-ES6-京ADXXXXX\n\n' +
            '(无牌请先使用\"京ADXXXXX\")\n\n' +
            '②和大家打个招呼\n' +
            '③正式成为京蔚軍的一员'
}

```

### 调用接口处理获取数据

```javascript

module.exports = async function onLogin(bot) {
  let roomList = []
  // 选择群, 进行群成员名称筛选
  for (let room of await bot.Room.findAll()) {
    if (config.roomList.indexOf(room.id) >= 0) {
      roomList.push(room)
    }
  }

  // 每天早上10点进行提醒
  schedule.scheduleJob('59 9 * * *', function() {
    let illegalMembers = []
    let illegalNames = []
    for (let room of roomList) {
      room.memberAll().then(members=>{
        for (let member of members) {
          room.alias(member).then((nickname) => {
            if (!nickname || (nickname.search(config.pattern) < 0 && config.whitelist.indexOf(nickname) < 0)) {  
              illegalMembers.push(member)
              illegalNames.push(nickname ? nickname : member.name())
            }
          }).catch((err) => {console.log(err)})
        }
      })
      setTimeout(function() {
        room.say(generateAdvice(), ...illegalMembers)
        console.log(illegalNames)
      }, 60 * 1000)
    }
  })
}

function generateAdvice () {
  // 加入房间回复
  return  '\n您的昵称不符合规范, 请参考:\n\n' +
          '蔚来APP昵称-ES6-京ADXXXXX\n\n' +
          '(未上牌牌请先使用\"京ADXXXXX\")\n'
}

```

## 实际效果

![Welcome](/assets/2020/nio-bot/welcome.jpeg)

> 作者: [Leons828](https://github.com/Leons828) web developer
> Code: [Github](https://github.com/Leons828/nio-bot)
