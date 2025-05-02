(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4375,5075],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,o,s)=>{"use strict";s.d(o,{R:()=>r,x:()=>_});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const t={},m=d.createContext(t);function r(e){const n=d.useContext(m);return d.useMemo(function(){return typeof e=="function"?e(n):{...n,...e}},[n,e])}function _(e){let n;return e.disableParentContext?n=typeof e.components=="function"?e.components(t):e.components||t:n=r(e.components),d.createElement(m.Provider,{value:n},e.children)}},"../components/components/progress-bar/stories/index.mdx":(c,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>n});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=s("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),_=s("../components/components/progress-bar/stories/index.stories.tsx");function e(a){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,m.R)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.W8,{of:_}),`
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
Will round down to 1 if above 1.`})]})}function n(a={}){const{wrapper:l}={...(0,m.R)(),...a.components};return l?(0,t.jsx)(l,{...a,children:(0,t.jsx)(e,{...a})}):e(a)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":c=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",c.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":c=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",c.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":c=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",c.exports=o},"../components/components/progress-bar/stories/index.stories.tsx":(c,o,s)=>{"use strict";s.r(o),s.d(o,{__namedExportsOrder:()=>l,_default:()=>a,default:()=>e});var d=s("../components/components/progress-bar/index.tsx"),t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '../index.tsx';
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
`,r={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const e={parameters:{storySource:{source:`import ProgressBar from '../index.tsx';
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
}`,...a.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,o,s)=>{"use strict";s.d(o,{A:()=>u});var d=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=s.n(t),r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),_={};_.insert="head",_.singleton=!1;var e=m()(r.A,_);const n=r.A.locals||{};var a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({className:i,progressClassName:x,progress:p,size:y="normal"})=>{if(p==null)return null;const j={width:`${Math.max(Math.min(p,1),0)*100}%`};return(0,a.jsx)("div",{className:(0,d.A)(i,n.wrapper,{[n.small]:y==="small"}),children:(0,a.jsx)("div",{className:(0,d.A)(x,n.progress),style:j})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,o,s)=>{"use strict";s.d(o,{A:()=>m});function d(r){var _,e,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(_=0;_<a;_++)r[_]&&(e=d(r[_]))&&(n&&(n+=" "),n+=e)}else for(e in r)r[e]&&(n&&(n+=" "),n+=e);return n}function t(){for(var r,_,e=0,n="",a=arguments.length;e<a;e++)(r=arguments[e])&&(_=d(r))&&(n&&(n+=" "),n+=_);return n}const m=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(c,o,s)=>{"use strict";s.d(o,{A:()=>e});var d=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=s.n(d),m=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(m),_=r()(t());_.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),_.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const e=_}}]);
