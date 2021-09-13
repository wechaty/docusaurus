---
title: "Data Stream about Room-Join Event from Wechat to Wechaty"
author: su-chang
categories: tutorial
tags:
  - code
---

介绍wechaty中的room-join事件的产生，及其数据流的变化

## 问题

当 Bot 在群组中邀请 Contact<桔小秘> 进入群组时，从微信获取到的数据是如何转换为 room-join 事件的？

### Step-1 从微信接入数据（msg）

在用户登录时，padpro-manager 中的 onLogin() 方法会调用`initData()`方法来获取近期的微信消息（此消息不仅指微信聊天所发送的消息，还包括好友请求、群组操作、通知消息等，甚至当前所打开的聊天对话也会被当做微信消息传递过来），initData中以每500ms的频次，持续获取微信消息，存放在延时队列中并对得到的消息进行处理。

`syncMessage()`方法也会获取微信信息。这两个方法之所以能够接入微信消息，是由于分别依赖 `GrpcNewInit()` 和 `GrpcSyncMessage()`这两个方法想微信端发起消息请求。

请求到的消息 `msg` 具体格式如下，并对其进行简单解释。

```typescript
{
    MsgId: 1601421499, // 此条消息的唯一ID
    FromUserName: '22949941039@chatroom', // 消息的来源，即邀人进群来自22949941039@chatroom群组
    ToUserName: 'wxid_x01jgln69ath22', // 发起此操作的用户ID
    MsgType: 10002, // 消息类型
    // 此条消息的具体内容（xml格式）从消息中的汉字可以看出是一条邀请入群的通知信息
    Content:
    '22949941039@chatroom:\n<sysmsg type="delchatroommember">\n\t<delchatroommember>\n\t\t<plain><![CDATA[你邀请"桔小秘"加入了群聊  ]]></plain>\n\t\t<text><![CDATA[你邀请"桔小秘"加入了群聊  ]]></text>\n\t\t<link>\n\t\t\t<scene>invite</scene>\n\t\t\t<text><![CDATA[  撤销]]></text>\n\t\t\t<memberlist>\n\t\t\t\t<username><![CDATA[wxid_3xl8j2suau8b22]]></username>\n\t\t\t</memberlist>\n\t\t</link>\n\t</delchatroommember>\n</sysmsg>\n',
    Status: 4,
    ImgStatus: 1,
    ImgBuf: null,
    CreateTime: 1561637217, // 当前消息发生的时间
    MsgSource: '',
    PushContent: '',
    NewMsgId: 5899126111507662000 // ？
}
```

`msg` 是从微信接入的信息，为了提取该信息中的内容为 padpro 服务，还需要进一步进行处理。即调用`processMessages()` 方法对 `msg` 消息进行加工。

### Step-2 转化数据(msg => rawPayload)

在 `processMessages()` 方法中的根据 `msg` 中的消息类型进行处理，由于此条消息的类型为 `10002` 根据类型判断后，仅需要执行`convertMessage()` 方法，完成 `msg` 到 `rawPayload` 的转换。

当用户离线、未登录，或者掉线，此时 this.userId 不存在，会将此时到来的消息存放到 messageBuffer 中，当机器人上线之后，把之前存放到 messageBuffer 的消息再emit出来。

`convertMessage()`方法具体如下。

```typescript
export const convertMessage = (input: GrpcMessagePayload): PadproMessagePayload => {

  try {
    const convertedMessage = {
      content      : input.Content,
      data         : input.ImgBuf,
      fromUser     : input.FromUserName,
      messageId    : input.MsgId.toString(),
      messageSource: input.MsgSource,
      messageType  : input.MsgType,
      status       : input.Status,
      timestamp    : input.CreateTime,
      toUser       : input.ToUserName,
    }
    return convertedMessage
  } catch (e) {
    log.error(PRE, `Converting message failed, failed message: ${JSON.stringify(input)}`)
    throw e
  }
}
```

该方法将 `msg` 中对 padpro 有价值的信息进行提取，转换得到的 `rawPayload` 如下所示。

