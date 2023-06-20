(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3053],{"../components/components/product-price/stories/index.stories.tsx":(P,m,e)=>{var c,n,l;"use strict";e.r(m),e.d(m,{__namedExportsOrder:()=>y,_default:()=>s,default:()=>d});var i=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/currencies.js"),u=e("../components/components/product-price/index.tsx"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=`import { CURRENCIES } from '@automattic/format-currency';
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
`,r={_default:{startLoc:{col:54,line:18},endLoc:{col:88,line:18},startBody:{col:54,line:18},endBody:{col:88,line:18}}};const d={parameters:{storySource:{source:`import { CURRENCIES } from '@automattic/format-currency';
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
};`,locationsMap:{default:{startLoc:{col:54,line:18},endLoc:{col:88,line:18},startBody:{col:54,line:18},endBody:{col:88,line:18}}}}},title:"JS Packages/Components/Product Price",component:u.Z,argTypes:{currency:{control:{type:"select"},options:Object.keys(i.M)}}},o=h=>(0,a.jsx)(u.Z,{...h});o.displayName="Template";const _={currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"},s=o.bind({});s.args=_,s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"args => <ProductPrice {...args} />",...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const y=["_default"]},"../components/components/product-price/index.tsx":(P,m,e)=>{"use strict";e.d(m,{Z:()=>A});var i=e("../../../node_modules/.pnpm/@wordpress+i18n@4.35.0/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(u),t=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(d),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),s={};s.insert="head",s.singleton=!1;var y=o()(_.Z,s);const c=_.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=x=>{let{value:f,currency:p,isOff:g,hidePriceFraction:j}=x;const S=a()(c.price,"product-price_price",{[c["is-not-off-price"]]:!g}),{symbol:E,integer:O,fraction:v}=(0,r.LR)(f,p),b=!j||!v.endsWith("00");return(0,n.jsxs)(t.ZP,{className:S,variant:"headline-medium",component:"p",children:[(0,n.jsx)(t.ZP,{className:c.symbol,component:"sup",variant:"title-medium",children:E}),O,b&&(0,n.jsx)(t.ZP,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,n.jsx)("strong",{children:v})})]})};l.displayName="Price";try{l.displayName="Price",l.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:l.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch(x){}const h=i.__,A=x=>{let{price:f,offPrice:p,currency:g="",showNotOffPrice:j=!0,hideDiscountLabel:S=!0,promoLabel:E="",legend:O=h("/month, paid yearly","jetpack"),isNotConvenientPrice:v=!1,hidePriceFraction:b=!1,children:D}=x;if(f==null&&p==null||!g)return null;j=j&&p!=null;const C=typeof f=="number"&&typeof p=="number"?Math.floor((f-p)/f*100):0,L=!S&&C&&C>0?C+h("% off","jetpack"):null;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:c.container,children:(0,n.jsxs)("div",{className:a()(c["price-container"],"product-price_container"),children:[(0,n.jsx)(l,{value:p!=null?p:f,currency:g,isOff:!v,hidePriceFraction:b}),j&&(0,n.jsx)(l,{value:f,currency:g,isOff:!1,hidePriceFraction:b})]})}),(0,n.jsxs)("div",{className:c.footer,children:[D||(0,n.jsx)(t.ZP,{className:a()(c.legend,"product-price_legend"),children:O}),E&&(0,n.jsx)(t.ZP,{className:a()(c["promo-label"],"product-price_promo_label"),children:E}),L&&(0,n.jsx)(t.ZP,{className:a()(c["promo-label"],"product-price_promo_label"),children:L})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch(x){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(P,m)=>{var e,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,a="[native code]";function t(){for(var r=[],d=0;d<arguments.length;d++){var o=arguments[d];if(o){var _=typeof o;if(_==="string"||_==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&r.push(s)}}else if(_==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var y in o)u.call(o,y)&&o[y]&&r.push(y)}}}return r.join(" ")}P.exports?(t.default=t,P.exports=t):(e=[],i=function(){return t}.apply(m,e),i!==void 0&&(P.exports=i))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(P,m,e)=>{"use strict";e.d(m,{Z:()=>d});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),r=t()(u());r.push([P.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{flex-grow:2;flex-basis:0}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),r.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd","promo-label":"nLG0avNxmxxkqepHWGq8",symbol:"qPemya95rifka0IRYOH2"};const d=r}}]);})();
