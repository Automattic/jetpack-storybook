(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4375,5075],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,o,s)=>{"use strict";s.d(o,{R:()=>t,x:()=>_});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r={},m=d.createContext(r);function t(n){const e=d.useContext(m);return d.useMemo(function(){return typeof n=="function"?n(e):{...e,...n}},[e,n])}function _(n){let e;return n.disableParentContext?e=typeof n.components=="function"?n.components(r):n.components||r:e=t(n.components),d.createElement(m.Provider,{value:e},n.children)}},"../components/components/progress-bar/stories/index.mdx":(c,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>e});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=s("../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist/index.mjs"),_=s("../components/components/progress-bar/stories/index.stories.tsx");function n(a){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,m.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.W8,{of:_}),`
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
Will round down to 1 if above 1.`})]})}function e(a={}){const{wrapper:l}={...(0,m.R)(),...a.components};return l?(0,r.jsx)(l,{...a,children:(0,r.jsx)(n,{...a})}):n(a)}},"../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive":c=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive",c.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive":c=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive",c.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive":c=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive",c.exports=o},"../components/components/progress-bar/stories/index.stories.tsx":(c,o,s)=>{"use strict";s.r(o),s.d(o,{__namedExportsOrder:()=>a,_default:()=>e,default:()=>_});var d=s("../components/components/progress-bar/index.tsx"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '../index.js';
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
`,t={_default:{startLoc:{col:17,line:7},endLoc:{col:1,line:11},startBody:{col:17,line:7},endBody:{col:1,line:11}}};const _={parameters:{storySource:{source:`import ProgressBar from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:1,line:11},startBody:{col:17,line:7},endBody:{col:1,line:11}}}}},title:"JS Packages/Components/Progress Bar",component:d.A},e=(l=>(0,r.jsx)(d.A,{...l})).bind({});e.args={progress:.5};const a=["_default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...e.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,o,s)=>{"use strict";s.d(o,{A:()=>p});var d=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=s.n(r),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),_={};_.insert="head",_.singleton=!1;var n=m()(t.A,_);const e=t.A.locals||{};var a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=({className:i,progressClassName:j,progress:u,size:x="normal"})=>{if(u==null)return null;const y={width:`${Math.max(Math.min(u,1),0)*100}%`};return(0,a.jsx)("div",{className:(0,d.A)(i,e.wrapper,{[e.small]:x==="small"}),children:(0,a.jsx)("div",{className:(0,d.A)(j,e.progress),style:y})})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,o,s)=>{"use strict";s.d(o,{A:()=>m});function d(t){var _,n,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(_=0;_<a;_++)t[_]&&(n=d(t[_]))&&(e&&(e+=" "),e+=n)}else for(n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function r(){for(var t,_,n=0,e="",a=arguments.length;n<a;n++)(t=arguments[n])&&(_=d(t))&&(e&&(e+=" "),e+=_);return e}const m=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(c,o,s)=>{"use strict";s.d(o,{A:()=>n});var d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(d),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(m),_=t()(r());_.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),_.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const n=_}}]);
