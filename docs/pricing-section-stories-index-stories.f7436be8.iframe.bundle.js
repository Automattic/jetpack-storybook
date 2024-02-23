"use strict";(()=>{var ye=Object.defineProperty;var Pe=(k,m,n)=>m in k?ye(k,m,{enumerable:!0,configurable:!0,writable:!0,value:n}):k[m]=n;var te=(k,m,n)=>(Pe(k,typeof m!="symbol"?m+"":m,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(k,m,n)=>{var i,S,R;n.r(m),n.d(m,{Default:()=>h,__namedExportsOrder:()=>T,default:()=>F});var r=n("../components/components/pricing-table/index.tsx"),y=n("../components/components/product-price/index.tsx"),P=n("../components/components/button/index.tsx"),x=n("../connection/components/use-connection/index.jsx"),u=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),E=n("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),C=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),w=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=E.__,l=({onRedirecting:p})=>{const{siteSuffix:L,adminUri:O,registrationNonce:v}=window.jetpackVideoPressInitialState,{siteProduct:U,productPrice:V}=(0,w.g)(),{yearly:a}=V,{handleRegisterSite:Z,userIsConnecting:c}=(0,x.Z)({redirectUri:O,from:"jetpack-videopress",registrationNonce:v}),[A,D]=(0,C.useState)(!1),{run:G,hasCheckoutStarted:I}=(0,u.Z)({siteSuffix:L,productSlug:a==null?void 0:a.slug,redirectUrl:O}),B=U.features.map(H=>({name:H}));return(0,s.jsxs)(r.ZP,{title:U.description,items:B,children:[(0,s.jsxs)(r.oK,{primary:!0,children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(y.Z,{offPrice:a!=null&&a.discount?a.salePriceByMonth:null,price:a.priceByMonth,promoLabel:a!=null&&a.discount?(0,E.gB)(o("%1$s%% off","jetpack-videopress-pkg"),a.discount):null,legend:o("/month, billed yearly","jetpack-videopress-pkg"),currency:a.currency}),(0,s.jsx)(P.Z,{onClick:()=>{p==null||p(),G()},isLoading:I,fullWidth:!0,disabled:A||I||c,children:o("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0})]}),(0,s.jsxs)(r.oK,{children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(y.Z,{price:0,legend:"",currency:a.currency,hidePriceFraction:!0}),(0,s.jsx)(P.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{D(!0),Z(),p==null||p()},isLoading:c||A,disabled:c||A||I,children:o("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:o("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!1}),(0,s.jsx)(r.kF,{isIncluded:!1})]})]})};l.displayName="PricingPage";const _=l;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(p){}var g=`/**
 * Internal dependencies
 */
import PricingSection from '..';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

window.jetpackVideoPressInitialState = {
	allowedVideoExtensions: {},
	adminUri: 'admin-uri',
	apiNonce: 'nonce',
	apiRoot: 'https://api-root.com',
	registrationNonce: 'registration-nonce',
	paidFeatures: {
		isVideoPressSupported: true,
		isVideoPress1TBSupported: true,
		isVideoPressUnlimitedSupported: false,
	},
	adminUrl: 'https://admin-url.com',
	siteSuffix: 'site-suffix',
	siteProductData: {
		slug: 'videopress',
		plugin_slug: 'jetpack-videopress',
		name: 'VideoPress',
		title: 'Jetpack VideoPress',
		description: 'High quality, ad-free video',
		long_description: 'High-quality, ad-free video built specifically for WordPress.',
		features: [
			'1TB of storage',
			'Built into WordPress editor',
			'Ad-free and customizable player',
			'Unlimited users',
		],
		status: 'error',
		pricing_for_ui: {
			available: true,
			wpcom_product_slug: 'jetpack_videopress',
			currency_code: 'USD',
			full_price: 119.4,
			discount_price: 59.4,
		},
		is_bundle: false,
		is_upgradable_by_bundle: false,
		supported_products: [],
		wpcom_product_slug: 'jetpack_videopress',
		requires_user_connection: true,
		has_required_plan: true,
		manage_url: 'http://localhost/wp-admin/admin.php?page=jetpack-videopress',
		post_activation_url: '',
	},
	contentNonce: 'content-nonce',
};

export default {
	title: 'Packages/VideoPress/PricingSection',
	component: PricingSection,
} as ComponentMeta< typeof PricingSection >;

const Template: ComponentStory< typeof PricingSection > = args => <PricingSection { ...args } />;

export const Default = Template.bind( {} );
`,f={Default:{startLoc:{col:58,line:61},endLoc:{col:96,line:61},startBody:{col:58,line:61},endBody:{col:96,line:61}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const F={parameters:{storySource:{source:`/**
 * Internal dependencies
 */
import PricingSection from '..';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

window.jetpackVideoPressInitialState = {
	allowedVideoExtensions: {},
	adminUri: 'admin-uri',
	apiNonce: 'nonce',
	apiRoot: 'https://api-root.com',
	registrationNonce: 'registration-nonce',
	paidFeatures: {
		isVideoPressSupported: true,
		isVideoPress1TBSupported: true,
		isVideoPressUnlimitedSupported: false,
	},
	adminUrl: 'https://admin-url.com',
	siteSuffix: 'site-suffix',
	siteProductData: {
		slug: 'videopress',
		plugin_slug: 'jetpack-videopress',
		name: 'VideoPress',
		title: 'Jetpack VideoPress',
		description: 'High quality, ad-free video',
		long_description: 'High-quality, ad-free video built specifically for WordPress.',
		features: [
			'1TB of storage',
			'Built into WordPress editor',
			'Ad-free and customizable player',
			'Unlimited users',
		],
		status: 'error',
		pricing_for_ui: {
			available: true,
			wpcom_product_slug: 'jetpack_videopress',
			currency_code: 'USD',
			full_price: 119.4,
			discount_price: 59.4,
		},
		is_bundle: false,
		is_upgradable_by_bundle: false,
		supported_products: [],
		wpcom_product_slug: 'jetpack_videopress',
		requires_user_connection: true,
		has_required_plan: true,
		manage_url: 'http://localhost/wp-admin/admin.php?page=jetpack-videopress',
		post_activation_url: '',
	},
	contentNonce: 'content-nonce',
};

export default {
	title: 'Packages/VideoPress/PricingSection',
	component: PricingSection,
} as ComponentMeta< typeof PricingSection >;

const Template: ComponentStory< typeof PricingSection > = args => <PricingSection { ...args } />;

export const Default = Template.bind( {} );
`,locationsMap:{default:{startLoc:{col:58,line:61},endLoc:{col:96,line:61},startBody:{col:58,line:61},endBody:{col:96,line:61}}}}},title:"Packages/VideoPress/PricingSection",component:_},N=p=>(0,s.jsx)(_,{...p});N.displayName="Template";const h=N.bind({});h.parameters={...h.parameters,docs:{...(i=h.parameters)==null?void 0:i.docs,source:{originalSource:"args => <PricingSection {...args} />",...(R=(S=h.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const T=["Default"]},"../connection/components/use-connection/index.jsx":(k,m,n)=>{n.d(m,{Z:()=>C});var r=n("../api/index.jsx"),y=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),P=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),x=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=n("../connection/state/store.jsx");const E=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},C=({registrationNonce:w=E.registrationNonce,apiRoot:s=E.apiRoot,apiNonce:o=E.apiNonce,redirectUri:l,autoTrigger:_,from:g,skipUserConnection:f}={})=>{const{registerSite:F,connectUser:N,refreshConnectedPlugins:h}=(0,y.Z)(u.t),T=(0,P.Z)(c=>c(u.t).getRegistrationError()),{siteIsRegistering:i,userIsConnecting:S,userConnectionData:R,connectedPlugins:p,connectionErrors:L,isRegistered:O,isUserConnected:v,hasConnectedOwner:U,isOfflineMode:V}=(0,P.Z)(c=>({siteIsRegistering:c(u.t).getSiteIsRegistering(),userIsConnecting:c(u.t).getUserIsConnecting(),userConnectionData:c(u.t).getUserConnectionData(),connectedPlugins:c(u.t).getConnectedPlugins(),connectionErrors:c(u.t).getConnectionErrors(),isOfflineMode:c(u.t).getIsOfflineMode(),...c(u.t).getConnectionStatus()})),a=()=>{if(f){if(l)return window.location=l,Promise.resolve(l)}else return N({from:g,redirectUri:l});return Promise.resolve()},Z=c=>(c&&c.preventDefault(),O?a():F({registrationNonce:w,redirectUri:l}).then(()=>a()));return(0,x.useEffect)(()=>{r.ZP.setApiRoot(s),r.ZP.setApiNonce(o)},[s,o]),(0,x.useEffect)(()=>{_&&!i&&!S&&Z()},[]),{handleRegisterSite:Z,handleConnectUser:a,refreshConnectedPlugins:h,isRegistered:O,isUserConnected:v,siteIsRegistering:i,userIsConnecting:S,registrationError:T,userConnectionData:R,hasConnectedOwner:U,connectedPlugins:p,connectionErrors:L,isOfflineMode:V}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(k,m,n)=>{var h;n.d(m,{Z:()=>N});var r=n("../api/index.jsx");function y(){var i;switch(typeof window!="undefined"&&((i=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:i.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var P=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),x=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),u=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),E=n.n(u),C=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),w=n("../connection/components/use-connection/index.jsx"),s=n("../connection/state/store.jsx");const o=E()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:l,apiRoot:_,apiNonce:g,siteSuffix:f}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},F=typeof window!="undefined"?(h=window==null?void 0:window.myJetpackInitialState)==null?void 0:h.adminUrl:null;function N({productSlug:T,redirectUrl:i,siteSuffix:S=f,adminUrl:R=F,connectAfterCheckout:p=!1,siteProductAvailabilityHandler:L=null,quantity:O=null,from:v,useBlogIdSuffix:U=!1}={}){o("productSlug is %s",T),o("redirectUrl is %s",i),o("siteSuffix is %s",S),o("from is %s",v);const[V,a]=(0,C.useState)(!1),{registerSite:Z}=(0,P.Z)(s.t),c=(0,x.Z)(b=>b(s.t).getBlogId(),[s.t]);o("blogID is %s",c!=null?c:"undefined"),U=U&&!!c;const{isUserConnected:A,isRegistered:D,handleConnectUser:G}=(0,w.Z)({redirectUri:i,from:v}),I=(0,C.useMemo)(()=>{const b=y(),W=(!D||!A)&&p,X=W?"checkout/jetpack/":`checkout/${U?c.toString():S}/`,K=O!=null?`:-q-${O}`:"",j=new URL(`${b}${X}${T}${K}`);return W?(j.searchParams.set("connect_after_checkout",!0),j.searchParams.set("admin_url",R),j.searchParams.set("from_site_slug",S)):j.searchParams.set("site",S),j.searchParams.set("source",v),j.searchParams.set("redirect_to",i),A||j.searchParams.set("unlinked","1"),j},[D,A,p,S,O,T,v,i,R,U,c]);o("isRegistered is %s",D),o("isUserConnected is %s",A),o("connectAfterCheckout is %s",p),o("checkoutUrl is %s",I);const B=()=>Promise.resolve(L&&L()).then(b=>{if(b)return o("handleAfterRegistration: Site has a product associated"),G();o("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",I),window.location.href=I}),H=()=>{o("Redirecting to connectAfterCheckout flow: %s",I),window.location.href=I},M=b=>{if(b&&b.preventDefault(),a(!0),p)return H();if(D)return B();Z({registrationNonce:l,redirectUri:i}).then(B)};return(0,C.useEffect)(()=>{r.ZP.setApiRoot(_),r.ZP.setApiNonce(g)},[]),{run:M,isRegistered:D,hasCheckoutStarted:V}}},"../connection/state/store.jsx":(k,m,n)=>{n.d(m,{t:()=>M});var r=n("../api/index.jsx");const y="SET_CONNECTION_STATUS",P="SET_CONNECTION_STATUS_IS_FETCHING",x="FETCH_CONNECTION_STATUS",u="SET_SITE_IS_REGISTERING",E="SET_USER_IS_CONNECTING",C="SET_REGISTRATION_ERROR",w="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",o="SET_AUTHORIZATION_URL",l="CONNECT_USER",_="DISCONNECT_USER_SUCCESS",g="FETCH_AUTHORIZATION_URL",f="SET_CONNECTED_PLUGINS",F="REFRESH_CONNECTED_PLUGINS",N="SET_CONNECTION_ERRORS",h="SET_IS_OFFLINE_MODE",T=e=>({type:y,connectionStatus:e}),i=e=>({type:P,isFetching:e}),S=()=>({type:x}),R=e=>({type:u,isRegistering:e}),p=e=>({type:E,isConnecting:e}),L=()=>({type:_}),O=e=>({type:C,registrationError:e}),v=()=>({type:w}),U=e=>({type:o,authorizationUrl:e}),V=e=>({type:g,redirectUri:e}),a=e=>({type:f,connectedPlugins:e}),Z=e=>({type:N,connectionErrors:e}),c=e=>({type:h,isOfflineMode:e});function*A({from:e,redirectFunc:t,redirectUri:d}={}){yield p(!0),yield{type:l,from:e,redirectFunc:t,redirectUri:d}}function*D({registrationNonce:e,redirectUri:t}){yield v(),yield R(!0);try{const d=yield{type:s,registrationNonce:e,redirectUri:t};return yield T({isRegistered:!0}),yield U(d.authorizeUrl),yield R(!1),Promise.resolve(d)}catch(d){return yield O(d),yield R(!1),Promise.reject(d)}}const I={setConnectionStatus:T,setConnectionStatusIsFetching:i,fetchConnectionStatus:S,fetchAuthorizationUrl:V,setSiteIsRegistering:R,setUserIsConnecting:p,setRegistrationError:O,clearRegistrationError:v,setAuthorizationUrl:U,registerSite:D,connectUser:A,disconnectUserSuccess:L,setConnectedPlugins:a,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>r.ZP.fetchConnectedPlugins().then(d=>{e(a(d)),t(d)})),setConnectionErrors:Z,setIsOfflineMode:c};var B=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const M="jetpack-connection",b=({registrationNonce:e,redirectUri:t})=>r.ZP.registerSite(e,t),W=(0,B.R)(({resolveSelect:e})=>({from:t,redirectFunc:d,redirectUri:$}={})=>new Promise((Ee,Ce)=>{e(M).getAuthorizationUrl($).then(Y=>{const Te=d||(Ie=>window.location.assign(Ie)),q=new URL(Y);t&&q.searchParams.set("from",encodeURIComponent(t));const ee=q.toString();Te(ee),Ee(ee)}).catch(Y=>{Ce(Y)})})),K={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>r.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:b,CONNECT_USER:W};var j=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const ne=(e={},t)=>{switch(t.type){case y:return{...e,...t.connectionStatus};case _:return{...e,isUserConnected:!1}}return e},se=(e={},t)=>{switch(t.type){case f:return t.connectedPlugins}return e},oe=(e=!1,t)=>{switch(t.type){case P:return t.isFetching}return e},re=(e=!1,t)=>{switch(t.type){case u:return t.isRegistering}return e},ie=(e=!1,t)=>{switch(t.type){case E:return t.isConnecting}return e},ce=(e,t)=>{switch(t.type){case w:return!1;case C:return t.registrationError;default:return e}},ae=(e,t)=>{switch(t.type){case o:return t.authorizationUrl;default:return e}},de=(e,t)=>{switch(t.type){default:return e}},ue=(e={},t)=>{switch(t.type){case N:return t.connectionErrors}return e},le=(e=!1,t)=>{switch(t.type){case h:return t.isConnecting}return e},pe=(0,j.UY)({connectionStatus:ne,connectionStatusIsFetching:oe,siteIsRegistering:re,userIsConnecting:ie,registrationError:ce,authorizationUrl:ae,userConnectionData:de,connectedPlugins:se,connectionErrors:ue,isOfflineMode:le});var me=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const ge={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const d=!!e.authorizationUrl,$=(0,me.Y)(M).hasFinishedResolution("getAuthorizationUrl",t);return d&&!$&&(0,_e.W)(M).finishResolution("getAuthorizationUrl",t),d},*fulfill(e){const t=yield I.fetchAuthorizationUrl(e);yield I.setAuthorizationUrl(t.authorizeUrl)}}}},fe={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,d;return(d=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:d.wpcomUser},getBlogId:e=>{var t,d;return(d=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:d.blogId}}};var he=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const z=class{static mayBeInit(t,d){z.store===null&&(z.store=(0,he.Z)(t,d),(0,j.z2)(z.store))}};let J=z;te(J,"store",null);const Se=J,Q=window.JP_CONNECTION_INITIAL_STATE;Q||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Se.mayBeInit(M,{__experimentalUseThunks:!0,reducer:pe,actions:I,selectors:fe,resolvers:ge,controls:K,initialState:Q||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(k,m,n)=>{n.d(m,{g:()=>o});var r=n("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),y=n("../../packages/videopress/src/client/state/index.js");function P(l){return l.replace(/([-_][a-z])/gi,_=>_.toUpperCase().replace("_",""))}function x(l){return l.indexOf("_")!==-1}function u(l,_=!1){const g=Object.assign({},l);for(const f in g)g.hasOwnProperty(f)&&x(f)&&(g[P(f)]=g[f],_&&delete g[f]);return g}const{paidFeatures:E={},siteProductData:C={},productData:w={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},o=()=>{const l=u(C.pricing_for_ui,!0),_=u(w.introductory_offer,!0),g={...u(w,!0),introductoryOffer:_},{purchases:f,isFetchingPurchases:F}=(0,r.Z)(i=>({purchases:i(y.tT).getPurchases(),isFetchingPurchases:i(y.tT).isFetchingPurchases()}),[]),N=f.map(i=>u(i,!0));function h(i){return N.some(S=>S.productSlug===i)}const T=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(i=>h(i));return{features:E,siteProduct:{...u({...C},!0),pricingForUi:l},product:g,productPrice:s,purchases:N,hasVideoPressPurchase:T,isFetchingPurchases:F}}}}]);})();
