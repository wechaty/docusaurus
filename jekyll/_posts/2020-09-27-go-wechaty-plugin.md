---
title: "暑期2020 [为 go-wechaty 设计实现插件体系] 结项报告"
author: finctive
categories: project
tags:
  - plugins
  - summer-of-wechaty
  - summer-2020
  - go
  - ecosystem
image: /assets/2020/09-soc-go-plugin/2020-09-27-go-wechaty-plugin.png
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)
本项目 [为 go-wechaty 设计实现插件体系] 系 暑期2020 支持的开源项目。

## [为 go-wechaty 设计实现插件体系]信息

- 导师：丁小雨、丁超飞、李博杰
- 学生：林昊翰
- 项目名称：为 go-wechaty 设计实现插件体系

### 方案描述

wechaty 是一款支持多协议的微信接入方案，随着社区多语言生态的建立，吸引了更多的开发者和爱好者的加入；同时需求的推动和技术的发展，插件系统逐渐完善，但是在多语言系统中 Plugin 体系尚未完成，我们希望通过这个任务，能够让更多的人加入 go-wechaty 的建设。

目前 go-wechaty examples/ding-dong-bot.go 有一个 ding-dong bot, 但是我们希望这个 ding-dong 是通用的，如果我们的 Plugin 体系能编写出来，也许实现 ding-dong 就只需要一行代码。
例如：

```go
bot.Use(DingDong{})
```

go-wechaty 是 Go 语言实现 wechaty 的项目，同样支持多协议接入；同时借助 gorountine 和 channel 的语言特性，实现了更加合理的封装和设计。

### 时间规划

第一阶段(7月1日至8月15日)

编写插件机制设计文档，与导师交流沟通。其中，文档包含设计思路，实现逻辑，以及涉及到项目代码变更等。根据 Go 语言特性，对插件机制的设计进行改进，并且尝试思考更多可能的方案。如果有需要，还应该编写相应的试验代码。

第二阶段(8月16日至9月30日)

根据第一阶段的设计文档编写代码，实现 go-wechaty 的插件机制；使用 go-wechaty 插件机制编写一个插件 Demo，并解决插件机制使用过程中遇上的问题，回过头修改插件机制的设计和实现。

## 项目总结

### 视频

结项报告

{% include iframe.html src="https://www.youtube.com/watch?v=Gku0nM0JOnE" %}

Live Coding

{% include iframe.html src="https://www.youtube.com/watch?v=I_3s2BrbnV0" %}

### 项目成果

截止至项目结束，取得了以下成果：

- 设计并实现了 go-wechaty 的插件机制，该插件系统具有基本的管理功能，并且参考了 Go 语言的设计特性。

- 根据 go-wechaty 插件机制实现了一个插件 Demo,验证了插件机制的可行性、易用性。

项目原计划的核心目标已经全部完成。

#### go-wechaty 插件机制设计文档

