(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9713],{"../../plugins/protect/src/js/components/alert-icon/stories/index.stories.jsx":(p,i,s)=>{var f,j,x;"use strict";s.r(i),s.d(i,{Default:()=>e,__namedExportsOrder:()=>v,default:()=>y});var _=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(l),n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/alert-icon/styles.module.scss"),d={};d.insert="head",d.singleton=!1;var o=a()(n.Z,d);const m=n.Z.locals||{};var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function c({className:h,color:A="#D63638"}){return(0,t.jsx)("div",{className:m.container,children:(0,t.jsxs)(r.Wj,{className:h,width:"127",height:"136",viewBox:"0 0 127 136",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsxs)(r.G,{filter:"url(#filter0_d_2716_19567)",children:[(0,t.jsx)(r.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M63.4061 36L86.8123 46.4057V61.9177C86.8123 75.141 78.1289 87.6611 65.8844 91.6107C64.2754 92.1298 62.5369 92.1297 60.9279 91.6107C48.6834 87.6611 40 75.141 40 61.9177V46.4057L63.4061 36Z",fill:A}),(0,t.jsx)(r.UL,{x:"59.8953",y:"72.1666",width:"7.02184",height:"7",rx:"3.5",fill:"white"}),(0,t.jsx)(r.y$,{d:"M59.9619 51.0626C59.9258 50.4868 60.383 50 60.9599 50H65.8524C66.4293 50 66.8866 50.4868 66.8505 51.0626L65.8056 67.7292C65.7725 68.2562 65.3355 68.6667 64.8075 68.6667H62.0048C61.4769 68.6667 61.0398 68.2562 61.0068 67.7292L59.9619 51.0626Z",fill:"white"})]}),(0,t.jsx)("defs",{children:(0,t.jsxs)("filter",{id:"filter0_d_2716_19567",x:"0",y:"0",width:"126.812",height:"136",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,t.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,t.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,t.jsx)("feOffset",{dy:"4"}),(0,t.jsx)("feGaussianBlur",{stdDeviation:"20"}),(0,t.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,t.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"}),(0,t.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2716_19567"}),(0,t.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2716_19567",result:"shape"})]})})]})})}c.displayName="AlertSVGIcon",c.__docgenInfo={description:`Alert icon

@param {object} props           - Props.
@param {string} props.className - Optional component class name.
@param {string} props.color     - Optional icon color. Defaults to '#D63638'.
@returns { React.ReactNode }      The Alert Icon component.`,methods:[],displayName:"AlertSVGIcon",props:{color:{defaultValue:{value:"'#D63638'",computed:!1},required:!1}}};var E=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import AlertIcon from '../index.jsx';

export default {
	title: 'Plugins/Protect/Alert Icon',
	component: AlertIcon,
	argTypes: {
		color: {
			control: {
				type: 'color',
			},
		},
	},
};

const FooterTemplate = args => <AlertIcon { ...args } />;
export const Default = FooterTemplate.bind( {} );
`,g={Default:{startLoc:{col:23,line:17},endLoc:{col:56,line:17},startBody:{col:23,line:17},endBody:{col:56,line:17}}};const y={parameters:{storySource:{source:`
import React from 'react';
import AlertIcon from '../index.jsx';

export default {
	title: 'Plugins/Protect/Alert Icon',
	component: AlertIcon,
	argTypes: {
		color: {
			control: {
				type: 'color',
			},
		},
	},
};

const FooterTemplate = args => <AlertIcon { ...args } />;
export const Default = FooterTemplate.bind( {} );
`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:56,line:17},startBody:{col:23,line:17},endBody:{col:56,line:17}}}}},title:"Plugins/Protect/Alert Icon",component:c,argTypes:{color:{control:{type:"color"}}}},u=h=>(0,t.jsx)(c,{...h});u.displayName="FooterTemplate";const e=u.bind({});e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"args => <AlertIcon {...args} />",...(x=(j=e.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const v=["Default"]},"../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,i,s)=>{"use strict";s.d(i,{Cd:()=>a,G:()=>n,UL:()=>t,Wj:()=>u,mg:()=>m,x1:()=>d,y$:()=>o});var _=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=s.n(_),l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a=e=>(0,l.createElement)("circle",e),n=e=>(0,l.createElement)("g",e),d=e=>(0,l.createElement)("line",e),o=e=>(0,l.createElement)("path",e),m=e=>(0,l.createElement)("polygon",e),t=e=>(0,l.createElement)("rect",e),c=e=>createElement("defs",e),E=e=>createElement("radialGradient",e),g=e=>createElement("linearGradient",e),y=e=>createElement("stop",e),u=(0,l.forwardRef)(({className:e,isPressed:v,...f},j)=>{const x={...f,className:r()(e,{"is-pressed":v})||void 0,"aria-hidden":!0,focusable:!1};return(0,l.createElement)("svg",{...x,ref:j})});u.displayName="SVG"},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,i)=>{var s,_;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,l="[native code]";function a(){for(var n=[],d=0;d<arguments.length;d++){var o=arguments[d];if(o){var m=typeof o;if(m==="string"||m==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var t=a.apply(null,o);t&&n.push(t)}}else if(m==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var c in o)r.call(o,c)&&o[c]&&n.push(c)}}}return n.join(" ")}p.exports?(a.default=a,p.exports=a):(s=[],_=function(){return a}.apply(i,s),_!==void 0&&(p.exports=_))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/alert-icon/styles.module.scss":(p,i,s)=>{"use strict";s.d(i,{Z:()=>d});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(_),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(l),n=a()(r());n.push([p.id,".f1kHT3KfKCwpYlqGdyKR{width:48px;height:56px;margin-bottom:calc(var(--spacing-base)*8)}.f1kHT3KfKCwpYlqGdyKR>svg{position:relative;top:-36px;left:-40px}",""]),n.locals={container:"f1kHT3KfKCwpYlqGdyKR"};const d=n}}]);})();
