"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6304],{15680:(e,t,a)=>{a.d(t,{xA:()=>A,yg:()=>m});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},A=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,m=u["".concat(s,".").concat(c)]||u[c]||g[c]||i;return a?r.createElement(m,n(n({ref:t},A),{},{components:a})):r.createElement(m,n({ref:t},A))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(58168),o=(a(96540),a(15680));const i={title:"GSoC 2022"},n=void 0,l={unversionedId:"gsoc/2022",id:"gsoc/2022",title:"GSoC 2022",description:"Wechaty Summer of Code",source:"@site/docs/gsoc/2022.md",sourceDirName:"gsoc",slug:"/gsoc/2022",permalink:"/zh/docs/gsoc/2022",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/gsoc/2022.md",tags:[],version:"current",lastUpdatedBy:"Xiaoquan Kong",lastUpdatedAt:1645895964,formattedLastUpdatedAt:"2022\u5e742\u670826\u65e5",frontMatter:{title:"GSoC 2022"}},s={},p=[{value:"The Ideas",id:"the-ideas",level:2},{value:"Project 1: Create a Web Component for a Chat UI for Wechaty",id:"project-1-create-a-web-component-for-a-chat-ui-for-wechaty",level:3},{value:"Project 2: Wechaty Rust",id:"project-2-wechaty-rust",level:3},{value:"Project 3: Implement Wechaty Rasa Plugin",id:"project-3-implement-wechaty-rasa-plugin",level:3},{value:"Project 4: Implement &quot;Twitter&quot; Puppet",id:"project-4-implement-twitter-puppet",level:3},{value:"Project 5: Conversational robot that provides COVID-19 information services for elderly groups",id:"project-5-conversational-robot-that-provides-covid-19-information-services-for-elderly-groups",level:3}],A={toc:p},u="wrapper";function g(e){let{components:t,...i}=e;return(0,o.yg)(u,(0,r.A)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Wechaty Summer of Code",src:a(10403).A,width:"1280",height:"250"})),(0,o.yg)("p",null,"This page aggregates project ideas for Google Summer of Code 2022. See more information about this project and applications on the ",(0,o.yg)("a",{parentName:"p",href:"../"},"Wechaty Google Summer of Code page"),"."),(0,o.yg)("h2",{id:"the-ideas"},"The Ideas"),(0,o.yg)("h3",{id:"project-1-create-a-web-component-for-a-chat-ui-for-wechaty"},"Project 1: Create a Web Component for a Chat UI for Wechaty"),(0,o.yg)("p",null,"UI is very user-friendly to the user, so UI developer kit is import to the developers. We want to create a Web Component in Angular for a Chat UI for Wechaty."),(0,o.yg)("p",null,"We will not try to reinvent the wheel. There are already exists some great resource for us to use:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://fiora.suisuijiang.com/"},"Fiora")," is an interesting chat application power by socket.io, koa, MongoDB and React. (See: ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/yinxin630/fiora/issues/185"},"https://github.com/yinxin630/fiora/issues/185"),")"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/jpush/aurora-imui"},"Aurora IMUI")," is a general IM UI components library, which does not depend on any specific IM SDK."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://themeforest.net/item/chatvia-angular-chat-app-template/28316331"},"Chatvia")," - Angular Chat App Template")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Expected outcomes: a Web UI Component that is good enough in production"),(0,o.yg)("li",{parentName:"ul"},"Potential Mentor(s): lijiarui, Huan"),(0,o.yg)("li",{parentName:"ul"},"Category: Core development"),(0,o.yg)("li",{parentName:"ul"},"Skills Required: TypeScript (programming language), Angular"),(0,o.yg)("li",{parentName:"ul"},"Difficulty Level: Medium"),(0,o.yg)("li",{parentName:"ul"},"Hours: 175")),(0,o.yg)("h3",{id:"project-2-wechaty-rust"},"Project 2: Wechaty Rust"),(0,o.yg)("p",null,"Rust is a new programming language with increasing popularity for its performance, memory safety and extensibility with existing systems."),(0,o.yg)("p",null,"Wechaty will benefit from a Rust Core module that interfaces with its original TypeScript code base for performance boost, and a potential to ship to browser and Native apps by building to binary and webAssembly."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Expected outcomes: a Wechaty Minimum Viable Product (MVP) rewritten in Rust"),(0,o.yg)("li",{parentName:"ul"},"Potential Mentor(s): Simon LIANG, Zihua WU"),(0,o.yg)("li",{parentName:"ul"},"Category: Core development"),(0,o.yg)("li",{parentName:"ul"},"Skills Required: Rust (programming language)"),(0,o.yg)("li",{parentName:"ul"},"Difficulty Level: Medium"),(0,o.yg)("li",{parentName:"ul"},"Hours: 175")),(0,o.yg)("h3",{id:"project-3-implement-wechaty-rasa-plugin"},"Project 3: Implement Wechaty Rasa Plugin"),(0,o.yg)("p",null,"Rasa is a popular task-oriented dialogue system which can be a pipeline in IM platform. What's more, wechaty is an unifiy conversation AI SDK for chatbot. So Wechaty + Rasa will be the perfect project that developer can easily deploy their chatbot on multi-platforms."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Running Rasa Server. When you run the rasa server, it will expose the message service with http protocol."),(0,o.yg)("li",{parentName:"ol"},"Communicating with Rasa Server. This process is a simple work which will send the request to the server and receive the message sending the wechaty end account.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Expected outcomes: A production-ready server that can communicated with Wechaty service and Rasa servers"),(0,o.yg)("li",{parentName:"ul"},"Potential Mentor(s): @wj-Mcat, Xiaoquan Kong"),(0,o.yg)("li",{parentName:"ul"},"Category: Core development"),(0,o.yg)("li",{parentName:"ul"},"Skills Required: Python (programming language), Natural Language Processing, Rasa"),(0,o.yg)("li",{parentName:"ul"},"Difficulty Level: Medium"),(0,o.yg)("li",{parentName:"ul"},"Hours: 175")),(0,o.yg)("h3",{id:"project-4-implement-twitter-puppet"},'Project 4: Implement "Twitter" Puppet'),(0,o.yg)("p",null,"We want Wechaty to be the universal instant messaging SDK on all IM platforms for chatbot makers to build their great conversational user interface, so while these are our ideas of what we think would make good projects for the summer, we're eager to hear your ideas and proposals as well."),(0,o.yg)("p",null,"Implement Twitter Puppet. The Puppet abstraction allows Wechaty to provide a consisting API on all IM platforms for build a chatbot. We are supporting WeChat, WeCom, Whatsapp already, and we want to support Twitter so that our developers can run their chatbots on Twitter to serve users from Twitter."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Expected outcomes: A production-ready puppet that can support Twitter communicate with Wechaty"),(0,o.yg)("li",{parentName:"ul"},"Potential Mentor(s): Huan"),(0,o.yg)("li",{parentName:"ul"},"Category: Core development"),(0,o.yg)("li",{parentName:"ul"},"Skills Required: TypeScript (programming language), Twitter API"),(0,o.yg)("li",{parentName:"ul"},"Difficulty Level: Medium"),(0,o.yg)("li",{parentName:"ul"},"Hours: 175")),(0,o.yg)("h3",{id:"project-5-conversational-robot-that-provides-covid-19-information-services-for-elderly-groups"},"Project 5: Conversational robot that provides COVID-19 information services for elderly groups"),(0,o.yg)("p",null,"The elderly population is more susceptible to COVID-19 virus infection and has a very high mortality rate. At the same time, the elderly population has barriers in accessing information: devices such as smartphones are not friendly to the elderly population. Many parts of the world have a high level of population aging and therefore have a large number of elderly populations. Society should pay more attention to the health of these elderly people and act quickly. Let's make a voice-based intelligent assistant to help the elderly population get information to protect themselves from COVID-19 virus infection."),(0,o.yg)("p",null,"We will use ",(0,o.yg)("a",{parentName:"p",href:"https://rasa.com"},"Rasa")," as the backend engine to provide conversational AI experience. And, we will use Wechaty to provide the frontend. Wechaty has the ablility to connect with lots of IM in different countries, so we can serve as many elders as possible."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Expected outcomes: A chatbot backend server and multiple IM clients. It should provide Information on covid-19 travel ban, virus protection, self-diagnosis, and medical consultation. All this need to be done by talk with the user by text or audio."),(0,o.yg)("li",{parentName:"ul"},"Potential Mentor(s): Xiaoquan Kong"),(0,o.yg)("li",{parentName:"ul"},"Category: Public welfare"),(0,o.yg)("li",{parentName:"ul"},"Skills Required: Python (programming language), Rasa framework"),(0,o.yg)("li",{parentName:"ul"},"Difficulty Level: Medium"),(0,o.yg)("li",{parentName:"ul"},"Hours: 175")))}g.isMDXComponent=!0},10403:(e,t,a)=>{a.d(t,{A:()=>r});const r="data:image/png;base64,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"}}]);