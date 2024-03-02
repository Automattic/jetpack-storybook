"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(y,o,e)=>{var u,_,g;e.r(o),e.d(o,{Default:()=>a,__namedExportsOrder:()=>E,default:()=>P});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),d=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),r=e("../../packages/my-jetpack/_inc/state/store.js"),D=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),f=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=`/* eslint-disable react/react-in-jsx-scope */

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
`,c={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const m=(0,f.As)();(0,r.N)();const P={parameters:{storySource:{source:`

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
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:t.Z,argTypes:{slug:{options:(0,f.h7)(),control:{type:"select"}},status:{options:Object.values(D.N),control:{type:"select"}}}},p=i=>(0,l.jsx)(n.UT,{children:(0,l.jsx)(d.Z5,{children:(0,l.jsx)(d.AW,{path:"/",element:(0,l.jsx)(t.Z,{...i})})})});p.displayName="Template";const a=p.bind({});a.parameters={mockData:m},a.args={admin:!1,slug:"backup"},a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(g=(_=a.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const E=["Default"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(y,o,e)=>{e.d(o,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(y,o,e)=>{e.d(o,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(n.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(n.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(y,o,e)=>{e.d(o,{Z:()=>m});var s=e("../components/components/text/index.tsx"),n=e("../connection/components/use-connection/index.jsx"),d=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(d),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),D=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),l=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),v=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=({admin:P,slug:p,children:a,isDataLoading:E,Description:u=null,additionalActions:_=null,secondaryAction:g=null,upgradeInInterstitial:i=!1,primaryActionOverride:x})=>{const{isRegistered:C,isUserConnected:A}=(0,n.Z)(),{detail:U,activate:j,deactivate:B,isFetching:w,installStandalonePlugin:O,deactivateStandalonePlugin:R}=(0,f.i)(p),{name:L,description:I,requiresUserConnection:S,status:W}=U,[K,h]=(0,r.useState)(!1),[J,M]=(0,r.useState)(!1),T=(0,D.Z)("/connection"),F=(0,r.useCallback)(()=>{if((!C||!A)&&S){T();return}j()},[j,C,A,S,T]),b=(0,r.useCallback)(()=>{h(!0),O().then(()=>{h(!1)}).catch(()=>{h(!1)})},[O]),H=(0,r.useCallback)(()=>{M(!0),R().then(()=>{var k;(k=window==null?void 0:window.location)==null||k.reload()}).catch(()=>{M(!1)})},[R]),Z=()=>{const k=I.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,v.jsx)(s.ZP,{variant:"body-small",style:{flexGrow:1},children:k})};return(0,v.jsx)(l.ZP,{name:L,Description:u||Z,status:W,admin:P,isFetching:w,isDataLoading:E,isInstallingStandalone:K,isDeactivatingStandalone:J,onDeactivate:B,additionalActions:_,primaryActionOverride:x,secondaryAction:g,slug:p,onActivate:F,onInstallStandalone:b,onActivateStandalone:b,onDeactivateStandalone:H,upgradeInInterstitial:i,children:a})};c.displayName="ConnectedProductCard",c.propTypes={children:t().node,admin:t().bool.isRequired,slug:t().string.isRequired,isDataLoading:t().bool,additionalActions:t().array,primaryActionOverride:t().object,secondaryAction:t().object};const m=c;c.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(y,o,e)=>{e.d(o,{As:()=>P,TN:()=>m,h7:()=>p});const c={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function m(a){const u=a.constructor===Array?a:[a],_=u.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"GET",status:200,response:c[i]})),g=u.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"POST",status:200,response:{...c[i],status:c[i].status==="active"?"inactive":"active"}}));return[..._,...g]}function P(){return m([...Object.keys(c)])}function p(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(y,o,e)=>{e.d(o,{Z:()=>d});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function d(t){const r=(0,n.s0)();return(0,s.useCallback)(()=>r(t),[r,t])}}}]);})();
