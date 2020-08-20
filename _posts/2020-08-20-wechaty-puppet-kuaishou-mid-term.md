---
title: "暑期2020[基于 RPA 封装 Wechaty 接口下的快手聊天机器人]中期报告"
author: bikaiqiao
categories: project
tags:
  - kuaishou
---

> Author:[@bikaiqiao](https://github.com/bikaiqiao)

## 暑期2020

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)
本项目 [基于 RPA 封装 Wechaty 接口下的快手聊天机器人] 系 暑期2020 支持的开源项目。

## [基于 RPA 封装 Wechaty 接口下的快手聊天机器人]中期报告

## 项目信息

- 项目名称：基于 RPA 封装 Wechaty 接口下的快手聊天机器人 
- 方案描述：服务器端架设虚拟机，通过auto.js操作虚拟机内部的快手。类似于通过puppeteer操作微信网页版，但是被迫增加了通信。
- 时间规划：7.19-8.15完成主要方案的探索8.15-9.30完成dingdong-bot完善接口

## 项目进度

- 已完成工作：
  <br>探索了三种方案：
  - 原计划的在chorme上运行puppeteer操作快手停止，chrome不能运行快手app且web版没有私信功能
  - 通过抓包工具截获私信消息的暂时被搁浅，两个抓包工具都不能很好的拦截快手的私信消息。
  - 确定通过auto.js操控虚拟机的快手app为主要方案，已经完成puppet-kuaiShou的大部分前置工作。
  - 产出一个能运行一次dingdong-bot的puppet
- 遇到的问题及解决方案：
  - auto.js碰到的问题：
    - 快手的密码组件不能够被直接设置密码
    - 客户端和服务端通信问题阻塞
    - 通信自动关闭
    - 消息不能够被直接监听。如果进入消息页面时有新消息能够获取，如果进入时没有过一会才有则不能收到消息。
  - 解决方案
    - 目前只能通过屏幕位置然后人为点击，再模拟键盘操作输入密码
    - 由于readLine()读取数据时没有换行符就会陷入阻塞状态。每次发送的字符串结尾加上\r\n即可
    - 设置死循环让readLine进入阻塞状态监听客户端发送的信息
    - 通过循环findOne(1000)以达到每隔1s重新在当前页面查找新消息提醒。
- 后续工作安排：
  - 重心调整到完善auto.js在虚拟机上的服务端代码完善度，把已经完成的dingdong-bot移植到puppet上，并且在完善服务端代码的基础上继续完善puppet代码。<br>

# Wechaty Demo Day 视频 #
## PPT展示 ##

<div class="zoom-container" style="
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
">
  <video
    controls
    width="560"
    height="315"
    style="
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    "
  >
    <source
      src='https://www.bilibili.com/video/BV1vi4y1g7L2/'
      type="video/mp4"
    />Your browser does not support the video tag.
  </video>
</div>

## Live Code视频 ##

<div class="zoom-container" style="
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
">
  <video
    controls
    width="560"
    height="315"
    style="
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    "
  >
    <source
      src='https://www.bilibili.com/video/BV1ei4y1g7og/'
      type="video/mp4"
    />Your browser does not support the video tag.
  </video>
</div>
