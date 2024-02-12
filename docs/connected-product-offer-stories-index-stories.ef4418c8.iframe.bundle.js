"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(E,f,e)=>{var F,L,N;e.r(f),e.d(f,{Default:()=>r,__namedExportsOrder:()=>t,default:()=>j});var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=e("../components/components/product-offer/index.tsx"),l=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=e.n(l),n=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),u=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function _(s,a){const{siteSuffix:c,myJetpackUrl:D}=(window==null?void 0:window.myJetpackInitialState)||{},h=new URL("https://wordpress.com/checkout/"),o=new URL(`${h}${c}/${s}`);return o.searchParams.set("redirect_to",D),a||o.searchParams.set("unlinked",1),o.searchParams.set("site",c),o.toString()}var C=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=({slug:s,onClick:a,trackButtonClick:c,...D})=>{const{detail:h,isFetching:o}=(0,u.i)(s),{title:H,longDescription:G,features:$,pricingForUi:z,isBundle:V,supportedProducts:X,hasRequiredPlan:W}=h,{isFree:Z,fullPricePerMonth:Y,currencyCode:Q,discountPricePerMonth:q,wpcomProductSlug:K}=z,{isUserConnected:ee}=(0,n.Z)(),te=!Z&&!W&&K?_(K,ee):null,ne=(0,m.useCallback)(()=>{c(),a&&a()},[a,c]);return(0,C.jsx)(P.Z,{slug:s,title:H,description:G,features:$,pricing:{isFree:Z,price:Y,offPrice:q,currency:Q},isBundle:V,supportedProducts:X,hasRequiredPlan:W,onAdd:ne,addProductUrl:a?void 0:te,isLoading:o,...D})};d.displayName="ConnectedProductOffer",d.propTypes={slug:p().string.isRequired},d.defaultProps={trackButtonClick:()=>{}};const k=d;d.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const i={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function b(s){const c=s.constructor===Array?s:[s],D=c.map(o=>({url:`my-jetpack/v1/site/products/${o}?_locale=user`,method:"GET",status:200,response:i[o]})),h=c.map(o=>({url:`my-jetpack/v1/site/products/${o}?_locale=user`,method:"POST",status:200,response:{...i[o],status:i[o].status==="active"?"inactive":"active"}}));return[...D,...h]}function O(){return b([...Object.keys(i)])}function S(s=!1){const a=Object.keys(i);return s?a:a.filter(c=>!i[c].is_bundle)}var x=`/* eslint-disable react/react-in-jsx-scope */
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
`,J={Default:{startLoc:{col:35,line:25},endLoc:{col:80,line:25},startBody:{col:35,line:25},endBody:{col:80,line:25}}};const j={title:"Packages/My Jetpack/Connected Product Offer",component:k,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:35,line:25},endLoc:{col:80,line:25},startBody:{col:35,line:25},endBody:{col:80,line:25}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:S(!0)},isCard:{control:{type:"boolean"}}}},A=O(),y=s=>(0,C.jsx)(k,{...s});y.displayName="DefaultDefaultProductOffer";const r=y.bind({});r.parameters={mockData:A},r.args={slug:"backup",isCard:!1},r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(N=(L=r.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const t=["Default"]},"../connection/components/use-connection/index.jsx":(E,f,e)=>{e.d(f,{Z:()=>_});var m=e("../api/index.jsx"),P=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../connection/state/store.jsx");const u=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},_=({registrationNonce:C=u.registrationNonce,apiRoot:d=u.apiRoot,apiNonce:k=u.apiNonce,redirectUri:g,autoTrigger:M,from:U,skipUserConnection:w}={})=>{const{registerSite:R,connectUser:I,refreshConnectedPlugins:B}=(0,P.Z)(n.t),T=(0,l.Z)(t=>t(n.t).getRegistrationError()),{siteIsRegistering:v,userIsConnecting:i,userConnectionData:b,connectedPlugins:O,connectionErrors:S,isRegistered:x,isUserConnected:J,hasConnectedOwner:j,isOfflineMode:A}=(0,l.Z)(t=>({siteIsRegistering:t(n.t).getSiteIsRegistering(),userIsConnecting:t(n.t).getUserIsConnecting(),userConnectionData:t(n.t).getUserConnectionData(),connectedPlugins:t(n.t).getConnectedPlugins(),connectionErrors:t(n.t).getConnectionErrors(),isOfflineMode:t(n.t).getIsOfflineMode(),...t(n.t).getConnectionStatus()})),y=()=>{if(w){if(g)return window.location=g,Promise.resolve(g)}else return I({from:U,redirectUri:g});return Promise.resolve()},r=t=>(t&&t.preventDefault(),x?y():R({registrationNonce:C,redirectUri:g}).then(()=>y()));return(0,p.useEffect)(()=>{m.ZP.setApiRoot(d),m.ZP.setApiNonce(k)},[d,k]),(0,p.useEffect)(()=>{M&&!v&&!i&&r()},[]),{handleRegisterSite:r,handleConnectUser:y,refreshConnectedPlugins:B,isRegistered:x,isUserConnected:J,siteIsRegistering:v,userIsConnecting:i,registrationError:T,userConnectionData:b,hasConnectedOwner:j,connectedPlugins:O,connectionErrors:S,isOfflineMode:A}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(E,f,e)=>{e.d(f,{Z:()=>P});var m=e("../connection/components/use-connection/index.jsx");function P(){const{apiRoot:l,apiNonce:p}=myJetpackRest,{topJetpackMenuItemUrl:n}=myJetpackInitialState,u=(0,m.Z)({apiRoot:l,apiNonce:p}),_=u.isRegistered;return{apiNonce:p,apiRoot:l,...u,isSiteConnected:_,topJetpackMenuItemUrl:n}}}}]);})();
