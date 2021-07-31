---
title: "使用 [Matrix] 收发微信消息"
author: cubesky
categories: tutorial
tags:
  - matrix
  - featured
image: /assets/2020/matrix-wechaty/2020-03-matrix-appservice-wechaty.png
---

> 作者: [立音](https://github.com/cubesky)，个人开发者。首发于博客: [使用 Matrix 接收微信消息](https://liyin.date/2020/03/01/matrix-wechat-bridge/) 遵循 CC BY-NC-SA 3.0 CN

[![Wechaty AppService Bridge for [Matrix]](/assets/2020/matrix-wechaty/2020-03-matrix-appservice-wechaty.png)](https://github.com/wechaty/matrix-appservice-wechaty)

<!-- more -->

我周围的人都知道我很讨厌微信————臃肿、慢速、开放性低而且还极其费电，于是呢我当然发挥裁剪流氓软件的能力，直接把微信的后台打了个半残，所以我周围的人一直说我微信经常找不到我，那是当然的，微信连后台都没了，能实时找得到我就怪了。  

所以用其他聊天软件代收微信消息就显得很重要了，之前我用过 EH Forwarder Bot 将微信的消息转发到 Telegram，用了一段时间之后我发现它比较麻烦，在登录之后所有消息都是被 Bot 账号发送给你，而且如果你想将一个微信群组单独连接，就得自己创建群组，拉入 Bot，然后再选择连接。而且因为微信这个协议连接的问题，经常会出现突然就收不到消息，或者突然掉线的问题，所以后来我就不再使用 EH Forwarder Bot 了。（当然也是由于我那个时候买了第二台手机..）  

然后今年因为一些原因，我和朋友分别建立了自己的 Matrix 服务器。然后我发现官网上有一个叫做 Bridge 的功能，具体来说就是可以将其他聊天协议上的用户和群组以虚拟用户和 Portal 群组的方式加入 Matrix 中，就如同他们本来就是 Matrix 用户一样。  

作为尝试，我先建立了一个 Telegram Bridge 用来连接我的 Telegram 账号，连接倒是成功了，而且也正常收到消息，也可以回复，但是因为我的 Telegram 消息量太大了，造成了我服务器经常性的响应缓慢，后来不得已关闭了 Telegram Bridge。  
同时，我看到 Bridge 介绍中有一个 [Huan](https://github.com/huan) 开发的叫做 Wechaty 的 Bridge，而我的微信消息并没有那么多，所以就想要尝试一下。  

## 安装 NodeJS

其实安装 NodeJS 搜索一下就能找到怎么安装，所以在此就简略啦。我使用一台国内的 VPS 安装 Debian Stable 作为 Wechaty 的运行服务器。避免因为微信异地登录而被封禁。不过由于 Wechaty 最好使用 NodeJS v10，而且因为使用官方源安装之后 Node 有一部分存储于系统的某些固定目录下，有一些 Node 包会调用重编译之类的命令进而引起权限问题导致失败，所以我建议使用 nvm 来安装 NodeJS。  
安装 NVM 就十分简单了，直接执行

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

等待安装好就可以了。  

待 NVM 安装完成后输入

```bash
nvm install v10.18.0
```

完成 NodeJS v10.18.0 的安装和配置。  

## 使用 Yarn

虽然 [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty) 的 README 上写着使用 `npm install -g matrix-appservice-wechaty` 进行安装，但在我安装的过程中，反复遇到在安装 grpc 时执行 node-pre-gyp 失败的问题，经过多方查找发现，使用 Yarn 管理器就可以快速解决这个问题，所以我们先安装 Yarn。  

```bash
npm install -g yarn
```

然后通过 yarn 安装 matrix-appservice-wechaty，不过注意因为现在版本是在快速更新修复 bug 的状态，所以建议安装 next 版本  

```bash
yarn global add matrix-appservice-wechaty@next
```

## 安装所需的 Puppet

在 matrix-appservice-wechaty 的程序中，我们需要定义一个 Puppet 来指示这个 AppService 使用什么微信后端来进行通信。现在可以选择的后端有 `Puppeteer` `Padplus` `Macpro` `Mock` `Wechat4u` 这几种。其中 `Puppeteer` 和 `Wechat4u` 基于 Web 协议，`Padplus` 基于 iPad 微信协议，`Macpro` 基于 MacOS 微信协议。选择合适的协议后使用下面的命令来安装。

```bash
yarn global add wechaty-puppet-后端名
```

> 注：后端名为全小写，如 `wechaty-puppet-wechat4u`
> 注2：某些后端是收费的，请注意查看各后端的部署信息。

目前已知 next 版本的 appservice 在使用 PadPlus 作为后端时需要 next 版本的 PadPlus。 `wechaty-puppet-padplus@next`

## 创建配置文件

先复制 [config.sample.yaml](https://github.com/wechaty/matrix-appservice-wechaty/blob/master/config/config.sample.yaml)  到 config.yaml ，我建议单独为它创建一个文件夹，方便之后将所有的数据文件都放在这一个文件夹里。  

```yml
domain: chatie.io
homeserverUrl: https://matrix.chatie.io
registration: wechaty-registration.yaml
```

将示例中的 aka.cn 替换为你的 Matrix Synapse 服务器地址。将 homeserverUrl 替换为你的 Synapse 服务器终结点地址。然后运行命令创建注册文件。  

```bash
export APP_SERVICE_ENDPOINT='http://localhost:8788'

matrix-appservice-wechaty \
  --config  config.yaml \
  --url     "$APP_SERVICE_ENDPOINT" \
  --generate-registration
```

注意如果你的 Synapse 服务器和 Wechaty 服务器不是同一个服务器则要将 APP_SERVICE_ENDPOINT 的地址设置为 Wechaty 服务器的地址，同时注意防火墙开放端口。  

> 注：如果你的服务器在国内的 VPS 上，请注意备案问题。如果没有备案，Matrix 服务器连接可能会被你的 VPS 服务商阻挡。

上述命令运行后将会生成一个名为 `wechaty-registration.yaml` 的文件，将它复制到你的 Synapse 服务器上。  
编辑 Synapse 的 `homeserver.yaml` 文件，在其中的 `app_service_config_files` 项内加入 `wechaty-registration.yaml` 的路径，保存并重启 Synapse 服务器。  

> 注：每次运行 `--generate-registration` 后都需要重新复制并重启 Synapse 服务器。

## 开始运行

一般来说，直接在有 `config.yaml` 和 `wechaty-registration.yaml` 运行下面这个命令就可以了。  

```bash
export WECHATY_PUPPET=wechaty-puppet-后端名

matrix-appservice-wechaty \
  --config  config.yaml \
  --file    wechaty-registration.yaml
```

不过要注意，如果你使用 PadPlus 那些需要付费或者 Token 的 Puppet 后端，那么也需要 export 对应的变量，如 `export WECHATY_PUPPET_PADPLUS_TOKEN=xxxxxxxxxxxxxxxxxxxxx`  
不过我创建了一个 start.sh 以方便运行  

> 注意： padplus 版本需要额外安装 `qrcode-terminal` 否则会出现错误。  

```sh
#!/bin/bash
. /home/user/.nvm/nvm.sh
export WECHATY_PUPPET=wechaty-puppet-后端名
matrix-appservice-wechaty \
  --config  config.yaml \
  --file    wechaty-registration.yaml
```

> 注：将 user 更换为你的用户名  

chmod +x /path/to/config/start.sh

同时还可以创建一个 systemd 配置来自动启动（如果你的 Wechaty 和 Synapse 不在同一个服务器则不要加 `After` 那行）

```shell
[Unit]
Description=Matrix Bridge Wechaty
After=matrix-synapse.service

[Service]
Type=simple
WorkingDirectory=/path/to/config/
ExecStart=/path/to/config/start.sh
Restart=on-abort

[Install]
WantedBy=multi-user.target
```

执行 `systemctl daemon-reload`。  

之后就可以使用 `systemctl enable` 命令和 `systemctl start` 命令来启动 Wechaty Matrix Bridge 了。  
仅建议在调试完成，可以成功运行的情况下使用 systemctl 启动。  

## Let's Go！

来到你的 Matrix 客户端上，对 `@wechaty:你的服务器` 发起 **私聊** ，等待 Bot 加入后它应该会提示  

```log
This room has been registered as your bridge management/status room.
```

看到这条提示后输入 `!login`，首次使用时 Bot 应该会提示  

```log
You are not enable matrix-appservice-wechaty yet.
```

之后会立刻提示 `I had enabled it for you.`  

这时，Wechaty 就正式注册为 AppService 了。  

再次发送 `!login` 后，如果你没有安装你指定的 puppet，PuppetManager 会自动进行安装，稍等即可。如果安装过于缓慢，可以考虑按 Ctrl + C 终止程序，然后自己用 yarn 手动安装后再启动。  

当 puppet 成功启动后，Matrix 端会生成一个二维码的链接，打开并扫描二维码就可以完成登录了。

## 关于登出

给 wechaty 机器人发送 !logout 就行啦！

> 注意：截至到目前 latest 版本 (0.6.3) 没有这个命令，需要 next 版本 (0.7.2)

## Matrix-AppService-Wechaty

这个通讯桥目前是一个刚开始开发没有多长时间的状态，只能解决基础的消息互通问题，如果遇到对方发送的是链接消息的情况，Matrix 这边会显示一个超长的 xml 结构，期待之后版本更新能带来更多的功能！

同时借助 [Wechaty-Puppet-PadPlus](https://github.com/wechaty/wechaty-puppet-padplus) ，那些无法使用 Web 版微信的用户可以使用 iPad 协议来进行连接。因为我刚刚完成部署，所以稳定性我还不是非常清楚，不过因为这个协议是通过客户端级协议完成的，目测会稳定一些。  

非常感谢 [huan](https://github.com/huan) 开发的 [Wechaty](https://github.com/wechaty/wechaty)，让微信桥接和微信机器人有更多可能！

同时我也推荐一下他开发的 [Docker-Wechat](https://github.com/huan/docker-wechat) ，用 Docker 解决了使用 Linux 微信比较麻烦的问题。想了想我用 CrossOver 安装微信，然后用起来还有一堆的 bug 就感觉这个真的非常好。
