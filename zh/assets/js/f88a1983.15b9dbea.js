"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[361],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,y=d["".concat(p,".").concat(c)]||d[c]||g[c]||l;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),p=a(57485),s=a(31682),u=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=g(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,s]=y({queryString:a,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=p??d;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var h=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),g=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==o&&(d(t),p(n))},c=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:g},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(N,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function w(e){const t=(0,h.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},78644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const o={title:"Puppet Provider: PadLocal",sidebar_label:"PadLocal"},p=void 0,s={unversionedId:"puppet-providers/padlocal",id:"puppet-providers/padlocal",title:"Puppet Provider: PadLocal",description:"Wechaty Puppet PadLocal",source:"@site/docs/puppet-providers/padlocal.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/padlocal",permalink:"/zh/docs/puppet-providers/padlocal",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-providers/padlocal.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1640349921,formattedLastUpdatedAt:"2021\u5e7412\u670824\u65e5",frontMatter:{title:"Puppet Provider: PadLocal",sidebar_label:"PadLocal"},sidebar:"docs",previous:{title:"Lark",permalink:"/zh/docs/puppet-providers/lark"},next:{title:"WeChat4U",permalink:"/zh/docs/puppet-providers/wechat4u"}},u={},d=[{value:"Known Issues",id:"known-issues",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"History",id:"history",level:2},{value:"PadLocal: Wechaty puppet service provider",id:"padlocal-wechaty-puppet-service-provider",level:3},{value:"Topology",id:"topology",level:3},{value:"Maintainers",id:"maintainers",level:2},{value:"Blogs",id:"blogs",level:2}],g={toc:d},c="wrapper";function y(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,n.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"padlocal"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-PadLocal-blueviolet",alt:"Wechaty Puppet PadLocal"}))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2020/padlocal/logo.png",alt:"Wechaty Puppet PadLocal"})),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-padlocal"},(0,r.yg)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-padlocal.svg",alt:"NPM Version"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-padlocal?activeTab=versions"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-padlocal/next.svg",alt:"npm (tag)"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/padlocal/padlocal-client-ts"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-padlocal--client--ts-brightgreen",alt:"Powered by padlocal-client-ts"}))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Repo: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"https://github.com/padlocal/wechaty-puppet-padlocal")),(0,r.yg)("li",{parentName:"ul"},"Support & Feedback: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal/issues"},"https://github.com/padlocal/wechaty-puppet-padlocal/issues"))),(0,r.yg)("h2",{id:"known-issues"},"Known Issues"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},'TypeError [ERR_INVALID_ARG_TYPE]: The "listener" argument must be of type function. Received undefined'))),(0,r.yg)("p",null,"The PadLocal version v0.4 can only be used with Wechaty version v0.x (below v1.0). You need to use Wechaty v0.x when you are using PadLocal v0.4."),(0,r.yg)("p",null,"Related issues:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal/issues/117#issuecomment-988773575"},"can't use gateway padlocal/wechaty-puppet-padlocal#117"))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("p",null,"PadLocal is a full-featured Wechaty Puppet Provider."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Function"),(0,r.yg)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.yg)("th",{parentName:"tr",align:null},"padlocal"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Message")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"<\u6d88\u606f>")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send and receive text"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6536\u53d1\u6587\u672c"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send and receive personal business cards"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6536\u53d1\u4e2a\u4eba\u540d\u7247"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send and receive graphic links"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6536\u53d1\u56fe\u6587\u94fe\u63a5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send pictures and files"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u56fe\u7247\u3001\u6587\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Receive pictures and files"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u56fe\u7247\u3001\u6587\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send video"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u89c6\u9891"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Receive video"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u89c6\u9891"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send Mini Program"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5c0f\u7a0b\u5e8f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Receive GIF"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u52a8\u56fe"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send GIF"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u52a8\u56fe"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Receive voice message"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8bed\u97f3\u6d88\u606f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Send voice message"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bed\u97f3\u6d88\u606f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forward text"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u672c"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forward the picture"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u7247"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forward graphic link"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u6587\u94fe\u63a5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forward audio"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u97f3\u9891"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forward the video"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u89c6\u9891"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forward file"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forward GIF"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u52a8\u56fe"),(0,r.yg)("td",{parentName:"tr",align:null},"\u274c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Forwarding applet"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5c0f\u7a0b\u5e8f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Group")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"<\u7fa4\u7ec4>")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Create group chat"),(0,r.yg)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7fa4\u804a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Set group announcement"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7fa4\u516c\u544a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Get group announcement"),(0,r.yg)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7fa4\u516c\u544a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Group QR Code"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7fa4\u4e8c\u7ef4\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pull people into the group"),(0,r.yg)("td",{parentName:"tr",align:null},"\u62c9\u4eba\u8fdb\u7fa4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kick out of the group"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8e22\u4eba\u51fa\u7fa4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Exit group chat"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9000\u51fa\u7fa4\u804a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Change group name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6539\u7fa4\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Group entry event"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5165\u7fa4\u4e8b\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Outliers"),(0,r.yg)("td",{parentName:"tr",align:null},"\u79bb\u7fa4\u4e8b\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Group name change event"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0\u53d8\u66f4\u4e8b\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@\u7fa4\u5458"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Group list"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7fa4\u5217\u8868"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Group member list"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u5217\u8868"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Group details"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7fa4\u8be6\u60c5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Contact")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"<\u8054\u7cfb\u4eba>")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Modification notes"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Add friends"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pass friends automatically"),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u901a\u8fc7\u597d\u53cb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Add friends"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Friends list"),(0,r.yg)("td",{parentName:"tr",align:null},"\u597d\u53cb\u5217\u8868"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Friends details"),(0,r.yg)("td",{parentName:"tr",align:null},"\u597d\u53cb\u8be6\u60c5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Other")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"<\u5176\u4ed6>")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Log in to WeChat"),(0,r.yg)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5fae\u4fe1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Scan code status"),(0,r.yg)("td",{parentName:"tr",align:null},"\u626b\u7801\u72b6\u6001"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Exit WeChat"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9000\u51fa\u5fae\u4fe1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Dependency Agreement"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u534f\u8bae"),(0,r.yg)("td",{parentName:"tr",align:null},"iPad")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("admonition",{title:"TOKEN required",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"PadLocal is a Wechaty Puppet Provider which consumes Wechaty Puppet Service."),(0,r.yg)("p",{parentName:"admonition"},"Learn about ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/puppet-services/padlocal"},"how to get a PadLocal TOKEN"))),(0,r.yg)(l.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}\nnpm start\n"))),(0,r.yg)(i.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}\nnpm start\n"))),(0,r.yg)(i.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nset WECHATY_PUPPET=wechaty-puppet-padlocal\nset WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}\nnpm start\n")))),(0,r.yg)("h2",{id:"history"},"History"),(0,r.yg)("p",null,"In 2019 to 2020, the padlocal development team started making community-related products, and also started using Wechaty. Gradually their recognition and trust with Wechaty and the entire community was built up."),(0,r.yg)("p",null,'When the developer of Padlocal was working on a crawler system a few years ago, he came into contact with Wechaty. This project needed to regularly push the status information of the crawler and actively query related content crawled. At that time, there was a very popular saying: "Dialogue is a service", so he wondered whether these functions can be realized through WeChat? With the help of Wechaty, all functions were quickly realized, and the final effect was also very good.'),(0,r.yg)("h3",{id:"padlocal-wechaty-puppet-service-provider"},"PadLocal: Wechaty puppet service provider"),(0,r.yg)("p",null,"The puppet in the community was not perfect at that time. There were some gaps in the process of using it. Moreover, the life cycle of puppet is not particularly stable, and it may not be maintained after a period of time. They were worried that this uncertainty would affect their business, so they had the idea of \u200b\u200bdeveloping a puppet themselves."),(0,r.yg)("p",null,"So unpacking from the App, using IDA to decompile WeChat, started a long reverse road. Before doing this, the team expected this process to be difficult and encounter all kinds of difficult roadblocks, but never expected it to be so difficult. The initial stage was quite pleasant, because we could easily see our growth every step of the way, and every time we fought a monster, we felt that we had risen to a level. But on going deeper, a lot of really hard roadblocks turned up. They even considered \u200b\u200bgiving up, but they were not reconciled, and persevered. Here are a few moments of those hardships:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Handling code obfuscation")," : WeChat will obfuscate sensitive code. For code obfuscation, it is recommended that to refer to ollvm. Code obfuscation may have these several methods:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Control flow flattening"),(0,r.yg)("li",{parentName:"ol"},"Fake control flow"),(0,r.yg)("li",{parentName:"ol"},"Instruction replacement.")),(0,r.yg)("p",{parentName:"li"},'Quarkslab\'s article "Deobfuscation: recovering an OLLVM-protected program" also introduces a little deobfuscation method, but the examples mentioned in the article are only insignificant compared to those encountered in WeChat. For example, a certain function of WeChat has more than 7W lines after obfuscation, and it can take a whole day to decompile with IDA. By slowly disclosing these codes every day, many rules have been summarized. So a small tool was written to solve the obfuscation, and through continuous attempts and corrections, the code was finally unobfuscated.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"0305 algorithm")," : WeChat itself performs strict verification on the client, including information such as device environment and device fingerprints. That is to say, using some tools mentioned on the Internet to modify the function of WeChat, it is actually easy to be recognized by WeChat, and it may be a matter of time before the account is blocked. Some encryption and decryption and signature verification mechanisms are needed here, and the 0305 algorithm is one of the more difficult ones. First of all, the code itself has been obfuscated, and secondly, even if it is unobfuscated, it is difficult to see its logic, such as the specific algorithm used, encryption, decryption, and signature verification process. So it can only be explored slowly, the changes in the data have to be constantly observed at each step, and possible patterns had to be explored. In the end, after a lot of attempts, the correct algorithm and process were hit."))),(0,r.yg)("p",null,"After experiencing several difficulties and successfully solving them, the team had a lot of confidence. Even after encountering moments of frustration, the team believed that the challenge could be completed. The journey was one step at a time."),(0,r.yg)("p",null,'In the end, fully implemented puppet called PadLocal was developed. There were a few reasons why the name was decided to be "PadLocal". The next section will explain the overall design of the puppet and how it differs from other puppets. The biggest features of PadLocal are:'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Managing account status"),(0,r.yg)("li",{parentName:"ul"},"Communication with WeChatServer")),(0,r.yg)("p",null,"When designing puppet, firstly investigated other puppets in the community were investigated and their implementation principles were studied in great detail. It was observed that most other puppet design ideas were like this: the puppet server manages and maintains the status of the hosting account. All requests are completed through the link puppet -> puppet server -> WeChatServer. In the message push part, a long connection is established between puppet and puppet server, and a corresponding long connection is also established between puppet server and WeChatServer. When a new message is pushed, it reaches the puppet end through the link WeChatServer -> puppet server -> puppet. In this design, the puppet server acts as a stateful proxy, and all traffic is forwarded by the server. In our opinion, such a design may have several potential disadvantages:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Because the puppet server ultimately communicates with WeChatServer, if multiple accounts are hosted on a puppet server, and no proxy policy is configured for each account, then these accounts will share the IP of the puppet server. From the perspective of risk control, risks are prone to arise. Moreover, once some of the accounts have a relatively high risk level, it is easy to pollute other accounts in the same IP pool and harm the innocent."),(0,r.yg)("li",{parentName:"ol"},"All traffic is forwarded through the puppet server, which puts a lot of pressure on its bandwidth, especially when a large number of multimedia resources such as pictures and videos are generated in the hosting account."),(0,r.yg)("li",{parentName:"ol"},"Since the puppet server maintains the status of the hosting account, the puppet server is stateful. From the perspective of system architecture, stateful servers have considerable challenges in terms of system stability, availability, and capacity planning. If some servers in the cluster are down, and the design of the standby switch mechanism is not perfect, some accounts are likely to be in an unavailable state."),(0,r.yg)("li",{parentName:"ol"},"In order to ensure better usability and experience of puppet, the puppet server usually caches (not necessarily permanently saves) certain data (such as chat data). In other words, the server inevitably needs to touch the business data of the hosting account. This requires puppet providers to maintain extremely high industry self-discipline and ensure the security of customer data through adequate mechanisms.")),(0,r.yg)("p",null,"Based on the above considerations, all traffic forwarding work was put into the puppet, which is the source of Local in PadLocal. Two-way communication mechanism of GRPC was used to make puppet a proxy and forward all traffic to WeChatServer through puppet. At the same time, puppet maintains a long connection with WeChatServer. The benefits of this are as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The IP used for the communication between the hosting account and WeChatServer is the IP of the puppet end, and there is no risk of sharing the IP for different accounts."),(0,r.yg)("li",{parentName:"ol"},"The flow of downloading multimedia resources such as pictures and videos does not need to go through the PadLocal server. And without going through the server, the efficiency is higher."),(0,r.yg)("li",{parentName:"ol"},"The account status maintenance is done on the puppet side, so the PadLocal server can be designed as stateless. It will naturally be much simpler to deal with issues such as expansion, simple is beautiful.\nPadLocal server will not save any business data, and there is no risk of data security.")),(0,r.yg)("h3",{id:"topology"},"Topology"),(0,r.yg)("p",null,"The topology diagram of the overall architecture is as follows:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Topology diagram",src:a(42692).A,width:"926",height:"444"})),(0,r.yg)("p",null,"By implementing a puppet, the team gained a lot of things ourselves. They now have a more in-depth understanding of Wechaty, and can understand the original intention of the designer and the trade-offs among them. The fact that Wechaty is so easy to use is the result of careful design. Secondly, creating a Wechaty puppet is a very challenging thing, ofcourse it is full of accomplishment to be able to complete such a thing. Furthermore, from an internal perspective, a more in-depth and comprehensive understanding of the WeChat terminal Operating mechanism and design ideas can be had. As a national-level communication software, WeChat's design is excellent. Various mechanisms and design concepts can fully serve as industry standards. It is worthy of being the absolute king in this field."),(0,r.yg)("p",null,"The development team released the PadLocal puppet to the outside world, hoping to help everyone realize various ideas in the WeChat ecosystem, and at the same time help the WeChat ecosystem to develop more abundantly and healthily. For future plans, they will continue to actively maintain this puppet with the iteration of the WeChat version."),(0,r.yg)("p",null,'PadLocal is currently in the beta testing stage, and there are still some minor issues that need to be resolved. More developers are expected to participate and let this puppet move to the next more mature stage. There is a  reward mechanism in place to thank the partners who have contributed to PadLocal, and the specific rules are still being negotiated. At present, Token is gradually opened to everyone in the form of "application + review". If you are interested, please contact the administrator classmates and explain what kind of creativity you achieve through PadLocal. We are also preparing more detailed documents and guidelines, so stay tuned.'),(0,r.yg)("h2",{id:"maintainers"},"Maintainers"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/padlocal"},"@padlocal"))),(0,r.yg)("h2",{id:"blogs"},"Blogs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/"},"New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020"))))}y.isMDXComponent=!0},42692:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/padlocal-topological-graph-6cc38db7c6aae0bfd700e4ca396186de.webp"}}]);