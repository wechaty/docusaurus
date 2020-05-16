---

title: "(中野)注册机器人"

author: GreyPlane

date: '2020-04-15 09:30:00 +0800'

categories: project

tags: - wechaty
      - selenium

---


> 作者： [GreyPlane](https://github.com/greyplane) 前端开发
> Code: [Github](https://github.com/GreyPlane/nakano-bot)
> <del>bot名字取自朋友id</del>

[![bot结构](/assets/2020/nakano-bot/fubuki.png)](https://github.com/GreyPlane/nakano-bot)
<!-- more -->

## 1.动机和需求

自动或半自动（人工完成人机识别）进行账号注册是相当普遍的需求，所以之前就有考虑过有没有比较简单、低成本的实现方案。正好最近有朋友找我问可不可以帮忙注册一些帐号（因为VPN和其他一些注册过程比较繁琐），所以产生了做这样一个通过微信接收注册信息，然后调用Selenium自动完成一些操作步骤，然后再通知自己或者别人来进行人机验证和最终核对等一些无法自动完成的步骤。

为了达到这个目的，这个简单的机器人应该接受一些模板信息，然后处理成用于填表单的数据格式（因为这个bot设计的目的之一就是为了避免部署到服务器，可以直接本地使用，所以未来得及处理完的数据就简单的用JSON储存在根目录下），再通过Selenium打开浏览器进行操作并监听一些过程中的事件（例如需要人工操作）再通过微信通知操作员等等。

## 2.技术栈

- [`TypeScript`](https://www.typescriptlang.org/)
- [`Wechaty`](https://github.com/wechaty/wechaty)
- [`Selenium-webdriver`](https://www.selenium.dev/selenium/docs/api/javascript/)

## 3.详情

因为项目本身比较简单，代码量也小，就主要介绍一下在使用[Wechaty Starter模板](https://github.com/wechaty/wechaty-getting-started)时搭建环境时的一些折腾经验吧。

- 平台: `Windows 10`
- JS Runtime: `Nodejs 12.x`

首先因为`puppet-padplus`的构建需求，需要安装`windows-build-tools`但是这里有一个小坑点，至少在和另一位朋友的安装过程中，装完之后需要手动将`Visual Studio Build Tools`的Bin目录添加到PATH中。

再者这个模板的eslint config包postinstall运行的是一个bash脚本，在我的平台上即便是在有WSL和Git Bash的情况下，`npm install`依然会直接报错，所以建议在Windows下使用这个模板时可以直接去掉这几个依赖。

## 4.Furthermore

这个项目因为需求比较特定，所以很难直接应用到其他人的使用场景中，所以在这里写一些杂项，权当为大家日后开发提供一些思路。

- Selenium-webdriver（非Grid）只能“单例”地稳定运行，但Wechaty的OnMessage对回调函数的调用是不阻塞的也不是链式的，所以个人觉得显式的加锁，然后在事件循环里轮询调用浏览器操作是比较合理的方式。
- 如果要做进一步的开发，将接受信息、处理和缓存信息、分发信息等放在服务器端，客户端则响应信息并完成注册同时反馈一些事件供服务器做进一步处理的话，通过WebSocket进行双端通信然后用现有的程序架构也是很容易实现的。

最后非常感谢开源项目Wechaty以及JuziBot公司为社区提供这样一个免费使用的机会，这对于我这样的个人开发者来说尤为重要，非常感谢！
