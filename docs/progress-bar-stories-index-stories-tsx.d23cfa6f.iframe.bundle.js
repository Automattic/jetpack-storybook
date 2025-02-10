"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5075],{"../components/components/progress-bar/stories/index.stories.tsx":(c,a,e)=>{e.r(a),e.d(a,{__namedExportsOrder:()=>_,_default:()=>s,default:()=>r});var t=e("../components/components/progress-bar/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=`import ProgressBar from '..';
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
`,o={_default:{startLoc:{col:17,line:7},endLoc:{col:1,line:11},startBody:{col:17,line:7},endBody:{col:1,line:11}}};const r={parameters:{storySource:{source:`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:1,line:11},startBody:{col:17,line:7},endBody:{col:1,line:11}}}}},title:"JS Packages/Components/Progress Bar",component:t.A},s=(m=>(0,d.jsx)(t.A,{...m})).bind({});s.args={progress:.5};const _=["_default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...s.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,a,e)=>{e.d(a,{A:()=>u});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(d),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var n=l()(o.A,r);const s=o.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({className:i,progressClassName:g,progress:p,size:j="normal"})=>{if(p==null)return null;const P={width:`${Math.max(Math.min(p,1),0)*100}%`};return(0,_.jsx)("div",{className:(0,t.A)(i,s.wrapper,{[s.small]:j==="small"}),children:(0,_.jsx)("div",{className:(0,t.A)(g,s.progress),style:P})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,a,e)=>{e.d(a,{A:()=>l});function t(o){var r,n,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var _=o.length;for(r=0;r<_;r++)o[r]&&(n=t(o[r]))&&(s&&(s+=" "),s+=n)}else for(n in o)o[n]&&(s&&(s+=" "),s+=n);return s}function d(){for(var o,r,n=0,s="",_=arguments.length;n<_;n++)(o=arguments[n])&&(r=t(o))&&(s&&(s+=" "),s+=r);return s}const l=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(c,a,e)=>{e.d(a,{A:()=>n});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(l),r=o()(d());r.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),r.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const n=r}}]);
