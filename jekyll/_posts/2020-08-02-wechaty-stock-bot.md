---
title: "股票盯盘助手"
author: wengcan
categories: project
tags:
  - padplus
  - project
  - stock
  - finance
image: /assets/2020/wechaty-stock-bot/header.jpg
---

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

随着“牛市”的到来, 各种炒股，荐股的群又活跃起来， 大佬荐股的同时， 韭菜们也需要快速了解该股票的行情和基本面，于是有了这个小工具

```shell
股市有风险，投资需谨慎
```

<!--more-->

### 功能

⭐ 监听群聊内容，从群聊内容中分析并提取所包含的股票名称，回复相关股票实时行情。

⭐ 大盘指数查询，可查询上证指数，深圳成指，创业板指，和科创50指数。

⭐ 龙虎榜查询，可查询当日龙虎榜或者查询指定日期龙虎榜。

⭐ 更多功能开发中...

### 运行

克隆项目

```shell

git clone https://github.com/wengcan/stock-bot.git

cd stock-bot

```

安装依赖

```shell
npm install
```

参考config.sample.js 创建config.js 文件

```shell
export const token = "puppet_padplus_xxxx";
export const activeRooms = ['BOT_TEST','测试群聊'];
```

获取最新股票代码列表

```shell
npm run helper
```

启动项目

```shell
npm start
```

### 效果图

- ![截图](/assets/2020/wechaty-stock-bot/pic01.png)
- ![截图](/assets/2020/wechaty-stock-bot/pic02.png)

### 致谢

🙏感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
🙏感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token

> Author: [wengcan](https://github.com/wengcan)
> Code: [stock-bot](https://github.com/wengcan/stock-bot)
