---
title: "Can Typescript really live up to its hype?"
author: suntong
categories: article
tags:
  - typescript
image: /assets/2018/typescript-logo.webp
---

![TypeScript](/assets/2018/typescript-logo.webp)

Big companies or organizations push forward adopting of Typescript for a reason, mostly to prevent some dummies to shoot their own feet really easily -- The (almost only) advantage of Typescript is to point out, at the compile time, that the following usage is wrong:

```javascript
var x = 'A';
x = x + 5
```

But is it really? If you are a seasoned programmer and you are coding for yourself only, are you willing to get your hands tied up by MS Typescript, and suffer all its drawbacks in the mean time?

## About Pure ES6 instead of Typescript

When I code customization code for [wechaty](https://github.com/wechaty/wechaty/), I write everything in pure ES6 instead of Typescript, and there are strong reasons for that.

### Typescript is not necessary

- Looking at the [ES6 support in Node.js](http://node.green/), I can see really really few ES6 features are unsupported now. I.e., only very few _extreme_ end-cases are left.
- Furthermore, I don't know how well the transpiling is, e.g., for the advanced ES6 features like `map`, `filter` and `reduce`, I don't know how efficient the transpiled code is.
- Starting with version 8.5.0, Node.js even supports ES modules natively, so we can do `import {add} from './lib.mjs';` directly in ES6 now.
- I.e., the ES6 is ready for prime time use, writing in TypeScript then have it transpiled into ES6 code seems like a redundant step now. (I'm not saying that TypeScript is not helpful, it is still good in big projects that you have some dummies really easily to shoot their own feet)
- Moreover, most of wechaty examples are in fact plain ES6, not TypeScript (because of missing type declaration for every variable, which is the # 1 feature that TypeScript boasts with), so making such extra transpiling step seems even more unnecessary to me.

### ES6 is the future, not Typescript

Here is some good reading that I want to share with you,

**When are you better off without Typescript?** --
[_When you can’t afford an extra transpilation tax_](https://medium.freecodecamp.org/when-should-i-use-typescript-311cb5fe801b)

> There are no plans to support TypeScript natively in the browsers. Chrome did some experiment, but later cancelled support. I suspect this has something to do with unnecessary runtime overhead.
If someone wants training wheels, they can install them. But bikes shouldn’t come with permanent training wheels. This means that you will always have to transpile your TypeScript code before running them.
> For standard ES6, it’s a whole different story. When ES6 is supported by most browsers, the current ES6 to ES5 transpilation will become unnecessary.
> ES6 is the biggest change to the JavaScript language, and I believe most programmers will just settle with it. But those brave few who want to try the next version of JavaScript’s experimental features, or the features not yet implemented on all browsers — they will need to transpile anyway.

### Typescript has an evil source and evil goal

Typescript is from Microsoft, which is the source of all evil.

From above article,

> The old Microsoft used to take standard tools — Java for example — and add proprietary non-standard features to them — in this case resulting in J++. **Then they would try to force developers to choose between the two**.
> TypeScript is exactly the same approach — this time for JavaScript. By the way, **this isn’t Microsoft’s first fork of JavaScript. In 1996, they forked JavaScript to create JScript**.

JavaScript has no types, this has it advantages and disadvantages. However, IMHO, its disadvantages has been over-proportionally emphasized and exaggerated, and its advantages has been down-played greatly. If using Typescript, then such advantages will be completely lost, and you'll get completely restrained, that's what MS does best. Here is a little example, out of the very limited hours I've been using JavaScript -- to write a wechaty simulation driving code, it'd be impossible to [write such simulation in such simple way](https://github.com/wechaty/wechaty/issues/1095#issuecomment-366595388), had I been writing my code in TypeScript.

### Typescript is using the out-dated technology

But someone may say, _"if Typescript is not allowing you do that, then you must be doing something wrong"_. Well, truth is,

The modern programming paradigm has advanced way over the OO era, and "**interface**" has become the new way of thinking. The loosely coupled interface has much more benefit than the tightly coupled [OO polymorphism](https://en.wikipedia.org/wiki/Object-oriented_programming#Polymorphism), which means that MS using type checking to tie peoples hands up is so 19-century in this 21-century world, and will be left in the dust by most knowledgeable programmers. Interface compatibility is much more tolerant than [OO polymorphism](https://en.wikipedia.org/wiki/Object-oriented_programming#Polymorphism), that if both the two types satisfy the minimum interface requirement of the accepting parameter, than either of the two **unrelated** types can be used as the argument. And JavaScript, not Typescript, allows that. This is the reason why I can [write such simulation in such simple way](https://github.com/wechaty/wechaty/issues/1095#issuecomment-366595388) using JavaScript, but not Typescript.

So, thank but no thanks to MS' JScript, or TypeScript, without the type restriction, the rest of the TypeScript hypes are actually come from ES6, which is what I'll stick to instead.

### Typescript will be abandoned

Who still remember MS' JScript? Typescript will be left in the dust by most programmers, and it will be abandoned by Microsoft, eventually. Mark my words for it.

The philosophy that I resist anything that MS proposes has a long history of me, as a programmer, who was forced onto the MS band wagon for their shinny new toys, then get thrown under the bus when MS abandon them. Not many programmers start the love-hate affair with MS since DOS2.0, through DOS3.0 all they way to DOS5.0. Not many programmers have ever heard of OLE, DDE, DAO, ADO, ADO2, and the stories behind their rise and fall, yet I was the one who bite the bullet and gone through them all. Even today, I'm still living through the consequences of MS abandoning silverlight, for all these past several years.

### In summary

I know TypeScript does has its place, and the first part of the above article did list many of them. But still I'll never buy it. Quoting a sentence I like from the above article,

> TypeScript haters are gonna hate, either because of fear of change or because they know somebody who knows somebody who is afraid of it. Life goes on and TypeScript introduces new features to its community anyway.

All in all, I'll stick to ES6 and never use TypeScript. It might be my personal choice, but I'm glad I'm not along -- check this out

[**Don't Transpile JavaScript for Node.js**](http://vancelucas.com/blog/dont-transpile-javascript-for-node-js/)

### Postlude

PS, if I do have to write something that has to be transpiled first before running, it is got to be the [Dart programming language](https://en.wikipedia.org/wiki/Dart_(programming_language)), because of the new Google's mobile UI framework, [Flutter](https://flutter.io/?utm_source=google&utm_medium=blog&utm_campaign=beta_announcement), introduce on February 27, 2018, at Mobile World Congress 2018.

Don't get me started on this, but check out the following yourself:

**Google announced the first beta of Flutter**  
<https://flutter.io/?utm_source=google&utm_medium=blog&utm_campaign=beta_announcement>

**Flutter Will Take Off in 2018**  
<https://codeburst.io/why-flutter-will-take-off-in-2018-bbd75f8741b0>

**What’s Revolutionary about Flutter**  
<https://hackernoon.com/whats-revolutionary-about-flutter-946915b09514>

**Why we chose Flutter and how it’s changed our company for the better**  
<https://medium.com/@matthew.smith_66715/why-we-chose-flutter-and-how-its-changed-our-company-for-the-better-271ddd25da60>

**Google跨平台UI框架 Flutter beta 重磅发布**  
<https://juejin.im/post/5a964adf5188257a690f9a85>

**Why I moved from JavaScript to Dart**  
<https://hackernoon.com/why-i-moved-from-javascript-to-dart-9ff55a108ff4#.ezyej7cdr>

**Why I moved from Java to Dart**  
<https://hackernoon.com/why-i-moved-from-java-to-dart-8f3802b1d652>
