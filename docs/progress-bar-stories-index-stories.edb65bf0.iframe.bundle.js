"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7329,5075,9809],{"../components/components/progress-bar/stories/index.stories.tsx":(u,l,s)=>{s.r(l),s.d(l,{__namedExportsOrder:()=>y,_default:()=>a,default:()=>n});var t=s("../components/components/progress-bar/index.tsx"),d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=`import ProgressBar from '../index.tsx';
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
`,o={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const n={parameters:{storySource:{source:`import ProgressBar from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:t.A},a=(p=>(0,d.jsx)(t.A,{...p})).bind({});a.args={progress:.5};const y=["_default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...a.parameters?.docs?.source}}}},"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(u,l,s)=>{s.r(l),s.d(l,{Complete:()=>i,Halfway:()=>g,Initial:()=>m,__namedExportsOrder:()=>B,default:()=>j});var t=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(d),o=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var n=_()(o.A,e);const r=o.A.locals||{};var a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({className:c,total:x=100,value:b=0})=>{const v=Math.min(Math.round(b/x*100),100),E={width:`${v}%`};return(0,a.jsxs)("div",{className:(0,t.A)(c,r["progress-bar"]),children:[(0,a.jsx)("div",{className:r["progress-bar__wrapper"],children:(0,a.jsx)("div",{"aria-valuemax":x,"aria-valuemin":0,"aria-valuenow":Math.min(b,x),className:r["progress-bar__bar"],role:"progressbar",style:E})}),(0,a.jsx)("p",{className:r["progress-bar__percent"],children:`${v}%`})]})},p=y;y.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@return {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1},value:{defaultValue:{value:"0",computed:!1},required:!1}}};var P=`import ProgressBar from '../index.jsx';

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
`,f={Initial:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},Halfway:{startLoc:{col:23,line:23},endLoc:{col:2,line:25},startBody:{col:23,line:23},endBody:{col:2,line:25}},Complete:{startLoc:{col:24,line:30},endLoc:{col:2,line:32},startBody:{col:24,line:30},endBody:{col:2,line:32}}};const j={title:"Plugins/Protect/Progress Bar",component:p,parameters:{storySource:{source:`import ProgressBar from '../index.jsx';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},halfway:{startLoc:{col:23,line:23},endLoc:{col:2,line:25},startBody:{col:23,line:23},endBody:{col:2,line:25}},complete:{startLoc:{col:24,line:30},endLoc:{col:2,line:32},startBody:{col:24,line:30},endBody:{col:2,line:32}}}},layout:"centered"},decorators:[c=>(0,a.jsx)("div",{style:{width:480},children:(0,a.jsx)(c,{})})]},m=c=>(0,a.jsx)(p,{...c});m.args={value:0,total:100};const g=c=>(0,a.jsx)(p,{...c});g.args={value:50,total:100};const i=c=>(0,a.jsx)(p,{...c});i.args={value:100,total:100};const B=["Initial","Halfway","Complete"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...g.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...i.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(u,l,s)=>{s.d(l,{A:()=>p});var t=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(d),o=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var n=_()(o.A,e);const r=o.A.locals||{};var a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=({className:P,progressClassName:f,progress:j,size:m="normal"})=>{if(j==null)return null;const i={width:`${Math.max(Math.min(j,1),0)*100}%`};return(0,a.jsx)("div",{className:(0,t.A)(P,r.wrapper,{[r.small]:m==="small"}),children:(0,a.jsx)("div",{className:(0,t.A)(f,r.progress),style:i})})};try{progressbar.displayName="progressbar",progressbar.__docgenInfo={description:"Progress Bar component",displayName:"progressbar",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},progressClassName:{defaultValue:null,description:"Optional classname to apply to the progress element.",name:"progressClassName",required:!1,type:{name:"string"}},progress:{defaultValue:null,description:"The current progress percentage, from 0 to 1.",name:"progress",required:!0,type:{name:"number"}},size:{defaultValue:{value:"normal"},description:"The progress bar height.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/progress-bar/index.tsx#progressbar"]={docgenInfo:progressbar.__docgenInfo,name:"progressbar",path:"../components/components/progress-bar/index.tsx#progressbar"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(u,l,s)=>{s.d(l,{A:()=>_});function t(o){var e,n,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var a=o.length;for(e=0;e<a;e++)o[e]&&(n=t(o[e]))&&(r&&(r+=" "),r+=n)}else for(n in o)o[n]&&(r&&(r+=" "),r+=n);return r}function d(){for(var o,e,n=0,r="",a=arguments.length;n<a;n++)(o=arguments[n])&&(e=t(o))&&(r&&(r+=" "),r+=e);return r}const _=d},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss":(u,l,s)=>{s.d(l,{A:()=>n});var t=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(t),_=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(_),e=o()(d());e.push([u.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),e.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const n=e},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(u,l,s)=>{s.d(l,{A:()=>n});var t=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(t),_=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(_),e=o()(d());e.push([u.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*2)}.pGciXd_TRRoeXV3y_sbL{width:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-gray-5)}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),e.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const n=e}}]);
