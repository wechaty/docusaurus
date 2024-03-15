"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9594,78,3330,1173,2992,5867,122,8011,2761,6256,3160,4445],{15680:(t,e,a)=>{a.d(e,{xA:()=>u,yg:()=>h});var n=a(96540);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,s=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(a),g=o,h=p["".concat(i,".").concat(g)]||p[g]||d[g]||s;return a?n.createElement(h,r(r({ref:e},u),{},{components:a})):n.createElement(h,r({ref:e},u))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=a.length,r=new Array(s);r[0]=g;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[p]="string"==typeof t?t:o,r[1]=l;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(t,e,a)=>{a.d(e,{A:()=>r});var n=a(96540),o=a(20053);const s={tabItem:"tabItem_Ymn6"};function r(t){let{children:e,hidden:a,className:r}=t;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,r),hidden:a},e)}},11470:(t,e,a)=>{a.d(e,{A:()=>N});var n=a(58168),o=a(96540),s=a(20053),r=a(23104),l=a(56347),i=a(57485),c=a(31682),u=a(89466);function p(t){return function(t){return o.Children.map(t,(t=>{if(!t||(0,o.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:o}}=t;return{value:e,label:a,attributes:n,default:o}}))}function d(t){const{values:e,children:a}=t;return(0,o.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,c.X)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function g(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function h(t){let{queryString:e=!1,groupId:a}=t;const n=(0,l.W6)(),s=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,i.aZ)(s),(0,o.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(n.location.search);e.set(s,t),n.replace({...n.location,search:e.toString()})}),[s,n])]}function y(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,s=d(t),[r,l]=(0,o.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:s}))),[i,c]=h({queryString:a,groupId:n}),[p,y]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,s]=(0,u.Dv)(a);return[n,(0,o.useCallback)((t=>{a&&s.set(t)}),[a,s])]}({groupId:n}),m=(()=>{const t=i??p;return g({value:t,tabValues:s})?t:null})();(0,o.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,o.useCallback)((t=>{if(!g({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);l(t),c(t),y(t)}),[c,y,s]),tabValues:s}}var m=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:a,selectedValue:l,selectValue:i,tabValues:c}=t;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.a_)(),d=t=>{const e=t.currentTarget,a=u.indexOf(e),n=c[a].value;n!==l&&(p(e),i(n))},g=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=u.indexOf(t.currentTarget)+1;e=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(t.currentTarget)-1;e=u[a]??u[u.length-1];break}}e?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},e)},c.map((t=>{let{value:e,label:a,attributes:r}=t;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:t=>u.push(t),onKeyDown:g,onClick:d},r,{className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":l===e})}),a??e)})))}function v(t){let{lazy:e,children:a,selectedValue:n}=t;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=s.find((t=>t.props.value===n));return t?(0,o.cloneElement)(t,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((t,e)=>(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function w(t){const e=y(t);return o.createElement("div",{className:(0,s.A)("tabs-container",b.tabList)},o.createElement(f,(0,n.A)({},t,e)),o.createElement(v,(0,n.A)({},t,e)))}function N(t){const e=(0,m.A)();return o.createElement(w,(0,n.A)({key:String(e)},t))}},79323:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/dotnet/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}d.isMDXComponent=!0},73399:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/go/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}d.isMDXComponent=!0},60537:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/java/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}d.isMDXComponent=!0},71665:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/openapi/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616054254,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}d.isMDXComponent=!0},1409:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/php/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}d.isMDXComponent=!0},58571:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/python/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}d.isMDXComponent=!0},27463:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/rust/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}d.isMDXComponent=!0},92911:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/scala/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}d.isMDXComponent=!0},41311:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>w,contentTitle:()=>f,default:()=>C,frontMatter:()=>b,metadata:()=>v,toc:()=>N});var n=a(58168),o=(a(96540),a(15680)),s=a(11470),r=a(19365),l=a(69566),i=a(71665),c=a(90532),u=a(58571),p=a(73399),d=a(60537),g=a(1409),h=a(92911),y=a(79323),m=a(27463);const b={},f=void 0,v={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/zh/docs/polyglot/transclusions/shortest-chatbots",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",tags:[],version:"current",lastUpdatedBy:"shwetal",lastUpdatedAt:1630752945,formattedLastUpdatedAt:"2021\u5e749\u67084\u65e5",frontMatter:{}},w={},N=[],T={toc:N},x="wrapper";function C(t){let{components:e,...a}=t;return(0,o.yg)(x,(0,n.A)({},T,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)(s.A,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"},{label:"OpenAPI",value:"openapi"}],mdxType:"Tabs"},(0,o.yg)(r.A,{value:"ts",mdxType:"TabItem"},(0,o.yg)(l.default,{mdxType:"ShortestChatbotTypeScript"})),(0,o.yg)(r.A,{value:"js",mdxType:"TabItem"},(0,o.yg)(c.default,{mdxType:"ShortestChatbotJavaScript"})),(0,o.yg)(r.A,{value:"py",mdxType:"TabItem"},(0,o.yg)(u.default,{mdxType:"ShortestChatbotPython"})),(0,o.yg)(r.A,{value:"go",mdxType:"TabItem"},(0,o.yg)(p.default,{mdxType:"ShortestChatbotGo"})),(0,o.yg)(r.A,{value:"java",mdxType:"TabItem"},(0,o.yg)(d.default,{mdxType:"ShortestChatbotJava"})),(0,o.yg)(r.A,{value:"php",mdxType:"TabItem"},(0,o.yg)(g.default,{mdxType:"ShortestChatbotPhp"})),(0,o.yg)(r.A,{value:"scala",mdxType:"TabItem"},(0,o.yg)(h.default,{mdxType:"ShortestChatbotScala"})),(0,o.yg)(r.A,{value:"csharp",mdxType:"TabItem"},(0,o.yg)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,o.yg)(r.A,{value:"rust",mdxType:"TabItem"},(0,o.yg)(m.default,{mdxType:"ShortestChatbotRust"})),(0,o.yg)(r.A,{value:"openapi",mdxType:"TabItem"},(0,o.yg)(i.default,{mdxType:"ShortestChatbotOpenApi"}))))}C.isMDXComponent=!0},90532:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",title:"shortest-chatbot-js",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/zh/docs/polyglot/typescript/transclusions/shortest-chatbot-js",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",tags:[],version:"current",lastUpdatedBy:"fennghuang",lastUpdatedAt:1682493184,formattedLastUpdatedAt:"2023\u5e744\u670826\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},69566:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const s={},r=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/zh/docs/polyglot/typescript/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Xiaohan Li",lastUpdatedAt:1619007923,formattedLastUpdatedAt:"2021\u5e744\u670821\u65e5",frontMatter:{}},i={},c=[],u={toc:c},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.yg)(p,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},80574:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(58168),o=(a(96540),a(15680)),s=a(11470),r=a(19365);a(41311);const l={title:"Heartbeat plugin"},i=void 0,c={unversionedId:"using-plugin-with-wechaty/heartbeat",id:"using-plugin-with-wechaty/heartbeat",title:"Heartbeat plugin",description:"Powered by Wechaty",source:"@site/docs/using-plugin-with-wechaty/heartbeat.mdx",sourceDirName:"using-plugin-with-wechaty",slug:"/using-plugin-with-wechaty/heartbeat",permalink:"/zh/docs/using-plugin-with-wechaty/heartbeat",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/using-plugin-with-wechaty/heartbeat.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631608278,formattedLastUpdatedAt:"2021\u5e749\u670814\u65e5",frontMatter:{title:"Heartbeat plugin"},sidebar:"docs",previous:{title:"QR Code Terminal plugin",permalink:"/zh/docs/using-plugin-with-wechaty/qr-code-terminal"},next:{title:"Using Vorpal with Wechaty",permalink:"/zh/docs/tutorials/using-vorpal-with-wechaty"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Adding Heartbeat plugin",id:"adding-heartbeat-plugin",level:2},{value:"1. Create a starter bot",id:"1-create-a-starter-bot",level:3},{value:"2. Install dependency",id:"2-install-dependency",level:3},{value:"3. Integrate the plugin",id:"3-integrate-the-plugin",level:3},{value:"4. Connect with app",id:"4-connect-with-app",level:3},{value:"5. Run the bot",id:"5-run-the-bot",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],d={toc:p},g="wrapper";function h(t){let{components:e,...l}=t;return(0,o.yg)(g,(0,n.A)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Contrib-brightgreen.svg",alt:"Wechaty Plugin Contrib"})),"\n",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Heartbeat")," plugin helps to send emojis to a specified contact or group periodically. In this tutorial, you will learn how to add the ",(0,o.yg)("inlineCode",{parentName:"p"},"Heartbeat")," plugin to a Wechaty bot."),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"Wechaty")," v0.40+"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"Wechaty Plugin Contrib"))),(0,o.yg)("h2",{id:"getting-started"},"Getting started"),(0,o.yg)("p",null,"You will require ",(0,o.yg)("inlineCode",{parentName:"p"},"Node.js")," version ",(0,o.yg)("strong",{parentName:"p"},"16.0")," or greater in order to follow this tutorial. You can verify whether ",(0,o.yg)("inlineCode",{parentName:"p"},"Node.js")," is installed on your system or whether you have the correct version using the command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"node -v\n")),(0,o.yg)("p",null,"If you do not have ",(0,o.yg)("inlineCode",{parentName:"p"},"Node.js")," installed or your version is below requirement, get the latest version of ",(0,o.yg)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,o.yg)("admonition",{title:"Node.js installation docs",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,o.yg)("blockquote",{parentName:"admonition"},(0,o.yg)("p",{parentName:"blockquote"},"Installation guide for ",(0,o.yg)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),"."))),(0,o.yg)("h2",{id:"adding-heartbeat-plugin"},"Adding Heartbeat plugin"),(0,o.yg)("p",null,"For the demonstration of adding this plugin, we will use the ",(0,o.yg)("strong",{parentName:"p"},"Starter Bot")," and show you how to add the ",(0,o.yg)("inlineCode",{parentName:"p"},"Heartbeat")," plugin to it. Follow the steps below:"),(0,o.yg)("h3",{id:"1-create-a-starter-bot"},"1. Create a starter bot"),(0,o.yg)("p",null,"Follow the instructions on the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"../examples/basic/starter-bot"},"Starter Bot"))," page to create the foundation of a Wechaty bot."),(0,o.yg)("h3",{id:"2-install-dependency"},"2. Install dependency"),(0,o.yg)("p",null,"In order to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Heartbeat")," plugin, you have to first add it to the dependencies. As it is present in the ",(0,o.yg)("inlineCode",{parentName:"p"},"wechaty-plugin-contrib")," NPM package, you can install it using the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"npm i wechaty-plugin-contrib\n")),(0,o.yg)("h3",{id:"3-integrate-the-plugin"},"3. Integrate the plugin"),(0,o.yg)("p",null,"Import the plugin inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"starter-bot.ts")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { Heartbeat } from 'wechaty-plugin-contrib'\n")),(0,o.yg)("p",null,"Define a variable called ",(0,o.yg)("inlineCode",{parentName:"p"},"config")," where you can specify:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"contact"),": The contact of the person whom you want to send the emoji (default: ",(0,o.yg)("strong",{parentName:"li"},"filehelper"),")"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"emoji"),": Define under ",(0,o.yg)("inlineCode",{parentName:"li"},"heartbeat"),", the emoji to send ","[\u7231\u5fc3]"," - Heartbeat emoji"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"intervalSeconds"),": The time interval before sending an emoji (default: ",(0,o.yg)("strong",{parentName:"li"},"1 hour"),")")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const config = {\n    contact: 'filehelper', // contact who will receive the emoji\n    emoji: {\n        heartbeat: '\ud83d\ude0e', // the emoji to send\n    },\n    intervalSeconds: 60, // sends the emoji after an interval of 60 seconds\n}\n")),(0,o.yg)("p",null,"Now, just before starting the bot, you can use this plugin:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"bot.use(\n    Heartbeat(config),\n)\nbot.start()\n")),(0,o.yg)("h3",{id:"4-connect-with-app"},"4. Connect with app"),(0,o.yg)("p",null,"You have to connect with ",(0,o.yg)("strong",{parentName:"p"},"WeChat")," or ",(0,o.yg)("strong",{parentName:"p"},"WhatsApp")," for sending the emojis to any contact. For that, you have to first generate a QR code."),(0,o.yg)("p",null,"Import the ",(0,o.yg)("inlineCode",{parentName:"p"},"QRCodeTerminal")," plugin:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { Heartbeat, QRCodeTerminal } from 'wechaty-plugin-contrib'\n")),(0,o.yg)("p",null,"Use the plugin like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"bot.use(\n    Heartbeat(config),\n    QRCodeTerminal({small: true}),\n)\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"You will get more information regarding the ",(0,o.yg)("inlineCode",{parentName:"p"},"QRCodeTerminal")," plugin in the tutorial ",(0,o.yg)("a",{parentName:"p",href:"./qr-code-terminal"},"here"),".")),(0,o.yg)("h3",{id:"5-run-the-bot"},"5. Run the bot"),(0,o.yg)("p",null,"To run the bot, first you have to ",(0,o.yg)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use, and then start the bot:"),(0,o.yg)(s.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.yg)(r.A,{value:"linux",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,o.yg)(r.A,{value:"mac",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,o.yg)(r.A,{value:"windows",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n")))),(0,o.yg)("p",null,"After running the bot, it will generate a QR code for ",(0,o.yg)("strong",{parentName:"p"},"WeChat")," or ",(0,o.yg)("strong",{parentName:"p"},"WhatsApp")," (as per the puppet you have used), scan it with the appropriate app, and the bot will now be connected to the app. You will notice that the bot sends the emoji to the specified contact periodically."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Heartbeat plugin output",src:a(33912).A,width:"1080",height:"846"})),(0,o.yg)("p",null,"Congratulations! You have successfully integrated the ",(0,o.yg)("inlineCode",{parentName:"p"},"Heartbeat")," plugin to your Wechaty bot."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"You can apply a similar concept to add the ",(0,o.yg)("inlineCode",{parentName:"p"},"Heartbeat")," plugin to any of your Wechaty bots. You can learn more about this plugin ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib#4-heartbeat"},"here"),"."),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-contrib"},"GitHub repository of Wechaty Plugin Contrib")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"NPM package of Wechaty Plugin Contrib")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4"},"Wechaty plugin launch video"))))}h.isMDXComponent=!0},33912:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/heartbeat-bot-output-c068fb89e32ed0cfe887f597ac103ded.webp"}}]);