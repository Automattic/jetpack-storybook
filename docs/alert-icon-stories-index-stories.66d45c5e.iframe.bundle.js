(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9713],{"../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(_,i,s)=>{"use strict";s.d(i,{Cd:()=>a,G:()=>n,UL:()=>o,Wj:()=>u,mg:()=>m,y$:()=>t});var p=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=s.n(p),r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a=e=>(0,r.createElement)("circle",e),n=e=>(0,r.createElement)("g",e),d=e=>createElement("line",e),t=e=>(0,r.createElement)("path",e),m=e=>(0,r.createElement)("polygon",e),o=e=>(0,r.createElement)("rect",e),c=e=>createElement("defs",e),g=e=>createElement("radialGradient",e),y=e=>createElement("linearGradient",e),h=e=>createElement("stop",e),u=({className:e,isPressed:x,...f})=>{const j={...f,className:l()(e,{"is-pressed":x})||void 0,"aria-hidden":!0,focusable:!1};return(0,r.createElement)("svg",{...j})}},"../../plugins/protect/src/js/components/alert-icon/stories/index.stories.jsx":(_,i,s)=>{var f,j,E;"use strict";s.r(i),s.d(i,{Default:()=>e,__namedExportsOrder:()=>x,default:()=>h});var p=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=s("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(r),n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/alert-icon/styles.module.scss"),d={};d.insert="head",d.singleton=!1;var t=a()(n.Z,d);const m=n.Z.locals||{};var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function c(v){let{className:A,color:D="#D63638"}=v;return(0,o.jsx)("div",{className:m.container,children:(0,o.jsxs)(l.Wj,{className:A,width:"127",height:"136",viewBox:"0 0 127 136",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsxs)(l.G,{filter:"url(#filter0_d_2716_19567)",children:[(0,o.jsx)(l.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M63.4061 36L86.8123 46.4057V61.9177C86.8123 75.141 78.1289 87.6611 65.8844 91.6107C64.2754 92.1298 62.5369 92.1297 60.9279 91.6107C48.6834 87.6611 40 75.141 40 61.9177V46.4057L63.4061 36Z",fill:D}),(0,o.jsx)(l.UL,{x:"59.8953",y:"72.1666",width:"7.02184",height:"7",rx:"3.5",fill:"white"}),(0,o.jsx)(l.y$,{d:"M59.9619 51.0626C59.9258 50.4868 60.383 50 60.9599 50H65.8524C66.4293 50 66.8866 50.4868 66.8505 51.0626L65.8056 67.7292C65.7725 68.2562 65.3355 68.6667 64.8075 68.6667H62.0048C61.4769 68.6667 61.0398 68.2562 61.0068 67.7292L59.9619 51.0626Z",fill:"white"})]}),(0,o.jsx)("defs",{children:(0,o.jsxs)("filter",{id:"filter0_d_2716_19567",x:"0",y:"0",width:"126.812",height:"136",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,o.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,o.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,o.jsx)("feOffset",{dy:"4"}),(0,o.jsx)("feGaussianBlur",{stdDeviation:"20"}),(0,o.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,o.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"}),(0,o.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2716_19567"}),(0,o.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2716_19567",result:"shape"})]})})]})})}c.displayName="AlertSVGIcon",c.__docgenInfo={description:`Alert icon

@param {object} props           - Props.
@param {string} props.className - Optional component class name.
@param {string} props.color     - Optional icon color. Defaults to '#D63638'.
@returns { React.ReactNode }      The Alert Icon component.`,methods:[],displayName:"AlertSVGIcon",props:{color:{defaultValue:{value:"'#D63638'",computed:!1},required:!1}}};var g=`/* eslint-disable react/react-in-jsx-scope */
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
`,y={Default:{startLoc:{col:23,line:15},endLoc:{col:54,line:15},startBody:{col:23,line:15},endBody:{col:54,line:15}}};const h={parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:23,line:15},endLoc:{col:54,line:15},startBody:{col:23,line:15},endBody:{col:54,line:15}}}}},title:"Plugins/Protect/Alert Icon",component:c,argTypes:{color:{control:{type:"color"}}}},u=v=>(0,o.jsx)(c,{...v});u.displayName="FooterTemplate";const e=u.bind({});e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"args => <AlertIcon {...args} />",...(E=(j=e.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const x=["Default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,i)=>{var s,p;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,r="[native code]";function a(){for(var n=[],d=0;d<arguments.length;d++){var t=arguments[d];if(t){var m=typeof t;if(m==="string"||m==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&n.push(o)}}else if(m==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var c in t)l.call(t,c)&&t[c]&&n.push(c)}}}return n.join(" ")}_.exports?(a.default=a,_.exports=a):(s=[],p=function(){return a}.apply(i,s),p!==void 0&&(_.exports=p))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/alert-icon/styles.module.scss":(_,i,s)=>{"use strict";s.d(i,{Z:()=>d});var p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=s.n(p),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(r),n=a()(l());n.push([_.id,".f1kHT3KfKCwpYlqGdyKR{width:48px;height:56px;margin-bottom:calc(var(--spacing-base)*8)}.f1kHT3KfKCwpYlqGdyKR>svg{position:relative;top:-36px;left:-40px}",""]),n.locals={container:"f1kHT3KfKCwpYlqGdyKR"};const d=n}}]);})();
