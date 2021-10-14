---
title: 使用jekyll include在wechaty博客中快速插入视频
author: univerone
categories: tutorial
tags:
  - jekyll
  - plugin
image: /assets/2020/add-video-to-wechaty-blog/header.webp
---

撰写暑期2020中期POC博客的时候，遇到了在博文中插入视频、PPT等iframe的需求，可以在markdown文档中直接使用bilibili等视频网站提供的视频嵌入代码，然而这样视频的样式不够美观，iframe没有铺满整个宽度并保持一定宽高比。

## 1. 背景

在[lijiarui](https://wechaty.js.org/contributors/lijiarui/)和[Huan](https://wechaty.js.org/contributors/huan/)的建议下，参考[之前的博客](https://wechaty.js.org/2020/05/19/qnamaker-juzi-bot-for-investors-rui/),应用如下样式插入iframe能够达到较为满意的效果（宽高比为16:9）。

```html
<div class="video-container" style="
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
">
<iframe
  src="https://www.youtube.com/embed/ZYjYAT2g-1Q"
  width="560"
  height="315"
  frameborder="0"
  allowfullscreen=""
  style="
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
">
</iframe>
</div>
```

但是每次需要插入iframe的时候都插入这么一段代码未免太过复杂，之前我使用hugo写博客的时候经常使用shortcodes并传入一定的参数，
博客生成的时候会使用对应的HTML模板替换这段shortcodes。
经查询发现jekyll也有类似的特性，可以使用`include`标签来引入位于_includes文件夹里面的html片段，并且可以在`include`标签传入变量，在html模板中进行处理生成html片段，具体可以参考[jekyll文档](https://jekyllrb.com/docs/includes/)。

## 2. 使用include插入iframe

基本思想很简单，传入一个参数：iframe的地址或者视频的播放地址，利用上面带样式的iframe代码写成模板文件即可。

在[Huan](https://wechaty.js.org/contributors/huan/)的建议下，在模板文件中使用[liquid](https://shopify.github.io/liquid/)语法进行一些简单的逻辑判断，针对不同类型的iframe进行不同的处理，比如：

* bilibili视频的iframe有一个最上面的推荐栏，会导致iframe变高，使用16：9的比例不能使视频铺满，因此修改其宽高比为10:7,更具体得说，将`.video-container`这个div的`padding-bottom`改为70%。
* 插入pdf文件需要使用viewer.js进行渲染，需要在本地的pdf文件路径前加上`/assets/js/viewer-js/#`作为完整的iframe地址。
* 对于支持的视频网站，将视频的播放地址转化为视频的iframe地址

模板文件为_includes文件夹内部的iframe.html,具体内容如下

{% raw %}

```liquid
{% assign src = include.src %}
{% assign ratio = '56.25%' %}
{% if src contains '.pdf' %}
  {% assign type = 'pdf' %}
{% else %}
  {% assign type = src | split: '//' | last | split: '/' | first %}
{% endif %}
{% case type %}
  {% when "pdf" %}
    {% assign src = '/assets/js/viewer-js/#' | append: src %}
  {% when 'www.bilibili.com' or 'player.bilibili.com' %}
    {% assign ratio = '70%' %}
    {% assign src = src | replace: "www.bilibili.com/video/", "player.bilibili.com/player.html?bvid=" %}
  {% when 'youtu.be' or 'www.youtube.com' %}
    {% assign src = src | replace: "watch?v=", "embed/" | replace: "youtu.be", "www.youtube.com/embed"  %}
  {% when 'v.qq.com' %}
    {% assign ratio = '60%' %}
    {% assign src = src | replace: ".html", "" | replace: "x/page/", "txp/iframe/player.html?vid="  %}
  {% when 'v.youku.com' %}
    {% assign src = src | replace: ".html", "" | replace: "v.youku.com/v_show/id_", "player.youku.com/embed/"  %}
{% endcase %}

<div style="
    position: relative;
    padding-bottom: {{ ratio }};
    padding-top:30px;
    height:0;
    overflow:hidden;
">
  <iframe
    src='{{ src }}'
    allowfullscreen
    webkitallowfullscreen
    frameborder="0"
    style="
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    "
  >
</iframe>

</div>
```

{% endraw %}

## 3. 使用示例

### pdf文件

{% raw %}

```liquid
{% include iframe.html src="/assets/2020/qijibot/final.pdf" %}
```

{% endraw %}

{% include iframe.html src="/assets/2020/qijibot/final.pdf" %}

插入视频时，支持如下网站直接使用视频的播放地址，作为`include`标签的src参数

### youtube

{% raw %}

```liquid
{% include iframe.html src="https://www.youtube.com/watch?v=fbTedVcEEEI" %}
```

{% endraw %}

或者短网址

{% raw %}

```liquid
{% include iframe.html src="https://youtu.be/fbTedVcEEEI" %}
```

{% endraw %}

{% include iframe.html src="https://youtu.be/fbTedVcEEEI" %}

### bilibili

{% raw %}

```liquid
{% include iframe.html src="https://www.bilibili.com/video/BV1LV411r756" %}
```

{% endraw %}

{% include iframe.html src="https://www.bilibili.com/video/BV1LV411r756" %}

### 优酷

{% raw %}

```liquid
{% include iframe.html src="https://v.youku.com/v_show/id_XMzcyODcwMzQzNg==.html" %}
```

{% endraw %}

{% include iframe.html src="https://v.youku.com/v_show/id_XMzcyODcwMzQzNg==.html" %}

### 腾讯视频

{% raw %}

```liquid
{% include iframe.html src="https://v.qq.com/x/page/v0952wieqwl.html" %}
```

{% endraw %}

{% include iframe.html src="https://v.qq.com/x/page/v0952wieqwl.html" %}
