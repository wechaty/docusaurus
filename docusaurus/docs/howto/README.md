## Welcome to How to Guide

[![GitHub Pages CI](https://github.com/wechaty/wechaty.js.org/workflows/GitHub%20Pages%20CI/badge.svg)](https://github.com/wechaty/wechaty.js.org/actions?query=workflow%3A%22GitHub+Pages+CI%22)
[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)
[![DIVIO documentation system](https://img.shields.io/badge/DIVIO-Documentation%20System-blue)](https://documentation.divio.com/)

![Wechaty Docusaurus](how-to-guide.png)

How to Guide is important because it guides us through the steps involved in addressing key problems and use-cases.

### How To Contribute To this section

- Fork this repository

![Fork the repo](fork.jpg)

- <a href="\locally">Follow these steps to run locally </a>

- Create your documentation branch: `git checkout -b branch-name`

![checkout branch](git-checkout.png)

- Make changes to the file

![make changes](PR-file-changes.png)

- Run test for making sure the changes are valid `npm run test`

![run test](npm-run-test.png)

- Add changes to the staging area `git add .`

![add to staging area](git-add.png)

- Commit your changes using the command `git commit -m 'commit message'`

![make commit](git-commit.png)

- Push your changes to gitHub `git push origin branch-name`

![push changes](git-push.png)

- Create new Pull Request

![open Pull Request](pull-request.jpg)

- Make sure to pass all the Test Cases

![pass test case](PR-checks.png)

<section id="locally">

### How to Run Locally

</section>

- Clone this repository: `git clone "https://github.com/wechaty/wechaty.js.org"`

![git clone](git-clone.png)

- Run the commands :
  - `npm install`
  - `npm run docusaurus:build`
  - `npm run docusaurus:serve`
  
![run install](npm-install.png)

![run build](npm-run-build.png)

![run serve](num-run-serve.png)

- The site will be running  locally on `http://localhost:3000`

![run locally](localhost.png)

### Copyright & License

- Code & Docs © 2016-now Wechaty Contributors <https://github.com/wechaty>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
