---
title: "将 wechaty-puppet 升级为1.0以上版本"
author: wang-nan
categories: article
tags:
  - wechaty-puppet
  - wechaty-1.0
image: /assets/2022/01-upgrade-to-wechaty-puppet-1.0/cover.webp
---

## 将 wechaty-puppet 升级为1.0以上版本

## 前言

随着 Wechaty 1.0 版本的发布，Wechaty 的发展正式进入新的阶段，但要升级整套工具到1.0版本以上并不容易。这篇博客将简单介绍 wechaty-puppet 升级的主要注意事项，并提供一个简单的过渡方案。

## 总体思路

Wechaty 1.0采取了模块化、管道化的设计，将基础功能写在骨架（skeleton）中，然后通过mixin挂在登录、消息、io 等功能。这样做的主要目的是避免回调过多，以及方便测试。wechaty-puppet也采用这一思路重新设计，不同的导出被放在不同的模块中，而不是一股脑塞在 puppet 中。同时，puppet 实现应该自己引用需要版本的其他包例如 file-box 等。这也是降低耦合度的设计。

## 数据类型导出

如上一节所说，数据类型不再能直接从 wechaty-puppet 中导出，而是需要从不同的模块中导出，并且名字也有所修改。例如：

旧：

```ts
import { Puppet, ScanStatus, EventMessagePayload } from 'wechaty-puppet'

class xxxPuppet implements Puppet {
  // ...

  async onScan (status: ScanStatus, qrcode?: string) {
    
  }

  foo(message: EventMessagePayload) {

  }
}
```

应该改为：

```ts
import { payloads, types , Puppet } from 'wechaty-puppet'

class xxxPuppet implements Puppet {
  // ...
  async onScan (status: types.ScanStatus, qrcode?: string) {

  }

  foo(message: payloads.EventMessage) {

  }
}
```

## 状态管理

wechaty-puppet 将不再允许 puppet 修改状态（至少是不建议的）。同时， this.state 的属性也有所改变。应利用以下api获取状态：

```ts
this.isLoggedIn
this.state.active()
this.state.inactive()
```

## 启动、停止

从代码复用的角度考虑，wechaty-puppet 将接管 ```start``` 和 ```stop``` 方法，而 puppet 应该做的是重写 ```onStart()``` 和 ```onStop()``` 以执行启动停止所需要的逻辑。

## 其他

尽管在 wechaty-puppet@1.10 版本中，helpers 模块依旧提供了 file-box 的导出，但建议自己另行导入 file-box 等其他模块，这样如果需要使用 ```FileBoxTypes``` 类型枚举也能方便使用。
同时如果 puppet 要配合 wechaty-io-client 和 puppet-service 来提供远程服务，需要注意新版本对 token 的生成有一些新的要求。token 需要以一个 Server Name Indication (SNI) 作为前缀，例如 SNI 为 somesni ，则token应为 somesni_xxxx-xxx 的格式。同时，要有一个签名认证的 CA ,否则无法建立 TLS 。（可以通过将 insecure 作为前缀来绕过这一检查，但正如其名，这是不安全的。）。参考 [TLS & SNI Problem: cannot connect to Puppet Server after Wechaty 1.0 migiration](https://github.com/wechaty/puppet-service/issues/190)

## 过渡方案

[wechaty-puppet-1.0-migration](https://github.com/hcfw007/wechaty-puppet-1.0-migration)

wechaty-puppet-1.0-migration 包提供了一个过渡方案，使得你可以像以前从 wechaty-puppet 引用一样从 wechaty-puppet-1.0-migration 引用所需的模块，以第一段所说的代码为例：

从 wechaty-puppet-1.0-migration 导入：

```ts
import { Puppet, ScanStatus, EventMessagePayload } from 'wechaty-puppet-1.0-migration'

class xxxPuppet implements Puppet {
  // ...

  async onScan (status: ScanStatus, qrcode?: string) {
    
  }

  foo(message: EventMessagePayload) {

  }
}
```

注意，你仍需自己安装 wechaty-puppet 和 file-box ，这样就可以选择自己所需的版本。同时，你仍需重写 Puppet 类中修改的方法，例如 ```start()``` 改为 ```onStart()```。这一项目的目的是是你更少的修改代码以使用 wechaty-puppet 新版本的新特性，建议不要作为长期解决方案，并尽快迁移到新版本。
