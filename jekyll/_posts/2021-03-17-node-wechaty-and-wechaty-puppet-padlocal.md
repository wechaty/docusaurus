---
title: Wechaty+微信小程序实现群内活动报名
author: atorber
categories: article
tags:
  - node
  - padlocal
image: /assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/grouupmaster.png
---

超哥之前开发了一个叫做「群组大师」的小程序，听名字就知道，是用来管理群组的，管理群组的什么呢？

最初的想法是管理群组活动，超哥是羽毛球爱好者，经常出入京城各个羽毛球约球群，群内人肉接龙报名的传统让人抓狂，所以开发了一个小程序来发布活动和报名。

然鹅，现实是残酷的，培养球友的习惯并不容易，so，小程序基本没人使用...

- 峰回路转

突然就在最近，超哥又混进一个羽毛球群，竟然在使用微信机器人进行报名，并且用起来确实比小程序要爽，于是乎萌生了「机器人+小程序」的想法

## 思路和实现

### 流程

- 基于Wechaty制作微信机器人，获取群内实时消息
- 将消息转发给「群组大师」后台服务接口
- 后台服务根据消息是否命中关键字，返回活动和报名信息
- 机器人程序将返回的信息发送到群

### 指令设置

帮助——获取指令列表
活动——查询活动详情
报名——报名活动
取消——取消活动报名

## 实现

- 基于Puppet Service: PadLocal实现，详细介绍参见 <https://wechaty.js.org/docs/puppet-services/padlocal>
- 参考PadLocal官方demo示例 <https://github.com/padlocal/wechaty-puppet-padlocal-demo>
- 修改demo中的main.ts文件，编写自己的业务逻辑

## 效果图

- 打开「群组大师」，找到群列表

![bot_step1.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step1.jpeg)

- 进入群主页

![bot_step2.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step2.jpeg)

- 发布活动

![bot_step3.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step3.jpeg)

- 提交并发布

![bot_step4.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step4.jpeg)

- 发布成功进入活动详情

![bot_step5.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step5.jpeg)

- 在对应微信群内使用指令进行活动报名，首次使用可发送 帮助 获取全部指令列表

![bot_step6.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step6.jpeg)

- 发送 活动 查看群内活动详情，发送 报名 即可立即报名活动

![bot_step7.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step7.jpeg)

- 发送 取消，取消活动报名

![bot_step8.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step8.jpeg)

- 在「群组大师」小程序中可查看活动报名详情

![bot_step9.jpeg](/assets/2021/03-node-wechaty-and-wechaty-puppet-padlocal/bot_step9.jpeg)

## demo源码：

特别说明：

- 替换代码中的Token为自己的，「群组大师」提供的<http://test-958d13-1251176925.ap-shanghai.service.tcloudbase.com/test/groupmaster>接口是本人使用小程序云开发开放供小伙伴们测试体验使用的接口，请务必不要滥用。
- 下载<https://github.com/padlocal/wechaty-puppet-padlocal-demo>中示例，将main.ts中代码替换为如下，运行并登陆微信
- 将机器人微信加入到群组
- 联系超哥（微信ledongmao）帮你在后台绑定为你群组的管理员，即可发布和管理活动（自主认领微信群的功能还在开发中，目前人肉设置群管理员）

