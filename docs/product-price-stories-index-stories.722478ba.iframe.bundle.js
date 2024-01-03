(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3053],{"../components/components/product-price/stories/index.stories.tsx":(y,_,e)=>{var a,o,p;"use strict";e.r(_),e.d(_,{__namedExportsOrder:()=>P,_default:()=>s,default:()=>l});var i=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/currencies.js"),u=e("../components/components/product-price/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=`import { CURRENCIES } from '@automattic/format-currency';
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
`,r={_default:{startLoc:{col:56,line:17},endLoc:{col:92,line:17},startBody:{col:56,line:17},endBody:{col:92,line:17}}};const l={parameters:{storySource:{source:`import { CURRENCIES } from '@automattic/format-currency';
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
`,locationsMap:{default:{startLoc:{col:56,line:17},endLoc:{col:92,line:17},startBody:{col:56,line:17},endBody:{col:92,line:17}}}}},title:"JS Packages/Components/Product Price",component:u.Z,argTypes:{currency:{control:{type:"select"},options:Object.keys(i.M)}}},t=j=>(0,c.jsx)(u.Z,{...j});t.displayName="Template";const f={currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"},s=t.bind({});s.args=f,s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"args => <ProductPrice {...args} />",...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const P=["_default"]},"../components/components/product-price/index.tsx":(y,_,e)=>{"use strict";e.d(_,{Z:()=>k});var i=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=e.n(u),n=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(l),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),s={};s.insert="head",s.singleton=!1;var P=t()(f.Z,s);const a=f.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=({value:d,currency:m,isOff:x,hidePriceFraction:g})=>{const b=c()(a.price,"product-price_price",{[a["is-not-off-price"]]:!x}),{symbol:E,integer:S,fraction:v}=(0,r.LR)(d,m),h=!g||!v.endsWith("00");return(0,o.jsxs)(n.ZP,{className:b,variant:"headline-medium",component:"p",children:[(0,o.jsx)(n.ZP,{className:a.symbol,component:"sup",variant:"title-medium",children:E}),S,h&&(0,o.jsx)(n.ZP,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,o.jsx)("strong",{children:v})})]})};p.displayName="Price";try{p.displayName="Price",p.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:p.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch(d){}const j=i.__,k=({price:d,offPrice:m,currency:x="",showNotOffPrice:g=!0,hideDiscountLabel:b=!0,promoLabel:E="",legend:S=j("/month, paid yearly","jetpack"),isNotConvenientPrice:v=!1,hidePriceFraction:h=!1,children:O})=>{if(d==null&&m==null||!x)return null;g=g&&m!=null;const C=typeof d=="number"&&typeof m=="number"?Math.floor((d-m)/d*100):0,D=!b&&C&&C>0?C+j("% off","jetpack"):null;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:a.container,children:(0,o.jsxs)("div",{className:c()(a["price-container"],"product-price_container"),children:[(0,o.jsx)(p,{value:m!=null?m:d,currency:x,isOff:!v,hidePriceFraction:h}),g&&(0,o.jsx)(p,{value:d,currency:x,isOff:!1,hidePriceFraction:h}),D&&(0,o.jsx)(n.ZP,{className:c()(a["promo-label"],"product-price_promo_label"),children:D})]})}),(0,o.jsxs)("div",{className:a.footer,children:[O||(0,o.jsx)(n.ZP,{className:c()(a.legend,"product-price_legend"),children:S}),E&&(0,o.jsx)(n.ZP,{className:c()(a["promo-label"],"product-price_promo_label"),children:E})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch(d){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(y,_)=>{var e,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,c="[native code]";function n(){for(var r=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var f=typeof t;if(f==="string"||f==="number")r.push(t);else if(Array.isArray(t)){if(t.length){var s=n.apply(null,t);s&&r.push(s)}}else if(f==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){r.push(t.toString());continue}for(var P in t)u.call(t,P)&&t[P]&&r.push(P)}}}return r.join(" ")}y.exports?(n.default=n,y.exports=n):(e=[],i=function(){return n}.apply(_,e),i!==void 0&&(y.exports=i))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(y,_,e)=>{"use strict";e.d(_,{Z:()=>l});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(i),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(c),r=n()(u());r.push([y.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),r.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const l=r}}]);})();
