"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(V,y,n)=>{var a,u,x;n.r(y),n.d(y,{Default:()=>p,__namedExportsOrder:()=>I,default:()=>N});var r=n("../components/components/pricing-table/index.tsx"),C=n("../components/components/product-price/index.tsx"),T=n("../components/components/button/index.tsx"),v=n("../connection/components/use-connection/index.jsx"),c=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),h=n("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),U=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),R=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=h.__,d=O=>{let{onRedirecting:S}=O;const{siteSuffix:j,adminUri:k,registrationNonce:A}=window.jetpackVideoPressInitialState,{siteProduct:P,productPrice:b}=(0,R.g)(),{yearly:o}=b,{handleRegisterSite:H,userIsConnecting:Z}=(0,v.Z)({redirectUri:k,from:"jetpack-videopress",registrationNonce:A}),[D,z]=(0,U.useState)(!1),{run:J,hasCheckoutStarted:w}=(0,c.Z)({siteSuffix:j,productSlug:o==null?void 0:o.slug,redirectUrl:k}),G=P.features.map(W=>({name:W}));return(0,s.jsxs)(r.ZP,{title:P.description,items:G,children:[(0,s.jsxs)(r.oK,{primary:!0,children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(C.Z,{offPrice:o!=null&&o.discount?o.salePriceByMonth:null,price:o.priceByMonth,promoLabel:o!=null&&o.discount?(0,h.gB)(g("%1$s%% off","jetpack-videopress-pkg"),o.discount):null,legend:g("/month, billed yearly","jetpack-videopress-pkg"),currency:o.currency}),(0,s.jsx)(T.Z,{onClick:()=>{S==null||S(),J()},isLoading:w,fullWidth:!0,disabled:D||w||Z,children:g("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0})]}),(0,s.jsxs)(r.oK,{children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(C.Z,{price:0,legend:"",currency:o.currency,hidePriceFraction:!0}),(0,s.jsx)(T.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{z(!0),H(),S==null||S()},isLoading:Z||D,disabled:Z||D||w,children:g("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:g("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!1}),(0,s.jsx)(r.kF,{isIncluded:!1})]})]})};d.displayName="PricingPage";const m=d;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(O){}var f=`/**
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
`,_={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const N={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:m},l=O=>(0,s.jsx)(m,{...O});l.displayName="Template";const p=l.bind({});p.parameters={...p.parameters,docs:{...(a=p.parameters)==null?void 0:a.docs,source:{originalSource:"args => <PricingSection {...args} />",...(x=(u=p.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const I=["Default"]},"../connection/components/use-connection/index.jsx":(V,y,n)=>{n.d(y,{Z:()=>U});var r=n("../api/index.jsx"),C=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),T=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),v=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=n("../connection/state/store.jsx");const h=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},U=function(){let{registrationNonce:R=h.registrationNonce,apiRoot:s=h.apiRoot,apiNonce:g=h.apiNonce,redirectUri:d,autoTrigger:m,from:f,skipUserConnection:_}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:N,connectUser:l,refreshConnectedPlugins:p}=(0,C.Z)(c.t),I=(0,T.Z)(o=>o(c.t).getRegistrationError()),{siteIsRegistering:a,userIsConnecting:u,userConnectionData:x,connectedPlugins:O,connectionErrors:S,isRegistered:j,isUserConnected:k,hasConnectedOwner:A}=(0,T.Z)(o=>({siteIsRegistering:o(c.t).getSiteIsRegistering(),userIsConnecting:o(c.t).getUserIsConnecting(),userConnectionData:o(c.t).getUserConnectionData(),connectedPlugins:o(c.t).getConnectedPlugins(),connectionErrors:o(c.t).getConnectionErrors(),...o(c.t).getConnectionStatus()})),P=()=>{if(_){if(d)return window.location=d,Promise.resolve(d)}else return l({from:f,redirectUri:d});return Promise.resolve()},b=o=>(o&&o.preventDefault(),j?P():N({registrationNonce:R,redirectUri:d}).then(()=>P()));return(0,v.useEffect)(()=>{r.ZP.setApiRoot(s),r.ZP.setApiNonce(g)},[s,g]),(0,v.useEffect)(()=>{m&&!a&&!u&&b()},[]),{handleRegisterSite:b,handleConnectUser:P,refreshConnectedPlugins:p,isRegistered:j,isUserConnected:k,siteIsRegistering:a,userIsConnecting:u,registrationError:I,userConnectionData:x,hasConnectedOwner:A,connectedPlugins:O,connectionErrors:S}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(V,y,n)=>{n.d(y,{Z:()=>_});var r=n("../api/index.jsx");function C(N,l,p,I){const a=new URL("https://wordpress.com/checkout/"),u=new URL(`${a}${l}/${N}`);return u.searchParams.set("redirect_to",p),I||u.searchParams.set("unlinked","1"),u.searchParams.set("site",l),u.toString()}var T=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),v=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),c=n.n(v),h=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),U=n("../connection/components/use-connection/index.jsx"),R=n("../connection/state/store.jsx");const s=c()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:g,apiRoot:d,apiNonce:m,siteSuffix:f}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function _(){let{productSlug:N,redirectUrl:l,siteSuffix:p=f,siteProductAvailabilityHandler:I=null,from:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s("productSlug is %s",N),s("redirectUrl is %s",l),s("siteSuffix is %s",p),s("from is %s",a);const[u,x]=(0,h.useState)(!1),{registerSite:O}=(0,T.Z)(R.t),{isUserConnected:S,isRegistered:j,handleConnectUser:k}=(0,U.Z)({redirectUri:l,from:a}),A=C(N,p,l,S);s("checkoutProductUrl is %s",A),s("isUserConnected is %s",S);const P=()=>Promise.resolve(I&&I()).then(o=>{if(o)return s("handleAfterRegistration: Site has a product associated"),k();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",A),window.location.href=A}),b=o=>{if(o&&o.preventDefault(),x(!0),j)return P();O({registrationNonce:g,redirectUri:l}).then(P)};return(0,h.useEffect)(()=>{r.ZP.setApiRoot(d),r.ZP.setApiNonce(m)},[]),{run:b,isRegistered:j,hasCheckoutStarted:u}}},"../connection/state/store.jsx":(V,y,n)=>{n.d(y,{t:()=>w});var r=n("../api/index.jsx");const C="SET_CONNECTION_STATUS",T="SET_CONNECTION_STATUS_IS_FETCHING",v="FETCH_CONNECTION_STATUS",c="SET_SITE_IS_REGISTERING",h="SET_USER_IS_CONNECTING",U="SET_REGISTRATION_ERROR",R="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",g="SET_AUTHORIZATION_URL",d="CONNECT_USER",m="DISCONNECT_USER_SUCCESS",f="FETCH_AUTHORIZATION_URL",_="SET_CONNECTED_PLUGINS",N="REFRESH_CONNECTED_PLUGINS",l="SET_CONNECTION_ERRORS",p=e=>({type:C,connectionStatus:e}),I=e=>({type:T,isFetching:e}),a=()=>({type:v}),u=e=>({type:c,isRegistering:e}),x=e=>({type:h,isConnecting:e}),O=()=>({type:m}),S=e=>({type:U,registrationError:e}),j=()=>({type:R}),k=e=>({type:g,authorizationUrl:e}),A=e=>({type:f,redirectUri:e}),P=e=>({type:_,connectedPlugins:e}),b=e=>({type:l,connectionErrors:e});function o(){let{from:e,redirectFunc:t,redirectUri:i}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield x(!0),yield{type:d,from:e,redirectFunc:t,redirectUri:i}}()}function H(e){let{registrationNonce:t,redirectUri:i}=e;return function*(){yield j(),yield u(!0);try{const E=yield{type:s,registrationNonce:t,redirectUri:i};return yield p({isRegistered:!0}),yield k(E.authorizeUrl),yield u(!1),Promise.resolve(E)}catch(E){return yield S(E),yield u(!1),Promise.reject(E)}}()}const D={setConnectionStatus:p,setConnectionStatusIsFetching:I,fetchConnectionStatus:a,fetchAuthorizationUrl:A,setSiteIsRegistering:u,setUserIsConnecting:x,setRegistrationError:S,clearRegistrationError:j,setAuthorizationUrl:k,registerSite:H,connectUser:o,disconnectUserSuccess:O,setConnectedPlugins:P,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(i=>r.ZP.fetchConnectedPlugins().then(E=>{t(P(E)),i(E)}))},setConnectionErrors:b};var z=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const w="jetpack-connection",G=e=>{let{registrationNonce:t,redirectUri:i}=e;return r.ZP.registerSite(t,i)},W=(0,z.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:i,redirectFunc:E,redirectUri:L}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((M,fe)=>{t(w).getAuthorizationUrl(L).then(K=>{const _e=E||(he=>window.location.assign(he)),$=new URL(K);i&&$.searchParams.set("from",encodeURIComponent(i));const X=$.toString();_e(X),M(X)}).catch(K=>{fe(K)})})}}),Q={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return r.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:G,CONNECT_USER:W};var B=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{...e,...t.connectionStatus};case m:return{...e,isUserConnected:!1}}return e},ee=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.connectedPlugins}return e},te=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return t.isFetching}return e},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return t.isRegistering}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.isConnecting}return e},oe=(e,t)=>{switch(t.type){case R:return!1;case U:return t.registrationError;default:return e}},re=(e,t)=>{switch(t.type){case g:return t.authorizationUrl;default:return e}},ie=(e,t)=>{switch(t.type){default:return e}},ce=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return t.connectionErrors}return e},ae=(0,B.UY)({connectionStatus:q,connectionStatusIsFetching:te,siteIsRegistering:ne,userIsConnecting:se,registrationError:oe,authorizationUrl:re,userConnectionData:ie,connectedPlugins:ee,connectionErrors:ce}),de={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var i=arguments.length,E=new Array(i>1?i-1:0),L=1;L<i;L++)E[L-1]=arguments[L];const M=(0,B.Ys)(w).hasFinishedResolution("getAuthorizationUrl",E);return t&&!M&&(0,B.WI)(w).finishResolution("getAuthorizationUrl",E),t},*fulfill(e){const t=yield D.fetchAuthorizationUrl(e);yield D.setAuthorizationUrl(t.authorizeUrl)}}}},ue={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getWpcomUser:e=>{var t,i;return(i=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:i.wpcomUser},getBlogId:e=>{var t,i;return(i=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:i.blogId}}};var le=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/defineProperty.js"),pe=n.n(le),ge=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");class F{static mayBeInit(t,i){F.store===null&&(F.store=(0,ge.Z)(t,i),(0,B.z2)(F.store))}}pe()(F,"store",null);const me=F,Y=window.JP_CONNECTION_INITIAL_STATE;Y||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),me.mayBeInit(w,{__experimentalUseThunks:!0,reducer:ae,actions:D,selectors:ue,resolvers:de,controls:Q,initialState:Y||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(V,y,n)=>{n.d(y,{g:()=>g});var r=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),C=n("../../packages/videopress/src/client/state/index.js");function T(d){return d.replace(/([-_][a-z])/gi,m=>m.toUpperCase().replace("_",""))}function v(d){return d.indexOf("_")!==-1}function c(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const f=Object.assign({},d);for(const _ in f)f.hasOwnProperty(_)&&v(_)&&(f[T(_)]=f[_],m&&delete f[_]);return f}const{paidFeatures:h={},siteProductData:U={},productData:R={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},g=()=>{const d=c(U.pricing_for_ui,!0),m=c(R.introductory_offer,!0),f={...c(R,!0),introductoryOffer:m},{purchases:_,isFetchingPurchases:N}=(0,r.Z)(a=>({purchases:a(C.tT).getPurchases(),isFetchingPurchases:a(C.tT).isFetchingPurchases()}),[]),l=_.map(a=>c(a,!0));function p(a){return l.some(u=>u.productSlug===a)}const I=["jetpack_videopress","jetpack_videopress_monthly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y"].some(a=>p(a));return{features:h,siteProduct:{...c({...U},!0),pricingForUi:d},product:f,productPrice:s,purchases:l,hasVideoPressPurchase:I,isFetchingPurchases:N}}}}]);})();
