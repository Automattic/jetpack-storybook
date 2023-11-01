(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8824,613],{"../../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/extends.js":(p,l,s)=>{"use strict";s.d(l,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var r=arguments[c];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(p,l,s)=>{"use strict";var t;s.d(l,{L:()=>o,j:()=>a});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=function(m){return m()},r=(t||(t=s.t(e,2)))["useInsertionEffect"]?(t||(t=s.t(e,2)))["useInsertionEffect"]:!1,o=r||c,a=r||e.useLayoutEffect},"../components/components/progress-bar/stories/index.mdx":(p,l,s)=>{"use strict";s.r(l),s.d(l,{default:()=>u});var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),r=s.n(c),o=s("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=s("../components/components/progress-bar/stories/index.stories.tsx");function n(d){const _=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,c.useMDXComponents)(),d.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:a}),`
`,(0,e.jsx)(_.h1,{id:"progressbar",children:"ProgressBar"}),`
`,(0,e.jsx)(_.p,{children:"A simple progress bar."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"js-packages-components-progress-bar--default"})}),`
`,(0,e.jsx)(_.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(_.h3,{id:"progress",children:"progress"}),`
`,(0,e.jsxs)(_.ul,{children:[`
`,(0,e.jsxs)(_.li,{children:["type: ",(0,e.jsx)(_.code,{children:"number"})]}),`
`]}),`
`,(0,e.jsx)(_.p,{children:`The current progress percentage. A number between 0 and 1, inclusive.
Will round up to 0 if less than 0.
Will round down to 1 if above 1.`})]})}function m(d={}){const{wrapper:_}=Object.assign({},(0,c.useMDXComponents)(),d.components);return _?(0,e.jsx)(_,Object.assign({},d,{children:(0,e.jsx)(n,d)})):n(d)}const u=m},"../components/components/progress-bar/stories/index.stories.tsx":(p,l,s)=>{var u,d,_;"use strict";s.r(l),s.d(l,{__namedExportsOrder:()=>m,_default:()=>n,default:()=>o});var t=s("../components/components/progress-bar/index.tsx"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import ProgressBar from '..';
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
`,r={_default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Progress Bar',
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>);
const Template: ComponentStory<typeof ProgressBar> = args => {
  return <ProgressBar {...args} />;
};
export const _default = Template.bind({});
_default.args = {
  progress: 0.5
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <ProgressBar {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"JS Packages/Components/Progress Bar",component:t.Z},a=i=>(0,e.jsx)(t.Z,{...i});a.displayName="Template";const n=a.bind({});n.args={progress:.5},n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(_=(d=n.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};const m=["_default"]},"../components/components/progress-bar/index.tsx":(p,l,s)=>{"use strict";s.d(l,{Z:()=>_});var t=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=s.n(t),c=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(c),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),a={};a.insert="head",a.singleton=!1;var n=r()(o.Z,a);const m=o.Z.locals||{};var u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=i=>{let{className:j,progressClassName:g,progress:f,size:P="normal"}=i;if(f==null)return null;const E={width:`${Math.max(Math.min(f,1),0)*100}%`};return(0,u.jsx)("div",{className:e()(j,m.wrapper,{[m.small]:P==="small"}),children:(0,u.jsx)("div",{className:e()(g,m.progress),style:E})})};d.displayName="ProgressBar";const _=d},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,l)=>{var s,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,c="[native code]";function r(){for(var o=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var m=typeof n;if(m==="string"||m==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var u=r.apply(null,n);u&&o.push(u)}}else if(m==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var d in n)e.call(n,d)&&n[d]&&o.push(d)}}}return o.join(" ")}p.exports?(r.default=r,p.exports=r):(s=[],t=function(){return r}.apply(l,s),t!==void 0&&(p.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(p,l,s)=>{"use strict";s.d(l,{Z:()=>a});var t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(t),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(c),o=r()(e());o.push([p.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const a=o}}]);})();
