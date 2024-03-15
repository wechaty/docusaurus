"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5190],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(a),m=r,y=g["".concat(i,".").concat(m)]||g[m]||c[m]||o;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[g]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),p=a(56347),i=a(57485),s=a(31682),u=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,p.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[l,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=y({queryString:a,groupId:n}),[g,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=i??g;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&p(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),d(e)}),[s,d,o]),tabValues:o}}var h=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:p,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==p&&(g(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":p===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=d(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(w,(0,n.A)({},e,t)),r.createElement(f,(0,n.A)({},e,t)))}function v(e){const t=(0,h.A)();return r.createElement(N,(0,n.A)({key:String(t)},e))}},65757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(11470),l=a(19365);const p={title:"Tuling 123 Bot"},i=void 0,s={unversionedId:"examples/professional/tuling123-bot",id:"examples/professional/tuling123-bot",title:"Tuling 123 Bot",description:"Powered by Wechaty",source:"@site/docs/examples/professional/tuling123-bot.mdx",sourceDirName:"examples/professional",slug:"/examples/professional/tuling123-bot",permalink:"/docs/examples/professional/tuling123-bot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/examples/professional/tuling123-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"Sep 16, 2021",frontMatter:{title:"Tuling 123 Bot"},sidebar:"docs",previous:{title:"Ctrl C Signal Bot",permalink:"/docs/examples/professional/ctrl-c-signal-bot"},next:{title:"Overview",permalink:"/docs/howto/"}},u={},g=[{value:"Try out the bot",id:"try-out-the-bot",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"1. Clone the repository",id:"1-clone-the-repository",level:3},{value:"2. Install dependencies",id:"2-install-dependencies",level:3},{value:"3. Run the bot",id:"3-run-the-bot",level:3},{value:"Building the bot",id:"building-the-bot",level:2},{value:"1. Initialize project",id:"1-initialize-project",level:3},{value:"2. Install dependencies",id:"2-install-dependencies-1",level:3},{value:"3. Write code for bot",id:"3-write-code-for-bot",level:3},{value:"Running the bot",id:"running-the-bot",level:2},{value:"References",id:"references",level:2}],c={toc:g},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://www.javascript.com/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-JavaScript-blue.svg",alt:"JavaScript"}))),(0,r.yg)("p",null,"Tuling bot is a bot which can talk with you using ",(0,r.yg)("a",{parentName:"p",href:"http://www.turingapi.com/"},"Tuling123.com"),"."),(0,r.yg)("p",null,"This tutorial is a demonstration of how to use this bot."),(0,r.yg)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/github/sbis04/wechaty-tuling123-bot/tree/main/?fontsize=14&hidenavigation=1&theme=dark"},(0,r.yg)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-tuling123-bot"}))),(0,r.yg)("p",null,"You can try out the Tuling123 bot using this interactive CodeSandbox."),(0,r.yg)("p",null,"Just scan the generated QR code with ",(0,r.yg)("strong",{parentName:"p"},"WeChat")," app, and you are ready to play with the bot!"),(0,r.yg)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/sbis04/wechaty-tuling123-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Ftuling123-bot.js&theme=dark",title:"tuling123-bot",sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts"}),(0,r.yg)("h2",{id:"requirements"},"Requirements"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,r.yg)("h2",{id:"getting-started"},"Getting started"),(0,r.yg)("p",null,"You should have ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12), then you need to install the latest version of ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.yg)("admonition",{title:"Node.js installation docs",type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.yg)("blockquote",{parentName:"admonition"},(0,r.yg)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),"."))),(0,r.yg)("p",null,"You can head over to the ",(0,r.yg)("a",{parentName:"p",href:"#building-the-bot"},"Building the bot")," section to learn how to build the bot on your own."),(0,r.yg)("p",null,"Otherwise, if you just want to try out the bot on your local system, follow the steps below:"),(0,r.yg)("h3",{id:"1-clone-the-repository"},"1. Clone the repository"),(0,r.yg)("p",null,"Use the following commands to clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"GitHub repository")," and navigate to the directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,r.yg)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),(0,r.yg)("p",null,"You can install the ",(0,r.yg)("inlineCode",{parentName:"p"},"npm")," packages required for running the bot, using this command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,r.yg)("h3",{id:"3-run-the-bot"},"3. Run the bot"),(0,r.yg)("p",null,"You have to ",(0,r.yg)("inlineCode",{parentName:"p"},"export/set")," the environment variables:"),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"There are various ",(0,r.yg)("strong",{parentName:"p"},"Wechaty puppets")," available, you can know more about them ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started#working-with-different-puppets"},"here"),".")),(0,r.yg)("p",null,"Run the bot by using the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"node examples/professional/tuling123-bot.js\n")),(0,r.yg)("p",null,"It will generate a QR code, scan it using ",(0,r.yg)("strong",{parentName:"p"},"WeChat")," or ",(0,r.yg)("strong",{parentName:"p"},"WhatsApp")," (according to the puppet you have used), and you are ready to play with the bot."),(0,r.yg)("h2",{id:"building-the-bot"},"Building the bot"),(0,r.yg)("p",null,"Let's get started with building the Tuling bot using Wechaty."),(0,r.yg)("h3",{id:"1-initialize-project"},"1. Initialize project"),(0,r.yg)("p",null,"Create a new folder called ",(0,r.yg)("inlineCode",{parentName:"p"},"tuling-bot")," and move into that directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir tuling-bot\ncd tuling-bot\n")),(0,r.yg)("p",null,"Use the following command to initialize an npm project:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,r.yg)("h3",{id:"2-install-dependencies-1"},"2. Install dependencies"),(0,r.yg)("p",null,"You will need the ",(0,r.yg)("inlineCode",{parentName:"p"},"wechaty")," NPM package for building this bot, ",(0,r.yg)("inlineCode",{parentName:"p"},"qrcode-terminal")," for displaying the QR code that can be scanned for using the bot and ",(0,r.yg)("inlineCode",{parentName:"p"},"tuling123-client")," for connecting to tuling bot. Install them using the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty\nnpm install qrcode-terminal tuling123-client\n")),(0,r.yg)("p",null,"You will also need to add dependencies for using any ",(0,r.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"Wechaty Puppet")," which helps to integrate Wechaty with various ",(0,r.yg)("strong",{parentName:"p"},"instant messaging (IM) systems")," (such as WeChat, WhatsApp, and WeCom):"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you want to use ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://www.whatsapp.com/"},"WhatsApp")),", install ",(0,r.yg)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you want to use ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://www.wechat.com/"},"WeChat")),", you can try the following puppets:"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Web Protocol:")," Install ",(0,r.yg)("inlineCode",{parentName:"p"},"wechaty-puppet-wechat"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-wechat\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"iPad Protocol:")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"padlocal: Install ",(0,r.yg)("inlineCode",{parentName:"li"},"wechaty-puppet-padlocal"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-padlocal\n")),(0,r.yg)("p",{parentName:"li"},"Then get a token like ",(0,r.yg)("inlineCode",{parentName:"p"},"puppet_padlocal_XXX"),", know more about puppet service padlocal ",(0,r.yg)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/padlocal"},"here"),"."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"paimon: Install ",(0,r.yg)("inlineCode",{parentName:"li"},"wechaty-puppet-service"),":")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.yg)("p",{parentName:"li"},"Then get a token like ",(0,r.yg)("inlineCode",{parentName:"p"},"puppet_paimon_XXX"),", know more about puppet service paimon ",(0,r.yg)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/paimon"},"here"),"."))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you want to use ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://work.weixin.qq.com/"},"WeCom")),", install ",(0,r.yg)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.yg)("p",{parentName:"li"},"Then get a token like ",(0,r.yg)("inlineCode",{parentName:"p"},"puppet_wxwork_XXXXX"),", more about puppet service wxwork ",(0,r.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/wxwork/"},"here"),"."))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"You can find more information about the puppets ",(0,r.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"here"),".")),(0,r.yg)("h3",{id:"3-write-code-for-bot"},"3. Write code for bot"),(0,r.yg)("p",null,"Start by creating a new file ",(0,r.yg)("inlineCode",{parentName:"p"},"tuling-bot.js"),". We will be writing the code here."),(0,r.yg)("p",null,"Let's import the required packages in the JavaScript file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import qrTerm  from 'qrcode-terminal'\nimport Tuling123  from 'tuling123-client'\n\nconst {\n  Wechaty,\n  Message,\n} = require('wechaty')\n\nconst welcome = `\n=============== Powered by Wechaty ===============\n-------- https://github.com/Chatie/wechaty --------\n\nI can talk with you using Tuling123.com\nApply your own tuling123.com API_KEY\nat: http://www.tuling123.com/html/doc/api.html\n\n__________________________________________________\n\nPlease wait... I'm trying to login in...\n`\n\nconsole.log(welcome)\n")),(0,r.yg)("p",null,"Apply Your Own Tuling123 Developer API_KEY at ",(0,r.yg)("a",{parentName:"p",href:"http://www.tuling123.com"},"tuling123.com")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const TULING123_API_KEY = '18f25157e0446df58ade098479f74b21'\nconst tuling = new Tuling123(TULING123_API_KEY)\n")),(0,r.yg)("p",null,"Initializing the bot by providing it a name"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const bot = new Wechaty()\n")),(0,r.yg)("p",null,"Assigning proper functions to call when an event is triggered by the bot:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"bot.on('scan',    onScan)\nbot.on('login',   onLogin)\nbot.on('logout',  onLogout)\nbot.on('message', onMessage)\nbot.on('error',   onError)\n")),(0,r.yg)("p",null,"Specify some functions that you will require for handling different events returned by the tuling bot."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"onScan")),(0,r.yg)("p",{parentName:"li"},"This function will be used for generating the ",(0,r.yg)("strong",{parentName:"p"},"QR code")," for the puppet specified, and display it on the console."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function onScan (qrcode, status) {\nqrTerm.generate(qrcode, { small: true })  // show qrcode on console\n}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"onLogin")),(0,r.yg)("p",{parentName:"li"},"This will print a log message when an user logs in to the bot."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function onLogin (user) {\n  console.log(`${user} login`)\n}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"onLogout")),(0,r.yg)("p",{parentName:"li"},"This will print a log message when an user logs out of the bot."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function onLogout (user) {\n  console.log(`${user} logout`)\n}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"onError")),(0,r.yg)("p",{parentName:"li"},"This is for printing an error message to the console."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function onError (e) {\n  console.error(e)\n}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"onMessage")),(0,r.yg)("p",{parentName:"li"},"This is the main function which will handle the messaging service."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-js"},"async function onMessage (msg) {\n  // Skip message from self, or inside a room\n  if (msg.self() || msg.room() || msg.from().name() === '\u5fae\u4fe1\u56e2\u961f' || msg.type() !== Message.Type.Text) return\n\n  console.log('Bot', 'talk: %s'  , msg.text())\n\n  try {\n    const {text: reply} = await tuling.ask(msg.text(), {userid: msg.from()})\n    console.log('Tuling123', 'Talker reply:\"%s\" for \"%s\" ',\n                          reply,\n                          msg.text(),\n            )\n    await msg.say(reply)\n  } catch (e) {\n    console.error('Bot', 'on message tuling.ask() exception: %s' , e && e.message || e)\n  }\n}\n")))),(0,r.yg)("p",null,"Finally, for starting the bot"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"bot.start()\n.catch(console.error)\n")),(0,r.yg)("h2",{id:"running-the-bot"},"Running the bot"),(0,r.yg)("p",null,"In order to run the bot, first you have to ",(0,r.yg)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use:"),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# export WECHATY_PUPPET=wechaty-puppet-service\n# export WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n'))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# export WECHATY_PUPPET=wechaty-puppet-service\n# export WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n'))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# set WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# set WECHATY_PUPPET=wechaty-puppet-service\n# set WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n')))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you are using WeCom, you can get token from ",(0,r.yg)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/wxwork"},"puppet service wxwork"),".")),(0,r.yg)("p",null,"Run the bot using the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx ts-node tuling-bot.js\n")),(0,r.yg)("p",null,"This will start the bot and generate a QR code."),(0,r.yg)("p",null,"Scan it using your ",(0,r.yg)("strong",{parentName:"p"},"WeChat/WhatsApp")," as per the puppet you have selected, and you are ready to play with the bot!"),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"))))}y.isMDXComponent=!0}}]);