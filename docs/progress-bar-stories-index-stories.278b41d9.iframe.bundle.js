(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9469,613,8315],{"../components/components/progress-bar/stories/index.stories.tsx":(p,t,s)=>{var d,r,P;"use strict";s.r(t),s.d(t,{__namedExportsOrder:()=>_,_default:()=>e,default:()=>o});var l=s("../components/components/progress-bar/index.tsx"),c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import ProgressBar from '..';
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
`,n={_default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
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
};`,locationsMap:{default:{startLoc:{col:53,line:7},endLoc:{col:1,line:9},startBody:{col:53,line:7},endBody:{col:1,line:9}}}}},title:"JS Packages/Components/Progress Bar",component:l.Z},a=f=>(0,c.jsx)(l.Z,{...f});a.displayName="Template";const e=a.bind({});e.args={progress:.5},e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(P=(r=e.parameters)==null?void 0:r.docs)==null?void 0:P.source}}};const _=["_default"]},"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(p,t,s)=>{var E,b,C,w,h,I,L,M,O;"use strict";s.r(t),s.d(t,{Complete:()=>i,Halfway:()=>g,Initial:()=>m,__namedExportsOrder:()=>A,default:()=>j});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=s.n(c),n=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(n),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var _=o()(a.Z,e);const d=a.Z.locals||{};var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=y=>{let{className:N,total:v=100,value:B}=y;if(B==null)return null;const T=Math.min(Math.round(B/v*100),100),R={width:`${T}%`};return(0,r.jsxs)("div",{className:u()(N,d["progress-bar"]),children:[(0,r.jsx)("div",{className:d["progress-bar__wrapper"],children:(0,r.jsx)("div",{"aria-valuemax":v,"aria-valuemin":0,"aria-valuenow":Math.min(B,v),className:d["progress-bar__bar"],role:"progressbar",style:R})}),(0,r.jsx)("p",{className:d["progress-bar__percent"],children:`${T}%`})]})};P.displayName="ProgressBar",P.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@returns {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};const f=P;var S=`import React from 'react';
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
`,x={Initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},Halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},Complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}};const j={title:"Plugins/Protect/Progress Bar",component:f,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}}},layout:"centered"},decorators:[y=>(0,r.jsx)("div",{style:{width:480},children:(0,r.jsx)(y,{})})]},m=y=>(0,r.jsx)(f,{...y});m.displayName="Initial",m.args={value:0,total:100};const g=y=>(0,r.jsx)(f,{...y});g.displayName="Halfway",g.args={value:50,total:100};const i=y=>(0,r.jsx)(f,{...y});i.displayName="Complete",i.args={value:100,total:100},m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}},g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(I=(h=g.parameters)==null?void 0:h.docs)==null?void 0:I.source}}},i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const A=["Initial","Halfway","Complete"];m.__docgenInfo={description:"",methods:[],displayName:"Initial"},g.__docgenInfo={description:"",methods:[],displayName:"Halfway"},i.__docgenInfo={description:"",methods:[],displayName:"Complete"}},"../components/components/progress-bar/index.tsx":(p,t,s)=>{"use strict";s.d(t,{Z:()=>P});var l=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=s.n(l),u=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=s.n(u),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),a={};a.insert="head",a.singleton=!1;var e=n()(o.Z,a);const _=o.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=f=>{let{className:S,progressClassName:x,progress:j,size:m="normal"}=f;if(j==null)return null;const i={width:`${Math.max(Math.min(j,1),0)*100}%`};return(0,d.jsx)("div",{className:c()(S,_.wrapper,{[_.small]:m==="small"}),children:(0,d.jsx)("div",{className:c()(x,_.progress),style:i})})};r.displayName="ProgressBar";const P=r},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,t)=>{var s,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,u="[native code]";function n(){for(var o=[],a=0;a<arguments.length;a++){var e=arguments[a];if(e){var _=typeof e;if(_==="string"||_==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var d=n.apply(null,e);d&&o.push(d)}}else if(_==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var r in e)c.call(e,r)&&e[r]&&o.push(r)}}}return o.join(" ")}p.exports?(n.default=n,p.exports=n):(s=[],l=function(){return n}.apply(t,s),l!==void 0&&(p.exports=l))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(p,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=s.n(u),o=n()(c());o.push([p.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),o.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const a=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(p,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=s.n(u),o=n()(c());o.push([p.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),o.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const a=o}}]);})();
