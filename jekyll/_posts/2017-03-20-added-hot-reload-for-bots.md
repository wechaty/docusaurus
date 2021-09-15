---
title: '给微信机器人添加热重启功能'
author: gcaufy
categories: feature
tags:
  - code
image: /assets/2017/gcaufy-hot-reload-screencast.gif
---

![avatars](https://avatars3.githubusercontent.com/u/2182004?v=3&s=88)

Wechaty解决了很多我在使用微信运营过程中的痛点问题，这里就不再一一赘述了。同时Wechaty的API设计简洁优雅，部署方便也是另外一个吸引我的地方。

快速上手后，在开发调试过程中，修改代码需要频繁重启Wechaty程序。相信绝大多数人都有着类似的问题， 下面就聊一聊怎么避免类似问题。

## 1. 问题分析

在开发调试过程中，修改代码后必须重启Wechaty程序。每次重启大概会花上30s-60s左右。还需要开发者频繁扫码登陆，对于在调试阶段的程序来说，成本还是很高的。因此考虑从这里入手看能否优化这里的启动时间。

对于扫码登陆的问题，从Wiki中找到[答案](https://github.com/wechaty/wechaty/wiki/API#wechaty-class)：

>**Wechaty.instance(profile:string): Wechaty**
>
>profile(OPTIONAL): profile name. if a profile name is provided, wechaty will save login status to it, and automatically restored on next time of wechaty start(restart).
>
> * can be set by environment variable: WECHATY_PROFILE

也就是说设置一个profile就可以记住登录态，避免重启时的重复扫码动作。
扫码问题可以得到解决，那么30-60s的启动时间是否还可以进一步优化呢？那就得弄清楚这30s的时间里，程序都在做什么。

通过查看源代码 [browser-driver.ts](https://github.com/wechaty/wechaty/blob/main/src/puppet-web/browser-driver.ts) 发现，在执行init时，程序会启动一个driver，可以看作是打开了一个浏览器，然后获取浏览器 session，重复尝试三次直到失败。这里是Wechaty运行的基础，我们没有办法从这里去避免这30s的时间开销。只能从另外的方面去思考。

## 2. Node.js 热重启

这里实际就是Node.js本身的特性了，与Wechaty本身关联不大。可能通过监听文件改动从而动态加载模块内容，这里首先就要了解Node.js的模块缓存机制，参看[module.js](https://github.com/nodejs/node/blob/master/lib/module.js)关键代码：

```ts
// Check the cache for the requested file.
// 1. If a module already exists in the cache: return its exports object.
// 2. If the module is native: call `NativeModule.require()` with the
//    filename and return the result.
// 3. Otherwise, create a new module for the file and save it to the cache.
//    Then have it load  the file contents before returning its exports
//    object.
Module._load = function(request, parent, isMain) {
    if (parent) {
        debug('Module._load REQUEST %s parent: %s', request, parent.id);
    }
    var filename = Module._resolveFilename(request, parent, isMain);
    var cachedModule = Module._cache[filename];
    if (cachedModule) {
        return cachedModule.exports;
    }
    if (NativeModule.nonInternalExists(filename)) {
        debug('load native module %s', request);
        return NativeModule.require(filename);
    }
    var module = new Module(filename, parent);
    if (isMain) {
        process.mainModule = module;
        module.id = '.';
    }
    Module._cache[filename] = module;
    tryModuleLoad(module, filename);
    return module.exports;
};

require.cache = Module._cache;
```

如果Node.js已经require某个模块后，模块更新后，再次require这个模块时，实际读取的是内存中的原模块的缓存。除非手动清除掉`require.cache`的内容，这样才能重新加载更新后的模块内容。因此参照Node.js源码写出require缓存清除方法：

```ts
// purge require cache
const purgeCache = (moduleName) => {
    var mod = require.resolve(moduleName);
    if (mod && ((mod = require.cache[mod]) !== undefined)) {
        (function traverse(mod) {
            mod.children.forEach(function (child) {
                traverse(child);
            });
            delete require.cache[mod.id];
        }(mod));
    }

    Object.keys(module.constructor._pathCache).forEach(function(cacheKey) {
        if (cacheKey.indexOf(moduleName)>0) {
            delete module.constructor._pathCache[cacheKey];
        }
    });
};
```

再利用`fs.watch`或者`chokidar`之类的库完成文件监听功能，实现文件改动后重新加载模块：

```ts
fs.watch('./somedir', (e, filename) => {
     purgeCache(`./somedir/${filename}`);
     require(`./somedir/${filename}`);
});
```

## 3. 逻辑抽离

在使用Wechaty的时候，开发者更多的是关心事件响应，比如响应扫码事件、好友请求事件、发送消息事件等等。因此可以单独将这些响应事件抽离出来。如果我需要关注好友请求事件，那么我就添加一个`friend.js`去处理。如果我需要关注发消息事件，那么就去添加一个`message.js`去处理。相反，不需要了我删除掉该js文件即可。每一个文件就是一个事件处理器。代码如下：

```ts
const EVENT_LIST = ['scan', 'logout', 'login', 'friend', 'room-join', 'room-leave', 'room-topic', 'message', 'heartbeat', 'error'];

let eventHandler = {};

// Load lisenter
const loadListener = (evt) => {
    let fn;
    try {
        fn = require(`./listener/${evt}`);
        console.log(`binded listener: ${evt}`);
    } catch (e) {
        fn = () => void 0;
        if (e.toString().indexOf('Cannot find module') > -1) {
            console.warn(`listener ${evt} is not defined.`);
        } else {
            console.error(e);
        }
    }
    return fn;
}

// Bind events
EVENT_LIST.forEach(evt => {
    eventHandler[evt] = loadListener(evt);
    bot.on(evt, eventHandler[evt]);
});
```

## 4. 整合

接着就是整合逻辑代码与热重启功能，让每个事件处理器都具有热重启功能。

```ts
fs.watch('./listener', (e, filename) => {
    let evt = filename.substring(0, filename.length - 3);
    console.log(`${e}: ${filename}`);

    if (EVENT_LIST.indexOf(evt) > -1) {
        if (e === 'change') {
            console.log(`${evt} listener reloaded.`);
            purgeCache(`./listener/${evt}`);
            // It may read an empty file, if not use setTimeout
            setTimeout(() => {
                bot.removeListener(evt, eventHandler[evt]);
                //console.log('filecontent: ' + fs.readFileSync(`./listener/${evt}.js`));
                eventHandler[evt] = loadListener(evt);
                bot.on(evt, eventHandler[evt]);
            }, 1000);
        } else if (e === 'rename') {
            console.log(`${evt} listener removed.`);
            bot.removeListener(evt, eventHandler[evt]);
            eventHandler[evt] = () => void 0;
            bot.on(evt, eventHandler[evt]);
        }
    }
});
```

检测到`./listener`目录下的文件改动后，自动删除原来事件监听并且更新，这样就完美的实现了Wechaty免重启开发调试了。

最后，还需要一个环境变量来区分开发模式和线上模式，在线上模式中就不需要使用热重启功能。

```ts
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
    fs.watch('./listener', ....);
}
```

这样就可以通过以下命令来进入开发模式或者线上模式了。

```ts
// development
docker run -ti --rm --volume="$(pwd)":/bot zixia/wechaty index.js

// production
docker run -ti -e NODE_ENV=production --rm --volume="$(pwd)":/bot zixia/wechaty index.js
```

附热重启机器人效果图：

![hot-reload][gcaufy-hot-reload]

到这里就基本介绍完了本篇文章的全部内容了，可以使用[example代码](https://github.com/wechaty/wechaty/tree/master/example/hot-reload-bot)来体验。

作者：@[Gcaufy](https://github.com/gcaufy), Tencent, [Wechaty Contributor](https://github.com/orgs/Chatie/teams/contributor)

[gcaufy-hot-reload]: /assets/2017/gcaufy-hot-reload-screencast.gif
