"use strict";(()=>{var Ae=Object.defineProperty;var ye=(h,r,s)=>r in h?Ae(h,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):h[r]=s;var re=(h,r,s)=>(ye(h,typeof r!="symbol"?r+"":r,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5475],{"../connection/state/store.jsx":(h,r,s)=>{var te;s.d(r,{a:()=>y});var i=s("../script-data/src/utils.ts"),d=s("../api/index.jsx");const u="SET_CONNECTION_STATUS",o="SET_CONNECTION_STATUS_IS_FETCHING",a="FETCH_CONNECTION_STATUS",g="SET_SITE_IS_REGISTERING",n="SET_USER_IS_CONNECTING",p="SET_REGISTRATION_ERROR",l="CLEAR_REGISTRATION_ERROR",v="REGISTER_SITE",x="SET_AUTHORIZATION_URL",f="CONNECT_USER",j="DISCONNECT_USER_SUCCESS",T="FETCH_AUTHORIZATION_URL",C="SET_CONNECTED_PLUGINS",L="REFRESH_CONNECTED_PLUGINS",I="SET_CONNECTION_ERRORS",E="SET_IS_OFFLINE_MODE",c=e=>({type:u,connectionStatus:e}),S=e=>({type:o,isFetching:e}),O=()=>({type:a}),A=e=>({type:g,isRegistering:e}),w=e=>({type:n,isConnecting:e}),F=()=>({type:j}),k=e=>({type:p,registrationError:e}),U=()=>({type:l}),N=e=>({type:x,authorizationUrl:e}),M=e=>({type:T,redirectUri:e}),D=e=>({type:C,connectedPlugins:e}),J=e=>({type:I,connectionErrors:e}),Z=e=>({type:E,isOfflineMode:e});function*X({from:e,redirectFunc:t,redirectUri:_}={}){yield w(!0),yield{type:f,from:e,redirectFunc:t,redirectUri:_}}function*$({registrationNonce:e,redirectUri:t,from:_=""}){yield U(),yield A(!0);try{const R=yield{type:v,registrationNonce:e,redirectUri:t,from:_};return yield c({isRegistered:!0}),yield N(R.authorizeUrl),yield A(!1),Promise.resolve(R)}catch(R){return yield k(R),yield A(!1),Promise.reject(R)}}const H={setConnectionStatus:c,setConnectionStatusIsFetching:S,fetchConnectionStatus:O,fetchAuthorizationUrl:M,setSiteIsRegistering:A,setUserIsConnecting:w,setRegistrationError:k,clearRegistrationError:U,setAuthorizationUrl:N,registerSite:$,connectUser:X,disconnectUserSuccess:F,setConnectedPlugins:D,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>d.Ay.fetchConnectedPlugins().then(_=>{e(D(_)),t(_)})),setConnectionErrors:J,setIsOfflineMode:Z};var Y=s("../../../node_modules/.pnpm/@wordpress+data@10.9.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const y="jetpack-connection",z=({registrationNonce:e,redirectUri:t,from:_})=>d.Ay.registerSite(e,t,_),P=(0,Y.b)(({resolveSelect:e})=>({from:t,redirectFunc:_,redirectUri:R}={})=>new Promise((xe,Te)=>{e(y).getAuthorizationUrl(R).then(Q=>{const Ce=_||(Ie=>window.location.assign(Ie)),oe=new URL(Q);t&&oe.searchParams.set("from",encodeURIComponent(t));const ne=oe.toString();Ce(ne),xe(ne)}).catch(Q=>{Te(Q)})})),W={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>d.Ay.fetchAuthorizationUrl(e),REGISTER_SITE:z,CONNECT_USER:P};var m=s("../../../node_modules/.pnpm/@wordpress+data@10.9.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const b=(e={},t)=>{switch(t.type){case u:return{...e,...t.connectionStatus};case j:return{...e,isUserConnected:!1}}return e},V=(e={},t)=>{switch(t.type){case C:return t.connectedPlugins}return e},ce=(e=!1,t)=>{switch(t.type){case o:return t.isFetching}return e},ae=(e=!1,t)=>{switch(t.type){case g:return t.isRegistering}return e},de=(e=!1,t)=>{switch(t.type){case n:return t.isConnecting}return e},le=(e,t)=>{switch(t.type){case l:return!1;case p:return t.registrationError;default:return e}},ie=(e,t)=>{switch(t.type){case x:return t.authorizationUrl;default:return e}},_e=(e,t)=>{switch(t.type){default:return e}},pe=(e={},t)=>{switch(t.type){case I:return t.connectionErrors}return e},ue=(e=!1,t)=>{switch(t.type){case E:return t.isConnecting}return e},me=(0,m.HY)({connectionStatus:b,connectionStatusIsFetching:ce,siteIsRegistering:ae,userIsConnecting:de,registrationError:le,authorizationUrl:ie,userConnectionData:_e,connectedPlugins:V,connectionErrors:pe,isOfflineMode:ue});var he=s("../../../node_modules/.pnpm/@wordpress+data@10.9.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),je=s("../../../node_modules/.pnpm/@wordpress+data@10.9.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const Ee={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const _=!!e.authorizationUrl,R=(0,he.L)(y).hasFinishedResolution("getAuthorizationUrl",t);return _&&!R&&(0,je.J)(y).finishResolution("getAuthorizationUrl",t),_},*fulfill(e){const t=yield H.fetchAuthorizationUrl(e);yield H.setAuthorizationUrl(t.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,_;return(_=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:_.wpcomUser},getBlogId:e=>{var t,_;return(_=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:_.blogId}}};var fe=s("../../../node_modules/.pnpm/@wordpress+data@10.9.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");const B=class{static mayBeInit(t,_){B.store===null&&(B.store=(0,fe.A)(t,_),(0,m.kz)(B.store))}};let G=B;re(G,"store",null);const Se=G,se=window.JP_CONNECTION_INITIAL_STATE||((te=(0,i.au)())==null?void 0:te.connection);se||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Se.mayBeInit(y,{__experimentalUseThunks:!0,reducer:me,actions:H,selectors:ge,resolvers:Ee,controls:W,initialState:se||{}})},"../components/components/automattic-byline-logo/index.tsx":(h,r,s)=>{s.d(r,{A:()=>n});var i=s("../../../node_modules/.pnpm/@wordpress+i18n@5.9.0/node_modules/@wordpress/i18n/build-module/index.js"),d=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=i.__,n=({title:p=a("An Automattic Airline","jetpack"),height:l=7,className:v,...x})=>(0,o.jsxs)("svg",{role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:l,className:(0,d.A)("jp-automattic-byline-logo",v),...x,children:[(0,o.jsx)("desc",{id:"jp-automattic-byline-logo-title",children:p}),(0,o.jsx)("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),(0,o.jsx)("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),(0,o.jsx)("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"})]})},"../components/components/jetpack-footer/index.tsx":(h,r,s)=>{s.d(r,{A:()=>k});var i=s("../../../node_modules/.pnpm/@wordpress+data@10.9.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),d=s("../../../node_modules/.pnpm/@wordpress+i18n@5.9.0/node_modules/@wordpress/i18n/build-module/index.js"),u=s("../../../node_modules/.pnpm/@wordpress+icons@10.9.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),o=s("../../../node_modules/.pnpm/@wordpress+icons@10.9.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),a=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=s("../components/tools/jp-redirect/index.ts"),p=s("../connection/state/store.jsx");function l(){var U,N,M;return((U=window.Initial_State)==null?void 0:U.adminUrl)||((N=window.Jetpack_Editor_Initial_State)==null?void 0:N.adminUrl)||((M=window==null?void 0:window.myJetpackInitialState)==null?void 0:M.adminUrl)||null}var v=s("../components/components/automattic-byline-logo/index.tsx"),x=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=s.n(x),j=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss"),T={};T.insert="head",T.singleton=!1;var C=f()(j.A,T);const L=j.A.locals||{};var I=s("../components/components/jetpack-logo/index.tsx"),E=s("../components/components/layout/use-breakpoint-match/index.ts"),c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=d.__,O=d._x,A=()=>(0,c.jsx)(I.A,{logoColor:"#000",showText:!1,height:16,"aria-hidden":"true"}),w=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.A,{icon:o.A,size:16}),(0,c.jsx)("span",{className:"jp-dashboard-footer__accessible-external-link",children:S("(opens in a new tab)","jetpack")})]}),k=({moduleName:U=S("Jetpack","jetpack"),className:N,moduleNameHref:M="https://jetpack.com",menu:D,onAboutClick:J,onPrivacyClick:Z,onTermsClick:X,...$})=>{const[q]=(0,E.A)("sm","<="),[H]=(0,E.A)("md","<="),[Y]=(0,E.A)("lg",">"),{isActive:ee,connectedPlugins:y}=(0,i.A)(m=>{const b=m(p.a);return{connectedPlugins:b==null?void 0:b.getConnectedPlugins(),...b.getConnectionStatus()}},[]),z=l(),P=z&&ee&&(y==null?void 0:y.some(({slug:m})=>m==="jetpack"));let K=[{label:O("About","Link to learn more about Jetpack.","jetpack"),title:S("About Jetpack","jetpack"),href:P?new URL("admin.php?page=jetpack_about",z).href:(0,n.A)("jetpack-about"),target:P?"_self":"_blank",onClick:J},{label:O("Privacy","Shorthand for Privacy Policy.","jetpack"),title:S("Automattic's Privacy Policy","jetpack"),href:P?new URL("admin.php?page=jetpack#/privacy",z).href:(0,n.A)("a8c-privacy"),target:P?"_self":"_blank",onClick:Z},{label:O("Terms","Shorthand for Terms of Service.","jetpack"),title:S("WordPress.com Terms of Service","jetpack"),href:(0,n.A)("wpcom-tos"),target:"_blank",onClick:X}];D&&(K=[...K,...D]);const W=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A,{}),U]});return(0,c.jsx)("footer",{className:(0,a.A)("jp-dashboard-footer",{"is-sm":q,"is-md":H,"is-lg":Y},N),"aria-label":S("Jetpack","jetpack"),...$,children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"jp-dashboard-footer__jp-item",children:M?(0,c.jsx)("a",{href:M,children:W}):W}),K.map(m=>{const b=m.role==="button",V=!b&&m.target==="_blank";return(0,c.jsx)("li",{children:(0,c.jsxs)("a",{href:m.href,title:m.title,target:m.target,onClick:m.onClick,onKeyDown:m.onKeyDown,className:(0,a.A)("jp-dashboard-footer__menu-item",{"is-external":V}),role:m.role,rel:V?"noopener noreferrer":void 0,tabIndex:b?0:void 0,children:[m.label,V&&(0,c.jsx)(w,{})]})},m.label)}),(0,c.jsx)("li",{className:"jp-dashboard-footer__a8c-item",children:(0,c.jsx)("a",{href:P?new URL("admin.php?page=jetpack_about",z).href:(0,n.A)("a8c-about"),"aria-label":S("An Automattic Airline","jetpack"),children:(0,c.jsx)(v.A,{"aria-hidden":"true"})})})]})})}},"../components/components/jetpack-logo/index.tsx":(h,r,s)=>{s.d(r,{A:()=>n});var i=s("../../../node_modules/.pnpm/@wordpress+i18n@5.9.0/node_modules/@wordpress/i18n/build-module/index.js"),d=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=i.__,n=({logoColor:p="#069e08",showText:l=!0,className:v,height:x=32,...f})=>{const j=l?"0 0 118 32":"0 0 32 32";return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:j,className:(0,d.A)("jetpack-logo",v),"aria-labelledby":"jetpack-logo-title",height:x,...f,role:"img",children:[(0,o.jsx)("title",{id:"jetpack-logo-title",children:a("Jetpack Logo","jetpack")}),(0,o.jsx)("path",{fill:p,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,o.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,o.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,o.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,o.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,o.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,o.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})}},"../components/components/layout/use-breakpoint-match/index.ts":(h,r,s)=>{s.d(r,{A:()=>x});var i=s("../../../node_modules/.pnpm/@wordpress+compose@7.9.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=s.n(d),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var g=u()(o.A,a);const n=o.A.locals||{},p=["sm","md","lg"],l=(f,j,T)=>{const C=p.indexOf(f),L=C+1,I=j.includes("=");let E=[];return j.startsWith("<")&&(E=p.slice(0,I?L:C)),j.startsWith(">")&&(E=p.slice(I?C:L)),E!=null&&E.length?E.some(c=>T[c]):T[f]},x=(f,j)=>{const T=Array.isArray(f)?f:[f],C=Array.isArray(j)?j:[j],[L,I,E]=p,c=(0,i.A)(n[L]),S=(0,i.A)(n[I]),O=(0,i.A)(n[E]),A={sm:c,md:S,lg:O};return T.map((w,F)=>{const k=C[F];return k?l(w,k,A):A[w]})}},"../components/tools/jp-redirect/index.ts":(h,r,s)=>{s.d(r,{A:()=>i});function i(d,u={}){var n,p;const o={};let a;if(typeof window!="undefined"&&(a=(n=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:n.calypsoEnv),d.search("https://")===0){const l=new URL(d);d=`https://${l.host}${l.pathname}`,o.url=encodeURIComponent(d)}else o.source=encodeURIComponent(d);for(const l in u)o[l]=encodeURIComponent(u[l]);return!Object.keys(o).includes("site")&&typeof jetpack_redirects!="undefined"&&Object.hasOwn(jetpack_redirects,"currentSiteRawUrl")&&(o.site=(p=jetpack_redirects.currentBlogID)!=null?p:jetpack_redirects.currentSiteRawUrl),a&&(o.calypso_env=a),"https://jetpack.com/redirect/?"+Object.keys(o).map(l=>l+"="+o[l]).join("&")}},"../script-data/src/utils.ts":(h,r,s)=>{s.d(r,{au:()=>i});function i(){return window.JetpackScriptData}function d(){return i().site}function u(n=""){return`${i().site.admin_url}${n}`}function o(n=""){return u(`admin.php?page=jetpack${n}`)}function a(n=""){return u(`admin.php?page=my-jetpack${n}`)}function g(){var n,p,l;return(l=(p=(n=i().site.plan)==null?void 0:n.features)==null?void 0:p.active)!=null?l:[]}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss":(h,r,s)=>{s.d(r,{A:()=>g});var i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(i),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=s.n(u),a=o()(d());a.push([h.id,".jp-dashboard-footer{display:flex;flex-wrap:wrap;align-items:center;max-width:1128px;width:100%;color:var(--jp-black);font-size:var(--font-body-extra-small);line-height:1.333}.jp-dashboard-footer a{text-decoration:none}.jp-dashboard-footer a:any-link,.jp-dashboard-footer a[role=button]{color:inherit}.jp-dashboard-footer a:hover{text-decoration:underline;text-decoration-thickness:1.5px}.jp-dashboard-footer a:focus{border-radius:2px;box-shadow:none;outline:1.5px solid currentColor;outline-offset:3px}.jp-dashboard-footer.is-sm>ul{flex-direction:column;align-items:flex-start;gap:.125rem}.jp-dashboard-footer.is-md{flex-direction:column;align-items:flex-start}.jp-dashboard-footer>ul{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;width:100%;margin:0;padding:0;list-style:none}.jp-dashboard-footer>ul>li{margin-bottom:0}.jp-dashboard-footer>ul>li>a{display:flex;align-items:center;gap:.25rem;min-height:44px}.jp-dashboard-footer__accessible-external-link{border:0px;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0px;position:absolute;width:1px;overflow-wrap:normal}.jp-dashboard-footer__jp-item{padding-inline-end:1rem;font-weight:600}.jp-dashboard-footer.is-sm .jp-dashboard-footer__jp-item{padding-bottom:1rem}.jp-dashboard-footer.is-lg .jp-dashboard-footer__a8c-item{margin-inline-start:auto}.jp-dashboard-footer.is-sm .jp-dashboard-footer__a8c-item{padding-top:1rem}.jp-dashboard-footer__jp-item>a,.jp-dashboard-footer__a8c-item>a{text-decoration:none}",""]);const g=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(h,r,s)=>{s.d(r,{A:()=>g});var i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(i),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=s.n(u),a=o()(d());a.push([h.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const g=a}}]);})();
