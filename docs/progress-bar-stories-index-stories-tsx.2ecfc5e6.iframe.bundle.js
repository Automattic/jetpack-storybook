"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5075],{"../components/components/progress-bar/stories/index.stories.tsx":(c,d,s)=>{s.r(d),s.d(d,{__namedExportsOrder:()=>p,_default:()=>t,default:()=>n});var a=s("../components/components/progress-bar/index.tsx"),_=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=`import ProgressBar from '../index.tsx';
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
`,e={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const n={parameters:{storySource:{source:`import ProgressBar from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:a.A},t=(m=>(0,_.jsx)(a.A,{...m})).bind({});t.args={progress:.5};const p=["_default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...t.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,d,s)=>{s.d(d,{A:()=>m});var a=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(_),e=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var n=l()(e.A,r);const o=e.A.locals||{};var t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({className:i,progressClassName:g,progress:u,size:j="normal"})=>{if(u==null)return null;const P={width:`${Math.max(Math.min(u,1),0)*100}%`};return(0,t.jsx)("div",{className:(0,a.A)(i,o.wrapper,{[o.small]:j==="small"}),children:(0,t.jsx)("div",{className:(0,a.A)(g,o.progress),style:P})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,d,s)=>{s.d(d,{A:()=>l});function a(e){var r,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(r=0;r<t;r++)e[r]&&(n=a(e[r]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function _(){for(var e,r,n=0,o="",t=arguments.length;n<t;n++)(e=arguments[n])&&(r=a(e))&&(o&&(o+=" "),o+=r);return o}const l=_},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss":(c,d,s)=>{s.d(d,{A:()=>n});var a=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(a),l=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(l),r=e()(_());r.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),r.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const n=r}}]);
