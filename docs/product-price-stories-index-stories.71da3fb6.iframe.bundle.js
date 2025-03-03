"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[95],{"../components/components/product-price/stories/index.stories.tsx":(P,p,e)=>{e.r(p),e.d(p,{__namedExportsOrder:()=>d,_default:()=>m,default:()=>r});var _=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/currencies.js"),c=e("../components/components/product-price/index.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../index.js';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Product Price',
	component: ProductPrice,
	argTypes: {
		currency: {
			control: { type: 'select' },
			options: Object.keys( CURRENCIES ),
		},
	},
} as Meta< typeof ProductPrice >;

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
`,t={_default:{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}}};const r={parameters:{storySource:{source:`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
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
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}}}}},title:"JS Packages/Components/Product Price",component:c.A,argTypes:{currency:{control:{type:"select"},options:Object.keys(_.y)}}},s=n=>(0,a.jsx)(c.A,{...n}),i={currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"},m=s.bind({});m.args=i;const d=["_default"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <ProductPrice {...args} />",...m.parameters?.docs?.source}}}},"../components/components/product-price/index.tsx":(P,p,e)=>{e.d(p,{A:()=>k});var _=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../components/components/text/index.tsx"),o=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(t),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),i={};i.insert="head",i.singleton=!1;var m=r()(s.A,i);const d=s.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({value:l,currency:u,isOff:y,hidePriceFraction:x})=>{const b=(0,c.A)(d.price,"product-price_price",{[d["is-not-off-price"]]:!y}),{symbol:g,integer:A,fraction:j}=(0,o.vA)(l,u),E=!x||!j.endsWith("00");return(0,n.jsxs)(a.Ay,{className:b,variant:"headline-medium",component:"p",children:[(0,n.jsx)(a.Ay,{className:d.symbol,component:"sup",variant:"title-medium",children:g}),A,E&&(0,n.jsx)(a.Ay,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,n.jsx)("strong",{children:j})})]})};try{f.displayName="Price",f.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:f.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch{}const v=_.__,k=({price:l,offPrice:u,currency:y="",showNotOffPrice:x=!0,hideDiscountLabel:b=!0,promoLabel:g="",legend:A=v("/month, paid yearly","jetpack-components"),isNotConvenientPrice:j=!1,hidePriceFraction:E=!1,children:O})=>{if(l==null&&u==null||!y)return null;x=x&&u!=null;const h=typeof l=="number"&&typeof u=="number"?Math.floor((l-u)/l*100):0,S=!b&&h&&h>0?h+v("% off","jetpack-components"):null;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:d.container,children:(0,n.jsxs)("div",{className:(0,c.A)(d["price-container"],"product-price_container"),children:[(0,n.jsx)(f,{value:u??l,currency:y,isOff:!j,hidePriceFraction:E}),x&&(0,n.jsx)(f,{value:l,currency:y,isOff:!1,hidePriceFraction:E}),S&&(0,n.jsx)(a.Ay,{className:(0,c.A)(d["promo-label"],"product-price_promo_label"),children:S})]})}),(0,n.jsxs)("div",{className:d.footer,children:[O||(0,n.jsx)(a.Ay,{className:(0,c.A)(d.legend,"product-price_legend"),children:A}),g&&(0,n.jsx)(a.Ay,{className:(0,c.A)(d["promo-label"],"product-price_promo_label"),children:g})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(P,p,e)=>{e.d(p,{A:()=>a});function _(o){var t,r,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var i=o.length;for(t=0;t<i;t++)o[t]&&(r=_(o[t]))&&(s&&(s+=" "),s+=r)}else for(r in o)o[r]&&(s&&(s+=" "),s+=r);return s}function c(){for(var o,t,r=0,s="",i=arguments.length;r<i;r++)(o=arguments[r])&&(t=_(o))&&(s&&(s+=" "),s+=t);return s}const a=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(P,p,e)=>{e.d(p,{A:()=>r});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(_),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(c());t.push([P.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),t.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const r=t}}]);
