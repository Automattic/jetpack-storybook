"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9809],{"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(g,l,o)=>{o.r(l),o.d(l,{Complete:()=>p,Halfway:()=>_,Initial:()=>c,__namedExportsOrder:()=>b,default:()=>v});var d=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=o.n(i),s=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var t=m()(s.A,r);const e=s.A.locals||{};var a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=({className:n,total:y=100,value:P=0})=>{const x=Math.min(Math.round(P/y*100),100),f={width:`${x}%`};return(0,a.jsxs)("div",{className:(0,d.A)(n,e["progress-bar"]),children:[(0,a.jsx)("div",{className:e["progress-bar__wrapper"],children:(0,a.jsx)("div",{"aria-valuemax":y,"aria-valuemin":0,"aria-valuenow":Math.min(P,y),className:e["progress-bar__bar"],role:"progressbar",style:f})}),(0,a.jsx)("p",{className:e["progress-bar__percent"],children:`${x}%`})]})},u=j;j.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@return {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1},value:{defaultValue:{value:"0",computed:!1},required:!1}}};var B=`import ProgressBar from '../index.jsx';

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
`,w={Initial:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},Halfway:{startLoc:{col:23,line:23},endLoc:{col:2,line:25},startBody:{col:23,line:23},endBody:{col:2,line:25}},Complete:{startLoc:{col:24,line:30},endLoc:{col:2,line:32},startBody:{col:24,line:30},endBody:{col:2,line:32}}};const v={title:"Plugins/Protect/Progress Bar",component:u,parameters:{storySource:{source:`import ProgressBar from '../index.jsx';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},halfway:{startLoc:{col:23,line:23},endLoc:{col:2,line:25},startBody:{col:23,line:23},endBody:{col:2,line:25}},complete:{startLoc:{col:24,line:30},endLoc:{col:2,line:32},startBody:{col:24,line:30},endBody:{col:2,line:32}}}},layout:"centered"},decorators:[n=>(0,a.jsx)("div",{style:{width:480},children:(0,a.jsx)(n,{})})]},c=n=>(0,a.jsx)(u,{...n});c.args={value:0,total:100};const _=n=>(0,a.jsx)(u,{...n});_.args={value:50,total:100};const p=n=>(0,a.jsx)(u,{...n});p.args={value:100,total:100};const b=["Initial","Halfway","Complete"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...c.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",..._.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(g,l,o)=>{o.d(l,{A:()=>m});function d(s){var r,t,e="";if(typeof s=="string"||typeof s=="number")e+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(r=0;r<a;r++)s[r]&&(t=d(s[r]))&&(e&&(e+=" "),e+=t)}else for(t in s)s[t]&&(e&&(e+=" "),e+=t);return e}function i(){for(var s,r,t=0,e="",a=arguments.length;t<a;t++)(s=arguments[t])&&(r=d(s))&&(e&&(e+=" "),e+=r);return e}const m=i},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(g,l,o)=>{o.d(l,{A:()=>t});var d=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=o.n(d),m=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=o.n(m),r=s()(i());r.push([g.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*2)}.pGciXd_TRRoeXV3y_sbL{width:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-gray-5)}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),r.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const t=r}}]);
