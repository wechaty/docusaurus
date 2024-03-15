"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7834],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,g=u["".concat(l,".").concat(h)]||u[h]||y[h]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},40332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const i={title:"Wechaty Breaking Changes",sidebar_label:"Breaking Changes"},o=void 0,c={unversionedId:"references/breaking-changes",id:"references/breaking-changes",title:"Wechaty Breaking Changes",description:"This document outlines when various pieces of Wechaty will be removed or altered",source:"@site/docs/references/breaking-changes.mdx",sourceDirName:"references",slug:"/references/breaking-changes",permalink:"/zh/docs/references/breaking-changes",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/references/breaking-changes.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1636369301,formattedLastUpdatedAt:"2021\u5e7411\u67088\u65e5",frontMatter:{title:"Wechaty Breaking Changes",sidebar_label:"Breaking Changes"},sidebar:"docs",previous:{title:"Gateway",permalink:"/zh/docs/specs/gateway"},next:{title:"Overview",permalink:"/zh/docs/explanations/"}},l={},s=[{value:"Deprecation Timeline",id:"deprecation-timeline",level:2},{value:"2022",id:"2022",level:2},{value:"Dec 31, 2022",id:"dec-31-2022",level:3},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"2021",id:"2021",level:3},{value:"Octorber, 2021",id:"octorber-2021",level:4},{value:"September, 2021",id:"september-2021",level:4},{value:"2020",id:"2020",level:3}],p={toc:s},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This document outlines when various pieces of Wechaty will be removed or altered\nin a backward incompatible way, following their deprecation.\nMore details about each item can often be found in the release notes of two versions prior."),(0,a.yg)("h2",{id:"deprecation-timeline"},"Deprecation Timeline"),(0,a.yg)("p",null,"We clean the code after the end of the year, so it is not possible to see the exact date of deprecation."),(0,a.yg)("h2",{id:"2022"},"2022"),(0,a.yg)("h3",{id:"dec-31-2022"},"Dec 31, 2022"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-service/issues/160"},"wechaty/puppet-service#160")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-service/issues/154"},"wechaty/puppet-service#154"))),(0,a.yg)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,a.yg)("h3",{id:"2021"},"2021"),(0,a.yg)("p",null,"Wechaty v1.x is not compatible with Wechaty v0.x modules. (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/2294#issuecomment-962776327"},"how to match versions"),")"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"v1.x: ",(0,a.yg)("inlineCode",{parentName:"li"},"wechaty@1.x")," needs ",(0,a.yg)("inlineCode",{parentName:"li"},"wechaty-*@1.x")),(0,a.yg)("li",{parentName:"ol"},"v0.x: ",(0,a.yg)("inlineCode",{parentName:"li"},"wechaty@0.x")," needs ",(0,a.yg)("inlineCode",{parentName:"li"},"wechaty-*@0.x"))),(0,a.yg)("h4",{id:"octorber-2021"},"Octorber, 2021"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/wechaty/puppet/issues/164"},"wechaty/puppet#164 Wechaty Puppet API v1.0 Adaptions")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-service/issues/160"},"wechaty/puppet-service#160 Enable TLS for all Puppet Service Clients of Wechaty Ecosystem"))),(0,a.yg)("h4",{id:"september-2021"},"September, 2021"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-service/issues/154"},"wechaty/puppet-service#154 Puppet Service Discovery Schema: ip -> host"))),(0,a.yg)("h3",{id:"2020"},"2020"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"to be collected...")))}y.isMDXComponent=!0}}]);