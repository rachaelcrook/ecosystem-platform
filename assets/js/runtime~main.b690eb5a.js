(()=>{"use strict";var e,a,f,b,d,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,b,d)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],b=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||c>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<c&&(c=d));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,b,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(d,c),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",93:"e76b61f9",111:"a3d48351",117:"35b8fec4",136:"c0615bfa",194:"82a3f709",239:"70acafe9",247:"987cad44",283:"ba8153a7",399:"4a0e76ae",451:"d2bb60ab",464:"36f4a5f7",472:"9a1311ca",528:"248d6ffe",560:"5654da00",577:"1c0d01d7",586:"5556484c",654:"45a56422",758:"23f82a46",762:"8c1bc555",820:"c50e860f",888:"a108884c",970:"a5711496",1022:"3817a60c",1040:"9ef84191",1081:"0a9812da",1143:"2e3e970c",1319:"628988b7",1324:"e3246db5",1355:"8285d874",1403:"630dc608",1413:"46ae467a",1444:"d35e5d73",1447:"ed79e225",1845:"f97f9915",1864:"e27cd83e",1967:"74bde459",1983:"97ed811c",2041:"b2f6a9b5",2129:"ab225c16",2218:"2c6eb2fd",2220:"39380ae8",2373:"21033e4e",2397:"65ede1c8",2438:"a3ec3556",2475:"da37101f",2521:"624b72a3",2582:"ef0ac018",2618:"6939712c",2651:"272f43cb",2679:"e476581f",2779:"f0b750c2",2802:"88343e6f",2842:"b8315de2",2876:"ee91edb8",2944:"4a1afa31",2970:"1c04a7ef",3004:"b82d6e0a",3051:"e3429d9b",3101:"7d1f696f",3156:"4ab9c840",3216:"82f49eb5",3261:"a9484c01",3296:"f482079a",3326:"c9dcca9b",3426:"06eb90e0",3486:"0adb6319",3487:"3e20135b",3516:"3333f936",3612:"e322a99f",3675:"fd8139f4",3698:"1491e8ae",3810:"48c68ad3",3860:"158abbab",4083:"50b5b0e0",4170:"5eeb9047",4229:"fdd72c56",4249:"8867b911",4258:"a6a9d1e4",4262:"a852bbb4",4348:"b6dfc324",4364:"d4765d02",4381:"383e8ed0",4467:"e0868feb",4480:"fa19bda5",4528:"10bed0e6",4531:"bedc1d4a",4584:"bc8c620a",4659:"50e33a0d",4682:"91051824",4833:"f923bd50",4863:"aa2d09ab",4937:"6f7562a3",4977:"03e06aa7",4992:"44109891",5042:"5c93823d",5094:"6801025a",5172:"7af5887e",5325:"b485b3aa",5329:"4f39be85",5449:"c3a8bbca",5516:"06baaa90",5530:"e8b5107e",5557:"86edb86a",5667:"2e476804",5675:"a702eb3a",5763:"06b68135",5808:"83aa35bf",5835:"4008fff7",5885:"e748dd17",5979:"b6c08e50",6005:"6da97d5b",6039:"b40bf177",6049:"76176154",6119:"646981ee",6168:"51b72358",6221:"55cc11e8",6338:"e4232e8f",6354:"0fe33e41",6411:"9110f38f",6444:"9aba6085",6488:"0481c177",6494:"d5c26917",6629:"de6e56b8",6646:"f5b0050a",6704:"52572dea",6711:"f9734b91",6745:"bf476a78",6755:"0cb9c435",6842:"6fdce5db",6853:"d289dfcd",6864:"f2aa5a66",6889:"698ffa79",6944:"5cba231a",6953:"f7f60e58",7002:"9dac1f3c",7018:"916350cb",7023:"664e7932",7056:"f2e9a472",7072:"42f3785a",7138:"685e9813",7179:"71f89b38",7207:"53b3af7a",7339:"3e884023",7414:"a987e5c8",7466:"afa5d0b2",7512:"54b89eb4",7553:"d179580e",7587:"3d11f99a",7613:"5026ea5c",7627:"9242f14e",7640:"f71bf9e2",7669:"4819920a",7772:"027f3190",7815:"ad410354",7918:"17896441",7920:"1a4e3797",8032:"63165f34",8062:"8bc421df",8073:"0945cc86",8110:"32ae25e3",8112:"33161a8b",8135:"a5f3d4d3",8167:"9e8709bd",8191:"223e4a50",8211:"d7d14c06",8272:"3a6cf436",8300:"3239c303",8545:"030341eb",8592:"common",8609:"338770ad",8612:"f0ad3fbb",8671:"635b4bb2",8701:"cec41d76",8708:"9bbb9bff",8725:"7bdc42a1",8842:"985217f7",8863:"635781a4",8878:"4eb9f0ee",8898:"8b3b5a19",8901:"5627c5e3",8968:"991fd4ed",8970:"d3959fc5",8991:"42795c4f",8997:"f077f840",8998:"b5043254",9098:"dc463d44",9157:"2641d68d",9250:"117aaa88",9291:"93a20088",9395:"56165ff5",9408:"1e4e8123",9514:"1be78505",9529:"dab73f02",9643:"fc49bffc",9671:"0e384e19",9728:"3e86d11e",9768:"f1cfd616",9797:"9cefbf99",9847:"3ec46315",9872:"224a8709",9925:"43ad54b5",9963:"81766363"}[e]||e)+"."+{53:"e4ea0e10",93:"a0d37ae1",111:"16d1cd4a",117:"8f049567",136:"43ed1356",194:"f0627c45",239:"83215341",247:"77efbd36",283:"d4b87fe5",399:"cc7686be",451:"0646328c",464:"753f1ec5",472:"26f8c1da",528:"05ae240e",560:"540fcc04",577:"093b91a4",586:"c9299db1",654:"f8fe65c9",713:"4b4dd1ec",758:"82c08f62",762:"6957230a",820:"928840de",888:"cd3ee042",970:"35b821d8",1022:"9f74e6d4",1040:"a5b8f2d5",1081:"aef29577",1143:"c429eb30",1319:"7055a470",1324:"ff8ee404",1355:"b3d82891",1403:"0135d6a6",1413:"4e85790c",1444:"d3f0b831",1447:"3e5813c2",1845:"41cc8d35",1864:"652376c8",1967:"7287d0be",1983:"42b84345",2041:"3c7a67df",2129:"38dd56bd",2218:"7726d84f",2220:"37958273",2373:"1fdfa4a8",2397:"9059689a",2438:"f90ecf8f",2475:"8c13eb58",2521:"300aff33",2582:"24bbe2c7",2618:"2a6cf8bb",2651:"5833ede7",2679:"3792ac56",2779:"947ee42c",2802:"2f2a87f6",2842:"9a980f42",2876:"ff0700e8",2944:"0c1f82a5",2970:"e16fc036",3004:"9eb1bad2",3051:"6fdea9e4",3101:"17015e23",3156:"bba2b876",3216:"17d6021e",3261:"93d5ad94",3296:"682c8463",3326:"fd8581a9",3426:"19333170",3486:"a8152369",3487:"a0153df9",3516:"76648578",3612:"a53b8c04",3675:"e43de3c4",3698:"88b0657d",3810:"ed4395e5",3860:"68e24afb",4083:"497a93a0",4170:"476b2351",4229:"72c30051",4249:"8a196baa",4258:"c80b37b5",4262:"11e6a8e0",4348:"0dc76206",4364:"d37b8f93",4381:"fd39e742",4467:"376d6ca4",4480:"a04a1264",4528:"0be3f4d8",4531:"32d5cf11",4584:"d3eb67c6",4659:"08ddb9cf",4682:"eb0ef14d",4833:"6e74006e",4863:"18036377",4937:"50f2d418",4977:"f2c0f3fc",4992:"52f63cfd",5042:"3d85ffbf",5094:"9c7df081",5172:"d2d8912b",5325:"e15df4d0",5329:"77ea5b9f",5449:"bd48c6fa",5516:"89c56b9d",5530:"1ac306eb",5557:"8761d1f4",5667:"8b1249ec",5675:"355596ae",5763:"e88dc7b8",5808:"ebf3331a",5835:"64f417ce",5885:"fd8837af",5979:"0435b56f",6005:"519fdf1a",6039:"b63f939c",6049:"6c0c80ad",6119:"a8704c9f",6168:"859b2e07",6221:"a818bb70",6316:"ee375947",6338:"7b285d4d",6354:"1abfda1c",6411:"da60122d",6444:"cd1e351c",6488:"604c2fbc",6494:"838e9115",6499:"a224dfdc",6629:"bc13b2b3",6646:"c6b964a8",6704:"ad2771d5",6711:"b012eccb",6745:"19a28b79",6755:"b03bd753",6780:"5c04d351",6842:"3652e9d2",6853:"a77c64ff",6864:"40ae11b3",6889:"8b1ae9f6",6944:"57c5bcd7",6945:"2a9194e7",6953:"3e07e863",7002:"0ee730cf",7018:"c486e086",7023:"66db5723",7056:"798a5ea1",7072:"05e2fece",7138:"d1050c59",7179:"012b71c1",7207:"ace0fc34",7285:"bff80366",7339:"ea9d5974",7414:"055d3bcd",7466:"a22e36a2",7512:"6beb7fb1",7553:"d080e4cd",7587:"5c65c3f3",7613:"4e715249",7627:"b4dcba62",7640:"dfcbc01e",7669:"ed130005",7724:"bb3e9639",7772:"b98b5988",7815:"6267f643",7918:"5d79c8d8",7920:"e7f33173",8032:"75a198c4",8062:"0e2c4874",8073:"126684fc",8110:"5278efa6",8112:"ad93e2f6",8135:"21915b90",8167:"5f31b0ea",8191:"ab19609b",8211:"2ee8a89e",8272:"38a2781e",8300:"e9e1b020",8545:"5804eaf7",8592:"ceeecece",8609:"d9591fe7",8612:"e4d03189",8671:"584be080",8701:"9b4b1776",8708:"df38b0f2",8725:"cff9f3bf",8842:"3fa90ec0",8863:"5cf8c337",8878:"0c184b65",8898:"0211c56a",8901:"8137335e",8968:"768f7dc3",8970:"c5747320",8991:"916a23ca",8997:"2a1aebd2",8998:"f84b855d",9098:"f5fe88f8",9157:"b25af630",9250:"2a1635e5",9291:"4f2c9500",9395:"23f3d1c6",9408:"d9f67237",9487:"90d8faf1",9514:"e650a9f3",9529:"43543f6d",9643:"c5e70312",9671:"1237fcb2",9728:"11b57760",9768:"28335f35",9797:"869ba5e8",9847:"ce34d009",9872:"05816b94",9925:"dda5915f",9963:"d10be01f"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},d="firefox-ecosystem-platform:",r.l=(e,a,f,c)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+f){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),b[e]=[a];var u=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var d=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/ecosystem-platform/",r.gca=function(e){return e={17896441:"7918",44109891:"4992",76176154:"6049",81766363:"9963",91051824:"4682","935f2afb":"53",e76b61f9:"93",a3d48351:"111","35b8fec4":"117",c0615bfa:"136","82a3f709":"194","70acafe9":"239","987cad44":"247",ba8153a7:"283","4a0e76ae":"399",d2bb60ab:"451","36f4a5f7":"464","9a1311ca":"472","248d6ffe":"528","5654da00":"560","1c0d01d7":"577","5556484c":"586","45a56422":"654","23f82a46":"758","8c1bc555":"762",c50e860f:"820",a108884c:"888",a5711496:"970","3817a60c":"1022","9ef84191":"1040","0a9812da":"1081","2e3e970c":"1143","628988b7":"1319",e3246db5:"1324","8285d874":"1355","630dc608":"1403","46ae467a":"1413",d35e5d73:"1444",ed79e225:"1447",f97f9915:"1845",e27cd83e:"1864","74bde459":"1967","97ed811c":"1983",b2f6a9b5:"2041",ab225c16:"2129","2c6eb2fd":"2218","39380ae8":"2220","21033e4e":"2373","65ede1c8":"2397",a3ec3556:"2438",da37101f:"2475","624b72a3":"2521",ef0ac018:"2582","6939712c":"2618","272f43cb":"2651",e476581f:"2679",f0b750c2:"2779","88343e6f":"2802",b8315de2:"2842",ee91edb8:"2876","4a1afa31":"2944","1c04a7ef":"2970",b82d6e0a:"3004",e3429d9b:"3051","7d1f696f":"3101","4ab9c840":"3156","82f49eb5":"3216",a9484c01:"3261",f482079a:"3296",c9dcca9b:"3326","06eb90e0":"3426","0adb6319":"3486","3e20135b":"3487","3333f936":"3516",e322a99f:"3612",fd8139f4:"3675","1491e8ae":"3698","48c68ad3":"3810","158abbab":"3860","50b5b0e0":"4083","5eeb9047":"4170",fdd72c56:"4229","8867b911":"4249",a6a9d1e4:"4258",a852bbb4:"4262",b6dfc324:"4348",d4765d02:"4364","383e8ed0":"4381",e0868feb:"4467",fa19bda5:"4480","10bed0e6":"4528",bedc1d4a:"4531",bc8c620a:"4584","50e33a0d":"4659",f923bd50:"4833",aa2d09ab:"4863","6f7562a3":"4937","03e06aa7":"4977","5c93823d":"5042","6801025a":"5094","7af5887e":"5172",b485b3aa:"5325","4f39be85":"5329",c3a8bbca:"5449","06baaa90":"5516",e8b5107e:"5530","86edb86a":"5557","2e476804":"5667",a702eb3a:"5675","06b68135":"5763","83aa35bf":"5808","4008fff7":"5835",e748dd17:"5885",b6c08e50:"5979","6da97d5b":"6005",b40bf177:"6039","646981ee":"6119","51b72358":"6168","55cc11e8":"6221",e4232e8f:"6338","0fe33e41":"6354","9110f38f":"6411","9aba6085":"6444","0481c177":"6488",d5c26917:"6494",de6e56b8:"6629",f5b0050a:"6646","52572dea":"6704",f9734b91:"6711",bf476a78:"6745","0cb9c435":"6755","6fdce5db":"6842",d289dfcd:"6853",f2aa5a66:"6864","698ffa79":"6889","5cba231a":"6944",f7f60e58:"6953","9dac1f3c":"7002","916350cb":"7018","664e7932":"7023",f2e9a472:"7056","42f3785a":"7072","685e9813":"7138","71f89b38":"7179","53b3af7a":"7207","3e884023":"7339",a987e5c8:"7414",afa5d0b2:"7466","54b89eb4":"7512",d179580e:"7553","3d11f99a":"7587","5026ea5c":"7613","9242f14e":"7627",f71bf9e2:"7640","4819920a":"7669","027f3190":"7772",ad410354:"7815","1a4e3797":"7920","63165f34":"8032","8bc421df":"8062","0945cc86":"8073","32ae25e3":"8110","33161a8b":"8112",a5f3d4d3:"8135","9e8709bd":"8167","223e4a50":"8191",d7d14c06:"8211","3a6cf436":"8272","3239c303":"8300","030341eb":"8545",common:"8592","338770ad":"8609",f0ad3fbb:"8612","635b4bb2":"8671",cec41d76:"8701","9bbb9bff":"8708","7bdc42a1":"8725","985217f7":"8842","635781a4":"8863","4eb9f0ee":"8878","8b3b5a19":"8898","5627c5e3":"8901","991fd4ed":"8968",d3959fc5:"8970","42795c4f":"8991",f077f840:"8997",b5043254:"8998",dc463d44:"9098","2641d68d":"9157","117aaa88":"9250","93a20088":"9291","56165ff5":"9395","1e4e8123":"9408","1be78505":"9514",dab73f02:"9529",fc49bffc:"9643","0e384e19":"9671","3e86d11e":"9728",f1cfd616:"9768","9cefbf99":"9797","3ec46315":"9847","224a8709":"9872","43ad54b5":"9925"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)f.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>b=e[a]=[f,d]));f.push(b[2]=d);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var d=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+c+")",t.name="ChunkLoadError",t.type=d,t.request=c,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var b,d,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)d=c[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})(),r.nc=void 0})();