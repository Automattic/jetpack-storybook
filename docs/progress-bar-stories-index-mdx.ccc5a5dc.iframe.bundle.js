(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4375,5075],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,s,e)=>{"use strict";e.d(s,{R:()=>t,x:()=>_});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r={},m=d.createContext(r);function t(o){const n=d.useContext(m);return d.useMemo(function(){return typeof o=="function"?o(n):{...n,...o}},[n,o])}function _(o){let n;return o.disableParentContext?n=typeof o.components=="function"?o.components(r):o.components||r:n=t(o.components),d.createElement(m.Provider,{value:n},o.children)}},"../components/components/progress-bar/stories/index.mdx":(c,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>n});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=e("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=e("../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist/index.mjs"),_=e("../components/components/progress-bar/stories/index.stories.tsx");function o(a){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,m.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.W8,{of:_}),`
`,(0,r.jsx)(l.h1,{id:"progressbar",children:"ProgressBar"}),`
`,(0,r.jsx)(l.p,{children:"A simple progress bar."}),`
`,(0,r.jsx)(t.Hl,{withSource:"open",children:(0,r.jsx)(t.gG,{id:"js-packages-components-progress-bar--default"})}),`
`,(0,r.jsx)(l.h2,{id:"api",children:"API"}),`
`,(0,r.jsx)(l.h3,{id:"progress",children:"progress"}),`
`,(0,r.jsxs)(l.ul,{children:[`
`,(0,r.jsxs)(l.li,{children:["type: ",(0,r.jsx)(l.code,{children:"number"})]}),`
`]}),`
`,(0,r.jsx)(l.p,{children:`The current progress percentage. A number between 0 and 1, inclusive.
Will round up to 0 if less than 0.
Will round down to 1 if above 1.`})]})}function n(a={}){const{wrapper:l}={...(0,m.R)(),...a.components};return l?(0,r.jsx)(l,{...a,children:(0,r.jsx)(o,{...a})}):o(a)}},"../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive":c=>{function s(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive",c.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive":c=>{function s(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive",c.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive":c=>{function s(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive",c.exports=s},"../components/components/progress-bar/stories/index.stories.tsx":(c,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>l,_default:()=>a,default:()=>o});var d=e("../components/components/progress-bar/index.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '../index.js';
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
`,t={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const o={parameters:{storySource:{source:`import ProgressBar from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:d.A},a=(u=>(0,r.jsx)(d.A,{...u})).bind({});a.args={progress:.5};const l=["_default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...a.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,s,e)=>{"use strict";e.d(s,{A:()=>u});var d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),_={};_.insert="head",_.singleton=!1;var o=m()(t.A,_);const n=t.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({className:i,progressClassName:j,progress:p,size:x="normal"})=>{if(p==null)return null;const y={width:`${Math.max(Math.min(p,1),0)*100}%`};return(0,a.jsx)("div",{className:(0,d.A)(i,n.wrapper,{[n.small]:x==="small"}),children:(0,a.jsx)("div",{className:(0,d.A)(j,n.progress),style:y})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,s,e)=>{"use strict";e.d(s,{A:()=>m});function d(t){var _,o,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(_=0;_<a;_++)t[_]&&(o=d(t[_]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o);return n}function r(){for(var t,_,o=0,n="",a=arguments.length;o<a;o++)(t=arguments[o])&&(_=d(t))&&(n&&(n+=" "),n+=_);return n}const m=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(c,s,e)=>{"use strict";e.d(s,{A:()=>o});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(d),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(m),_=t()(r());_.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),_.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const o=_}}]);
