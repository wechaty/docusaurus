---
title: 'Puppet Provider: Lark'
sidebar_label: Lark
---

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

[![Wechaty Puppet Lark](https://img.shields.io/badge/Puppet-Lark-blueviolet)](lark)

![Wechaty Puppet Lark](https://raw.githubusercontent.com/wechaty/wechaty-puppet-lark/HEAD/docs/images/wechaty-puppet-lark.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-lark.svg)](https://badge.fury.io/js/wechaty-puppet-lark)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-lark/next.svg)](https://www.npmjs.com/package/wechaty-puppet-lark?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-lark>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-lark/issues>

## Features

1. Send & receive messages

## Usage

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    { label: 'Linux',   value: 'linux', },
    { label: 'macOS',   value: 'mac', },
    { label: 'Windows', value: 'windows', },
  ]
}>

<TabItem value="linux">

```sh
npm install wechaty-puppet-lark
export WECHATY_PUPPET=wechaty-puppet-lark
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-lark
export WECHATY_PUPPET=wechaty-puppet-lark
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-lark
set WECHATY_PUPPET=wechaty-puppet-lark
npm start
```

</TabItem>
</Tabs>

## Videos

### Live Coding

<iframe width="730" height="441" src="https://www.youtube.com/embed/eutz5EMlJCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Video Demo

<iframe width="730" height="441" src="https://www.youtube.com/embed/_y5DktHdL9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## History

"Open Source Software Supply Chain Lighting Plan-Summer 2020" (thereafter referred to as Summer 2020) is a summer event for college students jointly organized by the Software Institute of the Chinese Academy of Sciences and the openEuler community. It aims to encourage students in school to actively participate in the development and maintenance of open source software, and promote the vigorous development of excellent open source software communities in China. According to the degree of difficulty and completion of the project, participants can also receive bonuses and trophies for the "Open Source Software Supply Chain Lighting Plan-Summer 2020" event.

- [Official website](https://isrc.iscas.ac.cn/summer2020)
- [Official news](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)

This project [based on the open API package under the Wechaty interface Feishu Chatbot] is an open source project supported by Summer 2020.

### Information on encapsulation of Feishu chat robot under Wechaty interface based on open API

- Instructor: Gao Gao Wu Jingjing
  - Student: Fan Rui
  - Project name: Encapsulate Feishu chat robot under Wechaty interface based on open API
  - Program description:
    - Read messages through Feishu subscription message event
    - Update the member information in the address book in real time by subscribing to the address book event of Feishu
    - Docking with Feishu interface to implement various types of message interfaces on puppet
    - Design configuration parameters
    - Write the documentation of Feishu puppet
    - time plan
      - Familiar with the technology stack
        - 7.1-7.20
        - Read Wechaty-puppet-plus source code, learn TypeScript, and be familiar with Feishu server API
      - Establish a connection with Feishu
        - 7.20-7.31
        - Establish a connection with Feishu via Express to realize the sending and receiving of text messages (ie ding-dong-bot robot)
      - Complete the sending and receiving of text messages puppet
        - 8.1-8.5
        - Combine the sending and receiving of text information into lark-puppet
        - Build the basic framework of the project
      - Complete the sending and receiving of other basic message types
        - 8.6-8.20
        - Complete the sending and receiving of other message types, including: pictures, videos, files
      - Complete sending and receiving of message cards
        - 8.21-8.30
        - Establish multiple interactive communications with users through message cards
      - Set configuration parameters
        - 8.31-9.7
      - Refactoring
        - 9.8-9.20
      - Write usage documents
        - 9.21-9.30

### Problems encountered and solutions

When using Ngrox for intranet penetration, the subdomain name will change every time it is restarted. Under the advice and guidance of the teacher, localtunnel was finally used to solve this problem.

Due to the incomplete understanding of TypeScript and HTTP requests, some message format problems were encountered. These problems were solved by consulting materials and learning the codes of other students.

Although the basic functions have been completed, the project had not reached the release level.

If you want to develop Feishu robots like wechaty in WeChat, you need to complete the following things:

- Encapsulation of contact class, room class, etc.
- Encapsulation and processing of other payload messages
- Encapsulate puppet into wechaty

## Blog links

1. [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人, 范蕊, Sep 30, 2020](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/)

## Maintainers

- [@Roxanne718](https://wechaty.js.org/contributors/roxanne718)
