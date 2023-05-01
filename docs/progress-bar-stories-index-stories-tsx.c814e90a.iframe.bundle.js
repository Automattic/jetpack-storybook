(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[613],{"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx":(p,l,s)=>{var c,d,i;"use strict";s.r(l),s.d(l,{__namedExportsOrder:()=>t,_default:()=>e,default:()=>o});var n=s("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),_=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '..';
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
`,a={_default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"Packages/VideoPress/Progress Bar",component:n.Z},r=u=>(0,_.jsx)(n.Z,{...u});r.displayName="Template";const e=r.bind({});e.args={progress:.5},e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const t=["_default"]},"../../packages/videopress/src/client/admin/components/progress-bar/index.tsx":(p,l,s)=>{"use strict";s.d(l,{Z:()=>i});var n=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=s.n(n),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(m),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var e=a()(o.Z,r);const t=o.Z.locals||{};var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=u=>{let{className:v,progress:g,size:f="normal"}=u;if(g==null)return null;const P={width:`${Math.max(Math.min(g,1),0)*100}%`};return(0,c.jsx)("div",{className:_()(v,t.wrapper,{[t.small]:f==="small"}),children:(0,c.jsx)("div",{className:_()(t.progress),style:P})})};d.displayName="ProgressBar";const i=d},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,l)=>{var s,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,m="[native code]";function a(){for(var o=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var t=typeof e;if(t==="string"||t==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var c=a.apply(null,e);c&&o.push(c)}}else if(t==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var d in e)_.call(e,d)&&e[d]&&o.push(d)}}}return o.join(" ")}p.exports?(a.default=a,p.exports=a):(s=[],n=function(){return a}.apply(l,s),n!==void 0&&(p.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss":(p,l,s)=>{"use strict";s.d(l,{Z:()=>r});var n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(n),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(m),o=a()(_());o.push([p.id,".oFyvI2R2ev0HeVNk7jvU{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.oFyvI2R2ev0HeVNk7jvU.z1wCzLRxP7O5Q_oy9gL0{height:3px}.oFyvI2R2ev0HeVNk7jvU .QWDZG7i7cOCBHNFmz035{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"oFyvI2R2ev0HeVNk7jvU",small:"z1wCzLRxP7O5Q_oy9gL0",progress:"QWDZG7i7cOCBHNFmz035"};const r=o}}]);})();
