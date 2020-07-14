---
title: "微信转发机器人（wechaty-forwardBot）"
author: xiaok
date: "2020-07-15 10:24:00 +0800"
categories: project
tags:
  - wechaty
  - wechaty-puppet-padplus
header:
   teaser: https://avatars3.githubusercontent.com/u/56892264?s=460&u=b94cb5809dff0bc5766bc88acd3b57629817271f&v=4
---


<!-- markdownlint-disable -->
> 作者: [22528850](https://github.com/22528850)
> Code: [Github](https://github.com/22528850/wechaty-forwardBot)

[![](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/chatie/wechaty)
[![](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

### 背景
运营群需要有价值的内容，才能把用户留住。
<br>
但是自己又懒得搞这些内容，所以最好就是
<br>
直接把别人群有价值的内容转发到自己群
<br>
既能偷懒，还能留住用户，岂不美哉？

<!--more-->

### 功能
判断n个群里面是否存在
<br>
xxx关键词
<br>
是则转发至自己的n个群

### 逻辑
- 监听配置好指定的群消息
- 判断是否存在某个关键词
- 存在则转发到配置好的群

### 依赖
- wechaty：WechatY核心库
- wechaty-puppet-padplus：WechatY之iPad协议模块
- qrcode-terminal: 终端输出二维码

### 运行
1. 克隆项目
```shell
git clone https://github.com/22528850/wechaty-forwardBot
cd wechaty-forwardBot
```

2. 安装依赖
```shell
npm install
```

3. 启动项目
```shell
node index.js
```

### 开发
```JavaScript
.on('message',           v => {
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

### 致谢
感谢WechatY团队提供微信机器人SDK
<br>
感谢句子互动提供的iPad协议版token

