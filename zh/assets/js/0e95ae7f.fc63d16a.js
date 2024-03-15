"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2001],{15680:(e,t,a)=>{a.d(t,{xA:()=>i,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),g=s(a),y=n,h=g["".concat(u,".").concat(y)]||g[y]||p[y]||l;return a?r.createElement(h,c(c({ref:t},i),{},{components:a})):r.createElement(h,c({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[g]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(96540),n=a(20053);const l={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:a,className:c}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,c),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>N});var r=a(58168),n=a(96540),l=a(20053),c=a(23104),o=a(56347),u=a(57485),s=a(31682),i=a(89466);function g(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function y(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[c,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:a,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),d=(()=>{const e=u??g;return y({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{d&&o(d)}),[d]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var d=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:g}=(0,c.a_)(),p=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==o&&(g(t),u(r))},y=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:c}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>i.push(e),onKeyDown:y,onClick:p},c,{className:(0,l.A)("tabs__item",b.tabItem,c?.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=m(e);return n.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},n.createElement(f,(0,r.A)({},e,t)),n.createElement(w,(0,r.A)({},e,t)))}function N(e){const t=(0,d.A)();return n.createElement(v,(0,r.A)({key:String(t)},e))}},1190:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=a(58168),n=(a(96540),a(15680)),l=a(11470),c=a(19365);const o={},u=void 0,s={unversionedId:"polyglot/transclusions/getting-started-templates",id:"polyglot/transclusions/getting-started-templates",title:"getting-started-templates",description:"<Tabs",source:"@site/docs/polyglot/transclusions/getting-started-templates.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/getting-started-templates",permalink:"/zh/docs/polyglot/transclusions/getting-started-templates",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/transclusions/getting-started-templates.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616054254,formattedLastUpdatedAt:"2021\u5e743\u670818\u65e5",frontMatter:{}},i={},g=[{value:"Install &amp; Start",id:"install--start",level:3}],p={toc:g},y="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(l.A,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,n.yg)(c.A,{value:"openapi",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"# git clone git@github.com:wechaty/openapi-wechaty-getting-started.git\n# cd openapi-wechaty-getting-started\n# To be added\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("del",{parentName:"p"},"GitHub: ",(0,n.yg)("a",{parentName:"del",href:"https://github.com/wechaty/openapi-wechaty-getting-started"},"https://github.com/wechaty/openapi-wechaty-getting-started"))))),(0,n.yg)(c.A,{value:"ts",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")))),(0,n.yg)(c.A,{value:"js",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")))),(0,n.yg)(c.A,{value:"py",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/python-wechaty-getting-started.git\ncd python-wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/python-wechaty-getting-started"},"https://github.com/wechaty/python-wechaty-getting-started")))),(0,n.yg)(c.A,{value:"go",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/go-wechaty-getting-started.git\ncd go-wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty-getting-started"},"https://github.com/wechaty/go-wechaty-getting-started")))),(0,n.yg)(c.A,{value:"java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/java-wechaty-getting-started.git\ncd java-wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/java-wechaty-getting-started"},"https://github.com/wechaty/java-wechaty-getting-started")))),(0,n.yg)(c.A,{value:"php",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/php-wechaty-getting-started.git\ncd php-wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty-getting-started"},"https://github.com/wechaty/php-wechaty-getting-started")))),(0,n.yg)(c.A,{value:"scala",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/scala-wechaty-getting-started.git\ncd scala-wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/scala-wechaty-getting-started"},"https://github.com/wechaty/scala-wechaty-getting-started")))),(0,n.yg)(c.A,{value:"csharp",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/csharp-wechaty-getting-started.git\ncd csharp-wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/csharp-wechaty-getting-started"},"https://github.com/wechaty/csharp-wechaty-getting-started")))),(0,n.yg)(c.A,{value:"rust",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/rust-wechaty-getting-started.git\ncd rust-wechaty-getting-started\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/wechaty/rust-wechaty-getting-started"},"https://github.com/wechaty/rust-wechaty-getting-started"))))),(0,n.yg)("h3",{id:"install--start"},"Install & Start"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"make install\nmake bot\n")))}h.isMDXComponent=!0}}]);