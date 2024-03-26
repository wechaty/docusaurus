---
title: Friendship 
---

Wechaty机器人允许你通过其名为`Friendship`的全局类结交朋友。本节完全是关于`Friendship`类的。

[Examples of Friend-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/friend-bot.ts)

## 全局类Friendship

发送，接受好友请求的Class，有以下三种:

1. 发送好友请求
2. 在 \(friend event\) 中收到好友请求
3. 在 \(friend event\) 中确认好友请求

### 实例方法

| 实例方法 | 返回类型      |
|------------------|------------------|
| accept()         | `Promise (void)` |
| hello()          | `string`         |
| contact()        | `Contact`        |
| type()           | `FriendshipType`  |

### 静态方法

| 静态方法 | 返回类型      |
|----------------|------------------|
| add()          | `Promise (void)` |

### friendship.accept\(\) ⇒ `Promise <void>`

通过好友请求。

#### 示例

```javascript
const bot = new Wechaty()
bot.on('friendship', async friendship => {
  try {
    console.log(`收到好友请求`)
    switch (friendship.type()) {

    // 1. 新好友请求

    case bot.Friendship.Type.Receive:
      await friendship.accept()
      break

    // 2. 接受好友请求

    case bot.Friendship.Type.Confirm:
      console.log(`确认好友请求`)
      break
    }
  } catch (e) {
    console.error(e)
  }
})
.start()
```

### friendship.hello\(\) ⇒ `string`

获取对方发送好友请求的打招呼语。

**示例** _\(如内容是 \`ding\`, 接受好友请求\)_

```javascript
const bot = new Wechaty()
bot.on('friendship', async friendship => {
  try {
    console.log(`收到了 ${friendship.contact().name()}的好友请求`)
    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {
      await friendship.accept()
    }
  } catch (e) {
    console.error(e)
  }
}
.start()
```

### friendship.contact\(\) ⇒ `Contact`

获取发送好友请求的联系人。

#### 示例

```javascript
const bot = new Wechaty()
bot.on('friendship', friendship => {
  const contact = friendship.contact()
  const name = contact.name()
  console.log(`收到了${name}的好友请求`)
}
.start()
```

### friendship.type\(\) ⇒ `FriendshipType`

返回好友请求的类型。

> 备注：在这里是枚举:
>
> * FriendshipType.Unknown
> * FriendshipType.Confirm
> * FriendshipType.Receive
> * FriendshipType.Verify

### 示例  _\(如内容是 \`ding\`, 接受好友请求\)_

```javascript
const bot = new Wechaty()
bot.on('friendship', async friendship => {
  try {
    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {
      await friendship.accept()
    }
  } catch (e) {
    console.error(e)
  }
}
.start()
```

### Friendship.search\(phone\) ⇒ `Promise <Contact>`

该方法通过电话号码搜索联系人并获取联系人。
> 最佳实践：每分钟加1次，如果发送的过于频繁，你可能会被封号，每天能添加的好友数量是有上限的。

| Param | Type | Description |
| :--- | :--- | :--- |
| phone | `number` | 搜索电话号码 |

#### 示例

```javascript
const phone = '131xxx1234'
const searchContact = await bot.Friendship.search({
  phone,
})
```

### Friendship.add\(contact, options\) ⇒ `Promise <void>`

以 hello() 作为打招呼语向联系人发送一条好友请求。
> 最佳实践：每分钟加1次，如果发送的过于频繁，你可能会被封号，每天能添加的好友数量是有上限的。

| Param | Type | Description |
| :--- | :--- | :--- |
| contact | `Contact` | 需要发送好友请求的联系人 |
| options | `FriendshipAddOptions` | 发送好友请求的内容 |

#### 示例 \(Add搜索的contact\)

```javascript
await bot.Friendship.add(searchContact, { hello: '哈啰！我是 wechaty bot!' })
```

#### 示例 \(add room member\)

```javascript
const memberList = await room.memberList()
for (let i = 0; i < memberList.length; i++) {
  await bot.Friendship.add(member, {
    room: message.room(),
    hello: '哈啰！我是 wechaty bot!',
  })
}

```

#### 示例 \(add contact card\)

```javascript
if (message.type() === bot.Message.Type.Contact) {
  const contact = await message.toContact()
  const options = {
    contact: message.talker(),
    hello: '哈啰！我是 wechaty bot!',
  }
  if (message.room()) {
    options.room = message.room()
  }
  await bot.Friendship.add(contact, options)
}
```
