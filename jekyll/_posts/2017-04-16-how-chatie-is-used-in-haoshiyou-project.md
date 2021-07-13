---
title: '用Chatie实现微信机器人商业逻辑之【好室友】群管理篇'
author: xinbenlv
categories: project
tags:
  - code
  - startup
  - featured
  - real-estate
---

为了帮助新来硅谷的朋友找室友和租房，我们在所在地区组建了若干微信群。
我们对这个项目的基本理念是简单专注，用完即走。

我们的应用场景是这样的：我们一共有数个微信群，按照硅谷旧金山湾区的几个租房区域进行分群，
每个微信群常年满上限500人。我们要求入群的朋友修改群昵称，
我们每周要按照一定的规则将不按照要求修改群昵称的群友和最早入群的人踢出，以实现群员的流动，
确保群里都是最近有租房需求的朋友而不是许多租房群常见的僵尸群情况。

另外，我们不允许发布任何与租房无关的信息：广告、二手交易、机票信息等常见扩散信息都被视为禁止类型。
在群管理员志愿者们的共同努力下，我们群在湾区朋友中间以简洁活跃赢得了相当不错的口碑，
被常常被湾区的群友介绍给自己新来湾区的朋友。也是因为我们群初具规模，
吸引了各种希望混入大群散发广告的各种运营号、广告号和宣传号。
经常有人进入我们的微信群发布广告消息和无关消息，
我们对于这种情况会予以警告直至踢出群并加入黑名单。

在使用机器人之前，我们的管理员志愿者们，每天需要手动登录手机，接受好友请求，
然后根据相应的规则对群进行管理。由于加群请求巨大，群多而复杂，
因此还经常要首先回答用户的问题再根据用户的意向分配进入相应的群。
删除群好友的事儿也需要花费比较长的时间。

在得知Chatie之后，我们立即使用Chatie的接口开发了机器人来进行群的管理工作，
大大简化了管理员志愿者们的工作流程和负担。我们这里介绍一下我们的业务逻辑模块。

## 逻辑模块

### 1. 自动接受好友请求

我们会自动接受所有用户加好友的请求，并发送问候消息，我们会在问候消息中解释我们群的
群规和分区规划，以及如何回复意向进行加群。

```js
exports = module.exports = async function onFriend(contact, request) {
  // ...
  if (request) {  // 1. request to be friend from new contact
    await request.accept();
    await contact.say(greetingsMsg);
  }
  // ...
}
```

### 2.关键字确认用户的加群意向

我们利用关键字来确认用户的加群意向，在确认了用户想加哪个群之后，会先确认群是不是满了，
如果满了会先进行清理，然后在加群。

```js
let maybeAddToHsyGroups = async function(m:Message):Promise<Boolean> {
  const contact = m.from();
  const content = m.content();
  const room = m.room();
  let groupType:HsyGroupEnum;
  // only to me or entry group
  if (WechatyApiX.isTalkingToMePrivately(m) || /好室友.*入口群/.test(m.room().topic())) {
    let groupToAdd:HsyGroupEnum = null;
    if (/加群/.test(content)) {
      await m.say(greetingsMsg);
      return;
    } else {
      groupToAdd = HsyUtil.getAddGroupIndentFromMessage(content);
    }
    if (groupToAdd != HsyGroupEnum.None) { // found no valid group
      // ...
      let keyRoom = await HsyUtil.findHsyRoomByEnum(groupToAdd);
      if (keyRoom) {
        await maybeDownsizeKeyRoom(keyRoom, contact);
        await keyRoom.add(contact);
      }
    }
    return true;
  }
  return false;
};

// inside of HsyUtil
public static getAddGroupIndentFromMessage = function(
    content:string):HsyGroupEnum {
  if (/南湾西|Mountain View|mtv|sv|Sunnyvale|Palo Alto|Stanford|Facebook|Google|Menlo Park/.test(content)) {
    return HsyGroupEnum.SouthBayEast;
  } else if (/南湾东|Milpitas|San Jose|Santa Clara|SJ|Campbell|Los Gatos/.test(content)) {
    return HsyGroupEnum.SouthBayWest;
  } else if (/东湾|奥克兰|伯克利|Berkeley|Fremont|Hayward|Newark/.test(content)) {
    return HsyGroupEnum.EastBay;
  } else if (...) {
    ...
  } else return HsyGroupEnum.None;
}
```

### 3. 基于群昵称和入群顺序进行群满自动踢人

我们会检查每个管理的群，如果用户人数超过一个阈值（例如450人），就会触发削减群人数的函数。
首先我们会寻找没有按照要求修改群昵称的群友，跳过管理员和群主以及机器人自己，
从中间找出若干人（例如20个人），然后在从最早入群的用户中选择若干人（例如10人），作为
踢出列表。我们会在群里宣布我们即将踢出人，以及踢人的原因（未修改区昵称和最早入群），
然后私下告诉每个被踢的人具体被踢的原因，之后执行踢人。

