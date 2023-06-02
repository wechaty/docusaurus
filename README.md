<div align="center">
<img src="https://github.com/wechaty/docusaurus/blob/main/docs/images/wechaty-docusaurus.png" alt="wechaty logo" height ="auto" width="800" />
<br />
<h1>Wechaty Organization Website</h1>
<p>
Repository for the Wechaty Organization Website, a resource for the Wechaty Organization. It is the official Wechaty website for publishing latest news, blog posts, and documentation from our open source community.
</p>
<p align="center">
<a href="https://github.com/wechaty/docusaurus" alt="GitHub contributors">
<img src="https://img.shields.io/github/contributors/wechaty/docusaurus.svg" /></a>
<a href="https://github.com/wechaty/docusaurus" alt="GitHub issues by-label">
<img src="https://img.shields.io/github/issues/wechaty/docusaurus" /></a>
<a href="https://gitter.im/wechaty/wechaty" alt="Gitter">
<img src="https://img.shields.io/badge/Gitter-@layer5.svg?logo=slack" /></a>
</p>

[![GitHub Pages CI](https://github.com/wechaty/docusaurus/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/wechaty/docusaurus/actions/workflows/gh-pages.yml)
[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)
[![DIVIO documentation system](https://img.shields.io/badge/DIVIO-Documentation%20System-blue)](https://documentation.divio.com/)
[![ES Modules](https://img.shields.io/badge/ES-Modules-brightgreen)](https://github.com/Chatie/tsconfig/issues/16)

</div>

## How To Run Tests

In order to make sure your changes have not broken anything, you can run the following commands before pushing your changes to gitHub.

```sh
npm install
npm test
```

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

<a href="https://github.com/wechaty/docusaurus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wechaty/docusaurus" />
</a>

To get to know all our writers, see <https://github.com/wechaty/wechaty.js.org/graphs/contributors>

## History

### main v0.11 (Apr 1, 2022)

Split docusaurus repo from the mixed repo with Jekyll ([Issue wechaty/wechaty.js.org#1](https://github.com/wechaty/wechaty.js.org/issues/1))

### v0.9 (Aug 23, 2021)

1. Add OpenAPI Specification docs at <https://wechaty.js.org/docs/openapi/> ([#1218](https://github.com/wechaty/docusaurus/issues/1218))

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

And [wechaty/contributors](https://github.com/orgs/wechaty/teams/contributors/members)

## Copyright & License

- Code & Docs © 2016-now Wechaty Contributors <https://github.com/wechaty>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
