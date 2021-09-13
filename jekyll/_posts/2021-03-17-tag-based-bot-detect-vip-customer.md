---
title: "基于标签的多功能服务系统&检测你身边的VIP用户"
author: wenzai007
categories: project
tags:
  - mysql
  - social
image: /assets/2021/03-tag-based-bot-detect-vip-customer/archetecture.png
---

随着时间的推移，我们在不断的认识新的朋友，不断加新的好友， 在我们的微信里， 好友列表会有很多，甚至上千人，有的时候我们自己也理不清哪些好友是我们的客户，哪些好友是我们的朋友同学，哪些好友是我们在某次活动相识，甚至哪些好友只是萍水相逢但是实际上却极有可能是我们很好的潜在客户或者未来的合作伙伴，而因为平时的忽视可能就这样错过。

所以首先给我们的微信好友进行标签化的科学分类是很有必要的，有了标签，更重要的是如何进一步对这些标签化的好友进行管理和经营，本系统即目标于解决此问题。

本系统实现了以下两个基本功能：

> 1.
> 我们在后台可以有多种类型以及门类的的service， 但是每种service的受众其实是不同的，取决于我们的微信好友们的不同兴趣指标，即好友属于哪种受众群体。如果我们把好友按照不同的兴趣指标进行分类，那么我们可以把对应的service精准投放/对接给不同的受众群体(对应标签的用户群) 。即满足了客户的需求，又避免打扰不需要的客户，提高了服务的效率。
> 2.
> 每一个标签的群体里对我们的service/bot 的兴趣值是不同的，如何找到标签中对我们最感兴趣的用户呢？这也就是寻找VIP客户的过程。我们需要列出每一个好友的属性，包括我们自定义的一些属性存于database中，在交流的过程中我们可以不断更新每个好友的各个属性，对每个属性都赋予权重，最后通过排序算出加权总和最高的用户，即我们的VIP用户。（此处可以进一步延伸并扩展，如果找到我们未来最合拍的商业合作或者创业伙伴？/最有价值的客户？/ 对你最感兴趣的高富帅/白富美？:-O）

<font size=5>系统整体架构简化图</font>

![archetecture.png](/assets/2021/03-tag-based-bot-detect-vip-customer/archetecture.png)

相关服务和框架:
> Typeorm
> MySQL
> wechatY
> BTC Service
> Unicorn Service

<font size=5>功能简介：</font>

挑选了我的两个受众群体， 其中一个群体是喜欢投资比特币，那么他们比较想要快速了解到最近的整合比特币最新资讯，这里简单的实现了一个获取比特币资讯的service。第二个群体喜欢关注最新的行业资讯，想了解最新的独角兽公司的资讯，也实现了一个抓取整合独角兽公司的service。这两个service都利用wechaty的API实现的bot去对接客户，这样客户可以自动通过type不同的选项获取资讯。而service获取的资讯会实时的更新数据到MySQL数据库(typescript与DB交互还是有些坑，搞了一阵)，这样基于WechatY的bot 可以通过share的db信息将最新资讯返回给customers.

这里我们的两个标签分别取名为btc和company.

![tag-btc.png](/assets/2021/03-tag-based-bot-detect-vip-customer/tag-btc.png)

![tag-unicorn.png](/assets/2021/03-tag-based-bot-detect-vip-customer/tag-unicorn.png)

对于不同tag的user, 我们回复不同的autoReploy Message

```js
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TagCatalog {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: string;
 
  @Column("text")
  autoReplyMsg: string;
 
    @Column("text")
  scheduleMsg: string;
}
```

> 可以看到标签为btc的用户发来一条信息，首先通过wechatY的bot 发送自动回复消息告知我们的service.  

![btc-autoreply.png](/assets/2021/03-tag-based-bot-detect-vip-customer/btc-autoreply.png)

> 当用户选择1时，我们返回最新的当日BTC价格以及实时价格。这里后台的BTC service 会实时的更新MySQL 数据库，我们通过wechatY的bot 读取MySQL来返回最新的BTC价格

