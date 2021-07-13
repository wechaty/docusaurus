---
title: "基于RPA封装的Wechaty接口下的抖音聊天机器人中期报告"
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

## 中期报告：基于 RPA 封装 Wechaty 接口下的抖音聊天机器人

## 项目信息

- 项目名称：基于 RPA 封装 Wechaty 接口下的抖音聊天机器人
- 方案描述：服务器架设安卓虚拟机，通过 autojs 操作抖音，类似 wechaty 的 puppeteer 操作 Chrome 的网页微信，通过 socket 与 wechaty 连接
- 时间规划：7.19-8.15 完成各种方案的尝试和探索，8.15-9.15 完成 puppet 的各种接口接入

## 项目进度

- 已完成工作：
  - 熟悉了 wechaty 的使用的操作方法
  - 探索了各种方案：
    - 抖音的发送私信的 openapi 需要用户为企业用户，只有企业抖音号 api 才有效
    - 探索了 monkeyDEV 和 IDA 逆向私信协议的方法
    - 没有找到 chrome 跑安卓 app 的方法，或者方法失效
    - 尝试了通过安卓和 ios 端抓包的方式获取抖音的私信方法，结果抓不到私信的消息
    - autojs 控制安卓 app 的方法，现在正在采用，也是现在唯一可运行的方法，目前完成了抖音基本操作方法的封装和 socket 的通信
  - 抖音的 autojs 控制版本完成了自动登录，消息监听，发送消息等方法
  - 用 socket 和 autojs 的方法跑了一个简易 dingdongbot，[视频演示地址](https://youtu.be/TY4hn9TIWlA)(youtube)
  - puppet 开发中，初步成型
- 遇到的问题及解决方案：
  - 遇到问题
    - 抖音的 app 控件 id 命名很随机，为三位随机的字母和数字，不同版本的控件名称不一样
    - 首次抖音登录还需要图片验证，这个暂时没想到方法，只能人工验证，第二次登录就可以自动化了
    - 监听消息的问题，只能打开消息窗口才能获取到消息，这样多人发送多条消息时只能读取一个人
    - eslist 语法检查经常报错
  - 解决方案
    - 使用统一版本的抖音 app
    - 首次登录手动登录一下
    - 退出消息窗口时继续查找未读消息，并且通过通过未读消息上带数字的小圆点判断有 n 条未读消息，打开未读消息的窗口，遍历屏幕上的消息框，将倒数 n 条消息存入数组，传到客户端
    - 按照语法格式来
- 后续工作安排：
  - 继续改善和封装 autojs 的代码，美化和规范代码
  - 继续开发 puppet，将现有 socket 客户端移植到 puppet，接入 wechaty 完成一个 dingdongbot
  - 探索 puppet 更多的功能，实现底层 autojs

### PPT

{% include iframe.html src="https://www.youtube.com/embed/zDIPzGztn_E" %}

### Live coding

{% include iframe.html src="https://www.youtube.com/embed/OF7UfQ4o_5c" %}
