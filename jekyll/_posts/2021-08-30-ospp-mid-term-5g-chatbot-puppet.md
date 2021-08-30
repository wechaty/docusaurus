---
title: "Mid Term blog of OSPP 2021: 5gChatbot"
author: zrn-fight
categories:
  - project
  - ospp
image: /assets/2021/08-ospp-mid-term-5g-chatbot-puppet/walnut-wechaty.webp
tags:
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - plan
  - other
---

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块] 系 暑期2021 支持的开源项目。

## [开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块]信息

- 导师：[李佳芮  康嘉  李卓桓]  
- 学生：[张瑞宁  邵琦]  
- 项目介绍：[https://github.com/wechaty/summer/issues/74]  
- 项目名称：  开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块
- 方案描述： 通过对Wechaty Puppet Provider，REST API以及5G Chatbot SDK等进行了解和学习，并对已有项目进行梳理，多和导师进行沟通，实现通过 Wechaty 加载 wechaty-puppet-5g-msg 模块，并通过 5G Chatbot / RCS 底层，实现文本消息的收发功能，提供一个 examples/ding-dong-bot.ts ，完成“接收到文字消息ding时，自动回复消息dong"等功能。 
- 时间规划：  
  - 7.1-7.10
    - 先和导师沟通，寻求导师的指导和建议，熟悉Wechaty Puppet Provider的业务流程，并对自己目前还没有掌握的技术栈REST API和5G Chatbot / Rich Communication Service进行快速的了解和学习，确定好详细的任务规划.
  - 7/12 - 7/18 
    - 配置好服务器，测通相关接口 
    - 使用 https://github.com/wechaty/wechaty-puppet-official-account 项目作为模版，将其中的微信公众平台调用全部封装为RCS模块的调用 
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

## 项目进度

- 已完成工作：  
  - 熟悉开发工具，了解硬核桃和Wechaty接口技术规范
  - 配置好服务器，测通5G消息上下行接口，成功进行接受和发送消息的测试
  - 学习平台目前Wechaty调用其他其他平台RCS源码方案
  - 学习typescript
  
- 遇到的问题及解决方案：  

  - Q：不清楚如何配置服务器
  - S：与康嘉老师线上视频请教服务器配置方案，成功解决
  - Q：不熟悉git的PR流程
  - S：参考github Action相关文档以及Wechaty社区提供的博客完成

   

- 后续工作安排：  

  - 尽快熟悉已有项目的源码https://github.com/wechaty/wechaty-puppet-official-account 

  - 继续补充完善项目功能,如：通过 5G Chatbot / RCS 底层，实现文本消息的收发功能，提供一个 examples/ding-dong-bot.ts ，接收到文字消息ding时，自动回复消息dong，添加收发图片和文档等功能 。
  - 进行项目测试并提交pr。
  - 完善项目文档。

## 项目成果

项目仓库: <https://github.com/zrn-fight/wechaty-puppet-walnut>  

### live coding视频:

{% include iframe.html src="https://youtu.be/qGl0zXtDL4s" %}

### PPT展示视频:

{% include iframe.html src="https://youtu.be/vCV0ijD0R9g" %}

### 项目PPT:

{% include iframe.html src="https://maiimg.com/free/?e=dwYyE0y.U6nYo6" %}

## 联系我们

- 项目链接：[Github Issue 链接，如 https://github.com/wechaty/summer/issues/74]  
- 联系方式：
  - 张瑞宁：3134191406@qq.com
  - 邵琦：shaoqichn@qq.com
