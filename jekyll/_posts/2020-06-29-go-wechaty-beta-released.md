---
title: "Go Wechaty Beta Released!"
author: dchaofei
categories: announcement
tags:
  - go
  - news
  - featured
image: /assets/2020/go-wechaty/2020-06-29-go-wechaty.webp
---

go-wechaty 是 wechaty 多语言版本中的 golang 语言实现,目的是方便 go 语言开发者更容易的去使用 wechaty。

## 目前状态

有人在群里问 go-wechaty 可以使用吗？其实 go-wechaty 已经可以用了，大家可以关注这两个仓库 [@go-wechaty](https://github.com/wechaty/go-wechaty) 和 [@go-wechaty-getting-started](https://github.com/wechaty/go-wechaty-getting-started).

## 如何快速运行 go-wechaty example

```bash
git clone https://github.com/wechaty/go-wechaty-getting-started.git

WECHATY_PUPPET_SERVICE_TOKEN=your_token_at_here make bot
```

## 开发过程中遇到的一些问题及解决方案

### 循环依赖问题

参照 ts 的目录架构，在 go 这边会有循环依赖的问题，参照 “计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决”，所以我们加了一层 interface，让他们都去依赖 interface。

```go

├── wechaty
│   ├── accessory.go
│   ├── config
│   ├── event.go
│   ├── factory
│   ├── interface  // 接口文件夹
│   ├── option.go
│   ├── user
│   ├── wechaty.go
│   └── wechaty_test.go
```

### 解决获取、搜索联系人、群成员慢的问题

搜索操作其实遍历所有联系人，通过 goroutine+channel 实现了一个并发处理的功能

```go
async := helper.NewAsync(helper.DefaultWorkerNum)
  for _, id := range contactIds {
    id := id
    async.AddTask(func() (interface{}, error) {
      contact := c.Load(id)
      return contact, contact.Ready(false)
    })
  }

  var contacts []_interface.IContact
    for _, v := range async.Result() {
      if v.Err != nil {
        continue
    }
    contacts = append(contacts, v.Value.(_interface.IContact))
  }
```

### go 没有静态方法怎么办？

看 ts wecahty 里静态方法其实就是创建当前类的实例的，所以在 go 里是创建了对应实例的工厂类用来对标静态方法。

```go
type ContactFactory struct {
  _interface.IAccessory
  pool *sync.Map
}

// NewContactFactory ...
func NewContactFactory(accessory _interface.IAccessory) *ContactFactory {
  return &ContactFactory{
    IAccessory: accessory,
    pool:       &sync.Map{},
  }
}

// Load query param is string
func (c *ContactFactory) Load(id string) _interface.IContact {
  load, ok := c.pool.Load(id)
  if !ok {
   contact := user.NewContact(id, c.IAccessory)
   c.pool.Store(id, contact)
   return contact
  }
  switch load.(type) {
  case *user.ContactSelf:
    return load.(*user.ContactSelf).Contact
  default:
    return load.(*user.Contact)
  }
}
```

## 使用 go-wechaty 写的一个机器人

为了验证 go-wechaty 是否可用，在端午节最后一天的下午我写了一个机器人, 功能就是每天定时提醒群里人打卡, 如果不想收到提醒，回复 #打卡, 机器人就认为你今天已经打卡了。

![image1](/assets/2020/go-wechaty/2020-06-29-image1.jpeg)

项目地址: <https://github.com/dchaofei/wechat-remind-bot>

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

## 最后

期待更多的小伙伴加入 go-wechaty，一起优化 go-wechaty。

> Author: [@dchaofei](https://github.com/dchaofei) The author of go-wechaty
> Code: [@go-wechaty](https://github.com/wechaty/go-wechaty)