```js
async function sayCurrentPrice(fromPersion: Contact){
  createMySQLConnection().then(async connection => {
  
    let btcMessageRepository = connection.getRepository(BtcPriceMessage);

    let btcCurrentPrice = await btcMessageRepository.findOne({id: 1});

    console.log("the current price meesage: ", btcCurrentPrice);

    if(btcCurrentPrice){
      fromPersion.say(btcCurrentPrice.message);
    }else{
      fromPersion.say("Sorry, did not find the current btc price in our system");
    }

    // close the connection.
    connection.close();
  })
}

```

> 标签为company的用户发来信息，我们告知其service.

![unicorn-autoreply.png](/assets/2021/03-tag-based-bot-detect-vip-customer/unicorn-autoreply.png)

> 用户选择1,返回实时市值最高的5个独角兽公司。这里后台的UniCorn service 会实时的更新MySQL 数据库，我们通过wechatY的bot 读取MySQL来返回当前市值最高的5个独角兽公司。

至此，基于标签的多功能服务系统的雏形完成了。那么如何获得标签为company的用户粘性值最高的人呢，即对我们最感兴趣的VIP客户呢？ 这需要再数据库中存储用户的各个属性， 这里仅为方便展示，我们只选取最简单的属性，用和bot的聊天次数属性作为唯一的权重计算。  通过一段时间与不同用户的的交流, 通过数据库的查询我们发现了我们的VIP客户，即db中talkTimes最高的用户。

```js

@Entity()
export class ContactAndInterest {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: string;
 
  @Column("int")
  talktimes: number;
 
  @Column()
  wxid : string;

  @Column()
  alias : string;

//  @Column({ type: "varchar", charset: "utf8", collation: "utf8_general_ci"})
@Column({ type: "varchar", charset: "utf8", collation: "utf8_bin"})
  name : string;
}
```

```js

async function updateDbForInterest(fromPerson: Contact, tagName: string){
  createMySQLConnection().then(async connection => {
  
    let personRepository = connection.getRepository(ContactAndInterest);

    let personIntrestToUpdate = await personRepository.findOne({wxid: fromPerson.id});

    console.log("the person to update from the db: ", personIntrestToUpdate);

    if(personIntrestToUpdate){
      personIntrestToUpdate.wxid  = fromPerson.id;

      // if before is true then assign, else use empty
      personIntrestToUpdate.alias = await fromPerson.alias() || '';
      personIntrestToUpdate.name = await fromPerson.name() || '';
      personIntrestToUpdate.tag  = tagName;
      personIntrestToUpdate.talktimes = personIntrestToUpdate.talktimes + 1;
    }else{
      personIntrestToUpdate = new ContactAndInterest();

      personIntrestToUpdate.wxid  = fromPerson.id;
      personIntrestToUpdate.alias = await fromPerson.alias() || '';
      personIntrestToUpdate.name = await fromPerson.name() || '';
      personIntrestToUpdate.tag  = tagName;
      personIntrestToUpdate.talktimes =  1;
    }

    await personRepository.save(personIntrestToUpdate);
    log.info("updated the personInterest object of %s", personIntrestToUpdate);

    // close the connection.
    connection.close();
  }).catch(error => {
    console.log(error);
  });
}
```

<font size=5>感谢</font>

感谢WechatY提供的如此强大的微信API, 记得当时找开源的API找了很久，虽然也有其他的API, 不过有些API接口太少。最后发现了WechatY后感觉不错，希望wechaty不断完善，能够不断壮大，越来越好的发展下去。

<font size=5>回顾与展望</font>
由于之前基本没写过typescript, 所以这里也是现学现卖，很多语法写法并不是太考究还请海涵。

这里只是一个雏形的实现， 后面我觉得可以更深的去挖掘我们的微信好友， 比如将不同标签的好友的各种信息通过可视化的方式展现在前端，让人一目了然。 增加更多的属性去分析不同的用户，通过高级的算法去更好的分析用户，计算出VIP用户群体。开发更多的services去对接相应的用户转化为更高的价值。希望可以完成一个功能更加强大的服务。
