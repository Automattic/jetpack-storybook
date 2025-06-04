(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4375,5075],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,s,e)=>{"use strict";e.d(s,{R:()=>r,x:()=>_});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const t={},m=d.createContext(t);function r(o){const n=d.useContext(m);return d.useMemo(function(){return typeof o=="function"?o(n):{...n,...o}},[n,o])}function _(o){let n;return o.disableParentContext?n=typeof o.components=="function"?o.components(t):o.components||t:n=r(o.components),d.createElement(m.Provider,{value:n},o.children)}},"../components/components/progress-bar/stories/index.mdx":(c,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>n});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=e("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=e("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),_=e("../components/components/progress-bar/stories/index.stories.tsx");function o(a){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,m.R)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.W8,{of:_}),`
`,(0,t.jsx)(l.h1,{id:"progressbar",children:"ProgressBar"}),`
`,(0,t.jsx)(l.p,{children:"A simple progress bar."}),`
`,(0,t.jsx)(r.Hl,{withSource:"open",children:(0,t.jsx)(r.gG,{id:"js-packages-components-progress-bar--default"})}),`
`,(0,t.jsx)(l.h2,{id:"api",children:"API"}),`
`,(0,t.jsx)(l.h3,{id:"progress",children:"progress"}),`
`,(0,t.jsxs)(l.ul,{children:[`
`,(0,t.jsxs)(l.li,{children:["type: ",(0,t.jsx)(l.code,{children:"number"})]}),`
`]}),`
`,(0,t.jsx)(l.p,{children:`The current progress percentage. A number between 0 and 1, inclusive.
Will round up to 0 if less than 0.
Will round down to 1 if above 1.`})]})}function n(a={}){const{wrapper:l}={...(0,m.R)(),...a.components};return l?(0,t.jsx)(l,{...a,children:(0,t.jsx)(o,{...a})}):o(a)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":c=>{function s(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",c.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":c=>{function s(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",c.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":c=>{function s(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",c.exports=s},"../components/components/progress-bar/stories/index.stories.tsx":(c,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>l,_default:()=>a,default:()=>o});var d=e("../components/components/progress-bar/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '../index.tsx';
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
`,r={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const o={parameters:{storySource:{source:`import ProgressBar from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:d.A},a=(u=>(0,t.jsx)(d.A,{...u})).bind({});a.args={progress:.5};const l=["_default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...a.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,s,e)=>{"use strict";e.d(s,{A:()=>u});var d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(t),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss"),_={};_.insert="head",_.singleton=!1;var o=m()(r.A,_);const n=r.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({className:i,progressClassName:y,progress:p,size:x="normal"})=>{if(p==null)return null;const j={width:`${Math.max(Math.min(p,1),0)*100}%`};return(0,a.jsx)("div",{className:(0,d.A)(i,n.wrapper,{[n.small]:x==="small"}),children:(0,a.jsx)("div",{className:(0,d.A)(y,n.progress),style:j})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,s,e)=>{"use strict";e.d(s,{A:()=>m});function d(r){var _,o,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(_=0;_<a;_++)r[_]&&(o=d(r[_]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o);return n}function t(){for(var r,_,o=0,n="",a=arguments.length;o<a;o++)(r=arguments[o])&&(_=d(r))&&(n&&(n+=" "),n+=_);return n}const m=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss":(c,s,e)=>{"use strict";e.d(s,{A:()=>o});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(d),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),_=r()(t());_.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),_.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const o=_}}]);
