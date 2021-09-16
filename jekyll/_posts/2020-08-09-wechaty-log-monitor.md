---
title: "Chatbots二重奏：用wechaty-log-monitor插件实现「掉线给码」等DevOps"
author: archy
categories: project
tags:
  - plugin
  - devops
  - featured
image: /assets/2020/wechaty-log-monitor/demo.jpeg
excerpt: 为了能让（营业中的）小助手可以有更棒的 readily availability，我写了这个wechaty-log-monitor插件来给在production跑的Wechaty做日志相关的devops。
---

最近基于Wechaty[做的一个学中文小助手ARCHY开始营业了](https://mp.weixin.qq.com/s/FcgaOOnZNPUuMSihmMs_lw)🤖🤖🍜～

![gif-demo](/assets/2020/wechaty-log-monitor/archy-demo.gif)

为了能让小助手可以有更棒的 readily availability，我写了这个[wechaty-log-monitor插件](https://github.com/archywillhe/wechaty-log-monitor)来给在production跑的Wechaty做日志相关的devops。这是一个建立于两个chatbots的二重奏。

目前插件的主要功能是「掉线给码」：一个Wechaty掉线了，另一个Wechaty会发QR码给这个Wechaty的微信号来重新登陆。

![qr-rescue](/assets/2020/wechaty-log-monitor/demo2.jpeg)

这样掉线了就不用`ssh`到production服务器，然后`sudo su git`+`pm2 logs --lines 100`来进行扫码重登了。

现在不管在吃饭、野外、还是地铁上，掉线了便可立马扫码重登。

![thumbup](/assets/2020/wechaty-log-monitor/thumbup.jpeg)

## 一、如何「掉线给码」

```bash
yarn add wechaty-log-monitor@latest
```

只要在`botAlice`里去给`botBob`来`createQRRescueOperation`。

```typescript
import {qrResuce, WechatyLogMonitor} from "wechaty-log-monitor"
const qrResuceForB = qrResuce(({
  logFile: "../botBob.log",
  adminWeixin: "BobWeixin"
},{loginTest:"您好世界"}))
botAlice.use(WechatyLogMonitor({
   enableSelfToBeQrRescued: true,
   logOperations:[qrResuceForB]
}))
```

也在`botBob`里给`botAlice`做vice versa的事儿:

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

就几行代码，就能更轻松地进行掉线重登的developer operation了。 提高readily availability：只要两个没有同时掉线，另一个就能迅速得救！

p.s. 掉线后，bot发一个二维码就不会再发给你了。如果你想要最新的登陆二维码，发「qr」给bot就行。

![qr](/assets/2020/wechaty-log-monitor/qr.jpeg)

## 二、`WechatyLogMonitor`的内部

wechaty-log-monitor里面所有东西都是函数式的。而且非常松耦合。除了IO中难以避免的副作用(side effect)，大致上是完全pure的。

`WechatyLogMonitor`这个函数里主要就是定义了`startWatchingLog`和`startReactingToCmds`。

`startWatchingLog`是用来做`fs.watchFile`+`fs.createReadStream`的回调（实现在`watchAndStream`里），而`startReactingToCmds`则是来做Wechaty的`message event`的回调。

```typescript
const startWatchingLog = (bot:Wechaty,logOperations:WechatyLogOperation[])=>{
   _.each(logOperations,(operation:WechatyLogOperation)=>{
     const {onLogFileIsChanged, config} = operation
     if(typeof onLogFileIsChanged === "undefined") return
     const {logFile=""} = config
     watchAndStream(logFile,(content)=>{
       onLogFileIsChanged(bot,content)
     })
   })
 }
```

```typescript
export const watchAndStream = (file:string,callback:(content:string)=>void)=>{
  if(!fs.existsSync(file)){
    console.log(`file-to-watch ${file} not exist`)
    return
  }
  fs.watchFile(file,{ interval: 2000 },(curr,prev) => {
    const stream = fs.createReadStream(file,{start:prev.size, end:curr.size})
    stream.on("data",function(data){
      const chunk = data.toString();
      callback(chunk)
    })
  })
}
```

参数`onLogFileIsChanged`和`config`都来源于type `WechatyLogOperation`的object。而之前用到的`qrResuce`其实就是return了这个type的一个object。

```typescript
export const qrRescue = (
  config: WechatyLogOperationConfig,parameter:{loginTest:string}
):WechatyLogOperation => { ... }
```

`startReactingToCmds`和👆上面的`startWatchingLog`差不多，不言而喻也。

## 三、「掉线给码」的实现

函数`startWatchingLog`里调用到的`onLogFileIsChanged`取决于`WechatyLogOperation`的object对它的定义。

```typescript
export type WechatyLogOperation = {
  config: WechatyLogOperationConfig,
  onLogFileIsChanged?: WechatyLogFileLambda,
  onCmdReceived?: WechatyCommandLambda,
}
```

其实`qrResuce`就是运用了一个global state`isOtherBotAlive:boolean`加一些regex来根据写进日志的字符串从而来变动`isOtherBotAlive`这个“开关”，而这个“开关”的变动又会调用到`onOtherBotIsLoggedOut`和`onOtherBotIsLoggedIn`。

```typescript
const onLogFileIsChanged = async (bot:Wechaty, newLogs:string) =>{
  const {adminWeixin} = config
  if(globalState.isDisabled) return
  if(globalState.isOtherBotAlive){
    const latestQRCode = qrCodeAwaitingToBeScanned(newLogs)
    if(latestQRCode) onOtherBotIsLoggedOut(bot,adminWeixin,latestQRCode)
  }else{
    const loggedIn = isUserLoggedIn(newLogs)
    if(loggedIn) onOtherBotIsLoggedIn(bot,adminWeixin)
  }
}
```

`qrCodeAwaitingToBeScanned`里的regex主要是来查找“INFO StarterBot...”和“INFO StarterBot onScan...”这两个string。(`WechatyLogMonitor`的参数`enableSelfToBeQrRescued: true`将会让Wechaty在登陆和要扫码时给出对应这两个string的log，写入log file里。)

```typescript
const qrCodeAwaitingToBeScanned = (lastFewLines:string):string|undefined => {

    const signThatItIsLoggedIn = /INFO StarterBot Contact<(.*)?> login/g
    const indexOfLastSignOfLoggedIn = getLastMatch(signThatItIsLoggedIn,lastFewLines)?.index || -1

    const pattern = /INFO StarterBot onScan: Waiting\(.*\) - (.*)?\n/g
    const match = getLastMatch(pattern,lastFewLines)
    if(match) return match.index > indexOfLastSignOfLoggedIn ? match[1] : undefined
    return undefined
}
```

## 四、定义其他WechatyLogOperation

总的来说，`WechatyLogMonitor` 把「看log回调」和「bot收到信息回调」这两件事abstract走了，所以在你的`WechatyLogOperation`中，只要选择性地定义 `onLogFileIsChanged`, `onCmdReceived`就可以了。

比如要写一个来restart PM2的`WechatyLogOperation`函数闭包，几行就行：

```typescript
export const restartPM2 = (config: WechatyLogOperationConfig, parameter:{pm2Id:number}):WechatyLogOperation => {
  return{
    config,
    onCmdReceived : async (bot:Wechaty, cmd:string, config: WechatyLogOperationConfig) => {
        const {adminWeixin} = config
        if(cmd === "restart") execAndPipeToBot("pm2 restart "+parameter.pm2Id, bot, adminWeixin)
    }
  }
}
```

![restart](/assets/2020/wechaty-log-monitor/restart.jpeg)

## 五、待开发的Auth、GTP3功能

目前 `WechatyLogOperationConfig` 里有一个 `securityRule`值，默认是`None`.

```typescript
export type WechatyLogOperationConfig = {
  logFile?: string,
  adminWeixin: string,
  securityRule?: WechatyLogOperationSecurityRule
}
```

```typescript
export enum WechatyLogOperationSecurityRule {
  None  = 0,
  SMSVerification, //not implemented
  authy, //not implemented
  googleAuth //not implemented
}
```

未来如果要发展到把项目整个production相关的DevOps（不单只是Wechaty相关的Operations，如在production跑的MongoDB相关的Operations、Restful API服务器相关的Operations等）都运用Wechaty来给团队塑造一个简单、容易上手的流程，也就是把chatbot变成了一个简易的terminal，那时候我们可以设定让更危险的Operations变得需要短信验证码、authy等方式去做Authentication。

我相信Auth功能对于wechaty-log-monitor插件来说将会是一个有意思的发展方向之一。

若pragmatically，『chatbot变成一个更简易的terminal』这件事真的行得通，那另一个非常有意思的发展方向就是结合[OpenAI最近提及到GPT3的一个很有意思的应用：Natural Language Shell](https://beta.openai.com/?app=productivity&example=4_2_0) - 运用自然语言去做执行unix等命令。

![gtp3](/assets/2020/wechaty-log-monitor/gtp3.jpeg)

> 作者: [Archy Will He 何魏奇](https://github.com/archywillhe/)，functional programmer, interested in computational semantics，目前在全职做[吖奇说(ARCHY.SH)](https://archy.sh)这个项目。Working with GPT-2 (and hopefully with 3 soon!)
>
> Github Repo: [wechaty-log-monitor plugin](https://github.com/archywillhe/wechaty-log-monitor)
>
> [![flair](https://camo.githubusercontent.com/c551a231a6cda28e59291fa091ddcb7b9899f6ec/68747470733a2f2f737461636b65786368616e67652e636f6d2f75736572732f666c6169722f313334303435332e706e67)](https://stackoverflow.com/users/2041954/%E5%90%96%E5%A5%87%E8%AF%B4-%E4%BD%95%E9%AD%8F%E5%A5%87archy-will-he)
>
