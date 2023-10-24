"use strict";(()=>{var ye=Object.defineProperty;var Pe=(k,l,n)=>l in k?ye(k,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):k[l]=n;var q=(k,l,n)=>(Pe(k,typeof l!="symbol"?l+"":l,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(k,l,n)=>{var i,R,T;n.r(l),n.d(l,{Default:()=>p,__namedExportsOrder:()=>m,default:()=>F});var o=n("../components/components/pricing-table/index.tsx"),N=n("../components/components/product-price/index.tsx"),U=n("../components/components/button/index.tsx"),A=n("../connection/components/use-connection/index.jsx"),r=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),f=n("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),w=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=f.__,u=O=>{let{onRedirecting:C}=O;const{siteSuffix:b,adminUri:D,registrationNonce:L}=window.jetpackVideoPressInitialState,{siteProduct:x,productPrice:I}=(0,j.g)(),{yearly:d}=I,{handleRegisterSite:c,userIsConnecting:V}=(0,A.Z)({redirectUri:D,from:"jetpack-videopress",registrationNonce:L}),[B,H]=(0,w.useState)(!1),{run:v,hasCheckoutStarted:Z}=(0,r.Z)({siteSuffix:b,productSlug:d==null?void 0:d.slug,redirectUrl:D}),G=x.features.map(g=>({name:g}));return(0,s.jsxs)(o.ZP,{title:x.description,items:G,children:[(0,s.jsxs)(o.oK,{primary:!0,children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(N.Z,{offPrice:d!=null&&d.discount?d.salePriceByMonth:null,price:d.priceByMonth,promoLabel:d!=null&&d.discount?(0,f.gB)(_("%1$s%% off","jetpack-videopress-pkg"),d.discount):null,legend:_("/month, billed yearly","jetpack-videopress-pkg"),currency:d.currency}),(0,s.jsx)(U.Z,{onClick:()=>{C==null||C(),v()},isLoading:Z,fullWidth:!0,disabled:B||Z||V,children:_("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0})]}),(0,s.jsxs)(o.oK,{children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(N.Z,{price:0,legend:"",currency:d.currency,hidePriceFraction:!0}),(0,s.jsx)(U.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{H(!0),c(),C==null||C()},isLoading:V||B,disabled:V||B||Z,children:_("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:_("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!1}),(0,s.jsx)(o.kF,{isIncluded:!1})]})]})};u.displayName="PricingPage";const h=u;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(O){}var S=`/**
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
`,E={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const F={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:h},P=O=>(0,s.jsx)(h,{...O});P.displayName="Template";const p=P.bind({});p.parameters={...p.parameters,docs:{...(i=p.parameters)==null?void 0:i.docs,source:{originalSource:"args => <PricingSection {...args} />",...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const m=["Default"]},"../connection/components/use-connection/index.jsx":(k,l,n)=>{n.d(l,{Z:()=>w});var o=n("../api/index.jsx"),N=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),U=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),A=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../connection/state/store.jsx");const f=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},w=function(){let{registrationNonce:j=f.registrationNonce,apiRoot:s=f.apiRoot,apiNonce:_=f.apiNonce,redirectUri:u,autoTrigger:h,from:S,skipUserConnection:E}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:F,connectUser:P,refreshConnectedPlugins:p}=(0,N.Z)(r.t),m=(0,U.Z)(c=>c(r.t).getRegistrationError()),{siteIsRegistering:i,userIsConnecting:R,userConnectionData:T,connectedPlugins:O,connectionErrors:C,isRegistered:b,isUserConnected:D,hasConnectedOwner:L,isOfflineMode:x}=(0,U.Z)(c=>({siteIsRegistering:c(r.t).getSiteIsRegistering(),userIsConnecting:c(r.t).getUserIsConnecting(),userConnectionData:c(r.t).getUserConnectionData(),connectedPlugins:c(r.t).getConnectedPlugins(),connectionErrors:c(r.t).getConnectionErrors(),isOfflineMode:c(r.t).getIsOfflineMode(),...c(r.t).getConnectionStatus()})),I=()=>{if(E){if(u)return window.location=u,Promise.resolve(u)}else return P({from:S,redirectUri:u});return Promise.resolve()},d=c=>(c&&c.preventDefault(),b?I():F({registrationNonce:j,redirectUri:u}).then(()=>I()));return(0,A.useEffect)(()=>{o.ZP.setApiRoot(s),o.ZP.setApiNonce(_)},[s,_]),(0,A.useEffect)(()=>{h&&!i&&!R&&d()},[]),{handleRegisterSite:d,handleConnectUser:I,refreshConnectedPlugins:p,isRegistered:b,isUserConnected:D,siteIsRegistering:i,userIsConnecting:R,registrationError:m,userConnectionData:T,hasConnectedOwner:L,connectedPlugins:O,connectionErrors:C,isOfflineMode:x}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(k,l,n)=>{var P;n.d(l,{Z:()=>F});var o=n("../api/index.jsx");function N(){var m;switch(typeof window!="undefined"&&((m=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:m.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var U=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),A=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),r=n.n(A),f=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),w=n("../connection/components/use-connection/index.jsx"),j=n("../connection/state/store.jsx");const s=r()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:_,apiRoot:u,apiNonce:h,siteSuffix:S}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},E=typeof window!="undefined"?(P=window==null?void 0:window.myJetpackInitialState)==null?void 0:P.adminUrl:null;function F(){let{productSlug:p,redirectUrl:m,siteSuffix:i=S,adminUrl:R=E,connectAfterCheckout:T=!1,siteProductAvailabilityHandler:O=null,from:C}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s("productSlug is %s",p),s("redirectUrl is %s",m),s("siteSuffix is %s",i),s("from is %s",C);const[b,D]=(0,f.useState)(!1),{registerSite:L}=(0,U.Z)(j.t),{isUserConnected:x,isRegistered:I,handleConnectUser:d}=(0,w.Z)({redirectUri:m,from:C}),c=(0,f.useMemo)(()=>{const v=N(),Z=(!I||!x)&&T,G=Z?"checkout/jetpack/":`checkout/${i}/`,g=new URL(`${v}${G}${p}`);return Z?(g.searchParams.set("connect_after_checkout",!0),g.searchParams.set("admin_url",R),g.searchParams.set("from_site_slug",i)):g.searchParams.set("site",i),g.searchParams.set("source",C),g.searchParams.set("redirect_to",m),x||g.searchParams.set("unlinked","1"),g},[T,I,i,p,R,C,m,x]);s("isRegistered is %s",I),s("isUserConnected is %s",x),s("connectAfterCheckout is %s",T),s("checkoutUrl is %s",c);const V=()=>Promise.resolve(O&&O()).then(v=>{if(v)return s("handleAfterRegistration: Site has a product associated"),d();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",c),window.location.href=c}),B=()=>{s("Redirecting to connectAfterCheckout flow: %s",c),window.location.href=c},H=v=>{if(v&&v.preventDefault(),D(!0),T)return B();if(I)return V();L({registrationNonce:_,redirectUri:m}).then(V)};return(0,f.useEffect)(()=>{o.ZP.setApiRoot(u),o.ZP.setApiNonce(h)},[]),{run:H,isRegistered:I,hasCheckoutStarted:b}}},"../connection/state/store.jsx":(k,l,n)=>{n.d(l,{t:()=>g});var o=n("../api/index.jsx");const N="SET_CONNECTION_STATUS",U="SET_CONNECTION_STATUS_IS_FETCHING",A="FETCH_CONNECTION_STATUS",r="SET_SITE_IS_REGISTERING",f="SET_USER_IS_CONNECTING",w="SET_REGISTRATION_ERROR",j="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",_="SET_AUTHORIZATION_URL",u="CONNECT_USER",h="DISCONNECT_USER_SUCCESS",S="FETCH_AUTHORIZATION_URL",E="SET_CONNECTED_PLUGINS",F="REFRESH_CONNECTED_PLUGINS",P="SET_CONNECTION_ERRORS",p="SET_IS_OFFLINE_MODE",m=e=>({type:N,connectionStatus:e}),i=e=>({type:U,isFetching:e}),R=()=>({type:A}),T=e=>({type:r,isRegistering:e}),O=e=>({type:f,isConnecting:e}),C=()=>({type:h}),b=e=>({type:w,registrationError:e}),D=()=>({type:j}),L=e=>({type:_,authorizationUrl:e}),x=e=>({type:S,redirectUri:e}),I=e=>({type:E,connectedPlugins:e}),d=e=>({type:P,connectionErrors:e}),c=e=>({type:p,isOfflineMode:e});function V(){let{from:e,redirectFunc:t,redirectUri:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield O(!0),yield{type:u,from:e,redirectFunc:t,redirectUri:a}}()}function B(e){let{registrationNonce:t,redirectUri:a}=e;return function*(){yield D(),yield T(!0);try{const y=yield{type:s,registrationNonce:t,redirectUri:a};return yield m({isRegistered:!0}),yield L(y.authorizeUrl),yield T(!1),Promise.resolve(y)}catch(y){return yield b(y),yield T(!1),Promise.reject(y)}}()}const v={setConnectionStatus:m,setConnectionStatusIsFetching:i,fetchConnectionStatus:R,fetchAuthorizationUrl:x,setSiteIsRegistering:T,setUserIsConnecting:O,setRegistrationError:b,clearRegistrationError:D,setAuthorizationUrl:L,registerSite:B,connectUser:V,disconnectUserSuccess:C,setConnectedPlugins:I,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(a=>o.ZP.fetchConnectedPlugins().then(y=>{t(I(y)),a(y)}))},setConnectionErrors:d,setIsOfflineMode:c};var Z=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const g="jetpack-connection",ee=e=>{let{registrationNonce:t,redirectUri:a}=e;return o.ZP.registerSite(t,a)},te=(0,Z.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:a,redirectFunc:y,redirectUri:M}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((J,Ce)=>{t(g).getAuthorizationUrl(M).then(K=>{const Te=y||(Ie=>window.location.assign(Ie)),X=new URL(K);a&&X.searchParams.set("from",encodeURIComponent(a));const Q=X.toString();Te(Q),J(Q)}).catch(K=>{Ce(K)})})}}),ne={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return o.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:ee,CONNECT_USER:te};var Y=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{...e,...t.connectionStatus};case h:return{...e,isUserConnected:!1}}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.connectedPlugins}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return t.isFetching}return e},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return t.isRegistering}return e},ce=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.isConnecting}return e},ae=(e,t)=>{switch(t.type){case j:return!1;case w:return t.registrationError;default:return e}},de=(e,t)=>{switch(t.type){case _:return t.authorizationUrl;default:return e}},ue=(e,t)=>{switch(t.type){default:return e}},le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return t.connectionErrors}return e},pe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.isConnecting}return e},me=(0,Y.UY)({connectionStatus:se,connectionStatusIsFetching:re,siteIsRegistering:ie,userIsConnecting:ce,registrationError:ae,authorizationUrl:de,userConnectionData:ue,connectedPlugins:oe,connectionErrors:le,isOfflineMode:pe});var ge=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),fe=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const _e={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var a=arguments.length,y=new Array(a>1?a-1:0),M=1;M<a;M++)y[M-1]=arguments[M];const J=(0,ge.Y)(g).hasFinishedResolution("getAuthorizationUrl",y);return t&&!J&&(0,fe.W)(g).finishResolution("getAuthorizationUrl",y),t},*fulfill(e){const t=yield v.fetchAuthorizationUrl(e);yield v.setAuthorizationUrl(t.authorizeUrl)}}}},he={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,a;return(a=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:a.wpcomUser},getBlogId:e=>{var t,a;return(a=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:a.blogId}}};var Se=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const z=class{static mayBeInit(t,a){z.store===null&&(z.store=(0,Se.Z)(t,a),(0,Y.z2)(z.store))}};let W=z;q(W,"store",null);const Ee=W,$=window.JP_CONNECTION_INITIAL_STATE;$||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ee.mayBeInit(g,{__experimentalUseThunks:!0,reducer:me,actions:v,selectors:he,resolvers:_e,controls:ne,initialState:$||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(k,l,n)=>{n.d(l,{g:()=>_});var o=n("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),N=n("../../packages/videopress/src/client/state/index.js");function U(u){return u.replace(/([-_][a-z])/gi,h=>h.toUpperCase().replace("_",""))}function A(u){return u.indexOf("_")!==-1}function r(u){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const S=Object.assign({},u);for(const E in S)S.hasOwnProperty(E)&&A(E)&&(S[U(E)]=S[E],h&&delete S[E]);return S}const{paidFeatures:f={},siteProductData:w={},productData:j={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},_=()=>{const u=r(w.pricing_for_ui,!0),h=r(j.introductory_offer,!0),S={...r(j,!0),introductoryOffer:h},{purchases:E,isFetchingPurchases:F}=(0,o.Z)(i=>({purchases:i(N.tT).getPurchases(),isFetchingPurchases:i(N.tT).isFetchingPurchases()}),[]),P=E.map(i=>r(i,!0));function p(i){return P.some(R=>R.productSlug===i)}const m=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(i=>p(i));return{features:f,siteProduct:{...r({...w},!0),pricingForUi:u},product:S,productPrice:s,purchases:P,hasVideoPressPurchase:m,isFetchingPurchases:F}}}}]);})();
