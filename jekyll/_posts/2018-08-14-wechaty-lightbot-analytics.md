---
title: "Lightbot统计分析管理平台"
author: zhoumh1988
categories: project
tags:
  - analytics
  - featured
  - utility
image: /assets/2018/wechaty-lightbot-logo.jpg
---

> Author: [@LittleStrong](https://github.com/zhoumh1988), WEB Development Manager at [iTrustdata](http://itrustdata.com/), 喜欢挖坑与填坑😝

![logo](/assets/2018/wechaty-lightbot-logo.jpg)

感谢 @lijiarui 邀请我分享我们的LIGHTBOT统计分析管理平台，希望能够帮助开发者使用wechaty提供更多的业务方向。

本人刚开始学习使用node，因此代码相对比较low，还请见谅。😄

## 项目介绍

> Lightbot统计分析管理平台在光链项目微信群中将主要起到两方面的作用，分别是**维护管理**和**数据抓取**两方面。机器人将做到内容的简单回复，包括好友自动通过，回复关键词自动邀请加入群组，这两个功能将保证投资人入群申请能够及时通过。在日常的群维护上，机器人将做到记录用户违规回复，超过3次警告并删除，同时，进行非工作时间常规问题关键词的自动回复，这两个功能将做到群维护的24小时无间断执行。同时也涉及到关键词管理，包括常规关键词和违规关键词，关键词将由管理员在后台进行设定，同时也能够根据群聊环境和项目进展进行及时调整。在违规用户方面，后台也将进行记录，方面管理员进行提醒和处理。
> 在数据和人员管理方面，Lightbot统计分析管理平台将根据回复计算统计群成员，包括用户和管理员的的总体日活，周活和月活，方便群内做好正对性运营和管理。在文字方面，也将做好统计，具体体现在字数上，这一点也将对群聊质量进行把控。在用户分析上，后台数据将协助进行用户画像的归纳，包括性别，地域等，在群聊习惯方面，也将汇总回复时间等，方便管理员进行更有针对性的群聊回复。在机器人的后台，可以查多个微信群的具体的聊天记录，同时提供角色设置功能，角色包括用户、管理员、水军等，这两个功能将使管理员在后台查看具体至每个群每个角色的具体聊天内容，在统计数据的同时将完整的聊天记录同时抓取。

整个项目分为4大模块：

* lightbot机器人（已完成）
* api接口服务（已完成50%）
* web端展示界面（已完成50%）
* cron定时任务（开发中）

## Lightbot功能

### 自动抓取群信息

> 通过遍历用户固定的群组，抓取群信息和群成员信息。并自动抓取用户的文本和图片留言。
>
> 我们在微信机器人登录的同时遍历要抓取的群组，抓取成功后做插入或更新操作，之后抓取群成员信息，同样在抓取成功后做插入或更新操作。
缓存用户信息的目的是为了后期做用户活跃度统计，同时还可针对性筛选用户进行对话模式展示。

```javascript
const bot = new Wechaty({ puppet: 'padchat' })
const default_rooms = ['Test1','Test2','Test3'];

bot.on('login', async user => {
   default_rooms.forEach(async topic => {
        let r = await bot.Room.find({
            topic: topic
        });
        console.log(`The room ${topic} is ${isNotEmpty(r)}`);
        if (r) {
            saveRoom(r);
        }
    })
})
```

#### 代码

```javascript
// 保存群组信息
const saveRoom = async function (room) {
    let record = {};
    record.id = room.id;
    record.topic = await room.topic();
    let members = await room.memberList();
    record.member_num = members.length;
    Query.saveRoom(record);
    members.forEach(async c => {
        if (c && !c.self()) {
            saveUser(c, room.id);
        }
    });
}

// 保存用户信息
const saveUser = async function (contact, roomid) {
    Query.isExisted(contact.id, roomid, async res => {
        if (res === false) {
            return;
        }
        try {
            if (roomid) {
                let user = new User(contact);
                user.setRoomid(roomid);
                user.setGender(contact.gender());
                if (isNotEmpty(res) && parseInt(res.id || 0) !== 0) {
                    user.setId(res.id);
                    if (isEmpty(res.name + '')) {
                        Query.syncContactName(user, res => {
                            info.info(`同步用户${contact.name()}昵称`);
                        });
                    }
                    if (res.avatar == null || res.avatar == 0) {
                        let avatar = await contact.avatar();
                        avatar = await avatar.toDataURL();
                        Query.insertImage(avatar, imgId => {
                            user.setAvatar(imgId);
                            Query.syncContactAvatar(user, res => {
                                info.info(`同步用户${contact.name()}头像`);
                            });
                        })
                    }
                } else {
                    let avatar = await contact.avatar();
                    avatar = await avatar.toDataURL();
                    Query.insertImage(avatar, imgId => {
                        user.setAvatar(imgId);
                        Query.addUser(user, res => {
                            info.info(`新增用户${contact.name()}信息`);
                        });
                    })
                }
            }
        } catch (e) {
            err.error(e.message);
        }
    });
}
```

> 其中Query是我写的一个数据库存储的工具类
>
> 用户头像我是用base64转码存储到数据库中，因此我会先保存用户头像，然后关联到用户表中，整个项目的所有图片我都是采用这种方式存储的，介于base64转码后，字符串过长，因此单独提取出来做一个表存储。通过id的形式关联到各主表中。
>

### 智能回复

* 我们监听了用户的发言，根据用户的发言做智能回复。因为我们是要做留言字数的统计，从而区分优劣会员，因此我们只抓取文本和图片形式的留言。（图片形式的后期考虑引入AI识别功能，自动对图片做分析。）
* 管理平台有一套关键词的管理功能，可自行设置关键词的内容，支持模糊匹配和完全匹配。同时我们还添加了敏感词过滤，但凡踩坑3次以上的用户，那不好意思了～88了您嘞。做这个功能的主要目的还是为了保证和谐的群环境。
* 我们的智能回复并不是24小时都回复，只是为了减少我们运营人员的工作量，只在他们休息的时候工作，做到群管理无人值守。

#### 业务代码

```javascript
// 消息自动回复
bot.on('message', async function (message) {
    if (message.self()) {
        return
    }
    const content = message.text()
    const sender = message.from()
    const room = message.room()

    if (message.type() !== Message.Type.Text && message.type() !== Message.Type.Image) {
        info.info(`消息类型：${message.type()},content=${content}`);
        return
    }
    let topic = room ? await room.topic() : null;
    if (room && default_rooms.indexOf(topic) != -1) {
        try {
            // 判断是否是新用户，若是保存到数据库
            saveUser(sender, room.id);
        } catch (e) {
            err.error(`saveUser error When get message. Error is : ${e}`);
        }
        try {
            // 记录聊天信息
            if (message.type() == Message.Type.Image) {
                // 存储图片
                let filebox = await message.toFileBox();
                let msgContent = await filebox.toDataURL();
                Query.addChat(msgContent, sender.id, room.id, 5);
            } else {
                // 存储文本
                Query.addChat(content, sender.id, room.id, 6, async chatId => {
                    // 判断回复内容是否违规
                    Query.isFoul(content, chatId, async kid => {
                        if (kid != 0) {
                            // 记录并查询用户违规次数
                            Query.recordFoul(sender.id, room.id, chatId, kid, async times => {
                                if (times > 2) {
                                    await room.say(`您已违规3次！`, sender);
                                    await room.del(sender);
                                } else {
                                    await room.say(`您的回复内容已违规，再违规${3-times}次将被踢出群组。`, sender);
                                }
                            });
                        } else {
                            let now = moment();
                            // 判断是否在机器人工作时间
                            if (now.isAfter(rest_time[0]) && now.isBefore(rest_time[1])) {
                                // 查看是否踩中了关键词
                                Query.queryKeyword(content, chatId, 1, async reply => {
                                    await room.say(reply, sender);
                                });
                            }
                        }
                    });
                });
            }
        } catch (e) {
            err.error(`When save message. Error is ${e}`);
        }
    }
})
```

### 自动通过好友并回复信息

为了减少运营人员对新用户申请的处理，我们借助wechaty实现了好友自动通过并回复信息的动能。并指示用户下一步的操作，可以回复指定内容自助加入群组。

```javascript
bot.on('friendship', friendship);
```

#### 相关代码

```javascript
const friendship = async friendship => {
    if (friendship.type() === Friendship.Type.RECEIVE) { // 1. receive new friendship request from new contact
        const contact = friendship.contact()
        let result = await friendship.accept()
        if (result) {
            let msg = `你好，光链小助手欢迎你！
回复“加入光链群”即可加入光链微信群，回复“联系小助手”稍后小助手将回复您。
光链是全球首个“安全性，高性能，去中心化”三要素完备的公链。
请关注光链其它社群及推广渠道：
telegram电报群: t.me/lightchain_cn
官方新浪微博：LightChain光链
一直播ID：346346982
交易平台：
OKEx: www.okex.com
IDAX：www.idax.mn
KKcoin: www.kkcoin.com`;
            contact.say(msg);
            info.info(`Request from ${contact.name()} is accept succesfully!`)
        } else {
            err.error(`Request from ${contact.name()} failed to accept!`)
        }
    } else if (friendship.type() === Friendship.Type.CONFIRM) {
        // 2. confirm friendship
        info.info(`new friendship confirmed with ${contact.name()}`)
    }
}

bot.on('message', async function (message) {
  ...
  if (content == '加入光链群' && room == null) {
        Query.queryRoomRandom(async res => {
            const room = bot.Room.load(res.roomid);
            if (room) {
                let topic = await room.topic();
                try {
                    await room.add(sender);
                    await room.say(`欢迎 ${sender.name()} 加入 ${topic} `, sender);
                } catch (e) {
                    err.error(`Can't join room. ${e}`);
                    console.error(e)
                }
            }
        });
        return
    }
  ...
});
```

> 监听好友申请，自动通过申请，并提示下一步操作。
>
> 在监听消息时，如果完全匹配到加入光链群，并且是直接发给机器人的，那么会根据群组人数排序加入群组。

## 统计分析平台

![登陆界面](/assets/2018/wechaty-lightbot-1.png)

### 架构设计

> 渲染引擎是React
>
> 前端框架采用的是阿里巴巴蚂蚁金服开源的[Ant Design](https://ant.design/)。
>
> 整体架构是在[Ant Admin](https://github.com/zuiidea/antd-admin)基础上改的。
>
> 数据库采用的mysql8.0
>
> 服务是node server我自己封装的。

### 业务功能

> 目前只实现了各个模块的管理功能
>
> 统计相关功能将在月底前开发完成，届时我会上来更新blog，感谢大家的支持。

#### 关键词管理

> 关键词分页查询
>
> 关键词支持完全匹配和模糊匹配，优先完全匹配。
>
> 支持查询条件筛选

![敏感词管理](/assets/2018/wechaty-lightbot-2.png)

#### 敏感词管理

> 对敏感词的管理
![敏感词管理](/assets/2018/wechaty-lightbot-3.png)

#### 聊天管理

##### 聊天记录

> 根据群，用户角色和时间进行分页查询

![聊天记录](/assets/2018/wechaty-lightbot-4.png)

##### 对话模式

> 根据群，特定用户，时间进行数据筛选
>
> 过滤掉多余人员的发言，只显示筛选用户的聊天记录

![聊天记录](/assets/2018/wechaty-lightbot-5.png)

#### 用户管理

> 快速查看用户基本信息
>
> 设置用户的角色（用户，水军，管理员），从而进行群活跃分析。

![用户管理](/assets/2018/wechaty-lightbot-6.png)

#### 群组管理

> 查看群组信息
>
> 设置责任账户（这个是为了体现运营人员水平而设置的）

![用户管理](/assets/2018/wechaty-lightbot-7.png)

#### 统计分析

功能开发中，敬请期待。。。
