"use strict";(()=>{var It=Object.defineProperty;var At=(N,S,c)=>S in N?It(N,S,{enumerable:!0,configurable:!0,writable:!0,value:c}):N[S]=c;var Me=(N,S,c)=>(At(N,typeof S!="symbol"?S+"":S,c),c);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1863],{"../connection/state/store.jsx":(N,S,c)=>{c.d(S,{t:()=>v});var C=c("../api/index.jsx");const _="SET_CONNECTION_STATUS",E="SET_CONNECTION_STATUS_IS_FETCHING",m="FETCH_CONNECTION_STATUS",g="SET_SITE_IS_REGISTERING",y="SET_USER_IS_CONNECTING",w="SET_REGISTRATION_ERROR",D="CLEAR_REGISTRATION_ERROR",P="REGISTER_SITE",k="SET_AUTHORIZATION_URL",d="CONNECT_USER",T="DISCONNECT_USER_SUCCESS",I="FETCH_AUTHORIZATION_URL",i="SET_CONNECTED_PLUGINS",Te="REFRESH_CONNECTED_PLUGINS",L="SET_CONNECTION_ERRORS",H="SET_IS_OFFLINE_MODE",ce=n=>({type:_,connectionStatus:n}),ae=n=>({type:E,isFetching:n}),U=()=>({type:m}),F=n=>({type:g,isRegistering:n}),f=n=>({type:y,isConnecting:n}),l=()=>({type:T}),W=n=>({type:w,registrationError:n}),Z=()=>({type:D}),Y=n=>({type:k,authorizationUrl:n}),ie=n=>({type:I,redirectUri:n}),Q=n=>({type:i,connectedPlugins:n}),$=n=>({type:L,connectionErrors:n}),B=n=>({type:H,isOfflineMode:n});function*q({from:n,redirectFunc:r,redirectUri:u}={}){yield f(!0),yield{type:d,from:n,redirectFunc:r,redirectUri:u}}function*ee({registrationNonce:n,redirectUri:r}){yield Z(),yield F(!0);try{const u=yield{type:P,registrationNonce:n,redirectUri:r};return yield ce({isRegistered:!0}),yield Y(u.authorizeUrl),yield F(!1),Promise.resolve(u)}catch(u){return yield W(u),yield F(!1),Promise.reject(u)}}const O={setConnectionStatus:ce,setConnectionStatusIsFetching:ae,fetchConnectionStatus:U,fetchAuthorizationUrl:ie,setSiteIsRegistering:F,setUserIsConnecting:f,setRegistrationError:W,clearRegistrationError:Z,setAuthorizationUrl:Y,registerSite:ee,connectUser:q,disconnectUserSuccess:l,setConnectedPlugins:Q,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(r=>C.ZP.fetchConnectedPlugins().then(u=>{n(Q(u)),r(u)})),setConnectionErrors:$,setIsOfflineMode:B};var te=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const v="jetpack-connection",Se=({registrationNonce:n,redirectUri:r})=>C.ZP.registerSite(n,r),G=(0,te.R)(({resolveSelect:n})=>({from:r,redirectFunc:u,redirectUri:Ee}={})=>new Promise((je,De)=>{n(v).getAuthorizationUrl(Ee).then(Ie=>{const ke=u||(Le=>window.location.assign(Le)),Pe=new URL(Ie);r&&Pe.searchParams.set("from",encodeURIComponent(r));const Re=Pe.toString();ke(Re),je(Re)}).catch(Ie=>{De(Ie)})})),_e={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>C.ZP.fetchAuthorizationUrl(n),REGISTER_SITE:Se,CONNECT_USER:G};var V=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const M=(n={},r)=>{switch(r.type){case _:return{...n,...r.connectionStatus};case T:return{...n,isUserConnected:!1}}return n},h=(n={},r)=>{switch(r.type){case i:return r.connectedPlugins}return n},z=(n=!1,r)=>{switch(r.type){case E:return r.isFetching}return n},se=(n=!1,r)=>{switch(r.type){case g:return r.isRegistering}return n},ge=(n=!1,r)=>{switch(r.type){case y:return r.isConnecting}return n},me=(n,r)=>{switch(r.type){case D:return!1;case w:return r.registrationError;default:return n}},A=(n,r)=>{switch(r.type){case k:return r.authorizationUrl;default:return n}},ne=(n,r)=>{switch(r.type){default:return n}},j=(n={},r)=>{switch(r.type){case L:return r.connectionErrors}return n},he=(n=!1,r)=>{switch(r.type){case H:return r.isConnecting}return n},Ue=(0,V.UY)({connectionStatus:M,connectionStatusIsFetching:z,siteIsRegistering:se,userIsConnecting:ge,registrationError:me,authorizationUrl:A,userConnectionData:ne,connectedPlugins:h,connectionErrors:j,isOfflineMode:he});var oe=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),be=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const Fe={...{getAuthorizationUrl:{isFulfilled:(n,...r)=>{const u=!!n.authorizationUrl,Ee=(0,oe.Y)(v).hasFinishedResolution("getAuthorizationUrl",r);return u&&!Ee&&(0,be.W)(v).finishResolution("getAuthorizationUrl",r),u},*fulfill(n){const r=yield O.fetchAuthorizationUrl(n);yield O.setAuthorizationUrl(r.authorizeUrl)}}}},Ze={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>{var r,u;return(u=(r=n==null?void 0:n.userConnectionData)==null?void 0:r.currentUser)==null?void 0:u.wpcomUser},getBlogId:n=>{var r,u;return(u=(r=n==null?void 0:n.userConnectionData)==null?void 0:r.currentUser)==null?void 0:u.blogId}}};var Ge=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const de=class{static mayBeInit(r,u){de.store===null&&(de.store=(0,Ge.Z)(r,u),(0,V.z2)(de.store))}};let Ce=de;Me(Ce,"store",null);const Ke=Ce,ve=window.JP_CONNECTION_INITIAL_STATE;ve||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ke.mayBeInit(v,{__experimentalUseThunks:!0,reducer:Ue,actions:O,selectors:Ze,resolvers:Fe,controls:_e,initialState:ve||{}})},"../../packages/my-jetpack/_inc/components/product-card/action-button.jsx":(N,S,c)=>{c.d(S,{N:()=>i,Z:()=>L});var C=c("../components/components/button/index.tsx"),_=c("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),E=c("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),m=c("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),g=c("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),y=c("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),w=c("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),D=c.n(w),P=c("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=c("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),d=c("../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),T=c("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=_.__,i={ACTIVE:"active",INACTIVE:"inactive",MODULE_DISABLED:"module_disabled",ERROR:"error",ABSENT:"plugin_absent",ABSENT_WITH_PLAN:"plugin_absent_with_plan",NEEDS_PURCHASE:"needs_purchase",NEEDS_PURCHASE_OR_FREE:"needs_purchase_or_free",CAN_UPGRADE:"can_upgrade"},Te=({status:H,admin:ce,name:ae,slug:U,onActivate:F,additionalActions:f,primaryActionOverride:l,onManage:W,onFixConnection:Z,isFetching:Y,isInstallingStandalone:ie,isDeactivatingStandalone:Q,className:$,onAdd:B,onInstall:q,onLearnMore:ee,upgradeInInterstitial:le})=>{const[O,te]=(0,P.useState)(!1),[x,v]=(0,P.useState)({}),{detail:Se}=(0,k.i)(U),{manageUrl:G,purchaseUrl:K}=Se,_e=!G,V=Y||ie||Q,M=(f==null?void 0:f.length)>0,h=(0,P.useMemo)(()=>({variant:V?void 0:"primary",disabled:V,className:$}),[V,$]),z=(0,P.useCallback)(()=>{switch(H){case i.ABSENT:{const A=I("Learn more","jetpack-my-jetpack");return{...h,href:`#/add-${U}`,size:"small",variant:"primary",weight:"regular",label:A,onClick:ee,...l&&i.ABSENT in l&&l[i.ABSENT]}}case i.ABSENT_WITH_PLAN:{const A=I("Install Plugin","jetpack-my-jetpack");return{...h,href:"",size:"small",variant:"primary",weight:"regular",label:A,onClick:q,...l&&i.ABSENT_WITH_PLAN in l&&l[i.ABSENT_WITH_PLAN]}}case i.NEEDS_PURCHASE:return{...h,href:K||`#/add-${U}`,size:"small",variant:"primary",weight:"regular",label:I("Learn more","jetpack-my-jetpack"),onClick:B,...l&&i.NEEDS_PURCHASE in l&&l[i.NEEDS_PURCHASE]};case i.CAN_UPGRADE:{const A=I("Upgrade","jetpack-my-jetpack"),ne=I("Learn more","jetpack-my-jetpack"),j=K||le?A:ne;return{...h,href:K||`#/add-${U}`,size:"small",variant:"primary",weight:"regular",label:j,onClick:B,...l&&i.CAN_UPGRADE in l&&l[i.CAN_UPGRADE]}}case i.NEEDS_PURCHASE_OR_FREE:return{...h,href:`#/add-${U}`,size:"small",variant:"primary",weight:"regular",label:I("Learn more","jetpack-my-jetpack"),onClick:B,...l&&i.NEEDS_PURCHASE_OR_FREE in l&&l[i.NEEDS_PURCHASE_OR_FREE]};case i.ACTIVE:{const A=I("View","jetpack-my-jetpack");return{...h,disabled:_e||(h==null?void 0:h.disabled),href:G,size:"small",variant:"secondary",weight:"regular",label:A,onClick:W,...l&&i.ACTIVE in l&&l[i.ACTIVE]}}case i.ERROR:return{...h,href:"#/connection",size:"small",variant:"primary",weight:"regular",label:I("Fix connection","jetpack-my-jetpack"),onClick:Z,...l&&i.ERROR in l&&l[i.ERROR]};case i.INACTIVE:case i.MODULE_DISABLED:return{...h,href:"",size:"small",variant:"secondary",weight:"regular",label:I("Activate","jetpack-my-jetpack"),onClick:F,...l&&i.INACTIVE in l&&l[i.INACTIVE]};default:return null}},[H,h,U,B,Z,F,q,ee,K,le,_e,G,W,l]),se=(0,P.useMemo)(()=>M?[...f,z()]:[z()],[f,z,M]),ge=(0,P.useCallback)(()=>{te(!O)},[O]);if((0,P.useEffect)(()=>{v(se[0])},[se]),!ce)return(0,T.jsx)(C.Z,{...h,size:"small",variant:"link",weight:"regular",children:(0,_.gB)(I("Learn about %s","jetpack-my-jetpack"),ae)});const me=M&&(0,T.jsx)("div",{className:d.Z["action-button-dropdown"],children:(0,T.jsx)("ul",{className:d.Z["dropdown-menu"],children:[...f,z()].map(({label:A,isExternalLink:ne},j)=>{const he=()=>{v(se[j]),te(!1)};return(0,T.jsx)("li",{children:(0,T.jsxs)("button",{onClick:he,className:d.Z["dropdown-item"],children:[(0,T.jsxs)("div",{className:d.Z["dropdown-item-label"],children:[A,ne&&(0,T.jsx)(E.Z,{icon:m.Z,size:16})]}),A===x.label&&(0,T.jsx)("div",{className:d.Z["active-action-checkmark"],children:(0,T.jsx)(E.Z,{icon:g.Z,size:24,fill:"white"})})]})},j)})})});return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:D()(d.Z["action-button"],M?d.Z["has-additional-actions"]:null),children:[(0,T.jsx)(C.Z,{...h,...x,children:x.label}),M&&(0,T.jsx)("button",{className:D()(d.Z["dropdown-chevron"],x.variant==="primary"?d.Z.primary:d.Z.secondary),onClick:ge,children:(0,T.jsx)(E.Z,{icon:y.Z,size:24,fill:x.variant==="primary"?"white":"black"})}),O&&me]})})},L=Te;Te.__docgenInfo={description:"",methods:[],displayName:"ActionButton"}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(N,S,c)=>{c.d(S,{i:()=>m});var C=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),_=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),E=c("../../packages/my-jetpack/_inc/state/store.js");function m(g){const{activateProduct:y,deactivateProduct:w,installStandalonePluginForProduct:D,deactivateStandalonePluginForProduct:P}=(0,C.Z)(E.t),k=(0,_.Z)(d=>d(E.t).getProduct(g));return{activate:()=>y(g),deactivate:()=>w(g),deactivateStandalonePlugin:()=>P(g),installStandalonePlugin:()=>D(g),productsList:(0,_.Z)(d=>d(E.t).getProducts()),detail:k,isActive:k.status==="active",isFetching:(0,_.Z)(d=>d(E.t).isFetching(g)),stats:(0,_.Z)(d=>d(E.t).getProductStats(g))}}},"../../packages/my-jetpack/_inc/state/store.js":(N,S,c)=>{c.d(S,{t:()=>ze,N:()=>ht});var C=c("../connection/state/store.jsx"),_=c("../../../node_modules/.pnpm/@wordpress+api-fetch@6.48.0/node_modules/@wordpress/api-fetch/build-module/index.js"),E=c("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js");const m="my-jetpack/v1",g="jetpack/v4/stats-app",y=`${m}/site/dismiss-welcome-banner`,w=`${m}/site/products`,D=`${m}/site/backup/undo-event`,P=`${m}/site/backup/count-items`,k=`${m}/chat/availability`,d=`${m}/chat/authentication`,T=["scan"],I="videopress",i="videopress/v1/stats/featured",Te=e=>`${g}/sites/${e}/stats/highlights`,L=E.__,H="SET_AVAILABLE_LICENSES_IS_FETCHING",ce="FETCH_AVAILABLE_LICENSES",ae="SET_AVAILABLE_LICENSES",U="SET_IS_FETCHING_PRODUCT",F="SET_PRODUCT",f="SET_PRODUCT_REQUEST_ERROR",l="ACTIVATE_PRODUCT",W="SET_PRODUCT_STATUS",Z="SET_CHAT_AVAILABILITY_IS_FETCHING",Y="SET_CHAT_AVAILABILITY",ie="SET_CHAT_AUTHENTICATION_IS_FETCHING",Q="SET_CHAT_AUTHENTICATION",$="SET_STATS_COUNTS_IS_FETCHING",B="SET_STATS_COUNTS",q="SET_DISMISSED_WELCOME_BANNER_IS_FETCHING",ee="SET_DISMISSED_WELCOME_BANNER",le="SET_BACKUP_REWINDABLE_EVENTS_IS_FETCHING",O="SET_BACKUP_REWINDABLE_EVENTS",te="SET_COUNT_BACKUP_ITEMS",x="SET_COUNT_BACKUP_ITEMS_IS_FETCHING",v="SET_GLOBAL_NOTICE",Se="CLEAN_GLOBAL_NOTICE",G="SET_PRODUCT_STATS",K="SET_IS_FETCHING_PRODUCT_STATS",_e=e=>({type:Z,isFetching:e}),V=e=>({type:ie,isFetching:e}),M=e=>({type:le,isFetching:e}),h=e=>({type:x,isFetching:e}),z=e=>({type:$,isFetching:e}),se=e=>({type:Y,chatAvailability:e}),ge=e=>({type:Q,chatAuthentication:e}),me=e=>({type:H,isFetching:e}),A=()=>({type:ce}),ne=e=>({type:ae,availableLicenses:e}),j=e=>({type:F,product:e}),he=e=>({type:O,rewindableEvents:e}),He=e=>({type:te,backupItems:e}),Ue=e=>({type:B,statsCounts:e}),oe=(e,t)=>({type:f,productId:e,error:t}),be=(e,t)=>({type:W,productId:e,status:t}),we=e=>({type:q,isFetching:e}),Fe=e=>({type:ee,hasBeenDismissed:e}),ue=(e,t)=>({type:"SET_GLOBAL_NOTICE",message:e,options:t}),We=()=>({type:"CLEAN_GLOBAL_NOTICE"});function X(e,t){return{type:U,productId:e,isFetching:t}}function Oe(e,t,{select:o,dispatch:s,registry:a}){return new Promise((b,J)=>{if(!o.isValidProduct(e)){const R=L("Invalid product name","jetpack-my-jetpack"),pe=new Error(R);s(oe(e,pe)),s(ue(R,{status:"error",isDismissible:!0})),J(pe);return}const p=t.activate?"POST":"DELETE";return s(X(e,!0)),(0,_.Z)({path:`${w}/${e}`,method:p}).then(R=>{s(X(e,!1)),s(j(R)),a.dispatch(C.t).refreshConnectedPlugins(),b(R)}).catch(R=>{const{name:pe}=o.getProduct(e),Ct=(0,E.gB)(L("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),pe);s(X(e,!1)),s(oe(e,R)),s(ue(Ct,{status:"error",isDismissible:!0})),J(R)})})}const u={setChatAvailabilityIsFetching:_e,setChatAuthenticationIsFetching:V,setChatAvailability:se,setChatAuthentication:ge,setAvailableLicensesIsFetching:me,fetchAvailableLicenses:A,setAvailableLicenses:ne,setProductStats:(e,t)=>({type:G,productId:e,stats:t}),setIsFetchingProductStats:(e,t)=>({type:K,productId:e,isFetching:t}),setBackupRewindableEvents:he,setBackupRewindableEventsIsFetching:M,setCountBackupItems:He,setCountBackupItemsIsFetching:h,setStatsCounts:Ue,setStatsCountsIsFetching:z,dismissWelcomeBanner:()=>async e=>{const{dispatch:t}=e;return t(we(!0)),(0,_.Z)({path:y,method:"POST"}).then(()=>{t(Fe(!0))}).finally(()=>{t(we(!1))})},...{setGlobalNotice:ue,cleanGlobalNotice:We},...{setProduct:j,activateProduct:e=>async t=>await Oe(e,{activate:!0},t),deactivateStandalonePluginForProduct:e=>async t=>await Oe(e,{activate:!1},t),installStandalonePluginForProduct:e=>async t=>{const{select:o,dispatch:s,registry:a}=t;return await new Promise((b,J)=>{if(!o.isValidProduct(e)){const p=L("Invalid product name","jetpack-my-jetpack"),R=new Error(p);s(oe(e,R)),s(ue(p,{status:"error",isDismissible:!0})),J(R);return}return s(X(e,!0)),(0,_.Z)({path:`${w}/${e}/install-standalone`,method:"POST"}).then(p=>{s(X(e,!1)),s(j(p)),a.dispatch(C.t).refreshConnectedPlugins(),b(p==null?void 0:p.standalone_plugin_info)}).catch(p=>{const{name:R}=o.getProduct(e),pe=(0,E.gB)(L("Failed to install standalone plugin for %1$s: %2$s. Please try again","jetpack-my-jetpack"),R,p.message);s(X(e,!1)),s(oe(e,p)),s(ue(pe,{status:"error",isDismissible:!0})),J(p)})})},setIsFetchingProduct:X,setRequestProductError:oe,setProductStatus:be}};var Ee=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const je=(e={},t)=>{switch(t.type){case U:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s},errors:{...e.errors,[o]:s?void 0:e.errors[o]}}}case W:{const{productId:o,status:s}=t;return{...e,items:{...e.items,[o]:{...e.items[o],status:s}}}}case F:{const{product:o}=t,{slug:s}=o;return{...e,items:{...e.items,[s]:o}}}case f:{const{productId:o,error:s}=t;return{...e,errors:{...e.errors,[o]:s}}}default:return e}},De=(e={},t)=>{switch(t.type){case le:return{...e,isFetching:t.isFetching};case O:return{...e,items:(t==null?void 0:t.rewindableEvents)||{}};default:return e}},Ie=(e={},t)=>{switch(t.type){case x:return{...e,isFetching:t.isFetching};case te:return{...e,items:(t==null?void 0:t.backupItems)||{}};default:return e}},ke=(e={isFetching:!1,isAvailable:!1},t)=>{var o;switch(t.type){case Z:return{...e,isFetching:t.isFetching};case Y:return{...e,isAvailable:(o=t==null?void 0:t.chatAvailability)==null?void 0:o.is_available};default:return e}},Pe=(e={isFetching:!1,jwt:!1},t)=>{var o,s;switch(t.type){case ie:return{...e,isFetching:t.isFetching};case Q:return{...e,jwt:(s=(o=t==null?void 0:t.chatAuthentication)==null?void 0:o.user)==null?void 0:s.jwt};default:return e}},Re=(e={},t)=>{switch(t.type){case H:return{...e,isFetching:t.isFetching};case ae:return{...e,items:(t==null?void 0:t.availableLicenses)||[]};default:return e}},Le=(e={global:{}},t)=>{switch(t.type){case v:{const{message:o,options:s}=t;return{...e,global:{message:o,options:s}}}case Se:return{...e,global:{}};default:return e}},Xe=(e={})=>e,Je=(e={},t)=>{switch(t.type){case K:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s}}}case G:{const{productId:o,stats:s}=t;return{...e,items:{...e.items,[o]:s}}}default:return e}},Ye=(e={},t)=>{switch(t.type){case $:return{...e,isFetching:t.isFetching};case B:return{...e,data:(t==null?void 0:t.statsCounts)||{}};default:return e}},Qe=(e={},t)=>{switch(t.type){case q:return{...e,isFetching:t.isFetching};case ee:return{...e,hasBeenDismissed:t.hasBeenDismissed};default:return e}},$e=(e={},t)=>{switch(t.type){default:return e}},qe=(0,Ee.UY)({products:je,backupRewindableEvents:De,countBackupItems:Ie,chatAvailability:ke,chatAuthentication:Pe,availableLicenses:Re,notices:Le,plugins:Xe,stats:Je,statsCounts:Ye,welcomeBanner:Qe,lifecycleStats:$e});var Be=c("../api/index.jsx"),xe=c("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx");const et=async()=>(0,_.Z)({path:i}),tt=async e=>e===I?et():null,st={...{getProduct:{isFulfilled:(e,t)=>{var s;return(((s=e==null?void 0:e.products)==null?void 0:s.items)||{}).hasOwnProperty(t)&&!T.includes(t)},fulfill:e=>async({dispatch:t})=>{try{t.setIsFetchingProduct(e,!0);const o=await(0,_.Z)({path:`${w}/${e}`});return t.setProduct(o),t.setIsFetchingProduct(e,!1),Promise.resolve()}catch(o){if(t.setIsFetchingProduct(e,!1),o!=null&&o.code&&(o!=null&&o.message))return t.setRequestProductError(e,o),Promise.reject(o);throw new Error(o)}}},getChatAvailability:()=>async({dispatch:e})=>{e.setChatAvailabilityIsFetching(!0);try{e.setChatAvailability(await(0,_.Z)({path:k})),e.setChatAvailabilityIsFetching(!1)}catch(t){e.setChatAvailabilityIsFetching(!1)}},getChatAuthentication:()=>async({dispatch:e})=>{e.setChatAuthenticationIsFetching(!0);try{e.setChatAuthentication(await(0,_.Z)({path:d})),e.setChatAuthenticationIsFetching(!1)}catch(t){e.setChatAuthenticationIsFetching(!1)}},getAvailableLicenses:()=>async({dispatch:e})=>{e.setAvailableLicensesIsFetching(!0);try{const{apiRoot:t,apiNonce:o}=(window==null?void 0:window.myJetpackRest)||{};Be.ZP.setApiRoot(t),Be.ZP.setApiNonce(o);const s=await Be.ZP.getUserLicenses();s&&s.items?e.setAvailableLicenses(s.items.filter(({attached_at:a,revoked_at:b})=>a===null&&b===null)):e.setAvailableLicenses([])}catch(t){e.setAvailableLicenses([])}finally{e.setAvailableLicensesIsFetching(!1)}},getBackupRewindableEvents:()=>async({dispatch:e})=>{e.setBackupRewindableEventsIsFetching(!0);try{e.setBackupRewindableEvents(await(0,_.Z)({path:D})),e.setBackupRewindableEventsIsFetching(!1)}catch(t){e.setBackupRewindableEventsIsFetching(!1)}},getCountBackupItems:()=>async({dispatch:e})=>{e.setCountBackupItemsIsFetching(!0);try{e.setCountBackupItems(await(0,_.Z)({path:P})),e.setCountBackupItemsIsFetching(!1)}catch(t){e.setCountBackupItemsIsFetching(!1)}},getStatsCounts:()=>async e=>{const{dispatch:t,registry:o}=e;t.setStatsCountsIsFetching(!0);const s=o.select(C.t).getBlogId();try{t.setStatsCounts(await(0,_.Z)({path:Te(s)})),t.setStatsCountsIsFetching(!1)}catch(a){t.setStatsCountsIsFetching(!1)}}},getProductStats:{isFulfilled:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.items)==null?void 0:s.hasOwnProperty(t))||!1},fulfill:e=>async({dispatch:t,select:o})=>{const{status:s}=o.getProduct(e);if(s!==xe.N.ACTIVE)return t.setProductStats(e,null),Promise.resolve();try{t.setIsFetchingProductStats(e,!0);const a=await tt(e);return t.setProductStats(e,a),t.setIsFetchingProductStats(e,!1),Promise.resolve()}catch(a){if(t.setProductStats(e,null),t.setIsFetchingProductStats(e,!1),a!=null&&a.code&&(a!=null&&a.message))return Promise.reject(a);throw new Error(a)}}}};function nt(e){return e.replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("_",""))}function ot(e){return e.indexOf("_")!==-1}function re(e={},t=!1){const o=Object.assign({},e);for(const s in o)o.hasOwnProperty(s)&&ot(s)&&(o[nt(s)]=o[s],t&&delete o[s]);return o}const Ne=e=>{var t;return((t=e.products)==null?void 0:t.items)||{}},Ve=e=>Object.keys(Ne(e)),rt={getProducts:Ne,getProductNames:Ve,getProduct:(e,t)=>{var a,b;const o=((a=Ne(e))==null?void 0:a[t])||{},s=re(o,!0);return s.standalonePluginInfo=re(s.standalonePluginInfo||{},!0),s.pricingForUi=re(s.pricingForUi||{},!0),s.pricingForUi.introductoryOffer=s.pricingForUi.isIntroductoryOffer?re(s.pricingForUi.introductoryOffer,!0):null,(b=s.pricingForUi)!=null&&b.tiers&&(s.pricingForUi.tiers=re(s.pricingForUi.tiers,!0),s.pricingForUi.tiers=Object.keys(s.pricingForUi.tiers).reduce((J,fe)=>{const p=re(s.pricingForUi.tiers[fe],!0)||{};return J[fe]={...p,introductoryOffer:p!=null&&p.isIntroductoryOffer?re(p==null?void 0:p.introductoryOffer,!0):null},J},{})),s.features=s.features||[],s.supportedProducts=s.supportedProducts||[],s.pricingForUi.fullPricePerMonth=s.pricingForUi.productTerm==="year"?Math.round(s.pricingForUi.fullPrice/12*100)/100:s.pricingForUi.fullPrice,s.pricingForUi.discountPricePerMonth=s.pricingForUi.productTerm==="year"?Math.round(s.pricingForUi.discountPrice/12*100)/100:s.pricingForUi.discountPrice,s},isValidProduct:(e,t)=>Ve(e).includes(t),isFetching:(e,t)=>{var o,s;return((s=(o=e.products)==null?void 0:o.isFetching)==null?void 0:s[t])||!1},getProductsThatRequiresUserConnection:e=>{const t=Ne(e);return Object.keys(t).reduce((o,s)=>{const a=t[s];return(a==null?void 0:a.requires_user_connection)&&((a==null?void 0:a.status)===xe.N.ACTIVE||(a==null?void 0:a.status)===xe.N.ERROR)&&o.push(a==null?void 0:a.name),o},[])}},ct={getBackupRewindableEvents:e=>{var t;return((t=e.backupRewindableEvents)==null?void 0:t.items)||{}},isFetchingBackupRewindableEvents:e=>{var t;return((t=e.backupRewindableEvents)==null?void 0:t.isFetching)||!1}},at={getCountBackupItems:e=>{var t;return((t=e.countBackupItems)==null?void 0:t.items)||{}},isFetchingCountBackupItems:e=>e.countBackupItems.isFetching||!1},it={getChatAvailability:e=>e.chatAvailability.isAvailable,isRequestingChatAvailability:e=>e.chatAvailability.isFetching},lt={getChatAuthentication:e=>e.chatAuthentication.jwt,isRequestingChatAuthentication:e=>e.chatAuthentication.isFetching},_t={getAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.items)||[]},isFetchingAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.isFetching)||!1}},ut={hasStandalonePluginInstalled:e=>Object.values(e.plugins).filter(t=>["jetpack-backup","jetpack-boost","jetpack-protect","jetpack-search","jetpack-social","jetpack-videopress"].indexOf(t.TextDomain)>=0).length>0},dt={getGlobalNotice:e=>{var t;return(t=e.notices)==null?void 0:t.global}},Et={getProductStats:(e,t)=>{var o,s;return(s=(o=e.stats)==null?void 0:o.items)==null?void 0:s[t]},isFetchingProductStats:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.isFetching)==null?void 0:s[t])||!1}},pt=e=>{var t;return(t=e.statsCounts)==null?void 0:t.data},Tt=e=>e.lifecycleStats,St={...rt,...it,...lt,..._t,...dt,...ut,...Et,...ct,...at,...{getStatsCounts:pt,isFetchingStatsCounts:e=>{var t;return((t=e.statsCounts)==null?void 0:t.isFetching)||!1}},getWelcomeBannerHasBeenDismissed:e=>{var t;return(t=e.welcomeBanner)==null?void 0:t.hasBeenDismissed},getGuessedSiteLifecycleStatus:e=>{const{modules:t,purchases:o,plugins:s,isSiteConnected:a,isUserConnected:b}=Tt(e);return o.length===0&&t.length<3?(!b||!a)&&t.length===0&&s.length===1?"brand-new":"new":o.length===1&&t.length<10?"settling-in":"established"}};var gt=c("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const Ae=class{static mayBeInit(t,o){Ae.store===null&&(Ae.store=(0,gt.Z)(t,o),(0,Ee.z2)(Ae.store))}};let ye=Ae;Me(ye,"store",null);const mt=ye,ze="my-jetpack";function ht(){mt.mayBeInit(ze,{__experimentalUseThunks:!0,reducer:qe,actions:u,selectors:St,resolvers:st,initialState:window.myJetpackInitialState||{}})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(N,S,c)=>{c.d(S,{Z:()=>y});var C=c("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=c.n(C),E=c("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=c.n(E),g=m()(_());g.push([N.id,'.GTxJkEnk1nQQsd85aJFX{min-height:200px}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*3);min-height:28px;flex-wrap:wrap}.h7oRLsWkurjy8_iyk7VN{display:flex;justify-content:flex-start;gap:var(--spacing-base)}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*.5)}.HMaSD8wdv3EFkpx0cFj6 h3{font-weight:700;line-height:28px}.nvijzcm26PCXyNqOKt0x{position:relative;display:flex}.nvijzcm26PCXyNqOKt0x .RciGXG52PWP5wKTnL50p{display:flex;align-items:center;justify-content:center;border:.5px solid var(--jp-black);box-shadow:inset 0 0 0 1px var(--jp-black);border-top-right-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius);cursor:pointer;padding:0}.nvijzcm26PCXyNqOKt0x .pOY9wXeTZXdEQKZILl6e{background-color:var(--jp-black);margin-left:.5px}.nvijzcm26PCXyNqOKt0x .AVZwaNLSRgcRMqKc48hG{background-color:var(--jp-white);border-left-width:0;margin-left:-0.5px}.DQJc9sMD_g3e_epwJHbg{position:absolute;top:calc(100% + var(--spacing-base));left:0;background:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);box-shadow:0px 1px 1px 0px rgba(0,0,0,.1),0px 1px 1.5px 0px rgba(0,0,0,.1),0px 2px 3px -0.5px rgba(0,0,0,.1);padding:var(--spacing-base)}.DQJc9sMD_g3e_epwJHbg .kZWhJcVFuDAKb3RT9PqL{display:flex;align-items:center;gap:calc(var(--spacing-base)*7);background-color:var(--jp-white);border:none;padding:var(--spacing-base);cursor:pointer;width:100%}.DQJc9sMD_g3e_epwJHbg .kZWhJcVFuDAKb3RT9PqL:hover{background-color:var(--jp-gray-0)}.DQJc9sMD_g3e_epwJHbg .AGNnRRrn8UoGCE9P37gA{display:flex;align-items:center;gap:calc(var(--spacing-base)*.5);font-size:var(--font-label)}.DQJc9sMD_g3e_epwJHbg .EPJdlXOWx5xJVl6EUL5_{background-color:var(--jp-green-50);height:25px;width:25px}.jjq8f4lZIJErfvIJMKfD a,.jjq8f4lZIJErfvIJMKfD button{border-top-right-radius:0;border-bottom-right-radius:0}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:28px;display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:8px;height:8px;margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.WCrLkaXyNZAS01F1g6Yt{color:var(--jp-yellow-40)}.XFWD3H3YkLwFqcqU4N3y.WCrLkaXyNZAS01F1g6Yt:before{background:var(--jp-yellow-40)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),g.locals={container:"GTxJkEnk1nQQsd85aJFX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",buttons:"h7oRLsWkurjy8_iyk7VN",title:"HMaSD8wdv3EFkpx0cFj6","action-button":"nvijzcm26PCXyNqOKt0x","dropdown-chevron":"RciGXG52PWP5wKTnL50p",primary:"pOY9wXeTZXdEQKZILl6e",secondary:"AVZwaNLSRgcRMqKc48hG","action-button-dropdown":"DQJc9sMD_g3e_epwJHbg","dropdown-item":"kZWhJcVFuDAKb3RT9PqL","dropdown-item-label":"AGNnRRrn8UoGCE9P37gA","active-action-checkmark":"EPJdlXOWx5xJVl6EUL5_","has-additional-actions":"jjq8f4lZIJErfvIJMKfD",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",warning:"WCrLkaXyNZAS01F1g6Yt",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const y=g},"../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(N,S,c)=>{c.d(S,{Z:()=>y});var C=c("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=c.n(C),E=c("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),m={};m.insert="head",m.singleton=!1;var g=_()(E.Z,m);const y=E.Z.locals||{}}}]);})();
