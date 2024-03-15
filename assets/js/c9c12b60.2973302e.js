"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3505],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(a),y=o,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),o=a(20053);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,l),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(58168),o=a(96540),r=a(20053),l=a(23104),c=a(56347),s=a(57485),i=a(31682),u=a(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function y(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,c.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,c]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,i]=d({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??p;return y({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!y({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),g(e)}),[i,g,r]),tabValues:r}}var f=a(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==c&&(p(t),s(n))},y=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:y,onClick:m},l,{className:(0,r.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":c===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return o.createElement("div",{className:(0,r.A)("tabs-container",h.tabList)},o.createElement(b,(0,n.A)({},e,t)),o.createElement(w,(0,n.A)({},e,t)))}function T(e){const t=(0,f.A)();return o.createElement(v,(0,n.A)({key:String(t)},e))}},26874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(58168),o=(a(96540),a(15680)),r=a(11470),l=a(19365);const c={title:"Manage contacts"},s=void 0,i={unversionedId:"howto/contact",id:"howto/contact",title:"Manage contacts",description:"Use the guide to help you integrate additional functions to an existing project which is present at Github/Contact-Bot or check that your existing local system will run on Wechaty. If, you wish to learn on how to build the bot on your own, please visit one of our Building the bot section.",source:"@site/docs/howto/contact.mdx",sourceDirName:"howto",slug:"/howto/contact",permalink:"/docs/howto/contact",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/contact.mdx",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1632220361,formattedLastUpdatedAt:"Sep 21, 2021",frontMatter:{title:"Manage contacts"},sidebar:"docs",previous:{title:"Dealing with message",permalink:"/docs/howto/message"},next:{title:"Managing rooms",permalink:"/docs/howto/room"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"If you don&#39;t know where to start from",id:"if-you-dont-know-where-to-start-from",level:3},{value:"All contacts - define how to list all contact",id:"all-contacts---define-how-to-list-all-contact",level:2},{value:"Search in contacts - define how to search within contacts",id:"search-in-contacts---define-how-to-search-within-contacts",level:2},{value:"References",id:"references",level:2}],m={toc:p},y="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(y,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Use the guide to help you integrate additional functions to an existing project which is present at ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/basic/contact-bot.js"},"Github/Contact-Bot")," or check that your existing local system will run on Wechaty. If, you wish to learn on how to build the bot on your own, please visit one of our ",(0,o.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/examples/basic/contact-bot#building-the-bot"},"Building the bot")," section."),(0,o.yg)("p",null,"The steps outlined here mainly focus on working with Javascript, but user are free to switch between any languages. All wechaty contacts are encapsulated as a Contact."),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Your system must have ",(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 16)."),(0,o.yg)("li",{parentName:"ul"},"Your system must have ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,o.yg)("li",{parentName:"ul"},"You need to be familiar with the basics of Wechaty platform. If not, follow our ",(0,o.yg)("a",{parentName:"li",href:"https://wechaty.js.org/docs/tutorials/"},"tutorials")," section."),(0,o.yg)("li",{parentName:"ul"},"You need to have at least a minimal application ready to work, follow one of our ",(0,o.yg)("a",{parentName:"li",href:"https://wechaty.js.org/docs/examples/basic/contact-bot"},"Example/Contact-Bot"),".")),(0,o.yg)("h3",{id:"if-you-dont-know-where-to-start-from"},"If you don't know where to start from"),(0,o.yg)("p",null,"See ",(0,o.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/getting-started/quick-start"},"Running our first ding-dong bot"),"."),(0,o.yg)("p",null,"The functions below require a basic script to help run the bot. Import the codes from ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/basic/contact-bot.js"},"Github/Contact-Bot")," for the basic script, and integrate the codes below."),(0,o.yg)("h2",{id:"all-contacts---define-how-to-list-all-contact"},"All contacts - define how to list all contact"),(0,o.yg)("p",null,"This section help you list down all your contacts from the Instant messaging platform you choose to intergrate this bot by its ",(0,o.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," & ",(0,o.yg)("inlineCode",{parentName:"p"},"type"),"."),(0,o.yg)(r.A,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.yg)(l.A,{value:"ts",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n\n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,o.yg)(l.A,{value:"js",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n    \n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,o.yg)(l.A,{value:"py",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),(0,o.yg)(l.A,{value:"go",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"php",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"scala",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"csharp",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"rust",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.yg)("h2",{id:"search-in-contacts---define-how-to-search-within-contacts"},"Search in contacts - define how to search within contacts"),(0,o.yg)("p",null,"This guide help you find your contact from the list of contacts from the Instant messaging platform you choose to intergrate this bot."),(0,o.yg)(r.A,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.yg)(l.A,{value:"ts",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"async function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,o.yg)(l.A,{value:"js",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,o.yg)(l.A,{value:"py",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),(0,o.yg)(l.A,{value:"go",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"php",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"scala",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"csharp",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.yg)(l.A,{value:"rust",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/tree/main/examples"},"Wechaty Bot Example"),".")))}d.isMDXComponent=!0}}]);