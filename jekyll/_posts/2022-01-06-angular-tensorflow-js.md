---
title: "北京GDG|社区说｜NG+|聊天机器人与Angular"
author: huan
categories: talk
tags:
  - angular
  - tensorflow.js
  - gdg
image: /assets/2022/01-angular-tensorflow-js/ai-angular-tensorflow-js.webp
---

> AI, Wechaty, Angular, and mix them altogether in JavaScript

## 聊天机器人与 Angular

人工智能的发展带动了对话式交互领域研究的深入，以及随着移动互联网即时通讯工具的大众普及，Chatbot 的应用场景越来越丰富。如何基于现有的人工智能技术，构建一个聊天机器人？

Chatbot 的整个生命周期和传统的网页和APP产品有那些区别？ML GDE Huan 将基于自己对 Chatbot 的丰富实践，分享和展望这类新型对话式交互方式基于人工智能的未来发展机会。

The development of artificial intelligence has driven the in-depth research in the field of conversational interaction, and with the popularization of mobile Internet instant messaging tools, the application scenarios of Chatbot have become more and more abundant. How to build a chatbot based on existing artificial intelligence technology? What are the differences between the entire life cycle of Chatbot and traditional web and APP products? ML GDE Huan will share his thoughts on the new opportunities that Conversational AI can bring.

1. Conversational User Interface (CUI) 介绍
1. 人工智能发展回顾
1. Wechaty 开源项目介绍
1. TensorFlow.js 介绍
1. Live Demo: 基于 Angular 通过 TensorFlow.js 对微信消息在浏览器中进行实时分析
1. 20:45-21:00 互动问答

## 讲师介绍

李卓桓，谷歌开发者专家（机器学习方向）

- TensorFlow.js 布道师，Angular爱好者
- PreAngel 天使投资人，专注 AI/Chatbot 领域创业团队和项目
- 《Chatbot 从 0 到 1》《简明的 TensorFlow 2》联合作者
- GitHub 万星开源 Conversational SDK Wechaty 作者

GDE (Machine Learning); Angel Investor

GDE (Machine Learning) and AI MVP. PreAngel Partner, Plug and Play Venture Partner in China. Active Angel Investor for AI Startups, Serial Entrepreneur with Strong Technical Background.

## Presentation

### Slides

{% include iframe.html src="https://docs.google.com/presentation/d/1Gd3D8bS6OifXDsdSe0x5i6XsP_uISX3W9tR8yBA0mYs/edit?usp=sharing" %}

### Source Code

GitHub: <https://github.com/huan/ng-plus-wechaty>

## Tutorials

### Wechaty Token: apply a token from Wechaty Puppet Service Providers

You can apply a Windows / Pad protocol token from our puppet service providers:

