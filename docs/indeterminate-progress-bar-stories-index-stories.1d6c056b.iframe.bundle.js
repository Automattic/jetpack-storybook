(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3337],{"../components/components/indeterminate-progress-bar/stories/index.stories.tsx":(d,l,e)=>{var b,P,y;"use strict";e.r(l),e.d(l,{__namedExportsOrder:()=>E,_default:()=>_,default:()=>v});var t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),o=e.n(m),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(n),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/indeterminate-progress-bar/style.module.scss"),a={};a.insert="head",a.singleton=!1;var p=r()(s.Z,a);const i=s.Z.locals||{};var u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=t.__,g=c=>{let{className:B}=c;return(0,u.jsx)("div",{className:o()(B,i["indeterminate-progress-bar"]),"aria-label":S("Indeterminate Progress Bar","jetpack")})};g.displayName="IndeterminateProgressBar";const f=g;var I=`import IndeterminateProgressBar from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Indeterminate Progress Bar',
	component: IndeterminateProgressBar,
} as ComponentMeta< typeof IndeterminateProgressBar >;

const Template: ComponentStory< typeof IndeterminateProgressBar > = args => {
	return <IndeterminateProgressBar { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {};
`,T={_default:{startLoc:{col:66,line:7},endLoc:{col:1,line:9},startBody:{col:66,line:7},endBody:{col:1,line:9}}};const v={parameters:{storySource:{source:`import IndeterminateProgressBar from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Indeterminate Progress Bar',
  component: IndeterminateProgressBar
} as ComponentMeta<typeof IndeterminateProgressBar>);
const Template: ComponentStory<typeof IndeterminateProgressBar> = args => {
  return <IndeterminateProgressBar {...args} />;
};
export const _default = Template.bind({});
_default.args = {};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <IndeterminateProgressBar {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:66,line:7},endLoc:{col:1,line:9},startBody:{col:66,line:7},endBody:{col:1,line:9}}}}},title:"JS Packages/Components/Indeterminate Progress Bar",component:f},j=c=>(0,u.jsx)(f,{...c});j.displayName="Template";const _=j.bind({});_.args={},_.parameters={..._.parameters,docs:{...(b=_.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <IndeterminateProgressBar {...args} />;
}`,...(y=(P=_.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const E=["_default"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(d,l)=>{var e,t;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty;function o(){for(var n=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var a=typeof s;if(a==="string"||a==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var p=o.apply(null,s);p&&n.push(p)}}else if(a==="object")if(s.toString===Object.prototype.toString)for(var i in s)m.call(s,i)&&s[i]&&n.push(i);else n.push(s.toString())}}return n.join(" ")}d.exports?(o.default=o,d.exports=o):(e=[],t=function(){return o}.apply(l,e),t!==void 0&&(d.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/indeterminate-progress-bar/style.module.scss":(d,l,e)=>{"use strict";e.d(l,{Z:()=>s});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(o),r=n()(m());r.push([d.id,":root{--jp-indeterminate-progress-bar__light-color: #F6F7F7;--jp-indeterminate-progress-bar__dark-color: #EDEDEE}.k8m3q0bmXGFeF3hr70sh{width:100%;height:24px;background-color:transparent;border-radius:calc(var(--spacing-base)*3);pointer-events:none;background-size:68px 100%;background-image:linear-gradient(-45deg, var(--jp-indeterminate-progress-bar__light-color) 33%, var(--jp-indeterminate-progress-bar__dark-color) 33%, var(--jp-indeterminate-progress-bar__dark-color) 71%, var(--jp-indeterminate-progress-bar__light-color) 71%);display:inline-block}@keyframes zSWVsalTHsfC0TKHPaWT{0%{background-position:136px 0}}@media(prefers-reduced-motion: no-preference){.k8m3q0bmXGFeF3hr70sh{animation:zSWVsalTHsfC0TKHPaWT 2000ms infinite linear}}",""]),r.locals={"indeterminate-progress-bar":"k8m3q0bmXGFeF3hr70sh",indeterminate_progress_bar__animation:"zSWVsalTHsfC0TKHPaWT"};const s=r}}]);})();
