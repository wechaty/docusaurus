---
title: "We are Hosting Jiarui Li at Startup Grind Beijing"
author: juzibot
categories: announcement
tags:
  - release
  - event
  - news
  - meetup
  - talk
image: /assets/2021/04-open-source-wechaty/000.webp
---

> 作者: [juzibot](https://github.com/juzibot/)

## See we are hosting Jiarui Li at Startup Grind Beijing

- when

2021年4月23日 上午11:45  - 下午1:15

- where

北京（10000）五道口地区

- 关于Startup Grind 

Startup Grind 成立于 2010 年，是世界上最大的初创公司、创始人、创新者和创造者社区。创始人德里克·安德森 (Derek Andersen) 召集了一些朋友和企业家同行，以解决他们所创办公司面临的日益严峻的挑战。他们的聚会很快吸引了来自各个行业的创始人和专家，他们齐聚一堂，分享他们对早期创业者的建议和灵感。最终，充满活力的 Startup Grind 社区开始在洛杉矶、特拉维夫、伦敦、纽约、北京等地发展。

![001](/assets/2021/04-open-source-wechaty/001.webp)

### The Founders Lunch

The Founders Lunch是Startup Grind Beijing为当地Startup生态系统中的创始人提供的一个特殊概念。每个企业家向大家分享自己的在成功或失败中的经验，以及专业知识，这对于创业者来说也是非常重要的。此外还会确保参与者是团队规模较小，初创公司的创业者或联合创始人及其部分团队成员。在每次创始人午餐会上，我们都会邀请一位创始人主持会议并讨论与其他创始人相关的话题。这次邀请到的是李佳芮。

## Speaker：李佳芮

![002](/assets/2021/04-open-source-wechaty/002.webp)

句子互动联合创始人&CEO，GitHub上开源项目Wechaty上面的联合作者，Wechaty在github上面有超过1万star，搭建覆盖全球的微信平台开发者社区，微软AIWP，曾出版书《Chatbot从0到1》。

## How to build a chatbot from 0 to 1? - 李佳芮(Jiarui Li)

如果你要在美国上网，需要找互联网，但在中国，你要去微信，微信就是移动互联网。

但是目前的微信并没有管理客户的对话管理工具，没有谷歌分析，也没有混合面板，什么都没有，但是这些又恰恰是用户时刻需要的。

李佳芮很了解这一点是因为她为微信构建了世界上最流行的开源 API，规模庞大，在 GitHub 上拥有 10,000 名开发人员和 5,000 star。她是 JuziBot 的创始人兼 CEO，专注于微信业务。

佳瑞在YC湾区的时候，经常被其他美国校友问起怎样通过微信卖东西到中国的事情，并对在微信上搭建聊天机器人表现出了极大的兴趣。

本周五李佳芮将向各位创业者分享如何利用微软认知服务从0到1搭建chatbot。

### 怎样从0到1搭建一个聊天机器人

- 在过去，很多人对chatbot的传统印象一定是认为它是通过机器学习进行的，等于算法，等于黑科技，需要掌握非常强的数学能力、概率论能力，还需要了解所有的相关算法，掌握很强的软件能力和工程能力，阅读大量的文献论文，最后结局大多数人从入门到放弃。

- 但其实不是这样的，我们完全可以站在巨头的肩膀上去做更多上层应用层的事情，目前有很多模型都已经被上百上千种算法工程师的建设好了，存在很多现成的预设模型，我们完全可以在这些模型基础上搭建自己的应用。

- 搭建chatbot的正确姿势

举个例子我们可以用微软的Microsoft Bot Framework,它有非常多的组件可以直接来用，例如语音识别、语音转文字、文字转语音或在中间搭建对话系统等。

![intro](/assets/2021/04-open-source-wechaty/11.webp)

- 下面主要围绕微软的luis来讲怎么搭建一个多轮的对话系统，与chatbot从0到1理论非常相似，可以借鉴使用，有些东西也是chatbot独有的，如今我们不会再去说搭建一个应用技术，其实还有许多其他的产品设计，交互设计，以及后面的运营推广，这些都是属于网站或者app的，对于chatbot也是一样的。
 ![intro](/assets/2021/04-open-source-wechaty/12.webp)

 - 需求分析
 要分清bot哪些能做，哪些不能做。除了过去做网站需求分析的方法，还需要确定chatbot的边界、形象，搭建之前要告诉用户bot的功能，如果抬高了预期的话，最后bot不能满足用户的预期，会让用户觉得bot不智能。

 - 流程设计
 在流程设计阶段，要明确哪些是能保证chatbot成功的，哪些是能影响chatbot成功的因素，并且把整个chatbot业务要素进行梳理，抽取对话流程，绘制相关流程图，并把业务线部分进行合并。

 - 数据处理
 收集后如果想要系统更好的进行预处理，需要做一些数据的扩充，比如数据的处理和标注。

 - 对话脚本撰写
 与以前搭建app不一样，零UI的对话脚本很重要，怎么去引导用户去完成对话，有十条设计原则：简洁明了、对话语句要自然、区别新老用户、使用问候语和结束语、确认策略、随机策略、使用对话式标识、设计延迟话术、主动学习、持续跟踪上下文。

 - 对话系统搭建
 简单来说就是把人说的话翻译成机器能听懂的话，就把自然语言翻译成一些机器语言，到了对话管理模块，有两个小的模块，一个是对话状态追踪，一个是对话策略优化。整个过程概括下来就是机器说一句话，翻译成人能听懂的话，送到机器的大脑，机器的大脑再说一句话，翻译成人能懂的，完成一次交互，就是对话系统的搭建。

 - 对话任务测评
 不同的bot有不同的测评方式，简单来说，任务型bot和问答型bot说得越短，轮次越少越好，而闲聊型bot则是轮次越多越好，代表越来越智能。

 - 平台渠道集成
 ![intro](/assets/2021/04-open-source-wechaty/16.webp)
 把bot集成到不同的IM里面，例如微信等。

 - 运营反馈
 与产品运营比较相关，对于对话异常的分析，可以通过判断机器人说“我不知道这个问题”的回答的次数，选择在什么时候调用，大概率出错的位置，需要把对话系统再次优化，就是整个的运营反馈。

- 如何实操搭建一个聊天机器人

 - 任务1：发布LUIS版本

   点击LUIS的Publish获取APPID和KEY
   ![intro](/assets/2021/04-open-source-wechaty/20.webp)
   发布成功后，可以看到绿色的成功提示，点击Refer to the list of endpoints切换到管理页面：
   ![intro](/assets/2021/04-open-source-wechaty/21.webp)
   获取Authoring Key
   ![intro](/assets/2021/04-open-source-wechaty/22.webp)
   点击 Application Information, 获取APP ID
   ![intro](/assets/2021/04-open-source-wechaty/23.webp)

 - 任务2 - 将LUIS RESTFUL API 接入wechaty
   安装官方的’luis-sdk’,并将获取的key 和 Application ID 填入：
   ![intro](/assets/2021/04-open-source-wechaty/24.webp)
   根据已有的LUIS 配置写示例代码
   ![intro](/assets/2021/04-open-source-wechaty/25.webp)

 - 任务3：运行代码

   输入命令[git clone](https://github.com/lijiarui/chatbot-zero-to-one)
   ![intro](/assets/2021/04-open-source-wechaty/26.webp)

 - 任务4：运行代码

   运行 npm run start
   ![intro](/assets/2021/04-open-source-wechaty/27.webp)
   用户发送，即可得到测试回复
   ![intro](/assets/2021/04-open-source-wechaty/28.webp)

### 相关链接

[See we are hosting Jiarui Li at Startup Grind Beijing](https://www.startupgrind.com/events/details/startup-grind-beijing-presents-we-are-hosting-jiarui-li/)
