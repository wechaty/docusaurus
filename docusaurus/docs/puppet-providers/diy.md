---
title: 'Puppet Provider: DIY'
---

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

[![Wechaty Puppet DIY](https://img.shields.io/badge/Provider-DIY-blueviolet)](diy)

:::note Do It Yourself

You can make a Wechaty Puppet Provider easily.

:::

You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers.

## Development

A Wechaty Puppet is a node package published on NPM that follow a defined convention.

### How to implement a wechaty puppet

related tutorial: [How to implement a wechaty-puppet](https://github.com/lijiarui/wechaty-puppet-padchat/issues/33)

### Structure

#### `package.json`

The `package.json` is a manifest format for describing **Node.js modules**. Wechaty Puppets are built on top of Node modules. It declares dependencies, version, ownership, and other information required to run a plugin in Wechaty. This document describes the schema in detail.

A plugin manifest `package.json` can also contain details about the required configuration. The configuration schema is defined in the `wechaty` field of the `package.json` (This field follow the [JSON-Schema](http://json-schema.org/) guidelines):

```json
{
    "name": "wechaty-puppet-mytest",
    "version": "0.0.1",
    "description": "This is my first Wechaty Puppet",
    "engines": {
        "wechaty": ">=0.16.x"
    },
    "wechaty": {
        "properties": {
            "myConfigKey": {
                "type": "string",
                "default": "it's the default value",
                "description": "It defines my awesome config!"
            }
        }
    }
}
```

You can learn more about `package.json` from the [NPM documentation](https://docs.npmjs.com/files/package.json).

The **package name** must begin with `wechaty-puppet-` and the **package engines** should contain `wechaty`.

#### mod.ts

The `mod.ts` is the main entry point of your puppet implementation:

```ts
import { Puppet } from 'wechaty'

export class PuppetMyTest extends Puppet {
  // ... implenmentation here ...
}

export default PuppetMyTest
```

#### Publish Your Puppet

Wechaty Puppet can be published on [NPM](https://www.npmjs.com/).

To publish a new Puppet, you need to create an account on [npmjs.com](https://www.npmjs.com/) then publish it from the command line:

```shell
npm publish
```

## Blogs

- [Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty, Hao, Aug 5, 2020](https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/)
- [Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021](https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatapp-puppet/)
- [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人, 范蕊, Sep 30, 2020](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/)
- [Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020](https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/)
- [New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020](https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/)
- [Multi-language Wechaty Meeting: Mocking & Code Quality, wj-Mcat, Jun 5, 2020](https://wechaty.js.org/2020/07/05/multilanguage-meeting-notes/)

## History

- [Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817, Huan, Jul 12, 2018](https://wechaty.js.org/2018/07/12/wechaty-new-release-version-0.18/)
- [Wechaty New Version 0.16(BETA, with super power) Released, Huan, Jun 21, 2018](https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/)

## Issues

- Create New Puppets for Wechaty [wechaty/wechaty#1167](https://github.com/wechaty/wechaty/issues/1167)

## Support

You can [join our Gitter](https://gitter.im/wechaty/wechaty) network if you aren’t already a member.
