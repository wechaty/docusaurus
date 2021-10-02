---
title: 居然有人能忘记吃饭？写个微信机器人提醒他
author: diaozxin007
categories: project
tags:
  - code
  - social
image: /assets/2019/remind-eat-1.webp
---

居然有人忘记吃饭？？？

![image](/assets/2019/remind-eat-1.webp)

为了解决这个问题，我写了一个微信机器人到点就提醒他吃饭。

[Github 地址](https://github.com/diaozxin007/remindEat)

## 使用方法

```shell
git clone https://github.com/diaozxin007/remindEat
```

修改 config/default.json 里面的 'toName' 为要提醒人的备注名称。

```shell
cd remindEat
npm install
```

`wechaty` 使用了无头浏览器，安装的过程中会到 google 下载 chromium。如果遇到下载不成功的错误。可以尝试

```shell
export PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org
npm install
```

编译完成后：

```shell
node remindEat.js
```

如果在 `ubuntu` 上启动报错缺少包，可以参考 [puppeteer/docs/troubleshooting.md](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md)

到时候对方应该不会忘记吃饭了。

![image](/assets/2019/remind-eat-2.webp)

## 实现原理：

这个机器人主要使用两个库：

* [wechaty](https://www.npmjs.com/package/wechaty) 一个 node 实现的微信机器人。
* [node-schedule](https://www.npmjs.com/package/node-schedule) 一个定时任务触发器。

其实核心的原理，就在 wechaty 登录以后，注册了一个定时任务。这个定时任务，用于在饭点的时候，注册另外一个 schedule ，同时这个 schedule 是为了实现每分钟一次的提示。

当对方按照指定的话术服务短信的时候，我们只需要调用每分钟提醒一次的 `schedule cancel()` 方法。

希望每一个人都能按时吃饭，谢谢大家。

> Author: [犀利豆](https://xilidou.com/) 北邮本科，University of Leicester EE 研究生，Java后端开发，目前就职知乎。
>
> [原文地址](https://xilidou.com/2019/05/07/wx-bot/#more)
