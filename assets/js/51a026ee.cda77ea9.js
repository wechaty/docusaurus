"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2992,78,3330,1173,5867,122,8011,2761,6256,3160,4445],{15680:(t,e,o)=>{o.d(e,{xA:()=>i,yg:()=>g});var s=o(96540);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,s,a=function(t,e){if(null==t)return{};var o,s,a={},n=Object.keys(t);for(s=0;s<n.length;s++)o=n[s],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)o=n[s],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=s.createContext({}),u=function(t){var e=s.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},i=function(t){var e=u(t.components);return s.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},h=s.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,c=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),p=u(o),h=a,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||n;return o?s.createElement(g,r(r({ref:e},i),{},{components:o})):s.createElement(g,r({ref:e},i))}));function g(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,r=new Array(n);r[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:a,r[1]=l;for(var u=2;u<n;u++)r[u]=o[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,o)}h.displayName="MDXCreateElement"},19365:(t,e,o)=>{o.d(e,{A:()=>r});var s=o(96540),a=o(20053);const n={tabItem:"tabItem_Ymn6"};function r(t){let{children:e,hidden:o,className:r}=t;return s.createElement("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,r),hidden:o},e)}},11470:(t,e,o)=>{o.d(e,{A:()=>T});var s=o(58168),a=o(96540),n=o(20053),r=o(23104),l=o(56347),c=o(57485),u=o(31682),i=o(89466);function p(t){return function(t){return a.Children.map(t,(t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:o,attributes:s,default:a}}=t;return{value:e,label:o,attributes:s,default:a}}))}function d(t){const{values:e,children:o}=t;return(0,a.useMemo)((()=>{const t=e??p(o);return function(t){const e=(0,u.X)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,o])}function h(t){let{value:e,tabValues:o}=t;return o.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:o}=t;const s=(0,l.W6)(),n=function(t){let{queryString:e=!1,groupId:o}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:e,groupId:o});return[(0,c.aZ)(n),(0,a.useCallback)((t=>{if(!n)return;const e=new URLSearchParams(s.location.search);e.set(n,t),s.replace({...s.location,search:e.toString()})}),[n,s])]}function y(t){const{defaultValue:e,queryString:o=!1,groupId:s}=t,n=d(t),[r,l]=(0,a.useState)((()=>function(t){let{defaultValue:e,tabValues:o}=t;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${o.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const s=o.find((t=>t.default))??o[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:e,tabValues:n}))),[c,u]=g({queryString:o,groupId:s}),[p,y]=function(t){let{groupId:e}=t;const o=function(t){return t?`docusaurus.tab.${t}`:null}(e),[s,n]=(0,i.Dv)(o);return[s,(0,a.useCallback)((t=>{o&&n.set(t)}),[o,n])]}({groupId:s}),m=(()=>{const t=c??p;return h({value:t,tabValues:n})?t:null})();(0,a.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,a.useCallback)((t=>{if(!h({value:t,tabValues:n}))throw new Error(`Can't select invalid tab value=${t}`);l(t),u(t),y(t)}),[u,y,n]),tabValues:n}}var m=o(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:o,selectedValue:l,selectValue:c,tabValues:u}=t;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.a_)(),d=t=>{const e=t.currentTarget,o=i.indexOf(e),s=u[o].value;s!==l&&(p(e),c(s))},h=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const o=i.indexOf(t.currentTarget)+1;e=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(t.currentTarget)-1;e=i[o]??i[i.length-1];break}}e?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":o},e)},u.map((t=>{let{value:e,label:o,attributes:r}=t;return a.createElement("li",(0,s.A)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:t=>i.push(t),onKeyDown:h,onClick:d},r,{className:(0,n.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":l===e})}),o??e)})))}function v(t){let{lazy:e,children:o,selectedValue:s}=t;const n=(Array.isArray(o)?o:[o]).filter(Boolean);if(e){const t=n.find((t=>t.props.value===s));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==s}))))}function w(t){const e=y(t);return a.createElement("div",{className:(0,n.A)("tabs-container",b.tabList)},a.createElement(f,(0,s.A)({},t,e)),a.createElement(v,(0,s.A)({},t,e)))}function T(t){const e=(0,m.A)();return a.createElement(w,(0,s.A)({key:String(e)},t))}},79323:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}d.isMDXComponent=!0},73399:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}d.isMDXComponent=!0},60537:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}d.isMDXComponent=!0},71665:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616054254,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}d.isMDXComponent=!0},1409:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}d.isMDXComponent=!0},58571:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}d.isMDXComponent=!0},27463:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}d.isMDXComponent=!0},92911:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}d.isMDXComponent=!0},41311:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>w,contentTitle:()=>f,default:()=>M,frontMatter:()=>b,metadata:()=>v,toc:()=>T});var s=o(58168),a=(o(96540),o(15680)),n=o(11470),r=o(19365),l=o(69566),c=o(71665),u=o(90532),i=o(58571),p=o(73399),d=o(60537),h=o(1409),g=o(92911),y=o(79323),m=o(27463);const b={},f=void 0,v={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",tags:[],version:"current",lastUpdatedBy:"shwetal",lastUpdatedAt:1630752945,formattedLastUpdatedAt:"Sep 4, 2021",frontMatter:{}},w={},T=[],x={toc:T},A="wrapper";function M(t){let{components:e,...o}=t;return(0,a.yg)(A,(0,s.A)({},x,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)(n.A,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"},{label:"OpenAPI",value:"openapi"}],mdxType:"Tabs"},(0,a.yg)(r.A,{value:"ts",mdxType:"TabItem"},(0,a.yg)(l.default,{mdxType:"ShortestChatbotTypeScript"})),(0,a.yg)(r.A,{value:"js",mdxType:"TabItem"},(0,a.yg)(u.default,{mdxType:"ShortestChatbotJavaScript"})),(0,a.yg)(r.A,{value:"py",mdxType:"TabItem"},(0,a.yg)(i.default,{mdxType:"ShortestChatbotPython"})),(0,a.yg)(r.A,{value:"go",mdxType:"TabItem"},(0,a.yg)(p.default,{mdxType:"ShortestChatbotGo"})),(0,a.yg)(r.A,{value:"java",mdxType:"TabItem"},(0,a.yg)(d.default,{mdxType:"ShortestChatbotJava"})),(0,a.yg)(r.A,{value:"php",mdxType:"TabItem"},(0,a.yg)(h.default,{mdxType:"ShortestChatbotPhp"})),(0,a.yg)(r.A,{value:"scala",mdxType:"TabItem"},(0,a.yg)(g.default,{mdxType:"ShortestChatbotScala"})),(0,a.yg)(r.A,{value:"csharp",mdxType:"TabItem"},(0,a.yg)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,a.yg)(r.A,{value:"rust",mdxType:"TabItem"},(0,a.yg)(m.default,{mdxType:"ShortestChatbotRust"})),(0,a.yg)(r.A,{value:"openapi",mdxType:"TabItem"},(0,a.yg)(c.default,{mdxType:"ShortestChatbotOpenApi"}))))}M.isMDXComponent=!0},90532:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",title:"shortest-chatbot-js",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",tags:[],version:"current",lastUpdatedBy:"fennghuang",lastUpdatedAt:1682493184,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},69566:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(58168),a=(o(96540),o(15680));const n={},r=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Xiaohan Li",lastUpdatedAt:1619007923,formattedLastUpdatedAt:"Apr 21, 2021",frontMatter:{}},c={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,a.yg)(p,(0,s.A)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0}}]);