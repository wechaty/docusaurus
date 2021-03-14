---
title: 'Puppet Service: DIY'
---

<!-- MDX import -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[![Wechaty Puppet Service DIY](https://img.shields.io/badge/Service-DIY-blue)](diy)

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

We need to choice which [Wechaty Puppet Provider](puppet-providers/README.md) we want to use by setting the `WECHATY_PUPPET` environment variable.

For example, you can choose [wechaty-puppet-padlocal](puppet-providers/padlocal.md) by setting `WECHATY_PUPPET=wechaty-puppet-padlocal`, add an additional PadLocal token `WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__` which is required by PadLocal.

:::note Wechaty Puppet Providers

Learn all [Wechaty Puppet Providers](puppet-providers/README.md)

You need to set all environment variables which requires from a specific provider.

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
export WECHATY_PUPPET="wechaty-puppet-padlocal"
export WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"
```

</TabItem>
<TabItem value="mac">

```sh
export WECHATY_PUPPET="wechaty-puppet-padlocal"
export WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"
```

</TabItem>
<TabItem value="windows">

```sh
set WECHATY_PUPPET="wechaty-puppet-padlocal"
set WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"
```

</TabItem>
</Tabs>

### 3. Set Wechaty Puppet Service TOKEN

In order to provide [Wechaty Puppet Service](puppet-servcie/README.md), you need to specify a [TOKEN](specifications/token.md) for authorization.

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

### 4. Set Wechaty Puppet Service Port

The port for your [Wechaty Puppet Service](specifications/service.md) need to be specified. Make sure it's free on your server.

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

### 6. Start your Wechaty Token Gate Server

After finish config all the above settings, start the token gate server with the following docker command:

```sh
docker run -ti \
  --name wechaty_puppet_service_token_gateway \
  --rm \
  --privileged \
  --net=host \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  wechaty/wechaty
```

:::note privileged mode

Privileged mode is for using host networking to simplify the docker arguments.

If you want to remove the `--privileged`, you need to add:

- `-p $WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT` for Linux & Mac
- `-p %WECHATY_PUPPET_SERVER_PORT%:%WECHATY_PUPPET_SERVER_PORT%` for Windows

:::

### 7. Check your TOKEN service

Check your TOKEN availability by visiting `https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}`

:::note wait for token gateway getting full started

The docker command in the previous step might need some time to getting fully started.

Wait and read the docker container log messages carefully to make sure the server has been started before continue this step.

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

Learn more about the TOKEN from [Wechaty Puppet Service TOKEN Specification](specifications/token.md).

### 8. Congratulations! You are all set

Your Wechaty Puppet Service will be ready to service for [Polyglot Wechaty](polyglot/README.md)!

## All in One Command

For use Wechaty Token Gateway with ease, you can copy/paste the following code (with modifications for your need) in your bash shell:

:::note modify before use

We are using PadLocal as the example. Remember to modify `WECHATY_PUPPET_PADLOCAL_TOKEN` by replacing `puppet_padlocal__TOKEN__` with yours.

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
# Step 1
docker pull wechaty/wechaty

# Step 2
#   here we are using padlocal for example
#   replace it to fit your needs
export WECHATY_PUPPET=wechaty-puppet-padlocal
export WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__

# Step 3
export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)
echo "WECHATY_TOKEN=$WECHATY_TOKEN"

# Step 4
export WECHATY_PUPPET_SERVER_PORT=8788

# Step 5
export WECHATY_LOG="verbose"

# Step 6
docker run \
  -d \
  -ti \
  --name wechaty_puppet_service_token_gateway \
  --rm \
  --privileged \
  --net=host \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  wechaty/wechaty

# Step 7
export HTTP_CODE=$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})
if [ "$HTTP_CODE" == 200 ]; then
  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"
  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}
  echo
else
  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"
fi

# Step 8 🍻
```

</TabItem>
<TabItem value="mac">

```sh
# Step 1
docker pull wechaty/wechaty

# Step 2
#   here we are using padlocal for example
#   replace it to fit your needs
export WECHATY_PUPPET=wechaty-puppet-padlocal
export WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__

# Step 3
export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)
echo "WECHATY_TOKEN=$WECHATY_TOKEN"

# Step 4
export WECHATY_PUPPET_SERVER_PORT=8788

# Step 5
export WECHATY_LOG="verbose"

# Step 6
docker run \
  -d \
  -ti \
  --name wechaty_puppet_service_token_gateway \
  --rm \
  --privileged \
  --net=host \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  wechaty/wechaty

# Step 7
export HTTP_CODE=$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})
if [ "$HTTP_CODE" == 200 ]; then
  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"
  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}
  echo
else
  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"
fi

# Step 8 🍻
```

</TabItem>
<TabItem value="windows">

```sh
# To be add
```

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
