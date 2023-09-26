"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(R,a,e)=>{e.d(a,{Z:()=>h});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(r),n=e("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.41.0/node_modules/@wordpress/deprecated/build-module/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js"),D=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function S(m,t){const[E,u]=(0,o.useState)(m);return[E,c=>{u(c),t&&t(c)}]}const l=(m,t)=>{const{renderContent:E,renderToggle:u,className:c,contentClassName:_,expandOnMobile:i,headerTitle:F,focusOnMount:b,popoverProps:s,onClose:B,onToggle:y,style:I,position:W,variant:N}=(0,k.y)(m,"Dropdown");W!==void 0&&(0,f.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[L,p]=(0,o.useState)(null),g=(0,o.useRef)(),[O,T]=S(!1,y);(0,o.useEffect)(()=>()=>{y&&O&&y(!1)},[y,O]);function J(){T(!O)}function K(){var w;if(!g.current)return;const{ownerDocument:C}=g.current,x=(w=C==null?void 0:C.activeElement)==null?void 0:w.closest('[role="dialog"]');!g.current.contains(C.activeElement)&&(!x||x.contains(g.current))&&A()}function A(){B&&B(),T(!1)}const M={isOpen:O,onToggle:J,onClose:A},j=!!(s!=null&&s.anchor)||!!(s!=null&&s.anchorRef)||!!(s!=null&&s.getAnchorRect)||!!(s!=null&&s.anchorRect);return(0,o.createElement)("div",{className:c,ref:(0,n.Z)([g,t,p]),tabIndex:-1,style:I},u(M),O&&(0,o.createElement)(D.ZP,{position:W,onClose:A,onFocusOutside:K,expandOnMobile:i,headerTitle:F,focusOnMount:b,offset:13,anchor:j?void 0:L,variant:N,...s,className:d()("components-dropdown__content",s==null?void 0:s.className,_)},E(M)))},h=(0,v.Iq)(l,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/download.js":(R,a,e)=>{e.d(a,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(R,a,e)=>{e.d(a,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(R,a,e)=>{var u,c,_;e.r(a),e.d(a,{Default:()=>t,__namedExportsOrder:()=>E,default:()=>h});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),d=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),n=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),f=e("../../packages/my-jetpack/_inc/state/store.js"),k=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),v=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),D=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),S=`/* eslint-disable react/react-in-jsx-scope */

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
`,l={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const P=(0,v.As)();(0,f.N)();const h={parameters:{storySource:{source:`

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
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:n.Z,argTypes:{slug:{options:(0,v.h7)(),control:{type:"select"}},status:{options:Object.values(k.N),control:{type:"select"}}}},m=i=>(0,D.jsx)(r.UT,{children:(0,D.jsx)(d.Z5,{children:(0,D.jsx)(d.AW,{path:"/",element:(0,D.jsx)(n.Z,{...i})})})});m.displayName="Template";const t=m.bind({});t.parameters={mockData:P},t.args={admin:!1,slug:"backup"},t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(_=(c=t.parameters)==null?void 0:c.docs)==null?void 0:_.source}}};const E=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(R,a,e)=>{e.d(a,{Z:()=>P});var o=e("../connection/components/use-connection/index.jsx"),r=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=e.n(r),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),k=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),v=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),D=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),S=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=h=>{let{admin:m,slug:t,children:E,showMenu:u=!1,menuItems:c=[]}=h;const{isRegistered:_,isUserConnected:i}=(0,o.Z)(),{detail:F,activate:b,deactivate:s,isFetching:B,installStandalonePlugin:y,deactivateStandalonePlugin:I}=(0,k.i)(t),{name:W,description:N,requiresUserConnection:L,standalonePluginInfo:p,status:g}=F,[O,T]=(0,n.useState)(!1),[J,K]=(0,n.useState)(!1),A=(0,f.Z)("/connection"),M=p==null?void 0:p.hasStandalonePlugin,j=p==null?void 0:p.isStandaloneInstalled,C=p==null?void 0:p.isStandaloneActive,x=M&&j&&!C,w=M&&j&&C,H=M&&!j,z=_&&i,V=g===v.N.ABSENT||g===v.N.ABSENT_WITH_PLAN,G=u&&!V&&g!==v.N.ERROR&&z&&((c==null?void 0:c.length)>0||x||w||H),X=(0,n.useCallback)(()=>{if((!_||!i)&&L){A();return}b()},[b,_,i,L,A]),Z=(0,n.useCallback)(()=>{T(!0),y().then(()=>{var U;(U=window==null?void 0:window.location)==null||U.reload()}).catch(()=>{T(!1)})},[y]),$=(0,n.useCallback)(()=>{K(!0),I().then(()=>{var U;(U=window==null?void 0:window.location)==null||U.reload()}).catch(()=>{K(!1)})},[I]);return(0,S.jsx)(D.ZP,{name:W,description:N,status:g,admin:m,isFetching:B,isInstallingStandalone:O,isDeactivatingStandalone:J,onDeactivate:s,slug:t,onActivate:X,showMenu:G,menuItems:c,showActivateOption:x,showDeactivateOption:w,showInstallOption:H,onInstallStandalone:Z,onActivateStandalone:Z,onDeactivateStandalone:$,children:E})};l.displayName="ConnectedProductCard",l.propTypes={children:d().node,admin:d().bool.isRequired,slug:d().string.isRequired},l.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const P=l},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(R,a,e)=>{e.d(a,{As:()=>h,TN:()=>P,h7:()=>m});const l={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function P(t){const u=t.constructor===Array?t:[t],c=u.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"GET",status:200,response:l[i]})),_=u.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"POST",status:200,response:{...l[i],status:l[i].status==="active"?"inactive":"active"}}));return[...c,..._]}function h(){return P([...Object.keys(l)])}function m(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(R,a,e)=>{e.d(a,{Z:()=>d});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function d(n){const f=(0,r.s0)();return(0,o.useCallback)(()=>f(n),[f,n])}}}]);})();
