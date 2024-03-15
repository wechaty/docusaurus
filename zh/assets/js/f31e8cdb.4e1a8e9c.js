"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5789],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=i(r),y=a,g=h["".concat(l,".").concat(y)]||h[y]||u[y]||o;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},60039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(58168),a=(r(96540),r(15680));const o={slug:"/polyglot/php/",title:"PHP Wechaty",sidebar_label:"PHP"},p=void 0,c={unversionedId:"polyglot/php/overview",id:"polyglot/php/overview",title:"PHP Wechaty",description:"PHP Wechaty",source:"@site/docs/polyglot/php/overview.md",sourceDirName:"polyglot/php",slug:"/polyglot/php/",permalink:"/zh/docs/polyglot/php/",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/php/overview.md",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1630243631,formattedLastUpdatedAt:"2021\u5e748\u670829\u65e5",frontMatter:{slug:"/polyglot/php/",title:"PHP Wechaty",sidebar_label:"PHP"},sidebar:"docs",previous:{title:"Scala",permalink:"/zh/docs/polyglot/scala/"},next:{title:".NET",permalink:"/zh/docs/polyglot/dotnet/"}},l={},i=[{value:"Getting Started",id:"getting-started",level:2},{value:"Maintainers",id:"maintainers",level:2}],s={toc:i},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(h,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-PHP-7de",alt:"PHP Wechaty"}))),(0,a.yg)("p",null,"PHP-Wechaty is a PHP programming client derived from the Wechaty ecosystem.PHP is a server scripting language and a powerful tool for making dynamic and interactive Web pages. You can find more information on PHP-Wechaty ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty"},"here"),". The ",(0,a.yg)("a",{parentName:"p",href:"https://wechaty.js.org/docs/polyglot/diy/"},"General Architecture Diagram")," illustrates how the PHP-Wechaty can be implemented on the already existing TypeScript Wechaty ecosystem.\nThe World's shortest PHP chatbot is PHP-Wechaty, which can be very easily implemented and used as shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.github.io/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"Run the below commands for starting the PHP-Wechaty bot. For further information, also you can visit ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty-getting-started"},"Template repo"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"# Install php 7.4+\nsudo yum install php-pecl-grpc\nsudo yum install php-pecl-protobuf\nsudo yum install php-xml\n# curl -sS https://getcomposer.org/installer | php\nphp -r \"copy('https://install.phpcomposer.com/installer', 'composer-setup.php');\"\nphp composer-setup.php\nphp -r \"unlink('composer-setup.php');\"\nmv composer.phar /usr/local/bin/composer\nmake install\nexport WECHATY_PUPPET_HOSTIE_TOKEN=your_token_at_here\nmake bot # to run the bot\n")),(0,a.yg)("h2",{id:"maintainers"},"Maintainers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/zhangchunsheng"},"@zhangchunsheng"))))}u.isMDXComponent=!0}}]);