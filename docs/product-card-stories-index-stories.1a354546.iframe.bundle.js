"use strict";(()=>{var J=Object.defineProperty;var V=(r,s,t)=>s in r?J(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var j=(r,s,t)=>(V(r,typeof s!="symbol"?s+"":s,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(r,s,t)=>{var C,A,D,M,v,P,O,I,f,B,x,W;t.r(s),t.d(s,{Default:()=>c,WithChildren:()=>i,WithMenu:()=>_,WithMenuForStandalone:()=>u,__namedExportsOrder:()=>h,default:()=>g});var o=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=t("../../packages/my-jetpack/_inc/state/store.js"),l=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),d=t("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=`/* eslint-disable react/react-in-jsx-scope */
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
`,R={Default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithChildren:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenu:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenuForStandalone:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}};window.myJetpackRest={},(0,S.N)();const g={title:"Packages/My Jetpack/Product Card",component:l.ZP,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-children":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu-for-standalone":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[w=>(0,p.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,p.jsx)(w,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[d.N.ACTIVE,d.N.INACTIVE,d.N.ERROR,d.N.ABSENT,d.N.ABSENT_WITH_PLAN,d.N.NEEDS_PURCHASE,d.N.NEEDS_PURCHASE_OR_FREE]}}},m=w=>(0,p.jsx)(l.ZP,{...w});m.displayName="Template";const E={name:"Backup",description:"Save every change",status:d.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},c=m.bind({});c.args=E;const i=m.bind({});i.args={...E,children:(0,p.jsx)("div",{children:"Card Children"})};const _=m.bind({});_.args={...E,showMenu:!0,menuItems:[{label:"Upload",icon:o.Z}]};const u=m.bind({});u.args={...E,showMenu:!0,menuItems:[{label:"Upload",icon:o.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"args => <ProductCard {...args} />",...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}},i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:"args => <ProductCard {...args} />",...(P=(v=i.parameters)==null?void 0:v.docs)==null?void 0:P.source}}},_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:"args => <ProductCard {...args} />",...(f=(I=_.parameters)==null?void 0:I.docs)==null?void 0:f.source}}},u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:"args => <ProductCard {...args} />",...(W=(x=u.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};const h=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(r,s,t)=>{t.d(s,{Z:()=>l});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,o.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(r,s,t)=>{t.d(s,{Z:()=>l});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,o.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(r,s,t)=>{t.d(s,{Z:()=>l});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,o.createElement)(a.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(a.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../packages/my-jetpack/_inc/state/store.js":(r,s,t)=>{t.d(s,{t:()=>N,N:()=>K});var o=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js");const a="my-jetpack/v1",S="jetpack/v4/stats-app",l=`${a}/site/dismiss-welcome-banner`,d=e=>`${S}/sites/${e}/stats/highlights`,p="SET_STATS_COUNTS_IS_FETCHING",y="SET_STATS_COUNTS",R="SET_DISMISSED_WELCOME_BANNER_IS_FETCHING",g="SET_DISMISSED_WELCOME_BANNER",m=e=>({type:p,isFetching:e}),E=e=>({type:y,statsCounts:e}),c=e=>({type:R,isFetching:e}),i=e=>({type:g,hasBeenDismissed:e}),u={setStatsCounts:E,setStatsCountsIsFetching:m,dismissWelcomeBanner:()=>async e=>{const{dispatch:n}=e;return n(c(!0)),(0,o.Z)({path:l,method:"POST"}).then(()=>{n(i(!0))}).finally(()=>{n(c(!1))})}};var h=t("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const C=(e={})=>e,A=(e={},n)=>{switch(n.type){case p:return{...e,isFetching:n.isFetching};case y:return{...e,data:(n==null?void 0:n.statsCounts)||{}};default:return e}},D=(e={},n)=>{switch(n.type){case R:return{...e,isFetching:n.isFetching};case g:return{...e,hasBeenDismissed:n.hasBeenDismissed};default:return e}},v=(0,h.UY)({plugins:C,statsCounts:A,welcomeBanner:D});var P=t("../connection/state/store.jsx");const I={...{getStatsCounts:()=>async e=>{const{dispatch:n,registry:b}=e;n.setStatsCountsIsFetching(!0);const H=b.select(P.t).getBlogId();try{n.setStatsCounts(await(0,o.Z)({path:d(H)})),n.setStatsCountsIsFetching(!1)}catch(Z){n.setStatsCountsIsFetching(!1)}}}},L={...{getStatsCounts:e=>{var n;return(n=e.statsCounts)==null?void 0:n.data},isFetchingStatsCounts:e=>{var n;return((n=e.statsCounts)==null?void 0:n.isFetching)||!1}},getWelcomeBannerHasBeenDismissed:e=>{var n;return(n=e.welcomeBanner)==null?void 0:n.hasBeenDismissed}};var k=t("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const T=class{static mayBeInit(n,b){T.store===null&&(T.store=(0,k.Z)(n,b),(0,h.z2)(T.store))}};let U=T;j(U,"store",null);const F=U,N="my-jetpack";function K(){F.mayBeInit(N,{__experimentalUseThunks:!0,reducer:v,actions:u,selectors:L,resolvers:I,initialState:window.myJetpackInitialState||{}})}}}]);})();
