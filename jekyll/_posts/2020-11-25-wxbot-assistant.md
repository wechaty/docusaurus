### 基于wechaty实现微信机器人
#### 准备
独立开发第一步：打开GitHub 搜索关键字'wxbot'，按自己的喜好选择一个项目，我选择了基于node的WeChaty，因为对node熟悉一些。
不想看此文档的朋友可以点击这里去看[代码](https://github.com/WangTiangou/wxbot)，都写了注释，应该比较容易看懂。
#### wechaty简介
- Wechaty是适用于微信个人的Bot SDK ，可以使用6行 js 创建一个机器人。
- 具有包括linux，Windows，MacOS和 Docker 在内的跨平台支持，基于Node.js。
以上信息来自官网简述，详情点击查看 [文档](https://wechaty.js.org/v/zh/)

#### 实现过程
1. 初始化项目
`npm init`
2. 安装依赖
`npm install --save wechaty`
`npm install --save qrcode-terminal // 在终端输出二维码`
接下来就可以参照文档开发了
3. 初始化机器人

````JavaScript
const bot = new Wechaty({
  puppet: "wechaty-puppet-hostie",
  puppetOptions: {
    token: your token
  },
  name: your name,
})
````
4. 监听、启动 就可以了
````JavaScript
bot
  .on("scan", onScan) // 机器人需要扫描二维码时监听
  .on("room-join", onRoomJoin) // 加入房间监听
  .on("message", onMessage(bot)) // 消息监听
  .on("friendship", onFriendShip) // 好友添加监听
  .start()
````
5. 实现闲聊：机器人首先要实现的功能就是闲聊，在网上找了一个相关API，使用也很简单，点击查看[接口详情](https://drea.cc/forum.php)。
安装请求包和参数解码包
````
npm install --save request
npm install --save urlencode
````
6. 实现定时任务：我使用了一个定时任务库 [node-cron](https://github.com/kelektiv/node-cron)
目前只实现了 周一到周五下午6发送下班时间提醒，其他有意思的功能还在开发中。

#### 应用场景
1. 自动聊天：
    - 私聊机器人即可开始聊天
    - 群聊中通过`@[机器人]`可以和机器人聊天
2. 自动加群：
    - 聊天中发送关键字 即可被机器人邀请进群聊
    - 新的小伙伴进群后自动`@[刚进群的小伙伴]`发送欢迎语
3. 自动通过好友验证：
    - 有小伙伴添加机器人为好有时，可通验证关键字通过或设置自动通过
 4. 定时消息：
    - 每天固定时间机器人可以发消息，比如周一到周五下午6点发消息提示该下班了。

 #### 采坑记录
 1. web 微信登陆失败。
     - 我的微信号和我朋友的微信号都不能登陆成功，这个问题已经有好多大佬踩过坑了因此我没有为这个问题纠结。
     - 所以要申请免费token（当然你有钱也可以直接买）, 对微信协议的不同实现方式token也不同，需要注意的是不同的token 初始化机器人的方式稍有不同，请根据自己的token开发。
 2. 加群功能需要群ID，跑一下程序打印下就能看到群ID。
#### 最后
其实很多东西没有想的那么复杂，试一下就明了了。最后送大家一个表情包吧
![表情包](http://image.dbbqb.com/202011241813/2330d6c3c5f3c3ab3d991f9ddcc60a68/jd778)
不定期更新...