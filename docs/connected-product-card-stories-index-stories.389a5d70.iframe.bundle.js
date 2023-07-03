"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(k,d,t)=>{var P,p,_;t.r(d),t.d(d,{Default:()=>o,__namedExportsOrder:()=>E,default:()=>v});var g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),e=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),a=t("../../packages/my-jetpack/_inc/state/store.js"),f=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),u=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),D=`/* eslint-disable react/react-in-jsx-scope */

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
`,c={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const s=(0,u.As)();(0,a.N)();const v={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:e.Z,argTypes:{slug:{options:(0,u.h7)(),control:{type:"select"}},status:{options:Object.values(f.N),control:{type:"select"}}}},y=r=>(0,l.jsx)(i.UT,{children:(0,l.jsx)(n.Z5,{children:(0,l.jsx)(n.AW,{path:"/",element:(0,l.jsx)(e.Z,{...r})})})});y.displayName="Template";const o=y.bind({});o.parameters={mockData:s},o.args={admin:!1,slug:"backup"},o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(_=(p=o.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const E=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(k,d,t)=>{t.d(d,{Z:()=>s});var g=t("../connection/components/use-connection/index.jsx"),i=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=t.n(i),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),f=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),u=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),l=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),D=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=v=>{let{admin:y,slug:o,children:E,showMenu:P=!1,menuItems:p=[]}=v;const{isRegistered:_,isUserConnected:r}=(0,g.Z)(),{detail:F,activate:j,deactivate:J,isFetching:H,installStandalonePlugin:T,deactivateStandalonePlugin:b}=(0,f.i)(o),{name:N,description:Z,manageUrl:C,purchaseUrl:R,requiresUserConnection:U,standalonePluginInfo:m,status:S}=F,[G,x]=(0,e.useState)(!1),[z,B]=(0,e.useState)(!1),A=(0,a.Z)("/connection"),V=(0,a.Z)(`add-${o}`),$=(0,e.useCallback)(()=>{window.location=R},[R]),O=m==null?void 0:m.hasStandalonePlugin,M=m==null?void 0:m.isStandaloneInstalled,w=m==null?void 0:m.isStandaloneActive,L=O&&M&&!w,W=O&&M&&w,I=O&&!M,X=_&&r,Y=S===u.N.ABSENT||S===u.N.ABSENT_WITH_PLAN,Q=P&&!Y&&S!==u.N.ERROR&&X&&((p==null?void 0:p.length)>0||L||W||I),q=(0,e.useCallback)(()=>{window.location=C},[C]),tt=(0,e.useCallback)(()=>{if((!_||!r)&&U){A();return}j()},[j,_,r,U,A]),K=(0,e.useCallback)(()=>{x(!0),T().then(()=>{var h;(h=window==null?void 0:window.location)==null||h.reload()}).catch(()=>{x(!1)})},[T]),et=(0,e.useCallback)(()=>{B(!0),b().then(()=>{var h;(h=window==null?void 0:window.location)==null||h.reload()}).catch(()=>{B(!1)})},[b]);return(0,D.jsx)(l.Z,{name:N,description:Z,status:S,admin:y,isFetching:H,isInstallingStandalone:G,isDeactivatingStandalone:z,isManageDisabled:!C,onDeactivate:J,slug:o,onActivate:tt,onAdd:R?$:V,onManage:q,onFixConnection:A,showMenu:Q,menuItems:p,showActivateOption:L,showDeactivateOption:W,showInstallOption:I,onInstallStandalone:K,onActivateStandalone:K,onDeactivateStandalone:et,children:E})};c.displayName="ConnectedProductCard",c.propTypes={children:n().node,admin:n().bool.isRequired,slug:n().string.isRequired},c.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const s=c},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(k,d,t)=>{t.d(d,{As:()=>v,TN:()=>s,h7:()=>y});const c={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function s(o){const P=o.constructor===Array?o:[o],p=P.map(r=>({url:`my-jetpack/v1/site/products/${r}?_locale=user`,method:"GET",status:200,response:c[r]})),_=P.map(r=>({url:`my-jetpack/v1/site/products/${r}?_locale=user`,method:"POST",status:200,response:{...c[r],status:c[r].status==="active"?"inactive":"active"}}));return[...p,..._]}function v(){return s([...Object.keys(c)])}function y(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(k,d,t)=>{t.d(d,{Z:()=>n});var g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function n(e){const a=(0,i.s0)();return(0,g.useCallback)(()=>a(e),[a,e])}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(k,d,t)=>{t.d(d,{i:()=>e});var g=t("../../../node_modules/.pnpm/@wordpress+data@9.6.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),i=t("../../../node_modules/.pnpm/@wordpress+data@9.6.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),n=t("../../packages/my-jetpack/_inc/state/store.js");function e(a){const{activateProduct:f,deactivateProduct:u,installStandalonePluginForProduct:l,deactivateStandalonePluginForProduct:D}=(0,g.Z)(n.t),c=(0,i.Z)(s=>s(n.t).getProduct(a));return{activate:()=>f(a),deactivate:()=>u(a),deactivateStandalonePlugin:()=>D(a),installStandalonePlugin:()=>l(a),productsList:(0,i.Z)(s=>s(n.t).getProducts()),detail:c,isActive:c.status==="active",isFetching:(0,i.Z)(s=>s(n.t).isFetching(a)),stats:(0,i.Z)(s=>s(n.t).getProductStats(a))}}}}]);})();
