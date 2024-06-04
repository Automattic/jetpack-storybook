"use strict";(()=>{var Ie=Object.defineProperty;var xe=(m,n,s)=>n in m?Ie(m,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[n]=s;var re=(m,n,s)=>(xe(m,typeof n!="symbol"?n+"":n,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4783],{"../connection/state/store.jsx":(m,n,s)=>{s.d(n,{t:()=>N});var l=s("../api/index.jsx");const a="SET_CONNECTION_STATUS",p="SET_CONNECTION_STATUS_IS_FETCHING",d="FETCH_CONNECTION_STATUS",t="SET_SITE_IS_REGISTERING",h="SET_USER_IS_CONNECTING",S="SET_REGISTRATION_ERROR",i="CLEAR_REGISTRATION_ERROR",_="REGISTER_SITE",C="SET_AUTHORIZATION_URL",x="CONNECT_USER",E="DISCONNECT_USER_SUCCESS",g="FETCH_AUTHORIZATION_URL",T="SET_CONNECTED_PLUGINS",I="REFRESH_CONNECTED_PLUGINS",U="SET_CONNECTION_ERRORS",A="SET_IS_OFFLINE_MODE",f=e=>({type:a,connectionStatus:e}),R=e=>({type:p,isFetching:e}),r=()=>({type:d}),j=e=>({type:t,isRegistering:e}),y=e=>({type:h,isConnecting:e}),P=()=>({type:E}),k=e=>({type:S,registrationError:e}),L=()=>({type:i}),K=e=>({type:C,authorizationUrl:e}),D=e=>({type:g,redirectUri:e}),b=e=>({type:T,connectedPlugins:e}),M=e=>({type:U,connectionErrors:e}),W=e=>({type:A,isOfflineMode:e});function*X({from:e,redirectFunc:o,redirectUri:c}={}){yield y(!0),yield{type:x,from:e,redirectFunc:o,redirectUri:c}}function*Y({registrationNonce:e,redirectUri:o,from:c=""}){yield L(),yield j(!0);try{const v=yield{type:_,registrationNonce:e,redirectUri:o,from:c};return yield f({isRegistered:!0}),yield K(v.authorizeUrl),yield j(!1),Promise.resolve(v)}catch(v){return yield k(v),yield j(!1),Promise.reject(v)}}const V={setConnectionStatus:f,setConnectionStatusIsFetching:R,fetchConnectionStatus:r,fetchAuthorizationUrl:D,setSiteIsRegistering:j,setUserIsConnecting:y,setRegistrationError:k,clearRegistrationError:L,setAuthorizationUrl:K,registerSite:Y,connectUser:X,disconnectUserSuccess:P,setConnectedPlugins:b,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(o=>l.ZP.fetchConnectedPlugins().then(c=>{e(b(c)),o(c)})),setConnectionErrors:M,setIsOfflineMode:W};var $=s("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const N="jetpack-connection",Q=({registrationNonce:e,redirectUri:o,from:c})=>l.ZP.registerSite(e,o,c),H=(0,$.R)(({resolveSelect:e})=>({from:o,redirectFunc:c,redirectUri:v}={})=>new Promise((fe,Se)=>{e(N).getAuthorizationUrl(v).then(q=>{const Te=c||(Ce=>window.location.assign(Ce)),te=new URL(q);o&&te.searchParams.set("from",encodeURIComponent(o));const ne=te.toString();Te(ne),fe(ne)}).catch(q=>{Se(q)})})),w={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>l.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:Q,CONNECT_USER:H};var z=s("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const G=(e={},o)=>{switch(o.type){case a:return{...e,...o.connectionStatus};case E:return{...e,isUserConnected:!1}}return e},u=(e={},o)=>{switch(o.type){case T:return o.connectedPlugins}return e},O=(e=!1,o)=>{switch(o.type){case p:return o.isFetching}return e},Z=(e=!1,o)=>{switch(o.type){case t:return o.isRegistering}return e},ae=(e=!1,o)=>{switch(o.type){case h:return o.isConnecting}return e},de=(e,o)=>{switch(o.type){case i:return!1;case S:return o.registrationError;default:return e}},ce=(e,o)=>{switch(o.type){case C:return o.authorizationUrl;default:return e}},le=(e,o)=>{switch(o.type){default:return e}},ie=(e={},o)=>{switch(o.type){case U:return o.connectionErrors}return e},_e=(e=!1,o)=>{switch(o.type){case A:return o.isConnecting}return e},pe=(0,z.UY)({connectionStatus:G,connectionStatusIsFetching:O,siteIsRegistering:Z,userIsConnecting:ae,registrationError:de,authorizationUrl:ce,userConnectionData:le,connectedPlugins:u,connectionErrors:ie,isOfflineMode:_e});var ue=s("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),me=s("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const he={...{getAuthorizationUrl:{isFulfilled:(e,...o)=>{const c=!!e.authorizationUrl,v=(0,ue.Y)(N).hasFinishedResolution("getAuthorizationUrl",o);return c&&!v&&(0,me.W)(N).finishResolution("getAuthorizationUrl",o),c},*fulfill(e){const o=yield V.fetchAuthorizationUrl(e);yield V.setAuthorizationUrl(o.authorizeUrl)}}}},Ee={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var o,c;return(c=(o=e==null?void 0:e.userConnectionData)==null?void 0:o.currentUser)==null?void 0:c.wpcomUser},getBlogId:e=>{var o,c;return(c=(o=e==null?void 0:e.userConnectionData)==null?void 0:o.currentUser)==null?void 0:c.blogId}}};var je=s("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");const F=class{static mayBeInit(o,c){F.store===null&&(F.store=(0,je.Z)(o,c),(0,z.z2)(F.store))}};let J=F;re(J,"store",null);const ge=J,oe=window.JP_CONNECTION_INITIAL_STATE;oe||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),ge.mayBeInit(N,{__experimentalUseThunks:!0,reducer:pe,actions:V,selectors:Ee,resolvers:he,controls:w,initialState:oe||{}})},"../components/components/automattic-byline-logo/index.tsx":(m,n,s)=>{s.d(n,{Z:()=>i});var l=s("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),a=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=s.n(a),d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=l.__,i=({title:_=h("An Automattic Airline","jetpack"),height:C=7,className:x,...E})=>(0,t.jsxs)("svg",{role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:C,className:p()("jp-automattic-byline-logo",x),...E,children:[(0,t.jsx)("desc",{id:"jp-automattic-byline-logo-title",children:_}),(0,t.jsx)("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),(0,t.jsx)("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),(0,t.jsx)("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"})]})},"../components/components/jetpack-footer/index.tsx":(m,n,s)=>{s.d(n,{Z:()=>K});var l=s("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=s("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),p=s("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),d=s("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),t=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),h=s.n(t),S=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=s("../components/tools/jp-redirect/index.ts"),_=s("../connection/state/store.jsx");function C(){var D,b,M;return((D=window.Initial_State)==null?void 0:D.adminUrl)||((b=window.Jetpack_Editor_Initial_State)==null?void 0:b.adminUrl)||((M=window==null?void 0:window.myJetpackInitialState)==null?void 0:M.adminUrl)||null}var x=s("../components/components/automattic-byline-logo/index.tsx"),E=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=s.n(E),T=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss"),I={};I.insert="head",I.singleton=!1;var U=g()(T.Z,I);const A=T.Z.locals||{};var f=s("../components/components/jetpack-logo/index.tsx"),R=s("../components/components/layout/use-breakpoint-match/index.ts"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=a.__,y=a._x,P=()=>(0,r.jsx)(f.Z,{logoColor:"#000",showText:!1,height:16,"aria-hidden":"true"}),k=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{icon:d.Z,size:16}),(0,r.jsx)("span",{className:"jp-dashboard-footer__accessible-external-link",children:j("(opens in a new tab)","jetpack")})]}),K=({moduleName:D=j("Jetpack","jetpack"),className:b,moduleNameHref:M="https://jetpack.com",menu:W,onAboutClick:X,onPrivacyClick:Y,onTermsClick:ee,...V})=>{const[$]=(0,R.Z)("sm","<="),[se]=(0,R.Z)("md","<="),[N]=(0,R.Z)("lg",">"),{isActive:Q,connectedPlugins:H}=(0,l.Z)(u=>{const O=u(_.t);return{connectedPlugins:O==null?void 0:O.getConnectedPlugins(),...O.getConnectionStatus()}},[_.t]),B=C(),w=B&&Q&&(H==null?void 0:H.some(({slug:u})=>u==="jetpack"));let z=[{label:y("About","Link to learn more about Jetpack.","jetpack"),title:j("About Jetpack","jetpack"),href:w?new URL("admin.php?page=jetpack_about",B).href:(0,i.Z)("jetpack-about"),target:w?"_self":"_blank",onClick:X},{label:y("Privacy","Shorthand for Privacy Policy.","jetpack"),title:j("Automattic's Privacy Policy","jetpack"),href:w?new URL("admin.php?page=jetpack#/privacy",B).href:(0,i.Z)("a8c-privacy"),target:w?"_self":"_blank",onClick:Y},{label:y("Terms","Shorthand for Terms of Service.","jetpack"),title:j("WordPress.com Terms of Service","jetpack"),href:(0,i.Z)("wpcom-tos"),target:"_blank",onClick:ee}];W&&(z=[...z,...W]);const G=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P,{}),D]});return(0,r.jsx)("footer",{className:h()("jp-dashboard-footer",{"is-sm":$,"is-md":se,"is-lg":N},b),"aria-label":j("Jetpack","jetpack"),...V,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"jp-dashboard-footer__jp-item",children:M?(0,r.jsx)("a",{href:M,children:G}):G}),z.map(u=>{const O=u.role==="button",Z=!O&&u.target==="_blank";return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:u.href,title:u.title,target:u.target,onClick:u.onClick,onKeyDown:u.onKeyDown,className:h()("jp-dashboard-footer__menu-item",{"is-external":Z}),role:u.role,rel:Z?"noopener noreferrer":void 0,tabIndex:O?0:void 0,children:[u.label,Z&&(0,r.jsx)(k,{})]})},u.label)}),(0,r.jsx)("li",{className:"jp-dashboard-footer__a8c-item",children:(0,r.jsx)("a",{href:w?new URL("admin.php?page=jetpack_about",B).href:(0,i.Z)("a8c-about"),"aria-label":j("An Automattic Airline","jetpack"),children:(0,r.jsx)(x.Z,{"aria-hidden":"true"})})})]})})}},"../components/components/jetpack-logo/index.tsx":(m,n,s)=>{s.d(n,{Z:()=>i});var l=s("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),a=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=s.n(a),d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=l.__,i=({logoColor:_="#069e08",showText:C=!0,className:x,height:E=32,...g})=>{const T=C?"0 0 118 32":"0 0 32 32";return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:T,className:p()("jetpack-logo",x),"aria-labelledby":"jetpack-logo-title",height:E,...g,role:"img",children:[(0,t.jsx)("title",{id:"jetpack-logo-title",children:h("Jetpack Logo","jetpack")}),(0,t.jsx)("path",{fill:_,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,t.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,t.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,t.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,t.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,t.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,t.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})}},"../components/components/layout/use-breakpoint-match/index.ts":(m,n,s)=>{s.d(n,{Z:()=>x});var l=s("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=s.n(a),d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),t={};t.insert="head",t.singleton=!1;var h=p()(d.Z,t);const S=d.Z.locals||{},i=["sm","md","lg"],_=(E,g,T)=>{const I=i.indexOf(E),U=I+1,A=g.includes("=");let f=[];return g.startsWith("<")&&(f=i.slice(0,A?U:I)),g.startsWith(">")&&(f=i.slice(A?I:U)),f!=null&&f.length?f.some(R=>T[R]):T[E]},x=(E,g)=>{const T=Array.isArray(E)?E:[E],I=Array.isArray(g)?g:[g],[U,A,f]=i,R=(0,l.Z)(S[U]),r=(0,l.Z)(S[A]),j=(0,l.Z)(S[f]),y={sm:R,md:r,lg:j};return T.map((P,k)=>{const L=I[k];return L?_(P,L,y):y[P]})}},"../components/tools/jp-redirect/index.ts":(m,n,s)=>{s.d(n,{Z:()=>l});function l(a,p={}){var S,i;const d={};let t;if(typeof window!="undefined"&&(t=(S=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:S.calypsoEnv),a.search("https://")===0){const _=new URL(a);a=`https://${_.host}${_.pathname}`,d.url=encodeURIComponent(a)}else d.source=encodeURIComponent(a);for(const _ in p)d[_]=encodeURIComponent(p[_]);return!Object.keys(d).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(d.site=(i=jetpack_redirects.currentBlogID)!=null?i:jetpack_redirects.currentSiteRawUrl),t&&(d.calypso_env=t),"https://jetpack.com/redirect/?"+Object.keys(d).map(_=>_+"="+d[_]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss":(m,n,s)=>{s.d(n,{Z:()=>h});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(l),p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=s.n(p),t=d()(a());t.push([m.id,".jp-dashboard-footer{display:flex;flex-wrap:wrap;align-items:center;max-width:1128px;width:100%;color:var(--jp-black);font-size:var(--font-body-extra-small);line-height:1.333}.jp-dashboard-footer a{text-decoration:none}.jp-dashboard-footer a:any-link,.jp-dashboard-footer a[role=button]{color:inherit}.jp-dashboard-footer a:hover{text-decoration:underline;text-decoration-thickness:1.5px}.jp-dashboard-footer a:focus{border-radius:2px;box-shadow:none;outline:1.5px solid currentColor;outline-offset:3px}.jp-dashboard-footer.is-sm>ul{flex-direction:column;align-items:flex-start;gap:.125rem}.jp-dashboard-footer.is-md{flex-direction:column;align-items:flex-start}.jp-dashboard-footer>ul{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;width:100%;margin:0;padding:0;list-style:none}.jp-dashboard-footer>ul>li{margin-bottom:0}.jp-dashboard-footer>ul>li>a{display:flex;align-items:center;gap:.25rem;min-height:44px}.jp-dashboard-footer__accessible-external-link{border:0px;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0px;position:absolute;width:1px;overflow-wrap:normal}.jp-dashboard-footer__jp-item{padding-inline-end:1rem;font-weight:600}.jp-dashboard-footer.is-sm .jp-dashboard-footer__jp-item{padding-bottom:1rem}.jp-dashboard-footer.is-lg .jp-dashboard-footer__a8c-item{margin-inline-start:auto}.jp-dashboard-footer.is-sm .jp-dashboard-footer__a8c-item{padding-top:1rem}.jp-dashboard-footer__jp-item>a,.jp-dashboard-footer__a8c-item>a{text-decoration:none}",""]);const h=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(m,n,s)=>{s.d(n,{Z:()=>h});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(l),p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=s.n(p),t=d()(a());t.push([m.id,"",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const h=t}}]);})();
