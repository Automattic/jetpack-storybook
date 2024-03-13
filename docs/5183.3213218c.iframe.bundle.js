"use strict";(()=>{var mt=Object.defineProperty;var Rt=(R,l,s)=>l in R?mt(R,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):R[l]=s;var Z=(R,l,s)=>(Rt(R,typeof l!="symbol"?l+"":l,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5183],{"../analytics/index.jsx":(R,l,s)=>{s.d(l,{Z:()=>S});var _=s("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),p=s.n(_);const u=p()("dops:analytics");let a,i;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function T(e,n){let c="";if(typeof e=="object"){for(const d in e)c+="&x_"+encodeURIComponent(d)+"="+encodeURIComponent(e[d]);u("Bumping stats %o",e)}else c="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(n),u('Bumping stat "%s" in group "%s"',n,e);return c}function O(e,n){let c="";if(typeof e=="object"){for(const d in e)c+="&"+encodeURIComponent(d)+"="+encodeURIComponent(e[d]);u("Built stats %o",e)}else c="&"+encodeURIComponent(e)+"="+encodeURIComponent(n),u('Built stat "%s" in group "%s"',n,e);return c}const r={initialize:function(e,n,c){r.setUser(e,n),r.setSuperProps(c),r.identifyUser()},setGoogleAnalyticsEnabled:function(e,n=null){this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=n},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,n){i={ID:e,username:n}},setSuperProps:function(e){a=e},assignSuperProps:function(e){a=Object.assign(a||{},e)},mc:{bumpStat:function(e,n){const c=T(e,n);r.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+c+"&t="+Math.random())},bumpStatWithPageView:function(e,n){const c=O(e,n);r.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+c+"&t="+Math.random())}},pageView:{record:function(e,n){r.tracks.recordPageView(e),r.ga.recordPageView(e,n)}},purchase:{record:function(e,n,c,d,C,I,g){r.ga.recordPurchase(e,n,c,d,C,I,g)}},tracks:{recordEvent:function(e,n){if(n=n||{},e.indexOf("akismet_")!==0&&e.indexOf("jetpack_")!==0){u('- Event name must be prefixed by "akismet_" or "jetpack_"');return}a&&(u("- Super Props: %o",a),n=Object.assign(n,a)),u('Record event "%s" called with props %s',e,JSON.stringify(n)),window._tkq.push(["recordEvent",e,n])},recordJetpackClick:function(e){const n=typeof e=="object"?e:{target:e};r.tracks.recordEvent("jetpack_wpa_click",n)},recordPageView:function(e){r.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){u("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};r.ga.initialized||(i&&(e={userId:"u-"+i.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),r.ga.initialized=!0)},recordPageView:function(e,n){r.ga.initialize(),u("Recording Page View ~ [URL: "+e+"] [Title: "+n+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:n}))},recordEvent:function(e,n,c,d){r.ga.initialize();let C="Recording Event ~ [Category: "+e+"] [Action: "+n+"]";typeof c!="undefined"&&(C+=" [Option Label: "+c+"]"),typeof d!="undefined"&&(C+=" [Option Value: "+d+"]"),u(C),this.googleAnalyticsEnabled&&window.ga("send","event",e,n,c,d)},recordPurchase:function(e,n,c,d,C,I,g){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:d,currency:g}),window.ga("ecommerce:addItem",{id:e,name:n,sku:c,price:C,quantity:I}),window.ga("ecommerce:send")}},identifyUser:function(){i&&window._tkq.push(["identifyUser",i.ID,i.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},S=r},"../connection/components/use-connection/index.jsx":(R,l,s)=>{s.d(l,{Z:()=>O});var _=s("../api/index.jsx"),p=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),u=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=s("../connection/state/store.jsx");const T=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},O=({registrationNonce:r=T.registrationNonce,apiRoot:S=T.apiRoot,apiNonce:e=T.apiNonce,redirectUri:n,autoTrigger:c,from:d,skipUserConnection:C}={})=>{const{registerSite:I,connectUser:g,refreshConnectedPlugins:f}=(0,p.Z)(i.t),P=(0,u.Z)(m=>m(i.t).getRegistrationError()),{siteIsRegistering:U,userIsConnecting:y,userConnectionData:N,connectedPlugins:w,connectionErrors:k,isRegistered:A,isUserConnected:x,hasConnectedOwner:v,isOfflineMode:b}=(0,u.Z)(m=>({siteIsRegistering:m(i.t).getSiteIsRegistering(),userIsConnecting:m(i.t).getUserIsConnecting(),userConnectionData:m(i.t).getUserConnectionData(),connectedPlugins:m(i.t).getConnectedPlugins(),connectionErrors:m(i.t).getConnectionErrors(),isOfflineMode:m(i.t).getIsOfflineMode(),...m(i.t).getConnectionStatus()})),h=()=>{if(C){if(n)return window.location=n,Promise.resolve(n)}else return g({from:d,redirectUri:n});return Promise.resolve()},L=m=>(m&&m.preventDefault(),A?h():I({registrationNonce:r,redirectUri:n}).then(()=>h()));return(0,a.useEffect)(()=>{_.ZP.setApiRoot(S),_.ZP.setApiNonce(e)},[S,e]),(0,a.useEffect)(()=>{c&&!U&&!y&&L()},[]),{handleRegisterSite:L,handleConnectUser:h,refreshConnectedPlugins:f,isRegistered:A,isUserConnected:x,siteIsRegistering:U,userIsConnecting:y,registrationError:P,userConnectionData:N,hasConnectedOwner:v,connectedPlugins:w,connectionErrors:k,isOfflineMode:b}}},"../connection/state/store.jsx":(R,l,s)=>{s.d(l,{t:()=>D});var _=s("../api/index.jsx");const p="SET_CONNECTION_STATUS",u="SET_CONNECTION_STATUS_IS_FETCHING",a="FETCH_CONNECTION_STATUS",i="SET_SITE_IS_REGISTERING",T="SET_USER_IS_CONNECTING",O="SET_REGISTRATION_ERROR",r="CLEAR_REGISTRATION_ERROR",S="REGISTER_SITE",e="SET_AUTHORIZATION_URL",n="CONNECT_USER",c="DISCONNECT_USER_SUCCESS",d="FETCH_AUTHORIZATION_URL",C="SET_CONNECTED_PLUGINS",I="REFRESH_CONNECTED_PLUGINS",g="SET_CONNECTION_ERRORS",f="SET_IS_OFFLINE_MODE",P=t=>({type:p,connectionStatus:t}),U=t=>({type:u,isFetching:t}),y=()=>({type:a}),N=t=>({type:i,isRegistering:t}),w=t=>({type:T,isConnecting:t}),k=()=>({type:c}),A=t=>({type:O,registrationError:t}),x=()=>({type:r}),v=t=>({type:e,authorizationUrl:t}),b=t=>({type:d,redirectUri:t}),h=t=>({type:C,connectedPlugins:t}),L=t=>({type:g,connectionErrors:t}),m=t=>({type:f,isOfflineMode:t});function*G({from:t,redirectFunc:o,redirectUri:E}={}){yield w(!0),yield{type:n,from:t,redirectFunc:o,redirectUri:E}}function*J({registrationNonce:t,redirectUri:o}){yield x(),yield N(!0);try{const E=yield{type:S,registrationNonce:t,redirectUri:o};return yield P({isRegistered:!0}),yield v(E.authorizeUrl),yield N(!1),Promise.resolve(E)}catch(E){return yield A(E),yield N(!1),Promise.reject(E)}}const B={setConnectionStatus:P,setConnectionStatusIsFetching:U,fetchConnectionStatus:y,fetchAuthorizationUrl:b,setSiteIsRegistering:N,setUserIsConnecting:w,setRegistrationError:A,clearRegistrationError:x,setAuthorizationUrl:v,registerSite:J,connectUser:G,disconnectUserSuccess:k,setConnectedPlugins:h,refreshConnectedPlugins:()=>async({dispatch:t})=>await new Promise(o=>_.ZP.fetchConnectedPlugins().then(E=>{t(h(E)),o(E)})),setConnectionErrors:L,setIsOfflineMode:m};var Q=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const D="jetpack-connection",V=({registrationNonce:t,redirectUri:o})=>_.ZP.registerSite(t,o),$=(0,Q.R)(({resolveSelect:t})=>({from:o,redirectFunc:E,redirectUri:K}={})=>new Promise((Ct,It)=>{t(D).getAuthorizationUrl(K).then(Y=>{const gt=E||(St=>window.location.assign(St)),W=new URL(Y);o&&W.searchParams.set("from",encodeURIComponent(o));const z=W.toString();gt(z),Ct(z)}).catch(Y=>{It(Y)})})),X={FETCH_AUTHORIZATION_URL:({redirectUri:t})=>_.ZP.fetchAuthorizationUrl(t),REGISTER_SITE:V,CONNECT_USER:$};var F=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=(t={},o)=>{switch(o.type){case p:return{...t,...o.connectionStatus};case c:return{...t,isUserConnected:!1}}return t},tt=(t={},o)=>{switch(o.type){case C:return o.connectedPlugins}return t},et=(t=!1,o)=>{switch(o.type){case u:return o.isFetching}return t},nt=(t=!1,o)=>{switch(o.type){case i:return o.isRegistering}return t},ot=(t=!1,o)=>{switch(o.type){case T:return o.isConnecting}return t},st=(t,o)=>{switch(o.type){case r:return!1;case O:return o.registrationError;default:return t}},ct=(t,o)=>{switch(o.type){case e:return o.authorizationUrl;default:return t}},it=(t,o)=>{switch(o.type){default:return t}},rt=(t={},o)=>{switch(o.type){case g:return o.connectionErrors}return t},at=(t=!1,o)=>{switch(o.type){case f:return o.isConnecting}return t},dt=(0,F.UY)({connectionStatus:q,connectionStatusIsFetching:et,siteIsRegistering:nt,userIsConnecting:ot,registrationError:st,authorizationUrl:ct,userConnectionData:it,connectedPlugins:tt,connectionErrors:rt,isOfflineMode:at});var _t=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ut=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const lt={...{getAuthorizationUrl:{isFulfilled:(t,...o)=>{const E=!!t.authorizationUrl,K=(0,_t.Y)(D).hasFinishedResolution("getAuthorizationUrl",o);return E&&!K&&(0,ut.W)(D).finishResolution("getAuthorizationUrl",o),E},*fulfill(t){const o=yield B.fetchAuthorizationUrl(t);yield B.setAuthorizationUrl(o.authorizeUrl)}}}},Et={...{getConnectionStatus:t=>t.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:t=>t.siteIsRegistering||!1,getUserIsConnecting:t=>t.userIsConnecting||!1,getRegistrationError:t=>t.registrationError||!1,getAuthorizationUrl:t=>t.authorizationUrl||!1,getUserConnectionData:t=>t.userConnectionData||!1,getConnectedPlugins:t=>t.connectedPlugins||[],getConnectionErrors:t=>t.connectionErrors||[],getIsOfflineMode:t=>t.isOfflineMode||!1,getWpcomUser:t=>{var o,E;return(E=(o=t==null?void 0:t.userConnectionData)==null?void 0:o.currentUser)==null?void 0:E.wpcomUser},getBlogId:t=>{var o,E;return(E=(o=t==null?void 0:t.userConnectionData)==null?void 0:o.currentUser)==null?void 0:E.blogId}}};var pt=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const j=class{static mayBeInit(o,E){j.store===null&&(j.store=(0,pt.Z)(o,E),(0,F.z2)(j.store))}};let M=j;Z(M,"store",null);const Tt=M,H=window.JP_CONNECTION_INITIAL_STATE;H||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Tt.mayBeInit(D,{__experimentalUseThunks:!0,reducer:dt,actions:B,selectors:Et,resolvers:lt,controls:X,initialState:H||{}})},"../../packages/my-jetpack/_inc/data/constants.ts":(R,l,s)=>{s.d(l,{Jk:()=>r,Kf:()=>U,LQ:()=>u,RQ:()=>y,Vu:()=>w,YF:()=>e,_H:()=>a,db:()=>I,h3:()=>k,hd:()=>i,iG:()=>d,n2:()=>S,q9:()=>c,yv:()=>C});const _="my-jetpack/v1",p="jetpack/v4/stats-app",u=`${_}/site/purchases`,a=`${_}/site/backup/undo-event`,i=`${_}/site/backup/count-items`,T=`${_}/chat/availability`,O=`${_}/chat/authentication`,r=`${_}/site/products`,S="videopress/v1/stats/featured",e=`${_}/site/dismiss-welcome-banner`,n=A=>`${p}/sites/${A}/stats/highlights`,c="product",d="activate product",C="install product",I="videopress stats",g="available licenses",f="chat availability",P="chat authentication",U="backup history",y="backup stats",N="stats counts",w="dismiss welcome banner",k="purchases"},"../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts":(R,l,s)=>{s.d(l,{o:()=>n});var _=s("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),p=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a={message:"",options:{status:""}},i=(0,p.createContext)({currentNotice:a,setNotice:null}),T=({children:c})=>{const[d,C]=(0,p.useState)(a),I=g=>{d.message||C(g)};return(0,u.jsx)(i.Provider,{value:{currentNotice:d,setNotice:I},children:c})};T.displayName="NoticeContextProvider";const O=null;try{noticeContext.displayName="noticeContext",noticeContext.__docgenInfo={description:"",displayName:"noticeContext",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"]={docgenInfo:noticeContext.__docgenInfo,name:"noticeContext",path:"../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"})}catch(c){}var r=s("../../packages/my-jetpack/_inc/data/constants.ts");const S=_.__,e=[r.h3,r.iG,r.yv],n=({infoName:c,isError:d,overrideMessage:C})=>{const{setNotice:I}=(0,p.useContext)(i),g=C!=null?C:(0,_.gB)(S("There was an error fetching your %s information. Check your site connectivity and try again.","jetpack-my-jetpack"),c);(0,p.useEffect)(()=>{d&&e.includes(c)&&I({message:g,options:{status:"error"}})},[g,I,d,c])}},"../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts":(R,l,s)=>{s.d(l,{$9:()=>_,M_:()=>p,vH:()=>u});const _=a=>{var i,T;return a?(T=(i=window==null?void 0:window.myJetpackInitialState)==null?void 0:i[a])!=null?T:{}:window==null?void 0:window.myJetpackInitialState},p=()=>{var a;return(a=window==null?void 0:window.myJetpackRest)!=null?a:{}},u=a=>{var i,T;return a?(T=(i=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:i[a])!=null?T:{}:window==null?void 0:window.JP_CONNECTION_INITIAL_STATE}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.ts":(R,l,s)=>{s.d(l,{Z:()=>T});var _=s("../analytics/index.jsx"),p=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),a=s("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.ts");const T=()=>{var I;const{isUserConnected:O,connectedPlugins:r,userConnectionData:S={}}=(0,a.Z)(),{login:e,ID:n}=((I=S.currentUser)==null?void 0:I.wpcomUser)||{},{myJetpackVersion:c=""}=(0,u.$9)();(0,p.useEffect)(()=>{O&&n&&e&&_.Z.initialize(n,e)},[n,O,e]);const d=Object.keys(r||{}).sort().join(",").replaceAll("jetpack-","");return{recordEvent:(0,p.useCallback)((g,f)=>{_.Z.tracks.recordEvent(g,{...f,version:c,referring_plugins:d})},[])}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.ts":(R,l,s)=>{s.d(l,{Z:()=>a});var _=s("../connection/components/use-connection/index.jsx"),p=s("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts");const a=()=>{const{apiRoot:i,apiNonce:T}=(0,p.M_)(),{topJetpackMenuItemUrl:O,blogID:r}=(0,p.$9)(),S=(0,_.Z)({apiRoot:i,apiNonce:T}),{registrationNonce:e}=(0,p.vH)(),n=S.isRegistered;return{apiNonce:T,apiRoot:i,blogID:r,registrationNonce:e,...S,isSiteConnected:n,topJetpackMenuItemUrl:O}}}}]);})();