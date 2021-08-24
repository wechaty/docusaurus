---
title: 'Puppet Provider: Service'
sidebar_label: Service
---

[![Wechaty Puppet Service](https://img.shields.io/badge/Puppet-Service-blueviolet)](service)

![Wechaty Puppet Service](https://raw.githubusercontent.com/wechaty/wechaty-puppet-service/HEAD/docs/images/hostie.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-service.svg)](https://badge.fury.io/js/wechaty-puppet-service)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-service/next.svg)](https://www.npmjs.com/package/wechaty-puppet-service?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-service>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-service/issues>

## Features

Wechaty Puppet Service is a Wechaty Puppet for providing/consuming gRPC Puppet API. To use a Wechaty Puppet Service, you need a TOKEN for that service, and pass it to Wechaty, then you will be able to use that Puppet Service.

If you want to learn more about the concepts behind TOKEN, please read our blog post: [Introducing Wechaty Puppet Service](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)

Learn all service provided by the Wechaty Community at [here](puppet-services/overview.mdx)

## Usage

:::tip TOKEN required

Wechaty Puppet Service need a token for authorization.

Learn about [Wechaty Puppet Service](puppet-services/overview.mdx) for all services our community currently supported now.

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
npm install wechaty-puppet-service
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-service
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-service
set WECHATY_PUPPET=wechaty-puppet-service
set WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__
npm start
```

</TabItem>
</Tabs>

## Roadmap

- to be added

## History

- [Introducing Wechaty Puppet Service (Providers), Huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)

## Troubleshooting

### `Error: 14 UNAVAILABLE: No connection established`

This error message might identify that you are using a new version of `wechaty-puppet-service` which requires SSL but your Wechaty Puppet Service token does not support SSL.

Try to set the `WECHATY_PUPPET_SERVICE_NO_SSL_UNSAFE_CLIENT` environment variable to `true` to disable SSL and try again.

```sh
WECHATY_PUPPET_SERVICE_NO_SSL_UNSAFE_CLIENT=true npm start
```

Learn more about the details from [Enable SSL for all Puppet Service Clients of Wechaty Ecosystem wechaty/wechaty-puppet-servie#160](https://github.com/wechaty/wechaty-puppet-service/issues/160)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
- [@windmemory](https://wechaty.js.org/contributors/windmemory)
