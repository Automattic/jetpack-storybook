"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(C,a,e)=>{e.d(a,{Z:()=>g});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(r),t=e("../../../node_modules/.pnpm/@wordpress+compose@6.22.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.45.0/node_modules/@wordpress/deprecated/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const p=(P,c)=>{const{renderContent:R,renderToggle:D,className:y,contentClassName:v,expandOnMobile:m,headerTitle:A,focusOnMount:k,popoverProps:o,onClose:T,onToggle:b,style:F,open:N,defaultOpen:B,position:S,variant:J}=(0,_.y)(P,"Dropdown");S!==void 0&&(0,s.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[H,L]=(0,n.useState)(null),i=(0,n.useRef)(),[h,W]=(0,u.O)({defaultValue:B,value:N,onChange:b});function I(){var w;if(!i.current)return;const{ownerDocument:O}=i.current,M=(w=O==null?void 0:O.activeElement)==null?void 0:w.closest('[role="dialog"]');!i.current.contains(O.activeElement)&&(!M||M.contains(i.current))&&j()}function j(){T==null||T(),W(!1)}const x={isOpen:!!h,onToggle:()=>W(!h),onClose:j},K=!!(o!=null&&o.anchor)||!!(o!=null&&o.anchorRef)||!!(o!=null&&o.getAnchorRect)||!!(o!=null&&o.anchorRect);return(0,n.createElement)("div",{className:y,ref:(0,t.Z)([i,c,L]),tabIndex:-1,style:F},D(x),h&&(0,n.createElement)(E.ZP,{position:S,onClose:j,onFocusOutside:I,expandOnMobile:m,headerTitle:A,focusOnMount:k,offset:13,anchor:K?void 0:H,variant:J,...o,className:l()("components-dropdown__content",o==null?void 0:o.className,v)},R(x)))},g=(0,f.Iq)(p,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(C,a,e)=>{e.d(a,{O:()=>r});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({defaultValue:l,onChange:t,value:s}){const _=typeof s!="undefined",f=_?s:l,[u,E]=(0,n.useState)(f),p=_?s:u;let d;return _&&typeof t=="function"?d=t:!_&&typeof t=="function"?d=g=>{t(g),E(g)}:d=E,[p,d]}},"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(C,a,e)=>{e.d(a,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.43.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(C,a,e)=>{e.d(a,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.43.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(C,a,e)=>{var D,y,v;e.r(a),e.d(a,{Default:()=>c,__namedExportsOrder:()=>R,default:()=>g});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),l=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),s=e("../../packages/my-jetpack/_inc/state/store.js"),_=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),f=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`/* eslint-disable react/react-in-jsx-scope */

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
`,p={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const d=(0,f.As)();(0,s.N)();const g={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:t.Z,argTypes:{slug:{options:(0,f.h7)(),control:{type:"select"}},status:{options:Object.values(_.N),control:{type:"select"}}}},P=m=>(0,u.jsx)(r.UT,{children:(0,u.jsx)(l.Z5,{children:(0,u.jsx)(l.AW,{path:"/",element:(0,u.jsx)(t.Z,{...m})})})});P.displayName="Template";const c=P.bind({});c.parameters={mockData:d},c.args={admin:!1,slug:"backup"},c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const R=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(C,a,e)=>{e.d(a,{Z:()=>g});var n=e("../components/components/text/index.tsx"),r=e("../connection/components/use-connection/index.jsx"),l=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(l),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),u=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),E=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=({admin:P,slug:c,children:R,isDataLoading:D,showMenu:y=!1,Description:v=null,additionalActions:m=null,menuItems:A=[]})=>{const{isRegistered:k,isUserConnected:o}=(0,r.Z)(),{detail:T,activate:b,deactivate:F,isFetching:N,installStandalonePlugin:B,deactivateStandalonePlugin:S}=(0,f.i)(c),{name:J,description:H,requiresUserConnection:L,standalonePluginInfo:i,status:h}=T,[W,I]=(0,s.useState)(!1),[j,x]=(0,s.useState)(!1),K=(0,_.Z)("/connection"),O=i==null?void 0:i.hasStandalonePlugin,M=i==null?void 0:i.isStandaloneInstalled,w=i==null?void 0:i.isStandaloneActive,V=O&&M&&!w,Z=O&&M&&w,z=O&&!M,X=k&&o,$=h===u.N.ABSENT||h===u.N.ABSENT_WITH_PLAN,Y=y&&!$&&h!==u.N.ERROR&&X&&((A==null?void 0:A.length)>0||V||Z||z),Q=(0,s.useCallback)(()=>{if((!k||!o)&&L){K();return}b()},[b,k,o,L,K]),G=(0,s.useCallback)(()=>{I(!0),B().then(()=>{var U;(U=window==null?void 0:window.location)==null||U.reload()}).catch(()=>{I(!1)})},[B]),q=(0,s.useCallback)(()=>{x(!0),S().then(()=>{var U;(U=window==null?void 0:window.location)==null||U.reload()}).catch(()=>{x(!1)})},[S]),ee=()=>(0,p.jsx)(n.ZP,{variant:"body-small",style:{flexGrow:1},children:H});return(0,p.jsx)(E.ZP,{name:J,Description:v||ee,status:h,admin:P,isFetching:N,isDataLoading:D,isInstallingStandalone:W,isDeactivatingStandalone:j,onDeactivate:F,additionalActions:m,slug:c,onActivate:Q,showMenu:Y,menuItems:A,showActivateOption:V,showDeactivateOption:Z,showInstallOption:z,onInstallStandalone:G,onActivateStandalone:G,onDeactivateStandalone:q,children:R})};d.displayName="ConnectedProductCard",d.propTypes={children:t().node,admin:t().bool.isRequired,slug:t().string.isRequired,isDataLoading:t().bool,showMenu:t().bool,additionalActions:t().array,menuItems:t().array},d.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1}}};const g=d},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(C,a,e)=>{e.d(a,{As:()=>g,TN:()=>d,h7:()=>P});const p={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function d(c){const D=c.constructor===Array?c:[c],y=D.map(m=>({url:`my-jetpack/v1/site/products/${m}?_locale=user`,method:"GET",status:200,response:p[m]})),v=D.map(m=>({url:`my-jetpack/v1/site/products/${m}?_locale=user`,method:"POST",status:200,response:{...p[m],status:p[m].status==="active"?"inactive":"active"}}));return[...y,...v]}function g(){return d([...Object.keys(p)])}function P(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(C,a,e)=>{e.d(a,{Z:()=>l});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function l(t){const s=(0,r.s0)();return(0,n.useCallback)(()=>s(t),[s,t])}}}]);})();
