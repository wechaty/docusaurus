---
title: "基于wechaty的智能聊天助手"
author: chen-Aaron
categories: article
image: /assets/2021/06-wechaty-ai/ai.jpeg
---

如今AI技术以及日趋成熟，而微信是人们日常生活中比较常见的社交软件,两者相结合就是*智能聊天*。
比对了市面上比较多的智能聊天AI，如微软小冰、图灵机器人、腾讯闲聊。

图灵机器人相对较为死板，而且每天都有固定的请求数量，所以放弃。
腾讯闲聊基于AI Lab领先的NLP引擎能力、数据运算能力和千亿级互联网语料数据的支持，同时集成了广泛的知识问答能力，需要注册和申请，还需要加密处理，自定义画像是个坑，流程较为复杂后续可以考虑集成。
微软小冰注重人工智能在拟合人类情商维度的发展，强调人工智能情商，而非任务完成在人机交互中的基础价值，较为适合聊天。
![xiaobing](/assets/2021/06-wechaty-ai-chat/ms.jpeg)
主要步骤:
1. 申请领养小冰
2. 调试小冰接口
3. 接入wechat

进入微博官网，关注微博小冰，进入私聊后点击小冰给的网页链接
![weibo](/assets/2021/06-wechaty-ai-chat/chat.png)
通过领养的方式获得与小冰聊天的权限。
小冰的调用主要包含两个接口。一个new.json接口和一个connect接口。主要使用到微博cookie和uid、clientId和source，都可以通过chrome开发者工具获得
![api](/assets/2021/06-wechaty-ai-chat/api.jpeg)

采用nodejs进行开发，主要使用webchaty,qrcode-terminal,wechaty-puppet-padlocal,axios
对axios进行全局配置。    
    const axios = require('axios');
    const {weibo} = require('./config/index');
    const https = require('https');
    const rootCas = require('ssl-root-cas').create();
    const path = require('path');

    rootCas.addFile(path.resolve(__dirname, '../intermediate.pem'));
    const httpsAgent = new https.Agent({
      ca: rootCas
    });
    // https.globalAgent.options.ca = rootCas;


    const Referer = 'https://api.weibo.com/chat/';
    const Cookie = `SUB={weibo.SUB};BAYEUX_BROWSER=${weibo.BAYEUX_BROWSER}`;
    axios.defaults.headers.common['Referer'] = Referer;
    axios.defaults.headers.common['Cookie'] = Cookie;
    axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36'
    axios.defaults.httpsAgent = httpsAgent;
    module.exports = axios;


connect接口为https接口所以需要配置https证书，所以需要生成可以用的ssl证书
使用 openssl 查看服务器的证书详细情况

`openssl s_client -connect incompletechain.badssl.com:443 -servername incomplete-chain.badssl.com | tee logcertfile
`
然后我们再查找该证书的签名机构（中级证书就是服务端证书的签名机构）
`openssl x509 -in logcertfile -noout -text | grep -i "issuer"
`
它会返回一个签名证书的 URI。我们下载该中级证书

`curl --output intermediate.crt http://cacerts.digicert.com/DigiCertSHA2SecureServerCA.crt
`

最后将其将转成 .pem 文件。

`openssl x509 -inform DER -in intermediate.crt -out intermediate.pem -text
`

然后是接口的调用，这个结合chrome开发工具多调试就可以了，比较容易，这里不做过多赘述。
接下来是wechaty的使用，主要用到wechaty中的**登陆**和**message**事件
通过**scan**扫码后登录再监听message事件进行回复。
![flow](/assets/2021/06-wechaty-ai-chat/flow.png)

    const msgTextBot = async (msg) => {
        try {
            const text = msg.text();
            // 发送消息给微软小冰
            await sendWord(text);
            // 接收微软小冰的返回的内容
            await reciveWord(msg);
        } catch (e) {
            new Error('处理接收到的文本消息错误', e)
        }
    }
>需要注意connect接口需要在new.json接口之后调用

本文开源项目地址https://github.com/chen-Aaron/wcassistant.git

#### 鸣谢
* 感谢 [Wechaty](https://github.com/wechaty/wechaty) 团队提供微信机器人 SDK，让开发者可以专注于业务代码。


