"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6864],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Node Debugging"},l=void 0,p={unversionedId:"how-tos/node-debugging",id:"how-tos/node-debugging",title:"Node Debugging",description:"It's possible to debug a running Node process using a variety of debuggers (see the Node debugging docs for details).",source:"@site/docs/how-tos/node-debugging.md",sourceDirName:"how-tos",slug:"/how-tos/node-debugging",permalink:"/ecosystem-platform/how-tos/node-debugging",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/node-debugging.md",tags:[],version:"current",frontMatter:{title:"Node Debugging"},sidebar:"docs",previous:{title:"Local Emails with MailDev",permalink:"/ecosystem-platform/how-tos/local-emails-with-maildev"},next:{title:"Using VS Code with FxA",permalink:"/ecosystem-platform/how-tos/using-vscode-with-fxa"}},u={},d=[{value:"Debugging a Server",id:"debugging-a-server",level:2},{value:"Default Debug Ports",id:"default-debug-ports",level:3},{value:"Debugging Tests",id:"debugging-tests",level:2},{value:"Mocha tests (e.g. <code>fxa-shared</code>)",id:"mocha-tests-eg-fxa-shared",level:3},{value:"Jest tests (e.g. <code>fxa-payments-server</code>)",id:"jest-tests-eg-fxa-payments-server",level:3}],c={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's possible to debug a running Node process using a variety of debuggers (see the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/"},"Node debugging docs")," for details)."),(0,o.kt)("p",null,"You may also be interested in checking out how to use ",(0,o.kt)("a",{parentName:"p",href:"using-vscode-with-fxa"},"VS Code with FxA"),"."),(0,o.kt)("h2",{id:"debugging-a-server"},"Debugging a Server"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," runs some of the services with the debugger enabled by default."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start the whole server as usual (",(0,o.kt)("inlineCode",{parentName:"li"},"yarn && yarn start")," from top-level in the monorepo)"),(0,o.kt)("li",{parentName:"ol"},"To see which debug port each service is listening on check ",(0,o.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," or the ",(0,o.kt)("inlineCode",{parentName:"li"},"pm2.config.js")," file of the package you're interested in."),(0,o.kt)("li",{parentName:"ol"},"Connect to the process to debug it:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Using Google Chrome, go to ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://inspect"),", then click the process to connect to DevTools.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'You may need to add a new target in the "Configure..." menu with the correct debug port'))),(0,o.kt)("li",{parentName:"ul"},"VS Code requires setting up a ",(0,o.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," file - see the ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},"VS Code")," docs for details.")))),(0,o.kt)("h3",{id:"default-debug-ports"},"Default Debug Ports"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),", the following ports are used for ",(0,o.kt)("inlineCode",{parentName:"p"},"--inspect"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Service"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9130"),(0,o.kt)("td",{parentName:"tr",align:null},"content-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9140"),(0,o.kt)("td",{parentName:"tr",align:null},"admin-panel")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9150"),(0,o.kt)("td",{parentName:"tr",align:null},"admin-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9160"),(0,o.kt)("td",{parentName:"tr",align:null},"auth-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9170"),(0,o.kt)("td",{parentName:"tr",align:null},"payments-server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9180"),(0,o.kt)("td",{parentName:"tr",align:null},"event-broker")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9190"),(0,o.kt)("td",{parentName:"tr",align:null},"support-panel")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9200"),(0,o.kt)("td",{parentName:"tr",align:null},"graphql-api")))),(0,o.kt)("h2",{id:"debugging-tests"},"Debugging Tests"),(0,o.kt)("p",null,"The Node debugger can also be attached to a running test process. Firefox Accounts uses a variety of test frameworks, so the steps vary by package."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--inspect")," argument is used in the examples below, but ",(0,o.kt)("inlineCode",{parentName:"p"},"--inspect-brk")," can also be used to pause the process as soon as it starts."))),(0,o.kt)("h3",{id:"mocha-tests-eg-fxa-shared"},"Mocha tests (e.g. ",(0,o.kt)("inlineCode",{parentName:"h3"},"fxa-shared"),")"),(0,o.kt)("p",null,"For Mocha, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--timeout 0")," option, otherwise the test will fail if you step through it and exceed the default timeout (currently 2 seconds on ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-shared"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"node --inspect ./node_modules/.bin/mocha --timeout 0 path/to/file\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-shared"),", this incantation works for some directories, but not yet others."),(0,o.kt)("h3",{id:"jest-tests-eg-fxa-payments-server"},"Jest tests (e.g. ",(0,o.kt)("inlineCode",{parentName:"h3"},"fxa-payments-server"),")"),(0,o.kt)("p",null,"For Jest, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--runInBand")," argument so it doesn't fork off the test runner to a separate process that isn't available to the inspector:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"node --inspect ./node_modules/.bin/jest --runInBand --config server/jest.config.js filematcher\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"filematcher")," is a regex that matches against test file paths. If you omit ",(0,o.kt)("inlineCode",{parentName:"p"},"filematcher"),", Jest will run all tests (but you have to hit Enter a second time to trigger the test run)."))}g.isMDXComponent=!0}}]);