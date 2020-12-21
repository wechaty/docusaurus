---
slug: /puppet-services/
title: Puppet Services
sidebar_label: Puppet Services Index
---

Wechaty Puppet Service is the underlying protocol that supports Wechaty runs on.

Learn more from [Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP)](https://github.com/wechaty/PMC/issues/11)

Now, we have the following Wechaty Puppet Services:

| Name | Platform | Protocol | Maintainer |
| :---: | :---: | :---: | :---: |
| [WXWork](wxwork/) | WeCom | Windows | @juzibot |
| [PadLocal](padlocal/) | WeChat | Pad | @padlocal |
| [Donut](donut/) | WeChat | Windows | @juzibot |

## FAQ

### What is Wechaty Puppet Service Token

to be written

To use the token with Wechaty, the following commands demonstrated how to use it under Linux/macOS:

```shell
export WECHATY_PUPPET=wechaty-puppet-hostie
export WECHATY_PUPPET_HOSTIE_TOKEN=your_applied_token_at_here

ts-node bot.ts
// or: node bot.js
// or: make bot
```

See:

1. [Wechaty Starter Project Template that works out-of-the-box](https://github.com/wechaty/wechaty-getting-started)
1. [How to create your own Wechaty Hostie Token with the Web Protocol](https://github.com/wechaty/wechaty/issues/1986)

### How to became a Wechaty Puppet Service Provider

To be written.

Please feel free to list yourself to our list at [Wechaty Puppet Provider Repo](https://github.com/wechaty/puppet-services/), and add your introduction in this README by submitting a Pull Request!

If you want to become a Wechaty Puppet Service Provider, please do not hesitate to file an issue to introduce yourself in this repository, then contact rui@chatie.io!

Learn more about the Wechaty Puppet Service Providers from:

1. [The relationship between Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP) #11](https://github.com/wechaty/PMC/issues/11)
1. [Wechaty Puppet Service Registration & Discovery (w.r.t. token) #39](https://github.com/wechaty/puppet-services/issues/39)

### How to buy(apply) for the token

Please submit your application by filing an issue at <https://github.com/wechaty/puppet-services/issues/new/choose>
