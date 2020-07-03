---

title: "基于Wechaty和NodeJs开发的微信机器人"
date: 2020-07-03 11:30 +0800
author: Johnson-hd
tags:
- nodejs
- wechaty
- wechaty-puppet-padplus
categories: project
header:
  teaser: /assets/2020/wechaty-bot/demo.jpg

---

<!-- markdownlint-disable -->

> Author: [@Johnson-hd](https://github.com/Johnson-hd)

> Code: [@wechat-robot](https://github.com/Johnson-hd/wechaty-bot)

<!--more-->

## wechaty-bot
`wechaty-bot`是基于`NodeJs`和`Wechaty`做的一个微信机器人，目前实现的功能是每日定时用餐提醒，因为我们同事每天都在纠结吃什么，索性把所有要吃的餐厅放在一起，加个权重，然后每天定时推送给我们，省去了烦恼。后续我也会把每日值班、每日文章推送加进来，总之，可以玩的东西很多。

## 开发
```bash
yarn - 安装依赖
yarn dev - 开发调试
yarn build - 上线
```
所有的任务都放在`src/schedule`下，项目启动后，扫码登录，然后会到`schedule`中注册事件，其中有一个`restaurant.ts`即为每日定时用餐提醒任务。需要注意的是，`config/index.ts`中需要放入`wechaty`给我们派发的`token`，具体可以参考`wechaty文档`

## Todo
- [ ] 值班
- [x] 每日餐厅选择
- [ ] 每日推送
- [ ] 云函数启动

## 参考
- [wechaty文档](https://wechaty.js.org/v/zh/)
- [wechaty github](https://github.com/wechaty/wechaty)



 
