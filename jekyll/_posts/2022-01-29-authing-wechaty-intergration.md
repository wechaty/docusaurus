---
title: "Authing 团队管理 + Wechaty 机器人 = 无限可能"
author: willin
categories:
  - project
tags:
  - sso
  - authing
  - ecosystem
---


## 用户故事

其实用 Authing 团队管理 + Wechaty 机器人能够实现很多功能，来提高传统人事管理的效率。甚至还可以做一些数据的分析、统计，来辅助决策。这里我就列了几个简单的现实场景，希望能帮助大家理解。

### 以 Authing 作为上游数据源

同步数据到其他平台，前期为飞书和微信。创建完用户后，用户可以通过手机号直接登录飞书。个人微信添加 Wechaty Bot，通过消息发送手机号进行用户关联绑定。在 Authing 中创建组织架构，同步对应创建飞书的部门和微信的群组。同步删除飞书用户、微信群移除群聊。

### 原有飞书组织接入微信

飞书作为上游数据源。微信添加 Wechat Bot，通过消息发送手机号进行用户关联绑定。
在飞书中添加、删除用户，（先设置好同步频率，比如每 10 分钟检查一次），对应微信群中进行邀请加入或者移除。在飞书中进行部门（组织）管理，同步在微信中创建对应的群聊（扁平化，无层级），并同步群成员管理（添加/移除）。

### 原有微信群组并接入飞书

选择一个全员微信群进行接入，首先 Wechaty Bot 会为该群中所有成员创建 Authing 用户。微信添加 Wechaty Bot 或者 @提及的方式发送消息手机号进行用户关联绑定，绑定手机号的成员可以通过该手机号进行飞书的登录。
在原有微信大群中添加、删除用户，（先设置好同步频率，比如每 10 分钟检查一次），对应飞书用户添加或者移除。

## 撸一个 Wechaty Authing 的插件

也可以通过插件的介绍页面直接去了解插件的使用说明。该插件开源代码仓库位于： <https://github.com/Authing/wechaty-authing>

### 设计思路

- 该插件应当封装好了一些常用的方法，来打通 Wechaty 与 Authing 之间的连接
- 配备了一些好用的工具类方法，提高开发效率
- 具备一定的可扩展性，方便有一些非通用需求的实现

### 实现

在着手开发这个插件之前，我是分别以 Wechaty 作为用户上游和 Authing 用户池作为用户上游做了两个 MVP 项目。然后通过项目中的一些方法和功能，来完成这个插件的最初版本。

列举一下 Wechaty 作为用户上游时，需要用到的一些方法：

- 检查微信好友或群内的用户是否已经存在 Authing 用户池
- 检查微信用户是否绑定了 Authing 账号（主要为手机号）
- 当邀请、移除群成员时候，对应创建、删除 Authing 用户

再列举一下将 Authing 作为用户上游时，需要用到的一些方法：

- 检查微信的好友申请、以及消息，判断是否为 Authing 用户（通过消息规则手机号校验）
- 将微信号与 Authing 用户进行关联绑定 （通过消息规则手机号校验）

然后这个过程中，经常会有两个用户列表的比较，一个是 Wechaty `Contact[]` 列表，一个是 Authing `User[]` 列表，去判断联系人是不是 Authing 用户、判断联系人有没有被邀请入群、或者判断联系人是否需要被移除群聊。

最后代码大概的框架成了这个样子：

