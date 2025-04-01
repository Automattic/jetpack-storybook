"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[95],{"../components/components/product-price/stories/index.stories.tsx":(x,p,e)=>{e.r(p),e.d(p,{__namedExportsOrder:()=>t,_default:()=>s,default:()=>n});var _=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/currencies.js"),a=e("../components/components/product-price/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../index.js';
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
`,r={_default:{startLoc:{col:17,line:19},endLoc:{col:2,line:21},startBody:{col:17,line:19},endBody:{col:2,line:21}}};const n={parameters:{storySource:{source:`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../index.js';
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
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:2,line:21},startBody:{col:17,line:19},endBody:{col:2,line:21}}}}},title:"JS Packages/Components/Product Price",component:a.A,argTypes:{currency:{control:{type:"select"},options:Object.keys(_.y)}}},i=m=>(0,d.jsx)(a.A,{...m}),h={currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"},s=i.bind({});s.args=h;const t=["_default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <ProductPrice {...args} />",...s.parameters?.docs?.source}}}},"../components/components/product-price/index.tsx":(x,p,e)=>{e.d(p,{A:()=>k});var _=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../components/components/text/index.tsx"),o=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(r),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),i={};i.insert="head",i.singleton=!1;var h=c()(n.A,i);const s=n.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({value:l,currency:u,isOff:f,hidePriceFraction:y})=>{const E=(0,a.A)(s.price,"product-price_price",{[s["is-not-off-price"]]:!f}),{symbol:P,integer:b,fraction:g}=(0,o.vA)(l,u),j=!y||!g.endsWith("00");return(0,t.jsxs)(d.Ay,{className:E,variant:"headline-medium",component:"p",children:[(0,t.jsx)(d.Ay,{className:s.symbol,component:"sup",variant:"title-medium",children:P}),b,j&&(0,t.jsx)(d.Ay,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,t.jsx)("strong",{children:g})})]})};try{m.displayName="Price",m.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:m.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch{}const v=_.__,k=({price:l,offPrice:u,currency:f="",showNotOffPrice:y=!0,hideDiscountLabel:E=!0,promoLabel:P="",legend:b=v("/month, paid yearly","jetpack-components"),isNotConvenientPrice:g=!1,hidePriceFraction:j=!1,children:O})=>{if(l==null&&u==null||!f)return null;y=y&&u!=null;const A=typeof l=="number"&&typeof u=="number"?Math.floor((l-u)/l*100):0,S=!E&&A&&A>0?A+v("% off","jetpack-components"):null;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:s.container,children:(0,t.jsxs)("div",{className:(0,a.A)(s["price-container"],"product-price_container"),children:[(0,t.jsx)(m,{value:u??l,currency:f,isOff:!g,hidePriceFraction:j}),y&&(0,t.jsx)(m,{value:l,currency:f,isOff:!1,hidePriceFraction:j}),S&&(0,t.jsx)(d.Ay,{className:(0,a.A)(s["promo-label"],"product-price_promo_label"),children:S})]})}),(0,t.jsxs)("div",{className:s.footer,children:[O||(0,t.jsx)(d.Ay,{className:(0,a.A)(s.legend,"product-price_legend"),children:b}),P&&(0,t.jsx)(d.Ay,{className:(0,a.A)(s["promo-label"],"product-price_promo_label"),children:P})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(x,p,e)=>{e.d(p,{A:()=>d});function _(o){var r,c,n="";if(typeof o=="string"||typeof o=="number")n+=o;else if(typeof o=="object")if(Array.isArray(o)){var i=o.length;for(r=0;r<i;r++)o[r]&&(c=_(o[r]))&&(n&&(n+=" "),n+=c)}else for(c in o)o[c]&&(n&&(n+=" "),n+=c);return n}function a(){for(var o,r,c=0,n="",i=arguments.length;c<i;c++)(o=arguments[c])&&(r=_(o))&&(n&&(n+=" "),n+=r);return n}const d=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(x,p,e)=>{e.d(p,{A:()=>c});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(_),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),r=o()(a());r.push([x.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),r.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const c=r}}]);
