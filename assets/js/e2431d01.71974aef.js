"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4743],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(a),y=o,g=h["".concat(p,".").concat(y)]||h[y]||c[y]||n;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},74207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(58168),o=(a(96540),a(15680));const n={title:"Usage with Heroku"},i=void 0,l={unversionedId:"tutorials/usage-with-heroku",id:"tutorials/usage-with-heroku",title:"Usage with Heroku",description:"HEROKU WECHATY GETTING STARTED",source:"@site/docs/tutorials/usage-with-heroku.md",sourceDirName:"tutorials",slug:"/tutorials/usage-with-heroku",permalink:"/docs/tutorials/usage-with-heroku",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/tutorials/usage-with-heroku.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1622643718,formattedLastUpdatedAt:"Jun 2, 2021",frontMatter:{title:"Usage with Heroku"},sidebar:"docs",previous:{title:"Usage with Docker",permalink:"/docs/tutorials/docker"},next:{title:"Overview",permalink:"/docs/using-plugin-with-wechaty/overview"}},p={},u=[{value:"HEROKU WECHATY GETTING STARTED",id:"heroku-wechaty-getting-started",level:2},{value:"About <code>Deploy to Heroku</code> Button",id:"about-deploy-to-heroku-button",level:2},{value:"FEATURES",id:"features",level:2},{value:"LIMITATIONS",id:"limitations",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"HISTORY",id:"history",level:2},{value:"v0.4 (Feb 3, 2020)",id:"v04-feb-3-2020",level:3},{value:"v0.0.1 (Aug 9, 2018)",id:"v001-aug-9-2018",level:3},{value:"AUTHOR",id:"author",level:2},{value:"COPYRIGHT &amp; LICENSE",id:"copyright--license",level:2}],s={toc:u},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"heroku-wechaty-getting-started"},"HEROKU WECHATY GETTING STARTED"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",(0,o.yg)("a",{parentName:"p",href:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started"},(0,o.yg)("img",{parentName:"a",src:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started.svg?branch=master",alt:"Build Status"})),"\n",(0,o.yg)("a",{parentName:"p",href:"https://greenkeeper.io/"},(0,o.yg)("img",{parentName:"a",src:"https://badges.greenkeeper.io/wechaty/heroku-wechaty-getting-started.svg",alt:"Greenkeeper badge"}))),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://heroku.com/deploy"},(0,o.yg)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy"}))),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/wechaty/heroku-wechaty-getting-started"},"Deploy to Heroku for Wechaty Starter Project Repository")),(0,o.yg)("h2",{id:"about-deploy-to-heroku-button"},"About ",(0,o.yg)("inlineCode",{parentName:"h2"},"Deploy to Heroku")," Button"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/heroku-button"},"Creating a 'Deploy to Heroku' Button")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"The \u2018Deploy to Heroku\u2019 button enables users to deploy apps to Heroku without leaving the web browser, and with little or no configuration. The button is ideal for customers, open-source project maintainers or add-on providers who wish to provide their customers with a quick and easy way to deploy and configure a Heroku app.")),(0,o.yg)("h2",{id:"features"},"FEATURES"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Deploy to Heroku without leaving the Web Browser. See ",(0,o.yg)("inlineCode",{parentName:"li"},"Deploy to Heroku")," Button above"),(0,o.yg)("li",{parentName:"ol"},"Restore Wechat Bot Session across Restart by enable MemoryCard with AWS S3. See ",(0,o.yg)("inlineCode",{parentName:"li"},"src/get-memory.ts")),(0,o.yg)("li",{parentName:"ol"},"Hot Module Reload Enabled for convenience when developing. See ",(0,o.yg)("inlineCode",{parentName:"li"},"src/handlers/on-*.ts")),(0,o.yg)("li",{parentName:"ol"},"Send Online/Offline Notification Message to BotSelf when the Program Start/Stop. See ",(0,o.yg)("inlineCode",{parentName:"li"},"src/finis.ts")),(0,o.yg)("li",{parentName:"ol"},"Simpel Web Server that can be used to Scan QR Code, or any other operations integrated with Wechaty. See ",(0,o.yg)("inlineCode",{parentName:"li"},"src/start-web.ts"))),(0,o.yg)("h2",{id:"limitations"},"LIMITATIONS"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping"},"If an app has a web dyno, and that web dyno receives no traffic in a 30 minute period, the web dyno will sleep")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/dynos#restarting"},"Dynos are restarted (cycled) at least once per day to help maintain the health of applications running on Heroku"))),(0,o.yg)("h2",{id:"see-also"},"SEE ALSO"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/heroku-button"},"Creating a 'Deploy to Heroku' Button")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://blog.heroku.com/heroku-button"},"Introducing Heroku Button")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/heroku/button-sample"},"https://github.com/heroku/button-sample")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.expeditedssl.com/heroku-button-maker"},"Heroku App.Json Manifest and Button Maker")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://help.heroku.com/ROG3H81R/why-does-sigterm-handling-not-work-correctly-in-nodejs-with-npm"},"Why does SIGTERM handling not work correctly in NodeJS with NPM?"))),(0,o.yg)("h2",{id:"use-cases"},"Use Cases"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/wechaty/friday"},"Friday BOT")," - ",(0,o.yg)("a",{parentName:"li",href:"https://bot-friday.herokuapp.com/"},"https://bot-friday.herokuapp.com/")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/kaiyuanshe/OSS-bot"},"OSSBot")," - ",(0,o.yg)("a",{parentName:"li",href:"https://oss-bot-dev.herokuapp.com/"},"https://oss-bot-dev.herokuapp.com/")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/huan/mike-bo"},"Mike BO")," - ",(0,o.yg)("a",{parentName:"li",href:"http://mike-bo.herokuapp.com/"},"http://mike-bo.herokuapp.com/")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/juzibot/qijibot"},"QiJi BOT")," - ",(0,o.yg)("a",{parentName:"li",href:"https://qiji-bot.herokuapp.com/"},"https://qiji-bot.herokuapp.com/")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/juzibot/botops"},"Bot Ops")," - ",(0,o.yg)("a",{parentName:"li",href:"https://bot-ops.herokuapp.com/"},"https://bot-ops.herokuapp.com/")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/juzibot/rui-bot"},"Rui Assistant BOT")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/juzibot/juzi-bot"},"Juzi.BOT"))),(0,o.yg)("h2",{id:"history"},"HISTORY"),(0,o.yg)("h3",{id:"v04-feb-3-2020"},"v0.4 (Feb 3, 2020)"),(0,o.yg)("p",null,"Wechaty 0.56"),(0,o.yg)("h3",{id:"v001-aug-9-2018"},"v0.0.1 (Aug 9, 2018)"),(0,o.yg)("p",null,"Init version for deploy to HeroKu"),(0,o.yg)("h2",{id:"author"},"AUTHOR"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"http://linkedin.com/in/zixia"},"Huan LI (\u674e\u5353\u6853)")," \\",(0,o.yg)("a",{parentName:"p",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://stackexchange.com/users/265499"},(0,o.yg)("img",{parentName:"a",src:"https://stackexchange.com/users/flair/265499.png",alt:"Profile of Huan LI (\u674e\u5353\u6853) on StackOverflow"}))),(0,o.yg)("h2",{id:"copyright--license"},"COPYRIGHT & LICENSE"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Code & Docs \xa9 2018 Huan LI \\",(0,o.yg)("a",{parentName:"li",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,o.yg)("li",{parentName:"ul"},"Code released under the Apache-2.0 License"),(0,o.yg)("li",{parentName:"ul"},"Docs released under Creative Commons")))}c.isMDXComponent=!0}}]);