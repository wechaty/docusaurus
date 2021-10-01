---
title: "你的微信小助手"
author: peanut
categories: project
tags:
  - padplus
  - social
image: /assets/2020/your-wechat-bot/banner.webp
---

我有一个三百多人的前端开发群，每天都有很多个好友请求，让我添加他们进前端开发群。

每天都得重复这个流程：

同意好友请求 -> 手动拉进交流群。

能用机器代劳的事情为何要用手动？时间都是挤出来的，省出来这点时间给自己充电学习不好吗？

github 上找到了 wechaty ，看到了希望。

## 克隆代码

```bash
git clone git@github.com:isnl/wechat-robot.git
```

### 目录结构

- `config`存放公共配置以及`superagent`请求相关配置
- `imgs`存放相关图片
- `listeners`存放机器人初始化后一系列 callback
  - `on-friendship.js` 处理好友请求
  - `on-login.js` 处理登录
  - `on-message.js` 处理用户消息、群消息
  - `on-scan.js` 处理登录二维码
- `schedule` 对`node-schedule`进行了封装
- `superagent` 存放所有的数据请求、接口封装都在此
- `utils` 公用方法的封装
- `app.js` 入口文件

### 主要依赖

- [wechaty](https://github.com/wechaty/wechaty) 个人微信账号的微信机器人 SDK
- [superagent](https://github.com/visionmedia/superagent) 数据请求
- [cheerio](https://github.com/cheeriojs/cheerio) nodejs 版 jQuery，用于抓取页面内容
- [node-schedule](https://github.com/node-schedule/node-schedule) 一个在 nodejs 中设置定时任务的库
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) 在控制台打印二维码

### 安装依赖

依赖中需要安装`chromium`，使用 npm 会下载失败或者很慢，国内嘛你懂得

**强烈推荐** 使用`cnpm`安装依赖

```bash
cnpm install  //npm install
```

实在不想用 cnpm 可以将 npm 源切换成淘宝源

```bash
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
npm config set puppeteer_download_host https://npm.taobao.org/mirrors
```

### 修改`config`配置

打开`config/index.js` 文件，将里面的配置改为自己的。

### 修改天行接口配置

天行 api 官网 ：[https://tianapi.com/](https://tianapi.com/)  
注册成功后，申请以下接口：

- [每日英语一句话](https://www.tianapi.com/apiview/62)
- [神回复](https://www.tianapi.com/apiview/39)

注册后请打开`superagent/index.js`，将顶部`APIKEY`改为自己天行 api 的`key`即可

其他免费接口可随意申请，自行扩展~

### 运行测试

```bash
cnpm start //npm start
```

### 已实现的功能：

- 热更新，修改代码后免重启，便于在线调试。
- 新增全国肺炎、各省市肺炎数据，按关键字回复即可。
- 添加转大小写、颜色的 rgb 与 base64 互转等开发者常用小工具。
- 每日毒鸡汤、神回复、英语一句话、实时天气查询。
- 自动同意好友请求
- 发送加群指令自动邀请好友进群。

![演示图片](/assets/2020/your-wechat-bot/demo.gif)

底层 api 基于 [wechaty](https://github.com/wechaty/wechaty)

更多微信消息、群消息、好友、对话等相关 api 可查阅官方文档 [wechaty 官方文档](https://github.com/wechaty/wechaty/blob/main/docs/index.md)

> 作者: [peanut](https://github.com/isnl/)
> Code: [Github](https://github.com/isnl/wechat-robot)
