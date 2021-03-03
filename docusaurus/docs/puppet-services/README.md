---
slug: /puppet-services/
title: Puppet Services
sidebar_label: 'Puppet Services: Index'
---

For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules [Wechaty Puppet](https://github.com/wechaty/wechaty-puppet).

Wechaty Puppet Service is gRPC for Wechaty Puppet. To use a Wechaty Puppet Service, you need a TOKEN for that service, and pass it to Wechaty, then you will be able to use that Puppet Service.

```sh
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"
```

> You can switch between different Wechaty Puppet Services by changing your TOKEN. All your source code should work between different tokens without any changes.

## What is Wechaty Puppet Service

If you want to learn more about the concepts behind TOKEN, please read our blog post: [Introducing Wechaty Puppet Service](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)

## Get A Token

You can get a short-term free TOKEN for testing, get a long-term free TOKEN by joining our [Wechaty Contributor Program](/docs/contributor-program/), or buy a TOKEN from our Wechaty Puppet Service Providers.

If you have any questions about the Wechaty Puppet Service, please feel free to talk to us by [joining our Gitter](https://gitter.im/wechaty/wechaty) network if you aren’t already a member.

### 1. Free TOKEN (Short-term)

Short-term TOKEN（7 days） is for those developers who want to test Wechaty Puppet Service to make sure the service can meet their needs.

TODO: list a easy to follow steps how to apply free token

- Paimon: Register [here](http://150.158.176.142/)
- wxwork/donut: Using **WeCom Account**(Not WeChat) with administrator rights [here](https://qiwei.juzibot.com/user/login?isWechaty=true)
- Padlocal: send email to oxddoxdd@gmail.com

### 2. Free TOKEN (Long-term)

Long-term TOKEN is for those developers who has joined our [Wechaty Contributor Program](/docs/contributor-program/).

Anyone who has a merged PR to our GitHub repos will be welcome to join.

TODO: give a short intro for steps to join the WCP.

### 3. Paid TOKEN

Paid TOKEN is the easiest one to getting started with the Wechaty Puppet Service.

Select a Wechaty Puppet Service from the list below and follow the steps in its page, then contact the Puppet Service Provider to buy one.

If you want to buy more than 10 at a time, or you need consulting servcies, please contact us in Gitter room at <https://gitter.im/wechaty/wechaty>.

## Wechaty Puppet Servcies

Now, we have the following Wechaty Puppet Services:

| Name | Platform | Protocol | Life Cycle |
| :---: | :---: | :---: | :---: |
| [WXWork](wxwork/) | WeCom | Windows | Beta |
| [Paimon](paimon/)| WeChat | Pad | Beta |
| [PadLocal](padlocal/) | WeChat | Pad | Beta |
| [Donut](donut/) | WeChat | Windows | Deprecated |

> If you are interested in using a Wechaty Puppet Provider directly in your program instead of a Puppet Service, please visit our [Wechaty Puppet Directory](https://github.com/wechaty/wechaty-puppet/wiki/Directory)

## FAQ

### What is _"Wechaty Puppet"_, _"Wechaty Puppet Provider"_, _"Wechaty Puppet Service"_?

We have a great blog post to explain those term in detail. Please read: [Introducing Wechaty Puppet Service](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)

## What is _"Wechaty Puppet Service Token"_ or _TOKEN_ you are talking about?

TOKEN is a unique string for authorizing Wechaty Puppet Service.

Here's some TOKEN examples:

1. `puppet_wxwork_7ce4cf8a1ab789166c39c6`: WXWork TOKEN
1. `puppet_padlocal_7ce48a1ab789166c39c6`: PadLocal TOKEN
1. `puppet_paimon_7ce4cf8a1ab789166c39c6`: Paimon TOKEN
1. `puppet_donut_e7ce4cf8a1ab789166c39c6`: Donut TOKEN
1. `56945fa4-7ce8-4cf8-a1a9-b789166c39c6`: UUIDv4 TOKEN

When you are using a Wechaty Puppet Service, you need to provide TOKEN to it so that it can serve you correctly.

The following shell commands demonstrated how to use it under Linux/macOS:

```shell
export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__

ts-node bot.ts
// or: node bot.js
// or: make bot
```

> `__TOKEN__` is your TOKEN

### How To Become a Wechaty Puppet Service Provider

To be written.

Please feel free to list yourself to our list at [Wechaty Puppet Provider Repo](https://github.com/wechaty/puppet-services/), and add your introduction in this README by submitting a Pull Request!

If you want to become a Wechaty Puppet Service Provider, please do not hesitate to file an issue to introduce yourself in this repository, then contact rui@chatie.io!

Learn more about the Wechaty Puppet Service Providers from:

1. [The relationship between Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP) #11](https://github.com/wechaty/PMC/issues/11)
1. [Wechaty Puppet Service Registration & Discovery (w.r.t. token) #39](https://github.com/wechaty/puppet-services/issues/39)

## Useful Links

1. [Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP)](https://github.com/wechaty/PMC/issues/11)
1. [Wechaty Starter Project Template that works out-of-the-box](https://github.com/wechaty/wechaty-getting-started)
1. [How to create your own Wechaty Puppet Service Token with the Web Protocol](https://github.com/wechaty/wechaty/issues/1986)