每周进度汇报与讨论Issue：[为 go-wechaty 设计实现 插件体系](https://github.com/wechaty/summer-of-code/issues/9#)

相关代码仓库：[go-wechaty Plugin 分支 PR](https://github.com/wechaty/go-wechaty/pull/67)

新增加 `wechaty.Plugin` 结构类型存储插件相应的回调函数，它支持 Wechaty 中的所有事件注册函数(比如 `OnMessage()`)，使用方式与 Wechaty 实例一致，便于把 Bot 代码封装成为插件。

新增加 `wechaty.Context` 结构类型用于一轮消息事件的控制、传递。在每一次接收到新的消息事件时传入一个新的变量。同时，该结构实现了 `context.Context` 接口。

以下是 go-wechaty 插件机制的功能说明：

- 调用顺序（优先级）

按照注册顺序依次调用。其中，Bot 逻辑代码与插件逻辑代码可以存在交错执行顺序。即：

```go
var bot = wechaty.NewWechaty()
bot.OnMessage(func(context *wechaty.Context, message *user.Message) {
    // Part A
})
bot.Use(pluginB).Use(pluginC)
bot.OnMessage(func(context *wechaty.Context, message *user.Message) {
    // Part D
}
```

执行顺序：Part A → pluginB → pluginC → Part D

- 开关

  - 禁用、启用插件。

    对应方法：`Plugin.SetEnable`

    通过加锁的方式修改插件属性变量。这个方法是并发安全的。

  - 在本轮消息事件中，暂时禁用某一个插件。

    对应方法：`Context.DisableOnce`

  - 消息拦截，跳过后续插件对该本轮消息事件的处理。同时终止所有仍在进行的插件代码操作，即先前插件产生的 Goroutine。

    对应方法：`Context.Abort` 以及 `Context.Done`

  - 在并发程序中，控制插件内部 goroutine 的结束。用法与 Go 语言中的 context.Context ([WithCancel  ()](https://golang.org/pkg/context/#WithCancel))相同。

    对应方法：`Context.Abort` 以及 `Context.Done`

    示例：

    ```go
    plugin := NewPlugin()
    plugin.OnMessage(func(context *wechaty.Context, message *user.Message) {
        go func(ctx context.Context) {
            // other code ...
            select {
            case <-ctx.Done():
                // terminated by wechaty.Context.Abort()

           // other code ...

           }
        }(context)
    })

    // other code ...

    // context.Abort() will terminate the goroutine
    ```

- 数据传递

通过 Context 传递数据，数据只在本轮消息事件有效。

不支持并发读写。

对应方法：`Context.SetData`, `Context.GetData`

#### 示例插件 wordcounter 说明

相关代码仓库：[示例插件 wordcounter](https://github.com/FINCTIVE/wordcounter)

该插件运行于以上设计的 go-wechaty 插件机制，本插件开发的主要目的是验证插件机制的可用性以及易用性。

插件的功能为统计限定小时内群成员发言词数（仅统计文字类消息）。

插件的使用方式如下，调用方只需要传入相应的配置信息即可。

```go
import "github.com/FINCTIVE/wordcounter"

func main() {
    var bot = wechaty.NewWechaty()
    bot.Use(wordcounter.New(wordcounter.Config{
            SearchKeyword:  "#排名",
            MaxResultCount: 10,
            Hours:          6,
        }))
    }
    // starting bot ...
}
```

### 遇到的问题及解决方案

- 如何参与开源社区、为开源社区做贡献？

我在大学的前两年时间里并没有参与过大项目的开发，更别提要求较高的开源项目。开源项目的远程协作开发对我来说有极大吸引力，但我一直没有一个合适的机会参与其中（水平不足、不知道如何参与等情况让我屡次放弃跨出第一步）。本届开源软件供应链点亮计划正好提供了这次机会，让我参与到 Wechaty 社区中进行项目开发。Wechaty 社区是一个包容度很高的社区，社区内的导师们会对学生提出的问题耐心解答。这次活动的经历增加了我参与开源软件开发的经验，同时争强了我的沟通交流能力。在以后的开发历程中，我会为继续为开源社区贡献代码。

- 在开发过程中，常常遇到陌生的技术问题，需要学习新知识。

在本项目的开发过程中，我遇到的主要问题来自对 Go 程序开发的不熟悉，在许多细节上会产生疑惑。实际测试程序时，也有一些小问题需要解决，比如 Docker 的使用、排错。我的解决方案主要是自己学习、查阅资料。这次项目开发的经历大大提升了我的编程能力。

对于部分无法自己解决的问题，社区里的导师们给了我很大帮助，导师们在阅读我的代码后给出了许多具有针对性的建议，这对我完成项目开发是十分必要的，感谢导师们的付出。

- 项目开发时间较长，常常有想要拖延的念头，动力不足。

得益于 Wechaty 社区优秀的管理方式，参与项目开发的学生需要在相应的Issue上填写每周开发报告，报告中需要汇总每周工作成果，制定下周开发计划。由于有每周汇报的压力，我的拖延现象降低了许多。这次项目开发经验也让我学习到了制定计划的重要性。

## 导师评审结果

- 项目完成度：*按照原计划方案，完成原计划的功能开发*

- 学生参与度：*项目参加活动的部分，全部由学生完成*

- 代码贡献量：*Plugin 100% 由学生完成，包涵一个示例 Plugin，占到整个开源项目的10%-20%。*

- 综合评价及建议：

  - 昊翰同学的学习能力，和能动性特别强，能够很快的上手新的知识和方法；从最初的对开源项目的无从下手，到熟悉常规的共享代码的方式，以及对 Go 的掌握，都能感受到进步和收获；相信这么一次短暂的活动经历，能在你今后的工作和生活中成为谈资。

  - 相信大部分从学校过渡到工作中，都会对长周期的项目产生动摇，其实你只需要按照原计划去完成既定工作就好，大项目拆解成小项目是计划和执行中很重要的部分；报告中提到了周计划，很欣慰你看到了这点带给你的价值，它使你没有偏离原有计划的方向，也希望你今后的工作中能从此有所收获。

- 最终评审结果：*通过*

## 联系我们

- 项目链接：[wechaty/go-wechaty](https://github.com/wechaty/go-wechaty)
- 联系方式：finctive@foxmail.com
