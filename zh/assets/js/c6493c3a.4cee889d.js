"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5287],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=c(a),g=n,d=y["".concat(l,".").concat(g)]||y[g]||u[g]||i;return a?r.createElement(d,o(o({ref:t},s),{},{components:a})):r.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[y]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},52457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={slug:"/specs/gateway",title:"Wechaty Puppet Service Token Gateway",sidebar_label:"Gateway"},o=void 0,p={unversionedId:"specs/gateway",id:"specs/gateway",title:"Wechaty Puppet Service Token Gateway",description:"What is Wechaty Puppet Service Token Gateway?",source:"@site/docs/specs/gateway.mdx",sourceDirName:"specs",slug:"/specs/gateway",permalink:"/zh/docs/specs/gateway",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/specs/gateway.mdx",tags:[],version:"current",lastUpdatedBy:"Yuan Gao",lastUpdatedAt:1672114905,formattedLastUpdatedAt:"2022\u5e7412\u670827\u65e5",frontMatter:{slug:"/specs/gateway",title:"Wechaty Puppet Service Token Gateway",sidebar_label:"Gateway"},sidebar:"docs",previous:{title:"Token",permalink:"/zh/docs/specs/token"},next:{title:"Breaking Changes",permalink:"/zh/docs/references/breaking-changes"}},l={},c=[{value:"What is Wechaty Puppet Service Token Gateway?",id:"what-is-wechaty-puppet-service-token-gateway",level:2},{value:"Starting Wechaty Puppet Servcie Token Gateway",id:"starting-wechaty-puppet-servcie-token-gateway",level:2},{value:"Service Discovery",id:"service-discovery",level:2}],s={toc:c},y="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"what-is-wechaty-puppet-service-token-gateway"},"What is Wechaty Puppet Service Token Gateway?"),(0,n.yg)("p",null,"Wechaty Puppet Service Token Gateway is a gateway for converting the Wechaty Puppet Provider to a Wechaty Puppet Service."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Environment variable"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Usage"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"WECHATY_PUPPET"),(0,n.yg)("td",{parentName:"tr",align:null},"defines the Wechaty Puppet Provider NPM name and its parameters"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'bash export WECHATY_PUPPET=wechaty-puppet-service export WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"WECHATY_TOKEN"),(0,n.yg)("td",{parentName:"tr",align:null},"intializes the unique Wechaty Puppet Service Token,that is generating  using the ",(0,n.yg)("a",{parentName:"td",href:"https://www.uuidgenerator.net/version4"},"UUID Generator"),"."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"bash export WECHATY_TOKEN='2fdb00a5-5c31-4018-84ac-c64e5f995057'"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"WECHATY_PUPPET_SERVER_PORT"),(0,n.yg)("td",{parentName:"tr",align:null},"sets up the  free server port for the Wechaty Puppet Service,also used for docker port mapping"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"bash export WECHATY_PUPPET_SERVER_PORT=8788 // any available port can be visited from internet"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"WECHATY_LOG"),(0,n.yg)("td",{parentName:"tr",align:null},"sets up the log mode for the service. Usually initialize the variable to ",(0,n.yg)("inlineCode",{parentName:"td"},"Verbose")," mode as this gives more debug log messages. ",(0,n.yg)("inlineCode",{parentName:"td"},"verbose")," mode is an option available in many OS that gives details on what the computer is doing,which drivers and software are being installed or loaded and many more."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'bash export WECHATY_LOG="verbose"'))))),(0,n.yg)("h2",{id:"starting-wechaty-puppet-servcie-token-gateway"},"Starting Wechaty Puppet Servcie Token Gateway"),(0,n.yg)("p",null,"After the docker image has been created, use a docker command  to start the Wechaty Puppet Service Token Gateway with the below configuration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-docker",metastring:"run -ti --rm \\",run:!0,"-ti":!0,"--rm":!0,"\\":!0},'  \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  \\\n  -e WECHATY_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  \\\n  -e WECHATY_LOG \\\n  \\\n  -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER \\\n  \\\n  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT\u201d \\\n  wechaty/wechaty:0.56\n')),(0,n.yg)("h2",{id:"service-discovery"},"Service Discovery"),(0,n.yg)("p",null,"Use the command given below to check the running of the Wechaty Puppet Service."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n")),(0,n.yg)("p",null,"Replace ${WECHATY_TOKEN} to your real token in the above configuration"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u2705 If you get an HTTP/200 response with a JSON object body that includes your ",(0,n.yg)("inlineCode",{parentName:"li"},"ip")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"port"),", then you are all set."),(0,n.yg)("li",{parentName:"ul"},"\u274c If you get an HTTP/404 response, your Puppet Service Gateway has some issues and needs to be troubleshooted.")))}u.isMDXComponent=!0}}]);