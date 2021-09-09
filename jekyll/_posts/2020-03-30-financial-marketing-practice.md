---
title: "使用Wechaty助力金融营销实践"
author: crossly
categories: tutorial
tags:
  - financial
image: /assets/2020/financial-marketing/2020-03-30-wechaty-bond-bot.png
---

首先，先为我拙劣的代码道个歉。临时野生程序员JS为现学，各种不规范请见谅。

作为一个从互联网行业转型的证券从业者营销人员，在传统的行业中作业时，会有一些需求过于人工化。那么我今天将我使用Wechaty助力金融经纪业务的实践记录并分享给大家。

## 我在做一件自动化营销的事情

在做经纪业务营销过程中，有一项最基本的工作内容：开户。也就是互联网中常说的获取新用户。我在工作的过程中，考虑过很多拉新的思路，其中有一个叫可转债套利拉新。
简而言之就是通过可转债这项金融工具进行套利，得到实打实的利益。有利益可循，客户才有开户的动力。在可转债套利这件事情中，我需要做这么一些事情：

- 找到有意向的客户，添加好友
- 与客户介绍可转债套利的玩法
- 营销开户，核心为开户二维码和开户注意点
- 可转债打新信息的推送
- 可转债中签的缴款通知
- 可转债可卖出的通知

每天都要花费不少的时间做这一系列事情，如果能用机器实现自动化，那么我可以节省非常多的时间，并且我可以把营销的主被动关系尽可能转换掉。加上现有的绝大部分客户都落地在微信号中，那么第一个思路就是：如何做一个微信个人号的机器人。经过多方搜索，终于找到了Wechaty这个个人号框架。
> 为什么用微信个人号呢？用户沉淀，二次营销的发展。

## 工作事项和自动化的业务调整

我计划营造一个新的营销环境和场景去驱动这件事，期望将自动化营销的各个节点串联起来，形成小生态。那么与需求对应的事情一件件来：

1. 将寻找客户添加好友转变为被加好友
2. 套利玩法形成清晰的文章和图
3. 适当的推送开户二维码或者开户链接
4. 汇聚有意向的客户到交流群
5. 可转债的打新、缴款、上市卖出以及明日打新统一整合进行播报

期望业务链：
种子客户->交流群播报可转债信息->适当营销文字->添加bot为好友->应答添加及对话->拉群、开户等服务->群播报

## 机器人计划实现的功能

- [x] 好友添加自动应答
- [x] 加群自动应答
- [x] 拉群自动应答
- [ ] 消息响应
  - [x] 被动可转债播报
  - [x] 被动开户应答
  - [x] 被动大宗预留
  - [ ] 被动联系我
  - [ ] 点对点数据推送订阅
- [ ] 主动推送
  - [x] 可转债播报
- [x] 群数据储存
- [x] 系统配置
- [x] 消息触发的白名单
- [ ] 群管理

## 代码实现的思路

首先根据example中的样例，我讲bot的事件监听分发到了不同的监听器中。

```js
// mybot.js

bot
    .on('scan', './listeners/on-scan')
    .on('message', './listeners/on-message')
    .on('onLogin', './listeners/on-login')
    .on('friendship', './listeners/on-friendship')
    .on('room-join', './listeners/on-room-join')
    .on('room-topic', './listeners/on-room-topic')
    .on('room-invite', './listeners/on-room-invite')
    .on('room-leave', './listeners/on-room-leave')
    .on('ready', './listeners/on-ready')
    .start()
```

其中值得说明的是ready这个事件，借助这个事件，我们可以构造定时任务。那么先看看定时任务是怎么做的。
这里借助了cron这个库实现了定时任务。其中推送的目的地有一个json维护者，我可以手动添加。

```js
// ./listeners/on-ready

/*
BOT启动时，加载定时任务。每天早上主动往管理的群推送打新内容。
 */
async function onReady(){
    try {
        const CronJob = require('cron').CronJob;
        const isHoliday = require("../functions/holiday")
        const moment = require('moment');
        const bot = this
        const job = new CronJob('15 9 * * *', async function() {
        // const job = new CronJob('*/1 * * * *', async function() {
          //  if (isHoliday(moment().format("YYYY-MM-DD"))){
            //    return
           // }
            const config = require('../config')
            console.log(new Date().toLocaleDateString()+'Tick Tick Tick');
            for (x in config.PushGroups){
                const room = await bot.Room.find({topic: config.PushGroups[x]})
                console.log("room name is " + config.DebtGroups[x] + ", raw data is " + room)
                await room.say(await require('../functions/stocks-debt').debts()) //推送打新资讯
                await room.say(config.Message.Tick)//推送打新提醒
            }
        }, null, true, 'Asia/Shanghai');
        await job.start();
    }catch (e) {
        console.log(e)
    }

}
module.exports = onReady
```

Wechaty的事件监听分离的非常清晰，通过message事件的监听，可以对接收到的消息进行处理，实现我想要实现的被动消息触发。
为了尽可能不复杂的做好数据存储，我选择了lowdb这款json适配器，相对容易的存储数据到本地json文件中。

