"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[95],{"../components/components/product-price/stories/index.stories.tsx":(j,d,e)=>{e.r(d),e.d(d,{__namedExportsOrder:()=>s,_default:()=>o,default:()=>x});var i=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/currencies.js"),n=e("../components/components/product-price/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=`import { CURRENCIES } from '@automattic/format-currency';
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
`,l={_default:{startLoc:{col:17,line:19},endLoc:{col:2,line:21},startBody:{col:17,line:19},endBody:{col:2,line:21}}};const x={parameters:{storySource:{source:`import { CURRENCIES } from '@automattic/format-currency';
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
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:2,line:21},startBody:{col:17,line:19},endBody:{col:2,line:21}}}}},title:"JS Packages/Components/Product Price",component:n.A,argTypes:{currency:{control:{type:"select"},options:Object.keys(i.y)}}},p=c=>(0,t.jsx)(n.A,{...c}),v={currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"},o=p.bind({});o.args=v;const s=["_default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <ProductPrice {...args} />",...o.parameters?.docs?.source}}}},"../components/components/product-price/index.tsx":(j,d,e)=>{e.d(d,{A:()=>k});var i=e("../../../node_modules/.pnpm/@wordpress+i18n@5.22.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../components/components/text/index.tsx"),u=e("../number-formatters/src/index.ts"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(l),x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),p={};p.insert="head",p.singleton=!1;var v=f()(x.A,p);const o=x.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({value:r,currency:a,isOff:_,hidePriceFraction:m})=>{const E=(0,n.A)(o.price,"product-price_price",{[o["is-not-off-price"]]:!_}),{symbol:y,integer:b,fraction:P}=(0,u.vA)(r,a),g=!m||!P.endsWith("00");return(0,s.jsxs)(t.Ay,{className:E,variant:"headline-medium",component:"p",children:[(0,s.jsx)(t.Ay,{className:o.symbol,component:"sup",variant:"title-medium",children:y}),b,g&&(0,s.jsx)(t.Ay,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,s.jsx)("strong",{children:P})})]})};try{c.displayName="Price",c.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:c.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch{}const A=i.__,k=({price:r,offPrice:a,currency:_="",showNotOffPrice:m=!0,hideDiscountLabel:E=!0,promoLabel:y="",legend:b=A("/month, paid yearly","jetpack-components"),isNotConvenientPrice:P=!1,hidePriceFraction:g=!1,children:O})=>{if(r==null&&a==null||!_)return null;m=m&&a!=null;const h=typeof r=="number"&&typeof a=="number"?Math.floor((r-a)/r*100):0,S=!E&&h&&h>0?h+A("% off","jetpack-components"):null;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:o.container,children:(0,s.jsxs)("div",{className:(0,n.A)(o["price-container"],"product-price_container"),children:[(0,s.jsx)(c,{value:a??r,currency:_,isOff:!P,hidePriceFraction:g}),m&&(0,s.jsx)(c,{value:r,currency:_,isOff:!1,hidePriceFraction:g}),S&&(0,s.jsx)(t.Ay,{className:(0,n.A)(o["promo-label"],"product-price_promo_label"),children:S})]})}),(0,s.jsxs)("div",{className:o.footer,children:[O||(0,s.jsx)(t.Ay,{className:(0,n.A)(o.legend,"product-price_legend"),children:b}),y&&(0,s.jsx)(t.Ay,{className:(0,n.A)(o["promo-label"],"product-price_promo_label"),children:y})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(j,d,e)=>{e.d(d,{A:()=>f});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(i),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(t),l=u()(n());l.push([j.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr::after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),l.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const f=l}}]);
