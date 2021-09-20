---
slug: /polyglot/python/
title: 'Python Wechaty'
sidebar_label: Python
---

[![Python Wechaty](https://img.shields.io/badge/Wechaty-Python-blue)](https://github.com/wechaty/python-wechaty)

Python-wechaty is a Python programming language client derived from the Wechaty ecosystem, allowing developers to connect to various instant messaging software platforms with a small amount of code.Python-wechaty has been committed to improve code robustness, add community out-of-the-box tools, and improve the software development documentation.

## Features of Python-Wechaty

* Send and receive messages.
* Accept friendship from contact.
* Create rooms and invites members.
* Support Wechaty-plugin system.
* Provides powerful sample code library for robots.
* Easy to implement.

You can find more information on [Python-Wechaty-getting started](https://github.com/wechaty/python-wechaty-getting-started).The [General Architecture Diagram](https://wechaty.js.org/docs/polyglot/diy/) illustrates on how the Python-Wechaty can be implemented on the existing TypeScript Wechaty ecosystem.

## Getting Started

You can run the below commands for starting the Wechaty-Python.

```sh
git clone git@github.com:wechaty/python-wechaty-getting-started.git
cd python-wechaty-getting-started
make install
make bot
```

## Translation of TypeScript to Python

As the basic ecosystem of Wechaty is in TypeScript, we only need to translate it to Python. There is a hundred (100) lines of code in class named Image in charge of downloading the WeChat image to different sizes.
Below are the links to `Image` class for both TypeScript and Python for better understanding of the code and the translation.

* TypeScript: <https://github.com/wechaty/wechaty/blob/main/src/user/image.ts>
* Python: <https://github.com/wechaty/python-wechaty/blob/master/src/wechaty/user/image.py>

## History

For more information on the Python-Wechaty releases and history, visit the link below.

* [Python Wechaty Beta Released: A Simple Bot, wj-Mcat, Jun 17, 2020](https://wechaty.js.org/2020/06/17/python-wechaty-beta-released/)

## Blogs

The blogs related to Python-Wechaty are also listed below.

* [教你用python-wecahty和web协议开发机器人, @wj-Mcat, Apr 17, 2021](https://wechaty.js.org/2021/04/17/python-wechaty-use-web/)
* [Python-wechaty & wechaty-puppet-padlocal的初探, iivveess, Mar 8, 2021](https://wechaty.js.org/2021/03/08/python-wechaty-and-wechaty-puppet-padlocal/)
* [Python Wechaty如何使用PadLocal Puppet Service, Biofer, Feb, 3, 2021](https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/)

## Maintainers

* [@wj-Mcat](https://wechaty.js.org/contributors/wj-mcat)
