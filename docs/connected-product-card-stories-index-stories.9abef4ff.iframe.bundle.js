"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(S,i,t)=>{var m,c,d;t.r(i),t.d(i,{Default:()=>e,__namedExportsOrder:()=>k,default:()=>P});var y=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),a=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),u=t("../../packages/my-jetpack/_inc/state/store.js"),h=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),l=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`/* eslint-disable react/react-in-jsx-scope */

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
`,o={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const g=(0,l.As)();(0,u.N)();const P={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:a.Z,argTypes:{slug:{options:(0,l.h7)(),control:{type:"select"}},status:{options:Object.values(h.N),control:{type:"select"}}}},f=n=>(0,p.jsx)(_.UT,{children:(0,p.jsx)(s.Z5,{children:(0,p.jsx)(s.AW,{path:"/",element:(0,p.jsx)(a.Z,{...n})})})});f.displayName="Template";const e=f.bind({});e.parameters={mockData:g},e.args={admin:!1,slug:"backup"},e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(S,i,t)=>{t.d(i,{Z:()=>g});var y=t("../connection/components/use-connection/index.jsx"),_=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),s=t.n(_),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),h=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),l=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),p=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),E=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=P=>{let{admin:f,slug:e,children:k,showMenu:m=!1,menuItems:c=[]}=P;const{isRegistered:d,isUserConnected:n}=(0,y.Z)(),{detail:L,activate:A,deactivate:K,isFetching:J,installStandalonePlugin:O,deactivateStandalonePlugin:j}=(0,h.i)(e),{name:H,description:F,requiresUserConnection:M,standalonePluginInfo:r,status:v}=L,[N,T]=(0,a.useState)(!1),[Z,b]=(0,a.useState)(!1),x=(0,u.Z)("/connection"),C=r==null?void 0:r.hasStandalonePlugin,R=r==null?void 0:r.isStandaloneInstalled,U=r==null?void 0:r.isStandaloneActive,B=C&&R&&!U,I=C&&R&&U,w=C&&!R,G=d&&n,z=v===l.N.ABSENT||v===l.N.ABSENT_WITH_PLAN,V=m&&!z&&v!==l.N.ERROR&&G&&((c==null?void 0:c.length)>0||B||I||w),X=(0,a.useCallback)(()=>{if((!d||!n)&&M){x();return}A()},[A,d,n,M,x]),W=(0,a.useCallback)(()=>{T(!0),O().then(()=>{var D;(D=window==null?void 0:window.location)==null||D.reload()}).catch(()=>{T(!1)})},[O]),$=(0,a.useCallback)(()=>{b(!0),j().then(()=>{var D;(D=window==null?void 0:window.location)==null||D.reload()}).catch(()=>{b(!1)})},[j]);return(0,E.jsx)(p.Z,{name:H,description:F,status:v,admin:f,isFetching:J,isInstallingStandalone:N,isDeactivatingStandalone:Z,onDeactivate:K,slug:e,onActivate:X,showMenu:V,menuItems:c,showActivateOption:B,showDeactivateOption:I,showInstallOption:w,onInstallStandalone:W,onActivateStandalone:W,onDeactivateStandalone:$,children:k})};o.displayName="ConnectedProductCard",o.propTypes={children:s().node,admin:s().bool.isRequired,slug:s().string.isRequired},o.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const g=o},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(S,i,t)=>{t.d(i,{As:()=>P,TN:()=>g,h7:()=>f});const o={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function g(e){const m=e.constructor===Array?e:[e],c=m.map(n=>({url:`my-jetpack/v1/site/products/${n}?_locale=user`,method:"GET",status:200,response:o[n]})),d=m.map(n=>({url:`my-jetpack/v1/site/products/${n}?_locale=user`,method:"POST",status:200,response:{...o[n],status:o[n].status==="active"?"inactive":"active"}}));return[...c,...d]}function P(){return g([...Object.keys(o)])}function f(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(S,i,t)=>{t.d(i,{Z:()=>s});var y=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(a){const u=(0,_.s0)();return(0,y.useCallback)(()=>u(a),[u,a])}}}]);})();
