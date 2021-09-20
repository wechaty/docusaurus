---
title: "Wechaty插件系统发布，让你的机器人快速接入复杂管理和智能对话能力"
author: rickyyin98
categories: announcement
tags:
  - plugin
image: /assets/2020/wechaty-plugin-milestone/plugin.png
---

Wechaty 的故事开始于用RPA的方式模拟登录微信，在过去的几年里，服务了数万名开发者，收获了 Github 的 8000 Star。  
<https://github.com/wechaty/wechaty>
我们将过去对于绝大多数人难以想象的工作量，通过数万行代码封装成了最短六行代码就可以模拟登录微信的npm包。  

```javascript
import { Wechaty }  from 'wechaty' // import { Wechaty } from 'wechaty'
Wechaty.instance() // Global Instance
.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`))
.on('login',            user => console.log(`User ${user} logined`))
.on('message',       message => console.log(`Message: ${message}`))
.start()
```

但是，对于真正的可用的微信聊天机器人，不可避免地需要用大量的逻辑来处理不同条件下的收发消息、群管理甚至和外部系统的耦合。  
这也就意味着，即使收消息、发消息、添加好友等操作都只需要一行代码，对于一个复杂任务仍需数十行代码才能完成。  
带着对于即插即用的期待，我们上线了完整的插件系统。  

## 关于插件系统的一切

为了更好地让插件系统为大家所用，Wechaty 社区邀请到Wechaty 作者李卓桓、Wechaty Plugin设计师Gcaufy、Wechaty Puppet Donut/Padplus作者高原、Wechaty Plugin 开发者王墨炱分别就 Wechaty 开发生态、插件开发完整指南、插件的商业化可能等领域进行深度分享。

{% include iframe.html src="https://www.youtube.com/watch?v=tfGZXoe_aA4" %}

![Wechaty Plugin活动](/assets/2020/wechaty-plugin-milestone/plugin.png)

### Wechaty项目和社区生态介绍

[Wechaty 作者 李卓桓 Wechaty项目和社区生态介绍](https://www.bilibili.com/video/BV1vA411v73c)

<div class="video-container" style="
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
">
  <iframe width="560" height="315" src="https://docs.google.com/presentation/d/13oUOIEnzdLWO6KZWztD_pMuu22AQ3SIMjk2wp8f-f18/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="" style="
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
  "></iframe>
</div>

![李卓桓-1](/assets/2020/wechaty-plugin-milestone/huan1.png)

![李卓桓-2](/assets/2020/wechaty-plugin-milestone/huan2.png)

### 插件系统开发历程及应用

[Wechaty Plugin 设计师，腾讯微信小程序框架开源项目Wepy 作者 Gcaufy 插件系统开发历程及应用](https://www.bilibili.com/video/BV1Et4y1y7Gc)

{% include iframe.html src="/assets/2020/wechaty-plugin-milestone/gcaufy.pdf" %}

![Gcaufy-1](/assets/2020/wechaty-plugin-milestone/gcaufy1.jpg)

![Gcaufy-2](/assets/2020/wechaty-plugin-milestone/gcaufy2.jpg)

![Gcaufy-3](/assets/2020/wechaty-plugin-milestone/gcaufy3.jpg)

### Wechaty 插件的商业化落地展望

[15:00 - 15:30 Wechaty Puppet Donut/Padplus 作者 高原 Wechaty 插件的商业化落地展望](https://www.bilibili.com/video/BV13T4y1J7Ta)

{% include iframe.html src="/assets/2020/wechaty-plugin-milestone/yuan.pdf" %}

![Yuan-1](/assets/2020/wechaty-plugin-milestone/yuan1.jpg)

![Yuan-2](/assets/2020/wechaty-plugin-milestone/yuan2.jpg)

### 基于插件的Wechaty开发

[15:30 - 16:00 Wechaty Plugin开发者 王墨炱 基于插件的Wechaty开发](https://www.bilibili.com/video/BV1sz4y1973D)
[Live Code Demo: Invite to Room](https://github.com/JesseWeb/invite2room_demo)

![Jessie-1](/assets/2020/wechaty-plugin-milestone/jessie1.jpg)

![Jessie-2](/assets/2020/wechaty-plugin-milestone/jessie2.jpg)

## Wechaty 插件库

目前，Wechaty社区已经上线了大量可用的插件，你可以直接查找你感兴趣的插件并且直接在你的机器人中使用。
[Wechaty插件库](https://github.com/wechaty/wechaty-plugin-contrib)

### Wechaty 基础能力插件

<https://github.com/wechaty/wechaty-plugin-contrib#plugins-contrib>

### Wechaty 群管理插件

<https://github.com/Gcaufy/wechaty-voteout>

### Wechaty 定时任务插件

<https://github.com/Gcaufy/wechaty-schedule>

### Wechaty 群监控插件

<https://github.com/wechaty/wechaty-got-kicked-out>

### Wechaty 可视化面板接入插件

<https://github.com/gengchen528/wechaty-web-panel>

### Wechaty Intercom 接入插件

<https://github.com/wechaty/wechaty-plugin-intercom>

### Wechaty Freshdesk 接入插件

<https://github.com/wechaty/wechaty-plugin-freshdesk>

### Wechaty Qnamaker 接入插件

<https://github.com/wechaty/wechaty-plugin-qnamaker>

### Wechaty 腾讯智能对话平台 接入插件

<https://github.com/wechaty/wechaty-weixin-openai>

### Wechaty 有道翻译接入插件

<https://github.com/chs97/wechaty-plugin-youdao>

### Wechaty CLI 插件

<https://github.com/wechaty/wechaty-vorpal>

## 欢迎正在阅读的你参与其中

插件系统的诞生对于 Wechaty 是一个重要的里程碑，能够帮助开发者从繁琐的开发中解脱出来，更好地解决业务问题。  
Wechaty 社区欢迎你使用插件、将你的机器人能力封装成插件、让更多开发者使用你的插件。

- 直接在[Wechaty插件库](https://github.com/wechaty/wechaty-plugin-contrib)中寻找合适的插件并使用。
- 参与Wechaty开源激励计划[Everything about Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)，生产一个有价值的插件，Wechaty社区将为你提供一个长期有效的Token。
- 在[Wechaty插件库](https://github.com/wechaty/wechaty-plugin-contrib)中更新你的插件，让更多开发者直接使用。

> 作者: [Yinbohao](https://github.com/rickyyin98/)
