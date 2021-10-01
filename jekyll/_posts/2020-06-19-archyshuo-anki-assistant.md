---
title: "Archy.sh: a WeChat Assistant That Generates Anki Flashcards for Chinese Learners 吖奇说：一个帮助外国人与海归学习中文的微信助理，可生成Anki卡片"
author: archy
categories: project
tags:
  - typescript
  - python
  - nlp
  - anki
  - productivity
image: /assets/2020/archyshuo-anki-assistant/archybots.webp
excerpt: a chatbot that can extract difficult Chinese words from WeChat 公众号 articles, annotate them with Pinyin and definitions, and generate Anki notes.
---

It’s been almost a year since I moved back to China. And currently I’m still struggling with Chinese.

回国几乎一年了，目前我还在苦读中文。

Unlike English there are no spaces in Chinese. Figuring out the proper segmentation for Chinese words in a sentence can often be a mind-numbing task for Chinese learners, especially when the sentence contains Chinese words and characters that one is not familiar with.

不像英文，中文并没有空格。对于还在学习汉字的人来说，很多时候分词是一件令人费解的事，尤其当句中含有学习者不熟悉的词与字。

It has occured to me that many Chinese learners including myself would be able to perform word segmentation more efficiently if we can preview beforehand what are the difficult words in each paragraph (i.e. Chinese words we are likely not familiar with) and have each word annotated with its pinyin and some rough definition. This would also improve the whole reading experience.

在阅读一篇文章前，如果我能事先预览段落中有哪些难词（也就是很大机率我不熟悉的词语），以及这些词语的拼音与大致意思，我相信我（包括很多中文的学习者）将能更高效率地进行分词。这也会让整个阅读体验变得更棒。

<!-- markdownlint-disable MD033 -->

And it would be even nicer if there is a simple procedure that would enter everything we need to remember (i.e. the words we are not familiar with, together with their pinyin and definitions) into a system like Anki<sup>\[1\]</sup> where we can later perform active recall<sup>\[2\]</sup> and spaced repetition<sup>\[3\]</sup> to develop long-term memory for these words in an efficient manner.

然后更棒的是如果能有一个极其方便的流程来为学习者把文章中不熟悉的词语，连带拼音与意思，输入进一个类似Anki<sup>\[1\]</sup>的学习系统里，有助接下来进行「活性回忆」<sup>\[2\]</sup>与「间隔重复」<sup>\[3\]</sup>的练习，来提高词语进入长期记忆的效率。

