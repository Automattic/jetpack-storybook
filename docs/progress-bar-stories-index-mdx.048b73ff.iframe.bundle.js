(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8824,613],{"../../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js":(i,r,s)=>{"use strict";s.d(r,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},t.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(i,r,s)=>{"use strict";var t;s.d(r,{L:()=>o,j:()=>d});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=function(m){return m()},a=(t||(t=s.t(e,2)))["useInsertionEffect"]?(t||(t=s.t(e,2)))["useInsertionEffect"]:!1,o=a||c,d=a||e.useLayoutEffect},"../components/components/progress-bar/stories/index.stories.tsx":(i,r,s)=>{var p,_,l;"use strict";s.r(r),s.d(r,{__namedExportsOrder:()=>m,_default:()=>n,default:()=>o});var t=s("../components/components/progress-bar/index.tsx"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import ProgressBar from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Progress Bar',
	component: ProgressBar,
} as ComponentMeta< typeof ProgressBar >;

const Template: ComponentStory< typeof ProgressBar > = args => {
	return <ProgressBar { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	progress: 0.5,
};
`,a={_default:{startLoc:{col:55,line:9},endLoc:{col:1,line:11},startBody:{col:55,line:9},endBody:{col:1,line:11}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Progress Bar',
	component: ProgressBar,
} as ComponentMeta< typeof ProgressBar >;

const Template: ComponentStory< typeof ProgressBar > = args => {
	return <ProgressBar { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	progress: 0.5,
};
`,locationsMap:{default:{startLoc:{col:55,line:9},endLoc:{col:1,line:11},startBody:{col:55,line:9},endBody:{col:1,line:11}}}}},title:"JS Packages/Components/Progress Bar",component:t.Z},d=u=>(0,e.jsx)(t.Z,{...u});d.displayName="Template";const n=d.bind({});n.args={progress:.5},n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(l=(_=n.parameters)==null?void 0:_.docs)==null?void 0:l.source}}};const m=["_default"]},"../components/components/progress-bar/stories/index.mdx":(i,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>p});var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),a=s.n(c),o=s("../../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),d=s("../components/components/progress-bar/stories/index.stories.tsx");function n(_){const l=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,c.useMDXComponents)(),_.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:d}),`
`,(0,e.jsx)(l.h1,{id:"progressbar",children:"ProgressBar"}),`
`,(0,e.jsx)(l.p,{children:"A simple progress bar."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"js-packages-components-progress-bar--default"})}),`
`,(0,e.jsx)(l.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(l.h3,{id:"progress",children:"progress"}),`
`,(0,e.jsxs)(l.ul,{children:[`
`,(0,e.jsxs)(l.li,{children:["type: ",(0,e.jsx)(l.code,{children:"number"})]}),`
`]}),`
`,(0,e.jsx)(l.p,{children:`The current progress percentage. A number between 0 and 1, inclusive.
Will round up to 0 if less than 0.
Will round down to 1 if above 1.`})]})}function m(_={}){const{wrapper:l}=Object.assign({},(0,c.useMDXComponents)(),_.components);return l?(0,e.jsx)(l,Object.assign({},_,{children:(0,e.jsx)(n,_)})):n(_)}const p=m},"../components/components/progress-bar/index.tsx":(i,r,s)=>{"use strict";s.d(r,{Z:()=>l});var t=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=s.n(t),c=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(c),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),d={};d.insert="head",d.singleton=!1;var n=a()(o.Z,d);const m=o.Z.locals||{};var p=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=({className:u,progressClassName:j,progress:f,size:g="normal"})=>{if(f==null)return null;const E={width:`${Math.max(Math.min(f,1),0)*100}%`};return(0,p.jsx)("div",{className:e()(u,m.wrapper,{[m.small]:g==="small"}),children:(0,p.jsx)("div",{className:e()(j,m.progress),style:E})})};_.displayName="ProgressBar";const l=_},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,r)=>{var s,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,c="[native code]";function a(){for(var o=[],d=0;d<arguments.length;d++){var n=arguments[d];if(n){var m=typeof n;if(m==="string"||m==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var p=a.apply(null,n);p&&o.push(p)}}else if(m==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var _ in n)e.call(n,_)&&n[_]&&o.push(_)}}}return o.join(" ")}i.exports?(a.default=a,i.exports=a):(s=[],t=function(){return a}.apply(r,s),t!==void 0&&(i.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(i,r,s)=>{"use strict";s.d(r,{Z:()=>d});var t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(t),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(c),o=a()(e());o.push([i.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const d=o},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":i=>{function r(s){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",i.exports=r}}]);})();
