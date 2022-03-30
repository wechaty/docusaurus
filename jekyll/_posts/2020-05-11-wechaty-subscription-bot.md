---
title: "用Wecahty制作订阅机器人(B站)"
author: fish-ball
categories: tutorial
tags:
  - subscribe
image: /assets/2020/wechaty-subscription-bot/teaser.webp
---

## 项目背景

我是一个主 Python 的全栈工程师，偶然发现了 Wechaty 这个如此惊艳的项目，顿时爱了，然后毫不犹豫申请了开发者号。

要加入这个项目的大家庭，我需要一个投名状，当时我瞬间脑海中闪现了无数的想法，不过最终选定了这一个比较轻量又比较实用的动手干起来了。

平时在 Telegram 上有很多各种平台的订阅机器人，只要订阅了指定的频道，就可以在该频道一有更新的时候收到机器人的通知，非常方便抢沙发。既然是机器人，为什么我不自己做一个呢？那么我就想用 Wechaty 这个平台，创建一个国内各平台的订阅机器人，就先从 B 站开始吧！

## 基础思路

然后我简单看了一下 DEMO，虽然 Node 和 ts 我都只会点基础语法，但是框架实在是设计得太好了，我用起来简直就像一个认识了十年的故友一样，写下来的代码句句投机~~

于是先把登录部分撸下来：

```javascript
bot.on('scan', (qrcode, status) => {
  if (status === ScanStatus.Waiting) {
    console.log(qrcode);
    QrcodeTerminal.generate(qrcode, {
      small: true,
    });
  }
}).on('message', async msg => {
  const text = msg.text();
  const sender = msg.from();
  console.log(text, sender);
  // 后面就在这里做文章了
}).start();
```

这个很简单就测试过了，然后事实上后面的工作就是如何在 message 事件里面做文章了，下一步的话，我需要实现三个最基础的功能：

+ 订阅频道
+ 推送新内容
+ 控制功能

那么下面围绕这些内容展开说一下整个过程。

## 订阅频道

首先，既然是机器人，交互都来源于对话，那么最方便的方式就是直接将 UP 主的频道链接发给机器人，然后就知道具体的频道是什么了，所以这里做一个简单的正则就可以判断到发来的订阅请求：

```javascript
// ...
}).on('message', async msg => {
  // ...
  const match = /https:\/\/space\.bilibili\.com\/(\d+)/.exec(text);
  if (!match) return;
  const channelId = match[1];
  // ...
}).start();
```

好了之后，我们现在实际上拿到了 `msg.from()` 和 `channelId`，这样的话实际上我们需要把这种关联持久化下来，每一个 `msg.from()` 对应的用户都应当有一个订阅的频道列表，然后每个订阅频道下面记录一些附加信息。

我们需要用一个持久化的方式，我想：MySQL? Redis? SQLite? 哎都太麻烦，这屁大点事，直接 json 扔进一个静态文件就好了。

所以我们定一个持久化规则，将这些信息扔进 `data/<userid>.subs` 这个 json 文件里面保存，例如：

```json
// file: data/wxid_yjo4lxrava8b22.subs
{
  "subscriptions": {
    "9458053": {
    "lastTimestamp": 1589170983.101,
    "name":"李永乐老师官方"
  }
  }
}
```

这种结构，事实上我们还需要保存一下标题，这个 `lastTimestamp` 记录下了这个订阅下面最晚推送的内容时间，如果这个内容早于这个时间点，我们就不再推送，这样来控制推送的逻辑。

然后我顺手就将这部分持久化的逻辑封装到一个 `UserContext` 类中，通过 `msg.from()` 获得的任意一个 `Contact` 对象都可以构造一个 `UserContext`，然后访问里面的这些持久化的数据，后面的处理，往里面塞方法就可以了。

大概是这样子：

```javascript
class UserContext {
  userId: string;
  fname: string;
  data: any = {};

  constructor(userId: string) {
    this.userId = userId;
    this.fname = `data/${userId}.subs`;
    fs.mkdirSync(path.dirname(this.fname), {recursive: true, mode: 0o644});
    try {
      const content = fs.readFileSync(this.fname);
      this.data = JSON.parse(content && content.toString() || '{}');
      console.log(this.data);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }
  }

  async user() {
    return bot.Contact.find({id: this.userId});
  }

  async save() {
    // 获取
    await fs.promises.writeFile(this.fname, JSON.stringify(this.data));
    console.log('write ok');
  }

  static getUserIdList() {
    try {
      const files = fs.readdirSync('data');
      return files.filter(f => /\.subs$/.test(f))
        .map(f => f.replace(/\.subs/, ''));
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
      return [];
    }
  }
}
```

然后下面这一段把订阅的持久化做完，当然还要反馈一些提示给用户，顺道需要把频道的名称抓下来存在 UserContext 里面。

