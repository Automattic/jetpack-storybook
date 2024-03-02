"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3010,687],{"../components/components/pricing-table/stories/index.stories.tsx":(P,m,o)=>{var b,h,v;o.r(m),o.d(m,{__namedExportsOrder:()=>D,_default:()=>_,default:()=>f});var r=o("../components/components/button/index.tsx"),n=o("../components/components/product-price/index.tsx"),e=o("../components/components/pricing-table/index.tsx"),t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=`import Button from '../../button';
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
`,g={_default:{startLoc:{col:56,line:12},endLoc:{col:1,line:55},startBody:{col:56,line:12},endBody:{col:1,line:55}}};const f={parameters:{storySource:{source:`import Button from '../../button';
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
`,locationsMap:{default:{startLoc:{col:56,line:12},endLoc:{col:1,line:55},startBody:{col:56,line:12},endBody:{col:1,line:55}}}}},title:"JS Packages/Components/Pricing Table",component:e.ZP,subcomponents:{PricingTableColumn:e.oK,PricingTableHeader:e.NE,PricingTableItem:e.kF}},C=I=>(0,t.jsxs)(e.ZP,{...I,children:[(0,t.jsxs)(e.oK,{primary:!0,children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(n.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:I==null?void 0:I.hideDiscountLabel}),(0,t.jsx)(r.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:(0,t.jsx)("strong",{children:"Up to 1000"})}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,t.jsx)(e.kF,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]}),(0,t.jsxs)(e.oK,{children:[(0,t.jsxs)(e.NE,{children:[(0,t.jsx)(n.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,t.jsx)(r.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,t.jsx)(e.kF,{isIncluded:!0,label:"Up to 300"}),(0,t.jsx)(e.kF,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,t.jsx)(e.kF,{isIncluded:!1}),(0,t.jsx)(e.kF,{isIncluded:!0}),(0,t.jsx)(e.kF,{isIncluded:!0})]})]});C.displayName="Template";const E={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},_=C.bind({});_.args=E,_.parameters={..._.parameters,docs:{...(b=_.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(v=(h=_.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const D=["_default"]},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(P,m,o)=>{o.d(m,{ZP:()=>i});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=o.n(n),t=o("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),s=o("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),g=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),f=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function C(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const E=s.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,_=(0,t.Z)("svg",{target:"ea4tfvq2"})("width:",g.Z.spinnerSize,"px;height:",g.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",f.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),D={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},b=(0,t.Z)("circle",{target:"ea4tfvq1"})(D,";stroke:",f.D.gray[300],";"),h=(0,t.Z)("path",{target:"ea4tfvq0"})(D,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",E,";");function v({className:a,...d},c){return(0,r.createElement)(_,{className:e()("components-spinner",a),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...d,ref:c},(0,r.createElement)(b,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,r.createElement)(h,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const i=(0,r.forwardRef)(v)},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(P,m,o)=>{o.d(m,{Z:()=>f});var r=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),n=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const e="36px",t="12px",s={controlSurfaceColor:n.D.white,controlTextActiveColor:n.D.theme.accent,controlPaddingX:t,controlPaddingXLarge:`calc(${t} * 1.3334)`,controlPaddingXSmall:`calc(${t} / 1.3334)`,controlBackgroundColor:n.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${n.D.theme.accent}`,controlDestructiveBorderColor:n.D.alert.red,controlHeight:e,controlHeightXSmall:`calc( ${e} * 0.6 )`,controlHeightSmall:`calc( ${e} * 0.8 )`,controlHeightLarge:`calc( ${e} * 1.2 )`,controlHeightXLarge:`calc( ${e} * 1.4 )`},g={toggleGroupControlBackgroundColor:s.controlBackgroundColor,toggleGroupControlBorderColor:n.D.ui.border,toggleGroupControlBackdropBackgroundColor:s.controlSurfaceColor,toggleGroupControlBackdropBorderColor:n.D.ui.border,toggleGroupControlButtonColorActive:s.controlBackgroundColor},f=Object.assign({},s,g,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,r.D)(2)}`,cardPaddingSmall:`${(0,r.D)(4)}`,cardPaddingMedium:`${(0,r.D)(4)} ${(0,r.D)(6)}`,cardPaddingLarge:`${(0,r.D)(6)} ${(0,r.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:n.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:n.D.white,surfaceColor:n.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+element@5.29.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(P,m,o)=>{o.d(m,{Z:()=>I});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let n,e,t,s;const g=/<(\/)?(\w+)\s*(\/)?>/g;function f(i,a,d,c,l){return{element:i,tokenStart:a,tokenLength:d,prevOffset:c,leadingTextStart:l,children:[]}}const C=(i,a)=>{if(n=i,e=0,t=[],s=[],g.lastIndex=0,!E(a))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(_(a));return(0,r.createElement)(r.Fragment,null,...t)},E=i=>{const a=typeof i=="object",d=a&&Object.values(i);return a&&d.length&&d.every(c=>(0,r.isValidElement)(c))};function _(i){const a=D(),[d,c,l,u]=a,p=s.length,x=l>e?e:null;if(!i[c])return b(),!1;switch(d){case"no-more-tokens":if(p!==0){const{leadingTextStart:y,tokenStart:B}=s.pop();t.push(n.substr(y,B))}return b(),!1;case"self-closed":return p===0?(x!==null&&t.push(n.substr(x,l-x)),t.push(i[c]),e=l+u,!0):(h(f(i[c],l,u)),e=l+u,!0);case"opener":return s.push(f(i[c],l,u,l+u,x)),e=l+u,!0;case"closer":if(p===1)return v(l),e=l+u,!0;const T=s.pop(),S=n.substr(T.prevOffset,l-T.prevOffset);T.children.push(S),T.prevOffset=l+u;const w=f(T.element,T.tokenStart,T.tokenLength,l+u);return w.children=T.children,h(w),e=l+u,!0;default:return b(),!1}}function D(){const i=g.exec(n);if(i===null)return["no-more-tokens"];const a=i.index,[d,c,l,u]=i,p=d.length;return u?["self-closed",l,a,p]:c?["closer",l,a,p]:["opener",l,a,p]}function b(){const i=n.length-e;i!==0&&t.push(n.substr(e,i))}function h(i){const{element:a,tokenStart:d,tokenLength:c,prevOffset:l,children:u}=i,p=s[s.length-1],x=n.substr(p.prevOffset,d-p.prevOffset);x&&p.children.push(x),p.children.push((0,r.cloneElement)(a,null,...u)),p.prevOffset=l||d+c}function v(i){const{element:a,leadingTextStart:d,prevOffset:c,tokenStart:l,children:u}=s.pop(),p=i?n.substr(c,i-c):n.substr(c);p&&u.push(p),d!==null&&t.push(n.substr(d,l-d)),t.push((0,r.cloneElement)(a,null,...u))}const I=C},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(P,m,o)=>{o.d(m,{Z:()=>e});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function n({icon:t,size:s=24,...g},f){return(0,r.cloneElement)(t,{width:s,height:s,...g,ref:f})}const e=(0,r.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(P,m,o)=>{o.d(m,{Z:()=>t});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=o("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,r.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(n.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(P,m,o)=>{o.d(m,{Z:()=>t});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=o("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,r.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(n.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(P,m,o)=>{o.d(m,{Z:()=>t});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=o("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,r.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(n.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))}}]);})();
