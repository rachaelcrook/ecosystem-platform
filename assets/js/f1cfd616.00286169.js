"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9768],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),f=o,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Using a Custom Profile with Firefox"},p=void 0,m={unversionedId:"how-tos/using-a-custom-profile-with-firefox",id:"how-tos/using-a-custom-profile-with-firefox",title:"Using a Custom Profile with Firefox",description:"If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment.",source:"@site/docs/how-tos/using-a-custom-profile-with-firefox.md",sourceDirName:"how-tos",slug:"/how-tos/using-a-custom-profile-with-firefox",permalink:"/ecosystem-platform/how-tos/using-a-custom-profile-with-firefox",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-a-custom-profile-with-firefox.md",tags:[],version:"current",frontMatter:{title:"Using a Custom Profile with Firefox"},sidebar:"docs",previous:{title:"Connecting to a local MySQL DB",permalink:"/ecosystem-platform/how-tos/connecting-to-a-local-mysql-db"},next:{title:"Working with Metrics",permalink:"/ecosystem-platform/how-tos/working-with-metrics"}},s=[],u={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start firefox"),", which will open an instance of Firefox. It is configurable with the following environment variables:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_ENV")," - The API endpoints Firefox should use"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"local"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"stable"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"stage")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"local"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_DESKTOP_CONTEXT")," - The ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md#context"},(0,a.kt)("inlineCode",{parentName:"a"},"context"))," in which FxA is being run"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"fx_fennec_v1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"fx_ios_v1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"oauth_webchannel_v1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FIREFOX_BIN")," - Path to Firefox bin file"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FIREFOX_DEBUGGER")," - Open the ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox"},"Browser Toolbox")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_E10S")," - Enable ",(0,a.kt)("a",{parentName:"td",href:"https://wiki.mozilla.org/Electrolysis"},"Electrolysis")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))))}c.isMDXComponent=!0}}]);