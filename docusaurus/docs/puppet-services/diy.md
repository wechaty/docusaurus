---
title: 'Puppet Service: DIY'
---

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import TokenGatewayUnix   from './transclusions/token-gateway-unix.mdx'
import TokenGatewayWin32  from './transclusions/token-gateway-win32.mdx'

[![Wechaty Puppet Service DIY](https://img.shields.io/badge/Service-DIY-blue)](diy.md)

:::note Do It Yourself

You can make a Wechaty Puppet Service easily from any Wechaty Puppet Providers.

:::

You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers.

## Steps

We have a easy to use docker image which works out-of-the-box.

### 1. Pull the latest Wechaty Docker Image

```sh
docker pull wechaty/wechaty
```

### 2. Config Wechaty Puppet Provider

We need to choice which [Wechaty Puppet Provider](puppet-providers/overview.mdx) we want to use by setting the `WECHATY_PUPPET` environment variable.

For example, you can choose [wechaty-puppet-wechat](puppet-providers/wechat.md) by setting `WECHATY_PUPPET=wechaty-puppet-wechat`.

:::note Wechaty Puppet Providers

Learn all [Wechaty Puppet Providers](puppet-providers/overview.mdx)

You need to set all environment variables which requires from a specific provider.

For example, an additional token will be required by `PadLocal`: `WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal${TOKEN}`

:::

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
export WECHATY_PUPPET="wechaty-puppet-wechat"
```

</TabItem>
<TabItem value="mac">

```sh
export WECHATY_PUPPET="wechaty-puppet-wechat"
```

</TabItem>
<TabItem value="windows">

```sh
set WECHATY_PUPPET="wechaty-puppet-wechat"
```

</TabItem>
</Tabs>

### 3. Create your own Wechaty Puppet Service TOKEN

In order to provide [Wechaty Puppet Service](specs/service.md), you need to specify a [TOKEN](specs/token.md) for authorization.

You can [Generate a new UUIDv4](https://www.uuidgenerator.net/version4) online, use this new UUIDv4 as your token.

:::note TOKEN uniqueness

Your new token **MUST** different to any existing tokens in our system. (or they will conflict!)

:::

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
export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)
echo "WECHATY_TOKEN=$WECHATY_TOKEN"
```

</TabItem>
<TabItem value="mac">

```sh
export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)
echo "WECHATY_TOKEN=$WECHATY_TOKEN"
```

</TabItem>
<TabItem value="windows">

```sh
# TODO: use script to get UUIDv4 automatically like Linux/Mac
set WECHATY_TOKEN="__UUIDv4__"
```

</TabItem>
</Tabs>

### 4. Set Wechaty Puppet Service port

The port for your [Wechaty Puppet Service](specs/service.md) need to be specified. Make sure it's free on your server.

:::note port availablility

1. The server IP must be public on the internet
1. the port must be public accessible on the internet

:::

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
export WECHATY_PUPPET_SERVER_PORT="8788"
```

</TabItem>
<TabItem value="mac">

```sh
export WECHATY_PUPPET_SERVER_PORT="8788"
```

</TabItem>
<TabItem value="windows">

```sh
set WECHATY_PUPPET_SERVER_PORT="8788"
```

</TabItem>
</Tabs>

### 5. Set Wechaty Log Level

Enable `verbose` log message output for easy debugging.

More options are:

1. `silly`: all debug messages will be outputed
1. `verbose`: recommended debug level
1. `info`: disable debug messages
1. `warning`: only warning message
1. `silence`: no log message

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
export WECHATY_LOG="verbose"
```

</TabItem>
<TabItem value="mac">

```sh
export WECHATY_LOG="verbose"
```

</TabItem>
<TabItem value="windows">

```sh
set WECHATY_LOG="verbose"
```

</TabItem>
</Tabs>

### 6. Config TLS(SSL) for Wechaty Puppet Service (optional)

From [Wechaty version 0.67](https://github.com/wechaty/wechaty/issues/2231), the Puppet Service will enable TLS(SSL) by default. (See [wechaty/wechaty-puppet-service#160](https://github.com/wechaty/wechaty-puppet-service/issues/160))

You can enable/disable the TLS by setting environment variables to fullfil your needs.

For example, if you need to provide a Wechaty Puppet Service token without TLS, then you can set `WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER=true` to disable TLS.

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
# set to "true" to disable TLS (not recommanded)
export WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"
```

</TabItem>
<TabItem value="mac">

```sh
# set to "true" to disable TLS (not recommanded)
export WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"
```

</TabItem>
<TabItem value="windows">

```sh
# set to "true" to disable TLS (not recommanded)
set WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"
```

</TabItem>
</Tabs>

### 7. Start your Wechaty Token Gate Server

After finish config all the above settings, start the token gate server with the following docker command:

```sh
docker run -ti \
  --name wechaty_puppet_service_token_gateway \
  --rm \
  --privileged \
  --network=host \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER \
  -e WECHATY_TOKEN \
  wechaty/wechaty
```

:::note privileged mode

Privileged mode is for using host networking to simplify the docker arguments.

If you want to remove the `--privileged`, you need to add:

- `-p $WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT` for Linux & Mac
- `-p %WECHATY_PUPPET_SERVER_PORT%:%WECHATY_PUPPET_SERVER_PORT%` for Windows

:::

### 8. Check your TOKEN service

:::note wait for token gateway getting full started

The docker command in the previous step might need some time to getting fully started.

Wait and read the docker container log messages carefully to make sure the server has been started before continue this step.

:::

Check your TOKEN availability by visiting `https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}`

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
echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})
```

</TabItem>
<TabItem value="mac">

```sh
echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})
```

</TabItem>
<TabItem value="windows">

```sh
# echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})
# TODO: add windows version. (Pull Request is welcome!)
```

</TabItem>
</Tabs>

1. Succ: `HTTP/200` means you are good, the TOKEN is ready to use.
1. Fail: `HTTP/404` means the TOKEN is not registered successfully.

If you get `HTTP/404`, then you need to check the previous steps and troubleshoot which part has problems. If you find anything need to be reported, please feel free to submit an issue at [here](https://github.com/wechaty/puppet-services/issues)

#### Using `wechaty-token` CLI

You can use `wechaty-token` CLI command to check the TOKEN status.

```sh
$ npm install --global wechaty-token
+ wechaty-token@0.4.3
updated 1 package in 2.654s

$ wechaty-token --help
wechaty-token <subcommand>
> Wechaty utility for discovering and generating tokens

where <subcommand> can be one of:

- generate - Generate a new Wechaty Token
- discover - Wechaty TOKEN Service Discovery

For more help, try running `wechaty-token <subcommand> --help`

$ wechaty-token discover puppet_not_exist_token
NotFound

$ wechaty-token discover ${WECHATY_TOKEN}
{ host: '1.2.3.4', port: 5678 }
```

Learn more about the TOKEN from [Wechaty Puppet Service TOKEN Specification](specs/token.md).

### 🎉 Congratulations! You are all set

Your Wechaty Puppet Service will be ready to service for [Polyglot Wechaty](polyglot/overview.mdx)!

## All in One Command

For use Wechaty Token Gateway with ease, you can copy/paste the following code (with modifications for your need) in your bash shell:

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
    <TokenGatewayUnix />
  </TabItem>

  <TabItem value="mac">
    <TokenGatewayUnix />
  </TabItem>

  <TabItem value="windows">
    <TokenGatewayWin32 />
  </TabItem>

</Tabs>

I hope you enjoy it!

## Blogs

- [Python Wechaty如何使用PadLocal Puppet Service, Biofer, Feb, 3, 2021](https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/)
- [.NET Wechaty如何使用PadLocal Puppet Service, Darren, Jan 28, 2021](https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/)

## History

1. Using your Puppet PadLocal token with Python, Java, and Go Wechaty [wechaty/wechaty#1985](https://github.com/wechaty/wechaty/discussions/1985)
1. How to create your own Wechaty Puppet Service Token with the Web Protocol [wechaty/wechaty#1986](https://github.com/wechaty/wechaty/discussions/1986)
1. Using PadLocal Token with Polyglot Wechaty via Token Gateway [wechaty/puppet-services#84](https://github.com/wechaty/puppet-services/issues/84)
1. Wechaty is All You Need: Python, Go, and Java Translation Project [wechaty/wechaty#1927](https://github.com/wechaty/wechaty/discussions/1927)

## Support

You can [join our Gitter](https://gitter.im/wechaty/wechaty) network if you aren’t already a member.
