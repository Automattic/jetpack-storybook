(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3010],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/defineProperty.js":(i,c,n)=>{var o=n("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPropertyKey.js");function r(e,t,l){return t=o(t),t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}i.exports=r,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPrimitive.js":(i,c,n)=>{var o=n("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js").default;function r(e,t){if(o(e)!=="object"||e===null)return e;var l=e[Symbol.toPrimitive];if(l!==void 0){var b=l.call(e,t||"default");if(o(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}i.exports=r,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPropertyKey.js":(i,c,n)=>{var o=n("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js").default,r=n("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPrimitive.js");function e(t){var l=r(t,"string");return o(l)==="symbol"?l:String(l)}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js":i=>{function c(n){"@babel/helpers - typeof";return i.exports=c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},i.exports.__esModule=!0,i.exports.default=i.exports,c(n)}i.exports=c,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(i,c,n)=>{"use strict";n.d(c,{ZP:()=>s});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=n.n(r),t=n("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=n("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),b=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),g=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function D(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const C=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,_=(0,t.Z)("svg",{target:"ea4tfvq2"})("width:",b.Z.spinnerSize,"px;height:",b.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",g.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),v={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},P=(0,t.Z)("circle",{target:"ea4tfvq1"})(v,";stroke:",g.D.gray[300],";"),h=(0,t.Z)("path",{target:"ea4tfvq0"})(v,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",C,";");function y({className:d,...m},u){return(0,o.createElement)(_,{className:e()("components-spinner",d),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...m,ref:u},(0,o.createElement)(P,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(h,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const s=(0,o.forwardRef)(y)},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>g});var o=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),r=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const e="36px",t="12px",l={controlSurfaceColor:r.D.white,controlTextActiveColor:r.D.ui.theme,controlPaddingX:t,controlPaddingXLarge:`calc(${t} * 1.3334)`,controlPaddingXSmall:`calc(${t} / 1.3334)`,controlBackgroundColor:r.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${r.D.ui.theme}`,controlDestructiveBorderColor:r.D.alert.red,controlHeight:e,controlHeightXSmall:`calc( ${e} * 0.6 )`,controlHeightSmall:`calc( ${e} * 0.8 )`,controlHeightLarge:`calc( ${e} * 1.2 )`,controlHeightXLarge:`calc( ${e} * 1.4 )`},b={toggleGroupControlBackgroundColor:l.controlBackgroundColor,toggleGroupControlBorderColor:r.D.ui.border,toggleGroupControlBackdropBackgroundColor:l.controlSurfaceColor,toggleGroupControlBackdropBorderColor:r.D.ui.border,toggleGroupControlButtonColorActive:l.controlBackgroundColor},g=Object.assign({},l,b,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:r.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:r.D.white,surfaceColor:r.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+element@5.15.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>I});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let r,e,t,l;const b=/<(\/)?(\w+)\s*(\/)?>/g;function g(s,d,m,u,a){return{element:s,tokenStart:d,tokenLength:m,prevOffset:u,leadingTextStart:a,children:[]}}const D=(s,d)=>{if(r=s,e=0,t=[],l=[],b.lastIndex=0,!C(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do;while(_(d));return(0,o.createElement)(o.Fragment,null,...t)},C=s=>{const d=typeof s=="object",m=d&&Object.values(s);return d&&m.length&&m.every(u=>(0,o.isValidElement)(u))};function _(s){const d=v(),[m,u,a,p]=d,f=l.length,x=a>e?e:null;if(!s[u])return P(),!1;switch(m){case"no-more-tokens":if(f!==0){const{leadingTextStart:w,tokenStart:B}=l.pop();t.push(r.substr(w,B))}return P(),!1;case"self-closed":return f===0?(x!==null&&t.push(r.substr(x,a-x)),t.push(s[u]),e=a+p,!0):(h(g(s[u],a,p)),e=a+p,!0);case"opener":return l.push(g(s[u],a,p,a+p,x)),e=a+p,!0;case"closer":if(f===1)return y(a),e=a+p,!0;const T=l.pop(),S=r.substr(T.prevOffset,a-T.prevOffset);T.children.push(S),T.prevOffset=a+p;const E=g(T.element,T.tokenStart,T.tokenLength,a+p);return E.children=T.children,h(E),e=a+p,!0;default:return P(),!1}}function v(){const s=b.exec(r);if(s===null)return["no-more-tokens"];const d=s.index,[m,u,a,p]=s,f=m.length;return p?["self-closed",a,d,f]:u?["closer",a,d,f]:["opener",a,d,f]}function P(){const s=r.length-e;s!==0&&t.push(r.substr(e,s))}function h(s){const{element:d,tokenStart:m,tokenLength:u,prevOffset:a,children:p}=s,f=l[l.length-1],x=r.substr(f.prevOffset,m-f.prevOffset);x&&f.children.push(x),f.children.push((0,o.cloneElement)(d,null,...p)),f.prevOffset=a||m+u}function y(s){const{element:d,leadingTextStart:m,prevOffset:u,tokenStart:a,children:p}=l.pop(),f=s?r.substr(u,s-u):r.substr(u);f&&p.push(f),m!==null&&t.push(r.substr(m,a-m)),t.push((0,o.cloneElement)(d,null,...p))}const I=D},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>e});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:t,size:l=24,...b}){return(0,o.cloneElement)(t,{width:l,height:l,...b})}const e=r},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/check.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>t});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>t});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/external.js":(i,c,n)=>{"use strict";n.d(c,{Z:()=>t});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/pricing-table/stories/index.stories.tsx":(i,c,n)=>{var P,h,y;"use strict";n.r(c),n.d(c,{__namedExportsOrder:()=>v,_default:()=>_,default:()=>g});var o=n("../components/components/button/index.tsx"),r=n("../components/components/product-price/index.tsx"),e=n("../components/components/pricing-table/index.tsx"),t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import Button from '../../button';
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
`,b={_default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}};const g={parameters:{storySource:{source:`import Button from '../../button';
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
};`,locationsMap:{default:{startLoc:{col:54,line:14},endLoc:{col:1,line:41},startBody:{col:54,line:14},endBody:{col:1,line:41}}}}},title:"JS Packages/Components/Pricing Table",component:e.ZP,subcomponents:{PricingTableColumn:e.oK,PricingTableHeader:e.NE,PricingTableItem:e.kF}},D=I=>(0,t.jsxs)(e.ZP,{...I,children:[(0,t.jsxs)(e.oK,{primary:!0,children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(r.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:I==null?void 0:I.hideDiscountLabel}),(0,t.jsx)(o.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:(0,t.jsx)("strong",{children:"Up to 1000"})}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]}),(0,t.jsxs)(e.oK,{children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(r.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,t.jsx)(o.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:"Up to 300"}),(0,t.jsx)(e.kF,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,t.jsx)(e.kF,{isIncluded:!1}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]})]});D.displayName="Template";const C={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},_=D.bind({});_.args=C,_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(y=(h=_.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const v=["_default"]}}]);})();