```typescript
{
    content: // 消息的具体内容，和 msg 中的一样
    '22949941039@chatroom:\n<sysmsg type="delchatroommember">\n\t<delchatroommember>\n\t\t<plain><![CDATA[你邀请"桔小秘"加入了群聊  ]]></plain>\n\t\t<text><![CDATA[你邀请"桔小秘"加入了群聊  ]]></text>\n\t\t<link>\n\t\t\t<scene>invite</scene>\n\t\t\t<text><![CDATA[  撤销]]></text>\n\t\t\t<memberlist>\n\t\t\t\t<username><![CDATA[wxid_3xl8j2suau8b22]]></username>\n\t\t\t</memberlist>\n\t\t</link>\n\t</delchatroommember>\n</sysmsg>\n',
    data: null,
    fromUser: '22949941039@chatroom', // 消息的来源，即 `msg` 中的 FromUserName
    messageId: '1601421499', // 消息ID，即`msg` 中的 MsgId
    messageSource: '',
    messageType: 10002, // 消息类型，即 `msg` 中的 MsgType
    status: 4, // 消息状态，即 `msg` 中的 Status
    timestamp: 1561637217, // 消息发生时的时间戳，即 `msg` 中的 CreateTime
    toUser: 'wxid_x01jgln69ath22' // 发起此操作的用户ID，即 `msg` 中的 ToUserName
}
```

### Step-3 发送转换后的数据

当数据转换完毕，发送 message 事件，padpro中监听到该事件后，调用onPadproMessage()方法

根据消息类型 `10002` 判断为 `PadproMessageType.Recalled` 具体执行以下两件事

1. 处理加入群组事件 `onPadproMessageRoomEventJoin`
2. 处理消息撤回事件 `onPadproMessageRecalled`

处理代码如下:

```typescript
switch (messageType) {
  ...
  case PadproMessageType.Recalled:

    await Promise.all([
      this.onPadproMessageRoomEventJoin(rawPayload),
      this.onPadproMessageRecalled(rawPayload),
    ])
    break
  ...
}
```

根据消息类型 `10000` 判断为 `PadproMessageType.Sys` 具体执行以下方法：

1. 处理好友请求事件 `onPadproMessageFriendshipEvent`
2. 处理加入群组事件 `onPadproMessageRoomEventJoin`
3. 处理离开群组事件 `onPadproMessageRoomEventLeave`
4. 处理变更群组名称事件 `onPadproMessageRoomEventTopic`

处理代码如下:

```typescript
switch (messageType) {
  ...
  case PadproMessageType.Sys:

    await Promise.all([
      this.onPadproMessageFriendshipEvent(rawPayload),
      this.onPadproMessageRoomEventJoin(rawPayload),
      this.onPadproMessageRoomEventLeave(rawPayload),
      this.onPadproMessageRoomEventTopic(rawPayload),
    ])
    break
  ...
}
```

以上两种消息类型都会执行 `onPadproMessageRoomEventJoin` 方法，由于本文讨论 room-join 事件，根据接入微信消息的类型10002，所以下面暂时只介绍此条路线的逻辑。

> 结论：room-join判断的依据是通过消息内容，做正则表达式匹配之后判断的。因为入群消息只可能通过两种消息类型推送，所以对这两种类型做了处理。

### Step-4 构造加入群组事件

由Step-3可知，根据类型判断，我们能将该消息判断为加入群组事件。这里我们主要讨论一下如何从处理后的消息中提取出加入群组所需的信息。先简单介绍一下构造room-join事件的流程。

1. 解析 `rawPayload` 提取 roomJoinEvent 事件
2. 从 roomJoinEvent 中获取 inviteeNameList，inviterName，roomId信息
3. 提取出 inviteeIdList 和 inviterId
4. 发布room-join事件 `-->wechaty`

对于从 `rawPayload` 中提取 roomJoinEvent 事件，具体代码如下：

