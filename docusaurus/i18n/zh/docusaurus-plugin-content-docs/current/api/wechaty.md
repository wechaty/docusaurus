---
title: Wechaty
---

一个Wechaty Bot代表着一个微信的客户端，他取决于你具体使用哪一个Puppet。

## Classes

[Wechaty](wechaty.md#Wechaty)

一个Wechaty Bot代表着一个微信的客户端，他取决于你具体使用哪一个Puppet。

* **web-wechat** - 当使用Puppet-Puppeteer 或 Puppet-wechat4u  
* **ipad-wechat** - 当使用Puppet-padchat
* **ios-wechat** - 当使用Puppet-ioscat

了解puppet及其用途，请访问以下链接-

* [What is a Puppet in Wechaty](https://github.com/wechaty/wechaty-getting-started/wiki/FAQ-EN#31-what-is-a-puppet-in-wechaty)

> 如果您想知道如何发送消息，请参阅 [Message](/zh/docs/api/wechaty.md#Message)  
> 如果您想了解如何获得联系，请参阅 [Contact](/zh/docs/api/wechaty.md#Contact)

**Kind**: global class

* [Wechaty](/zh/docs/api/wechaty.md#Wechaty)
  * [new Wechaty\(\[options\]\)](/zh/docs/api/wechaty.md#new_Wechaty_new)
  * _instance_
    * [.on\(event, listener\)](/zh/docs/api/wechaty.md#Wechaty+on) ⇒ [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)
    * [.start\(\)](/zh/docs/api//zh/docs/api/wechaty.md#Wechaty+start) ⇒ `Promise <void>`
    * [.stop\(\)](/zh/docs/api/wechaty.md#Wechaty+stop) ⇒ `Promise <void>`
    * [.logout\(\)](/zh/docs/api/wechaty.md#Wechaty+logout) ⇒ `Promise <void>`
    * [.logonoff\(\)](/zh/docs/api/wechaty.md#Wechaty+logonoff) ⇒ `boolean`
    * [.userSelf\(\)](/zh/docs/api/wechaty.md#Wechaty+userSelf) ⇒ `ContactSelf`
    * [.say\(textOrContactOrFileOrUrl\)](/zh/docs/api/wechaty.md#Wechaty+say) ⇒ `Promise <void>`
  * _static_
    * [.instance\(\[options\]\)](/zh/docs/api/current/api/wechaty.md#Wechaty.instance)

### new Wechaty\(\[options\]\)

创建一个 Wechaty 的实例。

| Param | Type | Default |
| :--- | :--- | :--- |
| \[options\] | [`WechatyOptions`](/zh/docs/api/api/wechaty.md#WechatyOptions) | `{}` |

**Example** _\(世界上最短的对话机器人代码\)_

```javascript
import { Wechaty }  from 'wechaty'
const bot = new Wechaty()
bot.on('scan',    (qrcode, status) => console.log(['https://api.qrserver.com/v1/create-qr-code/?data=',encodeURIComponent(qrcode),'&size=220x220&margin=20',].join('')))
bot.on('login',   user => console.log(`User ${user} logined`))
bot.on('message', message => console.log(`Message: ${message}`))
bot.start()
```

### wechaty.on\(event, listener\) ⇒ [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)

当机器人收到消息，会触发一个事件，一些简单的事件介绍如下：

* **scan**: 当机器人需要扫码登录的时候，会触发这个事件，当手机扫码登录后，机器人就可以登录进去了。
* **login**: 当机器人登陆成功后，会触发这个事件。
* **logout**: 当机器人退出登陆的时候，会触发到这个事件。
* **message**: 当有新消息的时候会触发这个事件。

更多在 [WechatyEventName](/zh/docs/api/wechaty.md#WechatyEventName)

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的实例方法
**Returns**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)

| Param | Type | Description |
| :--- | :--- | :--- |
| event | [`WechatyEventName`](/zh/docs/api/api/wechaty.md#WechatyEventName) | Emit WechatyEvent |
| listener | [`WechatyEventFunction`](/zh/docs/api/wechaty.md#WechatyEventFunction) | Depends on the WechatyEvent |

**示例** _\(Event:scan\)_

```javascript
bot.on('scan', (url, code) => {
  console.log(`[${code}] Scan ${url} to login.` )
})
```

**示例** _\(Event:login \)_

```javascript
bot.on('login', (user) => {
  console.log(`user ${user} login`)
})
```

**示例** _\(Event:logout \)_

```javascript
bot.on('logout', (user) => {
  console.log(`user ${user} logout`)
})
```

**示例** _\(Event:message \)_

```javascript
wechaty.on('message', (message) => {
  console.log(`message ${message} received`)
})
```

**示例** _\(Event:friendship \)_

```javascript
bot.on('friendship', async (friendship) => {
  const contact = friendship.contact()
  if (friendship.type() === bot.Friendship.Type.Receive) { // 1.接收新友谊请求
    let result = await friendship.accept()
    if (result) {
      console.log(`Request from ${contact.name()} is accept succesfully!`)
    } else {
      console.log(`Request from ${contact.name()} failed to accept!`)
    }
  } else if (friendship.type() === bot.Friendship.Type.Confirm) { // 2.确认友谊请求
    console.log(`New friendship confirmed with ${contact.name()}`)
  }
})
```

**示例** _\(Event:room-join \)_

```javascript
bot.on('room-join', async (room, inviteeList, inviter) => {
  const nameList = inviteeList.map(c => c.name()).join(',')
  console.log(`Room ${await room.topic()} got new member ${nameList}, invited by ${inviter}`)
})
```

**示例** _\(Event:room-leave \)_

```javascript
bot.on('room-leave', async (room, leaverList, remover) => {
  const nameList = leaverList.map(c => c.name()).join(',')
  console.log(`Room ${await room.topic()} lost member ${nameList}, the remover is: ${remover}`)
})
```

**示例** _\(Event:room-topic \)_

```javascript
bot.on('room-topic', async (room, topic, oldTopic, changer) => {
  console.log(`Room ${await room.topic()} topic changed from ${oldTopic} to ${topic} by ${changer.name()}`)
})
```

**示例** _\(Event:room-invite \)_

```javascript
bot.on('room-invite', async roomInvitation => {
  try {
    console.log(`received room-invite event.`)
    await roomInvitation.accept()
  } catch (e) {
    console.error(e)
  }
}
```

**示例** _\(Event:error \)_

```javascript
bot.on('error', (error) => {
  console.error(error)
})
```

### wechaty.start\(\) ⇒ `Promise <void>`

启动机器人
> 备注：机器人所有的操作必须在这个函数执行完成之后。

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的实例方法

#### 示例

```javascript
await bot.start()
```

### wechaty.stop\(\) ⇒ `Promise <void>`

停止机器人

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的实例方法

#### 示例

```javascript
await bot.stop()
```

### wechaty.logout\(\) ⇒ `Promise <void>`

退出机器人

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的实例方法

#### 示例

```javascript
await bot.logout()
```

### wechaty.logonoff\(\) ⇒ `boolean`

获取机器人logon/logoff 的状态

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的实例方法

#### 示例

```javascript
if (bot.logonoff()) {
  console.log('Bot logined')
} else {
  console.log('Bot not logined')
}
```

### wechaty.userSelf\(\) ⇒ `ContactSelf`

获取当前机器人的所有信息

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的实例方法  

#### 示例

```javascript
const contact = bot.userSelf()
console.log(`Bot is ${contact.name()}`)
```

### wechaty.say\(text或Contact或File或Url\) ⇒ `Promise <void>`

机器人自己给自己发消息。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的实例方法

| Param | Type | Description |
| :--- | :--- | :--- |
| textOrContactOrFileOrUrl | `string` \| `Contact` \| `FileBox` \| `UrlLink` | 发送文本、联系人名片或者文件给机器人自己。可以使用 [FileBox](https://www.npmjs.com/package/file-box) 来发送文件 |

#### 示例

```javascript
const bot = new Wechaty()
await bot.start()
// 登录后

// 1. 机器人为自己发消息
await bot.say('hello!')

// 2. 机器人为自己发contact
const contact = bot.Contact.load('contactId')
await bot.say(contact)

// 3. 机器人为自己发照片url
import { FileBox }  from 'file-box'
const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
await bot.say(fileBox)

// 4. 机器人为自己发文件
import { FileBox }  from 'file-box'
const fileBox = FileBox.fromFile('/tmp/text.jpg')
await bot.say(fileBox)

// 5. 机器人为自己发链接
const linkPayload = new UrlLink({
  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',
  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',
  title       : 'Welcome to Wechaty',
  url         : 'https://github.com/wechaty/wechaty',
})
await bot.say(linkPayload)
```

### Wechaty.instance\(\[options\]\)

获取Wechaty的全局实例。

**Kind**: [`Wechaty`](/zh/docs/api/wechaty.md#Wechaty)的静态方法

| Param | Type | Default |
| :--- | :--- | :--- |
| \[options\] | [`WechatyOptions`](/zh/docs/api/wechaty.md#WechatyOptions) | `{}` |

#### 示例

```javascript
import { Wechaty }  from 'wechaty'

Wechaty.instance() // Global instance
.on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
.on('login',       user => console.log(`User ${user} logined`))
.on('message',  message => console.log(`Message: ${message}`))
.start()
```

## PuppetName

Wechaty中的Puppet是一个用于实现协议插件的抽象类。插件是帮助微信控制微信的组件\(这就是我们称之为puppet的原因\). 这些插件被命名为PuppetXXX，例如：

* [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer)
* [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat)

**Kind**: global typedef  
**Properties**

| 名字 | 类型 | 描述 |
| :--- | :--- | :--- |
| wechat4u | `string` | 默认的puppet，使用 [wechat4u](https://github.com/nodeWechat/wechat4u) 来控制 [WeChat Web API](https://wx.qq.com/) |
| padchat | `string` | 使用WebSocket 协议链接一个协议服务器，来控制iPad 微信。 |
| puppeteer | `string` | 使用 [google puppeteer](https://github.com/GoogleChrome/puppeteer) 来控制 [WeChat Web API](https://wx.qq.com/) |
| mock | `string` | 为单元测试提供模拟调用的Puppet |

## WechatyOptions

创建 Wechaty 实例的可选参数类型。

**Kind**: global typedef  
**Properties**

| 名字 | 类型 | 描述 |
| :--- | :--- | :--- |
| profile | `string` | Wechaty 机器人的名称. 当你按照下面的方式设置的时候： `new Wechaty({profile: 'wechatyName'})` 他会自动生成一个叫做`wechatyName.memory-card.json`的文件 。这个文件会存储机器人的登陆信息。如果这个文件有效，启动wechaty的时候，你不需要扫码登陆就能自动登陆机器人\(只对wechaty-puppet-padchat有效\)。 这个名字在启动机器人的时候，是可以通过环境变量WECHATY_NAME设置的，如：`WECHATY_NAME="wechatyName" node bot.jsWechaty` [更多](https://github.com/wechaty/wechaty/issues/2049) |
| puppet | `PuppetModuleName` \| `Puppet` | 使用puppet名称指定相关puppet或者直接传入puppet实例作为Wechaty底层插件， 了解更多puppet信息 |
| puppetOptions | `Partial.` | Puppet TOKEN |
| ioToken | `string` | Io TOKEN |

## WechatyEventName

Wechaty 事件的类型

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| error | `string` | 当机器人内部出错的时候会触发error 事件。 |
| login | `string` | 当机器人成功登陆后，会触发login 事件，并会在事件中传递当前登陆机器人的信息。 |
| logout | `string` | 当机器人检测到登出的时候，会触发logout 事件，并会在事件中传递机器人的信息。 |
| heartbeat | `string` | 获取机器人的心跳。 |
| friendship | `string` | 当有人给机器人发好友请求的时候会触发这个事件。 |
| message | `string` | 当机器人收到消息的时候会触发这个事件。 |
| ready | `string` | 当所有数据加载完成后，会触发这个事件。在wechaty-puppet-padchat 中，它意味着已经加载完成Contact 和Room 的信息。 |
| room-join | `string` | 当有人进入微信群的时候会触发这个事件。机器人主动进入某个微信群，t那个样会触发这个事件。 |
| room-topic | `string` | 当有人修改群名称的时候会触发这个事件。 |
| room-leave | `string` | 当机器人把群里某个用户移出群聊的时候会触发这个时间。用户主动退群是无法检测到的。 |
| room-invite | `string` | 当收到群邀请的时候，会触发这个事件。具体请RoomInvitation |
| scan | `string` | 当机器人需要扫码登陆的时候会触发这个事件。 建议你安装 qrcode-terminal\(运行 npm install qrcode-terminal\)这个包，这样你可以在命令行中直接看到二维码。 |

## WechatyEventFunction

Wechaty 事件的函数

**Kind**: global typedef  
**Properties**

| 名字 | 类型 | 描述 |
| :--- | :--- | :--- |
| error | `function` | \(this: Wechaty, error: Error\) =&gt; void callback function |
| login | `function` | \(this: Wechaty, user: ContactSelf\)=&gt; void |
| logout | `function` | \(this: Wechaty, user: ContactSelf\) =&gt; void |
| scan | `function` | \(this: Wechaty, url: string, code: number\) =&gt; void |
| heartbeat | `function` | \(this: Wechaty, data: any\) =&gt; void |
| friendship | `function` | \(this: Wechaty, friendship: Friendship\) =&gt; void |
| message | `function` | \(this: Wechaty, message: Message\) =&gt; void |
| ready | `function` | \(this: Wechaty\) =&gt; void |
| room-join | `function` | \(this: Wechaty, room: Room, inviteeList: Contact\[\],  inviter: Contact\) =&gt; void |
| room-topic | `function` | \(this: Wechaty, room: Room, newTopic: string, oldTopic: string, changer: Contact\) =&gt; void |
| room-leave | `function` | \(this: Wechaty, room: Room, leaverList: Contact\[\]\) =&gt; void |
| room-invite | `function` | \(this: Wechaty, room: Room, leaverList: Contact\[\]\) =&gt; void |