1. [Apply Wechaty Puppet Service Token](https://github.com/wechaty/puppet-supports/issues/new/choose)
1. [Wechaty Puppet Service FAQ](https://wechaty.js.org/docs/puppet-services/faq)

#### Create a Wechaty Puppet Service Token by yourself (DIY)

Copy the following shell script and then paste it into the term of your server, to setup your Wechaty token:

```sh
# learn how to DIY a Wechaty Puppet Service token at http://wechaty.js.org/docs/puppet-services/diy
export WECHATY_TOKEN=insecure_wechaty_puppet_service_token_diy

# Set port for your hostie service: must be published accessible on the internet
# Wechaty IO Client use this port to publish the Puppet Service
export WECHATY_PUPPET_SERVER_PORT=48788

# learn more about Wechaty Puppet PadLocal at https://wechaty.js.org/docs/puppet-services/padlocal
export WECHATY_PUPPET=wechaty-puppet-padlocal
# get a 7 days free token at PadLocal official website: http://pad-local.com/
export WECHATY_PUPPET_PADLOCAL_TOKEN=YOUR_PADLOCAL_TOKEN_AT_HERE

export WECHATY_LOG=verbose

docker run \
  --rm \
  -ti \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  -p "$WECHATY_PUPPET_SERVER_PORT" \
  wechaty/wechaty:0.78
```

> Learn more: [Puppet Service: DIY](https://wechaty.js.org/docs/puppet-services/diy/) This guide will help you generate a Wechaty Token for connecting to the Wechaty Puppet Service.

## Live Coding Explanation

We have four steps in our live coding, they are saved in four separate branches for easy loading and testing.

### Step 1. `ng new my-app`

Branch: [ng_china_2020_step_1_ng_new_my-app](https://github.com/huan/ng2020-wechaty/tree/ng_china_2020_step_1_ng_new_my-app)

```sh
npx --package @angular/cli ng new my-app
cd my-app
ng serve --open
```

Learn more from <https://angular.io/guide/setup-local>

### Step 2. Wechaty

Branch: [ng_china_2020_step_2_wechaty](https://github.com/huan/ng2020-wechaty/tree/ng_china_2020_step_2_wechaty)

```sh
npm i @chatie/angular brolog
```

#### `app.module.ts`

```ts
import { WechatyModule } from '@chatie/angular'
@NgModule({
  imports: [
    WechatyModule,
    ...
  ],
  ...
```

#### `app.component.html`

```html
<wechaty
  #wechaty
  token="insecure_wechaty_puppet_service_token_diy"

  (heartbeat) = "onHeartbeat($event)"
  (scan)      = "onScan($event)"
  (login)     = "wechaty.startSyncMessage(); onLogin($event)"
  (message)   = "onMessage($event)"
>
</wechaty>
```

### Step 3. TensorFlow.js Toxicity

Branch: [ng_china_2020_step_3_toxicity](https://github.com/huan/ng2020-wechaty/tree/ng_china_2020_step_3_toxicity)

```sh
npm install @tensorflow/tfjs
npm install @tensorflow-models/toxicity

ng generate service toxicity
```

[![TensorFlow.js Toxicity Model](/assets/2022/01-angular-tensorflow-js/toxicity.webp)](https://storage.googleapis.com/tfjs-models/demos/toxicity/index.html)

Learn more:

1. [TensorFlow.js models: toxicity classifier source](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)
1. [TensorFlow.js toxicity classifier demo](https://storage.googleapis.com/tfjs-models/demos/toxicity/index.html): This is a demo of the TensorFlow.js toxicity model, which classifies text according to whether it exhibits offensive attributes (i.e. profanity, sexual explicitness).
1. [Text classification using TensorFlow.js: An example of detecting offensive language in browser](https://medium.com/tensorflow/text-classification-using-tensorflow-js-an-example-of-detecting-offensive-language-in-browser-e2b94e3565ce)

The traffic light code is copy/pasted from this great tutorial: [Stop in the Name of the Traffic Light](https://medium.com/@robhitt/stop-in-the-name-of-the-traffic-light-c5f4d8a9d2e6)

## Resources

1. [TensorFlow.js Tutorials](https://www.tensorflow.org/js/tutorials)
1. [TensorFlow.js Models](https://www.tensorflow.org/js/models)
1. [TensorFlow.js Demos](https://www.tensorflow.org/js/demos)
1. [TensorFlow.js Examples](https://github.com/tensorflow/tfjs-examples/)
1. [TensorFlow.js Gallery](https://github.com/tensorflow/tfjs/blob/master/GALLERY.md)

## About NG+

Knowledge, ideas, and insights for the Next Generation.

{% include iframe.html src="https://youtu.be/SACugbTNQnc" %}

![NG2020 Conference Huan Wechaty Angular TensorFlow.js](/assets/2022/01-angular-tensorflow-js/huan-ng-2020.webp)

> Source: [NG+ Developers Conference](https://ng-plus.dev/#/conferences?year=2020)

## 关于社区说

{% include iframe.html src="https://youtu.be/XGBBx3_pLdg" %}

「社区说」是由谷歌开发者社区 (Google Developer Group)与谷歌开发者专家计划 (Google Developer Expert) 联合推出的，与热爱技术的开发者们交流技术，直播代码，讨论产品，分享心得的小型线上会议，每次时长45分钟到1小时。

![GDG Community Talk Huan Wechaty Angular TensorFlow.js](/assets/2022/01-angular-tensorflow-js/huan-gdg-2021-community-talk.webp)

活动将由不同的谷歌开发者社区举办，并邀请国内相关技术方向的谷歌开发者专家以及对技术有热情、愿意分享的嘉宾，一起聊聊最近做的项目、写的代码，或者三五技术好友探讨聊天。

> Source: [社区说｜聊天机器人与 Angular](https://mp.weixin.qq.com/s/cluw2QQepzacuZFA1pJvcw)
