---
title: "聚会娱乐机器人"
author: osindex
categories: project
tags:
  - nodejs
  - padplus
  - game
  - redis
  - sqlite
  - knex
  - featured
image: /assets/2020/im-game-robot/qrcat.jpg 
---

几年前大家开始通过微信拜年，基于vbot折腾过机器人，想要给所有alias不为空的好友发送定制问候，在发送不到10人消息之后，自己微信的WEB端口被封。无奈尝下没有技术和被墙的泪水。

作为码农，能自动化处理的事情，为什么一定得人工？

## 项目说明

几天前无意中浏览到Wechaty，于是再次萌发了做个机器人的想法。这次做一个娱乐向的机器人~

### 游戏特色

本次开发了谁是卧底小游戏，房主无法设置游戏角色及人数，要求至少4人参加。每轮游戏结束后会重新分配各角色人数，增加随机趣味性。[扫最下方的二维码，发送`ding`自动加好友体验~]

```log
假定总人数为ALL
平民人数[P]：默认 总人数一半 + 1 向下取整
卧底人数[W]：默认 随机 1 到 总人数 - 平民人数
白板人数[B]：ALL - P - W
额外分配：若W大于3则会再次分配，随机减少 0 或 W - 2人数，减少的人数加到P头上
因此一般的人数规律是：3/1/0,3/1/1,3/2/0,4/1/1,4/2/0....
```

游戏规则：

```log
游戏结束：
存活人数/游戏人数 <= 1/2时，即 2/4,2/5,3/6,3/7,4/8
胜利条件：
1.平民淘汰所有卧底和白板 平民胜
2.卧底存活至游戏结束 卧底胜
3.所有卧底出局后白板仍然存活 白板胜
```

附上部分逻辑代码说明。

```javascript
/**
 * 定义当前轮次游戏角色数目
 * @param  {Number} playLength [游戏总人数]
 * @return {Array}             [平民、卧底、白板每种角色的具体人数]
 */
Word.defRoleNum = function (playLength) {
    let Civilian, Undercover = 0
    Civilian = parseInt(playLength / 2) + 1 // 一半 + 1
    Undercover = randomNum(1, playLength - Civilian) // 随机卧底数目
    if (Undercover > 3) { // 如果卧底大于3个
        const rand = randomNum(0, Undercover - 2)
        Civilian += rand // 最少保留1个卧底 其它归到平民
        Undercover -= rand
    }
    const Blank = playLength - Civilian - Undercover // 白板人数
    return [Civilian, Undercover, Blank];
}
// 定义当前轮次每玩家对应角色
Word.defTurn = function (playsList) {
    const playLength = playsList.length
    if (playLength < 4) {
        return
    }
    const roles = this.defRoleNum(playLength)
    const roleList = deepClone(roles)
    const randomWord = randomNum(1) ? this.randomWord() : this.randomWord().reverse()
    // 难得再转化 直接汉字
    let role = '平民';
    let word = '';
    let newPlaysList = []
    for (var i = 0; i < playLength; i++) {
        var index = randomNum(playsList.length - 1); //随机下标
        if (roles[2]) {
            role = '白板';
            word = '';
            roles[2]--;
        } else if (roles[1]) {
            role = '卧底';
            word = randomWord[1];
            roles[1]--;
        } else {
            role = '平民';
            word = randomWord[0];
        }
        playsList[index].role = role
        playsList[index].word = word
        // 顺便按顺序排号
        newPlaysList.push(playsList[index])
        playsList.splice(index, 1); //    将随机出的元素在arr中删除
        // console.log(roles)
    }
    // 排序
    newPlaysList.sort((a, b) => {
        return a.self_id - b.self_id
    })
    const first = randomNum(1, newPlaysList.length)
    return { roleList, playsList: newPlaysList, first }
}
```

## 项目使用

### 目录结构

- `config`文件夹存放公共配置文件以及`flyio`请求相关配置
- `imgs`存放相关图片
- `listeners`存放机器人初始化后一系列事件处理(分模块)
  - `games` 游戏模块
    - `iswho.js` 谁是卧底核心模块
  - `on-friendship.js` 处理好友请求
  - `on-login.js` 处理登录
  - `on-message.js` 处理用户消息、群消息
  - `on-scan.js` 处理登录二维码
  - `on-work.js` 做一些额外任务
- `schedule` 对定时任务`node-schedule`库进行了封装
- `migrations` 数据库迁移文件
- `api` 存放所有的数据请求、接口封装都在此
- `utils` 公用方法的封装
- `app.js` 入口文件
- `db.js` 数据库入口文件
- `knexfile.js` 数据库配置文件

### 如何使用

1. 修改`config`配置
   打开`config/index.js` 文件，将里面的配置改为自己的。
   token 和 name 必填 appToken.tianxin 也必填
2. 修改天行接口配置
   天行 api 官网 ：[https://tianapi.com/](https://tianapi.com/)  
    注册成功后，申请以下接口：
   - [每日英语一句话](https://www.tianapi.com/apiview/62)
   - [神回复](https://www.tianapi.com/apiview/39)
3. 依赖sqlite3 和 redis, redis应需要单独安装

然后就可以运行了

```bash
npm install
npm run initdb
npm start
```

### 已实现功能

- [x] 发送加群关键字，自动拉人进群。
- [x] 场景模式
  - [x] 谁是卧底
- [x] 神回复
- [x] 英语一句话
- [x] 天气查询
- [x] 发送关键字，踢人

列几个有趣的功能，后续慢慢完善：

- [ ] 随机匿名好友聊天
- [ ] 生活向文字冒险游戏

### 谁是卧底小游戏

![Image text](/assets/2020/im-game-robot/a.png)
![Image text](/assets/2020/im-game-robot/b.png)
![Image text](/assets/2020/im-game-robot/c.png)
![Image text](/assets/2020/im-game-robot/qrbread.jpg)

> 作者: [osindex](https://github.com/osindex)
> Code: [Github](https://github.com/osindex/im-robot)
