"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[731],{"../../plugins/protect/src/js/components/pricing-table/stories/index.stories.jsx":(m,n,t)=>{var o,s,i;t.r(n),t.d(n,{Default:()=>e,__namedExportsOrder:()=>u,default:()=>p});var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../plugins/protect/src/js/state/store.js"),l=t("../../plugins/protect/src/js/components/interstitial-page/stories/mock.js"),a=t("../../plugins/protect/src/js/components/pricing-table/index.jsx"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`/* eslint-disable react/react-in-jsx-scope */
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
`,f={Default:{startLoc:{col:35,line:25},endLoc:{col:1,line:27},startBody:{col:35,line:25},endBody:{col:1,line:27}}};window.jetpackProtectInitialState=l.r,(0,c.N)();const p={title:"Plugins/Protect/Pricing Table",component:a.Z,parameters:{storySource:{source:`
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
    actions: {
      argTypesRegex: '^on.*'
    }
  },
  argTypes: {
    isCard: {
      control: {
        type: 'boolean'
      }
    }
  }
};
const DefaultDefaultPricingTable = args => {
  return <ConnectedPricingTable {...args} />;
};
export const Default = DefaultDefaultPricingTable.bind({});
Default.args = {
  isCard: false,
  onAdd: () => {}
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <ConnectedPricingTable {...args} />;\\n}",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:35,line:25},endLoc:{col:1,line:27},startBody:{col:35,line:25},endBody:{col:1,line:27}}}},layout:"centered",actions:{argTypesRegex:"^on.*"}},argTypes:{isCard:{control:{type:"boolean"}}}},r=g=>(0,d.jsx)(a.Z,{...g});r.displayName="DefaultDefaultPricingTable";const e=r.bind({});e.args={isCard:!1,onAdd:()=>{}},e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <ConnectedPricingTable {...args} />;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const u=["Default"]}}]);})();
