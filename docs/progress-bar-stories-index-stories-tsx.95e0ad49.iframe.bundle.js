"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5075],{"../components/components/progress-bar/stories/index.stories.tsx":(c,_,s)=>{s.r(_),s.d(_,{__namedExportsOrder:()=>p,_default:()=>t,default:()=>n});var a=s("../components/components/progress-bar/index.tsx"),d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=`import ProgressBar from '../index.js';
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
`,e={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const n={parameters:{storySource:{source:`import ProgressBar from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:a.A},t=(m=>(0,d.jsx)(a.A,{...m})).bind({});t.args={progress:.5};const p=["_default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...t.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,_,s)=>{s.d(_,{A:()=>m});var a=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(d),e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var n=l()(e.A,r);const o=e.A.locals||{};var t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({className:i,progressClassName:g,progress:u,size:j="normal"})=>{if(u==null)return null;const P={width:`${Math.max(Math.min(u,1),0)*100}%`};return(0,t.jsx)("div",{className:(0,a.A)(i,o.wrapper,{[o.small]:j==="small"}),children:(0,t.jsx)("div",{className:(0,a.A)(g,o.progress),style:P})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,_,s)=>{s.d(_,{A:()=>l});function a(e){var r,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(r=0;r<t;r++)e[r]&&(n=a(e[r]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function d(){for(var e,r,n=0,o="",t=arguments.length;n<t;n++)(e=arguments[n])&&(r=a(e))&&(o&&(o+=" "),o+=r);return o}const l=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(c,_,s)=>{s.d(_,{A:()=>n});var a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(a),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(l),r=e()(d());r.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),r.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const n=r}}]);
