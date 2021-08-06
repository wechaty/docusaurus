---
title: "OSPP 2021-期初报告-基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善"
author: zrn-fight
categories:
  - project
  - ospp
image: /assets/2021/07-ospp-plan-wechaty-matrix/wechaty-matrix-plan.webp
tags:
  - matrix
  - summer-of-wechaty
  - ecosystem
  - summer-2021
  - ospp
  - ospp-2021
  - plan
---

> Author:[@Rhyme](https://github.com/lprintf) [@zrn-fight](https://github.com/zrn-fight)

## 暑期2021

“开源软件供应链点亮计划-暑期2021”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。 旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

官网：<https://summer.iscas.ac.cn/#/homepage>

本项目 [基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善] 系暑期2021支持的开源项目。

## 基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善

- 导师：李卓桓，yswtrue

- 学生：林宇靖，张瑞宁

- 模块列表
  - 架设一套自己的 Matrix 系统
  - 架设 [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty/) 并整合到 Matrix 系统中
  - 对 Matrix AppService Wechaty 的功能进行分析，然后列出需要完善的功能列表，以及欠缺的功能列表，并完成计划列表中的计划。 在初期开发中，实现图片消息的接收和发送，完成原型验证 POC
  - 进行测试，完善项目文档
  - 配置 GitHub Actions 实现自动化测试（可选）
  
- 计划安排:
  - 架设一套自己的 Matrix 系统
    - 7/12 - 7/18
    - 配置好设置好matrix服务器，测通相关接口
  - 架设 [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty/) 并整合到 Matrix 系统中
    - 7/19 - 7/25
    - 学习现有源码，进行代码整合，提高代码质量
  - 对 Matrix AppService Wechaty 的功能进行分析，然后列出需要完善的功能列表，以及欠缺的功能列表，并完成计划列表中的计划
    - 7/26 - 8/1
    - 熟悉项目功能，根据仓库issue和实际代码列出需要完善的功能
    - 无
  - 实现图片消息的接收和发送，完成原型验证 POC
    - 8/2 - 8/8
    - 添加图片消息的接收和发送模块，使 Matrix AppService Wechaty支持图像消息
    - 无
  - 项目中期总结
    - 8/9 - 8/15
    - 实现阶段性目标，总结项目阶段性成果
    - 无
  - 项目完善
    - 8/16 - 8/31
    - 根据需要完善的功能列表完善群聊用户昵称显示，头像显示
    - 无
  - 项目优化
    - 9/1 - 9/15
    - 添加完善中英文。撰写整个项目过程的总结文章。配置 GitHub Actions 实现自动化测试，增加单元测试等
    - 无
  - 项目结项
    - 9/16 - 9/30
    - 总结项目成果，项目经验，准备结项材料
    - 无

- 项目链接：
    [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty)
- 联系方式：
  - 林宇靖：545641826@qq.com
  - 张瑞宁：3134191406@qq.com

- 分工合作:
  - 分工：林宇靖同学需主要负责项目功能实现和gitlab项目维护，张瑞宁主要同学负责代码审查和gitlab项目维护。共同撰写中英文文档
  - 证书：保证张瑞宁同学证书署名的情况下，尽量加上林宇靖同学的名字
  - 津贴分配：林宇靖同学:张瑞宁同学=3:1