```ts
export class WechatyAuthing {
  constructor(config: WechatyAuthingConfig);
  /**
   * Get Authing SDK client
   * 获取 Authing SDK 实例
   */
  protected get client(): _ManagementClient1;
  /**
   * Get Authing User pool name
   * @returns {Promise<string>}
   */
  getPoolName(): Promise<string>;
  /** ********* AS UPSTREAM ************* */
  /**
   * Batch check users exists from Authing
   * 检查是否注册为 Authing 用户
   * @param {Contact[]} contacts Wechaty Contact[]
   * @returns {ContactsFilterResult} { registered: Contact[]; unregistered: Contact[]; fail: Contact[] }
   */
  filterAuthingUsers<T = Contact>(
    contacts: T[]
  ): Promise<ContactsFilterResult<T>>;
  /**
   * Batch create users to Authing
   * 向 Authing 用户池中批量创建用户
   * @param {Contact[]} contacts Wechaty Contact[]
   * @returns {ContactsOperationResult} {success: Contact[], fail: Contact[]}
   */
  createAuthingUsers<T = Contact>(
    contacts: T[]
  ): Promise<ContactsOperationResult<T>>;
  /**
   * Batch delete users from Authing
   * 从 Authing 用户池中批量删除 Wechaty 用户
   * @param {Contact[]} contacts Wechaty Contact[]
   * @returns {ContactsOperationResult} {success: Contact[], fail: Contact[]}   */
  deleteAuthingUsers<T = Contact>(
    contacts: T[]
  ): Promise<ContactsOperationResult<T>>;
  /**
   * Create or update a authing user with Wechaty contact and phone
   * 绑定 Contact 和手机号码到 Authing 用户（或创建一个用户）
   * @param {Contact} contact
   * @param {string} phone
   * @returns {Promise<boolean>}
   */
  bindAuthingPhone<T = Contact>(contact: T, phone: string): Promise<boolean>;
  /** ********* AS DOWNSTREAM ************* */
  /**
   * Check if user with the phone number exists in Authing
   * 检查手机号是否注册为 Authing 用户
   * @param {string} phone
   * @returns {Promise<boolean>}
   */
  checkPhone(phone: string): Promise<boolean>;
  /**
   * Bind Wechaty contact to a Authing user by phone number
   * 将 Wechaty Contact 绑定到 Authing 手机号的用户
   * @param {string} phone
   * @param {Contact} contact
   * @returns {Promise<boolean>}
   */
  bindPhoneContact<T = Contact>(phone: string, contact: T): Promise<boolean>;
  /** ********* PROTECTED ************* */
  /**
   * Create Authing user
   * 创建 Authing 用户
   * @param {Contact} contact
   * @returns {User | null}
   */
  protected createAuthingUser<T = Contact>(contact: T): Promise<User | null>;
}
```

另外，在刚开始 POC 的时候，我使用了大量低效的代码去实现该功能，如：

```ts
// 筛选出用户中的好友
const friends = allFriends.filter(
  (contact) => ~users.findIndex((user) => user.externalId === contact.id)
);

// 删除成员和提醒不确定状态
const members2Delete = memberList.filter(
  (member) => ~deletedUsers.findIndex((user) => user.externalId === member.id)
);
const members2Warning = memberList.filter(
  (member) =>
    !~deletedUsers.findIndex((user) => user.externalId === member.id) &&
    !~users.findIndex((user) => user.externalId === member.id)
);
// 检查未入群的好友
const members2Invite = friends.filter(
  (friend) => !~memberList.findIndex((member) => member.id === friend.id)
);
```

在此基础上，优化了几个工具方法：

- 通过 Set 特性取两个数组的差集
- 获取 Wechaty 用户真实的唯一 ID

其实在集成过程中还有很多细节的点需要注意，我会都在文章最后的章节里进行整理。

### 测试

目前的代码质量 A，测试覆盖率为 98%。如果你对于这个插件感兴趣，测试用例不仅仅是你参与贡献的最好开始，其实也是插件使用的绝佳案例。

其中也包括了示例初始化、各个方法调用和返回值期待、工具方法的使用，以及扩展开发的一些细节。

以拓展插件的测试用例为例：

```ts
//https://github.com/Authing/wechaty-authing/blob/main/test/extends.spec.ts
import { WechatyAuthing } from '../src';

describe('extension', () => {
  it('client', async () => {
    class ExtendedWechatyAuthing extends WechatyAuthing {
      async totalUsers(): Promise<number> {
        const { totalCount } = await this.client.users.list();
        return totalCount;
      }
    }
    const client = new ExtendedWechatyAuthing({
      userPoolId: process.env.AUTHING_USER_POOL_ID,
      secret: process.env.AUTHING_USER_POOL_SECRET
    });
    const count = await client.totalUsers();
    expect(count).toBeGreaterThan(0);
  });
});
```

当然，具体的插件使用细节，可以通过项目 README 文件查看，提供了中英文两个版本。

## 上手做几个机器人吧

