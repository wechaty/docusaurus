---
title: Wechaty Environment Variables
sidebar_label: Wechaty
---

Wechaty has different environment variables that need to be set for successfull implementation of the bot.This section is dedicated to describe  the various envirnment variables provided by Wechaty.

## Environment Variables

| Environment variable       | Description                                                                                                                                                                                                                                                                                              | Usage                                                                                                    |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| WECHATY_PUPPET             | defines the Wechaty Puppet Provider NPM name and its parameters                                                                                                                                                                                                                                          | ```bash export WECHATY_PUPPET=wechaty-puppet-service export WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"``` |
| WECHATY_TOKEN              | intializes the unique Wechaty Puppet Service Token,that is generating  using the [UUID Generator](https://www.uuidgenerator.net/version4).                                                                                                                                                               | ```bash export WECHATY_TOKEN='2fdb00a5-5c31-4018-84ac-c64e5f995057'```                                  |
| WECHATY_PUPPET_SERVER_PORT | sets up the  free server port for the Wechaty Puppet Service,also used for docker port mapping                                                                                                                                                                                                           | ```bash export WECHATY_PUPPET_SERVER_PORT=8788```    |
| WECHATY_LOG                | sets up the log mode for the service. Usually initialize the variable to `Verbose` mode as this gives more debug log messages. `verbose` mode is an option available in many OS that gives details on what the computer is doing,which drivers and software are being installed or loaded and many more. | ```bash export WECHATY_LOG="verbose"```                                                                 |
