---
title: "使用句子秒回控制家里的台灯"
author: cr4fun
categories: tutorial
tags:
  - iot
  - arduino
---

> 作者: [cr4fun](https://github.com/cr4fun)，极客、物联网专家，SDK 产品经理。

<!-- more -->

多年前，我曾基于 XMPP 协议设计了一套物联网系统，每个设备对应一个 XMPP 账号。后台可以方便地看到各种设备的在线状态，而无需开发心跳 API。还可以通过群发消息，批量对设备进行远程操作。

但 XMPP 协议也有不足之处，比如很多算力受限设备无法使用 XMPP 协议，以及操作时需要 XMPP 协议的客户端。安装 XMPP 协议的客户端在推广时也是一个巨大的门槛。

根据去年的资料显示，微信有 11 亿个人用户。如使用微信去控制，则没有安装门槛。同时，用户用一个微信向自己的另一个微信发送消息去控制设备更能产生信任感。消息没有经过别人的 APP，也没有经过别人的公众号。

## 如何控制硬件设备？

硬件设备控制是一个很专业的领域，这里不做过多介绍。简单说一下，微控芯片有很多条腿，它们叫做 GPIO 针脚。这些针脚可以产生不同的电平，连接针脚的设备可以根据电平呈现不同的状态。比如高电平继电器，一旦输入的电平是高电平，则它就的常断电路会闭合，电流导通，电灯就可以亮。

如何让针脚产生电平？可以通过编程语言实现。比如在 arduino 中，对针脚 0 执行高电平：

```log
digitalWrite(0, HIGH);
```

对针脚 0 执行低电平：

```log
digitalWrite(0, LOW);
```

## 如何远程控制硬件设备？

只要让设备通过网络，获得相应的指令即可。当采用推送方式时，可使用 MQTT 协议，指令端去发布一个主题，设备端去订阅该主题。当采用轮询方式时，设备端每隔一定时间间隔，去 GET 一下云端的资源地址，获得相关的指令，再根据指令，去更改 GPIO 的电平。

为了安全，需要把传输的指令进行加密，并添加签名。当设备获得指令时，需要解密，同时也需要去验签。

但为了演示如何使用微信控制设备，这里采用明文传输，不加密，不加签，不验签。

## 如何用微信远程控制设备？

![RICEPO](/assets/2020/juzi-iot/0.webp)

如上图所示，使用微信远程控制设备的关键，就是在设备上面跑一个微信客户端，并对消息进行判断，处理成高低电平。

![RICEPO](/assets/2020/juzi-iot/1.webp)

以前有命令行的微信，可以直接通过命令方式调用。但是现在这种方法已经失去作用了。目前，wechaty 是一个很优秀的微信机器人框架。只要在 on message 方法里写代码对消息进行处理，操作 GPIO，就可以实现用微信去远程控制家里的设备。

然而，我在树莓派里跑 wechaty 并没有成功，原因是 wechaty 会启动一个 chrome，但那个 chrome 是 x86 的，不支持 arm。而把 arm 的 chrome 替换掉 x86 的 chrome 后，依然不能启动。我猜测是 arm 的 chrome 和 x86 的 chrom 可能不仅仅是指令集不一样，里面的接口也不一样。因此，需要有一个平台，能直接获得微信消息。句子秒回就是这样一个平台。

在句子秒回中，可以设置 API 回调接口。<https://wechat.botorange.com/>

![RICEPO](/assets/2020/juzi-iot/4.webp)

因此可以构建一个回调 API，根据获得的消息去操作硬件设备。因此，目前有 2 种方案可选，一种是在回调地址中，把获得的消息转成 MQTT，即发布一个主题。

![RICEPO](/assets/2020/juzi-iot/2.webp)

如上图所示，使用廉价的 arduino，订阅主题，当微信发送消息时，句子秒回会把消息推到回调 API。在回调 API 中，把获得的消息发布到一个 MQTT 主题。但这也需要额外配置一个 MQTT broker 服务器。

![RICEPO](/assets/2020/juzi-iot/3.webp)

另一种方案是在回调 API 中，把消息存起来。通过另一个 API 可让设备轮询获得该消息。因轮询有时间间隔，因此它的速度没有 MQTT 快。

## 具体代码

为了便于演示，不做太复杂。传输直接用明文，不加密了。获得的消息也不存在数据库里，直接保存为文本文件，让 arduino 能调用就行了。

### 指令设置

open 为开灯命令，close 为关灯命令。

### 作为 webAPI 的 PHP 代码

本例子使用 flight 微框架和用于 POST 数据的 workerman 库来实现。

因此 composer.json 中设置了这两个库。

```json
{
  "require": {
    "mikecao/flight": "^1.3",
    "workerman/workerman": "^4.0"
  }
}
```

具体代码

```php
<?php
require __DIR__ . '/../vendor/autoload.php';
use flight\Engine;
use GuzzleHttp\Client;
use Workerman\Worker;
$app = new Engine();

$app->route('GET /text/@id', function($id){
    echo file_get_contents("$id.txt");
});

$app->route('POST /message', function(){
    $data=file_get_contents("php://input");
    $json_data = json_decode($data, TRUE);
    $user = $json_data["data"]["contactName"];
    $contactId = $json_data["data"]["contactId"];
    $text = $json_data["data"]["payload"]["text"];
    $token = $json_data["data"]["token"];
    $chatId = $json_data["data"]["chatId"];
    $myfile = fopen("$contactId.txt", "w") or die("Unable to open file!");
    fwrite($myfile, $text);

    $client = new Client();
    $r = $client->request('POST', 'https://ex-api.botorange.com/message/send', [
        'json' => [
            'chatId' => $chatId,
            'token'=> $token,
            'messageType' => 0,
            'payload' => [
                'text'=> "$text too",
                'mention'=>[]
            ]
        ]
    ]);
    echo $r->getBody();
});

$app->start();
?>
```

上面的例子中，获得消息和发消息，可以参考句子秒回的 API 文档：<https://github.com/juzibot/xiaoju/wiki/API-Doc>

### arduino 代码

本例子中，采用廉价的 ESP8266 作为设备微控器，在 GPIO0 针脚上面连接继电器。

需要把 yourdomain 替换成你的网址，wxid 替换成发指令消息的微信 id。该 id 可以从获得消息中的 json 字段中获得。即 PHP 代码中的 $contactId 。

```php
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

void setup() {
  // put your setup code here, to run once:
  pinMode(0, OUTPUT);
  Serial.begin(9600);

  WiFi.begin("wifiname", "wifipasswd");   //WiFi connection
  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
    delay(500);
    Serial.println("Waiting for connection");
  }
}

void loop() {
  HTTPClient http;
  http.begin("http://yourdomain/text/wxid");
  //  http.addHeader("Content-Type", "application/json");
  int httpCode = http.GET();
  if (httpCode) {
    if (httpCode == 200) {
      String payload = http.getString();
      if (payload == "open") {
        digitalWrite(0, HIGH);
      } else {
        digitalWrite(0, LOW);
      }
      Serial.println(payload);
    }
  }
  http.end();
  delay(500);
}
```

## 视频演示

<https://b23.tv/BV1Gt4y127Qz>

## 除了点灯还能干点别的不？

开门禁、开空调、开电视，总之一切智能家居，都可以通过微信遥控。
