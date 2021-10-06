---
title: "人类的本质是复读机 - 可能是世界上最无聊的机器人"
author: burgerburglar
categories: project
tags:
  - typescript
  - python
  - entertainment
image: /assets/2021/09-the-stupidest-bot-ever-created/640px-internet-meme-about-fuduji.svg.webp
---
[![Wechaty Contributor Program](https://img.shields.io/badge/Wechaty-Contributor%20Program-green.svg)](https://wechaty.js.org/docs/contributing/)

## 前言

这个可能是世界上最无聊的机器人。如果你看到了这里，恭喜你，你已经浪费了人生中宝贵的一分钟。如果有四十个人看到了这里，那么一节课的时间已经没了。

机器人的特点是，不经意间触发，意料之外又情理之中，实现一种后现代主义的幽默感。

代码开源在 [BurgerBurglar/mouse_bot](https://github.com/BurgerBurglar/mouse_bot)。我是 TypeScript 初学者，很多地方都是瞎写的。如果代码实在太丑，欢迎留言给我提意见。很多地方我实在是不会写，就用 Python 搭了个 API，再用 TypeScript 调用接口直接回复。

## 功能列表

- 群聊自动复读
- 无厘头自动回复
- 成语接龙
- 游戏发售倒计时
- 足球比赛预告
- 足球实时赔率查询
- 质问别人为什么拍我
- 艾特别人
- 让川普举牌子
- 下载链接里的视频

## 群聊自动复读

每个群总有几个复读机，喜欢像傻子一样在群聊里复制粘贴别人的话。这时候，如果你不跟着复读，就会显得和这个群的智商水平格格不入。为了避免这种尴尬，我只好让机器人代劳了。

![congrats](/assets/2021/09-the-stupidest-bot-ever-created/congrats.webp)

![england-champions](/assets/2021/09-the-stupidest-bot-ever-created/england-champions.webp)

当然有可能有人恶意使用机器人，比如这样：

![bot-abuse](/assets/2021/09-the-stupidest-bot-ever-created/bot-abuse.webp)

实现的原理是：对于每一个群聊，生成一个队列，储存最近的十条信息。收到信息时，如果新信息在队列中已经出现了三次，那么就自动复读。

同时，每个群聊还有另外一个队列，储存最近三个已经复读过的内容，避免反复复读刷屏。

## 无厘头自动回复

很简单的功能，如果触发了关键词，就随机挑选一个回复。

![juejuezi](/assets/2021/09-the-stupidest-bot-ever-created/juejuezi.webp)

![wolf-warriors](/assets/2021/09-the-stupidest-bot-ever-created/wolf-warriors.webp)

![guangxi-monkeys](/assets/2021/09-the-stupidest-bot-ever-created/guangxi-monkeys.webp)

### 群友语录

生活中，总有些话发人深省，总有些句子让你泪流满面。互联网是有记忆的，而记忆也是会随风飘逝的。为了铭记这些句子，机器人正在努力。

![famous-quotes](/assets/2021/09-the-stupidest-bot-ever-created/famous-quotes.webp)

## 成语接龙

很多群聊里都有成语接龙这一传统爱好。屡次败北之后，我决定使用科技打败他们。

![idioms](/assets/2021/09-the-stupidest-bot-ever-created/idioms.webp)

当然，本功能还有很多不足。

- 比如由于三流网络成语词典，机器人居然把味同嚼蜡读成了味同嚼醋，造成了重大 bug。

![idiom-bug](/assets/2021/09-the-stupidest-bot-ever-created/idiom-bug.webp)

- 机器人的词汇量和初中语文老师（我妈）比，还有一定差距。

![idiom-lost](/assets/2021/09-the-stupidest-bot-ever-created/idiom-lost.webp)

本机器人追求的是一个出其不意的效果。谁在群里不小心说了个成语，机器人一定会迅速作出反应，群里就能玩好一会。很多死群都因为这个功能复活了。

开发了这个功能之后，我被一个成语接龙群踢了。

> 成语接龙代码由 [sfyc23/China-idiom](https://github.com/sfyc23/China-idiom) 提供

## 游戏发售倒计时

总有些吃饱了没事干的群友在群里每天复读某某游戏还有几天发售。为了避免群友手动计算日期，我开发了游戏发售倒计时机器人。

首先在有游戏时光上爬取游戏发售日期，存到数据库里：

![games-db](/assets/2021/09-the-stupidest-bot-ever-created/games-db.webp)

然后，使用[字符串近似匹配](https://github.com/seatgeek/fuzzywuzzy)，在游戏群里查询倒计时。无论使用中文名还是外文名，都可以查询。

![games-countdown](/assets/2021/09-the-stupidest-bot-ever-created/games-countdown.webp)

## 足球比赛预告/足球实时赔率查询

适合懒得打开虎扑懂球帝却勤快得在群里打字的人，可能他们都住在微信里了吧。

![football-time](/assets/2021/09-the-stupidest-bot-ever-created/football-time.webp)

![football-odds](/assets/2021/09-the-stupidest-bot-ever-created/football-odds.webp)

> 赔率数据来源 [Odds checker](https://www.oddschecker.com/)，使用实时各大平台最高赔率。

## 质问别人为什么拍我

在我开发机器人之前，拍一拍是微信上最无聊的功能。所以当有人手贱拍我的时候，我会大声质问他们：

![why-harrass-me](/assets/2021/09-the-stupidest-bot-ever-created/why-harrass-me.webp)

就是不知道为什么大家拍得更勤快了。

## 艾特别人

除我以外，群里总有些自以为很幽默的人，喜欢修改群昵称然后让别人艾特他。为了避免没人搭理他的尴尬，我开发了艾特机器人。

![mention-me](/assets/2021/09-the-stupidest-bot-ever-created/mention-me.webp)

![mention-me-nsfw](/assets/2021/09-the-stupidest-bot-ever-created/mention-me-nsfw.webp)

## 让川普举牌子

当你有话不方便说的时候，可以让他来帮你表达一下。

![trump-1](/assets/2021/09-the-stupidest-bot-ever-created/trump-1.webp)

{% include iframe.html src="/assets/2021/09-the-stupidest-bot-ever-created/trump-1-video.webp" %}

![trump-2](/assets/2021/09-the-stupidest-bot-ever-created/trump-2.webp)

{% include iframe.html src="/assets/2021/09-the-stupidest-bot-ever-created/trump-2-video.webp" %}

> 使用了 ivanseidel 的 [rotoscope](https://github.com/ivanseidel/Is-Now-Illegal/blob/490a8e255e4447f8134f3dd66013a8cce376c87c/rotoscope/rotoscope.py)

## 下载链接里的视频

当有人发送视频链接的时候，防火墙可能会阻挡很多人。更过分的是，很多app需要你下载才能打开视频，体验很差。所以，为什么不下载下来发到群里呢？

![video-download](/assets/2021/09-the-stupidest-bot-ever-created/video-download.webp)

## 黑名单与白名单

为了避免在不合时宜的情况触发关键词，可以配置黑名单或者白名单。
比如：

```json
{
    "userNames": ["妈妈", "领导"],
    "roomNames": [
        "Wechaty Developers' Home 2",
        "非常重要的工作群",
        "家族群"
    ],
    "keywords": {
        "动物保护群": ["猴"]
    }
}
```

## 展望未来

由于 UOS 关闭了 WeChat 用户的接口，机器人现在已经离开了我们 (R.I.P.)。如果能参加 WeChaty Contributor Program，我会用 Padlocal token 复活机器人，并增加一些功能：

### 点歌功能

UOS 协议不能发送 URL Link，所以这个功能暂时无法实现。我的想法是，收到`点歌`关键词后，调用网易云音乐的接口，在群里发送可以直接播放的音乐。

### 优化视频下载

UOS 的视频发送很慢，而且经常有 bug（时长不对，没有声音，电脑端打开会卡死...）使用 Padlocal 发送应该可以解决大部分问题。

### 优化屏蔽功能

目前智能全局屏蔽和关键词屏蔽，以后会加上针对每个功能、每个用户、每个群聊的屏蔽功能。

## 结语

感谢各位吃饱了没事干的程序员，看我这么无聊的文章。但是我不认为我的工作没有价值，因为人类的本质是[#复读机器人](https://github.com/BurgerBurglar/mouse_bot)。
