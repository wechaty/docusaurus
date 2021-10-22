---
 title: "小白入门：如何用科技拯救你的记忆力"
 author: stefan
 categories: article
 tags:
   - blog
   - study
   - introduction
 image: /assets/2021/10-how-to-save-your-memory-with-technology/bgc.webp
---

过去的一周接触到了 wechaty ，非常兴奋，首先对于这个神奇的东西感到惊奇，其次我是一个比较喜欢解决问题的人，可以用它解决很多实际问题，于是便开始了我的 wechaty 之路，下面和大家简单说一下我做的一个小demo，本文介绍使用的技术都是基本中的基本，几乎是对前端技术稍有了解的人就可以轻易完成，此举旨在帮助刚接触 wechaty 的同学（包括我）建立信心，不至于被挫败感吓跑。

## 开发需求

这个小功能的需求来源于我老婆，作为一个科研工作者，她在工作当中需要记录的东西很多，但有些情况又不能及时记录，所以常常会把一些需要记得东西发给我（如图），然后我一脸懵的还以为要我做什么，但是慢慢也就习惯人肉备忘录的设定，歪个楼，我老婆就是我的产品经理，碰到问题就找我，我的很多技术也是这样学会的：

 ![bofore](/assets/2021/10-how-to-save-your-memory-with-technology/before.webp)

 但是这种方法的弊端很多，微信毕竟是聊天软件，聊天记录掺杂过多，检索起来费时费力等缺点，于是我就尝试着寻找解决方法，此时恰巧碰到 wechaty，简单了解后，它完全解决了我当前的痛点，简就是直万事俱备，只欠coding了，话不多说，说干就干。

## 项目目录

  本次主要介绍的是onMessage.js 中的内容

  ```shell
  memory-assistant
    |── src
    |    |── index.js         # 入口文件
    |    |── config.js  # 配置文件
    |    |── onScan.js  # 机器人需要扫描二维码时监听回调
    |    |── onLogin.js  # 监听登录
    |    |── onMessage.js      # 消息监听回调
    |    └── storage-room.json  # 存储信息保存文件
    └── package.json            # 项目初始化文件
  ```

## 准备工作

### 技术需求

由于本人刚接触，所以尽量以最少的代码量及技术栈来实现功能

1. **wechaty**

    wechaty：用来接收微信发来的消息以及根据对应指令进行处理及响应

2. **nodeJs 基本操作**

    fs 文件操作模块：用来操作读写功能，实现数据保存

    path 系统路径模块：用来获取存储文件位置等操作

3. **javascript 相关技术**

    本文默认读者已熟悉 js 基本知识，如数组遍历、字符串拼接等相关操作

## 开发过程

### 项目构建

