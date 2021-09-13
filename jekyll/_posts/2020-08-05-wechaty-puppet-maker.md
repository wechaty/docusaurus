---
title: "Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty"
author: rickyyin98
categories: event
tags:
  - puppet
  - news
  - workshop
  - tutorial
  - puppet-provider
  - official-account
image: /assets/2020/wechaty-puppet-maker/puppet.png
---

Wechaty 通过精妙的代码设计，实现了基于一套应用层代码，自由切换不同的接入方式，帮助开发者以最大程度的易用性，快速实现多个平台的聊天机器人接入。  

## Wechaty Puppet

![Wechaty 代码结构](/assets/2020/wechaty-puppet-maker/architecture.png)

Wechaty 的每一种接入方式，都以 Puppet 的形式进行封装，目前已经上线的 Puppet 包括Puppeteer、Padplus、Hostie等多种方式的微信个人号接入，微信公众平台的接入等。  

此外，钉钉、企业微信、飞书、抖音、快手的 Puppet 正在开发中，QQ、微博、Signal等多个平台的 Puppet 开发等待进行。  

## How to make a Puppet for Wechaty

为了帮助社区开发者更快了解 Puppet 的更多细节、实现 Puppet 开发的从零到一，Wechaty 社区邀请到几位最核心的 Puppet 开发者介绍Puppet是什么、如何完成 Puppet 开发的第一步、如何实现一个商用级的 Puppet。

{% include iframe.html src="https://www.youtube.com/watch?v=fbTedVcEEEI" %}

![Wechaty Puppet活动](/assets/2020/wechaty-puppet-maker/puppet.png)

### Puppet的商业化前景展望

分享人：句子互动CMO 尹伯昊

{% include iframe.html src="/assets/2020/wechaty-puppet-maker/bohao.pdf" %}

![尹伯昊-1](/assets/2020/wechaty-puppet-maker/bohao1.jpg)

![尹伯昊-2](/assets/2020/wechaty-puppet-maker/bohao2.jpg)

### Wechaty 项目架构

分享人：Wechaty Puppet Padplus&Donut Creator 高原

{% include iframe.html src="/assets/2020/wechaty-puppet-maker/yuan.pdf" %}

![高原-1](/assets/2020/wechaty-puppet-maker/yuan1.jpg)

![高原-2](/assets/2020/wechaty-puppet-maker/yuan2.jpg)

![高原-3](/assets/2020/wechaty-puppet-maker/yuan3.jpg)

### Wechaty Puppet Ding-Dong

分享人：Wechaty Creator 李卓桓

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

![李卓桓-1](/assets/2020/wechaty-puppet-maker/huan1.png)

![李卓桓-2](/assets/2020/wechaty-puppet-maker/huan2.png)

![李卓桓-3](/assets/2020/wechaty-puppet-maker/huan3.png)

![李卓桓-4](/assets/2020/wechaty-puppet-maker/huan4.png)

### Puppet Padplus开发要点分析

分享人：句子互动高级工程师 苏畅

{% include iframe.html src="/assets/2020/wechaty-puppet-maker/suchang.pdf" %}

![苏畅-1](/assets/2020/wechaty-puppet-maker/suchang1.jpg)

![苏畅-2](/assets/2020/wechaty-puppet-maker/suchang2.jpg)

## 暑期2020 与 Puppet开发

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动，旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。  
Wechaty 作为中国最大的聊天机器人开源项目，合计发布了11个项目，由Wechaty社区的资深Contributor作为导师，选出了11位同学进行项目开发。  
此次 Wechaty 发布项目涉及多语言、多平台、多功能三个核心主题，其中的企业微信、钉钉、飞书、抖音、快手 Puppet作为多平台模块的任务，已经进入开发节奏。  
你可以在[Wechaty SoC](https://wechaty.github.io/wechaty-soc-kick-off-meeting/)中查看每个项目的导师和负责同学的联系方式，并与他们一起直接参与到对应 Puppet 的开发中。

## 立刻参与到 Puppet 开发中

对于开发者来说，有两种潜在的路径能让你直接参与到 Puppet 的开发中来：

- 参与 [暑期2020 相关项目](https://wechaty.github.io/wechaty-soc-kick-off-meeting/)，其中包括企业微信、钉钉、飞书、抖音、快手。
- 完成 [社区心愿单](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#)中更多想要完成的 Puppet，其中包括QQ、微博、Signal、Line等。

Wechaty 社区期待你的参与！
