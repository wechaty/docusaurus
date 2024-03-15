"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3756],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(a),u=r,d=g["".concat(c,".").concat(u)]||g[u]||m[u]||l;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={title:"ContactSelf"},o=void 0,i={unversionedId:"api/contact-self",id:"api/contact-self",title:"ContactSelf",description:"Bot itself will be encapsulated as a ContactSelf. This class is extends Contact.",source:"@site/docs/api/contact-self.md",sourceDirName:"api",slug:"/api/contact-self",permalink:"/zh/docs/api/contact-self",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/api/contact-self.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1597211840,formattedLastUpdatedAt:"2020\u5e748\u670812\u65e5",frontMatter:{title:"ContactSelf"}},c={},s=[{value:"ContactSelf",id:"contactself",level:2},{value:"contactSelf.avatar([file]) \u21d2 <code>Promise &lt;void | FileBox&gt;</code>",id:"contactselfavatarfile--promise-void--filebox",level:3},{value:"contactSelf.qrcode() \u21d2 <code>Promise &lt;string&gt;</code>",id:"contactselfqrcode--promise-string",level:3},{value:"Example",id:"example",level:4},{value:"contactSelf.signature(signature) \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactselfsignaturesignature--promise-void",level:3},{value:"Example",id:"example-1",level:4},{value:"contactSelf.name([name]) \u21d2 <code>Promise&lt;void&gt; | string</code>",id:"contactselfnamename--promisevoid--string",level:3},{value:"Example",id:"example-2",level:4}],p={toc:s},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Bot itself will be encapsulated as a ContactSelf. This class is extends Contact."),(0,r.yg)("h2",{id:"contactself"},"ContactSelf"),(0,r.yg)("p",null,"Bot itself will be encapsulated as a ContactSelf."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Tips: this class is extends Contact")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": global class"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh/docs/api/contact-self#contactself"},"ContactSelf"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh/docs/api/contact-self#contactself"},"intance"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh/docs/api/contact-self#contactselfavatarfile-%E2%87%92-promise"},"contactSelf.avatar","(","[","file","]",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"a"},"Promise <void | FileBox>"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh/docs/api/contact-self#contactselfqrcode-%E2%87%92-promise"},"contactSelf.qrcode","(",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"a"},"Promise <string>"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh/docs/api/contact-self#contactselfsignaturesignature"},"contactSelf.signature","(","signature",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"a"},"Promise <string>"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh/docs/api/contact-self#contactselfname-%E2%87%92-promisestring"},"contactSelf.name","(","[","name","]",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"a"},"Promise <void> | string")))))))),(0,r.yg)("h3",{id:"contactselfavatarfile--promise-void--filebox"},"contactSelf.avatar","(","[","file","]",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"h3"},"Promise <void | FileBox>")),(0,r.yg)("p",null,"GET / SET bot avatar"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/api/contact-self#ContactSelf"},(0,r.yg)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Param"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"[","file","]"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"FileBox"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")," ",(0,r.yg)("em",{parentName:"p"},"("," GET the avatar for bot, return {Promise","<","FileBox",">","}",")")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"// Save avatar to local file like `1-name.jpg`\n\nbot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const file = await user.avatar()\n  const name = file.name\n  await file.toFile(name, true)\n  console.log(`Save bot avatar: ${user.name()} with avatar file: ${name}`)\n})\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")," ",(0,r.yg)("em",{parentName:"p"},"(","SET the avatar for a bot",")")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"import { FileBox }  from 'file-box'\nbot.on('login', user => {\n  console.log(`user ${user} login`)\n  const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\n  await user.avatar(fileBox)\n  console.log(`Change bot avatar successfully!`)\n})\n")),(0,r.yg)("h3",{id:"contactselfqrcode--promise-string"},"contactSelf.qrcode","(",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"h3"},"Promise <string>")),(0,r.yg)("p",null,"Get bot qrcode"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/api/contact-self#ContactSelf"},(0,r.yg)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"import { generate } from 'qrcode-terminal'\nbot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const qrcode = await user.qrcode()\n  console.log(`Following is the bot qrcode!`)\n  generate(qrcode, { small: true })\n})\n")),(0,r.yg)("h3",{id:"contactselfsignaturesignature--promise-void"},"contactSelf.signature","(","signature",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,r.yg)("p",null,"Change bot signature"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/api/contact-self#ContactSelf"},(0,r.yg)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Param"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"signature"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The new signature that the bot will change to")))),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"bot.on('login', async user => {\n  console.log(`user ${user} login`)\n  try {\n    await user.signature(`Signature changed by wechaty on ${new Date()}`)\n  } catch (e) {\n    console.error('change signature failed', e)\n  }\n})\n")),(0,r.yg)("h3",{id:"contactselfnamename--promisevoid--string"},"contactSelf.name","(","[","name","]",")"," \u21d2 ",(0,r.yg)("inlineCode",{parentName:"h3"},"Promise<void> | string")),(0,r.yg)("p",null,"Get or change bot name."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/api/contact-self#contactself"},(0,r.yg)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Param"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"[","name","]"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The new alias that the bot will change to")))),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"bot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const oldName = user.name() // get bot name\n  try {\n    await user.name(`${oldName}-${new Date().getTime()}`) // change bot name\n  } catch (e) {\n    console.error('change name failed', e)\n  }\n})\n")))}m.isMDXComponent=!0}}]);