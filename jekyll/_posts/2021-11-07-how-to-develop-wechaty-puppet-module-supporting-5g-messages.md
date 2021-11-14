---
title: "支持5G消息的 puppet-walnut 接入介绍"
author: zrn-fight
categories: article
tags:
  - blog
  - study
  - introduction
  - wechaty-puppet-walnut
image: /assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/puppet-walnut.webp
---

很荣幸能参加"[暑期2021]((https://summer.iscas.ac.cn))"活动，接触到[开发支持电信运营商 5G Chatbot / RCS 的 Wechaty 接入 Puppet 模块](https://github.com/wechaty/summer/issues/74)这一开源项目,下面来和大家分享一下开发流程，希望能帮助更多的开发者快速上手这个项目。

## 一、准备工作

在开发之前，你需要准备以下工具：

- [postman](https://www.postman.com/)：用来测试5G Chatbot的接口
- [终端测试消息APP](https://www.5g-msg.com/#/bussinessInformation)：安装时设为默认短信应用
- 服务器

整体步骤分为两步：

1. 测通5G Chatbot的上下行接口
1. 将5G Chatbot接入wechaty puppet中

## 二、测试5G Chatbot的接口

### 1.下行消息

#### 接口申请：

在[5G消息开发者社区](https://www.5g-msg.com/)申请开发接口，填写Chatbot信息并准备一个回调地址，可以是服务器的公网IP和端口号构成，也可以是提前申请好的域名。

![config](/assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/config.webp)
  
#### 获取token：

- 首先要实现 `https://{notifyURL}/notifyPath` 这个接口进行身份鉴权并将代码部署到服务器上，其中`{notifyURL}`为申请Chatbot时所设置的回调地址。该接口的实现逻辑只需原样返回请求消息中的echoStr随机字符串和appId，如下面的这段验证示例所示，具体的实现不限语言。可参考 [中国电信-中国联通 5G 消息业务平台行业客户接入接口技术规范 V1.0.4文档](https://github.com/wechaty/puppet-walnut/blob/main/docs/5g-message-service-platform-industry-customer-access-interface-specification.pdf)（以下简称“接口文档”）中第6.2 部分。
  
[notify](/assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/notify.webp)
  
- 将以下代码导入 postman，修改 sipID、appID、appKey 和 senderPhone，点击 send 按钮即可获取到 token，可查看参考[中国电信-中国联通 5G 消息业务平台行业客户接入接口技术规范 V1.0.4文档](https://github.com/wechaty/puppet-walnut/blob/main/docs/5g-message-service-platform-industry-customer-access-interface-specification.pdf) 中6.1部分。
  
```json
{
    "name": "get_token",
    "event": [{
        "listen": "prerequest",
        "script": {
          "exec": [
              "\r",
              "//////////skn环境测试 信息///////////////\r",
              "pm.globals.set(\"sipID\", \"你的chatbot的sipID\");\r",
              "pm.globals.set(\"appID\", \"你的chatbot的appID\");   \r",
              "pm.globals.set(\"appKey\", \"你的chatbot的appKey\");\r",
              "\r",
              "pm.globals.set(\"senderPhone\", \"你的手机号码\");\r",
              "\r",
              "pm.globals.set(\"url\", \"maap.5g-msg.com:30001\");\r",
              ""
              ],
          "type": "text/javascript"
          }
        },
        {
          "listen": "test",
          "script": {
          "exec": [
              "var acquiretoken = JSON.parse(responseBody);\r",
              "pm.globals.set(\"accessToken\",acquiretoken.accessToken);"
            ],
            "type": "text/javascript"
            }
          }
        ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\"appId\":\"{{appID}}\",\"appKey\":\"{{appKey}}\"}",
          "options": {
          "raw": {
          "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://{{url}}/bot/v1/sip:{{sipID}}@botplatform.rcs.chinaunicom.cn/accessToken",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "bot",
            "v1",
            "sip:{{sipID}}@botplatform.rcs.chinaunicom.cn",
            "accessToken"
          ]
        },
        "description": "获取token"
        },
        "response": []
}
```
  
#### 下行消息：
  
获取 token 后，即可进行下行消息发送，即终端 APP 可收到 Chatbot 所发送的消息。需要实现 `https://{serverRoot}/bot/{apiVersion}/{chatbotId}/messages` 接口。具体的请求方法，参照[中国电信-中国联通 5G 消息业务平台行业客户接入接口技术规范 V1.0.4文档](https://github.com/wechaty/puppet-walnut/blob/main/docs/5g-message-service-platform-industry-customer-access-interface-specification.pdf) 的 9.2部分。

终端接收到短信示例，如图：
  
![message1](/assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/message1.webp)

### 2.上行消息

需要实现 `http://{notifyURL}/messageNotification/{chatbotId}/messages` 这个接口，具体的请求方法参照[中国电信-中国联通 5G 消息业务平台行业客户接入接口技术规范 V1.0.4文档](https://github.com/wechaty/puppet-walnut/blob/main/docs/5g-message-service-platform-industry-customer-access-interface-specification.pdf) 中的 11.1 部分，实现该接口后，终端即可向Chatbot发送消息，如下图所示：

[message2](/assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/message2.webp)

## 三、将5G Chatbot接入wechaty puppet中

1. 将上述身份鉴权和上行消息的业务逻辑在start()函数中实现,可参考如下代码：

![code1](/assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/code1.webp)

1. 把Chatbot的消息结构转换为puppet的消息结构,重写messageRawPayloadParser函数

```typescript
override async messageRawPayloadParser (smsPayload: any): Promise<MessagePayload> {
    const payload: MessagePayload = {
      fromId: smsPayload.senderAddress,
      id: smsPayload.messageId,
      text: smsPayload.messageList[0].contentText,
      timestamp: Date.now(),
      toId: smsPayload.destinationAddress[0],
      type: MessageType.Text,
    }
    return payload
  }
```
  
1. 把chatbot要发送的消息连上puppet，将实现下行消息的逻辑在messageSend()函数中实现，可参考如下代码：

![code2](/assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/code2.webp)

## 参考资料

《中国电信-中国联通 5G 消息业务平台行业客户接入接口技术规范 V1.0.4》：

{% include iframe.html src="/assets/2021/11-how-to-develop-wechaty-puppet-module-supporting-5g-messages/5g-message-service-platform-industry-customer-access-interface-specification.pdf" %}

- 项目仓库: <https://github.com/wechaty/wechaty-puppet-walnut>  
- npm包：<https://www.npmjs.com/package/wechaty-puppet-walnut>

> 作者: [zrn-fight](https://github.com/zrn-fight)
