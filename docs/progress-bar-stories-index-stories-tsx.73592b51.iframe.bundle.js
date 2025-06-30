"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5075],{"../components/components/progress-bar/stories/index.stories.tsx":(p,l,s)=>{s.r(l),s.d(l,{__namedExportsOrder:()=>c,_default:()=>a,default:()=>n});var t=s("../components/components/progress-bar/index.tsx"),d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=`import ProgressBar from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:t.A},a=(m=>(0,d.jsx)(t.A,{...m})).bind({});a.args={progress:.5};const c=["_default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...a.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(p,l,s)=>{s.d(l,{A:()=>m});var t=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(d),e=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var n=_()(e.A,r);const o=e.A.locals||{};var a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({className:u,progressClassName:g,progress:i,size:f="normal"})=>{if(i==null)return null;const j={width:`${Math.max(Math.min(i,1),0)*100}%`};return(0,a.jsx)("div",{className:(0,t.A)(u,o.wrapper,{[o.small]:f==="small"}),children:(0,a.jsx)("div",{className:(0,t.A)(g,o.progress),style:j})})};try{progressbar.displayName="progressbar",progressbar.__docgenInfo={description:"Progress Bar component",displayName:"progressbar",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},progressClassName:{defaultValue:null,description:"Optional classname to apply to the progress element.",name:"progressClassName",required:!1,type:{name:"string"}},progress:{defaultValue:null,description:"The current progress percentage, from 0 to 1.",name:"progress",required:!0,type:{name:"number"}},size:{defaultValue:{value:"normal"},description:"The progress bar height.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/progress-bar/index.tsx#progressbar"]={docgenInfo:progressbar.__docgenInfo,name:"progressbar",path:"../components/components/progress-bar/index.tsx#progressbar"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,l,s)=>{s.d(l,{A:()=>_});function t(e){var r,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(n=t(e[r]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function d(){for(var e,r,n=0,o="",a=arguments.length;n<a;n++)(e=arguments[n])&&(r=t(e))&&(o&&(o+=" "),o+=r);return o}const _=d},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss":(p,l,s)=>{s.d(l,{A:()=>n});var t=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(t),_=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(_),r=e()(d());r.push([p.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),r.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const n=r}}]);
