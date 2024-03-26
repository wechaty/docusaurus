---
title: ContactSelf
---

机器人自己的信息将会封装一个 ContactSelf 类。这个类继承自 Contact。

## ContactSelf

> 备注：这个类继承自 Contact

**Kind**: global class

* ContactSelf
  * 实例
    * contactSelf.avatar\(\[file\]\) ⇒ `Promise <void | FileBox>`
    * contactSelf.qrcode\(\) ⇒ `Promise <string>`
    * contactSelf.signature\(signature\) ⇒ `Promise <string>`
    * contactSelf.name\(\[name\]\) ⇒ `Promise <void> | string`

### contactSelf.avatar\(\[file\]\) ⇒ `Promise <void | FileBox>`

设置机器人的头像。

**Kind**: `ContactSelf`的实例方法

| Param | Type |
| :--- | :--- |
| \[file\] | `FileBox` |

**示例** _\( 获取机器人的头像, 返回 {Promise&lt;FileBox&gt;}\)_

```javascript
bot.on('login', async user => {
  console.log(`user ${user} login`)
  const file = await user.avatar()
  const name = file.name
  await file.toFile(name, true)
  console.log(`Save bot avatar: ${user.name()} with avatar file: ${name}`)
})

### contactSelf.qrcode\(\) ⇒ `Promise <string>`

获取机器人的二维码。

**Kind**: `ContactSelf`的实例方法

#### 示例

```javascript
import { generate } from 'qrcode-terminal'
bot.on('login', async user => {
  console.log(`user ${user} login`)
  const qrcode = await user.qrcode()
  console.log(`Following is the bot qrcode!`)
  generate(qrcode, { small: true })
})
```

### contactSelf.signature\(signature\) ⇒ `Promise <void>`

修改机器人签名。

**Kind**: `ContactSelf`的实例方法

| Param | Description |
| :--- | :--- |
| signature | 机器人要修改的签名内容 |

#### 示例

```javascript
bot.on('login', async user => {
  console.log(`user ${user} login`)
  try {
    await user.signature(`Signature changed by wechaty on ${new Date()}`)
  } catch (e) {
    console.error('change signature failed', e)
  }
})
```

### contactSelf.name\(\[name\]\) ⇒ `Promise<void> | string`

修改机器人昵称。

**Kind**: `ContactSelf`的实例方法

| Param | Description |
| :--- | :--- |
| \[name\] | 机器人要修改的昵称内容 |

#### 示例

```javascript
bot.on('login', async user => {
  console.log(`user ${user} login`)
  const oldName = user.name() // get bot name
  try {
    await user.name(`${oldName}-${new Date().getTime()}`) // change bot name
  } catch (e) {
    console.error('change name failed', e)
  }
})
```
