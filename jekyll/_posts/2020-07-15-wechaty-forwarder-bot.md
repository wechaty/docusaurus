---
title: "微信转发机器人(wechaty-forwardbot)"
author: xiaok
categories: project
tags:
  - padplus
  - productivity
  - social
image: /assets/2020/wechaty-forwardbot/header.png
---

运营群需要有价值的内容，才能把用户留住。但是自己又懒得搞这些内容  
所以最好就是,直接把别人群有价值的内容转发到自己群  
既能偷懒，还能留住用户，岂不美哉？

## 功能

判断n个群里面是否存在xxx关键词  
是则转发至自己的n个群

## 逻辑

- 监听配置好指定的群消息
- 判断是否存在某个关键词
- 存在则转发到配置好的群

## 依赖

- wechaty：wechaty核心库
- wechaty-puppet-padplus：wechaty iPad协议
- qrcode-terminal: 终端输出二维码

## 运行

克隆项目

```shell
git clone https://github.com/22528850/wechaty-forwardbot
cd wechaty-forwardbot
```

安装依赖

```shell
npm install
```

启动项目

```shell
node index.js
```

## 开发

```javascript
.on('message', v => {
  let
  from = v.from(),
  room = v.room()
  if(!room) return
  if(v.type() == 0) return
  if(v.type() != 7) return toRoom()
  // 文本消息逻辑处理
  // 是否为监听群
  if(config.group.indexOf(room.payload.topic) < 0) return
  // 是否存在关键字
  for (let k in config.keyWord)
  if(v.text().indexOf(config.keyWord[k]) >= 0)
  return toRoom()
  // 循环发送转发群
  function toRoom()
  {
    for (let k in config.toGroup)
    ((k)=>{
      setTimeout(async i => {
        let Room = await bot.Room.find({topic: config.toGroup[k]})
        if(Room) v.forward(Room)
      },(Number(k)+1)*config.sstg)
    })(k)
  }
})
```

## 致谢

感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token

> Author: [xiaok](https://github.com/22528850)
> Code: [Github](https://github.com/22528850/wechaty-forwardbot)
