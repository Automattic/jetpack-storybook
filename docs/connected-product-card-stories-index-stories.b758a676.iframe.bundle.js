"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(h,c,t)=>{var y,p,m;t.r(c),t.d(c,{Default:()=>a,__namedExportsOrder:()=>v,default:()=>k});var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),n=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),o=t("../../packages/my-jetpack/_inc/state/store.js"),g=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),P=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`/* eslint-disable react/react-in-jsx-scope */

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
`,e={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const f=(0,P.As)();(0,o.N)();const k={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:n.Z,argTypes:{slug:{options:(0,P.h7)(),control:{type:"select"}},status:{options:Object.values(g.N),control:{type:"select"}}}},D=i=>(0,d.jsx)(r.UT,{children:(0,d.jsx)(s.Z5,{children:(0,d.jsx)(s.AW,{path:"/",element:(0,d.jsx)(n.Z,{...i})})})});D.displayName="Template";const a=D.bind({});a.parameters={mockData:f},a.args={admin:!1,slug:"backup"},a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const v=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(h,c,t)=>{t.d(c,{Z:()=>f});var _=t("../components/components/icons/index.tsx"),r=t("../connection/components/use-connection/index.jsx"),s=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=t.n(s),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),P=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),d=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=k=>{let{admin:D,slug:a,children:v,showMenu:y=!1}=k;const{isRegistered:p,isUserConnected:m}=(0,r.Z)(),{detail:i,status:O,activate:C,deactivate:T,isFetching:x,installStandalonePlugin:R}=(0,P.i)(a),{name:U,description:b,manageUrl:S,requiresUserConnection:M,standalonePluginInfo:u}=i,E=(0,g.Z)("/connection"),B=(0,g.Z)(`add-${a}`),L=(0,o.useCallback)(()=>{window.location=S},[S]),W=(0,o.useCallback)(()=>{if((!p||!m)&&M){E();return}C()},[C,p,m,M,E]),j=(0,o.useCallback)(()=>{R().then(()=>{var A;(A=window==null?void 0:window.location)==null||A.reload()})},[R]),w=(0,_.getIconBySlug)(a);return(0,l.jsx)(d.Z,{name:U,description:b,status:O,icon:(0,l.jsx)(w,{opacity:.4}),admin:D,isFetching:x,onDeactivate:T,slug:a,onActivate:W,onAdd:B,onManage:L,onFixConnection:E,showMenu:y,onInstallStandalone:j,onActivateStandalone:j,hasStandalonePlugin:u==null?void 0:u.hasStandalonePlugin,isStandaloneInstalled:u==null?void 0:u.isStandaloneInstalled,isStandaloneActive:u==null?void 0:u.isStandaloneActive,isConnected:p&&m,children:v})};e.displayName="ConnectedProductCard",e.propTypes={children:n().node,admin:n().bool.isRequired,slug:n().string.isRequired},e.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const f=e},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(h,c,t)=>{t.d(c,{As:()=>k,TN:()=>f,h7:()=>D});const e={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function f(a){const y=a.constructor===Array?a:[a],p=y.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"GET",status:200,response:e[i]})),m=y.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"POST",status:200,response:{...e[i],status:e[i].status==="active"?"inactive":"active"}}));return[...p,...m]}function k(){return f([...Object.keys(e)])}function D(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(h,c,t)=>{t.d(c,{Z:()=>s});var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(n){const o=(0,r.s0)();return(0,_.useCallback)(()=>o(n),[o,n])}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(h,c,t)=>{t.d(c,{i:()=>n});var _=t("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),r=t("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),s=t("../../packages/my-jetpack/_inc/state/store.js");function n(o){const{activateProduct:g,deactivateProduct:P,installStandalonePluginForProduct:d}=(0,_.Z)(s.t),l=(0,r.Z)(e=>e(s.t).getProduct(o));return{activate:()=>g(o),deactivate:()=>P(o),installStandalonePlugin:()=>d(o),productsList:(0,r.Z)(e=>e(s.t).getProducts()),detail:l,isActive:l.status==="active",isFetching:(0,r.Z)(e=>e(s.t).isFetching(o)),status:l.status}}}}]);})();
