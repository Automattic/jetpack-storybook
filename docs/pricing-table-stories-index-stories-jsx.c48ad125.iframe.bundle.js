"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[731],{"../../plugins/protect/src/js/components/pricing-table/stories/index.stories.jsx":(m,n,t)=>{var r,i,s;t.r(n),t.d(n,{Default:()=>e,__namedExportsOrder:()=>u,default:()=>p});var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../plugins/protect/src/js/state/store.js"),l=t("../../plugins/protect/src/js/components/interstitial-page/stories/mock.js"),a=t("../../plugins/protect/src/js/components/pricing-table/index.jsx"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { initStore } from '../../../state/store';
import { jetpackProtectInitialState } from '../../interstitial-page/stories/mock.js';
import ConnectedPricingTable from '../index.jsx';

window.jetpackProtectInitialState = jetpackProtectInitialState;
initStore();

export default {
	title: 'Plugins/Protect/Pricing Table',
	component: ConnectedPricingTable,
	parameters: {
		layout: 'centered',
		actions: { argTypesRegex: '^on.*' },
	},
	argTypes: {
		isCard: {
			control: { type: 'boolean' },
		},
	},
};

const DefaultDefaultPricingTable = args => {
	return <ConnectedPricingTable { ...args } />;
};

export const Default = DefaultDefaultPricingTable.bind( {} );
Default.args = {
	isCard: false,
	onAdd: () => {},
};
`,f={Default:{startLoc:{col:35,line:24},endLoc:{col:1,line:26},startBody:{col:35,line:24},endBody:{col:1,line:26}}};window.jetpackProtectInitialState=l.r,(0,c.N)();const p={title:"Plugins/Protect/Pricing Table",component:a.Z,parameters:{storySource:{source:`
import React from 'react';
import { initStore } from '../../../state/store';
import { jetpackProtectInitialState } from '../../interstitial-page/stories/mock.js';
import ConnectedPricingTable from '../index.jsx';

window.jetpackProtectInitialState = jetpackProtectInitialState;
initStore();

export default {
	title: 'Plugins/Protect/Pricing Table',
	component: ConnectedPricingTable,
	parameters: {
		layout: 'centered',
		actions: { argTypesRegex: '^on.*' },
	},
	argTypes: {
		isCard: {
			control: { type: 'boolean' },
		},
	},
};

const DefaultDefaultPricingTable = args => {
	return <ConnectedPricingTable { ...args } />;
};

export const Default = DefaultDefaultPricingTable.bind( {} );
Default.args = {
	isCard: false,
	onAdd: () => {},
};
`,locationsMap:{default:{startLoc:{col:35,line:24},endLoc:{col:1,line:26},startBody:{col:35,line:24},endBody:{col:1,line:26}}}},layout:"centered",actions:{argTypesRegex:"^on.*"}},argTypes:{isCard:{control:{type:"boolean"}}}},o=g=>(0,d.jsx)(a.Z,{...g});o.displayName="DefaultDefaultPricingTable";const e=o.bind({});e.args={isCard:!1,onAdd:()=>{}},e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return <ConnectedPricingTable {...args} />;
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const u=["Default"]}}]);})();
