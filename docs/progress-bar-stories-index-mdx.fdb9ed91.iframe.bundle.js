(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8824,613,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(u,l,e)=>{"use strict";e.d(l,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&(s[n]=d[n])}return s},t.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(u,l,e)=>{"use strict";var t;e.d(l,{L:()=>n,j:()=>m});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=function(a){return a()},d=(t||(t=e.t(s,2)))["useInsertionEffect"]?(t||(t=e.t(s,2)))["useInsertionEffect"]:!1,n=d||c,m=d||s.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(u,l,e)=>{"use strict";e.r(l),e.d(l,{MDXContext:()=>s,MDXProvider:()=>m,useMDXComponents:()=>d,withMDXComponents:()=>c});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=t.createContext({});function c(o){return a;function a(_){const r=d(_.components);return t.createElement(o,{..._,allComponents:r})}}function d(o){const a=t.useContext(s);return t.useMemo(()=>typeof o=="function"?o(a):{...a,...o},[a,o])}const n={};function m({components:o,children:a,disableParentContext:_}){let r;return _?r=typeof o=="function"?o({}):o||n:r=d(o),t.createElement(s.Provider,{value:r},a)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(u,l,e)=>{var t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,n=(_,r,p,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let f of c(r))!d.call(_,f)&&f!==p&&t(_,f,{get:()=>r[f],enumerable:!(i=s(r,f))||i.enumerable});return _},m=(_,r,p)=>(n(_,r,"default"),p&&n(p,r,"default")),o=_=>n(t({},"__esModule",{value:!0}),_),a={};u.exports=o(a),m(a,e("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),u.exports)},"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.mdx":(u,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>r});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),d=e.n(c),n=e("../../../node_modules/.pnpm/@storybook+blocks@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),m=e("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),o=e("../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx");function a(p){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,c.useMDXComponents)(),p.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h_,{of:o}),`
`,(0,s.jsx)(i.h1,{id:"progressbar",children:"ProgressBar"}),`
`,(0,s.jsx)(i.p,{children:"A simple progress bar."}),`
`,(0,s.jsx)(n.Xz,{withSource:"open",children:(0,s.jsx)(n.oG,{id:"packages-videopress-progress-bar--default"})}),`
`,(0,s.jsx)(i.h2,{id:"api",children:"API"}),`
`,(0,s.jsx)(i.h3,{id:"progress",children:"progress"}),`
`,(0,s.jsxs)(i.ul,{children:[`
`,(0,s.jsxs)(i.li,{children:["type: ",(0,s.jsx)(i.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(i.p,{children:`The current progress percentage. A number between 0 and 1, inclusive.
Will round up to 0 if less than 0.
Will round down to 1 if above 1.`})]})}function _(p={}){const{wrapper:i}=Object.assign({},(0,c.useMDXComponents)(),p.components);return i?(0,s.jsx)(i,Object.assign({},p,{children:(0,s.jsx)(a,p)})):a(p)}const r=_},"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx":(u,l,e)=>{var _,r,p;"use strict";e.r(l),e.d(l,{__namedExportsOrder:()=>a,_default:()=>o,default:()=>n});var t=e("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import ProgressBar from '..';
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
`,d={_default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}};const n={parameters:{storySource:{source:`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"Packages/VideoPress/Progress Bar",component:t.Z},m=i=>(0,s.jsx)(t.Z,{...i});m.displayName="Template";const o=m.bind({});o.args={progress:.5},o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(p=(r=o.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const a=["_default"]},"../../packages/videopress/src/client/admin/components/progress-bar/index.tsx":(u,l,e)=>{"use strict";e.d(l,{Z:()=>p});var t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(t),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(c),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss"),m={};m.insert="head",m.singleton=!1;var o=d()(n.Z,m);const a=n.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=i=>{let{className:f,progress:g,size:j="normal"}=i;if(g==null)return null;const v={width:`${Math.max(Math.min(g,1),0)*100}%`};return(0,_.jsx)("div",{className:s()(f,a.wrapper,{[a.small]:j==="small"}),children:(0,_.jsx)("div",{className:s()(a.progress),style:v})})};r.displayName="ProgressBar";const p=r},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(u,l)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var s={}.hasOwnProperty,c="[native code]";function d(){for(var n=[],m=0;m<arguments.length;m++){var o=arguments[m];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var _=d.apply(null,o);_&&n.push(_)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var r in o)s.call(o,r)&&o[r]&&n.push(r)}}}return n.join(" ")}u.exports?(d.default=d,u.exports=d):(e=[],t=function(){return d}.apply(l,e),t!==void 0&&(u.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss":(u,l,e)=>{"use strict";e.d(l,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(c),n=d()(s());n.push([u.id,".oFyvI2R2ev0HeVNk7jvU{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.oFyvI2R2ev0HeVNk7jvU.z1wCzLRxP7O5Q_oy9gL0{height:3px}.oFyvI2R2ev0HeVNk7jvU .QWDZG7i7cOCBHNFmz035{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),n.locals={wrapper:"oFyvI2R2ev0HeVNk7jvU",small:"z1wCzLRxP7O5Q_oy9gL0",progress:"QWDZG7i7cOCBHNFmz035"};const m=n}}]);})();
