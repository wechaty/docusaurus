---
title: "基于Wechaty开发的企业级机器人助手"
author: zhihuifanqiechaodan
categories: project
tags:
  - nodejs
  - wechaty
  - wechaty-puppet-donut
  - wechaty-puppet-wxwork
  - rx-queue
image: /assets/2020/2020-12-23-wxwork-and-donut/chatbot-img.jpeg
---

> 作者: [zhihuifanqiechaodan](https://github.com/zhihuifanqiechaodan) 前端开发工程师

## wechaty

GitHub 上搜了一圈，看到了挺多微信 bot 的方案，后面决定使用 wechaty，因为感觉设计得很优雅，6 行代码就可以轻松构建一个 wxbot。

- [官方文档](https://wechaty.js.org/docs/)

文档近期正在频繁更新中

## 为什么需要该功能

我们企业每天对接上百家以上的汽配行业店铺。需要实时在群内进行报价，零件反馈识别等等功能。这样的需求情况下，了解到了 wechaty，发现其提供的功能能够大大减少我们的人力成本。并且能够快速在企业微信群以及个人微信群众做出反馈。

## 实现的功能

- 根据关键词，输入车辆 VIN 对应反馈出车型配件信息，并且将公司所在群区域的店铺配件库存信息反馈出来
- 根据图片识别车辆 VIN，然后识别 VIN 对应反馈出车型配件信息，并且将公司所在群区域的店铺配件库存信息反馈出来，图片解释接口采用的百度的接口
- 关键词指令绑定群信息。根据不同指令进行群配置。
- redis 存储机器人信息。将群信息存储并同步在 redis 和 mysql 中。后台配置对应群是否开启某些功能等等。
- 每月月初定时发送每个群的采购信息。销量信息等等。
- 机器人登录调用钉钉接口，在钉钉群内发布机器人登录或者退出的提醒信息
- 群邀请自动通过
- 好友申请自动通过

核心代码

```js
const bot = new Wechaty({
  puppet: "wechaty-puppet-hostie",
  puppetOptions: {
    token,
  },
});

bot
  .on("logout", onLogout)
  .on("login", onLogin)
  .on("scan", onScan)
  .on("ready", onReady)
  .on("error", onError)
  .on("message", onMessage)
  .on("room-invite", onRoomInvite)
  .on("friendship", onFriendship)
  .on("room-topic", onRoomTopic)
  .on("room-join", onRoomJoin);

async function onMessage(msg) {
  console.log(
    "========================👇消息内容👇========================\n\n"
  );
  try {
    if (msg.type() == 0) {
      return;
    }
    let room = msg.room(); // 群名称
    let contact = msg.from(); // 发送消息给robot的人
    let msgText = msg.text(); // 发送的内容
    let msgTime = msg.payload.timestamp; // 发送的内容
    let time = utils.formatDateTime(new Date());
    let spaceReg = /\s+/g;
    let noSpaceMsg = msgText.replace(spaceReg, "");
    let isSelf = contact.self();

    try {
      let msgPayloadInfo = msg.payload;
      let contactPayloadInfo = contact.payload;
      let imageData;
      let linkData;
      let imgData;
      let msgContent;

      switch (msgPayloadInfo.type) {
        case 2: // sound
          msgContent = "[你收到一条语音消息，请在手机上查看]";
          break;
        case 3: // nameCard
          msgContent = "[你收到一张个人名片，请在手机上查看]";
          break;
        case 6: // image
          imageData = await getImageOSSUrl(msg);
          let image = await msg.toFileBox();
          imgData = await image.toBase64();
          msgContent = imgData;
          break;
        case 7: // text
          msgContent = msgPayloadInfo.text;
          break;
        case 12: // link
          let linkDataRes = await msg.toUrlLink();
          linkData = linkDataRes.payload;
          msgContent = linkDataRes.payload;
          break;
        case 13: // vedio
          msgContent = "[你收到一个视频消息，请在手机上查看]";
          break;
        default:
          msgContent = "";
      }
      if (room) {
        // console.log('==================机器人识别发送vin返回的信息走入message中，', room)
        let roomPayloadInfo = room.payload;
        let memberIdList = await room.memberAll();
        let message;
        let roomMessage = {
          category: "room",
          msgId: msgPayloadInfo.id, // 消息id
          isSelf: isSelf, // 判断是否为自己发送的消息
          roomOwnerId: roomPayloadInfo.ownerId, // 群主id
          roomName: roomPayloadInfo.topic, // 群名
          userCount: memberIdList ? memberIdList.length : 0, // 群成员数量
          fromUserId: contactPayloadInfo.id, // 消息发送者的id
          fromUserName: contactPayloadInfo.name, // 消息发送者昵称
          fromUserAlias: contactPayloadInfo.alias, // 消息发送者的备注
          fromUserAvatar: contactPayloadInfo.avatar, // 消息发送者的头像
          toUserId: msgPayloadInfo.toId, // 消息接收者的id
          msgType: msgPayloadInfo.type, // 消息类型
          soundMsg:
            msgPayloadInfo.type == 2
              ? "[你收到一条语音消息，请在手机上查看]"
              : "", // 语音消息
          imageMsg: imageData ? imageData : "", // 图片消息
          textMsg: msgPayloadInfo.type == 7 ? msgPayloadInfo.text : "", // 文本消息
          linkMsg: linkData ? linkData : {},
          nameCardMsg:
            msgPayloadInfo.type == 3
              ? "[你收到一张个人名片，请在手机上查看]"
              : "", // 名片消息
          videoMsg:
            msgPayloadInfo.type == 13
              ? "[你收到一个视频消息，请在手机上查看]"
              : "", // 视频消息
          msgTime: utils.formatDateTime(new Date(msgPayloadInfo.timestamp)), // 发送消息的时间
          msgTimestamp: msgPayloadInfo.timestamp, // 发送消息的时间戳
        };
        message = {
          category: "room",
          msgId: msgPayloadInfo.id, // 消息id
          isSelf: isSelf, // 判断是否为自己发送的消息
          roomOwnerId: roomPayloadInfo.ownerId, // 群主id
          roomName: roomPayloadInfo.topic, // 群名
          roomId: roomPayloadInfo.id, // 群id
          userCount: memberIdList ? memberIdList.length : 0, // 群成员数量
          fromUserId: contactPayloadInfo.id, // 消息发送者的id
          fromUserName: contactPayloadInfo.name, // 消息发送者昵称
          fromUserAlias: contactPayloadInfo.alias, // 消息发送者的备注
          fromUserAvatar: contactPayloadInfo.avatar, // 消息发送者的头像
          toId: roomPayloadInfo.id, // 消息接收者的id
          msgType: msgPayloadInfo.type, // 消息类型
          msgContent: msgContent, // 消息内容
          msgTime: utils.formatDateTime(new Date(msgPayloadInfo.timestamp)), // 发送消息的时间
          msgTimestamp: msgPayloadInfo.timestamp, // 发送消息的时间戳
        };
        // console.log(roomMessage)
        utils
          .redisListLPush(
            `LIST_ROOM_${room.payload.id}`,
            JSON.stringify(roomMessage)
          )
          .then((res) => {
            console.log(`redis list LIST_ROOM_${room.payload.id}插入成功`, res);
          })
          .catch((err) => {
            console.log(`redis list LIST_ROOM_${room.payload.id}插入失败`, err);
          });

        utils
          .redisListRPush(`${botUserId}-messages`, JSON.stringify(message))
          .then((res) => {
            console.log(`${botUserId}-messages`, res);
          })
          .catch((err) => {
            console.log(`${botUserId}-messages`, err);
          });
      } else {
        let roomMessage = {
          category: "contact",
          msgId: msgPayloadInfo.id, // 消息id
          isSelf: isSelf, // 判断是否为自己发送的消息
          fromUserId: contactPayloadInfo.id, // 消息发送者的id
          fromUserName: contactPayloadInfo.name, // 消息发送者昵称
          fromUserAlias: contactPayloadInfo.alias, // 消息发送者的备注
          fromUserAvatar: contactPayloadInfo.avatar, // 消息发送者的头像
          toUserId: msgPayloadInfo.toId, // 消息接收者的id
          msgType: msgPayloadInfo.type, // 消息类型
          soundMsg:
            msgPayloadInfo.type == 2
              ? "[你收到一条语音消息，请在手机上查看]"
              : "", // 语音消息
          imageMsg: imageData ? imageData : "", // 图片消息
          textMsg: msgPayloadInfo.type == 7 ? msgPayloadInfo.text : "", // 文本消息
          linkMsg: linkData ? linkData : {}, // 文章链接
          nameCardMsg:
            msgPayloadInfo.type == 3
              ? "[你收到一张个人名片，请在手机上查看]"
              : "", // 名片消息
          videoMsg:
            msgPayloadInfo.type == 13
              ? "[你收到一个视频消息，请在手机上查看]"
              : "", // 视频消息
          msgTime: utils.formatDateTime(new Date(msgPayloadInfo.timestamp)), // 发送消息的时间
          msgTimestamp: msgPayloadInfo.timestamp, // 发送消息的时间戳
        };
        let message = {
          category: "contact",
          msgId: msgPayloadInfo.id, // 消息id
          isSelf: isSelf, // 判断是否为自己发送的消息
          fromUserId: contactPayloadInfo.id, // 消息发送者的id
          fromUserName: contactPayloadInfo.name, // 消息发送者昵称
          fromUserAlias: contactPayloadInfo.alias, // 消息发送者的备注
          fromUserAvatar: contactPayloadInfo.avatar, // 消息发送者的头像
          toId: msgPayloadInfo.toId, // 消息接收者的id
          msgType: msgPayloadInfo.type, // 消息类型
          msgContent: msgContent, // 消息内容
          msgTime: utils.formatDateTime(new Date(msgPayloadInfo.timestamp)), // 发送消息的时间
          msgTimestamp: msgPayloadInfo.timestamp, // 发送消息的时间戳
        };
        utils
          .redisListLPush(
            `LIST_CONTACT_${
              contactPayloadInfo.id == botUserId
                ? msgPayloadInfo.toId
                : contactPayloadInfo.id
            }`,
            JSON.stringify(roomMessage)
          )
          .then((res) => {
            console.log(
              `redis list LIST_CONTACT_${
                contactPayloadInfo.id == botUserId
                  ? msgPayloadInfo.toId
                  : contactPayloadInfo.id
              }插入成功`,
              res
            );
          })
          .catch((err) => {
            console.log(
              `redis list LIST_CONTACT_${
                contactPayloadInfo.id == botUserId
                  ? msgPayloadInfo.toId
                  : contactPayloadInfo.id
              }插入失败`,
              err
            );
          });

        utils
          .redisListRPush(`${botUserId}-messages`, JSON.stringify(message))
          .then((res) => {
            console.log(`${botUserId}-messages`, res);
          })
          .catch((err) => {
            console.log(`${botUserId}-messages`, err);
          });
      }
    } catch (error) {
      console.log("存储消息记录时捕捉到的错误信息", error);
    }

    // console.log(`\n\n\n==================================================================`);
    console.log(
      `消息发送时间：${time}\nroom: ${room}\ncontact: ${contact}\nalias: ${contact.payload.alias}\nmsgText: ${msgText}\n`
    );
    console.log(
      `联系人类型: ${contact.type()}    消息类型：${msg.type()}    消息的age：${msg.age()}\n`
    );

    if (isSelf || msg.age() > 1800) {
      // 判断发送给自己消息的人是不是自己，如果是自己则终止，防止死循环
      return;
    }

    let canSayFlag;
    if (room) {
      canSayFlag = await getCanSayFlag(room.id);
    }
    console.log("canSayFlag", canSayFlag);

    if (
      (room && msgText.indexOf("[弱]") == 0 && canSayFlag) ||
      (!room && msgText.indexOf("[弱]") == 0)
    ) {
      console.log(
        `\n\n\n==================================================================`
      );
      console.log(`发送【弱】反馈给后台查询`);
      vinFeedbackFn(room, contact, msgText, 1);
    }

    if (
      room &&
      msgText.indexOf(`@${botUserName}`) >= 0 &&
      noSpaceMsg != `@${botUserName}@${botUserName}@${botUserName}` &&
      canSayFlag
    ) {
      mentionMeFn(room, msg, contact);
    }

    // 群聊中并且文本内容等于@机器人@机器人@机器人
    if (
      room &&
      noSpaceMsg == `@${botUserName}@${botUserName}@${botUserName}` &&
      canSayFlag
    ) {
      console.log(
        `\n\n\n===============================@三次机器人绑定群👇===================================`
      );
      let isAdmin = await utils.redisHashKeyExists(
        "adminInfo",
        contact.payload.id
      );
      if (isAdmin) {
        bindCareRelationFn(room);
      }
    }

    if (!room && contact.type() == 1 && !/^[a-zA-Z0-9]{17}$/.test(noSpaceMsg)) {
      //说明是私聊
      let reg = /^(\[[\u4e00-\u9fa5]{1,3}\])+$/g;
      if (msg.type() == 6 || (msg.type() == 7 && !reg.test(msgText))) {
        let contactId = contact.payload.id; // 微信联系人的id
        let contactName = contact.payload.name; // 微信联系人的昵称
        let contactAlias = contact.payload.alias; // 微信联系人的备注
        let contactAvatar = contact.payload.avatar; // 微信联系人的头像

        let hasContactId = false;
        let msgObj = {};
        if (msg.type() == 7) {
          // 文本消息
          msgObj["msgContent"] = msgText;
          msgObj["msgTime"] = msgTime;
          msgObj["msgType"] = "7";
        } else if (msg.type() == 6) {
          // 图片消息
          let image = await msg.toFileBox();
          let imageStream = await image.toStream();
          let result = await utils.client.putStream(
            `images/${
              new Date().getTime() + Math.floor(Math.random() * 10000)
            }`,
            imageStream
          );
          msgObj["msgContent"] = "![screenshot](" + result.url + ")";
          msgObj["msgTime"] = msgTime;
          msgObj["msgType"] = "6";
        }

        for (let key in contactRecord) {
          if (key === contact.payload.id) {
            hasContactId = true;
            contactRecord[key].lastMessage = msg;
            if (msg.type() == 7) {
              contactRecord[key].recordText.push(msgObj);
            }
            if (msg.type() == 6) {
              contactRecord[key].record.push(msgObj);
            }
          }
        }
        if (!hasContactId) {
          let record = [];
          let recordText = []; //只存放文本消息，用于钉钉侧边栏的页面展示

          if (msg.type() == 7) {
            recordText.push(msgObj);
          }
          if (msg.type() == 6) {
            record.push(msgObj);
          }
          contactRecord[contactId] = {
            contactId: `${token}/${contactId}`,
            contactName: contactName,
            contactAlias: contactAlias,
            contactAvatar: contactAvatar,
            record: record,
            recordText: recordText,
            lastMessage: msg,
          };
        }
      }
    }

    // 发送者发送的消息符合指令格式, 则进行手机号与群的关系绑定
    if (/^1#1\d{10}$/.test(msgText) && room && canSayFlag) {
      let isAdmin = await utils.redisHashKeyExists(
        "adminInfo",
        contact.payload.id
      );
      if (isAdmin) {
        await directionFn(room, msgText);
      }
    }

    if (/^2#([0-9a-zA-Z]{4})$/.test(msgText) && room && canSayFlag) {
      let vin = msgText.split("#")[1];
      await vinSearchInquiryInfo(room, vin);
    }

    if (/^3#([0-9a-zA-Z]|_|-){6,20}$/.test(msgText) && !room) {
      let isAdmin = await utils.redisHashKeyExists(
        "adminInfo",
        contact.payload.id
      );
      if (isAdmin) {
        let contactId = msgText.split("#")[1];
        await deleteMember(contactId);
      }
    }

    // @机器人 || 发送图片自动识别vin
    console.log(
      `========================👉发送的消息类型 ${msg.payload.type}👈========================\n\n\n`
    );
    // 如果是个人微信，需要发送图片后@机器人才能识别图片vin
    if (token.indexOf("donut") !== -1 && (await msg.mentionSelf())) {
      console.log(
        `图片识别vim => 识别时间：${time}\nroom: ${room}\ncontact: ${contact}\nalias: ${contact.payload.alias}\nmsgText: ${msgText}\n`
      );
      console.log(
        `\n\n\n===================== 执行此命令查询图片识别vim次数：cat log.txt | grep "图片识别vim => 识别时间" -c ======================`
      );
      var id = contact.payload.id;
      let roomId = room ? room.id : "";
      let contactName = contact.payload.name ? contact.payload.name : "";
      utils
        .redisListLrange(`LIST_ROOM_${room.payload.id}`, 0, -1)
        .then(async (res) => {
          if (res.length > 0) {
            for (let i = 0; i < res.length; i++) {
              const item = JSON.parse(res[i]);
              // 如果是当前查询人的信息
              if (item.fromUserId == id) {
                // 如果是图片格式
                if (item.imageMsg !== "") {
                  const nowTime = new Date().getTime();
                  // 如果当前要查询的图片不是五分钟内发布的图片，就不识别vin，直接返回反馈信息。
                  if (nowTime - new Date(item.msgTime).getTime() <= 300000) {
                    getImgBase(item.imageMsg, async (imgBase64) => {
                      // console.log('获取到图片base', imgBase64)
                      content = await getimgVinResult(
                        imgBase64,
                        contactName,
                        roomId
                      );
                      content = `@${contactName}\n\n${content}`;
                      sayQueue({
                        sender: room,
                        content: content,
                        enterQueueTime: new Date(),
                      });
                      // 存储机器人发送的消息
                      utils
                        .redisListLPush(
                          `LIST_ROOM_${room.payload.id}`,
                          JSON.stringify({
                            fromUserName: botUserInfo.name,
                            textMsg: content,
                          })
                        )
                        .then((res) => {
                          console.log(
                            `redis list LIST_ROOM_${room.payload.id}插入成功`,
                            res
                          );
                        })
                        .catch((err) => {
                          console.log(
                            `redis list LIST_ROOM_${room.payload.id}插入失败`,
                            err
                          );
                        });
                    });
                  } else {
                    const robotContent =
                      "阿乐没有找到您要查的图片 :\n需要发送图片的本人@我才能查询哦~\n图片比较大的时候请等发送成功后再@我。";
                    sayQueue({
                      sender: room,
                      content: robotContent,
                      enterQueueTime: new Date(),
                    });
                    // 存储机器人发送的消息
                    utils
                      .redisListLPush(
                        `LIST_ROOM_${room.payload.id}`,
                        JSON.stringify({
                          fromUserName: botUserInfo.name,
                          textMsg: robotContent,
                        })
                      )
                      .then((res) => {
                        console.log(
                          `redis list LIST_ROOM_${room.payload.id}插入成功`,
                          res
                        );
                      })
                      .catch((err) => {
                        console.log(
                          `redis list LIST_ROOM_${room.payload.id}插入失败`,
                          err
                        );
                      });
                  }
                  break;
                }
              }
            }
          }
        })
        .catch((err) => {
          console.log(`redis list LIST_ROOM_${room.payload.id}获取失败`, err);
        });
    }
    // 如果是企业微信，发送图片后自动识别图片vin
    if (token.indexOf("wxwork") !== -1 && msg.payload.type == 6) {
      console.log(
        `图片识别vim => 识别时间：${time}\nroom: ${room}\ncontact: ${contact}\nalias: ${contact.payload.alias}\nmsgText: ${msgText}\n`
      );
      console.log(
        `\n\n\n===================== 执行此命令查询图片识别vim次数：cat log.txt | grep "图片识别vim => 识别时间" -c ======================`
      );
      var id = contact.payload.id;
      let roomId = room ? room.id : "";
      let contactName = contact.payload.name ? contact.payload.name : "";
      utils
        .redisListLrange(`LIST_ROOM_${room.payload.id}`, 0, -1)
        .then(async (res) => {
          if (res.length > 0) {
            for (let i = 0; i < res.length; i++) {
              const item = JSON.parse(res[i]);
              if (item.fromUserId == id) {
                if (item.imageMsg !== "") {
                  getImgBase(item.imageMsg, async (imgBase64) => {
                    // console.log('获取到图片base', imgBase64)
                    content = await getimgVinResult(
                      imgBase64,
                      contactName,
                      roomId
                    );
                    content = `@${contactName}\n\n${content}`;
                    sayQueue({
                      sender: room,
                      content: content,
                      enterQueueTime: new Date(),
                    });
                    // 存储机器人发送的消息
                    utils
                      .redisListLPush(
                        `LIST_ROOM_${room.payload.id}`,
                        JSON.stringify({
                          fromUserName: botUserInfo.name,
                          textMsg: content,
                        })
                      )
                      .then((res) => {
                        console.log(
                          `redis list LIST_ROOM_${room.payload.id}插入成功`,
                          res
                        );
                      })
                      .catch((err) => {
                        console.log(
                          `redis list LIST_ROOM_${room.payload.id}插入失败`,
                          err
                        );
                      });
                  });
                  break;
                }
              }
            }
          }
        })
        .catch((err) => {
          console.log(`redis list LIST_ROOM_${room.payload.id}获取失败`, err);
        });
    }

    // 识别vim
    let reg = /^[a-zA-Z0-9]{17}$/;
    let vin = noSpaceMsg.match(reg, function (item) {
      return item;
    });
    if (reg.test(noSpaceMsg)) {
      let roomId = room ? room.id : "";
      let contactName = contact.payload.name ? contact.payload.name : "";
      content = await getVINResult(vin[0], contactName, roomId);
      content = `@${contactName}\n\n${content}`;
      // console.log('vin识别返回结果：', content);
      if (room) {
        sayQueue({
          sender: room,
          content: content,
          enterQueueTime: new Date(),
        });
        // 存储机器人发送的消息
        utils
          .redisListLPush(
            `LIST_ROOM_${room.payload.id}`,
            JSON.stringify({
              fromUserName: botUserInfo.name,
              textMsg: content,
            })
          )
          .then((res) => {
            console.log(`redis list LIST_ROOM_${room.payload.id}插入成功`, res);
          })
          .catch((err) => {
            console.log(`redis list LIST_ROOM_${room.payload.id}插入失败`, err);
          });
      } else {
        sayQueue({
          sender: contact,
          content:
            "个人/企业微信私聊查询功能已停用，请添加👉13004793408👈企业微信用户使用群聊查询功能，感谢您的理解。",
          enterQueueTime: new Date(),
        });
      }
    }
  } catch (error) {
    console.log("onMessage", error);
  }
  console.log(
    "========================👆消息内容👆========================\n\n"
  );
}
```

## 用户反馈

![1D923EA4-F45C-4C84-9601-D54598CDB763](/assets/2020/2020-12-23-wxwork-and-donut/1D923EA4-F45C-4C84-9601-D54598CDB763.png)
![1D923EA4-F45C-4C84-9601-D54598CDB763](/assets/2020/2020-12-23-wxwork-and-donut/B512A967-6CDF-41B5-A08A-697806938DE3.png)

**由于完整代码会有一些公司的敏感信息暴露出去，就不分享了。可以识别头部图片体验机器人功能**

