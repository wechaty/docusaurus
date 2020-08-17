---
title: "当Grafana遇上Wechaty"
author: magina
categories: project
tags:
  - grafana
  - screenshot
  - wechaty
  - wechaty-puppet-padplus
  - monitor
image: 
---

> Author: [Magina](https://github.com/techxel)
> Code: [grafana-wechaty](https://github.com/techxel/grafana-wechaty) & [grafana-screenshot](https://github.com/techxel/grafana-screenshot)

## 背景

- 项目需求

近期公司需要执行巡检计划, 也就是运维人员每天专门查看监控系统, 定时上报性能指标, 目前是要求运维人员每小时上报一次, 也就是把整个业务的运行情况进行截图上报. 其实这就是个重复的工作, 没有必要耗费人力, 所以决定使用机器人处理.

<!--more-->

- 如何选择机器人

由于我们是小团队没有自己的办公通讯软件, 大家习惯使用微信, 企业号和微信公众号基本不在考虑之类, 有开发成本, 不想维护, 大家也不太爱看; 钉钉太重, 用不上那么多功能; `slack`是个好选择, 可惜在国内android手机无法接收到推送, 所以最终从简, 直接使用微信, 大家反映也会比较及时

- 微信有机器人吗

目前github上有很多关于微信机器人的项目, 其中99%都是封装web微信接口, 其实也够用, 但是有个问题, 新注册的微信现在无法使用web登录了, 我们也不太敢把自己的私人微信用作机器人, 主要原因还是怕被封禁, 后面偶然看到`wechaty-puppet-padplus`项目, 觉得这个方案可行, 具体原理可以关注官方介绍

## 如何实现

- Grafana截图

grafana自带`render`组件, 可以渲染到单个`panel`, 但是我们巡检是查看整个web页面, 有没有什么办法可以将整个web页面截图, 当然有, 后来我们发现了`selenium`, 它可以调用浏览器, 访问具体web页面进行截图.

```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
import time
import datetime
import os

# 输入用户名&密码, 点击登录
def login(drive,username,passwd):
    input = drive.find_element_by_xpath("//input[@name='user']")
    input.send_keys(username)

    input = drive.find_element_by_xpath("//input[@name='password']")
    input.send_keys(passwd)

    input.send_keys(Keys.ENTER)
    drive.implicitly_wait(300)

# 配置chrome参数, 让其在后台静默运行
options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument('--window-size=1280,1080');
#driver = webdriver.Chrome()
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

# grafana panel url
url = 'http://你的grafana页面?orgId=1&from=now-1h&to=now'

# create the image path
basedir = "你的截图保存路径/grafana-screenshot/res"
now = datetime.datetime.now()
savedir = basedir + '/' + str(now.year) + '/' + str(now.month) + '/' + str(now.day) + '/'
if not os.path.exists(savedir):
    os.makedirs(savedir)

try:
    driver.get(url)
    # 替换成你的 grafana 账号密码
    login(driver, 'admin', 'admin')

    # wait the page loading ...
    time.sleep(5)

    # save images
    driver.get_screenshot_as_file(savedir + str(now.hour) + ".png")
finally: # 无论成功与否, 都要关闭chrome进程, 以免耗费计算机资源
    driver.close()
    driver.quit()
```

具体环境配置, 请参照我的项目[grafana-screenshot](https://github.com/techxel/grafana-screenshot)

- 将截图定时发送到微信群

这里有两种方案, 其一是登录微信后, 启动定时任务, 按设定的时间定期执行. 其二是启动`http server`服务, 触发执行. 目前我们采用的第一种, 当然第二种我后面也会介绍, 毕竟更优雅一点

这里只给出定时任务部分代码:

```typescript
bot
  .on('scan', (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true
      })
    }
  })
  .on('login', (user: Contact) => {
    console.log(`login success, user: ${user}`)

    // 如果你想启动后, 发送一条通知给你的好友
    bot.Contact.find({id: '你的好友微信号'}).then(master => {
      if(master != null) {
        console.log(master)
        master.say("hello master!")
      }
    })

    // 如果你想启动后, 发送一条消息给监控群组
    bot.Room.load('你的room id, 可以通过message调试信息获取').say("巡检已启动!")

    // 样例, 整点发送grafana保存的监控图片
    setInterval(function() {
      const data = new Date()
      const hour = data.getHours()
      const min = data.getMinutes()
      if(hour > 8 && hour < 19 && min == 5) {
        const year = data.getFullYear()
        const month = data.getMonth() + 1  // 0 - 11, 0 means Jan
        const day = data.getDate()

        // 发送grafana保存的监控图片
        const filePath = year + '/' + month + '/' + day + '/' + hour + '.png'
        const fileBox = FileBox.fromUrl('http://你的图片地址/' +  filePath)
        bot.Room.load('你的room id').say(fileBox)
      }
    }, 60*1000);

  })
  .on('message', (msg: Message) => {
    console.log(`msg : ${msg}`)
  })
  .on('logout', (user: Contact, reason: string) => {
    console.log(`logout user: ${user}, reason : ${reason}`)
  })
  .start()
```

看过官方很多例子和第三方项目, 大部分是介绍怎么被动的回复消息, 其实这种主动发送消息也是很容易实现的, 本例子中, 当微信登录成功后, 启动定时任务, 每60s检测一次, 如果当前是整点5分, 则向微信群发送图片(前提是这个图片在之前生成好了)

> 为什么是5min执行, 因为我们截图程序是在整点执行, 推迟5分钟是确保图片已经生成好

- 使用 http server 方式

做了定时巡检功能后, 我们发现如果把告警功能接进来就更好了. 目前grafana支持多个app告警, 其中就包括钉钉, slack, 微信企业号, 但这里我们还是只想用微信, 所以我们选择了`webhook`方式, 希望产了告警, 将相关信息发送到我们的微信程序. 所里这里, 我们需要在代码中增加http server, 处理grafana的POST请求

代码片段:

```typescript
bot
  .on('scan', (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true
      })
    }
  })
  .on('login', (user: Contact) => {
    console.log(`login success, user: ${user}`)

    // 样例, 接受grafana webhook, 发送相关告警信息和图片至微信监控群组
    const server = http.createServer((req, res) => {

      if (req.method === 'POST') {
        // receive POST data
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString(); // convert Buffer to string
        });
        // if completed
        req.on('end', () => {
          console.log(body);
          const obj = JSON.parse(body);

          const room = bot.Room.load('你的room id')

          // 发送告警标题
          room.say(obj.title)

          // 发送告警数据
          let msg = ''
          obj.evalMatches.forEach((match: { metric: string; value: string }) => {
            msg += (match.metric + ': ' + match.value)
            msg += '\n'
          });
          if(msg != '') {
            room.say(msg)
          }

          // 发送告警图表
          const fileBox = FileBox.fromUrl(obj.imageUrl)
          room.say(fileBox)

        });
      }

      res.end('Hello, World!');
    });

    // 监听8080端口, 接受grafana的POST请求
    server.listen(8080);

  })
  .on('message', (msg: Message) => {
    console.log(`msg : ${msg}`)
  })
  .on('logout', (user: Contact, reason: string) => {
    console.log(`logout user: ${user}, reason : ${reason}`)
  })
  .start()
```

此过程需要在grafana配置`webhook`, 同时在`panel`处配置告警方式, 指定相应的webhook, 如果没有使用过grafana, 建议先了解下, 大部分监控告警都是这个套路

> 顺便提一下, 这里的`room id`, 你可以在`message`监听事件的日志中获取, 比如你向组群中发送一条消息, 再查看日志, 会有相应的room id打印

具体环境配置, 请参照我的项目[grafana-wechaty](https://github.com/techxel/grafana-wechaty)

## 最后实现效果

- 整点定时发送监控图片

![整点定时发送监控图片](/assets/2020/when-grafana-meet-wechaty/screenshot.jpg)

- grafana通过webhook发送告警信息

![整点定时发送监控图片](/assets/2020/when-grafana-meet-wechaty/webhook.jpg)
