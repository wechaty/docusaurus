"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2495],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),y=a,m=c["".concat(s,".").concat(y)]||c[y]||g[y]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));const o={title:"Publish blog"},i=void 0,l={unversionedId:"contributing/blog",id:"contributing/blog",title:"Publish blog",description:"Tutorials",source:"@site/docs/contributing/blog.md",sourceDirName:"contributing",slug:"/contributing/blog",permalink:"/docs/contributing/blog",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/contributing/blog.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1648826970,formattedLastUpdatedAt:"Apr 1, 2022",frontMatter:{title:"Publish blog"},sidebar:"docs",previous:{title:"Create pull requests",permalink:"/docs/contributing/pulls"},next:{title:"Write code",permalink:"/docs/contributing/coding"}},s={},u=[{value:"Tutorials",id:"tutorials",level:2},{value:"Tricks",id:"tricks",level:2},{value:"Hide A Post",id:"hide-a-post",level:3},{value:"List on https://wechaty.js.org/news/",id:"list-on-httpswechatyjsorgnews",level:3},{value:"Show Big Picture",id:"show-big-picture",level:3},{value:"Minimizing images",id:"minimizing-images",level:2},{value:"Submit Blog Post",id:"submit-blog-post",level:2},{value:"Support",id:"support",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"tutorials"},"Tutorials"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/02/how-to-publish-blog-on-wechaty/"},"\u96f6\u57fa\u7840\u5c0f\u767d\u5728Wechaty\u793e\u533a\u53d1\u8868\u81ea\u5df1\u7684\u7b2c\u4e00\u7bc7\u535a\u5ba2, @juzibot, Jul 02, 2021")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/22/how-to-publish-blog-on-wechaty/"},"\u5165\u95e8\uff1a\u5c0f\u767d\u5982\u4f55\u5728wechaty\u793e\u533a\u53d1\u5e03\u81ea\u5df1\u7684\u7b2c\u4e00\u7bc7\u535a\u5ba2\uff08\u4e00\uff09, @atorber, Apr 22, 2021"))),(0,a.yg)("h2",{id:"tricks"},"Tricks"),(0,a.yg)("h3",{id:"hide-a-post"},"Hide A Post"),(0,a.yg)("p",null,"If you do not want to list your post on the website,\nyou can add a ",(0,a.yg)("inlineCode",{parentName:"p"},"published: false")," to the front matter YAML."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"published: false\n")),(0,a.yg)("h3",{id:"list-on-httpswechatyjsorgnews"},"List on ",(0,a.yg)("a",{parentName:"h3",href:"https://wechaty.js.org/news/"},"https://wechaty.js.org/news/")),(0,a.yg)("p",null,"If a post has a tag named ",(0,a.yg)("inlineCode",{parentName:"p"},"news"),"\nthen it will be shown at ",(0,a.yg)("a",{parentName:"p",href:"https://wechaty.js.org/news/"},"https://wechaty.js.org/news/")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  - news\n")),(0,a.yg)("p",null,"All posts will be showed at ",(0,a.yg)("a",{parentName:"p",href:"https://wechaty.js.org/blog/"},"https://wechaty.js.org/blog/")),(0,a.yg)("h3",{id:"show-big-picture"},"Show Big Picture"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  - sticky\n")),(0,a.yg)("h2",{id:"minimizing-images"},"Minimizing images"),(0,a.yg)("p",null,"Optimize image compression where possible."),(0,a.yg)("p",null,"Our limitation for an image is:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"file size maximum 1MB"),(0,a.yg)("li",{parentName:"ol"},"file resolution maximum 1920x1080")),(0,a.yg)("p",null,"For image files, use ",(0,a.yg)("inlineCode",{parentName:"p"},"scripts/fit-image.sh"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"./scripts/fit-image.sh jekyll/assets/2021/03-your-blog-folder/\n")),(0,a.yg)("p",null,"This is based on ImageMagick."),(0,a.yg)("h2",{id:"submit-blog-post"},"Submit Blog Post"),(0,a.yg)("p",null,"Submit your blog by creating a Pull Request at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts"},"https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts")),(0,a.yg)("p",null,"Please make sure the CI turns green, and if the CI fails, you need to check the error messages and fix all the problems before we can continue processing it."),(0,a.yg)("h2",{id:"support"},"Support"),(0,a.yg)("p",null,"You can ",(0,a.yg)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}g.isMDXComponent=!0}}]);