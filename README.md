blog.chatie.io
--------------
[Chatie Official Blog](https://blog.chatie.io)

WRITING BLOG
------------

## Online Editor

http://prose.io/#chatie/blog.chatie.io/tree/master/_posts

## Install
```
sudo apt install ruby-bundler
sudo apt install ruby-dev
sudo gem install ffi -v '1.9.18'
sudo gem install bundler
bundle install
```

## View
```
bundle exec jekyll serve --watch
```

### CONTRIBUTE GUIDELINE

#### 1. Add Blog Header
All blog should has title, author, date...   
Example as follows:
```
---
 layout: post
 title: "'Score Your Face Photo' a ML&Wechaty practice"
 date: 2017-09-18 09:00 +0800
 author: huyingxi
 ---
 
 > Author: [@huyingxi](https://github.com/huyingxi/wechaty_selfie) enjoying ML&Wechaty at BUPT
```

#### 2. Writing Style
* Keep all filenames & url as lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-wechat-pc-impactor` instead of `2017-10-06-WeChat PC Impactor`
* Find a good image for the blog to make it more beautiful.
* Embed the photo & video before publishing, save all external file to the blog `/download/2018` directory.

#### 3. Add `<!--more-->` Section
Add `<!--more-->` section for your abstract part, it will show on the blog homepage, or the blog homepage will show all your blog content.

#### 4. Just Commit Related Files
Please do not commit unrelated files.

#### 5. Add Vedios
Example
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/3eq8wJfCAWs" frameborder="0" allowfullscreen></iframe>
```

JEKYLL THEME
------------

minima: <https://github.com/jekyll/minima>

# Blogging Style

1. [Do not include Date in URL](https://github.com/Chatie/blog/issues/79)