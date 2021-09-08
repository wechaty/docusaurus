---
title: 'Puppet Provider: PadLocal'
sidebar_label: PadLocal
---

[![Wechaty Puppet PadLocal](https://img.shields.io/badge/Puppet-PadLocal-blueviolet)](padlocal)

![Wechaty Puppet PadLocal](https://wechaty.js.org/assets/2020/padlocal/logo.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-padlocal.svg)](https://badge.fury.io/js/wechaty-puppet-padlocal)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-padlocal/next.svg)](https://www.npmjs.com/package/wechaty-puppet-padlocal?activeTab=versions)
[![Powered by padlocal-client-ts](https://img.shields.io/badge/Powered%20By-padlocal--client--ts-brightgreen)](https://github.com/padlocal/padlocal-client-ts)

- Repo: <https://github.com/padlocal/wechaty-puppet-padlocal>
- Support & Feedback: <https://github.com/padlocal/wechaty-puppet-padlocal/issues>

## Features

PadLocal is a full-featured Wechaty Puppet Provider.

功能 | padlocal
---|---
**<消息>**|
收发文本|✅
收发个人名片|✅
收发图文链接|✅
发送图片、文件|✅
接收图片、文件|✅
发送视频|✅
接收视频|✅
发送小程序|✅
接收动图|✅
发送动图|✅
接收语音消息|✅
发送语音消息|✅
转发文本|✅
转发图片|✅
转发图文链接|✅
转发音频|✅
转发视频|✅
转发文件|✅
转发动图|❌
转发小程序|✅
**<群组>**|
创建群聊|✅
设置群公告|✅
获取群公告|✅
群二维码|✅
拉人进群|✅
踢人出群|✅
退出群聊|✅
改群名称|✅
入群事件|✅
离群事件|✅
群名称变更事件|✅
@群成员|✅
群列表|✅
群成员列表|✅
群详情|✅
**<联系人>**|
修改备注|✅
添加好友|✅
自动通过好友|✅
添加好友|✅
好友列表|✅
好友详情|✅
**<其他>**|
登录微信|✅
扫码状态|✅
退出微信|✅
依赖协议|iPad

## Usage

:::tip TOKEN required

PadLocal is a Wechaty Puppet Provider which consumes Wechaty Puppet Service.

Learn about [how to get a PadLocal TOKEN](puppet-services/padlocal.md)

:::

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

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
npm install wechaty-puppet-padlocal
export WECHATY_PUPPET=wechaty-puppet-padlocal
export WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-padlocal
export WECHATY_PUPPET=wechaty-puppet-padlocal
export WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-padlocal
set WECHATY_PUPPET=wechaty-puppet-padlocal
set WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}
npm start
```

</TabItem>
</Tabs>

## Roadmap

- to be added

## History

- [New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020](https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/)

## Maintainers

- [@padlocal](https://wechaty.js.org/contributors/padlocal)