示例中（来自 POC 项目）使用的 Wechaty 版本为 `0.75` 和 puppty 为 `padlocal` （基于 iPad 微信协议）。可以访问示例代码仓库下载： <https://github.com/Authing/wechaty-authing-poc>

### 使用微信群作为上游用户数据

#### 管理员邀请用户加入群组（人为操作）

侦听 `room-join` 事件触发，获得被邀请人员名单（_inviteeList_）。检查 Authing 用户池，筛选出未注册的用户列表，批量注册用户，并发送消息提示绑定用户手机号。

#### 管理员踢出群聊用户（人为操作）

侦听 `room-leave` 事件触发，获得被移除人员名单（_leaverList_）。从 Authing 用户池中批量删除。提示删除成功的用户名（列表）。

如果有删除失败的（不确定原因引起），提示删除失败的用户名（列表），请管理员手动删除。

#### 用户 @Bot 提及消息

侦听 `message` 事件触发，如果非提及消息，或者消息中不包含手机号，则不处理。

检查用户是否存在，如果存在，修改绑定的手机号为用户输入的（可能出现重复手机号绑定失败）；如果用户不存在注册一个新用户。

如果绑定成功，发送消息提示。

#### 实现

代码位于 POC 项目 `upstream` 目录。

首先在 Bot 启动时，进行一遍群成员的检查：

