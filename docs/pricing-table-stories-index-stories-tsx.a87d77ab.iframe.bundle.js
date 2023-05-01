(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3010],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/defineProperty.js":(n,l,r)=>{var i=r("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPropertyKey.js");function a(e,t,o){return t=i(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPrimitive.js":(n,l,r)=>{var i=r("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js").default;function a(e,t){if(i(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var c=o.call(e,t||"default");if(i(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPropertyKey.js":(n,l,r)=>{var i=r("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js").default,a=r("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPrimitive.js");function e(t){var o=a(t,"string");return i(o)==="symbol"?o:String(o)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js":n=>{function l(r){return n.exports=l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},n.exports.__esModule=!0,n.exports.default=n.exports,l(r)}n.exports=l,n.exports.__esModule=!0,n.exports.default=n.exports},"../components/components/pricing-table/stories/index.stories.tsx":(n,l,r)=>{var m,p,f;"use strict";r.r(l),r.d(l,{__namedExportsOrder:()=>T,_default:()=>s,default:()=>b});var i=r("../components/components/button/index.tsx"),a=r("../components/components/product-price/index.tsx"),e=r("../components/components/pricing-table/index.tsx"),t=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import Button from '../../button';
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
`,c={_default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}};const b={parameters:{storySource:{source:`import Button from '../../button';
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
};`,locationsMap:{default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}}}},title:"JS Packages/Components/Pricing Table",component:e.ZP,subcomponents:{PricingTableColumn:e.oK,PricingTableHeader:e.NE,PricingTableItem:e.kF}},d=u=>(0,t.jsxs)(e.ZP,{...u,children:[(0,t.jsxs)(e.oK,{primary:!0,children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(a.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:u==null?void 0:u.hideDiscountLabel}),(0,t.jsx)(i.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:(0,t.jsx)("strong",{children:"Up to 1000"})}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]}),(0,t.jsxs)(e.oK,{children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(a.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,t.jsx)(i.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:"Up to 300"}),(0,t.jsx)(e.kF,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,t.jsx)(e.kF,{isIncluded:!1}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]})]});d.displayName="Template";const P={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},s=d.bind({});s.args=P,s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const T=["_default"]}}]);})();
