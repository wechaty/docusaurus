---
title: Tokens - Wechaty Puppet Services
sidebar_label: 'Tokens'
---


## What is Wechaty Puppet Service Token?

TOKEN is a unique string for authorizing Wechaty Puppet Service.

## Examples

1. **WXWork TOKEN** : `puppet_wxwork_7ce4cf8a1ab789166c39c6`
2. **PadLocal TOKEN** : `puppet_padlocal_7ce48a1ab789166c39c6`
3. **Paimon TOKEN** : `puppet_paimon_7ce4cf8a1ab789166c39c6`
4. **Donut TOKEN** : `puppet_donut_e7ce4cf8a1ab789166c39c6`
5. **UUIDv4 TOKEN** : `56945fa4-7ce8-4cf8-a1a9-b789166c39c6`

When you are using a Wechaty Puppet Service, you need to provide TOKEN to it so that it can serve you correctly.

## Get A Token

There are three ways we provide tokens:

- **Free Short Term Token** : You can get a short-term free TOKEN for testing.
- **Free Long Term Token** : To get a long-term free TOKEN, join our [Wechaty Contributor Program](contributing/contributor-program.md).
- **Paid Long Term Token** :  buy a TOKEN from our Wechaty Puppet Service Providers.

If you have any questions about the Wechaty Puppet Service, please feel free to talk to us by [joining our Gitter](https://gitter.im/wechaty/wechaty) network if you aren’t already a member.

### 1. Free TOKEN (Short-term)

Short-term TOKEN（7 days） is for those developers who want to test Wechaty Puppet Service to make sure the service can meet their needs.

TODO: list a easy to follow steps how to apply free token

- Paimon: Register [here](http://120.55.60.194/)
- wxwork/donut: Using **WeCom Account**(Not WeChat) with administrator rights [here](https://qiwei.juzibot.com/user/login?isWechaty=true).
- Padlocal: [👉🏻 Get Free PadLocal Token 👈🏻](http://pad-local.com/)

### 2. Free TOKEN (Long-term)

Long-term TOKEN is for those developers who have joined our [Wechaty Contributor Program](contributing/contributor-program.md).

Anyone who has a merged PR to our GitHub repos will be welcome to join.

TODO: give a short intro for steps to join the WCP.

### 3. Paid TOKEN

Paid TOKEN is the easiest one to getting started with the Wechaty Puppet Service.

Select a Wechaty Puppet Service from the list below and follow the steps in its page, then contact the Puppet Service Provider to buy one.

If you want to buy more than 10 at a time, or you need consulting services, please contact us in Gitter room at <https://gitter.im/wechaty/wechaty>.

## Wechaty Puppet Services

Now, we have the following Wechaty Puppet Services:

| Name | Platform | Protocol | Life Cycle |
| :---: | :---: | :---: | :---: |
| [WXWork](wxwork.md) | WeCom | Windows | Beta |
| [Paimon](paimon.md)| WeChat | Pad | Beta |
| [PadLocal](padlocal.md) | WeChat | Pad | Beta |
| [Donut](donut.md) | WeChat | Windows | Deprecated |

> If you are interested in using a Wechaty Puppet Provider directly in your program instead of a Puppet Service, please visit our [Wechaty Puppet Directory](https://github.com/wechaty/wechaty-puppet/wiki/Directory)

## Usage

The following shell commands demonstrated how to use it under Linux/macOS:

```shell
export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__
bot.ts
make bot
```

> `__TOKEN__` is your TOKEN.

## Learn More

Learn more about all the Wechaty Puppet Services at our [official website](https://wechaty.js.org/docs/puppet-services/)
