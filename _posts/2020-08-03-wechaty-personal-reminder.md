---
title: "基于 Wechaty 的个人提醒小助手"
author: ziyi
date: "2020-08-03 16:00:00 +0800"
categories: project
tags:
  - code
  - home
image: /assets/2020/wechaty-personal-reminder/header.png
---

> Author: [子弋](https://github.com/forsigner)
> Code: [Github](https://github.com/forsigner/ziyi-bot)

## 背景

你是不是和我一样，每天总是会忘记一些事情，例如：

去 ATM 取一些现金，回到家才记起来,

给汽车加油，回到家才想起来，

下班顺路买像牛奶回家，回到家才想起来...

我，就是这类人，并且深陷其中。

我尝试过使用一些代办事项 App 提醒，发现并不管用，因为我并不会频繁打开它，即使有通知提醒也不管用，因为通知很容易被其他应用通知覆盖。

我也尝试用闹钟来提醒我，发现也不方便，哪种声音太大，并且很容易忽略掉，最大的问题是闹钟列表不好管理。

最终，我的日常提醒是用微信群来实现，为什么用微信呢？因为我发现一天下来微信是打开频率最多、时间最长的应用，如果微信能提醒我，大概率我不会忘记。用微信怎么做呢，我的习惯是建一个微信群，里面就自己一个人，并且把这个群设为置顶，然后在里面输入聊天内容，聊天内容就是要做的事，把聊天标记为未读，这样我大概不会忘记需要做的事，及时错过了时间，聊天窗口还是会继续提醒我。如果用闹钟的话，按掉了可能就会彻底忘记了。

最近了解到 Wechaty，如果有一个微信小助手提醒我，忘记事情的概率应该会大大变小，助手的功能也会比个人微信群更加好用。

## 需求

核心解决的问题：今日代办事项提醒。

个人不希望把这个助手做得太复杂，专注于当日提醒就好，不需要复杂的日程管理。

**功能需求：**

- 需要有一个地方，录入代办事项的地方，可以录入事项名字、提醒时间等信息，我打算用一个 Web 页面来实现
- 使用 Wechaty 实现一个一个机器人，根据录入的清单发送信息提醒

## 技术实现

### 核心库

- koajs
- wechaty
- wechaty-puppet-padplus
- node-schedule

### Web 搭建

网页用 Node.js 搭建，后端用的框架是我自己写的：[tiejs/tie](https://github.com/tiejs/tie)，前端用的是 React，效果如下：

![web](/assets/2020/wechaty-personal-reminder/task-web.png)


代码包含数据库信息，所以就不放出来了。

### 助手实现

核心模块是 wechaty、wechaty-puppet-padplus、node-schedule，代码是开源的，详细可以看：[forsigner/ziyi-bot](https://github.com/forsigner/ziyi-bot)

![bot](/assets/2020/wechaty-personal-reminder/bot.jpg)


### 开发

如何启动助手项目体验？clone 项目 `npm run dev` 跑起来，扫描二维码即可：

```bash
$ git clone git@github.com:forsigner/ziyi-bot.git
$ cd ziyi-bot
$ npm i
$ npm run dev
```

## 展望

暂时此个人助手只实现了最简单的提醒功能，还有很多功能需要完善，未来我会逐渐完善以下功能：

- 任务重复提醒
- 纪念日自动提醒
- 助手聊天对话框添加待办事项
- 助手聊天对话框标记任务完成
- 开发一个 App 管理待办事项，配合 App 通知、闹钟

## 最后

感谢 wechaty 团队创建了这么优秀且易用的工具，有兴趣的可以到 Github 详细了解：[wechaty](https://github.com/wechaty/wechaty)
