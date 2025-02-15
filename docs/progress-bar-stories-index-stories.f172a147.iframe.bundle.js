"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7329,5075,9809],{"../components/components/progress-bar/stories/index.stories.tsx":(i,n,s)=>{s.r(n),s.d(n,{__namedExportsOrder:()=>l,_default:()=>o,default:()=>e});var t=s("../components/components/progress-bar/index.tsx"),_=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=`import ProgressBar from '../index.js';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Progress Bar',
	component: ProgressBar,
} as Meta< typeof ProgressBar >;

const Template: StoryFn< typeof ProgressBar > = args => {
	return <ProgressBar { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	progress: 0.5,
};
`,r={_default:{startLoc:{col:17,line:7},endLoc:{col:1,line:11},startBody:{col:17,line:7},endBody:{col:1,line:11}}};const e={parameters:{storySource:{source:`import ProgressBar from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Progress Bar',
  component: ProgressBar
};
const Template = args => {
  return /*#__PURE__*/_jsx(ProgressBar, {
    ...args
  });
};
export const _default = Template.bind({});
_default.args = {
  progress: 0.5
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:1,line:11},startBody:{col:17,line:7},endBody:{col:1,line:11}}}}},title:"JS Packages/Components/Progress Bar",component:t.A},o=(d=>(0,_.jsx)(t.A,{...d})).bind({});o.args={progress:.5};const l=["_default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...o.parameters?.docs?.source}}}},"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(i,n,s)=>{s.r(n),s.d(n,{Complete:()=>j,Halfway:()=>m,Initial:()=>u,__namedExportsOrder:()=>b,default:()=>x});var t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(c),e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),a={};a.insert="head",a.singleton=!1;var o=r()(e.A,a);const l=e.A.locals||{};var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({className:p,total:f=100,value:B=0})=>{const E=Math.min(Math.round(B/f*100),100),S={width:`${E}%`};return(0,d.jsxs)("div",{className:(0,_.A)(p,l["progress-bar"]),children:[(0,d.jsx)("div",{className:l["progress-bar__wrapper"],children:(0,d.jsx)("div",{"aria-valuemax":f,"aria-valuemin":0,"aria-valuenow":Math.min(B,f),className:l["progress-bar__bar"],role:"progressbar",style:S})}),(0,d.jsx)("p",{className:l["progress-bar__percent"],children:`${E}%`})]})},g=y;y.__docgenInfo={description:`Progress Bar component

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
`,P={Initial:{startLoc:{col:23,line:17},endLoc:{col:2,line:19},startBody:{col:23,line:17},endBody:{col:2,line:19}},Halfway:{startLoc:{col:23,line:24},endLoc:{col:2,line:26},startBody:{col:23,line:24},endBody:{col:2,line:26}},Complete:{startLoc:{col:24,line:31},endLoc:{col:2,line:33},startBody:{col:24,line:31},endBody:{col:2,line:33}}};const x={title:"Plugins/Protect/Progress Bar",component:g,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:17},endLoc:{col:2,line:19},startBody:{col:23,line:17},endBody:{col:2,line:19}},halfway:{startLoc:{col:23,line:24},endLoc:{col:2,line:26},startBody:{col:23,line:24},endBody:{col:2,line:26}},complete:{startLoc:{col:24,line:31},endLoc:{col:2,line:33},startBody:{col:24,line:31},endBody:{col:2,line:33}}}},layout:"centered"},decorators:[p=>(0,d.jsx)("div",{style:{width:480},children:(0,d.jsx)(p,{})})]},u=p=>(0,d.jsx)(g,{...p});u.args={value:0,total:100};const m=p=>(0,d.jsx)(g,{...p});m.args={value:50,total:100};const j=p=>(0,d.jsx)(g,{...p});j.args={value:100,total:100};const b=["Initial","Halfway","Complete"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...m.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...j.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(i,n,s)=>{s.d(n,{A:()=>y});var t=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(_),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var a=c()(r.A,e);const o=r.A.locals||{};var l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({className:g,progressClassName:v,progress:P,size:x="normal"})=>{if(P==null)return null;const m={width:`${Math.max(Math.min(P,1),0)*100}%`};return(0,l.jsx)("div",{className:(0,t.A)(g,o.wrapper,{[o.small]:x==="small"}),children:(0,l.jsx)("div",{className:(0,t.A)(v,o.progress),style:m})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(i,n,s)=>{s.d(n,{A:()=>c});function t(r){var e,a,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(e=0;e<l;e++)r[e]&&(a=t(r[e]))&&(o&&(o+=" "),o+=a)}else for(a in r)r[a]&&(o&&(o+=" "),o+=a);return o}function _(){for(var r,e,a=0,o="",l=arguments.length;a<l;a++)(r=arguments[a])&&(e=t(r))&&(o&&(o+=" "),o+=e);return o}const c=_},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(i,n,s)=>{s.d(n,{A:()=>a});var t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(t),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(c),e=r()(_());e.push([i.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),e.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const a=e},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(i,n,s)=>{s.d(n,{A:()=>a});var t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(t),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(c),e=r()(_());e.push([i.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*2)}.pGciXd_TRRoeXV3y_sbL{width:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-gray-5)}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),e.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const a=e}}]);
