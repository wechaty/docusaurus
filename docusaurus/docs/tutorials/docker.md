---
title: 'Usage with Docker'
---

## DOCKER WECHATY GETTING STARTED

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg)](https://github.com/wechaty/wechaty)
[![Docker Pulls](https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/wechaty/wechaty/)
[![Docker Stars](https://img.shields.io/docker/stars/wechaty/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/wechaty/wechaty/)
[![Docker Layers](https://images.microbadger.com/badges/image/wechaty/wechaty.svg)](https://microbadger.com/#/images/wechaty/wechaty)

[![dockeri.co](http://dockeri.co/image/wechaty/wechaty)](https://hub.docker.com/r/wechaty/wechaty/)

[Deploy to Docker for Wechaty Starter Project Repository](https://github.com/wechaty/docker-wechaty-getting-started)

<!-- Wechaty is fully dockerized. So it will be very easy to be used as a MicroService.

## Getting Started with Docker 

## Docker Wechaty Getting Started

[![Docker](https://avatars0.githubusercontent.com/u/5429470?s=200)](https://github.com/wechaty/docker-wechaty-getting-started)

[https://github.com/wechaty/docker-wechaty-getting-started](https://github.com/wechaty/docker-wechaty-getting-started)-->

## FEATURES

1. Wechaty is fully dockerized. So it will be very easy to be used as a MicroService.
1. Clone this repository, then you will be able to use Docker to run Wechaty with ZERO configuration.

## REQUIREMENTS

1. Docker
1. Global Internet Connection

## Install Docker

Quick & easy install Docker via:

```shell
curl -sSL https://get.docker.com | sh
```

Or

```shell
wget -qO- https://get.docker.com/ | sh
```

* [Get to know more about Docker](https://www.docker.com/)
* [Install Docker and run hello-world in 3 minutes](https://docs.docker.com/engine/getstarted/step_one/)

## Run

The best practice of using Wechaty Docker is like the following:

```bash
$ cat > mybot.ts <<'EOF'
import { WechatyBuilder } from 'wechaty'

WechatyBuilder.build()
  .on('scan', (qrcode, status) => console.log(`Scan QrCode to login: ${status}\n${qrcode}`))
  .on('login',       user      => console.log(`User ${user} logined`))
  .on('message',  message      => console.log(`Message: ${message}`))
  .start()
EOF

$ function wechaty() {
  docker run \
    -t -i --rm \
    --privileged \
    --network=host \
    -e WECHATY_LOG="$WECHATY_LOG" \
    -e WECHATY_PUPPET="$WECHATY_PUPPET" \
    -e WECHATY_TOKEN="$WECHATY_TOKEN" \
    --mount type=bind,source="$(pwd)",target=/bot \
    wechaty/wechaty:latest \
    "$@"
}

$ wechaty mybot.ts
```

see? death easy to use!

> You might want to confirm that you can download `wechaty/wechaty` image successfully by run `docker pull wechaty/wechaty`, and this command is also able to help you upgrade the image to the latest version.

### Docker options explanation

1. `-t` : Allocate a pseudo-TTY
1. `-i` : Keep STDIN open even if not attached
1. `--rm` : Automatically remove the container when it exits
1. `--privileged` : Give extended privileges to this container
1. `--network=host` : use the Docker host network stack
1. `-e WECHATY_LOG="$WECHATY_LOG"` : Pass the environment variable `WECHATY_LOG` into the container
1. `--volume="$(pwd)":/bot` : Bind current directory(`"$(pwd)"`) to '`/bot`' inside the container, by mounting the volume
1. `--name=wechaty` : Assign `wechaty` as the container name
1. `wechaty/wechaty:latest` : Image name on docker hub, here's our [wechaty/wechaty](https://hub.docker.com/r/wechaty/wechaty) with `latest` version
1. `mybot.js` : File contains code wrote by you, should be placed in current directory `./`

* See Also: [Dockerize Wechaty for easy start #66](https://github.com/wechaty/wechaty/issues/66)

### Run Examples

There's many Wechaty ChatBot Examples in the `example` directory, and all of them are writen in TypeScript.

Run example ChatBot is as easy as run hello world example above, as long as you are using Docker:

```shell
cd example
wechaty media-file-bot.ts
```

Bravo!

### Run Wechaty as a Hostie

```bash
export WECHATY_TOKEN="your token here"

docker run -e WECHATY_TOKEN="$WECHATY_TOKEN" wechaty/wechaty
```

`WECHATY_TOKEN` is required here, because you need this key to managing wechaty on the chatbot cloud manager: <https://www.chatie.io>

## Onbuild

Put this line(and only this line) to your `Dockerfile`:

```dockerfile
FROM wechaty/onbuild
````

This image makes building derivative images easier. For most use cases, creating a `Dockerfile` in the base of your project directory with the line `FROM wechaty/onbuild` will be enough to create a stand-alone image for your project.

1. The `onbuild` variant is really useful for "getting off the ground running" (zero to Dockerized in a short period of time)
1. This `onbuild` variant will only install npm packages according to the `package.json`
1. The npm installs devDependencies by default, which is undesirable if you're building a production image. To avoid this pass NODE_ENV as a build argument i.e. `docker build --build-arg NODE_ENV=production …`.

## Build

```bash
docker build -t wechaty .
```

## SEE ALSO

1. Wechaty Getting Started: <https://github.com/wechaty/wechaty-getting-started>
2. Heroku Wechaty Getting Started: <https://github.com/wechaty/heroku-wechaty-getting-started>

## AUTHOR

[Huan LI](http://linkedin.com/in/zixia) \<zixia@zixia.net\>

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## COPYRIGHT & LICENSE

* Code & Docs © 2018 Huan LI \<zixia@zixia.net\>
* Code released under the Apache-2.0 License
* Docs released under Creative Commons
