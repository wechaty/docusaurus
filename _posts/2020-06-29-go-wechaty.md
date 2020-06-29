---

 title: "go 语言可用的 wechaty 框架"
 date: 2020-09-18 13:30 +0800
 author: dchaofei
 header:
   teaser: /assets/2020/go-wechaty/2020-06-29-go-wechaty.png
---

<!-- markdownlint-disable -->

> Author: [@dchaofei](https://github.com/dchaofei) The author of go-wechaty 

> Code: [@go-wechaty](https://github.com/wechaty/go-wechaty)

# go-wechaty
go-wechaty 是 wechaty 多语言版本中的 golang 语言实现,目的是方便 go 语言开发者更容易的去使用 wechaty。

<!--more-->

# 目前状态
有人在群里问 go-wechaty 可以使用吗？其实 go-wechaty 已经可以用了，大家可以关注这两个仓库 [@go-wechaty](https://github.com/wechaty/go-wechaty) 和 [@go-wechaty-getting-started](https://github.com/wechaty/go-wechaty-getting-started).

# 如何快速运行 go-wechaty example
```bash
git clone https://github.com/wechaty/go-wechaty-getting-started.git

WECHATY_PUPPET_HOSTIE_TOKEN=your_token_at_here make bot
```

# 使用 go-wechaty 写的一个机器人
为了验证 go-wechaty 是否可用，在端午节最后一天的下午我写了一个机器人, 功能就是每天定时提醒群里人打卡, 如果不想收到提醒，回复 #打卡, 机器人就认为你今天已经打卡了。

![image1](/assets/2020/go-wechaty/2020-06-29-image1.jpeg)

项目地址: https://github.com/dchaofei/wechat-remind-bot

代码很粗糙(\捂脸️)，好在能用~~~
```text
支持命令如下:
- #以后不要提醒我
- #关闭打卡
- #帮助
- #开启打卡
- #提醒我
- #打卡
```

# 最后
期待更多的小伙伴加入 go-wechaty，一起优化 go-wechaty。
 
