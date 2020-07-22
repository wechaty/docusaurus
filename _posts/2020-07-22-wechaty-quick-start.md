> 作者: [yeahliv](https://github.com/yeahliv)
>
> Github 仓库：[wechaty-quick-start](https://github.com/yeahliv/wechaty-quick-start)

# wechaty-quick-start

## wechaty 快速开始项目结构

```
|-- src //总目录
	|-- wechatyEvents // wechaty 事件目录
		|-- index.js // wechaty 事件入口文件
		|-- events // 事件目录
			|-- error.js // 错误处理事件
			|-- friend.js // 微信好友添加事件
			|-- invite.js // 微信群邀请事件
			|-- join.js // 加入微信群事件
			|-- leave.js // 退出微信群事件
			|-- login.js // 登录事件
			|-- loginout.js // 退出登录事件
			|-- msg.js // 微信来消息事件
			|-- scan.js // 扫描二维码事件
			|-- topic.js // 微信群名变动事件
|-- index.js // 入口文件
```

### /index.js 入口文件

```javascript
/**
 * @description 入口文件
 */

const { Wechaty } = require("wechaty") // 引入 wechaty
const { PuppetPadplus } = require("wechaty-puppet-padplus") // 引入基于 padplus的 puppet

const wyEvents = require('./src/wechatyEvents/index') // 引入 wechaty 事件

// 最好将配置存在变量里
const config = {
  token: '你的 token',
  name: '你的名字'
}

// 实例化 Wechaty 对象就是你的 ChatBot
const bot = new Wechaty({
  //  传入基于 padplus的 puppet 的实例化
  puppet: new PuppetPadplus({
    // 传入token，获取方式官方文档有，必须传入 token 才能正常启动
    token: config.token
  }),
  name: config.name
})


// 这里我比较懒,所以用遍历绑定事件处理
for (let key in wyEvents) {
  bot.on(wyEvents[key].name, wyEvents[key].handle)
}

// 启动
bot.start()
```

### /src/wechatyEvents/index.js

```javascript
/**
 * @description 所有 wechaty 事件汇总
 */

const events = {}

// 错误
// events.error = require('./events/error')

// 好友请求
events.friend = require('./events/friend')

// 邀请
events.invite = require('./events/invite')

// 入群
events.join = require('./events/join')

// 退群
events.leave = require('./events/leave')

// 登录
events.login = require('./events/login')

// 退出
events.loginout = require('./events/loginout')

// 消息
events.msg = require('./events/msg')

// 扫描
events.scan = require('./events/scan')

// 群名
events.topic = require('./events/topic')

module.exports = events
```

### /src/wechatyEvents/events/login.js

这里只举例 login.js 文件，其余文件均是事件

```javascript
/**
 * login event
 * @description 当机器人登录完全成功时，将发出登录事件
 */

module.exports = {
  name: 'login',
  /**
   * 处理登录成功回调
   * @param {Object} user 登录用户
   */
  async handle(user) {
    if (!user.payload) return

    const { name, weixin, id } = user.payload
    console.log(`登录成功，
    \n用户: "${name}"
    \n微信号: "${weixin}"
    \nID: "${id}"`)
  }
}
```

### 致谢

感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  

感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token