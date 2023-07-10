"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(H,v,n)=>{var a,p,R;n.r(v),n.d(v,{Default:()=>l,__namedExportsOrder:()=>T,default:()=>y});var o=n("../components/components/pricing-table/index.tsx"),I=n("../components/components/product-price/index.tsx"),P=n("../components/components/button/index.tsx"),j=n("../connection/components/use-connection/index.jsx"),i=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),S=n("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),U=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),N=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=S.__,d=O=>{let{onRedirecting:C}=O;const{siteSuffix:x,adminUri:A,registrationNonce:k}=window.jetpackVideoPressInitialState,{siteProduct:b,productPrice:w}=(0,N.g)(),{yearly:r}=w,{handleRegisterSite:g,userIsConnecting:V}=(0,j.Z)({redirectUri:A,from:"jetpack-videopress",registrationNonce:k}),[Z,W]=(0,U.useState)(!1),{run:B,hasCheckoutStarted:M}=(0,i.Z)({siteSuffix:x,productSlug:r==null?void 0:r.slug,redirectUrl:A}),K=b.features.map(D=>({name:D}));return(0,s.jsxs)(o.ZP,{title:b.description,items:K,children:[(0,s.jsxs)(o.oK,{primary:!0,children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(I.Z,{offPrice:r!=null&&r.discount?r.salePriceByMonth:null,price:r.priceByMonth,promoLabel:r!=null&&r.discount?(0,S.gB)(m("%1$s%% off","jetpack-videopress-pkg"),r.discount):null,legend:m("/month, billed yearly","jetpack-videopress-pkg"),currency:r.currency}),(0,s.jsx)(P.Z,{onClick:()=>{C==null||C(),B()},isLoading:M,fullWidth:!0,disabled:Z||M||V,children:m("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0})]}),(0,s.jsxs)(o.oK,{children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(I.Z,{price:0,legend:"",currency:r.currency,hidePriceFraction:!0}),(0,s.jsx)(P.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{W(!0),g(),C==null||C()},isLoading:V||Z,disabled:V||Z||M,children:m("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:m("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!1}),(0,s.jsx)(o.kF,{isIncluded:!1})]})]})};d.displayName="PricingPage";const f=d;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(O){}var _=`/**
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
`,h={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const y={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:f},u=O=>(0,s.jsx)(f,{...O});u.displayName="Template";const l=u.bind({});l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:"args => <PricingSection {...args} />",...(R=(p=l.parameters)==null?void 0:p.docs)==null?void 0:R.source}}};const T=["Default"]},"../connection/components/use-connection/index.jsx":(H,v,n)=>{n.d(v,{Z:()=>U});var o=n("../api/index.jsx"),I=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),P=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),j=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=n("../connection/state/store.jsx");const S=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},U=function(){let{registrationNonce:N=S.registrationNonce,apiRoot:s=S.apiRoot,apiNonce:m=S.apiNonce,redirectUri:d,autoTrigger:f,from:_,skipUserConnection:h}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:y,connectUser:u,refreshConnectedPlugins:l}=(0,I.Z)(i.t),T=(0,P.Z)(g=>g(i.t).getRegistrationError()),{siteIsRegistering:a,userIsConnecting:p,userConnectionData:R,connectedPlugins:O,connectionErrors:C,isRegistered:x,isUserConnected:A,hasConnectedOwner:k,isOfflineMode:b}=(0,P.Z)(g=>({siteIsRegistering:g(i.t).getSiteIsRegistering(),userIsConnecting:g(i.t).getUserIsConnecting(),userConnectionData:g(i.t).getUserConnectionData(),connectedPlugins:g(i.t).getConnectedPlugins(),connectionErrors:g(i.t).getConnectionErrors(),isOfflineMode:g(i.t).getIsOfflineMode(),...g(i.t).getConnectionStatus()})),w=()=>{if(h){if(d)return window.location=d,Promise.resolve(d)}else return u({from:_,redirectUri:d});return Promise.resolve()},r=g=>(g&&g.preventDefault(),x?w():y({registrationNonce:N,redirectUri:d}).then(()=>w()));return(0,j.useEffect)(()=>{o.ZP.setApiRoot(s),o.ZP.setApiNonce(m)},[s,m]),(0,j.useEffect)(()=>{f&&!a&&!p&&r()},[]),{handleRegisterSite:r,handleConnectUser:w,refreshConnectedPlugins:l,isRegistered:x,isUserConnected:A,siteIsRegistering:a,userIsConnecting:p,registrationError:T,userConnectionData:R,hasConnectedOwner:k,connectedPlugins:O,connectionErrors:C,isOfflineMode:b}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(H,v,n)=>{n.d(v,{Z:()=>h});var o=n("../api/index.jsx");function I(y,u,l,T){const a=new URL("https://wordpress.com/checkout/"),p=new URL(`${a}${u}/${y}`);return p.searchParams.set("redirect_to",l),T||p.searchParams.set("unlinked","1"),p.searchParams.set("site",u),p.toString()}var P=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),j=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),i=n.n(j),S=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),U=n("../connection/components/use-connection/index.jsx"),N=n("../connection/state/store.jsx");const s=i()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:m,apiRoot:d,apiNonce:f,siteSuffix:_}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function h(){let{productSlug:y,redirectUrl:u,siteSuffix:l=_,siteProductAvailabilityHandler:T=null,from:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s("productSlug is %s",y),s("redirectUrl is %s",u),s("siteSuffix is %s",l),s("from is %s",a);const[p,R]=(0,S.useState)(!1),{registerSite:O}=(0,P.Z)(N.t),{isUserConnected:C,isRegistered:x,handleConnectUser:A}=(0,U.Z)({redirectUri:u,from:a}),k=I(y,l,u,C);s("checkoutProductUrl is %s",k),s("isUserConnected is %s",C);const b=()=>Promise.resolve(T&&T()).then(r=>{if(r)return s("handleAfterRegistration: Site has a product associated"),A();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",k),window.location.href=k}),w=r=>{if(r&&r.preventDefault(),R(!0),x)return b();O({registrationNonce:m,redirectUri:u}).then(b)};return(0,S.useEffect)(()=>{o.ZP.setApiRoot(d),o.ZP.setApiNonce(f)},[]),{run:w,isRegistered:x,hasCheckoutStarted:p}}},"../connection/state/store.jsx":(H,v,n)=>{n.d(v,{t:()=>D});var o=n("../api/index.jsx");const I="SET_CONNECTION_STATUS",P="SET_CONNECTION_STATUS_IS_FETCHING",j="FETCH_CONNECTION_STATUS",i="SET_SITE_IS_REGISTERING",S="SET_USER_IS_CONNECTING",U="SET_REGISTRATION_ERROR",N="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",m="SET_AUTHORIZATION_URL",d="CONNECT_USER",f="DISCONNECT_USER_SUCCESS",_="FETCH_AUTHORIZATION_URL",h="SET_CONNECTED_PLUGINS",y="REFRESH_CONNECTED_PLUGINS",u="SET_CONNECTION_ERRORS",l="SET_IS_OFFLINE_MODE",T=e=>({type:I,connectionStatus:e}),a=e=>({type:P,isFetching:e}),p=()=>({type:j}),R=e=>({type:i,isRegistering:e}),O=e=>({type:S,isConnecting:e}),C=()=>({type:f}),x=e=>({type:U,registrationError:e}),A=()=>({type:N}),k=e=>({type:m,authorizationUrl:e}),b=e=>({type:_,redirectUri:e}),w=e=>({type:h,connectedPlugins:e}),r=e=>({type:u,connectionErrors:e}),g=e=>({type:l,isOfflineMode:e});function V(){let{from:e,redirectFunc:t,redirectUri:c}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield O(!0),yield{type:d,from:e,redirectFunc:t,redirectUri:c}}()}function Z(e){let{registrationNonce:t,redirectUri:c}=e;return function*(){yield A(),yield R(!0);try{const E=yield{type:s,registrationNonce:t,redirectUri:c};return yield T({isRegistered:!0}),yield k(E.authorizeUrl),yield R(!1),Promise.resolve(E)}catch(E){return yield x(E),yield R(!1),Promise.reject(E)}}()}const B={setConnectionStatus:T,setConnectionStatusIsFetching:a,fetchConnectionStatus:p,fetchAuthorizationUrl:b,setSiteIsRegistering:R,setUserIsConnecting:O,setRegistrationError:x,clearRegistrationError:A,setAuthorizationUrl:k,registerSite:Z,connectUser:V,disconnectUserSuccess:C,setConnectedPlugins:w,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(c=>o.ZP.fetchConnectedPlugins().then(E=>{t(w(E)),c(E)}))},setConnectionErrors:r,setIsOfflineMode:g};var M=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const D="jetpack-connection",Q=e=>{let{registrationNonce:t,redirectUri:c}=e;return o.ZP.registerSite(t,c)},q=(0,M.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:c,redirectFunc:E,redirectUri:L}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((z,Te)=>{t(D).getAuthorizationUrl(L).then(G=>{const Ce=E||(Ie=>window.location.assign(Ie)),$=new URL(G);c&&$.searchParams.set("from",encodeURIComponent(c));const X=$.toString();Ce(X),z(X)}).catch(G=>{Te(G)})})}}),ee={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return o.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:Q,CONNECT_USER:q};var J=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const te=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{...e,...t.connectionStatus};case f:return{...e,isUserConnected:!1}}return e},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.connectedPlugins}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return t.isFetching}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return t.isRegistering}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.isConnecting}return e},ie=(e,t)=>{switch(t.type){case N:return!1;case U:return t.registrationError;default:return e}},ce=(e,t)=>{switch(t.type){case m:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.connectionErrors}return e},ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return t.isConnecting}return e},le=(0,J.UY)({connectionStatus:te,connectionStatusIsFetching:se,siteIsRegistering:oe,userIsConnecting:re,registrationError:ie,authorizationUrl:ce,userConnectionData:ae,connectedPlugins:ne,connectionErrors:de,isOfflineMode:ue});var pe=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ge=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const me={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var c=arguments.length,E=new Array(c>1?c-1:0),L=1;L<c;L++)E[L-1]=arguments[L];const z=(0,pe.Y)(D).hasFinishedResolution("getAuthorizationUrl",E);return t&&!z&&(0,ge.W)(D).finishResolution("getAuthorizationUrl",E),t},*fulfill(e){const t=yield B.fetchAuthorizationUrl(e);yield B.setAuthorizationUrl(t.authorizeUrl)}}}},fe={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.wpcomUser},getBlogId:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.blogId}}};var _e=n("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/defineProperty.js"),he=n.n(_e),Se=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");class F{static mayBeInit(t,c){F.store===null&&(F.store=(0,Se.Z)(t,c),(0,J.z2)(F.store))}}he()(F,"store",null);const Ee=F,Y=window.JP_CONNECTION_INITIAL_STATE;Y||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ee.mayBeInit(D,{__experimentalUseThunks:!0,reducer:le,actions:B,selectors:fe,resolvers:me,controls:ee,initialState:Y||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(H,v,n)=>{n.d(v,{g:()=>m});var o=n("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),I=n("../../packages/videopress/src/client/state/index.js");function P(d){return d.replace(/([-_][a-z])/gi,f=>f.toUpperCase().replace("_",""))}function j(d){return d.indexOf("_")!==-1}function i(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const _=Object.assign({},d);for(const h in _)_.hasOwnProperty(h)&&j(h)&&(_[P(h)]=_[h],f&&delete _[h]);return _}const{paidFeatures:S={},siteProductData:U={},productData:N={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},m=()=>{const d=i(U.pricing_for_ui,!0),f=i(N.introductory_offer,!0),_={...i(N,!0),introductoryOffer:f},{purchases:h,isFetchingPurchases:y}=(0,o.Z)(a=>({purchases:a(I.tT).getPurchases(),isFetchingPurchases:a(I.tT).isFetchingPurchases()}),[]),u=h.map(a=>i(a,!0));function l(a){return u.some(p=>p.productSlug===a)}const T=["jetpack_videopress","jetpack_videopress_monthly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y"].some(a=>l(a));return{features:S,siteProduct:{...i({...U},!0),pricingForUi:d},product:_,productPrice:s,purchases:u,hasVideoPressPurchase:T,isFetchingPurchases:y}}}}]);})();
