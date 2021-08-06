---
title: "Build Wechaty Chatbot at OpenSource Factory"
author: juzibot
categories: announcement
tags:
  - release
  - event
  - news
image: /assets/2018/2018-08-05-build-wechaty-chatbot-at-opensource-factory/000.webp
---

## 尹婷：动手实现微信聊天机器人

{% include iframe.html src="https://youtu.be/Zgn2QDBENXk?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh" %}

### Agenda

- [00:00:05](https://youtu.be/Zgn2QDBENXk?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=7) 尹婷的自我介绍
- [00:17:10](https://youtu.be/Zgn2QDBENXk?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=103) 动手实现微信聊天机器人
- [00:03:32](https://youtu.be/Zgn2QDBENXk?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=212) 加入群聊，展示机器人自动回复消息
- [00:05:40](https://youtu.be/6VhrXaT7clQ?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=4943) 进入主题：chatbot
- [00:09:40](https://youtu.be/Zgn2QDBENXk?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=580) 为什么会选择Wechaty
- [00:11:33](https://youtu.be/Zgn2QDBENXk?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=693) 解释机器人代码
- [00:17:46](https://youtu.be/Zgn2QDBENXk?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=1066) 机器人实现的原理

### app与chatbot的利弊

![001](/assets/2018/08-build-wechaty-chatbot-at-opensource-factory/001.webp)

人类就是在追寻更好的人机交互，从最开始人与人之间最直接的沟通，到电话沟通，到后面的互联网时代，pc，app也可以满足。

![002](/assets/2018/08-build-wechaty-chatbot-at-opensource-factory/002.webp)

- 优势：平时我们使用app的时候，要去app商城下载一个app，再去注册一个账号，才能使用这个app，如果有10个需求就要下载十个app，非常占用硬盘，但是如果所有功能都集成在chatbot机器人上面，我们只需要告诉它一个指令，就会去调用相应的接口，给你传送相应的信息，这样就会方便很多，从2方面来解释：
 1.用户角度：我们平时用手机，百分之八九十的时间都用在了微信上面，所以对用户来说，如果微信能够满足我们大多数的需求，其实我们是不用去下载这些app的,比如现在的公众号，微信小程序，其实都是基于微信这种聊天工具，流量很多，受众很多，如果直接给予这个平台开发的话，起点会比从零开始做一个app起点高很多，因为微信本来有用户。
 2.开发角度：开发一个app首先需要产品画一个原型，再设计交互，设计UI，把设计图给前端，前端来画页面，这是一般做app的流程，但是如果我们用chatbot做开发，其实不需要UI设计，直接把这一段开发成本省掉了。
- 弊端：虽然不用进行交互，但是要进行自然语言的设计。做自然语言处理其实是一个比较复杂的，如果想把比较零碎的语言提炼出来，获取想要的信息，去调接口，传给用户，训练成本很高。
以上是app和bot的优劣势。

### 解释机器人代码

- 实现原理：

1. 网络抓包
2. 分析协议
3. 模拟协议
代码已经开源了，详情可以在<https://github.com/TingYinHelen>查看
### 为什么会选择Wechaty

Wechaty是一个把个人微信账号做成机器人的框架，为什么会选择wechaty呢：首先我是一个前端程序员，比如有接收消息，好友请求这个类，API设计的很人性化，同时还提供了一些事件，可以直接通过监听这些事件调用它接口提供的方法来做一些操作。