```javascript
// ...
}).on('message', async msg => {
  // ...
  const channelId = match[1];

  ctx.data.subscriptions[channelId] = ctx.data.subscriptions[channelId] || {};
  const channel = ctx.data.subscriptions[channelId];
  channel.lastTimestamp = Number(new Date()) / 1000;

  // 加载频道名称
  const url = `https://api.bilibili.com/x/space/acc/info?mid=${channelId}&jsonp=jsonp`;
  const resp = await fetch(url);
  const channelInfo = JSON.parse(await resp.text());
  channel.name = channelInfo.data.name;

  await sender!.say(`你已成功订阅《${channel.name}》
:list - 查看当前订阅
:leave <id> - 退订指定频道`);

  console.log(ctx.data);
  await ctx.save();
  // ...
}).start();
```

## 实现内容推送

嗯，这个其实好办，只要启动了之后，轮询一下查一下B站下面这个频道的新内容，如果日期晚于最晚更新的日期，那么就推送给 `UserContext` 对应的用户即可，把消息撸得好看一些就不错。

我把这个动作的代码封装到了一个 `SubscriptionRunner` 类里面（此处省略1000字）：

```javascript
// 定时获取订阅的 UP 主的视频，如果发现更新则推送
class SubscriptionRunner {
  static check() {
    UserContext.getUserIdList().forEach(async userId => {
      console.log(userId);
      const ctx = new UserContext(userId);
      const contact = await ctx.user();
      if (!contact) return;
      // console.log(ctx.data);
      await Promise.all(Object.entries(ctx.data.subscriptions || {}).map(async ([channelId, channelInfo]) => {
        const url = `https://api.bilibili.com/x/space/arc/search?mid=${channelId}&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp`;
        const resp = await fetch(url);
        const data = JSON.parse(await resp.text());
        // console.log(data);
        await Promise.all(data.data.list.vlist.map(async (video: any) => {
          if (video.created > (channelInfo as any).lastTimestamp || 0) {
            const linkPayload = new UrlLink({
              description: video.description,
              thumbnailUrl: video.pic.replace(/^\/\//, 'https://'),
              title: video.title,
              url: `https://bilibili.com/video/${video.bvid}`,
            });
            contact.say(linkPayload);
            // 为了避免因为时间不一致导致重复更新，使用最新的时间点来更新最近时间
            (channelInfo as any).lastTimestamp = video.created;
          }
        }));
      }));
      // 保存所有 ctx 的信息（主要是更新 lastTimestamp 时间）
      await ctx.save();
    });
  }
}
```

然后，启动轮询的时机应该是在登录之后，一分钟刷一次吧：

```javascript
bot.on('login', async () => {
  // 每分钟查一下有没有新片发布
  setTimeout(async () => {
    await SubscriptionRunner.check();
  }, 60000);
});
```

嗯，测试过不错，这样就挺好了。

## 控制功能

作为最小化可用产品，我们还需要一些基础的控制功能才能实现一个闭环，起码应该提供一个查询当前订阅的频道清单以及退订的途径。

所以这两块我在 `UserContext` 类里面加了两个方法实现：

```javascript
class UserContext {

  // ...

  async getSubscriptionList() {
    const content = Object.entries(this.data.subscriptions || {}).map(([channelId, channelInfo]) => {
      return `${channelId} - ${(channelInfo as any).name}`;
    }).join('\n');
    (await this.user())?.say(content);
  }

  async leaveChannel(channelId: string) {
    // console.log(this.data.subscriptions);
    const channel = this.data.subscriptions && this.data.subscriptions[channelId];
    if (!channel) {
      (await this.user())?.say('您没有订阅这个频道，请检查 ID 是否输入正确');
    }
    delete this.data.subscriptions[channelId];
    await this.save();
    (await this.user())?.say(`您已成功退订《${channel.name}》`);
  }

  // ...

}
```

然后在 on message 那里引入一下：

```javascript
bot.on('message', async msg => {

  // ...

  const text = msg.text();
  const sender = msg.from();
  if (!sender) return;

  const ctx = new UserContext(sender.id);
  ctx.data.subscriptions = ctx.data.subscriptions || {};

  // 查询指令
  if (/^:list$/.test(msg.content())) {
    await ctx.getSubscriptionList();
    return;
  }

  // 退订指令
  if (/^:leave \d+$/.test(msg.content())) {
    await ctx.leaveChannel(msg.content().split(' ')[1]);
    return;
  }

  // ...

});
```

这样就大功告成了！以后可以再优化封装一下，加入多几个平台，也是非常实用的呢！

## DEMO

测试机器人(wx_easecloud)：

![逸云科技](/assets/2020/wechaty-subscription-bot/wx_easecloud.webp)

联系作者：

微信号: huangwenchao1987
email: huangwc@easecloud.cn

> 作者: [工画师](https://github.com/fish-ball)，分母为零的斜杠大龄青年程序员。

项目链接：[![wechaty-subsbot](https://img.shields.io/badge/GitHub-wechaty--subsbot-green)](https://github.com/fish-ball/wechaty-subsbot)
