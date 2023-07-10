(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3337],{"../components/components/indeterminate-progress-bar/stories/index.stories.tsx":(a,d,e)=>{var b,P,y;"use strict";e.r(d),e.d(d,{__namedExportsOrder:()=>E,_default:()=>_,default:()=>S});var t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(m),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(n),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/indeterminate-progress-bar/style.module.scss"),s={};s.insert="head",s.singleton=!1;var p=o()(r.Z,s);const c=r.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=t.__,g=u=>{let{className:B}=u;return(0,l.jsx)("div",{className:i()(B,c["indeterminate-progress-bar"]),"aria-label":v("Indeterminate Progress Bar","jetpack")})};g.displayName="IndeterminateProgressBar";const f=g;var I=`import IndeterminateProgressBar from '..';
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
`,C={_default:{startLoc:{col:66,line:7},endLoc:{col:1,line:9},startBody:{col:66,line:7},endBody:{col:1,line:9}}};const S={parameters:{storySource:{source:`import IndeterminateProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:66,line:7},endLoc:{col:1,line:9},startBody:{col:66,line:7},endBody:{col:1,line:9}}}}},title:"JS Packages/Components/Indeterminate Progress Bar",component:f},j=u=>(0,l.jsx)(f,{...u});j.displayName="Template";const _=j.bind({});_.args={},_.parameters={..._.parameters,docs:{...(b=_.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <IndeterminateProgressBar {...args} />;
}`,...(y=(P=_.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const E=["_default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(a,d)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,i="[native code]";function n(){for(var o=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var p=typeof s;if(p==="string"||p==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var c=n.apply(null,s);c&&o.push(c)}}else if(p==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var l in s)m.call(s,l)&&s[l]&&o.push(l)}}}return o.join(" ")}a.exports?(n.default=n,a.exports=n):(e=[],t=function(){return n}.apply(d,e),t!==void 0&&(a.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/indeterminate-progress-bar/style.module.scss":(a,d,e)=>{"use strict";e.d(d,{Z:()=>r});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),o=n()(m());o.push([a.id,":root{--jp-indeterminate-progress-bar__light-color: #F6F7F7;--jp-indeterminate-progress-bar__dark-color: #EDEDEE}.k8m3q0bmXGFeF3hr70sh{width:100%;height:24px;background-color:transparent;border-radius:calc(var(--spacing-base)*3);pointer-events:none;background-size:68px 100%;background-image:linear-gradient(-45deg, var(--jp-indeterminate-progress-bar__light-color) 33%, var(--jp-indeterminate-progress-bar__dark-color) 33%, var(--jp-indeterminate-progress-bar__dark-color) 71%, var(--jp-indeterminate-progress-bar__light-color) 71%);display:inline-block}@keyframes zSWVsalTHsfC0TKHPaWT{0%{background-position:136px 0}}@media(prefers-reduced-motion: no-preference){.k8m3q0bmXGFeF3hr70sh{animation:zSWVsalTHsfC0TKHPaWT 2000ms infinite linear}}",""]),o.locals={"indeterminate-progress-bar":"k8m3q0bmXGFeF3hr70sh",indeterminate_progress_bar__animation:"zSWVsalTHsfC0TKHPaWT"};const r=o}}]);})();
