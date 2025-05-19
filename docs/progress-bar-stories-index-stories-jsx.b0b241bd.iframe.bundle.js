"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9809],{"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(y,d,e)=>{e.r(d),e.d(d,{Complete:()=>p,Halfway:()=>_,Initial:()=>c,__namedExportsOrder:()=>b,default:()=>f});var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(u),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var a=s()(o.A,r);const l=o.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=({className:n,total:j=100,value:x=0})=>{const v=Math.min(Math.round(x/j*100),100),B={width:`${v}%`};return(0,t.jsxs)("div",{className:(0,m.A)(n,l["progress-bar"]),children:[(0,t.jsx)("div",{className:l["progress-bar__wrapper"],children:(0,t.jsx)("div",{"aria-valuemax":j,"aria-valuemin":0,"aria-valuenow":Math.min(x,j),className:l["progress-bar__bar"],role:"progressbar",style:B})}),(0,t.jsx)("p",{className:l["progress-bar__percent"],children:`${v}%`})]})},g=P;P.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@return {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1},value:{defaultValue:{value:"0",computed:!1},required:!1}}};var w=`import React from 'react';
import ProgressBar from '../index.jsx';

export default {
	title: 'Plugins/Protect/Progress Bar',
	component: ProgressBar,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 480 } }>
				<Story />
			</div>
		),
	],
};

export const Initial = args => <ProgressBar { ...args } />;
Initial.args = {
	value: 0,
	total: 100,
};
export const Halfway = args => <ProgressBar { ...args } />;
Halfway.args = {
	value: 50,
	total: 100,
};
export const Complete = args => <ProgressBar { ...args } />;
Complete.args = {
	value: 100,
	total: 100,
};
`,E={Initial:{startLoc:{col:23,line:17},endLoc:{col:2,line:19},startBody:{col:23,line:17},endBody:{col:2,line:19}},Halfway:{startLoc:{col:23,line:24},endLoc:{col:2,line:26},startBody:{col:23,line:24},endBody:{col:2,line:26}},Complete:{startLoc:{col:24,line:31},endLoc:{col:2,line:33},startBody:{col:24,line:31},endBody:{col:2,line:33}}};const f={title:"Plugins/Protect/Progress Bar",component:g,parameters:{storySource:{source:`import React from 'react';
import ProgressBar from '../index.jsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Plugins/Protect/Progress Bar',
  component: ProgressBar,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      width: 480
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
export const Initial = args => /*#__PURE__*/_jsx(ProgressBar, {
  ...args
});
Initial.args = {
  value: 0,
  total: 100
};
export const Halfway = args => /*#__PURE__*/_jsx(ProgressBar, {
  ...args
});
Halfway.args = {
  value: 50,
  total: 100
};
export const Complete = args => /*#__PURE__*/_jsx(ProgressBar, {
  ...args
});
Complete.args = {
  value: 100,
  total: 100
};`,locationsMap:{initial:{startLoc:{col:23,line:17},endLoc:{col:2,line:19},startBody:{col:23,line:17},endBody:{col:2,line:19}},halfway:{startLoc:{col:23,line:24},endLoc:{col:2,line:26},startBody:{col:23,line:24},endBody:{col:2,line:26}},complete:{startLoc:{col:24,line:31},endLoc:{col:2,line:33},startBody:{col:24,line:31},endBody:{col:2,line:33}}}},layout:"centered"},decorators:[n=>(0,t.jsx)("div",{style:{width:480},children:(0,t.jsx)(n,{})})]},c=n=>(0,t.jsx)(g,{...n});c.args={value:0,total:100};const _=n=>(0,t.jsx)(g,{...n});_.args={value:50,total:100};const p=n=>(0,t.jsx)(g,{...n});p.args={value:100,total:100};const b=["Initial","Halfway","Complete"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...c.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",..._.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(y,d,e)=>{e.d(d,{A:()=>u});function i(s){var o,r,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(o=0;o<l;o++)s[o]&&(r=i(s[o]))&&(a&&(a+=" "),a+=r)}else for(r in s)s[r]&&(a&&(a+=" "),a+=r);return a}function m(){for(var s,o,r=0,a="",l=arguments.length;r<l;r++)(s=arguments[r])&&(o=i(s))&&(a&&(a+=" "),a+=o);return a}const u=m},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(y,d,e)=>{e.d(d,{A:()=>r});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(i),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(u),o=s()(m());o.push([y.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*2)}.pGciXd_TRRoeXV3y_sbL{width:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-gray-5)}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),o.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const r=o}}]);
