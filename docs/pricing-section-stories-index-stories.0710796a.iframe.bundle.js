"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(Z,U,n)=>{n.d(U,{Z:()=>S});var o=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const S=I=>{const{dispatch:r}=(0,o.Z)();return I===void 0?r:r(I)}},"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(Z,U,n)=>{var a,p,v;n.r(U),n.d(U,{Default:()=>l,__namedExportsOrder:()=>P,default:()=>O});var o=n("../components/components/pricing-table/index.tsx"),C=n("../components/components/product-price/index.tsx"),S=n("../components/components/button/index.tsx"),I=n("../connection/components/use-connection/index.jsx"),r=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),E=n("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),R=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),N=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=E.__,d=j=>{let{onRedirecting:y}=j;const{siteSuffix:x,adminUri:w,registrationNonce:k}=window.jetpackVideoPressInitialState,{siteProduct:b,productPrice:A}=(0,N.g)(),{yearly:i}=A,{handleRegisterSite:g,userIsConnecting:B}=(0,I.Z)({redirectUri:w,from:"jetpack-videopress",registrationNonce:k}),[V,K]=(0,R.useState)(!1),{run:M,hasCheckoutStarted:H}=(0,r.Z)({siteSuffix:x,productSlug:i==null?void 0:i.slug,redirectUrl:w}),J=b.features.map(D=>({name:D}));return(0,s.jsxs)(o.ZP,{title:b.description,items:J,children:[(0,s.jsxs)(o.oK,{primary:!0,children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(C.Z,{offPrice:i!=null&&i.discount?i.salePriceByMonth:null,price:i.priceByMonth,promoLabel:i!=null&&i.discount?(0,E.gB)(m("%1$s%% off","jetpack-videopress-pkg"),i.discount):null,legend:m("/month, billed yearly","jetpack-videopress-pkg"),currency:i.currency}),(0,s.jsx)(S.Z,{onClick:()=>{y==null||y(),M()},isLoading:H,fullWidth:!0,disabled:V||H||B,children:m("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0})]}),(0,s.jsxs)(o.oK,{children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(C.Z,{price:0,legend:"",currency:i.currency,hidePriceFraction:!0}),(0,s.jsx)(S.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{K(!0),g(),y==null||y()},isLoading:B||V,disabled:B||V||H,children:m("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:m("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!1}),(0,s.jsx)(o.kF,{isIncluded:!1})]})]})};d.displayName="PricingPage";const f=d;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(j){}var _=`/**
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
`,h={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const O={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:f},u=j=>(0,s.jsx)(f,{...j});u.displayName="Template";const l=u.bind({});l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:"args => <PricingSection {...args} />",...(v=(p=l.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const P=["Default"]},"../connection/components/use-connection/index.jsx":(Z,U,n)=>{n.d(U,{Z:()=>R});var o=n("../api/index.jsx"),C=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),S=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),I=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../connection/state/store.jsx");const E=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},R=function(){let{registrationNonce:N=E.registrationNonce,apiRoot:s=E.apiRoot,apiNonce:m=E.apiNonce,redirectUri:d,autoTrigger:f,from:_,skipUserConnection:h}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:O,connectUser:u,refreshConnectedPlugins:l}=(0,C.Z)(r.t),P=(0,S.Z)(g=>g(r.t).getRegistrationError()),{siteIsRegistering:a,userIsConnecting:p,userConnectionData:v,connectedPlugins:j,connectionErrors:y,isRegistered:x,isUserConnected:w,hasConnectedOwner:k,isOfflineMode:b}=(0,S.Z)(g=>({siteIsRegistering:g(r.t).getSiteIsRegistering(),userIsConnecting:g(r.t).getUserIsConnecting(),userConnectionData:g(r.t).getUserConnectionData(),connectedPlugins:g(r.t).getConnectedPlugins(),connectionErrors:g(r.t).getConnectionErrors(),isOfflineMode:g(r.t).getIsOfflineMode(),...g(r.t).getConnectionStatus()})),A=()=>{if(h){if(d)return window.location=d,Promise.resolve(d)}else return u({from:_,redirectUri:d});return Promise.resolve()},i=g=>(g&&g.preventDefault(),x?A():O({registrationNonce:N,redirectUri:d}).then(()=>A()));return(0,I.useEffect)(()=>{o.ZP.setApiRoot(s),o.ZP.setApiNonce(m)},[s,m]),(0,I.useEffect)(()=>{f&&!a&&!p&&i()},[]),{handleRegisterSite:i,handleConnectUser:A,refreshConnectedPlugins:l,isRegistered:x,isUserConnected:w,siteIsRegistering:a,userIsConnecting:p,registrationError:P,userConnectionData:v,hasConnectedOwner:k,connectedPlugins:j,connectionErrors:y,isOfflineMode:b}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(Z,U,n)=>{n.d(U,{Z:()=>h});var o=n("../api/index.jsx");function C(O,u,l,P){const a=new URL("https://wordpress.com/checkout/"),p=new URL(`${a}${u}/${O}`);return p.searchParams.set("redirect_to",l),P||p.searchParams.set("unlinked","1"),p.searchParams.set("site",u),p.toString()}var S=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),I=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),r=n.n(I),E=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),R=n("../connection/components/use-connection/index.jsx"),N=n("../connection/state/store.jsx");const s=r()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:m,apiRoot:d,apiNonce:f,siteSuffix:_}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function h(){let{productSlug:O,redirectUrl:u,siteSuffix:l=_,siteProductAvailabilityHandler:P=null,from:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s("productSlug is %s",O),s("redirectUrl is %s",u),s("siteSuffix is %s",l),s("from is %s",a);const[p,v]=(0,E.useState)(!1),{registerSite:j}=(0,S.Z)(N.t),{isUserConnected:y,isRegistered:x,handleConnectUser:w}=(0,R.Z)({redirectUri:u,from:a}),k=C(O,l,u,y);s("checkoutProductUrl is %s",k),s("isUserConnected is %s",y);const b=()=>Promise.resolve(P&&P()).then(i=>{if(i)return s("handleAfterRegistration: Site has a product associated"),w();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",k),window.location.href=k}),A=i=>{if(i&&i.preventDefault(),v(!0),x)return b();j({registrationNonce:m,redirectUri:u}).then(b)};return(0,E.useEffect)(()=>{o.ZP.setApiRoot(d),o.ZP.setApiNonce(f)},[]),{run:A,isRegistered:x,hasCheckoutStarted:p}}},"../connection/state/store.jsx":(Z,U,n)=>{n.d(U,{t:()=>D});var o=n("../api/index.jsx");const C="SET_CONNECTION_STATUS",S="SET_CONNECTION_STATUS_IS_FETCHING",I="FETCH_CONNECTION_STATUS",r="SET_SITE_IS_REGISTERING",E="SET_USER_IS_CONNECTING",R="SET_REGISTRATION_ERROR",N="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",m="SET_AUTHORIZATION_URL",d="CONNECT_USER",f="DISCONNECT_USER_SUCCESS",_="FETCH_AUTHORIZATION_URL",h="SET_CONNECTED_PLUGINS",O="REFRESH_CONNECTED_PLUGINS",u="SET_CONNECTION_ERRORS",l="SET_IS_OFFLINE_MODE",P=e=>({type:C,connectionStatus:e}),a=e=>({type:S,isFetching:e}),p=()=>({type:I}),v=e=>({type:r,isRegistering:e}),j=e=>({type:E,isConnecting:e}),y=()=>({type:f}),x=e=>({type:R,registrationError:e}),w=()=>({type:N}),k=e=>({type:m,authorizationUrl:e}),b=e=>({type:_,redirectUri:e}),A=e=>({type:h,connectedPlugins:e}),i=e=>({type:u,connectionErrors:e}),g=e=>({type:l,isOfflineMode:e});function B(){let{from:e,redirectFunc:t,redirectUri:c}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield j(!0),yield{type:d,from:e,redirectFunc:t,redirectUri:c}}()}function V(e){let{registrationNonce:t,redirectUri:c}=e;return function*(){yield w(),yield v(!0);try{const T=yield{type:s,registrationNonce:t,redirectUri:c};return yield P({isRegistered:!0}),yield k(T.authorizeUrl),yield v(!1),Promise.resolve(T)}catch(T){return yield x(T),yield v(!1),Promise.reject(T)}}()}const M={setConnectionStatus:P,setConnectionStatusIsFetching:a,fetchConnectionStatus:p,fetchAuthorizationUrl:b,setSiteIsRegistering:v,setUserIsConnecting:j,setRegistrationError:x,clearRegistrationError:w,setAuthorizationUrl:k,registerSite:V,connectUser:B,disconnectUserSuccess:y,setConnectedPlugins:A,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(c=>o.ZP.fetchConnectedPlugins().then(T=>{t(A(T)),c(T)}))},setConnectionErrors:i,setIsOfflineMode:g};var H=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const D="jetpack-connection",Q=e=>{let{registrationNonce:t,redirectUri:c}=e;return o.ZP.registerSite(t,c)},q=(0,H.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:c,redirectFunc:T,redirectUri:L}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((G,Se)=>{t(D).getAuthorizationUrl(L).then(W=>{const Ee=T||(Te=>window.location.assign(Te)),$=new URL(W);c&&$.searchParams.set("from",encodeURIComponent(c));const X=$.toString();Ee(X),G(X)}).catch(W=>{Se(W)})})}}),ee={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return o.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:Q,CONNECT_USER:q};var z=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const te=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{...e,...t.connectionStatus};case f:return{...e,isUserConnected:!1}}return e},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.connectedPlugins}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.isFetching}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return t.isRegistering}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.isConnecting}return e},ie=(e,t)=>{switch(t.type){case N:return!1;case R:return t.registrationError;default:return e}},ce=(e,t)=>{switch(t.type){case m:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.connectionErrors}return e},ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return t.isConnecting}return e},le=(0,z.UY)({connectionStatus:te,connectionStatusIsFetching:se,siteIsRegistering:oe,userIsConnecting:re,registrationError:ie,authorizationUrl:ce,userConnectionData:ae,connectedPlugins:ne,connectionErrors:de,isOfflineMode:ue}),pe={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var c=arguments.length,T=new Array(c>1?c-1:0),L=1;L<c;L++)T[L-1]=arguments[L];const G=(0,z.Ys)(D).hasFinishedResolution("getAuthorizationUrl",T);return t&&!G&&(0,z.WI)(D).finishResolution("getAuthorizationUrl",T),t},*fulfill(e){const t=yield M.fetchAuthorizationUrl(e);yield M.setAuthorizationUrl(t.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.wpcomUser},getBlogId:e=>{var t,c;return(c=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:c.blogId}}};var me=n("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/defineProperty.js"),fe=n.n(me),_e=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");class F{static mayBeInit(t,c){F.store===null&&(F.store=(0,_e.Z)(t,c),(0,z.z2)(F.store))}}fe()(F,"store",null);const he=F,Y=window.JP_CONNECTION_INITIAL_STATE;Y||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),he.mayBeInit(D,{__experimentalUseThunks:!0,reducer:le,actions:M,selectors:ge,resolvers:pe,controls:ee,initialState:Y||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(Z,U,n)=>{n.d(U,{g:()=>m});var o=n("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),C=n("../../packages/videopress/src/client/state/index.js");function S(d){return d.replace(/([-_][a-z])/gi,f=>f.toUpperCase().replace("_",""))}function I(d){return d.indexOf("_")!==-1}function r(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const _=Object.assign({},d);for(const h in _)_.hasOwnProperty(h)&&I(h)&&(_[S(h)]=_[h],f&&delete _[h]);return _}const{paidFeatures:E={},siteProductData:R={},productData:N={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},m=()=>{const d=r(R.pricing_for_ui,!0),f=r(N.introductory_offer,!0),_={...r(N,!0),introductoryOffer:f},{purchases:h,isFetchingPurchases:O}=(0,o.Z)(a=>({purchases:a(C.tT).getPurchases(),isFetchingPurchases:a(C.tT).isFetchingPurchases()}),[]),u=h.map(a=>r(a,!0));function l(a){return u.some(p=>p.productSlug===a)}const P=["jetpack_videopress","jetpack_videopress_monthly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y"].some(a=>l(a));return{features:E,siteProduct:{...r({...R},!0),pricingForUi:d},product:_,productPrice:s,purchases:u,hasVideoPressPurchase:P,isFetchingPurchases:O}}}}]);})();
