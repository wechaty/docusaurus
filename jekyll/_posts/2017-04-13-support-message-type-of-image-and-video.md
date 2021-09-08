---
title: '给机器人添加发送图片视频功能'
author: mukaiu
categories: feature
tags:
  - code
image: /assets/2017/mukaiu-ding-code.jpg
---

公司活动，需要对入群用户进行管理和自动回复。前期在Node Party Beijing上接触到 @huan 的分享，Wechaty刚好能支持该活动，支持Docker部署，是一个很棒的Bot Framework。

开发过程中发现，[#4 Support Message Type of Image/Video](https://github.com/wechaty/wechaty/issues/4)此功能还未实现，决定完成该项特征。

## 1. 问题分析

为解Web微信是如何发送图片的，进行了数据抓包，并分析微信Web源码

```js
onSuccess: function(e) {
   if (0 == e.BaseResponse.Ret) {
        var o = this.MMSendMsg;
        o.MediaId = e.MediaId,
        s.sendMessage(o),
        t.$apply(function()
            o.MMFileStatus = a.MM_SEND_FILE_STATUS_SUCCESS
        })
   } else
        this.onError("Ret: " + e.BaseResponse.Ret)
},
```  

Web中Message是通过此函数创建的，图片消息会被添加MediaId属性，因此如果我们能取得需要上传文件的MediaId，就可以直接调用sendMessage发送图片了。

## 2. 上传图片

通过抓包，发现图片被POST请求发送到

```sh
https://file.wx.qq.com/cgi-bin/mmwebwx-bin/webwxuploadmedia?f=json
```

搜索源码，找到

```js
API_webwxdownloadmedia: "https://" + o + "/cgi-bin/mmwebwx-bin/webwxgetmedia",
API_webwxuploadmedia: "https://" + o + "/cgi-bin/mmwebwx-bin/webwxuploadmedia",
API_webwxpreview: "/cgi-bin/mmwebwx-bin/webwxpreview",
```

API_webwxuploadmedia就是图片上传地址，全局搜索这个变量是不是就可以找到上传文件的方法呢？
经过搜索

```js
window.WebUploader = e;
Y = e.create({
       auto: !0,
       dnd: "#chatArea",
       paste: f.browser.webkit ? "#chatArea" : void 0,
       swf: c.RES_PATH + "third_party/webuploader-0.1.5/Uploader.swf",
       server: c.API_webwxuploadmedia + "?f=json",
       fileVal: "filename",
       pick: ".js_fileupload",
       compress: !1,
       duplicate: !0,
       threads: 1,
       chunked: !0,
       chunkSize: 524288
})
```

e就是webuploader，处理文件上传，单独打包在一个chunk里。由于控制游览器读取本地文件没有什么好的处理办法，所以决定通过使用直接post数据到此地址的方式进行文件上传，该请求并没有上传cookie信息，因此省去了很多麻烦。各个参数都可以直接调用Web信息获取到

```js
let uploadMediaRequest = {
      BaseRequest: baseRequest,
      FileMd5: md5,
      FromUserName: this.self().id,
      ToUserName: toUserName,
      UploadType: 2,
      ClientMediaId: +new Date,
      MediaType: UploadMediaType.ATTACHMENT,
      StartPos: 0,
      DataLen: size,
      TotalLen: size,
}

let formData = {
      id: 'WU_FILE_1',
      name: filename,
      type: contentType,
      lastModifiedDate: Date().toString(),
      size: size,
      mediatype,
      uploadmediarequest: JSON.stringify(uploadMediaRequest),
      webwx_data_ticket: webwxDataTicket,
      pass_ticket: passTicket || '',
      filename: '文件数据',
}
```  

返回结果为

```json
{
"BaseResponse": {
"Ret": 0,
"ErrMsg": ""
}
,
"MediaId": "@crypt_cd2308ca_e13f71eeb3879a52f58935743a1008b609f391eaa6bfcce5de32d9c523f934224a5327a37ad85ce2ad76f055d0205d17a6c1a7afe7200a1051a7eed41dd6d8696b43a3e61d8836759b30df3c9fb7abf9d89be37cb1ce787e22d1e947e4227beeb323937471d5c0548b976dcd22e3361694ac3ea53389b6185714a7cbf4ee40430c01925415804d758411ddf73ee6679c1ddea340455ed7eb803733f28c4b4e14b0218f84c5d938a01983b60e71a55131cb2d77f52ba3938089c7606d86078d1a7a097788ea7ed411d2f34889590ff49b2100a5942919d4256b9cb1f2032593268997957928350338ec1a3c50d2a64cd811c0227c4c4789ced408f64ac99f2ee64d4a59d415857205ea30bd74bb425d49ae0dfb6524d67d5d71e2dbea635db99be32dd8ca13f7b5fe14df96fbd0fd19b59fe5431451861a31e7d3754039f6f52e",
"StartPos": 19482,
"CDNThumbImgHeight": 100,
"CDNThumbImgWidth": 100
}
```

MediaId就是我们需要的，直接调用createMessage,sendMessage即可发送图片了。

## 3.整合Wechaty

为快速验证可行性，直接添加了Wechaty.sendMedia。后和@huan @lijiarui讨论，决定使用say(MediaMessage(filename))的形式发送媒体文件。
重载

```js
Wchaty.send(message: MediaMessage)
Contact.say(mediaMessage: MediaMessage)
Message.say(mediaMessage: MediaMessage)

//准备后续添加
Room.say(mediaMessage: MediaMessage)
```

## 4.坑

1. 测试期间发现，发送图片有时候会失败，原因是无法获取mediaId，第一感觉是，难道还有细节没有发现?对比post数据，完全一致，没有问题，那问题出在哪呢？

    后来看源码才发现

    ```js
    var e = location.host
    , t = "weixin.qq.com"
    , o = "file.wx.qq.com"
    , n = "webpush.weixin.qq.com";
    e.indexOf("wx2.qq.com") > -1 ? (t = "weixin.qq.com",
    o = "file2.wx.qq.com",
    ```

    原来还有个地址是wx2.qq.com。对应的文件上传地址是file2.wx.qq.com。不仔细啊

1. 另一个坑是微信Web对视频大小有20M限制，这个也是开始没有注意的，发送大视频会失败
1. 循环依赖
    由于MediaMessage继承Message，Message.say(MediaMessage)又需要引用MediaMessage.OMG,循环引用,TS报错了不支持这么玩～
    所以我把MediaMessage移入了message.ts,删除了media-message.ts,无中生有了186行变更😊

## 5.End

现在Wechaty支持发送图片(bmp,jpg,png)视频(mp4)和其他文件。
图片和视频是可以在聊天窗口直接查看的
可以通过在ding-dong-bot里回复code来收到一张图片二维码。

![ding-code][mukaiu-ding-code]

作者：@[mukaiu](https://github.com/mukaiu), [Wechaty Contributor](https://github.com/orgs/Chatie/teams/contributor)

![avatars2](https://avatars2.githubusercontent.com/u/7746790?v=3&s=88)

[mukaiu-ding-code]: /assets/2017/mukaiu-ding-code.jpg
