"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(E,i,t)=>{var f,k,l;t.r(i),t.d(i,{Default:()=>n,__namedExportsOrder:()=>y,default:()=>v});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),e=t("../../packages/my-jetpack/_inc/state/store.js"),_=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),g=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`/* eslint-disable react/react-in-jsx-scope */

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
`,a={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const u=(0,g.As)();(0,e.N)();const v={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:c.Z,argTypes:{slug:{options:(0,g.h7)(),control:{type:"select"}},status:{options:Object.values(_.N),control:{type:"select"}}}},D=r=>(0,o.jsx)(d.UT,{children:(0,o.jsx)(s.Z5,{children:(0,o.jsx)(s.AW,{path:"/",element:(0,o.jsx)(c.Z,{...r})})})});D.displayName="Template";const n=D.bind({});n.parameters={mockData:u},n.args={admin:!1,slug:"backup"},n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(l=(k=n.parameters)==null?void 0:k.docs)==null?void 0:l.source}}};const y=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(E,i,t)=>{t.d(i,{Z:()=>v});var m=t("../components/components/icons/index.tsx"),d=t("../connection/components/use-connection/index.jsx"),s=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),c=t.n(s),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),g=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),o=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),P=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u=D=>{let{admin:n,slug:y,children:f,showMenu:k=!1,menuItems:l=[]}=D;const{isRegistered:r,isUserConnected:C}=(0,d.Z)(),{detail:I,status:h,activate:O,deactivate:L,isFetching:W,installStandalonePlugin:M}=(0,g.i)(y),{name:w,description:K,manageUrl:j,requiresUserConnection:T,standalonePluginInfo:p}=I,[F,x]=(0,e.useState)(!1),R=(0,_.Z)("/connection"),J=(0,_.Z)(`add-${y}`),S=p==null?void 0:p.hasStandalonePlugin,N=r&&C,A=p==null?void 0:p.isStandaloneInstalled,U=p==null?void 0:p.isStandaloneActive,H=h===o.N.ABSENT||h===o.N.ABSENT_WITH_PLAN,Z=S&&(!A||!U),V=k&&!H&&h!==o.N.ERROR&&N&&(h===o.N.ACTIVE||(l==null?void 0:l.length)>0||Z),G=(0,e.useCallback)(()=>{window.location=j},[j]),z=(0,e.useCallback)(()=>{if((!r||!C)&&T){R();return}O()},[O,r,C,T,R]),b=(0,e.useCallback)(()=>{x(!0),M().then(()=>{var B;(B=window==null?void 0:window.location)==null||B.reload()}).catch(()=>{x(!1)})},[M]),$=(0,m.getIconBySlug)(y);return(0,a.jsx)(P.Z,{name:w,description:K,status:h,icon:(0,a.jsx)($,{opacity:.4}),admin:n,isFetching:W,isInstallingStandalone:F,onDeactivate:L,slug:y,onActivate:z,onAdd:J,onManage:G,onFixConnection:R,showMenu:V,menuItems:l,showManageOption:h===o.N.ACTIVE,showActivateOption:S&&A&&!U,showInstallOption:S&&!A,onInstallStandalone:b,onActivateStandalone:b,children:f})};u.displayName="ConnectedProductCard",u.propTypes={children:c().node,admin:c().bool.isRequired,slug:c().string.isRequired},u.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const v=u},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(E,i,t)=>{t.d(i,{As:()=>v,TN:()=>u,h7:()=>D});const a={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function u(n){const f=n.constructor===Array?n:[n],k=f.map(r=>({url:`my-jetpack/v1/site/products/${r}?_locale=user`,method:"GET",status:200,response:a[r]})),l=f.map(r=>({url:`my-jetpack/v1/site/products/${r}?_locale=user`,method:"POST",status:200,response:{...a[r],status:a[r].status==="active"?"inactive":"active"}}));return[...k,...l]}function v(){return u([...Object.keys(a)])}function D(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(E,i,t)=>{t.d(i,{Z:()=>s});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(c){const e=(0,d.s0)();return(0,m.useCallback)(()=>e(c),[e,c])}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(E,i,t)=>{t.d(i,{i:()=>c});var m=t("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),d=t("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),s=t("../../packages/my-jetpack/_inc/state/store.js");function c(e){const{activateProduct:_,deactivateProduct:g,installStandalonePluginForProduct:o}=(0,m.Z)(s.t),P=(0,d.Z)(a=>a(s.t).getProduct(e));return{activate:()=>_(e),deactivate:()=>g(e),installStandalonePlugin:()=>o(e),productsList:(0,d.Z)(a=>a(s.t).getProducts()),detail:P,isActive:P.status==="active",isFetching:(0,d.Z)(a=>a(s.t).isFetching(e)),status:P.status}}}}]);})();
