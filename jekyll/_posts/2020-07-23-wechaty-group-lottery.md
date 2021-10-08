---
title: "微信群内抽奖机器人(wechaty_lottery)"
author: csjuxyz
categories: project
tags:
  - padplus
  - productivity
  - entertainment
image: /assets/2020/wechaty-lottery/lottery-header.webp
---

## 背景

目前群内抽奖的方法主要有两种:红包最佳手气和第三方抽奖小程序
而这两种方法从形式到结果的通知都不够直观便捷,不适合高频快速的运营
所以有了制作群内抽奖机器人的想法

## 功能

通过关键词触发机器人随机抽取群内一人获奖,已除去发奖人与机器人

## 逻辑

- 通过"抽奖+空格"格式触发抽奖机器人,例如"抽奖 抱枕","抽奖 一等奖"等  
- 机器人被触发后获取当前群内成员数组,并去除机器人和发奖人
- 等概率随机抽取一人,在群内消息通知中奖信息并同时@发奖人和中奖人
- ![截图](/assets/2020/wechaty-lottery/pic01.webp)

## 依赖

- wechaty：wechaty核心库
- wechaty-puppet-padplus：wechaty iPad协议
- qrcode-terminal: 终端输出二维码

## 运行

克隆项目

```shell
git clone https://github.com/csjuXYZ/wechaty_lottery.git
cd wechaty_lottery
```

安装依赖

```shell
npm install
```

启动项目

```shell
npm run serve
```

## 开发

```javascript
import { Message }  from 'wechaty'
    // 配置文件
import config  from './config'
    // 机器人名字
const name = config.name

// 消息监听回调
module.exports = bot => {
        return async function onMessage(msg) {
            // 判断消息来自自己，直接return
            if (msg.self()) return
                // 输出消息简介
                //   console.log("=============================")
                //   console.log(`msg : ${msg}`)
                //   console.log(
                //       `from: ${msg.from() ? msg.from().name() : null}: ${
                //   msg.from() ? msg.from().id : null
                // }`
                //   )
                //   console.log(`to: ${msg.to()}`)
                //   console.log(`text: ${msg.text()}`)
                //   console.log(`isRoom: ${msg.room()}`)
                //   console.log("=============================")

            // 判断此消息类型是否为文本
            if (msg.type() == Message.Type.Text) {
                // 判断消息类型来自群聊
                if (msg.room()) {
                    // 获取群聊
                    const room = await msg.room()

                    // 收到消息，提到自己
                    if (await msg.mentionSelf()) {
                        // 获取提到自己的名字
                        // let self = await msg.to()
                        // self = "@" + self.name()
                        // 获取消息内容，拿到整个消息文本，去掉 @+名字
                        // let text = msg.text().replace(self, "")
                        return
                    } else {
                        // 收到消息，是关键字 “抽奖”
                        if (await lottery(msg)) return
                    }


                } else {
                    //私聊消息
                }
            } else {
                console.log("消息不是文本！")
            }
        }
    }
    /**
     * @description 回复信息是关键字 “抽奖”
     * @param {Object} msg 消息对象
     * @return {Promise} true-是 false-不是
     */
async function lottery(msg) {
    //判断文字消息是否以抽奖+空格开头
    if (msg.text().indexOf("抽奖 ") == 0) {
        const room = await msg.room()
        let member = await room.memberAll()
            // 获取群内成员数组,去除机器人以及发奖人
        member = member.filter(v => (!v.self()) && (v != msg.from()))

        // 随机从成员数组中抽取一个
        let target = member[Math.floor(Math.random() * member.length)]

        room.say(msg.text() + "\n---\n" + "\n中奖的人是:" + ((await room.alias(target)) || target.name()), msg.from(), target)

        return true
    }
    return false
}
```

## 致谢

感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token

> Author: [csjuXYZ](https://github.com/csjuXYZ)
> Code: [wechaty_lottery](https://github.com/csjuXYZ/wechaty_lottery)
