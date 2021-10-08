---
title: "有道智云翻译插件"
author: chs97
categories: npm
tags:
  - plugins
  - featured
image: /assets/2020/youdao-plugin/head.webp
---

[![badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![badge](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 有道智云翻译插件

以 `wechaty` 插件的形式集成有道智云翻译的能力，让更多的开发者可以很便捷的对机器人添加具备翻译的功能。有道智云是有道官方的云平台，提供翻译的能力。[相关 API 文档](https://ai.youdao.com/DOCSIRMA/html/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91/API%E6%96%87%E6%A1%A3/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1-API%E6%96%87%E6%A1%A3.html)

## 功能

提供翻译能力，通过微信发送待翻译文本，例如 `hello` 给机器人，机器人回复翻译的结果和发音音频。
**发音音频需要应用绑定 语音合成服务**
由于不支持 `Voice` 的消息类型，所以只能以 `UrlLink` 的形式回复发音音频。
![效果图](/assets/2020/youdao-plugin/1.webp)

## 具体实现

插件能力为 `Wechaty` 本身就提供的能力，主要用 `got` 对有道智云的翻译 API 进行调用。

## 单元测试

主要使用 `wechaty-puppet-mock` 进行单元测试，好处就是不需要频繁的登录扫码等动作，可以直接 `mock` 一些机器人的行为还有用户行为。
这里介绍一下如何使用单元测试对机器人进行测试，笔者用的是 `jest` 测试框架。
这里跳过 `jest` 的配置说明。[官方文档](https://jestjs.io/)
在写测试用例的过程中，觉得还是 `jest` 使用起来比较顺手一些，建议可以跳出官方的 `example` 使用 `jest` 体验一番。

### 测试准备

`wechaty` 的行为都通过 `puppet` 进行代理，这里需要准备几个对象 `mocker` `puppet` `wechaty`

```typescript
async function wechatyFixtures() {
  const mocker = new Mocker()
  const puppet = new PuppetMock({ mocker })
  const wechaty = new Wechaty({ puppet })
  await wechaty.start()
  const [user, contact] = mocker.createContacts(2)
  await mocker.login(user)
  return {
    wechaty,
    user,
    contact,
    mocker,
  }
}
```

`mocker.login(user)` 让 `wechaty` 以 `user` 的身份进行登录，当其他用户向 `user` 发送消息时， `wechaty` 所监听的事件 `message` 就会触发。

### 测试用例

以 `test case: wechaty 回复翻译结果` 为例：

```typescript
const { contact, user, wechaty } = await wechatyFixtures()
const CONFIG = {
  appId,
  privateKey,
} as YouDaoTranslatorPluginOption
wechaty.use(wechatyYouDaoPlugin(CONFIG))
// 插件收到消息回复翻译结果
contact.on('message', (message) => {
  const res = message.text()!
  expect(res).toBe('你好')
  done()
})
// contact 向 wechaty 发送消息
contact.say('Hello').to(user)
```

本插件的行为比较简单，所以对单元测试用例的编写也比较容易，可以参考[issues#37](https://github.com/wechaty/wechaty-puppet-mock/issues/37)

## 结语

`wechaty-puppet-mock` 目前的 API 并没有与 `wechaty` 完全一致，例如没办法发送除了 `Text` 以外的消息类型，如 `UrlLink` 等。
关于这个问题提了一个 [Issue](https://github.com/wechaty/wechaty-puppet-mock/issues/40) 大家可以一起讨论。
感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token

> 作者: [Chs97](https://github.com/chs97/)
> Code: [Github](https://github.com/chs97/wechaty-plugin-youdao)
