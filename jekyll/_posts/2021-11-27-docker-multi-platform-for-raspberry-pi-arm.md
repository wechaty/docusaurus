---
title: Wechaty Docker Multi-Platform for Raspberry Pi (ARM)
author: huan
categories:
  - announcement
tags:
  - docker
  - raspberry-pi
  - arm
  - news
image: /assets/2021/11-docker-multi-platform-for-raspberry-pi-arm/docker-arm-amd.webp
---

For a long time, wechaty docker image was build for platform amd64. Today, Wechaty is supporting new platform: Raspberry Pi (ARM)!

## TL;DR

Start from Wechaty version 1.11, you can use the Wechaty docker image directly with the Raspberry Pi!

```sh
$ uname -m
arm64

$ docker run --rm -it wechaty/wechaty:1.11 bot.ts
# It just works!
```

## Technical Details

The story begin with <https://github.com/wechaty/wechaty-puppet-wechat/pull/102> which let us know that some community users can start running `wechaty-puppet-wechat` and `wechaty-puppet-whatsapp` on Raspberry Pi.

At the same time, from [this](https://github.com/huan/docker-simple-mail-forwarder/blob/c3b5b30be708b473ab850fdc36c3734be2d4a614/.github/workflows/docker.yml#L68-L73) GitHub action script, we know how to build and publish multiple platform docker images.

So we decide to support multi-platform for Wechaty, and now it comes from the community.

Great thanks [@Yc-Chen](https://github.com/Yc-Chen) who has sent [PR #2306](https://github.com/wechaty/wechaty/pull/2306) to support multi-platform docker image by fixing the compatible issue with the Google Chrome.

Finally, we can support multi-platform docker image for Wechaty by adding the following steps:

## 1. Enable `QEMU` & `buildx` in GitHub Actions

```yaml
  - name: Set up QEMU
    uses: docker/setup-qemu-action@v1
    with:
      platforms: all

  # https://github.com/docker/setup-buildx-action
  - name: Set up Docker Buildx
    uses: docker/setup-buildx-action@v1
    with:
      install: true
      version: latest
```

## 2. Use `buildx` in our build script

We will use `buildx` to build multi-platform docker image for Wechaty in our `scripts/docker.sh`:

```sh
docker buildx build \
  --platform linux/amd64,linux/arm64,linux/arm/v7 \
  --tag "wechaty/wechaty:next" \
  --push \
  .
```

1. `--platform linux/amd64,linux/arm64,linux/arm/v7` means we will build for those platforms
1. `--push` means we will push the multi-platforms image to Docker Hub

## 3. Increase the TAP timeout

The `buildx` seems to work perfectly, but the arm arch will take almost 10X times than the x86_64 when we are building:

For `npm install`:

```sh
 => [linux/amd64  6/13] RUN  npm install   && rm -fr /tmp/* ~/.npm  185.1s
 => [linux/arm64  6/13] RUN  npm install   && rm -fr /tmp/* ~/.npm  1473.2s
 => [linux/arm/v7 6/13] RUN  npm install   && rm -fr /tmp/* ~/.npm  1469.4s
```

For `npm test`:

```sh
 => [linux/amd64  9/13] RUN  npm test   && npm run dist   && npm link   165.5s
 => [linux/arm64  9/13] RUN  npm test   && npm run dist   && npm link   1482.5s
 => [linux/arm/v7 9/13] RUN  npm test   && npm run dist   && npm link   1295.2s
```

For `puppet-install`:

```sh
 => [linux/amd64  10/13] RUN  npm run puppet-install  113.3s
 => [linux/arm64  10/13] RUN  npm run puppet-install  219.1s
 => [linux/arm/v7 10/13] RUN  npm run puppet-install  444.4s
```

So we have to increase the `TAP_TIMEOUT` from the `60` seconds (the default) to `600` seconds, to make sure the unit tests are finished in time.

## Published: Multi-arch enable Docker Image

[![Docker Multi Arch: amd64 & arm64 & arm/v7](/assets/2021/11-docker-multi-platform-for-raspberry-pi-arm/docker-wechaty-multi-arch.webp)](https://hub.docker.com/r/wechaty/wechaty/tags)

```sh
$ docker pull wechaty/wechaty:1.11

OS/ARCH         COMPRESSED SIZE 
linux/amd64     958.55 MB
linux/arm64     667.1 MB
linux/arm/v7    871.55 MB
```

## Related issues/links

- [Build docker image on arm64, @Yc-Chen, wechaty/wechaty#2306](https://github.com/wechaty/wechaty/pull/2306)
- [Build & deploy Wechaty docker image with arm64 multi platform support wechaty/wechaty#2248](https://github.com/wechaty/wechaty/issues/2248)
- [Use docker buildx to add arm platform to our docker image huan/docker-simple-mail-forwarder#76](https://github.com/huan/docker-simple-mail-forwarder/issues/76)
- [Running and Building ARM Docker Containers on x86](https://www.stereolabs.com/docs/docker/building-arm-container-on-x86/)
- [Pull docker image for different architecture](https://stackoverflow.com/a/69917870/1123955)

> Image credit: [Docker Multi-Platform Images](https://www.alchemists.io/articles/docker_multi-platform_images/)
