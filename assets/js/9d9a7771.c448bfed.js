"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[3352],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),p=s(a),g=r,h=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return a?n.createElement(h,i(i({ref:t},y),{},{components:a})):n.createElement(h,i({ref:t},y))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},30860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const o={title:"Usage with Docker"},i=void 0,l={unversionedId:"tutorials/docker",id:"tutorials/docker",title:"Usage with Docker",description:"DOCKER WECHATY GETTING STARTED",source:"@site/docs/tutorials/docker.md",sourceDirName:"tutorials",slug:"/tutorials/docker",permalink:"/docs/tutorials/docker",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/tutorials/docker.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1622643718,formattedLastUpdatedAt:"Jun 2, 2021",frontMatter:{title:"Usage with Docker"},sidebar:"docs",previous:{title:"Video tutorial",permalink:"/docs/tutorials/video-tutorial"},next:{title:"Usage with Heroku",permalink:"/docs/tutorials/usage-with-heroku"}},c={},s=[{value:"DOCKER WECHATY GETTING STARTED",id:"docker-wechaty-getting-started",level:2},{value:"FEATURES",id:"features",level:2},{value:"REQUIREMENTS",id:"requirements",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Run",id:"run",level:2},{value:"Docker options explanation",id:"docker-options-explanation",level:3},{value:"Run Examples",id:"run-examples",level:3},{value:"Run Wechaty as a Hostie",id:"run-wechaty-as-a-hostie",level:3},{value:"Onbuild",id:"onbuild",level:2},{value:"Build",id:"build",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"AUTHOR",id:"author",level:2},{value:"COPYRIGHT &amp; LICENSE",id:"copyright--license",level:2}],y={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"docker-wechaty-getting-started"},"DOCKER WECHATY GETTING STARTED"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Pulls"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Stars"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://microbadger.com/#/images/wechaty/wechaty"},(0,r.yg)("img",{parentName:"a",src:"https://images.microbadger.com/badges/image/wechaty/wechaty.svg",alt:"Docker Layers"}))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,r.yg)("img",{parentName:"a",src:"http://dockeri.co/image/wechaty/wechaty",alt:"dockeri.co"}))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/wechaty/docker-wechaty-getting-started"},"Deploy to Docker for Wechaty Starter Project Repository")),(0,r.yg)("h2",{id:"features"},"FEATURES"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Wechaty is fully dockerized. So it will be very easy to be used as a MicroService."),(0,r.yg)("li",{parentName:"ol"},"Clone this repository, then you will be able to use Docker to run Wechaty with ZERO configuration.")),(0,r.yg)("h2",{id:"requirements"},"REQUIREMENTS"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Docker"),(0,r.yg)("li",{parentName:"ol"},"Global Internet Connection")),(0,r.yg)("h2",{id:"install-docker"},"Install Docker"),(0,r.yg)("p",null,"Quick & easy install Docker via:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.docker.com | sh\n")),(0,r.yg)("p",null,"Or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://get.docker.com/ | sh\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.docker.com/"},"Get to know more about Docker")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/getstarted/step_one/"},"Install Docker and run hello-world in 3 minutes"))),(0,r.yg)("h2",{id:"run"},"Run"),(0,r.yg)("p",null,"The best practice of using Wechaty Docker is like the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ cat > mybot.ts <<'EOF'\nimport { Wechaty } from 'wechaty'\n\nWechaty.instance() // Singleton\n  .on('scan', (qrcode, status) => console.log(`Scan QrCode to login: ${status}\\n${qrcode}`))\n  .on('login',       user      => console.log(`User ${user} logined`))\n  .on('message',  message      => console.log(`Message: ${message}`))\n  .start()\nEOF\n\n$ function wechaty() {\n  docker run \\\n    -t -i --rm \\\n    --privileged \\\n    --network=host \\\n    -e WECHATY_LOG=\"$WECHATY_LOG\" \\\n    -e WECHATY_PUPPET=\"$WECHATY_PUPPET\" \\\n    -e WECHATY_TOKEN=\"$WECHATY_TOKEN\" \\\n    --mount type=bind,source=\"$(pwd)\",target=/bot \\\n    wechaty/wechaty:latest \\\n    \"$@\"\n}\n\n$ wechaty mybot.ts\n")),(0,r.yg)("p",null,"see? death easy to use!"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"You might want to confirm that you can download ",(0,r.yg)("inlineCode",{parentName:"p"},"wechaty/wechaty")," image successfully by run ",(0,r.yg)("inlineCode",{parentName:"p"},"docker pull wechaty/wechaty"),", and this command is also able to help you upgrade the image to the latest version.")),(0,r.yg)("h3",{id:"docker-options-explanation"},"Docker options explanation"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"-t")," : Allocate a pseudo-TTY"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"-i")," : Keep STDIN open even if not attached"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"--rm")," : Automatically remove the container when it exits"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"--privileged")," : Give extended privileges to this container"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"--network=host")," : use the Docker host network stack"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},'-e WECHATY_LOG="$WECHATY_LOG"')," : Pass the environment variable ",(0,r.yg)("inlineCode",{parentName:"li"},"WECHATY_LOG")," into the container"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},'--volume="$(pwd)":/bot')," : Bind current directory(",(0,r.yg)("inlineCode",{parentName:"li"},'"$(pwd)"'),") to '",(0,r.yg)("inlineCode",{parentName:"li"},"/bot"),"' inside the container, by mounting the volume"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"--name=wechaty")," : Assign ",(0,r.yg)("inlineCode",{parentName:"li"},"wechaty")," as the container name"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"wechaty/wechaty:latest")," : Image name on docker hub, here's our ",(0,r.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/wechaty/wechaty"},"wechaty/wechaty")," with ",(0,r.yg)("inlineCode",{parentName:"li"},"latest")," version"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"mybot.js")," : File contains code wrote by you, should be placed in current directory ",(0,r.yg)("inlineCode",{parentName:"li"},"./"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"See Also: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/66"},"Dockerize Wechaty for easy start #66"))),(0,r.yg)("h3",{id:"run-examples"},"Run Examples"),(0,r.yg)("p",null,"There's many Wechaty ChatBot Examples in the ",(0,r.yg)("inlineCode",{parentName:"p"},"example")," directory, and all of them are writen in TypeScript."),(0,r.yg)("p",null,"Run example ChatBot is as easy as run hello world example above, as long as you are using Docker:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd example\nwechaty media-file-bot.ts\n")),(0,r.yg)("p",null,"Bravo!"),(0,r.yg)("h3",{id:"run-wechaty-as-a-hostie"},"Run Wechaty as a Hostie"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_TOKEN="your token here"\n\ndocker run -e WECHATY_TOKEN="$WECHATY_TOKEN" wechaty/wechaty\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"WECHATY_TOKEN")," is required here, because you need this key to managing wechaty on the chatbot cloud manager: ",(0,r.yg)("a",{parentName:"p",href:"https://www.chatie.io"},"https://www.chatie.io")),(0,r.yg)("h2",{id:"onbuild"},"Onbuild"),(0,r.yg)("p",null,"Put this line(and only this line) to your ",(0,r.yg)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-dockerfile"},"FROM wechaty/onbuild\n")),(0,r.yg)("p",null,"This image makes building derivative images easier. For most use cases, creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"Dockerfile")," in the base of your project directory with the line ",(0,r.yg)("inlineCode",{parentName:"p"},"FROM wechaty/onbuild")," will be enough to create a stand-alone image for your project."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"onbuild"),' variant is really useful for "getting off the ground running" (zero to Dockerized in a short period of time)'),(0,r.yg)("li",{parentName:"ol"},"This ",(0,r.yg)("inlineCode",{parentName:"li"},"onbuild")," variant will only install npm packages according to the ",(0,r.yg)("inlineCode",{parentName:"li"},"package.json")),(0,r.yg)("li",{parentName:"ol"},"The npm installs devDependencies by default, which is undesirable if you're building a production image. To avoid this pass NODE_ENV as a build argument i.e. ",(0,r.yg)("inlineCode",{parentName:"li"},"docker build --build-arg NODE_ENV=production \u2026"),".")),(0,r.yg)("h2",{id:"build"},"Build"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker build -t wechaty .\n")),(0,r.yg)("h2",{id:"see-also"},"SEE ALSO"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Wechaty Getting Started: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")),(0,r.yg)("li",{parentName:"ol"},"Heroku Wechaty Getting Started: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/wechaty/heroku-wechaty-getting-started"},"https://github.com/wechaty/heroku-wechaty-getting-started"))),(0,r.yg)("h2",{id:"author"},"AUTHOR"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"http://linkedin.com/in/zixia"},"Huan LI")," \\",(0,r.yg)("a",{parentName:"p",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://stackexchange.com/users/265499"},(0,r.yg)("img",{parentName:"a",src:"https://stackexchange.com/users/flair/265499.png",alt:"Profile of Huan LI (\u674e\u5353\u6853) on StackOverflow"}))),(0,r.yg)("h2",{id:"copyright--license"},"COPYRIGHT & LICENSE"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Code & Docs \xa9 2018 Huan LI \\",(0,r.yg)("a",{parentName:"li",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),(0,r.yg)("li",{parentName:"ul"},"Code released under the Apache-2.0 License"),(0,r.yg)("li",{parentName:"ul"},"Docs released under Creative Commons")))}u.isMDXComponent=!0}}]);