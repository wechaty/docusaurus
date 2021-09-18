---
slug: /polyglot/diy/
title: 'Polyglot: DIY'
---

[![DIY Wechaty](https://img.shields.io/badge/Wechaty-DIY-brightgreen)](overview.md)

:::note

Create your own Wechaty Puppet Provider

:::

We built Wechaty in TypeScript in the early days, it is not hard to translate the TypeScript(TS) to Python, Go, and Java languages because [wechaty](https://github.com/wechaty/wechaty) has only 3,000 lines of the TS code, they are well designed and de-coupled by the [wechaty-puppet](https://github.com/wechaty/wechaty-puppet/) abstraction. So after we have translated those 3,000 lines of TypeScript code, we will almost be done.

As we have already an ecosystem of Wechaty in TypeScript, so we will not have to implement everything in other languages, especially, in Feb 2020, we have finished the [wechaty_grpc](https://github.com/wechaty/grpc) service abstracting module with the [wechaty-puppet-service](https://github.com/wechaty/wechaty-puppet-service) implementation.

## Architecture

The following diagram shows out that we can reuse almost everything in TypeScript, and what we need to do is only the block located at the top right of the diagram: `Wechaty (Polyglot)`.

```ascii
  +--------------------------+ +--------------------------+
  |                          | |                          |
  |   Wechaty (TypeScript)   | |    Wechaty(Polyglot)     |
  |                          | |  Python, Go, Java, etc.  |
  +--------------------------+ +--------------------------+

  +-------------------------------------------------------+
  |                 Wechaty Puppet Servuce                |
  |                                                       |
  |                (wechaty-puppet-service)               |
  +-------------------------------------------------------+

+---------------------  wechaty_grpc  ----------------------+

  +-------------------------------------------------------+
  |                Wechaty Puppet Abstract                |
  |                                                       |
  |                   (wechaty-puppet)                    |
  +-------------------------------------------------------+

  +--------------------------+ +--------------------------+
  |      Pad Protocol        | |      Web Protocol        |
  |                          | |                          |
  | wechaty-puppet-padlocal  | |  (wechaty-puppet-wechat) |
  +--------------------------+ +--------------------------+
  +--------------------------+ +--------------------------+
  |     Friday Protocol      | |       Mac Protocol       |
  |                          | |                          |
  |  (wechaty-puppet-frida)  | |   (wechaty-puppet-mac)   |
  +--------------------------+ +--------------------------+
```

> Chart made by [AsciiFlow](http://asciiflow.com/)

## Check-list

- TS: TypeScript
- SLOC: Source Lines Of Code

### Wechaty Internal Modules

1. [ ] Class Wechaty @wj-mCat
    - TS SLOC(1160): <https://github.com/wechaty/wechaty/blob/main/src/wechaty.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Contact
    - TS SLOC(804): <https://github.com/wechaty/wechaty/blob/main/src/user/contact.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class ContactSelf
    - TS SLOC(199): <https://github.com/wechaty/wechaty/blob/main/src/user/contact-self.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Message
    - TS SLOC(1054): <https://github.com/wechaty/wechaty/blob/main/src/user/message.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Room
    - TS SLOC(1194): <https://github.com/wechaty/wechaty/blob/main/src/user/room.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Image @wj-mCat
    - TS SLOC(60): <https://github.com/wechaty/wechaty/blob/main/src/user/image.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Accessory @huan
    - TS SLOC(179): <https://github.com/wechaty/wechaty/blob/main/src/accessory.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Config @wj-mCat
    - TS SLOC(187): <https://github.com/wechaty/wechaty/blob/main/src/config.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Favorite
    - TS SLOC(52): <https://github.com/wechaty/wechaty/blob/main/src/user/favorite.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Friendship
    - TS SLOC(417): <https://github.com/wechaty/wechaty/blob/main/src/user/friendship.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class MiniProgram
    - TS SLOC(70): <https://github.com/wechaty/wechaty/blob/main/src/user/mini-program.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class RoomInvitation
    - TS SLOC(317): <https://github.com/wechaty/wechaty/blob/main/src/user/room-invitation.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Tag
    - TS SLOC(190): <https://github.com/wechaty/wechaty/blob/main/src/user/tag.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class UrlLink
    - TS SLOC(107): <https://github.com/wechaty/wechaty/blob/main/src/user/url-link.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation

### Wechaty External Modules

1. [ ] Class FileBox
    - TS SLOC(638): <https://github.com/huan/file-box/blob/master/src/file-box.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class MemoryCard
    - TS SLOC(376): <https://github.com/huan/memory-card/blob/master/src/memory-card.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class WechatyPuppet
    - TS SLOC(1115): <https://github.com/wechaty/wechaty-puppet/blob/main/src/puppet.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class WechatyPuppetHostie
    - TS SLOC(909): <https://github.com/wechaty/wechaty-puppet-hostie/blob/master/src/grpc/puppet-client.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation

## Example: How to Translate TypeScript to Python

There's a 100 lines class named `Image` in charge of downloading the WeChat image to different sizes.

It is a great example for demonstrating how do we translate the TypeScript to Python in Wechaty Way:

### Image Class Source Code

- TypeScript: <https://github.com/wechaty/wechaty/blob/main/src/user/image.ts>
- Python: <https://github.com/wechaty/python-wechaty/blob/master/src/wechaty/user/image.py>

If you are interested in the translation and want to look at how it works, it will be a good start from reading and comparing those two `Image` class files in TypeScript and Python at the same time.

## History

- [Multi Language Wechaty Beta Release Announcement, Huan, Jun 19, 2020](https://wechaty.js.org/2020/06/19/multi-language-wechaty-beta-release/)
- [Multi-language Wechaty Meeting: Mocking & Code Quality, wj-Mcat, Jun 5, 2020](https://wechaty.js.org/2020/07/05/multilanguage-meeting-notes/)
- Wechaty is All You Need: Python, Go, and Java Translation Project [wechaty/wechaty#1927](https://github.com/wechaty/wechaty/discussions/1927)
- Python Wechaty: [wechaty/python-wechaty#13](https://github.com/wechaty/python-wechaty/issues/13)
- Go Wechaty: [wechaty/go-wechaty#1](https://github.com/wechaty/go-wechaty/issues/1)
- Java Wechaty: [wechaty/java-wechaty#1](https://github.com/wechaty/java-wechaty/issues/1)
