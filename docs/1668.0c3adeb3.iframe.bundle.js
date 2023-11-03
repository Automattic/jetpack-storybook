"use strict";(()=>{var it=Object.defineProperty;var lt=(O,p,r)=>p in O?it(O,p,{enumerable:!0,configurable:!0,writable:!0,value:r}):O[p]=r;var Me=(O,p,r)=>(lt(O,typeof p!="symbol"?p+"":p,r),r);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1668],{"../connection/components/use-connection/index.jsx":(O,p,r)=>{r.d(p,{Z:()=>v});var T=r("../api/index.jsx"),i=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),d=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),E=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=r("../connection/state/store.jsx");const C=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},v=function(){let{registrationNonce:w=C.registrationNonce,apiRoot:f=C.apiRoot,apiNonce:j=C.apiNonce,redirectUri:u,autoTrigger:g,from:A,skipUserConnection:I}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:M,connectUser:W,refreshConnectedPlugins:z}=(0,i.Z)(l.t),b=(0,d.Z)(m=>m(l.t).getRegistrationError()),{siteIsRegistering:X,userIsConnecting:D,userConnectionData:R,connectedPlugins:B,connectionErrors:N,isRegistered:L,isUserConnected:q,hasConnectedOwner:K,isOfflineMode:ee}=(0,d.Z)(m=>({siteIsRegistering:m(l.t).getSiteIsRegistering(),userIsConnecting:m(l.t).getUserIsConnecting(),userConnectionData:m(l.t).getUserConnectionData(),connectedPlugins:m(l.t).getConnectedPlugins(),connectionErrors:m(l.t).getConnectionErrors(),isOfflineMode:m(l.t).getIsOfflineMode(),...m(l.t).getConnectionStatus()})),k=()=>{if(I){if(u)return window.location=u,Promise.resolve(u)}else return W({from:A,redirectUri:u});return Promise.resolve()},H=m=>(m&&m.preventDefault(),L?k():M({registrationNonce:w,redirectUri:u}).then(()=>k()));return(0,E.useEffect)(()=>{T.ZP.setApiRoot(f),T.ZP.setApiNonce(j)},[f,j]),(0,E.useEffect)(()=>{g&&!X&&!D&&H()},[]),{handleRegisterSite:H,handleConnectUser:k,refreshConnectedPlugins:z,isRegistered:L,isUserConnected:q,siteIsRegistering:X,userIsConnecting:D,registrationError:b,userConnectionData:R,hasConnectedOwner:K,connectedPlugins:B,connectionErrors:N,isOfflineMode:ee}}},"../connection/state/store.jsx":(O,p,r)=>{r.d(p,{t:()=>U});var T=r("../api/index.jsx");const i="SET_CONNECTION_STATUS",d="SET_CONNECTION_STATUS_IS_FETCHING",E="FETCH_CONNECTION_STATUS",l="SET_SITE_IS_REGISTERING",C="SET_USER_IS_CONNECTING",v="SET_REGISTRATION_ERROR",w="CLEAR_REGISTRATION_ERROR",f="REGISTER_SITE",j="SET_AUTHORIZATION_URL",u="CONNECT_USER",g="DISCONNECT_USER_SUCCESS",A="FETCH_AUTHORIZATION_URL",I="SET_CONNECTED_PLUGINS",M="REFRESH_CONNECTED_PLUGINS",W="SET_CONNECTION_ERRORS",z="SET_IS_OFFLINE_MODE",b=n=>({type:i,connectionStatus:n}),X=n=>({type:d,isFetching:n}),D=()=>({type:E}),R=n=>({type:l,isRegistering:n}),B=n=>({type:C,isConnecting:n}),N=()=>({type:g}),L=n=>({type:v,registrationError:n}),q=()=>({type:w}),K=n=>({type:j,authorizationUrl:n}),ee=n=>({type:A,redirectUri:n}),k=n=>({type:I,connectedPlugins:n}),H=n=>({type:W,connectionErrors:n}),m=n=>({type:z,isOfflineMode:n});function te(){let{from:n,redirectFunc:a,redirectUri:_}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield B(!0),yield{type:u,from:n,redirectFunc:a,redirectUri:_}}()}function re(n){let{registrationNonce:a,redirectUri:_}=n;return function*(){yield q(),yield R(!0);try{const y=yield{type:f,registrationNonce:a,redirectUri:_};return yield b({isRegistered:!0}),yield K(y.authorizeUrl),yield R(!1),Promise.resolve(y)}catch(y){return yield L(y),yield R(!1),Promise.reject(y)}}()}const Q={setConnectionStatus:b,setConnectionStatusIsFetching:X,fetchConnectionStatus:D,fetchAuthorizationUrl:ee,setSiteIsRegistering:R,setUserIsConnecting:B,setRegistrationError:L,clearRegistrationError:q,setAuthorizationUrl:K,registerSite:re,connectUser:te,disconnectUserSuccess:N,setConnectedPlugins:k,refreshConnectedPlugins:()=>async n=>{let{dispatch:a}=n;return await new Promise(_=>T.ZP.fetchConnectedPlugins().then(y=>{a(k(y)),_(y)}))},setConnectionErrors:H,setIsOfflineMode:m};var me=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const U="jetpack-connection",ae=n=>{let{registrationNonce:a,redirectUri:_}=n;return T.ZP.registerSite(a,_)},ce=(0,me.R)(n=>{let{resolveSelect:a}=n;return function(){let{from:_,redirectFunc:y,redirectUri:ne}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((fe,be)=>{a(U).getAuthorizationUrl(ne).then(Ae=>{const De=y||(Le=>window.location.assign(Le)),Re=new URL(Ae);_&&Re.searchParams.set("from",encodeURIComponent(_));const Oe=Re.toString();De(Oe),fe(Oe)}).catch(Ae=>{be(Ae)})})}}),P={FETCH_AUTHORIZATION_URL:n=>{let{redirectUri:a}=n;return T.ZP.fetchAuthorizationUrl(a)},REGISTER_SITE:ae,CONNECT_USER:ce};var Y=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const ie=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i:return{...n,...a.connectionStatus};case g:return{...n,isUserConnected:!1}}return n},Ee=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case I:return a.connectedPlugins}return n},he=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return a.isFetching}return n},x=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return a.isRegistering}return n},Z=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:return a.isConnecting}return n},G=(n,a)=>{switch(a.type){case w:return!1;case v:return a.registrationError;default:return n}},Se=(n,a)=>{switch(a.type){case j:return a.authorizationUrl;default:return n}},Te=(n,a)=>{switch(a.type){default:return n}},Ce=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case W:return a.connectionErrors}return n},je=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case z:return a.isConnecting}return n},le=(0,Y.UY)({connectionStatus:ie,connectionStatusIsFetching:he,siteIsRegistering:x,userIsConnecting:Z,registrationError:G,authorizationUrl:Se,userConnectionData:Te,connectedPlugins:Ee,connectionErrors:Ce,isOfflineMode:je});var Fe=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ue=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const J={...{getAuthorizationUrl:{isFulfilled:function(n){const a=!!n.authorizationUrl;for(var _=arguments.length,y=new Array(_>1?_-1:0),ne=1;ne<_;ne++)y[ne-1]=arguments[ne];const fe=(0,Fe.Y)(U).hasFinishedResolution("getAuthorizationUrl",y);return a&&!fe&&(0,ue.W)(U).finishResolution("getAuthorizationUrl",y),a},*fulfill(n){const a=yield Q.fetchAuthorizationUrl(n);yield Q.setAuthorizationUrl(a.authorizeUrl)}}}},Ze={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>{var a,_;return(_=(a=n==null?void 0:n.userConnectionData)==null?void 0:a.currentUser)==null?void 0:_.wpcomUser},getBlogId:n=>{var a,_;return(_=(a=n==null?void 0:n.userConnectionData)==null?void 0:a.currentUser)==null?void 0:_.blogId}}};var Ge=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const de=class{static mayBeInit(a,_){de.store===null&&(de.store=(0,Ge.Z)(a,_),(0,Y.z2)(de.store))}};let Ie=de;Me(Ie,"store",null);const We=Ie,ye=window.JP_CONNECTION_INITIAL_STATE;ye||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),We.mayBeInit(U,{__experimentalUseThunks:!0,reducer:le,actions:Q,selectors:Ze,resolvers:J,controls:P,initialState:ye||{}})},"../../packages/my-jetpack/_inc/components/product-card/action-button.jsx":(O,p,r)=>{r.d(p,{N:()=>I,Z:()=>W});var T=r("../components/components/button/index.tsx"),i=r("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),d=r("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),E=r("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),l=r("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),C=r("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),v=r("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),w=r.n(v),f=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=r("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),u=r("../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),g=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const A=i.__,I={ACTIVE:"active",INACTIVE:"inactive",ERROR:"error",ABSENT:"plugin_absent",ABSENT_WITH_PLAN:"plugin_absent_with_plan",NEEDS_PURCHASE:"needs_purchase",NEEDS_PURCHASE_OR_FREE:"needs_purchase_or_free",CAN_UPGRADE:"can_upgrade"},M=z=>{let{status:b,admin:X,name:D,slug:R,onActivate:B,additionalActions:N,onManage:L,onFixConnection:q,isFetching:K,isInstallingStandalone:ee,isDeactivatingStandalone:k,className:H,onAdd:m}=z;const[te,re]=(0,f.useState)(!1),[V,Q]=(0,f.useState)({}),{detail:me}=(0,j.i)(R),{manageUrl:ge,purchaseUrl:U}=me,ae=!ge,ce=K||ee||k,se=(N==null?void 0:N.length)>0,P=(0,f.useMemo)(()=>({variant:ce?void 0:"primary",disabled:ce,className:H}),[ce,H]),Y=(0,f.useCallback)(()=>{switch(b){case I.ABSENT:case I.ABSENT_WITH_PLAN:{const x=b===I.ABSENT?(0,i.gB)(A("Get %s","jetpack-my-jetpack"),D):(0,i.gB)(A("Install %s","jetpack-my-jetpack"),D);return{...P,href:`#/add-${R}`,size:"small",variant:"link",weight:"regular",label:x,onClick:null}}case I.NEEDS_PURCHASE:case I.CAN_UPGRADE:{const x=A("Upgrade","jetpack-my-jetpack"),Z=A("Purchase","jetpack-my-jetpack"),G=U?x:Z;return{...P,href:U||`#/add-${R}`,size:"small",variant:"primary",weight:"regular",label:G,onClick:m}}case I.NEEDS_PURCHASE_OR_FREE:return{...P,href:`#/add-${R}`,size:"small",variant:"primary",weight:"regular",label:A("Start for free","jetpack-my-jetpack"),onClick:m};case I.ACTIVE:{const x=A("View","jetpack-my-jetpack"),Z=A("Manage","jetpack-my-jetpack"),G=U?x:Z;return{...P,disabled:ae||(P==null?void 0:P.disabled),href:ge,size:"small",variant:"secondary",weight:"regular",label:G,onClick:L}}case I.ERROR:return{...P,href:"#/connection",size:"small",variant:"primary",weight:"regular",label:A("Fix connection","jetpack-my-jetpack"),onClick:q};case I.INACTIVE:return{...P,href:"",size:"small",variant:"secondary",weight:"regular",label:A("Activate","jetpack-my-jetpack"),onClick:B};default:return null}},[P,ae,ge,D,B,m,q,L,U,R,b]),ie=(0,f.useMemo)(()=>se?[...N,Y()]:[Y()],[N,Y,se]),Ee=(0,f.useCallback)(()=>{re(!te)},[te]);if((0,f.useEffect)(()=>{Q(ie[0])},[ie]),!X)return(0,g.jsx)(T.Z,{...P,size:"small",variant:"link",weight:"regular",children:(0,i.gB)(A("Learn about %s","jetpack-my-jetpack"),D)});const he=se&&(0,g.jsx)("div",{className:u.Z.dropdown,children:(0,g.jsx)("ul",{className:u.Z.dropdownMenu,children:[...N,Y()].map((x,Z)=>{let{label:G,isExternalLink:Se}=x;const Te=()=>{Q(ie[Z]),re(!1)};return(0,g.jsx)("li",{children:(0,g.jsxs)("button",{onClick:Te,className:u.Z.dropdownItem,children:[(0,g.jsxs)("div",{className:u.Z.dropdownItemLabel,children:[G,Se&&(0,g.jsx)(d.Z,{icon:E.Z,size:16})]}),G===V.label&&(0,g.jsx)("div",{className:u.Z.activeActionCheckmark,children:(0,g.jsx)(d.Z,{icon:l.Z,size:24,fill:"white"})})]})},Z)})})});return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:w()(u.Z.actionButton,se?u.Z.hasAdditionalActions:null),children:[(0,g.jsx)(T.Z,{...P,...V,children:V.label}),se&&(0,g.jsx)("button",{className:w()(u.Z.dropdownChevron,V.variant==="primary"?u.Z.primary:u.Z.secondary),onClick:Ee,children:(0,g.jsx)(d.Z,{icon:C.Z,size:24,fill:V.variant==="primary"?"white":"black"})}),te&&he]})})};M.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const W=M},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(O,p,r)=>{r.d(p,{i:()=>E});var T=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),i=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),d=r("../../packages/my-jetpack/_inc/state/store.js");function E(l){const{activateProduct:C,deactivateProduct:v,installStandalonePluginForProduct:w,deactivateStandalonePluginForProduct:f}=(0,T.Z)(d.t),j=(0,i.Z)(u=>u(d.t).getProduct(l));return{activate:()=>C(l),deactivate:()=>v(l),deactivateStandalonePlugin:()=>f(l),installStandalonePlugin:()=>w(l),productsList:(0,i.Z)(u=>u(d.t).getProducts()),detail:j,isActive:j.status==="active",isFetching:(0,i.Z)(u=>u(d.t).isFetching(l)),stats:(0,i.Z)(u=>u(d.t).getProductStats(l))}}},"../../packages/my-jetpack/_inc/state/store.js":(O,p,r)=>{r.d(p,{t:()=>Xe,N:()=>at});var T=r("../connection/state/store.jsx"),i=r("../../../node_modules/.pnpm/@wordpress+api-fetch@6.41.0/node_modules/@wordpress/api-fetch/build-module/index.js"),d=r("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js");const E="my-jetpack/v1",l="jetpack/v4/stats-app",C=`${E}/site/purchases`,v=`${E}/site/products`,w=`${E}/site/product-data`,f=`${E}/chat/availability`,j=`${E}/chat/authentication`,u=["scan"],g="videopress",A="videopress/v1/stats/featured",I=e=>`${l}/sites/${e}/stats/highlights`,M=d.__,W="SET_PURCHASES_IS_FETCHING",z="FETCH_PURCHASES",b="SET_PURCHASES",X="SET_AVAILABLE_LICENSES_IS_FETCHING",D="FETCH_AVAILABLE_LICENSES",R="SET_AVAILABLE_LICENSES",B="SET_IS_FETCHING_PRODUCT",N="SET_PRODUCT",L="SET_PRODUCT_REQUEST_ERROR",q="ACTIVATE_PRODUCT",K="SET_PRODUCT_STATUS",ee="SET_CHAT_AVAILABILITY_IS_FETCHING",k="SET_CHAT_AVAILABILITY",H="SET_CHAT_AUTHENTICATION_IS_FETCHING",m="SET_CHAT_AUTHENTICATION",te="SET_PRODUCT_DATA_IS_FETCHING",re="SET_PRODUCT_DATA",V="SET_STATS_COUNTS_IS_FETCHING",Q="SET_STATS_COUNTS",me="SET_GLOBAL_NOTICE",ge="CLEAN_GLOBAL_NOTICE",U="SET_PRODUCT_STATS",ae="SET_IS_FETCHING_PRODUCT_STATS",ce=e=>({type:W,isFetching:e}),se=e=>({type:ee,isFetching:e}),P=e=>({type:H,isFetching:e}),Y=e=>({type:te,isFetching:e}),ie=e=>({type:V,isFetching:e}),Ee=()=>({type:z}),he=e=>({type:b,purchases:e}),x=e=>({type:k,chatAvailability:e}),Z=e=>({type:m,chatAuthentication:e}),G=e=>({type:X,isFetching:e}),Se=()=>({type:D}),Te=e=>({type:R,availableLicenses:e}),Ce=e=>({type:N,product:e}),je=e=>({type:re,productData:e}),Be=e=>({type:Q,statsCounts:e}),le=(e,t)=>({type:L,productId:e,error:t}),Fe=(e,t)=>({type:K,productId:e,status:t}),ue=(e,t)=>({type:"SET_GLOBAL_NOTICE",message:e,options:t}),He=()=>({type:"CLEAN_GLOBAL_NOTICE"});function J(e,t){return{type:B,productId:e,isFetching:t}}function we(e,t,o){let{select:s,dispatch:c,registry:h}=o;return new Promise(($,oe)=>{if(!s.isValidProduct(e)){const F=M("Invalid product name","jetpack-my-jetpack"),ve=new Error(F);c(le(e,ve)),c(ue(F,{status:"error",isDismissible:!0})),oe(ve);return}const pe=t.activate?"POST":"DELETE";return c(J(e,!0)),(0,i.Z)({path:`${v}/${e}`,method:pe}).then(F=>{c(J(e,!1)),c(Ce(F)),h.dispatch(T.t).refreshConnectedPlugins(),$(F==null?void 0:F.status)}).catch(F=>{const{name:ve}=s.getProduct(e),ct=(0,d.gB)(M("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),ve);c(J(e,!1)),c(le(e,F)),c(ue(ct,{status:"error",isDismissible:!0})),oe(F)})})}const ye={setPurchasesIsFetching:ce,setChatAvailabilityIsFetching:se,setChatAuthenticationIsFetching:P,fetchPurchases:Ee,setPurchases:he,setChatAvailability:x,setChatAuthentication:Z,setProductDataIsFetching:Y,setProductData:je,setAvailableLicensesIsFetching:G,fetchAvailableLicenses:Se,setAvailableLicenses:Te,setProductStats:(e,t)=>({type:U,productId:e,stats:t}),setIsFetchingProductStats:(e,t)=>({type:ae,productId:e,isFetching:t}),setStatsCounts:Be,setStatsCountsIsFetching:ie,...{setGlobalNotice:ue,cleanGlobalNotice:He},...{setProduct:Ce,activateProduct:e=>async t=>await we(e,{activate:!0},t),deactivateStandalonePluginForProduct:e=>async t=>await we(e,{activate:!1},t),installStandalonePluginForProduct:e=>async t=>{const{select:o,dispatch:s,registry:c}=t;return await new Promise((h,$)=>{if(!o.isValidProduct(e)){const S=M("Invalid product name","jetpack-my-jetpack"),pe=new Error(S);s(le(e,pe)),s(ue(S,{status:"error",isDismissible:!0})),$(pe);return}return s(J(e,!0)),(0,i.Z)({path:`${v}/${e}/install-standalone`,method:"POST"}).then(S=>{s(J(e,!1)),s(Ce(S)),c.dispatch(T.t).refreshConnectedPlugins(),h(S==null?void 0:S.standalone_plugin_info)}).catch(S=>{const{name:pe}=o.getProduct(e),F=(0,d.gB)(M("Failed to install standalone plugin for %1$s: %2$s. Please try again","jetpack-my-jetpack"),pe,S.message);s(J(e,!1)),s(le(e,S)),s(ue(F,{status:"error",isDismissible:!0})),$(S)})})},setIsFetchingProduct:J,setRequestProductError:le,setProductStatus:Fe}};function de(){return new Promise((e,t)=>{(0,i.Z)({path:C}).then(e).catch(t)})}const n={[z]:de};var a=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const _=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s},errors:{...e.errors,[o]:s?void 0:e.errors[o]}}}case K:{const{productId:o,status:s}=t;return{...e,items:{...e.items,[o]:{...e.items[o],status:s}}}}case N:{const{product:o}=t,{slug:s}=o;return{...e,items:{...e.items,[s]:o}}}case L:{const{productId:o,error:s}=t;return{...e,errors:{...e.errors,[o]:s}}}default:return e}},y=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return{...e,isFetching:t.isFetching};case re:return{...e,items:(t==null?void 0:t.productData)||{}};default:return e}},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{...e,isFetching:t.isFetching};case b:return{...e,items:(t==null?void 0:t.purchases)||[]};default:return e}},fe=function(){var o;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{isFetching:!1,isAvailable:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return{...e,isFetching:t.isFetching};case k:return{...e,isAvailable:(o=t==null?void 0:t.chatAvailability)==null?void 0:o.is_available};default:return e}},be=function(){var o,s;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{isFetching:!1,jwt:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{...e,isFetching:t.isFetching};case m:return{...e,jwt:(s=(o=t==null?void 0:t.chatAuthentication)==null?void 0:o.user)==null?void 0:s.jwt};default:return e}},Ae=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{...e,isFetching:t.isFetching};case R:return{...e,items:(t==null?void 0:t.availableLicenses)||[]};default:return e}},De=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{global:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:{const{message:o,options:s}=t;return{...e,global:{message:o,options:s}}}case ge:return{...e,global:{}};default:return e}},Re=function(){return arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}},Oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s}}}case U:{const{productId:o,stats:s}=t;return{...e,items:{...e.items,[o]:s}}}default:return e}},Le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{...e,isFetching:t.isFetching};case Q:return{...e,data:(t==null?void 0:t.statsCounts)||{}};default:return e}},Ye=(0,a.UY)({products:_,productData:y,purchases:ne,chatAvailability:fe,chatAuthentication:be,availableLicenses:Ae,notices:De,plugins:Re,stats:Oe,statsCounts:Le});var ke=r("../api/index.jsx"),xe=r("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx");const Je=async()=>(0,i.Z)({path:A}),$e=async e=>e===g?Je():null,qe=d.__,et={...{getProduct:{isFulfilled:(e,t)=>{var s;return(((s=e==null?void 0:e.products)==null?void 0:s.items)||{}).hasOwnProperty(t)&&!u.includes(t)},fulfill:e=>async t=>{let{dispatch:o}=t;try{o.setIsFetchingProduct(e,!0);const s=await(0,i.Z)({path:`${v}/${e}`});return o.setProduct(s),o.setIsFetchingProduct(e,!1),Promise.resolve()}catch(s){if(o.setIsFetchingProduct(e,!1),s!=null&&s.code&&(s!=null&&s.message))return o.setRequestProductError(e,s),Promise.reject(s);throw new Error(s)}}},getPurchases:()=>async e=>{let{dispatch:t}=e;t.setPurchasesIsFetching(!0);try{t.setPurchases(await(0,i.Z)({path:C})),t.setPurchasesIsFetching(!1)}catch(o){t.setPurchasesIsFetching(!1),o.code!=="not_connected"&&t.setGlobalNotice(qe("There was an error fetching your purchases information. Check your site connectivity and try again.","jetpack-my-jetpack"),{status:"error"})}},getChatAvailability:()=>async e=>{let{dispatch:t}=e;t.setChatAvailabilityIsFetching(!0);try{t.setChatAvailability(await(0,i.Z)({path:f})),t.setChatAvailabilityIsFetching(!1)}catch(o){t.setChatAvailabilityIsFetching(!1)}},getChatAuthentication:()=>async e=>{let{dispatch:t}=e;t.setChatAuthenticationIsFetching(!0);try{t.setChatAuthentication(await(0,i.Z)({path:j})),t.setChatAuthenticationIsFetching(!1)}catch(o){t.setChatAuthenticationIsFetching(!1)}},getAvailableLicenses:()=>async e=>{let{dispatch:t}=e;t.setAvailableLicensesIsFetching(!0);try{const{apiRoot:o,apiNonce:s}=(window==null?void 0:window.myJetpackRest)||{};ke.ZP.setApiRoot(o),ke.ZP.setApiNonce(s);const c=await ke.ZP.getUserLicenses();c&&c.items?t.setAvailableLicenses(c.items.filter(h=>{let{attached_at:$,revoked_at:oe}=h;return $===null&&oe===null})):t.setAvailableLicenses([])}catch(o){t.setAvailableLicenses([])}finally{t.setAvailableLicensesIsFetching(!1)}},getProductData:()=>async e=>{let{dispatch:t}=e;t.setProductDataIsFetching(!0);try{t.setProductData(await(0,i.Z)({path:w})),t.setProductDataIsFetching(!1)}catch(o){t.setProductDataIsFetching(!1)}},getStatsCounts:()=>async e=>{const{dispatch:t,registry:o}=e;t.setStatsCountsIsFetching(!0);const s=o.select(T.t).getBlogId();try{t.setStatsCounts(await(0,i.Z)({path:I(s)})),t.setStatsCountsIsFetching(!1)}catch(c){t.setStatsCountsIsFetching(!1)}}},getProductStats:{isFulfilled:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.items)==null?void 0:s.hasOwnProperty(t))||!1},fulfill:e=>async t=>{let{dispatch:o,select:s}=t;const{status:c}=s.getProduct(e);if(c!==xe.N.ACTIVE)return o.setProductStats(e,null),Promise.resolve();try{o.setIsFetchingProductStats(e,!0);const h=await $e(e);return o.setProductStats(e,h),o.setIsFetchingProductStats(e,!1),Promise.resolve()}catch(h){if(o.setProductStats(e,null),o.setIsFetchingProductStats(e,!1),h!=null&&h.code&&(h!=null&&h.message))return Promise.reject(h);throw new Error(h)}}}};function tt(e){return e.replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("_",""))}function st(e){return e.indexOf("_")!==-1}function _e(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const o=Object.assign({},e);for(const s in o)o.hasOwnProperty(s)&&st(s)&&(o[tt(s)]=o[s],t&&delete o[s]);return o}const Ne=e=>{var t;return((t=e.products)==null?void 0:t.items)||{}},ze=e=>Object.keys(Ne(e)),nt={...{getProducts:Ne,getProductNames:ze,getProduct:(e,t)=>{var c,h;const o=((c=Ne(e))==null?void 0:c[t])||{},s=_e(o,!0);return s.standalonePluginInfo=_e(s.standalonePluginInfo||{},!0),s.pricingForUi=_e(s.pricingForUi||{},!0),s.pricingForUi.introductoryOffer=s.pricingForUi.isIntroductoryOffer?_e(s.pricingForUi.introductoryOffer,!0):null,(h=s.pricingForUi)!=null&&h.tiers&&(s.pricingForUi.tiers=_e(s.pricingForUi.tiers,!0),s.pricingForUi.tiers=Object.keys(s.pricingForUi.tiers).reduce(($,oe)=>{const S=_e(s.pricingForUi.tiers[oe],!0)||{};return $[oe]={...S,introductoryOffer:S!=null&&S.isIntroductoryOffer?_e(S==null?void 0:S.introductoryOffer,!0):null},$},{})),s.features=s.features||[],s.supportedProducts=s.supportedProducts||[],s.pricingForUi.fullPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.fullPrice/12*100)/100:s.pricingForUi.fullPrice,s.pricingForUi.discountPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.discountPrice/12*100)/100:s.pricingForUi.discountPrice,s},isValidProduct:(e,t)=>ze(e).includes(t),isFetching:(e,t)=>{var o,s;return((s=(o=e.products)==null?void 0:o.isFetching)==null?void 0:s[t])||!1},getProductsThatRequiresUserConnection:e=>{const t=Ne(e);return Object.keys(t).reduce((o,s)=>{const c=t[s];return(c==null?void 0:c.requires_user_connection)&&((c==null?void 0:c.status)===xe.N.ACTIVE||(c==null?void 0:c.status)===xe.N.ERROR)&&o.push(c==null?void 0:c.name),o},[])}},...{getPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.items)||[]},isRequestingPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.isFetching)||!1}},...{getChatAvailability:e=>e.chatAvailability.isAvailable,isRequestingChatAvailability:e=>e.chatAvailability.isFetching},...{getChatAuthentication:e=>e.chatAuthentication.jwt,isRequestingChatAuthentication:e=>e.chatAuthentication.isFetching},...{getProductData:e=>{var t;return((t=e.productData)==null?void 0:t.items)||{}},isFetchingProductData:e=>{var t;return((t=e.productData)==null?void 0:t.isFetching)||!1}},...{getAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.items)||[]},isFetchingAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.isFetching)||!1}},...{getGlobalNotice:e=>{var t;return(t=e.notices)==null?void 0:t.global}},...{hasStandalonePluginInstalled:e=>Object.values(e.plugins).filter(t=>["jetpack-backup","jetpack-boost","jetpack-protect","jetpack-search","jetpack-social","jetpack-videopress"].indexOf(t.TextDomain)>=0).length>0},...{getProductStats:(e,t)=>{var o,s;return(s=(o=e.stats)==null?void 0:o.items)==null?void 0:s[t]},isFetchingProductStats:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.isFetching)==null?void 0:s[t])||!1}},...{getStatsCounts:e=>{var t;return(t=e.statsCounts)==null?void 0:t.data},isFetchingStatsCounts:e=>{var t;return((t=e.statsCounts)==null?void 0:t.isFetching)||!1}}};var ot=r("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const Pe=class{static mayBeInit(t,o){Pe.store===null&&(Pe.store=(0,ot.Z)(t,o),(0,a.z2)(Pe.store))}};let Ue=Pe;Me(Ue,"store",null);const rt=Ue,Xe="my-jetpack";function at(){rt.mayBeInit(Xe,{__experimentalUseThunks:!0,reducer:Ye,actions:ye,selectors:nt,resolvers:et,controls:n,initialState:window.myJetpackInitialState||{}})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(O,p,r)=>{r.d(p,{Z:()=>C});var T=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=r.n(T),d=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),E=r.n(d),l=E()(i());l.push([O.id,'.GTxJkEnk1nQQsd85aJFX{min-height:200px}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*3);min-height:28px;flex-wrap:wrap}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*.5)}.HMaSD8wdv3EFkpx0cFj6 h3{font-weight:700;line-height:28px}.jIwW4aBmv_cOzGjQ373o{position:relative;display:flex}.jIwW4aBmv_cOzGjQ373o .A3cnOMmNvclCPkyFHSlo{display:flex;align-items:center;justify-content:center;border:.5px solid var(--jp-black);box-shadow:inset 0 0 0 1px var(--jp-black);border-top-right-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius);cursor:pointer;padding:0}.jIwW4aBmv_cOzGjQ373o .pOY9wXeTZXdEQKZILl6e{background-color:var(--jp-black);margin-left:.5px}.jIwW4aBmv_cOzGjQ373o .AVZwaNLSRgcRMqKc48hG{background-color:var(--jp-white);border-left-width:0;margin-left:-0.5px}.jxSXQodfEP2fbsUkQ5Nq{position:absolute;top:calc(100% + var(--spacing-base));left:0;background:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);box-shadow:0px 1px 1px 0px rgba(0,0,0,.1),0px 1px 1.5px 0px rgba(0,0,0,.1),0px 2px 3px -0.5px rgba(0,0,0,.1);padding:var(--spacing-base)}.jxSXQodfEP2fbsUkQ5Nq .G8z7iIXBIpXbLLLqiWQ2{display:flex;align-items:center;gap:calc(var(--spacing-base)*7);background-color:var(--jp-white);border:none;padding:var(--spacing-base);cursor:pointer;width:100%}.jxSXQodfEP2fbsUkQ5Nq .G8z7iIXBIpXbLLLqiWQ2:hover{background-color:var(--jp-gray-0)}.jxSXQodfEP2fbsUkQ5Nq .RvsvdG3ColJuDiYGC6LX{display:flex;align-items:center;gap:calc(var(--spacing-base)*.5);font-size:var(--font-label)}.jxSXQodfEP2fbsUkQ5Nq .I_qLJR_hKAWISHruy58w{background-color:var(--jp-green-50);height:25px;width:25px}.KS2IrAZSwufI9zS1rt7c a,.KS2IrAZSwufI9zS1rt7c button{border-top-right-radius:0;border-bottom-right-radius:0}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:28px;display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:8px;height:8px;margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),l.locals={container:"GTxJkEnk1nQQsd85aJFX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",title:"HMaSD8wdv3EFkpx0cFj6",actionButton:"jIwW4aBmv_cOzGjQ373o",dropdownChevron:"A3cnOMmNvclCPkyFHSlo",primary:"pOY9wXeTZXdEQKZILl6e",secondary:"AVZwaNLSRgcRMqKc48hG",dropdown:"jxSXQodfEP2fbsUkQ5Nq",dropdownItem:"G8z7iIXBIpXbLLLqiWQ2",dropdownItemLabel:"RvsvdG3ColJuDiYGC6LX",activeActionCheckmark:"I_qLJR_hKAWISHruy58w",hasAdditionalActions:"KS2IrAZSwufI9zS1rt7c",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const C=l},"../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(O,p,r)=>{r.d(p,{Z:()=>C});var T=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=r.n(T),d=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),E={};E.insert="head",E.singleton=!1;var l=i()(d.Z,E);const C=d.Z.locals||{}}}]);})();
