---
title: "使用 VS Code 调试 Node.js 应用"
author: chinggg
categories:
  - article
  - tutorial
tags:
  - code
  - debug
  - nodejs
image: /assets/2021/08-vscode-debug-nodejs/debug.webp
---

> Author:[@chinggg](https://github.com/chinggg)

## 为什么要学会调试

「暑期 2021」活动中，我为 Wechaty 开发命令行环境下的客户端 [wechaty-cli](https://github.com/wechaty/cli)，使用 [blessed](https://github.com/chjj/blessed) 这个终端图形化组件库可以轻松做出炫酷的仿 IRC 聊天软件，原以为只需调库即可完成任务，但事情远没有那么简单...

![error](/assets/2021/08-vscode-debug-nodejs/error.webp)

在我点击联系人列表时，应用瞬间崩溃，终端上只留下 npm 的常规报错，翻看对应日志也没有任何有效信息，这意味着没有明确的错误关键字可以一步到位地搜索，针对这种问题，我尝试按以下步骤解决：

1. 直接 Google 项目名称和场景，如 "blessed js crash"，但很可惜并没有任何有效结果，翻遍了 [Stack OverFlow](https://stackoverflow.com/questions/tagged/blessed) 上所有 blessed 相关问题都没有和我相同的情况。

2. 浏览 GitHub 原项目的 Issues 和 Pull Requests，比如我用到了 [blessed-contrib](https://github.com/yaronn/blessed-contrib#tree) 中的 Tree 组件，就可以搜索 Tree 相关的讨论，但很可惜仍然没有结果。

3. 尝试 catch 错误并输出，但因为 blessed 相当于在原来的终端之上加了一层， `console.log(error)` 这种常见做法行不通了，而且我也根本不知道在哪 catch。

4. 找不到报错信息，已经开始怀疑是自己的问题，仔细检查了一遍代码并严格使用 TypeScript 声明了类型，确保与文档描述一致，但错误仍旧。

5. 寻找使用同一个库同一个组件的代码，与自己的代码相比较，尝试从不同之处上找出崩溃原因所在。但全网使用 Tree 组件的项目半只手都数得过来，而且基本就是沿用了样例代码中实现的 File Explorer，找不出代码的问题。

6. 自己实在无法解决，可以在各种网站或交流群提问，但即使能提供详细的上下文信息，也不一定有人能够解答，毕竟终端命令行软件本就是小众领域，使用过 blessed 的人更可以说寥寥无几。

总之，因为 blessed 实在有些冷门而且年久失修，在网络上无法找到所需的信息，我必须要独自面对一个没有人遇到过的问题，可我却连崩溃产生的原因都不清楚。难道我要一行行翻源码，脑补运行过程并人工审计代码？这显然不现实，所以只有通过调试，才能细致入微地理解程序的运行过程，从而找到问题所在。

## VS Code 调试简介

VS Code 可能是前端领域现下最流行的开发工具，本文我们就以 VS Code 为例讲解调试的方法。

作为一个文本编辑器，VS Code 也提供了运行和调试的功能，但和其他一键运行的 IDE 不同，编辑器可不知道要运行何种程序，调试的功能也要安装插件来获得，所以自行配置文件是免不了的。即使是同一种编程语言，开发环境和运行方式上也可能会有差异，网上搜索到的现成配置文件不尽相同，盲目照抄往往会出现各种千奇百怪的报错，如果时间允许推荐阅读[官方文档](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)。

如果你此前没有进行过调试运行的配置，只需点击上方菜单栏 -> Run -> Add Configuration，并在弹出的框中选择 Node.js，就会自动在工作区内创建 `.vscode/launch.json` 这个文件并打开，生成如下内容：

```json
{
 // Use IntelliSense to learn about possible attributes.
 // Hover to view descriptions of existing attributes.
 // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
 "version": "0.2.0",
 "configurations": [
  {
   "type": "pwa-node",
   "request": "launch",
   "name": "Launch Program",
   "skipFiles": [
    "<node_internals>/**"
   ],
   "program": "${file}"
  }
 ]
}
```

配置文件是 JSON 格式，鼠标悬浮到键名上会出现相应的提示，不过参数太多也不一定都用得到，这里我们只关注能让项目运行起来的参数，很明显就是 `program` 制定了文件路径，比如我们如果使用 `node index.js` 启动项目，那么 `program` 填 `index.js` 就可以。

但我的项目是用 `ts-node` 直接运行的，并没有编译好的 js 文件，直接填写 ts 文件明显会失败，于是我 Google 搜索了 "ts-node debug"，出来的前两条结果中的配置文件都过于复杂，添加了很多参数，其实只需要加上 `"runtimeExecutable": "ts-node"` 就够了。

除了这一种配置，VS Code 还为我们提供了许多配置模板，再次点击 Add Configuration 或者在编辑状态按下 "Ctrl+Space"，会出现一长串配置列表，比如 `Node.js: Launch via NPM` 是通过像 `npm start` 这样的命令来运行项目的，这样做的好处是具体代码文件位置或名称改动不会影响调试运行。

不过对于某些需要与用户交互的程序，比如使用 blessed 开发的终端图形界面程序，这样启动默认是在 VS Code 内置的 Debug Console 中执行，无法接受输入，需要添加 `console` 属性设为 `integratedTerminal` 或 `externalTerminal`，分别是在 VS Code 自带的 Terminal 中或用户设置的外部 Terminal 中执行，配置文件如下：

```json
{
 "name": "Lanch via NPM",
 "request": "launch",
 "runtimeArgs": [
  "start",
 ],
 "runtimeExecutable": "npm",
 "skipFiles": [
  "<node_internals>/**"
 ],
 "type": "pwa-node",
 "console": "integratedTerminal",
}
```

细心的小伙伴可能已经发现，上述配置文件的 `request` 参数都设置为 `launch`，这意味着 VS Code 会直接启动程序并调试，和其他一键运行的 IDE 一样方便，不过有些时候我们仅仅需要调试而不想连带着捆绑启动的配置，所以 VS Code 也提供了 `attach` 模式，是对已经打开的程序进行调试。比如模板中 `Node.js: Attach` 配置如下：

```json
{
 "name": "Attach",
 "port": 9229,
 "request": "attach",
 "skipFiles": [
  "<node_internals>/**"
 ],
 "type": "pwa-node"
}
```

要调试 Node.js 应用程序，只需执行形如 `node --inspect-brk program.js` 命令，程序会在默认的 9229 端口等待调试器接入，在 VS Code 中点击开始调试后就会运行。对于用 `ts-node` 执行的命令，则要以形如 `node --nolazy --inspect-brk=9229 -r ts-node/register program.ts` 的方式运行。

如果嫌使用 `--inspect` 参数麻烦，使用模板配置 `Node.js: Attach by Process ID` 则会自动弹出方框来选择对应正在运行的 Node.js 进程。如果连动动小手选择都不愿意，VS Code 还推出了 [Auto Attach](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_auto-attach) 功能，按下 `Ctrl+Shift+P` 输入 `Toggle Auto Attach`，选择 `smart` 模式，则只需在 VS Code 自带终端中执行 Node.js 程序，无需任何配置，VS Code 就会 Attach 你的程序并进行调试了。

## 栈溢出调试实战

介绍完了 VS Code 调试的基本配置，就可以来尝试解决文章最初遇到的问题了，直接开始调试并重现崩溃场景，程序退出后 Debug Console 中还能看到错误信息：

```log
RangeError: Maximum call stack size exceeded
at List.focus (cli/node_modules/blessed/lib/widgets/element.js:329:30)
at Tree.render (cli/node_modules/blessed-contrib/lib/widget/tree.js:152:52)
at cli/node_modules/blessed/lib/widgets/screen.js:738:8
at Array.forEach (<anonymous>)
at Screen.render (cli/node_modules/blessed/lib/widgets/screen.js:735:17)
at reposition (cli/node_modules/blessed/lib/widgets/element.js:968:17)
at Tree._labelScroll (cli/node_modules/blessed/lib/widgets/element.js:972:5)
at Tree._emit (cli/node_modules/blessed/lib/events.js:94:20)
at Tree.emit (cli/node_modules/blessed/lib/events.js:117:12)
at Tree.scroll (cli/node_modules/blessed/lib/widgets/scrollablebox.js:274:17)
at Tree.<anonymous> (cli/node_modules/blessed/lib/widgets/scrollablebox.js:222:8)
at Screen._focus (cli/node_modules/blessed/lib/widgets/screen.js:1680:10)
at Screen.focusPush (cli/node_modules/blessed/lib/widgets/screen.js:1620:8)
at Screen.focused (cli/node_modules/blessed/lib/widgets/screen.js:1697:15)
at List.focus (cli/node_modules/blessed/lib/widgets/element.js:329:30)
...
```

一下子就找到了问题的根源，应用本身的代码应该没有问题，而是在 blessed 库内部的代码中产生了无限循环，那么就可以在相应位置设下断点，观察代码执行顺序和变量值的变化，耐心地分析无限循环产生的原因。

![debug](/assets/2021/08-vscode-debug-nodejs/debug.webp)

如图所示，在 `tree.js` 的 `Tree.prototye.render` 这一函数中 `if (this.screen.focused === this.rows) this.rows.focus();` 这一语句可能导致 `Tree.render()` 会调用 `this.rows.focus()`，将鼠标悬浮至 `this.screen.focused` 发现与 `this.rows` 为同一对象，这是无限循环上的一个环节，如果注释掉此行再运行便不再有崩溃了。不过此行代码或许起着必要的作用，不敢轻易删除，最终还是更改了应用的代码，在另一处上破坏了循环继续的条件，详情可见 [wechaty/cli#13](https://github.com/wechaty/cli/pull/13)。

## 扩展阅读

1. [Introducing Logpoints and auto-attach](https://code.visualstudio.com/blogs/2018/07/12/introducing-logpoints-and-auto-attach)
2. [VSCode 调试中 launch.json 配置不完全指南](https://www.barretlee.com/blog/2019/03/18/debugging-in-vscode-tutorial/)
3. [NodeJS的代码调试和性能调优](https://www.barretlee.com/blog/2015/10/07/debug-nodejs-in-command-line/)
4. [写 Node.js 代码，从学会调试开始](https://mp.weixin.qq.com/s/7PNE3nBhpQOTN4stChvWzQ)
