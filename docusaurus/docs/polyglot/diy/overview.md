---
slug: /polyglot/diy/
title: 'Polyglot: DIY'
---

[![DIY Wechaty](https://img.shields.io/badge/Wechaty-DIY-brightgreen)](overview.md)

Wechaty is mainly built on TypeScript,  it is not very hard to translate the TypeScript(TS) to other programming languages [wechaty](https://github.com/wechaty/wechaty) has only 3,000 lines of the TS code, that are well designed and de-coupled by the [wechaty-puppet](https://github.com/wechaty/wechaty-puppet/) abstraction. So after translation of those 3,000 lines of TypeScript code, Wechaty can be used in any programming language.

Wechaty already has an ecosystem in TypeScript, so you will not have to implement everything in other languages, especially since, in Feb 2020, Wechaty finished the [wechaty_grpc](https://github.com/wechaty/grpc) service abstracting module with the [wechaty-puppet-service](https://github.com/wechaty/wechaty-puppet-service) implementation.

## Architecture

The following diagram shows out that we can reuse almost everything in TypeScript, and what we need to do is only the block located at the top right of the diagram: `Wechaty (Polyglot)`.
![Polyglot Architecture](../../static/img/polyglot-architecure.webp "Polyglot Architecture")

## Check-list

- TS: TypeScript
- SLOC: Source Lines Of Code

### Wechaty Internal Modules

1. **Class Wechaty @wj-mCat** TS SLOC(1160): <https://github.com/wechaty/wechaty/blob/master/src/wechaty.ts>
1. **Class Contact** TS SLOC(804): <https://github.com/wechaty/wechaty/blob/master/src/user/contact.ts>
1. **Class ContactSelf** TS SLOC(199): <https://github.com/wechaty/wechaty/blob/master/src/user/contact-self.ts>
1. **Class Message** TS SLOC(1054): <https://github.com/wechaty/wechaty/blob/master/src/user/message.ts>
1. **Class Room** TS SLOC(1194): <https://github.com/wechaty/wechaty/blob/master/src/user/room.ts>
1. **Class Image @wj-mCat** TS SLOC(60): <https://github.com/wechaty/wechaty/blob/master/src/user/image.ts>
1. **Class Accessory @huan** TS SLOC(179): <https://github.com/wechaty/wechaty/blob/master/src/accessory.ts>
1. **Class Config @wj-mCat**  TS SLOC(187): <https://github.com/wechaty/wechaty/blob/master/src/config.ts>
1. **Class Favorite** TS SLOC(52): <https://github.com/wechaty/wechaty/blob/master/src/user/favorite.ts>
1. **Class Friendship** TS SLOC(417): <https://github.com/wechaty/wechaty/blob/master/src/user/friendship.ts>
1. **Class MiniProgram** TS SLOC(70): <https://github.com/wechaty/wechaty/blob/master/src/user/mini-program.ts>
1. **Class RoomInvitation** TS SLOC(317): <https://github.com/wechaty/wechaty/blob/master/src/user/room-invitation.ts>
1. **Class Tag** TS SLOC(190): <https://github.com/wechaty/wechaty/blob/master/src/user/tag.ts>
1. **Class UrlLink** TS SLOC(107): <https://github.com/wechaty/wechaty/blob/master/src/user/url-link.ts>

### Wechaty External Modules

Listed below are External modules of Wechaty-

1. **Class FileBox** TS SLOC(638): <https://github.com/huan/file-box/blob/master/src/file-box.ts>
1. **Class MemoryCard** TS SLOC(376): <https://github.com/huan/memory-card/blob/master/src/memory-card.ts>
1. **Class WechatyPuppet** TS SLOC(1115): <https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts>  
1. **Class WechatyPuppetHostie** TS SLOC(909): <https://github.com/wechaty/wechaty-puppet-hostie/blob/master/src/grpc/puppet-client.ts>

## History

- [Multi Language Wechaty Beta Release Announcement, Huan, Jun 19, 2020](https://wechaty.js.org/2020/06/19/multi-language-wechaty-beta-release/)
- [Multi-language Wechaty Meeting: Mocking & Code Quality, wj-Mcat, Jun 5, 2020](https://wechaty.js.org/2020/07/05/multilanguage-meeting-notes/)
- Wechaty is All You Need: Python, Go, and Java Translation Project [wechaty/wechaty#1927](https://github.com/wechaty/wechaty/discussions/1927)
- Python Wechaty: [wechaty/python-wechaty#13](https://github.com/wechaty/python-wechaty/issues/13)
- Go Wechaty: [wechaty/go-wechaty#1](https://github.com/wechaty/go-wechaty/issues/1)
- Java Wechaty: [wechaty/java-wechaty#1](https://github.com/wechaty/java-wechaty/issues/1)
