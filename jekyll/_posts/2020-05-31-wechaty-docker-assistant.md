---
title: "wechaty Web Panel的构思与实现"
author: leochen-g
categories: project
tags:
  - code
  - web-panel
  - feature
  - ecosystem
image: /assets/2020/web-panel/web-head.png
---

## 平台构思

* 独立账号登录管理
* 所有配置工作都转移到前端可视化页面
* 远程重启项目
* 实时显示登陆状态
* 拥有一个素材库
* 无缝对接智能对话平台
* 平台端以创建应用的模式对接客户端
* 客户端无需关心代码逻辑，只需填入APIKEY和APISECRET即可
* 客户端不关心用户使用的平台（docker化部署）
* 平台后续可以扩展更多功能

平台地址：[《智能微秘书》](https://wechat.aibotk.com/)

## 功能

* [x] 微信每日说,定时给女朋友发送每日天气提醒，以及每日一句

### 定时提醒

* [x] 当天定时提醒  例："提醒 我 18:00 下班了，记得带好随身物品"
* [x] 每天定时提醒  例："提醒 我 每天 18:00 下班了，记得带好随身物品"
* [x] 指定日期提醒  例："提醒 我 2019-05-10 8:00 还有7天是女朋友生日了，准备一下"

### 智能机器人

* [x] 天行机器人
* [x] 图灵机器人
* [ ] 更多

### 群定时任务

* [x] 群新闻定时发送
* [x] 群消息定时发送
* [ ] 更多功能等你来pr

### 关键词

* [x] 关键词加好友
* [x] 关键词加群
* [x] 关键词回复
* [x] 关键词事件
  * [x] 天气查询 例："上海天气"
  * [x] 垃圾分类 例："?香蕉皮"
  * [x] 名人名言 例： "名人名言"
  * [x] 老黄历查询 例： "黄历2019-6-13"
  * [x] 姓氏起源 例： "姓陈"
  * [x] 星座运势 例： "*双子座"
  * [x] 神回复 例： "神回复"
  * [x] 获取表情包 例： "表情包你好坏"
  * [x] 获取美女图 例： "美女图"
  * [ ] 更多待你发现
* [x] 进群自动欢迎
* [x] 加好友自动回复

### 好友及群管理

* [ ] 好友列表
* [ ] 群列表
* [ ] 聊天记录
* [ ] 数据分析

### 自动更新配置文件，无需重启

* [x] 默认给机器人发送 ‘更新’ 触发拉取新配置文件操作，可在面板`小助手配置->关键词回复->关键词事件`进行修改关键词

## 技术选择

### 后端

为了达到想要的效果，一个完整的后端平台是必不可少的，由于自己是前端开发，所以能想到的熟悉语言就是`js`了，而`js`可以拿来写后端的就是`nodejs`了，那是选择自己从0搭建一套完整的解决方案还是选择一个现成的框架去做，我也纠结了很久，最后还是确定下来使用`egg`来实现自己的后端功能。不得不说`egg`是真的很强大，它的插件和中间件功能让人眼前一亮，而且集成的很多功能可以让我专注于业务逻辑开发，而不需要考虑过多的配置。

### 前端

前端首先选的就是vue和element的搭配了，毕竟日常工作用的最多，开发起来上手也快。

### 客户端

客户端当然还是[wechaty](https://docs.chatie.io/)作为核心，由于这次是做一个可视化配置平台，所以在客户端需要很多的重构，因此就把以前[《微信小秘书》](https://juejin.im/post/5ca1dd846fb9a05e6c77b72f)的项目重新推翻重做，重新梳理了事件过滤器与消息过滤器的功能，同时增加群咨询定时任务和群定时任务功能，必不可少的微信每日说功能当然也不能少。

项目地址：[https://github.com/gengchen528/wechat-assistant-pro](https://github.com/gengchen528/wechat-assistant-pro)（如果觉得还可以，请随手来个star，你的star将会是我不断迭代的动力）

## 具体实现

### 独立账号实现

这个比较简单，起初考虑注册一个账号可以配置多个应用，但是考虑到尽快出一版体验，所以暂时就只支持一个注册账号适配一个客户端的配置，后续可能会支持一个账号支持多个客户端的配置。目前仅支持邮箱注册，后期会增加第三方登录功能

### 配置可视化

这一块实现起来也很容易，所有的配置信息都写入到数据库中，每次客户端启动的时候去服务器拉取一下最新的配置信息即可，对于每次改动，需要用户使用另一个微信发送重启命令来拉取最新的配置文件。包含基础信息配置，每日说定时任务配置，群咨询，群消息定时任务，以及关键词自动回复，关键字事件等配置

![1](/assets/2020/web-panel/panel-1.png)

![2](/assets/2020/web-panel/panel-2.png)

![3](/assets/2020/web-panel/panel-3.png)

![4](/assets/2020/web-panel/panel-4.png)

### 远程重启项目

这一块起初是使用了node的`auto-reload`库来加载最新的配置信息，但是定时任务是在每次启动的时候设置的，所以这个库只能满足我一部分的需求。最后使用了`pm2`的文件监控功能，每次发送重启命令的时候，修改监控文件的内容来实现远程重启功能。

pm2配置

```json
{
  "apps": [
    {
      "name": "wechaty-pro",
      "cwd": "./",
      "script": "./index.js",
      "log_date_format": "YYYY-MM-DD HH:mm Z",
      "error_file": "./logs/app-err.log",
      "out_file": "./logs/app-out.log",
      "pid_file": "./logs/node.pid",
      "autorestart": true,
      "instances": 1,
      "min_uptime": "60s",
      "max_restarts": 100,
      "watch": ["reload"], // 监控此文件来达到自动重启目的
      "watch_delay": 1000,
      "ignore_watch": ["node_modules", "logs", "wechat.config.js"],
      "watch_options": {
        "followSymlinks": false
      }
    }
  ]
}
```

### 登录状态实时更新

`wechaty`有一个`heartbeat`事件，可以推送当前客户端登录的状态，所以实现起来也是很方便的

```ts
import {sendHeartBeat}  from '../proxy/aibotk'

async function onHeartBeat(str) {
    if (!str) {
        sendHeartBeat('dead')
    }
    if (str.type === 'scan') {
        sendHeartBeat('scan')
    }
}

module.exports = onHeartBeat
```

![5](/assets/2020/web-panel/panel-5.png)

### 平台与客户端的对接

这里参考了开放api接口平台的模式，使用`apikey`和`apisecret`来确保通信的安全（把所有的请求参数排序后和apisecretkey做hash生成一个签名sign参数，服务器后台只需要按照规则做一次签名计算，然后和请求的签名做比较，如果相等验证通过，不相等就不通过）key与secret在注册的时候自动生成，在个人中心查看

![6](/assets/2020/web-panel/panel-6.png)

### 素材库

素材库的作用是统一管理所有的文字与文件，方便不同场景下的复用。文件支持常用的图片，office等。目前是直接上传到七牛云之中

![7](/assets/2020/web-panel/panel-7.png)

### 客户端多平台通用(docker)

由于前期微信每日说和微信小秘书项目中，很多开发者反应每次在不同平台中下载puppet存在各种问题，而且经常出现下载不了的情况，所以这次客户端建议采用docker化部署。只要有docker环境，就可以使用。

刚开始是准备使用官方提供的docker来进行构建，但是后来发现，官方提供的docker部署方式并不能达到我想要的效果，我的想法是用户直接拉取我生成的docker镜像后，直接简单配置后就可以直接对接《智能微秘书》平台。因此就开始自己编写属于自己项目的`Dockerfile`,不写不知道，一写吓一跳，遇到的问题还是蛮多的，首先采用的是`node:alpine`版本，因为这个版本构建体积最小，但是无奈这个环境无法正常安装`puppet`所需要的字体依赖等文件，没办法还是直接采用了`node:10`这个镜像。但是并没有结束，不能每次`build`镜像都重新下载依赖，所以参考了[《Node.js 基于 Docker 使用的最佳经验》](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)这篇文章的建议对`Dockerfile`文件进行了优化。最终配置文件如下：

```sh
FROM node:10
LABEL maintainer="Leo_chen <chengeng@aibotk.com>"
WORKDIR /home/app
COPY package.json ./
RUN npm config set registry https://registry.npm.taobao.org \
    && npm config set disturl https://npm.taobao.org/dist \
    && npm config set puppeteer_download_host https://npm.taobao.org/mirrors
RUN  npm install \
     && npm run puppet-install

FROM node:10
ENV APT_SOURCE_HOST="mirrors.aliyun.com"
## 清华镜像源（备选）
# ENV APT_SOURCE_HOST=mirrors.tuna.tsinghua.edu.cn
## 中科大源（备选）
# ENV APT_SOURCE_HOST=mirrors.ustc.edu.cn
RUN echo "0. 设置 apt 使用镜像源，然后 update" \
    && sed -i "s@\(deb\|security\).debian.org@${APT_SOURCE_HOST}@g" /etc/apt/sources.list \
    && cat /etc/apt/sources.list \
    && apt-get update --fix-missing \
    # 安装 https 协议需要的依赖
    && apt-get install -y --no-install-recommends \
       ca-certificates apt-transport-https \
    && sed -i "s@http://@https://@g" /etc/apt/sources.list \
    && echo "1. 安装需要的依赖" \
    && apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
    libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
    libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
    ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
WORKDIR /home/app
COPY --from=0 /home/app .
COPY . .
CMD [ "node", "index.js" ]
LABEL \
  org.label-schema.license="MIT License" \
  org.label-schema.build-date="$(date -u +'%Y-%m-%dT%H:%M:%SZ')" \
  org.label-schema.version="$DOCKER_TAG" \
  org.label-schema.name="wechatAssistant" \
  org.label-schema.description="wechatAssistant: 智能微秘书" \
  org.label-schema.url="https://www.xkboke.com/web-inn/secretary/client.html" \
  org.label-schema.vcs-url="https://github.com/gengchen528/wechat-assistant-pro"
```

如果你的wechaty项目也想运行在docker环境中，那么这个配置文件也是适合你的。现在这个Docker镜像已经发布在[Docker hub](https://hub.docker.com/r/aibotk/wechat-assistant)平台，如果想体验，直接`docker pull aibotk/wechat-assistant`即可。

## 部署体验

首先需要注册一个账号： [https://wechat.aibotk.com/](https://wechat.aibotk.com/)

### 本地部署

克隆本项目，并进入项目根目录

第一步 `env.js` 文件中填入《智能微秘书》的apiKey 和 apiSecret

第二步 `npm install`

第三步 `npm run pm2`(如果报错pm2找不到，请执行`npm install pm2 -g` 后重新执行此步骤)

第四部 登录《智能微秘书》平台扫码登录即可

### 高级功能(无法登录微信网页端朋友的福音)

如果你拥有了[wechaty](https://github.com/wechaty/wechaty)发放的ipad token，那么也可以直接使用本项目 （[ipad token 申请地址](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)）

#### 提前安装依赖

```sh
npm i -g node-gyp
```

如果是win平台，还需进行

```sh
npm i -g windows-build-tools
```

#### 配置ipad token

在`env.js`里填入你的ipadtoken即可

### docekr部署（推荐）

镜像地址：[https://hub.docker.com/repository/docker/aibotk/wechat-assistant](https://hub.docker.com/repository/docker/aibotk/wechat-assistant)

一、创建一个`env.js`，并在`env.js`中填入相关的配置参数如下

```js
module.exports = {
    apiKey: '', //智能微秘书平台APIKEY （必填）
    apiSecret: '',//智能微秘书平台APISECRET （必填）
    ipadToken: '', // 如果有wechaty的ipad token可以填到此处，没有的话就不用填写 （非必填）
}

```

二、拉取镜像

```sh
docker pull aibotk/wechat-assistant
```

三、运行镜像

```sh
docker run -v 绝对路径/env.js:/home/app/env.js -d  aibotk/wechat-assistant
```

四、登录智能微助手平台扫码登录即可

登录地址：[https://wechat.aibotk.com/](https://wechat.aibotk.com/)

## 体验

添加我的小助手来体验智能化的小秘书服务

![8](/assets/2020/web-panel/qr.png)

> 作者: [Leo_chen](https://github.com/leochen-g/)，高级前端工程师，喜欢使用node做各种项目
