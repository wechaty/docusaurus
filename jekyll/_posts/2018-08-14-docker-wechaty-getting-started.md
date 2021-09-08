---
title: "Docker Wechaty Getting Started"
author: huan
categories: tutorial
tags:
  - docker
  - news
---

[![Docker Pulls](https://img.shields.io/docker/pulls/zixia/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/zixia/wechaty/)
[![Docker Stars](https://img.shields.io/docker/stars/zixia/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/zixia/wechaty/)
[![Docker Layers](https://images.microbadger.com/badges/image/zixia/wechaty.svg)](https://microbadger.com/#/images/zixia/wechaty)

[![dockeri.co](http://dockeri.co/image/zixia/wechaty)](https://hub.docker.com/r/zixia/wechaty/)

**GitHub Repo: <https://github.com/wechaty/docker-wechaty-getting-started>**

## Features

1. Wechaty is fully dockerized. So it will be very easy to be used as a MicroService.
1. Clone the above repository, then you will be able to use Docker to run Wechaty with ZERO configuration.

## Requirements

1. Docker
1. Global Internet Connection

## Usage

### 1. Run Vanilla Javascript Example

```shell
bash -x bin/docker-run-javascript-vanilla.sh
```

### 2. Run ES6 Javascript Example

```shell
bash -x bin/docker-run-javascript-es6.sh
```

### 3. Run TypeScript Example

```shell
bash -x bin/docker-run-typescript.sh
```

Until then, enjoy!

## Docker

### 1. Install Docker

Quick & easy install Docker via:

```shell
curl -sSL https://get.docker.com | sh
```

Or

```shell
wget -qO- https://get.docker.com/ | sh
```

Get to know more about Docker at: <https://www.docker.com/>

### 2. Use Docker Registry Mirror in China

Thanks Docker, there's a official registry mirror in China, and you can use it by adding `registry.docker-cn.com/` in front of the image name:

```diff
- docker pull zixia/wechaty
+ docker pull registry.docker-cn.com/zixia/wechaty
```

Learn more about the docker CN mirror at:

- <https://www.docker-cn.com/registry-mirror>
- <https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror>
