---
title: "RICEPO北美地道中餐外卖"
author: areigna
categories: event
tags:
  - meetup
image: /assets/2019/wechaty-ricepo/logo.webp
---

## 内容纲要

* RICEPO简介
* Wechaty在RICEPO的应用
* Wechaty+SQS整体架构
* Wechaty使用遇到问题以及解决方案

![RICEPO](/assets/2019/wechaty-ricepo/ricepo.webp)

## RICEPO简介

RICEPO​是海外最大的地道中餐订餐平台。
2013年于纽约创立，总部位于加州硅谷，现已覆盖全美及欧洲等200多个城市。
合作的饭店已多达上千家，服务近10,000,000人次。
RICEPO ​​​​还是Apple Pay、银联、微信、支付宝的战略合作伙伴。
RICEPO 用心连接地道中餐和喜爱中餐的用户，为创造最佳的用户体验而奋斗。
在专注传统中餐的同时，RICEPO 同时也在致力于让世界更加了解中国。

## Wechaty在RICEPO的应用

用户在RICEPO下单后系统需要发送给饭店确认订单。
在接入Wechaty前我们一直在寻找最高效、便捷、稳定的方式发送订单。
北美饭店主流接受订单的方式都存在各种问题：

* 传真：速度慢，经常断开链接
* Email：饭店查收不及时，耽误订单确认
* 电话语音：语音播报易出错，效率低
* 使用饭店端APP：对饭店有学习成本（部分饭店老板不会使用APP）
* 商米小票机：设备成本高

Wechaty可以几乎完美解决以上所有问题，
我们以文字+链接形式实时发送订单给餐馆老板，
点击链接可以查看订单详情，并一键确认订单。
上线wechaty发单后，80%饭店开始转用微信接单。

* 实时发送订单信息，速度快
* 几乎所有中餐馆老板都有微信，接受度高，没有下载新app的学习成本
* 老板查看微信频次高，不容易错过订单
* 无需打印，无需设备，使用成本低

![RICEPO](/assets/2019/wechaty-ricepo/wechat.webp)
文字+链接发送实时订单

![RICEPO](/assets/2019/wechaty-ricepo/order.webp)
查看订单详情，一键确认

除此之外，Wechaty还可以实现饭店公告的功能。
例如APP新功能，节假日营业时间变更，RICEPO都已开始大范围使用Wechaty来通知餐馆。

## Wechaty+SQS整体架构

RICEPO的wechaty使用的是[wechaty-puppet-padplus](https://github.com/botorange/wechaty-puppet-padplus)

主要运用的技术：

* Docker
  * Docker化部署
* mongodb
  * 用于持久化登陆信息，以便Docker重启之后无需再次扫码登陆
* [SQS](https://aws.amazon.com/sqs/)
  * aws的消息队列服务，wechaty从这里获取消息发送给对应的人(群)
* [slack](https://slack.com/)
  * 用作登陆提醒。
  * 若未登陆，会将登陆二维码发送至对应的channel
  * 若扫码登陆成功，发送一条登陆成功的消息至对应的channel

![RICEPO](/assets/2019/wechaty-ricepo/slack.webp)

## Wechaty使用遇到问题以及解决方案

* 群丢失
  * 发生原因：微信临时群组不保存的话，docker重启之后会丢失这些群组
  * 解决方案：
    * 挂载缓存目录到docker宿主机 `-v ~/.wechaty:/root/.wechaty`
    * 每天早上给每个bot下面的所有群组发送早安信息（消息间隔时间2S,避免过于频繁的消息发送），最大限度地保证有较多的群组缓存下来

## 总结与未来发展

基于Wechaty的自动发单系统，给平台的订单确认效率得到非常大的提升。
饭店群公告功能也节省了大量客服与餐馆沟通成本，
下一步我们将着手开始实现更多功能，包括自动机器应答，自动事件提醒等，都能再次提高各部门效率。
感谢Wechaty给我们带来的变革。期待在未来看到在RICEPO平台更多的应用场景。

> 作者: [RICEPO LLC](https://github.com/ricepo)
