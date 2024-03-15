(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9996],{15680:(e,t,r)=>{"use strict";r.d(t,{xA:()=>u,yg:()=>d});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,d=s["".concat(l,".").concat(f)]||s[f]||y[f]||a;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22948:(e,t,r)=>{"use strict";r.r(t),r.d(t,{UUIDv4:()=>w,assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>g,metadata:()=>m,toc:()=>h});var o,n=r(58168),a=(r(96540),r(15680)),i=r(59399),c=new Uint8Array(16);function l(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(c)}const p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const u=function(e){return"string"==typeof e&&p.test(e)};for(var s=[],y=0;y<256;++y)s.push((y+256).toString(16).substr(1));const f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!u(r))throw TypeError("Stringified UUID is invalid");return r};const d=function(e,t,r){var o=(e=e||{}).random||(e.rng||l)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var n=0;n<16;++n)t[r+n]=o[n];return t}return f(o)},g={title:"Wechaty Puppet Service Token",sidebar_label:"Token"},v=void 0,m={unversionedId:"specs/token",id:"specs/token",title:"Wechaty Puppet Service Token",description:"Wechaty Puppet Service Token (TOKEN), is ... (tbw)",source:"@site/docs/specs/token.md",sourceDirName:"specs",slug:"/specs/token",permalink:"/zh/docs/specs/token",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/specs/token.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1631075311,formattedLastUpdatedAt:"2021\u5e749\u67088\u65e5",frontMatter:{title:"Wechaty Puppet Service Token",sidebar_label:"Token"},sidebar:"docs",previous:{title:"Service",permalink:"/zh/docs/specs/service"},next:{title:"Gateway",permalink:"/zh/docs/specs/gateway"}},b={},h=[{value:"Format / Convensions",id:"format--convensions",level:2},{value:"Service Discovery",id:"service-discovery",level:2},{value:"Tools",id:"tools",level:2},{value:"Online UUID Generator",id:"online-uuid-generator",level:3},{value:"Wechaty Puppet Service Token Validator",id:"wechaty-puppet-service-token-validator",level:3},{value:"How to get a token",id:"how-to-get-a-token",level:2},{value:"Blogs",id:"blogs",level:2}],w=()=>{const e={token:d()};return(0,a.yg)("div",null,(0,a.yg)(i.CopyToClipboard,{text:e.token,onCopy:()=>{alert(`Has copied ${e.token} to your clipboard.`),e.token=d()},mdxType:"CopyToClipboard"},(0,a.yg)("button",null,"Copy ",e.token," to clipboard")))},O={toc:h,UUIDv4:w},C="wrapper";function k(e){let{components:t,...r}=e;return(0,a.yg)(C,(0,n.A)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Wechaty Puppet Service Token (TOKEN), is ... (tbw)"),(0,a.yg)("h2",{id:"format--convensions"},"Format / Convensions"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"puppet_wxwork_id")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"UUIDv4"))),(0,a.yg)("h2",{id:"service-discovery"},"Service Discovery"),(0,a.yg)("p",null,"In-service / Out-service check:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"curl https://api.chatie.io/v0/hosties/${TOKEN}\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"HTTP/200"),": In-service"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"HTTP/404"),": Out-service")),(0,a.yg)("h2",{id:"tools"},"Tools"),(0,a.yg)("p",null,"Here's some useful tools to deal with your token."),(0,a.yg)("h3",{id:"online-uuid-generator"},"Online UUID Generator"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Copy from below:",(0,a.yg)(w,{mdxType:"UUIDv4"})),(0,a.yg)("li",{parentName:"ol"},"Visit UUID Generator:\n",(0,a.yg)("a",{parentName:"li",href:"https://www.uuidgenerator.net/version4"},"https://www.uuidgenerator.net/version4"))),(0,a.yg)("h3",{id:"wechaty-puppet-service-token-validator"},"Wechaty Puppet Service Token Validator"),(0,a.yg)("h2",{id:"how-to-get-a-token"},"How to get a token"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"TOKEN")," is the authorization string for the ",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/puppet-services/"},"Wechaty Puppet Service"),"."),(0,a.yg)("p",null,"You can find how to get a ",(0,a.yg)("inlineCode",{parentName:"p"},"TOKEN")," for using the Wechaty Puppet Servcie from the ",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/puppet-services/"},"docs link"),"."),(0,a.yg)("h2",{id:"blogs"},"Blogs"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))))}k.isMDXComponent=!0},17965:(e,t,r)=>{"use strict";var o=r(16426),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,i,c,l,p,u=!1;t||(t={}),r=t.debug||!1;try{if(i=o(),c=document.createRange(),l=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[t.format]||n.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(p),c.selectNodeContents(p),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(s){r&&console.error("unable to copy using execCommand: ",s),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(s){r&&console.error("unable to copy using clipboardData: ",s),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),p&&document.body.removeChild(p),i()}return u}},25264:(e,t,r)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=c(r(96540)),a=c(r(17965)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function s(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var a=g(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,r)}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,r,o,c=f(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return v(d(e=c.call.apply(c,[this].concat(r))),"onClick",(function(t){var r=e.props,o=r.text,i=r.onCopy,c=r.children,l=r.options,p=n.default.Children.only(c),u=(0,a.default)(o,l);i&&i(o,u),p&&p.props&&"function"==typeof p.props.onClick&&p.props.onClick(t)})),e}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=u(e,i),o=n.default.Children.only(t);return n.default.cloneElement(o,p(p({},r),{},{onClick:this.onClick}))}}])&&s(t.prototype,r),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default.PureComponent);t.CopyToClipboard=m,v(m,"defaultProps",{onCopy:void 0,options:void 0})},59399:(e,t,r)=>{"use strict";var o=r(25264).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},16426:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);