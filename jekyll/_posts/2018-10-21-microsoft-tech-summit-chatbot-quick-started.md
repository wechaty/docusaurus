---
title: "Microsoft Tech Summit - 快速搭建一个聊天机器人"
author: lijiarui
categories: event
tags:
  - talk
  - news
image: /assets/2018/microsoft-hol-chatbot.webp
---

这是我在[2018微软技术暨生态大会](https://mp.weixin.qq.com/s/Hm2tc_V4b3EKOlBx4PxEuA) 动手实验室的分享，2018微软技术暨生态大会10月24日在上海世博中心如约而至。 作为微软最负盛名的技术峰会，此次大会将带领参会者深入领略技术精髓，感受微软黑科技的魅力，探讨在云计算、物联网、移动互联网、大数据和人工智能的发展洪流中，如何洞察新技术与新变革，聚焦解决问题与创造价值，如何开启企业数字化转型之旅。

本次实验帮助开发者从实际业务场景出发，围绕微软Luis 和 Typescript 做实践课，让开发者轻松的做一个微信聊天机器人。另外，对于希望转变为人工智能的传统产品经理或传统工程师而言，可以帮助你快速了解行业背景并快速上手，对于技术决策者，可以在此阶段清楚地了解聊天机器人的局限性和发展。

## Luis 介绍

LUIS (Language Understanding Intelligent Service，<https://www.luis.ai>) 是微软发布的面向开发者的自然语言语义理解模块开发服务。LUIS的使命是**让非NLP专业的开发者能够轻松地创建和维护高质量的自然语言理解模型，并无缝对接到相关的智能应用当中**。
通过LUIS平台，非NLP专业的开发者可以轻松创建一个LUIS App，并通过标注所期望的输入(自然语言指令)和输出(意图和实体)来进一步“培养” 它。在整个开发过程中，开发者并不需要了解背后算法的细节，只需要清晰地定义自己需要让机器理解的用户意图和实体即可。LUIS App 可以是任何传统的应用，包括社交媒体应用，聊天机器人，实体机器人，车载以及支持语音的桌面程序应用。
LUIS的开发流程更像是一个教学过程：开发者是老师，LUIS App是学生。老师通过不停地告知学生正确的语义解析结果来完成教学。一个好的教学过程是一个“训练+实践”的闭环：标注一定量的起始数据；训练得到语义理解模型；对模型进行必要的测试；发布模型并应用到真实用户场景；甄选应用日志中的语句；继续标注并更新模型。这个过程周而复始，通过不停地迭代开发，不停地改善理解模型，使其越来越接近人类的理解能力。

![luis](/assets/2018/microsoft-hol-luis.webp)

## 实验目标

- 搭建一个LUIS 模型
- 使用wechaty 创建一个微信聊天机器人
- 将LUIS 模型整合进入微信机器人

## 系统要求

- Ubuntu 18
- Microsoft Visual Studio Code (VSCode)
- Node (version > 10.0)
- Github 账号
- Luis 账号

## 步骤

1. 安装Unbutun 18
2. 安装 Node 和 Npm
3. 安装Microsoft Visual Studio Code (VSCode)
4. 安装Github
5. 从Github 上clone 项目：<https://github.com/lijiarui/microsoft-summit-chatbot-course>

## 实验

1. 创建一个LUIS模型
2. 创建一个微信机器人
3. 将LUIS 模型整合到微信机器人中

## 实验1--创建一个LUIS模型

创建一个LUIS 模型可以分为3个步骤: 创建APP，训练模型，发布模型。下面将会进行详细的讲解：

### 任务1-创建APP

1.登陆 www.luis.ai  如果之前注册过就sign in, 注册过直接login 就可以了：

![luis-1](/assets/2018/microsoft-hol-luis-1.webp)

2.点击左上角的“Create New App” 创建一个新的应用

![luis-2](/assets/2018/microsoft-hol-luis-2.webp)

3.在弹框中，给你的LUIS模型起个名字，并设置描述，然后选一个应用环境，我们选择中文。然后点击“Done”

![luis-3](/assets/2018/microsoft-hol-luis-3.webp)

4.然后进去LUIS 模型的主页面，接下来去训练LUIS 模型。

![luis-4](/assets/2018/microsoft-hol-luis-4.webp)

### 任务2-增加意图和实体

接下来，我们为我们的APP增加两个意图，意图表示用户希望执行的任务。定义一组意图，对应于用户希望在APP中执行的操作。

1.点击‘Create new intent’ 创建一个 ‘BookFlight’ 的意图，并把这个意图命名为‘BookFlight’点击‘Done’

![luis-5](/assets/2018/microsoft-hol-luis-5.webp)

![luis-6](/assets/2018/microsoft-hol-luis-6.webp)

![luis-7](/assets/2018/microsoft-hol-luis-7.webp)

2.输入一个可能的订票话术，比如“帮我订一张去上海的机票”，然后回车：

![luis-8](/assets/2018/microsoft-hol-luis-8.webp)

3.推荐最少写5个类似的话术，你会发现这些话术会自动的被标注为BookFlight 的意图。

![luis-9](/assets/2018/microsoft-hol-luis-9.webp)

4.回到点击‘Intent’再添加一个 ‘GetWeather’ 的意图，像刚刚一样，也至少输入5个有表示天气的话术：

![luis-10](/assets/2018/microsoft-hol-luis-10.webp)
![luis-11](/assets/2018/microsoft-hol-luis-11.webp)

#### 定义实体(entities)

你可以创建各种类别的实体。实体代表话术中有用的词语或者短语，他们将是完成任务的关键要素。实体和与之相关的意图对于APP 的任务执行是非常重要的。在我们这个订机票的例子中，“位置”,“日期”，“航空公司”，“舱位”都是非常重要的实体。

实体有多种类型：

- Simple： 通过机器学习的方法识别出来，是最简单的实体
- Hierarchical: 通过机器学习的方法识别出来，根据上下文关系得到的实体，比如Location，根据上下文知道是ToLocation还是FromLocation. 他们共享一个实体集合，但是根据上下文被分配到不同的实体中。
- Composite: 通过机器学习的方法识别出来，有多个实体组成，比如3张去上海的机票，可以是PlaneTicketOrder 的实体，由number 和ToLocation 组成
- List: 是通过文本匹配的方法识别出来的，是一组封闭的词语。LUIS 不会为List 自动生成更多的值
- Regex: 通过正则表达式识别出来的实体
- Pattern.any: 是一种长度可变的占位符，在模板中使用，用来标出实体的起始位置和结束位置。比如搜索书籍： 谁写了{BookTitle}[?]

1.点击‘Create new entity’ 创建新的实体.

2.在弹框中将实体命名为‘Location’，选择实体类别为’Hierarchical’

3.选择实体类别后，会自动跳出’Child name’,点击‘Add a child entity’增加两个Child name, 分为为’ToLocation’和 ‘FromLocation’

4.最后，点击’Done’完成保存这个实体。

![luis-12](/assets/2018/microsoft-hol-luis-12.webp)

#### 使用预定义实体(Pre-Build Entities)

接下来，我们增加一个预定义的时间实体。

1.点击‘Add prebuild Entity’

![luis-13](/assets/2018/microsoft-hol-luis-13.webp)

2.预定义实体现在还不支持中文，我们可以选择’number’先来感受一下。

![luis-14](/assets/2018/microsoft-hol-luis-14.webp)

### 任务3-训练模型

我们定义了意图和实体以后，需要进行模型的训练。点击右上角的’Train’。当按钮由红色变为绿色以后，训练成功。为了让模型越来越好用，需要添加更多的标注好的意图和实体。

![luis-15](/assets/2018/microsoft-hol-luis-15.webp)

点击‘Publish’可以将这个App发布出去。最后就可以整合到微信机器人中。

## 实验2--创建一个微信机器人

这一部分来展示如果快速搭建一个微信机器人

### 任务1-运行代码

1.输入命令git clone <https://github.com/lijiarui/microsoft-summit-chatbot-course.git>

![wechaty-1](/assets/2018/microsoft-hol-wechaty-1.webp)

2.进入目录microsoft-summit-chatbot-course， cd microsoft-summit-chatbot-course

3.安装依赖包，运行npm install

![wechaty-2](/assets/2018/microsoft-hol-wechaty-2.webp)

### 任务2-运行代码

1.运行 npm run start

![wechaty-3](/assets/2018/microsoft-hol-wechaty-3.webp)

## 实验3--将LUIS 模型整合到微信机器人中

### 任务1-发布LUIS版本

1.点击LUIS的Publish获取APPID和KEY

![integrate-1](/assets/2018/microsoft-hol-integrate-1.webp)

2.发布成功后，可以看到绿色的成功提示，点击Refer to the list of endpoints切换到管理页面：

![integrate-2](/assets/2018/microsoft-hol-integrate-2.webp)

3.获取Authoring Key:

![integrate-3](/assets/2018/microsoft-hol-integrate-3.webp)

4.点击 Application Information, 获取APP ID

![integrate-4](/assets/2018/microsoft-hol-integrate-4.webp)

### 任务2-将LUIS RESTFUL API 接入wechaty

1.安装官方的’luis-sdk’,并将获取的key 和 Application ID 填入：

![wechaty-4](/assets/2018/microsoft-hol-wechaty-4.webp)

2.根据已有的LUIS 配置写示例代码：

![wechaty-5](/assets/2018/microsoft-hol-wechaty-5.webp)

3.运行 npm run start：

![wechaty-6](/assets/2018/microsoft-hol-wechaty-6.webp)

用户发送，即可得到测试回复：

![demo](/assets/2018/microsoft-hol-demo.webp)

注意：
由于时间关系，本次实验只是讲解了LUIS 的部分，LUIS获取的key 只是免费测试版本，后续需要和Azure 结合，获取到稳定的付费版本接口。
