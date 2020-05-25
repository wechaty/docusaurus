---
title: "使用Wechaty进行淘宝客入门"
author: renjiayue
date: '2020-05-25 11:20:50 +0800'
categories: project
tags:
  - wechaty
  - wechaty-puppet-padplus
  - chatbot
header:
  teaser: /assets/2020/2020-05-25-wechaty-tbk.jpg
---

> 作者: [renjiayue](https://github.com/renjiayue)
> Code: [Github](https://github.com/renjiayue/mybot)

## 需求

因为自己也在用一些相关的微信机器人进行查询优惠券等操作,所以就在想要不要自己做一下微信机器人,还可以用自己的淘宝联盟分享,自己得佣金,既能学习些新知识,又可以帮自己和朋友省点钱,一举多得,
所以就着手了自己做一个机器人,在研究完淘宝的api和wecgaty的api之后,自己做了以下基本功能:

- 通过回复`饿了么`获取饿了么小程序码领取饿了么红包
- 发送淘宝分享链接查询优惠信息,并且计算对应佣金及服务费等

<!--more-->

## Wechaty 和 Puppet

[`Wechaty`](https://github.com/wechaty/wechaty) 提供了群组管理、收发消息等接口，而且配合淘宝联盟的api能够轻松地满足计划需求。

由于 `Wechaty` 本身只是一个控制器，因此其对微信功能的执行需要依赖于微信客户端协议与服务器进行通信。`puppet` 就是这些协议的具体承载者，现在有基于 Web / iPad / Mac 等协议的多种实现。经过测试，首先排除了 Web 协议：由于腾讯的限制，近年新注册的微信账号都无法使用网页协议，而老账号又实在过于珍贵。所以，使用了`PuppetPadplus`。而且ipad协议的支持查看微信号,通过微信号查联系人等多个web协议不支持的功能.

## 架构

- 目标：用最简单的方式实现淘宝客查询优惠信息,并将不能解析的内容转发给管理员
- 功能：
  1. 账号登录
  2. 好友申请自动通过并回复消息功能菜单
  3. 根据指令消息做出对应的操作，比如： 获取饿了么红包，查询淘宝商品优惠等
- 方案：
  1. 简单功能使用 `JavaScript` 开发,如果后续功能复杂,则可能会将消息内容传给java后台(本人java比较熟悉),或者使用`java-puppet`；

## 部分代码实现

### 获取饿了么红包

```javascript
async function eleRedBag(msg){
  if(fileBoxMap.elefileBox){
    await msg.say('获取饿了么小程序码')
    msg.say(fileBoxMap.elefileBox)
	console.log('文件存在不用重新下载');
	return;
  }
	  
  
  client.execute('taobao.tbk.activity.info.get', {
    'adzone_id':'adzone_id',//填写你的淘宝推广位id
    'activity_material_id':'1571715733668'
  }, function(error, response) {
    if (!error) {
      console.log(response);
      msg.say('获取饿了么小程序码')
      const fileBox = FileBox.fromUrl(response.data.wx_qrcode_url)
	  fileBoxMap.elefileBox = fileBox
      msg.say(fileBox)
    }else {
      console.log(error);
      msg.say("红包获取失败")
      sendStringMessageToAdmin("饿了么红包调用接口请求失败")
    }
  })
}
```

### 发送消息给管理员

```javascript

const adminList = new Array()
var  loadAdmin =  async function(){
  const personAdmin = await bot.Contact.find({id: 'Emp-yue'})
  adminList.push(personAdmin)
  //web协议的暂时使用别名查询
  // const onlyAdmin2 = await bot.Contact.find({alias: '任佳月2'})
  const roomAdmin = await bot.Room.find({topic: 'rjyma'})
  adminList.push(roomAdmin)
}

/**
 * 发送文本消息给所有管理员
 * @param {string} msg 
 */
async function  sendStringMessageToAdmin(msg){
  if(adminList.length==0){
    await loadAdmin();
  }
  // console.log(adminList)
  if(adminList.length>0)
  for(let cont in adminList){
    if(adminList[cont]!=null){
      adminList[cont].say(msg)
    }
    
  }
}
```

### 解析其他口令

```javascript
/**
 * 最重要的部分--消息处理部门
 * @param {*} msg 
 */
async function onMessage (msg) {
  console.log(msg.toString())

  //自己发送的消息不做处理
  if(msg.self()){
    // console.log('消息是自己发送的,不做处理')
    return
  }
  // if (msg.age() > 60) {
  //   console.log('消息被丢弃,因为已经超时(1分钟)')
  //   return
  // }

  //功能部分暂时放到客户端
  

  if ( msg.type() === bot.Message.Type.Text) {
    // sendMessageToServer('服务器发送测试',msg)
    let msgContent = msg.text();
    sendMessageToServer(msgContent,msg)
    if(msgContent==='饿了么'||msgContent==='饿了么红包'||msgContent==='外卖'||msgContent==='外卖红包'){
      eleRedBag(msg)
    }else{
      //test 正则
      let tolurlReg = new RegExp('[a-zA-z]+://[^\s]*')
      let tolurlRegExec = tolurlReg.exec(msgContent)
      let jiexiUrl;
      if(!tolurlRegExec){
        msg.say("无法解析的口令内容")
        sendStringMessageToAdmin('未搜索到url内容:'+msgContent)
        // sendStringMessageToAdmin(msgContent)
        return
      }
      jiexiUrl = tolurlRegExec[0]
      request({
        url: jiexiUrl,
        method: "GET",
    }, function(error, response, body) {
      // console.log(error)
      // console.log(response)
      // console.log(body)
        if (!error && response.statusCode == 200) {
            // let isParseSucess = false;
            let titleReg = new RegExp('"title"[\\s]*:[\\s]*"[^"]*"')
            let titleExec = titleReg.exec(body);
            let title
            if(!titleExec){
              //未搜索到title内容
              msg.say("无法解析的链接地址")
              sendStringMessageToAdmin('无法解析的链接地址,未解析出商品title:'+msgContent)
              // sendStringMessageToAdmin(msgContent)
              return 
            }
            title = titleExec[0]
            title = title.replace(new RegExp('"title"[\\s]*:[\\s]*"'),'')
            title = title.substring(0,title.length-1)
            console.log('title是:'+title)

            //安卓手淘聚划算title处理
            title = title.replace('这个#聚划算团购#宝贝不错:','')
            title = title.replace('(分享自@手机淘宝android客户端)','')
            console.log('处理完聚划算后title是:'+title)
            // console.log(body) // 请求成功的处理逻辑
            let reg = new RegExp("https://a.m.taobao.com/i[0-9]*[.htm|.html]+")
            let regResult = reg.exec(body)
            let url;
            if(regResult){
              url = regResult[0]

              url = url.replace("https://a.m.taobao.com/i",'');

              url = url.replace(".html",'');

              url = url.replace(".htm",'');

              // msg.say("商品id是"+url)
              tklProcess(msg,url,title)
              return
            }

            // let reg2 = new RegExp("https://item.taobao.com/item.htm[^\s]*[&|?]id=(\d+)&*")
            // let reg2 = new RegExp("https://item.taobao.com/item.htm")
            reg = new RegExp("https://item.taobao.com/item.htm[^\\s]*")
            regResult = reg.exec(body)
            // console.log(regResult)
            if(regResult){
              url = regResult[0]

              url = (new RegExp("&id=[0-9]*&*").exec(url))[0]

              url = url.replace('?id=','');
              url = url.replace('&id=','');
              url = url.replace('&','');
              // msg.say("商品id是"+url)
              tklProcess(msg,url,title)
              return
            }

            if(!regResult){
              msg.say("无法解析的链接地址")
              sendStringMessageToAdmin('无法解析的链接地址,未解析出商品id:'+msgContent)
            }
        }else{
            msg.say("无法解析的链接地址")
            console.log("请求失败")
        }
    });
    }
  }else if(msg.type()===bot.Message.Type.Contact){
    sendMessageToAdmin(msg)//名片需要发给管理员确认推荐关联关系
  }else if(msg.type()===bot.Message.Type.Transfer){
    msg.say('感谢您的打赏,小v会更加努力')
    sendStringMessageToAdmin('收到来自'+msg.from().name()+'的转账')//名片需要发给管理员确认推荐关联关系
  }else if(msg.type()===bot.Message.Type.RedEnvelope){
    msg.say('感谢您的红包,小v会更加努力')
    sendStringMessageToAdmin('收到来自'+msg.from().name()+'的红包')//名片需要发给管理员确认推荐关联关系
  }else{
    msg.say('小v暂时还不理解你的意思')
    // sendMessageToAdmin(msg)
  }
}

/**
 * 淘口令处理
 * @param {*} msg 原message
 * @param {*} id 商品id
 * @param {*} title 商品title
 */
async function tklProcess(msg,id,title){
  console.log('需要查询商品的id是'+id+'title是'+title)
  await msg.say('正在查询优惠信息...')
  client.execute('taobao.tbk.dg.material.optional', {
    'adzone_id':'adzone_id',//填写你的淘宝推广位id
    'q':title,
    'page_size':100,
  }, function(error, response) {
    if (!error) {
      // console.log(response.result_list.map_data);
      let isExist = false;
      var dd = response.result_list.map_data
      console.log(response.total_results)
      for(a in response.result_list.map_data){
        // console.log(dd[a].item_id);
        if(dd[a].item_id ==id){
          // console.log('https:'+dd[a].url)
          // client.execute('taobao.tbk.tpwd.create', {
          //   'text':'测试淘口令是否生成',
          //   'url':'https:'+dd[a].url
          // }, function(error, response) {
          //   //if (!error) console.log(response);
          //   //else console.log(error);
          // })
          console.log(dd[a])
          if(dd[a].coupon_share_url){
            console.log('https:'+dd[a].coupon_share_url)
            client.execute('taobao.tbk.tpwd.create', {
              'text':'测试淘口令是否生成',
              'url':'https:'+dd[a].coupon_share_url
            }, function(error, response) {
              if (!error){
                console.log(response);
                let zk_final_price = Number(dd[a].zk_final_price)
                let coupon_start_fee = Number(dd[a].coupon_start_fee)
                let coupon_amount = Number(dd[a].coupon_amount)
                if(zk_final_price>coupon_start_fee){
                  let flAmt = Math.floor((1-0.1)*Number(dd[a].commission_rate)/100*(zk_final_price-coupon_amount))/100//10%的服务费
                  //msg.say("优惠淘口令为: "+response.data.model+" 全部复制打开手淘领券购买\n优惠券"+dd[a].coupon_info+"\n原价"+dd[a].reserve_price+"元\n现价"+dd[a].zk_final_price+"元\n预计获取返利"+flAmt+"元")
				  //淘宝官方不允许返利,可发送给管理人获取金额
				  msg.say("优惠淘口令为: "+response.data.model+" 全部复制打开手淘领券购买\n优惠券"+dd[a].coupon_info+"\n原价"+dd[a].reserve_price+"元\n现价"+dd[a].zk_final_price+"元")
                }else{
                  let flAmt = Math.floor((1-0.1)*Number(dd[a].commission_rate)/100*zk_final_price)/100//10%的服务费
                  //msg.say("优惠淘口令为: "+response.data.model+" 全部复制打开手淘领券购买\n"+dd[a].coupon_info+"\n原价"+dd[a].reserve_price+"元\n现价"+dd[a].zk_final_price+"元\n预计获取返利"+flAmt+"元")
				  //淘宝官方不允许返利,可发送给管理人获取金额
				  msg.say("优惠淘口令为: "+response.data.model+" 全部复制打开手淘领券购买\n"+dd[a].coupon_info+"\n原价"+dd[a].reserve_price+"元\n现价"+dd[a].zk_final_price+"元")
                }
              } 
              else{
                msg.say('未查询到优惠信息')
                console.log(error);
              } 
            })
          }else if(dd[a].url){
            console.log('https:'+dd[a].url)
          client.execute('taobao.tbk.tpwd.create', {
            'text':'测试淘口令是否生成',
            'url':'https:'+dd[a].url
          }, function(error, response) {
            if (!error){
              let flAmt = Math.floor((1-0.1)*Number(dd[a].commission_rate)/100*Number(dd[a].zk_final_price))/100//10%的服务费
              console.log(response);
			  //淘宝官方不允许返利,可发送给管理人获取金额
              //msg.say("优惠淘口令为: "+response.data.model+" 全部复制打开手淘进行购买\n原价"+dd[a].reserve_price+"元\n现价"+dd[a].zk_final_price+"元\n预计获取返利"+flAmt+"元")
			  msg.say("优惠淘口令为: "+response.data.model+" 全部复制打开手淘进行购买\n原价"+dd[a].reserve_price+"元\n现价"+dd[a].zk_final_price+"元")
            } 
            else{
              msg.say('未查询到优惠信息')
              console.log(error);
            } 
          })
          }
          
          isExist = true;
          break;
        }
      }
      if(!isExist)msg.say('未查询到优惠信息')
    }
    else{
      msg.say('未查询到优惠信息')
      console.log(error);
    } 
  })
}
```

## 已知部分问题
消息转发接口Message.forward()转发名片时会报错

## 遗留问题
因为淘宝api限制,转链以及订单相关接口,所以很多现在看到的营销机器人以及第三方APP实现的淘宝客功能不能完全实现
## 特别鸣谢

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/chatie/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)
