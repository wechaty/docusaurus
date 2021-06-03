---
title: Wechaty Puppet Service Token Gateway
sidebar_label: Token
---

## What is Wechaty Puppet Service Token Gateway?

Wechaty Puppet Service Token Gateway is a gateway for converting the Wechaty Puppet Provider to a Wechaty Puppet Service.This can be done by setting up different environment variables
Here 👇 is an example for setting up Wechaty Puppet service to one of the Wechaty Puppet Provider Padlocal

## WECHATY_PUPPET

This environment variable is used for defining the Wechaty Puppet Provider NPM name and its parameters

```bash
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"
```

## WECHATY_TOKEN

This variable is used to intialize the unique Wechaty Puppet Service Token,that is generating using the [UUID Generator](https://www.uuidgenerator.net/version4).To get more details about tokens check here 👉This will be added later.
**Note- The token must be unique and not similar to any token generated before as similar tokens can generate conflicts**

```bash
export WECHATY_TOKEN='2fdb00a5-5c31-4018-84ac-c64e5f995057'
```
## WECHATY_PUPPET_SERVER_PORT

WECHATY_PUPPET_SERVER_PORT is a variable used to setup the  free server port for the Wechaty Puppet Service,this can also be used for docker port mapping.

```bash
export WECHATY_PUPPET_SERVER_PORT=8788 // any available port can be visited from internet
```

## WECHATY_LOG

This variable sets up the log mode for the service.Usually initialize the variable to `Verbose` mode as this gives more debug log messages.
`verbose` mode is an option available in many OS that gives  details on what the coputer is doing,which drivers and software are being installed or loaded and many more.

```bash
export WECHATY_LOG="verbose"
```

## Starting Wechaty Puppet Servcie Token Gateway

After the docker image has been created use a docker command  to start your Wechaty Puppet Service Token Gateway with the below configuration 👇:

```docker run -ti --rm \
  \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  \
  -e WECHATY_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  \
  -e WECHATY_LOG \
  \
  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT” \
  wechaty/wechaty:0.56
```

The after running the above commands lot of  output log messages can be seen in the terminal.

## Service Discovery

The running of the Wechaty Puppet Service can be checked by using the command given below:

```sh
curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}
```

**Replace ${WECHATY_TOKEN} to your real token in the above configuration**
✅ If you get an HTTP/200 response with a JSON object body that includes your `ip` and `port`, then you are all set.<br>
❌ If you get an HTTP/404 response, your Puppet Service Gateway has some issues and needs to be troubleshooted.
