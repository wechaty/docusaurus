"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9077],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>d});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=g(o),h=r,d=p["".concat(s,".").concat(h)]||p[h]||c[h]||l;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var g=2;g<l;g++)a[g]=o[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},25421:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=o(58168),r=(o(96540),o(15680));const l={title:"Running on Google Cloud Shell"},a=void 0,i={unversionedId:"quick-start/running-on-google-cloud-shell",id:"quick-start/running-on-google-cloud-shell",title:"Running on Google Cloud Shell",description:"To get you started with Wechaty, this tutorial will guide you how to run the Ding Dong bot from the Wechaty Getting Started GitHub repository directly on the browser using Google Cloud Shell environment. It provides a step-by-step tutorial for running the bot along with an IDE.",source:"@site/docs/quick-start/running-on-google-cloud-shell.md",sourceDirName:"quick-start",slug:"/quick-start/running-on-google-cloud-shell",permalink:"/zh/docs/quick-start/running-on-google-cloud-shell",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/quick-start/running-on-google-cloud-shell.md",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1626464027,formattedLastUpdatedAt:"2021\u5e747\u670816\u65e5",frontMatter:{title:"Running on Google Cloud Shell"},sidebar:"docs",previous:{title:"Overview",permalink:"/zh/docs/getting-started/"},next:{title:"Running on Gitpod",permalink:"/zh/docs/quick-start/running-on-gitpod"}},s={},g=[],u={toc:g},p="wrapper";function c(e){let{components:t,...l}=e;return(0,r.yg)(p,(0,n.A)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"To get you started with Wechaty, this tutorial will guide you how to run the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts"},"Ding Dong bot")," from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started")," GitHub repository directly on the browser using ",(0,r.yg)("strong",{parentName:"p"},"Google Cloud Shell")," environment. It provides a step-by-step tutorial for running the bot along with an IDE."),(0,r.yg)("p",null,"You can follow the steps below to get started smoothly."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Open")," the Google Cloud Shell environment by clicking the button:"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/%F0%9F%92%BB%20Google%20Cloud%20Shell-%3C%2F%3E-blue",alt:"Google Cloud Shell badge"})))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Sign In")," with a Google account. If already signed in then you will directly land on step 3.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Trust")," the git repository and click ",(0,r.yg)("strong",{parentName:"p"},"Confirm"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Google Cloud Shell: Trust repo",src:o(73320).A,width:"695",height:"331"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Wait for the cloud shell provisioning to complete."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Google Cloud Shell: Wait for provisioning",src:o(61796).A,width:"391",height:"460"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"After that you will see the ",(0,r.yg)("strong",{parentName:"p"},"Cloud Shell Editor"),", on the right panel is your step-by-step ",(0,r.yg)("strong",{parentName:"p"},"guide"),", and on the bottom you have the ",(0,r.yg)("strong",{parentName:"p"},"terminal window"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Google Cloud Shell: Editor",src:o(46259).A,width:"1920",height:"1000"})))),(0,r.yg)("p",null,"Now, you can follow the tutorial inside the cloud shell."),(0,r.yg)("p",null,"First it tells you about what Wechaty is, and then it guides you to run the Wechaty Ding Dong Bot and connect it with either ",(0,r.yg)("strong",{parentName:"p"},"WeChat")," or ",(0,r.yg)("strong",{parentName:"p"},"WhatsApp"),". It also has a section where you have to implement a new functionality in the bot and thereby giving you a better understanding how Wechaty bots work under the hood."),(0,r.yg)("p",null,"After completing this tutorial, you can continue and learn how to ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/getting-started/running-locally"},"run Wechaty locally")," on your system."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Learn more about Google Cloud Shell Tutorials for Wechaty from this ",(0,r.yg)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/20/google-cloud-shell-tutorials/"},"blog post"),".")))}c.isMDXComponent=!0},46259:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/cloud_shell_editor-9a19f98387d46d1c8bf32248b37f9c44.webp"},73320:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/trust_the_repo-2b1f230d80a7b05778af966bbb131261.webp"},61796:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/wait_for_provisioning_to_complete-6a53e55fdf11ff5a375cc50e03839dae.webp"}}]);