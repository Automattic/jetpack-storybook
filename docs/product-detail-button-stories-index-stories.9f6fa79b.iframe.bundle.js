"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8130],{"../../packages/my-jetpack/_inc/components/product-detail-button/stories/index.stories.jsx":(g,l,o)=>{var u,i,p;o.r(l),o.d(l,{Default:()=>c,__namedExportsOrder:()=>m,default:()=>s});var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../packages/my-jetpack/_inc/components/product-detail-button/index.js"),a=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=`import React from 'react';
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
`,d={Default:{startLoc:{col:22,line:9},endLoc:{col:79,line:9},startBody:{col:22,line:9},endBody:{col:79,line:9}}};const s={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{default:{startLoc:{col:22,line:9},endLoc:{col:79,line:9},startBody:{col:22,line:9},endBody:{col:79,line:9}}}}},title:"Packages/My Jetpack/Product Detail Button",component:e.Z},n=_=>(0,a.jsx)(e.Z,{..._,slug:"backup"});n.displayName="DetaiilButton";const c=n.bind({});c.args={children:"Add Jetpack Search"},c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:'args => <ProductDetailButton {...args} slug="backup" />',...(p=(i=c.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const m=["Default"]},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(g,l,o)=>{o.d(l,{ZP:()=>P});var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=o.n(e),r=o("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=o("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),n=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function c(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const m=d.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,u=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",s.Z.spinnerSize,"px;height:",s.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",n.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),i={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},p=(0,r.Z)("circle",{target:"ea4tfvq1"})(i,";stroke:",n.D.gray[300],";"),_=(0,r.Z)("path",{target:"ea4tfvq0"})(i,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",m,";");function f({className:x,...B},b){return(0,t.createElement)(u,{className:a()("components-spinner",x),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...B,ref:b},(0,t.createElement)(p,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(_,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const P=(0,t.forwardRef)(f)},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(g,l,o)=>{o.d(l,{Z:()=>n});var t=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const a="36px",r="12px",d={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:r,controlPaddingXLarge:`calc(${r} * 1.3334)`,controlPaddingXSmall:`calc(${r} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:a,controlHeightXSmall:`calc( ${a} * 0.6 )`,controlHeightSmall:`calc( ${a} * 0.8 )`,controlHeightLarge:`calc( ${a} * 1.2 )`,controlHeightXLarge:`calc( ${a} * 1.4 )`},s={toggleGroupControlBackgroundColor:d.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:d.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:d.controlBackgroundColor},n=Object.assign({},d,s,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../packages/my-jetpack/_inc/components/product-detail-button/index.js":(g,l,o)=>{o.d(l,{Z:()=>c});var t=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),r=o.n(a),d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=({children:m,className:u,href:i,isLoading:p,onClick:_,isPrimary:f,disabled:D})=>(0,s.jsx)(t.ZP,{onClick:_,className:u,href:i,variant:f?"primary":"secondary",disabled:p||D,children:p?(0,s.jsx)(e.ZP,{}):m});n.displayName="ProductDetailButton",n.propTypes={className:r().string,isLoading:r().bool,isPrimary:r().bool,disabled:r().bool},n.defaultProps={isLoading:!1,isPrimary:!0,disabled:!1};const c=n;n.__docgenInfo={description:"",methods:[],displayName:"ProductDetailButton",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isPrimary:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}}}}]);})();