```javascript
import { PuppetPadlocal } from "wechaty-puppet-padlocal";
import { Contact, log, Message, ScanStatus, Wechaty } from "wechaty";
import { FileBox } from 'file-box'
import {
    UrlLink,
    MiniProgram,
} from 'wechaty'
import request  from 'request';
const puppet = new PuppetPadlocal({
    token: "----------"
})

function print(msg: string, res?: any): void {

    console.debug(msg + '------------------------------------')
    console.debug(res)
    console.debug('\n')

}

const bot = new Wechaty({
    name: "TestBot",
    puppet,
})
    .on("scan", (qrcode: string, status: ScanStatus) => {
        if (status === ScanStatus.Waiting && qrcode) {
            const qrcodeImageUrl = [
                'https://wechaty.js.org/qrcode/',
                encodeURIComponent(qrcode),
            ].join('')

            log.info("TestBot", `onScan: ${ScanStatus[status]}(${status}) - ${qrcodeImageUrl}`);

            require('qrcode-terminal').generate(qrcode, { small: true })  // show qrcode on console
        } else {
            log.info("TestBot", `onScan: ${ScanStatus[status]}(${status})`);
        }
    })
    .on("login", (user: Contact) => {
        log.info("TestBot", `${user} login`);
    })

    .on("logout", (user: Contact, reason: string) => {
        log.info("TestBot", `${user} logout, reason: ${reason}`);
    })

    .on("message", async (message: Message) => {

        const contact = message.talker()
        const text = message.text()
        const room = message.room()
        // print('@me', await message.mentionSelf())
        // print('message.text()', message.text())
        // print('talker', contact)
        // print('wxid', contact.id)
        // print('gender', contact.gender())
        // print('type', contact.type())
        // print('name', contact.name())
        // print('avatar', await contact.avatar())
        // print('alias', await contact.alias())
        // print('city', contact.city())
        // print('friend', contact.friend())
        // print('province', contact.province())
        // print('roomid', room.id)
        // print('room.topic()', await room.topic())

        let datas = {
            // 'me': await message.mentionSelf(),
            'message_text': 'X' + message.text(),
            // 'talker': contact,
            'wxid': contact.id,
            'gender': contact.gender(),
            'type': contact.type(),
            'name': contact.name(),
            'avatar': await contact.avatar(),
            'alias': await contact.alias() || '',
            'city': contact.city(),
            'friend': contact.friend(),
            'province': contact.province(),
            'roomid': room.id,
            'room_topic': await room.topic(),
        }

        print('datas', datas)

        let datas_jsonstr = JSON.stringify(datas)
        // 群组大师小程序提供的活动查询和报名接口
        let url = 'http://test-958d13-1251176925.ap-shanghai.service.tcloudbase.com/test/groupmaster?action=wechaty' + '&data=' + datas_jsonstr


        request(encodeURI(url), function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
            if (JSON.parse(body).data && JSON.parse(body).data.content) {
                // 小程序返回的活动报名信息发送到群
                message.say(JSON.parse(body).data.content)
            }
        });



        // const toContact = message.to()
        // if (toContact) {
        //     const name = toContact.name()
        //     print(`toContact: ${name} Contact: ${contact.name()} Text: ${text}`)
        // } else {
        //     print(`Contact: ${contact.name()} Text: ${text}`)
        // }

        // 1. send Image

        if (/^ding$/i.test(message.text())) {
            const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
            await message.say(fileBox)
        }

        // 2. send Text

        if (/^dong$/i.test(message.text())) {
            await message.say('dingdingding')
        }

        // 3. send Contact

        if (/^luyuchao$/i.test(message.text())) {
            const contactCard = await bot.Contact.find({ name: 'luyuchao' })
            if (!contactCard) {
                console.log('not found')
                return
            }
            await message.say(contactCard)
        }

        // 4. send UrlLink
        if (/^link$/i.test(message.text())) {
            const urlLink = new UrlLink({
                description: '点击链接关注超哥的个人微信公众号——彪悍的超哥',
                thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',
                title: '关注超哥',
                url: 'https://mp.weixin.qq.com/s/sC76qzmzV61IV-I6RMOj2w',
            });

            await message.say(urlLink);
        }

        // 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)

        // if (/^mini-program$/i.test(message.text())) {
        //     const miniProgram = new MiniProgram({
        //         appid: 'gh_0aa444a25adc',
        //         title: '我正在使用Authing认证身份，你也来试试吧',
        //         pagePath: 'routes/explore.html',
        //         description: '身份管家',
        //         thumbUrl: '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',
        //         thumbKey: '42f8609e62817ae45cf7d8fefb532e83',
        //     });

        //     await message.say(miniProgram);
        // }

    })

    .on("error", (error) => {
        log.error("TestBot", 'on error: ', error.stack);
    })


bot.start().then(() => {
    log.info("TestBot", "started.");
});

```
