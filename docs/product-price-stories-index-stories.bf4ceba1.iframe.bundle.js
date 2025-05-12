"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[95],{"../components/components/product-price/stories/index.stories.tsx":(u,n,e)=>{e.r(n),e.d(n,{__namedExportsOrder:()=>l,_default:()=>t,default:()=>s});var r=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/currencies.js"),o=e("../components/components/product-price/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../index.tsx';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof ProductPrice > = {
	title: 'JS Packages/Components/Product Price',
	component: ProductPrice,
	argTypes: {
		currency: {
			control: { type: 'select' },
			options: Object.keys( CURRENCIES ),
		},
	},
};

export default meta;

// Export additional stories using pre-defined values
const Template: StoryFn< typeof ProductPrice > = args => <ProductPrice { ...args } />;

const DefaultArgs = {
	currency: 'USD',
	price: 24.92,
	offPrice: 12.42,
	showNotOffPrice: true,
	isNotConvenientPrice: false,
	hidePriceFraction: false,
	hideDiscountLabel: false,
	promoLabel: 'NEW',
	legend: '/month, paid yearly',
};

// Export Default story
export const _default = Template.bind( {} );
_default.args = DefaultArgs;
`,p={_default:{startLoc:{col:17,line:19},endLoc:{col:2,line:21},startBody:{col:17,line:19},endBody:{col:2,line:21}}};const s={parameters:{storySource:{source:`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Product Price',
  component: ProductPrice,
  argTypes: {
    currency: {
      control: {
        type: 'select'
      },
      options: Object.keys(CURRENCIES)
    }
  }
};
export default meta;

// Export additional stories using pre-defined values
const Template = args => /*#__PURE__*/_jsx(ProductPrice, {
  ...args
});
const DefaultArgs = {
  currency: 'USD',
  price: 24.92,
  offPrice: 12.42,
  showNotOffPrice: true,
  isNotConvenientPrice: false,
  hidePriceFraction: false,
  hideDiscountLabel: false,
  promoLabel: 'NEW',
  legend: '/month, paid yearly'
};

// Export Default story
export const _default = Template.bind({});
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:2,line:21},startBody:{col:17,line:19},endBody:{col:2,line:21}}}}},title:"JS Packages/Components/Product Price",component:o.A,argTypes:{currency:{control:{type:"select"},options:Object.keys(r.y)}}},a=d=>(0,c.jsx)(o.A,{...d}),i={currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"},t=a.bind({});t.args=i;const l=["_default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <ProductPrice {...args} />",...t.parameters?.docs?.source}}}}}]);
