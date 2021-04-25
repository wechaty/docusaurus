```
---
title: "TS第一次的基本使用"
author: WisheMelz
image: /assets/2021/04-wish-wechaty-init/teaser.png
---
```

快速部署一个自动邀请用户加入群组的机器人

# 快速部署一个自动邀请用户加入群组的机器人

~~~
npm i qrcode-terminal wechaty wechaty-puppet-padlocal
~~~

创建一个TS文件 暂且命名为 `main.ts​` 

~~~ts
import { PuppetPadlocal } from "wechaty-puppet-padlocal";
import { Contact, log, Message, ScanStatus, Wechaty, Friendship } from "wechaty";

const puppet = new PuppetPadlocal({
    token: "TOKEN"
})
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
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
        // message.type() 文本类型
        // Message.Type.Text  文本类型
        // message.room()  是否群聊
        // message.from() 对方是谁
        // console.log(message.payload);
        // console.log(message.room());
        let content = message.text().trim();
        const contact = message.from();
        // 是否房间
        if (!message.room()) {
            let fromId = message.payload.fromId;
            fromId = fromId.substring(1, 2);
            // 是否公众号
            if (fromId == 'gh') return false;

            let webRoom = await bot.Room.find({
                topic: content
            });
            // 邀请进入房间
            if (webRoom) {
                try {
                    await delay(200);
                    await webRoom.add(contact);
                } catch (e) {
                    console.error(e);
                }
            } else {
                message.say('指令无效')
            }
        }
    })

    .on("error", (error) => {
        log.error("TestBot", 'on error: ', error.stack);
    })
    .on('friendship', async (friendship: Friendship) => {
        // 如果是添加好友请求
        if (friendship.type() === Friendship.Type.Receive) {
            // 通过好友请求
            friendship.accept()
        }
    }
    )

bot.start().then(() => {
    log.info("TestBot", "started.");
});


~~~



解释一下代码: 加群的口令就是群聊的名字. 

TOKEN的获取方法可以向管理员申请7天的使用,一般情况下10分钟内会回复!

