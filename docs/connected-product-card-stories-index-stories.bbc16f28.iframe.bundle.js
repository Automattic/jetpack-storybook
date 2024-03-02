"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(p,o,t)=>{var u,m,E;t.r(o),t.d(o,{Default:()=>r,__namedExportsOrder:()=>C,default:()=>y});var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),c=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),e=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),s=t("../../packages/my-jetpack/_inc/state/store.js"),P=t("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),_=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),g=`/* eslint-disable react/react-in-jsx-scope */

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
`,l={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const v=(0,_.As)();(0,s.N)();const y={parameters:{storySource:{source:`

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
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:e.Z,argTypes:{slug:{options:(0,_.h7)(),control:{type:"select"}},status:{options:Object.values(P.N),control:{type:"select"}}}},i=j=>(0,d.jsx)(n.UT,{children:(0,d.jsx)(c.Z5,{children:(0,d.jsx)(c.AW,{path:"/",element:(0,d.jsx)(e.Z,{...j})})})});i.displayName="Template";const r=i.bind({});r.parameters={mockData:v},r.args={admin:!1,slug:"backup"},r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(E=(m=r.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};const C=["Default"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(p,o,t)=>{t.d(o,{Z:()=>e});var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,a.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(n.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(p,o,t)=>{t.d(o,{Z:()=>e});var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,a.createElement)(n.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(n.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(p,o,t)=>{t.d(o,{Z:()=>v});var a=t("../components/components/text/index.tsx"),n=t("../connection/components/use-connection/index.jsx"),c=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),e=t.n(c),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),_=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),d=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=({admin:y,slug:i,children:r,isDataLoading:C,Description:u=null,additionalActions:m=null,secondaryAction:E=null,upgradeInInterstitial:j=!1,primaryActionOverride:L})=>{const{isRegistered:R,isUserConnected:f}=(0,n.Z)(),{detail:U,activate:M,deactivate:B,isFetching:I,installStandalonePlugin:T,deactivateStandalonePlugin:A}=(0,_.i)(i),{name:W,description:K,requiresUserConnection:k,status:b}=U,[w,O]=(0,s.useState)(!1),[Z,x]=(0,s.useState)(!1),h=(0,P.Z)("/connection"),J=(0,s.useCallback)(()=>{if((!R||!f)&&k){h();return}M()},[M,R,f,k,h]),S=(0,s.useCallback)(()=>{O(!0),T().then(()=>{O(!1)}).catch(()=>{O(!1)})},[T]),H=(0,s.useCallback)(()=>{x(!0),A().then(()=>{var D;(D=window==null?void 0:window.location)==null||D.reload()}).catch(()=>{x(!1)})},[A]),N=()=>{const D=K.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,g.jsx)(a.ZP,{variant:"body-small",style:{flexGrow:1},children:D})};return(0,g.jsx)(d.ZP,{name:W,Description:u||N,status:b,admin:y,isFetching:I,isDataLoading:C,isInstallingStandalone:w,isDeactivatingStandalone:Z,onDeactivate:B,additionalActions:m,primaryActionOverride:L,secondaryAction:E,slug:i,onActivate:J,onInstallStandalone:S,onActivateStandalone:S,onDeactivateStandalone:H,upgradeInInterstitial:j,children:r})};l.displayName="ConnectedProductCard",l.propTypes={children:e().node,admin:e().bool.isRequired,slug:e().string.isRequired,isDataLoading:e().bool,additionalActions:e().array,primaryActionOverride:e().object,secondaryAction:e().object};const v=l;l.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(p,o,t)=>{t.d(o,{Z:()=>c});var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function c(e){const s=(0,n.s0)();return(0,a.useCallback)(()=>s(e),[s,e])}}}]);})();