1. **wechaty 引入及协议配置**

    初始化项目文件夹，并安装以下依赖

    ```javascript
    // 链接转化二维码控制台输出
    cnpm i qrcode-terminal -D
   
    // wechaty核心包
    cnpm i wechaty -D
   
    // ipad协议包 按个人不同的token切换不同协议
    cnpm i wechaty-puppet-padlocal -D
    ```

   [wechaty官网](http://wechaty.js.org/)

   [token申请](http://pad-local.com/)

   如果没有 pad 协议 token 的可参考[web协议](http://wechaty.js.org/2021/04/13/wechaty-uos-web/)，感谢作者[@Leo chen](https://github.com/leochen-g)分享，需要注意的是web协议获取不到固定的id值以及部分接口无法使用，但是如果只针对一个人的话是可行的。

2. **入口文件 `index.js` 编写**

    ```javascript
    const { Wechaty } = require("wechaty");
    const { PuppetPadlocal } = require("wechaty-puppet-padlocal");
    const  QrcodeTerminal  = require("qrcode-terminal");
    const onMessage = require('./onMessage.js')
    const bot = new Wechaty({
      puppet: new PuppetPadlocal({
        token: "puppet_padlocal_token",  // 填写自己的token，一般长这样puppet_padlocal_asd4a564d56ad456s4d6a4256515
      }),
    });
    
    bot
      // 扫码登录
      .on("scan", (qrcode, status) => {
        console.log(`Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`);
        QrcodeTerminal.generate(qrcode);
      })
      // 登录监听
      .on("login", (user) => {
        console.log(user, "logined");
      })
      // 消息监听
      .on("message", onMessage)
      .start();
    ```

3. **消息处理文件 `onMessage.js` 文件之存东西**

    ```javascript
    // 发消息人
    const contact = msg.talker(); 
    // 消息内容
    const content = msg.text().trim(); 
    // 是否是群消息
    const room = msg.room(); 
    if (!room) {
      // 当前只处理非群消息，如果需要处理群消息可以利用 mention 相关接口
      if (
        content === "存东西" ||
        content === "怎么存东西" ||
        content === "咋存东西" ||
        content === "如何存东西"
      ) {
        contact.say(
          "你可以发送：存东西 钥匙 笔筒里 ，这样我就会帮你把钥匙存到笔筒里哦"
        );
      } else if (content.indexOf("存东西") >= 0) {
        //文件路径，__dirname为当前运行js文件的目录
        var file = path.join(__dirname, "./storage_room.json"); 
        let storageInfo = content.replace("存东西 ", "").split(" "); // ['钥匙', '鞋柜上']
        //读取json文件
        fs.readFile(file, "utf-8", function (err, data) {
          if (err) {
            console.log("文件读取失败");
          } else {
            // json 文件的数据
            let storage = eval("(" + data + ")");
            // 检查当前用户是否储存过
            let currentUser = storage.find((item) => {
              return item.id == contact.id;
            });
            // 数据库没有该用户，需要新建用户
            if (!currentUser) {
              console.log("当前用户没存储过，开始存储");
              // 没存过 ==> 新增
              let tempVal = {
                id: contact.id,
                data: [
                  {
                    name: storageInfo[0],
                    place: storageInfo[1],
                    date: new Date(),
                  },
                ],
              };
              storage.push(tempVal);
              fs.writeFile(
                "./storage_room.json",
                JSON.stringify(storage),
                function (err) {
                  if (err) {
                    console.error(err);
                  }
                  contact.say(`已经把${storageInfo[0]}放在${storageInfo[1]}了 [OK]`);
                }
              );
            } else {
              // 数据库存在当前用户
              let oldPlace = "";
              console.log("当前用户存储过，添加物品或更改位置");
              // 存过 ==> 更新位置
              let obj = currentUser.data.find((item) => {
                return item.name == storageInfo[0];
              });
              // 如果当前物品储存过，就需要更改位置
              if (obj) {
                // 更改位置
                oldPlace = obj.place;
                obj.place = storageInfo[1];
                obj.date = new Date();
              } else {
                // 如果当前物品没储存过，需要将当前物品push到储存列表中
                let newStorage = {
                  name: storageInfo[0],
                  place: storageInfo[1],
                  date: new Date(),
                };
                currentUser.data.push(newStorage);
              }
              // 写入文件添加物品
              fs.writeFile(
                "./storage_room.json",
                JSON.stringify(storage),
                function (err) {
                  if (err) {
                    console.error(err);
                  }
                  if (obj) {
                    // 更改位置文案提示
                    contact.say(
                      `已经把${storageInfo[0]}从${oldPlace}挪到了${storageInfo[1]}了 [OK]`
                    );
                  } else {
                    // 新建位置文案提示
                    contact.say(`已经把${storageInfo[0]}放到${storageInfo[1]}了 [OK]`);
                  }
                }
              );
            }
          }
        });
      } 
    }
    ```

4. **消息处理文件 `onMessage.js` 文件之找东西**

      主要逻辑是读取仓库文件，遍历仓库当前存储的用户中有没有当前发起请求的用户，没有的话就开始新建，如果该用户已经存储过，则查看当前用户请求存储的物品有没有在仓库中存储过，如果之前存储过该物品，则进行位置更新，如果之前没存储过该物品，则进行新建。

      ```javascript
      // 因与 step3 在同一个文件内，相关变量来源课参考 step3 
      if (content.indexOf("在哪") >= 0) {
        //文件路径，__dirname为当前运行js文件的目录
        var file = path.join(__dirname, "./storage_room.json"); 
        //读取json文件
        fs.readFile(file, "utf-8", function (err, data) {
          if (err) {
            console.log("文件读取失败");
          } else {
            let storage = eval("(" + data + ")");
            let currentUser = storage.find((item) => {
              return item.id == contact.id;
            });
            if (!currentUser) {
              return contact.say(
                "你还没有东西存在我这里哦，可以发送：存东西 钥匙 鞋柜上，这样我就能帮你把钥匙存到鞋柜上啦"
              );
            }
            let findThing = currentUser.data.find((item) => {
              return item.name == content.replace("在哪", "");
            });
            if (!findThing) {
              return contact.say(
                `仓库里还没有 ${content.replace(
                  "在哪",
                  ""
                )} 哦，可以发送 找东西 来查看仓库列表~`
              );
            }
            contact.say(
              `你忘了吗，你把 ${findThing.name} 放在了 ${findThing.place} ，找到了别忘了来感谢我哦~ `
            );
          }
        });
      } else if (content.indexOf("找东西") >= 0) {
        //文件路径，__dirname为当前运行js文件的目录
        var file = path.join(__dirname, "./storage_room.json"); 
        //读取json文件
        fs.readFile(file, "utf-8", function (err, data) {
          if (err) {
            console.log("文件读取失败");
          } else {
            let storage = eval("(" + data + ")");
            let currentUser = storage.find((item) => {
              return item.id == contact.id;
            });
            if (!currentUser) {
              return contact.say(
                "你还没有东西存在我这里哦，可以发送：存东西 钥匙 鞋柜上，这样我就能帮你把钥匙存啦！"
              );
            }
            let list = "储物清单\n\n";
            currentUser.data.forEach((item, index) => {
              list += index + 1 + ". " + item.name + "在" + item.place + "\n";
            });
            // 返回清单
            contact.say(list);
          }
        });
      } 
      ```

5. **仓库存储文件`storage-room.json` 内容**

      ```javascript
       [
         {
           "id": "tester",
           "data": [
             {
               "name": "靴子",
               "place": "鞋柜里",
               "date": "Sun Oct 10 2021 14:31:06GMT+0800"
             },
             {
               "name": "电脑",
               "place": "书房桌子上",
               "date": "Sun Oct 08 2021 18:21:06GMT+0800"
             },
             {
               "name": "钱包",
               "place": "床头柜里",
               "date": "Sun Oct 04 2021 09:14:06GMT+0800"
             },
             {
               "name": "保鲜膜",
               "place": "厨柜里",
               "date": "Sun Oct 09 2021 18:51:06GMT+0800"
             },
             {
               "name": "钥匙",
               "place": "笔筒里",
               "date": "Sun Oct 08 2021 08:16:06GMT+0800"
             },
             {
               "name": "乒乓球",
               "place": "阳台储物柜",
               "date": "Sun Oct 06 2021 15:17:06GMT+0800"
             }
           ]
         }
       ]
      ```

6. **消息处理流程示意图**

      ```mermaid
      graph TD
      A[Start] --> B(接收到存储请求)
          B --> C(读取数据库json文件)
          C --> D(是否存在该用户)
          D --> |Y| E(是否存在该物品)
          E --> |Y| I(更新物品位置)
          I --> |T| K(返回成功信息)
          I --> |F| L(返回失败信息)
          K --> | | Z[End]
          L --> | | Z
          E --> |N| J(创建物品位置)
          J --> |T| M(返回成功信息)
          J --> |F| N(返回失败信息)
          M --> | | Z
          N --> | | Z
          D --> |N| F(创建该用户以及物品位置)
          F --> |T| G(返回成功信息)
          F --> |F| H(返回失败信息)
          G --> | | Z
          H --> | | Z
      ```
      
6. **效果**

 ![now](/assets/2021/10-how-to-save-your-memory-with-technology/now.webp)

 > 作者: [stefan](https://github.com/stefan-ysh/)，流水线 coder，曾获得学习委员和尊师标兵荣誉称号。
