---
title: "Wonderful Wechaty devops toolset"
author: windmemory
categories: announcement
tags: 
  - devops
  - tool
  - talk
  - news
  - featured
image: /assets/2020/wonderful-wechaty-devops-tools/teaser-image.png
---

Wechaty 的代码质量，是大家公认的比较高的水准。而在整个项目的搭建和发展的过程中，DevOps 工具是 Wechaty 代码质量的重要保证，这里，就和大家一起聊聊关于 Wechaty DevOps Toolset。

## Wechaty DevOps family

这里主要给大家介绍以下几个重要的 Wechaty DevOps 工具：

- [@chatie/semver](#@chatiesemver) NPM 版本检查工具
- [@chatie/git-scripts](#@chatiegit-scripts) Git 脚本合集
- [@chatie/tsconfig](#@chatietsconfig) 中心化 tsconfig 配置
- [@chatie/eslint-config](#@chatieeslint-config) 中心化 eslint 配置

## @chatie/semver

`@chatie/semver` 是一个很简单的 NPM 包，主要负责帮助检查当前包的版本是属于开发版，还是稳定版，并且提供了 typescript 和 shell CLI 两种使用方式。这个包通常是作为辅助包，供其他的脚本来调用的。

![VersionIntro][version-intro]

`Wechaty` 的版本控制遵循了 `Linux Kernel Version Numbering`，如上图所示，`Wechaty` 使用 minor version 的奇偶来区分当前版本是开发版还是稳定版。

- 奇数版 -> 开发版 -> @next
- 偶数版 -> 稳定版 -> @latest

### Example

`package-publish-config-tag.sh` in `@chatie/git-scripts`

```shell
#!/usr/bin/env bash
set -e

VERSION=$(npx pkg-jq -r .version)

if npx --package @chatie/semver semver-is-prod "$VERSION"; then
  npx pkg-jq -i '.publishConfig.tag="latest"'
  echo "production release: publicConfig.tag set to latest."
else
  npx pkg-jq -i '.publishConfig.tag="next"'
  echo 'development release: publicConfig.tag set to next.'
fi
```

可以看到，上面的 shell 脚本通过调用 `@chatie/semver` 来判断当前的版本，然后根据返回结果给开发版打上 `@next` 的 tag，给稳定版打上 `@latest` 的 tag。

更多请参考 [@chatie/semver repo](https://github.com/chatie/semver)

## @chatie/git-scripts

`@chatie/git-scripts` 是一些 `git` 脚本的集合，里面主要包括下面几个非常常用的脚本：

- [npm-pack-testing.sh](#npm-pack-testingsh) NPM 打包测试脚本
- [package-publish-config-tag.sh](#package-publish-config-tagsh) NPM 自动 tag 脚本
- [pre-push.sh](#pre-pushsh) Git push 自动检查/升版脚本

### npm-pack-testing.sh

这个脚本主要做了以下几件事情：

> 1. 将代码打包成npm包格式
> 1. 创建临时文件夹
> 1. 以npm install的方式安装刚才的包
> 1. 执行smoke-test来验证打包正确性

通过这样四步，可以完整的模拟一个 NPM 包在打包后，依次经历安装，引用，运行的过程，并且在 NPM 发包前保证这个包被发出去了之后，不会出现无法安装，安装后无法运行的情况，而且通过自动化的脚本，也省去了开发过程中对打包情况的测试，大大提升了开发效率，还保证了 NPM 包的健壮性。

### package-publish-config-tag.sh

这个包就是上面已经给出的例子，主要通过执行脚本，调用 `@chatie/semver` 来针对开发版和稳定版打上不同的 tag，在此不赘述。

### pre-push.sh

这个包主要做了以下三件事情：

> 1. 执行 npm lint 检查代码格式
> 1. 如果格式无误，则升级npm版本
> 1. 执行push

但是接触过这个脚本的同学，可能曾经看到过类似这样的画面：

![GitPushError][git-push-error]

这个情况看起来就非常诡异

![QuestionFace][question-face]

上面是一个大大的 Success Push，但是下面却有一行 error？

为了研究明白为什么会发生这个事情，我研究了一下这个脚本主要用到的功能 `Git Hooks` 到底是怎么回事。

### Git Hooks

`Git Hooks` 的主要作用是，在 `push` 操作前，给用户一个 hook，可以自由执行自己觉得有用的检查，来保证 `push` 的代码是好的。所以 `Git Hooks` 会根据用户指定的那个脚本的返回值来判断用户是否希望 `git` 把这个代码 `push` 上去。如果返回的结果是 0，则说明验证通过，如果是非 0 的返回，则会被认为是脚本执行失败了，然后 `git` 会终止后面的 `push` 操作。

另外，`Git Hooks` 在设计之初，应该是为了防止用户在做代码检查的时候，修改一些 `git` 相关的内容，比如 `commit` 信息，具体 `push` 的代码等等，所以 `Git Hooks` 会在执行用户指定的脚本前，锁定当前需要被 `push` 的所有内容，等待用户的检查结束后，直接将之前锁定的内容推到远程，这样可以保证用户无论做什么检查，都不影响 `push` 的正确执行。也正是这个原因，导致了我们上面看到的那个奇怪的现象，具体如下图：

![GitHooksExplain][git-hooks-explain]

可以看到，在当前的 `pre-push.sh` 脚本中会升级当前包的版本，版本被升级到了 `v1.0.1`，但是这个变化其实对于 `git` 来说，是不可见的。所以如果想要保留这个版本的变更，就只能在运行的脚本内直接执行 `git push` 来把当前的新版本推到远端。那如果这样做了之后，就不能再以 code 0 作为脚本的退出了，否则 `git` 会自动再次执行之前一直在等待着的 `git push` 并且尝试把 `v1.0.0` 推到远端，然后得到一个 conflict 的报错。所以在这里，`pre-push.sh` 脚本就以 code `127` 退出，终止后续 `git` 自带的 `push` 操作。

### 禁用

有时候，可能我们就需要推一些无法通过 linting 的代码到远端分支，比如说我们写了一半的代码，想换一台电脑来调试，需要通过 Github 作为代码中转，把代码搞到另外的环境里。那么其实 `pre-push.sh` 脚本是提供了一个方式来禁用它的，如下：

```shell
NO_HOOK=1 git push
```

以这样的方式执行就可以跳过 `pre-push.sh` 脚本里面的所有检查，直接执行 `git push` 操作。

### 限制

也正是因为上面所述的原因，使用这个 `pre-push.sh` 脚本是有一些限制的，最明显的一个限制就是无法使用稍微复杂的 `git push` 指令，例如：

```shell
git push -u origin very-sexy-code-change
```

所以，如果需要执行类似的复杂指令，只能采取一些 workaround。比如说用上面提到的 `NO_HOOK=1` 的方式先推送一次，把远程的分支创建出来，然后后续再使用 `git push` 来推代码。

## @chatie/tsconfig

这个包是为了集中管理所有 `Wechaty` 项目的 `tsconfig.json` 文件而创建的。这个包会提供一个基础的 `tsconfig` 配置，方便引入。并且，这个包还包含了一个安装程序，如果安装这个包的时候，项目目录里面还没有 `tsconfig.json` 文件，`@chatie/tsconfig` 会自动创建一个 `tsconfig.json` 文件在根目录下，并且自动引用 `@chatie/tsconfig` 的配置。

## @chatie/eslint-config

这个包是负责管理所有 `Wechaty` 项目的 `eslintrc.js` 文件。因为 `tslint` 项目已经 [deprecated](https://github.com/palantir/tslint/issues/4534)，所以 `Wechaty` 所有项目都使用 `eslint` 管理。

这个包主要提供了一个统一的 `eslint` 配置，并且以良好的 `TDD` 思想来搭建项目。

## 总结

`Wechaty` 的 devops 工具是由很多小的组件组成，每个组件都只负责一小部分功能，但是每个小组件都经过了反复的迭代更新，为 `Wechaty` 的所有项目的代码质量保驾护航。希望大家能通过这篇博客了解到以上几项工具的作用和使用。

`Wechaty` 的 devops 还有另外的一个重要组成部分，那就是 `Github Actions`，这篇博客由于时间原因，没有时间准备完整的内容，后续会持续更新更多关于 `Wechaty DevOps` 相关的内容，也欢迎大家一起来了解学习 `Wechaty DevOps`。

[version-intro]: /assets/2020/wonderful-wechaty-devops-tools/version-intro.png
[git-push-error]: /assets/2020/wonderful-wechaty-devops-tools/git-push-error.jpg
[question-face]: /assets/2020/wonderful-wechaty-devops-tools/question-face.png
[git-hooks-explain]: /assets/2020/wonderful-wechaty-devops-tools/git-hooks-explain.png

> Author: [@windmemory](https://github.com/windmemory) Wechaty contributor, author of [wechaty-puppet-padchat](https://github.com/wechaty/wechaty-puppet-padchat), [wechaty-puppet-padpro](https://github.com/wechaty/wechaty-puppet-padpro), [wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus). CTO of [Juzi.Bot](https://pre-angel.com/portfolios/juzibot/)
> Code: [@chatie/semver](https://github.com/chatie/semver), [@chatie/git-scripts](https://github.com/chatie/git-scripts), [@chatie/tsconfig](https://github.com/chatie/tsconfig), [@chatie/eslint-config](https://github.com/chatie/eslint-config)
