---
 title: "OSPP 2021-期中报告-基于开放 API 封装 Wechaty 接口下的飞书聊天机器人"
 author: remember00000
 categories:
  - project
  - ospp
 tags:
  - mid-term
  - ospp
  - ospp-2021
  - plan
  - summer-2021
  - puppet-provider
  - lark
  - summer-of-wechaty
  - ecosystem
 image: /assets/2021/08-ospp-mid-term-wechaty-puppet-lark/wechaty-lark.webp

---

> Code: [wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark)

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [项目名称] 系 暑期2021 支持的开源项目。

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
  - [ ] 连接Contact、Message、Room等类，尝试实现复用
  - [ ] 撰写文档、example
  - [ ] 发布npm包
- 遇到的问题及解决方案：
  在环境配置上出现版本不匹配等问题，通过搜索+与导师沟通解决；在撰写相关文档提交时，出现格式不匹配问题，通过熟读规范与多次修正得到解决；
  一个大的项目往往规范是很重要的，wechaty-puppet构建了良好的生态，我从学习到了专业性与规范性，感谢在这里遇到的导师和小伙伴，他们的耐心与认真给了我很深的印象。
- 后续工作安排：
  前面任务按时完成，今后继续执行原计划。

## 项目成果

项目仓库: [https://github.com/remember00000/wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark)  

### live coding视频

{% include iframe.html src="https://youtu.be/fAIZS9lgxjo" %}
国内链接：[https://v.qq.com/x/page/j32711k0nfg.html](https://v.qq.com/x/page/j32711k0nfg.html)

### PPT展示视频

{% include iframe.html src="https://youtu.be/IwMA8VJZZqE" %}

### 项目PPT

{% include iframe.html src="/assets/2021/08-wechaty-larkpuppet-ospp-mid-term-blog/mid-term-ppt.pdf" %}

## 联系我们

- 项目链接：[https://github.com/remember00000/wechaty-puppet-lark](https://github.com/remember00000/wechaty-puppet-lark)  
- 联系方式：+86 18660817606|email：2741102314@qq.com