```js
let maybeDownsizeKeyRoom = async function(keyRoom: Room, c:Contact) {
  if (/老友/.test(keyRoom.topic())) return;
  if (keyRoom.memberList().length >= groupDownSizeTriggerThreshold) { // triggering
    await keyRoom.say(hsyGroupClearMsg);
    for (let i = 0; i < keyRoom.memberList().length - newComerSize/* never newComer */; i++) {
      let c:Contact = cList[i];
      if (c.self()) continue; // never does anything with haoshiyou-admin itself.
      let groupNickName = WechatyApiX.getGroupNickNameFromContact(c);
      if (/^(管|介|群主)-/.test(groupNickName) || /管理员/.test(c.alias())) {
        // pass, never remove
      } else if (/^(招|求)租/.test(groupNickName)) {
        // good format, but need to rotate
        potentialRotationList.push(c);
      } else {
        noGroupNickNames.push(c);
      }
      if (noGroupNickNames.length >= shouldRemoveSize) {
        shouldRemoveList = noGroupNickNames;
        break;
      } else if (noGroupNickNames.length + potentialRotationList.length >= shouldRemoveSize) {
        shouldRemoveList = noGroupNickNames
            .concat(potentialRotationList.slice(0,
                shouldRemoveSize - noGroupNickNames.length));
        break;
      }
    }
    if (shouldRemoveList.length > 0) {
      await c.say(`群里有点儿满，我先清一下人哦`);
    }
    await Promise.all(shouldRemoveList.map(async (c:Contact) => {
      let msg = (`亲，我们要清人了哦`);
      await c.say(msg);
      await keyRoom.del(c);
    }));
  }
};
```

### 4.按照管理员的发言来加黑名单

我们目前在微信里面加黑名单的流程是，首席先如果用户在群里发了什么无关信息或者长期没有修改群昵称，
我们挂管理员可以在群里发消息说“@某用户，请不要发无关消息”，或者“@某用户，请修改群昵称”
这样的口令将首先被机器人重复一遍“感谢管理员张三，@某用户请不要发无关消息”，以增加管理员在
群里发言的威信，同时机器人会私信管理员询问是否要把该用户加入黑名单并提出，如果管理员
回复确认，就会启动加黑名单和踢人逻辑。目前，我们管理黑名单的方式是在机器人的微信里把某位
好友的备注加上`#黑名单`。

逻辑如下

```js
let maybeBlacklistUser = async function(m: Message):Promise<Boolean> {
  if (! await HsyUtil.isHsyAdmin(m.from())) {
    return false; // Not an admin
  }
  let admin = m.from();
  if(WechatyApiX.isTalkingToMePrivately(m)
      && /加黑名单/.test(m.content())) {
    // find the last one being marked blacklist by this admin
    let blackListObj = GLOBAL_blackListCandidates[admin.alias()];

    // not able to find a blacklist candidate.
    if (blackListObj === undefined || blackListObj === null) return false;
    if (blackListObj !== null && blackListObj !== undefined) {
        let indexOfCandidate = m.content().slice(4); //"加黑名单1"取编号
        let contactToBlacklist:Contact = blackListObj.candidates[indexOfCandidate];
        await HsyUtil.addToBlacklist(contactToBlacklist);
        let teamRoom = await HsyUtil.findHsyBigTeamRoom();
        await HsyUtil.kickFromAllHsyGroups(contactToBlacklist);
        await admin.say(`搞定!`);
    }
    return true;
  } else if (m.room() !== null &&
      /好室友/.test(m.room().topic()) &&
      /无关|修改群昵称/.test(m.content()) &&
      /^@/.test(m.content())) {
    let mentionName = m.content().slice(1)/*ignoring@*/
        .replace(" "/*Space Char in Chinese*/, " ").split(" ")[0];
    let foundUsers = findMemberFromGroup(m.room(), new RegExp(mentionName));
    if (foundUsers.length > 0) {
      // Repeat the warning from the admin
      await m.room().say(`感谢管理员@${m.from().name()}\n\n${m.content()}`);
      let buffer = `管理员 ${m.from().name()}，你好，你刚才在${m.room().topic()}这个群` + `里警告了用户@${mentionName}，符合这个名称的群内的用户有：\n`;
      for (let i = 0; i < foundUsers.length; i++) {
        let candidate = foundUsers[i];
        buffer += `${i}. 昵称:${candidate.name()}, 备注:${candidate.alias()}, ` +
            `群昵称: ${WechatyApiX.getGroupNickNameFromContact(candidate)} \n`;
      }
      buffer += `请问要不要把这个用户加黑名单？五分钟内回复 "加黑名单[数字编号]"\n`;
      buffer += `例如 "加黑名单0"，将会把${foundUsers[1]} ` +
          `加入黑名单:${WechatyApiX.contactToStringLong(foundUsers[0])}`;
      await m.from().say(buffer);
      GLOBAL_blackListCandidates[m.from().alias()] = {
        time: Date.now(),
        candidates: foundUsers
      };
    } else {
      await admin.say(`管理员您好，您刚才在"${m.room().topic()}"群里要求踢出的用户"${mentionName}" `+
          `我们没有找到，请在确认该用户仍然在该群里，并且请在同一个群尝试at他的昵称而不是群昵称。`);
    }
    return true;
  }
  return false;
};
```

## 后记

在本篇里我们介绍了我们如何应用Chatie实现【好室友】系列租房群的一系列日常管理任务，大大
简化了管理员的工作量，也提高和改善了用户在群里的体验。
我们将在未来的文章中介绍我们如何利用Chatie的可编程接口来实现
微信和我们开发的网站和APP实现数据和信息互通。

撰写本文的时候，本文所描述的好室友机器人（haoshiyou-bot）代码处在
[这里](https://github.com/xinbenlv/haoshiyou-bot/tree/5f4dc109fafb5bf22996e53560e5a2ee51b4da89)