```js
...
   if (room){
        if (await msg.mentionSelf()) {
            console.info('this message were mentioned me! [You were mentioned] tip ([有人@我]的提示)')
            const topic = await room.topic()
            console.info(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)
            switch (text.split(/\s+/)[1]) {
                case '可转债':
                case '打新':
                    console.debug("Request from : " + contact.name() + "; Check Mod Permission result："+config.Mod.indexOf(contact.name())+"； Check Admin Permission result: "+ config.Admin.indexOf(contact.name()))
                    if (config.Mod.indexOf(contact.name()) || config.Admin.indexOf(contact.name())){
                        // console.debug(await stockDebt.debts())
                        /*
                            await room.say("今日休息，不开盘。")
                            return
                        }*/
                        await room.say(await stockDebt.debts())
                    }
                    break
                case '开户':
                    await room.say("请长按识别以下二维码开户", contact)
                    const fileBox = FileBox.fromUrl('URL EXAMPLE')
                    await room.say(fileBox)
                    break
                default:
                    break
            }
        }
    }
}
...
```

为了能对将要管理的几个人的人数进行监听，我选择在room-join事件中做用户信息的同步和存储。

```js
//on-room-join.js
async function onRoomJoin(room, inviteeList, inviter){
    try {
        const nameList = inviteeList.map(c => c.name()).join(',')
        const topic = await room.topic()
        const memberList = await room.memberAll()
        console.log(`Room ${topic} got new member ${nameList}, invited by ${inviter}`)
        // room.say("T:欢迎小伙伴 "+nameList+ " 加入我们！")
        await require('../functions/db-operation').syncGroupMembers(topic, memberList)
    } catch (e) {
        console.error(e)
    }
}


module.exports = onRoomJoin

//db-operations.js
module.exports = {
    syncGroupMembers: async function(topic, members) {
        try {
            const low = require('lowdb')
            const FileSync = require('lowdb/adapters/FileSync')
            const adapter = new FileSync('./db/db.json')
            const db = low(adapter)
            if (db.get('groups')
                .find({ name: topic })
                .value()){
                db.get('servers')
                    .find({ name: topic })
                    .assign({ members: members})
                    .write()
            }else{
                db.get('groups')
                    .push({ name: topic, members: members})
                    .write()
            }
            return await db.get('groups')
                .find({ name: topic })
                .value()
        }catch (e) {
            console.error(e)
        }
    },
    getGroupMember: async function(topic) {
        try {
            const low = require('lowdb')
            const FileSync = require('lowdb/adapters/FileSync')
            const adapter = new FileSync('./db/db.json')
            const db = low(adapter)
            const data =  db.get('groups')
                .find({ name: topic })
                .value()
            console.debug("Member list as follow : "+data+", Member numbers is : " + data.members.length)
            if (data.members.length <=500){
                return true
            }else{
                return false
            }
        }
        catch (e) {
            console.error(e)
        }
    }
}
```

通过这几个核心模块的完成，第一版要搭建的核心骨架和功能就完成了，我们来测试看看。

## 运行效果

| 我 | 机器人 |
|:--|:--|
| hi |  |
|  | 您好，我尚在学习中，可做的事情有限。 |
|  | 那么，还是请跟随我来吧。 |
|  | - 发送[可转债]了解转债信息。- 发送[可转债群]加入转债交流群- 发送[开户]一键开户，高效。- 发送[大宗交易]勾兑业务。 |
| 可转债 |  |
|  | 🍁可转债小助手给您带来的信息如下： \n 2020-03-30日申购清单如下：  \n 无 \n 2020-03-30日中签公布清单如下，请及时检查并缴款：  \n 同德转债 128103 \n 计划发行量：1.44亿 \n 申购代码：072360 \n 配售代码：082360 \n 股票名称：同德化工 \n 股票代码：002360 \n 中签公布日：2020-03-30 \n 转股价格：5.330 \n 上市日期：未定 \n 2020-03-30日可以卖掉这些债啦，请遵守交易原则进行卖出：  \n 无 \n 明日申购清单如下：  \n 华体转债 113574 \n 计划发行量：2.09亿 \n 申购代码：754679 \n 配售代码：753679 \n 股票名称：华体科技 \n 股票代码：603679 \n 中签公布日：2020-04-02 \n 转股价格：47.720 \n 上市日期：未定 \n  |

## 后续计划和致谢

首先，感谢开源项目[Wechaty](https://github.com/wechaty/wechaty)团队以及其提供的开发者计划，让我有机会能实现自己的想法。其次需要感谢同花顺和东方财富，你们提供的金融数据至关重要。[项目代码在这儿](https://github.com/lemonsX/maple-financial-assistant)

目前的机器人还只能做一些简单的事情，后续会根据业务的需求增加更多的功能上去。目标是让机器人为我打工，以及在传统金融里面实现微创新。

对了，如果您想要体验我的机器人，或者对可转债套利有兴趣。您都可以扫描我的机器人进行体验。

![Maple's financial bot](/assets/2020/financial-marketing/2020-03-30-wechat-bot-demo.jpg)

> 作者: lemonsx(柠檬x)，证券从业者，前平台产品经理
