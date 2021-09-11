---
slug: /polyglot/scala/
title: 'Scala Wechaty'
sidebar_label: Scala
---

[![Scala Wechaty](https://img.shields.io/badge/Wechaty-Scala-890)](https://github.com/wechaty/scala-wechaty)

Scala Wechaty is a Scala programming client derived from the Wechaty ecosystem. Scala's static types help avoid bugs in complex applications, hence Scala wechaty is very easy to use, implement and is also very efficient. You can find more information on Scala-Wechaty [here](https://github.com/wechaty/scala-wechaty-getting-started). The [General Architecture Diagram](https://wechaty.js.org/docs/polyglot/diy/) illustrates how the Scala-Wechaty can be implemented on the already existing TypeScript Wechaty ecosystem.

## Features of Scala-Wechaty

* Stable interaction with back-end gRPC, continuous and stable operation.
* The front end implements some functions of `Contact` and `Message`.

## Getting Started

Run the below command for starting the Scala-Wechaty bot.

```sh
git clone git@github.com:wechaty/scala-wechaty-getting-started.git
cd scala-wechaty-getting-started
make install
export WECHATY_PUPPET=wechaty-puppet-hostie
export WECHATY_PUPPET_HOSTIE_TOKEN=your_token_at_here
make bot # or
scala examples/ding-dong-bot.scala 
```

## Translation of TypeScript to Scala

There is a hundred (100) lines class named `Image` in charge of downloading the WeChat image to different sizes. Below are the links to the Image class for both TypeScript and Scala for a better understanding of the code and the translation.

* [TypeScript](https://github.com/wechaty/wechaty/blob/master/src/user/image.ts)
* [Scala](https://github.com/wechaty/scala-wechaty/blob/master/wechaty/src/main/scala/wechaty/user/Image.scala)

## Blogs and links

Do checkout the blogs and Github links to get more details about the Scala-Wechaty.

* [Blogs](https://wechaty.js.org/tags.html#scala)
* [GitHub Repo for Scala](https://github.com/wechaty/scala-wechaty)

## History

For more information on the Scala-Wechaty releases and its history the below link can be visited.

* [Scala Wechaty, @jcai, Jul 2, 2020](https://github.com/wechaty/scala-wechaty)

## Maintainers

* [@jcai](https://wechaty.js.org/contributors/jcai)
