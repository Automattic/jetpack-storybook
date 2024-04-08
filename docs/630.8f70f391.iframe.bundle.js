"use strict";(()=>{var Nt=Object.defineProperty;var Ot=(C,c,n)=>c in C?Nt(C,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):C[c]=n;var Z=(C,c,n)=>(Ot(C,typeof c!="symbol"?c+"":c,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[630],{"../connection/components/use-connection/index.jsx":(C,c,n)=>{n.d(c,{Z:()=>p});var r=n("../api/index.jsx"),u=n("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),T=n("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../connection/state/store.jsx");const a=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},p=({registrationNonce:N=a.registrationNonce,apiRoot:P=a.apiRoot,apiNonce:A=a.apiNonce,redirectUri:E,autoTrigger:U,from:m,skipUserConnection:h}={})=>{const{registerSite:I,connectUser:d,refreshConnectedPlugins:l}=(0,u.Z)(o.t),R=(0,T.Z)(_=>_(o.t).getRegistrationError()),{siteIsRegistering:S,userIsConnecting:O,userConnectionData:f,connectedPlugins:w,connectionErrors:x,isRegistered:y,isUserConnected:Y,hasConnectedOwner:j,isOfflineMode:M}=(0,T.Z)(_=>({siteIsRegistering:_(o.t).getSiteIsRegistering(),userIsConnecting:_(o.t).getUserIsConnecting(),userConnectionData:_(o.t).getUserConnectionData(),connectedPlugins:_(o.t).getConnectedPlugins(),connectionErrors:_(o.t).getConnectionErrors(),isOfflineMode:_(o.t).getIsOfflineMode(),..._(o.t).getConnectionStatus()})),D=()=>{if(h){if(E)return window.location=E,Promise.resolve(E)}else return d({from:m,redirectUri:E});return Promise.resolve()},k=_=>(_&&_.preventDefault(),y?D():I({registrationNonce:N,redirectUri:E,from:m}).then(()=>D()));return(0,i.useEffect)(()=>{r.ZP.setApiRoot(P),r.ZP.setApiNonce(A)},[P,A]),(0,i.useEffect)(()=>{U&&!S&&!O&&k()},[]),{handleRegisterSite:k,handleConnectUser:D,refreshConnectedPlugins:l,isRegistered:y,isUserConnected:Y,siteIsRegistering:S,userIsConnecting:O,registrationError:R,userConnectionData:f,hasConnectedOwner:j,connectedPlugins:w,connectionErrors:x,isOfflineMode:M}}},"../connection/state/store.jsx":(C,c,n)=>{n.d(c,{t:()=>L});var r=n("../api/index.jsx");const u="SET_CONNECTION_STATUS",T="SET_CONNECTION_STATUS_IS_FETCHING",i="FETCH_CONNECTION_STATUS",o="SET_SITE_IS_REGISTERING",a="SET_USER_IS_CONNECTING",p="SET_REGISTRATION_ERROR",N="CLEAR_REGISTRATION_ERROR",P="REGISTER_SITE",A="SET_AUTHORIZATION_URL",E="CONNECT_USER",U="DISCONNECT_USER_SUCCESS",m="FETCH_AUTHORIZATION_URL",h="SET_CONNECTED_PLUGINS",I="REFRESH_CONNECTED_PLUGINS",d="SET_CONNECTION_ERRORS",l="SET_IS_OFFLINE_MODE",R=t=>({type:u,connectionStatus:t}),S=t=>({type:T,isFetching:t}),O=()=>({type:i}),f=t=>({type:o,isRegistering:t}),w=t=>({type:a,isConnecting:t}),x=()=>({type:U}),y=t=>({type:p,registrationError:t}),Y=()=>({type:N}),j=t=>({type:A,authorizationUrl:t}),M=t=>({type:m,redirectUri:t}),D=t=>({type:h,connectedPlugins:t}),k=t=>({type:d,connectionErrors:t}),_=t=>({type:l,isOfflineMode:t});function*W({from:t,redirectFunc:e,redirectUri:s}={}){yield w(!0),yield{type:E,from:t,redirectFunc:e,redirectUri:s}}function*Q({registrationNonce:t,redirectUri:e,from:s=""}){yield Y(),yield f(!0);try{const g=yield{type:P,registrationNonce:t,redirectUri:e,from:s};return yield R({isRegistered:!0}),yield j(g.authorizeUrl),yield f(!1),Promise.resolve(g)}catch(g){return yield y(g),yield f(!1),Promise.reject(g)}}const F={setConnectionStatus:R,setConnectionStatusIsFetching:S,fetchConnectionStatus:O,fetchAuthorizationUrl:M,setSiteIsRegistering:f,setUserIsConnecting:w,setRegistrationError:y,clearRegistrationError:Y,setAuthorizationUrl:j,registerSite:Q,connectUser:W,disconnectUserSuccess:x,setConnectedPlugins:D,refreshConnectedPlugins:()=>async({dispatch:t})=>await new Promise(e=>r.ZP.fetchConnectedPlugins().then(s=>{t(D(s)),e(s)})),setConnectionErrors:k,setIsOfflineMode:_};var J=n("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const L="jetpack-connection",$=({registrationNonce:t,redirectUri:e,from:s})=>r.ZP.registerSite(t,e,s),V=(0,J.R)(({resolveSelect:t})=>({from:e,redirectFunc:s,redirectUri:g}={})=>new Promise((St,Ct)=>{t(L).getAuthorizationUrl(g).then(K=>{const Rt=s||(pt=>window.location.assign(pt)),b=new URL(K);e&&b.searchParams.set("from",encodeURIComponent(e));const z=b.toString();Rt(z),St(z)}).catch(K=>{Ct(K)})})),X={FETCH_AUTHORIZATION_URL:({redirectUri:t})=>r.ZP.fetchAuthorizationUrl(t),REGISTER_SITE:$,CONNECT_USER:V};var B=n("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=(t={},e)=>{switch(e.type){case u:return{...t,...e.connectionStatus};case U:return{...t,isUserConnected:!1}}return t},tt=(t={},e)=>{switch(e.type){case h:return e.connectedPlugins}return t},et=(t=!1,e)=>{switch(e.type){case T:return e.isFetching}return t},nt=(t=!1,e)=>{switch(e.type){case o:return e.isRegistering}return t},ot=(t=!1,e)=>{switch(e.type){case a:return e.isConnecting}return t},st=(t,e)=>{switch(e.type){case N:return!1;case p:return e.registrationError;default:return t}},rt=(t,e)=>{switch(e.type){case A:return e.authorizationUrl;default:return t}},ct=(t,e)=>{switch(e.type){default:return t}},it=(t={},e)=>{switch(e.type){case d:return e.connectionErrors}return t},at=(t=!1,e)=>{switch(e.type){case l:return e.isConnecting}return t},_t=(0,B.UY)({connectionStatus:q,connectionStatusIsFetching:et,siteIsRegistering:nt,userIsConnecting:ot,registrationError:st,authorizationUrl:rt,userConnectionData:ct,connectedPlugins:tt,connectionErrors:it,isOfflineMode:at});var ut=n("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),Et=n("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const dt={...{getAuthorizationUrl:{isFulfilled:(t,...e)=>{const s=!!t.authorizationUrl,g=(0,ut.Y)(L).hasFinishedResolution("getAuthorizationUrl",e);return s&&!g&&(0,Et.W)(L).finishResolution("getAuthorizationUrl",e),s},*fulfill(t){const e=yield F.fetchAuthorizationUrl(t);yield F.setAuthorizationUrl(e.authorizeUrl)}}}},lt={...{getConnectionStatus:t=>t.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:t=>t.siteIsRegistering||!1,getUserIsConnecting:t=>t.userIsConnecting||!1,getRegistrationError:t=>t.registrationError||!1,getAuthorizationUrl:t=>t.authorizationUrl||!1,getUserConnectionData:t=>t.userConnectionData||!1,getConnectedPlugins:t=>t.connectedPlugins||[],getConnectionErrors:t=>t.connectionErrors||[],getIsOfflineMode:t=>t.isOfflineMode||!1,getWpcomUser:t=>{var e,s;return(s=(e=t==null?void 0:t.userConnectionData)==null?void 0:e.currentUser)==null?void 0:s.wpcomUser},getBlogId:t=>{var e,s;return(s=(e=t==null?void 0:t.userConnectionData)==null?void 0:e.currentUser)==null?void 0:s.blogId}}};var Tt=n("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const v=class{static mayBeInit(e,s){v.store===null&&(v.store=(0,Tt.Z)(e,s),(0,B.z2)(v.store))}};let H=v;Z(H,"store",null);const It=H,G=window.JP_CONNECTION_INITIAL_STATE;G||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),It.mayBeInit(L,{__experimentalUseThunks:!0,reducer:_t,actions:F,selectors:lt,resolvers:dt,controls:X,initialState:G||{}})},"../../packages/my-jetpack/_inc/data/constants.ts":(C,c,n)=>{n.d(c,{Jk:()=>N,Kf:()=>S,LQ:()=>T,RQ:()=>O,Vu:()=>w,YF:()=>A,_H:()=>i,db:()=>I,h3:()=>x,hd:()=>o,iG:()=>m,n2:()=>P,q9:()=>U,yv:()=>h});const r="my-jetpack/v1",u="jetpack/v4/stats-app",T=`${r}/site/purchases`,i=`${r}/site/backup/undo-event`,o=`${r}/site/backup/count-items`,a=`${r}/chat/availability`,p=`${r}/chat/authentication`,N=`${r}/site/products`,P="videopress/v1/stats/featured",A=`${r}/site/dismiss-welcome-banner`,E=y=>`${u}/sites/${y}/stats/highlights`,U="product",m="activate product",h="install product",I="videopress stats",d="available licenses",l="chat availability",R="chat authentication",S="backup history",O="backup stats",f="stats counts",w="dismiss welcome banner",x="purchases"},"../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts":(C,c,n)=>{n.d(c,{o:()=>h});var r=n("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const T=100,i=200,o=300;var a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p={message:"",options:{level:"",priority:0,isRedBubble:!1}},N=(0,u.createContext)({currentNotice:p,setNotice:null,resetNotice:null}),P=({children:I})=>{const[d,l]=useState(p),R=O=>{(!d.message||O.options.priority>d.options.priority)&&l(O)},S=()=>{l(p)};return _jsx(N.Provider,{value:{currentNotice:d,setNotice:R,resetNotice:S},children:I})},A=null;try{noticeContext.displayName="noticeContext",noticeContext.__docgenInfo={description:"",displayName:"noticeContext",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"]={docgenInfo:noticeContext.__docgenInfo,name:"noticeContext",path:"../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"})}catch(I){}var E=n("../../packages/my-jetpack/_inc/data/constants.ts");const U=r.__,m=[E.h3,E.iG,E.yv],h=({infoName:I,isError:d,overrideMessage:l})=>{const{setNotice:R}=(0,u.useContext)(N),S=l!=null?l:(0,r.gB)(U("There was an error fetching your %s information. Check your site connectivity and try again.","jetpack-my-jetpack"),I);(0,u.useEffect)(()=>{d&&m.includes(I)&&R({message:S,options:{level:"error",priority:T}})},[S,R,d,I])}},"../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts":(C,c,n)=>{n.d(c,{$9:()=>r,M_:()=>u,vH:()=>T});const r=i=>{var o,a;return i?(a=(o=window==null?void 0:window.myJetpackInitialState)==null?void 0:o[i])!=null?a:{}:window==null?void 0:window.myJetpackInitialState},u=()=>{var i;return(i=window==null?void 0:window.myJetpackRest)!=null?i:{}},T=i=>{var o,a;return i?(a=(o=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:o[i])!=null?a:{}:window==null?void 0:window.JP_CONNECTION_INITIAL_STATE}}}]);})();
