---
layout: post
title: "wechaty-electron 把你的wechaty 变成客户端"
date: 2017-11-26 12:00 +0800
author: 郭英旭
---
> 作者: [郭英旭](https://github.com/Guoyingxu)

## 初识wechaty
去年的这个时候，我刚到现在的公司任职，发现同事正在用微信做转播，就是把几个微信群里有价值的发言同步到其他几个群里，同时还要存入数据库以便在论坛上也能看到相关讨论。当时同事用的是chrome插件的方式，那是第一次知道微信还可以这么玩。惊奇的同时我也发现了一个很严重的问题，就是插件跑一段时间，网页就卡死了，就得重启。 于是我在网上找不同的解决方案，github 真是一个神奇的地方，很快我就找到了好几个版本的微信机器人，人气最高的当属wechaty，另外还有一个比较看好的是一个python的项目。由于本人对nodejs 对偏爱，选择了wechaty。
## 为什么要electron
从Qt到Adobe的AIR，一直未放弃过使用js和html开发桌面应用的尝试和实践，直到出现了electron。我感觉总算出现了一个完美的方案。当然还有NW.js, NW也是一个不错的解决方案。最初NW做的并不如electron，这也导致了我并没有对NW继续关心。不过目前看来NW.js 已经完全具备了与electron 一争高下的实力。
找到了wechaty，我的项目才刚刚开始，由于转播过程需要人为的实时干预，甚至当一些bug出现的时候需要手动操作来纠正（当时wechaty还不能发图片，需要手动转发）。如此一来，在服务器端部署wechaty的愿望被打破了。如果能用electron 做个客户端就好了，直接发给运维，解放程序员，就是解放生产力。electron 本身就是在pc端运行node环境，完全符合wechaty的运行环境要求。

## wechaty-electron 最初的想法
很快我的项目进入了实施阶段，wechaty的api 确实非常简单。一个微信转播的客户端很快就完成了，并且实现了与网站上文字直播的互动。案例：[网页文字直播](https://base.aganjinrong.com/live/6365)。 唯一让我不满足的是，使用electron 客户端启动wechaty 仍然要打开一个网页来登录微信。 electron 本身就是基于V8的。浏览器能做的它都能做，浏览器不能做的，它也能做。完全没有必要启动一个webdriver来登录微信。只需要new 一个window 或者打开一个webwiew 即可代替 浏览器，并且可以随心所欲的隐藏显示。wechaty只需要关心与electron 的webcontent 交互即可。另外，electron 本地代码与webcontent交互更加方便，除了完善的网页事件，更有ipcMain 和ipcRenderer 交互机制。wechaty 完全不必再额外启动一个express server 来建立socket 通道（当时没有puppeteer）。更有价值的一点是，wechaty 可以拥有一个随时随地使用的多平台客户端！
## wechaty-electron 实现
我常常会为自己有一些自我感觉很棒多想法而窃喜，然而仅仅是独自偷欢而以。鼓起勇气去写又是另一回事了。我仔细的阅读wechaty的源码和electron的api 进行对比和测试。刚有所得时，puppeteer出现了，wechaty 出现了一个较大版本的变动。puppeteer 简直太好用了，比electron的api更全面（我猜测electron也许会因此而更新版本），然而问题也来了，puppeteer 实现的接口electron做不到了！比如 获取页面的弹窗，比如class ElementHandle... 
我采用最谨慎和保守的方式对 wechaty／puppet-web 进行改写：

    * 新增electron-driver.ts 实现wechaty 中用到的puppeteer的所有接口方法
    * 在wechaty－bro.js中使用ipcRenderer 来发送和接收electron 的事件和指令，
    * 新增emit方法（electron 接口中没有puppeteer 的 exposeFunction方法 ）
    * bridge.ts中增加 bindEvents方法，使用ipcMain.on(event,handler)来订阅页面回传的事件
以上最主要的几处修改保证对原来项目改动最小化。
经过测试，基本功能已经可用，但是仍然有些许bug，需要后续继续修正。项目地址：[wechaty-electron](https://github.com/GuoYingxu/wechaty/tree/wechaty-electron)
## demo code
```javascript
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const {
  config,
  Wechaty,
  log,
  MediaMessage,
} = require('../../dist/index')

let window;
app.on('ready', () => {
  window = new BrowserWindow();
  window.loadURL(url.format({
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file',
    slashes: true
  }))
  window.webContents.openDevTools()

  /**
         * 接收页面按钮点击事件
         * 页面内容
         *	<input id="startWechaty" type="button" value="启动微信">
         *  <script>
         *   document.getElementById("startWechaty").addEventListener('click', () => {
         *      require('electron').ipcRenderer.send('startWechaty')
         *   })
         * </script>
         */
  ipcMain.on("startWechaty", () => {
    initbot()
  })
})
app.on('window-all-closed', () => {
  app.quit()
}) 
function initbot(){
  //这里与正常使用wechaty代码一样
}
```
   
    
参考 readme quick start 和  [wechaty-electron-example](https://github.com/GuoYingxu/wechaty/tree/wechaty-electron/example/electron-app) 

## 更多想法
国内ip受限，npm install puppeteer 和electron 都非常不容易。所以我单独开了一个分支，删除了puppeteer。我想如果wechaty能把 puppet 做成插件模式，需要那个安装哪个，会不会体验更好？甚至后面还会有更多的  wechaty－puppet－engine ，比如wechaty-nw for NW.js。这样，wechaty 本身只关心 微信 api，puppet 只关心与engine通信，应该是一个比较完美的结构。
微信机器人的使用会导致ip被封。暂时还无法确定使用electron 能否减少被封的概率。前面经验告诉我，如果微信被封号，换个ip是可以登录的，electron的客户端貌似因此比服务器端多了一个好处。
