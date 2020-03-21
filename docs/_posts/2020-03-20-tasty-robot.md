---
title: "使用 SQLite 和 pullword 实现简易的业务助手"
date: 2020-03-20 22:00 +0800
author: ykst615
categories: tutorial
tags:
  - wechaty
  - nodejs
  - koa
header:
  teaser: /assets/2020/tasty-robot/wechaty-koa.jpg
---
<!-- markdownlint-disable -->

> 作者: [ykst615](https://github.com/ykst615)，个人开发者。首发于博客: [用 wechaty 帮助管理私域流量，线上分销](https://blog.chatie.io/tasty-robot/) 遵循 CC BY-NC-SA 3.0 CN

[![TostyRobot](/assets/2020/tasty-robot/wechaty-koa.jpg)](https://github.com/ykst615/tasty-robot)

<!-- more -->

## 调研

朋友做线上分销的时候，需要管理很多微信好友与微信群，人工维护成本太高，误操作的概率很大（比如转发，多个群需要转发相同的内容），而且他希望尽可能简单的操作这些，市面上大多数软件需要客户端或者网页，不适合移动端操作。恰巧在掘金看到了关于 wechaty 的相关文章。

对于6行实现一个微信机器人很感兴趣，恰巧技术栈有吻合，不需要太多学习成本。

## 基础环境

NodeJS v12.13.0  

PM2 v3.5.1+

## 项目思路

wechaty 能够实现微信的诸多功能，但是每次开发都要去关闭线上服务，在打开开发环境，很不方便，我希望通过 wechaty 与 koa 结合，把 wechaty 的功能实现成为api，外部系统调用api就能够直接使用功能，这使得我无需多次去重启 wechaty ，只需要去关注业务模块就可以了。

```javascript
async function __main(): Promise<void> {
  let app = new Koa();

  app.use(async (ctx, next) => {
    ctx.robot = robot;
    await next();
  });

  // 路由加载
  loadRouter(app);

  app.listen(4770, () => {
    console.log('listen: 127.0.0.1:4770');
  });

  // 等待机器人启动
  await robot.start();
}

__main();
```

## 功能
### 提供主动发送消息接口
通过 Koa 接口，提供主动发送消息的能力

代码见 `src/controller/v1/message.ts`
```javascript
const router = new Router({
  prefix: '/api/v1/message',
});

// 发送给 Contact 微信好友的接口
router.post('/sendToFriends', async (ctx, next) => {
  const { robot, request } = ctx;
  const body = request.body;
  const { content, targets } = body;

  await Promise.all(
    targets.map(item => {
      return (async () => {
        try {
          // 查找到用户
          const contact = await robot.Contact.find(item);
          if (contact) {
            // 发送信息
            await contact.say(content);
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return false;
        }
      })();
    }),
  );

  return new Success();
});

// 发送给微信群
router.post('/sendToRooms', async (ctx, next) => {
  const { robot, request } = ctx;
  const body = request.body;
  const { content, targets } = body;

  const sendResult = await Promise.all(
    targets.map(({ name }) => {
      return (async () => {
        try {
          // 找找微信群名称
          const room = await robot.Room.find({ topic: name });
          if (!room) {
            return false;
          }
          // 发送给房间
          await room.say(content);
          return true;
        } catch (error) {
          return false;
        }
      })();
    }),
  );
  // 输出每个群的发送结果
  const d = targets.map((t, index) => {
    return { [t.name]: sendResult[index] };
  });
  return new Success<{ [key: string]: boolean }[]>({ data: d });
});

export { router as messageV1 };
```

### 管理员直接转发微信消息

通过对 robot 的 `onmessage` 事件监听，通过特定的“路由机制”，可以将管理员的信息达到转发的效果

代码见 `src/robot/listen/on-message.ts`
```javascript
export async function onMessage(message) {
  try {
    const isSelf = message.self();
    if (isSelf !== false) {
      return;
    }
    // 是否是来自群聊
    const room = message.room();
    if (room) {
      // 群聊消息
      await onRoom.call(this, message);
    } else {
      const contact = message.from();
      if (!contact) {
        return;
      }
      const name = contact.name();
      switch (name) {
        // 开发人员
        case '一颗赛艇🚤': {
          await fromSaiting.call(this, message);
          break;
        }
        // 管理人员
        case 'Nana': {
          await fromNana.call(this, message);
          break;
        }
        default: {
          await fromOther.call(this, message);
          break;
        }
      }
    }
  } catch (error) {
    console.log(`【${new Date()}】 messageError: ${error}`);
  }
}

async function fromNana(this: Wechaty, message: Message) {
  await forwardMessage.call(this, message, ['上海❤️美食外卖红包2群', '上海❤️美食外卖红包3群']);
}

async function forwardMessage(message, targets) {
  const targetList: string[] = targets;

  // 转发类型
  const messageType = message.type();
  const Type = this.Message.Type;
  let content: any = '';

  // 这些信息过滤，不转发
  const filterList = [Type.Unknown, Type.Audio, Type.Contact, Type.Emoticon];
  if (filterList.includes(messageType)) {
    return;
  }

  let isUrl = false;
  let isNotice = false;

  switch (messageType) {
    // Url 跳过处理，发信息时使用转发功能
    case Type.Url:
      isUrl = true;
      break;
    case Type.Text:
      let text = message.text();
      // 特定的开头，去修改群公告
      if(text.startsWith("@所有人@")){
        isNotice = true;
        text = text.slice(5);
      }
      content = text;
      break;
    default: // 图片 视频 附件格式，使用默认处理
      // 通过 fileBox 转发文本外的格式文件
      const fileBox = await message.toFileBox();
      const fileName = fileBox.name;
      const fileBuffer = await fileBox.toBuffer();
      content = FileBox.fromBuffer(fileBuffer, fileName);
      break;
  }

  await sleep(2000, 4000);
  await message.say('正在转发...');

  const fowordResult = await Promise.all(
    targetList.map(topic => {
      return (async () => {
        try {
          const room = await this.Room.find({ topic });
          if (room) {
            await sleep();
            if (isUrl) {
              await message.forward(room);
            } else if(isNotice){
              await room.announce(content)
            } else {
              await room.say(content);
            }
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return false;
        }
      })();
    }),
  );

  let sayToNana = `转发结束\n`;

  targetList.forEach((topic, index) => {
    sayToNana += `${topic}: ${fowordResult[index] ? '成功' : '失败'} \n`;
  });

  await message.say(sayToNana);
}

```

### 自动通过好友请求并发送帮助信息

代码见 `src/robot/listen/on-friendship.ts`
```javascript
export async function onFriendship(friendship) {
  try {
    const friendshipType = friendship.type();
    // 按照不同的好友关系，实现路由
    switch (friendshipType) {
      // 接收到好友申请
      case Friendship.Type.Receive: {
        await receive.call(this, friendship);
        break;
      }
      // 当好友请求确认
      case Friendship.Type.Confirm: {
        console.log(`friend ship confirmed`);
        break;
      }
      // 场景: 给好友发消息，需要验证的时候
      case Friendship.Type.Verify: {
        console.log(`friend ship verify`);
        break;
      }
    }
  } catch (error) {
    console.log('好友请求相关错误');
  }
}

async function receive(friendship) {
  // 接收好友请求
  await friendship.accept();

  const contact = friendship.contact();
  const name = contact.name();

  await contact.say(`${name}，你好啊，很高兴认识你！`);
  // 这个是对象见 src/robot/listen/on-message.ts 文件，是面对普通用户的功能选择，这里相当于hello world，开场白
  personalInteractionFeatures.帮助.func.call(this, contact);
}
```

## TODO
这里面还是有很多耦合业务的代码，因为上班，没有太多心思在维护。未来希望把这些代码都移动到 robot-be 这个项目，并提供网页配置这些功能，用户可以自定义与机器人交流后机器人的行为。

## 感谢

感谢 wechaty 团队提供的功能，让生产力解放。🐂🍺。Thx
