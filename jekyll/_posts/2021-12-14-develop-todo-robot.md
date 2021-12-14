---
title: "开发一个TODO机器人"
author: nifan950624
categories: article
tags:
  - blog
  - study
  - record
image: /assets/2021/12-develop-todo-robot/develop-result.webp
---

## 引导

最近女朋友很生气，因为什么呢？实在是想不通，是自己说话太弱智了？只会发“多喝热水”吗，算了自己不会聊天，那交给机器人（让她经历过魔鬼）吧！

于是我找啊找，在 github 上找到了 [Wechaty](https://github.com/wechaty/wechaty) 这个项目，API 很是简单，举一个官网的例子吧

```js
import { Wechaty } from "wechaty";

async function main() {
  const bot = new Wechaty();
  bot
    .on("scan", (qrcode, status) =>
      console.log(
        `Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(
          qrcode
        )}`
      )
    )
    .on("login", (user) => console.log(`User ${user} logged in`))
    .on("message", (message) => console.log(`Message: ${message}`));
  await bot.start();
}

main().catch(console.error);
```

这样我们就创建了一个机器人实例，然后我们通过监听 `message` 事件，处理一些我们想要的操作比如 [Ding Dong Bot](https://github.com/wechaty/getting-started)。

那么我们步入正题，我们该如何实现一个更强大的机器人呢？

## 代码部分

我们先来实现 `onMessage` 函数

```js
module.exports = (bot) => {
  return async function onMessage(msg) {
    // 判断消息来自自己，直接return
    if (msg.self()) return;

    // 判断消息是黑名单,直接return
    if (shieldList.indexOf(msg.payload.fromId.toString()) != -1) return;

    // 判断公众号消息屏蔽
    if (msg.payload.fromId.search("gh") != -1) return;
    // 消息类型判断
    switch (msg.type()) {
      case bot.Message.Type.Text:
        var reg = /^[\u4e00-\u9fa5]+$/; // 文字正则
        console.log("获取到文本");
        // 回复信息是关键字 “加群”     测试成功
        if (await isAddRoom(msg)) return;
        // 回复信息是所管理的群聊名    测试成功
        if (await isRoomName(bot, msg)) return;
        // 开启机器人
        // 添加判断 不是指定群聊的信息不触发  [不加判断机器人，机器人会回复任意所在群聊内容。。。]
        if (msg.room()) {
          console.log("获取到群聊消息");
          roomMessageReply(msg);
        } else {
          personalSend(msg);
        }
        break;
      default:
        console.log("暂时不支持该类型的接收!");
        break;
    }
  };
};
```

> 分为群消息以及私人消息，分别调用 `roomMessageReply` 和 `personalSend` 方法

```js
async function roomMessageReply(msg) {
  const text = msg.text();
  if (await msg.mentionSelf()) {
    // 获取消息内容，拿到整个消息文本，去掉 @名字
    const sendText = text.replace(`@${name}`, "");
    // 获取@你的群友
    let member = msg.talker();
    await say(msg.room(), sendText, member);
  }
}
```

```js
async function personalSend(msg) {
  const contact = msg.talker(); // 发消息人
  const content = msg.text().trim(); // 消息内容

  say(contact, content);
}
```

它们统一调用 `say` 方法

```js
async function say(role, content, member) {
  const text = content.trim();
  // 指定关键字触发
  if (/^新闻/.test(text)) {
    const news = await getNews();
    role.say(news, member);
  } else if (/^油价/.test(text)) {
    const content = await getOilPrice();
    role.say(content, member);
  } else if (/^图片/.test(text)) {
    const type = text.replace("图片", "").trim();
    const src = await getGirlPic({ type });
    role.say(FileBox.fromUrl(src), member);
  } else if (/^save/i.test(text)) {
    const content = text.replace(/^save/i, "").trim();
    insertOne("todo", { content: content }, () => {});
  } else if (/^clear/i.test(text)) {
    deleteMany("todo", {}, () => {});
  } else if (/^update/i.test(text)) {
    const content = text.replace(/^update/i, "").trim();
    const [oldText, newText] = content.split("-");
    updateOne(
      "todo",
      { content: oldText },
      { $set: { content: newText } },
      (err, result) => {}
    );
  } else if (/^delete/i.test(text)) {
    const content = text.replace(/^delete/i, "").trim();
    deleteOne("todo", { content }, (err, result) => {});
  } else if (/^info/i.test(text)) {
    find("todo", {}, (err, results) => {
      if (err) return;
      let result = "";
      (result = results
        .map((v, index) => index + 1 + ". " + v.content)
        .join("\n")),
        role.say(result || "暂无TODO项", member);
    });
  } else {
    let content = await requestRobot({ question: text });
    role.say(content, member);
  }
}
```

分别用不同的**角色**调用发消息就实现了。这里的 if 判断如果觉得不好看，可以拆成模块的方式实现，做个 map 映射就能解决了，这里我就不多讲了。

API 来自天行，你可能需要注册一下获取 key，当然你也可以选择其他的，机器人一般是使用调取三方的的接口来实现回话的，只不过有点蠢蠢的。

这里我实现了一个记录 TODO 项的小功能，简单的 CRUD 功能, 使用到 mongodb

```js
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var connStr = "mongodb://127.0.0.1:27017/";
//连接数据库
function _connect(cb) {
  MongoClient.connect(connStr, function (err, client) {
    if (err) {
      console.log("失败");
    } else {
      //指定数据库的名字"bang"
      var db = client.db("robot");
      cb(db);
    }
  });
}
/***********************插入*******************************/
//插入一条记录
module.exports.insertOne = function (collection, obj, cb) {
  _connect(function (db) {
    db.collection(collection).insertOne(obj, function (err, results) {
      cb(err, results);
    });
  });
};
//插入多条记录
/*
 * collection:插入的集合，
 * arr:插入的文档
 * cb:回调函数。通过该函数返回执行的结果*/
module.exports.insertMany = function (collection, arr, cb) {
  _connect(function (db) {
    db.collection(collection).insertMany(arr, function (err, results) {
      cb(err, results);
    });
  });
};
/*********************查找**********************************/
//根据条件查找记录数
module.exports.count = function (collection, whereObj, cb) {
  _connect(function (db) {
    db.collection(collection)
      .count(whereObj)
      .then(function (count) {
        cb(count);
      });
  });
};
/*查找
 * collection：集合
 * obj:
 *   whereObj:条件，默认是{}
 *   sortObj:排序，默认是{}
 *   limit:显示提定条数,默认是0
 *   skip:跳过指定条数，默认是0*/
module.exports.find = function (collection, obj, cb) {
  //如果有条件，将条件赋值给obj.whereObj,没有传条件默认为{}
  obj.whereObj = obj.whereObj || {};
  obj.sortObj = obj.sortObj || {};
  obj.limit = obj.limit || 0;
  obj.skip = obj.skip || 0;
  _connect(function (db) {
    db.collection(collection)
      .find(obj.whereObj)
      .sort(obj.sortObj)
      .limit(obj.limit)
      .skip(obj.skip)
      .toArray(function (err, results) {
        cb(err, results);
      });
  });
};
/*
 * 查找一条记录*/
module.exports.findOne = function (collection, whereObj, cb) {
  _connect(function (db) {
    db.collection(collection).findOne(obj, function (err, results) {
      cb(err, results);
    });
  });
};
//根据ID来查找记录
module.exports.findOneById = function (collection, id, cb) {
  _connect(function (db) {
    db.collection(collection).findOne(
      { _id: mongodb.ObjectId(id) },
      function (err, results) {
        cb(err, results);
      }
    );
  });
};
/*********************修改******************************************/
//根据ID修改一条记录
module.exports.updateOneById = function (collection, id, upObj, cb) {
  _connect(function (db) {
    db.collection(collection).updateOne(
      { _id: mongodb.ObjectId(id) },
      upObj,
      function (err, results) {
        cb(err, results);
      }
    );
  });
};
//修改一条记录
module.exports.updateOne = function (collection, whereObj, upObj, cb) {
  _connect(function (db) {
    db.collection(collection).updateOne(
      whereObj,
      upObj,
      function (err, results) {
        cb(err, results);
      }
    );
  });
};
//修改多条记录
module.exports.updateMany = function (collection, whereObj, upObj, cb) {
  db.collection(collection).updateMany(
    whereObj,
    upObj,
    function (err, results) {
      cb(err, results);
    }
  );
};
/**********************删除**************************************/
//根据ID来删除一条记录
module.exports.deleteOneById = function (collection, id, cb) {
  _connect(function (db) {
    db.collection(collection).deleteOne(
      { _id: mongodb.ObjectId(id) },
      function (err, results) {
        cb(err, results);
      }
    );
  });
};
//删除一条记录
module.exports.deleteOne = function (collection, whereObj, cb) {
  _connect(function (db) {
    db.collection(collection).deleteOne(whereObj, function (err, results) {
      cb(err, results);
    });
  });
};
//删除多条记录
module.exports.deleteMany = function (collection, whereObj, cb) {
  _connect(function (db) {
    db.collection(collection).deleteMany(whereObj, function (err, results) {
      cb(err, results);
    });
  });
};
```

最终效果如下可以到[nifan.xyz](http://nifan.xyz/2021/12/15/%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E5%BE%AE%E4%BF%A1%E6%9C%BA%E5%99%A8%E4%BA%BA/)查看

## FQ

Wechaty web 端是免费的，但是现在好像不行了，当然你可以免费获取一个 7 天的 token [iPad protocol](http://pad-local.com/)，官方还提供一种方案那就是成为贡献者，具体请看[介绍](https://wechaty.js.org/docs/getting-started/running-locally), 还有更多的功能需要自己慢慢去开发，分享就到这里啦。
