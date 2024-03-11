"use strict";(()=>{var ye=Object.defineProperty;var Pe=(x,m,n)=>m in x?ye(x,m,{enumerable:!0,configurable:!0,writable:!0,value:n}):x[m]=n;var te=(x,m,n)=>(Pe(x,typeof m!="symbol"?m+"":m,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(x,m,n)=>{var i,S,O;n.r(m),n.d(m,{Default:()=>h,__namedExportsOrder:()=>y,default:()=>L});var r=n("../components/components/pricing-table/index.tsx"),P=n("../components/components/product-price/index.tsx"),N=n("../components/components/button/index.tsx"),A=n("../connection/components/use-connection/index.jsx"),u=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),T=n("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),I=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=T.__,l=({onRedirecting:p})=>{const{siteSuffix:Z,adminUri:U,registrationNonce:j}=window.jetpackVideoPressInitialState,{siteProduct:w,productPrice:M}=(0,v.g)(),{yearly:a}=M,{handleRegisterSite:V,userIsConnecting:c}=(0,A.Z)({redirectUri:U,from:"jetpack-videopress",registrationNonce:j}),[b,D]=(0,I.useState)(!1),{run:H,hasCheckoutStarted:E}=(0,u.Z)({siteSuffix:Z,productSlug:a==null?void 0:a.slug,redirectUrl:U}),z=w.features.map(W=>({name:W}));return(0,s.jsxs)(r.ZP,{title:w.description,items:z,children:[(0,s.jsxs)(r.oK,{primary:!0,children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(P.Z,{offPrice:a!=null&&a.discount?a.salePriceByMonth:null,price:a.priceByMonth,promoLabel:a!=null&&a.discount?(0,T.gB)(o("%1$s%% off","jetpack-videopress-pkg"),a.discount):null,legend:o("/month, billed yearly","jetpack-videopress-pkg"),currency:a.currency}),(0,s.jsx)(N.Z,{onClick:()=>{p==null||p(),H()},isLoading:E,fullWidth:!0,disabled:b||E||c,children:o("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0})]}),(0,s.jsxs)(r.oK,{children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(P.Z,{price:0,legend:"",currency:a.currency,hidePriceFraction:!0}),(0,s.jsx)(N.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{D(!0),V(),p==null||p()},isLoading:c||b,disabled:c||b||E,children:o("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:o("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!1}),(0,s.jsx)(r.kF,{isIncluded:!1})]})]})};l.displayName="PricingPage";const _=l;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(p){}var g=`/**
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
`,f={Default:{startLoc:{col:58,line:61},endLoc:{col:96,line:61},startBody:{col:58,line:61},endBody:{col:96,line:61}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const L={parameters:{storySource:{source:`/**
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
`,locationsMap:{default:{startLoc:{col:58,line:61},endLoc:{col:96,line:61},startBody:{col:58,line:61},endBody:{col:96,line:61}}}}},title:"Packages/VideoPress/PricingSection",component:_},R=p=>(0,s.jsx)(_,{...p});R.displayName="Template";const h=R.bind({});h.parameters={...h.parameters,docs:{...(i=h.parameters)==null?void 0:i.docs,source:{originalSource:"args => <PricingSection {...args} />",...(O=(S=h.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const y=["Default"]},"../connection/components/use-connection/index.jsx":(x,m,n)=>{n.d(m,{Z:()=>I});var r=n("../api/index.jsx"),P=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),N=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),A=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=n("../connection/state/store.jsx");const T=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},I=({registrationNonce:v=T.registrationNonce,apiRoot:s=T.apiRoot,apiNonce:o=T.apiNonce,redirectUri:l,autoTrigger:_,from:g,skipUserConnection:f}={})=>{const{registerSite:L,connectUser:R,refreshConnectedPlugins:h}=(0,P.Z)(u.t),y=(0,N.Z)(c=>c(u.t).getRegistrationError()),{siteIsRegistering:i,userIsConnecting:S,userConnectionData:O,connectedPlugins:p,connectionErrors:Z,isRegistered:U,isUserConnected:j,hasConnectedOwner:w,isOfflineMode:M}=(0,N.Z)(c=>({siteIsRegistering:c(u.t).getSiteIsRegistering(),userIsConnecting:c(u.t).getUserIsConnecting(),userConnectionData:c(u.t).getUserConnectionData(),connectedPlugins:c(u.t).getConnectedPlugins(),connectionErrors:c(u.t).getConnectionErrors(),isOfflineMode:c(u.t).getIsOfflineMode(),...c(u.t).getConnectionStatus()})),a=()=>{if(f){if(l)return window.location=l,Promise.resolve(l)}else return R({from:g,redirectUri:l});return Promise.resolve()},V=c=>(c&&c.preventDefault(),U?a():L({registrationNonce:v,redirectUri:l}).then(()=>a()));return(0,A.useEffect)(()=>{r.ZP.setApiRoot(s),r.ZP.setApiNonce(o)},[s,o]),(0,A.useEffect)(()=>{_&&!i&&!S&&V()},[]),{handleRegisterSite:V,handleConnectUser:a,refreshConnectedPlugins:h,isRegistered:U,isUserConnected:j,siteIsRegistering:i,userIsConnecting:S,registrationError:y,userConnectionData:O,hasConnectedOwner:w,connectedPlugins:p,connectionErrors:Z,isOfflineMode:M}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(x,m,n)=>{var h;n.d(m,{Z:()=>R});var r=n("../api/index.jsx");function P(){var i;switch(typeof window!="undefined"&&((i=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:i.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var N=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),A=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),u=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),T=n.n(u),I=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=n("../connection/components/use-connection/index.jsx"),s=n("../connection/state/store.jsx");const o=T()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:l,apiRoot:_,apiNonce:g,siteSuffix:f}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},L=typeof window!="undefined"?(h=window==null?void 0:window.myJetpackInitialState)==null?void 0:h.adminUrl:null;function R({productSlug:y,redirectUrl:i,siteSuffix:S=f,adminUrl:O=L,connectAfterCheckout:p=!1,siteProductAvailabilityHandler:Z=null,quantity:U=null,from:j,useBlogIdSuffix:w=!1}={}){o("productSlug is %s",y),o("redirectUrl is %s",i),o("siteSuffix is %s",S),o("from is %s",j);const[M,a]=(0,I.useState)(!1),{registerSite:V}=(0,N.Z)(s.t),c=(0,A.Z)(C=>C(s.t).getBlogId(),[s.t]);o("blogID is %s",c!=null?c:"undefined"),w=w&&!!c;const{isUserConnected:b,isRegistered:D,handleConnectUser:H}=(0,v.Z)({redirectUri:i,from:j}),E=(0,I.useMemo)(()=>{const C=P(),F=(!D||!b)&&p,X=F?"checkout/jetpack/":`checkout/${w?c.toString():S}/`,K=U!=null?`:-q-${U}`:"",k=new URL(`${C}${X}${y}${K}`);return F?(k.searchParams.set("connect_after_checkout",!0),k.searchParams.set("admin_url",O),k.searchParams.set("from_site_slug",S)):k.searchParams.set("site",S),k.searchParams.set("source",j),k.searchParams.set("redirect_to",i),b||k.searchParams.set("unlinked","1"),k},[D,b,p,S,U,y,j,i,O,w,c]);o("isRegistered is %s",D),o("isUserConnected is %s",b),o("connectAfterCheckout is %s",p),o("checkoutUrl is %s",E);const z=(C=null)=>Promise.resolve(Z&&Z()).then(F=>{if(C&&E.searchParams.set("redirect_to",C),F)return o("handleAfterRegistration: Site has a product associated"),H();o("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",E),window.location.href=E}),W=(C=null)=>{C&&E.searchParams.set("redirect_to",C),o("Redirecting to connectAfterCheckout flow: %s",E),window.location.href=E},B=(C,F=null)=>{if(C&&C.preventDefault(),a(!0),p)return W(F);if(D)return z(F);V({registrationNonce:l,redirectUri:i}).then(z)};return(0,I.useEffect)(()=>{r.ZP.setApiRoot(_),r.ZP.setApiNonce(g)},[]),{run:B,isRegistered:D,hasCheckoutStarted:M}}},"../connection/state/store.jsx":(x,m,n)=>{n.d(m,{t:()=>B});var r=n("../api/index.jsx");const P="SET_CONNECTION_STATUS",N="SET_CONNECTION_STATUS_IS_FETCHING",A="FETCH_CONNECTION_STATUS",u="SET_SITE_IS_REGISTERING",T="SET_USER_IS_CONNECTING",I="SET_REGISTRATION_ERROR",v="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",o="SET_AUTHORIZATION_URL",l="CONNECT_USER",_="DISCONNECT_USER_SUCCESS",g="FETCH_AUTHORIZATION_URL",f="SET_CONNECTED_PLUGINS",L="REFRESH_CONNECTED_PLUGINS",R="SET_CONNECTION_ERRORS",h="SET_IS_OFFLINE_MODE",y=e=>({type:P,connectionStatus:e}),i=e=>({type:N,isFetching:e}),S=()=>({type:A}),O=e=>({type:u,isRegistering:e}),p=e=>({type:T,isConnecting:e}),Z=()=>({type:_}),U=e=>({type:I,registrationError:e}),j=()=>({type:v}),w=e=>({type:o,authorizationUrl:e}),M=e=>({type:g,redirectUri:e}),a=e=>({type:f,connectedPlugins:e}),V=e=>({type:R,connectionErrors:e}),c=e=>({type:h,isOfflineMode:e});function*b({from:e,redirectFunc:t,redirectUri:d}={}){yield p(!0),yield{type:l,from:e,redirectFunc:t,redirectUri:d}}function*D({registrationNonce:e,redirectUri:t}){yield j(),yield O(!0);try{const d=yield{type:s,registrationNonce:e,redirectUri:t};return yield y({isRegistered:!0}),yield w(d.authorizeUrl),yield O(!1),Promise.resolve(d)}catch(d){return yield U(d),yield O(!1),Promise.reject(d)}}const E={setConnectionStatus:y,setConnectionStatusIsFetching:i,fetchConnectionStatus:S,fetchAuthorizationUrl:M,setSiteIsRegistering:O,setUserIsConnecting:p,setRegistrationError:U,clearRegistrationError:j,setAuthorizationUrl:w,registerSite:D,connectUser:b,disconnectUserSuccess:Z,setConnectedPlugins:a,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>r.ZP.fetchConnectedPlugins().then(d=>{e(a(d)),t(d)})),setConnectionErrors:V,setIsOfflineMode:c};var z=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const B="jetpack-connection",C=({registrationNonce:e,redirectUri:t})=>r.ZP.registerSite(e,t),F=(0,z.R)(({resolveSelect:e})=>({from:t,redirectFunc:d,redirectUri:$}={})=>new Promise((Ee,Ce)=>{e(B).getAuthorizationUrl($).then(Y=>{const Te=d||(Ie=>window.location.assign(Ie)),q=new URL(Y);t&&q.searchParams.set("from",encodeURIComponent(t));const ee=q.toString();Te(ee),Ee(ee)}).catch(Y=>{Ce(Y)})})),K={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>r.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:C,CONNECT_USER:F};var k=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const ne=(e={},t)=>{switch(t.type){case P:return{...e,...t.connectionStatus};case _:return{...e,isUserConnected:!1}}return e},se=(e={},t)=>{switch(t.type){case f:return t.connectedPlugins}return e},oe=(e=!1,t)=>{switch(t.type){case N:return t.isFetching}return e},re=(e=!1,t)=>{switch(t.type){case u:return t.isRegistering}return e},ie=(e=!1,t)=>{switch(t.type){case T:return t.isConnecting}return e},ce=(e,t)=>{switch(t.type){case v:return!1;case I:return t.registrationError;default:return e}},ae=(e,t)=>{switch(t.type){case o:return t.authorizationUrl;default:return e}},de=(e,t)=>{switch(t.type){default:return e}},ue=(e={},t)=>{switch(t.type){case R:return t.connectionErrors}return e},le=(e=!1,t)=>{switch(t.type){case h:return t.isConnecting}return e},pe=(0,k.UY)({connectionStatus:ne,connectionStatusIsFetching:oe,siteIsRegistering:re,userIsConnecting:ie,registrationError:ce,authorizationUrl:ae,userConnectionData:de,connectedPlugins:se,connectionErrors:ue,isOfflineMode:le});var me=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const ge={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const d=!!e.authorizationUrl,$=(0,me.Y)(B).hasFinishedResolution("getAuthorizationUrl",t);return d&&!$&&(0,_e.W)(B).finishResolution("getAuthorizationUrl",t),d},*fulfill(e){const t=yield E.fetchAuthorizationUrl(e);yield E.setAuthorizationUrl(t.authorizeUrl)}}}},fe={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,d;return(d=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:d.wpcomUser},getBlogId:e=>{var t,d;return(d=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:d.blogId}}};var he=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const G=class{static mayBeInit(t,d){G.store===null&&(G.store=(0,he.Z)(t,d),(0,k.z2)(G.store))}};let J=G;te(J,"store",null);const Se=J,Q=window.JP_CONNECTION_INITIAL_STATE;Q||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Se.mayBeInit(B,{__experimentalUseThunks:!0,reducer:pe,actions:E,selectors:fe,resolvers:ge,controls:K,initialState:Q||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(x,m,n)=>{n.d(m,{g:()=>o});var r=n("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),P=n("../../packages/videopress/src/client/state/index.js");function N(l){return l.replace(/([-_][a-z])/gi,_=>_.toUpperCase().replace("_",""))}function A(l){return l.indexOf("_")!==-1}function u(l,_=!1){const g=Object.assign({},l);for(const f in g)g.hasOwnProperty(f)&&A(f)&&(g[N(f)]=g[f],_&&delete g[f]);return g}const{paidFeatures:T={},siteProductData:I={},productData:v={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},o=()=>{const l=u(I.pricing_for_ui,!0),_=u(v.introductory_offer,!0),g={...u(v,!0),introductoryOffer:_},{purchases:f,isFetchingPurchases:L}=(0,r.Z)(i=>({purchases:i(P.tT).getPurchases(),isFetchingPurchases:i(P.tT).isFetchingPurchases()}),[]),R=f.map(i=>u(i,!0));function h(i){return R.some(S=>S.productSlug===i)}const y=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(i=>h(i));return{features:T,siteProduct:{...u({...I},!0),pricingForUi:l},product:g,productPrice:s,purchases:R,hasVideoPressPurchase:y,isFetchingPurchases:L}}}}]);})();
