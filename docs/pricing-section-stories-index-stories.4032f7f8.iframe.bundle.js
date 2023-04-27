"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(Z,I,n)=>{n.d(I,{Z:()=>h});var r=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const h=P=>{const{dispatch:i}=(0,r.Z)();return P===void 0?i:i(P)}},"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(Z,I,n)=>{var a,u,x;n.r(I),n.d(I,{Default:()=>p,__namedExportsOrder:()=>U,default:()=>v});var r=n("../components/components/pricing-table/index.tsx"),C=n("../components/components/product-price/index.tsx"),h=n("../components/components/button/index.tsx"),P=n("../connection/components/use-connection/index.jsx"),i=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),S=n("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),y=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),N=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=S.__,d=O=>{let{onRedirecting:E}=O;const{siteSuffix:j,adminUri:k,registrationNonce:A}=window.jetpackVideoPressInitialState,{siteProduct:R,productPrice:b}=(0,N.g)(),{yearly:o}=b,{handleRegisterSite:H,userIsConnecting:B}=(0,P.Z)({redirectUri:k,from:"jetpack-videopress",registrationNonce:A}),[D,z]=(0,y.useState)(!1),{run:J,hasCheckoutStarted:w}=(0,i.Z)({siteSuffix:j,productSlug:o==null?void 0:o.slug,redirectUrl:k}),G=R.features.map(W=>({name:W}));return(0,s.jsxs)(r.ZP,{title:R.description,items:G,children:[(0,s.jsxs)(r.oK,{primary:!0,children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(C.Z,{offPrice:o!=null&&o.discount?o.salePriceByMonth:null,price:o.priceByMonth,promoLabel:o!=null&&o.discount?(0,S.gB)(g("%1$s%% off","jetpack-videopress-pkg"),o.discount):null,legend:g("/month, billed yearly","jetpack-videopress-pkg"),currency:o.currency}),(0,s.jsx)(h.Z,{onClick:()=>{E==null||E(),J()},isLoading:w,fullWidth:!0,disabled:D||w||B,children:g("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0})]}),(0,s.jsxs)(r.oK,{children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(C.Z,{price:0,legend:"",currency:o.currency,hidePriceFraction:!0}),(0,s.jsx)(h.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{z(!0),H(),E==null||E()},isLoading:B||D,disabled:B||D||w,children:g("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:g("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!1}),(0,s.jsx)(r.kF,{isIncluded:!1})]})]})};d.displayName="PricingPage";const m=d;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(O){}var _=`/**
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
`,f={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const v={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:m},l=O=>(0,s.jsx)(m,{...O});l.displayName="Template";const p=l.bind({});p.parameters={...p.parameters,docs:{...(a=p.parameters)==null?void 0:a.docs,source:{originalSource:"args => <PricingSection {...args} />",...(x=(u=p.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const U=["Default"]},"../connection/components/use-connection/index.jsx":(Z,I,n)=>{n.d(I,{Z:()=>y});var r=n("../api/index.jsx"),C=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),h=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),P=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=n("../connection/state/store.jsx");const S=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},y=function(){let{registrationNonce:N=S.registrationNonce,apiRoot:s=S.apiRoot,apiNonce:g=S.apiNonce,redirectUri:d,autoTrigger:m,from:_,skipUserConnection:f}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:v,connectUser:l,refreshConnectedPlugins:p}=(0,C.Z)(i.t),U=(0,h.Z)(o=>o(i.t).getRegistrationError()),{siteIsRegistering:a,userIsConnecting:u,userConnectionData:x,connectedPlugins:O,connectionErrors:E,isRegistered:j,isUserConnected:k,hasConnectedOwner:A}=(0,h.Z)(o=>({siteIsRegistering:o(i.t).getSiteIsRegistering(),userIsConnecting:o(i.t).getUserIsConnecting(),userConnectionData:o(i.t).getUserConnectionData(),connectedPlugins:o(i.t).getConnectedPlugins(),connectionErrors:o(i.t).getConnectionErrors(),...o(i.t).getConnectionStatus()})),R=()=>{if(f){if(d)return window.location=d,Promise.resolve(d)}else return l({from:_,redirectUri:d});return Promise.resolve()},b=o=>(o&&o.preventDefault(),j?R():v({registrationNonce:N,redirectUri:d}).then(()=>R()));return(0,P.useEffect)(()=>{r.ZP.setApiRoot(s),r.ZP.setApiNonce(g)},[s,g]),(0,P.useEffect)(()=>{m&&!a&&!u&&b()},[]),{handleRegisterSite:b,handleConnectUser:R,refreshConnectedPlugins:p,isRegistered:j,isUserConnected:k,siteIsRegistering:a,userIsConnecting:u,registrationError:U,userConnectionData:x,hasConnectedOwner:A,connectedPlugins:O,connectionErrors:E}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(Z,I,n)=>{n.d(I,{Z:()=>f});var r=n("../api/index.jsx");function C(v,l,p,U){const a=new URL("https://wordpress.com/checkout/"),u=new URL(`${a}${l}/${v}`);return u.searchParams.set("redirect_to",p),U||u.searchParams.set("unlinked","1"),u.searchParams.set("site",l),u.toString()}var h=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),P=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),i=n.n(P),S=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=n("../connection/components/use-connection/index.jsx"),N=n("../connection/state/store.jsx");const s=i()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:g,apiRoot:d,apiNonce:m,siteSuffix:_}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function f(){let{productSlug:v,redirectUrl:l,siteSuffix:p=_,siteProductAvailabilityHandler:U=null,from:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s("productSlug is %s",v),s("redirectUrl is %s",l),s("siteSuffix is %s",p),s("from is %s",a);const[u,x]=(0,S.useState)(!1),{registerSite:O}=(0,h.Z)(N.t),{isUserConnected:E,isRegistered:j,handleConnectUser:k}=(0,y.Z)({redirectUri:l,from:a}),A=C(v,p,l,E);s("checkoutProductUrl is %s",A),s("isUserConnected is %s",E);const R=()=>Promise.resolve(U&&U()).then(o=>{if(o)return s("handleAfterRegistration: Site has a product associated"),k();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",A),window.location.href=A}),b=o=>{if(o&&o.preventDefault(),x(!0),j)return R();O({registrationNonce:g,redirectUri:l}).then(R)};return(0,S.useEffect)(()=>{r.ZP.setApiRoot(d),r.ZP.setApiNonce(m)},[]),{run:b,isRegistered:j,hasCheckoutStarted:u}}},"../connection/state/store.jsx":(Z,I,n)=>{n.d(I,{t:()=>w});var r=n("../api/index.jsx");const C="SET_CONNECTION_STATUS",h="SET_CONNECTION_STATUS_IS_FETCHING",P="FETCH_CONNECTION_STATUS",i="SET_SITE_IS_REGISTERING",S="SET_USER_IS_CONNECTING",y="SET_REGISTRATION_ERROR",N="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",g="SET_AUTHORIZATION_URL",d="CONNECT_USER",m="DISCONNECT_USER_SUCCESS",_="FETCH_AUTHORIZATION_URL",f="SET_CONNECTED_PLUGINS",v="REFRESH_CONNECTED_PLUGINS",l="SET_CONNECTION_ERRORS",p=e=>({type:C,connectionStatus:e}),U=e=>({type:h,isFetching:e}),a=()=>({type:P}),u=e=>({type:i,isRegistering:e}),x=e=>({type:S,isConnecting:e}),O=()=>({type:m}),E=e=>({type:y,registrationError:e}),j=()=>({type:N}),k=e=>({type:g,authorizationUrl:e}),A=e=>({type:_,redirectUri:e}),R=e=>({type:f,connectedPlugins:e}),b=e=>({type:l,connectionErrors:e});function o(){let{from:e,redirectFunc:t,redirectUri:c}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield x(!0),yield{type:d,from:e,redirectFunc:t,redirectUri:c}}()}function H(e){let{registrationNonce:t,redirectUri:c}=e;return function*(){yield j(),yield u(!0);try{const T=yield{type:s,registrationNonce:t,redirectUri:c};return yield p({isRegistered:!0}),yield k(T.authorizeUrl),yield u(!1),Promise.resolve(T)}catch(T){return yield E(T),yield u(!1),Promise.reject(T)}}()}const D={setConnectionStatus:p,setConnectionStatusIsFetching:U,fetchConnectionStatus:a,fetchAuthorizationUrl:A,setSiteIsRegistering:u,setUserIsConnecting:x,setRegistrationError:E,clearRegistrationError:j,setAuthorizationUrl:k,registerSite:H,connectUser:o,disconnectUserSuccess:O,setConnectedPlugins:R,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(c=>r.ZP.fetchConnectedPlugins().then(T=>{t(R(T)),c(T)}))},setConnectionErrors:b};var z=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const w="jetpack-connection",G=e=>{let{registrationNonce:t,redirectUri:c}=e;return r.ZP.registerSite(t,c)},W=(0,z.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:c,redirectFunc:T,redirectUri:L}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((M,_e)=>{t(w).getAuthorizationUrl(L).then(K=>{const fe=T||(he=>window.location.assign(he)),$=new URL(K);c&&$.searchParams.set("from",encodeURIComponent(c));const X=$.toString();fe(X),M(X)}).catch(K=>{_e(K)})})}}),Q={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return r.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:G,CONNECT_USER:W};var V=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{...e,...t.connectionStatus};case m:return{...e,isUserConnected:!1}}return e},ee=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.connectedPlugins}return e},te=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.isFetching}return e},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return t.isRegistering}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.isConnecting}return e},oe=(e,t)=>{switch(t.type){case N:return!1;case y:return t.registrationError;default:return e}},re=(e,t)=>{switch(t.type){case g:return t.authorizationUrl;default:return e}},ie=(e,t)=>{switch(t.type){default:return e}},ce=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return t.connectionErrors}return e},ae=(0,V.UY)({connectionStatus:q,connectionStatusIsFetching:te,siteIsRegistering:ne,userIsConnecting:se,registrationError:oe,authorizationUrl:re,userConnectionData:ie,connectedPlugins:ee,connectionErrors:ce}),de={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var c=arguments.length,T=new Array(c>1?c-1:0),L=1;L<c;L++)T[L-1]=arguments[L];const M=(0,V.Ys)(w).hasFinishedResolution("getAuthorizationUrl",T);return t&&!M&&(0,V.WI)(w).finishResolution("getAuthorizationUrl",T),t},*fulfill(e){const t=yield D.fetchAuthorizationUrl(e);yield D.setAuthorizationUrl(t.authorizeUrl)}}}},ue={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getWpcomUser:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.wpcomUser},getBlogId:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.blogId}}};var le=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/defineProperty.js"),pe=n.n(le),ge=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");class F{static mayBeInit(t,c){F.store===null&&(F.store=(0,ge.Z)(t,c),(0,V.z2)(F.store))}}pe()(F,"store",null);const me=F,Y=window.JP_CONNECTION_INITIAL_STATE;Y||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),me.mayBeInit(w,{__experimentalUseThunks:!0,reducer:ae,actions:D,selectors:ue,resolvers:de,controls:Q,initialState:Y||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(Z,I,n)=>{n.d(I,{g:()=>g});var r=n("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),C=n("../../packages/videopress/src/client/state/index.js");function h(d){return d.replace(/([-_][a-z])/gi,m=>m.toUpperCase().replace("_",""))}function P(d){return d.indexOf("_")!==-1}function i(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const _=Object.assign({},d);for(const f in _)_.hasOwnProperty(f)&&P(f)&&(_[h(f)]=_[f],m&&delete _[f]);return _}const{paidFeatures:S={},siteProductData:y={},productData:N={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},g=()=>{const d=i(y.pricing_for_ui,!0),m=i(N.introductory_offer,!0),_={...i(N,!0),introductoryOffer:m},{purchases:f,isFetchingPurchases:v}=(0,r.Z)(a=>({purchases:a(C.tT).getPurchases(),isFetchingPurchases:a(C.tT).isFetchingPurchases()}),[]),l=f.map(a=>i(a,!0));function p(a){return l.some(u=>u.productSlug===a)}const U=["jetpack_videopress","jetpack_videopress_monthly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y"].some(a=>p(a));return{features:S,siteProduct:{...i({...y},!0),pricingForUi:d},product:_,productPrice:s,purchases:l,hasVideoPressPurchase:U,isFetchingPurchases:v}}}}]);})();