[![mermaid](https://mermaid.ink/img/pako:eNqrVkrOT0lVslJKL0osyFDwCYrJUwCC4JLEohJDDTClCRHS1XXKL1F4OmH9064Vurp2CskZqcnZhtHPFjc8m7_0-b4lT9tan89qeTl3noJjaUlGZl66wvMpK551bI-FabdTSExJCS1OLYp-tn33064FaOqe7tz2bFvHs8b1z_onvGyb9Hz3xKfrZj3r7H42Z9fTfmRTXPNSDDWAhKaSjlJualFuYmYK0P3VIAUxSiUZqbmpMUpWQGZKYlF2jFJMXi1QXWlBSmJJqmtKZkl-kZJVWmJOcaqOUmJpSX5wZV6yklVJUWkqTJFLZiIwLHKhqmoBkyd38g)](https://mermaid.live/edit#pako:eNqrVkrOT0lVslJKL0osyFDwCYrJUwCC4JLEohJDDTClCRHS1XXKL1F4OmH9064Vurp2CskZqcnZhtHPFjc8m7_0-b4lT9tan89qeTl3noJjaUlGZl66wvMpK551bI-FabdTSExJCS1OLYp-tn33064FaOqe7tz2bFvHs8b1z_onvGyb9Hz3xKfrZj3r7H42Z9fTfmRTXPNSDDWAhKaSjlJualFuYmYK0P3VIAUxSiUZqbmpMUpWQGZKYlF2jFJMXi1QXWlBSmJJqmtKZkl-kZJVWmJOcaqOUmJpSX5wZV6yklVJUWkqTJFLZiIwLHKhqmoBkyd38g)

同时还侦听了两个 Wechaty 事件：

- `room-join`：管理员邀请用户加入群组（人为操作）
- `room-leave`：管理员踢出群聊用户（人为操作）

[![mermaid](https://mermaid.ink/img/pako:eNqFkU1LwzAYx79KyGnCdli99SAo2yeYt3WHsMS1uLYjpgcZg3lwzE1oCyK-HSZM2UGGoFjpYJ-mSdm3MO1aUXvwkpfn-efH8yN92LYxgSrsUNTTwWFNswBoMERZtZRuO0mhUtkDCONqM14-xt6I-zdRGEafoQhWfDKL13Mx9mSxtc1uQ-DAZiBaP3PvhZ8_yUwUTqPVR4ZSmkmbez7Yd5huWB0g3hZ8dBlfLcQ4yEHpRbgedycpjrv-ZngmLqbiIeRukM-1W4Tdv4vr13jl8-VdRskftXKhuoWrJblIw29p5Y80Jt2CNB_PNrfzf6U3w-Ev6YRVtM5gP63TyZR0MliGJqEmMrD8oX7S1iDTiUk0qMojRvRYg5o1kDmnhxEjdWwwm0L1CHVPSBkih9mNU6sNVUYdkodqBpK_bWapwRc_Lu26)](https://mermaid.live/edit#pako:eNqFkU1LwzAYx79KyGnCdli99SAo2yeYt3WHsMS1uLYjpgcZg3lwzE1oCyK-HSZM2UGGoFjpYJ-mSdm3MO1aUXvwkpfn-efH8yN92LYxgSrsUNTTwWFNswBoMERZtZRuO0mhUtkDCONqM14-xt6I-zdRGEafoQhWfDKL13Mx9mSxtc1uQ-DAZiBaP3PvhZ8_yUwUTqPVR4ZSmkmbez7Yd5huWB0g3hZ8dBlfLcQ4yEHpRbgedycpjrv-ZngmLqbiIeRukM-1W4Tdv4vr13jl8-VdRskftXKhuoWrJblIw29p5Y80Jt2CNB_PNrfzf6U3w-Ev6YRVtM5gP63TyZR0MliGJqEmMrD8oX7S1iDTiUk0qMojRvRYg5o1kDmnhxEjdWwwm0L1CHVPSBkih9mNU6sNVUYdkodqBpK_bWapwRc_Lu26)

#### 代码之外

当微信用户绑定到 Authing 用户池之后，还可以做些什么呢？比如同步企业成员信息到飞书，连接到各种 SSO 单点登录应用等。发挥想象力的时间到了，改变生产力，或许并不是那么遥不可及的事情。

### 以 Authing 用户作为上游， Wechaty 用户作为下游

用户数据来源也可能是同步中心里来自飞书或其他身份源的用户数据。**_其中有一步，在 Authing 用户池中添加新用户后，要求用户主动添加 Bot 为好友，必须。_**

在 Bot 启动时，检查微信中是否存在全员群，如果没有，就创建一个（但如果企业成员数量不够 3 个，不能创建群聊的时候，机器人就会等主动添加的好友）。全员群存在之后，就开始定时任务检查是否有离职成员需要踢出群聊，以及新入职的成员邀请加入群聊了。

[![mermaid](https://mermaid.ink/img/pako:eNpdUk1LAkEY_ivDnAoU2vXmQai0Q1e9uR42d1Ixd2UdD6GChKYVkoGRaBCYhhezQ6gp1p9xdtd_0bs7fmSX2Znl-XifZyaHo5pCsBfHdDkdRyG_pCIUpLJOhT3ns2__cLuPNIpYfchu-263D0XjJJoUcsZr0XjpsXKfPTTN767RHLL6Gxs02XO_wGm-fCiPMraOGOZ05DnIIGv-bg076FjX1FPtLLLCooCqCHuwOJ7cw5Y4yfODmDMbfaM6XkwGrDdn93fG4wf3tEZl66eCRLSYTnedSVoIs2qbzaYwoDkrbbz4UBsj0TFCy6fPZavhzMi6NQi3tpbUTTHiTjE-x0QUwgCGTNsyqnXYRHZAYtgctJfFG1aZLiY1GB0dZmk8ocYQD2a2SpzGvkbWpAOwXb5ny__HhEpAEXoHZ3ZdBiHeEAgtr4rWcPy3Y3HTsR16ex_5VT7swimip-SEAu8iZ-MkTOMkRSTsha0i60kJS2oBcNm0IlMSUBJU07H3XL7IEBeWs1QLXqpR7KV6lqxB_oQMbyy1QhV-AdFkHZc)](https://mermaid.live/edit#pako:eNpdUk1LAkEY_ivDnAoU2vXmQai0Q1e9uR42d1Ixd2UdD6GChKYVkoGRaBCYhhezQ6gp1p9xdtd_0bs7fmSX2Znl-XifZyaHo5pCsBfHdDkdRyG_pCIUpLJOhT3ns2__cLuPNIpYfchu-263D0XjJJoUcsZr0XjpsXKfPTTN767RHLL6Gxs02XO_wGm-fCiPMraOGOZ05DnIIGv-bg076FjX1FPtLLLCooCqCHuwOJ7cw5Y4yfODmDMbfaM6XkwGrDdn93fG4wf3tEZl66eCRLSYTnedSVoIs2qbzaYwoDkrbbz4UBsj0TFCy6fPZavhzMi6NQi3tpbUTTHiTjE-x0QUwgCGTNsyqnXYRHZAYtgctJfFG1aZLiY1GB0dZmk8ocYQD2a2SpzGvkbWpAOwXb5ny__HhEpAEXoHZ3ZdBiHeEAgtr4rWcPy3Y3HTsR16ex_5VT7swimip-SEAu8iZ-MkTOMkRSTsha0i60kJS2oBcNm0IlMSUBJU07H3XL7IEBeWs1QLXqpR7KV6lqxB_oQMbyy1QhV-AdFkHZc)

其中，关联 Authing 用户和 Wechaty 联系人的方式也很简单。就是通过好友请求或者消息，发送手机号码，检查 Authing 用户池中是否存在。

[![mermaid](https://mermaid.ink/img/pako:eNqrVkrOT0lVslJKL0osyFAIcYnJU1AILkksKjHUAFOaIAFdXaf8EoWnE9Y_7Vqhq2unUFySWmBoGP1k37KnE9Y8Xbr3aX_38ymbX6zf_nRSz7Np7c_mrHm2reNZ4_pYiGa7GogaoIJnG5ue7Op-snvbs45pyCprIGYaRT9bsPNZ77pnnd3P5ux62r_9Wd_Sp_3TIRqf7tz2sqkBZEvr0uf7lsAMV3DNSzHUABKaSjpKualFuYmZKUAPVYOkY5RKMlJzU2OUrIDMlMSi7BilmLxaoLrSgpTEklTXlMyS_CIlq7TEnOJUHaXE0pL84Mq8ZCWrkqLSVJgil8xEYODkQlXVAgB4Go-N)](https://mermaid.live/edit#pako:eNqrVkrOT0lVslJKL0osyFAIcYnJU1AILkksKjHUAFOaIAFdXaf8EoWnE9Y_7Vqhq2unUFySWmBoGP1k37KnE9Y8Xbr3aX_38ymbX6zf_nRSz7Np7c_mrHm2reNZ4_pYiGa7GogaoIJnG5ue7Op-snvbs45pyCprIGYaRT9bsPNZ77pnnd3P5ux62r_9Wd_Sp_3TIRqf7tz2sqkBZEvr0uf7lsAMV3DNSzHUABKaSjpKualFuYmZKUAPVYOkY5RKMlJzU2OUrIDMlMSi7BilmLxaoLrSgpTEklTXlMyS_CIlq7TEnOJUHaXE0pL84Mq8ZCWrkqLSVJgil8xEYODkQlXVAgB4Go-N)

### 扩展 wechaty-authing 插件去实现更复杂的业务

#### 扩展 Authing SDK 的使用

`wechaty-authing` 提供了 protected 的 client 实例（对应着 authing sdk 里的 `ManagementClient`）。

所以可以参考 Authing 官方的文档进行深度开发。示例：

```ts
class ExtendedWechatyAuthing extends WechatyAuthing {
  async totalUsers(): Promise<number> {
    const { totalCount } = await this.client.users.list();
    return totalCount;
  }
}
```

参考文档： <https://docs.authing.cn/v2/reference/sdk-for-node/management/>

#### 扩展 Wechaty 插件

同时开可以封装一些 Wechaty 插件功能。示例：

```ts
class ExtendedWechatyAuthing extends WechatyAuthing {
  plugin(): WechatyPlugin {
    return (bot: Wechaty): void => {
      bot.on('ready', async () => {
        const { totalCount } = await this.client.users.list();
        log.info('total users', totalCount);
      });
    };
  }
}

const authing = new ExtendedWechatyAuthing({
  userPoolId: process.env.AUTHING_USER_POOL_ID,
  secret: process.env.AUTHING_USER_POOL_SECRET
});
const bot = createBot(process.env.WECHATY_PADLOCAL_TOKEN);
bot.use(authing.plugin());
```

更多关于 Wechaty 插件的使用及开发，可以访问： <https://wechaty.js.org/docs/using-plugin-with-wechaty/overview>

---

### 注意事项

### 微信限制

- 微信好友上限： 5000 人 <https://kf.qq.com/faq/161223IrAjUn161223riUzaa.html>
- 主动添加好友： 每日 30 次请求上限
- 被动添加好友： 每日 180 次请求上限
- 邀请加群： <https://kf.qq.com/faq/161223uIfIre161223aUrmqU.html>
  - 超过 40 人群需要对方同意
  - 超过 100 人群需要对方开通微信支付（实名、绑卡）
  - 普通群人数上限 500

### Wechaty Contact 唯一 ID 说明

目前已知的 id 格式：

- 外部
  - `$search$-weixin`
  - `$search$-13212341234`
  - `weixin` / `wxid_xxxx`
- Payload 内部
  - `$search$-` 非好友 `v3_xxxxx@stranger`
  - `weixin` / `wxid_xxxx`
  - 不知道是啥的。如 `qq1111` 但 weixin 字段为微信号 `xxxx`

### Wechaty 可能会出现的一些问题

#### 版本

Wechaty 1.x 版本与之前的版本差距，如类型声明、创建实例的方式，需要注意你使用的 `puppet` 支持什么版本。

#### 主动搜索

有两种搜索方式，通过手机号和通过微信号：

```ts
const contact = await this.Friendship.search({ phone: user.phone! });
const contact = await this.Friendship.search({ weixin: user.externalId! });
```

获得的结果均无法获取到唯一 id：

```plain
昵称：Willin，id： $search$-132XXXXXXXX
昵称：XXXX，id： $search$-186XXXXXXXX

昵称：Willin，id： $search$-weixinXXXX
昵称：XXX，id： $search$-weixinXXXX
```

解决：如果是好友，则可以从 contact.payload.id 中获得。

#### 异常请求失败

比如查找某个手机号或者微信号，填写的参数正确。 `Friendship.search` 经常出现：

```plain
================================================================================

VError: [tid:e05dff73] request has been cancelled for reason: SERVER_ERROR: 2 UNKNOWN: [tid:e05dff73] wechat bad request error
    at Request._failAllPendingRequest (/Users/v0/Projects/Authing/wechaty-authing-poc/node_modules/padlocal-client-ts/src/Request.ts:334:15)
    at ClientDuplexStreamImpl.<anonymous> (/Users/v0/Projects/Authing/wechaty-authing-poc/node_modules/padlocal-client-ts/src/Request.ts:82:12)
    at ClientDuplexStreamImpl.emit (node:events:390:28)
    at ClientDuplexStreamImpl.emit (node:domain:475:12)
    at Object.onReceiveStatus (/Users/v0/Projects/Authing/wechaty-authing-poc/node_modules/@grpc/grpc-js/src/client.ts:673:18)
    at Object.onReceiveStatus (/Users/v0/Projects/Authing/wechaty-authing-poc/node_modules/@grpc/grpc-js/src/client-interceptors.ts:424:48)
    at /Users/v0/Projects/Authing/wechaty-authing-poc/node_modules/@grpc/grpc-js/src/call-stream.ts:323:24
    at processTicksAndRejections (node:internal/process/task_queues:78:11)
error Command failed with exit code 1.
```

#### 获取的信息不准确

如 `room.memberAll()`， 该方法有时能够获取完整群成员信息。有时只能返回 id 列表。

完整的数据应该是这样：

```js
[
  {
    _events: {},
    _eventsCount: 0,
    id: 'xxxx',
    payload: {
      id: 'xxxx',
      gender: 1,
      type: 1,
      name: 'Willin',
      avatar:
        'https://wx.qlogo.cn/mmhead/ver_1/lY8XLaibGJAiajvtTPx5kdDs2T3qGToUm0mHFTYGRzcaVydJZwnibQKMNKDzv2WosXJu2aUU8lteT1R6FCKVK3PUg/0',
      alias: '',
      weixin: '',
      city: 'Lianyungang',
      friend: true,
      province: 'Jiangsu',
      signature: '所有的出发  \n都是为了回家',
      phone: []
    }
  }
];
```

有的时候会变成这样：

```js
[
  {
    _events: {},
    _eventsCount: 0,
    id: 'xxxx'
  }
];
```

## Refs

- Wechaty Authing 插件仓库： <https://github.com/Authing/wechaty-authing>
- 基于该插件的 POC 示例代码仓库： <https://github.com/Authing/wechaty-authing-poc>
