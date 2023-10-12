(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8824,613],{"../../../node_modules/.pnpm/@babel+runtime@7.23.1/node_modules/@babel/runtime/helpers/esm/extends.js":(p,a,s)=>{"use strict";s.d(a,{Z:()=>r});function r(){return r=Object.assign?Object.assign.bind():function(e){for(var d=1;d<arguments.length;d++){var t=arguments[d];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(p,a,s)=>{"use strict";var r;s.d(a,{L:()=>o,j:()=>_});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=function(c){return c()},t=(r||(r=s.t(e,2)))["useInsertionEffect"]?(r||(r=s.t(e,2)))["useInsertionEffect"]:!1,o=t||d,_=t||e.useLayoutEffect},"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.mdx":(p,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>m});var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),t=s.n(d),o=s("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_=s("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),n=s("../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx");function c(i){const l=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,d.useMDXComponents)(),i.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:n}),`
`,(0,e.jsx)(l.h1,{id:"progressbar",children:"ProgressBar"}),`
`,(0,e.jsx)(l.p,{children:"A simple progress bar."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"packages-videopress-progress-bar--default"})}),`
`,(0,e.jsx)(l.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(l.h3,{id:"progress",children:"progress"}),`
`,(0,e.jsxs)(l.ul,{children:[`
`,(0,e.jsxs)(l.li,{children:["type: ",(0,e.jsx)(l.code,{children:"number"})]}),`
`]}),`
`,(0,e.jsx)(l.p,{children:`The current progress percentage. A number between 0 and 1, inclusive.
Will round up to 0 if less than 0.
Will round down to 1 if above 1.`})]})}function u(i={}){const{wrapper:l}=Object.assign({},(0,d.useMDXComponents)(),i.components);return l?(0,e.jsx)(l,Object.assign({},i,{children:(0,e.jsx)(c,i)})):c(i)}const m=u},"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx":(p,a,s)=>{var u,m,i;"use strict";s.r(a),s.d(a,{__namedExportsOrder:()=>c,_default:()=>n,default:()=>o});var r=s("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=`import ProgressBar from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Progress Bar',
	component: ProgressBar,
} as ComponentMeta< typeof ProgressBar >;

const Template: ComponentStory< typeof ProgressBar > = args => {
	return <ProgressBar { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	progress: 0.5,
};
`,t={_default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Progress Bar',
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"Packages/VideoPress/Progress Bar",component:r.Z},_=l=>(0,e.jsx)(r.Z,{...l});_.displayName="Template";const n=_.bind({});n.args={progress:.5},n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const c=["_default"]},"../../packages/videopress/src/client/admin/components/progress-bar/index.tsx":(p,a,s)=>{"use strict";s.d(a,{Z:()=>i});var r=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=s.n(r),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=s.n(d),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss"),_={};_.insert="head",_.singleton=!1;var n=t()(o.Z,_);const c=o.Z.locals||{};var u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=l=>{let{className:f,progress:g,size:j="normal"}=l;if(g==null)return null;const v={width:`${Math.max(Math.min(g,1),0)*100}%`};return(0,u.jsx)("div",{className:e()(f,c.wrapper,{[c.small]:j==="small"}),children:(0,u.jsx)("div",{className:e()(c.progress),style:v})})};m.displayName="ProgressBar";const i=m},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,a)=>{var s,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,d="[native code]";function t(){for(var o=[],_=0;_<arguments.length;_++){var n=arguments[_];if(n){var c=typeof n;if(c==="string"||c==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var u=t.apply(null,n);u&&o.push(u)}}else if(c==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var m in n)e.call(n,m)&&n[m]&&o.push(m)}}}return o.join(" ")}p.exports?(t.default=t,p.exports=t):(s=[],r=function(){return t}.apply(a,s),r!==void 0&&(p.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss":(p,a,s)=>{"use strict";s.d(a,{Z:()=>_});var r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(r),d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(d),o=t()(e());o.push([p.id,".oFyvI2R2ev0HeVNk7jvU{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.oFyvI2R2ev0HeVNk7jvU.z1wCzLRxP7O5Q_oy9gL0{height:3px}.oFyvI2R2ev0HeVNk7jvU .QWDZG7i7cOCBHNFmz035{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"oFyvI2R2ev0HeVNk7jvU",small:"z1wCzLRxP7O5Q_oy9gL0",progress:"QWDZG7i7cOCBHNFmz035"};const _=o}}]);})();
