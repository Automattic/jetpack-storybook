"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(v,d,t)=>{var y,h,l;t.r(d),t.d(d,{Default:()=>s,__namedExportsOrder:()=>P,default:()=>k});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),o=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),n=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),e=t("../../packages/my-jetpack/_inc/state/store.js"),_=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),g=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=`/* eslint-disable react/react-in-jsx-scope */

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
`,a={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const u=(0,g.As)();(0,e.N)();const k={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:n.Z,argTypes:{slug:{options:(0,g.h7)(),control:{type:"select"}},status:{options:Object.values(_.N),control:{type:"select"}}}},D=c=>(0,i.jsx)(r.UT,{children:(0,i.jsx)(o.Z5,{children:(0,i.jsx)(o.AW,{path:"/",element:(0,i.jsx)(n.Z,{...c})})})});D.displayName="Template";const s=D.bind({});s.parameters={mockData:u},s.args={admin:!1,slug:"backup"},s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const P=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(v,d,t)=>{t.d(d,{Z:()=>k});var m=t("../components/components/icons/index.tsx"),r=t("../connection/components/use-connection/index.jsx"),o=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=t.n(o),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),g=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),i=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),f=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u=D=>{let{admin:s,slug:P,children:y,showMenu:h=!1,menuItems:l=[]}=D;const{isRegistered:c,isUserConnected:C}=(0,r.Z)(),{detail:L,activate:S,deactivate:W,isFetching:w,installStandalonePlugin:A}=(0,g.i)(P),{name:K,description:F,manageUrl:O,requiresUserConnection:M,standalonePluginInfo:p,status:E}=L,[J,j]=(0,e.useState)(!1),R=(0,_.Z)("/connection"),H=(0,_.Z)(`add-${P}`),T=p==null?void 0:p.hasStandalonePlugin,x=p==null?void 0:p.isStandaloneInstalled,N=p==null?void 0:p.isStandaloneActive,U=T&&x&&!N,b=T&&!x,Z=c&&C,G=E===i.N.ABSENT||E===i.N.ABSENT_WITH_PLAN,z=h&&!G&&E!==i.N.ERROR&&Z&&((l==null?void 0:l.length)>0||U||b),V=(0,e.useCallback)(()=>{window.location=O},[O]),$=(0,e.useCallback)(()=>{if((!c||!C)&&M){R();return}S()},[S,c,C,M,R]),B=(0,e.useCallback)(()=>{j(!0),A().then(()=>{var I;(I=window==null?void 0:window.location)==null||I.reload()}).catch(()=>{j(!1)})},[A]),X=(0,m.getIconBySlug)(P);return(0,a.jsx)(f.Z,{name:K,description:F,status:E,icon:(0,a.jsx)(X,{opacity:.4}),admin:s,isFetching:w,isInstallingStandalone:J,onDeactivate:W,slug:P,onActivate:$,onAdd:H,onManage:V,onFixConnection:R,showMenu:z,menuItems:l,showActivateOption:U,showInstallOption:b,onInstallStandalone:B,onActivateStandalone:B,children:y})};u.displayName="ConnectedProductCard",u.propTypes={children:n().node,admin:n().bool.isRequired,slug:n().string.isRequired},u.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const k=u},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(v,d,t)=>{t.d(d,{As:()=>k,TN:()=>u,h7:()=>D});const a={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function u(s){const y=s.constructor===Array?s:[s],h=y.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"GET",status:200,response:a[c]})),l=y.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"POST",status:200,response:{...a[c],status:a[c].status==="active"?"inactive":"active"}}));return[...h,...l]}function k(){return u([...Object.keys(a)])}function D(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(v,d,t)=>{t.d(d,{Z:()=>o});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function o(n){const e=(0,r.s0)();return(0,m.useCallback)(()=>e(n),[e,n])}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(v,d,t)=>{t.d(d,{i:()=>n});var m=t("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),r=t("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),o=t("../../packages/my-jetpack/_inc/state/store.js");function n(e){const{activateProduct:_,deactivateProduct:g,installStandalonePluginForProduct:i}=(0,m.Z)(o.t),f=(0,r.Z)(a=>a(o.t).getProduct(e));return{activate:()=>_(e),deactivate:()=>g(e),installStandalonePlugin:()=>i(e),productsList:(0,r.Z)(a=>a(o.t).getProducts()),detail:f,isActive:f.status==="active",isFetching:(0,r.Z)(a=>a(o.t).isFetching(e)),stats:(0,r.Z)(a=>a(o.t).getProductStats(e))}}}}]);})();
