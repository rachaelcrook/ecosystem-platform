(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5958],{45925:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return f}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),s=t(93456),l=["components"],r={title:"WebChannels in Fenix & WebExtensions"},c=void 0,u={unversionedId:"reference/webchannels-in-fenix-webextensions",id:"reference/webchannels-in-fenix-webextensions",title:"WebChannels in Fenix & WebExtensions",description:"Current as of December 2nd, 2019",source:"@site/docs/reference/webchannels-in-fenix-webextensions.md",sourceDirName:"reference",slug:"/reference/webchannels-in-fenix-webextensions",permalink:"/ecosystem-platform/reference/webchannels-in-fenix-webextensions",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/webchannels-in-fenix-webextensions.md",tags:[],version:"current",frontMatter:{title:"WebChannels in Fenix & WebExtensions"},sidebar:"docs",previous:{title:"WebChannels in Firefox Desktop & Fennec",permalink:"/ecosystem-platform/reference/webchannels-in-firefox-desktop-fennec"},next:{title:"Tests in CircleCI",permalink:"/ecosystem-platform/reference/tests-in-circleci"}},p={},f=[{value:"Communication with GeckoView applications",id:"communication-with-geckoview-applications",level:2},{value:"Commands",id:"commands",level:2},{value:"fxaccounts:fxa_status",id:"fxaccountsfxa_status",level:3},{value:"<code>engines</code> capability",id:"engines-capability",level:4},{value:"fxaccounts:oauth_login",id:"fxaccountsoauth_login",level:3},{value:"data",id:"data",level:4},{value:"support",id:"support",level:4},{value:"See also",id:"see-also",level:2}],m={toc:f};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Current as of ",(0,o.kt)("inlineCode",{parentName:"p"},"December 2nd, 2019")),(0,o.kt)("h1",{id:"communication-with-oauth-webchannels"},"Communication with OAuth WebChannels"),(0,o.kt)("p",null,"OAuth WebChannels is an extension of the ",(0,o.kt)("a",{parentName:"p",href:"./fxa-webchannel-protocol"},"FxA WebChannel Desktop Flow"),".\nIt consists of similar messages as the Desktop Sync flow, however is more generic because of the use\nof OAuth in the background. Some behaviours in the OAuth flow are different."),(0,o.kt)("p",null,"This flow currently supports the following messages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fxaccounts:fxa_status")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fxaccounts:oauth_login"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fxaccounts:fxa_status")," message in the OAuth flow supports specifying a custom list of Sync engines that the app supports.\nSee ",(0,o.kt)("a",{parentName:"p",href:"./fxa-webchannel-protocol"},"FxA WebChannel Desktop Flow")," for details of engine capabilities."),(0,o.kt)("h2",{id:"communication-with-geckoview-applications"},"Communication with GeckoView applications"),(0,o.kt)("p",null,"To enable this feature in applications with GeckoView we ship a WebExtension\nas part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/android-components/blob/master/components/service/firefox-accounts/README.md"},"firefox-accounts")," Android component."),(0,o.kt)("p",null,"Communication channel is established from web content to this class via webextension, as follows:"),(0,o.kt)(s.Mermaid,{chart:"sequenceDiagram\n  participant fxa as FxA web content\n  participant glue as glue - fxawebchannel.js\n  participant webext as Web Extension\n\n  fxa--\x3e>glue: WebChannelMessageToChrome JS Event\n  glue--\x3e>webext: Port message\n  webext--\x3e>glue: Port message\n  glue--\x3e>fxa: WebChannelMessageToContent JS Event",mdxType:"Mermaid"}),(0,o.kt)(s.Mermaid,{chart:"sequenceDiagram\n  participant fxa as FxA web content\n  participant browser as Browser\n\n  fxa--\x3e>browser: fxa-status - request account status & device capabilities\n  browser--\x3e>fxa: response-based on state of [accountManager]\n  fxa->>fxa: user authenticates/authorizes\n  fxa--\x3e>browser: oauth-login - send OAuth code, state, syncEngine info",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"fxaccountsfxa_status"},"fxaccounts:fxa_status"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"./fxa-webchannel-protocol#fxaccounts-fxa_status"},"fxaccounts:fxa_status section")," of the WebChannel Protocol document."),(0,o.kt)("h4",{id:"engines-capability"},(0,o.kt)("inlineCode",{parentName:"h4"},"engines")," capability"),(0,o.kt)("p",null,"Unlike the Desktop WebChannel integration, the OAuth WebChannel integration expects all supported\nengines to be enumerated within the ",(0,o.kt)("inlineCode",{parentName:"p"},"engines")," capability. Possible values are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addresses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookmarks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"creditcards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"history")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"passwords")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preferences")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabs"))),(0,o.kt)("h3",{id:"fxaccountsoauth_login"},"fxaccounts:oauth_login"),(0,o.kt)("p",null,"Sent when a user successfully authenticates via a WebChannel OAuth flow."),(0,o.kt)("h4",{id:"data"},"data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "02f3cfea84ac4c143662b38d6c7f0c82c6f91eb041befc7cecda446b1b4887c1",\n  "state": "vHao1p6OizzwReCkQMSpZA",\n  "redirect": "urn:ietf:wg:oauth:2.0:oob:oauth-redirect-webchannel",\n  "action": "signin",\n  "declinedSyncEngines": ["history"],\n  "offeredSyncEngines": ["history"]\n}\n')),(0,o.kt)("h4",{id:"support"},"support"),(0,o.kt)("p",null,"Supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth_webchannel_v1")," context."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./fxa-webchannel-protocol"},"FxA WebChannel Desktop Flow"))))}h.isMDXComponent=!0},11748:function(e,n,t){var a={"./locale":89234,"./locale.js":89234};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=11748}}]);