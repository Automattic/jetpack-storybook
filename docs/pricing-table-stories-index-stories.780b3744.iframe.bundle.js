"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3367,731],{"../components/components/pricing-table/stories/index.stories.tsx":(P,o,n)=>{var l,a,c;n.r(o),n.d(o,{__namedExportsOrder:()=>f,_default:()=>i,default:()=>g});var m=n("../components/components/button/index.tsx"),s=n("../components/components/product-price/index.tsx"),e=n("../components/components/pricing-table/index.tsx"),t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import Button from '../../button';
import ProductPrice from '../../product-price';
import PricingTable, { PricingTableColumn, PricingTableHeader, PricingTableItem } from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Pricing Table',
	component: PricingTable,
	subcomponents: { PricingTableColumn, PricingTableHeader, PricingTableItem },
} as ComponentMeta< typeof PricingTable >;

const Template: ComponentStory< typeof PricingTable > = args => {
	return (
		<PricingTable { ...args }>
			<PricingTableColumn primary>
				<PricingTableHeader>
					<ProductPrice
						price={ 9.95 }
						offPrice={ 4.98 }
						legend="/month, billed yearly"
						currency="USD"
						hideDiscountLabel={ args?.hideDiscountLabel }
					/>
					<Button fullWidth>Get Premium</Button>
				</PricingTableHeader>
				<PricingTableItem isIncluded={ true } label={ <strong>Up to 1000</strong> } />
				<PricingTableItem isIncluded={ true } tooltipInfo={ 'This is an info' } />
				<PricingTableItem
					isIncluded={ true }
					tooltipInfo={ 'This is an info with title' }
					tooltipTitle={ 'Small title' }
				/>
				<PricingTableItem isIncluded={ true } />
				<PricingTableItem isIncluded={ true } />
			</PricingTableColumn>
			<PricingTableColumn>
				<PricingTableHeader>
					<ProductPrice price={ 0 } legend="Free forever" currency="USD" hidePriceFraction />
					<Button fullWidth variant="secondary">
						Start for free
					</Button>
				</PricingTableHeader>
				<PricingTableItem isIncluded={ true } label="Up to 300" />
				<PricingTableItem
					isIncluded={ false }
					label="This is not included"
					tooltipInfo="This has a tooltip, so its overwrites the default info on small screens"
				/>
				<PricingTableItem isIncluded={ false } />
				<PricingTableItem isIncluded={ true } />
				<PricingTableItem isIncluded={ true } />
			</PricingTableColumn>
		</PricingTable>
	);
};

