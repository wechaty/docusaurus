---
title: Event
sidebar_label: 'Event'
---

## Event

Wechaty is driven by events. A puppet should emit different kinds of events on different occasions. Puppet events are different from wechaty events, though most of them are the same. For example, a puppet event heartbeat will not

### Emit event

```Puppet``` abstract class is an event emitter, so a puppet implementation extending puppet can just use

```ts
this.emit('ExampleEvent', ExampleEventPayload)
```

### Event Types

```ts
interface PuppetEventListener {
  dirty         : PuppetDirtyListener
  dong          : PuppetDongListener
  error         : PuppetErrorListener
  friendship    : PuppetFriendshipListener
  heartbeat     : PuppetHeartbeatListener
  login         : PuppetLoginListener
  logout        : PuppetLogoutListener
  message       : PuppetMessageListener
  post          : PuppetPostListener
  ready         : PuppetReadyListener
  reset         : PuppetResetListener
  'room-invite' : PuppetRoomInviteListener
  'room-join'   : PuppetRoomJoinListener
  'room-leave'  : PuppetRoomLeaveListener
  'room-topic'  : PuppetRoomTopicListener
  scan          : PuppetScanListener
  start         : PuppetStartListener,
  stop          : PuppetStopListener,
}
```

### Events

#### Event: Dirty

Puppet should emit a dirty event when the payload of a class expires.

```ts
export interface EventDirtyPayload {
  payloadType : DirtyType,
  payloadId   : string,
}

export enum DirtyType {
  Unspecified = 0,
  Message     = 1,
  Contact     = 2,
  Room        = 3,
  RoomMember  = 4,
  Friendship  = 5,
  Post        = 6,  // Issue #2245 - https://github.com/wechaty/wechaty/issues/2245
}
```

Example: When the payload contact with id '123456' changes":

```ts
this.emit('dirty', {
  payloadType: DirtyType.Contact,
  payloadId: '123456
})
```

#### Event: Dong

Puppet should emit a dong event when receives the ding method called by wechaty.

```ts
export interface EventDongPayload {
  data?: string,
}
```

Example: Typical ding method implementation

```ts
export class PuppetExample extends Puppet {
  // ...other methods

  ding(data?: string) {
    this.emit('dong', data)
  }
}
```

#### Event: Error

Emit when an error occurs. Usually async error that not captured by try catch.

```ts
export type EventErrorPayload = {
  gerror? : string
}
```

#### Event: Friendship

Emit when receives friendship requests, friendship confirm, and verify message. The payload of this event is just the id, wechaty will get actual data with friendship payload method.

```ts
export interface EventFriendshipPayload {
  friendshipId: string,
}
```

#### Event: Heartbeat

Puppet should emit a heartbeat event every few seconds. If wechaty does not receive any event for a period time (default: 120 seconds), it will regard the puppet has stuck and try to reset.

```ts
export interface EventHeartbeatPayload {
  data?: string,
}
```

#### Event: Login

Puppet should emit a log in event when the bot logs in.

```ts
export interface EventLoginPayload {
  contactId: string,
}
```

#### Event: Logout

Puppet should emit a log out event when the bot logs out.

```ts
export interface EventLogoutPayload {
  contactId : string,
  data?     : string,
}
```

#### Event: Message

Puppet should emit a message event when receives a message.

```ts
export interface EventMessagePayload {
  messageId: string,
}
```

#### Event: Ready

Puppet should emit a ready event when it loads all the contact and room data.

```ts
export interface EventReadyPayload {
  data?: string,
}
```

#### Event: Reset

Puppet should emit a reset event when it resets. However wechaty will not do anything when receives reset event, this is not a must.

```ts
export interface EventResetPayload {
  data?: string,
}
```

#### Event: Room Invite

Puppet should emit a room invite event when receives room invitation. The payload of this event is just the id, wechaty will get actual data with room invitation payload method.

```ts
export interface EventRoomInvitePayload {
  roomInvitationId: string,
}
```

#### Event: Room Join

Puppet should emit a room join event when someone joins a with bot in itt, or the bot joins a new room.

```ts
export interface EventRoomJoinPayload {
  inviteeIdList : string[],
  inviterId     : string,
  roomId        : string,
  timestamp     : number,
}
```

#### Event: Room Leave

Puppet should emit a room leave event when someone leaves a room with bot in it, or the bot leaves a room, or a room with bot in it is dismissed.

```ts
export interface EventRoomLeavePayload {
  removeeIdList : string[],
  removerId     : string,
  roomId        : string,
  timestamp     : number,
}
```

#### Event: Room Topic

Puppet should emit a room topic event when the topic of a room with bot in it changes.

```ts
export interface EventRoomTopicPayload {
  changerId : string,
  newTopic  : string,
  oldTopic  : string,
  roomId    : string,
  timestamp : number,
}
```

#### Event: Scan

Puppet should emit a scan event when receiving a new qrcode, a qrcode expires, a qrcode is scanned or the login in confirmed.

```ts
export interface EventScanPayload {
  status: ScanStatus,

  qrcode? : string,
  data?   : string,
}

export enum ScanStatus {
  Unknown   = 0,
  Cancel    = 1,
  Waiting   = 2,
  Scanned   = 3,
  Confirmed = 4,
  Timeout   = 5,
}
```
