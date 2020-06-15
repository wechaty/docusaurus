## 需求背景

作为一个混迹于前端后端多年的码畜，很早之前就有做微信机器人的想法了，奈何微信wechat web协议无法使用，想法被暂时搁置，偶然间看到一个购物类的微信机器人感觉很牛逼的样子，想法又萌芽了，想重拾机器人的梦想。于是在Github找了很多开源的产品，终于惊鸿一瞥发现了wechaty，wechaty是目前市场上最好的机器人,由于最近在使用nodejs的nest框架，决定用nestjs来实现机器人，用于管理群组，配女盆友聊天等功能
--Wechaty是适用于微信个人的Bot SDK ，可以使用6行 js 创建一个机器人
--具有包括linux，Windows，MacOS和 Docker 在内的跨平台支持，基于Node.js
--让天下没有难开发的机器人
--说干就干，萝莉姐诞生了

<!--more-->

## 项目

wechaty-robot-nest  微信小管家
本项目按照企业生产环境标准搭建，集成了日志、异常处理、测试生产环境等

### 主要依赖

- [wechaty](https://github.com/wechaty/wechaty) 个人微信账号的微信机器人 SDK
- [nestjs](https://github.com/nestjs/nest) 使用ts开发的nodejs版spring框架
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) 在控制台打印二维码

### 安装依赖

建议使用淘宝镜像 
```
npm config set registry https://registry.npm.taobao.org
```

### 修改`env`配置

打开`env/dev or env/pro` 文件，将里面的配置改为自己的。

### 修改`config`配置

打开`src/modules/wechat/config.js` 文件，将里面的配置改为自己的。

### 修改图灵接口配置

图灵api ：[http://openapi.tuling123.com/openapi/api/v2](http://openapi.tuling123.com)  
注册后打开src/modules/wechat/robot.func.ts，修改对于配置（偷懒配置到全局env）



### 运行测试

```bash
npm run start:dev
```

#### 结构

```ts
|-- env/
|---- dev.env # 应用开发配置
|---- pro.env # 应用生产配置
|-- src/
|---- common/
|------ const/  # 定义常量
|------ email/  # 邮件配置
|------ enum/ # 枚举目录
|------ filters/ # 过滤器目录
|---- http/
|------ request.ts # 接口请求axios
|---- modules/ # 应用模块
|------ wechat/ # 机器人模块
|-------- config.ts # 机器人配置
|-------- robot.controller.ts # 机器人控制层 用于定义web接口
|-------- robot.module.ts # 机器人模块入口
|-------- robot.service.ts # 机器人服务实现
|-------- robot.func.ts # 机器人监听方法
|------ wechat/ # 机器人模块
|------ shared/# 公共共享模块
|---- utils/# 工具目录
|-- app.module.js# 应用模块入口
|-- main.js# 入口文件
|- package.json
```
## 实现

- 方案：
  1. 使用 `Node.js` 开发，使用`wechaty/wechaty-puppet-padplus`等功能库；
  2. 添加机器人好友，使用图灵api可实现陪聊服务
  3. 回复关键字加群
  4. 群消息@机器人，机器人智能回复

### 机器人登录扫码，退出登录，消息处理，好友添加，加入群聊，入群邀请，各种事件回调

```ts

 this.bot = new Wechaty({
      name: config.name,
      puppet: new PuppetPadplus({
        token: config.token,
      }),
    });
    this.bot.on('scan', onScan)
    this.bot.on('login', onLogin)
    this.bot.on('logout', onLogout)
    this.bot.on('message', onMessage)
    this.bot.start()
      .then(() => log.info('StarterBot', 'Starter Bot Started.'))
      .catch(e => log.error('StarterBot', e))

```

### 接收消息并交给接口处理

```ts

// 消息处理
 if (msg.self()) return
  if (msg.type() === Message.Type.Text) {
    if (msg.room()) {
      const room: any = await msg.room()

      if (await msg.mentionSelf()) {
        let self: any = await msg.to()
        self = '@' + self?.name()
        // 获取消息内容，拿到整个消息文本，去掉 @+名字
        const sendText = msg.text().replace(self, '')
        const res = await requestRobot(sendText)
        room.say(res)
      }
    } else {
      const reply = await requestRobot(msg.text())
      msg.say(reply)
    }
  }
```

### 智能回复

```js

 function requestRobot(info): Promise<string> {
    return new Promise((resolve, reject) => {
      const url = 'http://openapi.tuling123.com/openapi/api/v2'
      request.post(url, {
        reqType: 0,
        perception: {
          inputText: {
            text: info,
          },
        },
        userInfo: {
          apiKey: 'xxxxxx',
          userId: 'xxxxx'
        }
      }).then((data: any) => {
        console.log(data)
        if (data.intent.code === 0 || data.intent.code === 10004) {
          resolve(data.results[0].values.text)
        }
      })
    })
  }
```

## 已实现的功能

- 自动通过好友验证
- 私聊群聊自动回复
  - 回复 `加群` 自动加群
- 自动聊天
  - 群聊私聊中开启自动回复后，可以和机器人聊天

## 待实现需求

- 每天早上爬取热点新闻发送
- 等等团队需要的功能待挖掘实现
- 爬虫爬取低价商品通知到指定用户去秒杀

## wechaty-robot-nest 还是一个正在开发中的项目, 欢迎留言交流你对它的看法，以及你需要的功能

## 感谢  Wechaty开源项目及JuziBot公司提供的接口和token，为开发者带来极大便利！
底层 api 基于 [wechaty](https://github.com/wechaty/wechaty)

更多微信消息、群消息、好友、对话等相关 api 可查阅官方文档 [wechaty 官方文档](https://github.com/wechaty/wechaty/blob/master/docs/index.md)
