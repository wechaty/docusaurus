---
title: "我在微信机器人方向的探索和看法"
author: nbwsc
categories: article
tags:
  - sdk
---

首先，谢谢[Huan LI](https://github.com/huan)的邀请，让我有机会写这么一篇博文。其实我做跟微信机器人相关的调研也不是很久，而且中间中断了很长时间，最早是在去年 6 月份开始，做了两个月更换了几个版本和不同方式把产品做了出来，之后就是今年 4 月份，又有这方面的需求于是又重新接触了微信机器人。

## 基于网页版微信 http api lib

这种库就很多了，我们的`wechaty`核心也是这种方式，还有其他各种语言的实现:

| Project | Intro | Comments |
| :--- | :--- | :--- |
| [youfou/wxpy](https://github.com/youfou/wxpy) | 优秀的 api 包装和配套插件，微信机器人/优雅的微信个人号 API | [个人评价: 支持 python2/3 api 包装不错 文档写的满分 基于 itchat 开发，也开放了 itchat 的原始数据接口，自由度和封装美化兼顾 ] |
| [liuwons/wxBot](https://github.com/liuwons/wxBot)| 类似的基于 Python 的微信机器人 | [个人评价: 不支持 python3 utf-8 支持不好 ] |
| [sjdy521/Mojo-Weixin](https://github.com/sjdy521/Mojo-Weixin)|使用 Perl 语言编写的微信客户端框架，可通过插件提供基于 HTTP 协议的 api 接口供其他语言调用 |[未使用] |
| [HanSon/vbot](https://github.com/hanson/vbot)|基于 PHP7 的微信个人号机器人，通过实现匿名函数可以方便地实现各种自定义的功能 |[未使用] |
| [littlecodersh/ItChat](https://github.com/littlecodersh/ItChat)|wxpy 就是基于此开发 |
| ... | ... | ... |

最早的需求是群发和自动回复， 我先用`python`实现了一个集中式的机器人(单例，多群管理，需要用户将机器人拉入群，python 异步瓶颈很快出现了，后来改成集中式多例， 用户自己登陆自己管理群，效果也不甚理想)。 然后尝试使用 node 来实现， 用了`wechaty`， 第一眼感觉好酷， 好全， 好牛逼， ts+docker 简直无敌， 但是我在安装的时候觉得体积有点庞大， 而且还绑定了浏览器实例(所以当时好像只能单例机器人)， 感觉有些臃肿当时就没有深入了解。 而且另一个很令人头疼的事情， 就是微信会对 hack 网页版微信的行为作出封号的惩罚， 具体的表现就是一段时间(我遇到的最短几周，最长半年多)限制登录网页版微信， 而且新注册的微信号无法登录网页版微信。 也就是说网页版微信会慢慢被淘汰掉， 显然有这个问题， 基于网页版微信做的机器人都会难以商用。 适逢当时看到谷歌团队新开的 puppeteer 项目， 于是我想会不会用浏览器模拟用户操作， 可以减少被封的概率呢(当时觉得可能所有的库都无法做得和微信的客户端一样， 稍有一个 cookie 什么的没传对就可能导致被封)，于是开始做 puppteer 的机器人。

## 用 puppeteer/phantomjs 操作网页版微信

puppeteer 的出现， 让 phantomjs 的作者直接放弃更新了。 它一出现就意味着浏览器环境将会发生很大的变化， 防爬虫更难做了， 浏览器界面的自动化测试也变得可能， 客户端安全对于开发者来讲更难了。 对于我们要 hack 微信这件事， 它也能发挥一定的价值。
实现起来其实就很简单了， 用 puppeteer 打开网页版微信， 用户正常登陆微信， 你可以注入你的 js 脚本， 也可以模拟任意 element 上的点击， 可以任意调用该生命周期下的方法和变量， 可以模拟用户的键盘输入(带延迟的)，甚至可以模拟上传文件(用此实现发送图片)。 如果你用 headless 方式启动浏览器， 用户甚至毫无感知。
用这种方式实现的机器人， 被封的概率很低(但是也有个别用户反映有， 不知道是不是他们同时在用别的机器人)， 稳定性基本能达到商用的地步。

## 在 windows 下使用 hook 操作微信 pc 端

这种方式我本人没有尝试过， 我的同事用 C#实现了一个版本， pc 版的微信的界面也是 html 渲染的， 所以 windows 无法获得页面里面控件的句柄， 所以需要一些很 hack 的方式去做， 我不太喜欢这种(主要我不太熟 windows)。 这种的好处就是， 就算网页版被封了， pc 版暂时还不受什么影响。

## 在 Android 下使用 hook 操作微信安卓版

今年 4 月份的时候，运营提出需求需要群管理，几百个 100 人的群，需要自动回复，自动踢人(发重复消息的， 发关键字的， 发太长信息的。。。)，管理员踢人，防止该群名，黑名单(加入黑名单在所有群里都一进群就踢)等功能， 一开始我用`wechaty`做了一个版本， 但是第二天就被封号了(运气实在太差了喂)。 然后就想到 android 上面有 xposed 这个东西， 可以作为 android 的 hook 来修改一些 apk 的行为，摘一段官方的介绍:

> Xposed is a framework for modules that can change the behavior of the system and apps without touching any APKs

接下去就是找找现成模块有没有能用的， 如果不够用， 就找找有没有开源， 改改代码。 实在不行也可以自己写， xposed 模块还是挺好写的。对了还有一个叫[VirtualXposed](https://github.com/android-hacker/VirtualXposed)的东西，修改微信 hook 的事情，这个足够了， 不需要 root。
iOS 下也有`Method Swizzling`之类的 hook 方式， 我还没有尝试过， 因为买几台 iPhone 放在办公室当服务器还是觉得有点~~厉害~~贵。

## 总结

微信机器人这个事情， 毕竟是在 hack 大厂的产品， 希望哪天他们能开放出开发者接口， 这样其实安全性也高一点(有了接口大部分人应该不会选择 hack 了)， 对开发者也更友好一点。 肚子里墨水比较少， 开发经验也很有限， 如果各位大佬觉得有什么地方不对， 还请不吝指正!

> Author: [nbwsc](https://github.com/nbwsc)
