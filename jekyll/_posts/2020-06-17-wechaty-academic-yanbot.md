---
title: "学术场景应用：YanBot"
author: chaogan-yan
categories: project
tags:
  - nodejs
  - academic
  - padplus
  - healthcare
image: /assets/2020/yanbot/yanbot.webp 
---

## 备注

本人是中国科学院心理研究所研究员，博士生导师，心理所抑郁症大数据国际研究中心主任，心理所磁共振成像研究中心副主任，入选爱思唯尔 2019年中国高被引学者（神经科学）。本人对静息态功能磁共振成像（R-fMRI）的计算方法进行了规范化，建立了被引2000余次的脑成像流水线式计算平台DPARSF，并建立了脑成像分析与共享平台DPABI和基于大脑皮层的脑成像数据分析软件DPABISurf。 DPABI/DPABISurf/DPARSF系列软件拥有众多用户，因此需要构建一个机器人助理来回答用户的相关问题。另外，机器人助理要辅助管理相关的多个微信讨论群The R-fMRI Journal Club，并对用户对领域内文献的讨论和相关脑影像技术问题进行桥接。本项目是wechaty在学术场景应用的一个示范。

YanBot is an academic chatbot application to help Dr. Chao-Gan Yan for answering DPABI/DPABISurf/DPARSF questions and managing The R-fMRI Journal Club wechat groups.

- YanBot could answer questions including DPABI软件下载、DPARSF软件下载、DPABI软件安装、DPARSF软件安装、DPABISurf软件安装、DPABI编译版软件安装、Demo演示数据、在线网络课程、数据处理报错、常问问题、抑郁症大数据联盟数据下载、加入抑郁症大数据联盟。

- YanBot is also a manager for The R-fMRI Journal Club groups, where people are discussing R-fMRI related papers and DPABI/DPABISurf/DPARSF questions. YanBot will invite new friend to The R-fMRI Journal Club groups automatically.

- YanBot also bridges The R-fMRI Journal Club 1 and The R-fMRI Journal Club 2 groups, he will also bring the nickname of a user in a specific wechat group to another group. In such a way, users could talk with each other even without in the same wechat group.

If you want to build some chatbot for your own purpose, then YanBot would be a good example!

## Tips to be shared

YanBot is an academic chatbot application based on wechaty. As YanBot needs to bridge the the R-fMRI Journal Club wechat groups, it also uses the RoomConnectors from wechaty-plugin-contrib.

### Problem

However, the code example

```sh
map: async message => message.from()?.name() + '(many to many): ' + message.text(),
```

has a limitation: People always set nickname (RoomAlias) in a wechat group (chatroom), but the code example will not bring the GroupAlias to another room, thus people in another chatroom doesn’t know who the speaker is.

### Solution

My modification

```sh
map: async message => await message.room()?.alias(message.from()??bot.userSelf()) + '(另群): ' + message.text(),
```

will forward the nickname (RoomAlias) from one chatroom to another chatroom, thus people can talk across rooms more conveniently.

Hope this tips helps for others!

> Author: [Chaogan-Yan](https://github.com/Chaogan-Yan) Professor, Institute of Psychology, Chinese Academy of Sciences
> Code: [Github](https://github.com/Chaogan-Yan/YanBot)
