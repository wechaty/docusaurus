---
title: "repe-assistant 社群活动助手"
author: xiaogan18
categories: project
tags:
  - padplus
  - utility
image: /assets/2020/repe-assistant/2020-05-16-repe-assistant.webp
---

repe社群助手主要是为了提高社群活跃度以及群活动管理而设计。管理员使用后台web发起一系列活动并设置动态的参与口令，群成员只需要发送对应口令即可参与活动，并且能够结合积分系统做一些约束和奖励。

## 架构设计

### 机器人

bot基于nodejs平台开发，借助wechaty框架实现微信消息监听与发送

#### 职责

- 定时从后台service拉取待发送信息，并发送给对应的contact。
- 监听微信消息，上报给后台service。
- 同步contact列表
- 同步room列表

#### 依赖API

```javascript
const uri="http://127.0.0.1:89/bot"

// 获取待发送的消息
axios.get(uri+"/task")

// 上报微信消息
axios.post(uri+"/cmd",message)

// 全量同步联系人
axios.post(uri+"/sync/user",contacts)

// 全量同步群聊
axios.post(uri+"/sync/room",rooms)

// 同步单个联系人
axios.post(uri+"/user",{id:id,name:name})

// 同步单个群聊
axios.post(uri+"/room",{id:id,name:name})
```

#### bot get-started

- 修改`/bot/examples/apis.js`文件中的配置

```javascript
const uri="http://127.0.0.1:89/bot"; // service api url
const token=""; // wechaty padplus token
```

- 终端输入命令 `npm start`

### 后台服务

后台服务使用golang开发，负责解析、调度微信消息，并且为管理员后台提供web api。
> tips：wechaty golang依赖包成熟后会将bot迁移到golang上来，目前是使用web api方式交互。

#### 功能

- 机器人web api
- 管理员后台web api
- 微信口令解析服务 command service
- 任务调度服务 bot task service
- 活动管理服务 activity manage service

#### BOT API

对应的bot依赖的api接口，默认监听89端口。基于安全考虑，建议不开放外网端口，只提供bot访问。

```javacript
engine.GET("/task", t.getTask)
engine.POST("/cmd", t.postCommand)
engine.POST("/user", t.postUser)
engine.POST("/room", t.postRoom)
engine.POST("/sync/room", t.syncRooms)
engine.POST("/sync/user", t.syncUsers)
```

#### WEB API

对应管理员后台的api接口，默认监听80端口。

##### user manage

```go
engine.GET("/", t.getList)
engine.GET("/:id", t.get)
engine.PUT("/:id", t.update)
```

##### room manage

```go

engine.GET("/", t.getList)
engine.GET("/:id", t.get)
engine.PUT("/:id", t.update)
```

##### activity manage

```go
engine.GET("/", t.getList)
engine.GET("/:id", t.get)
engine.GET("/:id/log", t.getLogList)
engine.POST("/", t.add)
engine.PUT("/:id/done", t.setDone)
```

#### bot task manage

```go
engine.GET("/", t.getList)
engine.GET("/:id", t.get)
engine.POST("/", t.add)
engine.PUT("/:id", t.update)
engine.PUT("/:id/done", t.doneTask)
engine.DELETE("/:id", t.delete)
```

#### 后台服务 get-started

1. 后台启动依赖`/backend/main/tmpl`和`repe.yaml`，因此最简单的启动命令如下：

```shell
cd ./backend/main
go build
./main
```

#### test web

后台提供两个测试web页面，以监听80和89端口为例

```shell
## 微信机器人模拟器
http://localhost:89/example/1

## 活动管理页面
http://localhost/example/1/actv
```

## GitHub

<https://github.com/xiaogan18/repe-wechat-assistant>

## 致谢

repe bot机器人基于wechaty框架实现，十分感谢wechaty团队提供的技术让repe需求得以实现，wechaty对开源社区的贡献让人致敬。

> Author: [@xiaogan18](https://github.com/xiaogan18) Full stack developer,specialized golang and blockchain.
> Code: [@Github](https://github.com/xiaogan18/repe-wechat-assistant)
