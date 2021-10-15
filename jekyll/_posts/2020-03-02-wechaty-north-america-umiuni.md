---
title: "wechaty 在UMIUNI北美校友圈中的应用"
author: supercharleszhu
categories: event
tags:
  - meetup
image: /assets/2020/umiuni/icon.webp
---

## 内容简介

* UmiUni -- 北美留学生自己的校园生活圈子
* Wechaty在UmiUni的应用
* Wechaty 的 技术实现
* Umiuni+Wechaty 的将来发展

![UmiUni](/assets/2020/umiuni/icon.webp)

## UmiUni -- 北美留学生自己的校园生活圈子

UmiUni 旨在连接留学生群体, 相互帮助, 解决留学生群体 在海外遇到的生活学习等等问题, 依靠中国留学生在海外的校友圈的无形力量,
促进整个留学生群体的进步。

主要提供的服务如下：

* 留学生校园二手闲置买卖,转租房,二手车信息等功能,帮助留学生解决部分生活问题
* 校园攻略:周边生活娱乐,社团活动,生活讯息,顺风车等等校内论坛内容

### 目标用户：

* 美国大学的中国留学生群体
* 即将出国留学的国内高中生、大学生
* 走上工作岗位的毕业生

### 应用场景

* 新生入学寻找校内及周边公寓信息
* 暑假回国空置公寓转租
* 毕业回国闲置家居,家电等物品低价卖给学弟学妹
* 走上工作岗位的校友借助自身的能力, 为学弟学妹推荐工作的机会
* 机场与学校之间的顺风车
* 社团活动参与信息

### 运营情况

UmiUni平台自2017年3月份开始对用户开放，经过半年多的发展，开发完成网页、微信小程序、手机APP三个端口的应 用。
目前完全发展三所大学，部分发展达7所大学，累计用户数 超过1.8万，其中UIUC市场普及率和占有率均超过95%
平均日活超过6000次，数据库保有超过1万条校园官方edu邮箱信息
尝试并发现多个盈利方式，并在不断挖掘新的稳定盈利点
UmiUni是北美知名的校内网小助手，为各个北美学校的校友提供如下服务

## Wechaty在UmiUni的应用

Umiuni 目前主要依托于用户登录小程序或app来发布，搜索自己所需的信息，但是目前该产品提供的服务有如下不足：

1. 用户偏爱在微信群中通过发送图片，文字的信息发布租房信息，要在小程序中发布需要重新写作，效率低下
2. 用户希望在特定微信群中收到特定的消息（如二手车群，二手货群等），在app中搜索效率比较低下
3. 用户希望在多个微信群中同时发布消息，逐个发布效率低下

因此我们使用Wechaty 的微信机器人用以提升整体效率

![UmiUni](/assets/2020/umiuni/architecture.webp)

上图为umiuni的新架构设计，具体创新点如下：

* 利用微信机器人帮助用户加入想加入的群组（如某个学校的二手群，租房群等）
* 用户发布信息后，通过分析自动将发布的信息转换为app内的post，用户无需再次手动输入
* 用户发布信息后，通过微信机器人发送消息至kafka，由kafka自动推送至特定的多个群组
* 用户只需输入搜索的信息，微信机器人将搜索消息，自动从UmiUni后台数据中找到用户想要的信息
* 商家发布新信息时，可以通过kafka将最新资讯转发至各个餐馆群

## Wechaty+ Umiuni 的技术实现

我们将使用padplus协议作为微信机器人的底层通讯协议[wechaty-puppet-padplus](https://github.com/botorange/wechaty-puppet-padplus)

主要运用的技术：

* Kakfa
  * 消息队列收发，将消息发给对应的人群，手机用户的消息用于数据分析
* Node.js （feathers.js)
  * 用于快速构建后端服务
* Mysql
  * 用作数据前台，存取产品服务的数据，如二手车，二手货信息等
* Hadoop HDFS (在建)
  * 用作数据后台，存取用户数据信息
* wechaty
  * 用作构建消息来源

### wechaty 代码示例

wechaty 部分由于还在搭建，因此仅展示正在运行的部分

用户加群，为用户寻找合适的群组：

```typescript
      const dingRoom = await this.Room.find({ topic: str })
      if (dingRoom) { // Room found
        log.info('on-message', 'onMessage: got Room: "%s"', await dingRoom.topic())
        if (await dingRoom.has(from)) { // speaker is already in room
          const topic = await dingRoom.topic()
          log.info('on-message', 'onMessage: sender has already in the Room')
          await dingRoom.say(`I found you have joined in room "${topic}"!`, from)
          await from.say(`no need to send the name again, because you are already in room: "${topic}"`)
        } else { // put speaker into room
          log.info('on-message', 'onMessage: add sender("%s") to Room("%s")', from.name(), dingRoom.topic())
          await from.say('ok, I will put you in the room!')
          await putInRoom(from, dingRoom)
        }
      } else {
        log.info('There is no related groups')
        log.info(text)
        log.info(from.name())
        await from.say('There is no related groups')
      }
```

用户加群操作

```typescript
async function putInRoom (contact: Contact, room: Room) {
  log.info('on-message', 'putInRoom("%s", "%s")', contact.name(), await room.topic())
  // check the number of memebers in that room
  const room_members = await room.memberAll()
  if (room_members.length <= 100) {
    // tslint:disable-next-line:no-console
    console.log('test')
  }
  try {
    await room.add(contact)
    setTimeout(
      _ => room.say('Welcome ', contact),
      10 * 1000,
    )
  } catch (e) {
    log.error('Bot', 'putInRoom() exception: ' + e.stack)
  }
}
```

## wechaty 未来发展

### 基础features

* 群目录: 以分地区划分，先建立校友群 南京:， 香槟: 硅谷:, Maryland:, 群的分法，【校友群，同城群】，类目找工作，内推*，跳槽*，二手，租房*，身份*。
* 自动通过加好友验证，并且发送群目录。
* Make post call到python AI的项目。 advanced做法：apache thrift, google protobuff。简单做法：post call。

### Security features

1. 验证系统，学校邮箱验证(可以使用北美校内网的edu验证Api)， 【或用户上传学校证明(发学生卡+自拍）()->人工review queue，】 【怎么验证同城，科技公司邮箱，或者美国工作证明(payement stub) ->人工review queue】 2.上传的学校证明。
2. Implement黑名单，记录广告特征。
3. 自动踢人，踢广告功能。(AI batch processing)

### 高级features

1. mysql数据库，记录用户session，wechat id，上传的学校证明。 为之后ai，data science发展铺路。
2. Implement管理员，可以对机器人发出不同指令，可以剔除广告等。（implementation method，管理员群。）
3. Save广告图片，文字，分析识别特征。(AI) 1）BlackList 广告号wechatID; 2) 文字关键词blacklist
4. nodjs chatbot grpc call python service, send chat message to a python for model processing. Service crash, session logout -> send a notification to 管理员群。
5. 校友问答。校友在群中，或者私聊中提问 (e.g. 有没有二手自行车?），1)先搜索[北美校内网](https://umiuni.com)数据库找匹配 2)搜索网络；有match后查看score。
6. 工友问答。Package details, Layoff news, etc.

> 作者: [SuperCharlesZhu](https://github.com/SuperCharlesZhu)
