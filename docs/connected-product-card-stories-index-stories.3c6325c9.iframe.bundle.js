"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(h,r,t)=>{var c,m,_;t.r(r),t.d(r,{Default:()=>a,__namedExportsOrder:()=>k,default:()=>y});var g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),i=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),e=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),n=t("../../packages/my-jetpack/_inc/state/store.js"),P=t("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),f=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),D=`/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConnectedProductCard from '../';
import { initStore } from '../../../state/store';
import { PRODUCT_STATUSES } from '../../product-card';
import { getAllMockData, getProductSlugs } from '../../product-detail-card/stories/utils.js';

// Set myJetpackRest global var.
window.myJetpackRest = {};

const mockData = getAllMockData();

initStore();

export default {
	title: 'Packages/My Jetpack/Connected Product Card',
	component: ConnectedProductCard,
	argTypes: {
		slug: {
			options: getProductSlugs(),
			control: { type: 'select' },
		},
		status: {
			options: Object.values( PRODUCT_STATUSES ),
			control: { type: 'select' },
		},
	},
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ConnectedProductCard { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = { mockData };
Default.args = {
	admin: false,
	slug: 'backup',
};
`,o={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const p=(0,f.As)();(0,n.N)();const y={parameters:{storySource:{source:`

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConnectedProductCard from '../';
import { initStore } from '../../../state/store';
import { PRODUCT_STATUSES } from '../../product-card';
import { getAllMockData, getProductSlugs } from '../../product-detail-card/stories/utils.js';

// Set myJetpackRest global var.
window.myJetpackRest = {};

const mockData = getAllMockData();

initStore();

export default {
	title: 'Packages/My Jetpack/Connected Product Card',
	component: ConnectedProductCard,
	argTypes: {
		slug: {
			options: getProductSlugs(),
			control: { type: 'select' },
		},
		status: {
			options: Object.values( PRODUCT_STATUSES ),
			control: { type: 'select' },
		},
	},
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ConnectedProductCard { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = { mockData };
Default.args = {
	admin: false,
	slug: 'backup',
};
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:e.Z,argTypes:{slug:{options:(0,f.h7)(),control:{type:"select"}},status:{options:Object.values(P.N),control:{type:"select"}}}},u=s=>(0,d.jsx)(l.UT,{children:(0,d.jsx)(i.Z5,{children:(0,d.jsx)(i.AW,{path:"/",element:(0,d.jsx)(e.Z,{...s})})})});u.displayName="Template";const a=u.bind({});a.parameters={mockData:p},a.args={admin:!1,slug:"backup"},a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(_=(m=a.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const k=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(h,r,t)=>{t.d(r,{Z:()=>p});var g=t("../components/components/text/index.tsx"),l=t("../connection/components/use-connection/index.jsx"),i=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),e=t.n(i),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),f=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),d=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),D=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=({admin:y,slug:u,children:a,isDataLoading:k,Description:c=null,additionalActions:m=null,secondaryAction:_=null,upgradeInInterstitial:s=!1,primaryActionOverride:x})=>{const{isRegistered:C,isUserConnected:S}=(0,l.Z)(),{detail:U,activate:A,deactivate:B,isFetching:I,installStandalonePlugin:R,deactivateStandalonePlugin:j}=(0,f.i)(u),{name:L,description:W,requiresUserConnection:O,status:K}=U,[J,E]=(0,n.useState)(!1),[w,b]=(0,n.useState)(!1),M=(0,P.Z)("/connection"),F=(0,n.useCallback)(()=>{if((!C||!S)&&O){M();return}A()},[A,C,S,O,M]),T=(0,n.useCallback)(()=>{E(!0),R().then(()=>{E(!1)}).catch(()=>{E(!1)})},[R]),H=(0,n.useCallback)(()=>{b(!0),j().then(()=>{var v;(v=window==null?void 0:window.location)==null||v.reload()}).catch(()=>{b(!1)})},[j]),N=()=>{const v=W.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,D.jsx)(g.ZP,{variant:"body-small",style:{flexGrow:1},children:v})};return(0,D.jsx)(d.ZP,{name:L,Description:c||N,status:K,admin:y,isFetching:I,isDataLoading:k,isInstallingStandalone:J,isDeactivatingStandalone:w,onDeactivate:B,additionalActions:m,primaryActionOverride:x,secondaryAction:_,slug:u,onActivate:F,onInstallStandalone:T,onActivateStandalone:T,onDeactivateStandalone:H,upgradeInInterstitial:s,children:a})};o.displayName="ConnectedProductCard",o.propTypes={children:e().node,admin:e().bool.isRequired,slug:e().string.isRequired,isDataLoading:e().bool,additionalActions:e().array,primaryActionOverride:e().object,secondaryAction:e().object};const p=o;o.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(h,r,t)=>{t.d(r,{As:()=>y,TN:()=>p,h7:()=>u});const o={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function p(a){const c=a.constructor===Array?a:[a],m=c.map(s=>({url:`my-jetpack/v1/site/products/${s}?_locale=user`,method:"GET",status:200,response:o[s]})),_=c.map(s=>({url:`my-jetpack/v1/site/products/${s}?_locale=user`,method:"POST",status:200,response:{...o[s],status:o[s].status==="active"?"inactive":"active"}}));return[...m,..._]}function y(){return p([...Object.keys(o)])}function u(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(h,r,t)=>{t.d(r,{Z:()=>i});var g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function i(e){const n=(0,l.s0)();return(0,g.useCallback)(()=>n(e),[n,e])}}}]);})();
