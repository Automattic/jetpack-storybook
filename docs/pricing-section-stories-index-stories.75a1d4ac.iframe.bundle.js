"use strict";(()=>{var Pe=Object.defineProperty;var Ue=(P,i,t)=>i in P?Pe(P,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):P[i]=t;var q=(P,i,t)=>(Ue(P,typeof i!="symbol"?i+"":i,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(P,i,t)=>{t.d(i,{Z:()=>l});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const l=U=>{const{dispatch:r}=(0,o.Z)();return U===void 0?r:r(U)}},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(P,i,t)=>{t.d(i,{W:()=>m});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function m(l){return o.Z.dispatch(l)}},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(P,i,t)=>{t.d(i,{Y:()=>m});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function m(l){return o.Z.select(l)}},"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(P,i,t)=>{var d,_,j;t.r(i),t.d(i,{Default:()=>g,__namedExportsOrder:()=>y,default:()=>v});var o=t("../components/components/pricing-table/index.tsx"),m=t("../components/components/product-price/index.tsx"),l=t("../components/components/button/index.tsx"),U=t("../connection/components/use-connection/index.jsx"),r=t("../connection/hooks/use-product-checkout-workflow/index.jsx"),C=t("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),N=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=t("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=C.__,u=w=>{let{onRedirecting:R}=w;const{siteSuffix:x,adminUri:b,registrationNonce:k}=window.jetpackVideoPressInitialState,{siteProduct:D,productPrice:A}=(0,O.g)(),{yearly:c}=A,{handleRegisterSite:f,userIsConnecting:Z}=(0,U.Z)({redirectUri:b,from:"jetpack-videopress",registrationNonce:k}),[B,K]=(0,N.useState)(!1),{run:M,hasCheckoutStarted:V}=(0,r.Z)({siteSuffix:x,productSlug:c==null?void 0:c.slug,redirectUrl:b}),J=D.features.map(F=>({name:F}));return(0,s.jsxs)(o.ZP,{title:D.description,items:J,children:[(0,s.jsxs)(o.oK,{primary:!0,children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(m.Z,{offPrice:c!=null&&c.discount?c.salePriceByMonth:null,price:c.priceByMonth,promoLabel:c!=null&&c.discount?(0,C.gB)(h("%1$s%% off","jetpack-videopress-pkg"),c.discount):null,legend:h("/month, billed yearly","jetpack-videopress-pkg"),currency:c.currency}),(0,s.jsx)(l.Z,{onClick:()=>{R==null||R(),M()},isLoading:V,fullWidth:!0,disabled:B||V||Z,children:h("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!0})]}),(0,s.jsxs)(o.oK,{children:[(0,s.jsxs)(o.NE,{children:[(0,s.jsx)(m.Z,{price:0,legend:"",currency:c.currency,hidePriceFraction:!0}),(0,s.jsx)(l.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{K(!0),f(),R==null||R()},isLoading:Z||B,disabled:Z||B||V,children:h("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(o.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:h("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(o.kF,{isIncluded:!0}),(0,s.jsx)(o.kF,{isIncluded:!1}),(0,s.jsx)(o.kF,{isIncluded:!1})]})]})};u.displayName="PricingPage";const S=u;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(w){}var E=`/**
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
`,T={Default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}};window.jetpackVideoPressInitialState={allowedVideoExtensions:{},adminUri:"admin-uri",apiNonce:"nonce",apiRoot:"https://api-root.com",registrationNonce:"registration-nonce",paidFeatures:{isVideoPressSupported:!0,isVideoPress1TBSupported:!0,isVideoPressUnlimitedSupported:!1},adminUrl:"https://admin-url.com",siteSuffix:"site-suffix",siteProductData:{slug:"videopress",plugin_slug:"jetpack-videopress",name:"VideoPress",title:"Jetpack VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],status:"error",pricing_for_ui:{available:!0,wpcom_product_slug:"jetpack_videopress",currency_code:"USD",full_price:119.4,discount_price:59.4},is_bundle:!1,is_upgradable_by_bundle:!1,supported_products:[],wpcom_product_slug:"jetpack_videopress",requires_user_connection:!0,has_required_plan:!0,manage_url:"http://localhost/wp-admin/admin.php?page=jetpack-videopress",post_activation_url:""},contentNonce:"content-nonce"};const v={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:S},p=w=>(0,s.jsx)(S,{...w});p.displayName="Template";const g=p.bind({});g.parameters={...g.parameters,docs:{...(d=g.parameters)==null?void 0:d.docs,source:{originalSource:"args => <PricingSection {...args} />",...(j=(_=g.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const y=["Default"]},"../connection/components/use-connection/index.jsx":(P,i,t)=>{t.d(i,{Z:()=>N});var o=t("../api/index.jsx"),m=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),l=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),U=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../connection/state/store.jsx");const C=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},N=function(){let{registrationNonce:O=C.registrationNonce,apiRoot:s=C.apiRoot,apiNonce:h=C.apiNonce,redirectUri:u,autoTrigger:S,from:E,skipUserConnection:T}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:v,connectUser:p,refreshConnectedPlugins:g}=(0,m.Z)(r.t),y=(0,l.Z)(f=>f(r.t).getRegistrationError()),{siteIsRegistering:d,userIsConnecting:_,userConnectionData:j,connectedPlugins:w,connectionErrors:R,isRegistered:x,isUserConnected:b,hasConnectedOwner:k,isOfflineMode:D}=(0,l.Z)(f=>({siteIsRegistering:f(r.t).getSiteIsRegistering(),userIsConnecting:f(r.t).getUserIsConnecting(),userConnectionData:f(r.t).getUserConnectionData(),connectedPlugins:f(r.t).getConnectedPlugins(),connectionErrors:f(r.t).getConnectionErrors(),isOfflineMode:f(r.t).getIsOfflineMode(),...f(r.t).getConnectionStatus()})),A=()=>{if(T){if(u)return window.location=u,Promise.resolve(u)}else return p({from:E,redirectUri:u});return Promise.resolve()},c=f=>(f&&f.preventDefault(),x?A():v({registrationNonce:O,redirectUri:u}).then(()=>A()));return(0,U.useEffect)(()=>{o.ZP.setApiRoot(s),o.ZP.setApiNonce(h)},[s,h]),(0,U.useEffect)(()=>{S&&!d&&!_&&c()},[]),{handleRegisterSite:c,handleConnectUser:A,refreshConnectedPlugins:g,isRegistered:x,isUserConnected:b,siteIsRegistering:d,userIsConnecting:_,registrationError:y,userConnectionData:j,hasConnectedOwner:k,connectedPlugins:w,connectionErrors:R,isOfflineMode:D}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(P,i,t)=>{t.d(i,{Z:()=>T});var o=t("../api/index.jsx");function m(v,p,g,y){const d=new URL("https://wordpress.com/checkout/"),_=new URL(`${d}${p}/${v}`);return _.searchParams.set("redirect_to",g),y||_.searchParams.set("unlinked","1"),_.searchParams.set("site",p),_.toString()}var l=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),U=t("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),r=t.n(U),C=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),N=t("../connection/components/use-connection/index.jsx"),O=t("../connection/state/store.jsx");const s=r()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:h,apiRoot:u,apiNonce:S,siteSuffix:E}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function T(){let{productSlug:v,redirectUrl:p,siteSuffix:g=E,siteProductAvailabilityHandler:y=null,from:d}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s("productSlug is %s",v),s("redirectUrl is %s",p),s("siteSuffix is %s",g),s("from is %s",d);const[_,j]=(0,C.useState)(!1),{registerSite:w}=(0,l.Z)(O.t),{isUserConnected:R,isRegistered:x,handleConnectUser:b}=(0,N.Z)({redirectUri:p,from:d}),k=m(v,g,p,R);s("checkoutProductUrl is %s",k),s("isUserConnected is %s",R);const D=()=>Promise.resolve(y&&y()).then(c=>{if(c)return s("handleAfterRegistration: Site has a product associated"),b();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",k),window.location.href=k}),A=c=>{if(c&&c.preventDefault(),j(!0),x)return D();w({registrationNonce:h,redirectUri:p}).then(D)};return(0,C.useEffect)(()=>{o.ZP.setApiRoot(u),o.ZP.setApiNonce(S)},[]),{run:A,isRegistered:x,hasCheckoutStarted:_}}},"../connection/state/store.jsx":(P,i,t)=>{t.d(i,{t:()=>F});var o=t("../api/index.jsx");const m="SET_CONNECTION_STATUS",l="SET_CONNECTION_STATUS_IS_FETCHING",U="FETCH_CONNECTION_STATUS",r="SET_SITE_IS_REGISTERING",C="SET_USER_IS_CONNECTING",N="SET_REGISTRATION_ERROR",O="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",h="SET_AUTHORIZATION_URL",u="CONNECT_USER",S="DISCONNECT_USER_SUCCESS",E="FETCH_AUTHORIZATION_URL",T="SET_CONNECTED_PLUGINS",v="REFRESH_CONNECTED_PLUGINS",p="SET_CONNECTION_ERRORS",g="SET_IS_OFFLINE_MODE",y=e=>({type:m,connectionStatus:e}),d=e=>({type:l,isFetching:e}),_=()=>({type:U}),j=e=>({type:r,isRegistering:e}),w=e=>({type:C,isConnecting:e}),R=()=>({type:S}),x=e=>({type:N,registrationError:e}),b=()=>({type:O}),k=e=>({type:h,authorizationUrl:e}),D=e=>({type:E,redirectUri:e}),A=e=>({type:T,connectedPlugins:e}),c=e=>({type:p,connectionErrors:e}),f=e=>({type:g,isOfflineMode:e});function Z(){let{from:e,redirectFunc:n,redirectUri:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield w(!0),yield{type:u,from:e,redirectFunc:n,redirectUri:a}}()}function B(e){let{registrationNonce:n,redirectUri:a}=e;return function*(){yield b(),yield j(!0);try{const I=yield{type:s,registrationNonce:n,redirectUri:a};return yield y({isRegistered:!0}),yield k(I.authorizeUrl),yield j(!1),Promise.resolve(I)}catch(I){return yield x(I),yield j(!1),Promise.reject(I)}}()}const M={setConnectionStatus:y,setConnectionStatusIsFetching:d,fetchConnectionStatus:_,fetchAuthorizationUrl:D,setSiteIsRegistering:j,setUserIsConnecting:w,setRegistrationError:x,clearRegistrationError:b,setAuthorizationUrl:k,registerSite:B,connectUser:Z,disconnectUserSuccess:R,setConnectedPlugins:A,refreshConnectedPlugins:()=>async e=>{let{dispatch:n}=e;return await new Promise(a=>o.ZP.fetchConnectedPlugins().then(I=>{n(A(I)),a(I)}))},setConnectionErrors:c,setIsOfflineMode:f};var V=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const F="jetpack-connection",ee=e=>{let{registrationNonce:n,redirectUri:a}=e;return o.ZP.registerSite(n,a)},te=(0,V.R)(e=>{let{resolveSelect:n}=e;return function(){let{from:a,redirectFunc:I,redirectUri:L}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((z,Te)=>{n(F).getAuthorizationUrl(L).then(G=>{const Ce=I||(Ie=>window.location.assign(Ie)),X=new URL(G);a&&X.searchParams.set("from",encodeURIComponent(a));const Q=X.toString();Ce(Q),z(Q)}).catch(G=>{Te(G)})})}}),ne={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:n}=e;return o.ZP.fetchAuthorizationUrl(n)},REGISTER_SITE:ee,CONNECT_USER:te};var Y=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return{...e,...n.connectionStatus};case S:return{...e,isUserConnected:!1}}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case T:return n.connectedPlugins}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return n.isFetching}return e},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r:return n.isRegistering}return e},ce=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C:return n.isConnecting}return e},ae=(e,n)=>{switch(n.type){case O:return!1;case N:return n.registrationError;default:return e}},de=(e,n)=>{switch(n.type){case h:return n.authorizationUrl;default:return e}},ue=(e,n)=>{switch(n.type){default:return e}},le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return n.connectionErrors}return e},pe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return n.isConnecting}return e},me=(0,Y.UY)({connectionStatus:se,connectionStatusIsFetching:re,siteIsRegistering:ie,userIsConnecting:ce,registrationError:ae,authorizationUrl:de,userConnectionData:ue,connectedPlugins:oe,connectionErrors:le,isOfflineMode:pe});var ge=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const fe={...{getAuthorizationUrl:{isFulfilled:function(e){const n=!!e.authorizationUrl;for(var a=arguments.length,I=new Array(a>1?a-1:0),L=1;L<a;L++)I[L-1]=arguments[L];const z=(0,ge.Y)(F).hasFinishedResolution("getAuthorizationUrl",I);return n&&!z&&(0,_e.W)(F).finishResolution("getAuthorizationUrl",I),n},*fulfill(e){const n=yield M.fetchAuthorizationUrl(e);yield M.setAuthorizationUrl(n.authorizeUrl)}}}},he={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var n,a;return(a=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:a.wpcomUser},getBlogId:e=>{var n,a;return(a=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:a.blogId}}};var Se=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const W=class{static mayBeInit(n,a){W.store===null&&(W.store=(0,Se.Z)(n,a),(0,Y.z2)(W.store))}};let H=W;q(H,"store",null);const Ee=H,$=window.JP_CONNECTION_INITIAL_STATE;$||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ee.mayBeInit(F,{__experimentalUseThunks:!0,reducer:me,actions:M,selectors:he,resolvers:fe,controls:ne,initialState:$||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(P,i,t)=>{t.d(i,{g:()=>h});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),m=t("../../packages/videopress/src/client/state/index.js");function l(u){return u.replace(/([-_][a-z])/gi,S=>S.toUpperCase().replace("_",""))}function U(u){return u.indexOf("_")!==-1}function r(u){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const E=Object.assign({},u);for(const T in E)E.hasOwnProperty(T)&&U(T)&&(E[l(T)]=E[T],S&&delete E[T]);return E}const{paidFeatures:C={},siteProductData:N={},productData:O={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},h=()=>{const u=r(N.pricing_for_ui,!0),S=r(O.introductory_offer,!0),E={...r(O,!0),introductoryOffer:S},{purchases:T,isFetchingPurchases:v}=(0,o.Z)(d=>({purchases:d(m.tT).getPurchases(),isFetchingPurchases:d(m.tT).isFetchingPurchases()}),[]),p=T.map(d=>r(d,!0));function g(d){return p.some(_=>_.productSlug===d)}const y=["jetpack_videopress","jetpack_videopress_monthly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y"].some(d=>g(d));return{features:C,siteProduct:{...r({...N},!0),pricingForUi:u},product:E,productPrice:s,purchases:p,hasVideoPressPurchase:y,isFetchingPurchases:v}}}}]);})();