> <sup>\[1\]</sup>: [Anki - Powerful, intelligent flash cards](https://apps.ankiweb.net)
>
> <sup>\[2\]</sup>: [Retrieval-Based Learning: Active Retrieval Promotes Meaningful Learning (2012)](http://learninglab.psych.purdue.edu/downloads/2012_Karpicke_CDPS.pdf)
>
> <sup>\[3\]</sup>: [Making long-term memories in minutes: a spaced learning pattern from memory research in education ( 2013)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3782739/)

<p style="text-align:center; font-size:0.75em">
● ● ●
</p>

After many burnouts and failures (which included screwing up my MiraclePlus interview) and realising [the video editor project](https://吖.中国/about.html) that I was working on was not going anywhere, I decided I wanted to work on a chatbot assistant that can help me to be more productive learning Chinese. And maybe others will find it to be useful as well =)

经历了多次倦怠与失败（其中包括亲手把我的奇绩创坛面试搞砸），并意识到我正在做的[视频编辑器项目](https://吖.中国/about.html)也走不了多远，我决定我想做一个chatbot助理，来帮助我更高效率地学习中文。或许其他学习者也会发现它有用 =）

And [Archy the Anki Bot 0.0.1](https://github.com/archywillhe/archy-the-anki-bot) was born.

就这样[吖奇说Anki助理0.0.1](https://github.com/archywillhe/archy-the-anki-bot)出世了。

## The Use Cases 用例

1: Extract difficult Chinese words from WeChat articles.

一、从微信公众号文章中提取难词。

2: Annotate Chinese words with pinyin and rough definitions (expressed in English).

二、给词语标上拼音与英文大意。

3: Generate a deck of Anki notes from Chinese words.

三、从一组词语生成一组Anki卡片。

## Design & Implementation & Demo  设计与履行与演示

![Informal UML](/assets/2020/archyshuo-anki-assistant/informal-uml.webp)

Basically we would have an `ArticleAnalysor`, a `TextAnalysor`, a `Lexicographer`, and an `AnkiDeckGenerator`. And we would integrate everything in main.ts where we handle Wechaty callbacks.

基本来说，我们会有一个`ArticleAnalysor`、 `TextAnalysor`、 `Lexicographer`、 `AnkiDeckGenerator`。 然后，我们会在处理Wechaty回调的main.ts中合并所有东西。

For the current use cases, we would use the `ArticleAnalysor` to extract text from the WeChat Article (using `request` & `cheerio`), the `TextAnalysor` to tokenise the text into words (using [`jieba` with a pretrained model in `paddle`](https://github.com/fxsjy/jieba)), the `Lexicographer` to assign a difficulty score to each word (using an ad hoc formula with [Chih-Hao's Chinese characters meta-data](http://technology.chtsai.org/charfreq/characters.html)), as well as to give English definitions and pinyin to selected words (using [CC-CEDICT](https://cc-cedict.org/wiki/)). And lastly `AnkiDeckGenerator` is for generating a deck of Anki notes (using [genanki](https://github.com/kerrickstaley/genanki)).

实现当前用例，我们将使用`ArticleAnalysor`来从微信文章获取文本（`request` + `cheerio`）、 `TextAnalysor`来对文本进行分词（[`jieba`+`paddle`中一个训练好的模型](https://www.github.com/fxsjy/jieba)）、 `Lexicographer`为每个词语分配一个难度分数（一个随意的公式+[Chih-Hao的汉字元数据](http://technology.chtsai.org/charfreq/characters.html)），以及为词语提供英语定义和拼音（[CC-CEDICT](https://cc-cedict.org/wiki/)）。 最后，`AnkiDeckGenerator`将用来生成一组Anki卡片（[`genanki`](https://github.com/kerrickstaley/genanki)）。

[Gluing everything together functionally](https://github.com/archywillhe/archy-the-anki-bot/blob/master/src/main.ts) and this is what we get:

[函数式地把所有东西粘起来](https://github.com/archywillhe/archy-the-anki-bot/blob/master/src/main.ts)，即可得出：

![demo](/assets/2020/archyshuo-anki-assistant/demo.webp)

![demo2](/assets/2020/archyshuo-anki-assistant/demo2.webp)

![demo3](/assets/2020/archyshuo-anki-assistant/demo3.webp)

![demo3.5](/assets/2020/archyshuo-anki-assistant/demo3.5.webp)

## What’s Next? 接下来呢？

### still in the midst of planning but here are some rough ideas

- Refinements 功能改良

  - As we can see the ad hoc word difficulty scoring formula isn't performing super great at the moment. That is something I need to experiment and perhaps do some text scraping and use a combination of [BERT](https://github.com/google-research/bert) with a self-trained model, etc to achieve a more accurate scoring system.  

  - The pretrained `paddle` model in `jieba` works well in general but it may still give unsatisfying results (e.g. at times when a sentence contains a person's name). Trying out different models aside, my plan is to engineer around the problem (i.e. to have results that always make sense to the users) using tools like [StandfordNLP's stanza](https://github.com/stanfordnlp/stanza) or approach the problem differently, etc.

  - I'm also thinking about extending the `Lexicographer` to contain definitions from different dictionaries as well as online search results that is useful to the language learners, etc.

- MiniApp & Premium Version & The Future 小程序与会员版与未来打算

  - Anki is an amazing and very powerful tool but I feel like it is too exam-orientated in the sense that it is best utilised by people (e.g. medical students) with the aim of doing well in an upcoming exam, etc. And from a UI/UX perspective it has a steep learning curve. I'm currently working on a WeChat and TikTok MiniApp inspired by Anki but with a more laid-back take on it. The end product will a nichely designed tool for people who want to improve their Chinese with the intention to read and speak better rather than scoring well in exams. In the premium version it would come with a chatbot assistant like [Archy the Anki bot](https://github.com/archywillhe/archy-the-anki-bot).

  - [Archy the Anki bot](https://github.com/archywillhe/archy-the-anki-bot) will always remain free and open-source on Github. I will continue to improve it as I work on the commercial aspect of the project described above so that I can continue doing this full-time and maybe it can become ramen profitable. 🍜 🍜 🍜

  - If things go well I would like to scale it up to cover different language learning (e.g. English, Japanese, German), as well as going beyond language learning to become a full-fledge note-taking productivity tool for autodidacts. It will be like [Notion](https://www.notion.so/) but more for remembering stuff and visualising knowledge representation. And at the core of it would be a cross-platform chatbot assistant\* =) At the moment I'm reading up on how to train a model to do handwritten diagram recognition (e.g. mind map, UML, flow chart, etc) as well as looking into visual languages like [Chalktalk](https://arxiv.org/pdf/1809.07166.pdf). ⚗️ ⚗️ ⚗️

> \*: in general from a product perspective I believe chatbot is a great I/O into the world, especially as social media apps become the new browsers.
>

## Lastly 最后

Huge thanks to

- [contributors of the jieba library for making jieba such an amazing tool!](https://github.com/fxsjy/jieba/graphs/contributors)

- [the CC-CEDICT community for doing such an great job and licensing it under CC BY-SA 3.0!](https://cc-cedict.org/wiki/)

- [contributors of the genanki library for writing such an easy-to-use tool!](https://github.com/kerrickstaley/genanki/graphs/contributors)

- the [Wechaty community](https://wechaty.github.io/) and [everyone involved in making Wechaty such a wonderful lib!](https://github.com/wechaty/wechaty#two_hearts-contributors) And [the Juzi.bot team](https://botorange.com/) for [opening up their padplus protocol ecosystem](https://github.com/juzibot/Welcome/wiki/Support-Developers) for outsiders like me!

If you are interested in the development of this project feel free to follow Archy.sh on WeChat and TikTok or [join our mailing list](https://mailing-list.xn--nqr.xn--fiqs8s/) =)

![wechat-qr](/assets/2020/archyshuo-anki-assistant/wx.webp)
![tiktok-qr](/assets/2020/archyshuo-anki-assistant/tt.webp)

Also please feel free to fork my repo, deploy your own bot, or just do anything with the code, or open issues if there are any! Thanks!

![nyan](/assets/2020/archyshuo-anki-assistant/cat.gif)

p.s. 写中文写到中间有些累与懒🥴「吖奇说记忆卡片」小程序上线后更多关于未来的去向（中+英）会在公众号有的看～ 感兴趣的朋友可以关注我的公众号与抖音@吖奇说～

> 作者: [Archy Will He 何魏奇](https://github.com/archywillhe/)，on and off创了八年都没有发，目前在全职做[吖奇说(Archy.sh)](https://xn--nqr.xn--fiqs8s/)这个项目。
>
> Github Repo: [Archy the Anki bot (吖奇说Anki助理)](https://github.com/archywillhe/archy-the-anki-bot)
>
> [![flair](https://camo.githubusercontent.com/c551a231a6cda28e59291fa091ddcb7b9899f6ec/68747470733a2f2f737461636b65786368616e67652e636f6d2f75736572732f666c6169722f313334303435332e706e67)](https://stackoverflow.com/users/2041954/%E5%90%96%E5%A5%87%E8%AF%B4-%E4%BD%95%E9%AD%8F%E5%A5%87archy-will-he)
>
