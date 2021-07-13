---
title: "Chatbots二重奏：用wechaty-log-monitor插件实现「掉线给码」等DevOps"
author: archy
categories: project
tags:
  - plugin
  - devops
  - featured
image: /assets/2020/wechaty-log-monitor/demo.webp
excerpt: 为了能让（营业中的）小助手可以有更棒的 readily availability，我写了这个wechaty-log-monitor插件来给在production跑的Wechaty做日志相关的devops。
---

> 作者: [Archy Will He 何魏奇](https://github.com/archywillhe/)，functional programmer, interested in computational semantics，目前在全职做[吖奇说(ARCHY.SH)](https://archy.sh)这个项目。Working with GPT-2 (and hopefully with 3 soon!)
>
> Github Repo: [wechaty-log-monitor plugin](https://github.com/archywillhe/wechaty-log-monitor)
>
> [![flair](https://camo.githubusercontent.com/c551a231a6cda28e59291fa091ddcb7b9899f6ec/68747470733a2f2f737461636b65786368616e67652e636f6d2f75736572732f666c6169722f313334303435332e706e67)](https://stackoverflow.com/users/2041954/%E5%90%96%E5%A5%87%E8%AF%B4-%E4%BD%95%E9%AD%8F%E5%A5%87archy-will-he)

最近基于 Wechaty[做的一个学中文小助手 ARCHY 开始营业了](https://mp.weixin.qq.com/s/FcgaOOnZNPUuMSihmMs_lw)🤖🤖🍜 ～

![gif-demo](/assets/2020/wechaty-log-monitor/archy-demo.gif)

为了能让小助手可以有更棒的 readily availability，我写了这个[wechaty-log-monitor 插件](https://github.com/archywillhe/wechaty-log-monitor)来给在 production 跑的 Wechaty 做日志相关的 devops。这是一个建立于两个 chatbots 的二重奏。

目前插件的主要功能是「掉线给码」：一个 Wechaty 掉线了，另一个 Wechaty 会发 QR 码给这个 Wechaty 的微信号来重新登陆。

![qr-rescue](/assets/2020/wechaty-log-monitor/demo2.webp)

这样掉线了就不用`ssh`到 production 服务器，然后`sudo su git`+`pm2 logs --lines 100`来进行扫码重登了。

现在不管在吃饭、野外、还是地铁上，掉线了便可立马扫码重登。

![thumbup](/assets/2020/wechaty-log-monitor/thumbup.webp)

## 一、如何「掉线给码」

```bash
yarn add wechaty-log-monitor@latest
```

只要在`botAlice`里去给`botBob`来`createQRRescueOperation`。

```typescript
import { qrResuce, WechatyLogMonitor } from "wechaty-log-monitor";
const qrResuceForB = qrResuce(
  ({
    logFile: "../botBob.log",
    adminWeixin: "BobWeixin",
  },
  { loginTest: "您好世界" })
);
botAlice.use(
  WechatyLogMonitor({
    enableSelfToBeQrRescued: true,
    logOperations: [qrResuceForB],
  })
);
```

也在`botBob`里给`botAlice`做 vice versa 的事儿:

```typescript
import {qrResuce, WechatyLogMonitor} from "wechaty-log-monitor"
const qrResuceForA = qrResuce(({
  logFile: "../botAlice.log",
  adminWeixin: "AliceWeixin"
},{loginTest:"#ping"))
botBob.use(WechatyLogMonitor({
  enableSelfToBeQrRescued: true,
  logOperations:[qrResuceForA]
}))
```

就几行代码，就能更轻松地进行掉线重登的 developer operation 了。 提高 readily availability：只要两个没有同时掉线，另一个就能迅速得救！

p.s. 掉线后，bot 发一个二维码就不会再发给你了。如果你想要最新的登陆二维码，发「qr」给 bot 就行。

![qr](/assets/2020/wechaty-log-monitor/qr.webp)

## 二、`WechatyLogMonitor`的内部

wechaty-log-monitor 里面所有东西都是函数式的。而且非常松耦合。除了 IO 中难以避免的副作用(side effect)，大致上是完全 pure 的。

`WechatyLogMonitor`这个函数里主要就是定义了`startWatchingLog`和`startReactingToCmds`。

`startWatchingLog`是用来做`fs.watchFile`+`fs.createReadStream`的回调（实现在`watchAndStream`里），而`startReactingToCmds`则是来做 Wechaty 的`message event`的回调。

```typescript
const startWatchingLog = (
  bot: Wechaty,
  logOperations: WechatyLogOperation[]
) => {
  _.each(logOperations, (operation: WechatyLogOperation) => {
    const { onLogFileIsChanged, config } = operation;
    if (typeof onLogFileIsChanged === "undefined") return;
    const { logFile = "" } = config;
    watchAndStream(logFile, (content) => {
      onLogFileIsChanged(bot, content);
    });
  });
};
```

```typescript
export const watchAndStream = (
  file: string,
  callback: (content: string) => void
) => {
  if (!fs.existsSync(file)) {
    console.log(`file-to-watch ${file} not exist`);
    return;
  }
  fs.watchFile(file, { interval: 2000 }, (curr, prev) => {
    const stream = fs.createReadStream(file, {
      start: prev.size,
      end: curr.size,
    });
    stream.on("data", function (data) {
      const chunk = data.toString();
      callback(chunk);
    });
  });
};
```

参数`onLogFileIsChanged`和`config`都来源于 type `WechatyLogOperation`的 object。而之前用到的`qrResuce`其实就是 return 了这个 type 的一个 object。

```typescript
export const qrRescue = (
  config: WechatyLogOperationConfig,parameter:{loginTest:string}
):WechatyLogOperation => { ... }
```

`startReactingToCmds`和 👆 上面的`startWatchingLog`差不多，不言而喻也。

## 三、「掉线给码」的实现

函数`startWatchingLog`里调用到的`onLogFileIsChanged`取决于`WechatyLogOperation`的 object 对它的定义。

```typescript
export type WechatyLogOperation = {
  config: WechatyLogOperationConfig;
  onLogFileIsChanged?: WechatyLogFileLambda;
  onCmdReceived?: WechatyCommandLambda;
};
```

其实`qrResuce`就是运用了一个 global state`isOtherBotAlive:boolean`加一些 regex 来根据写进日志的字符串从而来变动`isOtherBotAlive`这个“开关”，而这个“开关”的变动又会调用到`onOtherBotIsLoggedOut`和`onOtherBotIsLoggedIn`。

```typescript
const onLogFileIsChanged = async (bot: Wechaty, newLogs: string) => {
  const { adminWeixin } = config;
  if (globalState.isDisabled) return;
  if (globalState.isOtherBotAlive) {
    const latestQRCode = qrCodeAwaitingToBeScanned(newLogs);
    if (latestQRCode) onOtherBotIsLoggedOut(bot, adminWeixin, latestQRCode);
  } else {
    const loggedIn = isUserLoggedIn(newLogs);
    if (loggedIn) onOtherBotIsLoggedIn(bot, adminWeixin);
  }
};
```

`qrCodeAwaitingToBeScanned`里的 regex 主要是来查找“INFO StarterBot...”和“INFO StarterBot onScan...”这两个 string。(`WechatyLogMonitor`的参数`enableSelfToBeQrRescued: true`将会让 Wechaty 在登陆和要扫码时给出对应这两个 string 的 log，写入 log file 里。)

```typescript
const qrCodeAwaitingToBeScanned = (
  lastFewLines: string
): string | undefined => {
  const signThatItIsLoggedIn = /INFO StarterBot Contact<(.*)?> login/g;
  const indexOfLastSignOfLoggedIn =
    getLastMatch(signThatItIsLoggedIn, lastFewLines)?.index || -1;

  const pattern = /INFO StarterBot onScan: Waiting\(.*\) - (.*)?\n/g;
  const match = getLastMatch(pattern, lastFewLines);
  if (match)
    return match.index > indexOfLastSignOfLoggedIn ? match[1] : undefined;
  return undefined;
};
```

## 四、定义其他 WechatyLogOperation

总的来说，`WechatyLogMonitor` 把「看 log 回调」和「bot 收到信息回调」这两件事 abstract 走了，所以在你的`WechatyLogOperation`中，只要选择性地定义 `onLogFileIsChanged`, `onCmdReceived`就可以了。

比如要写一个来 restart PM2 的`WechatyLogOperation`函数闭包，几行就行：

```typescript
export const restartPM2 = (
  config: WechatyLogOperationConfig,
  parameter: { pm2Id: number }
): WechatyLogOperation => {
  return {
    config,
    onCmdReceived: async (
      bot: Wechaty,
      cmd: string,
      config: WechatyLogOperationConfig
    ) => {
      const { adminWeixin } = config;
      if (cmd === "restart")
        execAndPipeToBot("pm2 restart " + parameter.pm2Id, bot, adminWeixin);
    },
  };
};
```

![restart](/assets/2020/wechaty-log-monitor/restart.webp)

## 五、待开发的 Auth、GTP3 功能

目前 `WechatyLogOperationConfig` 里有一个 `securityRule`值，默认是`None`.

```typescript
export type WechatyLogOperationConfig = {
  logFile?: string;
  adminWeixin: string;
  securityRule?: WechatyLogOperationSecurityRule;
};
```

```typescript
export enum WechatyLogOperationSecurityRule {
  None = 0,
  SMSVerification, //not implemented
  authy, //not implemented
  googleAuth, //not implemented
}
```

未来如果要发展到把项目整个 production 相关的 DevOps（不单只是 Wechaty 相关的 Operations，如在 production 跑的 MongoDB 相关的 Operations、Restful API 服务器相关的 Operations 等）都运用 Wechaty 来给团队塑造一个简单、容易上手的流程，也就是把 chatbot 变成了一个简易的 terminal，那时候我们可以设定让更危险的 Operations 变得需要短信验证码、authy 等方式去做 Authentication。

我相信 Auth 功能对于 wechaty-log-monitor 插件来说将会是一个有意思的发展方向之一。

若 pragmatically，『chatbot 变成一个更简易的 terminal』这件事真的行得通，那另一个非常有意思的发展方向就是结合[OpenAI 最近提及到 GPT3 的一个很有意思的应用：Natural Language Shell](https://beta.openai.com/?app=productivity&example=4_2_0) - 运用自然语言去做执行 unix 等命令。

![gtp3](/assets/2020/wechaty-log-monitor/gtp3.webp)
