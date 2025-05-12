"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7329,5075,9809],{"../components/components/progress-bar/stories/index.stories.tsx":(i,t,s)=>{s.r(t),s.d(t,{__namedExportsOrder:()=>d,_default:()=>n,default:()=>r});var l=s("../components/components/progress-bar/index.tsx"),_=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=`import ProgressBar from '../index.tsx';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof ProgressBar > = {
	title: 'JS Packages/Components/Progress Bar',
	component: ProgressBar,
};

export default meta;

const Template: StoryFn< typeof ProgressBar > = args => {
	return <ProgressBar { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	progress: 0.5,
};
`,o={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const r={parameters:{storySource:{source:`import ProgressBar from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Progress Bar',
  component: ProgressBar
};
export default meta;
const Template = args => {
  return /*#__PURE__*/_jsx(ProgressBar, {
    ...args
  });
};
export const _default = Template.bind({});
_default.args = {
  progress: 0.5
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:l.A},n=(g=>(0,_.jsx)(l.A,{...g})).bind({});n.args={progress:.5};const d=["_default"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...n.parameters?.docs?.source}}}},"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(i,t,s)=>{s.r(t),s.d(t,{Complete:()=>y,Halfway:()=>m,Initial:()=>u,__namedExportsOrder:()=>b,default:()=>x});var l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(c),e=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var a=o()(e.A,r);const n=e.A.locals||{};var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({className:p,total:f=100,value:B=0})=>{const E=Math.min(Math.round(B/f*100),100),S={width:`${E}%`};return(0,d.jsxs)("div",{className:(0,_.A)(p,n["progress-bar"]),children:[(0,d.jsx)("div",{className:n["progress-bar__wrapper"],children:(0,d.jsx)("div",{"aria-valuemax":f,"aria-valuemin":0,"aria-valuenow":Math.min(B,f),className:n["progress-bar__bar"],role:"progressbar",style:S})}),(0,d.jsx)("p",{className:n["progress-bar__percent"],children:`${E}%`})]})},j=g;g.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@return {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1},value:{defaultValue:{value:"0",computed:!1},required:!1}}};var v=`import React from 'react';
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
`,P={Initial:{startLoc:{col:23,line:17},endLoc:{col:2,line:19},startBody:{col:23,line:17},endBody:{col:2,line:19}},Halfway:{startLoc:{col:23,line:24},endLoc:{col:2,line:26},startBody:{col:23,line:24},endBody:{col:2,line:26}},Complete:{startLoc:{col:24,line:31},endLoc:{col:2,line:33},startBody:{col:24,line:31},endBody:{col:2,line:33}}};const x={title:"Plugins/Protect/Progress Bar",component:j,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:17},endLoc:{col:2,line:19},startBody:{col:23,line:17},endBody:{col:2,line:19}},halfway:{startLoc:{col:23,line:24},endLoc:{col:2,line:26},startBody:{col:23,line:24},endBody:{col:2,line:26}},complete:{startLoc:{col:24,line:31},endLoc:{col:2,line:33},startBody:{col:24,line:31},endBody:{col:2,line:33}}}},layout:"centered"},decorators:[p=>(0,d.jsx)("div",{style:{width:480},children:(0,d.jsx)(p,{})})]},u=p=>(0,d.jsx)(j,{...p});u.args={value:0,total:100};const m=p=>(0,d.jsx)(j,{...p});m.args={value:50,total:100};const y=p=>(0,d.jsx)(j,{...p});y.args={value:100,total:100};const b=["Initial","Halfway","Complete"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...y.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(i,t,s)=>{s.d(t,{A:()=>g});var l=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(_),o=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var r=c()(o.A,e);const a=o.A.locals||{};var n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({className:j,progressClassName:v,progress:P,size:x="normal"})=>{if(P==null)return null;const m={width:`${Math.max(Math.min(P,1),0)*100}%`};return(0,n.jsx)("div",{className:(0,l.A)(j,a.wrapper,{[a.small]:x==="small"}),children:(0,n.jsx)("div",{className:(0,l.A)(v,a.progress),style:m})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(i,t,s)=>{s.d(t,{A:()=>c});function l(o){var e,r,a="";if(typeof o=="string"||typeof o=="number")a+=o;else if(typeof o=="object")if(Array.isArray(o)){var n=o.length;for(e=0;e<n;e++)o[e]&&(r=l(o[e]))&&(a&&(a+=" "),a+=r)}else for(r in o)o[r]&&(a&&(a+=" "),a+=r);return a}function _(){for(var o,e,r=0,a="",n=arguments.length;r<n;r++)(o=arguments[r])&&(e=l(o))&&(a&&(a+=" "),a+=e);return a}const c=_},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(i,t,s)=>{s.d(t,{A:()=>r});var l=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(l),c=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(c),e=o()(_());e.push([i.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),e.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const r=e},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(i,t,s)=>{s.d(t,{A:()=>r});var l=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(l),c=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(c),e=o()(_());e.push([i.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*2)}.pGciXd_TRRoeXV3y_sbL{width:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-gray-5)}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),e.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const r=e}}]);
