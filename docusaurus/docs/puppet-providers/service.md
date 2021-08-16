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

For example, you can cloudify the Wechaty Puppet Provider wechaty-puppet-padlocal to a Wechaty Puppet Service by running our Wechaty Puppet Service Token Gateway.

Wechaty Puppet Service Token Gateway is a gateway for converting the Wechaty Puppet Provider to a Wechaty Puppet Service. Read more about tokens and usage [here](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/).

Learn about all puppet services provided by the Wechaty Community [here](puppet-services/overview.mdx).

## Usage

:::tip TOKEN required

Wechaty Puppet Service need a token for authorization.

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

## History

- [Introducing Wechaty Puppet Service (Providers), Huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
- [@windmemory](https://wechaty.js.org/contributors/windmemory)
