"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(O,d,e)=>{var b,_,v;e.r(d),e.d(d,{Default:()=>a,__namedExportsOrder:()=>M,default:()=>w});var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../components/components/product-offer/index.tsx"),l=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=e.n(l),y=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function k(o,n){const{siteSuffix:s,myJetpackUrl:i}=(window==null?void 0:window.myJetpackInitialState)||{},u=new URL("https://wordpress.com/checkout/"),t=new URL(`${u}${s}/${o}`);return t.searchParams.set("redirect_to",i),n||t.searchParams.set("unlinked",1),t.searchParams.set("site",s),t.toString()}var P=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=({slug:o,onClick:n,trackButtonClick:s,...i})=>{const{detail:u,isFetching:t}=(0,f.i)(o),{title:J,longDescription:R,features:F,pricingForUi:T,isBundle:E,supportedProducts:I,hasRequiredPlan:C}=u,{isFree:S,fullPricePerMonth:L,currencyCode:H,discountPricePerMonth:N,wpcomProductSlug:x}=T,{isUserConnected:W}=(0,y.Z)(),G=!S&&!C&&x?k(x,W):null,$=(0,m.useCallback)(()=>{s(),n&&n()},[n,s]);return(0,P.jsx)(g.Z,{slug:o,title:J,description:R,features:F,pricing:{isFree:S,price:L,offPrice:N,currency:H},isBundle:E,supportedProducts:I,hasRequiredPlan:C,onAdd:$,addProductUrl:n?void 0:G,isLoading:t,...i})};c.displayName="ConnectedProductOffer",c.propTypes={slug:p().string.isRequired},c.defaultProps={trackButtonClick:()=>{}};const h=c;c.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const r={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function j(o){const s=o.constructor===Array?o:[o],i=s.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"GET",status:200,response:r[t]})),u=s.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"POST",status:200,response:{...r[t],status:r[t].status==="active"?"inactive":"active"}}));return[...i,...u]}function U(){return j([...Object.keys(r)])}function A(o=!1){const n=Object.keys(r);return o?n:n.filter(s=>!r[s].is_bundle)}var et=`/* eslint-disable react/react-in-jsx-scope */
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
`,ot={Default:{startLoc:{col:35,line:25},endLoc:{col:80,line:25},startBody:{col:35,line:25},endBody:{col:80,line:25}}};const w={title:"Packages/My Jetpack/Connected Product Offer",component:h,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:35,line:25},endLoc:{col:80,line:25},startBody:{col:35,line:25},endBody:{col:80,line:25}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:A(!0)},isCard:{control:{type:"boolean"}}}},B=U(),D=o=>(0,P.jsx)(h,{...o});D.displayName="DefaultDefaultProductOffer";const a=D.bind({});a.parameters={mockData:B},a.args={slug:"backup",isCard:!1},a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(v=(_=a.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const M=["Default"]},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(O,d,e)=>{e.d(d,{Z:()=>g});var m=e("../connection/components/use-connection/index.jsx");function g(){const{apiRoot:l,apiNonce:p}=myJetpackRest,{topJetpackMenuItemUrl:y}=myJetpackInitialState,f=(0,m.Z)({apiRoot:l,apiNonce:p}),k=f.isRegistered;return{apiNonce:p,apiRoot:l,...f,isSiteConnected:k,topJetpackMenuItemUrl:y}}}}]);})();
