"use strict";(()=>{var Ie=Object.defineProperty;var ye=(w,l,n)=>l in w?Ie(w,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):w[l]=n;var X=(w,l,n)=>(ye(w,typeof l!="symbol"?l+"":l,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(w,l,n)=>{var d,R,C;n.r(l),n.d(l,{Default:()=>p,__namedExportsOrder:()=>m,default:()=>b});var r=n("../components/components/pricing-table/index.tsx"),P=n("../components/components/product-price/index.tsx"),N=n("../components/components/button/index.tsx"),v=n("../connection/components/use-connection/index.jsx"),a=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),g=n("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),O=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),U=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=g.__,u=({onRedirecting:_})=>{const{siteSuffix:j,adminUri:k,registrationNonce:D}=window.jetpackVideoPressInitialState,{siteProduct:A,productPrice:x}=(0,U.g)(),{yearly:o}=x,{handleRegisterSite:F,userIsConnecting:i}=(0,v.Z)({redirectUri:k,from:"jetpack-videopress",registrationNonce:D}),[L,Z]=(0,O.useState)(!1),{run:M,hasCheckoutStarted:T}=(0,a.Z)({siteSuffix:j,productSlug:o==null?void 0:o.slug,redirectUrl:k}),V=A.features.map(z=>({name:z}));return(0,s.jsxs)(r.ZP,{title:A.description,items:V,children:[(0,s.jsxs)(r.oK,{primary:!0,children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(P.Z,{offPrice:o!=null&&o.discount?o.salePriceByMonth:null,price:o.priceByMonth,promoLabel:o!=null&&o.discount?(0,g.gB)(f("%1$s%% off","jetpack-videopress-pkg"),o.discount):null,legend:f("/month, billed yearly","jetpack-videopress-pkg"),currency:o.currency}),(0,s.jsx)(N.Z,{onClick:()=>{_==null||_(),M()},isLoading:T,fullWidth:!0,disabled:L||T||i,children:f("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0})]}),(0,s.jsxs)(r.oK,{children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(P.Z,{price:0,legend:"",currency:o.currency,hidePriceFraction:!0}),(0,s.jsx)(N.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{Z(!0),F(),_==null||_()},isLoading:i||L,disabled:i||L||T,children:f("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:f("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!1}),(0,s.jsx)(r.kF,{isIncluded:!1})]})]})};u.displayName="PricingPage";const h=u;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(_){}var S=`/**
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
`,E={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const b={parameters:{storySource:{source:`/**
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
    isVideoPressUnlimitedSupported: false
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
    features: ['1TB of storage', 'Built into WordPress editor', 'Ad-free and customizable player', 'Unlimited users'],
    status: 'error',
    pricing_for_ui: {
      available: true,
      wpcom_product_slug: 'jetpack_videopress',
      currency_code: 'USD',
      full_price: 119.4,
      discount_price: 59.4
    },
    is_bundle: false,
    is_upgradable_by_bundle: false,
    supported_products: [],
    wpcom_product_slug: 'jetpack_videopress',
    requires_user_connection: true,
    has_required_plan: true,
    manage_url: 'http://localhost/wp-admin/admin.php?page=jetpack-videopress',
    post_activation_url: ''
  },
  contentNonce: 'content-nonce'
};
export default ({
  title: 'Packages/VideoPress/PricingSection',
  component: PricingSection
} as ComponentMeta<typeof PricingSection>);
const Template: ComponentStory<typeof PricingSection> = args => <PricingSection {...args} />;
export const Default = Template.bind({});
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <PricingSection {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:h},y=_=>(0,s.jsx)(h,{..._});y.displayName="Template";const p=y.bind({});p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:"args => <PricingSection {...args} />",...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const m=["Default"]},"../connection/components/use-connection/index.jsx":(w,l,n)=>{n.d(l,{Z:()=>O});var r=n("../api/index.jsx"),P=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),N=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),v=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../connection/state/store.jsx");const g=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},O=({registrationNonce:U=g.registrationNonce,apiRoot:s=g.apiRoot,apiNonce:f=g.apiNonce,redirectUri:u,autoTrigger:h,from:S,skipUserConnection:E}={})=>{const{registerSite:b,connectUser:y,refreshConnectedPlugins:p}=(0,P.Z)(a.t),m=(0,N.Z)(i=>i(a.t).getRegistrationError()),{siteIsRegistering:d,userIsConnecting:R,userConnectionData:C,connectedPlugins:_,connectionErrors:j,isRegistered:k,isUserConnected:D,hasConnectedOwner:A,isOfflineMode:x}=(0,N.Z)(i=>({siteIsRegistering:i(a.t).getSiteIsRegistering(),userIsConnecting:i(a.t).getUserIsConnecting(),userConnectionData:i(a.t).getUserConnectionData(),connectedPlugins:i(a.t).getConnectedPlugins(),connectionErrors:i(a.t).getConnectionErrors(),isOfflineMode:i(a.t).getIsOfflineMode(),...i(a.t).getConnectionStatus()})),o=()=>{if(E){if(u)return window.location=u,Promise.resolve(u)}else return y({from:S,redirectUri:u});return Promise.resolve()},F=i=>(i&&i.preventDefault(),k?o():b({registrationNonce:U,redirectUri:u}).then(()=>o()));return(0,v.useEffect)(()=>{r.ZP.setApiRoot(s),r.ZP.setApiNonce(f)},[s,f]),(0,v.useEffect)(()=>{h&&!d&&!R&&F()},[]),{handleRegisterSite:F,handleConnectUser:o,refreshConnectedPlugins:p,isRegistered:k,isUserConnected:D,siteIsRegistering:d,userIsConnecting:R,registrationError:m,userConnectionData:C,hasConnectedOwner:A,connectedPlugins:_,connectionErrors:j,isOfflineMode:x}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(w,l,n)=>{var y;n.d(l,{Z:()=>b});var r=n("../api/index.jsx");function P(){var m;switch(typeof window!="undefined"&&((m=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:m.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var N=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),v=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),a=n.n(v),g=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=n("../connection/components/use-connection/index.jsx"),U=n("../connection/state/store.jsx");const s=a()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:f,apiRoot:u,apiNonce:h,siteSuffix:S}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},E=typeof window!="undefined"?(y=window==null?void 0:window.myJetpackInitialState)==null?void 0:y.adminUrl:null;function b({productSlug:p,redirectUrl:m,siteSuffix:d=S,adminUrl:R=E,connectAfterCheckout:C=!1,siteProductAvailabilityHandler:_=null,from:j}={}){s("productSlug is %s",p),s("redirectUrl is %s",m),s("siteSuffix is %s",d),s("from is %s",j);const[k,D]=(0,g.useState)(!1),{registerSite:A}=(0,N.Z)(U.t),{isUserConnected:x,isRegistered:o,handleConnectUser:F}=(0,O.Z)({redirectUri:m,from:j}),i=(0,g.useMemo)(()=>{const T=P(),V=(!o||!x)&&C,z=V?"checkout/jetpack/":`checkout/${d}/`,I=new URL(`${T}${z}${p}`);return V?(I.searchParams.set("connect_after_checkout",!0),I.searchParams.set("admin_url",R),I.searchParams.set("from_site_slug",d)):I.searchParams.set("site",d),I.searchParams.set("source",j),I.searchParams.set("redirect_to",m),x||I.searchParams.set("unlinked","1"),I},[C,o,d,p,R,j,m,x]);s("isRegistered is %s",o),s("isUserConnected is %s",x),s("connectAfterCheckout is %s",C),s("checkoutUrl is %s",i);const L=()=>Promise.resolve(_&&_()).then(T=>{if(T)return s("handleAfterRegistration: Site has a product associated"),F();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",i),window.location.href=i}),Z=()=>{s("Redirecting to connectAfterCheckout flow: %s",i),window.location.href=i},M=T=>{if(T&&T.preventDefault(),D(!0),C)return Z();if(o)return L();A({registrationNonce:f,redirectUri:m}).then(L)};return(0,g.useEffect)(()=>{r.ZP.setApiRoot(u),r.ZP.setApiNonce(h)},[]),{run:M,isRegistered:o,hasCheckoutStarted:k}}},"../connection/state/store.jsx":(w,l,n)=>{n.d(l,{t:()=>I});var r=n("../api/index.jsx");const P="SET_CONNECTION_STATUS",N="SET_CONNECTION_STATUS_IS_FETCHING",v="FETCH_CONNECTION_STATUS",a="SET_SITE_IS_REGISTERING",g="SET_USER_IS_CONNECTING",O="SET_REGISTRATION_ERROR",U="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",f="SET_AUTHORIZATION_URL",u="CONNECT_USER",h="DISCONNECT_USER_SUCCESS",S="FETCH_AUTHORIZATION_URL",E="SET_CONNECTED_PLUGINS",b="REFRESH_CONNECTED_PLUGINS",y="SET_CONNECTION_ERRORS",p="SET_IS_OFFLINE_MODE",m=e=>({type:P,connectionStatus:e}),d=e=>({type:N,isFetching:e}),R=()=>({type:v}),C=e=>({type:a,isRegistering:e}),_=e=>({type:g,isConnecting:e}),j=()=>({type:h}),k=e=>({type:O,registrationError:e}),D=()=>({type:U}),A=e=>({type:f,authorizationUrl:e}),x=e=>({type:S,redirectUri:e}),o=e=>({type:E,connectedPlugins:e}),F=e=>({type:y,connectionErrors:e}),i=e=>({type:p,isOfflineMode:e});function*L({from:e,redirectFunc:t,redirectUri:c}={}){yield _(!0),yield{type:u,from:e,redirectFunc:t,redirectUri:c}}function*Z({registrationNonce:e,redirectUri:t}){yield D(),yield C(!0);try{const c=yield{type:s,registrationNonce:e,redirectUri:t};return yield m({isRegistered:!0}),yield A(c.authorizeUrl),yield C(!1),Promise.resolve(c)}catch(c){return yield k(c),yield C(!1),Promise.reject(c)}}const T={setConnectionStatus:m,setConnectionStatusIsFetching:d,fetchConnectionStatus:R,fetchAuthorizationUrl:x,setSiteIsRegistering:C,setUserIsConnecting:_,setRegistrationError:k,clearRegistrationError:D,setAuthorizationUrl:A,registerSite:Z,connectUser:L,disconnectUserSuccess:j,setConnectedPlugins:o,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>r.ZP.fetchConnectedPlugins().then(c=>{e(o(c)),t(c)})),setConnectionErrors:F,setIsOfflineMode:i};var V=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const I="jetpack-connection",Q=({registrationNonce:e,redirectUri:t})=>r.ZP.registerSite(e,t),q=(0,V.R)(({resolveSelect:e})=>({from:t,redirectFunc:c,redirectUri:H}={})=>new Promise((Se,Ee)=>{e(I).getAuthorizationUrl(H).then(W=>{const Ce=c||(Te=>window.location.assign(Te)),Y=new URL(W);t&&Y.searchParams.set("from",encodeURIComponent(t));const $=Y.toString();Ce($),Se($)}).catch(W=>{Ee(W)})})),ee={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>r.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:Q,CONNECT_USER:q};var J=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const te=(e={},t)=>{switch(t.type){case P:return{...e,...t.connectionStatus};case h:return{...e,isUserConnected:!1}}return e},ne=(e={},t)=>{switch(t.type){case E:return t.connectedPlugins}return e},se=(e=!1,t)=>{switch(t.type){case N:return t.isFetching}return e},oe=(e=!1,t)=>{switch(t.type){case a:return t.isRegistering}return e},re=(e=!1,t)=>{switch(t.type){case g:return t.isConnecting}return e},ie=(e,t)=>{switch(t.type){case U:return!1;case O:return t.registrationError;default:return e}},ce=(e,t)=>{switch(t.type){case f:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=(e={},t)=>{switch(t.type){case y:return t.connectionErrors}return e},ue=(e=!1,t)=>{switch(t.type){case p:return t.isConnecting}return e},le=(0,J.UY)({connectionStatus:te,connectionStatusIsFetching:se,siteIsRegistering:oe,userIsConnecting:re,registrationError:ie,authorizationUrl:ce,userConnectionData:ae,connectedPlugins:ne,connectionErrors:de,isOfflineMode:ue});var pe=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),me=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const _e={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const c=!!e.authorizationUrl,H=(0,pe.Y)(I).hasFinishedResolution("getAuthorizationUrl",t);return c&&!H&&(0,me.W)(I).finishResolution("getAuthorizationUrl",t),c},*fulfill(e){const t=yield T.fetchAuthorizationUrl(e);yield T.setAuthorizationUrl(t.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.wpcomUser},getBlogId:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.blogId}}};var fe=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const B=class{static mayBeInit(t,c){B.store===null&&(B.store=(0,fe.Z)(t,c),(0,J.z2)(B.store))}};let G=B;X(G,"store",null);const he=G,K=window.JP_CONNECTION_INITIAL_STATE;K||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),he.mayBeInit(I,{__experimentalUseThunks:!0,reducer:le,actions:T,selectors:ge,resolvers:_e,controls:ee,initialState:K||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(w,l,n)=>{n.d(l,{g:()=>f});var r=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),P=n("../../packages/videopress/src/client/state/index.js");function N(u){return u.replace(/([-_][a-z])/gi,h=>h.toUpperCase().replace("_",""))}function v(u){return u.indexOf("_")!==-1}function a(u,h=!1){const S=Object.assign({},u);for(const E in S)S.hasOwnProperty(E)&&v(E)&&(S[N(E)]=S[E],h&&delete S[E]);return S}const{paidFeatures:g={},siteProductData:O={},productData:U={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},f=()=>{const u=a(O.pricing_for_ui,!0),h=a(U.introductory_offer,!0),S={...a(U,!0),introductoryOffer:h},{purchases:E,isFetchingPurchases:b}=(0,r.Z)(d=>({purchases:d(P.tT).getPurchases(),isFetchingPurchases:d(P.tT).isFetchingPurchases()}),[]),y=E.map(d=>a(d,!0));function p(d){return y.some(R=>R.productSlug===d)}const m=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(d=>p(d));return{features:g,siteProduct:{...a({...O},!0),pricingForUi:u},product:S,productPrice:s,purchases:y,hasVideoPressPurchase:m,isFetchingPurchases:b}}}}]);})();
