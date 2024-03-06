"use strict";(()=>{var J=Object.defineProperty;var V=(r,s,n)=>s in r?J(r,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[s]=n;var j=(r,s,n)=>(V(r,typeof s!="symbol"?s+"":s,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(r,s,n)=>{var M,f,b,A,T,D,v,P,I,N,y,O;n.r(s),n.d(s,{Default:()=>i,WithChildren:()=>u,WithMenu:()=>d,WithMenuForStandalone:()=>p,__namedExportsOrder:()=>W,default:()=>C});var o=n("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=n("../../packages/my-jetpack/_inc/state/store.js"),l=n("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),c=n("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),m=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),R=`/* eslint-disable react/react-in-jsx-scope */
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

initStore();

export default {
	title: 'Packages/My Jetpack/Product Card',
	component: ProductCard,
	parameters: {
		layout: 'centered',
		actions: {
			argTypesRegex: '^on.*',
		},
		controls: {
			exclude: '^on.*',
		},
		backgrounds: {
			default: 'light',
			values: [ { name: 'light', value: 'var(--jp-white-off)' } ],
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '100vw', maxWidth: 400 } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		menuItems: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		slug: {
			control: 'select',
			options: [
				'anti-spam',
				'backup',
				'boost',
				'crm',
				'extras',
				'protect',
				'scan',
				'social',
				'search',
				'videopress',
			],
		},
		status: {
			control: 'select',
			options: [
				PRODUCT_STATUSES.ACTIVE,
				PRODUCT_STATUSES.INACTIVE,
				PRODUCT_STATUSES.ERROR,
				PRODUCT_STATUSES.ABSENT,
				PRODUCT_STATUSES.ABSENT_WITH_PLAN,
				PRODUCT_STATUSES.NEEDS_PURCHASE,
				PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE,
			],
		},
	},
};

const Template = args => <ProductCard { ...args } />;

const DefaultArgs = {
	name: 'Backup',
	description: 'Save every change',
	status: PRODUCT_STATUSES.ACTIVE,
	admin: true,
	slug: 'backup',
	isFetching: false,
	showMenu: false,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const WithChildren = Template.bind( {} );
WithChildren.args = {
	...DefaultArgs,
	children: <div>Card Children</div>,
};

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
};

export const WithMenuForStandalone = Template.bind( {} );
WithMenuForStandalone.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
	onInstallStandalone: () => alert( 'Installing standalone plugin' ),
	onActivateStandalone: () => alert( 'Activating standalone plugin' ),
	hasStandalonePlugin: true,
	isStandaloneInstalled: false,
	isStandaloneActive: false,
};
`,B={Default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithChildren:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenu:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenuForStandalone:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}};window.myJetpackRest={},(0,S.N)();const C={title:"Packages/My Jetpack/Product Card",component:l.ZP,parameters:{storySource:{source:`
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

initStore();

export default {
	title: 'Packages/My Jetpack/Product Card',
	component: ProductCard,
	parameters: {
		layout: 'centered',
		actions: {
			argTypesRegex: '^on.*',
		},
		controls: {
			exclude: '^on.*',
		},
		backgrounds: {
			default: 'light',
			values: [ { name: 'light', value: 'var(--jp-white-off)' } ],
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '100vw', maxWidth: 400 } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		menuItems: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		slug: {
			control: 'select',
			options: [
				'anti-spam',
				'backup',
				'boost',
				'crm',
				'extras',
				'protect',
				'scan',
				'social',
				'search',
				'videopress',
			],
		},
		status: {
			control: 'select',
			options: [
				PRODUCT_STATUSES.ACTIVE,
				PRODUCT_STATUSES.INACTIVE,
				PRODUCT_STATUSES.ERROR,
				PRODUCT_STATUSES.ABSENT,
				PRODUCT_STATUSES.ABSENT_WITH_PLAN,
				PRODUCT_STATUSES.NEEDS_PURCHASE,
				PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE,
			],
		},
	},
};

const Template = args => <ProductCard { ...args } />;

const DefaultArgs = {
	name: 'Backup',
	description: 'Save every change',
	status: PRODUCT_STATUSES.ACTIVE,
	admin: true,
	slug: 'backup',
	isFetching: false,
	showMenu: false,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const WithChildren = Template.bind( {} );
WithChildren.args = {
	...DefaultArgs,
	children: <div>Card Children</div>,
};

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
};

export const WithMenuForStandalone = Template.bind( {} );
WithMenuForStandalone.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
	onInstallStandalone: () => alert( 'Installing standalone plugin' ),
	onActivateStandalone: () => alert( 'Activating standalone plugin' ),
	hasStandalonePlugin: true,
	isStandaloneInstalled: false,
	isStandaloneActive: false,
};
`,locationsMap:{default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-children":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu-for-standalone":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[w=>(0,m.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,m.jsx)(w,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[c.N.ACTIVE,c.N.INACTIVE,c.N.ERROR,c.N.ABSENT,c.N.ABSENT_WITH_PLAN,c.N.NEEDS_PURCHASE,c.N.NEEDS_PURCHASE_OR_FREE]}}},_=w=>(0,m.jsx)(l.ZP,{...w});_.displayName="Template";const E={name:"Backup",description:"Save every change",status:c.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},i=_.bind({});i.args=E;const u=_.bind({});u.args={...E,children:(0,m.jsx)("div",{children:"Card Children"})};const d=_.bind({});d.args={...E,showMenu:!0,menuItems:[{label:"Upload",icon:o.Z}]};const p=_.bind({});p.args={...E,showMenu:!0,menuItems:[{label:"Upload",icon:o.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:"args => <ProductCard {...args} />",...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}},u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ProductCard {...args} />",...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}},d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ProductCard {...args} />",...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}},p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:"args => <ProductCard {...args} />",...(O=(y=p.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const W=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(r,s,n)=>{n.d(s,{Z:()=>l});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,o.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(r,s,n)=>{n.d(s,{Z:()=>l});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,o.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(r,s,n)=>{n.d(s,{Z:()=>l});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,o.createElement)(a.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(a.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../packages/my-jetpack/_inc/state/store.js":(r,s,n)=>{n.d(s,{t:()=>L,N:()=>H});var o=n("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js");const a="my-jetpack/v1",S="jetpack/v4/stats-app",l=`${a}/site/dismiss-welcome-banner`,c=t=>`${S}/sites/${t}/stats/highlights`,m="SET_STATS_COUNTS_IS_FETCHING",R="SET_STATS_COUNTS",B="SET_DISMISSED_WELCOME_BANNER_IS_FETCHING",C="SET_DISMISSED_WELCOME_BANNER",_="SET_GLOBAL_NOTICE",E="CLEAN_GLOBAL_NOTICE",i=t=>({type:m,isFetching:t}),u=t=>({type:R,statsCounts:t}),d=t=>({type:B,isFetching:t}),p=t=>({type:C,hasBeenDismissed:t}),A={setStatsCounts:u,setStatsCountsIsFetching:i,dismissWelcomeBanner:()=>async t=>{const{dispatch:e}=t;return e(d(!0)),(0,o.Z)({path:l,method:"POST"}).then(()=>{e(p(!0))}).finally(()=>{e(d(!1))})},...{setGlobalNotice:(t,e)=>({type:"SET_GLOBAL_NOTICE",message:t,options:e}),cleanGlobalNotice:()=>({type:"CLEAN_GLOBAL_NOTICE"})}};var T=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const D=(t={global:{}},e)=>{switch(e.type){case _:{const{message:h,options:x}=e;return{...t,global:{message:h,options:x}}}case E:return{...t,global:{}};default:return t}},v=(t={})=>t,P=(t={},e)=>{switch(e.type){case m:return{...t,isFetching:e.isFetching};case R:return{...t,data:(e==null?void 0:e.statsCounts)||{}};default:return t}},I=(t={},e)=>{switch(e.type){case B:return{...t,isFetching:e.isFetching};case C:return{...t,hasBeenDismissed:e.hasBeenDismissed};default:return t}},y=(0,T.UY)({notices:D,plugins:v,statsCounts:P,welcomeBanner:I});var O=n("../connection/state/store.jsx");const k={...{getStatsCounts:()=>async t=>{const{dispatch:e,registry:h}=t;e.setStatsCountsIsFetching(!0);const x=h.select(O.t).getBlogId();try{e.setStatsCounts(await(0,o.Z)({path:c(x)})),e.setStatsCountsIsFetching(!1)}catch(q){e.setStatsCountsIsFetching(!1)}}}},F={...{getStatsCounts:t=>{var e;return(e=t.statsCounts)==null?void 0:e.data},isFetchingStatsCounts:t=>{var e;return((e=t.statsCounts)==null?void 0:e.isFetching)||!1}},...{getGlobalNotice:t=>{var e;return(e=t.notices)==null?void 0:e.global}},getWelcomeBannerHasBeenDismissed:t=>{var e;return(e=t.welcomeBanner)==null?void 0:e.hasBeenDismissed}};var K=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const g=class{static mayBeInit(e,h){g.store===null&&(g.store=(0,K.Z)(e,h),(0,T.z2)(g.store))}};let U=g;j(U,"store",null);const G=U,L="my-jetpack";function H(){G.mayBeInit(L,{__experimentalUseThunks:!0,reducer:y,actions:A,selectors:F,resolvers:k,initialState:window.myJetpackInitialState||{}})}}}]);})();
