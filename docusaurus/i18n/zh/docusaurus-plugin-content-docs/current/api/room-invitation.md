---
title: Room Invitation
---

## Room Invitation

自动通过入群邀请。

| 实例方法 | 返回类型 |
|----------------|---------------|
| accept\(\)     | `Promise`   |
| inviter\(\)    | `Promise`(Contact)   |
| topic\(\)    | `Promise` (String)   |
| date\(\)    | `Promise` (Date)   |
| age\(\)    | `Promise` (Number)   |

### roomInvitation.accept\(\) ⇒ `Promise <void>`

自动通过入群邀请。

#### 示例

```javascript
const bot = new Wechaty()
bot.on('room-invite', async roomInvitation => {
  try {
    console.log(`received room-invite event.`)
    await roomInvitation.accept()
  } catch (e) {
    console.error(e)
  }
})
.start()
```

### roomInvitation.inviter\(\) ⇒ `Promise <Contact>`

获取发送入群邀请的联系人。

#### 示例

```javascript
const bot = new Wechaty()
bot.on('room-invite', async roomInvitation => {
  const inviter = await roomInvitation.inviter()
  const name = inviter.name()
  console.log(`received room invitation event from ${name}`)
})
.start()
```

### roomInvitation.topic\(\) ⇒ `Promise <string>`

获取需要进的群的群名称。

#### 示例

```javascript
const bot = new Wechaty()
bot.on('room-invite', async roomInvitation => {
  const topic = await roomInvitation.topic()
  console.log(`received room invitation event from room ${topic}`)
})
.start()
```

### roomInvitation.date\(\) ⇒ `Promise <Date>`

获取发送入群邀请的时间。

### roomInvitation.age\(\) ⇒ `Promise <number>`

获取入群邀请的时间间隔。
例如：入群邀请的发送时间在`8:43:15`, 当我们在Wechaty 上收到这个信息的时间是`8:43:01`, 那么age\(\)的值为： `8:43:15 - 8:43:01 = 14 (seconds)`