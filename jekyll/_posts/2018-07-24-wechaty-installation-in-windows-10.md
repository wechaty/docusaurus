---
title: "在 Windows 10 下安装 Wechaty"
author: kaffa
categories: tutorial
tags:
  - windows
  - install
  - news
image: /assets/2018/wechaty-installation-in-windows.webp
---

![在 Windows 10 下安装 Wechaty](/assets/2018/wechaty-installation-in-windows.webp)

感谢 @huan @lijiarui 让我在此分享我在 Windows 10 Home 平台安装 Wechaty 的经历，希望我对安装过程的记录和分析能帮助在此平台下安装 Wechaty 的人。

## 介绍

[Wechaty](https://github.com/wechaty/wechaty) 是一个对话机器人软件开发包，它可以帮你用 6 行 JavaScript 代码实现一个微信个人账号。由于使用 node 技术，它支持 Linux、Windows、macOS 平台和 Docker 容器。它的安装过程和其它 node 包类似，首先 ```git clone``` 源代码，再使用 node 的 npm 命令 ```npm install & npm start``` 实现开箱即用，同时官方也提供了入门案例：Wechaty getting started。而在国内，实际安装过程中可能会因某些软件依赖的原因遇到问题，本文记录了安装过程中可能会出现的错误及解决办法，下面描述详细的步骤和说明：

* 项目地址: [Wechaty](https://github.com/wechaty/wechaty)
* Wechaty 起步: [Wechaty Getting Started](https://github.com/wechaty/wechaty-getting-started)
* Wechaty 文档: [Wechaty Documents](https://wechaty.js.org)

## 概念

* [Puppet](https://github.com/wechaty/wechaty/wiki/Puppet): 一个包含了机器人对话逻辑的抽象类，是 Wechaty 技术架构的一部分。继承实现 Puppet 抽象类（协议）的组件，即可实现更广泛的与联系人、消息/一对一对话、群组/聊天室/多对多对话等相关逻辑。Puppet 的中文是木偶，用在这里相当传神。
* [node-gyp](https://www.npmjs.com/package/node-gyp): 基于 gyp 编写的用来编译 node 本地扩展模块的 node 包，而 gpy 是 Chromium 项目上用于实现跨平台编译的工具。可参考 [安装文档](https://github.com/nodejs/node-gyp#installation)
* [windows-build-tools](https://www.npmjs.com/package/windows-build-tools): node 包装的 Windows 平台的编译工具
* [node-expat](https://www.npmjs.com/package/node-expat): 基于 libexpat 的用来处理 XML 的 node 包，libexpat 是一个号称最快的 XML 解析库，纯 C 语言编写。Wechaty 使用它解析基于 XML 的通讯。可参考 [安装文档](https://github.com/felixrieseberg/windows-build-tools)
* [Python 2.7](https://www.python.org/downloads/): 一门愈久弥新的语言，node-gyp 的依赖 Python 2.7 实现跨平台编译
* [puppeteer](https://github.com/GoogleChrome/puppeteer): 可编程的 Google Chrome， Google Chrome 团队官方出品。
* [Chromium](https://www.chromium.org/): puppeteer 依赖一个特定的 Chromium 版本，Chrome 就是 开源 Chromium + Google 开发的闭源的扩展包。

## 安装步骤

一、下载 Wechaty 源代码

二、安装 Wechaty 依赖并配置

三、启动 Wechaty

## 详细步骤

一、下载 Wechaty 源代码

首先我们建立源代码目录，本文使用 ```D:\code```。如果你使用了其他目录，在后文中作相应的替换即可。 让我们从入门项目开始，运行以下命令下载，并进入项目目录：

```bat
git clone https://github.com/lijiarui/wechaty-getting-started.git
cd wechaty-getting-started
```

二、安装 Wechaty 依赖并配置

首先安装 node-v10.x.x。在 Windows 下，推荐使用官方提供的安装包，截至本文 [最新 64 位系统安装包](https://nodejs.org/dist/v10.7.0/node-v10.7.0-x64.msi)，如果网速不够，建议使用迅雷下载。

除了 node-v10 ，Wechaty 也依赖其它软件，而由于众所周知的网络原因，安装它们并不会太顺利。

此时，如果运行 npm install & npm start，会报以下错误:

```bat
Microsoft Windows [版本 10.0.16299.492]
(c) 2017 Microsoft Corporation。保留所有权利。


D:\code>cd wechaty-getting-started

D:\code\wechaty-getting-started>npm install
npm notice created a lockfile as package-lock.json. You should commit this file.
added 134 packages from 94 contributors and audited 324 packages in 22.581s
found 0 vulnerabilities


D:\code\wechaty-getting-started>npm start

> wechaty-getting-started@0.1.0 start D:\code\wechaty-getting-started
> node examples/starter-bot.js

01:59:34 INFO Wechaty <default> start() v0.18.5 is starting...
01:59:34 INFO Wechaty initPuppet() using puppet: default
01:59:34 INFO PuppetConfig installPuppet(wechaty-puppet-puppeteer@^0.4.2) please wait ...
npm:
> node-expat@2.3.16 install D:\code\wechaty-getting-started\node_modules\wechaty\node_modules\node-expat
> node-gyp rebuild


npm:
D:\code\wechaty-getting-started\node_modules\wechaty\node_modules\node-expat>if not defined npm_config_node_gyp (node "D:\Program Files\nodejs\node_modules\npm\node_modules\npm-lifecycle\node-gyp-bin\\..\..\node_modules\node-gyp\bin\node-gyp.js" rebuild )  else (node "D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js" rebuild )

npm: gyp
npm:  ERR! configure error
gyp ERR! stack Error: Can't find Python executable "C:\Python36\python.EXE", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:483:19)
gyp ERR! stack     at PythonFinder.<anonymous> (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:508:16)
gyp ERR! stack     at D:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\polyfills.js:284:29
gyp ERR! stack     at FSReqWrap.oncomplete (fs.js:158:21)
gyp ERR! System Windows_NT 10.0.16299

npm: gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild"
gyp ERR! cwd D:\code\wechaty-getting-started\node_modules\wechaty\node_modules\node-expat
gyp ERR! node -v v10.7.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok

npm: npm WARN
npm:  wechaty-puppet-puppeteer@0.4.2 requires a peer of brolog@^1.6.5 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of file-box@^0.8.22 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of hot-import@^0.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of lru-cache@^4.1.3 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of qr-image@^3.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of promise-retry@^1.1.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rxjs@^6.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rx-queue@^0.4.26 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of state-switch@^0.6.2 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of watchdog@^0.8.10 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of wechaty-puppet@^0.6.4 but none is installed. You must install peer dependencies yourself.


npm: npm ERR!
npm:  code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-expat@2.3.16 install: `node-gyp rebuild`
npm ERR! Exit status 1

npm: npm ERR!
npm ERR! Failed at the node-expat@2.3.16 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm:
npm
npm:  ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\username\AppData\Roaming\npm-cache\_logs\2018-07-22T17_59_53_633Z-debug.log

01:59:53 ERR PupptConfig puppetResolver(default) install fail: Command failed: npm install wechaty-puppet-puppeteer@^0.4.2
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "C:\Python36\python.EXE", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:483:19)
gyp ERR! stack     at PythonFinder.<anonymous> (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:508:16)
gyp ERR! stack     at D:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\polyfills.js:284:29
gyp ERR! stack     at FSReqWrap.oncomplete (fs.js:158:21)
gyp ERR! System Windows_NT 10.0.16299
gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild"
gyp ERR! cwd D:\code\wechaty-getting-started\node_modules\wechaty\node_modules\node-expat
gyp ERR! node -v v10.7.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of brolog@^1.6.5 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of file-box@^0.8.22 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of hot-import@^0.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of lru-cache@^4.1.3 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of qr-image@^3.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of promise-retry@^1.1.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rxjs@^6.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rx-queue@^0.4.26 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of state-switch@^0.6.2 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of watchdog@^0.8.10 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of wechaty-puppet@^0.6.4 but none is installed. You must install peer dependencies yourself.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-expat@2.3.16 install: `node-gyp rebuild`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-expat@2.3.16 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\username\AppData\Roaming\npm-cache\_logs\2018-07-22T17_59_53_633Z-debug.log

{ Error: Command failed: npm install wechaty-puppet-puppeteer@^0.4.2
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "C:\Python36\python.EXE", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:483:19)
gyp ERR! stack     at PythonFinder.<anonymous> (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:508:16)
gyp ERR! stack     at D:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\polyfills.js:284:29
gyp ERR! stack     at FSReqWrap.oncomplete (fs.js:158:21)
gyp ERR! System Windows_NT 10.0.16299
gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild"
gyp ERR! cwd D:\code\wechaty-getting-started\node_modules\wechaty\node_modules\node-expat
gyp ERR! node -v v10.7.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of brolog@^1.6.5 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of file-box@^0.8.22 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of hot-import@^0.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of lru-cache@^4.1.3 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of qr-image@^3.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of promise-retry@^1.1.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rxjs@^6.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rx-queue@^0.4.26 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of state-switch@^0.6.2 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of watchdog@^0.8.10 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of wechaty-puppet@^0.6.4 but none is installed. You must install peer dependencies yourself.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-expat@2.3.16 install: `node-gyp rebuild`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-expat@2.3.16 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\username\AppData\Roaming\npm-cache\_logs\2018-07-22T17_59_53_633Z-debug.log

    at ChildProcess.exithandler (child_process.js:291:12)
    at ChildProcess.emit (events.js:182:13)
    at ChildProcess.EventEmitter.emit (domain.js:442:20)
    at maybeClose (internal/child_process.js:961:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:248:5)
killed: false,
code: 1,
signal: null,
cmd: 'npm install wechaty-puppet-puppeteer@^0.4.2 ' }
01:59:53 ERR Wechaty start() exception: Command failed: npm install wechaty-puppet-puppeteer@^0.4.2
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "C:\Python36\python.EXE", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:483:19)
gyp ERR! stack     at PythonFinder.<anonymous> (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:508:16)
gyp ERR! stack     at D:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\polyfills.js:284:29
gyp ERR! stack     at FSReqWrap.oncomplete (fs.js:158:21)
gyp ERR! System Windows_NT 10.0.16299
gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild"
gyp ERR! cwd D:\code\wechaty-getting-started\node_modules\wechaty\node_modules\node-expat
gyp ERR! node -v v10.7.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of brolog@^1.6.5 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of file-box@^0.8.22 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of hot-import@^0.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of lru-cache@^4.1.3 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of qr-image@^3.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of promise-retry@^1.1.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rxjs@^6.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rx-queue@^0.4.26 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of state-switch@^0.6.2 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of watchdog@^0.8.10 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of wechaty-puppet@^0.6.4 but none is installed. You must install peer dependencies yourself.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-expat@2.3.16 install: `node-gyp rebuild`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-expat@2.3.16 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\username\AppData\Roaming\npm-cache\_logs\2018-07-22T17_59_53_633Z-debug.log

{ Error: Command failed: npm install wechaty-puppet-puppeteer@^0.4.2
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "C:\Python36\python.EXE", you can set the PYTHON env variable.
gyp ERR! stack     at PythonFinder.failNoPython (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:483:19)
gyp ERR! stack     at PythonFinder.<anonymous> (D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\configure.js:508:16)
gyp ERR! stack     at D:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\polyfills.js:284:29
gyp ERR! stack     at FSReqWrap.oncomplete (fs.js:158:21)
gyp ERR! System Windows_NT 10.0.16299
gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild"
gyp ERR! cwd D:\code\wechaty-getting-started\node_modules\wechaty\node_modules\node-expat
gyp ERR! node -v v10.7.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of brolog@^1.6.5 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of file-box@^0.8.22 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of hot-import@^0.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of lru-cache@^4.1.3 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of qr-image@^3.2.0 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of promise-retry@^1.1.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rxjs@^6.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of rx-queue@^0.4.26 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of state-switch@^0.6.2 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of watchdog@^0.8.10 but none is installed. You must install peer dependencies yourself.
npm WARN wechaty-puppet-puppeteer@0.4.2 requires a peer of wechaty-puppet@^0.6.4 but none is installed. You must install peer dependencies yourself.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-expat@2.3.16 install: `node-gyp rebuild`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-expat@2.3.16 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\username\AppData\Roaming\npm-cache\_logs\2018-07-22T17_59_53_633Z-debug.log

    at ChildProcess.exithandler (child_process.js:291:12)
    at ChildProcess.emit (events.js:182:13)
    at ChildProcess.EventEmitter.emit (domain.js:442:20)
    at maybeClose (internal/child_process.js:961:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:248:5)
killed: false,
code: 1,
signal: null,
cmd: 'npm install wechaty-puppet-puppeteer@^0.4.2 ' }

D:\code\wechaty-getting-started>
```

通过阅读上述日志，分析依赖关系如下:

```bat
wechaty-puppet-puppeteer
    --> node-expat
        --> node-gyp
            --> gyp
                --> Python 2.7 & Windows Build Tools
```

接下来要做的就是一一从依赖的最底层安装

1.安装 Python 2.7 至 ``C:\Python27\python.exe`` ，设置环境变量 ``PYTHON=C:\Python27\python.exe``

注意 node-gyp 并不支持 Python 3.x，如果你安装了 Python 3.x，错误日志如下:

```bat
Can't find Python executable "C:\Python36\python.EXE", you can set the PYTHON env variable.
```

你可能会疑惑这个本来存在的 Python 3 路径，个人认为这个不准确错误提示可以算入 npm 包的 Bug

2.安装 windows-build-tools

参考 windows-build-tools 官方文档，有以下两种方式：

* Visual C++ Build Tools
* Visual Studio 2017 vs Visual Studio 2015

我这里由于已经安装 Visual Studio 2017 社区版，所以没有尝试其他选项。这里的关键是需要一个 VC++ 编译器来编译 Windows 本地程序。而 Visual C++ Build Tools 在微软官方地址已失效，不容易找到，npm 官方推荐了安装 Visual Studio 2015。安装结束后，可以使用 ``npm install node-expat`` 验证上述安装配置是否成功

4.[安装 puppeteer](https://github.com/GoogleChrome/puppeteer)

由于网络原因，puppeteer 依赖的 Chromium 并不能顺利安装。此时，我们可以借助一个阿里巴巴公司提供的 cnpm 特色工具安装:

```bat
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install puppeteer
```

PS: 如果你遇到 Chromium revision is not downloaded. 时，在解决办法中看到的设置 PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 其实是一个误导， 这个选项并不能帮助你安装 puppeteer，而是让你在更新时不必每次都下载 Chromium 二进制。

这里还有一个手动安装办法，但不推荐：可以手动下载 chromium 安装包，放在 ``/node_modules/puppeteer/.local-chromium/`` 下，例如:

```bat
D:\code\wechaty-getting-started\node_modules\_puppeteer@1.6.0@puppeteer\.local-chromium\win64-571375
```

这个地址在 macOS 上如下，其中的数字可能不同:

```bat
~/node_modules/puppeteer/.local-chromium/mac-526987/chrome-mac
```

4..NET Framework 4.5.1 [仅 Windows Vista / 7 需要]

如果 Windows Vista / 7 版本，则需要手动安装 .Net Framework

5.如果使用的是 PadChat 组件的 Wechaty，且已有相应 token 则还需要设置以下几个环境变量:

```sh
WECHATY_LOG=silly
WECHATY_PUPPET=padchat
WECHATY_PUPPET_PADCHAT_TOKEN=*YOUR-TOKEN*
```

三、启动 Wechaty

```sh
npm install & npm start
```

运行后，程序会在控制台窗口打开一个文本的二维码，在二维码下方是该二维码的网址。

如果你对扫描控制台的文本二维码遇到问题，可以参考我的 [一篇关于二维码](https://kaffa.im/a-story-about-text-qrcode.html) 的博文。

## 总结

由于已成功启动项目，所以我并没有在 Windows 7 系统 或 32 位机上进行配置，主要问题应该差不多。解决办法建议查阅上述出现错误的软件文档来解决。

当然，如果你遇到了任何其他问题，也欢迎 [我的Github](https://github.com/kaffa) 上联系我。
