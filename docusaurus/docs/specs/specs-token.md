---
title: Wechaty Puppet Service Token Gateway
sidebar_label: Token
---

## What is Wechaty Puppet Service Token Gateway?

Wechaty Puppet Service Token Gateway is a gateway for converting the Wechaty Puppet Provider to a Wechaty Puppet Service.

| Environment variable       | Description                                                                                                                                                                                                                                                                                              | Usage                                                                                                    |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| WECHATY_PUPPET             | defines the Wechaty Puppet Provider NPM name and its parameters                                                                                                                                                                                                                                          | ```bash export WECHATY_PUPPET=wechaty-puppet-service export WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"``` |
| WECHATY_TOKEN              | intializes the unique Wechaty Puppet Service Token,that is generating  using the [UUID Generator](https://www.uuidgenerator.net/version4).                                                                                                                                                               | ```bash export WECHATY_TOKEN='2fdb00a5-5c31-4018-84ac-c64e5f995057'```                                  |
| WECHATY_PUPPET_SERVER_PORT | sets up the  free server port for the Wechaty Puppet Service,also used for docker port mapping                                                                                                                                                                                                           | ```bash export WECHATY_PUPPET_SERVER_PORT=8788 // any available port can be visited from internet```    |
| WECHATY_LOG                | sets up the log mode for the service. Usually initialize the variable to `Verbose` mode as this gives more debug log messages. `verbose` mode is an option available in many OS that gives details on what the computer is doing,which drivers and software are being installed or loaded and many more. | ```bash export WECHATY_LOG="verbose"```                                                                 |

## Starting Wechaty Puppet Servcie Token Gateway

After the docker image has been created, use a docker command  to start the Wechaty Puppet Service Token Gateway with the below configuration:

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

## Service Discovery

Use the command given below to check the running of the Wechaty Puppet Service.

```sh
curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}
```

Replace ${WECHATY_TOKEN} to your real token in the above configuration

* ✅ If you get an HTTP/200 response with a JSON object body that includes your `ip` and `port`, then you are all set.
* ❌ If you get an HTTP/404 response, your Puppet Service Gateway has some issues and needs to be troubleshooted.
