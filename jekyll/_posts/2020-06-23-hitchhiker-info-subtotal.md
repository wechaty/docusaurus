---
title: "北京周边跨城顺风车消息汇总"
author: sking
categories: project
tags:
  - nodejs
  - padplus
  - travel
  - mysql
image: /assets/2020/info-subtotal/head.jpeg 
---

北京的房价涨幅对于北漂的工资涨幅来说永远都是高不可攀的；有很多人到了成家立业的年纪，又不想回到老家，所以距离北京近，房价可以接受的北京周边就是就是一个不错的选择，但是在环京买了房，工作还是在北京，由此衍生出了一批跨城上下班的圈子。
由于北京车牌限制，限行策略，堵车等问题，所以导致很多人不能愉快的自驾上下班，坐公共交通工具又不是特别方便，所以大家会选择和邻居或是朋友拼车上下班，既方便了大家通勤，也节省了路上的开销成本。
但是由于拼车群人多，各种和拼车消息无关的夹杂在其中不能让有需要的人快速找到适合自己路线的顺路车。

## 项目说明

在两年前，我已经基于web协议的wechaty做过一个版本，有微信公众号和微信小程序两个客户端供大家使用，
微信公众号输入车寻人，或是人寻车等关键字后会返回当天发布的消息分类汇总，微信小程序也达到1000+pv，但是由于web协议的不稳定性，导致我的微信账号被封登录不了了，所以后期就不维护了
现在了解到李佳芮为了支持大家会提供长期的token供大家使用，所以想重新吧这个项目做一下，维护起来，通过wechaty帮大家筛选拼车相关信息，让大家快速查到自己所需要的信息

### 核心逻辑

我的微信号上有十几个拼车微信群，里边每天会有很多拼车的相关信息，但是大家都会按照一个规则来发：

```log
@车寻人，时间，出发地点，顺路地点，终点，联系方式
@人寻车，时间，出发地点，终点，联系方式
@车满
```

信息收集规则：

```log
根据大家发送的信息，我做了一些简单的关键字匹配，分类为车寻人，或是人寻车，车满的消息会冲掉之前发送的车寻人消息，
收集到的数据会写到mysql数据库里，小程序和公众号从库里边查数据
```

附上部分逻辑代码说明。

```javascript
import api1  from '../../server/api'
const one = ['车寻人', '车找人', '找人', '寻人', '满人', '满车', '车满', '人满'];
const two = ['人寻车', '人找车', '找车', '寻车', '找个车']
class dealMsg {

    async collectMsg(m) {
        const contact = m.from() //发送人
        const content = m.text() //内容
        const room = m.room() //群  room.topic()
        const tels = content.match(/((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\d3,4|\d{3,4}-|\s)?\d{7,14}))?/g)
        const tel = tels.filter((x) => {
            if (x) {
                return x
            }
        })
        let sex = "无"
        if (room) {
            var contet = null;
            one.forEach(item => {
                if (content.indexOf(item) > -1) {
                    contet = {
                        type: 1,
                        author: contact.name(),
                        wxid: contact.id,
                        msg: content.replace(/(<img.*?)>/gi, ''),
                        tel: tel[0],
                        gender: sex,
                        headimg: ''
                    }
                }
            })
            two.forEach(item => {
                if (content.indexOf(item) > -1) {
                    contet = {
                        type: 2,
                        author: contact.name(),
                        wxid: contact.id,
                        msg: content.replace(/(<img.*?)>/gi, ''),
                        tel: tel[0],
                        gender: sex,
                        headimg: ''
                    }
                }
            })
            if (contet) {
                api1.insertInfo(contet)
            }
        } else {
            if (contact.name() != "Sking") { }
        }
    }
}
module.exports = dealMsg
```

## 项目使用

### 目录结构

- `server`数据库配置和前端使用的接口
- `routes`路由
- `public`存放机器人初始化后一系列事件处理(分模块)
  - `controller` 原来web的wechaty的时候用到的，现在不用了
  - `padchat_robot` 基于padchaty协议
  - `wechat_robot` 基于web协议
  - `wechat_padplus` padplus协议
  - `wxgzh` 微信公众号的业务处理

### 如何使用

1. 修改`config`配置
   打开`server/index.js` 文件，将里面的配置改为自己的。
然后就可以运行了

```bash
npm install
npm start
```

> 作者: [sking](https://github.com/shijianzhong)
> Code: [Github](https://github.com/shijianzhong/wechatserve)
