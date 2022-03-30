---
title: "Wechaty 社区开源协作最佳实践指南"
author: lijiarui
categories:
  - announcement
tags:
  - wechaty-way
  - guide
  - ospp
  - ospp-admin
  - news
image: /assets/2021/06-the-wechaty-way/teaser.webp
---

Wechaty (Conversational RPA SDK) 2016 年发布于 GitHub，是一个基于 Apache-2.0 许可证的开源项目。经过5年多的发展，现在 Wechaty 开源社区已经拥有数十位 Committers，百余位 Contributors ，并被超过一万名 GitHub 开发者 Star。目前，使用 Wechaty 的开发者已覆盖数万人，并拥有基于微信群的数千人活跃开发者群。

Wechaty 社区的 Contributors 遍布全球多个国家地区，和各大互联网公司，职业背景从程序员到设计师，从大学教授到创业者，非常多样化。GitHub 上有千余个开源项目基于 Wechaty 构建了聊天机器人，这些开发者用户也极大地促进了社区的活跃和发展。

Wechaty自身对代码质量的管理，使用了 GitHub Actions 的 DevOps 工具完成了 CI/CD 工作流，从自动化单元测试到自动打包集成测试，从自动发布 NPM 包到自动构建和发布对应版本的 Docker Image ，实现了全自动的社区代码发布，极大的提高了社区的协同效率。

在开源社区管理上，Wechaty 遵循 The Apache Way ，拥有 PMC / Committer 管理制度，和完善的 Issue / PR / Release 等管理制度。截止2021年，Wechaty 已经有近百万次 NPM 安装下载，并由社区自发推动了 Python, Go, Java, Scala, .NET, PHP, Rust 等语言的适配和发布，是国内最活跃的 Conversational AI Chatbot 开发者社区。

## Wechaty 介绍 PPT：

通过阅读下面3个PPT，你可以对Wechaty及其发展历程有一个基础的了解。

