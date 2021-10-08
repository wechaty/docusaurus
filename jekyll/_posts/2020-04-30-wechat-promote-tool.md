---
title: "如何用Wechaty打造一个推广机器人"
author: jesseweb
categories: project
tags:
   - ecommerce
image: /assets/2020/promote-bot/banner.webp
---

## 一、项目背景

与美团饿了么等线上消费平台合作，以商家提供优惠券、我们以平台与用户合作推广的方式帮助这些平台完成销售指标，从中抽取佣金的一种模式。

## 二、分析需求

分析平台用户行为后，发现大部分用户的推广方式较为单一，主动性低。即使是有主动性的用户，也是采用的最传统的手动转发方式来推广。

基于此，能否在不对用户行为做太多干扰的情况下提高平台用户的推广能力？

有几点需要解决：

* 如何平滑获取平台用户手上的资源？
* 如何利用平台用户的资源为客户创造收益？
* 如何以最低的用户成本，为平台用户实现最高的价值？

带着这些问题，我们找到了一个完美的解决方案：“WECHAT BOT”。
接着就是用市面上功能最强、实现起来最快的[Wechaty](https://github.com/wechaty/wechaty)来实现了。

## 三、Bot如何解决上述需求

划重点：“分享优惠券，有人使用优惠券就有收益。”

基于这个重点，我们为用户打造了一个群消息助手，专门为用户在群内发送自己的各类优惠券信息。

### 只需三步，解放双手

* 添加机器人好友
* 绑定平台账户
* 将机器人拉进群内

## 测试效果

* 机器人相关操作
    ![INVITE](/assets/2020/promote-bot/result.webp)
* 测试发送效果
    ![INVITE](/assets/2020/promote-bot/result1.webp)

## 后续计划

* 自动判断群所属用户、无需手动绑定。
* 客服功能
* 增加更多推广能力

## 鸣谢

感谢 [Wechaty](https://github.com/wechaty/wechaty) 开源项目及 [句子互动](https://www.juzibot.com/)公司提供的 token，为开发者带来极大便利！

感谢[@huan](https://github.com/huan) 提供的代码思路以及编码风格。

感谢[osschat](https://github.com/kaiyuanshe/osschat)提供的issue => wechat持续追踪。

> 作者: [LegendaryJesse](https://github.com/JesseWeb)，悦享推广联合创始人，半路出家的程序员。
> Code: [promote-bot](https://github.com/JesseWeb/promote-bot)
