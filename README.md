<div align="center">
<img src="https://github.com/wechaty/wechaty.js.org/blob/main/docs/images/wechaty-docusaurus.png" alt="wechaty logo" height ="auto" width="200" />
<br />
<h1>Wechaty Organization Website</h1>
<p>
Repository for the Wechaty Organization Website, a resource for the Wechaty Organization. [**Wechaty**](https://wechaty.js.org) It is the official Wechaty website for publishing latest news, blog posts, and documentation from our open source community.
</p>
<p align="center">
<a href="https://github.com/wechaty/wechaty.js.org" alt="GitHub contributors">
<img src="https://img.shields.io/github/contributors/wechaty/wechaty.js.org.svg" /></a>
<a href="https://github.com/wechaty/wechaty.js.org" alt="GitHub issues by-label">
<img src="https://img.shields.io/github/issues/wechaty/wechaty.js.org" /></a>
<a href="https://gitter.im/wechaty/wechaty" alt="Gitter">
<img src="https://img.shields.io/badge/Gitter-@layer5.svg?logo=slack" /></a>
</p>

[![GitHub Pages CI](https://github.com/wechaty/wechaty.js.org/workflows/GitHub%20Pages%20CI/badge.svg)](https://github.com/wechaty/wechaty.js.org/actions?query=workflow%3A%22GitHub+Pages+CI%22)
[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)
[![DIVIO documentation system](https://img.shields.io/badge/DIVIO-Documentation%20System-blue)](https://documentation.divio.com/)
[![ES Modules](https://img.shields.io/badge/ES-Modules-brightgreen)](https://github.com/Chatie/tsconfig/issues/16)

</div>

## How To Post a Blog

To submit a blog post for publication on [wechaty.js.org](https://wechaty.js.org), you can follow the steps below.

1. Fork this repository. If you don't know what is meant by forking a repository, read about it [here](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)
2. Clone the forked repository to your local machine. If you don't know how to do that, [this article](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) explains it well
3. Make sure your forked repository is in sync with the main repository. If you don't know how to sync a forked repository,read about it in [this article](https://help.github.com/cn/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
4. We prefer using [gitHub flow](https://guides.github.com/introduction/flow/). Therefore start by creating a branch for your blog using the command `git checkout -b name-of-blog-branch`. Give the branch a meaningful name
5. Create a markdown file in [jekyll/\_posts](./jekyll/_posts) folder. The file name should follow the format `YYYY-MM-DD-your-blog-slug.md`. For example `2016-12-03-welcome-to-wechaty.md`
6. Write your blog in markdown in the file you created in the previous step. If you are not familiar with markdown syntax, you can learn it [here](https://guides.github.com/features/mastering-markdown/)
7. Add related images to [jekyll/assets](./jekyll/assets) folder under `$YEAR/$MONTH-your-blog-slug/` directory
8. Add your info into `jekyll/_contributors/your_github_id.md`
9. Commit your changes using the command `git commit -am "YOUR_BLOG_TITLE"`. `YOUR_BLOG_TITLE` is the title of your blog
10. Push your branch to github using the command `git push origin name-of-blog-branch`.
11. Create new Pull Request(PR)
12. Sign the [CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement)
13. Wait for the continuous integration workflow run to finish. If it is failing, fix whatever is making it to fail so that CI turns green
14. Wait for @wechaty/editors to review your PR

That's it!

## Guidelines For Writing a Blog Post

### 1. Your blog post should have a Header

The header of your blog post should have a title, author and image.

This is illustrated in the example below:

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

- You should keep all filenames and URLs as lowercase. Use `-` character between words instead of space when creating a new file or directory. e.g. `2017-10-06-wechat-pc-impactor` instead of `2017-10-06-WeChat PC Impactor`. No Chinese should be used in any filename.
- Find a good image for the blog to make it more beautiful.
- You should embed photos and videos before publishing, save all external files to the `/jekyll/assets/${YEAR}/$MONTH-your-blog-slug/` directory.

### 3. Do Not Commit Unrelated Files

Please do not commit unrelated files. It will keep things tidy and make it easier to review your PR.

### 4. How To Add Videos and PDFs To Your Blog Post

You can add videos and PDFs to your blog post by using the syntax below.

Example of how to add video or pdf

```html
{% include iframe.html src="https://www.youtube.com/watch?v=3eq8wJfCAWs" %}
```

or

```html
{% include iframe.html src="/assets/2020/qijibot/final.pdf" %}
```

You can read more at： [Add iframe to wechaty blog](https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/)

## How To Run Tests

In order to make sure your changes have not broken anything, you can run the following commands before pushing your changes to gitHub.

```sh
npm install
npm test
```

## How To Preview Your changes

If you want to preview your blog post or changes on localhost, you need to have Jekyll installed in your machine. You can follow the [jekyll quickstart](https://jekyllrb.com/docs/) instructions to install jekyll.

### 1. Install Jekyll by Hand

Run Jekyll at localhost to preview your blog post by running the commands below.

```sh
make install
cd jekyll; make serve # or either run `./scripts/jekyll-serve.sh` for a fresh new start by cleaning cache
```

### 2. Preview the Blog

You can view the blog by navigating to <http://127.0.0.1:4000/blog/> in your browser

## How To Make Other Contributions

If you are not interested in writing a blog post but would still love to make a contribution, you are still welcome. We are delighted to have you around.

### Why contribute?

As an open source product, Wechaty thrives from contributions of community members. Whatever your skill set is, there is a lot you can do to help us make Wechaty better! So start forking!

At the same time, we also meet up offline all over the world. Here are some activities you are invited to join if you are interested:

- [Wechaty Contributor Dinner](https://wechaty.js.org/2017/04/26/wechaty-meeting/)
- [The memorabilia of The First Chatie WWDC Party](https://wechaty.js.org/2017/06/06/the-first-chatie-wwdc-party/)
- [Shanghai WWDC - Wechaty Worldwide Developers Conference](https://wechaty.js.org/2017/08/28/wechaty-shanghai-meetup/)
- [Wechaty Contributor Dinner with Data Girls](https://wechaty.js.org/2018/01/14/wechaty-contributor-dinner-data-girl/)
- [Wechaty Country Wide Developer Conference](https://wechaty.js.org/2018/09/15/country-wide-developer-conference/)
- .....

### How to Run Locally

1. Clone this repository: `git clone "https://github.com/wechaty/wechaty.js.org"`
2. On the terminal navigate to the root directory `cd wechaty.js.org`
3. Run the commands :
    1. `npm install`
    2. `npm run docusaurus:build`
    3. `npm run docusaurus:serve`
4. The site will be running locally on `http://localhost:3000`

### How To Contribute To the Documentation

1. Fork this repository
2. Create your documentation branch: `git checkout -b branch-name`
3. Make changes to the documentation in markdown
4. Add changes to the staging area `git add .`
5. Commit your changes using the command `git commit -m 'commit message'`
6. Push your changes to gitHub `git push origin branch-name`
7. Create new Pull Request

## Resources

- [Migrating from gitbook to docsify.js](https://timdams.com/2019/05/02/migrating-from-gitbook-to-docsify-js/)
- [Integrating GitBook with JSDoc to Document Your Open Source Project](https://gist.github.com/KevinAst/7e12648245ff2a8e9c1557135014b933)
- [Markdown Linting Rules Documents](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md)

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

## History

### main v0.9 (Aug 23, 2021)

1. Add OpenAPI Specification docs at <https://wechaty.js.org/docs/openapi/> ([#1218](https://github.com/wechaty/wechaty.js.org/issues/1218))

### v0.5 (Aug 12, 2020)

1. Using docusaurus for docs
1. Rename chatie to wechaty

### v0.3 (Mar 9, 2017)

Rename wechaty to chatie

### v0.0.1 (Dec 4, 2016)

Init version

## Maintainers

1. [@lijiarui](https://github.com/lijiarui), [Rui LI](https://wechaty.js.org/contributors/lijiarui), Microsoft AI MVP, Founder & CEO of Juzi.BOT (YC W19 Alumni)
1. [@huan](https://github.com/huan), [Huan LI](https://wechaty.js.org/contributors/huan), Tencent TVP of Chatbot, \<zixia@zixia.net\>
1. [@wj-Mcat](https://github.com/wj-Mcat), [Jingjing WU](https://wechaty.js.org/contributors/wj-mcat), Author of [Python Wechaty](https://github.com/wechaty/python-wechaty)

And [wechaty/contributors](https://github.com/orgs/wechaty/teams/contributors/members)

## Copyright & License

- Code & Docs © 2016-now Wechaty Contributors <https://github.com/wechaty>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
