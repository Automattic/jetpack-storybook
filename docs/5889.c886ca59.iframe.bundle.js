(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5889],{"../../../node_modules/.pnpm/@wordpress+api-fetch@6.52.0/node_modules/@wordpress/api-fetch/build-module/index.js":(E,w,u)=>{"use strict";u.d(w,{Z:()=>T});var m=u("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js");function g(e){const r=(t,a)=>{const{headers:n={}}=t;for(const d in n)if(d.toLowerCase()==="x-wp-nonce"&&n[d]===r.nonce)return a(t);return a({...t,headers:{...n,"X-WP-Nonce":r.nonce}})};return r.nonce=e,r}const O=g,_=(e,r)=>{let t=e.path,a,n;return typeof e.namespace=="string"&&typeof e.endpoint=="string"&&(a=e.namespace.replace(/^\/|\/$/g,""),n=e.endpoint.replace(/^\//,""),n?t=a+"/"+n:t=a),delete e.namespace,delete e.endpoint,r({...e,path:t})},v=e=>(r,t)=>_(r,a=>{let n=a.url,d=a.path,s;return typeof d=="string"&&(s=e,e.indexOf("?")!==-1&&(d=d.replace("?","&")),d=d.replace(/^\//,""),typeof s=="string"&&s.indexOf("?")!==-1&&(d=d.replace("?","&")),n=s+d),t({...a,url:n})});function A(e){const r=e.split("?"),t=r[1],a=r[0];return t?a+"?"+t.split("&").map(n=>n.split("=")).map(n=>n.map(decodeURIComponent)).sort((n,d)=>n[0].localeCompare(d[0])).map(n=>n.map(encodeURIComponent)).map(n=>n.join("=")).join("&"):a}var y=u("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/get-query-args.js"),i=u("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/add-query-args.js");function D(e){const r=Object.fromEntries(Object.entries(e).map(([t,a])=>[A(t),a]));return(t,a)=>{const{parse:n=!0}=t;let d=t.path;if(!d&&t.url){const{rest_route:h,...f}=(0,y.w)(t.url);typeof h=="string"&&(d=(0,i.f)(h,f))}if(typeof d!="string")return a(t);const s=t.method||"GET",o=A(d);if(s==="GET"&&r[o]){const h=r[o];return delete r[o],j(h,!!n)}else if(s==="OPTIONS"&&r[s]&&r[s][o]){const h=r[s][o];return delete r[s][o],j(h,!!n)}return a(t)}}function j(e,r){return Promise.resolve(r?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}const k=D,q=({path:e,url:r,...t},a)=>({...t,url:r&&(0,i.f)(r,a),path:e&&(0,i.f)(e,a)}),I=e=>e.json?e.json():Promise.reject(e),F=e=>{if(!e)return{};const r=e.match(/<([^>]+)>; rel="next"/);return r?{next:r[1]}:{}},R=e=>{const{next:r}=F(e.headers.get("link"));return r},Q=e=>{const r=!!e.path&&e.path.indexOf("per_page=-1")!==-1,t=!!e.url&&e.url.indexOf("per_page=-1")!==-1;return r||t},b=async(e,r)=>{if(e.parse===!1||!Q(e))return r(e);const t=await T({...q(e,{per_page:100}),parse:!1}),a=await I(t);if(!Array.isArray(a))return a;let n=R(t);if(!n)return a;let d=[].concat(a);for(;n;){const s=await T({...e,path:void 0,url:n,parse:!1}),o=await I(s);d=d.concat(o),n=R(s)}return d},X=new Set(["PATCH","PUT","DELETE"]),z="GET",G=(e,r)=>{const{method:t=z}=e;return X.has(t.toUpperCase())&&(e={...e,headers:{...e.headers,"X-HTTP-Method-Override":t,"Content-Type":"application/json"},method:"POST"}),r(e)};function U(e,r){return(0,y.w)(e)[r]}function x(e,r){return U(e,r)!==void 0}const J=(e,r)=>(typeof e.url=="string"&&!x(e.url,"_locale")&&(e.url=(0,i.f)(e.url,{_locale:"user"})),typeof e.path=="string"&&!x(e.path,"_locale")&&(e.path=(0,i.f)(e.path,{_locale:"user"})),r(e)),Y=(e,r=!0)=>r?e.status===204?null:e.json?e.json():Promise.reject(e):e,K=e=>{const r={code:"invalid_json",message:(0,m.__)("The response is not a valid JSON response.")};if(!e||!e.json)throw r;return e.json().catch(()=>{throw r})},C=(e,r=!0)=>Promise.resolve(Y(e,r)).catch(t=>M(t,r));function M(e,r=!0){if(!r)throw e;return K(e).then(t=>{const a={code:"unknown_error",message:(0,m.__)("An unknown error occurred.")};throw t||a})}function V(e){const r=!!e.method&&e.method==="POST";return(!!e.path&&e.path.indexOf("/wp/v2/media")!==-1||!!e.url&&e.url.indexOf("/wp/v2/media")!==-1)&&r}const B=(e,r)=>{if(!V(e))return r(e);let t=0;const a=5,n=d=>(t++,r({path:`/wp/v2/media/${d}/post-process`,method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch(()=>t<a?n(d):(r({path:`/wp/v2/media/${d}?force=true`,method:"DELETE"}),Promise.reject())));return r({...e,parse:!1}).catch(d=>{const s=d.headers.get("x-wp-upload-attachment-id");return d.status>=500&&d.status<600&&s?n(s).catch(()=>e.parse!==!1?Promise.reject({code:"post_process",message:(0,m.__)("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(d)):M(d,e.parse)}).then(d=>C(d,e.parse))};var S=u("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/remove-query-args.js");const W=e=>(r,t)=>{if(typeof r.url=="string"){const a=U(r.url,"wp_theme_preview");a===void 0?r.url=(0,i.f)(r.url,{wp_theme_preview:e}):a===""&&(r.url=(0,S.I)(r.url,"wp_theme_preview"))}if(typeof r.path=="string"){const a=U(r.path,"wp_theme_preview");a===void 0?r.path=(0,i.f)(r.path,{wp_theme_preview:e}):a===""&&(r.path=(0,S.I)(r.path,"wp_theme_preview"))}return t(r)},Z={Accept:"application/json, */*;q=0.1"},$={credentials:"include"},N=[J,_,G,b];function ee(e){N.unshift(e)}const H=e=>{if(e.status>=200&&e.status<300)return e;throw e};let L=e=>{const{url:r,path:t,data:a,parse:n=!0,...d}=e;let{body:s,headers:o}=e;return o={...Z,...o},a&&(s=JSON.stringify(a),o["Content-Type"]="application/json"),window.fetch(r||t||window.location.href,{...$,...d,body:s,headers:o}).then(f=>Promise.resolve(f).then(H).catch(P=>M(P,n)).then(P=>C(P,n)),f=>{throw f&&f.name==="AbortError"?f:{code:"fetch_error",message:(0,m.__)("You are probably offline.")}})};function re(e){L=e}function c(e){return N.reduceRight((t,a)=>n=>a(n,t),L)(e).catch(t=>t.code!=="rest_cookie_invalid_nonce"?Promise.reject(t):window.fetch(c.nonceEndpoint).then(H).then(a=>a.text()).then(a=>(c.nonceMiddleware.nonce=a,c(e))))}c.use=ee,c.setFetchHandler=re,c.createNonceMiddleware=O,c.createPreloadingMiddleware=k,c.createRootURLMiddleware=v,c.fetchAllMiddleware=b,c.mediaUploadMiddleware=B,c.createThemePreviewMiddleware=W;const T=c},"../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/remove-query-args.js":(E,w,u)=>{"use strict";u.d(w,{I:()=>O});var m=u("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/get-query-args.js"),g=u("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/build-query-string.js");function O(p,..._){const l=p.indexOf("?");if(l===-1)return p;const v=(0,m.w)(p),A=p.substr(0,l);_.forEach(i=>delete v[i]);const y=(0,g.I)(v);return y?A+"?"+y:A}},"../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js":E=>{var w={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u1EA4:"A",\u1EAE:"A",\u1EB2:"A",\u1EB4:"A",\u1EB6:"A",\u00C6:"AE",\u1EA6:"A",\u1EB0:"A",\u0202:"A",\u1EA2:"A",\u1EA0:"A",\u1EA8:"A",\u1EAA:"A",\u1EAC:"A",\u00C7:"C",\u1E08:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u1EBE:"E",\u1E16:"E",\u1EC0:"E",\u1E14:"E",\u1E1C:"E",\u0206:"E",\u1EBA:"E",\u1EBC:"E",\u1EB8:"E",\u1EC2:"E",\u1EC4:"E",\u1EC6:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u1E2E:"I",\u020A:"I",\u1EC8:"I",\u1ECA:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u1ED0:"O",\u1E4C:"O",\u1E52:"O",\u020E:"O",\u1ECE:"O",\u1ECC:"O",\u1ED4:"O",\u1ED6:"O",\u1ED8:"O",\u1EDC:"O",\u1EDE:"O",\u1EE0:"O",\u1EDA:"O",\u1EE2:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u1EE6:"U",\u1EE4:"U",\u1EEC:"U",\u1EEE:"U",\u1EF0:"U",\u00DD:"Y",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u1EA5:"a",\u1EAF:"a",\u1EB3:"a",\u1EB5:"a",\u1EB7:"a",\u00E6:"ae",\u1EA7:"a",\u1EB1:"a",\u0203:"a",\u1EA3:"a",\u1EA1:"a",\u1EA9:"a",\u1EAB:"a",\u1EAD:"a",\u00E7:"c",\u1E09:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u1EBF:"e",\u1E17:"e",\u1EC1:"e",\u1E15:"e",\u1E1D:"e",\u0207:"e",\u1EBB:"e",\u1EBD:"e",\u1EB9:"e",\u1EC3:"e",\u1EC5:"e",\u1EC7:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u1E2F:"i",\u020B:"i",\u1EC9:"i",\u1ECB:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u1ED1:"o",\u1E4D:"o",\u1E53:"o",\u020F:"o",\u1ECF:"o",\u1ECD:"o",\u1ED5:"o",\u1ED7:"o",\u1ED9:"o",\u1EDD:"o",\u1EDF:"o",\u1EE1:"o",\u1EDB:"o",\u1EE3:"o",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u1EE7:"u",\u1EE5:"u",\u1EED:"u",\u1EEF:"u",\u1EF1:"u",\u00FD:"y",\u00FF:"y",\u0100:"A",\u0101:"a",\u0102:"A",\u0103:"a",\u0104:"A",\u0105:"a",\u0106:"C",\u0107:"c",\u0108:"C",\u0109:"c",\u010A:"C",\u010B:"c",\u010C:"C",\u010D:"c",C\u0306:"C",c\u0306:"c",\u010E:"D",\u010F:"d",\u0110:"D",\u0111:"d",\u0112:"E",\u0113:"e",\u0114:"E",\u0115:"e",\u0116:"E",\u0117:"e",\u0118:"E",\u0119:"e",\u011A:"E",\u011B:"e",\u011C:"G",\u01F4:"G",\u011D:"g",\u01F5:"g",\u011E:"G",\u011F:"g",\u0120:"G",\u0121:"g",\u0122:"G",\u0123:"g",\u0124:"H",\u0125:"h",\u0126:"H",\u0127:"h",\u1E2A:"H",\u1E2B:"h",\u0128:"I",\u0129:"i",\u012A:"I",\u012B:"i",\u012C:"I",\u012D:"i",\u012E:"I",\u012F:"i",\u0130:"I",\u0131:"i",\u0132:"IJ",\u0133:"ij",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u1E30:"K",\u1E31:"k",K\u0306:"K",k\u0306:"k",\u0139:"L",\u013A:"l",\u013B:"L",\u013C:"l",\u013D:"L",\u013E:"l",\u013F:"L",\u0140:"l",\u0141:"l",\u0142:"l",\u1E3E:"M",\u1E3F:"m",M\u0306:"M",m\u0306:"m",\u0143:"N",\u0144:"n",\u0145:"N",\u0146:"n",\u0147:"N",\u0148:"n",\u0149:"n",N\u0306:"N",n\u0306:"n",\u014C:"O",\u014D:"o",\u014E:"O",\u014F:"o",\u0150:"O",\u0151:"o",\u0152:"OE",\u0153:"oe",P\u0306:"P",p\u0306:"p",\u0154:"R",\u0155:"r",\u0156:"R",\u0157:"r",\u0158:"R",\u0159:"r",R\u0306:"R",r\u0306:"r",\u0212:"R",\u0213:"r",\u015A:"S",\u015B:"s",\u015C:"S",\u015D:"s",\u015E:"S",\u0218:"S",\u0219:"s",\u015F:"s",\u0160:"S",\u0161:"s",\u0162:"T",\u0163:"t",\u021B:"t",\u021A:"T",\u0164:"T",\u0165:"t",\u0166:"T",\u0167:"t",T\u0306:"T",t\u0306:"t",\u0168:"U",\u0169:"u",\u016A:"U",\u016B:"u",\u016C:"U",\u016D:"u",\u016E:"U",\u016F:"u",\u0170:"U",\u0171:"u",\u0172:"U",\u0173:"u",\u0216:"U",\u0217:"u",V\u0306:"V",v\u0306:"v",\u0174:"W",\u0175:"w",\u1E82:"W",\u1E83:"w",X\u0306:"X",x\u0306:"x",\u0176:"Y",\u0177:"y",\u0178:"Y",Y\u0306:"Y",y\u0306:"y",\u0179:"Z",\u017A:"z",\u017B:"Z",\u017C:"z",\u017D:"Z",\u017E:"z",\u017F:"s",\u0192:"f",\u01A0:"O",\u01A1:"o",\u01AF:"U",\u01B0:"u",\u01CD:"A",\u01CE:"a",\u01CF:"I",\u01D0:"i",\u01D1:"O",\u01D2:"o",\u01D3:"U",\u01D4:"u",\u01D5:"U",\u01D6:"u",\u01D7:"U",\u01D8:"u",\u01D9:"U",\u01DA:"u",\u01DB:"U",\u01DC:"u",\u1EE8:"U",\u1EE9:"u",\u1E78:"U",\u1E79:"u",\u01FA:"A",\u01FB:"a",\u01FC:"AE",\u01FD:"ae",\u01FE:"O",\u01FF:"o",\u00DE:"TH",\u00FE:"th",\u1E54:"P",\u1E55:"p",\u1E64:"S",\u1E65:"s",X\u0301:"X",x\u0301:"x",\u0403:"\u0413",\u0453:"\u0433",\u040C:"\u041A",\u045C:"\u043A",A\u030B:"A",a\u030B:"a",E\u030B:"E",e\u030B:"e",I\u030B:"I",i\u030B:"i",\u01F8:"N",\u01F9:"n",\u1ED2:"O",\u1ED3:"o",\u1E50:"O",\u1E51:"o",\u1EEA:"U",\u1EEB:"u",\u1E80:"W",\u1E81:"w",\u1EF2:"Y",\u1EF3:"y",\u0200:"A",\u0201:"a",\u0204:"E",\u0205:"e",\u0208:"I",\u0209:"i",\u020C:"O",\u020D:"o",\u0210:"R",\u0211:"r",\u0214:"U",\u0215:"u",B\u030C:"B",b\u030C:"b",\u010C\u0323:"C",\u010D\u0323:"c",\u00CA\u030C:"E",\u00EA\u030C:"e",F\u030C:"F",f\u030C:"f",\u01E6:"G",\u01E7:"g",\u021E:"H",\u021F:"h",J\u030C:"J",\u01F0:"j",\u01E8:"K",\u01E9:"k",M\u030C:"M",m\u030C:"m",P\u030C:"P",p\u030C:"p",Q\u030C:"Q",q\u030C:"q",\u0158\u0329:"R",\u0159\u0329:"r",\u1E66:"S",\u1E67:"s",V\u030C:"V",v\u030C:"v",W\u030C:"W",w\u030C:"w",X\u030C:"X",x\u030C:"x",Y\u030C:"Y",y\u030C:"y",A\u0327:"A",a\u0327:"a",B\u0327:"B",b\u0327:"b",\u1E10:"D",\u1E11:"d",\u0228:"E",\u0229:"e",\u0190\u0327:"E",\u025B\u0327:"e",\u1E28:"H",\u1E29:"h",I\u0327:"I",i\u0327:"i",\u0197\u0327:"I",\u0268\u0327:"i",M\u0327:"M",m\u0327:"m",O\u0327:"O",o\u0327:"o",Q\u0327:"Q",q\u0327:"q",U\u0327:"U",u\u0327:"u",X\u0327:"X",x\u0327:"x",Z\u0327:"Z",z\u0327:"z",\u0439:"\u0438",\u0419:"\u0418",\u0451:"\u0435",\u0401:"\u0415"},u=Object.keys(w).join("|"),m=new RegExp(u,"g"),g=new RegExp(u,"");function O(l){return w[l]}var p=function(l){return l.replace(m,O)},_=function(l){return!!l.match(g)};E.exports=p,E.exports.has=_,E.exports.remove=p}}]);})();