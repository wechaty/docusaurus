---
title: "Docker Wechaty Getting Started"
author: huan
categories: tutorial
tags:
  - docker
  - news
---

[![Docker Pulls](https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/wechaty/wechaty/)
[![Docker Stars](https://img.shields.io/docker/stars/wechaty/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/wechaty/wechaty/)

[![dockeri.co](http://dockeri.co/image/wechaty/wechaty)](https://hub.docker.com/r/wechaty/wechaty/)

**GitHub Repo: <https://github.com/wechaty/docker-wechaty-getting-started>**

## Features

1. Wechaty is fully dockerized. So it will be very easy to be used as a MicroService.
1. Clone the above repository, then you will be able to use Docker to run Wechaty with ZERO configuration.

## Requirements

1. Docker
1. Global Internet Connection

## Usage

It's very easy to use Wechaty with Docker.

### 1. Run TypeScript Example

```shell
bash -x bin/docker-run-typescript.sh
```

### 2. Run ES6 Javascript Example

```shell
bash -x bin/docker-run-javascript-esm.sh
```

### ~~Run Vanilla Javascript Example~~

We will not support CommonJS after we upgrade to Wechaty v1.x

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

### Network Issues

If you have been experiencing issues with Docker in China, you can try to use a VPS out of China and see if it helps. Most of the time, it will be a good idea to use a VPS out of China.
