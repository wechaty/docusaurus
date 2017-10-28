# blog.chatie.io
[Chatie Official Blog](https://blog.chatie.io)

### Online Editor

http://prose.io/#chatie/blog.chatie.io/tree/master/_posts

### Jekyll Theme

minima: <https://github.com/jekyll/minima>

### Install
```
gem install bundler
bundle install
bundle exec jekyll serve
```

### How to Contribute

#### Add the blog header
It should has title, author, data...   
Example
```
---
 layout: post
 title: "'Score Your Face Photo' a ML&Wechaty practice"
 date: 2017-09-18 09:00 +0800
 author: huyingxi
 ---
 
 > Author: [@huyingxi](https://github.com/huyingxi/wechaty_selfie) enjoying ML&Wechaty at BUPT
```

#### Writing Style
* Keep all filenames & url as lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-wechat-pc-impactor` instead of `2017-10-06-WeChat PC Impactor`
* Find a good image for the blog.
* Embed the photo & video before publishing, save all external file to the blog `/download/2017` directory.

#### Add `<!-- more -->` Section
Add `<!-- more -->` section for your abastrac part, it will show on the blog homepage.
If you don't add this section, blog homepage will show all your blog content, which all of us don't expect.

#### Just Commit Related Files
Please do not commit unrelated files, e.g. `.DS_Store`

#### Add Vedios
Example
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/3eq8wJfCAWs" frameborder="0" allowfullscreen></iframe>
```