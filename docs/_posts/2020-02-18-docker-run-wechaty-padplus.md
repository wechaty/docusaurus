# docker 部署 wechaty padplus

---

title: "docker 部署 wechaty padplus"<br />date: 2020-02-18 21:00 +0800<br />author: Darren<br />tags:<br /> - docker<br /> - padplus<br />---
<a name="tLMdR"></a>
# 前言
相信对刚接触wechaty的同学最难的问题无外乎两个：1、Token怎么申请 2、环境怎么配，我怎么都是搞不通。为此我在这里简单介绍下我个人在使用docker环境运行 wechaty padplus一点点经验，希望能帮助更多的人，节省在配置上的时间，把更多的时间放在自己的业务逻辑上。
<a name="Y7irA"></a>
# docker常规命令
<a name="huinE"></a>
## 镜像

```
# 搜索镜像
docker search *image_name*
eg: docker search wechaty

# 下载镜像
docker pull *image_name*

# 查看镜像
docker images

# 删除镜像
docker rmi  *image_name*


```

<a name="hRE4y"></a>
## 容器

```
# 运行
docker run image_name
docker run -it -d image_name
docker run -it -d –rm –name *container_name* image_name

参数说明：
i 进入交互模式
t 创建一个虚拟终端
d 后台运行
rm 退出后自动删除容器
name 创建的容器使用自定义的名字
注：i和t参数一起指定（-it），在实际操作时发现只指定i参数时，attach到实例时会出现卡死的情况。

# 查看容器
## 查看正在运行的容器
docker ps

## 查看所有容器[正在运行+已停止]
docker ps -a

# 删除容器
docker rm container_id
docker rm -v  container_id  

# 进入容器
docker exec -it container_id  bash 

```

<a name="4REXR"></a>
# docker部署

- 在本地创建一个`bot.js`文件，为了演示，这里直接把copy Demo里面的示例 [https://github.com/wechaty/wechaty-getting-started/blob/master/examples/basic/ding-dong-bot.js](https://github.com/wechaty/wechaty-getting-started/blob/master/examples/basic/ding-dong-bot.js)
```
const { Wechaty,config } = require('wechaty');
const { generate } = require('qrcode-terminal');

# 添加name属性，防止凌晨掉线

const bot = new Wechaty({
    profile : config.default.DEFAULT_PROFILE,
    name:'wechaty_bot'
  });

bot
.on('scan', (qrcode, status) => {
        const qrcodeImageUrl = [
            'https://api.qrserver.com/v1/create-qr-code/?data=',
            encodeURIComponent(qrcode),
        ].join('')

        console.log(`Scan QR Code to login: ${status}https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`);

        generate(qrcode, {
            small: true
        });
        log.info('StarterBot', '%s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)

    })
.on('login', user => {
        console.log(`User ${user} login.`)
    })
.on('message', message => {
        console.log(`Message: ${message}`)
    })
.start()


```

- 初始化本地环境，并且安装添加的包

```
npm init

npm install qrcode-terminal --save
```

在这里，我自己折腾了一两个小时，在本地的bot.js里面添加了wechaty-puppet-padpro ，怎么执行npm都不能成功，各种问题困扰，最后自己的看了下官方的docker文档【[https://hub.docker.com/r/zixia/wechaty/](https://hub.docker.com/r/zixia/wechaty/)】，才知道<br />wechaty-puppet-padpro 不需要本地安装，只需要传对应的变量到docker容器中去即可。

- 执行docker命令

```
docker run -t -i  --rm   
-e WECHATY_PUPPET="wechaty-puppet-padplus" 
-e  WECHATY_PUPPET_PADPLUS_TOKEN="申请的 padplus token"  
--volume="$(pwd)":/bot 
--name=wechaty 
zixia/wechaty:latest ding-dong-bot.js

# 这里需要注意下
WECHATY_PUPPET：对应的协议
WECHATY_PUPPET_PADPLUS_TOKEN：申请的token

这两个参数必须要一一对照，不能申请的是padplus的token，你协议这里填写的是另外的协议。

```


- 协议和环境变量

| Protocol | Puppet Provider | Environment Variable |
| --- | --- | --- |
| Web | PuppetPuppeteer | `export WECHATY_PUPPET=wechaty-puppet-puppeteer` |
| iPad | PuppetPadplus | `export WECHATY_PUPPET=wechaty-puppet-padplus` |
| Mac | PuppetMacpro | `export WECHATY_PUPPET=wechaty-puppet-macpro` |
| Mock | PuppetMock | `export WECHATY_PUPPET=wechaty-puppet-mock` |
| Web | PuppetWechat4u | `export WECHATY_PUPPET=wechaty-puppet-wechat4u` |
| iPad | PuppetPadpro **DEPRECATED** | `export WECHATY_PUPPET=wechaty-puppet-padpro` |
| iPad | PuppetPadchat **DEPRECATED** | `export WECHATY_PUPPET=wechaty-puppet-padchat` |

