"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8280],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var o=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},y=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,u=p["".concat(c,".").concat(h)]||p[h]||g[h]||n;return a?o.createElement(u,l(l({ref:t},y),{},{components:a})):o.createElement(u,l({ref:t},y))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=a(58168),r=(a(96540),a(15680));const n={slug:"/polyglot/go/",title:"Go Wechaty",sidebar_label:"Go"},l=void 0,i={unversionedId:"polyglot/go/overview",id:"polyglot/go/overview",title:"Go Wechaty",description:"Go Wechaty",source:"@site/docs/polyglot/go/overview.md",sourceDirName:"polyglot/go",slug:"/polyglot/go/",permalink:"/docs/polyglot/go/",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/go/overview.md",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1629862938,formattedLastUpdatedAt:"Aug 25, 2021",frontMatter:{slug:"/polyglot/go/",title:"Go Wechaty",sidebar_label:"Go"},sidebar:"docs",previous:{title:"Python",permalink:"/docs/polyglot/python/"},next:{title:"Java",permalink:"/docs/polyglot/java/"}},c={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Blogs",id:"blogs",level:2},{value:"History",id:"history",level:2},{value:"Maintainers",id:"maintainers",level:2}],y={toc:s},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,o.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Go-7de",alt:"Go Wechaty"}))),(0,r.yg)("p",null,"Go-Wechaty is the Go- Programming language client.Wechaty is already is implemented in TypeScript so can be easily translated to Go language as Wechaty has only three thousand (3,000) lines of the TypeScript code, they are well designed and de-coupled by the wechaty-puppet abstraction.Wechaty already has an ecosystem in TypeScript, so you will not have to implement everything in Go, especially, in the Feb 2020, we have finished the grpc service abstracting module with the wechaty-puppet-service implementation.For more information on the Go-Wechaty you can visit",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty"},"Github Repo"),"\nMore details on  Go Wechaty And WeChat Web Protocol can be ",(0,r.yg)("a",{parentName:"p",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"check here"),".\nThe ",(0,r.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/polyglot/diy/"},"Polyglot Architecture Diagram")," illustrates on how the Wechaty-Go can be implemented on the already existing TypeScript Wechaty ecosystem."),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"You can run the below commands for starting the Go-Wechaty.Also for more information you can check the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty-getting-started"},"Go-Wechaty getting started"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/go-wechaty-getting-started.git\ncd go-wechaty-getting-started\nmake install\n# set token\nexport WECHATY_PUPPET_SERVICE_TOKEN=your_token_at_here\n# Run the bot\nmake bot\n")),(0,r.yg)("h2",{id:"blogs"},"Blogs"),(0,r.yg)("p",null,"Here in this section are some of the blogs related to Go-Wechaty."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"Go-Wechaty and web protocol to develop robots, @dchaofei, Apr 16, 2021"))),(0,r.yg)("h2",{id:"history"},"History"),(0,r.yg)("p",null,"Check out the links below for Beta releases of Go-Wechaty also for more information on the ."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2020/06/29/go-wechaty-beta-released/"},"Go Wechaty Beta Released!, dchaofei, Jun 29, 2020"))),(0,r.yg)("h2",{id:"maintainers"},"Maintainers"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/dingdayu"},"@dingdayu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/dchaofei"},"@dchaofei"))))}g.isMDXComponent=!0}}]);