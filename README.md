## wechaty.js.org

[![GitHub Pages CI](https://github.com/wechaty/wechaty.js.org/workflows/GitHub%20Pages%20CI/badge.svg)](https://github.com/wechaty/wechaty.js.org/actions?query=workflow%3A%22GitHub+Pages+CI%22)
[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)

![Wechaty Docusaurus](docs/images/wechaty-docusaurus.png)

<https://wechaty.js.org> is the official wechaty homepage for publishing latest news, blog posts, and documentation from our open source community.

## How to post a blog

1. Fork it
1. [Syncing your fork](https://help.github.com/cn/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
1. Create your blog branch (git checkout -b your-blog)
1. Write your blog in markdown
1. Add your blog to `_post` folder
1. Add related image to `assets` folder (create a `$MONTH-your-blog-slug/` directory to contain your images)
1. Add your info into `_developers/your_github_id.md`
1. Commit your changes (git commit -am 'added a blog')
1. Push to the branch
1. Create new Pull Request

Done!~

## Contribution Guidelines

### 1. Add Blog Header

All blog should has title, author, date, teaser...

Example as follows:

```yaml
---
title: "'Score Your Face Photo' a ML&Wechaty practice"
author: your_github_username
image: your_teaser_image_path
---

<One line abstract for your blog post>

<Your beautiful blog post contents...>
```

### 2. Writing Style

- Keep all filenames & url as lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-wechat-pc-impactor` instead of `2017-10-06-WeChat PC Impactor`
- Find a good image for the blog to make it more beautiful.
- Embed the photo & video before publishing, save all external file to the blog `/assets/${current_year}` directory.

see more: [Do not include Date in URL](https://github.com/wechaty/wechaty.github.io/issues/79)

### 4. Just Commit Related Files

Please do not commit unrelated files.

### 5. Add Videos or pdf

Example

```html
{% include iframe.html src="https://www.youtube.com/watch?v=3eq8wJfCAWs" %}
```

or

```html
{% include iframe.html src="/assets/2020/qijibot/final.pdf" %}
```

see more： [Add iframe to wechaty blog](https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/)

### 6. Add links to anchor in paragraph

The titles in markdown files will be added an anchor automatically, you can use that to add your own anchor links. And here is some of the rules how the blog generate the anchor:

- convert the title directly to anchor
- spaces will be replaced by dash `-`
- `/`, `&`, `?` and `.` will be eliminated
- Chinese character will be kept in the anchor

#### Example

Say you have a title as `### 我是? a title.bat`. Then you will get the anchor generated as `我是-a-titlebat`. And you can use the generated anchor to implement your own links. Like this:

```markdown
[奇妙的Link](#我是-a-titlebat)
```

## Test

In order to make sure everything(file name, file size, etc) is ok, you can run the following command to check them before `git push`.

```sh
npm install
npm test
```

## Welcome to contribute

### Why contribute?

As an open source product, Wechaty thrives from contributions of community members. Whatever your skill set is, there is a lot you can do to help us make Wechaty better! So start forking!

At the same time, we also meet up offline all over the world, here is some activities:

- [Wechaty Contributor Dinner](https://wechaty.js.org/2017/04/26/wechaty-meeting/)
- [The memorabilia of The First Chatie WWDC Party](https://wechaty.js.org/2017/06/06/the-first-chatie-wwdc-party/)
- [Shanghai WWDC - Wechaty Worldwide Developers Conference](https://wechaty.js.org/2017/08/28/wechaty-shanghai-meetup/)
- [Wechaty Contributor Dinner with Data Girls](https://wechaty.js.org/2018/01/14/wechaty-contributor-dinner-data-girl/)
- [Wechaty Country Wide Developer Conference](https://wechaty.js.org/2018/09/15/country-wide-developer-conference/)
- .....

### How to contribute docs?

- Fork this repo
- Create your doc branch: `git checkout -b doc`
- Write this doc in markdown
- Commit your changes `git commit -am 'doc comment'`
- Push to the branch
- Create new Pull Request

### More Contribution

See more in: [Welcome to contribute](https://wechaty.github.io/docs/welcome-to-contribute)

Contact rui@chatie.io to learn more

## Markdown Linting Rules

[Markdown Linting Rules Documents](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md)

## Resources

- [Migrating from gitbook to docsify.js](https://timdams.com/2019/05/02/migrating-from-gitbook-to-docsify-js/)
- [Integrating GitBook with JSDoc to Document Your Open Source Project](https://gist.github.com/KevinAst/7e12648245ff2a8e9c1557135014b933)

## Writers

[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/0)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/0)
[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/1)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/1)
[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/2)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/2)
[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/3)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/3)
[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/4)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/4)
[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/5)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/5)
[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/6)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/6)
[![contributor](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/images/7)](https://sourcerer.io/fame/huan/wechaty/wechaty.js.org/links/7)

To get to know all our writers, see <https://github.com/wechaty/wechaty.js.org/graphs/contributors>

## Maintainers

1. [@lijiarui](https://github.com/lijiarui), [Rui LI](https://wechaty.js.org/developers/lijiarui), Microsoft AI MVP, Founder & CEO of Juzi.BOT (YC W19 Alumni)
1. [@huan](https://github.com/huan), [Huan LI](https://wechaty.js.org/developers/huan), Tencent TVP of Chatbot, \<zixia@zixia.net\>
1. [@wj-Mcat](https://github.com/wj-Mcat), [Jingjing WU](https://wechaty.js.org/developers/wj-mcat), Author of [Python Wechaty](https://github.com/wechaty/python-wechaty)

And [wechaty/contributors](https://github.com/orgs/wechaty/teams/contributors/members)

## Copyright & License

- Code & Docs © 2016-now Wechaty Contributors <https://github.com/wechaty>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
