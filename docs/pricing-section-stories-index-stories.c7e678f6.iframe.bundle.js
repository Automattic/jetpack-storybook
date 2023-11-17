"use strict";(()=>{var Ie=Object.defineProperty;var ye=(v,l,n)=>l in v?Ie(v,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):v[l]=n;var q=(v,l,n)=>(ye(v,typeof l!="symbol"?l+"":l,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7998],{"../../packages/videopress/src/client/admin/components/pricing-section/stories/index.stories.tsx":(v,l,n)=>{var a,N,C;n.r(l),n.d(l,{Default:()=>p,__namedExportsOrder:()=>m,default:()=>F});var r=n("../components/components/pricing-table/index.tsx"),y=n("../components/components/product-price/index.tsx"),P=n("../components/components/button/index.tsx"),j=n("../connection/components/use-connection/index.jsx"),c=n("../connection/hooks/use-product-checkout-workflow/index.jsx"),g=n("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),O=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),U=n("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=g.__,d=({onRedirecting:_})=>{const{siteSuffix:A,adminUri:I,registrationNonce:L}=window.jetpackVideoPressInitialState,{siteProduct:b,productPrice:V}=(0,U.g)(),{yearly:o}=V,{handleRegisterSite:R,userIsConnecting:u}=(0,j.Z)({redirectUri:I,from:"jetpack-videopress",registrationNonce:L}),[w,B]=(0,O.useState)(!1),{run:G,hasCheckoutStarted:D}=(0,c.Z)({siteSuffix:A,productSlug:o==null?void 0:o.slug,redirectUrl:I}),k=b.features.map(M=>({name:M}));return(0,s.jsxs)(r.ZP,{title:b.description,items:k,children:[(0,s.jsxs)(r.oK,{primary:!0,children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(y.Z,{offPrice:o!=null&&o.discount?o.salePriceByMonth:null,price:o.priceByMonth,promoLabel:o!=null&&o.discount?(0,g.gB)(f("%1$s%% off","jetpack-videopress-pkg"),o.discount):null,legend:f("/month, billed yearly","jetpack-videopress-pkg"),currency:o.currency}),(0,s.jsx)(P.Z,{onClick:()=>{_==null||_(),G()},isLoading:D,fullWidth:!0,disabled:w||D||u,children:f("Get VideoPress","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!0})]}),(0,s.jsxs)(r.oK,{children:[(0,s.jsxs)(r.NE,{children:[(0,s.jsx)(y.Z,{price:0,legend:"",currency:o.currency,hidePriceFraction:!0}),(0,s.jsx)(P.Z,{fullWidth:!0,variant:"secondary",onClick:()=>{B(!0),R(),_==null||_()},isLoading:u||w,disabled:u||w||D,children:f("Start for free","jetpack-videopress-pkg")})]}),(0,s.jsx)(r.kF,{isIncluded:!1,label:(0,s.jsx)("strong",{children:f("Upload one video","jetpack-videopress-pkg")})}),(0,s.jsx)(r.kF,{isIncluded:!0}),(0,s.jsx)(r.kF,{isIncluded:!1}),(0,s.jsx)(r.kF,{isIncluded:!1})]})]})};d.displayName="PricingPage";const h=d;try{pricingsection.displayName="pricingsection",pricingsection.__docgenInfo={description:"",displayName:"pricingsection",props:{onRedirecting:{defaultValue:null,description:"",name:"onRedirecting",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"]={docgenInfo:pricingsection.__docgenInfo,name:"pricingsection",path:"../../packages/videopress/src/client/admin/components/pricing-section/index.tsx#pricingsection"})}catch(_){}var S=`/**
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
};`,locationsMap:{default:{startLoc:{col:56,line:53},endLoc:{col:92,line:53},startBody:{col:56,line:53},endBody:{col:92,line:53}}}}},title:"Packages/VideoPress/PricingSection",component:h},T=_=>(0,s.jsx)(h,{..._});T.displayName="Template";const p=T.bind({});p.parameters={...p.parameters,docs:{...(a=p.parameters)==null?void 0:a.docs,source:{originalSource:"args => <PricingSection {...args} />",...(C=(N=p.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const m=["Default"]},"../connection/components/use-connection/index.jsx":(v,l,n)=>{n.d(l,{Z:()=>O});var r=n("../api/index.jsx"),y=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),P=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),j=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=n("../connection/state/store.jsx");const g=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},O=({registrationNonce:U=g.registrationNonce,apiRoot:s=g.apiRoot,apiNonce:f=g.apiNonce,redirectUri:d,autoTrigger:h,from:S,skipUserConnection:E}={})=>{const{registerSite:F,connectUser:T,refreshConnectedPlugins:p}=(0,y.Z)(c.t),m=(0,P.Z)(u=>u(c.t).getRegistrationError()),{siteIsRegistering:a,userIsConnecting:N,userConnectionData:C,connectedPlugins:_,connectionErrors:A,isRegistered:I,isUserConnected:L,hasConnectedOwner:b,isOfflineMode:V}=(0,P.Z)(u=>({siteIsRegistering:u(c.t).getSiteIsRegistering(),userIsConnecting:u(c.t).getUserIsConnecting(),userConnectionData:u(c.t).getUserConnectionData(),connectedPlugins:u(c.t).getConnectedPlugins(),connectionErrors:u(c.t).getConnectionErrors(),isOfflineMode:u(c.t).getIsOfflineMode(),...u(c.t).getConnectionStatus()})),o=()=>{if(E){if(d)return window.location=d,Promise.resolve(d)}else return T({from:S,redirectUri:d});return Promise.resolve()},R=u=>(u&&u.preventDefault(),I?o():F({registrationNonce:U,redirectUri:d}).then(()=>o()));return(0,j.useEffect)(()=>{r.ZP.setApiRoot(s),r.ZP.setApiNonce(f)},[s,f]),(0,j.useEffect)(()=>{h&&!a&&!N&&R()},[]),{handleRegisterSite:R,handleConnectUser:o,refreshConnectedPlugins:p,isRegistered:I,isUserConnected:L,siteIsRegistering:a,userIsConnecting:N,registrationError:m,userConnectionData:C,hasConnectedOwner:b,connectedPlugins:_,connectionErrors:A,isOfflineMode:V}}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(v,l,n)=>{var T;n.d(l,{Z:()=>F});var r=n("../api/index.jsx");function y(){var m;switch(typeof window!="undefined"&&((m=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:m.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var P=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),j=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),c=n.n(j),g=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=n("../connection/components/use-connection/index.jsx"),U=n("../connection/state/store.jsx");const s=c()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:f,apiRoot:d,apiNonce:h,siteSuffix:S}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},E=typeof window!="undefined"?(T=window==null?void 0:window.myJetpackInitialState)==null?void 0:T.adminUrl:null;function F({productSlug:p,redirectUrl:m,siteSuffix:a=S,adminUrl:N=E,connectAfterCheckout:C=!1,siteProductAvailabilityHandler:_=null,quantity:A=null,from:I}={}){s("productSlug is %s",p),s("redirectUrl is %s",m),s("siteSuffix is %s",a),s("from is %s",I);const[L,b]=(0,g.useState)(!1),{registerSite:V}=(0,P.Z)(U.t),{isUserConnected:o,isRegistered:R,handleConnectUser:u}=(0,O.Z)({redirectUri:m,from:I}),w=(0,g.useMemo)(()=>{const k=y(),M=(!R||!o)&&C,Z=M?"checkout/jetpack/":`checkout/${a}/`,W=A!=null?`:-q-${A}`:"",x=new URL(`${k}${Z}${p}${W}`);return M?(x.searchParams.set("connect_after_checkout",!0),x.searchParams.set("admin_url",N),x.searchParams.set("from_site_slug",a)):x.searchParams.set("site",a),x.searchParams.set("source",I),x.searchParams.set("redirect_to",m),o||x.searchParams.set("unlinked","1"),x},[R,o,C,a,A,p,I,m,N]);s("isRegistered is %s",R),s("isUserConnected is %s",o),s("connectAfterCheckout is %s",C),s("checkoutUrl is %s",w);const B=()=>Promise.resolve(_&&_()).then(k=>{if(k)return s("handleAfterRegistration: Site has a product associated"),u();s("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",w),window.location.href=w}),G=()=>{s("Redirecting to connectAfterCheckout flow: %s",w),window.location.href=w},D=k=>{if(k&&k.preventDefault(),b(!0),C)return G();if(R)return B();V({registrationNonce:f,redirectUri:m}).then(B)};return(0,g.useEffect)(()=>{r.ZP.setApiRoot(d),r.ZP.setApiNonce(h)},[]),{run:D,isRegistered:R,hasCheckoutStarted:L}}},"../connection/state/store.jsx":(v,l,n)=>{n.d(l,{t:()=>Z});var r=n("../api/index.jsx");const y="SET_CONNECTION_STATUS",P="SET_CONNECTION_STATUS_IS_FETCHING",j="FETCH_CONNECTION_STATUS",c="SET_SITE_IS_REGISTERING",g="SET_USER_IS_CONNECTING",O="SET_REGISTRATION_ERROR",U="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",f="SET_AUTHORIZATION_URL",d="CONNECT_USER",h="DISCONNECT_USER_SUCCESS",S="FETCH_AUTHORIZATION_URL",E="SET_CONNECTED_PLUGINS",F="REFRESH_CONNECTED_PLUGINS",T="SET_CONNECTION_ERRORS",p="SET_IS_OFFLINE_MODE",m=e=>({type:y,connectionStatus:e}),a=e=>({type:P,isFetching:e}),N=()=>({type:j}),C=e=>({type:c,isRegistering:e}),_=e=>({type:g,isConnecting:e}),A=()=>({type:h}),I=e=>({type:O,registrationError:e}),L=()=>({type:U}),b=e=>({type:f,authorizationUrl:e}),V=e=>({type:S,redirectUri:e}),o=e=>({type:E,connectedPlugins:e}),R=e=>({type:T,connectionErrors:e}),u=e=>({type:p,isOfflineMode:e});function*w({from:e,redirectFunc:t,redirectUri:i}={}){yield _(!0),yield{type:d,from:e,redirectFunc:t,redirectUri:i}}function*B({registrationNonce:e,redirectUri:t}){yield L(),yield C(!0);try{const i=yield{type:s,registrationNonce:e,redirectUri:t};return yield m({isRegistered:!0}),yield b(i.authorizeUrl),yield C(!1),Promise.resolve(i)}catch(i){return yield I(i),yield C(!1),Promise.reject(i)}}const D={setConnectionStatus:m,setConnectionStatusIsFetching:a,fetchConnectionStatus:N,fetchAuthorizationUrl:V,setSiteIsRegistering:C,setUserIsConnecting:_,setRegistrationError:I,clearRegistrationError:L,setAuthorizationUrl:b,registerSite:B,connectUser:w,disconnectUserSuccess:A,setConnectedPlugins:o,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>r.ZP.fetchConnectedPlugins().then(i=>{e(o(i)),t(i)})),setConnectionErrors:R,setIsOfflineMode:u};var k=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const Z="jetpack-connection",W=({registrationNonce:e,redirectUri:t})=>r.ZP.registerSite(e,t),x=(0,k.R)(({resolveSelect:e})=>({from:t,redirectFunc:i,redirectUri:J}={})=>new Promise((Se,Ee)=>{e(Z).getAuthorizationUrl(J).then(K=>{const Ce=i||(Te=>window.location.assign(Te)),X=new URL(K);t&&X.searchParams.set("from",encodeURIComponent(t));const Q=X.toString();Ce(Q),Se(Q)}).catch(K=>{Ee(K)})})),ee={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>r.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:W,CONNECT_USER:x};var $=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const te=(e={},t)=>{switch(t.type){case y:return{...e,...t.connectionStatus};case h:return{...e,isUserConnected:!1}}return e},ne=(e={},t)=>{switch(t.type){case E:return t.connectedPlugins}return e},se=(e=!1,t)=>{switch(t.type){case P:return t.isFetching}return e},oe=(e=!1,t)=>{switch(t.type){case c:return t.isRegistering}return e},re=(e=!1,t)=>{switch(t.type){case g:return t.isConnecting}return e},ie=(e,t)=>{switch(t.type){case U:return!1;case O:return t.registrationError;default:return e}},ce=(e,t)=>{switch(t.type){case f:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=(e={},t)=>{switch(t.type){case T:return t.connectionErrors}return e},ue=(e=!1,t)=>{switch(t.type){case p:return t.isConnecting}return e},le=(0,$.UY)({connectionStatus:te,connectionStatusIsFetching:se,siteIsRegistering:oe,userIsConnecting:re,registrationError:ie,authorizationUrl:ce,userConnectionData:ae,connectedPlugins:ne,connectionErrors:de,isOfflineMode:ue});var pe=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),me=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const _e={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const i=!!e.authorizationUrl,J=(0,pe.Y)(Z).hasFinishedResolution("getAuthorizationUrl",t);return i&&!J&&(0,me.W)(Z).finishResolution("getAuthorizationUrl",t),i},*fulfill(e){const t=yield D.fetchAuthorizationUrl(e);yield D.setAuthorizationUrl(t.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,i;return(i=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:i.wpcomUser},getBlogId:e=>{var t,i;return(i=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:i.blogId}}};var fe=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const z=class{static mayBeInit(t,i){z.store===null&&(z.store=(0,fe.Z)(t,i),(0,$.z2)(z.store))}};let H=z;q(H,"store",null);const he=H,Y=window.JP_CONNECTION_INITIAL_STATE;Y||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),he.mayBeInit(Z,{__experimentalUseThunks:!0,reducer:le,actions:D,selectors:ge,resolvers:_e,controls:ee,initialState:Y||{}})},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(v,l,n)=>{n.d(l,{g:()=>f});var r=n("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),y=n("../../packages/videopress/src/client/state/index.js");function P(d){return d.replace(/([-_][a-z])/gi,h=>h.toUpperCase().replace("_",""))}function j(d){return d.indexOf("_")!==-1}function c(d,h=!1){const S=Object.assign({},d);for(const E in S)S.hasOwnProperty(E)&&j(E)&&(S[P(E)]=S[E],h&&delete S[E]);return S}const{paidFeatures:g={},siteProductData:O={},productData:U={},productPrice:s={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},f=()=>{const d=c(O.pricing_for_ui,!0),h=c(U.introductory_offer,!0),S={...c(U,!0),introductoryOffer:h},{purchases:E,isFetchingPurchases:F}=(0,r.Z)(a=>({purchases:a(y.tT).getPurchases(),isFetchingPurchases:a(y.tT).isFetchingPurchases()}),[]),T=E.map(a=>c(a,!0));function p(a){return T.some(N=>N.productSlug===a)}const m=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(a=>p(a));return{features:g,siteProduct:{...c({...O},!0),pricingForUi:d},product:S,productPrice:s,purchases:T,hasVideoPressPurchase:m,isFetchingPurchases:F}}}}]);})();
