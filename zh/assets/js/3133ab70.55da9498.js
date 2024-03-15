"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3789,5816,8433],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(s,".").concat(d)]||c[d]||y[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),p=a(31682),u=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function y(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=y(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=g({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),m=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var m=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),y=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:y},l,{className:(0,o.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},r.createElement(T,(0,n.A)({},e,t)),r.createElement(w,(0,n.A)({},e,t)))}function f(e){const t=(0,m.A)();return r.createElement(E,(0,n.A)({key:String(t)},e))}},91378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(11470),l=a(19365),i=a(76170),s=a(41715);const p={title:"Puppet Service: DIY"},u=void 0,c={unversionedId:"puppet-services/diy",id:"puppet-services/diy",title:"Puppet Service: DIY",description:"Wechaty Puppet Service DIY",source:"@site/docs/puppet-services/diy.md",sourceDirName:"puppet-services",slug:"/puppet-services/diy",permalink:"/zh/docs/puppet-services/diy",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/diy.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1631075354,formattedLastUpdatedAt:"2021\u5e749\u67088\u65e5",frontMatter:{title:"Puppet Service: DIY"},sidebar:"docs",previous:{title:"Compatibility",permalink:"/zh/docs/puppet-services/compatibility"},next:{title:"Puppet Services: FAQ",permalink:"/zh/docs/puppet-services/faq"}},y={},d=[{value:"Steps",id:"steps",level:2},{value:"1. Pull the latest Wechaty Docker Image",id:"1-pull-the-latest-wechaty-docker-image",level:3},{value:"2. Config Wechaty Puppet Provider",id:"2-config-wechaty-puppet-provider",level:3},{value:"3. Create your own Wechaty Puppet Service TOKEN",id:"3-create-your-own-wechaty-puppet-service-token",level:3},{value:"4. Set Wechaty Puppet Service port",id:"4-set-wechaty-puppet-service-port",level:3},{value:"5. Set Wechaty Log Level",id:"5-set-wechaty-log-level",level:3},{value:"6. Config TLS(SSL) for Wechaty Puppet Service (optional)",id:"6-config-tlsssl-for-wechaty-puppet-service-optional",level:3},{value:"7. Start your Wechaty Token Gate Server",id:"7-start-your-wechaty-token-gate-server",level:3},{value:"8. Check your TOKEN service",id:"8-check-your-token-service",level:3},{value:"Using <code>wechaty-token</code> CLI",id:"using-wechaty-token-cli",level:4},{value:"\ud83c\udf89 Congratulations! You are all set",id:"-congratulations-you-are-all-set",level:3},{value:"All in One Command",id:"all-in-one-command",level:2},{value:"Blogs",id:"blogs",level:2},{value:"History",id:"history",level:2},{value:"Support",id:"support",level:2}],g={toc:d},h="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(h,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/zh/docs/puppet-services/diy"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-DIY-blue",alt:"Wechaty Puppet Service DIY"}))),(0,r.yg)("admonition",{title:"Do It Yourself",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You can make a Wechaty Puppet Service easily from any Wechaty Puppet Providers.")),(0,r.yg)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("p",null,"We have a easy to use docker image which works out-of-the-box."),(0,r.yg)("h3",{id:"1-pull-the-latest-wechaty-docker-image"},"1. Pull the latest Wechaty Docker Image"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"docker pull wechaty/wechaty\n")),(0,r.yg)("h3",{id:"2-config-wechaty-puppet-provider"},"2. Config Wechaty Puppet Provider"),(0,r.yg)("p",null,"We need to choice which ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/puppet-providers/"},"Wechaty Puppet Provider")," we want to use by setting the ",(0,r.yg)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable."),(0,r.yg)("p",null,"For example, you can choose ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/puppet-providers/wechat"},"wechaty-puppet-wechat")," by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"WECHATY_PUPPET=wechaty-puppet-wechat"),"."),(0,r.yg)("admonition",{title:"Wechaty Puppet Providers",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Learn all ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/puppet-providers/"},"Wechaty Puppet Providers")),(0,r.yg)("p",{parentName:"admonition"},"You need to set all environment variables which requires from a specific provider."),(0,r.yg)("p",{parentName:"admonition"},"For example, an additional token will be required by ",(0,r.yg)("inlineCode",{parentName:"p"},"PadLocal"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal${TOKEN}"))),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-wechat"\n'))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-wechat"\n'))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET="wechaty-puppet-wechat"\n')))),(0,r.yg)("h3",{id:"3-create-your-own-wechaty-puppet-service-token"},"3. Create your own Wechaty Puppet Service TOKEN"),(0,r.yg)("p",null,"In order to provide ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/specs/service"},"Wechaty Puppet Service"),", you need to specify a ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/specs/token"},"TOKEN")," for authorization."),(0,r.yg)("p",null,"You can ",(0,r.yg)("a",{parentName:"p",href:"https://www.uuidgenerator.net/version4"},"Generate a new UUIDv4")," online, use this new UUIDv4 as your token."),(0,r.yg)("admonition",{title:"TOKEN uniqueness",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Your new token ",(0,r.yg)("strong",{parentName:"p"},"MUST")," different to any existing tokens in our system. (or they will conflict!)")),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'# TODO: use script to get UUIDv4 automatically like Linux/Mac\nset WECHATY_TOKEN="__UUIDv4__"\n')))),(0,r.yg)("h3",{id:"4-set-wechaty-puppet-service-port"},"4. Set Wechaty Puppet Service port"),(0,r.yg)("p",null,"The port for your ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/specs/service"},"Wechaty Puppet Service")," need to be specified. Make sure it's free on your server."),(0,r.yg)("admonition",{title:"port availablility",type:"note"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"The server IP must be public on the internet"),(0,r.yg)("li",{parentName:"ol"},"the port must be public accessible on the internet"))),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET_SERVER_PORT="8788"\n')))),(0,r.yg)("h3",{id:"5-set-wechaty-log-level"},"5. Set Wechaty Log Level"),(0,r.yg)("p",null,"Enable ",(0,r.yg)("inlineCode",{parentName:"p"},"verbose")," log message output for easy debugging."),(0,r.yg)("p",null,"More options are:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"silly"),": all debug messages will be outputed"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"verbose"),": recommended debug level"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"info"),": disable debug messages"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"warning"),": only warning message"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"silence"),": no log message")),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_LOG="verbose"\n')))),(0,r.yg)("h3",{id:"6-config-tlsssl-for-wechaty-puppet-service-optional"},"6. Config TLS(SSL) for Wechaty Puppet Service (optional)"),(0,r.yg)("p",null,"From ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/2231"},"Wechaty version 0.67"),", the Puppet Service will enable TLS(SSL) by default. (See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/160"},"wechaty/wechaty-puppet-service#160"),")"),(0,r.yg)("p",null,"You can enable/disable the TLS by setting environment variables to fullfil your needs."),(0,r.yg)("p",null,"For example, if you need to provide a Wechaty Puppet Service token without TLS, then you can set ",(0,r.yg)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER=true")," to disable TLS."),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nexport WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n'))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nexport WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n'))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nset WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n')))),(0,r.yg)("h3",{id:"7-start-your-wechaty-token-gate-server"},"7. Start your Wechaty Token Gate Server"),(0,r.yg)("p",null,"After finish config all the above settings, start the token gate server with the following docker command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"docker run -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n")),(0,r.yg)("admonition",{title:"privileged mode",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Privileged mode is for using host networking to simplify the docker arguments."),(0,r.yg)("p",{parentName:"admonition"},"If you want to remove the ",(0,r.yg)("inlineCode",{parentName:"p"},"--privileged"),", you need to add:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-p $WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT")," for Linux & Mac"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-p %WECHATY_PUPPET_SERVER_PORT%:%WECHATY_PUPPET_SERVER_PORT%")," for Windows"))),(0,r.yg)("h3",{id:"8-check-your-token-service"},"8. Check your TOKEN service"),(0,r.yg)("admonition",{title:"wait for token gateway getting full started",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The docker command in the previous step might need some time to getting fully started."),(0,r.yg)("p",{parentName:"admonition"},"Wait and read the docker container log messages carefully to make sure the server has been started before continue this step.")),(0,r.yg)("p",null,"Check your TOKEN availability by visiting ",(0,r.yg)("inlineCode",{parentName:"p"},"https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}")),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n# TODO: add windows version. (Pull Request is welcome!)\n")))),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Succ: ",(0,r.yg)("inlineCode",{parentName:"li"},"HTTP/200")," means you are good, the TOKEN is ready to use."),(0,r.yg)("li",{parentName:"ol"},"Fail: ",(0,r.yg)("inlineCode",{parentName:"li"},"HTTP/404")," means the TOKEN is not registered successfully.")),(0,r.yg)("p",null,"If you get ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP/404"),", then you need to check the previous steps and troubleshoot which part has problems. If you find anything need to be reported, please feel free to submit an issue at ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues"},"here")),(0,r.yg)("h4",{id:"using-wechaty-token-cli"},"Using ",(0,r.yg)("inlineCode",{parentName:"h4"},"wechaty-token")," CLI"),(0,r.yg)("p",null,"You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"wechaty-token")," CLI command to check the TOKEN status."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"$ npm install --global wechaty-token\n+ wechaty-token@0.4.3\nupdated 1 package in 2.654s\n\n$ wechaty-token --help\nwechaty-token <subcommand>\n> Wechaty utility for discovering and generating tokens\n\nwhere <subcommand> can be one of:\n\n- generate - Generate a new Wechaty Token\n- discover - Wechaty TOKEN Service Discovery\n\nFor more help, try running `wechaty-token <subcommand> --help`\n\n$ wechaty-token discover puppet_not_exist_token\nNotFound\n\n$ wechaty-token discover ${WECHATY_TOKEN}\n{ host: '1.2.3.4', port: 5678 }\n")),(0,r.yg)("p",null,"Learn more about the TOKEN from ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/specs/token"},"Wechaty Puppet Service TOKEN Specification"),"."),(0,r.yg)("h3",{id:"-congratulations-you-are-all-set"},"\ud83c\udf89 Congratulations! You are all set"),(0,r.yg)("p",null,"Your Wechaty Puppet Service will be ready to service for ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/polyglot/"},"Polyglot Wechaty"),"!"),(0,r.yg)("h2",{id:"all-in-one-command"},"All in One Command"),(0,r.yg)("p",null,"For use Wechaty Token Gateway with ease, you can copy/paste the following code (with modifications for your need) in your bash shell:"),(0,r.yg)(o.A,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"linux",mdxType:"TabItem"},(0,r.yg)(i.default,{mdxType:"TokenGatewayUnix"})),(0,r.yg)(l.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)(i.default,{mdxType:"TokenGatewayUnix"})),(0,r.yg)(l.A,{value:"windows",mdxType:"TabItem"},(0,r.yg)(s.default,{mdxType:"TokenGatewayWin32"}))),(0,r.yg)("p",null,"I hope you enjoy it!"),(0,r.yg)("h2",{id:"blogs"},"Blogs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"Python Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Biofer, Feb, 3, 2021")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},".NET Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Darren, Jan 28, 2021"))),(0,r.yg)("h2",{id:"history"},"History"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Using your Puppet PadLocal token with Python, Java, and Go Wechaty ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1985"},"wechaty/wechaty#1985")),(0,r.yg)("li",{parentName:"ol"},"How to create your own Wechaty Puppet Service Token with the Web Protocol ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1986"},"wechaty/wechaty#1986")),(0,r.yg)("li",{parentName:"ol"},"Using PadLocal Token with Polyglot Wechaty via Token Gateway ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/84"},"wechaty/puppet-services#84")),(0,r.yg)("li",{parentName:"ol"},"Wechaty is All You Need: Python, Go, and Java Translation Project ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1927"},"wechaty/wechaty#1927"))),(0,r.yg)("h2",{id:"support"},"Support"),(0,r.yg)("p",null,"You can ",(0,r.yg)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}m.isMDXComponent=!0},76170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"puppet-services/transclusions/token-gateway-unix",id:"puppet-services/transclusions/token-gateway-unix",title:"token-gateway-unix",description:"",source:"@site/docs/puppet-services/transclusions/token-gateway-unix.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/token-gateway-unix",permalink:"/zh/docs/puppet-services/transclusions/token-gateway-unix",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/transclusions/token-gateway-unix.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1624043380,formattedLastUpdatedAt:"2021\u5e746\u670818\u65e5",frontMatter:{}},s={},p=[],u={toc:p},c="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using wechaty-puppet-wechat for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n')))}y.isMDXComponent=!0},41715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"puppet-services/transclusions/token-gateway-win32",id:"puppet-services/transclusions/token-gateway-win32",title:"token-gateway-win32",description:"",source:"@site/docs/puppet-services/transclusions/token-gateway-win32.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/token-gateway-win32",permalink:"/zh/docs/puppet-services/transclusions/token-gateway-win32",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/transclusions/token-gateway-win32.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1624043380,formattedLastUpdatedAt:"2021\u5e746\u670818\u65e5",frontMatter:{}},s={},p=[],u={toc:p},c="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'#\n# Huan(202006): To be fixed for Win32\n#\n\n# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using wechaty-puppet-wechat for example\n#   replace it to fit your needs\nset WECHATY_PUPPET=wechaty-puppet-wechat\n\n# Step 3\nset WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=%WECHATY_TOKEN%"\n\n# Step 4\nset WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nset WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nset HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n')))}y.isMDXComponent=!0}}]);