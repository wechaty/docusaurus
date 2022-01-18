---
title: "基于Wechaty的个人助理，++生活效率&&有效对抗内卷"
author: yzh1255245824
categories: article
tags:
  - assistant
  - wechat
  - improve-efficiency
  - against-involution
image: /assets/2022/01-wechaty-assistant/roll.webp
---

## 项目地址

[wechaty-assistant](https://github.com/yzh1255245824/wechat-bot-padlocal)

## 一、前言

由于常年穿梭于诸多小众网盘的qq群，我接触到了社交软件机器人这个概念。初次接触，便觉得甚是有趣，因而在一番检索之后，寻访到了`wechaty`这一宝地。

起初只是想做一个在微信群内和群友聊天水群的机器人，后来发现一些在酷安上费尽心机找到的宝藏软件的部分功能，可以简化移植到微信上，例如`密码键盘`这一功能。还有`定时消息`这种用处颇大的功能，此前只能提前编辑好消息，然后挑灯夜战、枕戈待旦，时机一到就手动点击发送，而现在借助`wechaty`，妈妈再也不用担心过年的时候12:00要发送的拜年请求过多、双十一也不必再纠结是先给女友发送恋爱纪念日快乐还是先去京东下单(太棒了！！)。

本项目借助`padlocal`作为puppet-provider，集成了个人常用的API服务商接口，同时接入了`微信对话开放平台`，你可以利用内嵌的小功能替代平时在网页中使用的在线小工具，也可以在凌晨四点给卷王们发送“我还在学”，诸多功能可点击项目地址下方链接体验。

再次特别致谢`wechaty`社区一众开发者们的辛勤付出，感谢你们的创造。

## 二、主要功能

### 2.1 私聊消息处理：关键词回复，包括

![people-message](/assets/2022/01-wechaty-assistant/menu.webp)

**在线实时数据获取服务由API服务商提供**

毒鸡汤
![IMG_20220115_210015.jpg](/assets/2022/01-wechaty-assistant/poisonsoup.webp)

神回复
![image.png](/assets/2022/01-wechaty-assistant/godreply.webp)

每日英语
![IMG_20220115_205958.jpg](/assets/2022/01-wechaty-assistant/oneen.webp)

全网热点
![image.png](/assets/2022/01-wechaty-assistant/networkhots.webp)

城市天气
![IMG_20220115_210107.jpg](/assets/2022/01-wechaty-assistant/weather.webp)

客服
![image.png](/assets/2022/01-wechaty-assistant/customerservice.webp)

**文本处理功能由本地编写算法处理**

英文字符串转大/小写
![image.png](/assets/2022/01-wechaty-assistant/toupper.webp)

rgb`<=>`hex
![image.png](/assets/2022/01-wechaty-assistant/rgbtohex.webp)

### 2.2 群管理

- 自动拉人入群
   - 通过私聊的快捷指令
- 快捷指令踢人
   - `踢@用户名`可快速踢出群聊  
![image.png](/assets/2022/01-wechaty-assistant/kicksb.webp)

```javascript
    /* 特权消息 */
    if (sender === config.MYSELF) {
      // 踢人功能  群里发送  踢@某某某  即可
      if (content.includes("踢@")) {
        //如果是机器人好友且昵称是自己的大号昵称  才执行踢人操作
        // edit at 0109：备注如果无法获取，等一段时间数据刷新即可。踢人要管理员权限
        if (contact.friend()) {
          const delName = content.replace("踢@", "").trim();
          console.log("踢出" + delName); // debug
          const delContact = await room.member({ name: delName });
          await room.del(delContact);
          await msg.say(delName + "已被移除群聊。且聊且珍惜啊！");
        }
      }
    }
```

- 检测群内非法`url`并`@`提醒对方
![image.png](/assets/2022/01-wechaty-assistant/listenurl.webp)

```javascript
const urlReg =
  /(http(s)?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:[0-9]{1,5})?[-a-zA-Z0-9()@:%_\\\+\.~#?&//=]*$/g;  // 匹配url的正则表达式(实际情况下，url发送者多数不会添加http(s)头)

    else if (urlReg.test(msg.text())) {
      urlReg.lastIndex = 0; // 索引重置

      const testUrl = urlReg.exec(msg.text());

      const valid = await superagent.checkUrl(testUrl[0]);
      if (!valid) {
        const room = msg.room();
        // const master = await room.member(config.BOTNAME);
        await room.say(
          `@${msg
            .from()
            .name()} 为了群主与众管理员的法律安全，本群禁止发送不明链接!!!`
        );
        console.log("链接不合法"); // debug
        return true;
      }
    }
```

### 2.3 自动处理好友请求

- 自动通过好友请求
- 可限制通过填写指定验证消息的好友
   - 避免陌生人添加好友

### 2.4 智能对话（接入微信对话开放平台）

- 未被关键词捕获的消息将由**训练好的AI**智能回复
```javascript
WXAI_TOKEN: "your token", // 微信对话开放平台token
```

```javascript
const axios = require("axios");
const WXAI = "https://openai.weixin.qq.com/openapi/";  // 微信对话开放平台

/**
 * @function 获取API签名，2小时过期
 * @returns 签名
 * @tips 改为轮询
 */
async function getSignature() {
  const {signature} = (await axios.post(`${WXAI}sign/${WXAI_TOKEN}`, {
    userid: 'anything' // 这里可以是任意值
  })).data;
  return signature;
}

/**
 * @function 调用AI接口，获取答案
 * @param {签名} signature
 * @param {用户id} userid 
 * @param {接收到的文本} text 
 * @returns AI给出的答案
 */
async function getAnswer(signature, userid, text) {
  const {answer} = (await axios.post(`${WXAI}aibot/${WXAI_TOKEN}`, {
      signature: signature,
      userid: userid,
      query: text,
  })).data;
  return answer;
}
```

- 微信对话开放平台详细配置可去`四`中链接出查阅

### 2.5 设置定时任务(可循环、可单次）

- 定时发送群消息，登录时任务开始执行
   
```js
   /**
    * @func 8点半定时给指定群发送消息
    */
   async function rolling() {
     schedule.setSchedule( // node-schedule使用方法可见官方文档,此处语法不唯一
       {
         hour: 8,
         minute: 30,
       },
   
       async () => {
         const room = await bot.Room.find({
           topic: config.WEBROOM,
         });
         const today = moment().format("MM月DD日");
         let poison = await superagent.getSoup(); //毒鸡汤
         const str = `今天是${today},你学废了吗?${poison}`;
         await room.say(str);
       }
     );
   }
``` 
   
- 定时给个人发送消息

![image.png](/assets/2022/01-wechaty-assistant/schedule.webp)

`2022年1月14日4点0分0秒`向备注为`樊庆元`的联系人发送`“我刚学完，早安”`
让卷王们感受恐惧吧！！！
```js
   if ((await contact.alias()) === config.MYSELF) {
       if (content.includes("定时")) {
         console.log("定时");
         const remain = content.replace("定时", "").trim(); // 分割指令文本
   
         const timeAndStr = remain.split(" "); // 时间和消息内容
   
         const timeStr = timeAndStr[0].split("."); // 精确时间
         const txt = timeAndStr[1]; // 消息文本
         const target = timeAndStr[2]; // 收信人备注
         const date = schedule.scheduleMsg(timeStr);
   
         schedule.setSchedule(
           date,
           async function (txt, target) {
             const contact = await bot.Contact.find({ alias: target }); // 收信人
             console.log(`向${contact.name()}发送'${txt}'`);
             contact.say(txt);
           }.bind(this, txt, target) // 通过bind()可向内部函数挂载参数
         );
         return true;
       }
   }
```
   
### 2.6 密码簿

该功能可用于记录**常用的冗长文本**，例如身份证号、银行卡号、购物时的好评模板等等。

- 通过指令`map key value`可记录标签为`key`，内容为`value`的密码（在`password`目录下生成文件）

![image.png](/assets/2022/01-wechaty-assistant/map.webp)

```js
else if (content.includes("map")) { // map key value
      let command = content.replace("map", "").trim(); 
      command = command.split(' ');
      let key = command[0];
      key = cipher.md5(key); // 文件名加密
      let value = command[1];
      value = cipher.aes128(value); // 文件加密
      console.log('writefile:  ' + value);
      fs.writeFile(path.join(__dirname, '/../password', key), value, (err) => {
        if(err) console.error('writeFileErr: ' + err);
      });
      return true;
}
```

- 通过指令get key可以获取标签为key的密码

![image.png](/assets/2022/01-wechaty-assistant/get.webp)

```js
else if (content.includes("get")) { // get key
      let key = content.replace("get", "").trim(); 
      key = cipher.md5(key);
      fs.readFile(path.join(__dirname, '/../password', key), (err, data) => {
        if (err) console.error('readFileErr: ' + err);
        const detail = cipher.unaes128(data.toString());
        console.log('readfile:  ' + detail); // 文件解密
        msg.say(detail);
      })
      return true;
}
```

- 文件加密

**文件名通过`md5`算法比对**

```js
   const crypto = require("crypto");
   
   /**
    * @func 文件名加密
    * @param {明文} str 
    * @returns 加密后的字符串
    */
   const md5 = function (str) {
     const hash = crypto.createHash("md5");
     hash.update(str);
     return hash.digest("hex");
   };
``` 

**文件内容通过`aes-128-cbc`算法加密**

![image.png](/assets/2022/01-wechaty-assistant/encrypt1.webp)
![image.png](/assets/2022/01-wechaty-assistant/encrypt2.webp)

```js
   /**
    * @func aes-128-cbc加密算法封装
    * @param {密钥} key 
    * @param {初始化向量} iv 
    * @param {明文} data 
    * @returns 
    */
   function encrypt(key, iv, data) {
     let cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
     return cipher.update(data, "utf8", "base64") + cipher.final("base64");
   }
   
   /**
    * @func aes-128-cbc解密算法封装
    * @param {密钥} key 
    * @param {初始化向量} iv 
    * @param {密文} data 
    * @returns 
    */
   function decrypt(key, iv, encrypted) {
     encrypted = Buffer.from(encrypted, "base64");
     let decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
     return decipher.update(encrypted, "utf8") + decipher.final("utf8");
   }
   
   /**
    * @func 加密文件内容
    * @param {明文} data 
    * @returns 加密后的文件内容
    */ 
   const aes128 = function (data, key="123456789abcdefg", iv="123456789abcdefg") {
     return encrypt(key, iv, data);
   };
   
   /**
    * @func 解密文件内容
    * @param {密钥} key 
    * @param {初始化向量} iv 
    * @param {密文} data 
    * @returns 
    */
   const unaes128 = function (data, key="123456789abcdefg", iv="123456789abcdefg") {
     return decrypt(key, iv, data);
   };
``` 

## 三、目录结构

- `config`文件夹存放公共配置文件以及`superagent`请求相关配置
- `imgs`存放相关图片
- `listeners`存放机器人初始化后一系列事件处理(分模块) 
   - `on-friendship.js`处理好友请求
   - `on-login.js`处理登录
   - `on-message.js`处理用户消息、群消息
   - `on-scan.js`处理登录二维码
- `schedule`对定时任务`node-schedule`库进行了封装
- `superagent`存放所有的数据请求、接口封装都在此
- `utils`公用方法的封装
- `app.js`入口文件

## 四、如何本地化

需修改`config`配置，将里面的配置改为自己的。打开`config/index.js`文件， 操作如下：

**官网注册账号**

wechaty-puppet-padlocal供应商：[http://pad-local.com/](http://pad-local.com/)
天行数据官网：[https://www.tianapi.com/](https://tianapi.com/)  		
聚合数据官网：[https://www.juhe.cn/](https://www.juhe.cn/) 
微信对话开放平台：[https://openai.weixin.qq.com/](https://openai.weixin.qq.com/)

**注册成功后，申请以下接口**

天行数据
[每日英语一句话](https://www.tianapi.com/apiview/62)
[神回复](https://www.tianapi.com/apiview/39)
[全网热搜榜](https://www.tianapi.com/apiview/223)

聚合数据 
[天气预报](https://www.juhe.cn/docs/api/id/73)

注册后请打开`config/index.js`，将顶部`PUPPET_TOKEN`、`TXAPI_TOKEN`、`JUHEAPI_TOKEN`、`WXAI_TOKEN`改为自己的即可 

其他免费接口可随意申请，也可以自行更换API服务商。

## 五、运行

**记得安装依赖**

```bash
cnpm install
```

```bash
cnpm start
```

终端会出现一个二维码，扫码登录即可。

若二维码显示的很诡异，无法扫描，请更换终端（去微软商店下载`Windows Terminal`）。

有问题可邮箱咨询 `01@yizhihang.club`
