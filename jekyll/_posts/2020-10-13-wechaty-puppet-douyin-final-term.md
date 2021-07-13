---
title: "基于RPA封装的Wechaty接口下的抖音聊天机器人结项报告"
author: wangjunwei
categories: project
image: /assets/2020/wechaty-puppet-douyin/wechaty-puppet-douyin-logo.webp
tags:
  - douyin
  - summer-of-wechaty
  - summer-2020
  - ecosystem
---

## 暑期 2020

“开源软件供应链点亮计划-暑期 2020”（以下简称 暑期 2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。

旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。

根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期 2020”活动奖金和奖杯。

官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)

本项目 [基于 RPA 封装 Wechaty 接口下的抖音聊天机器人] 系 暑期 2020 支持的开源项目。

<!--more-->

## 结项报告：基于 RPA 封装 Wechaty 接口下的抖音聊天机器人

## 项目信息

- 项目名称：基于 RPA 封装 Wechaty 接口下的抖音聊天机器人
- 方案描述：安卓端通过 autojs 操作抖音，通过 socket 与 puppet 连接，再与 wechaty 相连
- 时间规划：7.19-8.15 完成各种方案的尝试和探索，8.15-9.15 完成 puppet 的各种接口接入

## 项目进度

- 项目成果：
  - 熟悉了 wechaty 的使用的操作方法
  - 探索了各种方案：
    - 抖音的发送私信的 openapi 需要用户为企业用户，只有企业抖音号 api 才有效
    - 探索了 monkeyDEV 和 IDA 逆向私信协议的方法
    - 没有找到 chrome 跑安卓 app 的方法，或者方法失效
    - 尝试了通过安卓和 ios 端抓包的方式获取抖音的私信方法，结果抓不到私信的消息
    - autojs 控制安卓 app 的方法，现在正在采用，也是现在唯一可运行的方法，目前完成了抖音基本操作方法的封装和 socket 的通信
  - 抖音的 autojs 控制版本完成了自动登录，消息监听，发送消息等方法
  - 用 socket 和 autojs 的方法跑了一个简易 dingdongbot，[视频演示地址](https://youtu.be/TY4hn9TIWlA)(youtube)
  - 完成了抖音 puppet 初版和 autojs 操作抖音的方法
  - puppet 完成了通信的基本功能，puppet 跑 dingdongbot
  - wechaty puppet 配合 autojs 可实现消息自动回复
- 遇到的问题及解决方案：
  - 本次代码遇到了很多问题，很少接触 ts 的编码，有很多不熟悉的地方
  - 初期在私信方法的选择上尝试了很多种方案，最终选择了 autojs 作为操作抖音私信的工具，但是不那么稳定，性能很低需要一定硬件支持
  - autojs 有时候很不稳定，调试也异常麻烦，只能一点一点推进，app 控件的名字很随机，不同的抖音版本控件名字不同，所以 app 需要统一版本
  - 跑通一个抖音 puppet 需要一个安卓手机或者电脑开模拟器跑 autojs，然后用 nodejs 跑 wechaty 和 puppet，需要跑两个服务，有点麻烦
  - 在探索获取抖音的图片消息时，通过 auto 来查找图片存在一定问题，运行速度较慢，先打开图片然后缓存然后再加载图片转码成 base64 然后再发送到 puppet
  - eslist 语法格式在开始的时候因为不熟悉，经常报出各种错误
  - puppet 的接口和方法不熟悉，模仿着写了一个抖音 puppet，最终能跑 dingdongbot 了
  - 消息频繁的时候可能会造成消息堆积，autojs 处理消息需要时间，当 autojs 进入某一会话时，此会话发来消息，那么这个消息可能读取不到，但是在此会话外的消息可以读取到并处理回复
  - 抖音 puppet 还需很多改进和添加新的消息类型和功能...
  - 因为实习 996 的缘故，后期推进太少，加入社区还需努力

### PPT

{% include iframe.html src="https://www.youtube.com/embed/zDIPzGztn_E" %}

### Live coding

{% include iframe.html src="https://www.youtube.com/embed/OF7UfQ4o_5c" %}

### 项目地址

- 项目链接：[https://github.com/gavinwang23/douyin-autojs](https://github.com/gavinwang23/douyin-autojs) / [https://github.com/gavinwang23/wechaty-puppet-douyin](https://github.com/gavinwang23/wechaty-puppet-douyin)
