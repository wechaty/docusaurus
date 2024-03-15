"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8604],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=s,y=m["".concat(i,".").concat(p)]||m[p]||g[p]||o;return a?n.createElement(y,r(r({ref:t},c),{},{components:a})):n.createElement(y,r({ref:t},c))}));function y(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:s,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(96540),s=a(20053);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,r),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(58168),s=a(96540),o=a(20053),r=a(23104),l=a(56347),i=a(57485),u=a(31682),c=a(89466);function m(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function g(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=g(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=y({queryString:a,groupId:n}),[m,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,s.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=i??m;return p({value:e,tabValues:o})?e:null})();(0,s.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var f=a(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.a_)(),g=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(m(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:g},r,{className:(0,o.A)("tabs__item",h.tabItem,r?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=d(e);return s.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},s.createElement(b,(0,n.A)({},e,t)),s.createElement(v,(0,n.A)({},e,t)))}function T(e){const t=(0,f.A)();return s.createElement(w,(0,n.A)({key:String(t)},e))}},64305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(58168),s=(a(96540),a(15680)),o=a(11470),r=a(19365);const l={title:"Dealing with message"},i=void 0,u={unversionedId:"howto/message",id:"howto/message",title:"Dealing with message",description:"Messages",source:"@site/docs/howto/message.md",sourceDirName:"howto",slug:"/howto/message",permalink:"/zh/docs/howto/message",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/message.md",tags:[],version:"current",lastUpdatedBy:"Vasvi Sood",lastUpdatedAt:1648642195,formattedLastUpdatedAt:"2022\u5e743\u670830\u65e5",frontMatter:{title:"Dealing with message"},sidebar:"docs",previous:{title:"Listen to events",permalink:"/zh/docs/howto/event"},next:{title:"Manage contacts",permalink:"/zh/docs/howto/contact"}},c={},m=[{value:"Messages",id:"messages",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"If you don&#39;t know where to start from",id:"if-you-dont-know-where-to-start-from",level:3},{value:"Mention",id:"mention",level:2},{value:"Self message",id:"self-message",level:2}],g={toc:m},p="wrapper";function y(e){let{components:t,...l}=e;return(0,s.yg)(p,(0,n.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"messages"},"Messages"),(0,s.yg)("p",null,"Automation of messages can be done easily with wechaty onMessage function. This guide will give you a step by step overview of how to respond to self messages or messages in a room."),(0,s.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Your system must have ",(0,s.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 16)."),(0,s.yg)("li",{parentName:"ul"},"Your system must have ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,s.yg)("li",{parentName:"ul"},"You need to be familiar with the basics of Wechaty platform. If not, follow our ",(0,s.yg)("a",{parentName:"li",href:"https://wechaty.js.org/docs/tutorials/"},"tutorials")," section."),(0,s.yg)("li",{parentName:"ul"},"You need to have at least a minimal application ready to work, follow one of our ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/wechaty/getting-started/blob/main/examples/ding-dong-bot.js"},"Example/Ding-dong-bot"),".")),(0,s.yg)("h3",{id:"if-you-dont-know-where-to-start-from"},"If you don't know where to start from"),(0,s.yg)("p",null,"See ",(0,s.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/getting-started/quick-start/#run-ding-dong-bot"},"Running our first ding-dong bot"),"."),(0,s.yg)("p",null,"There are various message type such as ",(0,s.yg)("inlineCode",{parentName:"p"},"MessageType.Text"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"MessageType.Image"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"MessageType.Video"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"MessageType.Url"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"MessageType.Emotions"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"MessageType.Attachment"),". Some of the function are mentioned below and require a basic script that can help run the bot. The basic script starts by importing the code from ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/wechaty/getting-started/blob/main/examples/ding-dong-bot.js"},"Github/Ding-dong-bot"),".Integrate the below code, for this action to work."),(0,s.yg)("h2",{id:"mention"},"Mention"),(0,s.yg)("p",null,"Use this Mention feature to send a (@ mention) to others in the room.This function works if the message received by the onMessage function belongs to a room."),(0,s.yg)(o.A,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,s.yg)(r.A,{value:"ts",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mention me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,s.yg)(r.A,{value:"js",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"import { Message }  from 'wechaty'\n\nasync function onMessage(message) {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mentioning me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,s.yg)(r.A,{value:"py",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),(0,s.yg)(r.A,{value:"go",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"php",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"scala",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"csharp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"rust",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,s.yg)("p",null,"The expected output of the JavaScript code is:\n",(0,s.yg)("img",{alt:"Message",src:a(65457).A,width:"1101",height:"179"})),(0,s.yg)("h2",{id:"self-message"},"Self message"),(0,s.yg)("p",null,"Use this Self message feature to reply to the bot.This function works if the message received by the onMessage function has been sent by the bot to itself."),(0,s.yg)(o.A,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,s.yg)(r.A,{value:"ts",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (message.self()) {\n    const talker = message.talker()\n    const bot = message.wechaty.userSelf()\n    assert(talker === bot, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,s.yg)(r.A,{value:"js",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"import { Message }  from 'wechaty'\n\nasync function onMessage (msg) {\n  log.info('StarterBot', msg.toString())\n  const contact = msg.talker() \n  console.log(contact);\n  console.log(\"message self\",msg.self());\n  if (msg.self()) {\n    const b = msg.wechaty.userSelf()\n    assert(talker === b, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n\nbot.on('message', onMessage)\n"))),(0,s.yg)(r.A,{value:"py",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),(0,s.yg)(r.A,{value:"go",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"java",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"php",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"scala",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"csharp",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,s.yg)(r.A,{value:"rust",mdxType:"TabItem"},(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,s.yg)("p",null,"The expected output of the JavaScript code is:\n",(0,s.yg)("img",{alt:"Message",src:a(85354).A,width:"1454",height:"548"})))}y.isMDXComponent=!0},85354:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/message-7f2bd59c6a18189fbaf5315d827b0974.webp"},65457:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/message1-fce261d8729fe6b15b637e6ecbaadca9.webp"}}]);