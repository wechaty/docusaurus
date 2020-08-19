---
title: Examples II
description: 'Introduction > Examples: Wechaty interactive example chatbots'
---

Redux is distributed with a few examples in its [source code](https://github.com/reduxjs/redux/tree/master/examples). Most of these examples are also on [CodeSandbox](https://codesandbox.io), an online editor that lets you play with the examples online.

## Ding Dong Bot

Run the [Ding Dong Bot](https://github.com/wechaty/wechaty-getting-started/tree/master/examples/ding-dong-bot.ts) example:

```sh
git clone https://github.com/wechaty/wechaty-getting-started.git

cd wechaty-getting-started
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/gitpod?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/gitpod?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.

## Counter

Run the [Counter](https://github.com/reduxjs/redux/tree/master/examples/counter) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant [React Redux](https://github.com/reduxjs/react-redux) bindings instead.

This example includes tests.

## More Examples

You can find more examples in the [Redux Apps and Examples](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)
page of the [Redux Addons Catalog](https://github.com/markerikson/redux-ecosystem-links).
