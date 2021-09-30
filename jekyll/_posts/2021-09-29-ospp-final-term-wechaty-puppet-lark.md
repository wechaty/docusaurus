---
 title: "OSPP 2021-结项报告-基于开放 API 封装 Wechaty 接口下的飞书聊天机器人"
 author: remember00000
 categories:
  - project
  - ospp
 tags:
  - final-term
  - ospp
  - ospp-2021
  - summer-2021
  - puppet-provider
  - lark
  - summer-of-wechaty
  - ecosystem
 image: /assets/2021/09-ospp-final-term-wechaty-puppet-lark/wechaty-lark.webp

---

> Code: [wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark)

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人] 系 暑期2021 支持的开源项目。

## [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人]信息

- 导师：范蕊  
- 学生：马田慧  
- 项目介绍：[https://github.com/wechaty/summer/issues/38](https://github.com/wechaty/summer/issues/38)  
- 项目名称：基于开放 API 封装 Wechaty 接口下的飞书聊天机器人  
- 方案描述：
目前，飞书 Puppet 已经完成了初步开发，目前主要实现的功能有:消息收发（文字、文件、图片）,部分群组相关操作（创建群、修改群名、删除群成员等），部分企业相关操作（查看企业内成员等），接下来需要对照飞书开放平台和 Wechaty 接口，完善该项目。  
- 时间规划：
  - 熟悉wechaty
    - 7.14 - 7.17
    - 使用wechaty
    - 了解飞书api
  - 更新api版本
    - 7.18 - 7.24
  - 实现之前未实现的函数阶段
    - 7.25 - 8.8
    - 分两阶段完成，期间注重与导师交流
  - 连接Contact、Message、Room等类
    - 8.9 - 8.21
  - 撰写文档，examples
    - 8.22 - 8.28
  - 项目完善
    - 8.29 - 9.5
    - 代码重构
    - 发布npm包  

## 项目进度

- 已完成工作：
  - [x] 更新api版本，熟悉飞书api和wechaty。
  - [x] 实现之前未实现的函数
  - [x] 连接Contact、Message、Room等类，尝试实现复用
  - [x] 撰写文档、example
  - [ ] 发布npm包
- 遇到的问题及解决方案：
  - 问题主要是在我们这个项目面对的开发者和用户体验上，由于原本体验微信的接口，由于web协议的原因没有体验，对于用户如何使用我们的接口没有具体合适的了解；以及如何将puppet的接口暴露给wechaty-puppet社区的问题，与原本构想不同，我在除了基本消息类型之外的实现没能理清楚消息时如何传递的，最终通过导师的指导，我查看官方文档，阅读源码，通过查看其它项目是如何实现的，最终通过消息仓库的具体使用解决问题。
  - 开发时存在的主要问题在于，开发环境时返回网址网址不固定，开发每次需要到飞书上配置事件订阅的网站，以及本地更新后不能直接部署的问题。这个问题是由于内网穿透网站的连接不稳定造成的，在时间空闲时刻可以返回固定网址，在本地使用热更新技术实现本地修改后代码直接自动部署，加快开发效率。
  - 这是我第一次体验社区式的开发，由于对于项目的严谨性社区生态的发展性理解浅显，在其中社区活动上流程上不太清楚，以及本地工具的细节的不理解而产生种种问题，感谢社区的老师们对我的包容和指导，我从中学到了很多严谨性规范性上的知识；很多问题由于对于开发知识与经验的欠缺，我常常为bug焦头烂额，感谢导师的耐心帮助，希望自己能常常记住这次开发过程中的经验教训，并常常实践以便做到更好。
  - 最后，希望“开源软件供应链点亮计划”系列活动越办越好，祝愿wechaty社区越来越健壮!
- 项目展望：
  项目已经完成了预计的功能，但是没能模拟开发者实现时的基本使用，还没有和wechaty-puppet对接过，直接通过puppet利用6行代码实现飞书机器人的功能需要更加集成，这是项目之后发展的一个方向。
  更多的开发者将自己的创意结合机器人实现个性特点针对不同性能的机器人。

## 项目成果

项目仓库: [https://github.com/wechaty/wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark)  

### live coding视频

{% include iframe.html src="https://youtu.be/fAIZS9lgxjo" %}
国内链接：[xxx](xxx)

### PPT展示视频

{% include iframe.html src="https://youtu.be/IwMA8VJZZqE" %}
国内链接: [xxx](xxx)

### 项目PPT

{% include iframe.html src="/assets/2021/08-ospp-mid-term-wechaty-puppet-lark/mid-term-ppt.pdf" %}

## 联系我们

- 项目链接：[https://github.com/wechaty/wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark)  
- 联系方式：+86 18660817606|email：2741102314@qq.com
