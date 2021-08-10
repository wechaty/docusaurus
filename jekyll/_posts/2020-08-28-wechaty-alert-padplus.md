---
title: 基于Wechaty-IPAD协议的预警消息转发机器人
author: songbingjun
image: /assets/2020/alter-padplus/login.png
categories: project
tags:
  - padplus
  - utility
---

## 微信机器人 - 实时转发预警信息

### 使用须知

1、本项目基于微信IPAD协议，避免了网页版微信登陆不成功的情况  
2、本项目必须要申请token，具体操作流程请参考[教程](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty#1Token-%E7%9A%84%E5%8A%9F%E8%83%BD%E5%92%8C%E7%94%B3%E8%AF%B7)  
3、本项目延伸自 wechat-assistant-padplus ，因为官方版本当前只有TypeScript，目前为JavaScript语言。

### 初衷

服务器上的预警信息天天都要有人一直监控着！好烦啊！能不能找一个机器人让我们能实时看到消息啊！  
恩，就这样，在网上研究了之后，找到了wechaty。  
本项目使用koa+wechaty的方式，暴露了Web API接口，方便服务器实时调用，转发到koa后向对应好友、微信群发送消息。也可以通过定时任务，轮询的方式来进行转发消息。

#### 须知：本项目必须向`wechaty`团队申请`token`, 否则该项目是无法使用的. 申请流程参考: [申请token](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty#1Token-的功能和申请)

### 安装环境

#### 1、 `Git客户端`

[官网下载地址](https://git-scm.com/downloads)

#### 2、 `node.js`  (版本10以上)

[官方下载地址](https://nodejs.org/zh-cn/download/)

#### 3、 `pm2`后台守护线程工具 (需要后台运行的话)

命令行运行：npm i pm2 -g

#### 4、修改token  //在wechaty-alert-padplus/wechaty/wechat.config.js文件的`WECHATYTOKEN`处修改

### 安装启动过程

#### 1、下载项目

git clone `https://github.com/Songbingjun/wechat-alert-padplus.git`  //参考git下载方式  

#### 2、下载依赖

`npm install`  //进入到项目目录下后输入  

#### 3、项目启动

项目启动有两种方式，一种是前台运行，一种是使用pm2进行后台运行  
前台运行： `npm run dev`  
后台运行： `npm run pm2`

前台示例图片如下:

![前台登陆后](/assets/2020/alter-padplus/login.png)

### 后台方式启动导航  

```powershell
npm i pm2 -g  //全局安装进程守护工具pm2
npm run pm2   //启动pm2程序
pm2 logs koa  //后台查看运行程序  首次会显示扫码日志
```

### 注意事项

#### 1、 项目运行后，会出现二维码扫描，如果识别不出二维码的原因可能是命令操作台的字体有问题，调整点阵字体，或者换一个客户端打开命令行，推荐Cmder

#### 2、 端口目前是15999，请先确保端口未被占用。修改需到wechaty/app.js  51行处修改

#### 3、 配置群名称需要到wechaty/wechaty/wechaty.config.js中 25行修改ROOMLIST数组中的roomName属性，目前接口逻辑只识别一个群(向好友发消息类似)

#### 4、 扫描成功后会添加缓存文件，下次免登录，文件地址及名称 wechaty/ WechatEveryDay.memory-card，如果自动登录了后，想切换账号，删除该文件。

#### 5、 日志及错误记录在wechaty/koa/log目录中

#### 6、 如果不是后台运行的话，请设置计算机进入休眠状态为 从不。建议最好开启后台运行，并且修改状态。

具体修改流程(win10)  Win+R –> control –> 搜索:电源  -> 电源选项 –> 选择关闭显示器的时间 –> 使计算机进入休眠状态 –> 从不

#### 7、 pm2进程守护工具常用命令

1）pm2 logs 线程名 。  查看线程日志  例如：pm2 logs koa  
2）pm2 list 。 查看pm2所有应用  
3）pm2 stop 0 。 关闭id为0的应用  
4）pm2 delete 0 。 删除id为0的应用  
5）pm2 restart all 。 重启所有应用  

### API接口

#### 1、发送到群

请求方式： GET
请求参数： message
请求url：  ip:15999/api/pushMessage
请求示例：`http://localhost:15999/api/pushMessage?message=发送到群的文字输入在此处`

#### 2、发送给好友

请求方式： GET
请求参数： message
请求url： ip:15999/api/pushInfo
请求示例：`http://localhost:15999/api/pushInfo?message=发送给好友的文字输入在此处`

### 较wechat-assistant-padplus进行的改动

由于本人是一名后端开发，web协议的wechaty本来有Java语言的版本，但是由于网页版微信限制(详见[issues](https://github.com/wechaty/wechaty/issues/603))。所以找到了另外一种协议 -- IPAD协议。问题又来了，没有对应语言的版本，所以找到了wechat-assistant-padplus项目，项目主要以JS为主，对其做了以上变动。  

#### 1、注释了 wechat-assistant-padplus 中定时任务的相关业务逻辑

#### 2、将KOA与wechaty整合到了一个项目(因为需要在koa暴露的Web API接口中调用wechaty的初始化属性)  

#### 3、去除了MongoDB与天气接口

### 更多问题

关于`wechaty`的相关接口，请[参考wechaty官网文档](https://wechaty.js.org/v/zh/)，如果以上还没有解决你的问题，请先往`wechaty`的项目[issues](https://github.com/wechaty/wechaty/issues)中查找是否存在相同的问题，由于本项目是依赖`wechaty`开发，所以启动时遇到的问题大部分是`wechaty`的。

事实上, 如果需要一些其他自定义功能, 也可以很方便的在项目里修改哦！

### 注意事项

本项目属于个人兴趣开发，开源出来纯粹是为了技术交流，请勿使用此项目做违反微信规定或者其他违法事情。
