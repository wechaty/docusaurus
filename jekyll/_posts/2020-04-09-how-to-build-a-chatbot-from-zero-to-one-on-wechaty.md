---
title: "如何从0到1搭建微信聊天机器人" 
author: lijiarui
categories: announcement
tags:
  - chatbot
  - globalai
  - talk
  - news
  - meetup
  - featured
image: /assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/homepage.webp
---

> 作者: [lijiarui](https://github.com/lijiarui/)

## 李佳芮

句子互动的创始人，GitHub上开源项目Wechaty上面的联合作者，Wechaty在github上面有超过1万star，并搭建了一个覆盖全球的微信平台开发者社区，微软的 AI MVP，出版书：《Chatbot从0到1》，已经在京东上架，欢迎大家阅读，本次分享里面会简单介绍书中的内容，如何从0到1搭建一个聊天机器人，

## How to build a chatbot from zero to one on WeChat - 李佳芮(Jiarui Li)

- [0:00:00](https://youtu.be/Uqtx6UViEro?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh) 介绍会议议程
- [0:01:43](https://youtu.be/Uqtx6UViEro?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=103) 李佳芮开始介绍如何从零到一搭建微信机器人
- [0:03:24](https://youtu.be/Uqtx6UViEro?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=204) 对话系统趋势
- [0:09:57](https://youtu.be/Uqtx6UViEro?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=597) 怎样从0到1搭建一个聊天机器人
- [0:30:31](https://youtu.be/Uqtx6UViEro?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&t=2354) 如何实操搭建一个聊天机器人
{% include iframe.html src="https://youtu.be/Uqtx6UViEro?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh" %}

### 对话系统的趋势

人类一直在寻找更加便捷的人机交互方式，在80年代出现最简单的人机交互方式，如果要完成一个交互需要下载一个应用；后来出现了浏览器、网站等，发展到已经不需要在电脑上下载一个应用了；后来出现了手机，整个交互方式变成了以移动触摸为主的交互，大大提高了效率和便捷性；未来会有更多的交互方式，会变成我说一句话或者一个手势，机器就可以立即把这个任务完成。
能够发现，我们要的需求一直没变，但是交互方式一直在发生变化，从最早以鼠标键盘为主的电脑，陆续变成移动触摸为主的手机等移动终端，再到未来以自然语言为主的chatbot聊天机器人，交互方式会变得越来越便捷，机器变得像人一样聪明是未来交互的趋势。
![changes](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/changes.webp)
我们可以看到，原来的机型是超级计算机，体型巨大无比只有专家才能用到，而现在就算是三五岁的小孩子或是年迈老年人，不是很懂机器也可以使用。交互从没有智能到有智能，从无界面到有界面的变化。我们来对对话系统来做个类比，在过去的手机因为有了操作系统，变成了智能手机
![dialoguesystem](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/dialoguesystem.webp)
到今天我们可以看到，所有的家居机器人客服，是因为有了对话系统，变成了智能家居、智能机器人、智能客服，对话系统将是人工智能时代的必要组件和产品，依赖对话系统为之赋予智能的能力，有了对话，他变成了智能的产品，
![robot](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/robot.webp)
对话交互是一种新的UI，在过去网站会强制用户像机器人一样去思考问题，网站和APP的交互方式是完全按照产品经理或者是UI设计师的做法去做的，对话系统则是让机器像人一样去思考问题，拿app和人的对比，过去的app是需要下载的，并且app的会客成本和开发成本很高，每次迭代升级时要重新上架，都需要成本，bots的不一样，在IM里面时是不需要安装的，不需要非常高的网络带宽，每次执行只需要告诉我当前的任务，是零UI的，并且开发和设计的成本也不是很高，当然算法除外，下面会详细的介绍。
![classification](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/classification.webp)
对话系统共分为三类:

- 任务型更多是明确的任务目标，并且需要做一个参数化，主要是为了完成一个任务而做的对话系统，为了完成一个需求，比如订票订餐等等任务。

- 问答型，同样也有任务目标，但是没有明确的参数化的请求，通常是一问一答，上下文匹配，用户提出一个问题，机器会在库里找一个相似的问题，把对应的答案推给用户，更多的时候是一个单人对话，而任务型更多的是一个多人对话，较复杂。

- 闲聊型，通常最早就是以微软的小冰、图灵机器人等等为代表，当用户不停和他聊天，聊天时间越长，说明这个机器人越好，与任务型相比对话型机器人是聊的越短说明这个机器人越好，越快解决问题越好，而闲聊型是聊的越久，说明对这个机器人越依赖，越喜欢他。

### 怎样从0到1搭建一个聊天机器人

- 在过去，我们公司一直在为企业做chatbot，也和很多企业聊过，他们以为搭建chatbot的方式一定是机器学习做的，这个需要掌握非常强的数学能力，概率论能力，也需要了解所有的相关算法，要有很强的软件能力，很强的工程能力，还要去读大量的论文，了解什么是神经元，最后从入门到放弃。
这是很多人对chatbot的传统印象，认为chatbot就等于算法，等于黑科技，但其实不是这样的，我们完全可以站在巨头的肩膀上去做更多上层应用层的事情，其实有很多模型都是经过上百上千种算法工程师的建设，他们甚至已经做好了很多预设的模型，我们完全可以在他们的模型基础上做自己的应用。
所以下面来讲解一下搭建chatbot的正确姿势。
例如，我们可以用微软的Microsoft Bot Framework,它有非常多的组件可以直接来用，例如语音识别、语音转文字、文字转语音或者是在中间搭建对话系统等等。
![botframework](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/botframework.webp)
- 下面主要围绕微软的luis来讲怎样去搭建一个多轮的对话系统，我刚刚给大家介绍的chatbot从0到1，理论也是非常相似的，把搭建chatbot拆分成了8大生命周期，其实搭建一个chatbot和过去我们搭建一个网站或者app有很多相似的地方，但也有一些不一样的地方，某些东西我们是可以拿来借鉴直接使用的，有些东西也是chatbot独有的，如今我们不会再去说搭建一个应用技术，其实还有许多其他的产品设计，交互设计，以及后面的运营推广，这些都是属于网站或者app里面的，对于chatbot也是一样的，8大生命周期其中数据处理是指数据的收集以及对数据的标注，对话脚本撰写是指以对话的方式把整个任务脚本写出来，基于这些脚本进行后面的系统搭建；系统测评是为了证明这个bot已经符合上线的标准，包括对他的准确率，当各种数据标准达到了一定指标之后，就可以把它嵌入到不同的平台里面，比如像微信等即使工具里面，运营反馈是根据数据和上线的结果进行持续的迭代。
![lifecycles](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/lifecycles.webp)

- 需求分析
需求分析就是过去去做网站的需求分析的方法，多了一些需要确定chatbot的边界，形象，搭建之前要告诉用户能做什么，如果你抬高了预期的话，bot不能满足用户的预期，他会觉得这个bot非常不智能，非常傻，所以在需求分析阶段，要分清bot哪些能做，哪些不能做。

- 流程设计
在流程设计阶段，要明确哪些是能保证chatbot成功的，哪些是能影响chatbot成功的因素，并且把整个chatbot业务要素进行梳理，抽取些对话流程，绘制相关流程图，并把业务线的部分进行合并。

- 数据处理
收集后如果想要系统更好的进行预处理，需要做一些数据的扩充，比如数据的处理和标注。

- 对话脚本撰写
这一点是比较重要的，与以前搭建app不一样，因为是零UI，对话脚本很重要，怎么去引导用户去完成对话，有十条设计原则：简洁明了、对话语句要自然、区别新老用户、使用问候语和结束语、确认策略、随机策略、使用对话式标识、设计延迟话术、主动学习、持续跟踪上下文。简单介绍10条的是原则，控制对话流：首次互动要说清楚，能做哪些事，不能做哪些事，应该怎样做命令，都可以在首次互动时说清楚，持续的跟用户说一些内容，引导用户到正确的轨道上，包括一些中断，虽然做bot是零UI，但实际上它是有一个隐形的UI在的，在过去搭建app和网站的时候，我们有相关的设计导航，有相关的目录，其实在对话脚本的撰写里面也有隐形的存在，但是要设计好，在不同的时候召回出来，当用户要求进行步骤转换，其实都是需要脚本去进行的。

- 对话系统搭建
用户说一句话之后，进入到理解模块，语音识别和语言理解，简单来说就是把人说的话翻译成机器能听懂的话，就把自然语言翻译成一些机器语言，到了对话管理模块，有两个小的模块，一个是对话状态追踪，一个是对话策略优化，主要可以理解为机器人的大脑，当它听到说的话，要决策下一步要做什么事，比如在数据库里查询，还是继续问问题直到收集到有用的信息，然后再去查询等，这个就是对话管理模块，可以理解为bot的大脑引导执行bot去做下一步的操作。产生模块，包括了自然语言生成和语音合成，就是把文本再翻译成语音再传出去，产生模块可以理解成机器人的嘴，当要说话的时候，要把机器的话翻译成人能理解的话，再传出去，完成整个的交互。整个过程概括下来就是机器说一句话，翻译成人能听懂的话，送到机器的大脑，机器的大脑再说一句话，翻译成人能懂的，完成一次交互，就是对话系统的搭建。

- 对话任务测评
不同的bot有不同的测评方式，简单来说，任务型和问答型说得越短，轮次越少越好，而闲聊型则是轮次越多越好，代表越来越智能。

- 平台渠道集成
![integrate](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/integrate.webp)
把bot集成到不同的IM里面，例如微信等。

- 运营反馈
怎样把 chatbot 和微信做一个结合，最后的模块是运营反馈。与产品运营比较相关，对于对话异常的分析，可以举个例子，可以通过判断机器人说“我不知道这个问题”的回答的次数，选择在什么时候调用，大概率是这里面出错了，就需要把对话系统再次优化，就是整个的运营反馈。

### 如何实操搭建一个聊天机器人

首先介绍一下开源项目，wechaty
![wechaty](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/wechaty.webp)
在GitHub上面已经有8k的star，是一个基于微信个人号的WeChat RPA框架，能够帮助你去搭建你的微信机器人，开发者遍布全球，美国欧洲澳洲，
![global](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/global.webp)
最后一个模块，luis搭建实操搭建chatbot
[LUIS](https://www.luis.ai)是微软发布的面向开发者的自然语言语义理解模块开发服务。LUIS的使命是让非NLP专业的开发者能够轻松地创建和维护高质量的自然语言理解模型，并无缝对接到相关的智能应用当中。
LUIS的开发流程更像是一个教学过程：开发者是老师，LUIS App是学生。老师通过不停地告知学生正确的语义解析结果来完成教学。一个好的教学过程是一个“训练+实践”的闭环：标注一定量的起始数据；训练得到语义理解模型；对模型进行必要的测试；发布模型并应用到真实用户场景；甄选应用日志中的语句；继续标注并更新模型。这个过程周而复始，通过不停地迭代开发，不停地改善理解模型，使其越来越接近人类的理解能力。
![luis](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/luis.webp)
大厂开发出来的服务，我们使用的过程更像一个教学的过程，开发者是老师，luis是学生，老师不停告诉学生正确的结果，并不停教他来完成整个训练，老师会教他，什么是实体和意图，然后去模型训练，最后发布，持续的学习，系统会越来越智能，走到正向的反馈循环中去。

## 实操介绍

- 任务1：发布LUIS版本

点击LUIS的Publish获取APPID和KEY
![step1](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/step1.webp)
发布成功后，可以看到绿色的成功提示，点击Refer to the list of endpoints切换到管理页面：
![step2](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/step2.webp)
获取Authoring Key
![step3](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/step3.webp)
点击 Application Information, 获取APP ID
![step4](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/step4.webp)

- 任务2 - 将LUIS RESTFUL API 接入wechaty
安装官方的’luis-sdk’,并将获取的key 和 Application ID 填入：
![step01](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/step01.webp)
根据已有的LUIS 配置写示例代码
![step02](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/step02.webp)

- 任务3：运行代码

输入命令[git clone](https://github.com/lijiarui/chatbot-zero-to-one)
![gitclone](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/gitclone.webp)

- 任务4：运行代码

运行 npm run start
![run](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/run.webp)
用户发送，即可得到测试回复
![sand](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/sand.webp)

### Welcome

Bot Friday Club 报名方法
![welcome](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/welcome.webp)
![photo](/assets/2020/04-how-to-build-a-chatbot-from-zero-to-one-on-wechaty/photo.webp)
