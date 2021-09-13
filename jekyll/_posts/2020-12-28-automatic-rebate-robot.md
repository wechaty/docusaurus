---
title: "用wechaty制作返利机器人"
author: jiangxiaotao1024
categories: project
tags:
  - ecommerce
image: /assets/2020/rebate-robot/taokouling.png
---

## 实现的功能：

1，通过发送淘口令会自动识别淘口令并返回一个返利链接
2，通过返利链接支付完商品，该用户会收到预计返利金额
3，订单交易完成，增加该用户的账户的金额，同时会收到增加的金额和余额提醒。上级代理，上上级代理也会有相应的提成

### 实现方式：

前台使用ts版本的wechaty与用户进行交互。后台使用java版本大淘客sdk，数据库使用mysql。前台通过在ts导入jar包调用后台接口。

## 缺陷：

1，无法识别好友推荐人，所以收到好友申请时需要手动往数据库添加代理信息
2，无法识别交易订单有哪个用户发起，所以需要给每个用户添加一个pid

## 好友模块：

同意好友请求后设置该好友备注为wxid，方便后期查找

## 消息模块：

对收到的文本信息进行解析返回对应的信息，如果调用api无法识别商品id则不返回返利链接;如果识别到商品id，但没有优惠信息返回无优惠;如果有优惠信息返回返利链接；

![help](/assets/2020/rebate-robot/help.png)
![chaxun](/assets/2020/rebate-robot/chaxun.png)
![tixian](/assets/2020/rebate-robot/tixian.png)
![zhuanqian](/assets/2020/rebate-robot/zhuanqian.jpg)
![taokouling](/assets/2020/rebate-robot/taokouling.png)

## 订单查询模块：

登录后触发10s定时器，每隔10s查询这段时间的订单交易信息，解析出支付成功订单的优惠信息以及pid，根据pid查询对应的wxid，对该wxid用户发送预计佣金信息。对支付成功订单给该用户发送佣金信息，并按照比例，同时对上级，上上级发送返利信息。
