"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(_,o,t)=>{var S,T,g,h,A,P,C,v,D,U,w,R;t.r(o),t.d(o,{Default:()=>r,WithChildren:()=>l,WithMenu:()=>d,WithMenuForStandalone:()=>i,__namedExportsOrder:()=>M,default:()=>y});var n=t("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=t("../../packages/my-jetpack/_inc/state/store.js"),a=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),s=t("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=`/* eslint-disable react/react-in-jsx-scope */
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
`,x={Default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithChildren:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenu:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenuForStandalone:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}};window.myJetpackRest={},(0,u.N)();const y={title:"Packages/My Jetpack/Product Card",component:a.ZP,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-children":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu-for-standalone":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[E=>(0,p.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,p.jsx)(E,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[s.N.ACTIVE,s.N.INACTIVE,s.N.ERROR,s.N.ABSENT,s.N.ABSENT_WITH_PLAN,s.N.NEEDS_PURCHASE,s.N.NEEDS_PURCHASE_OR_FREE]}}},c=E=>(0,p.jsx)(a.ZP,{...E});c.displayName="Template";const m={name:"Backup",description:"Save every change",status:s.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},r=c.bind({});r.args=m;const l=c.bind({});l.args={...m,children:(0,p.jsx)("div",{children:"Card Children"})};const d=c.bind({});d.args={...m,showMenu:!0,menuItems:[{label:"Upload",icon:n.Z}]};const i=c.bind({});i.args={...m,showMenu:!0,menuItems:[{label:"Upload",icon:n.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:"args => <ProductCard {...args} />",...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}},l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ProductCard {...args} />",...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}},d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"args => <ProductCard {...args} />",...(D=(v=d.parameters)==null?void 0:v.docs)==null?void 0:D.source}}},i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:"args => <ProductCard {...args} />",...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const M=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(_,o,t)=>{t.d(o,{Z:()=>a});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,n.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(e.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(_,o,t)=>{t.d(o,{Z:()=>a});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,n.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(e.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(_,o,t)=>{t.d(o,{Z:()=>a});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,n.createElement)(e.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(e.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))}}]);})();
