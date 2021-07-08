---
title: 'Deploy with Docker'
---

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg)](https://github.com/wechaty/wechaty)
[![Docker Pulls](https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/wechaty/wechaty/)
[![Docker Stars](https://img.shields.io/docker/stars/wechaty/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/wechaty/wechaty/)
[![Build Status](https://travis-ci.com/wechaty/docker-wechaty-getting-started.svg?branch=master)](https://travis-ci.com/wechaty/docker-wechaty-getting-started)

Docker allows you to create virtualized sandboxes to run and deploy software. Use Docker to explore ready-to-go containers without worrying about dependencies. Setting up Docker is easier than ever by just pushing a button to start running the Docker one-click app.

[![dockeri.co](http://dockeri.co/image/wechaty/wechaty)](https://hub.docker.com/r/wechaty/wechaty/)

<!-- [Deploy to Docker for Wechaty Starter Project Repository](https://github.com/wechaty/docker-wechaty-getting-started) -->

## Requirements

* Your OS must be Docker compatible, [click here](https://docs.docker.com/engine/install/) to see supported OS versions.
* Uninstall any older versions of Docker such as `docker`, `docker.io`, or `docker-engine`, if installed.

```shell
 sudo apt-get remove docker docker-engine docker.io containerd runc
```

## Installation

The quick and easy way to install Docker is to get the script from [get.docker.com](https://get.docker.com/) and runs it to install the latest stable release of Docker on your system.

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

* To install Docker using the repository, visit [How to install using repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
* To install Docker from a package, visit [How to install using a package](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package).

## Getting Started after Deployment

To get familiar with the Docker Environment ,you can try [Runing hello-world under 3 minutes with Docker](https://docs.docker.com/get-started/)

You can confirm that you have downloaded `wechaty/wechaty` image successfully by running `docker pull wechaty/wechaty`, and this command also help you to upgrade the image to the latest version.

The best practice of using Wechaty Docker is like the following:

```bash
$ cat > mybot.ts <<'EOF'
import { Wechaty } from 'wechaty'

Wechaty.instance() // Singleton
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

### Know the commands used above

1. `-t` : Allocate a pseudo-TTY
2. `-i` : Keep STDIN open even if not attached
3. `--rm` : Automatically remove the container when it exits
4. `--privileged` : Give extended privileges to this container
5. `--network=host` : use the Docker host network stack
6. `-e WECHATY_LOG="$WECHATY_LOG"` : Pass the environment variable `WECHATY_LOG` into the container
7. `--volume="$(pwd)":/bot` : Bind current directory(`"$(pwd)"`) to '`/bot`' inside the container, by mounting the volume
8. `--name=wechaty` : Assign `wechaty` as the container name
9. `wechaty/wechaty:latest` : Image name on docker hub, here's our [wechaty/wechaty](https://hub.docker.com/r/wechaty/wechaty) with `latest` version
10. `mybot.js` : File contains code wrote by you, should be placed in current directory `./`

* See Also: [Dockerize Wechaty for easy start #66](https://github.com/wechaty/wechaty/issues/66)

### Examples

Get started with various [Examples](https://wechaty.js.org/docs/examples/overview) written in TypeScript. Run example ChatBot is as easy as run hello world example above, as long as you are using Docker:

```shell
cd example
wechaty media-file-bot.ts
```

### Run Wechaty as a Hostie

Running your wechaty as a hostie requires `WECHATY_TOKEN` so as to manage wechaty on the chatbot cloud manager: <https://www.chatie.io>

```bash
export WECHATY_TOKEN="your token here"
docker run -e WECHATY_TOKEN="$WECHATY_TOKEN" wechaty/wechaty
```

## Additional

### Onbuild

Put this line(and only this line) to your `Dockerfile`:

```dockerfile
FROM wechaty/onbuild
````

This image makes building derivative images easier. For most use cases, creating a `Dockerfile` in the base of your project directory with the line `FROM wechaty/onbuild` will be enough to create a stand-alone image for your project.

1. The `onbuild` variant is really useful for "getting off the ground running" (zero to Dockerized in a short period of time)
1. This `onbuild` variant will only install npm packages according to the `package.json`
1. The npm installs devDependencies by default, which is undesirable if you're building a production image. To avoid this pass NODE_ENV as a build argument i.e. `docker build --build-arg NODE_ENV=production …`.

### Build

```bash
docker build -t wechaty
```

## Next Steps

Now that you’ve learned how to install docker and work with your Wechaty Docker. See the following guides to begin:

1. Wechaty Getting Started: <https://github.com/wechaty/wechaty-getting-started>
2. Heroku Wechaty Getting Started: <https://github.com/wechaty/heroku-wechaty-getting-started>
3. Docker Wechaty GitHub repo: <https://github.com/wechaty/docker-wechaty-getting-started>
