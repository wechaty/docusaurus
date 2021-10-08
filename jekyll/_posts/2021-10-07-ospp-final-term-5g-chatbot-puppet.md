---
title: "OSPP 2021-结项报告-开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块"
author: zrn-fight
categories:
  - project
  - ospp
image: /assets/2021/08-ospp-final-term-5g-chatbot-puppet/walnut-wechaty.webp
tags:
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - plan
  - final-term

---

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块] 系 暑期2021 支持的开源项目。

## [开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块]信息

- 导师：[李佳芮  康嘉  李卓桓]  
- 学生：[张瑞宁  邵琦]  
- 项目介绍：<https://github.com/wechaty/summer/issues/74>
- 项目名称：  开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块
- 方案描述：
  - 使用5g Chatbot接口，把收发消息测通
  - 使用 <https://github.com/wechaty/wechaty-puppet-official-account> 项目作为模版，将其中的微信公众平台调用全部封装为RCS模块的调用
  - 发布 Git Repo wechaty-puppet-5g-msg，实现文本消息的发送和接收
  - 进行测试，完善项目文档
  - 配置 GitHub Actions 实现自动化测试（可选）
- 时间规划：  
  - 使用5g Chatbot接口，把收发消息测通
    - 7/12 - 7/18
    - 配置好服务器，测通相关接口
  - 使用 <https://github.com/wechaty/wechaty-puppet-official-account> 项目作为模版，将其中的微信公众平台调用全部封装为RCS模块的调用
    - 7/19 - 8/10
    - 学习现有源码，学习RCS的相关知识。
    - 接入wechaty，进行代码整合，提高代码质量。
  - 项目中期总结
    - 8/11 - 8/15
    - 实现阶段性目标，总结项目阶段性成果。
  - 发布 Git Repo wechaty-puppet-5g-msg，实现文本消息的发送和接收
    - 8/16 - 8/31
    - 提供一个 examples/ding-dong-bot.ts ，完成“接收到文字消息ding时，自动回复消息dong"的功能
  - 项目完善优化
    - 9/1 - 9/15
    - 撰写整个项目过程的总结博客。配置 GitHub Actions 实现自动化测试，增加单元测试等。
  - 项目结项
    - 9/16 - 9/30
    - 总结项目成果，项目经验，准备结项材料。

## 项目总结

- 项目成果：  
  - 测通了RCS接口，在终端发送ding时，可以收到dong
  - 对wechaty和puppet的源码进行了学习，尝试理解消息发送的流程
  - 提交了初期和中期博客
  - 完成了wechaty-puppet-walnut模块，把puppet的消息收发流程测通

- 遇到的问题及解决方案：  
  - 这是我第一次参加开源项目，是一次很棒的体验，在此次项目中我体验到了完整的开源项目的贡献流程，认识了很多技术大佬，学会了使用issue和pr来参与项目的讨论，熟悉了ts和nodejs的使用。由于自己的知识储备不足，开发过程并不顺利，很感谢导师对我的包容，从最初的测通RCS接口到接入puppet，我主动和导师交流的次数不多，遇到问题没有及时反馈，找到的资料也不多，以至于项目的进度非常缓慢，沟通交流能力在一个团队中是非常重要的一点，而这也是我非常欠缺的一个方面，后面我会在这方面进行改进
  
- 项目展望：  
  - 发布npm包，连接wechaty-puppet-getting-started项目。
  - 丰富项目功能，增加发送图片等富文本消息的功能。

## 项目成果

项目仓库: <https://github.com/zrn-fight/wechaty-puppet-walnut>  

### live coding视频：

{% include iframe.html src="https://www.bilibili.com/video/BV1b44y1t7vz/" %}

### PPT展示视频：

{% include iframe.html src="https://www.bilibili.com/video/BV12L4y1z7sQ/" %}

### 项目PPT：

{% include iframe.html src="/assets/2021/08-ospp-final-term-5g-chatbot-puppet/5g-chatbot-ppt.pdf" %}

## 联系我们

- 项目链接：<https://github.com/wechaty/summer/issues/74>
- 联系方式：
  - 张瑞宁：3134191406@qq.com
  - 邵琦：shaoqichn@qq.com
