"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9643],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92723:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Metrics"},s=void 0,c={unversionedId:"reference/metrics",id:"reference/metrics",title:"Metrics",description:"Last updated: March 21st, 2022",source:"@site/docs/reference/metrics.md",sourceDirName:"reference",slug:"/reference/metrics",permalink:"/ecosystem-platform/reference/metrics",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/metrics.md",tags:[],version:"current",frontMatter:{title:"Metrics"},sidebar:"docs",previous:{title:"Localization",permalink:"/ecosystem-platform/reference/localization"},next:{title:"Types of Auth Tokens",permalink:"/ecosystem-platform/reference/token-types"}},m=[],p={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last updated: ",(0,o.kt)("inlineCode",{parentName:"p"},"March 21st, 2022")),(0,o.kt)("p",null,"Firefox accounts collects metrics from servers running our code and clients accessing our services.  Mozilla takes data collection seriously so our policies and processes around it may seem more complex than most organizations but it is in an effort to grant agency to users over their own data."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/Data_Collection"},"Mozilla Data Collection policies")," apply to Firefox Accounts."),(0,o.kt)("p",null,"Our code is deployed to a staging environment before it goes to production so the metrics detailed below are available for both environments.  The details below will focus mostly on production."),(0,o.kt)("p",null,"Keep in mind that Firefox accounts allows users to opt-out of data collection via a toggle on the account settings page."),(0,o.kt)("p",null,"We also have a ",(0,o.kt)("a",{parentName:"p",href:"../explanation/metrics"},"metrics section which expands on the history of our system and how these are implemented"),"."),(0,o.kt)("h1",{id:"application-metrics"},"Application metrics"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Derived tables do not include all the events in the original logs.  You can read the queries that create the derived tables to see what is included."))),(0,o.kt)("p",null,"These are logs from Firefox accounts code.  These are probably the most useful logs for product decision making as they were written by hand by engineers.  They are also the most comlex."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.telemetry.mozilla.org/datasets/fxa.html"},"taxonomies in the Mozilla Data Docs"),"."))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These are logged via ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/mozlog/"},"mozlog")," as regular server logs."),(0,o.kt)("li",{parentName:"ul"},"The logs are immediately ingested into ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/logging"},"GCP Cloud Logging")),(0,o.kt)("li",{parentName:"ul"},"From there they are passed and stored in BigQuery in the ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-prod")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-nonprod")," projects depending on which environment they are coming out of.  These projects are relatively restricted and not for general consumption."),(0,o.kt)("li",{parentName:"ul"},"Every 24 hours, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-shared-prod/firefox_accounts_derived"},"some ETL jobs")," run which create derived tables from the original logs and store them in the ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata")," project in BigQuery.  ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata")," is accessible by anyone at Mozilla."),(0,o.kt)("li",{parentName:"ul"},"Additionally, there are some ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-shared-prod/firefox_accounts"},"user-facing datasets")," of that same data, and also in ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata"),", which are designed to be easier to use."))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/bigquery?"},"BigQuery"),".  Look for the ",(0,o.kt)("inlineCode",{parentName:"li"},"firefox_accounts")," dataset in the ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata")," project.  ",(0,o.kt)("em",{parentName:"li"},"Be aware that there are large amounts of data in BigQuery and you can spend a lot of money if you don't restrict your queries.")),(0,o.kt)("li",{parentName:"ul"},"Looker is backed by BigQuery and there is a ",(0,o.kt)("a",{parentName:"li",href:"https://mozilla.cloud.looker.com/folders/374"},"Firefox Accounts folder")," there"),(0,o.kt)("li",{parentName:"ul"},"There are ",(0,o.kt)("a",{parentName:"li",href:"https://earthangel-b40313e5.influxcloud.net/?orgId=1&search=open&query=fxa"},"several dashboards in grafana")," with a mix of these metrics on them"),(0,o.kt)("li",{parentName:"ul"})))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need real-time data you need to be looking at the raw logs in ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-prod"),".  Otherwise there will be a 24 hour delay on the data.  We don't run our normal metrics out of those logs because it is too expensive and slow."))),(0,o.kt)("h1",{id:"crashes"},"Crashes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"t is undefined")," and a link to the JS that failed to run"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"An internal validation check failed.")," and details about what the software expected to see and what it actually saw"))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sentry"))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.prod.mozaws.net/operations/"},"Sentry")),(0,o.kt)("li",{parentName:"ul"},"Look for any project starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-"),".  Eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-auth-prod")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-content-client-prod"))))),(0,o.kt)("h1",{id:"server-health"},"Server Health"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There are 30 healthy hosts running"),(0,o.kt)("li",{parentName:"ul"},"A host is running at 100% cpu"))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The reporting tools built into the clouds we use"))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In their most detailed form, you'd need access to the cloud consoles themselves, but most of the data is also available in our Grafana instance.  ",(0,o.kt)("a",{parentName:"li",href:"https://earthangel-b40313e5.influxcloud.net/d/HqOQKXoZk/fxa-auth-prod-elb?orgId=1"},"Here is one of our dashboards hitting CloudWatch for metrics"))))),(0,o.kt)("h1",{id:"front-end-performance"},"Front-end Performance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It took 400ms to load ",(0,o.kt)("inlineCode",{parentName:"li"},"/settings")))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As of this writing we record the data using our own library (which maybe isn't totally accurate) and write the data via ",(0,o.kt)("inlineCode",{parentName:"li"},"statsd")," which ends up in influxdb.  We expect to move to ",(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/for/performance/"},"Sentry Performance")," soon"))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Look for the ",(0,o.kt)("inlineCode",{parentName:"li"},"svcops_aws")," project in Grafana.  ",(0,o.kt)("a",{parentName:"li",href:"https://earthangel-b40313e5.influxcloud.net/d/1tthDDrWk/content-server?orgId=1"},"Here is a dashboard with some examples"))))))}d.isMDXComponent=!0}}]);