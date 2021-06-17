---
title: Wechaty DevOps tools
---

![Wechaty: Conversational RPA SDK for Chatbot Makers](/img/wechaty-logo.svg)

The DevOps model is all the rage for most software teams because of the immense benefits it delivers in terms of efficiency over the traditional software development and management processes. Like in any other software project, there are several DevOps toolsets you can use to automate and streamline your Wechaty chatbot building process. You can integrate them as part of your workflow whether you are developing a chatbot or Wechaty puppet. These tools can help improve your efficiency and code quality. Below are some of the tools you can use to automate your workflow in addition to the traditional DevOps tools.

## [@chatie/semver](https://www.npmjs.com/package/@chatie/semver)

This is a very simple NPM package. [@chatie/semver](https://www.npmjs.com/package/@chatie/semver) is a wrapper for [semver](https://www.npmjs.com/package/semver) package. You can use it to check whether the current package version is the stable or the development version. It also provides typescript support.

## [@chatie/git-scripts](https://npmjs.com/package/@chatie/git-scripts)

This NPM package is a wrapper for the [git-scripts](https://www.npmjs.com/package/git-scripts) package. It provides githooks integration for chatie projects. In addition to the features that come with [git-scripts](https://www.npmjs.com/package/git-scripts) package, the `pre-push hook` has been configured to run `npm run lint` followed by `npm verion patch` before `git push` for better code quality and version management. You can learn more about `git-scripts` package from its [GitHub home page](https://github.com/nkzawa/git-scripts).

This hook has a feature for temporarily and permanently disabling `pre-push` as explained in the sections below.

### Temporary

You can set `NO_HOOK=1` before `git push` to temporarily disable `pre-push` git hook.

```shell
# for Linux & Mac
  NO_HOOK=1 git push

# for Windows
  set NO_HOOK=1 git push
```

### Permanent

To permanently disable the pre-push git hook, you can delete the related settings in `package.json` file.

```shell
-  "git": {
-    "scripts": {
-      "pre-push": "npx git-scripts-pre-push"
-    }
-  }
```

## [@chatie/tsconfig](https://npmjs.com/package/@chatie/tsconfig)

This package is for centralized management of all Wechaty project `tsconfig.json` files created. It provides reusable TypeScript configuration files for you to extend from. You can use it to extend `@chatie/tsconfig` from your `tsconfig.json` file to have the chatie version of the TypeScript configuration. After installation, it automatically creates a `tsconfig.json` file at the root of the project directory which references `@chatie/tsconfig` configuration.

## [@chatie/eslint-config](https://www.npmjs.com/package/@chatie/eslint-config)

You can configure a tool as part of your DevOps continuous integration pipeline to detect and fix problems in your codebase. Since [`tslint`](https://www.npmjs.com/package/tslint) is not supported, you can use [`eslint`](https://eslint.org/) instead to detect and fix problems. [`@chatie/eslint-config`](https://www.npmjs.com/package/@chatie/eslint-config) is a handy NPM package you can use for configuring [`eslint`](https://eslint.org/). It can effectively manage Wechaty `eslintrc.js` files.

## [Wechaty with docker](#placeholder-link)

Wechaty is fully dockerized. You can integrate Docker as part of your DevOps model by running Wechaty as a microservice in a [docker](https://www.docker.com/) container. To get a taste of Wechaty and docker, there is a [docker-wechaty-getting-started repository](https://github.com/wechaty/docker-wechaty-getting-started) which you can clone and run on your machine with zero configuration.
