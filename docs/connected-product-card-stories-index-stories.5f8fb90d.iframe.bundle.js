"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(k,r,t)=>{var p,g,f;t.r(r),t.d(r,{Default:()=>e,__namedExportsOrder:()=>v,default:()=>D});var l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),a=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),s=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),o=t("../../packages/my-jetpack/_inc/state/store.js"),m=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),_=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=`/* eslint-disable react/react-in-jsx-scope */

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
`,d={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const y=(0,_.As)();(0,o.N)();const D={parameters:{storySource:{source:`

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
      control: {
        type: 'select'
      }
    },
    status: {
      options: Object.values(PRODUCT_STATUSES),
      control: {
        type: 'select'
      }
    }
  }
};
const Template = args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>;
export const Default = Template.bind({});
Default.parameters = {
  mockData
};
Default.args = {
  admin: false,
  slug: 'backup'
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<ConnectedProductCard {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:s.Z,argTypes:{slug:{options:(0,_.h7)(),control:{type:"select"}},status:{options:Object.values(m.N),control:{type:"select"}}}},P=u=>(0,n.jsx)(c.UT,{children:(0,n.jsx)(a.Z5,{children:(0,n.jsx)(a.AW,{path:"/",element:(0,n.jsx)(s.Z,{...u})})})});P.displayName="Template";const e=P.bind({});e.parameters={mockData:y},e.args={admin:!1,slug:"backup"},e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const v=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(k,r,t)=>{t.d(r,{Z:()=>y});var l=t("../components/components/icons/index.tsx"),c=t("../connection/components/use-connection/index.jsx"),a=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),s=t.n(a),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),_=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),n=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=D=>{let{admin:P,slug:e,children:v}=D;const{isRegistered:p,isUserConnected:g}=(0,c.Z)(),{detail:f,status:u,activate:E,deactivate:j,isFetching:O}=(0,_.i)(e),{name:M,description:A,manageUrl:C,requiresUserConnection:R}=f,h=(0,m.Z)("/connection"),T=(0,m.Z)(`add-${e}`),S=(0,o.useCallback)(()=>{window.location=C},[C]),x=(0,o.useCallback)(()=>{if((!p||!g)&&R){h();return}E()},[E,p,g,R,h]),U=(0,l.getIconBySlug)(e);return(0,i.jsx)(n.Z,{name:M,description:A,status:u,icon:(0,i.jsx)(U,{opacity:.4}),admin:P,isFetching:O,onDeactivate:j,slug:e,onActivate:x,onAdd:T,onManage:S,onFixConnection:h,children:v})};d.displayName="ConnectedProductCard",d.propTypes={children:s().node,admin:s().bool.isRequired,slug:s().string.isRequired},d.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const y=d},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(k,r,t)=>{t.d(r,{As:()=>D,TN:()=>y,h7:()=>P});const d={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function y(e){const p=e.constructor===Array?e:[e],g=p.map(u=>({url:`my-jetpack/v1/site/products/${u}?_locale=user`,method:"GET",status:200,response:d[u]})),f=p.map(u=>({url:`my-jetpack/v1/site/products/${u}?_locale=user`,method:"POST",status:200,response:{...d[u],status:d[u].status==="active"?"inactive":"active"}}));return[...g,...f]}function D(){return y([...Object.keys(d)])}function P(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(k,r,t)=>{t.d(r,{Z:()=>a});var l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function a(s){const o=(0,c.s0)();return(0,l.useCallback)(()=>o(s),[o,s])}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(k,r,t)=>{t.d(r,{i:()=>s});var l=t("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),c=t("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=t("../../packages/my-jetpack/_inc/state/store.js");function s(o){const{activateProduct:m,deactivateProduct:_}=(0,l.Z)(a.t),n=(0,c.Z)(i=>i(a.t).getProduct(o));return{activate:()=>m(o),deactivate:()=>_(o),productsList:(0,c.Z)(i=>i(a.t).getProducts()),detail:n,isActive:n.status==="active",isFetching:(0,c.Z)(i=>i(a.t).isFetching(o)),status:n.status}}}}]);})();
