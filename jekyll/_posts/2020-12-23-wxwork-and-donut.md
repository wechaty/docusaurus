---
title: "基于Wechaty开发的企业级机器人助手"
author: zhihuifanqiechaodan
categories: project
tags:
  - nodejs
  - productivity
image: /assets/2020/12-07-wxwork/wecom.png
---

GitHub 上搜了一圈，看到了挺多微信 bot 的方案，后面决定使用 wechaty，因为感觉设计得很优雅，6 行代码就可以轻松构建一个 wxbot。

- [官方文档](https://wechaty.js.org/docs/)

文档近期正在频繁更新中

## 为什么需要该功能

作为一名前端开发工程师，平时也喜欢写技术博客和交朋友，为此我也创建了微信技术交流群和微信公众号，一般我都会在文章下面贴出公众号和我的个人二维码，给有兴趣的小伙伴们添加微信然后我再拉他们进群这些，但是不停的同意微信好友验证，再发送群邀请真的是太痛苦了，相信很多做公众号的小伙伴都和我一样，作为一名开发，这种重复劳动是绝对不能忍受的基于这种情况和公司业务情况，调研发现了并了解到了[wechaty](https://wechaty.js.org/)，发现其提供的功能能够覆盖到企业和个人微信，并且能够自己定制化开发符合自己需求的功能。

## Wechaty 是什么

微信个人号功能非常强大和灵活，是一个非常适合用来做 ChatBot 的载体。它可以灵活不受限制的发送语音短信、视频、图片和文字，支持多人群聊。但是使用微信个人微信号作为 ChatBot，需要通过非官方的第三方库接入微信。因为截至 2018 年底，微信尚无任何官方的 ChatBot API 发布。

Wechaty 是一个开源的的对话机器人 SDK，支持 个人号 微信。它是一个使用 Typescript 构建的 Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持 Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。

在 GitHub 上可以找到很多支持微信个人号接入的第三方类库，其中大多都是基于 Web Wechat 的 API 来实现的，如基于 Python 的 WeixinBot，基于 Node.js 的 Wechaty 等。少数支持非 Web 协议的库，大多是商业私有闭源的，Wechaty 是少有的开源项目支持非 Web 协议的类库。

只需要 6 行代码，你就可以 通过个人号 搭建一个 微信机器人功能 ，用来自动管理微信消息。

## 更多功能包括

- 消息处理：关键词回复
- 群管理：自动入群，拉人，踢人
- 自动处理好友请求
- 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务
- ... 请自行开脑洞
  所有你能想到的交互模式。在微信上都有实现的可能。

每日定时拉取天气预报。

每天给你心爱的人发送早安和晚安信息。

什么成语接龙啦。快问快答等等功能

## 当然 wechaty 的功能服务并不是免费的

200/月的费用，如果你是个人开发可能会斟酌一二。但是你可以通过社区申请一个长达 15 天的免费 token 来尝试使用和开发一个小型机器人，从而决定你是否需要购买使用。
关于申请的地址我放在了这里[Wechaty Token 申请及使用文档和常见问题](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 基于 wechaty-puppet-service 开发企业级微信机器人

## 目录结构

```js
├── config
│   └── index.js // 配置文件
├── package.json
├── service
│   ├── bot-service
│   │   ├── error-service.js
│   │   ├── friendship-service.js
│   │   ├── heartbeat-service.js
│   │   ├── login-service
│   │   │   ├── function-service.js
│   │   │   └── index.js
│   │   ├── logout-service.js
│   │   ├── message-service
│   │   │   ├── function-service.js
│   │   │   └── index.js
│   │   ├── ready-service
│   │   │   ├── function-service.js
│   │   │   └── index.js
│   │   ├── room-invite-service.js
│   │   ├── room-join-service.js
│   │   ├── room-leave-service.js
│   │   ├── room-topic-service.js
│   │   └── scan-service
│   │       └── index.js
│   ├── common-service
│   │   ├── chatbot-service.js
│   │   ├── ding-service.js
│   │   └── oss-service.js
│   └── redis-service
│       └── index.js
├── src
│   └── main.js // 入口
├── store
│   └── index.js // 全局存储对象
├── utils
│   ├── oss.js // 阿里云oss认证
│   └── redis.js // redis认证登录
└── yarn.lock
```

src/main.js

```js
const { Wechaty } = require("wechaty"); // 机器人木偶

const { onScan } = require("../service/bot-service/scan-service"); // 当机器人需要扫码登陆的时候会触发这个事件。
const { onLogin } = require("../service/bot-service/login-service"); // 当机器人成功登陆后，会触发事件，并会在事件中传递当前登陆机器人的信息
const { onLogout } = require("../service/bot-service/logout-service"); // 当机器人检测到登出的时候，会触发事件，并会在事件中传递机器人的信息。
const { onReady } = require("../service/bot-service/ready-service"); // 当所有数据加载完成后，会触发这个事件。在wechaty-puppet-padchat 中，它意味着已经加载完成Contact 和Room 的信息。
const { onMessage } = require("../service/bot-service/message-service"); // 当机器人收到消息的时候会触发这个事件。
const { onRoomInvite } = require("../service/bot-service/room-invite-service"); // 当收到群邀请的时候，会触发这个事件。
const { onRoomTopic } = require("../service/bot-service/room-topic-service"); // 当有人修改群名称的时候会触发这个事件。
const { onRoomJoin } = require("../service/bot-service/room-join-service"); // 当有人进入微信群的时候会触发这个事件。机器人主动进入某个微信群，那个样会触发这个事件。
const { onRoomleave } = require("../service/bot-service/room-leave-service"); // 当机器人把群里某个用户移出群聊的时候会触发这个时间。用户主动退群是无法检测到的。
const { onFriendship } = require("../service/bot-service/friendship-service"); // 当有人给机器人发好友请求的时候会触发这个事件。
const { onHeartbeat } = require("../service/bot-service/heartbeat-service"); // 获取机器人的心跳。
const { onError } = require("../service/bot-service/error-service"); // 当机器人内部出错的时候会触发error 事件。

const { wechatyToken } = require("../config/index"); // 机器人token
const { globalData } = require("../store/index"); // 全局对象

globalData.bot = new Wechaty({
  puppet: "wechaty-puppet-service",
  puppetOptions: {
    token: wechatyToken,
  },
});

globalData.bot
  .on("scan", onScan)
  .on("login", onLogin)
  .on("logout", onLogout)
  .on("ready", onReady)
  .on("message", onMessage)
  .on("room-invite", onRoomInvite)
  .on("room-topic", onRoomTopic)
  .on("room-join", onRoomJoin)
  .on("room-leave", onRoomleave)
  .on("friendship", onFriendship)
  .on("heartbeat", onHeartbeat)
  .on("error", onError)
  .start();
```

### 具体功能实现及代码

- 扫码登录
  通过 node 启动后，触发 onScan 事件，将登录二维码打印在控制台，扫码登录

```js
const QrcodeTerminal = require("qrcode-terminal");
const { ScanStatus } = require("wechaty-puppet");

/**
 * @method onScan 当机器人需要扫码登陆的时候会触发这个事件。 建议你安装 qrcode-terminal(运行 npm install qrcode-terminal) 这个包，这样你可以在命令行中直接看到二维码。
 * @param {*} qrcode
 * @param {*} status
 */
const onScan = async (qrcode, status) => {
  try {
    if (status === ScanStatus.Waiting) {
      console.log(
        `========================👉二维码状态：${status}👈========================\n\n`
      );
      QrcodeTerminal.generate(qrcode, {
        small: true,
      });
    }
  } catch (error) {
    console.log("onScan", error);
  }
};

module.exports = { onScan };
```

- 登录成功
  扫码登录成功后会触发 onLogin 事件，通过事件接收到登录信息和机器人信息，通过钉钉接口将登录通知发送至钉钉群内

```js
const {
  notificationLoginInformation,
} = require("../../common-service/ding-service");
const { updateBotInfo } = require("./function-service");
const { globalData } = require("../../../store/index");

/**
 * @method onLogin 当机器人成功登陆后，会触发事件，并会在事件中传递当前登陆机器人的信息
 * @param {*} botInfo
 */
const onLogin = async (botInfo) => {
  try {
    console.log(
      "========================👉 onLogin 👈========================\n\n"
    );
    console.log(`机器人信息：${JSON.stringify(botInfo)}\n\n`);
    // 全局存储机器人信息
    globalData.botPayload = botInfo.payload;
    // 更新机器人列表
    updateBotInfo();
    // 机器人登录登出提醒/通知钉钉接口
    notificationLoginInformation(true);
  } catch (error) {
    console.log(`onLogin: ${error}`);
  }
};

module.exports = { onLogin };
```

— 机器人异常退出
当 node 服务异常终端，或者手机上退出机器人登录后会触发 onLogout 事件，同样钉钉群内通知信息，并且销毁程序中运行的一些定时器等

```js
const {
  notificationLoginInformation,
} = require("../common-service//ding-service");
const { globalData } = require("../../store/index");

/**
 * @method onLogout 当机器人检测到登出的时候，会触发事件，并会在事件中传递机器人的信息。
 * @param {*} botInfo
 */
const onLogout = async (botInfo) => {
  try {
    console.log(
      "========================👉 onLogout 👈========================"
    );
    console.log(`当bot检测到注销时，将与当前登录用户的联系人发出注销。`);
    // 全局存储机器人信息
    globalData.botPayload = botInfo.payload;
    const { updateRoomInfoTimer, chatbotSayQueueTimer } = globalData;
    // 机器人退出清空定时器
    if (updateRoomInfoTimer) {
      clearTimeout(updateRoomInfoTimer);
    }
    if (chatbotSayQueueTimer) {
      clearInterval(chatbotSayQueueTimer);
    }
    // 机器人登录登出提醒/通知钉钉接口
    notificationLoginInformation(false);
  } catch (error) {
    console.log(`error in onLogout：${error}`);
  }
};

module.exports = { onLogout };
```

- 消息接收处理
  当微信接收到新的消息时候会触发 onMessage 事件，通过事件内对消息的判断，群内消息还是私聊消息等做出不同的逻辑处理。从而实现业务需求。部分代码如下

```js
const dayjs = require("dayjs");
const { say } = require("../../common-service/chatbot-service");
const {
  isCanSay,
  roomIdentifyVin,
  rooImageIdentifyVin,
  contactIdentifyVin,
  contactImageIdentifyVin,
  messageProcessing,
  storageRoomMessage,
  storageContactMessage,
} = require("./function-service");
const {
  roomMessageFeedback,
  contactMessageFeedback,
} = require("../../common-service/ding-service");
const { globalData } = require("../../../store/index");
const { Message } = require("wechaty");

/**
 * @method onMessage 当机器人收到消息的时候会触发这个事件。
 * @param {*} message
 */
const onMessage = async (message) => {
  try {
    console.log(
      "========================👉 onMessage 👈========================\n\n"
    );
    // 机器人信息
    const { botPayload } = globalData;
    // 获取发送消息的联系人
    const contact = message.from();
    // 获取消息所在的微信群，如果这条消息不在微信群中，会返回null
    const room = message.room();
    // 查看这条消息是否为机器人发送的
    const isSelf = message.self();
    // 处理消息内容
    const text = await messageProcessing(message);
    // console.log(`========================👉 处理消息后内容为：${text} 👈========================\n\n`)
    // 消息为空不处理
    if (!text) return;

    // 消息详情
    const messagePayload = message.payload;
    // console.log(`========================👉 消息详情：${JSON.stringify(messagePayload)} 👈========================\n\n`)
    // 消息联系人详情
    const contactPayload = contact.payload;
    // console.log(`========================👉 消息联系人详情：${JSON.stringify(contactPayload)} 👈========================\n\n`)
    // 群消息
    if (room) {
      console.log(
        `========================👉 群聊消息 👈========================\n\n`
      );
      // 做相应的逻辑处理
      // 私聊消息
    } else {
      console.log(
        `========================👉 私聊消息 👈========================\n\n`
      );
      console.log(
        `消息时间：${dayjs(messagePayload.timestamp).format(
          "YYYY-MM-DD HH:mm:ss"
        )}\n\n微信名称：${contactPayload.name}\n\n微信类型：${
          contactPayload.type
        }\n\n备注昵称：${
          contactPayload.alias
        }\n\n消息内容：${text}\n\n消息类型：${messagePayload.type}\n\n`
      );
    }
  } catch (error) {
    console.log(`onMessage：${error}`);
  }
};

module.exports = { onMessage };
```

至于其他的一些生命周期以及钩子函数。大家可以[参考文档](https://wechaty.js.org/)做出属于自己的应用机器人

### 封装 say 方法

因为 say()方法会在多处调用，并且要根据不同的消息类型发送的内容做出不同的数据处理。大家以后也会遇到，因此这里将我封装的一个 say 方法展示给大家用于参考

```js
const { MiniProgram, UrlLink, FileBox } = require("wechaty");
const dayjs = require("dayjs");
const { DelayQueueExector } = require("rx-queue");
const {
  redisHexists,
  redisHset,
  redisHget,
  redisSet,
  redisLpush,
} = require("../redis-service/index");
const { globalData } = require("../../store/index");

const delay = new DelayQueueExector(10000);

/**
 * @method say 机器人发送消息
 * @param {*} messageType   消息类型   7文本，1文件，6图片，3个人名片，14卡片链接 9小程序
 * @param {*} sender        来源   房间 || 个人 实例对象
 * @param {*} messageInfo 内容
 */
/**
 * messageInfo 数据结构
 *      tetx: string        文本消息必传
 *      fileUrl: string     文件消息必传
 *      imageUr: string     图片消息必传
 *      cardId: string      个人名片消息必传
 *      linkInfo: object    卡片消息必传
 *          description: string     描述
 *          thumbnailUrl: string    缩略图地址
 *          title: string           标题
 *          url: string             跳转地址
 */

async function say({ messageType, sender, messageInfo }) {
  // console.log(messageType);
  // console.log(sender);
  // console.log(messageInfo);
  try {
    return new Promise(async (resolve, reject) => {
      // 机器人信息
      const { bot } = globalData;
      // 枚举消息类型
      const MessageType = {
        text: 7, // 文本
        fromFile: 1, // 文件
        fromUrl: 6, // 图片
        contactCard: 3, // 个人名片
        urlLink: 14, // 卡片链接
        miniProgram: 9, // 小程序
      };

      // 内容不存在
      if (!messageInfo) {
        return;
      }
      // 要发送的消息内容
      let content;

      switch (messageType) {
        // 文本 7
        case MessageType.text:
          content = messageInfo.text;
          break;
        // 文件 1
        case MessageType.fromFile:
          content = FileBox.fromFile(messageInfo.fromFile);
          break;
        // 图片 6
        case MessageType.fromUrl:
          content = FileBox.fromUrl(messageInfo.fromUrl);
          break;
        // 个人名片 3
        case MessageType.contactCard:
          content = await bot.Contact.load("1688853777824721");
          break;
        // 链接 14
        case MessageType.urlLink:
          content = new UrlLink({
            description:
              "WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love",
            thumbnailUrl:
              "https://avatars0.githubusercontent.com/u/25162437?s=200&v=4",
            title: "Welcome to Wechaty",
            url: "https://github.com/wechaty/wechaty",
          });
          break;
        // 小程序 9
        case MessageType.miniProgram:
          content = new MiniProgram({
            appid: "wx60090841b63b6250",
            title: "我正在使用Authing认证身份，你也来试试吧",
            pagePath: "pages/home/home.html",
            description: "身份管家",
            thumbUrl:
              "30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400",
            thumbKey: "42f8609e62817ae45cf7d8fefb532e83",
          });
          break;
        default:
          break;
      }
      delay.execute(async () => {
        sender
          .say(content)
          .then((value) => {
            console.log(
              `========================👉 机器人回复 👈========================\n\n`
            );
            resolve();
          })
          .catch((reason) => {
            console.log(
              `========================😢 机器人发送消息失败 😢========================\n\n`,
              reason
            );
          });
      });
    });
  } catch (error) {
    console.log("error in say", error);
  }
}
module.exports = {
  say,
};
```

对了，对于 onMessage 事件中消息格式的判断我也做了一层封装，这里给大家提供参考。

```js
/**
 * @method messageProcessing 处理消息内容
 * @param {*} message
 */
async function messageProcessing(message) {
  try {
    return new Promise(async (resolve, reject) => {
      console.log(
        `========================👉 messageProcessing 👈========================\n\n`
      );
      // 消息详情
      const messagePayload = message.payload;
      // 获取消息的文本内容。
      let text = message.text();

      /** Unknown: 0,
          Attachment: 1,
          Audio: 2,
          Contact: 3,
          ChatHistory: 4,
          Emoticon: 5,
          Image: 6,
          Text: 7,
          Location: 8,
          MiniProgram: 9,
          GroupNote: 10,
          Transfer: 11,
          RedEnvelope: 12,
          Recalled: 13,
          Url: 14,
          Video: 15
      */
      // 消息类型
      switch (messagePayload.type) {
        // 附件 0
        case Message.Type.Unknown:
          console.log(
            `========================👉 消息类型为未知消息：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一个未知消息，请在手机上查看]";
          break;
        // 附件 1
        case Message.Type.Attachment:
          console.log(
            `========================👉 消息类型为附件：${messagePayload.type} 👈========================\n\n`
          );
          // 暂时不知道怎么处理
          text = "[你收到一个附件，请在手机上查看]";
          break;
        // 音频 2
        case Message.Type.Audio:
          console.log(
            `========================👉 消息类型为音频：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一条语音消息，请在手机上查看]";
          break;
        // 个人名片 3
        case Message.Type.Contact:
          console.log(
            `========================👉 消息类型为个人名片：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一张个人名片，请在手机上查看]";
          break;
        // 聊天记录 4
        case Message.Type.ChatHistory:
          console.log(
            `========================👉 消息类型为聊天记录：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到聊天记录，请在手机上查看]";
          break;
        // 表情符号 5
        case Message.Type.Emoticon:
          console.log(
            `========================👉 消息类型为表情符号：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到表情符号，请在手机上查看]";
          // 暂时不知道怎么处理
          break;
        // 图片 6
        case Message.Type.Image:
          console.log(
            `========================👉 消息类型为图片：${messagePayload.type} 👈========================\n\n`
          );
          // 上传图片至阿里云获取图片地址
          text = await addImageOss(message);
          break;
        // 文本 7
        case Message.Type.Text:
          console.log(
            `========================👉 消息类型为文本：${messagePayload.type} 👈========================\n\n`
          );
          // 去空格换行
          text = text.replace(/\s+/g, "");
          break;
        // 位置 8
        case Message.Type.Location:
          console.log(
            `========================👉 消息类型为位置：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一条图片消息，请在手机上查看]";
          break;
        // 小程序 9
        case Message.Type.MiniProgram:
          console.log(
            `========================👉 消息类型为小程序：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一个小程序消息，请在手机上查看]";
          break;
        // GroupNote 10
        case Message.Type.GroupNote:
          console.log(
            `========================👉 消息类型为GroupNote：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一个GroupNote，请在手机上查看]";
          break;
        // Transfer 11
        case Message.Type.Transfer:
          console.log(
            `========================👉 消息类型为Transfer：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一个Transfer，请在手机上查看]";
          break;
        // 红包 12
        case Message.Type.RedEnvelope:
          console.log(
            `========================👉 消息类型为红包：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一个红包，请在手机上查看]";
          break;
        // Recalled 13
        case Message.Type.Recalled:
          console.log(
            `========================👉 消息类型为Recalled：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一个Recalled，请在手机上查看]";
          break;
        // 链接地址 14
        case Message.Type.Url:
          console.log(
            `========================👉 消息类型为链接地址：${messagePayload.type} 👈========================\n\n`
          );
          // 暂时不知道怎么处理
          text = "[你收到一条链接消息，请在手机上查看]";
          break;
        // 视频 15
        case Message.Type.Video:
          console.log(
            `========================👉 消息类型为视频：${messagePayload.type} 👈========================\n\n`
          );
          text = "[你收到一个视频消息，请在手机上查看]";
          break;
        default:
          text = "";
          break;
      }
      resolve(text);
    });
  } catch (error) {
    console.log("error in messageProcessing", error);
  }
}
```

为什么这样做一层封装处理，是因为我们的业务需求要将聊天内容进行 redis 和 mysql 数据存储。方便以后数据订正和查询使用。

### 实现的功能

基于 wechaty 我们实现的功能有那些呢？

— 根据关键词反馈消息

- 识别图片
- 关键词指令绑定群信息。根据不同指令进行群配置。
- redis 存储机器人信息。将群信息存储并同步在 redis 和 mysql 中。后台配置对应群是否开启某些功能等等。
- 定时发送消息
- 群邀请自动通过，入群以后做出相应数据存储逻辑判断功能设置等
- 好友申请自动通过，关键字申请自动邀请入不同的群，功能覆盖等等
- 等等功能。

## 最后

你如果想用我这些东西，拉下代码 config.js 里换下 token 和一些配置信息就可以，当然我在不停更新，功能会越来越多，所以仓库中代码和文中会有些不一样，使用时简单看下代码，都写了详细注释，也很简单，但是因为代码中很多地方涉及到来企业敏感信息。我只好重新写来一份最小可执行的[demo](https://github.com/zhihuifanqiechaodan/wechaty-bot)，大家仅供参考。

### ❤️ 看完帮个忙

如果你觉得这篇内容对你挺有启发，我想邀请你帮我个小忙：

**点赞**，让更多的人也能看到这篇内容（收藏不点赞，都是耍流氓 -\_-）

**关注公众号「番茄学前端」**，我会定时更新和发布前端相关信息和项目案例经验供你参考。

## 这里提供给大家一个最小demo

[项目地址](https://github.com/zhihuifanqiechaodan/wechaty-bot)

## 感谢

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

> 作者: [zhihuifanqiechaodan](https://github.com/zhihuifanqiechaodan) 前端开发工程师
