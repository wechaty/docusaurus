---
title: "基于wechaty-puppet-padplus的微信文件传输助手"
author: przzl
categories: project
tags:
  - nodejs
  - padplus
  - productivity
image: /assets/2020/file-assistant-bot/file-assistant-bot-img.webp
---

微信助手是很常见的运营工具，不仅能够给微信群带来活跃度，还能针对各种社群开发不同的玩法。
本目标是做一个文件传输助手，当群内有人@机器人并say关键词时，机器人从已有文件业务系统中找到文件并发出；同时在群中直接发送一个文件，机器人可将文件自动上传至文件业务系统。

## 以下是我的开发过程

1、微信官方并没有相关的 API。可能要考虑考虑企业微信？结果发现企业微信有[群机器人](https://work.weixin.qq.com/api/doc/90000/90136/91770)，但完全无法满足我的需求，企业微信就排除了。

2、找了很多基于 Web 版微信的各种开源方案，但是对文件的支持基本为0。同时还存在很多账号登不了 Web 版微信的情况，找了官方文档，无法解决，放弃。

3、偶然间在github上看到了[wechaty框架](https://github.com/wechaty/wechaty)
对这个简单上手，实用性高的框架爱不释手，于是决定立即开展。但是有发现，iPad 协议，虽然需要付费获取 token，但是可以申请[参与开源激励计划](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty#2%E5%85%8D%E8%B4%B9Token%E5%8F%82%E4%B8%8E%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92)来获取免费甚至长期有效的 token。

## 使用wechaty收发消息

在 Wechaty 中，不同的 `Puppet` 对应不同的协议。Wechaty 还有不同语言的 SDK，以及 demo template repository，对开发者非常友好，开发者参与度也很高。
github上已经开源了非常多成功的案例，具体细节就不在详述，只介绍关键部分，如下。

首先需要初始化一个 bot：
1、install Wechaty
老实说，install Wechaty我还是花了一些时间的，老是npm错误。后面发现是vs_BuildTools安装不上，原来是已经有了底版本的。需要先卸载。好在后面处理好了，不然就卡住了。

2、初始化bot，绑定事件函数，这里只需要onScan和onMessage两个事件就行

```js
// create a Wechaty instance as bot
const puppet = new PuppetPadplus({
  token: ipadToken
})
let bot = new Wechaty({puppet, name: 'getFile'});
bot.on('scan', onScan);
bot.on('message', onMessage);
bot
  .start()
  .then(() => {
    console.log('开始登陆微信');
  })
  .catch(async function(e) {
    console.log('初始化失败: ${e}.')
    await bot.stop()
    process.exit(1)
  });
```

3、onScan事件
由于申请的是 iPad 协议的 token，这里用到的是 `PuppetPadplus`。
接着对 bot 绑定各种事件的处理函数，其中 `message` 事件是接收到消息时触发的事件。

```js
async function onScan(qrcode, status) {
    Qrterminal.generate(qrcode)
    console.log('扫描状态', status)
    const qrImgUrl = ['https://api.qrserver.com/v1/create-qr-code/?data=', encodeURIComponent(qrcode)].join('')
    console.log(qrImgUrl)
}
```

3、onMessage事件

```js
async function onMessage(msg) {
    const room = msg.room(); // 是否为群消息
    const msgSelf = msg.self(); // 是否自己发给自己的消息
    const contact = msg.from(); // 发消息人
    if (msgSelf) {
        return;
    }
    if (room) {
        const roomName = await room.topic();
        if (roomName == baseConfig.roomName) {
            goFile(this, room, msg);
        }
    }
}

async function goFile(that, room, msg) {
    const contact = msg.from(); // 发消息人
    const contactName = contact.name();//
    const roomName = await room.topic();
    let content = msg.text();
    //经常群成员的备注会获取不到，需重新同步
    if (content == '更新') {
        room.sync();
        return;
    }
    const alias = await room.alias(contact);
    if (alias == null) {
        room.say("请修改群昵称！修改完后直接发送（不用@我）：更新", contact);
        return;
    }
    const type = msg.type();
    const userSelfName = that.userSelf().name();
    if (type == that.Message.Type.Text) { //文字
        const mentionSelf = content.includes(`@${userSelfName}`)
        console.log(`群名: ${roomName} 发消息人: ${contactName} 内容: ${content}`);
        console.log('是否提及:', mentionSelf);
        if (mentionSelf) {
            content = content.replace(/@[^\s]+/g, '').trim();
            console.log('content值:', content);
            if (content == 'gogogo') { //下载文件发送到群中
                let promise = http.sendPost({
                    "sysParams": JSON.stringify({
                        "businessCode": "wechat_getEmailFile",
                        "params": {"userName": alias}
                    })
                }, baseConfig.commonBusUrl);
                promise.then((res) => {
                    console.log(res);
                    if (typeof (res.businessRes.fileList) != undefined) {
                        var fileList = res.businessRes.fileList;
                        for (var i = 0; i < fileList.length; i++) {
                            var base64Code = fileList[i].fileStr;
                            var fileName = fileList[i].realFileName;
                            var buffer = new Buffer(base64Code, 'base64');
                            const fileBox = FileBox.fromBuffer(buffer, fileName);
                            room.say(fileBox);
                        }
                    } else {
                        room.say("获取失败！", contact);
                    }
                });
            } else if (content == '在么') {
                room.say("我在线");
            } else {
                room.say("不明白");
            }
        }
    } else if (type == that.Message.Type.Image || type == that.Message.Type.Attachment) { //将群中文件上传
        const file = await msg.toFileBox();
        const fileName = file.name;
        const mimeType = file.mimeType;
        let promise = file.toBase64();
        promise.then((res) => {
            let promise = http.sendPost({
                "sysParams": JSON.stringify({
                    "businessCode": "wechat_uploadFile",
                    "params": {"userName": alias, "base64Code": res, "fileName": fileName, "mimeType": mimeType}
                })
            }, baseConfig.commonBusUrl);
            promise.then((res) => {
                var returnMsg = res.businessRes;
                if (returnMsg == 'ok') {
                    room.say("上传成功");
                }
            });
        });
    } else {
        room.say("本群只能发文字和文件。");
    }
}
```

## 上线！

微信机器人这样常见的需求就应该有简单的做法。在排除各种不靠谱方案以后，我选择了 Wechaty。

Wechaty 简洁的 API 可以帮助开发者快速地搭建一个微信个人号机器人。没有时间折腾的开发者，就不用花时间尝试其它方案了。

## 最后

Wechaty的功能非常强大，我只用了一角。后续将扩充更多功能应用。
