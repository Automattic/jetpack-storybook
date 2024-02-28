(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9469,613,8315],{"../components/components/progress-bar/stories/index.stories.tsx":(_,n,s)=>{var d,r,g;"use strict";s.r(n),s.d(n,{__namedExportsOrder:()=>p,_default:()=>e,default:()=>o});var l=s("../components/components/progress-bar/index.tsx"),c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import ProgressBar from '..';
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
`,a={_default:{startLoc:{col:55,line:9},endLoc:{col:1,line:11},startBody:{col:55,line:9},endBody:{col:1,line:11}}};const o={parameters:{storySource:{source:`import ProgressBar from '..';
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
`,locationsMap:{default:{startLoc:{col:55,line:9},endLoc:{col:1,line:11},startBody:{col:55,line:9},endBody:{col:1,line:11}}}}},title:"JS Packages/Components/Progress Bar",component:l.Z},t=y=>(0,c.jsx)(l.Z,{...y});t.displayName="Template";const e=t.bind({});e.args={progress:.5},e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <ProgressBar {...args} />;
}`,...(g=(r=e.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const p=["_default"]},"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(_,n,s)=>{var S,b,h,w,C,L,M,O,T;"use strict";s.r(n),s.d(n,{Complete:()=>P,Halfway:()=>i,Initial:()=>j,__namedExportsOrder:()=>A,default:()=>v});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=s.n(c),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(a),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var p=o()(t.Z,e);const d=t.Z.locals||{};var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=({className:u,total:B=100,value:x})=>{if(x==null)return null;const I=Math.min(Math.round(x/B*100),100),R={width:`${I}%`};return(0,r.jsxs)("div",{className:m()(u,d["progress-bar"]),children:[(0,r.jsx)("div",{className:d["progress-bar__wrapper"],children:(0,r.jsx)("div",{"aria-valuemax":B,"aria-valuemin":0,"aria-valuenow":Math.min(x,B),className:d["progress-bar__bar"],role:"progressbar",style:R})}),(0,r.jsx)("p",{className:d["progress-bar__percent"],children:`${I}%`})]})};g.displayName="ProgressBar";const y=g;g.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@returns {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};var E=`import React from 'react';
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
`,f={Initial:{startLoc:{col:23,line:19},endLoc:{col:58,line:19},startBody:{col:23,line:19},endBody:{col:58,line:19}},Halfway:{startLoc:{col:23,line:24},endLoc:{col:58,line:24},startBody:{col:23,line:24},endBody:{col:58,line:24}},Complete:{startLoc:{col:24,line:29},endLoc:{col:59,line:29},startBody:{col:24,line:29},endBody:{col:59,line:29}}};const v={title:"Plugins/Protect/Progress Bar",component:y,parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{initial:{startLoc:{col:23,line:19},endLoc:{col:58,line:19},startBody:{col:23,line:19},endBody:{col:58,line:19}},halfway:{startLoc:{col:23,line:24},endLoc:{col:58,line:24},startBody:{col:23,line:24},endBody:{col:58,line:24}},complete:{startLoc:{col:24,line:29},endLoc:{col:59,line:29},startBody:{col:24,line:29},endBody:{col:59,line:29}}}},layout:"centered"},decorators:[u=>(0,r.jsx)("div",{style:{width:480},children:(0,r.jsx)(u,{})})]},j=u=>(0,r.jsx)(y,{...u});j.displayName="Initial",j.args={value:0,total:100};const i=u=>(0,r.jsx)(y,{...u});i.displayName="Halfway",i.args={value:50,total:100};const P=u=>(0,r.jsx)(y,{...u});P.displayName="Complete",P.args={value:100,total:100},j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(h=(b=j.parameters)==null?void 0:b.docs)==null?void 0:h.source}}},i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}},P.parameters={...P.parameters,docs:{...(M=P.parameters)==null?void 0:M.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(T=(O=P.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const A=["Initial","Halfway","Complete"]},"../components/components/progress-bar/index.tsx":(_,n,s)=>{"use strict";s.d(n,{Z:()=>g});var l=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=s.n(l),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(m),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),t={};t.insert="head",t.singleton=!1;var e=a()(o.Z,t);const p=o.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=({className:y,progressClassName:E,progress:f,size:v="normal"})=>{if(f==null)return null;const i={width:`${Math.max(Math.min(f,1),0)*100}%`};return(0,d.jsx)("div",{className:c()(y,p.wrapper,{[p.small]:v==="small"}),children:(0,d.jsx)("div",{className:c()(E,p.progress),style:i})})};r.displayName="ProgressBar";const g=r},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,n)=>{var s,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,m="[native code]";function a(){for(var o=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var p=typeof e;if(p==="string"||p==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var d=a.apply(null,e);d&&o.push(d)}}else if(p==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var r in e)c.call(e,r)&&e[r]&&o.push(r)}}}return o.join(" ")}_.exports?(a.default=a,_.exports=a):(s=[],l=function(){return a}.apply(n,s),l!==void 0&&(_.exports=l))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(_,n,s)=>{"use strict";s.d(n,{Z:()=>t});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(m),o=a()(c());o.push([_.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-black);min-width:12px}",""]),o.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const t=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(_,n,s)=>{"use strict";s.d(n,{Z:()=>t});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(m),o=a()(c());o.push([_.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),o.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const t=o}}]);})();
