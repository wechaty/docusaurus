"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2331],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=r,g=h["".concat(u,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),s=a(56347),u=a(57485),l=a(31682),c=a(89466);function h(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??h(a);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,l]=g({queryString:a,groupId:n}),[h,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=u??h;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),m(e)}),[l,m,o]),tabValues:o}}var y=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=l[a].value;n!==s&&(h(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},i,{className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(f,(0,n.A)({},e,t)),r.createElement(w,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},93951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=a(58168),r=(a(96540),a(15680)),o=a(11470),i=a(19365);const s={title:"Troubleshooting"},u=void 0,l={unversionedId:"explanations/troubleshooting",id:"explanations/troubleshooting",title:"Troubleshooting",description:"The Troubleshooting section discusses the most common problems that you will encounter while creating a chatbot using Wechaty, contributing to Wechaty codebase, contributing to Wechaty documentation, or developing Wechaty puppet and how to fix them.",source:"@site/docs/explanations/troubleshooting.mdx",sourceDirName:"explanations",slug:"/explanations/troubleshooting",permalink:"/zh/docs/explanations/troubleshooting",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/explanations/troubleshooting.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631298410,formattedLastUpdatedAt:"2021\u5e749\u670810\u65e5",frontMatter:{title:"Troubleshooting"},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh/docs/explanations/faq"},next:{title:"Style Guide",permalink:"/zh/docs/docusaurus/doc1"}},c={},h=[{value:"Chatbot developers",id:"chatbot-developers",level:2},{value:"I cannot log in with my Wechat account",id:"i-cannot-log-in-with-my-wechat-account",level:3},{value:"Nothing happens when I dispatch an action when using Wechaty with Redux",id:"nothing-happens-when-i-dispatch-an-action-when-using-wechaty-with-redux",level:3},{value:"Ding dong bot displays error after scanning QR code",id:"ding-dong-bot-displays-error-after-scanning-qr-code",level:3},{value:"Wechaty documentation",id:"wechaty-documentation",level:2},{value:"I am getting <code>Failed to exec pre-push hook script</code> error when I try to push my changes to GitHub",id:"i-am-getting-failed-to-exec-pre-push-hook-script-error-when-i-try-to-push-my-changes-to-github",level:3},{value:"I am submitting a blog post for publication but the tests are failing",id:"i-am-submitting-a-blog-post-for-publication-but-the-tests-are-failing",level:3},{value:"<code>npm run build</code> or <code>npx docusaurus start</code> throws an error",id:"npm-run-build-or-npx-docusaurus-start-throws-an-error",level:3},{value:"My problem has not been discussed here",id:"my-problem-has-not-been-discussed-here",level:2}],p={toc:h},d="wrapper";function g(e){let{components:t,...s}=e;return(0,r.yg)(d,(0,n.A)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Troubleshooting section discusses the most common problems that you will encounter while creating a chatbot using Wechaty, contributing to Wechaty codebase, contributing to Wechaty documentation, or developing Wechaty puppet and how to fix them."),(0,r.yg)("h2",{id:"chatbot-developers"},"Chatbot developers"),(0,r.yg)("h3",{id:"i-cannot-log-in-with-my-wechat-account"},"I cannot log in with my Wechat account"),(0,r.yg)("p",null,"Wechat accounts registered after 2017 cannot log in via Web API because this is a limitation. Click ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/872"},"this issue")," for more information.\nHowever, Wechaty supports protocols other than Web API, such as Pad. Learn more about it ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/1296"},"in this issue"),"."),(0,r.yg)("h3",{id:"nothing-happens-when-i-dispatch-an-action-when-using-wechaty-with-redux"},"Nothing happens when I dispatch an action when using Wechaty with Redux"),(0,r.yg)("p",null,"Redux is a state management library you can use with Wechaty. It has the concept of ",(0,r.yg)("a",{parentName:"p",href:"https://redux.js.org/faq/immutable-data"},"immutability"),". Sometimes, you can dispatch an action that correctly updates the state in the redux store but your view does not update. One of the reasons for that happening is because you are mutating the existing state instead of returning the new state. Therefore never mutate state when using Redux with Wechaty even if it is tempting to do so."),(0,r.yg)("h3",{id:"ding-dong-bot-displays-error-after-scanning-qr-code"},"Ding dong bot displays error after scanning QR code"),(0,r.yg)("p",null,"When running the ding dong bot using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started repository"),", on ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/quick-start/running-on-gitpod"},"Gitpod")," or ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/quick-start/running-on-google-cloud-shell"},"Google cloud shell"),", the default Instant Messaging platform is ",(0,r.yg)("a",{parentName:"p",href:"https://www.wechat.com/en/"},"Wechat"),". Scanning QR codes for other Instant messaging platforms will not work unless you explicitly set the value of the",(0,r.yg)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable to the puppet service provider name as described in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#readme"},"wechaty-getting-started README page"),"."),(0,r.yg)("h2",{id:"wechaty-documentation"},"Wechaty documentation"),(0,r.yg)("h3",{id:"i-am-getting-failed-to-exec-pre-push-hook-script-error-when-i-try-to-push-my-changes-to-github"},"I am getting ",(0,r.yg)("inlineCode",{parentName:"h3"},"Failed to exec pre-push hook script")," error when I try to push my changes to GitHub"),(0,r.yg)("p",null,"There is a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Chatie/git-scripts#readme"},"pre-push hook")," that has been configured to run ",(0,r.yg)("inlineCode",{parentName:"p"},"npm run lint")," and then ",(0,r.yg)("inlineCode",{parentName:"p"},"npm version patch")," before ",(0,r.yg)("inlineCode",{parentName:"p"},"git push")," for better code quality and version management."),(0,r.yg)("p",null,"If you see ",(0,r.yg)("inlineCode",{parentName:"p"},"Failed to exec pre-push hook script")," message with ",(0,r.yg)("inlineCode",{parentName:"p"},"Git push succeed")," message like in the image below, then you can ignore the error message. Your changes have been successfully pushed to GitHub."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"pre-push error",src:a(39367).A,width:"712",height:"394"})),(0,r.yg)("p",null,"On the other hand, you may encounter ",(0,r.yg)("inlineCode",{parentName:"p"},"Failed to exec pre-push hook script")," error without ",(0,r.yg)("inlineCode",{parentName:"p"},"Git push succeed")," message. If it is your first time pushing the current branch to remote or you have not set the current local branch to track the remote, try temporarily disabling the ",(0,r.yg)("inlineCode",{parentName:"p"},"pre-push")," hook by prepending ",(0,r.yg)("inlineCode",{parentName:"p"},"NO_HOOK=1")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"git push")," command and then push with ",(0,r.yg)("inlineCode",{parentName:"p"},"-u")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"--set-upstream")," flag so that the local branch will start tracking the remote."),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"NO_HOOK=1 git push -u remote-repository branch-name\n"))),(0,r.yg)(i.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"NO_HOOK=1 git push -u remote-repository branch-name\n"))),(0,r.yg)(i.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"set NO_HOOK=1  git push -u remote-repository branch-name\n")))),(0,r.yg)("p",null,"You can also push with ",(0,r.yg)("inlineCode",{parentName:"p"},"--no-verify")," flag instead of prepending ",(0,r.yg)("inlineCode",{parentName:"p"},"NO_HOOK=1"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"git push -u remote-repository branch-name --no-verify\n")),(0,r.yg)("p",null,"If you used the above command successfully and the local branch is tracking the remote, you can run ",(0,r.yg)("inlineCode",{parentName:"p"},"git push")," the next time you push your changes to GitHub without prepending ",(0,r.yg)("inlineCode",{parentName:"p"},"NO_HOOK=1")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"git push"),". Your changes will be successfully pushed to GitHub."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"git push\n")),(0,r.yg)("h3",{id:"i-am-submitting-a-blog-post-for-publication-but-the-tests-are-failing"},"I am submitting a blog post for publication but the tests are failing"),(0,r.yg)("p",null,"We have a set of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#readme"},"guidelines")," that you must follow when writing a blog post for publication. If the tests are failing after creating a pull request, it is most likely because you missed something or did not follow the required writing style. We recommed that you read through the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#how-to-post-a-blog"},"How to post a blog")," section of the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org#readme"},"wechaty.js.org repository README")," one more time."),(0,r.yg)("p",null,"You can also reach out to us on the ",(0,r.yg)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Wechaty Gitter channel")," if you fail to make the tests pass. We shall be happy to help."),(0,r.yg)("h3",{id:"npm-run-build-or-npx-docusaurus-start-throws-an-error"},(0,r.yg)("inlineCode",{parentName:"h3"},"npm run build")," or ",(0,r.yg)("inlineCode",{parentName:"h3"},"npx docusaurus start")," throws an error"),(0,r.yg)("p",null,"You might have used docusaurus before and therefore used certain commands for starting the development server, triggering build process and deploying docusaurus project among others. For the wechaty documentation, check the ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json")," file for all the scripts you can run."),(0,r.yg)("h2",{id:"my-problem-has-not-been-discussed-here"},"My problem has not been discussed here"),(0,r.yg)("p",null,"If your problem is not covered here, you can chat with us on ",(0,r.yg)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Wechaty Gitter")," or you may create an issue on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues"},"Wechaty issues"),". Please update this page once you have found a solution. Someone else might face the same problem in the future."))}g.isMDXComponent=!0},39367:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/troubleshooting-b023e5d7ccd82632968f749125680b0d.webp"}}]);