"use strict";(()=>{var Ie=Object.defineProperty;var Oe=(I,r,n)=>r in I?Ie(I,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):I[r]=n;var me=(I,r,n)=>(Oe(I,typeof r!="symbol"?r+"":r,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(I,r,n)=>{var Z,G,Y;n.r(r),n.d(r,{Default:()=>O,__namedExportsOrder:()=>f,default:()=>M});var c=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=n("../components/components/product-offer/index.tsx"),p=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=n.n(p),a=n("../../packages/my-jetpack/_inc/data/products/use-product.ts"),l=n("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");function E(g,R){const{siteSuffix:U,myJetpackUrl:k}=(window==null?void 0:window.myJetpackInitialState)||{},b=new URL("https://wordpress.com/checkout/"),P=new URL(`${b}${U}/${g}`);return P.searchParams.set("redirect_to",k),R||P.searchParams.set("unlinked",1),P.searchParams.set("site",U),P.toString()}var m=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=({slug:g,onClick:R,trackButtonClick:U,...k})=>{const{detail:b}=(0,a.Z)(g),{title:P,longDescription:ae,features:Q,pricingForUi:z,isBundle:X,supportedProducts:q,hasRequiredPlan:W}=b,{isFree:K,fullPricePerMonth:ee,currencyCode:te,discountPricePerMonth:ne,wpcomProductSlug:$}=z,{isUserConnected:oe}=(0,l.Z)(),ue=!K&&!W&&$?E($,oe):null,se=(0,c.useCallback)(()=>{U(),R&&R()},[R,U]);return(0,m.jsx)(u.Z,{slug:g,title:P,description:ae,features:Q,pricing:{isFree:K,price:ee,offPrice:ne,currency:te},isBundle:X,supportedProducts:q,hasRequiredPlan:W,onAdd:se,addProductUrl:R?void 0:ue,isLoading:!1,...k})};_.displayName="ConnectedProductOffer",_.propTypes={slug:d().string.isRequired},_.defaultProps={trackButtonClick:()=>{}};const S=_;_.__docgenInfo={description:`Product Detail component.
ToDo: Remove this component, it is not being used

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const N={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function x(g){const U=g.constructor===Array?g:[g],k=U.map(P=>({url:`my-jetpack/v1/site/products/${P}?_locale=user`,method:"GET",status:200,response:N[P]})),b=U.map(P=>({url:`my-jetpack/v1/site/products/${P}?_locale=user`,method:"POST",status:200,response:{...N[P],status:N[P].status==="active"?"inactive":"active"}}));return[...k,...b]}function w(){return x([...Object.keys(N)])}function L(g=!1){const R=Object.keys(N);return g?R:R.filter(U=>!N[U].is_bundle)}var F=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ConnectedProductOffer from '../index.jsx';
import { getAllMockData, getProductSlugs } from './utils.js';

export default {
	title: 'Packages/My Jetpack/Connected Product Offer',
	component: ConnectedProductOffer,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		slug: {
			control: { type: 'select' },
			options: getProductSlugs( true ),
		},
		isCard: {
			control: { type: 'boolean' },
		},
	},
};

const mockData = getAllMockData();

const DefaultDefaultProductOffer = args => <ConnectedProductOffer { ...args } />;

export const Default = DefaultDefaultProductOffer.bind( {} );
Default.parameters = { mockData };
Default.args = {
	slug: 'backup',
	isCard: false,
};
`,B={Default:{startLoc:{col:35,line:25},endLoc:{col:80,line:25},startBody:{col:35,line:25},endBody:{col:80,line:25}}};const M={title:"Packages/My Jetpack/Connected Product Offer",component:S,parameters:{storySource:{source:`
import React from 'react';
import ConnectedProductOffer from '../index.jsx';
import { getAllMockData, getProductSlugs } from './utils.js';

export default {
	title: 'Packages/My Jetpack/Connected Product Offer',
	component: ConnectedProductOffer,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		slug: {
			control: { type: 'select' },
			options: getProductSlugs( true ),
		},
		isCard: {
			control: { type: 'boolean' },
		},
	},
};

const mockData = getAllMockData();

const DefaultDefaultProductOffer = args => <ConnectedProductOffer { ...args } />;

export const Default = DefaultDefaultProductOffer.bind( {} );
Default.parameters = { mockData };
Default.args = {
	slug: 'backup',
	isCard: false,
};
`,locationsMap:{default:{startLoc:{col:35,line:25},endLoc:{col:80,line:25},startBody:{col:35,line:25},endBody:{col:80,line:25}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:L(!0)},isCard:{control:{type:"boolean"}}}},J=w(),D=g=>(0,m.jsx)(S,{...g});D.displayName="DefaultDefaultProductOffer";const O=D.bind({});O.parameters={mockData:J},O.args={slug:"backup",isCard:!1},O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(Y=(G=O.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};const f=["Default"]},"../connection/components/use-connection/index.jsx":(I,r,n)=>{n.d(r,{Z:()=>E});var c=n("../api/index.jsx"),u=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),p=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../connection/state/store.jsx");const l=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},E=({registrationNonce:m=l.registrationNonce,apiRoot:_=l.apiRoot,apiNonce:S=l.apiNonce,redirectUri:y,autoTrigger:C,from:T,skipUserConnection:o}={})=>{const{registerSite:s,connectUser:h,refreshConnectedPlugins:A}=(0,u.Z)(a.t),v=(0,p.Z)(f=>f(a.t).getRegistrationError()),{siteIsRegistering:j,userIsConnecting:N,userConnectionData:x,connectedPlugins:w,connectionErrors:L,isRegistered:F,isUserConnected:B,hasConnectedOwner:M,isOfflineMode:J}=(0,p.Z)(f=>({siteIsRegistering:f(a.t).getSiteIsRegistering(),userIsConnecting:f(a.t).getUserIsConnecting(),userConnectionData:f(a.t).getUserConnectionData(),connectedPlugins:f(a.t).getConnectedPlugins(),connectionErrors:f(a.t).getConnectionErrors(),isOfflineMode:f(a.t).getIsOfflineMode(),...f(a.t).getConnectionStatus()})),D=()=>{if(o){if(y)return window.location=y,Promise.resolve(y)}else return h({from:T,redirectUri:y});return Promise.resolve()},O=f=>(f&&f.preventDefault(),F?D():s({registrationNonce:m,redirectUri:y}).then(()=>D()));return(0,d.useEffect)(()=>{c.ZP.setApiRoot(_),c.ZP.setApiNonce(S)},[_,S]),(0,d.useEffect)(()=>{C&&!j&&!N&&O()},[]),{handleRegisterSite:O,handleConnectUser:D,refreshConnectedPlugins:A,isRegistered:F,isUserConnected:B,siteIsRegistering:j,userIsConnecting:N,registrationError:v,userConnectionData:x,hasConnectedOwner:M,connectedPlugins:w,connectionErrors:L,isOfflineMode:J}}},"../connection/state/store.jsx":(I,r,n)=>{n.d(r,{t:()=>k});var c=n("../api/index.jsx");const u="SET_CONNECTION_STATUS",p="SET_CONNECTION_STATUS_IS_FETCHING",d="FETCH_CONNECTION_STATUS",a="SET_SITE_IS_REGISTERING",l="SET_USER_IS_CONNECTING",E="SET_REGISTRATION_ERROR",m="CLEAR_REGISTRATION_ERROR",_="REGISTER_SITE",S="SET_AUTHORIZATION_URL",y="CONNECT_USER",C="DISCONNECT_USER_SUCCESS",T="FETCH_AUTHORIZATION_URL",o="SET_CONNECTED_PLUGINS",s="REFRESH_CONNECTED_PLUGINS",h="SET_CONNECTION_ERRORS",A="SET_IS_OFFLINE_MODE",v=e=>({type:u,connectionStatus:e}),j=e=>({type:p,isFetching:e}),N=()=>({type:d}),x=e=>({type:a,isRegistering:e}),w=e=>({type:l,isConnecting:e}),L=()=>({type:C}),F=e=>({type:E,registrationError:e}),B=()=>({type:m}),M=e=>({type:S,authorizationUrl:e}),J=e=>({type:T,redirectUri:e}),D=e=>({type:o,connectedPlugins:e}),O=e=>({type:h,connectionErrors:e}),f=e=>({type:A,isOfflineMode:e});function*Z({from:e,redirectFunc:t,redirectUri:i}={}){yield w(!0),yield{type:y,from:e,redirectFunc:t,redirectUri:i}}function*G({registrationNonce:e,redirectUri:t}){yield B(),yield x(!0);try{const i=yield{type:_,registrationNonce:e,redirectUri:t};return yield v({isRegistered:!0}),yield M(i.authorizeUrl),yield x(!1),Promise.resolve(i)}catch(i){return yield F(i),yield x(!1),Promise.reject(i)}}const g={setConnectionStatus:v,setConnectionStatusIsFetching:j,fetchConnectionStatus:N,fetchAuthorizationUrl:J,setSiteIsRegistering:x,setUserIsConnecting:w,setRegistrationError:F,clearRegistrationError:B,setAuthorizationUrl:M,registerSite:G,connectUser:Z,disconnectUserSuccess:L,setConnectedPlugins:D,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>c.ZP.fetchConnectedPlugins().then(i=>{e(D(i)),t(i)})),setConnectionErrors:O,setIsOfflineMode:f};var R=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const k="jetpack-connection",b=({registrationNonce:e,redirectUri:t})=>c.ZP.registerSite(e,t),P=(0,R.R)(({resolveSelect:e})=>({from:t,redirectFunc:i,redirectUri:re}={})=>new Promise((Pe,Se)=>{e(k).getAuthorizationUrl(re).then(ce=>{const Te=i||(he=>window.location.assign(he)),le=new URL(ce);t&&le.searchParams.set("from",encodeURIComponent(t));const pe=le.toString();Te(pe),Pe(pe)}).catch(ce=>{Se(ce)})})),Q={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>c.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:b,CONNECT_USER:P};var z=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const X=(e={},t)=>{switch(t.type){case u:return{...e,...t.connectionStatus};case C:return{...e,isUserConnected:!1}}return e},q=(e={},t)=>{switch(t.type){case o:return t.connectedPlugins}return e},W=(e=!1,t)=>{switch(t.type){case p:return t.isFetching}return e},K=(e=!1,t)=>{switch(t.type){case a:return t.isRegistering}return e},ee=(e=!1,t)=>{switch(t.type){case l:return t.isConnecting}return e},te=(e,t)=>{switch(t.type){case m:return!1;case E:return t.registrationError;default:return e}},ne=(e,t)=>{switch(t.type){case S:return t.authorizationUrl;default:return e}},$=(e,t)=>{switch(t.type){default:return e}},oe=(e={},t)=>{switch(t.type){case h:return t.connectionErrors}return e},ie=(e=!1,t)=>{switch(t.type){case A:return t.isConnecting}return e},se=(0,z.UY)({connectionStatus:X,connectionStatusIsFetching:W,siteIsRegistering:K,userIsConnecting:ee,registrationError:te,authorizationUrl:ne,userConnectionData:$,connectedPlugins:q,connectionErrors:oe,isOfflineMode:ie});var _e=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),fe=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const ge={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const i=!!e.authorizationUrl,re=(0,_e.Y)(k).hasFinishedResolution("getAuthorizationUrl",t);return i&&!re&&(0,fe.W)(k).finishResolution("getAuthorizationUrl",t),i},*fulfill(e){const t=yield g.fetchAuthorizationUrl(e);yield g.setAuthorizationUrl(t.authorizeUrl)}}}},Ee={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,i;return(i=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:i.wpcomUser},getBlogId:e=>{var t,i;return(i=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:i.blogId}}};var ye=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const H=class{static mayBeInit(t,i){H.store===null&&(H.store=(0,ye.Z)(t,i),(0,z.z2)(H.store))}};let V=H;me(V,"store",null);const Ce=V,de=window.JP_CONNECTION_INITIAL_STATE;de||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ce.mayBeInit(k,{__experimentalUseThunks:!0,reducer:se,actions:g,selectors:Ee,resolvers:ge,controls:Q,initialState:de||{}})},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(I,r,n)=>{n.d(r,{Z:()=>u});var c=n("../connection/components/use-connection/index.jsx");function u(){const{apiRoot:p,apiNonce:d}=myJetpackRest,{topJetpackMenuItemUrl:a}=myJetpackInitialState,l=(0,c.Z)({apiRoot:p,apiNonce:d}),{registrationNonce:E}=JP_CONNECTION_INITIAL_STATE,m=l.isRegistered;return{apiNonce:d,apiRoot:p,registrationNonce:E,...l,isSiteConnected:m,topJetpackMenuItemUrl:a}}},"../../packages/my-jetpack/_inc/data/constants.ts":(I,r,n)=>{n.d(r,{Jk:()=>E,LQ:()=>u,_H:()=>p,hd:()=>d,n2:()=>m});const c="my-jetpack/v1",u=`${c}/site/purchases`,p=`${c}/site/backup/undo-event`,d=`${c}/site/backup/count-items`,a=`${c}/chat/availability`,l=`${c}/chat/authentication`,E=`${c}/site/products`,m="videopress/v1/stats/featured"},"../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts":(I,r,n)=>{n.d(r,{o:()=>y});var c=n("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d={message:"",options:{status:""}},a=(0,u.createContext)({currentNotice:d,setCurrentNotice:null}),l=({children:C})=>{const[T,o]=(0,u.useState)(d);return(0,p.jsx)(a.Provider,{value:{currentNotice:T,setCurrentNotice:o},children:C})};l.displayName="NoticeContextProvider";const E=null;try{noticeContext.displayName="noticeContext",noticeContext.__docgenInfo={description:"",displayName:"noticeContext",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"]={docgenInfo:noticeContext.__docgenInfo,name:"noticeContext",path:"../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"})}catch(C){}const _=({message:C,options:T,isError:o})=>{const{setCurrentNotice:s}=(0,u.useContext)(a);(0,u.useEffect)(()=>{o&&(s==null||s({message:C,options:T}))},[o])},S=c.__,y=({infoName:C,isError:T,overrideMessage:o})=>{_({message:o!=null?o:(0,c.gB)(S("There was an error fetching your %s information. Check your site connectivity and try again.","jetpack-my-jetpack"),C),options:{status:"error"},isError:T})}},"../../packages/my-jetpack/_inc/data/products/use-product.ts":(I,r,n)=>{n.d(r,{Z:()=>T});var c=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=n("../../packages/my-jetpack/_inc/data/constants.ts"),p=n("../../packages/my-jetpack/_inc/data/use-simple-query.ts");const d=o=>Array.isArray(o)?o.map(s=>d(s)):typeof o=="object"&&o!==null?Object.fromEntries(Object.entries(o).map(([s,h])=>[s.replace(/([-_][a-z])/gi,A=>A.toUpperCase().replace(/[-_]/g,"")),d(h)])):o,a=d,l=o=>o.pricingForUi.productTerm==="year"?Math.round(o.pricingForUi.fullPrice/12*100)/100:o.pricingForUi.fullPrice,E=o=>o.pricingForUi.productTerm==="year"?Math.round(o.pricingForUi.discountPrice/12*100)/100:o.pricingForUi.discountPrice,m=()=>{var h;const o=window==null?void 0:window.myJetpackInitialState;return((h=o==null?void 0:o.products)==null?void 0:h.items)||{}},_=o=>(0,p.Z)("product",{path:`${u.Jk}/${o}`},{enabled:!1}),S=async(o,s)=>{const{data:h}=await s();window.myJetpackInitialState.products.items[o]=h},y=o=>{const s=a(o);return s.features=s.features||[],s.supportedProducts=s.supportedProducts||[],s.pricingForUi.fullPricePerMonth=l(s),s.pricingForUi.discountPricePerMonth=E(s),s},T=o=>{const s=m(),h=s==null?void 0:s[o],A=y(h),{refetch:v,isLoading:j}=_(o);return{detail:A,refetch:(0,c.useCallback)(()=>S(o,v),[o,v]),isLoading:j}}},"../../packages/my-jetpack/_inc/data/use-simple-query.ts":(I,r,n)=>{n.d(r,{Z:()=>a});var c=n("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js"),u=n("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js"),p=n("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const a=(l,E,m,_,S)=>{const y=(0,c.a)({queryKey:[l,_],queryFn:()=>(0,u.Z)(E),refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,...m}),{isError:C,isLoading:T}=y;return(0,p.o)({infoName:l,isError:!T&&C,overrideMessage:S}),y}}}]);})();
