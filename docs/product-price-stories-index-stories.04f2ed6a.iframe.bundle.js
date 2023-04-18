(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3053],{"../components/components/product-price/stories/index.stories.tsx":(f,p,e)=>{var c,n,d;"use strict";e.r(p),e.d(p,{__namedExportsOrder:()=>C,_default:()=>r,default:()=>o});var i=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/currencies.js"),m=e("../components/components/product-price/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Product Price',
	component: ProductPrice,
	argTypes: {
		currency: {
			control: { type: 'select' },
			options: Object.keys( CURRENCIES ),
		},
	},
} as ComponentMeta< typeof ProductPrice >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof ProductPrice > = args => <ProductPrice { ...args } />;

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
`,a={_default:{startLoc:{col:54,line:18},endLoc:{col:88,line:18},startBody:{col:54,line:18},endBody:{col:88,line:18}}};const o={parameters:{storySource:{source:`import { CURRENCIES } from '@automattic/format-currency';
import ProductPrice from '../';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
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
} as ComponentMeta<typeof ProductPrice>);

// Export additional stories using pre-defined values
const Template: ComponentStory<typeof ProductPrice> = args => <ProductPrice {...args} />;
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
_default.args = DefaultArgs;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <ProductPrice {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:54,line:18},endLoc:{col:88,line:18},startBody:{col:54,line:18},endBody:{col:88,line:18}}}}},title:"JS Packages/Components/Product Price",component:m.Z,argTypes:{currency:{control:{type:"select"},options:Object.keys(i.M)}}},u=j=>(0,t.jsx)(m.Z,{...j});u.displayName="Template";const P={currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"},r=u.bind({});r.args=P,r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"args => <ProductPrice {...args} />",...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const C=["_default"]},"../components/components/product-price/index.tsx":(f,p,e)=>{"use strict";e.d(p,{Z:()=>A});var i=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),t=e.n(m),s=e("../components/components/text/index.tsx"),a=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(o),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),r={};r.insert="head",r.singleton=!1;var C=u()(P.Z,r);const c=P.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=y=>{let{value:_,currency:l,isOff:x,hidePriceFraction:g}=y;const v=t()(c.price,"product-price_price",{[c["is-not-off-price"]]:!x}),{symbol:h,integer:O,fraction:E}=(0,a.LR)(_,l),b=!g||!E.endsWith("00");return(0,n.jsxs)(s.ZP,{className:v,variant:"headline-medium",component:"p",children:[(0,n.jsx)(s.ZP,{className:c.symbol,component:"sup",variant:"title-medium",children:h}),O,b&&(0,n.jsx)(s.ZP,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,n.jsx)("strong",{children:E})})]})};d.displayName="Price";try{d.displayName="Price",d.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:d.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch(y){}const j=i.__,A=y=>{let{price:_,offPrice:l,currency:x="",showNotOffPrice:g=!0,hideDiscountLabel:v=!0,promoLabel:h="",legend:O=j("/month, paid yearly","jetpack"),isNotConvenientPrice:E=!1,hidePriceFraction:b=!1,children:D}=y;if(_==null&&l==null||!x)return null;g=g&&l!=null;const S=typeof _=="number"&&typeof l=="number"?Math.floor((_-l)/_*100):0,L=!v&&S&&S>0?S+j("% off","jetpack"):null;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:c.container,children:(0,n.jsxs)("div",{className:t()(c["price-container"],"product-price_container"),children:[(0,n.jsx)(d,{value:l!=null?l:_,currency:x,isOff:!E,hidePriceFraction:b}),g&&(0,n.jsx)(d,{value:_,currency:x,isOff:!1,hidePriceFraction:b})]})}),(0,n.jsxs)("div",{className:c.footer,children:[D||(0,n.jsx)(s.ZP,{className:t()(c.legend,"product-price_legend"),children:O}),h&&(0,n.jsx)(s.ZP,{className:t()(c["promo-label"],"product-price_promo_label"),children:h}),L&&(0,n.jsx)(s.ZP,{className:t()(c["promo-label"],"product-price_promo_label"),children:L})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch(y){}},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(f,p)=>{var e,i;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty;function t(){for(var s=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var u=typeof o;if(u==="string"||u==="number")s.push(o);else if(Array.isArray(o)){if(o.length){var P=t.apply(null,o);P&&s.push(P)}}else if(u==="object")if(o.toString===Object.prototype.toString)for(var r in o)m.call(o,r)&&o[r]&&s.push(r);else s.push(o.toString())}}return s.join(" ")}f.exports?(t.default=t,f.exports=t):(e=[],i=function(){return t}.apply(p,e),i!==void 0&&(f.exports=i))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(f,p,e)=>{"use strict";e.d(p,{Z:()=>o});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(i),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(t),a=s()(m());a.push([f.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{flex-grow:2;flex-basis:0}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),a.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd","promo-label":"nLG0avNxmxxkqepHWGq8",symbol:"qPemya95rifka0IRYOH2"};const o=a}}]);})();
