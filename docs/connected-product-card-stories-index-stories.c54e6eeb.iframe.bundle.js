"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(g,d,e)=>{var R,A,O;e.r(d),e.d(d,{Default:()=>i,__namedExportsOrder:()=>y,default:()=>m});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),c=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),s=e("../../packages/my-jetpack/_inc/state/store.js"),p=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),_=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),D=`/* eslint-disable react/react-in-jsx-scope */

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
`,v={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const l=(0,_.As)();(0,s.N)();const m={parameters:{storySource:{source:`

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
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:t.Z,argTypes:{slug:{options:(0,_.h7)(),control:{type:"select"}},status:{options:Object.values(p.N),control:{type:"select"}}}},M=j=>(0,r.jsx)(a.UT,{children:(0,r.jsx)(c.Z5,{children:(0,r.jsx)(c.AW,{path:"/",element:(0,r.jsx)(t.Z,{...j})})})});M.displayName="Template";const i=M.bind({});i.parameters={mockData:l},i.args={admin:!1,slug:"backup"},i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const y=["Default"]},"../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(g,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=e.n(a),t=e("../../../node_modules/.pnpm/@wordpress+compose@6.27.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.50.0/node_modules/@wordpress/deprecated/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),D=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const v=(M,i)=>{const{renderContent:y,renderToggle:R,className:A,contentClassName:O,expandOnMobile:j,headerTitle:V,focusOnMount:C,popoverProps:o,onClose:T,onToggle:x,style:S,open:Z,defaultOpen:k,position:w,variant:H}=(0,p.y)(M,"Dropdown");w!==void 0&&(0,s.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[W,K]=(0,n.useState)(null),P=(0,n.useRef)(),[U,L]=(0,r.O)({defaultValue:k,value:Z,onChange:x});function u(){var I;if(!P.current)return;const{ownerDocument:h}=P.current,B=(I=h==null?void 0:h.activeElement)==null?void 0:I.closest('[role="dialog"]');!P.current.contains(h.activeElement)&&(!B||B.contains(P.current))&&E()}function E(){T==null||T(),L(!1)}const b={isOpen:!!U,onToggle:()=>L(!U),onClose:E},N=!!(o!=null&&o.anchor)||!!(o!=null&&o.anchorRef)||!!(o!=null&&o.getAnchorRect)||!!(o!=null&&o.anchorRect);return(0,n.createElement)("div",{className:A,ref:(0,t.Z)([P,i,K]),tabIndex:-1,style:S},R(b),U&&(0,n.createElement)(D.ZP,{position:w,onClose:E,onFocusOutside:u,expandOnMobile:j,headerTitle:V,focusOnMount:C,offset:13,anchor:N?void 0:W,variant:H,...o,className:c()("components-dropdown__content",o==null?void 0:o.className,O)},y(b)))},m=(0,_.Iq)(v,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(g,d,e)=>{e.d(d,{O:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a({defaultValue:c,onChange:t,value:s}){const p=typeof s!="undefined",_=p?s:c,[r,D]=(0,n.useState)(_),v=p?s:r;let l;return p&&typeof t=="function"?l=t:!p&&typeof t=="function"?l=m=>{t(m),D(m)}:l=D,[v,l]}},"../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(g,d,e)=>{e.d(d,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.48.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(g,d,e)=>{e.d(d,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.48.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(g,d,e)=>{e.d(d,{Z:()=>m});var n=e("../components/components/text/index.tsx"),a=e("../connection/components/use-connection/index.jsx"),c=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(c),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),_=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),r=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),D=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),v=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=({admin:M,slug:i,children:y,isDataLoading:R,showMenu:A=!1,Description:O=null,additionalActions:j=null,secondaryAction:V=null,menuItems:C=[],upgradeInInterstitial:o=!1,primaryActionOverride:T})=>{const{isRegistered:x,isUserConnected:S}=(0,a.Z)(),{detail:Z,activate:k,deactivate:w,isFetching:H,installStandalonePlugin:W,deactivateStandalonePlugin:K}=(0,_.i)(i),{name:P,description:U,requiresUserConnection:L,standalonePluginInfo:u,status:E}=Z,[b,N]=(0,s.useState)(!1),[h,B]=(0,s.useState)(!1),I=(0,p.Z)("/connection"),F=u==null?void 0:u.hasStandalonePlugin,J=u==null?void 0:u.isStandaloneInstalled,z=u==null?void 0:u.isStandaloneActive,X=F&&J&&!z,$=F&&J&&z,G=F&&!J,Q=x&&S,q=E===r.N.ABSENT||E===r.N.ABSENT_WITH_PLAN,ee=A&&!q&&E!==r.N.ERROR&&Q&&((C==null?void 0:C.length)>0||X||$||G),te=(0,s.useCallback)(()=>{if((!x||!S)&&L){I();return}k()},[k,x,S,L,I]),Y=(0,s.useCallback)(()=>{N(!0),W().then(()=>{var f;(f=window==null?void 0:window.location)==null||f.reload()}).catch(()=>{N(!1)})},[W]),oe=(0,s.useCallback)(()=>{B(!0),K().then(()=>{var f;(f=window==null?void 0:window.location)==null||f.reload()}).catch(()=>{B(!1)})},[K]),ne=()=>{const f=U.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,v.jsx)(n.ZP,{variant:"body-small",style:{flexGrow:1},children:f})};return(0,v.jsx)(D.ZP,{name:P,Description:O||ne,status:E,admin:M,isFetching:H,isDataLoading:R,isInstallingStandalone:b,isDeactivatingStandalone:h,onDeactivate:w,additionalActions:j,primaryActionOverride:T,secondaryAction:V,slug:i,onActivate:te,showMenu:ee,menuItems:C,showActivateOption:X,showDeactivateOption:$,showInstallOption:G,onInstallStandalone:Y,onActivateStandalone:Y,onDeactivateStandalone:oe,upgradeInInterstitial:o,children:y})};l.displayName="ConnectedProductCard",l.propTypes={children:t().node,admin:t().bool.isRequired,slug:t().string.isRequired,isDataLoading:t().bool,showMenu:t().bool,additionalActions:t().array,primaryActionOverride:t().object,secondaryAction:t().object,menuItems:t().array};const m=l;l.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(g,d,e)=>{e.d(d,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function c(t){const s=(0,a.s0)();return(0,n.useCallback)(()=>s(t),[s,t])}}}]);})();