```typescript
if (!isPayload(rawPayload)) {
    return null
  }

  const roomId = rawPayload.fromUser
  if (!isRoomId(roomId)) {
    return null
  }

  let content = rawPayload.content

  /**
   * when the message is a Recalled type, bot can undo the invitation
   */
  if (rawPayload.messageType === PadproMessageType.Recalled) {
    /**
     * content:
     * ```
     * 3453262102@chatroom:
     * <sysmsg type="delchatroommember">
     *   ...
     * </sysmsg>
     * ```
     */
    const tryXmlText = content.replace(/^[^\n]+\n/, '')
    // 定义 XML 解析格式
    interface XmlSchema {
      sysmsg: {
        $: {
          type: 'revokemsg' | 'delchatroommember' | 'multivoip',
        },
        delchatroommember?: {
          plain : string,
          text  : string,
        },
        revokemsg?: {
          replacemsg : string,
          msgid      : string,
          newmsgid   : string,
          session    : string,
        },
      }
    }
    // 解析 content 中的 XML 数据，提取有用信息
    const jsonPayload: XmlSchema = await xmlToJson(tryXmlText) // toJson(tryXmlText, { object: true }) as XmlSchema
    try {
      // 根据解析得到的类型，判断应提取的信息
      if (jsonPayload.sysmsg.$.type === 'delchatroommember') { // 本案例所执行的分支
        content = jsonPayload.sysmsg.delchatroommember!.plain
      } else if (jsonPayload.sysmsg.$.type === 'revokemsg') {
        content = jsonPayload.sysmsg.revokemsg!.replacemsg
      } else if (jsonPayload.sysmsg.$.type === 'multivoip') {
        return null
      } else {
        throw new Error('unknown jsonPayload sysmsg type: ' + jsonPayload.sysmsg.$.type)
      }
    } catch (e) {
      console.error(e)
      console.log('jsonPayload:', jsonPayload)
      throw e
    }
```

经过此代码块的处理，构造出 content 后，再根据中英文话术进行正则匹配，匹配成功后根据不同的邀请情况，提取所需信息。

加入群组的情景：

- Bot Invite Other
- Other Invite Bot
- Other Invite Other
- Other Invite Other Qrcode

正则匹配：目前根据以上四种场景，提供中文（ZH）和英文（EN）两种语言的话术匹配。

> 注意：若微信联系人入群的话术发生变化，或者所使用的系统语言非中文或者英文，则不会匹配成功，也就是不能发布 room-join 事件。

对于场景 Bot Invite Other：

1. 根据系统当前的语言来分割被邀请人，构成 inviteeNameList
2. 由于是 Bot 发起的邀请，因此 inviterName 设定为 YOU
3. 根据前面已知的 roomId 和以上两个信息构建 `PuppetRoomJoinEvent`事件

构造出的`PuppetRoomJoinEvent`事件方法如下：

```typescript
    // 构造 room-join 事件
    const other = matches[1]

    let inviteeNameList
    if (languageEn) {
      inviteeNameList = splitEnglishNameList(other)
    } else if (languageZh) {
      inviteeNameList = splitChineseNameList(other)
    } else {
      throw new Error('make typescript happy')
    }

    const inviterName: string | YOU = YOU
    const joinEvent: PuppetRoomJoinEvent = {
      inviteeNameList,
      inviterName,
      roomId,
    }
    return joinEvent
```

构造出的`PuppetRoomJoinEvent`事件数据如下：

```typescript
{
    inviteeNameList : 桔小秘
    inviterName : Symbol(You)
    roomId : 22949941039@chatroom
}
```

room-join 事件要发送给 wechaty，还需提取 wechaty 监听该事件所需的信息。具体数据如下，即将邀请人和被邀请人的id提取出来，也就是从Name到ID的转化。

此处对于被邀请人列表的处理需要注意，要将 inviteeName 转化为 inviteeID，需要执行操作 `this.roomMemberSearch(roomId, inviteeName)`

- 关于roomMemberSearch：

