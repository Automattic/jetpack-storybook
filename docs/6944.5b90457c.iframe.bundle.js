"use strict";(()=>{var ce=Object.defineProperty;var ue=(F,m,o)=>m in F?ce(F,m,{enumerable:!0,configurable:!0,writable:!0,value:o}):F[m]=o;var kt=(F,m,o)=>(ue(F,typeof m!="symbol"?m+"":m,o),o);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6944],{"../connection/components/use-connection/index.jsx":(F,m,o)=>{o.d(m,{Z:()=>g});var h=o("../api/index.jsx"),u=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),C=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),I=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=o("../connection/state/store.jsx");const d=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},g=function(){let{registrationNonce:R=d.registrationNonce,apiRoot:v=d.apiRoot,apiNonce:f=d.apiNonce,redirectUri:_,autoTrigger:V,from:j,skipUserConnection:O}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:L,connectUser:w,refreshConnectedPlugins:b}=(0,u.Z)(c.t),k=(0,C.Z)(E=>E(c.t).getRegistrationError()),{siteIsRegistering:H,userIsConnecting:z,userConnectionData:N,connectedPlugins:D,connectionErrors:W,isRegistered:U,isUserConnected:x,hasConnectedOwner:B,isOfflineMode:G}=(0,C.Z)(E=>({siteIsRegistering:E(c.t).getSiteIsRegistering(),userIsConnecting:E(c.t).getUserIsConnecting(),userConnectionData:E(c.t).getUserConnectionData(),connectedPlugins:E(c.t).getConnectedPlugins(),connectionErrors:E(c.t).getConnectionErrors(),isOfflineMode:E(c.t).getIsOfflineMode(),...E(c.t).getConnectionStatus()})),T=()=>{if(O){if(_)return window.location=_,Promise.resolve(_)}else return w({from:j,redirectUri:_});return Promise.resolve()},y=E=>(E&&E.preventDefault(),U?T():L({registrationNonce:R,redirectUri:_}).then(()=>T()));return(0,I.useEffect)(()=>{h.ZP.setApiRoot(v),h.ZP.setApiNonce(f)},[v,f]),(0,I.useEffect)(()=>{V&&!H&&!z&&y()},[]),{handleRegisterSite:y,handleConnectUser:T,refreshConnectedPlugins:b,isRegistered:U,isUserConnected:x,siteIsRegistering:H,userIsConnecting:z,registrationError:k,userConnectionData:N,hasConnectedOwner:B,connectedPlugins:D,connectionErrors:W,isOfflineMode:G}}},"../connection/state/store.jsx":(F,m,o)=>{o.d(m,{t:()=>K});var h=o("../api/index.jsx");const u="SET_CONNECTION_STATUS",C="SET_CONNECTION_STATUS_IS_FETCHING",I="FETCH_CONNECTION_STATUS",c="SET_SITE_IS_REGISTERING",d="SET_USER_IS_CONNECTING",g="SET_REGISTRATION_ERROR",R="CLEAR_REGISTRATION_ERROR",v="REGISTER_SITE",f="SET_AUTHORIZATION_URL",_="CONNECT_USER",V="DISCONNECT_USER_SUCCESS",j="FETCH_AUTHORIZATION_URL",O="SET_CONNECTED_PLUGINS",L="REFRESH_CONNECTED_PLUGINS",w="SET_CONNECTION_ERRORS",b="SET_IS_OFFLINE_MODE",k=n=>({type:u,connectionStatus:n}),H=n=>({type:C,isFetching:n}),z=()=>({type:I}),N=n=>({type:c,isRegistering:n}),D=n=>({type:d,isConnecting:n}),W=()=>({type:V}),U=n=>({type:g,registrationError:n}),x=()=>({type:R}),B=n=>({type:f,authorizationUrl:n}),G=n=>({type:j,redirectUri:n}),T=n=>({type:O,connectedPlugins:n}),y=n=>({type:w,connectionErrors:n}),E=n=>({type:b,isOfflineMode:n});function $(){let{from:n,redirectFunc:a,redirectUri:l}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield D(!0),yield{type:_,from:n,redirectFunc:a,redirectUri:l}}()}function ct(n){let{registrationNonce:a,redirectUri:l}=n;return function*(){yield x(),yield N(!0);try{const A=yield{type:v,registrationNonce:a,redirectUri:l};return yield k({isRegistered:!0}),yield B(A.authorizeUrl),yield N(!1),Promise.resolve(A)}catch(A){return yield U(A),yield N(!1),Promise.reject(A)}}()}const et={setConnectionStatus:k,setConnectionStatusIsFetching:H,fetchConnectionStatus:z,fetchAuthorizationUrl:G,setSiteIsRegistering:N,setUserIsConnecting:D,setRegistrationError:U,clearRegistrationError:x,setAuthorizationUrl:B,registerSite:ct,connectUser:$,disconnectUserSuccess:W,setConnectedPlugins:T,refreshConnectedPlugins:()=>async n=>{let{dispatch:a}=n;return await new Promise(l=>h.ZP.fetchConnectedPlugins().then(A=>{a(T(A)),l(A)}))},setConnectionErrors:y,setIsOfflineMode:E};var pt=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const K="jetpack-connection",ut=n=>{let{registrationNonce:a,redirectUri:l}=n;return h.ZP.registerSite(a,l)},mt=(0,pt.R)(n=>{let{resolveSelect:a}=n;return function(){let{from:l,redirectFunc:A,redirectUri:Y}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((at,Dt)=>{a(K).getAuthorizationUrl(Y).then(ot=>{const jt=A||(Lt=>window.location.assign(Lt)),gt=new URL(ot);l&&gt.searchParams.set("from",encodeURIComponent(l));const _t=gt.toString();jt(_t),at(_t)}).catch(ot=>{Dt(ot)})})}}),Ct={FETCH_AUTHORIZATION_URL:n=>{let{redirectUri:a}=n;return h.ZP.fetchAuthorizationUrl(a)},REGISTER_SITE:ut,CONNECT_USER:mt};var lt=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const At=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return{...n,...a.connectionStatus};case V:return{...n,isUserConnected:!1}}return n},It=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return a.connectedPlugins}return n},ft=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:return a.isFetching}return n},Pt=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c:return a.isRegistering}return n},Rt=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return a.isConnecting}return n},Ot=(n,a)=>{switch(a.type){case R:return!1;case g:return a.registrationError;default:return n}},Nt=(n,a)=>{switch(a.type){case f:return a.authorizationUrl;default:return n}},Ut=(n,a)=>{switch(a.type){default:return n}},nt=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case w:return a.connectionErrors}return n},yt=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return a.isConnecting}return n},Q=(0,lt.UY)({connectionStatus:At,connectionStatusIsFetching:ft,siteIsRegistering:Pt,userIsConnecting:Rt,registrationError:Ot,authorizationUrl:Nt,userConnectionData:Ut,connectedPlugins:It,connectionErrors:nt,isOfflineMode:yt});var Ft=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),X=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const M={...{getAuthorizationUrl:{isFulfilled:function(n){const a=!!n.authorizationUrl;for(var l=arguments.length,A=new Array(l>1?l-1:0),Y=1;Y<l;Y++)A[Y-1]=arguments[Y];const at=(0,Ft.Y)(K).hasFinishedResolution("getAuthorizationUrl",A);return a&&!at&&(0,X.W)(K).finishResolution("getAuthorizationUrl",A),a},*fulfill(n){const a=yield et.fetchAuthorizationUrl(n);yield et.setAuthorizationUrl(a.authorizeUrl)}}}},Mt={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>{var a,l;return(l=(a=n==null?void 0:n.userConnectionData)==null?void 0:a.currentUser)==null?void 0:l.wpcomUser},getBlogId:n=>{var a,l;return(l=(a=n==null?void 0:n.userConnectionData)==null?void 0:a.currentUser)==null?void 0:l.blogId}}};var Zt=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const q=class{static mayBeInit(a,l){q.store===null&&(q.store=(0,Zt.Z)(a,l),(0,lt.z2)(q.store))}};let rt=q;kt(rt,"store",null);const Vt=rt,dt=window.JP_CONNECTION_INITIAL_STATE;dt||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Vt.mayBeInit(K,{__experimentalUseThunks:!0,reducer:Q,actions:et,selectors:Mt,resolvers:M,controls:Ct,initialState:dt||{}})},"../../packages/my-jetpack/_inc/components/product-card/action-button.jsx":(F,m,o)=>{o.d(m,{N:()=>g,Z:()=>v});var h=o("../components/components/button/index.tsx"),u=o("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),C=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),I=o("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),c=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=u.__,g={ACTIVE:"active",INACTIVE:"inactive",ERROR:"error",ABSENT:"plugin_absent",ABSENT_WITH_PLAN:"plugin_absent_with_plan",NEEDS_PURCHASE:"needs_purchase",NEEDS_PURCHASE_OR_FREE:"needs_purchase_or_free",CAN_UPGRADE:"can_upgrade"},R=f=>{let{status:_,admin:V,name:j,slug:O,onActivate:L,onManage:w,onFixConnection:b,isFetching:k,isInstallingStandalone:H,isDeactivatingStandalone:z,className:N,onAdd:D}=f;const{detail:W}=(0,I.i)(O),{manageUrl:U,purchaseUrl:x}=W,B=!U,G=k||H||z,T={variant:G?void 0:"primary",disabled:G,className:N};if(!V)return(0,c.jsx)(h.Z,{...T,size:"small",variant:"link",weight:"regular",children:(0,u.gB)(d("Learn about %s","jetpack-my-jetpack"),j)});switch(_){case g.ABSENT:case g.ABSENT_WITH_PLAN:return(0,c.jsxs)(h.Z,{...T,href:`#/add-${O}`,size:"small",variant:"link",weight:"regular",children:[_===g.ABSENT&&(0,u.gB)(d("Get %s","jetpack-my-jetpack"),j),_===g.ABSENT_WITH_PLAN&&(0,u.gB)(d("Install %s","jetpack-my-jetpack"),j)]});case g.NEEDS_PURCHASE:case g.CAN_UPGRADE:{const y=d("Upgrade","jetpack-my-jetpack"),E=d("Purchase","jetpack-my-jetpack"),$=x?y:E;return(0,c.jsx)(h.Z,{...T,href:x||`#/add-${O}`,size:"small",weight:"regular",onClick:D,children:$})}case g.NEEDS_PURCHASE_OR_FREE:return(0,c.jsx)(h.Z,{...T,href:`#/add-${O}`,size:"small",weight:"regular",onClick:D,children:d("Start for free","jetpack-my-jetpack")});case g.ACTIVE:{const y=d("View","jetpack-my-jetpack"),E=d("Manage","jetpack-my-jetpack"),$=x?y:E;return(0,c.jsx)(h.Z,{...T,disabled:B||(T==null?void 0:T.disabled),size:"small",weight:"regular",variant:"secondary",href:U,onClick:w,children:$})}case g.ERROR:return(0,c.jsx)(h.Z,{...T,href:"#/connection",size:"small",weight:"regular",onClick:b,children:d("Fix connection","jetpack-my-jetpack")});case g.INACTIVE:return(0,c.jsx)(h.Z,{...T,size:"small",weight:"regular",variant:"secondary",onClick:L,children:d("Activate","jetpack-my-jetpack")});default:return null}};R.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const v=R},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(F,m,o)=>{o.d(m,{i:()=>I});var h=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),u=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),C=o("../../packages/my-jetpack/_inc/state/store.js");function I(c){const{activateProduct:d,deactivateProduct:g,installStandalonePluginForProduct:R,deactivateStandalonePluginForProduct:v}=(0,h.Z)(C.t),f=(0,u.Z)(_=>_(C.t).getProduct(c));return{activate:()=>d(c),deactivate:()=>g(c),deactivateStandalonePlugin:()=>v(c),installStandalonePlugin:()=>R(c),productsList:(0,u.Z)(_=>_(C.t).getProducts()),detail:f,isActive:f.status==="active",isFetching:(0,u.Z)(_=>_(C.t).isFetching(c)),stats:(0,u.Z)(_=>_(C.t).getProductStats(c))}}},"../../packages/my-jetpack/_inc/state/store.js":(F,m,o)=>{o.d(m,{t:()=>Wt,N:()=>oe});var h=o("../connection/state/store.jsx"),u=o("../../../node_modules/.pnpm/@wordpress+api-fetch@6.38.0/node_modules/@wordpress/api-fetch/build-module/index.js"),C=o("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js");const I="my-jetpack/v1",c="jetpack/v4/stats-app",d=`${I}/site/purchases`,g=`${I}/site/products`,R=`${I}/site/product-data`,v=`${I}/chat/availability`,f=`${I}/chat/authentication`,_=["scan"],V="videopress",j="videopress/v1/stats/featured",O=t=>`${c}/sites/${t}/stats/highlights`,L=C.__,w="SET_PURCHASES_IS_FETCHING",b="FETCH_PURCHASES",k="SET_PURCHASES",H="SET_AVAILABLE_LICENSES_IS_FETCHING",z="FETCH_AVAILABLE_LICENSES",N="SET_AVAILABLE_LICENSES",D="SET_IS_FETCHING_PRODUCT",W="SET_PRODUCT",U="SET_PRODUCT_REQUEST_ERROR",x="ACTIVATE_PRODUCT",B="SET_PRODUCT_STATUS",G="SET_CHAT_AVAILABILITY_IS_FETCHING",T="SET_CHAT_AVAILABILITY",y="SET_CHAT_AUTHENTICATION_IS_FETCHING",E="SET_CHAT_AUTHENTICATION",$="SET_PRODUCT_DATA_IS_FETCHING",ct="SET_PRODUCT_DATA",St="SET_STATS_COUNTS_IS_FETCHING",et="SET_STATS_COUNTS",pt="SET_GLOBAL_NOTICE",Ht="CLEAN_GLOBAL_NOTICE",K="SET_PRODUCT_STATS",ut="SET_IS_FETCHING_PRODUCT_STATS",mt=t=>({type:w,isFetching:t}),xt=t=>({type:G,isFetching:t}),Ct=t=>({type:y,isFetching:t}),lt=t=>({type:$,isFetching:t}),At=t=>({type:St,isFetching:t}),It=()=>({type:b}),ft=t=>({type:k,purchases:t}),Pt=t=>({type:T,chatAvailability:t}),Rt=t=>({type:E,chatAuthentication:t}),Ot=t=>({type:H,isFetching:t}),Nt=()=>({type:z}),Ut=t=>({type:N,availableLicenses:t}),nt=t=>({type:W,product:t}),yt=t=>({type:ct,productData:t}),Bt=t=>({type:et,statsCounts:t}),Q=(t,e)=>({type:U,productId:t,error:e}),Ft=(t,e)=>({type:B,productId:t,status:e}),X=(t,e)=>({type:"SET_GLOBAL_NOTICE",message:t,options:e}),Gt=()=>({type:"CLEAN_GLOBAL_NOTICE"});function M(t,e){return{type:D,productId:t,isFetching:e}}function vt(t,e,r){let{select:s,dispatch:i,registry:S}=r;return new Promise((Z,J)=>{if(!s.isValidProduct(t)){const P=L("Invalid product name","jetpack-my-jetpack"),Tt=new Error(P);i(Q(t,Tt)),i(X(P,{status:"error",isDismissible:!0})),J(Tt);return}const st=e.activate?"POST":"DELETE";return i(M(t,!0)),(0,u.Z)({path:`${g}/${t}`,method:st}).then(P=>{i(M(t,!1)),i(nt(P)),S.dispatch(h.t).refreshConnectedPlugins(),Z(P==null?void 0:P.status)}).catch(P=>{const{name:Tt}=s.getProduct(t),ie=(0,C.gB)(L("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),Tt);i(M(t,!1)),i(Q(t,P)),i(X(ie,{status:"error",isDismissible:!0})),J(P)})})}const dt={setPurchasesIsFetching:mt,setChatAvailabilityIsFetching:xt,setChatAuthenticationIsFetching:Ct,fetchPurchases:It,setPurchases:ft,setChatAvailability:Pt,setChatAuthentication:Rt,setProductDataIsFetching:lt,setProductData:yt,setAvailableLicensesIsFetching:Ot,fetchAvailableLicenses:Nt,setAvailableLicenses:Ut,setProductStats:(t,e)=>({type:K,productId:t,stats:e}),setIsFetchingProductStats:(t,e)=>({type:ut,productId:t,isFetching:e}),setStatsCounts:Bt,setStatsCountsIsFetching:At,...{setGlobalNotice:X,cleanGlobalNotice:Gt},...{setProduct:nt,activateProduct:t=>async e=>await vt(t,{activate:!0},e),deactivateStandalonePluginForProduct:t=>async e=>await vt(t,{activate:!1},e),installStandalonePluginForProduct:t=>async e=>{const{select:r,dispatch:s,registry:i}=e;return await new Promise((S,Z)=>{if(!r.isValidProduct(t)){const p=L("Invalid product name","jetpack-my-jetpack"),st=new Error(p);s(Q(t,st)),s(X(p,{status:"error",isDismissible:!0})),Z(st);return}return s(M(t,!0)),(0,u.Z)({path:`${g}/${t}/install-standalone`,method:"POST"}).then(p=>{s(M(t,!1)),s(nt(p)),i.dispatch(h.t).refreshConnectedPlugins(),S(p==null?void 0:p.standalone_plugin_info)}).catch(p=>{const{name:st}=r.getProduct(t),P=(0,C.gB)(L("Failed to install standalone plugin for %1$s: %2$s. Please try again","jetpack-my-jetpack"),st,p.message);s(M(t,!1)),s(Q(t,p)),s(X(P,{status:"error",isDismissible:!0})),Z(p)})})},setIsFetchingProduct:M,setRequestProductError:Q,setProductStatus:Ft}};function q(){return new Promise((t,e)=>{(0,u.Z)({path:d}).then(t).catch(e)})}const n={[b]:q};var a=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const l=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:{const{productId:r,isFetching:s}=e;return{...t,isFetching:{...t.isFetching,[r]:s},errors:{...t.errors,[r]:s?void 0:t.errors[r]}}}case B:{const{productId:r,status:s}=e;return{...t,items:{...t.items,[r]:{...t.items[r],status:s}}}}case W:{const{product:r}=e,{slug:s}=r;return{...t,items:{...t.items,[s]:r}}}case U:{const{productId:r,error:s}=e;return{...t,errors:{...t.errors,[r]:s}}}default:return t}},A=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case $:return{...t,isFetching:e.isFetching};case ct:return{...t,items:(e==null?void 0:e.productData)||{}};default:return t}},Y=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return{...t,isFetching:e.isFetching};case k:return{...t,items:(e==null?void 0:e.purchases)||[]};default:return t}},at=function(){var r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{isFetching:!1,isAvailable:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G:return{...t,isFetching:e.isFetching};case T:return{...t,isAvailable:(r=e==null?void 0:e.chatAvailability)==null?void 0:r.is_available};default:return t}},Dt=function(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{isFetching:!1,jwt:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return{...t,isFetching:e.isFetching};case E:return{...t,jwt:(s=(r=e==null?void 0:e.chatAuthentication)==null?void 0:r.user)==null?void 0:s.jwt};default:return t}},ot=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H:return{...t,isFetching:e.isFetching};case N:return{...t,items:(e==null?void 0:e.availableLicenses)||[]};default:return t}},jt=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{global:{}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case pt:{const{message:r,options:s}=e;return{...t,global:{message:r,options:s}}}case Ht:return{...t,global:{}};default:return t}},gt=function(){return arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}},_t=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ut:{const{productId:r,isFetching:s}=e;return{...t,isFetching:{...t.isFetching,[r]:s}}}case K:{const{productId:r,stats:s}=e;return{...t,items:{...t.items,[r]:s}}}default:return t}},Lt=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case St:return{...t,isFetching:e.isFetching};case et:return{...t,data:(e==null?void 0:e.statsCounts)||{}};default:return t}},Jt=(0,a.UY)({products:l,productData:A,purchases:Y,chatAvailability:at,chatAuthentication:Dt,availableLicenses:ot,notices:jt,plugins:gt,stats:_t,statsCounts:Lt});var wt=o("../api/index.jsx"),bt=o("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx");const Qt=async()=>(0,u.Z)({path:j}),Xt=async t=>t===V?Qt():null,qt=C.__,te={...{getProduct:{isFulfilled:(t,e)=>{var s;return(((s=t==null?void 0:t.products)==null?void 0:s.items)||{}).hasOwnProperty(e)&&!_.includes(e)},fulfill:t=>async e=>{let{dispatch:r}=e;try{r.setIsFetchingProduct(t,!0);const s=await(0,u.Z)({path:`${g}/${t}`});return r.setProduct(s),r.setIsFetchingProduct(t,!1),Promise.resolve()}catch(s){if(r.setIsFetchingProduct(t,!1),s!=null&&s.code&&(s!=null&&s.message))return r.setRequestProductError(t,s),Promise.reject(s);throw new Error(s)}}},getPurchases:()=>async t=>{let{dispatch:e}=t;e.setPurchasesIsFetching(!0);try{e.setPurchases(await(0,u.Z)({path:d})),e.setPurchasesIsFetching(!1)}catch(r){e.setPurchasesIsFetching(!1),r.code!=="not_connected"&&e.setGlobalNotice(qt("There was an error fetching your purchases information. Check your site connectivity and try again.","jetpack-my-jetpack"),{status:"error"})}},getChatAvailability:()=>async t=>{let{dispatch:e}=t;e.setChatAvailabilityIsFetching(!0);try{e.setChatAvailability(await(0,u.Z)({path:v})),e.setChatAvailabilityIsFetching(!1)}catch(r){e.setChatAvailabilityIsFetching(!1)}},getChatAuthentication:()=>async t=>{let{dispatch:e}=t;e.setChatAuthenticationIsFetching(!0);try{e.setChatAuthentication(await(0,u.Z)({path:f})),e.setChatAuthenticationIsFetching(!1)}catch(r){e.setChatAuthenticationIsFetching(!1)}},getAvailableLicenses:()=>async t=>{let{dispatch:e}=t;e.setAvailableLicensesIsFetching(!0);try{const{apiRoot:r,apiNonce:s}=(window==null?void 0:window.myJetpackRest)||{};wt.ZP.setApiRoot(r),wt.ZP.setApiNonce(s);const i=await wt.ZP.getUserLicenses();i&&i.items?e.setAvailableLicenses(i.items.filter(S=>{let{attached_at:Z,revoked_at:J}=S;return Z===null&&J===null})):e.setAvailableLicenses([])}catch(r){e.setAvailableLicenses([])}finally{e.setAvailableLicensesIsFetching(!1)}},getProductData:()=>async t=>{let{dispatch:e}=t;e.setProductDataIsFetching(!0);try{e.setProductData(await(0,u.Z)({path:R})),e.setProductDataIsFetching(!1)}catch(r){e.setProductDataIsFetching(!1)}},getStatsCounts:()=>async t=>{const{dispatch:e,registry:r}=t;e.setStatsCountsIsFetching(!0);const s=r.select(h.t).getBlogId();try{e.setStatsCounts(await(0,u.Z)({path:O(s)})),e.setStatsCountsIsFetching(!1)}catch(i){e.setStatsCountsIsFetching(!1)}}},getProductStats:{isFulfilled:(t,e)=>{var r,s;return((s=(r=t.stats)==null?void 0:r.items)==null?void 0:s.hasOwnProperty(e))||!1},fulfill:t=>async e=>{let{dispatch:r,select:s}=e;const{status:i}=s.getProduct(t);if(i!==bt.N.ACTIVE)return r.setProductStats(t,null),Promise.resolve();try{r.setIsFetchingProductStats(t,!0);const S=await Xt(t);return r.setProductStats(t,S),r.setIsFetchingProductStats(t,!1),Promise.resolve()}catch(S){if(r.setProductStats(t,null),r.setIsFetchingProductStats(t,!1),S!=null&&S.code&&(S!=null&&S.message))return Promise.reject(S);throw new Error(S)}}}};function ee(t){return t.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace("_",""))}function se(t){return t.indexOf("_")!==-1}function tt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const r=Object.assign({},t);for(const s in r)r.hasOwnProperty(s)&&se(s)&&(r[ee(s)]=r[s],e&&delete r[s]);return r}const Et=t=>{var e;return((e=t.products)==null?void 0:e.items)||{}},zt=t=>Object.keys(Et(t)),ne={...{getProducts:Et,getProductNames:zt,getProduct:(t,e)=>{var i,S;const r=((i=Et(t))==null?void 0:i[e])||{},s=tt(r,!0);return s.standalonePluginInfo=tt(s.standalonePluginInfo||{},!0),s.pricingForUi=tt(s.pricingForUi||{},!0),s.pricingForUi.introductoryOffer=s.pricingForUi.isIntroductoryOffer?tt(s.pricingForUi.introductoryOffer,!0):null,(S=s.pricingForUi)!=null&&S.tiers&&(s.pricingForUi.tiers=tt(s.pricingForUi.tiers,!0),s.pricingForUi.tiers=Object.keys(s.pricingForUi.tiers).reduce((Z,J)=>{const p=tt(s.pricingForUi.tiers[J],!0)||{};return Z[J]={...p,introductoryOffer:p!=null&&p.isIntroductoryOffer?tt(p==null?void 0:p.introductoryOffer,!0):null},Z},{})),s.features=s.features||[],s.supportedProducts=s.supportedProducts||[],s.pricingForUi.fullPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.fullPrice/12*100)/100:s.pricingForUi.fullPrice,s.pricingForUi.discountPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.discountPrice/12*100)/100:s.pricingForUi.discountPrice,s},isValidProduct:(t,e)=>zt(t).includes(e),isFetching:(t,e)=>{var r,s;return((s=(r=t.products)==null?void 0:r.isFetching)==null?void 0:s[e])||!1},getProductsThatRequiresUserConnection:t=>{const e=Et(t);return Object.keys(e).reduce((r,s)=>{const i=e[s];return(i==null?void 0:i.requires_user_connection)&&((i==null?void 0:i.status)===bt.N.ACTIVE||(i==null?void 0:i.status)===bt.N.ERROR)&&r.push(i==null?void 0:i.name),r},[])}},...{getPurchases:t=>{var e;return((e=t.purchases)==null?void 0:e.items)||[]},isRequestingPurchases:t=>{var e;return((e=t.purchases)==null?void 0:e.isFetching)||!1}},...{getChatAvailability:t=>t.chatAvailability.isAvailable,isRequestingChatAvailability:t=>t.chatAvailability.isFetching},...{getChatAuthentication:t=>t.chatAuthentication.jwt,isRequestingChatAuthentication:t=>t.chatAuthentication.isFetching},...{getProductData:t=>{var e;return((e=t.productData)==null?void 0:e.items)||{}},isFetchingProductData:t=>{var e;return((e=t.productData)==null?void 0:e.isFetching)||!1}},...{getAvailableLicenses:t=>{var e;return((e=t.availableLicenses)==null?void 0:e.items)||[]},isFetchingAvailableLicenses:t=>{var e;return((e=t.availableLicenses)==null?void 0:e.isFetching)||!1}},...{getGlobalNotice:t=>{var e;return(e=t.notices)==null?void 0:e.global}},...{hasStandalonePluginInstalled:t=>Object.values(t.plugins).filter(e=>["jetpack-backup","jetpack-boost","jetpack-protect","jetpack-search","jetpack-social","jetpack-videopress"].indexOf(e.TextDomain)>=0).length>0},...{getProductStats:(t,e)=>{var r,s;return(s=(r=t.stats)==null?void 0:r.items)==null?void 0:s[e]},isFetchingProductStats:(t,e)=>{var r,s;return((s=(r=t.stats)==null?void 0:r.isFetching)==null?void 0:s[e])||!1}},...{getStatsCounts:t=>{var e;return(e=t.statsCounts)==null?void 0:e.data},isFetchingStatsCounts:t=>{var e;return((e=t.statsCounts)==null?void 0:e.isFetching)||!1}}};var re=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const it=class{static mayBeInit(e,r){it.store===null&&(it.store=(0,re.Z)(e,r),(0,a.z2)(it.store))}};let ht=it;kt(ht,"store",null);const ae=ht,Wt="my-jetpack";function oe(){ae.mayBeInit(Wt,{__experimentalUseThunks:!0,reducer:Jt,actions:dt,selectors:ne,resolvers:te,controls:n,initialState:window.myJetpackInitialState||{}})}}}]);})();
