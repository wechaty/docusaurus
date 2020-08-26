---
title: 统计公司微信群里订餐
date: 2020-08-26 09:00 +0800
author: ovarte
header: 
  teaser: 
---
>Author: [chaoling](https://github.com/ovarte)

>Code: [统计群内订餐的机器人](https://github.com/ovarte/statistical-robot)

# wechaty-Robot

#### 机器人概述
  新冠疫情期间，公司订餐需要接龙，每天接龙也是真的麻烦。使用了机器人，再不怕同事忘记订餐了。


#### 目前实现功能
- 统计功能
  - 使用机器人定时发送订餐信息，提醒公司同事订餐
  - 同事回复订餐消息后，将订餐的同事统计
  - 指定管理员发送 ‘查看订餐’ 等关键词，查看当天订餐记录
->
- 自动通过好友验证
  - 当有人添加机器人时，判断验证消息关键字后通过或直接通过
  - 通过验证后自动回复并介绍机器人功能
- 私聊关键字回复
  - 例如回复 `加群` 推送群聊邀请
  - 例如回复 `作者微信` 推送作者微信名片
- 自动聊天
  - 群聊中通过 `@[机器人]xxx` 可以和机器人聊天
  - 私聊发送消息即可聊天
- 加入群聊自动欢迎
  - 当新的小伙伴加入群聊后自动 `@[新的小伙伴]` 发一个文字欢迎



#### 结构

```js
|-- src/
|---- index.js				# 入口文件
|---- config.js		  	# 配置文件
|---- onScan.js				# 机器人需要扫描二维码时监听回调
|---- onRoomJoin.js 	# 进入房间监听回调
|---- onMessage.js		# 消息监听回调
|---- remind.js		    # 定时提醒
|---- onFriendShip.js	# 好友添加监听回调
|-- package.json
```

#### 运行
- 克隆项目

```shell
git clone https://github.com/ovarte/statistical-robot.git

cd statistical-robot
```

- 安装依赖机器人所需依赖

```shell
npm install
```


- 启动项目

```shell
npm serve
```

#### 后续

来吧，生命在于折腾，好玩的东西总要试一试，毕竟费不了多少时间，你也可以加下我的小助手【圈子】微信体验下呦，验证消息写【前端】可以直接通过，和他聊聊天，或者加技术交流群我们一块玩耍都可以的

![WechatIMG127](./README.assets/WechatIMG127.jpeg)

如果你加小助手微信遇到了问题，也可以通过以下方式联系我或加群

![20200111-143924](./README.assets/20200111-143924.png)

#### 致谢

非常感谢Wechaty团队提供微信机器人SDK，让开发者可以专注于业务代码。  
感谢句子互动提供的pad协议版token。  
wechaty: <https://wechaty.github.io/>  
juzibot: <https://www.juzibot.com>
