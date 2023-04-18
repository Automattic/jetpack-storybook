(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8315],{"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(m,_,s)=>{var B,w,x,b,h,S,E,I,C;"use strict";s.r(_),s.d(_,{Complete:()=>p,Halfway:()=>c,Initial:()=>d,__namedExportsOrder:()=>R,default:()=>N});var u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=s("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),o=s.n(g),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(r),e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),i={};i.insert="head",i.singleton=!1;var f=a()(e.Z,i);const l=e.Z.locals||{};var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const j=n=>{let{className:O,total:v=100,value:P}=n;if(P==null)return null;const L=Math.min(Math.round(P/v*100),100),M={width:`${L}%`};return(0,t.jsxs)("div",{className:o()(O,l["progress-bar"]),children:[(0,t.jsx)("div",{className:l["progress-bar__wrapper"],children:(0,t.jsx)("div",{"aria-valuemax":v,"aria-valuemin":0,"aria-valuenow":Math.min(P,v),className:l["progress-bar__bar"],role:"progressbar",style:M})}),(0,t.jsx)("p",{className:l["progress-bar__percent"],children:`${L}%`})]})};j.displayName="ProgressBar",j.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@returns {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};const y=j;var A=`import React from 'react';
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
`,T={Initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},Halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},Complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}};const N={title:"Plugins/Protect/Progress Bar",component:y,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}}},layout:"centered"},decorators:[n=>(0,t.jsx)("div",{style:{width:480},children:(0,t.jsx)(n,{})})]},d=n=>(0,t.jsx)(y,{...n});d.displayName="Initial",d.args={value:0,total:100};const c=n=>(0,t.jsx)(y,{...n});c.displayName="Halfway",c.args={value:50,total:100};const p=n=>(0,t.jsx)(y,{...n});p.displayName="Complete",p.args={value:100,total:100},d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}},c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}},p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const R=["Initial","Halfway","Complete"];d.__docgenInfo={description:"",methods:[],displayName:"Initial"},c.__docgenInfo={description:"",methods:[],displayName:"Halfway"},p.__docgenInfo={description:"",methods:[],displayName:"Complete"}},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(m,_)=>{var s,u;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var g={}.hasOwnProperty;function o(){for(var r=[],a=0;a<arguments.length;a++){var e=arguments[a];if(e){var i=typeof e;if(i==="string"||i==="number")r.push(e);else if(Array.isArray(e)){if(e.length){var f=o.apply(null,e);f&&r.push(f)}}else if(i==="object")if(e.toString===Object.prototype.toString)for(var l in e)g.call(e,l)&&e[l]&&r.push(l);else r.push(e.toString())}}return r.join(" ")}m.exports?(o.default=o,m.exports=o):(s=[],u=function(){return o}.apply(_,s),u!==void 0&&(m.exports=u))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(m,_,s)=>{"use strict";s.d(_,{Z:()=>e});var u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=s.n(u),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(o),a=r()(g());a.push([m.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),a.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const e=a}}]);})();
