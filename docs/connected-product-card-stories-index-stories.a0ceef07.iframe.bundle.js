"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(k,i,t)=>{var g,l,m;t.r(i),t.d(i,{Default:()=>o,__namedExportsOrder:()=>v,default:()=>h});var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),a=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),n=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),s=t("../../packages/my-jetpack/_inc/state/store.js"),P=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),d=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),u=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=`/* eslint-disable react/react-in-jsx-scope */

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
`,e={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const f=(0,d.As)();(0,s.N)();const h={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:n.Z,argTypes:{slug:{options:(0,d.h7)(),control:{type:"select"}},status:{options:Object.values(P.N),control:{type:"select"}}}},D=c=>(0,u.jsx)(r.UT,{children:(0,u.jsx)(a.Z5,{children:(0,u.jsx)(a.AW,{path:"/",element:(0,u.jsx)(n.Z,{...c})})})});D.displayName="Template";const o=D.bind({});o.parameters={mockData:f},o.args={admin:!1,slug:"backup"},o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const v=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(k,i,t)=>{t.d(i,{Z:()=>f});var _=t("../connection/components/use-connection/index.jsx"),r=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(r),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),P=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),d=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),u=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),y=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=h=>{let{admin:D,slug:o,children:v,showMenu:g=!1,menuItems:l=[]}=h;const{isRegistered:m,isUserConnected:c}=(0,_.Z)(),{detail:L,activate:R,deactivate:W,isFetching:w,installStandalonePlugin:S}=(0,P.i)(o),{name:I,description:K,manageUrl:A,requiresUserConnection:O,standalonePluginInfo:p,status:E}=L,[F,M]=(0,n.useState)(!1),C=(0,s.Z)("/connection"),J=(0,s.Z)(`add-${o}`),j=p==null?void 0:p.hasStandalonePlugin,T=p==null?void 0:p.isStandaloneInstalled,H=p==null?void 0:p.isStandaloneActive,b=j&&T&&!H,x=j&&!T,N=m&&c,Z=E===d.N.ABSENT||E===d.N.ABSENT_WITH_PLAN,G=g&&!Z&&E!==d.N.ERROR&&N&&((l==null?void 0:l.length)>0||b||x),z=(0,n.useCallback)(()=>{window.location=A},[A]),V=(0,n.useCallback)(()=>{if((!m||!c)&&O){C();return}R()},[R,m,c,O,C]),U=(0,n.useCallback)(()=>{M(!0),S().then(()=>{var B;(B=window==null?void 0:window.location)==null||B.reload()}).catch(()=>{M(!1)})},[S]);return(0,y.jsx)(u.Z,{name:I,description:K,status:E,admin:D,isFetching:w,isInstallingStandalone:F,onDeactivate:W,slug:o,onActivate:V,onAdd:J,onManage:z,onFixConnection:C,showMenu:G,menuItems:l,showActivateOption:b,showInstallOption:x,onInstallStandalone:U,onActivateStandalone:U,children:v})};e.displayName="ConnectedProductCard",e.propTypes={children:a().node,admin:a().bool.isRequired,slug:a().string.isRequired},e.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const f=e},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(k,i,t)=>{t.d(i,{As:()=>h,TN:()=>f,h7:()=>D});const e={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function f(o){const g=o.constructor===Array?o:[o],l=g.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"GET",status:200,response:e[c]})),m=g.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"POST",status:200,response:{...e[c],status:e[c].status==="active"?"inactive":"active"}}));return[...l,...m]}function h(){return f([...Object.keys(e)])}function D(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(k,i,t)=>{t.d(i,{Z:()=>a});var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function a(n){const s=(0,r.s0)();return(0,_.useCallback)(()=>s(n),[s,n])}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(k,i,t)=>{t.d(i,{i:()=>n});var _=t("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),r=t("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=t("../../packages/my-jetpack/_inc/state/store.js");function n(s){const{activateProduct:P,deactivateProduct:d,installStandalonePluginForProduct:u}=(0,_.Z)(a.t),y=(0,r.Z)(e=>e(a.t).getProduct(s));return{activate:()=>P(s),deactivate:()=>d(s),installStandalonePlugin:()=>u(s),productsList:(0,r.Z)(e=>e(a.t).getProducts()),detail:y,isActive:y.status==="active",isFetching:(0,r.Z)(e=>e(a.t).isFetching(s)),stats:(0,r.Z)(e=>e(a.t).getProductStats(s))}}}}]);})();
