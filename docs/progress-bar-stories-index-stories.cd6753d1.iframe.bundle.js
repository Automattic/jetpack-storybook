(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9469,8315,613],{"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx":(_,d,s)=>{var l,a,y;"use strict";s.r(d),s.d(d,{__namedExportsOrder:()=>i,_default:()=>r,default:()=>o});var c=s("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),p=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"Packages/VideoPress/Progress Bar",component:c.Z},e=P=>(0,p.jsx)(c.Z,{...P});e.displayName="Template";const r=e.bind({});r.args={progress:.5},r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(y=(a=r.parameters)==null?void 0:a.docs)==null?void 0:y.source}}};const i=["_default"]},"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(_,d,s)=>{var b,S,h,C,w,O,I,L,M;"use strict";s.r(d),s.d(d,{Complete:()=>v,Halfway:()=>m,Initial:()=>u,__namedExportsOrder:()=>R,default:()=>j});var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),n=s.n(p),t=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(t),e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var i=o()(e.Z,r);const l=e.Z.locals||{};var a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const y=g=>{let{className:N,total:B=100,value:x}=g;if(x==null)return null;const T=Math.min(Math.round(x/B*100),100),k={width:`${T}%`};return(0,a.jsxs)("div",{className:n()(N,l["progress-bar"]),children:[(0,a.jsx)("div",{className:l["progress-bar__wrapper"],children:(0,a.jsx)("div",{"aria-valuemax":B,"aria-valuemin":0,"aria-valuenow":Math.min(x,B),className:l["progress-bar__bar"],role:"progressbar",style:k})}),(0,a.jsx)("p",{className:l["progress-bar__percent"],children:`${T}%`})]})};y.displayName="ProgressBar",y.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@returns {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};const P=y;var E=`import React from 'react';
import ProgressBar from '../index.jsx';

export default {
	title: 'Plugins/Protect/Progress Bar',
	component: ProgressBar,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 480 } }>
				<Story />
			</div>
		),
	],
};

export const Initial = args => <ProgressBar { ...args } />;
Initial.args = {
	value: 0,
	total: 100,
};
export const Halfway = args => <ProgressBar { ...args } />;
Halfway.args = {
	value: 50,
	total: 100,
};
export const Complete = args => <ProgressBar { ...args } />;
Complete.args = {
	value: 100,
	total: 100,
};
`,f={Initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},Halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},Complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}};const j={title:"Plugins/Protect/Progress Bar",component:P,parameters:{storySource:{source:`import React from 'react';
import ProgressBar from '../index.jsx';
export default {
  title: 'Plugins/Protect/Progress Bar',
  component: ProgressBar,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => <div style={{
    width: 480
  }}>
                <Story />
            </div>]
};
export const Initial = args => <ProgressBar {...args} />;
Initial.args = {
  value: 0,
  total: 100
};
export const Halfway = args => <ProgressBar {...args} />;
Halfway.args = {
  value: 50,
  total: 100
};
export const Complete = args => <ProgressBar {...args} />;
Complete.args = {
  value: 100,
  total: 100
};
Initial.parameters = {
  ...Initial.parameters,
  docs: {
    ...Initial.parameters?.docs,
    source: {
      originalSource: "args => <ProgressBar {...args} />",
      ...Initial.parameters?.docs?.source
    }
  }
};
Halfway.parameters = {
  ...Halfway.parameters,
  docs: {
    ...Halfway.parameters?.docs,
    source: {
      originalSource: "args => <ProgressBar {...args} />",
      ...Halfway.parameters?.docs?.source
    }
  }
};
Complete.parameters = {
  ...Complete.parameters,
  docs: {
    ...Complete.parameters?.docs,
    source: {
      originalSource: "args => <ProgressBar {...args} />",
      ...Complete.parameters?.docs?.source
    }
  }
};`,locationsMap:{initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}}},layout:"centered"},decorators:[g=>(0,a.jsx)("div",{style:{width:480},children:(0,a.jsx)(g,{})})]},u=g=>(0,a.jsx)(P,{...g});u.displayName="Initial",u.args={value:0,total:100};const m=g=>(0,a.jsx)(P,{...g});m.displayName="Halfway",m.args={value:50,total:100};const v=g=>(0,a.jsx)(P,{...g});v.displayName="Complete",v.args={value:100,total:100},u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(h=(S=u.parameters)==null?void 0:S.docs)==null?void 0:h.source}}},m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source}}},v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const R=["Initial","Halfway","Complete"];u.__docgenInfo={description:"",methods:[],displayName:"Initial"},m.__docgenInfo={description:"",methods:[],displayName:"Halfway"},v.__docgenInfo={description:"",methods:[],displayName:"Complete"}},"../../packages/videopress/src/client/admin/components/progress-bar/index.tsx":(_,d,s)=>{"use strict";s.d(d,{Z:()=>y});var c=s("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),p=s.n(c),n=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=s.n(n),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var r=t()(o.Z,e);const i=o.Z.locals||{};var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=P=>{let{className:E,progress:f,size:j="normal"}=P;if(f==null)return null;const m={width:`${Math.max(Math.min(f,1),0)*100}%`};return(0,l.jsx)("div",{className:p()(E,i.wrapper,{[i.small]:j==="small"}),children:(0,l.jsx)("div",{className:p()(i.progress),style:m})})};a.displayName="ProgressBar";const y=a},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(_,d)=>{var s,c;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var r=typeof e;if(r==="string"||r==="number")t.push(e);else if(Array.isArray(e)){if(e.length){var i=n.apply(null,e);i&&t.push(i)}}else if(r==="object")if(e.toString===Object.prototype.toString)for(var l in e)p.call(e,l)&&e[l]&&t.push(l);else t.push(e.toString())}}return t.join(" ")}_.exports?(n.default=n,_.exports=n):(s=[],c=function(){return n}.apply(d,s),c!==void 0&&(_.exports=c))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss":(_,d,s)=>{"use strict";s.d(d,{Z:()=>e});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=s.n(c),n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(n),o=t()(p());o.push([_.id,".oFyvI2R2ev0HeVNk7jvU{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.oFyvI2R2ev0HeVNk7jvU.z1wCzLRxP7O5Q_oy9gL0{height:3px}.oFyvI2R2ev0HeVNk7jvU .QWDZG7i7cOCBHNFmz035{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"oFyvI2R2ev0HeVNk7jvU",small:"z1wCzLRxP7O5Q_oy9gL0",progress:"QWDZG7i7cOCBHNFmz035"};const e=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(_,d,s)=>{"use strict";s.d(d,{Z:()=>e});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=s.n(c),n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=s.n(n),o=t()(p());o.push([_.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),o.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const e=o}}]);})();
