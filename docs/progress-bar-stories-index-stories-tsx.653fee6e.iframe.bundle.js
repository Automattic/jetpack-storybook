(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[613],{"../components/components/progress-bar/stories/index.stories.tsx":(c,d,s)=>{var p,l,u;"use strict";s.r(d),s.d(d,{__namedExportsOrder:()=>a,_default:()=>e,default:()=>o});var r=s("../components/components/progress-bar/index.tsx"),_=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '..';
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
`,t={_default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"JS Packages/Components/Progress Bar",component:r.Z},n=i=>(0,_.jsx)(r.Z,{...i});n.displayName="Template";const e=n.bind({});e.args={progress:.5},e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const a=["_default"]},"../components/components/progress-bar/index.tsx":(c,d,s)=>{"use strict";s.d(d,{Z:()=>u});var r=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=s.n(r),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=s.n(m),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),n={};n.insert="head",n.singleton=!1;var e=t()(o.Z,n);const a=o.Z.locals||{};var p=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=i=>{let{className:f,progressClassName:P,progress:g,size:j="normal"}=i;if(g==null)return null;const y={width:`${Math.max(Math.min(g,1),0)*100}%`};return(0,p.jsx)("div",{className:_()(f,a.wrapper,{[a.small]:j==="small"}),children:(0,p.jsx)("div",{className:_()(P,a.progress),style:y})})};l.displayName="ProgressBar";const u=l},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,d)=>{var s,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,m="[native code]";function t(){for(var o=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var a=typeof e;if(a==="string"||a==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var p=t.apply(null,e);p&&o.push(p)}}else if(a==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var l in e)_.call(e,l)&&e[l]&&o.push(l)}}}return o.join(" ")}c.exports?(t.default=t,c.exports=t):(s=[],r=function(){return t}.apply(d,s),r!==void 0&&(c.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(c,d,s)=>{"use strict";s.d(d,{Z:()=>n});var r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(r),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(m),o=t()(_());o.push([c.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const n=o}}]);})();