- 2016: [Wechaty 101: from v0.0 to v0.7](https://docs.google.com/presentation/d/13oUOIEnzdLWO6KZWztD_pMuu22AQ3SIMjk2wp8f-f18/edit#slide=id.g194ee6e600_0_51)
- 2016-2020: [Open-source Wechaty: 2016 to 2020](https://docs.google.com/presentation/d/1eRNrKnCpdnsmplTwtZzmtGZgrPoNCmOnitmHKVc6iVU/edit#slide=id.g8568e8a985_3_8)
- 2021: [Wechaty 2021](https://docs.google.com/presentation/d/1aJ9j0VoRk0Dkyyajy3Z-zEI0QcpmpTjcCcabEXxo4JM/edit#slide=id.p)

## 社区沟通

Wechaty 社区持续秉承信息开放透明：

- 首选沟通渠道是 [Gitter](https://gitter.im/wechaty/wechaty), 因为 Gitter 保存了所有的历史沟通记录，即使你是刚刚加入社区的开发者，你也能追溯到第一天社区成员都讨论过哪些内容。
- 次优选的沟通渠道是加入我们的 Mailing List (发送邮件给 wechaty@googlegroups.com 即可加入)，我在 2019 年和 Apache 基金会主席 Craig 聊过： **If it didn't happen on list, it didn't happen.** 保证社区内容开放透明并以邮件存档是一件非常重要的事情，所以我们也非常推荐大家通过 Wechaty 的 Mailing List 来沟通。

以下是 Wechaty 的所有沟通渠道：

- [Gitter](https://gitter.im/wechaty/wechaty)
- Mailing List：发送邮件给 wechaty@googlegroups.com 即可加入
- [WeChat Room: Wechaty Developers' Home](https://github.com/wechaty/wechaty#raising_hand-join-us)  
- [Discussion](https://github.com/wechaty/wechaty/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/wechaty)
- [Telegram](https://t.me/wechaty)
- [Twitter](https://twitter.com/chatieio)

## Wechaty 更多链接

除了社区沟通的渠道，你也可以在这里了解更多 Wechaty 相关内容。

- [Blog](https://wechaty.js.org/blog/)： 这里是可以看到 Wechaty 的所有博客
- [Wechaty Contributors](https://wechaty.js.org/contributors/)： 来这里可以看到所有 Wechaty Contributor 的介绍
- [Meeting Notes](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.64c95c3y2l4v)：Wechaty 的每次会议记录的内容。
- [Branding Guides](https://wechaty.js.org/docs/marketing/branding/)：使用 Wechaty 的 logo 等素材内容
- [YouTube](https://www.youtube.com/playlist?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh)： Wechaty 所有的视频清单
- [Open Collective](https://opencollective.com/wechaty)：为 Wechaty 捐赠的唯一通道
- [Google Drive](https://drive.google.com/drive/folders/1KTnB3EOZo3nFRFSWoFc2-7LM7MgKQLzM)： Wechaty 所有的文件存档
- [Photo Album](https://photos.google.com/share/AF1QipOWKUfUkjw-VzE0skrjmCwbwIWwuBiI7Li4UCbdXH62n8iH2ITnvDbPTsx4eBl8dw?key=cy1NdWFoUGpXanVmczVHSm84TVg1LXJWeW5HTDhR)：Wechaty 活动的精选照片
- [Hall of Fame](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.64c95c3y2l4v)：了解 Wechaty 名人堂

## Wechaty 会议流程最佳实践指南

Wechaty 社区希望每一次会议尽可能让所有参与者都能专注参与，并且获得正向产出，保证会议简洁高效和社区透明，Wechaty 的会议有以下三个重要工具及使用指南。

### 1. Wechaty Meeting Notes

Meeting Notes 有以下几个价值：

- **透明**：社区开的每一个会都会记录在 [Meeting Notes](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.64c95c3y2l4v) 中，即使你刚刚加入社区，你也可以在 Meeting Notes 里面看到过去的会议内容。
- **高效**：俗话说，“不打无准备之仗”，同样的道理，“不开无准备之会”，做好开会前的准备工作，对开好一个会起到至关重要的作用， 每次开会之前，参会者都要提前在 Meeting Notes 里面写好会议议题，保证参会的人在参会之前明确知道讨论内容，提高开会效率。

这是 Meeting Notes 的模板内容(可以在 Meeting Notes 最底部拿到文字版，我这里放了图片方便看格式)：

![meeting-notes](/assets/2021/06-the-wechaty-way/meeting-notes.webp)

具体使用流程指南：

1. 组织者在开会之前来 [Meeting Notes](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.64c95c3y2l4v) 写好会议地点和时间，通常情况下，会议都是公开的，任何人都可以通过 Meeting Notes 中的 Zoom 链接视频参会。
1. 参会者要在 **Attendees** 中注册自己的信息，包括：
    1. 姓名
    1. 一句话介绍
    1. 邮箱（非常重要，因为主持人后续可能会发送邮件到这个邮箱）
    1. 时区（Wechaty 作为一个国际型社区，经常会有海外的参会者）
1. 开会之前，参会者要在 Agenda 中写下你的议题，以 **[姓名] 内容** 的方式写进去，这样可以让参会者知道哪些人有哪些不同的议题
1. 除了会议议题外，你也可以在 Question 的版块写下你的问题，问题同样也可以被其他人评论，填写格式依然是 **[姓名] 内容**
1. 任何人在都可以任何时候都可以评论其他人的议题，评论方式是在内容下一行，缩进斜体的方式以 **[姓名] 内容** 的方式填写进去。
1. 我们非常鼓励在开会其他人发表意见的时候，你同步在 Meeting Notes 在议题下发表评论，因为你写的内容大家都会看到，越多的讨论就会有越多的产出。
1. 需要注意的是，Agenda 和 Question 是一定要在会议开始前写进去的，这样保证参会者能提前了解内容； 但是评论是可以在任何时候（会议前&会议中）写进去的，这样保证会议的内容都可被存档。

### Zoom 会议

社区在条件允许的情况下，尽可能保证每一次会议都可以线上参与，参与的方式是使用 Zoom 会议，每次zoom会议都会进行视频录制，这样没有参会的人也可以看会议的视频回放。

- Zoom 下载地址：[Download](https://zoom.us/download#client_4meeting)
- 参会链接：<https://zoom.us/j/6505033788>  
- 参会密码：huan

### 会议视频

为了保证会议的沉淀，重大线上会议会要求的主持者在会议结束后将会议视频上传到 [Youtube](https://www.youtube.com/playlist?list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh) 同时完成以下内容：

- 在**公开范围**里设置成 `公开`
- 添加到 wechaty 的 playlist 中（主持人若没有添加权限，可以找 [Huan](https://wechaty.js.org/contributors/huan/) 申请）
- 撰写视频说明
- 在视频说明中，通过添加 `00:00` 等时间的方式，在视频进度条上添加视频章节，具体可以参考：[Youtube 如何在进度条上添加章节](https://support.google.com/youtube/answer/9884579?hl=zh-Hans) 章节会将视频拆分为多个部分，方便观看者快速跳转到视频的不同部分。

[Wechaty ❤️ Google Season of Docs: Kick-off meeting with 20 Technical Writers!](https://www.youtube.com/watch?v=hTkM_XPpFfU&list=PL8hd9KDTdarDXf_Rxtr8meKhxtgcXMInh&index=43) 就是一个很好的示例。因为一次会议的时间很长，其他人看视频的时候就可以很容易根据下图介绍知道 **视频中 0:01:41 的时候讲的内容是 Introducing the Meeting Agenda**， 同时点击 **0:01:41** 可以快速跳转到视频播放的地方。

![youtube-example](/assets/2021/06-the-wechaty-way/youtube-example.webp)

上传视频以后，主持人要去社区发布一个会议的博客，并嵌入视频内容，这样就能保证这次会议进行了存档并可以共享个社区的任何开发者。

### 会议博客

为了保证社区的每一次会议都能够有内容沉淀，重大会议后需要些会议博客，[博客撰写](#Wechaty 博客发布规范)会在下一个小节介绍。 一次会议博客至少要包括下面的内容：

- 会议背景介绍
- 会议合影
- 参会人
- Zoom 会议视频
- 会议议程（不要把Meeting Notes 的会议议程粘进去，而是用 Youtube 中做好的视频切割链接，这样方便读者可以快速的看自己关注的会议内容）

#### 会议博客例子

Wechaty 社区组织 Google Season Of Docs 的 Tech Writer 的会议博客 [Hello Wechaty GSoD’21 Technical Writers](https://wechaty.js.org/2021/05/08/gsod-2021-selected-technical-writers/) 是一个很好的会议博客案例，完整的包含了上面的要求，建议第一次写会议博客的人先来看下这个案例。

## Wechaty 博客发布流程指南

任何人都可以通过在 [wechaty.js.org](https://github.com/wechaty/wechaty.js.org) Repo 下面通过发布 PR 的方式发布博客。

- [如何发布一篇 Wechaty 博客](https://github.com/wechaty/wechaty.js.org#how-to-post-a-blog)
- [Wechaty 博客的撰写指南](https://github.com/wechaty/wechaty.js.org#guidelines-for-writing-a-blog-post)
- [本地测试保证博客内容没有问题](https://github.com/wechaty/wechaty.js.org#how-to-run-tests)
- [本地预览](https://github.com/wechaty/wechaty.js.org#how-to-preview-your-changes)

### 在博客中插入视频

下面是在会议博客中嵌入视频的代码的简单案例，作为`include`标签的src参数传入视频链接即可。

{% raw %}

```liquid
{% include iframe.html src="https://www.youtube.com/watch?v=hTkM_XPpFfU" %}
```

{% endraw %}

[univerone](https://wechaty.js.org/contributors/univerone/) 写了一篇非常详细的博客[使用jekyll include在wechaty博客中快速插入视频](https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/)，介绍了如何优雅的在博客中插入视频，有兴趣的同学也可以深入博客研究。

### 小白入门发布博客

如果你是完全小白，可以参考 [atorber](https://wechaty.js.org/contributors/atorber/) 的这篇博客: [入门：小白如何在wechaty社区发布自己的第一篇博客（一）](https://wechaty.js.org/2021/04/22/how-to-publish-blog-on-wechaty/) 通过大量的截图一步一步告诉你如何发布Wechaty博客。

## Wechaty Issue 发布流程指南

社区希望遇到任何代码问题，都通过 issue 进行交流。

强烈反对把代码截图或者日志截图直接发到微信群里，问大家为什么运行不了，或者直接问这事什么错误。一个截图是无法给出全面信息的，而且非常不利于归档传播给更多的开发者。当你提出一个有价值的 issue 的时候，实际上可以极大的避免其他开发者踩坑。

当然，在发布 issue 之前，也强烈建议你在 issue 列表中进行搜索，看这个 issue 是不是别人已经提过了，甚至已经有人给出了很好的解决办法。

发布 issue 的时候，建议按照 issue 模板发布 issue， 这样方便社区里的人更好的为你提供帮助。issue 分为3个类别：

### 1. 报 Bug

模板内容见：[Bug Report](https://github.com/wechaty/wechaty/blob/main/.github/ISSUE_TEMPLATE/wechaty-bug-report.md)

报 Bug 最重要的事情是**复现**，只有可复现的bug，才可被解决。具体来讲，至少需要你给出以下的信息：

- Wechaty 版本号、使用了哪一个 wechaty puppet、node 的版本和操作系统
- 详细的描述这个bug
- 明确的复现步骤
- 按照你的步骤操作后，期待出现的现象
- 按照你的步骤操作后，实际出现的现象
- 相关的完整日志

### 2. 提新需求

模板内容见：[Feature Request](https://github.com/wechaty/wechaty/blob/main/.github/ISSUE_TEMPLATE/wechaty-feature-request.md)

当你提出希望社区增加一个新的功能的时候，你需要详细的描述出为什么需要，以及你期待的这个需求具体的样子。你描述的越详细，越容易得到其他开发者的支持。被其他开发者支持的多的需求，越容易被提到更高的优先级上。

### 3. 问问题

模板内容见：[Question](https://github.com/wechaty/wechaty/blob/main/.github/ISSUE_TEMPLATE/wechaty-question.md)

社区不希望你在 issue 中提问，最好的方式是去 [StackOverflow](https://stackoverflow.com/questions/tagged/wechaty) 上提问。

Wechaty 的 Contributor [xpt](https://stackoverflow.com/users/2125837/xpt) 在 StackOverflow 有超过 10K 的 reputation, 他专门为 wechaty 创建了 tag，所以你在 StackOverflow 上通过搜索 wechaty 是能看到所有关于wechaty的问题的。同时，也建议开发者去  [StackOverflow](https://stackoverflow.com/questions/tagged/wechaty) 提问并打上 wechaty 的标签，方便其他开发者搜索相关问题。

## Wechaty PR 发布流程指南

如果你不是 PR 一个博客，在 wechaty PR 之前一定要新建一个 issue，说清楚你要解决的问题，然后再发一个 PR， 并在这个 PR 中关联对应的 issue 链接，这样做的目的是明确告诉大家你提这个 PR 在解决什么问题，而不是只是提交一堆代码。

此外，开发者在提交 PR 之前一定要按照 PR 模板的要求：

- 明确这是一个新功能开发还是一个bug修复
- 为这次提交的内容增加了测试用例
- 通过 CI 测试，展示形式是 Github Action 变绿了
- 完成 CLA 的签署
- 关联相关的 Issue 链接

![pr](/assets/2021/06-the-wechaty-way/pr.webp)

## Wechaty RFC

如果是一个比较大的提案，建议先提一个 proposal，描述一下你要干什么、为什么要干这个事情、它能带来什么收益、方案是什么以及分析备选方案的优缺点等，我们会让你提个 Issue 进行讨论，最后以讨论后的 proposal 为基础，开始后面的开发。

如这是 Wechaty Commiter [高原](https://wechaty.js.org/contributors/windmemory/) 发布的[提案](https://github.com/wechaty/wechaty/issues/1776)：

![rfc](/assets/2021/06-the-wechaty-way/rfc.webp)

## 进阶，了解 Apache Way，知道如何更好的参与开源项目

最后，在这里为大家推荐一系列 Apache Way 的资料，让你更好的理解开源项目的运作，也欢迎你以 Apache Way 的方式参与到社区的建设中。

### 官方内容

- [孵化场的地址](http://incubator.apache.org/)
- [生命周期](http://incubator.apache.org/cookbook/)

### 佳芮推荐：

- [Apache 介绍](http://www.apache.org/foundation/)
- [什么是 Apache Way，Apache Way 是指 Apache 管理和运营项目的方法](http://apache.org/theapacheway/)
- [什么是 Incubator PMC](http://incubator.apache.org/whoweare.html#the_incubator_project_management_commitee_pmc)
- [什么是 Infrastructure Team](https://selfserve.apache.org/)
- [视频-ASF是如何运营的以及他的价值](https://www.youtube.com/watch?v=TQwrH0PlpZg)
- [视频-如何高效管理开源项目](https://www.youtube.com/watch?v=hpAv54KIgK8)
