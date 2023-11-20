"use strict";(()=>{var at=Object.defineProperty;var it=(O,E,r)=>E in O?at(O,E,{enumerable:!0,configurable:!0,writable:!0,value:r}):O[E]=r;var ke=(O,E,r)=>(it(O,typeof E!="symbol"?E+"":E,r),r);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1668],{"../connection/components/use-connection/index.jsx":(O,E,r)=>{r.d(E,{Z:()=>v});var m=r("../api/index.jsx"),i=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),u=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),g=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=r("../connection/state/store.jsx");const h=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},v=({registrationNonce:L=h.registrationNonce,apiRoot:P=h.apiRoot,apiNonce:U=h.apiNonce,redirectUri:_,autoTrigger:p,from:C,skipUserConnection:I}={})=>{const{registerSite:B,connectUser:H,refreshConnectedPlugins:k}=(0,i.Z)(l.t),Z=(0,u.Z)(T=>T(l.t).getRegistrationError()),{siteIsRegistering:j,userIsConnecting:N,userConnectionData:w,connectedPlugins:f,connectionErrors:G,isRegistered:x,isUserConnected:te,hasConnectedOwner:W,isOfflineMode:J}=(0,u.Z)(T=>({siteIsRegistering:T(l.t).getSiteIsRegistering(),userIsConnecting:T(l.t).getUserIsConnecting(),userConnectionData:T(l.t).getUserConnectionData(),connectedPlugins:T(l.t).getConnectedPlugins(),connectionErrors:T(l.t).getConnectionErrors(),isOfflineMode:T(l.t).getIsOfflineMode(),...T(l.t).getConnectionStatus()})),F=()=>{if(I){if(_)return window.location=_,Promise.resolve(_)}else return H({from:C,redirectUri:_});return Promise.resolve()},D=T=>(T&&T.preventDefault(),x?F():B({registrationNonce:L,redirectUri:_}).then(()=>F()));return(0,g.useEffect)(()=>{m.ZP.setApiRoot(P),m.ZP.setApiNonce(U)},[P,U]),(0,g.useEffect)(()=>{p&&!j&&!N&&D()},[]),{handleRegisterSite:D,handleConnectUser:F,refreshConnectedPlugins:k,isRegistered:x,isUserConnected:te,siteIsRegistering:j,userIsConnecting:N,registrationError:Z,userConnectionData:w,hasConnectedOwner:W,connectedPlugins:f,connectionErrors:G,isOfflineMode:J}}},"../connection/state/store.jsx":(O,E,r)=>{r.d(E,{t:()=>R});var m=r("../api/index.jsx");const i="SET_CONNECTION_STATUS",u="SET_CONNECTION_STATUS_IS_FETCHING",g="FETCH_CONNECTION_STATUS",l="SET_SITE_IS_REGISTERING",h="SET_USER_IS_CONNECTING",v="SET_REGISTRATION_ERROR",L="CLEAR_REGISTRATION_ERROR",P="REGISTER_SITE",U="SET_AUTHORIZATION_URL",_="CONNECT_USER",p="DISCONNECT_USER_SUCCESS",C="FETCH_AUTHORIZATION_URL",I="SET_CONNECTED_PLUGINS",B="REFRESH_CONNECTED_PLUGINS",H="SET_CONNECTION_ERRORS",k="SET_IS_OFFLINE_MODE",Z=n=>({type:i,connectionStatus:n}),j=n=>({type:u,isFetching:n}),N=()=>({type:g}),w=n=>({type:l,isRegistering:n}),f=n=>({type:h,isConnecting:n}),G=()=>({type:p}),x=n=>({type:v,registrationError:n}),te=()=>({type:L}),W=n=>({type:U,authorizationUrl:n}),J=n=>({type:C,redirectUri:n}),F=n=>({type:I,connectedPlugins:n}),D=n=>({type:H,connectionErrors:n}),T=n=>({type:k,isOfflineMode:n});function*$({from:n,redirectFunc:c,redirectUri:d}={}){yield f(!0),yield{type:_,from:n,redirectFunc:c,redirectUri:d}}function*se({registrationNonce:n,redirectUri:c}){yield te(),yield w(!0);try{const d=yield{type:P,registrationNonce:n,redirectUri:c};return yield Z({isRegistered:!0}),yield W(d.authorizeUrl),yield w(!1),Promise.resolve(d)}catch(d){return yield x(d),yield w(!1),Promise.reject(d)}}const X={setConnectionStatus:Z,setConnectionStatusIsFetching:j,fetchConnectionStatus:N,fetchAuthorizationUrl:J,setSiteIsRegistering:w,setUserIsConnecting:f,setRegistrationError:x,clearRegistrationError:te,setAuthorizationUrl:W,registerSite:se,connectUser:$,disconnectUserSuccess:G,setConnectedPlugins:F,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(c=>m.ZP.fetchConnectedPlugins().then(d=>{n(F(d)),c(d)})),setConnectionErrors:D,setIsOfflineMode:T};var de=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const R="jetpack-connection",ne=({registrationNonce:n,redirectUri:c})=>m.ZP.registerSite(n,c),oe=(0,de.R)(({resolveSelect:n})=>({from:c,redirectFunc:d,redirectUri:me}={})=>new Promise((je,we)=>{n(R).getAuthorizationUrl(me).then(he=>{const Fe=d||(De=>window.location.assign(De)),Ae=new URL(he);c&&Ae.searchParams.set("from",encodeURIComponent(c));const Pe=Ae.toString();Fe(Pe),je(Pe)}).catch(he=>{we(he)})})),A={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>m.ZP.fetchAuthorizationUrl(n),REGISTER_SITE:ne,CONNECT_USER:oe};var K=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const re=(n={},c)=>{switch(c.type){case i:return{...n,...c.connectionStatus};case p:return{...n,isUserConnected:!1}}return n},pe=(n={},c)=>{switch(c.type){case I:return c.connectedPlugins}return n},Ee=(n=!1,c)=>{switch(c.type){case u:return c.isFetching}return n},b=(n=!1,c)=>{switch(c.type){case l:return c.isRegistering}return n},V=(n=!1,c)=>{switch(c.type){case h:return c.isConnecting}return n},M=(n,c)=>{switch(c.type){case L:return!1;case v:return c.registrationError;default:return n}},Se=(n,c)=>{switch(c.type){case U:return c.authorizationUrl;default:return n}},Oe=(n,c)=>{switch(c.type){default:return n}},ge=(n={},c)=>{switch(c.type){case H:return c.connectionErrors}return n},Ne=(n=!1,c)=>{switch(c.type){case k:return c.isConnecting}return n},ce=(0,K.UY)({connectionStatus:re,connectionStatusIsFetching:Ee,siteIsRegistering:b,userIsConnecting:V,registrationError:M,authorizationUrl:Se,userConnectionData:Oe,connectedPlugins:pe,connectionErrors:ge,isOfflineMode:Ne});var ve=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ae=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const Q={...{getAuthorizationUrl:{isFulfilled:(n,...c)=>{const d=!!n.authorizationUrl,me=(0,ve.Y)(R).hasFinishedResolution("getAuthorizationUrl",c);return d&&!me&&(0,ae.W)(R).finishResolution("getAuthorizationUrl",c),d},*fulfill(n){const c=yield X.fetchAuthorizationUrl(n);yield X.setAuthorizationUrl(c.authorizeUrl)}}}},Me={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>{var c,d;return(d=(c=n==null?void 0:n.userConnectionData)==null?void 0:c.currentUser)==null?void 0:d.wpcomUser},getBlogId:n=>{var c,d;return(d=(c=n==null?void 0:n.userConnectionData)==null?void 0:c.currentUser)==null?void 0:d.blogId}}};var He=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const ie=class{static mayBeInit(c,d){ie.store===null&&(ie.store=(0,He.Z)(c,d),(0,K.z2)(ie.store))}};let Te=ie;ke(Te,"store",null);const Ze=Te,Ie=window.JP_CONNECTION_INITIAL_STATE;Ie||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ze.mayBeInit(R,{__experimentalUseThunks:!0,reducer:ce,actions:X,selectors:Me,resolvers:Q,controls:A,initialState:Ie||{}})},"../../packages/my-jetpack/_inc/components/product-card/action-button.jsx":(O,E,r)=>{r.d(E,{N:()=>I,Z:()=>H});var m=r("../components/components/button/index.tsx"),i=r("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),u=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),g=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),l=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),h=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),v=r("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),L=r.n(v),P=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),U=r("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),_=r("../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),p=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=i.__,I={ACTIVE:"active",INACTIVE:"inactive",ERROR:"error",ABSENT:"plugin_absent",ABSENT_WITH_PLAN:"plugin_absent_with_plan",NEEDS_PURCHASE:"needs_purchase",NEEDS_PURCHASE_OR_FREE:"needs_purchase_or_free",CAN_UPGRADE:"can_upgrade"},B=({status:k,admin:Z,name:j,slug:N,onActivate:w,additionalActions:f,onManage:G,onFixConnection:x,isFetching:te,isInstallingStandalone:W,isDeactivatingStandalone:J,className:F,onAdd:D,upgradeInInterstitial:T})=>{const[$,se]=(0,P.useState)(!1),[z,X]=(0,P.useState)({}),{detail:de}=(0,U.i)(N),{manageUrl:_e,purchaseUrl:R}=de,ne=!_e,oe=te||W||J,q=(f==null?void 0:f.length)>0,A=(0,P.useMemo)(()=>({variant:oe?void 0:"primary",disabled:oe,className:F}),[oe,F]),K=(0,P.useCallback)(()=>{switch(k){case I.ABSENT:case I.ABSENT_WITH_PLAN:{const b=k===I.ABSENT?(0,i.gB)(C("Get %s","jetpack-my-jetpack"),j):(0,i.gB)(C("Install %s","jetpack-my-jetpack"),j);return{...A,href:`#/add-${N}`,size:"small",variant:"link",weight:"regular",label:b,onClick:null}}case I.NEEDS_PURCHASE:return{...A,href:R||`#/add-${N}`,size:"small",variant:"primary",weight:"regular",label:C("Purchase","jetpack-my-jetpack"),onClick:D};case I.CAN_UPGRADE:{const b=C("Upgrade","jetpack-my-jetpack"),V=C("Purchase","jetpack-my-jetpack"),M=R||T?b:V;return{...A,href:R||`#/add-${N}`,size:"small",variant:"primary",weight:"regular",label:M,onClick:D}}case I.NEEDS_PURCHASE_OR_FREE:return{...A,href:`#/add-${N}`,size:"small",variant:"primary",weight:"regular",label:C("Start for free","jetpack-my-jetpack"),onClick:D};case I.ACTIVE:{const b=C("View","jetpack-my-jetpack"),V=C("Manage","jetpack-my-jetpack"),M=R?b:V;return{...A,disabled:ne||(A==null?void 0:A.disabled),href:_e,size:"small",variant:"secondary",weight:"regular",label:M,onClick:G}}case I.ERROR:return{...A,href:"#/connection",size:"small",variant:"primary",weight:"regular",label:C("Fix connection","jetpack-my-jetpack"),onClick:x};case I.INACTIVE:return{...A,href:"",size:"small",variant:"secondary",weight:"regular",label:C("Activate","jetpack-my-jetpack"),onClick:w};default:return null}},[A,ne,_e,j,w,D,x,G,R,N,k,T]),re=(0,P.useMemo)(()=>q?[...f,K()]:[K()],[f,K,q]),pe=(0,P.useCallback)(()=>{se(!$)},[$]);if((0,P.useEffect)(()=>{X(re[0])},[re]),!Z)return(0,p.jsx)(m.Z,{...A,size:"small",variant:"link",weight:"regular",children:(0,i.gB)(C("Learn about %s","jetpack-my-jetpack"),j)});const Ee=q&&(0,p.jsx)("div",{className:_.Z.dropdown,children:(0,p.jsx)("ul",{className:_.Z.dropdownMenu,children:[...f,K()].map(({label:b,isExternalLink:V},M)=>{const Se=()=>{X(re[M]),se(!1)};return(0,p.jsx)("li",{children:(0,p.jsxs)("button",{onClick:Se,className:_.Z.dropdownItem,children:[(0,p.jsxs)("div",{className:_.Z.dropdownItemLabel,children:[b,V&&(0,p.jsx)(u.Z,{icon:g.Z,size:16})]}),b===z.label&&(0,p.jsx)("div",{className:_.Z.activeActionCheckmark,children:(0,p.jsx)(u.Z,{icon:l.Z,size:24,fill:"white"})})]})},M)})})});return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:L()(_.Z.actionButton,q?_.Z.hasAdditionalActions:null),children:[(0,p.jsx)(m.Z,{...A,...z,children:z.label}),q&&(0,p.jsx)("button",{className:L()(_.Z.dropdownChevron,z.variant==="primary"?_.Z.primary:_.Z.secondary),onClick:pe,children:(0,p.jsx)(u.Z,{icon:h.Z,size:24,fill:z.variant==="primary"?"white":"black"})}),$&&Ee]})})};B.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const H=B},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(O,E,r)=>{r.d(E,{i:()=>g});var m=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),i=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),u=r("../../packages/my-jetpack/_inc/state/store.js");function g(l){const{activateProduct:h,deactivateProduct:v,installStandalonePluginForProduct:L,deactivateStandalonePluginForProduct:P}=(0,m.Z)(u.t),U=(0,i.Z)(_=>_(u.t).getProduct(l));return{activate:()=>h(l),deactivate:()=>v(l),deactivateStandalonePlugin:()=>P(l),installStandalonePlugin:()=>L(l),productsList:(0,i.Z)(_=>_(u.t).getProducts()),detail:U,isActive:U.status==="active",isFetching:(0,i.Z)(_=>_(u.t).isFetching(l)),stats:(0,i.Z)(_=>_(u.t).getProductStats(l))}}},"../../packages/my-jetpack/_inc/state/store.js":(O,E,r)=>{r.d(E,{t:()=>We,N:()=>rt});var m=r("../connection/state/store.jsx"),i=r("../../../node_modules/.pnpm/@wordpress+api-fetch@6.42.0/node_modules/@wordpress/api-fetch/build-module/index.js"),u=r("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js");const g="my-jetpack/v1",l="jetpack/v4/stats-app",h=`${g}/site/purchases`,v=`${g}/site/products`,L=`${g}/site/product-data`,P=`${g}/chat/availability`,U=`${g}/chat/authentication`,_=["scan"],p="videopress",C="videopress/v1/stats/featured",I=e=>`${l}/sites/${e}/stats/highlights`,B=u.__,H="SET_PURCHASES_IS_FETCHING",k="FETCH_PURCHASES",Z="SET_PURCHASES",j="SET_AVAILABLE_LICENSES_IS_FETCHING",N="FETCH_AVAILABLE_LICENSES",w="SET_AVAILABLE_LICENSES",f="SET_IS_FETCHING_PRODUCT",G="SET_PRODUCT",x="SET_PRODUCT_REQUEST_ERROR",te="ACTIVATE_PRODUCT",W="SET_PRODUCT_STATUS",J="SET_CHAT_AVAILABILITY_IS_FETCHING",F="SET_CHAT_AVAILABILITY",D="SET_CHAT_AUTHENTICATION_IS_FETCHING",T="SET_CHAT_AUTHENTICATION",$="SET_PRODUCT_DATA_IS_FETCHING",se="SET_PRODUCT_DATA",z="SET_STATS_COUNTS_IS_FETCHING",X="SET_STATS_COUNTS",de="SET_GLOBAL_NOTICE",_e="CLEAN_GLOBAL_NOTICE",R="SET_PRODUCT_STATS",ne="SET_IS_FETCHING_PRODUCT_STATS",oe=e=>({type:H,isFetching:e}),q=e=>({type:J,isFetching:e}),A=e=>({type:D,isFetching:e}),K=e=>({type:$,isFetching:e}),re=e=>({type:z,isFetching:e}),pe=()=>({type:k}),Ee=e=>({type:Z,purchases:e}),b=e=>({type:F,chatAvailability:e}),V=e=>({type:T,chatAuthentication:e}),M=e=>({type:j,isFetching:e}),Se=()=>({type:N}),Oe=e=>({type:w,availableLicenses:e}),ge=e=>({type:G,product:e}),Ne=e=>({type:se,productData:e}),xe=e=>({type:X,statsCounts:e}),ce=(e,t)=>({type:x,productId:e,error:t}),ve=(e,t)=>({type:W,productId:e,status:t}),ae=(e,t)=>({type:"SET_GLOBAL_NOTICE",message:e,options:t}),Be=()=>({type:"CLEAN_GLOBAL_NOTICE"});function Q(e,t){return{type:f,productId:e,isFetching:t}}function Ue(e,t,{select:o,dispatch:s,registry:a}){return new Promise((Y,ee)=>{if(!o.isValidProduct(e)){const y=B("Invalid product name","jetpack-my-jetpack"),ue=new Error(y);s(ce(e,ue)),s(ae(y,{status:"error",isDismissible:!0})),ee(ue);return}const S=t.activate?"POST":"DELETE";return s(Q(e,!0)),(0,i.Z)({path:`${v}/${e}`,method:S}).then(y=>{s(Q(e,!1)),s(ge(y)),a.dispatch(m.t).refreshConnectedPlugins(),Y(y==null?void 0:y.status)}).catch(y=>{const{name:ue}=o.getProduct(e),ct=(0,u.gB)(B("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),ue);s(Q(e,!1)),s(ce(e,y)),s(ae(ct,{status:"error",isDismissible:!0})),ee(y)})})}const Ie={setPurchasesIsFetching:oe,setChatAvailabilityIsFetching:q,setChatAuthenticationIsFetching:A,fetchPurchases:pe,setPurchases:Ee,setChatAvailability:b,setChatAuthentication:V,setProductDataIsFetching:K,setProductData:Ne,setAvailableLicensesIsFetching:M,fetchAvailableLicenses:Se,setAvailableLicenses:Oe,setProductStats:(e,t)=>({type:R,productId:e,stats:t}),setIsFetchingProductStats:(e,t)=>({type:ne,productId:e,isFetching:t}),setStatsCounts:xe,setStatsCountsIsFetching:re,...{setGlobalNotice:ae,cleanGlobalNotice:Be},...{setProduct:ge,activateProduct:e=>async t=>await Ue(e,{activate:!0},t),deactivateStandalonePluginForProduct:e=>async t=>await Ue(e,{activate:!1},t),installStandalonePluginForProduct:e=>async t=>{const{select:o,dispatch:s,registry:a}=t;return await new Promise((Y,ee)=>{if(!o.isValidProduct(e)){const S=B("Invalid product name","jetpack-my-jetpack"),y=new Error(S);s(ce(e,y)),s(ae(S,{status:"error",isDismissible:!0})),ee(y);return}return s(Q(e,!0)),(0,i.Z)({path:`${v}/${e}/install-standalone`,method:"POST"}).then(S=>{s(Q(e,!1)),s(ge(S)),a.dispatch(m.t).refreshConnectedPlugins(),Y(S==null?void 0:S.standalone_plugin_info)}).catch(S=>{const{name:y}=o.getProduct(e),ue=(0,u.gB)(B("Failed to install standalone plugin for %1$s: %2$s. Please try again","jetpack-my-jetpack"),y,S.message);s(Q(e,!1)),s(ce(e,S)),s(ae(ue,{status:"error",isDismissible:!0})),ee(S)})})},setIsFetchingProduct:Q,setRequestProductError:ce,setProductStatus:ve}};function ie(){return new Promise((e,t)=>{(0,i.Z)({path:h}).then(e).catch(t)})}const n={[k]:ie};var c=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const d=(e={},t)=>{switch(t.type){case f:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s},errors:{...e.errors,[o]:s?void 0:e.errors[o]}}}case W:{const{productId:o,status:s}=t;return{...e,items:{...e.items,[o]:{...e.items[o],status:s}}}}case G:{const{product:o}=t,{slug:s}=o;return{...e,items:{...e.items,[s]:o}}}case x:{const{productId:o,error:s}=t;return{...e,errors:{...e.errors,[o]:s}}}default:return e}},me=(e={},t)=>{switch(t.type){case $:return{...e,isFetching:t.isFetching};case se:return{...e,items:(t==null?void 0:t.productData)||{}};default:return e}},je=(e={},t)=>{switch(t.type){case H:return{...e,isFetching:t.isFetching};case Z:return{...e,items:(t==null?void 0:t.purchases)||[]};default:return e}},we=(e={isFetching:!1,isAvailable:!1},t)=>{var o;switch(t.type){case J:return{...e,isFetching:t.isFetching};case F:return{...e,isAvailable:(o=t==null?void 0:t.chatAvailability)==null?void 0:o.is_available};default:return e}},he=(e={isFetching:!1,jwt:!1},t)=>{var o,s;switch(t.type){case D:return{...e,isFetching:t.isFetching};case T:return{...e,jwt:(s=(o=t==null?void 0:t.chatAuthentication)==null?void 0:o.user)==null?void 0:s.jwt};default:return e}},Fe=(e={},t)=>{switch(t.type){case j:return{...e,isFetching:t.isFetching};case w:return{...e,items:(t==null?void 0:t.availableLicenses)||[]};default:return e}},Ae=(e={global:{}},t)=>{switch(t.type){case de:{const{message:o,options:s}=t;return{...e,global:{message:o,options:s}}}case _e:return{...e,global:{}};default:return e}},Pe=(e={})=>e,De=(e={},t)=>{switch(t.type){case ne:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s}}}case R:{const{productId:o,stats:s}=t;return{...e,items:{...e.items,[o]:s}}}default:return e}},Ve=(e={},t)=>{switch(t.type){case z:return{...e,isFetching:t.isFetching};case X:return{...e,data:(t==null?void 0:t.statsCounts)||{}};default:return e}},Qe=(0,c.UY)({products:d,productData:me,purchases:je,chatAvailability:we,chatAuthentication:he,availableLicenses:Fe,notices:Ae,plugins:Pe,stats:De,statsCounts:Ve});var be=r("../api/index.jsx"),Le=r("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx");const Ye=async()=>(0,i.Z)({path:C}),Je=async e=>e===p?Ye():null,$e=u.__,qe={...{getProduct:{isFulfilled:(e,t)=>{var s;return(((s=e==null?void 0:e.products)==null?void 0:s.items)||{}).hasOwnProperty(t)&&!_.includes(t)},fulfill:e=>async({dispatch:t})=>{try{t.setIsFetchingProduct(e,!0);const o=await(0,i.Z)({path:`${v}/${e}`});return t.setProduct(o),t.setIsFetchingProduct(e,!1),Promise.resolve()}catch(o){if(t.setIsFetchingProduct(e,!1),o!=null&&o.code&&(o!=null&&o.message))return t.setRequestProductError(e,o),Promise.reject(o);throw new Error(o)}}},getPurchases:()=>async({dispatch:e})=>{e.setPurchasesIsFetching(!0);try{e.setPurchases(await(0,i.Z)({path:h})),e.setPurchasesIsFetching(!1)}catch(t){e.setPurchasesIsFetching(!1),t.code!=="not_connected"&&e.setGlobalNotice($e("There was an error fetching your purchases information. Check your site connectivity and try again.","jetpack-my-jetpack"),{status:"error"})}},getChatAvailability:()=>async({dispatch:e})=>{e.setChatAvailabilityIsFetching(!0);try{e.setChatAvailability(await(0,i.Z)({path:P})),e.setChatAvailabilityIsFetching(!1)}catch(t){e.setChatAvailabilityIsFetching(!1)}},getChatAuthentication:()=>async({dispatch:e})=>{e.setChatAuthenticationIsFetching(!0);try{e.setChatAuthentication(await(0,i.Z)({path:U})),e.setChatAuthenticationIsFetching(!1)}catch(t){e.setChatAuthenticationIsFetching(!1)}},getAvailableLicenses:()=>async({dispatch:e})=>{e.setAvailableLicensesIsFetching(!0);try{const{apiRoot:t,apiNonce:o}=(window==null?void 0:window.myJetpackRest)||{};be.ZP.setApiRoot(t),be.ZP.setApiNonce(o);const s=await be.ZP.getUserLicenses();s&&s.items?e.setAvailableLicenses(s.items.filter(({attached_at:a,revoked_at:Y})=>a===null&&Y===null)):e.setAvailableLicenses([])}catch(t){e.setAvailableLicenses([])}finally{e.setAvailableLicensesIsFetching(!1)}},getProductData:()=>async({dispatch:e})=>{e.setProductDataIsFetching(!0);try{e.setProductData(await(0,i.Z)({path:L})),e.setProductDataIsFetching(!1)}catch(t){e.setProductDataIsFetching(!1)}},getStatsCounts:()=>async e=>{const{dispatch:t,registry:o}=e;t.setStatsCountsIsFetching(!0);const s=o.select(m.t).getBlogId();try{t.setStatsCounts(await(0,i.Z)({path:I(s)})),t.setStatsCountsIsFetching(!1)}catch(a){t.setStatsCountsIsFetching(!1)}}},getProductStats:{isFulfilled:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.items)==null?void 0:s.hasOwnProperty(t))||!1},fulfill:e=>async({dispatch:t,select:o})=>{const{status:s}=o.getProduct(e);if(s!==Le.N.ACTIVE)return t.setProductStats(e,null),Promise.resolve();try{t.setIsFetchingProductStats(e,!0);const a=await Je(e);return t.setProductStats(e,a),t.setIsFetchingProductStats(e,!1),Promise.resolve()}catch(a){if(t.setProductStats(e,null),t.setIsFetchingProductStats(e,!1),a!=null&&a.code&&(a!=null&&a.message))return Promise.reject(a);throw new Error(a)}}}};function et(e){return e.replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("_",""))}function tt(e){return e.indexOf("_")!==-1}function le(e={},t=!1){const o=Object.assign({},e);for(const s in o)o.hasOwnProperty(s)&&tt(s)&&(o[et(s)]=o[s],t&&delete o[s]);return o}const ye=e=>{var t;return((t=e.products)==null?void 0:t.items)||{}},Ge=e=>Object.keys(ye(e)),st={...{getProducts:ye,getProductNames:Ge,getProduct:(e,t)=>{var a,Y;const o=((a=ye(e))==null?void 0:a[t])||{},s=le(o,!0);return s.standalonePluginInfo=le(s.standalonePluginInfo||{},!0),s.pricingForUi=le(s.pricingForUi||{},!0),s.pricingForUi.introductoryOffer=s.pricingForUi.isIntroductoryOffer?le(s.pricingForUi.introductoryOffer,!0):null,(Y=s.pricingForUi)!=null&&Y.tiers&&(s.pricingForUi.tiers=le(s.pricingForUi.tiers,!0),s.pricingForUi.tiers=Object.keys(s.pricingForUi.tiers).reduce((ee,Re)=>{const S=le(s.pricingForUi.tiers[Re],!0)||{};return ee[Re]={...S,introductoryOffer:S!=null&&S.isIntroductoryOffer?le(S==null?void 0:S.introductoryOffer,!0):null},ee},{})),s.features=s.features||[],s.supportedProducts=s.supportedProducts||[],s.pricingForUi.fullPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.fullPrice/12*100)/100:s.pricingForUi.fullPrice,s.pricingForUi.discountPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.discountPrice/12*100)/100:s.pricingForUi.discountPrice,s},isValidProduct:(e,t)=>Ge(e).includes(t),isFetching:(e,t)=>{var o,s;return((s=(o=e.products)==null?void 0:o.isFetching)==null?void 0:s[t])||!1},getProductsThatRequiresUserConnection:e=>{const t=ye(e);return Object.keys(t).reduce((o,s)=>{const a=t[s];return(a==null?void 0:a.requires_user_connection)&&((a==null?void 0:a.status)===Le.N.ACTIVE||(a==null?void 0:a.status)===Le.N.ERROR)&&o.push(a==null?void 0:a.name),o},[])}},...{getPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.items)||[]},isRequestingPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.isFetching)||!1}},...{getChatAvailability:e=>e.chatAvailability.isAvailable,isRequestingChatAvailability:e=>e.chatAvailability.isFetching},...{getChatAuthentication:e=>e.chatAuthentication.jwt,isRequestingChatAuthentication:e=>e.chatAuthentication.isFetching},...{getProductData:e=>{var t;return((t=e.productData)==null?void 0:t.items)||{}},isFetchingProductData:e=>{var t;return((t=e.productData)==null?void 0:t.isFetching)||!1}},...{getAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.items)||[]},isFetchingAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.isFetching)||!1}},...{getGlobalNotice:e=>{var t;return(t=e.notices)==null?void 0:t.global}},...{hasStandalonePluginInstalled:e=>Object.values(e.plugins).filter(t=>["jetpack-backup","jetpack-boost","jetpack-protect","jetpack-search","jetpack-social","jetpack-videopress"].indexOf(t.TextDomain)>=0).length>0},...{getProductStats:(e,t)=>{var o,s;return(s=(o=e.stats)==null?void 0:o.items)==null?void 0:s[t]},isFetchingProductStats:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.isFetching)==null?void 0:s[t])||!1}},...{getStatsCounts:e=>{var t;return(t=e.statsCounts)==null?void 0:t.data},isFetchingStatsCounts:e=>{var t;return((t=e.statsCounts)==null?void 0:t.isFetching)||!1}}};var nt=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const Ce=class{static mayBeInit(t,o){Ce.store===null&&(Ce.store=(0,nt.Z)(t,o),(0,c.z2)(Ce.store))}};let fe=Ce;ke(fe,"store",null);const ot=fe,We="my-jetpack";function rt(){ot.mayBeInit(We,{__experimentalUseThunks:!0,reducer:Qe,actions:Ie,selectors:st,resolvers:qe,controls:n,initialState:window.myJetpackInitialState||{}})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(O,E,r)=>{r.d(E,{Z:()=>h});var m=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=r.n(m),u=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=r.n(u),l=g()(i());l.push([O.id,'.GTxJkEnk1nQQsd85aJFX{min-height:200px}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*3);min-height:28px;flex-wrap:wrap}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*.5)}.HMaSD8wdv3EFkpx0cFj6 h3{font-weight:700;line-height:28px}.jIwW4aBmv_cOzGjQ373o{position:relative;display:flex}.jIwW4aBmv_cOzGjQ373o .A3cnOMmNvclCPkyFHSlo{display:flex;align-items:center;justify-content:center;border:.5px solid var(--jp-black);box-shadow:inset 0 0 0 1px var(--jp-black);border-top-right-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius);cursor:pointer;padding:0}.jIwW4aBmv_cOzGjQ373o .pOY9wXeTZXdEQKZILl6e{background-color:var(--jp-black);margin-left:.5px}.jIwW4aBmv_cOzGjQ373o .AVZwaNLSRgcRMqKc48hG{background-color:var(--jp-white);border-left-width:0;margin-left:-0.5px}.jxSXQodfEP2fbsUkQ5Nq{position:absolute;top:calc(100% + var(--spacing-base));left:0;background:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);box-shadow:0px 1px 1px 0px rgba(0,0,0,.1),0px 1px 1.5px 0px rgba(0,0,0,.1),0px 2px 3px -0.5px rgba(0,0,0,.1);padding:var(--spacing-base)}.jxSXQodfEP2fbsUkQ5Nq .G8z7iIXBIpXbLLLqiWQ2{display:flex;align-items:center;gap:calc(var(--spacing-base)*7);background-color:var(--jp-white);border:none;padding:var(--spacing-base);cursor:pointer;width:100%}.jxSXQodfEP2fbsUkQ5Nq .G8z7iIXBIpXbLLLqiWQ2:hover{background-color:var(--jp-gray-0)}.jxSXQodfEP2fbsUkQ5Nq .RvsvdG3ColJuDiYGC6LX{display:flex;align-items:center;gap:calc(var(--spacing-base)*.5);font-size:var(--font-label)}.jxSXQodfEP2fbsUkQ5Nq .I_qLJR_hKAWISHruy58w{background-color:var(--jp-green-50);height:25px;width:25px}.KS2IrAZSwufI9zS1rt7c a,.KS2IrAZSwufI9zS1rt7c button{border-top-right-radius:0;border-bottom-right-radius:0}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:28px;display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:8px;height:8px;margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),l.locals={container:"GTxJkEnk1nQQsd85aJFX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",title:"HMaSD8wdv3EFkpx0cFj6",actionButton:"jIwW4aBmv_cOzGjQ373o",dropdownChevron:"A3cnOMmNvclCPkyFHSlo",primary:"pOY9wXeTZXdEQKZILl6e",secondary:"AVZwaNLSRgcRMqKc48hG",dropdown:"jxSXQodfEP2fbsUkQ5Nq",dropdownItem:"G8z7iIXBIpXbLLLqiWQ2",dropdownItemLabel:"RvsvdG3ColJuDiYGC6LX",activeActionCheckmark:"I_qLJR_hKAWISHruy58w",hasAdditionalActions:"KS2IrAZSwufI9zS1rt7c",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const h=l},"../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(O,E,r)=>{r.d(E,{Z:()=>h});var m=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=r.n(m),u=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),g={};g.insert="head",g.singleton=!1;var l=i()(u.Z,g);const h=u.Z.locals||{}}}]);})();
