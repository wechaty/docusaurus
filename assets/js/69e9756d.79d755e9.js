"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2524],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>v});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=o.createContext({}),p=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=i,v=s["".concat(m,".").concat(g)]||s[g]||d[g]||a;return n?o.createElement(v,r(r({ref:t},c),{},{components:n})):o.createElement(v,r({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(58168),i=(n(96540),n(15680));const a={title:"Room Invitation"},r=void 0,l={unversionedId:"api/room-invitation",id:"api/room-invitation",title:"Room Invitation",description:"Room Invitation",source:"@site/docs/api/room-invitation.md",sourceDirName:"api",slug:"/api/room-invitation",permalink:"/docs/api/room-invitation",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/api/room-invitation.md",tags:[],version:"current",lastUpdatedBy:"LiZhong",lastUpdatedAt:1685722798,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Room Invitation"},sidebar:"docs",previous:{title:"Room",permalink:"/docs/api/room"},next:{title:"Friendship",permalink:"/docs/api/friendship"}},m={},p=[{value:"Room Invitation",id:"room-invitation",level:2},{value:"roomInvitation.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"roominvitationaccept--promise-void",level:3},{value:"Example",id:"example",level:4},{value:"roomInvitation.inviter() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"roominvitationinviter--promise-contact",level:3},{value:"Example",id:"example-1",level:4},{value:"roomInvitation.topic() \u21d2 <code>Promise &lt;string&gt;</code>",id:"roominvitationtopic--promise-string",level:3},{value:"Example",id:"example-2",level:4},{value:"roomInvitation.date() \u21d2 <code>Promise &lt;Date&gt;</code>",id:"roominvitationdate--promise-date",level:3},{value:"roomInvitation.age() \u21d2 <code>Promise &lt;number&gt;</code>",id:"roominvitationage--promise-number",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(s,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"room-invitation"},"Room Invitation"),(0,i.yg)("p",null,"Room Invitation is a global class that accepts room invitation. This section describes the methods of the Room Invitation class."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Instance Methods"),(0,i.yg)("th",{parentName:"tr",align:null},"Return type"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"accept","(",")"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Promise"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"inviter","(",")"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Promise"),"(Contact)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"topic","(",")"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Promise")," (String)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"date","(",")"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Promise")," (Date)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"age","(",")"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Promise")," (Number)")))),(0,i.yg)("h3",{id:"roominvitationaccept--promise-void"},"roomInvitation.accept","(",")"," \u21d2 ",(0,i.yg)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,i.yg)("p",null,"This method accepts the room invitation. See the following example:"),(0,i.yg)("h4",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  try {\n    console.log(`received room-invite event.`)\n    await roomInvitation.accept()\n  } catch (e) {\n    console.error(e)\n  }\n})\n.start()\n")),(0,i.yg)("h3",{id:"roominvitationinviter--promise-contact"},"roomInvitation.inviter","(",")"," \u21d2 ",(0,i.yg)("inlineCode",{parentName:"h3"},"Promise <Contact>")),(0,i.yg)("p",null,"This method gets the inviter from the room invitation. Check the following example:"),(0,i.yg)("h4",{id:"example-1"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const inviter = await roomInvitation.inviter()\n  const name = inviter.name()\n  console.log(`received room invitation event from ${name}`)\n})\n.start()\n")),(0,i.yg)("h3",{id:"roominvitationtopic--promise-string"},"roomInvitation.topic","(",")"," \u21d2 ",(0,i.yg)("inlineCode",{parentName:"h3"},"Promise <string>")),(0,i.yg)("p",null,"The method gets the room topic from room invitation as shown in the below example:"),(0,i.yg)("h4",{id:"example-2"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const topic = await roomInvitation.topic()\n  console.log(`received room invitation event from room ${topic}`)\n})\n.start()\n")),(0,i.yg)("h3",{id:"roominvitationdate--promise-date"},"roomInvitation.date","(",")"," \u21d2 ",(0,i.yg)("inlineCode",{parentName:"h3"},"Promise <Date>")),(0,i.yg)("p",null,"The method gets the invitation date and time."),(0,i.yg)("h3",{id:"roominvitationage--promise-number"},"roomInvitation.age","(",")"," \u21d2 ",(0,i.yg)("inlineCode",{parentName:"h3"},"Promise <number>")),(0,i.yg)("p",null,"The method returns the roopm invitation age in seconds.\nFor example, the invitation is sent at time ",(0,i.yg)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",(0,i.yg)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",(0,i.yg)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")))}d.isMDXComponent=!0}}]);