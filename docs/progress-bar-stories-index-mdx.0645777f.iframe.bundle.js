(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4375,5075],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,s,e)=>{"use strict";e.d(s,{R:()=>t,x:()=>d});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n={},m=a.createContext(n);function t(o){const r=a.useContext(m);return a.useMemo(function(){return typeof o=="function"?o(r):{...r,...o}},[r,o])}function d(o){let r;return o.disableParentContext?r=typeof o.components=="function"?o.components(n):o.components||n:r=t(o.components),a.createElement(m.Provider,{value:r},o.children)}},"../components/components/progress-bar/stories/index.mdx":(c,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>r});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=e("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=e("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),d=e("../components/components/progress-bar/stories/index.stories.tsx");function o(_){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,m.R)(),..._.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.W8,{of:d}),`
`,(0,n.jsx)(l.h1,{id:"progressbar",children:"ProgressBar"}),`
`,(0,n.jsx)(l.p,{children:"A simple progress bar."}),`
`,(0,n.jsx)(t.Hl,{withSource:"open",children:(0,n.jsx)(t.gG,{id:"js-packages-components-progress-bar--default"})}),`
`,(0,n.jsx)(l.h2,{id:"api",children:"API"}),`
`,(0,n.jsx)(l.h3,{id:"progress",children:"progress"}),`
`,(0,n.jsxs)(l.ul,{children:[`
`,(0,n.jsxs)(l.li,{children:["type: ",(0,n.jsx)(l.code,{children:"number"})]}),`
`]}),`
`,(0,n.jsx)(l.p,{children:`The current progress percentage. A number between 0 and 1, inclusive.
Will round up to 0 if less than 0.
Will round down to 1 if above 1.`})]})}function r(_={}){const{wrapper:l}={...(0,m.R)(),..._.components};return l?(0,n.jsx)(l,{..._,children:(0,n.jsx)(o,{..._})}):o(_)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":c=>{function s(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",c.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":c=>{function s(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",c.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":c=>{function s(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",c.exports=s},"../components/components/progress-bar/stories/index.stories.tsx":(c,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>l,_default:()=>_,default:()=>o});var a=e("../components/components/progress-bar/index.tsx"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '../index.tsx';
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
`,t={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const o={parameters:{storySource:{source:`import ProgressBar from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"JS Packages/Components/Progress Bar",component:a.A},_=(p=>(0,n.jsx)(a.A,{...p})).bind({});_.args={progress:.5};const l=["_default"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,..._.parameters?.docs?.source}}}},"../components/components/progress-bar/index.tsx":(c,s,e)=>{"use strict";e.d(s,{A:()=>p});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(n),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss"),d={};d.insert="head",d.singleton=!1;var o=m()(t.A,d);const r=t.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=({className:u,progressClassName:g,progress:i,size:y="normal"})=>{if(i==null)return null;const x={width:`${Math.max(Math.min(i,1),0)*100}%`};return(0,_.jsx)("div",{className:(0,a.A)(u,r.wrapper,{[r.small]:y==="small"}),children:(0,_.jsx)("div",{className:(0,a.A)(g,r.progress),style:x})})};try{progressbar.displayName="progressbar",progressbar.__docgenInfo={description:"Progress Bar component",displayName:"progressbar",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},progressClassName:{defaultValue:null,description:"Optional classname to apply to the progress element.",name:"progressClassName",required:!1,type:{name:"string"}},progress:{defaultValue:null,description:"The current progress percentage, from 0 to 1.",name:"progress",required:!0,type:{name:"number"}},size:{defaultValue:{value:"normal"},description:"The progress bar height.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/progress-bar/index.tsx#progressbar"]={docgenInfo:progressbar.__docgenInfo,name:"progressbar",path:"../components/components/progress-bar/index.tsx#progressbar"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,s,e)=>{"use strict";e.d(s,{A:()=>m});function a(t){var d,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var _=t.length;for(d=0;d<_;d++)t[d]&&(o=a(t[d]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function n(){for(var t,d,o=0,r="",_=arguments.length;o<_;o++)(t=arguments[o])&&(d=a(t))&&(r&&(r+=" "),r+=d);return r}const m=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/progress-bar/style.module.scss":(c,s,e)=>{"use strict";e.d(s,{A:()=>o});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(m),d=t()(n());d.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),d.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const o=d}}]);
