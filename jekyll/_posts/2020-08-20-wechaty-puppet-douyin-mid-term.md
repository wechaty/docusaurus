---
title: "基于RPA封装的Wechaty接口下的抖音聊天机器人中期报告"
author: wangjunwei
categories: project
image: /assets/2020/wechaty-puppet-douyin/wechaty-puppet-douyin-logo.jpg
tags:
  - douyin
  - summer-of-wechaty
  - summer-2020
  - ecosystem
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。

旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。

根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)

本项目 [基于 RPA 封装 Wechaty 接口下的抖音聊天机器人] 系 暑期2020 支持的开源项目。

<!--more-->

## 中期报告：基于 RPA 封装 Wechaty 接口下的抖音聊天机器人

## 项目信息

- 项目名称：基于 RPA 封装 Wechaty 接口下的抖音聊天机器人
- 方案描述：服务器架设安卓虚拟机，通过autojs操作抖音，类似wechaty的puppeteer操作Chrome的网页微信，通过socket与wechaty连接
- 时间规划：7.19-8.15完成各种方案的尝试和探索，8.15-9.15完成puppet的各种接口接入

## 项目进度

- 已完成工作：
  - 熟悉了wechaty的使用的操作方法
  - 探索了各种方案：
    - 抖音的发送私信的openapi需要用户为企业用户，只有企业抖音号api才有效
    - 探索了monkeyDEV和IDA逆向私信协议的方法
    - 没有找到chrome跑安卓app的方法，或者方法失效
    - 尝试了通过安卓和ios端抓包的方式获取抖音的私信方法，结果抓不到私信的消息
    - autojs控制安卓app的方法，现在正在采用，也是现在唯一可运行的方法，目前完成了抖音基本操作方法的封装和socket的通信
  - 抖音的autojs控制版本完成了自动登录，消息监听，发送消息等方法
  - 用socket和autojs的方法跑了一个简易dingdongbot，[视频演示地址](https://youtu.be/TY4hn9TIWlA)(youtube)
  - puppet开发中，初步成型
- 遇到的问题及解决方案：
  - 遇到问题
    - 抖音的app控件id命名很随机，为三位随机的字母和数字，不同版本的控件名称不一样
    - 首次抖音登录还需要图片验证，这个暂时没想到方法，只能人工验证，第二次登录就可以自动化了
    - 监听消息的问题，只能打开消息窗口才能获取到消息，这样多人发送多条消息时只能读取一个人
    - eslist语法检查经常报错
  - 解决方案
    - 使用统一版本的抖音app
    - 首次登录手动登录一下
    - 退出消息窗口时继续查找未读消息，并且通过通过未读消息上带数字的小圆点判断有n条未读消息，打开未读消息的窗口，遍历屏幕上的消息框，将倒数n条消息存入数组，传到客户端
    - 按照语法格式来
- 后续工作安排：
  - 继续改善和封装autojs的代码，美化和规范代码
  - 继续开发puppet，将现有socket客户端移植到puppet，接入wechaty完成一个dingdongbot
  - 探索puppet更多的功能，实现底层autojs

### PPT

{% include iframe.html src="https://www.youtube.com/embed/zDIPzGztn_E" %}

### Live coding

{% include iframe.html src="https://www.youtube.com/embed/OF7UfQ4o_5c" %}
