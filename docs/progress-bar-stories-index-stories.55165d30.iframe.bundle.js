(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9469,8315,613],{"../../packages/videopress/src/client/admin/components/progress-bar/stories/index.stories.tsx":(p,t,s)=>{var d,r,y;"use strict";s.r(t),s.d(t,{__namedExportsOrder:()=>_,_default:()=>e,default:()=>o});var l=s("../../packages/videopress/src/client/admin/components/progress-bar/index.tsx"),c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=`import ProgressBar from '..';
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
`,n={_default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"Packages/VideoPress/Progress Bar",component:l.Z},a=v=>(0,c.jsx)(l.Z,{...v});a.displayName="Template";const e=a.bind({});e.args={progress:.5},e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(y=(r=e.parameters)==null?void 0:r.docs)==null?void 0:y.source}}};const _=["_default"]},"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(p,t,s)=>{var S,b,h,C,w,O,I,L,M;"use strict";s.r(t),s.d(t,{Complete:()=>P,Halfway:()=>m,Initial:()=>u,__namedExportsOrder:()=>R,default:()=>j});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=s.n(c),n=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(n),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var _=o()(a.Z,e);const d=a.Z.locals||{};var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const y=g=>{let{className:N,total:B=100,value:x}=g;if(x==null)return null;const T=Math.min(Math.round(x/B*100),100),k={width:`${T}%`};return(0,r.jsxs)("div",{className:i()(N,d["progress-bar"]),children:[(0,r.jsx)("div",{className:d["progress-bar__wrapper"],children:(0,r.jsx)("div",{"aria-valuemax":B,"aria-valuemin":0,"aria-valuenow":Math.min(x,B),className:d["progress-bar__bar"],role:"progressbar",style:k})}),(0,r.jsx)("p",{className:d["progress-bar__percent"],children:`${T}%`})]})};y.displayName="ProgressBar",y.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@returns {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};const v=y;var E=`import React from 'react';
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
`,f={Initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},Halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},Complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}};const j={title:"Plugins/Protect/Progress Bar",component:v,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}}},layout:"centered"},decorators:[g=>(0,r.jsx)("div",{style:{width:480},children:(0,r.jsx)(g,{})})]},u=g=>(0,r.jsx)(v,{...g});u.displayName="Initial",u.args={value:0,total:100};const m=g=>(0,r.jsx)(v,{...g});m.displayName="Halfway",m.args={value:50,total:100};const P=g=>(0,r.jsx)(v,{...g});P.displayName="Complete",P.args={value:100,total:100},u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(h=(b=u.parameters)==null?void 0:b.docs)==null?void 0:h.source}}},m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source}}},P.parameters={...P.parameters,docs:{...(I=P.parameters)==null?void 0:I.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(M=(L=P.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const R=["Initial","Halfway","Complete"];u.__docgenInfo={description:"",methods:[],displayName:"Initial"},m.__docgenInfo={description:"",methods:[],displayName:"Halfway"},P.__docgenInfo={description:"",methods:[],displayName:"Complete"}},"../../packages/videopress/src/client/admin/components/progress-bar/index.tsx":(p,t,s)=>{"use strict";s.d(t,{Z:()=>y});var l=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=s.n(l),i=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=s.n(i),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss"),a={};a.insert="head",a.singleton=!1;var e=n()(o.Z,a);const _=o.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=v=>{let{className:E,progress:f,size:j="normal"}=v;if(f==null)return null;const m={width:`${Math.max(Math.min(f,1),0)*100}%`};return(0,d.jsx)("div",{className:c()(E,_.wrapper,{[_.small]:j==="small"}),children:(0,d.jsx)("div",{className:c()(_.progress),style:m})})};r.displayName="ProgressBar";const y=r},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,t)=>{var s,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,i="[native code]";function n(){for(var o=[],a=0;a<arguments.length;a++){var e=arguments[a];if(e){var _=typeof e;if(_==="string"||_==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var d=n.apply(null,e);d&&o.push(d)}}else if(_==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var r in e)c.call(e,r)&&e[r]&&o.push(r)}}}return o.join(" ")}p.exports?(n.default=n,p.exports=n):(s=[],l=function(){return n}.apply(t,s),l!==void 0&&(p.exports=l))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/progress-bar/style.module.scss":(p,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=s.n(i),o=n()(c());o.push([p.id,".oFyvI2R2ev0HeVNk7jvU{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.oFyvI2R2ev0HeVNk7jvU.z1wCzLRxP7O5Q_oy9gL0{height:3px}.oFyvI2R2ev0HeVNk7jvU .QWDZG7i7cOCBHNFmz035{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"oFyvI2R2ev0HeVNk7jvU",small:"z1wCzLRxP7O5Q_oy9gL0",progress:"QWDZG7i7cOCBHNFmz035"};const a=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(p,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=s.n(i),o=n()(c());o.push([p.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),o.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const a=o}}]);})();
