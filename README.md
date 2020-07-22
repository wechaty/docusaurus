# wechaty.github.io

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)
[![NPM](https://github.com/wechaty/wechaty.github.io/workflows/NPM/badge.svg)](https://github.com/wechaty/wechaty.github.io/actions?query=workflow%3ANPM)

[Wechaty Official Homepage](https://wechaty.github.io)

[![fame0](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/0)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/0)
[![fame1](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/1)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/1)
[![fame2](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/2)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/2)
[![fame3](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/3)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/3)
[![fame4](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/4)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/4)
[![fame5](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/5)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/5)
[![fame6](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/6)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/6)
[![fame7](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/images/7)](https://sourcerer.io/fame/huan/wechaty/wechaty.github.io/links/7)

## HOW TO POST BLOG

1. Fork it
1. [Syncing your fork](https://help.github.com/cn/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
1. Create your blog branch (git checkout -b your-blog)
1. Write your blog in markdown
1. Add your blog to `_post` folder
1. Add related image to `assets` folder
1. Add your info into `_data/authors.yml`
1. Commit your changes (git commit -am 'added a blog')
1. Push to the branch
1. Create new Pull Request

Done!~

## CONTRIBUTE GUIDELINE

### 1. Add Blog Header

All blog should has title, author, date, teaser...

Example as follows:

```yaml
---

 title: "'Score Your Face Photo' a ML&Wechaty practice"
 date: 2017-09-18 09:00 +0800
 author: your_github_username
 header:
   teaser: your_teaser_image_path
---

> Author: [@your_github_username](https://github.com/your_github_username) your one-line bio at here

> Code: [@yourcode](your_code_path)
```

### 2. Writing Style

* Keep all filenames & url as lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-wechat-pc-impactor` instead of `2017-10-06-WeChat PC Impactor`
* Find a good image for the blog to make it more beautiful.
* Embed the photo & video before publishing, save all external file to the blog `/assets/${current_year}` directory.

see more: [Do not include Date in URL](https://github.com/wechaty/wechaty.github.io/issues/79)

### 3. Add `<!--more-->` Section

Add `<!--more-->` section for your abstract part, it will show on the blog homepage, or the blog homepage will show all your blog content.

### 4. Just Commit Related Files

Please do not commit unrelated files.

### 5. Add Videos

Example

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/3eq8wJfCAWs" frameborder="0" allowfullscreen></iframe>
```

### 6. Add links to anchor in paragraph

The titles in markdown files will be added an anchor automatically, you can use that to add your own anchor links. And here is some of the rules how the blog generate the anchor:

* convert the title directly to anchor
* spaces will be replaced by dash `-`
* `/`, `&`, `?` and `.` will be eliminated
* Chinese character will be kept in the anchor

#### Example

Say you have a title as `### 我是? a title.bat`. Then you will get the anchor generated as `我是-a-titlebat`. And you can use the generated anchor to implement your own links. Like this:

```markdown
[奇妙的Link](#我是-a-titlebat)
```

## Usage

### Jekyll

Install all the Jekyll requirements and run it at localhost for blog preview.

#### 1 Use Docker Compose

This is the recommended way for new users to easy getting started

```sh
make docker
```

#### 2 ~~Install Jekyll by Hand~~

You should not use this way except you are a Ruby expert.

```sh
make install
make serve
```

### Test

In order to make sure everything(file name, file size, etc) is ok, you can run the following command to check them before `git push`.

```sh
npm install
npm test
```

## OTHERS

### JEKYLL THEME

minima: <https://github.com/jekyll/minima>

## Maintainer

1. [Rui LI](https://github.com/lijiarui)
(@lijiarui) Founder & CEO of Juzi.BOT
1. [Huan LI](https://github.com/huan)
([李卓桓](http://linkedin.com/in/zixia)),
Tencent TVP of Chatbot,
\<zixia@zixia.net\>

## Copyright & License

* Code & Docs © 2019-now Wechaty Contributors \<https://github.com/wechaty\>
* Code released under the Apache-2.0 License
* Docs released under Creative Commons
