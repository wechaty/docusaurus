---
title: "基于wechaty的拼车小程序（1）"
author: jellyzhang
categories: project
tags:
  - nodejs
  - code
  - travel
image: /assets/2021/01-carpool-bot-with-wechaty-1/4.jpeg
---

## 产品构想

我的初步想法是：

- 微信小程序为前端，用户可以在小程序上浏览其他用户发布的拼车信息（出发地、到达地、时间等等）
- 在用户通过小程序发起「加入拼车」的请求后，我们需要做的事情概括起来就是：将「发起者」与「参与者」联系到一起
- 实现「发起者」与「参与者」联系到一起有许多方式：
  - 将发起拼车的用户的WechatId发送给新用户
  - 将两个用户拉到一个群聊里
  - 做一个留言系统或者IM系统让两个用户进行对话
- 综合考虑来看，将多个用户拉到一个群聊里将是最简洁的方案
  - 群聊即用即删，用户可以随时退出群聊，避免骚扰。
- 而微信小程序因为微信本身的政策原因，是不允许「发布二维码」、「拉入群聊」等操作的，因此需要WechatBot来助一臂之力。
  - PS：目前市面现有的拼车小程序基于公众号来实现，需要用户关注指定公众号并发送暗号获得入群链接，同时他们以此盈利。

### 如何使用wechaty来构造bot

- 对需求进行拆解，初步阶段的需求大概如下：

  - 当「发起人」发起一个拼车时，Bot能与「发起人」创建一个群聊，并将「拼车信息」与「群聊ID」进行持久化存储。
  - 当「参与人」参与拼车时，Bot能将「参与人」根据「群聊ID」拉入同一个群聊。

- 大致使用到的wechaty API如下：

  - `contact.find`通过wechatId查找用户
  - `room.create`创建群聊
  - `room.invite`拉人进群

- Bot部分代码如下：

  ```typescript
    public async CreateRoomById(id: string, topic: string): Promise<Room> {
      const contact = await this.bot.Contact.find({ id: id });
      if (contact == null) {
        throw new Error(`cant find user by id, id=${id}`);
      }
      id = helper_id;
      const helper = await this.bot.Contact.find({ id: id });
      if (helper == null) {
        throw new Error(`cant find user by id, id=${id}`);
      }
      const contactList = [contact, helper];
      const room = await this.bot.Room.create(contactList, topic);
      console.log("createDingRoom() new ding room created: ", room);
      return room;
    }

    public async InviteToRoom(userId: string, roomId: string) {
      const contact = await this.bot.Contact.find({ id: userId });
      if (contact == null) {
        throw new Error(`cant find user by id, id=${userId}`);
      }
      const room = await this.bot.Room.find({ id: roomId });
      if (room == null) {
        throw new Error(`cant find room by id, id=${roomId}`);
      }
      try {
        await room.add(contact);
      } catch (e) {
        console.error(e);
      }
    }
  ```

- 使用express框架来搭建简易web服务器，对外提供借口

  ```typescript
  const app: express.Application = express();

  // create room by userId
  app.post("/room/create", async (req, res) => {
    let id: string = req.query.id as string;
    let topic: string = req.query.topic as string;
    let resp: any = {};
    try {
      const room = await bot.CreateRoomById(id, topic);
      resp.id = room.id;
    } catch (e) {
      console.log("Error", e);
    }
    res.send(new Resp(ERROR_CODE.Success, ERROR_MSG.Success, resp));
  });

  // invite someone to a room
  app.post("/room/invite", async (req, res) => {
    let userId: string = req.query.userId as string;
    let roomId: string = req.query.roomId as string;
    try {
      const room = await bot.InviteToRoom(userId, roomId);
    } catch (e) {
      console.log("Error", e);
    }
    res.send(new Resp(ERROR_CODE.Success, ERROR_MSG.Success, null));
  });
  ```

### 后端服务

另外需要一个后端服务，主要支持以下功能：

1. 接受前端（小程序端）发送的用户请求。
2. 将Bot处理好的「拼车信息」、「群聊ID」绑定在一起，存储到数据库里。
3. 向前端（小程序端）返回全部的拼车信息，供用户选择。
4. 将用户填写的wechatId与小程序的openId进行绑定，存储到数据库，使用户不必每次都填写。

### 开发截图

- 小程序前端开发尚未完成，比较粗糙。

- 用户填写WechatId的界面。（因小程序不提供用户wechatId，需要用户手动填写）

  ![Pic-1](/assets/2021/01-carpool-bot-with-wechaty-1/2.webp)

- 用户发布拼车与加入拼车的界面：

  ![Pic-1](/assets/2021/01-carpool-bot-with-wechaty-1/1.webp)

- 用户进行「加入群聊」后，Bot将用户拉入群聊（bot视角）：

  ![Pic-1](/assets/2021/01-carpool-bot-with-wechaty-1/3.webp)

### 项目相关

- 项目代码文件放在：[github](https://github.com/JellyZhang/rw-helper-back/tree/master/wechat-bot)

- 后续的TODO：

  - 完善小程序前端。

    - 支持进度条显示「当前时间」距离「结束拼车时间」的长短

  - 拼车信息支持显示「人数」与「总人数」

  - 添加Bot在群内可供用户进行交互的操作

    - /close  结束拼车
    - /update  刷新群聊人数
    - ……etc

  - 支持当用户发起「加入」时却未添加Bot未好友时，Bot能主动发起「好友请求」

> 作者: [Jelly](https://github.com/jellyZhang)
> Code: [Github](https://github.com/JellyZhang/rw-helper-back)
