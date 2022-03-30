---
title: "Using Jsdoc to sync the doc with the latest code"
author: lijiarui
categories: announcement
tags:
  - document
image: /assets/2017/add-wechaty-jsdoc-automate-all-the-things.webp
---

In order to sync the doc with the latest code, it's best to use [jsdoc](https://github.com/jsdoc3/jsdoc) to describe the API and use [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) to generate markdown format documents to the docs directory.

![automate all the things](/assets/2017/add-wechaty-jsdoc-automate-all-the-things.webp)

Yes, we planned to do this for nearly a year...

Thanks to [@Huan](https://github.com/huan), [@ax4](https://github.com/ax4),[@hczhcz](https://github.com/hczhcz), [@William](https://github.com/kis87988), by the end of August, we finally convert all the doc to jsdoc. And I'd like to share some jsdoc experience here.

> We need to document them better, not only the public but also the internal modules and methods.  
> Finally we decided to use the classic [jsdoc](http://usejsdoc.org/ "jsdoc") to embed document in TypeScript, then generate document to [docs/](https://github.com/wechaty/wechaty/tree/master/docs "docs/") by [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown "jsdoc2md").  
> -- @Huan said in [issue 73](https://github.com/wechaty/wechaty/issues/73 "issue 73") in Nov 2016.

At first, we write the doc in [wiki](https://github.com/wechaty/wechaty/wiki "wiki"), and it lasts for nearly a year.....

A lot of developers use wiki to learn wechaty, but the wiki's performance is not good, it cannot update automatically and doesn't base on user's most demand.

> * some minor fix (such as the different naming [Message Class](https://github.com/wechaty/wechaty/wiki/API#message-class) & [Class Room](https://github.com/wechaty/wechaty/wiki/API#class-room))
> * improvement on the formatting, e.g. the level setting of each title
> * maybe, add an index for better guiding  
> -- In Feb 2017, [@ax4](https://github.com/ax4) creat an [issue](https://github.com/wechaty/wechaty/issues/252 "issue") and expressed his willingness to contribute the document.

I like [@ax4](https://github.com/ax4)'s idea about the document guide:

* **First:** Learn the awesome features of Wechaty
* **Second:** See more advanced functions
* **Third:** Reach the boundary? Help us develop Wechaty

Thanks for [@ax4](https://github.com/ax4)'s suggestion and we decide to do the doc as soon as possible.

## JsDoc && jsdoc2md

[JsDoc](http://usejsdoc.org/) is an API documentation generator for Javascript
[jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) is a tool to help developers create markdown API document from jsdoc-commented

### JsDoc

JSDoc's purpose is to document the API of your JavaScript application or library. It is assumed that you will want to document things like modules, namespaces, classes, methods, method parameters, and so on.

JSDoc comments should generally be placed immediately before the code being documented. Each comment must start with a `/**` sequence in order to be recognized by the JSDoc parser. Comments beginning with `/*`, `/***`, or more than 3 stars will be ignored. This is a feature to allow you to suppress parsing of comment blocks.

The simplest documentation is just a description

```js
/** This is a description of the foo function. */
function foo() {
}
```

#### Reference

* *[jsdoc Introduction](http://www.2ality.com/2011/08/jsdoc-intro.html)
* *[jsdoc English document](http://usejsdoc.org/)
* *[jsdoc Chinese document](http://www.css88.com/doc/jsdoc/)
* ***Document This**
   I use vscode as my editor, and use [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)
    "Document This" is a Visual Studio Code extension that automatically generates detailed JSDoc comments for both TypeScript and JavaScript files. You can use Ctrl+Alt+D and again Ctrl+Alt+D to generates documentation for whatever the caret is on or inside of.

### jsdoc2md

Generates markdown API documentation from jsdoc annotated source code. Useful for injecting API docs into project README files.

When you document your code using valid jscode comments and run jsdoc command (e.g. `jsdoc2md example.js`), then you can get a markdown output easily.

At first, I just write all of jsdoc in the code and link [wechaty/docs/index.md](https://github.com/wechaty/wechaty/blob/main/docs/index.md) to the users, but I cannot sync `README.md` file with the code and make readme as simple as it can, so I have to do some else.

First, I should know how jsdoc2md works.

#### How jsdoc2md works

This is the main use case (render documentation) sequence:

1. User runs `jsdoc2md example.js`.
2. [jsdoc-api](https://github.com/jsdoc2md/jsdoc-api) is used to obtain the raw jsdoc data for the input source code provided. (a kind of JSON output)
3. this data is transformed into something suitable for passing into a template by [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) (which also adds support for the jsdoc2md-specific tags like `@typicalname`, `@done`, `@category` etc).
4. the resulting template data is passed into [dmd](https://github.com/jsdoc2md/dmd). This output is returned to the user.

In order to pick function name from the full api doc, I learnt about [dmd](https://github.com/jsdoc2md/dmd), it is the default output templates for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). It contains [handlebars](http://handlebarsjs.com/) partials and helpers intended to transform [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) output into markdown API document.

For the wechaty document, I change two following dmd partials:

* link.hbs
* sig-link-parent.hbs

## Wechaty Progress on JsDoc && jsdoc2md

### Discussion history

#### Related Issue

[@Huan](https://github.com/huan), [@ax4](https://github.com/ax4),[@hczhcz](https://github.com/hczhcz), [@William](https://github.com/kis87988) and I talked a lot about wechaty document on the following issues:

* **issue73:** [[doc] To Embed Document in Wechaty Code for Generating Automaticly](https://github.com/wechaty/wechaty/issues/73)
* **issue252:** [[doc] Contribute to the doc editing[ jsdoc / jsdoc2md / typedoc ]](https://github.com/wechaty/wechaty/issues/252)

#### Related PR

Also, [@hczhcz](https://github.com/hczhcz) and [@ax4](https://github.com/ax4) and I contribute a lot on the document:  

* **PR378:** [jsdoc2md may flush some pieces of the embedded doc](https://github.com/wechaty/wechaty/issues/378)
* **PR380:** [fix jsdoc flush issue #378 and minor fix on the doc examples](https://github.com/wechaty/wechaty/issues/380)  
* **PR640:** [add documentation TODO entries](https://github.com/wechaty/wechaty/pull/640)
* **PR725:** [add wechaty document](https://github.com/wechaty/wechaty/pull/725)
* **PR321:** [Add JsDoc for Class Contact](https://github.com/wechaty/wechaty/pull/321)

### Doc basic line

For the convenience of developers, our doc guideline as follows:

1. Simple and clear
2. Generate markdown for better readable version control and GitHub page hosting.

### Auto-doc working flow

1. Develop in TypeScript
2. Embedded doc insert in TypeScript
3. Compile TypeScript into JavaScript, using `npm run dist`
4. Run jsdoc / jsdoc2md, using `npm run doc`
5. Get the final doc, in [index.md](https://github.com/wechaty/wechaty/blob/main/docs/index.md), config it to [wechaty.github.io/wechaty](http://wechaty.github.io/wechaty)

### Wechaty Jsdoc file

We embed doc into the following file:

* [src/wechaty.ts](https://github.com/wechaty/wechaty/blob/main/src/wechaty.ts)
* [src/message.ts](https://github.com/wechaty/wechaty/blob/main/src/message.ts)
* [src/room.ts](https://github.com/wechaty/wechaty/blob/main/src/room.ts)
* [src/contact.ts](https://github.com/wechaty/wechaty/blob/main/src/contact.ts)
* [src/friend-request.ts](https://github.com/wechaty/wechaty/blob/main/src/friend-request.ts)

### Wechaty jsdoc2md progress

#### 1. Generate jsdoc2md file

Using the following command can generate document easily.

```shell
jsdoc2md dist/src/{wechaty,room,contact,friend-request,message}.js dist/src/puppet-web/friend-request.js>> docs/index.md
```

#### 2. Use template to Sync Readme with api doc

Actually, the first step is enough, but I think we need insert and sync all of the API docs into README, so I use a template by the following command:

```shell
jsdoc2md --template docs/partials/README.hbs dist/src/{wechaty,room,contact,friend-request,message}.js dist/src/puppet-web/friend-request.js>> README.md
```

Then add the partials \{\{>member-index-list~\}\} to show the API directory, because the full doc is too big to put in README, and it is not necessary.

#### 3. Linkable Code References

After the second step, I found the link jsdoc2md generate is an anchor link(`#`), it means I cannot link it to other pages(<https://wechaty.github.io/wechaty>), this is very inconvenient for readers.
Inspired by [[jsdoc2md-issue-123](https://github.com/jsdoc2md/jsdoc-to-markdown/issues/123)], [@KevinAst](https://github.com/KevinAst) using jsdoc-to-markdown wrote a beatutiful doc: [astx-redux-util](https://astx-redux-util.js.org/1.0.0/).
I found maybe I can created a custom partial too.
Then I override the following templates in `docs/partials/overrides`, adding <https://wechaty.github.io/wechaty> in the link:

* link.hbs
* sig-link-parent.hbs

This is the reason why I add the following script in `package.json` :

```sh
jsdoc2md --partial docs/partials/overrides/*.hbs --template docs/partials/README.hbs dist/src/{wechaty,room,contact,friend-request,message}.js dist/src/puppet-web/friend-request.js>> README.md
```

`--partial` command override `link.hbs` and `sig-link-parent.hbs`

Then, all done!

## To Contributor: How to add jsdoc when contributing

For other developers, I tried my best to make it easier to add doc, just the following 2 steps:

### 1. Add jsdoc in your code like the following shows

```ts
/** This is a description of the foo function. */
function foo() {
}
```

### 2. Run the following command

```sh
npm run doc
```

Then you can find the generated jsdoc here: [wechaty/docs/index.md](https://github.com/wechaty/wechaty/blob/main/docs/index.md)

Cheers!
