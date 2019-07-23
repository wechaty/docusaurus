# blog.chatie.io

[Chatie Official Blog](https://blog.chatie.io)

## HOW TO POST BLOG

1. Fork it
1. Create your blog branch (git checkout -b your-blog)
1. Write your blog in markdown
1. Add your blog to `_post` folder
1. Add related image to `download` folder
1. Commit your changes (git commit -am 'added a blog')
1. Push to the branch
1. Create new Pull Request

Done!~

## CONTRIBUTE GUIDELINE

### 1. Add Blog Header

All blog should has title, author, date...

Example as follows:

```yaml
---

 title: "'Score Your Face Photo' a ML&Wechaty practice"
 date: 2017-09-18 09:00 +0800
 author: huyingxi
 ---

 > Author: [@huyingxi](https://github.com/huyingxi/wechaty_selfie) enjoying ML&Wechaty at BUPT
```

### 2. Writing Style

* Keep all filenames & url as lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-wechat-pc-impactor` instead of `2017-10-06-WeChat PC Impactor`
* Find a good image for the blog to make it more beautiful.
* Embed the photo & video before publishing, save all external file to the blog `/download/2018` directory.

see more: [Do not include Date in URL](https://github.com/Chatie/blog/issues/79)

### 3. Add `<!--more-->` Section

Add `<!--more-->` section for your abstract part, it will show on the blog homepage, or the blog homepage will show all your blog content.

### 4. Just Commit Related Files

Please do not commit unrelated files.

### 5. Add Videos

Example

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/3eq8wJfCAWs" frameborder="0" allowfullscreen></iframe>
```

## TOOL

### Online Editor

<http://prose.io/#chatie/blog.chatie.io/tree/master/_posts>

## RUN LOCALHOST

### Install

```shell
sudo apt install -y ruby-bundler
sudo apt install -y ruby-dev
sudo gem install ffi -v '1.9.18'
sudo gem install bundler
bundle install
```

### View

```shell
bundle exec jekyll serve --watch
```

## OTHERS

### JEKYLL THEME

minima: <https://github.com/jekyll/minima>

## AUTHOR

[Huan LI (李卓桓)](http://linkedin.com/in/zixia) <zixia@zixia.net>

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## COPYRIGHT & LICENSE

* Code & Docs © 2019 - now Huan LI <zixia@zixia.net>
* Code released under the Apache-2.0 License
* Docs released under Creative Commons
