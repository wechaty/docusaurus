---
title: "使用WeChaty搭建一个可以用一个微信控制另一个微信的机器人"
author: gan-lang
categories: article
tags:
  - study
  - wechat
  - message-forward
  - puppet-donut
image: /assets/2021/11-a-wechat-message-forward-robot/cover.webp
---

## 构建一个微信转发机器人

[wechat-agent](https://github.com/hcfw007/wechat-agent)

## 前言

随着智能手机的普及，越来越多的人开始试图将工作和家庭分开，例如，有两个手机号码，工作使用一个，生活使用一个。与此同时，也有人拥有多个微信。许多系统因此贴心的推出了应用多开的功能。然而，并非每个人的手机都支持这一功能，而且考虑到手机号与微信号的高度绑定，如果可能，还是分开比较安全。因此，对于这一人群，一个微信转发机器人就显得很实用了。

## 基本功能

由于Wechaty提供的强大功能，使得写一个机器人变得十分简单。简单的思考就可以做出基础设计：当触发message事件时，将message转发给指定的contact即可。当然，由于自己发出的内容也会触发message事件，因此要对```message.talker()```进行检查。同时由于群聊的消息过于频繁，因此要对群聊的内容进行过滤。

```typescript
  if (!talker.self()) { // somehow talker === bot.userSelf() does not work for this puppet
    if (talker.id == g.commander.id && !room) { // this can be decided with direct object comparison, but to unify all contact deciding process, I use id here too
      await processCommand(g, message)
      return
    }
    g.stat.messageReceived ++
    if (room && !g.roomNameList.includes(await room.topic())) {
      log.info(PRE, `message ${message.id} discarded as it's from a room not in allowed list`)
      return
    }
    log.info(PRE, `forward message ${ message.id } to ${ target.name() }`)
    g.stat.messageForwarded ++
    await target.say(`${ talker.name() } ${ room ? 'in room ' + await room.topic() : '' } said:`)
    // await message.forward(target)
    await target.say(message.text())
  }
```

由于我使用的puppet（donut）并未支持forward方法，因此目前使用了不优雅也有问题的say方法。以后会对这一点进行改进，根据不同的message类型来进行转发。

## 发送消息

除了基本的转发功能之外，我还希望他进行另一个方向的转发，不仅将托管微信的内容转发给我，还可以主动对托管微信的好友、群进行发送。这也不难实现，在发现```message.talker()```为指定的contact时，就根据内容发送内容即可。

```typescript
  if (!targetContactStr && !targetRoomStr) {
    log.info(PRE, `no target contact or room priveded`)
    await g.commander.say('no target contact or room priveded')
    return
  }

  if (!content) {
    log.info(PRE, `no content priveded`)
    await g.commander.say('no content priveded')
    return
  }

  let target: Contact | Room = undefined
  let infoStr = `saying ${ content } `

  if (targetContactStr) {
    target = await bot.Contact.find({ name: targetContactStr })
    if (!target) {
      log.info(PRE, `cannot find contact matching name ${ targetContactStr }`)
      await g.commander.say(`cannot find contact matching name ${ targetContactStr }`)
      return
    }
    infoStr += `to contact ${ target.name() }`
  } else {
    target = await bot.Room.find({ topic: targetRoomStr })
    if (!target) {
      log.info(PRE, `cannot find room matching topic ${ targetContactStr }`)
      await g.commander.say(`cannot find contact matching name ${ targetContactStr }`)
      return
    }
    infoStr += `to contact ${ await target.topic() }`
  }
  log.info(PRE, infoStr)
  g.stat.messageSend ++
  await target.say(content)
```

## 其他指令

在加入主动加入消息的功能之后，为了使用方便，我又为其添加了一些其他辅助功能。例如：群消息白名单、数据统计、使用帮助、联系人列表、修改群白名单等。这些功能都可以通过指定微信对托管微信发送特定的命令进行触发。

## 使用方法

简单使用可以直接进行```npm install```和```npm start```。在clone项目后需要进行以下个人配置：

1. 新建.env文件并配置DONUT_TOKEN为你所使用的service token
2. 修改config/basic.config.ts，将targetContactName改为你希望转发的目标微信名，将commanderContactName改为你希望的指令微信名，将allowedRooms改为微信群白名单数组。

## 未来期望

就我个人来说，为了我目个人的使用方便，计划中增加的功能包括：

1. 支持更多种类消息类型的转发，尤其是图片、链接。
2. 支持设置语境。例如设置context为某微信名，则接下来所有的发送不视为指令，而是直接转发给该微信，知道输入某特定安全词进行退出。
3. 对公众号的各种特殊消息进行更好的适配
4. 将config中的一些基础设置转移到环境变量，使得docker使用更为方便，不需要进去改文件

## 结语

感谢观看。如果觉得有用，请star这个小项目。如果有什么需求或者bug，请给我发issue。请各位大佬不吝赐教。
