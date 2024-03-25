"use strict";(()=>{var Oe=Object.defineProperty;var Re=(x,f,t)=>f in x?Oe(x,f,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[f]=t;var te=(x,f,t)=>(Re(x,typeof f!="symbol"?f+"":f,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(x,f,t)=>{var l,u,o;t.r(f),t.d(f,{Default:()=>v,__namedExportsOrder:()=>c,default:()=>R});var r=t("../components/components/pricing-table/index.tsx"),a=t("../components/components/product-price/index.tsx"),g=t("../components/components/button/index.tsx"),E=t("../connection/components/use-connection/index.jsx"),d=t("../connection/hooks/use-product-checkout-workflow/index.jsx"),w=t("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),y=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=t("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=w.__,O=({onRedirecting:n})=>{const{siteSuffix:p,adminUri:m,registrationNonce:N}=window.jetpackVideoPressInitialState,{siteProduct:S,productPrice:A}=(0,k.g)(),{yearly:h}=A,{handleRegisterSite:M,userIsConnecting:j}=(0,E.Z)({redirectUri:m,from:"jetpack-videopress",registrationNonce:N}),[F,T]=(0,y.useState)(!1),{run:B,hasCheckoutStarted:D}=(0,d.Z)({siteSuffix:p,productSlug:h==null?void 0:h.slug,redirectUrl:m}),G=S.features.map(b=>({name:b}));return(0,i.jsxs)(r.ZP,{title:S.description,items:G,children:[(0,i.jsxs)(r.oK,{primary:!0,children:[(0,i.jsxs)(r.NE,{children:[(0,i.jsx)(a.Z,{offPrice:h!=null&&h.discount?h.salePriceByMonth:null,price:h.priceByMonth,promoLabel:h!=null&&h.discount?(0,w.gB)(_("%1$s%% off","jetpack-videopress-pkg"),h.discount):null,legend:_("/month, billed yearly","jetpack-videopress-pkg"),currency:h.currency}),(0,i.jsx)(g.Z,{onClick:()=>{n==null||n(),B()},isLoading:D,fullWidth:!0,disabled:F||D||j,children:_("Get VideoPress","jetpack-videopress-pkg")})]}),(0,i.jsx)(r.kF,{isIncluded:!0}),(0,i.jsx)(r.kF,{isIncluded:!0}),(0,i.jsx)(r.kF,{isIncluded:!0}),(0,i.jsx)(r.kF,{isIncluded:!0})]}),(0,i.jsxs)(r.oK,{children:[(0,i.jsxs)(r.NE,{children:[(0,i.jsx)(a.Z,{price:0,legend:"",currency:h.currency,hidePriceFraction:!0}),(0,i.jsx)(g.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{T(!0),M(),n==null||n()},isLoading:j||F,disabled:j||F||D,children:_("Start for free","jetpack-videopress-pkg")})]}),(0,i.jsx)(r.kF,{isIncluded:!1,label:(0,i.jsx)("strong",{children:_("Upload one video","jetpack-videopress-pkg")})}),(0,i.jsx)(r.kF,{isIncluded:!0}),(0,i.jsx)(r.kF,{isIncluded:!1}),(0,i.jsx)(r.kF,{isIncluded:!1})]})]})};try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(n){}window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const R={title:"Packages/VideoPress/PricingSection",component:O},v=(n=>(0,i.jsx)(O,{...n})).bind({});v.parameters={...v.parameters,docs:{...(l=v.parameters)==null?void 0:l.docs,source:{originalSource:"args => <PricingSection {...args} />",...(o=(u=v.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const c=["Default"]},"../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(x,f,t)=>{t.d(f,{Z:()=>v});var r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let a,g,E,d;const w=/<(\/)?(\w+)\s*(\/)?>/g;function y(c,l,u,o,n){return{element:c,tokenStart:l,tokenLength:u,prevOffset:o,leadingTextStart:n,children:[]}}const k=(c,l)=>{if(a=c,g=0,E=[],d=[],w.lastIndex=0,!i(l))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(_(l));return(0,r.createElement)(r.Fragment,null,...E)},i=c=>{const l=typeof c=="object",u=l&&Object.values(c);return l&&u.length&&u.every(o=>(0,r.isValidElement)(o))};function _(c){const l=I(),[u,o,n,p]=l,m=d.length,N=n>g?g:null;if(!c[o])return O(),!1;switch(u){case"no-more-tokens":if(m!==0){const{leadingTextStart:M,tokenStart:j}=d.pop();E.push(a.substr(M,j))}return O(),!1;case"self-closed":return m===0?(N!==null&&E.push(a.substr(N,n-N)),E.push(c[o]),g=n+p,!0):(R(y(c[o],n,p)),g=n+p,!0);case"opener":return d.push(y(c[o],n,p,n+p,N)),g=n+p,!0;case"closer":if(m===1)return P(n),g=n+p,!0;const S=d.pop(),A=a.substr(S.prevOffset,n-S.prevOffset);S.children.push(A),S.prevOffset=n+p;const h=y(S.element,S.tokenStart,S.tokenLength,n+p);return h.children=S.children,R(h),g=n+p,!0;default:return O(),!1}}function I(){const c=w.exec(a);if(c===null)return["no-more-tokens"];const l=c.index,[u,o,n,p]=c,m=u.length;return p?["self-closed",n,l,m]:o?["closer",n,l,m]:["opener",n,l,m]}function O(){const c=a.length-g;c!==0&&E.push(a.substr(g,c))}function R(c){const{element:l,tokenStart:u,tokenLength:o,prevOffset:n,children:p}=c,m=d[d.length-1],N=a.substr(m.prevOffset,u-m.prevOffset);N&&m.children.push(N),m.children.push((0,r.cloneElement)(l,null,...p)),m.prevOffset=n||u+o}function P(c){const{element:l,leadingTextStart:u,prevOffset:o,tokenStart:n,children:p}=d.pop(),m=c?a.substr(o,c-o):a.substr(o);m&&p.push(m),u!==null&&E.push(a.substr(u,n-u)),E.push((0,r.cloneElement)(l,null,...p))}const v=k},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(x,f,t)=>{t.d(f,{Z:()=>E});var r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const E=(0,r.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(a.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(x,f,t)=>{t.d(f,{Z:()=>E});var r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const E=(0,r.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(a.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../connection/components/use-connection/index.jsx":(x,f,t)=>{t.d(f,{Z:()=>y});var r=t("../api/index.jsx"),a=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),g=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),E=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("../connection/state/store.jsx");const w=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},y=({registrationNonce:k=w.registrationNonce,apiRoot:i=w.apiRoot,apiNonce:_=w.apiNonce,redirectUri:I,autoTrigger:O,from:R,skipUserConnection:P}={})=>{const{registerSite:v,connectUser:c,refreshConnectedPlugins:l}=(0,a.Z)(d.t),u=(0,g.Z)(T=>T(d.t).getRegistrationError()),{siteIsRegistering:o,userIsConnecting:n,userConnectionData:p,connectedPlugins:m,connectionErrors:N,isRegistered:S,isUserConnected:A,hasConnectedOwner:h,isOfflineMode:M}=(0,g.Z)(T=>({siteIsRegistering:T(d.t).getSiteIsRegistering(),userIsConnecting:T(d.t).getUserIsConnecting(),userConnectionData:T(d.t).getUserConnectionData(),connectedPlugins:T(d.t).getConnectedPlugins(),connectionErrors:T(d.t).getConnectionErrors(),isOfflineMode:T(d.t).getIsOfflineMode(),...T(d.t).getConnectionStatus()})),j=()=>{if(P){if(I)return window.location=I,Promise.resolve(I)}else return c({from:R,redirectUri:I});return Promise.resolve()},F=T=>(T&&T.preventDefault(),S?j():v({registrationNonce:k,redirectUri:I}).then(()=>j()));return(0,E.useEffect)(()=>{r.ZP.setApiRoot(i),r.ZP.setApiNonce(_)},[i,_]),(0,E.useEffect)(()=>{O&&!o&&!n&&F()},[]),{handleRegisterSite:F,handleConnectUser:j,refreshConnectedPlugins:l,isRegistered:S,isUserConnected:A,siteIsRegistering:o,userIsConnecting:n,registrationError:u,userConnectionData:p,hasConnectedOwner:h,connectedPlugins:m,connectionErrors:N,isOfflineMode:M}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(x,f,t)=>{var l;t.d(f,{Z:()=>c});var r=t("../api/index.jsx");function a(){var o;switch(typeof window!="undefined"&&((o=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:o.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var g=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),E=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),d=t("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),w=t.n(d),y=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=t("../connection/components/use-connection/index.jsx"),i=t("../connection/state/store.jsx");const _=w()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:I,apiRoot:O,apiNonce:R,siteSuffix:P}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},v=typeof window!="undefined"?(l=window==null?void 0:window.myJetpackInitialState)==null?void 0:l.adminUrl:null;function c({productSlug:u,redirectUrl:o,siteSuffix:n=P,adminUrl:p=v,connectAfterCheckout:m=!1,siteProductAvailabilityHandler:N=null,quantity:S=null,from:A,useBlogIdSuffix:h=!1}={}){_("productSlug is %s",u),_("redirectUrl is %s",o),_("siteSuffix is %s",n),_("from is %s",A);const[M,j]=(0,y.useState)(!1),{registerSite:F}=(0,g.Z)(i.t),T=(0,E.Z)(U=>U(i.t).getBlogId(),[i.t]);_("blogID is %s",T!=null?T:"undefined"),h=h&&!!T;const{isUserConnected:B,isRegistered:D,handleConnectUser:G}=(0,k.Z)({redirectUri:o,from:A}),b=(0,y.useMemo)(()=>{const U=a(),Z=(!D||!B)&&m,Y=Z?"checkout/jetpack/":`checkout/${h?T.toString():n}/`,V=S!=null?`:-q-${S}`:"",L=new URL(`${U}${Y}${u}${V}`);return Z?(L.searchParams.set("connect_after_checkout",!0),L.searchParams.set("admin_url",p),L.searchParams.set("from_site_slug",n)):L.searchParams.set("site",n),L.searchParams.set("source",A),L.searchParams.set("redirect_to",o),B||L.searchParams.set("unlinked","1"),L},[D,B,m,n,S,u,A,o,p,h,T]);_("isRegistered is %s",D),_("isUserConnected is %s",B),_("connectAfterCheckout is %s",m),_("checkoutUrl is %s",b);const K=(U=null)=>Promise.resolve(N&&N()).then(Z=>{if(U&&b.searchParams.set("redirect_to",U),Z)return _("handleAfterRegistration: Site has a product associated"),G();_("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",b),window.location.href=b}),X=(U=null)=>{U&&b.searchParams.set("redirect_to",U),_("Redirecting to connectAfterCheckout flow: %s",b),window.location.href=b},z=(U,Z=null)=>{if(U&&U.preventDefault(),j(!0),m)return X(Z);if(D)return K(Z);F({registrationNonce:I,redirectUri:o}).then(()=>K(Z))};return(0,y.useEffect)(()=>{r.ZP.setApiRoot(O),r.ZP.setApiNonce(R)},[]),{run:z,isRegistered:D,hasCheckoutStarted:M}}},"../connection/state/store.jsx":(x,f,t)=>{t.d(f,{t:()=>z});var r=t("../api/index.jsx");const a="SET_CONNECTION_STATUS",g="SET_CONNECTION_STATUS_IS_FETCHING",E="FETCH_CONNECTION_STATUS",d="SET_SITE_IS_REGISTERING",w="SET_USER_IS_CONNECTING",y="SET_REGISTRATION_ERROR",k="CLEAR_REGISTRATION_ERROR",i="REGISTER_SITE",_="SET_AUTHORIZATION_URL",I="CONNECT_USER",O="DISCONNECT_USER_SUCCESS",R="FETCH_AUTHORIZATION_URL",P="SET_CONNECTED_PLUGINS",v="REFRESH_CONNECTED_PLUGINS",c="SET_CONNECTION_ERRORS",l="SET_IS_OFFLINE_MODE",u=e=>({type:a,connectionStatus:e}),o=e=>({type:g,isFetching:e}),n=()=>({type:E}),p=e=>({type:d,isRegistering:e}),m=e=>({type:w,isConnecting:e}),N=()=>({type:O}),S=e=>({type:y,registrationError:e}),A=()=>({type:k}),h=e=>({type:_,authorizationUrl:e}),M=e=>({type:R,redirectUri:e}),j=e=>({type:P,connectedPlugins:e}),F=e=>({type:c,connectionErrors:e}),T=e=>({type:l,isOfflineMode:e});function*B({from:e,redirectFunc:s,redirectUri:C}={}){yield m(!0),yield{type:I,from:e,redirectFunc:s,redirectUri:C}}function*D({registrationNonce:e,redirectUri:s}){yield A(),yield p(!0);try{const C=yield{type:i,registrationNonce:e,redirectUri:s};return yield u({isRegistered:!0}),yield h(C.authorizeUrl),yield p(!1),Promise.resolve(C)}catch(C){return yield S(C),yield p(!1),Promise.reject(C)}}const b={setConnectionStatus:u,setConnectionStatusIsFetching:o,fetchConnectionStatus:n,fetchAuthorizationUrl:M,setSiteIsRegistering:p,setUserIsConnecting:m,setRegistrationError:S,clearRegistrationError:A,setAuthorizationUrl:h,registerSite:D,connectUser:B,disconnectUserSuccess:N,setConnectedPlugins:j,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(s=>r.ZP.fetchConnectedPlugins().then(C=>{e(j(C)),s(C)})),setConnectionErrors:F,setIsOfflineMode:T};var K=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const z="jetpack-connection",U=({registrationNonce:e,redirectUri:s})=>r.ZP.registerSite(e,s),Z=(0,K.R)(({resolveSelect:e})=>({from:s,redirectFunc:C,redirectUri:J}={})=>new Promise((Te,Ce)=>{e(z).getAuthorizationUrl(J).then($=>{const Se=C||(Ie=>window.location.assign(Ie)),q=new URL($);s&&q.searchParams.set("from",encodeURIComponent(s));const ee=q.toString();Se(ee),Te(ee)}).catch($=>{Ce($)})})),V={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>r.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:U,CONNECT_USER:Z};var L=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const se=(e={},s)=>{switch(s.type){case a:return{...e,...s.connectionStatus};case O:return{...e,isUserConnected:!1}}return e},ne=(e={},s)=>{switch(s.type){case P:return s.connectedPlugins}return e},oe=(e=!1,s)=>{switch(s.type){case g:return s.isFetching}return e},re=(e=!1,s)=>{switch(s.type){case d:return s.isRegistering}return e},ce=(e=!1,s)=>{switch(s.type){case w:return s.isConnecting}return e},ie=(e,s)=>{switch(s.type){case k:return!1;case y:return s.registrationError;default:return e}},de=(e,s)=>{switch(s.type){case _:return s.authorizationUrl;default:return e}},ae=(e,s)=>{switch(s.type){default:return e}},le=(e={},s)=>{switch(s.type){case c:return s.connectionErrors}return e},ue=(e=!1,s)=>{switch(s.type){case l:return s.isConnecting}return e},pe=(0,L.UY)({connectionStatus:se,connectionStatusIsFetching:oe,siteIsRegistering:re,userIsConnecting:ce,registrationError:ie,authorizationUrl:de,userConnectionData:ae,connectedPlugins:ne,connectionErrors:le,isOfflineMode:ue});var me=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const he={...{getAuthorizationUrl:{isFulfilled:(e,...s)=>{const C=!!e.authorizationUrl,J=(0,me.Y)(z).hasFinishedResolution("getAuthorizationUrl",s);return C&&!J&&(0,_e.W)(z).finishResolution("getAuthorizationUrl",s),C},*fulfill(e){const s=yield b.fetchAuthorizationUrl(e);yield b.setAuthorizationUrl(s.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var s,C;return(C=(s=e==null?void 0:e.userConnectionData)==null?void 0:s.currentUser)==null?void 0:C.wpcomUser},getBlogId:e=>{var s,C;return(C=(s=e==null?void 0:e.userConnectionData)==null?void 0:s.currentUser)==null?void 0:C.blogId}}};var fe=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const W=class{static mayBeInit(s,C){W.store===null&&(W.store=(0,fe.Z)(s,C),(0,L.z2)(W.store))}};let H=W;te(H,"store",null);const Ee=H,Q=window.JP_CONNECTION_INITIAL_STATE;Q||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ee.mayBeInit(z,{__experimentalUseThunks:!0,reducer:pe,actions:b,selectors:ge,resolvers:he,controls:V,initialState:Q||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(x,f,t)=>{t.d(f,{g:()=>_});var r=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=t("../../packages/videopress/src/client/state/index.js");function g(I){return I.replace(/([-_][a-z])/gi,O=>O.toUpperCase().replace("_",""))}function E(I){return I.indexOf("_")!==-1}function d(I,O=!1){const R=Object.assign({},I);for(const P in R)R.hasOwnProperty(P)&&E(P)&&(R[g(P)]=R[P],O&&delete R[P]);return R}const{paidFeatures:w={},siteProductData:y={},productData:k={},productPrice:i={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},_=()=>{const I=d(y.pricing_for_ui,!0),O=d(k.introductory_offer,!0),R={...d(k,!0),introductoryOffer:O},{purchases:P,isFetchingPurchases:v}=(0,r.Z)(o=>({purchases:o(a.tT).getPurchases(),isFetchingPurchases:o(a.tT).isFetchingPurchases()}),[]),c=P.map(o=>d(o,!0));function l(o){return c.some(n=>n.productSlug===o)}const u=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(o=>l(o));return{features:w,siteProduct:{...d({...y},!0),pricingForUi:I},product:R,productPrice:i,purchases:c,hasVideoPressPurchase:u,isFetchingPurchases:v}}}}]);})();
