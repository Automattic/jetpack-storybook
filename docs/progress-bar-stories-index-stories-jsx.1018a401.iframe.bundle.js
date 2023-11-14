(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8315],{"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(p,m,s)=>{var B,w,x,b,S,h,E,I,C;"use strict";s.r(m),s.d(m,{Complete:()=>c,Halfway:()=>d,Initial:()=>l,__namedExportsOrder:()=>N,default:()=>R});var _=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=s.n(u),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(a),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),e={};e.insert="head",e.singleton=!1;var y=r()(t.Z,e);const i=t.Z.locals||{};var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const j=({className:n,total:v=100,value:P})=>{if(P==null)return null;const L=Math.min(Math.round(P/v*100),100),O={width:`${L}%`};return(0,o.jsxs)("div",{className:g()(n,i["progress-bar"]),children:[(0,o.jsx)("div",{className:i["progress-bar__wrapper"],children:(0,o.jsx)("div",{"aria-valuemax":v,"aria-valuemin":0,"aria-valuenow":Math.min(P,v),className:i["progress-bar__bar"],role:"progressbar",style:O})}),(0,o.jsx)("p",{className:i["progress-bar__percent"],children:`${L}%`})]})};j.displayName="ProgressBar",j.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@returns {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};const f=j;var M=`import React from 'react';
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
`,A={Initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},Halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},Complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}};const R={title:"Plugins/Protect/Progress Bar",component:f,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{initial:{startLoc:{col:23,line:15},endLoc:{col:56,line:15},startBody:{col:23,line:15},endBody:{col:56,line:15}},halfway:{startLoc:{col:23,line:20},endLoc:{col:56,line:20},startBody:{col:23,line:20},endBody:{col:56,line:20}},complete:{startLoc:{col:24,line:25},endLoc:{col:57,line:25},startBody:{col:24,line:25},endBody:{col:57,line:25}}}},layout:"centered"},decorators:[n=>(0,o.jsx)("div",{style:{width:480},children:(0,o.jsx)(n,{})})]},l=n=>(0,o.jsx)(f,{...n});l.displayName="Initial",l.args={value:0,total:100};const d=n=>(0,o.jsx)(f,{...n});d.displayName="Halfway",d.args={value:50,total:100};const c=n=>(0,o.jsx)(f,{...n});c.displayName="Complete",c.args={value:100,total:100},l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}},d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(h=(S=d.parameters)==null?void 0:S.docs)==null?void 0:h.source}}},c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const N=["Initial","Halfway","Complete"];l.__docgenInfo={description:"",methods:[],displayName:"Initial"},d.__docgenInfo={description:"",methods:[],displayName:"Halfway"},c.__docgenInfo={description:"",methods:[],displayName:"Complete"}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,m)=>{var s,_;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,g="[native code]";function a(){for(var r=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var y=typeof e;if(y==="string"||y==="number")r.push(e);else if(Array.isArray(e)){if(e.length){var i=a.apply(null,e);i&&r.push(i)}}else if(y==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){r.push(e.toString());continue}for(var o in e)u.call(e,o)&&e[o]&&r.push(o)}}}return r.join(" ")}p.exports?(a.default=a,p.exports=a):(s=[],_=function(){return a}.apply(m,s),_!==void 0&&(p.exports=_))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(p,m,s)=>{"use strict";s.d(m,{Z:()=>t});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=s.n(_),g=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(g),r=a()(u());r.push([p.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),r.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const t=r}}]);})();
