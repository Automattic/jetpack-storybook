(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[732],{"../../packages/my-jetpack/_inc/components/product-detail-button/stories/index.stories.jsx":(p,r,e)=>{"use strict";e.r(r),e.d(r,{Default:()=>s,__namedExportsOrder:()=>h,default:()=>m});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),t=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),o=e.n(t),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=({children:y,className:x,href:b,isLoading:_=!1,onClick:v,isPrimary:j=!0,disabled:P=!1})=>(0,a.jsx)(n.Ay,{onClick:v,className:x,href:b,variant:j?"primary":"secondary",disabled:_||P,children:_?(0,a.jsx)(c.Ay,{}):y});d.propTypes={className:o().string,isLoading:o().bool,isPrimary:o().bool,disabled:o().bool};const i=d;d.__docgenInfo={description:"",methods:[],displayName:"ProductDetailButton",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isPrimary:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};var u=`import React from 'react';
import ProductDetailButton from '../';

export default {
	title: 'Packages/My Jetpack/Product Detail Button',
	component: ProductDetailButton,
};

const DetaiilButton = args => <ProductDetailButton { ...args } slug="backup" />;

export const Default = DetaiilButton.bind( {} );
Default.args = {
	children: 'Add Jetpack Search',
};
`,g={Default:{startLoc:{col:22,line:8},endLoc:{col:2,line:11},startBody:{col:22,line:8},endBody:{col:2,line:11}}};const m={parameters:{storySource:{source:`import React from 'react';
import ProductDetailButton from '../';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/My Jetpack/Product Detail Button',
  component: ProductDetailButton
};
const DetaiilButton = args => /*#__PURE__*/_jsx(ProductDetailButton, {
  ...args,
  slug: "backup"
});
export const Default = DetaiilButton.bind({});
Default.args = {
  children: 'Add Jetpack Search'
};`,locationsMap:{default:{startLoc:{col:22,line:8},endLoc:{col:2,line:11},startBody:{col:22,line:8},endBody:{col:2,line:11}}}}},title:"Packages/My Jetpack/Product Detail Button",component:i},s=(y=>(0,a.jsx)(i,{...y,slug:"backup"})).bind({});s.args={children:"Add Jetpack Search"};const h=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'args => <ProductDetailButton {...args} slug="backup" />',...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(p,r,e)=>{"use strict";e.d(r,{Ay:()=>x});var l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1__@types+react@18.3.23_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function a(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const d=(0,c.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,i=(0,n.A)("svg",{target:"ea4tfvq2"})("width:",t.A.spinnerSize,"px;height:",t.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",o.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),u={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},g=(0,n.A)("circle",{target:"ea4tfvq1"})(u,";stroke:",o.l.gray[300],";"),m=(0,n.A)("path",{target:"ea4tfvq0"})(u,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",d,";");var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function h({className:b,..._},v){return(0,s.jsxs)(i,{className:(0,l.A)("components-spinner",b),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",..._,ref:v,children:[(0,s.jsx)(g,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,s.jsx)(m,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const x=(0,f.forwardRef)(h)},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(p,r,e)=>{"use strict";var l=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function c(){}c.resetWarningCache=n,p.exports=function(){function t(d,i,u,g,m,f){if(f!==l){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}t.isRequired=t;function o(){return t}var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,elementType:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:c,resetWarningCache:n};return a.PropTypes=a,a}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(p,r,e)=>{if(0)var l,n;else p.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":p=>{"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=r}}]);
