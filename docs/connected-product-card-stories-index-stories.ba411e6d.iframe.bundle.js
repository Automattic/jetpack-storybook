"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(O,a,e)=>{var v,P,D;e.r(a),e.d(a,{Default:()=>c,__namedExportsOrder:()=>k,default:()=>g});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),i=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),s=e("../../packages/my-jetpack/_inc/state/store.js"),_=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),f=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`/* eslint-disable react/react-in-jsx-scope */

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
`,p={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const d=(0,f.As)();(0,s.N)();const g={parameters:{storySource:{source:`

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
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:t.Z,argTypes:{slug:{options:(0,f.h7)(),control:{type:"select"}},status:{options:Object.values(_.N),control:{type:"select"}}}},y=m=>(0,l.jsx)(r.UT,{children:(0,l.jsx)(i.Z5,{children:(0,l.jsx)(i.AW,{path:"/",element:(0,l.jsx)(t.Z,{...m})})})});y.displayName="Template";const c=y.bind({});c.parameters={mockData:d},c.args={admin:!1,slug:"backup"},c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(D=(P=c.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const k=["Default"]},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(O,a,e)=>{e.d(a,{Z:()=>g});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(r),t=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.47.0/node_modules/@wordpress/deprecated/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const p=(y,c)=>{const{renderContent:k,renderToggle:v,className:P,contentClassName:D,expandOnMobile:m,headerTitle:R,focusOnMount:L,popoverProps:o,onClose:A,onToggle:W,style:U,open:K,defaultOpen:F,position:x,variant:b}=(0,_.y)(y,"Dropdown");x!==void 0&&(0,s.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[N,J]=(0,n.useState)(null),h=(0,n.useRef)(),[u,M]=(0,l.O)({defaultValue:F,value:K,onChange:W});function H(){var j;if(!h.current)return;const{ownerDocument:C}=h.current,S=(j=C==null?void 0:C.activeElement)==null?void 0:j.closest('[role="dialog"]');!h.current.contains(C.activeElement)&&(!S||S.contains(h.current))&&T()}function T(){A==null||A(),M(!1)}const B={isOpen:!!u,onToggle:()=>M(!u),onClose:T},I=!!(o!=null&&o.anchor)||!!(o!=null&&o.anchorRef)||!!(o!=null&&o.getAnchorRect)||!!(o!=null&&o.anchorRect);return(0,n.createElement)("div",{className:P,ref:(0,t.Z)([h,c,J]),tabIndex:-1,style:U},v(B),u&&(0,n.createElement)(E.ZP,{position:x,onClose:T,onFocusOutside:H,expandOnMobile:m,headerTitle:R,focusOnMount:L,offset:13,anchor:I?void 0:N,variant:b,...o,className:i()("components-dropdown__content",o==null?void 0:o.className,D)},k(B)))},g=(0,f.Iq)(p,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(O,a,e)=>{e.d(a,{O:()=>r});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({defaultValue:i,onChange:t,value:s}){const _=typeof s!="undefined",f=_?s:i,[l,E]=(0,n.useState)(f),p=_?s:l;let d;return _&&typeof t=="function"?d=t:!_&&typeof t=="function"?d=g=>{t(g),E(g)}:d=E,[p,d]}},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(O,a,e)=>{e.d(a,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(O,a,e)=>{e.d(a,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(O,a,e)=>{e.d(a,{Z:()=>g});var n=e("../components/components/text/index.tsx"),r=e("../connection/components/use-connection/index.jsx"),i=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(i),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),l=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),E=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=({admin:y,slug:c,children:k,isDataLoading:v,showMenu:P=!1,Description:D=null,additionalActions:m=null,menuItems:R=[],upgradeInInterstitial:L=!1})=>{const{isRegistered:o,isUserConnected:A}=(0,r.Z)(),{detail:W,activate:U,deactivate:K,isFetching:F,installStandalonePlugin:x,deactivateStandalonePlugin:b}=(0,f.i)(c),{name:N,description:J,requiresUserConnection:h,standalonePluginInfo:u,status:M}=W,[H,T]=(0,s.useState)(!1),[B,I]=(0,s.useState)(!1),C=(0,_.Z)("/connection"),S=u==null?void 0:u.hasStandalonePlugin,j=u==null?void 0:u.isStandaloneInstalled,V=u==null?void 0:u.isStandaloneActive,Z=S&&j&&!V,z=S&&j&&V,G=S&&!j,$=o&&A,Y=M===l.N.ABSENT||M===l.N.ABSENT_WITH_PLAN,Q=P&&!Y&&M!==l.N.ERROR&&$&&((R==null?void 0:R.length)>0||Z||z||G),q=(0,s.useCallback)(()=>{if((!o||!A)&&h){C();return}U()},[U,o,A,h,C]),X=(0,s.useCallback)(()=>{T(!0),x().then(()=>{var w;(w=window==null?void 0:window.location)==null||w.reload()}).catch(()=>{T(!1)})},[x]),ee=(0,s.useCallback)(()=>{I(!0),b().then(()=>{var w;(w=window==null?void 0:window.location)==null||w.reload()}).catch(()=>{I(!1)})},[b]),te=()=>(0,p.jsx)(n.ZP,{variant:"body-small",style:{flexGrow:1},children:J});return(0,p.jsx)(E.ZP,{name:N,Description:D||te,status:M,admin:y,isFetching:F,isDataLoading:v,isInstallingStandalone:H,isDeactivatingStandalone:B,onDeactivate:K,additionalActions:m,slug:c,onActivate:q,showMenu:Q,menuItems:R,showActivateOption:Z,showDeactivateOption:z,showInstallOption:G,onInstallStandalone:X,onActivateStandalone:X,onDeactivateStandalone:ee,upgradeInInterstitial:L,children:k})};d.displayName="ConnectedProductCard",d.propTypes={children:t().node,admin:t().bool.isRequired,slug:t().string.isRequired,isDataLoading:t().bool,showMenu:t().bool,additionalActions:t().array,menuItems:t().array};const g=d;d.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(O,a,e)=>{e.d(a,{As:()=>g,TN:()=>d,h7:()=>y});const p={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function d(c){const v=c.constructor===Array?c:[c],P=v.map(m=>({url:`my-jetpack/v1/site/products/${m}?_locale=user`,method:"GET",status:200,response:p[m]})),D=v.map(m=>({url:`my-jetpack/v1/site/products/${m}?_locale=user`,method:"POST",status:200,response:{...p[m],status:p[m].status==="active"?"inactive":"active"}}));return[...P,...D]}function g(){return d([...Object.keys(p)])}function y(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(O,a,e)=>{e.d(a,{Z:()=>i});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function i(t){const s=(0,r.s0)();return(0,n.useCallback)(()=>s(t),[s,t])}}}]);})();
