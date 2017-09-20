---
layout: post
title: "Using Jsdoc to sync the doc with the latest code"
date: 2017-09-20 21:00 +0800
author: lijiarui
---

> Author: [@lijiarui](https://github.com/lijiarui) [BotOrange](http://www.botorange.com)

In order to sync the doc with the latest code, it's best to use `jsdoc` to describe the API and use `jsdoc-to-markdown` to generate markdown format documents to the docs directory.

Yes, we are planned to do this for nearly a year... as @Huan said in [issue 73](https://github.com/Chatie/wechaty/issues/73 "issue 73") in Nov 2016.

> We need to document them better, not only the public but also the internal modules and methods. 
> Finally we decided to use the classic [jsdoc](http://usejsdoc.org/ "jsdoc") to embed document in TypeScript, then generate document to [docs/](https://github.com/Chatie/wechaty/tree/master/docs "docs/") by [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown "jsdoc2md").

At first, we write the doc in [wiki](https://github.com/Chatie/wechaty/wiki "wiki") first, and it lasts for nearly a year.....

A lot of developers using wiki learned how to use wechaty, but the wiki's performance is not good, it cannot update automatically and doesn't base on User's most demand.

In Feb 2017, [@ax4](https://github.com/ax4 "@ax4") creat an [issue](https://github.com/Chatie/wechaty/issues/252 "issue") and expressed his willingness to contribute the document.

> * some minor fix (such as the different naming [Message Class](https://github.com/wechaty/wechaty/wiki/API#message-class) & [Class Room](https://github.com/wechaty/wechaty/wiki/API#class-room)) 
> * improvement on the formatting, e.g. the level setting of each title 
> * maybe, add an index for better guiding

I like @ax4's idea about the document guide:
 "Learn the awesome features of Wechaty" -> "See more advanced functions" -> "Reach the boundary? Help us develop Wechaty".
 
Thanks for @ax4's suggestion and we decide to do the doc as soon as possible.

But half a year passed..... And by the end of August, we finally convert all the doc to jsdoc. And I'd like to share some jsdoc experience here.

# JsDoc && jsdoc2md

JsDoc is an API documentation generator for Javascript   
jsdoc2md is a tool to help developers create markdown API document from jsdoc-commented 

## jsdoc intro

JSDoc's purpose is to document the API of your JavaScript application or library. It is assumed that you will want to document things like modules, namespaces, classes, methods, method parameters, and so on.

JSDoc comments should generally be placed immediately before the code being documented. Each comment must start with a `/**` sequence in order to be recognized by the JSDoc parser. Comments beginning with `/*`, `/***`, or more than 3 stars will be ignored. This is a feature to allow you to suppress parsing of comment blocks.

The simplest documentation is just a description

```
/** This is a description of the foo function. */
function foo() {
}
```

#### Reference 
- [jsdoc Introduction](http://www.2ality.com/2011/08/jsdoc-intro.html)
- [jsdoc English document](http://usejsdoc.org/)
- [jsdoc Chinese document](http://www.css88.com/doc/jsdoc/)
- Document This
   I use vscode as my editor, and use [dothis](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) 
    "Document This" is a Visual Studio Code extension that automatically generates detailed JSDoc comments for both TypeScript and JavaScript files. You can use Ctrl+Alt+D and again Ctrl+Alt+D to generates documentation for whatever the caret is on or inside of. 

## jsdoc2md

Generates markdown API documentation from jsdoc annotated source code. Useful for injecting API docs into project README files.

When you document your code using valid jscode comments and run jsdoc command (something like `jsdoc2md example.js`), then you can get a markdown output easily.

At first, I just write all of jsdoc in the code and link `index.md` to the users, but I cannot sync readme file with the code and make readme as simple as it can, so I have to do some else.

So I should know how jsdoc2md works.

### How jsdoc2md works
This is the main use case (render documentation) sequence:

1. The user runs jsdoc2md example.js.
2. [jsdoc-api](https://github.com/jsdoc2md/jsdoc-api) is used to obtain the raw jsdoc data for the input source code provided. (a kind of JSON output)
3. this data is transformed into something suitable for passing into a template by [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) (which also adds support for the jsdoc2md-specific tags like `@typicalname`, `@done`, `@category` etc).
4. the resulting template data is passed into [dmd](https://github.com/jsdoc2md/dmd) (the default output template). This output is returned to the user.

In order to pick function name from the full api doc, I learnt about [dmd](https://github.com/jsdoc2md/dmd), It is the default output templates for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). It contains [handlebars](http://handlebarsjs.com/) partials and helpers intended to transform [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) output into markdown API document.

For the wechaty document, I change two following dmd partials:
* link.hbs
* sig-link-parent.hbs

# Wechaty Progress on JsDoc && jsdoc2md
## discussion history
* discussion
[@Huan](https://github.com/zixia), [@ax4](https://github.com/ax4),[@hczhcz](https://github.com/hczhcz), [@William](https://github.com/kis87988) and I talked a lot about wechaty document on issues: [issue73](https://github.com/chatie/wechaty/issues/73)   [issue252](https://github.com/chatie/wechaty/issues/252)    

* pr a lot
Also, [@hczhcz](https://github.com/hczhcz) and [@ax4](https://github.com/ax4) and I contribute a lot on the document: [PR378](https://github.com/Chatie/wechaty/issues/378), [PR380](https://github.com/Chatie/wechaty/issues/380), [PR640](https://github.com/Chatie/wechaty/pull/640) [PR725](https://github.com/Chatie/wechaty/pull/725)   [PR321](https://github.com/Chatie/wechaty/pull/321)

## doc basic line

For the convenience of developers, our doc guideline as follows:

1. Simple and clear:
2. Generate markdown for better readable version control and GitHub page hosting.

## auto-doc working flow

1. Dev in TypeScript
2. Embedded doc insert in TypeScript
3. Compile TypeScript into JavaScript, using `npm run dist`
4. Run jsdoc / jsdoc2md, using `npm run doc`
5. Get the final doc, in [index.md](https://github.com/Chatie/wechaty/blob/master/docs/index.md), config it to [chatie.io/wechaty](http://chatie.io/wechaty)

## wechaty doc file
We embed doc into the following file:
- [src/message.ts](https://github.com/Chatie/wechaty/blob/master/src/message.ts)
- [src/room.ts](https://github.com/Chatie/wechaty/blob/master/src/room.ts)
- [src/wechaty.ts](https://github.com/Chatie/wechaty/blob/master/src/wechaty.ts)
- [src/friend-request.ts](https://github.com/Chatie/wechaty/blob/master/src/friend-request.ts)
- [src/contact.ts](https://github.com/Chatie/wechaty/blob/master/src/contact.ts)

## wechaty jsdoc2md

1. using the following command can generate document easily.
```
jsdoc2md dist/src/{wechaty,room,contact,friend-request,message}.js dist/src/puppet-web/friend-request.js>> docs/index.md
```

2. Actually, the first step is enough, but I think we need insert all of the API docs into README, so I use a template by the following command:
```
jsdoc2md --template docs/partials/README.hbs dist/src/{wechaty,room,contact,friend-request,message}.js dist/src/puppet-web/friend-request.js>> README.md
```

And add the partials as follows to show the API directory, because the full doc is too big to put in README, and it is not necessary.
```hbs
{{#class name="Wechaty"~}}
{{>member-index-list~}}
{{/class}}

{{#class name="Contact"~}}
{{>member-index-list~}}
{{/class}}


{{#class name="Room"~}}
{{>member-index-list~}}
{{/class}}


{{#class name="Message"~}}
{{>member-index-list~}}
{{/class}}

{{#class name="MediaMessage"~}}
{{>member-index-list~}}
{{/class}}

{{#class name="FriendRequest"~}}
{{>member-index-list~}}
{{/class}}
```

3. After the second step, I found the link jsdoc2md generate is an anchor link(`#`), it means I cannot link it to other pages(http://chatie.io/wechaty), this is very inconvenient for readers.
Inspired by [jsdoc2md-issue-123](https://github.com/jsdoc2md/jsdoc-to-markdown/issues/123),[@KevinAst](https://github.com/KevinAst) using jsdoc-to-markdownb wrote a beatutiful doc: [astx-redux-util](https://astx-redux-util.js.org/1.0.0/)
I found maybe I can created a custom partial too, Then I override the following templates in `docs/partials/overrides`, adding http://chatie.io/wechaty in the link:
* link.hbs
* sig-link-parent.hbs

This is the reason why in `package.json` I add the following script:
```
jsdoc2md --partial docs/partials/overrides/*.hbs --template docs/partials/README.hbs dist/src/{wechaty,room,contact,friend-request,message}.js dist/src/puppet-web/friend-request.js>> README.md
```

`--partial` command override `link.hbs` and `sig-link-parent.hbs`

Then, all done!

# How to add jsdoc when contributing

For other developers, I tried my best to make it easier to add doc, just the following 2 steps:
1. add jsdoc in your code like the following shows.
```
/** This is a description of the foo function. */
function foo() {
}
```
2. run the following command
```
npm run doc
```

Then you can find the generated jsdoc here: [wechaty/docs/index.md](https://github.com/Chatie/wechaty/blob/master/docs/index.md)

Cheers!