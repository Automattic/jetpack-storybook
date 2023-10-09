"use strict";(()=>{var Ue=Object.defineProperty;var ye=(j,u,n)=>u in j?Ue(j,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):j[u]=n;var Q=(j,u,n)=>(ye(j,typeof u!="symbol"?u+"":u,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(j,u,n)=>{var a,g,O;n.r(u),n.d(u,{Default:()=>p,__namedExportsOrder:()=>C,default:()=>R});var o=n("../components/components/pricing-table/index.tsx"),P=n("../components/components/product-price/index.tsx"),U=n("../components/components/button/index.tsx"),x=n("../connection/components/use-connection/index.jsx"),i=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),E=n("../../../node_modules/.pnpm/@wordpress+i18n@4.43.0/node_modules/@wordpress/i18n/build-module/index.js"),y=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),N=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=E.__,d=v=>{let{onRedirecting:I}=v;const{siteSuffix:k,adminUri:b,registrationNonce:w}=window.jetpackVideoPressInitialState,{siteProduct:D,productPrice:A}=(0,N.g)(),{yearly:r}=A,{handleRegisterSite:m,userIsConnecting:V}=(0,x.Z)({redirectUri:b,from:"jetpack-videopress",registrationNonce:w}),[Z,K]=(0,y.useState)(!1),{run:B,hasCheckoutStarted:M}=(0,i.Z)({siteSuffix:k,productSlug:r==null?void 0:r.slug,redirectUrl:b}),J=D.features.map(F=>({name:F}));return(0,s.jsxs)(o.ZP,{title:D.description,items:J,children:[(0,s.jsxs)(o.oK,{primary:!0,children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(P.Z,{offPrice:r!=null&&r.discount?r.salePriceByMonth:null,price:r.priceByMonth,promoLabel:r!=null&&r.discount?(0,E.gB)(f("%1$s%% off","jetpack-videopress-pkg"),r.discount):null,legend:f("/month, billed yearly","jetpack-videopress-pkg"),currency:r.currency}),(0,s.jsx)(U.Z,{onClick:()=>{I==null||I(),B()},isLoading:M,fullWidth:!0,disabled:Z||M||V,children:f("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0})]}),(0,s.jsxs)(o.oK,{children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(P.Z,{price:0,legend:"",currency:r.currency,hidePriceFraction:!0}),(0,s.jsx)(U.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{K(!0),m(),I==null||I()},isLoading:V||Z,disabled:V||Z||M,children:f("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:f("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!1}),(0,s.jsx)(o.kF,{isIncluded:!1})]})]})};d.displayName="PricingPage";const _=d;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(v){}var h=`/**
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
`,S={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const R={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:_},l=v=>(0,s.jsx)(_,{...v});l.displayName="Template";const p=l.bind({});p.parameters={...p.parameters,docs:{...(a=p.parameters)==null?void 0:a.docs,source:{originalSource:"args => <PricingSection {...args} />",...(O=(g=p.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};const C=["Default"]},"../connection/components/use-connection/index.jsx":(j,u,n)=>{n.d(u,{Z:()=>y});var o=n("../api/index.jsx"),P=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),U=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),x=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=n("../connection/state/store.jsx");const E=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},y=function(){let{registrationNonce:N=E.registrationNonce,apiRoot:s=E.apiRoot,apiNonce:f=E.apiNonce,redirectUri:d,autoTrigger:_,from:h,skipUserConnection:S}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:R,connectUser:l,refreshConnectedPlugins:p}=(0,P.Z)(i.t),C=(0,U.Z)(m=>m(i.t).getRegistrationError()),{siteIsRegistering:a,userIsConnecting:g,userConnectionData:O,connectedPlugins:v,connectionErrors:I,isRegistered:k,isUserConnected:b,hasConnectedOwner:w,isOfflineMode:D}=(0,U.Z)(m=>({siteIsRegistering:m(i.t).getSiteIsRegistering(),userIsConnecting:m(i.t).getUserIsConnecting(),userConnectionData:m(i.t).getUserConnectionData(),connectedPlugins:m(i.t).getConnectedPlugins(),connectionErrors:m(i.t).getConnectionErrors(),isOfflineMode:m(i.t).getIsOfflineMode(),...m(i.t).getConnectionStatus()})),A=()=>{if(S){if(d)return window.location=d,Promise.resolve(d)}else return l({from:h,redirectUri:d});return Promise.resolve()},r=m=>(m&&m.preventDefault(),k?A():R({registrationNonce:N,redirectUri:d}).then(()=>A()));return(0,x.useEffect)(()=>{o.ZP.setApiRoot(s),o.ZP.setApiNonce(f)},[s,f]),(0,x.useEffect)(()=>{_&&!a&&!g&&r()},[]),{handleRegisterSite:r,handleConnectUser:A,refreshConnectedPlugins:p,isRegistered:k,isUserConnected:b,siteIsRegistering:a,userIsConnecting:g,registrationError:C,userConnectionData:O,hasConnectedOwner:w,connectedPlugins:v,connectionErrors:I,isOfflineMode:D}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(j,u,n)=>{n.d(u,{Z:()=>S});var o=n("../api/index.jsx");function P(R,l,p,C){const a=new URL("https://wordpress.com/checkout/"),g=new URL(`${a}${l}/${R}`);return g.searchParams.set("redirect_to",p),C||g.searchParams.set("unlinked","1"),g.searchParams.set("site",l),g.toString()}var U=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),x=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),i=n.n(x),E=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=n("../connection/components/use-connection/index.jsx"),N=n("../connection/state/store.jsx");const s=i()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:f,apiRoot:d,apiNonce:_,siteSuffix:h}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function S(){let{productSlug:R,redirectUrl:l,siteSuffix:p=h,siteProductAvailabilityHandler:C=null,from:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s("productSlug is %s",R),s("redirectUrl is %s",l),s("siteSuffix is %s",p),s("from is %s",a);const[g,O]=(0,E.useState)(!1),{registerSite:v}=(0,U.Z)(N.t),{isUserConnected:I,isRegistered:k,handleConnectUser:b}=(0,y.Z)({redirectUri:l,from:a}),w=P(R,p,l,I);s("checkoutProductUrl is %s",w),s("isUserConnected is %s",I);const D=()=>Promise.resolve(C&&C()).then(r=>{if(r)return s("handleAfterRegistration: Site has a product associated"),b();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",w),window.location.href=w}),A=r=>{if(r&&r.preventDefault(),O(!0),k)return D();v({registrationNonce:f,redirectUri:l}).then(D)};return(0,E.useEffect)(()=>{o.ZP.setApiRoot(d),o.ZP.setApiNonce(_)},[]),{run:A,isRegistered:k,hasCheckoutStarted:g}}},"../connection/state/store.jsx":(j,u,n)=>{n.d(u,{t:()=>F});var o=n("../api/index.jsx");const P="SET_CONNECTION_STATUS",U="SET_CONNECTION_STATUS_IS_FETCHING",x="FETCH_CONNECTION_STATUS",i="SET_SITE_IS_REGISTERING",E="SET_USER_IS_CONNECTING",y="SET_REGISTRATION_ERROR",N="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",f="SET_AUTHORIZATION_URL",d="CONNECT_USER",_="DISCONNECT_USER_SUCCESS",h="FETCH_AUTHORIZATION_URL",S="SET_CONNECTED_PLUGINS",R="REFRESH_CONNECTED_PLUGINS",l="SET_CONNECTION_ERRORS",p="SET_IS_OFFLINE_MODE",C=e=>({type:P,connectionStatus:e}),a=e=>({type:U,isFetching:e}),g=()=>({type:x}),O=e=>({type:i,isRegistering:e}),v=e=>({type:E,isConnecting:e}),I=()=>({type:_}),k=e=>({type:y,registrationError:e}),b=()=>({type:N}),w=e=>({type:f,authorizationUrl:e}),D=e=>({type:h,redirectUri:e}),A=e=>({type:S,connectedPlugins:e}),r=e=>({type:l,connectionErrors:e}),m=e=>({type:p,isOfflineMode:e});function V(){let{from:e,redirectFunc:t,redirectUri:c}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield v(!0),yield{type:d,from:e,redirectFunc:t,redirectUri:c}}()}function Z(e){let{registrationNonce:t,redirectUri:c}=e;return function*(){yield b(),yield O(!0);try{const T=yield{type:s,registrationNonce:t,redirectUri:c};return yield C({isRegistered:!0}),yield w(T.authorizeUrl),yield O(!1),Promise.resolve(T)}catch(T){return yield k(T),yield O(!1),Promise.reject(T)}}()}const B={setConnectionStatus:C,setConnectionStatusIsFetching:a,fetchConnectionStatus:g,fetchAuthorizationUrl:D,setSiteIsRegistering:O,setUserIsConnecting:v,setRegistrationError:k,clearRegistrationError:b,setAuthorizationUrl:w,registerSite:Z,connectUser:V,disconnectUserSuccess:I,setConnectedPlugins:A,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(c=>o.ZP.fetchConnectedPlugins().then(T=>{t(A(T)),c(T)}))},setConnectionErrors:r,setIsOfflineMode:m};var M=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const F="jetpack-connection",q=e=>{let{registrationNonce:t,redirectUri:c}=e;return o.ZP.registerSite(t,c)},ee=(0,M.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:c,redirectFunc:T,redirectUri:L}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((G,Ce)=>{t(F).getAuthorizationUrl(L).then(W=>{const Ie=T||(Pe=>window.location.assign(Pe)),$=new URL(W);c&&$.searchParams.set("from",encodeURIComponent(c));const X=$.toString();Ie(X),G(X)}).catch(W=>{Ce(W)})})}}),te={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return o.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:q,CONNECT_USER:ee};var ne=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/combine-reducers.js");const se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{...e,...t.connectionStatus};case _:return{...e,isUserConnected:!1}}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.connectedPlugins}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return t.isFetching}return e},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return t.isRegistering}return e},ce=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.isConnecting}return e},ae=(e,t)=>{switch(t.type){case N:return!1;case y:return t.registrationError;default:return e}},de=(e,t)=>{switch(t.type){case f:return t.authorizationUrl;default:return e}},ue=(e,t)=>{switch(t.type){default:return e}},le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return t.connectionErrors}return e},pe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.isConnecting}return e},ge=(0,ne.U)({connectionStatus:se,connectionStatusIsFetching:re,siteIsRegistering:ie,userIsConnecting:ce,registrationError:ae,authorizationUrl:de,userConnectionData:ue,connectedPlugins:oe,connectionErrors:le,isOfflineMode:pe});var me=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),fe=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const _e={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var c=arguments.length,T=new Array(c>1?c-1:0),L=1;L<c;L++)T[L-1]=arguments[L];const G=(0,me.Y)(F).hasFinishedResolution("getAuthorizationUrl",T);return t&&!G&&(0,fe.W)(F).finishResolution("getAuthorizationUrl",T),t},*fulfill(e){const t=yield B.fetchAuthorizationUrl(e);yield B.setAuthorizationUrl(t.authorizeUrl)}}}},he={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.wpcomUser},getBlogId:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.blogId}}};var Se=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js"),Ee=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const H=class{static mayBeInit(t,c){H.store===null&&(H.store=(0,Se.Z)(t,c),(0,Ee.z2)(H.store))}};let z=H;Q(z,"store",null);const Te=z,Y=window.JP_CONNECTION_INITIAL_STATE;Y||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Te.mayBeInit(F,{__experimentalUseThunks:!0,reducer:ge,actions:B,selectors:he,resolvers:_e,controls:te,initialState:Y||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(j,u,n)=>{n.d(u,{g:()=>f});var o=n("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),P=n("../../packages/videopress/src/client/state/index.js");function U(d){return d.replace(/([-_][a-z])/gi,_=>_.toUpperCase().replace("_",""))}function x(d){return d.indexOf("_")!==-1}function i(d){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const h=Object.assign({},d);for(const S in h)h.hasOwnProperty(S)&&x(S)&&(h[U(S)]=h[S],_&&delete h[S]);return h}const{paidFeatures:E={},siteProductData:y={},productData:N={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},f=()=>{const d=i(y.pricing_for_ui,!0),_=i(N.introductory_offer,!0),h={...i(N,!0),introductoryOffer:_},{purchases:S,isFetchingPurchases:R}=(0,o.Z)(a=>({purchases:a(P.tT).getPurchases(),isFetchingPurchases:a(P.tT).isFetchingPurchases()}),[]),l=S.map(a=>i(a,!0));function p(a){return l.some(g=>g.productSlug===a)}const C=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y"].some(a=>p(a));return{features:E,siteProduct:{...i({...y},!0),pricingForUi:d},product:h,productPrice:s,purchases:l,hasVideoPressPurchase:C,isFetchingPurchases:R}}}}]);})();
