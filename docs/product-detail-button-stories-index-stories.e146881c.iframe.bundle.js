(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[732],{"../../packages/my-jetpack/_inc/components/product-detail-button/stories/index.stories.jsx":(c,r,t)=>{"use strict";t.r(r),t.d(r,{Default:()=>s,__namedExportsOrder:()=>p,default:()=>y});var d=t("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),n=t("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),l=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),e=t.n(l),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=({children:u,className:v,href:h,isLoading:f=!1,onClick:x,isPrimary:b=!0,disabled:j=!1})=>(0,o.jsx)(d.Ay,{onClick:x,className:v,href:h,variant:b?"primary":"secondary",disabled:f||j,children:f?(0,o.jsx)(n.Ay,{}):u});a.propTypes={className:e().string,isLoading:e().bool,isPrimary:e().bool,disabled:e().bool};const i=a;a.__docgenInfo={description:"",methods:[],displayName:"ProductDetailButton",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isPrimary:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};var _=`import ProductDetailButton from '../';

export default {
	title: 'Packages/My Jetpack/Product Detail Button',
	component: ProductDetailButton,
};

const DetaiilButton = args => <ProductDetailButton { ...args } slug="backup" />;

export const Default = DetaiilButton.bind( {} );
Default.args = {
	children: 'Add Jetpack Search',
};
`,m={Default:{startLoc:{col:22,line:7},endLoc:{col:2,line:10},startBody:{col:22,line:7},endBody:{col:2,line:10}}};const y={parameters:{storySource:{source:`import ProductDetailButton from '../';
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
};`,locationsMap:{default:{startLoc:{col:22,line:7},endLoc:{col:2,line:10},startBody:{col:22,line:7},endBody:{col:2,line:10}}}}},title:"Packages/My Jetpack/Product Detail Button",component:i},s=(u=>(0,o.jsx)(i,{...u,slug:"backup"})).bind({});s.args={children:"Add Jetpack Search"};const p=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'args => <ProductDetailButton {...args} slug="backup" />',...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(c,r,t)=>{"use strict";t.d(r,{Ay:()=>h});var d=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=t("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1__@types+react@18.3.23_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=t("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function a(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const i=(0,l.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,_=(0,n.A)("svg",{target:"ea4tfvq2"})("width:",e.A.spinnerSize,"px;height:",e.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",o.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),m={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},y=(0,n.A)("circle",{target:"ea4tfvq1"})(m,";stroke:",o.l.gray[300],";"),g=(0,n.A)("path",{target:"ea4tfvq0"})(m,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",i,";");var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u({className:f,...x},b){return(0,p.jsxs)(_,{className:(0,d.A)("components-spinner",f),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...x,ref:b,children:[(0,p.jsx)(y,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,p.jsx)(g,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const h=(0,s.forwardRef)(u)},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(c,r,t)=>{"use strict";var d=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function l(){}l.resetWarningCache=n,c.exports=function(){function e(i,_,m,y,g,s){if(s!==d){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function o(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:l,resetWarningCache:n};return a.PropTypes=a,a}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(c,r,t)=>{if(0)var d,n;else c.exports=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":c=>{"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";c.exports=r}}]);