由于查找的 inviteeName 存在三种可能roomAlias，name，contactAlias。因此，需要对每种情况进行查询，并将结果汇总到一个数组中，进行去重操作。此处我们得到的  inviteeName 为一个数组。且数组中只有一个元素。

每个 inviteeName 的查询操作互不影响，可以使用Promise.all()方法进行并行处理。由于 roomMemberSearch 方法返回的是一个数组，因此需要将该结果进行 flatten 处理，从而返回一个 inviteeIDList。

若获取 inviteeIDList 出错，则会清除当前群组成员的缓存数据，并抛出异常。

这里引入 `promise-retry` 模块执行重试操作。retry中定义了重试的次数，最大最小超时时间，以及 factor 来控制速率的增长。

- factor: 3
- minTimeout: 10
- maxTimeout: 20 * 1000
- retries: 9

增加retry的动机：当入群发生的时候，群成员的数量是发生了变化的，这个变化的同步需要一点时间，有可能在查询进群的人，和邀请的人的时候，群成员数据并没有同步过来，如果没有同步完整，那么就查找不到这个群成员。找不到群成员之后，会把本地这个群的缓存数据删掉，然后重新查找，第二次查找的时候就会因为没有缓存数据而从微信的接口去获取，这样就能更新群数据，从而最后找到这个群成员的信息。

经过以上过程处理，得到的数据如下：

```typescript
{
    roomId : 22949941039@chatroom
    inviteeIdList: wxid_3xl8j2suau8b22
    inviterId: wxid_x01jgln69ath22
}
```

在提取以上数据的同时，由于对群组新增了成员，因此需要在缓存中清除该群组的数据（包括群组和群组成员）。

处理好这些之后，就可以向 wechaty 发送 room-join 事件了。以上完成了onPadproMessageRoomEventJoin()方法的调用。

由于room-join事件是可以撤回的，因此，该方法主要通过正则匹配，从 `rawPayload` 信息中的 content 判断该条消息是否为撤回消息。`TODO`

### Step-5 wechaty中监听room-join事件

在 wechaty 初始化时，对puppet监听了 room-join 事件，加载并将其转发给wechaty。先简单介绍下所执行的流程：

1. 获取room
2. 获取inviteeList，并同步每个联系人的数据
3. 获取inviter
4. 发布事件
    - 发布 room-join 事件`-->wechaty`
    - 发布 join 事件 `-->room`

具体代码如下：

```typescript
puppet.on('room-join', async (roomId, inviteeIdList, inviterId) => {
    const room = this.Room.load(roomId)
    await room.sync()

    const inviteeList = inviteeIdList.map(id => this.Contact.load(id))
    await Promise.all(inviteeList.map(c => c.ready()))

    const inviter = this.Contact.load(inviterId)
    await inviter.ready()
    this.emit('room-join', room, inviteeList, inviter)
    room.emit('join', inviteeList, inviter)
})
break
```

此时得到的数据如下所示：

```typescript
{
    inviteeList: Contact<桔小秘>
    inviter: Contact<a壁虎阿八>
    room: Room<Room-Join-Test>
}
```

### Step-6 监听 room-join 事件

#### Step-6.1 wechaty 中监听 room-join 事件

wechaty中的监听方法及声明：

```typescript
public on (event: 'room-join', listener: string | ((this: Wechaty, room: Room, inviteeList: Contact[], inviter: Contact) => void)) : this

public on (event: WechatyEventName, listener: string | ((...args: any[]) => any)): this
```

关键代码片段：

```typescript
if (typeof listener === 'function') {
  this.addListenerFunction(event, listener)
} else {
  this.addListenerModuleFile(event, listener)
}
```

#### Step-6.2 room 中监听 join 事件

room中的监听方法及声明

```sh
public on (event: 'join', listener: (this: Room, inviteeList: Contact[], inviter: Contact) => void) : this

public on (event: RoomEventName, listener: (...args: any[]) => any): this
```

> 作者: [Su Chang](https://github.com/su-chang)，Node.js全栈工程师
