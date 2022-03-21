"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5002],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,k=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?s.createElement(k,r(r({ref:t},h),{},{components:n})):s.createElement(k,r({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17792:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var s=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],i={title:"Types of Auth Tokens"},l=void 0,c={unversionedId:"reference/token-types",id:"reference/token-types",title:"Types of Auth Tokens",description:"Last updated: December 04th, 2019",source:"@site/docs/reference/token-types.md",sourceDirName:"reference",slug:"/reference/token-types",permalink:"/ecosystem-platform/reference/token-types",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/reference/token-types.md",tags:[],version:"current",frontMatter:{title:"Types of Auth Tokens"},sidebar:"docs",previous:{title:"Metrics",permalink:"/ecosystem-platform/reference/metrics"},next:{title:"JWT Access Tokens",permalink:"/ecosystem-platform/reference/jwt-access-tokens"}},h=[{value:"Verified Sessions",id:"verified-sessions",children:[],level:2},{value:"Multi-Factor Auth",id:"multi-factor-auth",children:[],level:2}],u={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Last updated: ",(0,a.kt)("inlineCode",{parentName:"p"},"December 04th, 2019")),(0,a.kt)("p",null,'Firefox Accounts uses a number of different types of "token" to keep track of whether a user has been authenticated,\nand of what actions a client is authorized to perform. This document provides an overview of the different types of\ntoken, their properties and intended uses.'),(0,a.kt)("p",null,"The most important types of token for FxA Replying Parties to know about are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#session-tokens"},"Session Tokens"),", long-lived tokens that represent an authenticated user session with the FxA servers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#oauth-refresh-tokens"},"OAuth Refresh Tokens"),", long-lived tokens indicating that the user has authorized a particular client to perform\nparticular actions on their behalf."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#oauth-access-tokens"},"OAuth Access Tokens"),", short-lived tokens used by authorized clients when performing particular actions\non behalf of the user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#oidc-identity-tokens"},"OIDC Identity Tokens"),", short-lived JWTs used to communicate an authentication event from FxA\nto a relying party.")),(0,a.kt)("p",null,"FxA has additional types of token that it uses for its own account-management purposes, but which should\nnever be visible to Relying Parties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#keyfetch-tokens"},"KeyFetch Tokens")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#password-change-tokens"},"Password Change Tokens")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#password-forgot-tokens"},"Password Forgot Tokens")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#account-reset-tokens"},"Account Reset Tokens"))),(0,a.kt)("p",null,"Relying Parties that wish to integrate with Firefox Sync may also need to know about these additional types\nof token:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#browserid-assertions"},"BrowserID Assertions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sync-storage-credentials"},"Sync Storage Credentials"))),(0,a.kt)("h1",{id:"token-usage-mechanisms"},"Token Usage Mechanisms"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bearer Token"))," is an opaque string that can be used by any client in posession of the token, simply by presenting\nit verbatim in the request to the server (e.g. in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header). These are the simplest types of token\nfor clients to use, but allow for interception and replay attacks. In particular, the server that receives a Bearer Token\nis capable of extracting it and using it to perform other API calls."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Hawk Token"))," consists of an opaque string id and corresponding secret key. To use the token, clients must use the\nsecret key to sign outgoing requests using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/hawk/blob/main/API.md"},"the scheme described here"),". This is more\ncomplicated for clients but it binds the use of the token to the particular request being made, and it offers the\npotential for replay prevention."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"FxA Hawk Token"))," is a 32-byte string from which the id and key of a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Hawk Token"))," can be generated using HKDF.\nThis simplifies client handling of the token since it only has to persist a single value."),(0,a.kt)("h1",{id:"session-tokens"},"Session Tokens"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionToken")," is the Firefox Accounts equivalent of traditional website login session cookie - it represents\nthe user who is currently signed in to accounts.firefox.com, and it used to authenticate many calls from the\nFxA front-end website to the FxA back-end API."),(0,a.kt)("p",null,"Session tokens are an ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"FxA Hawk Token"))," where the 32-byte string is generated by the server. They can be obtained by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The successful creation of a new account, via the ",(0,a.kt)("inlineCode",{parentName:"li"},"/account/create")," endpoint."),(0,a.kt)("li",{parentName:"ul"},"A successful login to a new account, via the ",(0,a.kt)("inlineCode",{parentName:"li"},"/account/login")," endpoint."),(0,a.kt)("li",{parentName:"ul"},"Duplicating an existing ",(0,a.kt)("inlineCode",{parentName:"li"},"sessionToken"),", via the ",(0,a.kt)("inlineCode",{parentName:"li"},"/session/duplicate")," endpoint."),(0,a.kt)("li",{parentName:"ul"},"Providing the id of a previous ",(0,a.kt)("inlineCode",{parentName:"li"},"sessionToken")," when changing the account password, via the ",(0,a.kt)("inlineCode",{parentName:"li"},"/password/change/finish"),"\nendpoint."),(0,a.kt)("li",{parentName:"ul"},"Requesting the ",(0,a.kt)("inlineCode",{parentName:"li"},"https://identity.mozilla.com/tokens/session")," scope during an OAuth flow.")),(0,a.kt)("p",null,"Session tokens are intended only for authenticated communication with the FxA servers themselves, so RP servers\nshould never encounter a session token in the wild."),(0,a.kt)("p",null,"On the client side, session tokens are typically handled by web content on accounts.firefox.com while the user\nis interacting with their account. However, web browsers that support signing in with FxA in order to access\naccount-enabled browser features, may obtain a session token during the sigin flow and use it to communicate\ndirectly with the FxA server APIs."),(0,a.kt)("h1",{id:"session-metadata"},"Session Metadata"),(0,a.kt)("p",null,"Since session tokens represent a signed-in user, the server maintains a lot of additional metadata about the user's\nsigned-in state. Properties of the session token include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The types of authentication performed by the user, and level of confidence in their identity."),(0,a.kt)("li",{parentName:"ul"},"Timestamp at which authentication last occurred (which can be increased by prompting the user to re-enter their\npassword)."),(0,a.kt)("li",{parentName:"ul"},"Timestamp at which the token was last used (truncated to a few hours granularity to reduce db write load)."),(0,a.kt)("li",{parentName:"ul"},"Details of the user-agent string from the last use of the token."),(0,a.kt)("li",{parentName:"ul"},"The geolocation of the IP address that requested the session token")),(0,a.kt)("p",null,"This information may be used by the FxA server to make authorization decisions, and RPs may request that a user\nbe authenticated to a certain level of assurance (such as requiring that the sessionToken be last-authenticated\nwithin a certain amount of time, or authenticated via 2FA)."),(0,a.kt)("h2",{id:"verified-sessions"},"Verified Sessions"),(0,a.kt)("p",null,"As an additional security measure against ",(0,a.kt)("a",{parentName:"p",href:"https://blog.mozilla.org/services/2016/04/09/stolen-passwords-used-to-break-into-firefox-accounts/"},"credential-stuffing\nattacks"),',\nFxA has the notion of a "verified session", which is intended to indicate a higher level of confidence in the\nauthenticity of the user.'),(0,a.kt)("p",null,"A session is considered verified if the user did some additional authentication step ",(0,a.kt)("em",{parentName:"p"},"in addition")," to proving\nknowledge of the account password, such as completing an email confirmation loop or answering a 2FA challenge.\nSessions may also be considered verified based on server-side heuristics, such as whether the account is newly-created\nor whether we've seen previous verified logins form the same IP address."),(0,a.kt)("p",null,"Certain actions on the account can only be performed with a verified session, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modifying email or 2FA settings"),(0,a.kt)("li",{parentName:"ul"},"Authorizing OAuth grants that involve key-bearing scopes")),(0,a.kt)("h2",{id:"multi-factor-auth"},"Multi-Factor Auth"),(0,a.kt)("p",null,"If the user enables two-step authentication on their account, then each sessionToken will keep track of\nwhether it has been involved in a successful 2FA authentication. This information is reported in the session\nmetadata in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "authenticator assurance level" or "AAL" is a numeric indicator of the number of distinct types of\nauthentication factor that have been provided for a session; it will be ',(0,a.kt)("inlineCode",{parentName:"li"},"2")," for sessions in which the user\nhas successfully successfully performed 2FA."),(0,a.kt)("li",{parentName:"ul"},'The "authentication methods" is a list of all the different types of authentication action that have been\nperformed on this session (such as "entered password" or "completed email loop" or "provided totp code").\nIt\'s a more detailed view than the summary provided by the AAL.')),(0,a.kt)("h1",{id:"oauth-refresh-tokens"},"OAuth Refresh Tokens"),(0,a.kt)("p",null,"RPs that wish to obtain long-lived permission to access the user's account data should request\nan ",(0,a.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/refresh-token/"},"OAuth Refresh Token")," as part of their authorization flow.\nThis is a long-lived ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bearer Token"))," that represents the permissions granted by the user to that RP.\nFor example the refresh token might indicate that the RP has permission to read the user's profile data."),(0,a.kt)("p",null,"Refresh tokens can only be created by authorizing them via a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionToken"),"."),(0,a.kt)("p",null,"Refresh tokens should only ever be presented to the FxA auth/oauth server, and should ",(0,a.kt)("strong",{parentName:"p"},"not")," be used when\ntalking to other resource servers. Instead, the RP should use the refresh token to generate a short-lived\n","[access token][#oauth-access-tokens]"," and use that to communicate with resource servers."),(0,a.kt)("h1",{id:"oauth-access-tokens"},"OAuth Access Tokens"),(0,a.kt)("p",null,"RPs that wish to access resource servers on behalf of the user (say, to read or store user data) need\nto obtain an ",(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/access-tokens/"},"OAuth Access Token"),".  This is a short-lived\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bearer Token")),' that represents the permissions granted by the user to that RP, in a format that can\nbe consumed by resource servers. For example the RP might use an access token with scope "profile" in order\nto read the user\'s profile data from the FxA profile server.'),(0,a.kt)("p",null,"FxA also supports JWT Access tokens.  See ",(0,a.kt)("a",{parentName:"p",href:"/ecosystem-platform/reference/jwt-access-tokens"},"JWT Access Tokens")," for an in-depth look at that less-commonly-used type."),(0,a.kt)("h1",{id:"oidc-identity-tokens"},"OIDC Identity Tokens"),(0,a.kt)("p",null,"They're for signin."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#IDToken"},"OIDC spec")," and the\n",(0,a.kt)("a",{parentName:"p",href:"https://accounts.firefox.com/.well-known/openid-configuration"},"FxA supported claims"),"."),(0,a.kt)("p",null,"This token, a JWT, proves that a user's been authenticated (in this case,\nwith FxA). It can also be used as the ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token_hint")," query param value in a\n",(0,a.kt)("inlineCode",{parentName:"p"},"prompt=none")," flow (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/oauth/prompt-none.md"},"additional information"),"])."),(0,a.kt)("p",null,'This token is issued along with the access token and refresh token when the\nscope "openid" is present.'),(0,a.kt)("h1",{id:"keyfetch-tokens"},"KeyFetch Tokens"),(0,a.kt)("p",null,"They're for fetching keys. RPs shouldn't need to now this, because they use the scoped-keys flow."),(0,a.kt)("h1",{id:"password-change-tokens"},"Password Change Tokens"),(0,a.kt)("p",null,"Special-use token for changing password. Hawk token."),(0,a.kt)("h1",{id:"password-forgot-tokens"},"Password Forgot Tokens"),(0,a.kt)("p",null,"Special-use token for resetting password. Needs to be verified via a code received over email.\nLimited number of verification attempts. Generates a reset token."),(0,a.kt)("h1",{id:"account-reset-tokens"},"Account Reset Tokens"),(0,a.kt)("p",null,"Special-use token for resetting the password."),(0,a.kt)("h1",{id:"browserid-assertions"},"BrowserID Assertions"),(0,a.kt)("p",null,"Legacy identity assertion format. Used by sync, and accepted when granting OAuth tokens, but\nshould not be used for anything new."),(0,a.kt)("p",null,"BrowserID stopped being used in Firefox 80 and we're eagerly awaiting the long\ntail of users to upgrade so we can remove this code.  See details in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/issues/9007"},"Issue #9007 / FXA-2715"),"."))}p.isMDXComponent=!0}}]);