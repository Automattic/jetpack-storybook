(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3010],{"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/defineProperty.js":(i,c,n)=>{var o=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPropertyKey.js");function r(e,t,s){return t=o(t),t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}i.exports=r,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPrimitive.js":(i,c,n)=>{var o=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js").default;function r(e,t){if(o(e)!=="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var b=s.call(e,t||"default");if(o(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}i.exports=r,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPropertyKey.js":(i,c,n)=>{var o=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js").default,r=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPrimitive.js");function e(t){var s=r(t,"string");return o(s)==="symbol"?s:String(s)}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js":i=>{function c(n){return i.exports=c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},i.exports.__esModule=!0,i.exports.default=i.exports,c(n)}i.exports=c,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(i,c,n)=>{"use strict";n.d(c,{ZP:()=>d});var o=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),t=n.n(e),s=n("../../../node_modules/.pnpm/@emotion+styled@11.10.6_@emotion+react@11.10.6_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),b=n("../../../node_modules/.pnpm/@emotion+react@11.10.6_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_=n("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),I=n("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function D(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const g=b.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,E=(0,s.Z)("svg",{target:"ea4tfvq2"})("width:",_.Z.spinnerSize,"px;height:",_.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",I.D.ui.theme,";overflow:visible;"),P={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},y=(0,s.Z)("circle",{target:"ea4tfvq1"})(P,";stroke:",I.D.gray[300],";"),v=(0,s.Z)("path",{target:"ea4tfvq0"})(P,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",g,";");function T(p,m){let{className:l,...u}=p;return(0,r.createElement)(E,(0,o.Z)({className:t()("components-spinner",l),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false"},u,{ref:m}),(0,r.createElement)(y,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,r.createElement)(v,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const d=(0,r.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+element@5.7.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>T});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let r,e,t,s;const b=/<(\/)?(\w+)\s*(\/)?>/g;function _(a,d,p,m,l){return{element:a,tokenStart:d,tokenLength:p,prevOffset:m,leadingTextStart:l,children:[]}}const I=(a,d)=>{if(r=a,e=0,t=[],s=[],b.lastIndex=0,!D(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do;while(g(d));return(0,o.createElement)(o.Fragment,null,...t)},D=a=>{const d=typeof a=="object",p=d&&Object.values(a);return d&&p.length&&p.every(m=>(0,o.isValidElement)(m))};function g(a){const d=E(),[p,m,l,u]=d,f=s.length,x=l>e?e:null;if(!a[m])return P(),!1;switch(p){case"no-more-tokens":if(f!==0){const{leadingTextStart:S,tokenStart:j}=s.pop();t.push(r.substr(S,j))}return P(),!1;case"self-closed":return f===0?(x!==null&&t.push(r.substr(x,l-x)),t.push(a[m]),e=l+u,!0):(y(_(a[m],l,u)),e=l+u,!0);case"opener":return s.push(_(a[m],l,u,l+u,x)),e=l+u,!0;case"closer":if(f===1)return v(l),e=l+u,!0;const h=s.pop(),C=r.substr(h.prevOffset,l-h.prevOffset);h.children.push(C),h.prevOffset=l+u;const w=_(h.element,h.tokenStart,h.tokenLength,l+u);return w.children=h.children,y(w),e=l+u,!0;default:return P(),!1}}function E(){const a=b.exec(r);if(a===null)return["no-more-tokens"];const d=a.index,[p,m,l,u]=a,f=p.length;return u?["self-closed",l,d,f]:m?["closer",l,d,f]:["opener",l,d,f]}function P(){const a=r.length-e;a!==0&&t.push(r.substr(e,a))}function y(a){const{element:d,tokenStart:p,tokenLength:m,prevOffset:l,children:u}=a,f=s[s.length-1],x=r.substr(f.prevOffset,p-f.prevOffset);x&&f.children.push(x),f.children.push((0,o.cloneElement)(d,null,...u)),f.prevOffset=l||p+m}function v(a){const{element:d,leadingTextStart:p,prevOffset:m,tokenStart:l,children:u}=s.pop(),f=a?r.substr(m,a-m):r.substr(m);f&&u.push(f),p!==null&&t.push(r.substr(p,l-p)),t.push((0,o.cloneElement)(d,null,...u))}const T=I},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>e});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(t){let{icon:s,size:b=24,..._}=t;return(0,o.cloneElement)(s,{width:b,height:b,..._})}const e=r},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>t});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>t});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>t});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}))},"../components/components/pricing-table/stories/index.stories.tsx":(i,c,n)=>{var P,y,v;"use strict";n.r(c),n.d(c,{__namedExportsOrder:()=>E,_default:()=>g,default:()=>_});var o=n("../components/components/button/index.tsx"),r=n("../components/components/product-price/index.tsx"),e=n("../components/components/pricing-table/index.tsx"),t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=`import Button from '../../button';
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
`,b={_default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}};const _={parameters:{storySource:{source:`import Button from '../../button';
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
};`,locationsMap:{default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}}}},title:"JS Packages/Components/Pricing Table",component:e.ZP,subcomponents:{PricingTableColumn:e.oK,PricingTableHeader:e.NE,PricingTableItem:e.kF}},I=T=>(0,t.jsxs)(e.ZP,{...T,children:[(0,t.jsxs)(e.oK,{primary:!0,children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(r.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:T==null?void 0:T.hideDiscountLabel}),(0,t.jsx)(o.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:(0,t.jsx)("strong",{children:"Up to 1000"})}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]}),(0,t.jsxs)(e.oK,{children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(r.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,t.jsx)(o.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:"Up to 300"}),(0,t.jsx)(e.kF,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,t.jsx)(e.kF,{isIncluded:!1}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]})]});I.displayName="Template";const D={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},g=I.bind({});g.args=D,g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(v=(y=g.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const E=["_default"]}}]);})();
