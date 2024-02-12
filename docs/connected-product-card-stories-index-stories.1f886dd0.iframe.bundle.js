"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(O,a,e)=>{var v,P,y;e.r(a),e.d(a,{Default:()=>c,__namedExportsOrder:()=>C,default:()=>f});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),d=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),s=e("../../packages/my-jetpack/_inc/state/store.js"),m=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),g=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),D=`/* eslint-disable react/react-in-jsx-scope */

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
`,u={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const i=(0,g.As)();(0,s.N)();const f={parameters:{storySource:{source:`

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
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:t.Z,argTypes:{slug:{options:(0,g.h7)(),control:{type:"select"}},status:{options:Object.values(m.N),control:{type:"select"}}}},E=p=>(0,l.jsx)(r.UT,{children:(0,l.jsx)(d.Z5,{children:(0,l.jsx)(d.AW,{path:"/",element:(0,l.jsx)(t.Z,{...p})})})});E.displayName="Template";const c=E.bind({});c.parameters={mockData:i},c.args={admin:!1,slug:"backup"},c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(y=(P=c.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const C=["Default"]},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(O,a,e)=>{e.d(a,{Z:()=>f});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(r),t=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.51.0/node_modules/@wordpress/deprecated/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),D=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const u=(E,c)=>{const{renderContent:C,renderToggle:v,className:P,contentClassName:y,expandOnMobile:p,headerTitle:N,focusOnMount:k,popoverProps:n,onClose:j,onToggle:T,style:S,open:J,defaultOpen:B,position:I,variant:V}=(0,m.y)(E,"Dropdown");I!==void 0&&(0,s.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[L,W]=(0,o.useState)(null),A=(0,o.useRef)(),[x,b]=(0,l.O)({defaultValue:B,value:J,onChange:T});function _(){var U;if(!A.current)return;const{ownerDocument:R}=A.current,w=(U=R==null?void 0:R.activeElement)==null?void 0:U.closest('[role="dialog"]');!A.current.contains(R.activeElement)&&(!w||w.contains(A.current))&&h()}function h(){j==null||j(),b(!1)}const K={isOpen:!!x,onToggle:()=>b(!x),onClose:h},F=!!(n!=null&&n.anchor)||!!(n!=null&&n.anchorRef)||!!(n!=null&&n.getAnchorRect)||!!(n!=null&&n.anchorRect);return(0,o.createElement)("div",{className:P,ref:(0,t.Z)([A,c,W]),tabIndex:-1,style:S},v(K),x&&(0,o.createElement)(D.ZP,{position:I,onClose:h,onFocusOutside:_,expandOnMobile:p,headerTitle:N,focusOnMount:k,offset:13,anchor:F?void 0:L,variant:V,...n,className:d()("components-dropdown__content",n==null?void 0:n.className,y)},C(K)))},f=(0,g.Iq)(u,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(O,a,e)=>{e.d(a,{O:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({defaultValue:d,onChange:t,value:s}){const m=typeof s!="undefined",g=m?s:d,[l,D]=(0,o.useState)(g),u=m?s:l;let i;return m&&typeof t=="function"?i=t:!m&&typeof t=="function"?i=f=>{t(f),D(f)}:i=D,[u,i]}},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(O,a,e)=>{e.d(a,{Z:()=>t});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(O,a,e)=>{e.d(a,{Z:()=>t});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(O,a,e)=>{e.d(a,{Z:()=>f});var o=e("../components/components/text/index.tsx"),r=e("../connection/components/use-connection/index.jsx"),d=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(d),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),g=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),l=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),D=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=({admin:E,slug:c,children:C,isDataLoading:v,showMenu:P=!1,Description:y=null,additionalActions:p=null,secondaryAction:N=null,menuItems:k=[],upgradeInInterstitial:n=!1,primaryActionOverride:j})=>{const{isRegistered:T,isUserConnected:S}=(0,r.Z)(),{detail:J,activate:B,deactivate:I,isFetching:V,installStandalonePlugin:L,deactivateStandalonePlugin:W}=(0,g.i)(c),{name:A,description:x,requiresUserConnection:b,standalonePluginInfo:_,status:h}=J,[K,F]=(0,s.useState)(!1),[R,w]=(0,s.useState)(!1),U=(0,m.Z)("/connection"),H=_==null?void 0:_.hasStandalonePlugin,Z=_==null?void 0:_.isStandaloneInstalled,z=_==null?void 0:_.isStandaloneActive,G=H&&Z&&!z,X=H&&Z&&z,$=H&&!Z,Q=T&&S,q=h===l.N.ABSENT||h===l.N.ABSENT_WITH_PLAN,ee=P&&!q&&h!==l.N.ERROR&&Q&&((k==null?void 0:k.length)>0||G||X||$),te=(0,s.useCallback)(()=>{if((!T||!S)&&b){U();return}B()},[B,T,S,b,U]),Y=(0,s.useCallback)(()=>{F(!0),L().then(()=>{var M;(M=window==null?void 0:window.location)==null||M.reload()}).catch(()=>{F(!1)})},[L]),oe=(0,s.useCallback)(()=>{w(!0),W().then(()=>{var M;(M=window==null?void 0:window.location)==null||M.reload()}).catch(()=>{w(!1)})},[W]),ne=()=>{const M=x.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,u.jsx)(o.ZP,{variant:"body-small",style:{flexGrow:1},children:M})};return(0,u.jsx)(D.ZP,{name:A,Description:y||ne,status:h,admin:E,isFetching:V,isDataLoading:v,isInstallingStandalone:K,isDeactivatingStandalone:R,onDeactivate:I,additionalActions:p,primaryActionOverride:j,secondaryAction:N,slug:c,onActivate:te,showMenu:ee,menuItems:k,showActivateOption:G,showDeactivateOption:X,showInstallOption:$,onInstallStandalone:Y,onActivateStandalone:Y,onDeactivateStandalone:oe,upgradeInInterstitial:n,children:C})};i.displayName="ConnectedProductCard",i.propTypes={children:t().node,admin:t().bool.isRequired,slug:t().string.isRequired,isDataLoading:t().bool,showMenu:t().bool,additionalActions:t().array,primaryActionOverride:t().object,secondaryAction:t().object,menuItems:t().array};const f=i;i.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(O,a,e)=>{e.d(a,{As:()=>f,TN:()=>i,h7:()=>E});const u={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function i(c){const v=c.constructor===Array?c:[c],P=v.map(p=>({url:`my-jetpack/v1/site/products/${p}?_locale=user`,method:"GET",status:200,response:u[p]})),y=v.map(p=>({url:`my-jetpack/v1/site/products/${p}?_locale=user`,method:"POST",status:200,response:{...u[p],status:u[p].status==="active"?"inactive":"active"}}));return[...P,...y]}function f(){return i([...Object.keys(u)])}function E(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(O,a,e)=>{e.d(a,{Z:()=>d});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function d(t){const s=(0,r.s0)();return(0,o.useCallback)(()=>s(t),[s,t])}}}]);})();
