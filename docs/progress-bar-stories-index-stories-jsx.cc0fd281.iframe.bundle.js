(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8315],{"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(p,_,s)=>{var B,x,b,w,S,h,E,L,C;"use strict";s.r(_),s.d(_,{Complete:()=>i,Halfway:()=>c,Initial:()=>d,__namedExportsOrder:()=>O,default:()=>R});var m=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=s.n(u),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=s.n(r),n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var y=t()(n.Z,e);const l=n.Z.locals||{};var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=({className:a,total:f=100,value:P})=>{if(P==null)return null;const I=Math.min(Math.round(P/f*100),100),M={width:`${I}%`};return(0,o.jsxs)("div",{className:g()(a,l["progress-bar"]),children:[(0,o.jsx)("div",{className:l["progress-bar__wrapper"],children:(0,o.jsx)("div",{"aria-valuemax":f,"aria-valuemin":0,"aria-valuenow":Math.min(P,f),className:l["progress-bar__bar"],role:"progressbar",style:M})}),(0,o.jsx)("p",{className:l["progress-bar__percent"],children:`${I}%`})]})};v.displayName="ProgressBar";const j=v;v.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@returns {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};var A=`import React from 'react';
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
`,N={Initial:{startLoc:{col:23,line:19},endLoc:{col:58,line:19},startBody:{col:23,line:19},endBody:{col:58,line:19}},Halfway:{startLoc:{col:23,line:24},endLoc:{col:58,line:24},startBody:{col:23,line:24},endBody:{col:58,line:24}},Complete:{startLoc:{col:24,line:29},endLoc:{col:59,line:29},startBody:{col:24,line:29},endBody:{col:59,line:29}}};const R={title:"Plugins/Protect/Progress Bar",component:j,parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{initial:{startLoc:{col:23,line:19},endLoc:{col:58,line:19},startBody:{col:23,line:19},endBody:{col:58,line:19}},halfway:{startLoc:{col:23,line:24},endLoc:{col:58,line:24},startBody:{col:23,line:24},endBody:{col:58,line:24}},complete:{startLoc:{col:24,line:29},endLoc:{col:59,line:29},startBody:{col:24,line:29},endBody:{col:59,line:29}}}},layout:"centered"},decorators:[a=>(0,o.jsx)("div",{style:{width:480},children:(0,o.jsx)(a,{})})]},d=a=>(0,o.jsx)(j,{...a});d.displayName="Initial",d.args={value:0,total:100};const c=a=>(0,o.jsx)(j,{...a});c.displayName="Halfway",c.args={value:50,total:100};const i=a=>(0,o.jsx)(j,{...a});i.displayName="Complete",i.args={value:100,total:100},d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}},c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}},i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(C=(L=i.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const O=["Initial","Halfway","Complete"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,_)=>{var s,m;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,g="[native code]";function r(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var y=typeof e;if(y==="string"||y==="number")t.push(e);else if(Array.isArray(e)){if(e.length){var l=r.apply(null,e);l&&t.push(l)}}else if(y==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var o in e)u.call(e,o)&&e[o]&&t.push(o)}}}return t.join(" ")}p.exports?(r.default=r,p.exports=r):(s=[],m=function(){return r}.apply(_,s),m!==void 0&&(p.exports=m))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(p,_,s)=>{"use strict";s.d(_,{Z:()=>n});var m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=s.n(m),g=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(g),t=r()(u());t.push([p.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),t.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const n=t}}]);})();
