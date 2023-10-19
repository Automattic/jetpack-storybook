"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../../node_modules/.pnpm/@wordpress+components@25.10.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(O,s,e)=>{e.d(s,{Z:()=>v});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=e.n(a),t=e("../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.44.0/node_modules/@wordpress/deprecated/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),P=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const d=(h,r)=>{const{renderContent:M,renderToggle:D,className:g,contentClassName:E,expandOnMobile:i,headerTitle:F,focusOnMount:B,popoverProps:n,onClose:S,onToggle:I,style:W,open:N,defaultOpen:J,position:T,variant:f}=(0,p.y)(h,"Dropdown");T!==void 0&&(0,l.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[k,H]=(0,o.useState)(null),y=(0,o.useRef)(),[j,x]=(0,_.O)({defaultValue:J,value:N,onChange:I});function L(){var U;if(!y.current)return;const{ownerDocument:R}=y.current,w=(U=R==null?void 0:R.activeElement)==null?void 0:U.closest('[role="dialog"]');!y.current.contains(R.activeElement)&&(!w||w.contains(y.current))&&C()}function C(){S==null||S(),x(!1)}const A={isOpen:!!j,onToggle:()=>x(!j),onClose:C},K=!!(n!=null&&n.anchor)||!!(n!=null&&n.anchorRef)||!!(n!=null&&n.getAnchorRect)||!!(n!=null&&n.anchorRect);return(0,o.createElement)("div",{className:g,ref:(0,t.Z)([y,r,H]),tabIndex:-1,style:W},D(A),j&&(0,o.createElement)(P.ZP,{position:T,onClose:C,onFocusOutside:L,expandOnMobile:i,headerTitle:F,focusOnMount:B,offset:13,anchor:K?void 0:k,variant:f,...n,className:c()("components-dropdown__content",n==null?void 0:n.className,E)},M(A)))},v=(0,m.Iq)(d,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(O,s,e)=>{e.d(s,{O:()=>a});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a({defaultValue:c,onChange:t,value:l}){const p=typeof l!="undefined",m=p?l:c,[_,P]=(0,o.useState)(m),d=p?l:_;let u;return p&&typeof t=="function"?u=t:!p&&typeof t=="function"?u=v=>{t(v),P(v)}:u=P,[d,u]}},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(O,s,e)=>{e.d(s,{Z:()=>t});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(O,s,e)=>{e.d(s,{Z:()=>t});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(O,s,e)=>{var D,g,E;e.r(s),e.d(s,{Default:()=>r,__namedExportsOrder:()=>M,default:()=>v});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),c=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),l=e("../../packages/my-jetpack/_inc/state/store.js"),p=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),m=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`/* eslint-disable react/react-in-jsx-scope */

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
`,d={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const u=(0,m.As)();(0,l.N)();const v={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:t.Z,argTypes:{slug:{options:(0,m.h7)(),control:{type:"select"}},status:{options:Object.values(p.N),control:{type:"select"}}}},h=i=>(0,_.jsx)(a.UT,{children:(0,_.jsx)(c.Z5,{children:(0,_.jsx)(c.AW,{path:"/",element:(0,_.jsx)(t.Z,{...i})})})});h.displayName="Template";const r=h.bind({});r.parameters={mockData:u},r.args={admin:!1,slug:"backup"},r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(E=(g=r.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const M=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(O,s,e)=>{e.d(s,{Z:()=>u});var o=e("../connection/components/use-connection/index.jsx"),a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),c=e.n(a),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),p=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),m=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),_=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),P=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=v=>{let{admin:h,slug:r,children:M,showMenu:D=!1,menuItems:g=[]}=v;const{isRegistered:E,isUserConnected:i}=(0,o.Z)(),{detail:F,activate:B,deactivate:n,isFetching:S,installStandalonePlugin:I,deactivateStandalonePlugin:W}=(0,p.i)(r),{name:N,description:J,requiresUserConnection:T,standalonePluginInfo:f,status:k}=F,[H,y]=(0,t.useState)(!1),[j,x]=(0,t.useState)(!1),L=(0,l.Z)("/connection"),C=f==null?void 0:f.hasStandalonePlugin,A=f==null?void 0:f.isStandaloneInstalled,K=f==null?void 0:f.isStandaloneActive,R=C&&A&&!K,w=C&&A&&K,U=C&&!A,V=E&&i,z=k===m.N.ABSENT||k===m.N.ABSENT_WITH_PLAN,G=D&&!z&&k!==m.N.ERROR&&V&&((g==null?void 0:g.length)>0||R||w||U),X=(0,t.useCallback)(()=>{if((!E||!i)&&T){L();return}B()},[B,E,i,T,L]),Z=(0,t.useCallback)(()=>{y(!0),I().then(()=>{var b;(b=window==null?void 0:window.location)==null||b.reload()}).catch(()=>{y(!1)})},[I]),$=(0,t.useCallback)(()=>{x(!0),W().then(()=>{var b;(b=window==null?void 0:window.location)==null||b.reload()}).catch(()=>{x(!1)})},[W]);return(0,P.jsx)(_.ZP,{name:N,description:J,status:k,admin:h,isFetching:S,isInstallingStandalone:H,isDeactivatingStandalone:j,onDeactivate:n,slug:r,onActivate:X,showMenu:G,menuItems:g,showActivateOption:R,showDeactivateOption:w,showInstallOption:U,onInstallStandalone:Z,onActivateStandalone:Z,onDeactivateStandalone:$,children:M})};d.displayName="ConnectedProductCard",d.propTypes={children:c().node,admin:c().bool.isRequired,slug:c().string.isRequired},d.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const u=d},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(O,s,e)=>{e.d(s,{As:()=>v,TN:()=>u,h7:()=>h});const d={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function u(r){const D=r.constructor===Array?r:[r],g=D.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"GET",status:200,response:d[i]})),E=D.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"POST",status:200,response:{...d[i],status:d[i].status==="active"?"inactive":"active"}}));return[...g,...E]}function v(){return u([...Object.keys(d)])}function h(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(O,s,e)=>{e.d(s,{Z:()=>c});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function c(t){const l=(0,a.s0)();return(0,o.useCallback)(()=>l(t),[l,t])}}}]);})();
