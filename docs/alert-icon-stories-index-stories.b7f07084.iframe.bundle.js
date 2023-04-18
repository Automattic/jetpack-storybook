(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9713],{"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(i,d,o)=>{"use strict";o.d(d,{Cd:()=>a,G:()=>l,UL:()=>s,Wj:()=>u,mg:()=>_,y$:()=>p});var c=o("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),r=o.n(c),n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a=e=>(0,n.createElement)("circle",e),l=e=>(0,n.createElement)("g",e),t=e=>createElement("line",e),p=e=>(0,n.createElement)("path",e),_=e=>(0,n.createElement)("polygon",e),s=e=>(0,n.createElement)("rect",e),m=e=>createElement("defs",e),y=e=>createElement("radialGradient",e),g=e=>createElement("linearGradient",e),E=e=>createElement("stop",e),u=e=>{let{className:h,isPressed:f,...j}=e;const x={...j,className:r()(h,{"is-pressed":f})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",x)}},"../../plugins/protect/src/js/components/alert-icon/stories/index.stories.jsx":(i,d,o)=>{var f,j,x;"use strict";o.r(d),o.d(d,{Default:()=>e,__namedExportsOrder:()=>h,default:()=>E});var c=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=o.n(n),l=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/alert-icon/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var p=a()(l.Z,t);const _=l.Z.locals||{};var s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function m(v){let{className:A,color:D="#D63638"}=v;return(0,s.jsx)("div",{className:_.container,children:(0,s.jsxs)(r.Wj,{className:A,width:"127",height:"136",viewBox:"0 0 127 136",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsxs)(r.G,{filter:"url(#filter0_d_2716_19567)",children:[(0,s.jsx)(r.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M63.4061 36L86.8123 46.4057V61.9177C86.8123 75.141 78.1289 87.6611 65.8844 91.6107C64.2754 92.1298 62.5369 92.1297 60.9279 91.6107C48.6834 87.6611 40 75.141 40 61.9177V46.4057L63.4061 36Z",fill:D}),(0,s.jsx)(r.UL,{x:"59.8953",y:"72.1666",width:"7.02184",height:"7",rx:"3.5",fill:"white"}),(0,s.jsx)(r.y$,{d:"M59.9619 51.0626C59.9258 50.4868 60.383 50 60.9599 50H65.8524C66.4293 50 66.8866 50.4868 66.8505 51.0626L65.8056 67.7292C65.7725 68.2562 65.3355 68.6667 64.8075 68.6667H62.0048C61.4769 68.6667 61.0398 68.2562 61.0068 67.7292L59.9619 51.0626Z",fill:"white"})]}),(0,s.jsx)("defs",{children:(0,s.jsxs)("filter",{id:"filter0_d_2716_19567",x:"0",y:"0",width:"126.812",height:"136",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,s.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,s.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,s.jsx)("feOffset",{dy:"4"}),(0,s.jsx)("feGaussianBlur",{stdDeviation:"20"}),(0,s.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,s.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"}),(0,s.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2716_19567"}),(0,s.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2716_19567",result:"shape"})]})})]})})}m.displayName="AlertSVGIcon",m.__docgenInfo={description:`Alert icon

@param {object} props           - Props.
@param {string} props.className - Optional component class name.
@param {string} props.color     - Optional icon color. Defaults to '#D63638'.
@returns { React.ReactNode }      The Alert Icon component.`,methods:[],displayName:"AlertSVGIcon",props:{color:{defaultValue:{value:"'#D63638'",computed:!1},required:!1}}};var y=`/* eslint-disable react/react-in-jsx-scope */
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
`,g={Default:{startLoc:{col:23,line:15},endLoc:{col:54,line:15},startBody:{col:23,line:15},endBody:{col:54,line:15}}};const E={parameters:{storySource:{source:`
import React from 'react';
import AlertIcon from '../index.jsx';
export default {
  title: 'Plugins/Protect/Alert Icon',
  component: AlertIcon,
  argTypes: {
    color: {
      control: {
        type: 'color'
      }
    }
  }
};
const FooterTemplate = args => <AlertIcon {...args} />;
export const Default = FooterTemplate.bind({});
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <AlertIcon {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:15},endLoc:{col:54,line:15},startBody:{col:23,line:15},endBody:{col:54,line:15}}}}},title:"Plugins/Protect/Alert Icon",component:m,argTypes:{color:{control:{type:"color"}}}},u=v=>(0,s.jsx)(m,{...v});u.displayName="FooterTemplate";const e=u.bind({});e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"args => <AlertIcon {...args} />",...(x=(j=e.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const h=["Default"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(i,d)=>{var o,c;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty;function n(){for(var a=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var p=typeof t;if(p==="string"||p==="number")a.push(t);else if(Array.isArray(t)){if(t.length){var _=n.apply(null,t);_&&a.push(_)}}else if(p==="object")if(t.toString===Object.prototype.toString)for(var s in t)r.call(t,s)&&t[s]&&a.push(s);else a.push(t.toString())}}return a.join(" ")}i.exports?(n.default=n,i.exports=n):(o=[],c=function(){return n}.apply(d,o),c!==void 0&&(i.exports=c))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/alert-icon/styles.module.scss":(i,d,o)=>{"use strict";o.d(d,{Z:()=>t});var c=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(c),n=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(n),l=a()(r());l.push([i.id,".f1kHT3KfKCwpYlqGdyKR{width:48px;height:56px;margin-bottom:calc(var(--spacing-base)*8)}.f1kHT3KfKCwpYlqGdyKR>svg{position:relative;top:-36px;left:-40px}",""]),l.locals={container:"f1kHT3KfKCwpYlqGdyKR"};const t=l}}]);})();
