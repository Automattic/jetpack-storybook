(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[613],{"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx":(p,l,s)=>{var d,m,u;"use strict";s.r(l),s.d(l,{__namedExportsOrder:()=>c,_default:()=>r,default:()=>o});var n=s("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),_=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"Packages/VideoPress/Progress Bar",component:n.Z},e=i=>(0,_.jsx)(n.Z,{...i});e.displayName="Template";const r=e.bind({});r.args={progress:.5},r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const c=["_default"]},"../../packages/videopress/src/client/admin/components/progress-bar/index.tsx":(p,l,s)=>{"use strict";s.d(l,{Z:()=>u});var n=s("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),_=s.n(n),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=s.n(a),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var r=t()(o.Z,e);const c=o.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=i=>{let{className:f,progress:g,size:v="normal"}=i;if(g==null)return null;const P={width:`${Math.max(Math.min(g,1),0)*100}%`};return(0,d.jsx)("div",{className:_()(f,c.wrapper,{[c.small]:v==="small"}),children:(0,d.jsx)("div",{className:_()(c.progress),style:P})})};m.displayName="ProgressBar";const u=m},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(p,l)=>{var s,n;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty;function a(){for(var t=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var r=typeof e;if(r==="string"||r==="number")t.push(e);else if(Array.isArray(e)){if(e.length){var c=a.apply(null,e);c&&t.push(c)}}else if(r==="object")if(e.toString===Object.prototype.toString)for(var d in e)_.call(e,d)&&e[d]&&t.push(d);else t.push(e.toString())}}return t.join(" ")}p.exports?(a.default=a,p.exports=a):(s=[],n=function(){return a}.apply(l,s),n!==void 0&&(p.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss":(p,l,s)=>{"use strict";s.d(l,{Z:()=>e});var n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(n),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(a),o=t()(_());o.push([p.id,".oFyvI2R2ev0HeVNk7jvU{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.oFyvI2R2ev0HeVNk7jvU.z1wCzLRxP7O5Q_oy9gL0{height:3px}.oFyvI2R2ev0HeVNk7jvU .QWDZG7i7cOCBHNFmz035{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"oFyvI2R2ev0HeVNk7jvU",small:"z1wCzLRxP7O5Q_oy9gL0",progress:"QWDZG7i7cOCBHNFmz035"};const e=o}}]);})();
