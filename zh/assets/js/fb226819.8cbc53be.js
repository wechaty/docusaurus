"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6131],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(u,".").concat(d)]||c[d]||g[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),l=n(23104),i=n(56347),u=n(57485),s=n(31682),p=n(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=h({queryString:n,groupId:a}),[c,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=u??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==i&&(c(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:g},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(f,(0,a.A)({},e,t)),r.createElement(w,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},96742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),l=n(19365);const i={title:"QR Code Terminal plugin"},u=void 0,s={unversionedId:"using-plugin-with-wechaty/qr-code-terminal",id:"using-plugin-with-wechaty/qr-code-terminal",title:"QR Code Terminal plugin",description:"Powered by Wechaty",source:"@site/docs/using-plugin-with-wechaty/qr-code-terminal.mdx",sourceDirName:"using-plugin-with-wechaty",slug:"/using-plugin-with-wechaty/qr-code-terminal",permalink:"/zh/docs/using-plugin-with-wechaty/qr-code-terminal",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/using-plugin-with-wechaty/qr-code-terminal.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631608278,formattedLastUpdatedAt:"2021\u5e749\u670814\u65e5",frontMatter:{title:"QR Code Terminal plugin"},sidebar:"docs",previous:{title:"Event Logger plugin",permalink:"/zh/docs/using-plugin-with-wechaty/event-logger"},next:{title:"Heartbeat plugin",permalink:"/zh/docs/using-plugin-with-wechaty/heartbeat"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Adding QR code terminal plugin",id:"adding-qr-code-terminal-plugin",level:2},{value:"1. Create a starter bot",id:"1-create-a-starter-bot",level:3},{value:"2. Add dependency",id:"2-add-dependency",level:3},{value:"3. Integrate the plugin",id:"3-integrate-the-plugin",level:3},{value:"4. Run the bot",id:"4-run-the-bot",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],g={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,a.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Contrib-brightgreen.svg",alt:"Wechaty Plugin Contrib"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"QR code terminal")," plugin shows QR Code for scanning in terminal. In this tutorial you will learn how to integrate this plugin with a Wechaty bot."),(0,r.yg)("h2",{id:"requirements"},"Requirements"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"Wechaty")," v0.40+"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"Wechaty Plugin Contrib"))),(0,r.yg)("h2",{id:"getting-started"},"Getting started"),(0,r.yg)("p",null,"You will require ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," version ",(0,r.yg)("strong",{parentName:"p"},"16.0")," or greater in order to follow this tutorial. You can verify whether ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," is installed on your system or whether you have the correct version using the command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"node -v\n")),(0,r.yg)("p",null,"If you do not have ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," installed or your version is below requirement, get the latest version of ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.yg)("admonition",{title:"Node.js installation docs",type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.yg)("blockquote",{parentName:"admonition"},(0,r.yg)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),"."))),(0,r.yg)("h2",{id:"adding-qr-code-terminal-plugin"},"Adding QR code terminal plugin"),(0,r.yg)("p",null,"For adding this plugin, refer to ",(0,r.yg)("strong",{parentName:"p"},"Starter Bot")," for building a basic bot and then to add the ",(0,r.yg)("inlineCode",{parentName:"p"},"QR code terminal")," plugin to it follow the steps below:"),(0,r.yg)("h3",{id:"1-create-a-starter-bot"},"1. Create a starter bot"),(0,r.yg)("p",null,"Follow the instructions on the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"../examples/basic/starter-bot"},"Starter Bot"))," page to create the foundation of a Wechaty bot."),(0,r.yg)("h3",{id:"2-add-dependency"},"2. Add dependency"),(0,r.yg)("p",null,"For using any plugin, you have to add ",(0,r.yg)("inlineCode",{parentName:"p"},"wechaty-plugin-contrib")," NPM package to the dependencies using the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"npm i wechaty-plugin-contrib\n")),(0,r.yg)("h3",{id:"3-integrate-the-plugin"},"3. Integrate the plugin"),(0,r.yg)("p",null,"Inside ",(0,r.yg)("inlineCode",{parentName:"p"},"bot.ts")," file, import the plugin:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { QRCodeTerminal } from 'wechaty-plugin-contrib'\n")),(0,r.yg)("p",null,"Define a ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," variable which can be used while starting the bot to make the QR code printed on terminal small."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const config = {\n  small: true,   // default: false - the size of the printed QR Code in terminal\n}\n")),(0,r.yg)("p",null,"Now, before starting the bot, you can use this plugin:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"bot.use(QRCodeTerminal(config))\nbot.start()\n")),(0,r.yg)("h3",{id:"4-run-the-bot"},"4. Run the bot"),(0,r.yg)("p",null,"Now, you are done with the integration of ",(0,r.yg)("inlineCode",{parentName:"p"},"QR code terminal plugin")," with your bot. For running the bot you have to ",(0,r.yg)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use and then run the bot."),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n# If you want to use WhatsApp\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n# If you want to use WhatsApp\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n# If you want to use WhatsApp\n# set WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")))),(0,r.yg)("p",null,"Congratulations! you have successfully added ",(0,r.yg)("inlineCode",{parentName:"p"},"QR code terminal")," plugin to your bot. On running the bot it will show a QR code on terminal."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"QR code terminal plugin output",src:n(5910).A,width:"1579",height:"875"})),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"You can use this ",(0,r.yg)("inlineCode",{parentName:"p"},"QR code terminal")," plugin for building the bots where you have to connect to a device. You can refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/getting-started/running-locally"},"Ding Dong bot"),". In ding dong bot you have to scan the generated QR code to connect to ",(0,r.yg)("strong",{parentName:"p"},"Whatsapp/Wechat"),"."),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-contrib"},"GitHub repository of Wechaty Plugin Contrib")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"NPM package of Wechaty Plugin Contrib")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://youtu.be/tfGZXoe_aA4"},"Wechaty Plugin Video Tutorial"))))}h.isMDXComponent=!0},5910:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/output-ecf35308a74b3333511294e02d56c123.png"}}]);