const DefaultArgs = {
	title: 'Buy premium, or start for free',
	items: [
		{ name: 'Feature A with limit', tooltipInfo: 'Default info for Feature A' },
		{ name: 'Feature B', tooltipInfo: 'Default info for Feature B' },
		{
			name: 'Feature C with a longer title that will span multiple lines',
			tooltipInfo: 'Default info for Feature C',
			tooltipTitle: 'Title for C',
		},
		{ name: 'Feature D', tooltipInfo: 'Default info for Feature D', tooltipTitle: 'Title for D' },
		{ name: 'Feature E' },
	],
	hideDiscountLabel: false,
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;
`,T={_default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}};const g={parameters:{storySource:{source:`import Button from '../../button';
import ProductPrice from '../../product-price';
import PricingTable, { PricingTableColumn, PricingTableHeader, PricingTableItem } from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Pricing Table',
  component: PricingTable,
  subcomponents: {
    PricingTableColumn,
    PricingTableHeader,
    PricingTableItem
  }
} as ComponentMeta<typeof PricingTable>);
const Template: ComponentStory<typeof PricingTable> = args => {
  return <PricingTable {...args}>
            <PricingTableColumn primary>
                <PricingTableHeader>
                    <ProductPrice price={9.95} offPrice={4.98} legend="/month, billed yearly" currency="USD" hideDiscountLabel={args?.hideDiscountLabel} />
                    <Button fullWidth>Get Premium</Button>
                </PricingTableHeader>
                <PricingTableItem isIncluded={true} label={<strong>Up to 1000</strong>} />
                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info'} />
                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info with title'} tooltipTitle={'Small title'} />
                <PricingTableItem isIncluded={true} />
                <PricingTableItem isIncluded={true} />
            </PricingTableColumn>
            <PricingTableColumn>
                <PricingTableHeader>
                    <ProductPrice price={0} legend="Free forever" currency="USD" hidePriceFraction />
                    <Button fullWidth variant="secondary">
                        Start for free
                    </Button>
                </PricingTableHeader>
                <PricingTableItem isIncluded={true} label="Up to 300" />
                <PricingTableItem isIncluded={false} label="This is not included" tooltipInfo="This has a tooltip, so its overwrites the default info on small screens" />
                <PricingTableItem isIncluded={false} />
                <PricingTableItem isIncluded={true} />
                <PricingTableItem isIncluded={true} />
            </PricingTableColumn>
        </PricingTable>;
};
const DefaultArgs = {
  title: 'Buy premium, or start for free',
  items: [{
    name: 'Feature A with limit',
    tooltipInfo: 'Default info for Feature A'
  }, {
    name: 'Feature B',
    tooltipInfo: 'Default info for Feature B'
  }, {
    name: 'Feature C with a longer title that will span multiple lines',
    tooltipInfo: 'Default info for Feature C',
    tooltipTitle: 'Title for C'
  }, {
    name: 'Feature D',
    tooltipInfo: 'Default info for Feature D',
    tooltipTitle: 'Title for D'
  }, {
    name: 'Feature E'
  }],
  hideDiscountLabel: false
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <PricingTable {...args}>\\n            <PricingTableColumn primary>\\n                <PricingTableHeader>\\n                    <ProductPrice price={9.95} offPrice={4.98} legend=\\"/month, billed yearly\\" currency=\\"USD\\" hideDiscountLabel={args?.hideDiscountLabel} />\\n                    <Button fullWidth>Get Premium</Button>\\n                </PricingTableHeader>\\n                <PricingTableItem isIncluded={true} label={<strong>Up to 1000</strong>} />\\n                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info'} />\\n                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info with title'} tooltipTitle={'Small title'} />\\n                <PricingTableItem isIncluded={true} />\\n                <PricingTableItem isIncluded={true} />\\n            </PricingTableColumn>\\n            <PricingTableColumn>\\n                <PricingTableHeader>\\n                    <ProductPrice price={0} legend=\\"Free forever\\" currency=\\"USD\\" hidePriceFraction />\\n                    <Button fullWidth variant=\\"secondary\\">\\n                        Start for free\\n                    </Button>\\n                </PricingTableHeader>\\n                <PricingTableItem isIncluded={true} label=\\"Up to 300\\" />\\n                <PricingTableItem isIncluded={false} label=\\"This is not included\\" tooltipInfo=\\"This has a tooltip, so its overwrites the default info on small screens\\" />\\n                <PricingTableItem isIncluded={false} />\\n                <PricingTableItem isIncluded={true} />\\n                <PricingTableItem isIncluded={true} />\\n            </PricingTableColumn>\\n        </PricingTable>;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}}}},title:"JS Packages/Components/Pricing Table",component:e.ZP,subcomponents:{PricingTableColumn:e.oK,PricingTableHeader:e.NE,PricingTableItem:e.kF}},u=r=>(0,t.jsxs)(e.ZP,{...r,children:[(0,t.jsxs)(e.oK,{primary:!0,children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(s.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:r==null?void 0:r.hideDiscountLabel}),(0,t.jsx)(m.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:(0,t.jsx)("strong",{children:"Up to 1000"})}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]}),(0,t.jsxs)(e.oK,{children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(s.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,t.jsx)(m.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:"Up to 300"}),(0,t.jsx)(e.kF,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,t.jsx)(e.kF,{isIncluded:!1}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]})]});u.displayName="Template";const d={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},i=u.bind({});i.args=d,i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <PricingTable {...args}>
            <PricingTableColumn primary>
                <PricingTableHeader>
                    <ProductPrice price={9.95} offPrice={4.98} legend="/month, billed yearly" currency="USD" hideDiscountLabel={args?.hideDiscountLabel} />
                    <Button fullWidth>Get Premium</Button>
                </PricingTableHeader>
                <PricingTableItem isIncluded={true} label={<strong>Up to 1000</strong>} />
                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info'} />
                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info with title'} tooltipTitle={'Small title'} />
                <PricingTableItem isIncluded={true} />
                <PricingTableItem isIncluded={true} />
            </PricingTableColumn>
            <PricingTableColumn>
                <PricingTableHeader>
                    <ProductPrice price={0} legend="Free forever" currency="USD" hidePriceFraction />
                    <Button fullWidth variant="secondary">
                        Start for free
                    </Button>
                </PricingTableHeader>
                <PricingTableItem isIncluded={true} label="Up to 300" />
                <PricingTableItem isIncluded={false} label="This is not included" tooltipInfo="This has a tooltip, so its overwrites the default info on small screens" />
                <PricingTableItem isIncluded={false} />
                <PricingTableItem isIncluded={true} />
                <PricingTableItem isIncluded={true} />
            </PricingTableColumn>
        </PricingTable>;
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const f=["_default"]},"../../plugins/protect/src/js/components/pricing-table/stories/index.stories.jsx":(P,o,n)=>{var l,a,c;n.r(o),n.d(o,{Default:()=>i,__namedExportsOrder:()=>f,default:()=>u});var m=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../plugins/protect/src/js/state/store.js"),e=n("../../plugins/protect/src/js/components/interstitial-page/stories/mock.js"),t=n("../../plugins/protect/src/js/components/pricing-table/index.jsx"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),T=`/* eslint-disable react/react-in-jsx-scope */
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
`,g={Default:{startLoc:{col:35,line:25},endLoc:{col:1,line:27},startBody:{col:35,line:25},endBody:{col:1,line:27}}};window.jetpackProtectInitialState=e.r,(0,s.N)();const u={title:"Plugins/Protect/Pricing Table",component:t.Z,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:35,line:25},endLoc:{col:1,line:27},startBody:{col:35,line:25},endBody:{col:1,line:27}}}},layout:"centered",actions:{argTypesRegex:"^on.*"}},argTypes:{isCard:{control:{type:"boolean"}}}},d=r=>(0,p.jsx)(t.Z,{...r});d.displayName="DefaultDefaultPricingTable";const i=d.bind({});i.args={isCard:!1,onAdd:()=>{}},i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <ConnectedPricingTable {...args} />;
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const f=["Default"]}}]);})();
