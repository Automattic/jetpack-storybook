(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8006],{"../charts/src/components/bar-chart/stories/legend.stories.tsx":(_,i,l)=>{"use strict";l.r(i),l.d(i,{AlignmentPositioning:()=>r,Default:()=>n,HorizontalBars:()=>d,VerticalOrientation:()=>a,__namedExportsOrder:()=>A,default:()=>t});var m=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=l("../charts/src/stories/legend-config.tsx"),y=l("../charts/src/components/bar-chart/bar-chart.tsx"),e=l("../charts/src/components/bar-chart/stories/sample-data.ts"),p=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),C=`import React from 'react';
import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
import { BarChart } from '../../bar-chart';
import sampleData from './sample-data';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta: Meta< typeof BarChart > = {
	title: 'JS Packages/Charts/Types/Bar Chart/Legend',
	component: BarChart,
	parameters: {
		layout: 'centered',
	},
	decorators: legendDecorator,
	argTypes: legendArgTypes,
} satisfies Meta< typeof BarChart >;

export default meta;

const Template: StoryFn< typeof BarChart > = args => <BarChart { ...args } />;

const legendStoryArgs = {
	data: sampleData.slice( 0, 3 ), // Use first 3 countries for cleaner legend
	height: 400,
	showLegend: true,
	legendOrientation: 'horizontal' as const,
	withTooltips: true,
};

export const Default: StoryObj< typeof BarChart > = Template.bind( {} );
Default.args = {
	...legendStoryArgs,
};

export const AlignmentPositioning: StoryObj< typeof BarChart > = Template.bind( {} );
AlignmentPositioning.args = {
	...legendStoryArgs,
	legendAlign: 'right',
	legendAlignmentVertical: 'top',
};

export const VerticalOrientation: StoryObj< typeof BarChart > = Template.bind( {} );
VerticalOrientation.args = {
	...legendStoryArgs,
	legendOrientation: 'vertical',
	legendAlign: 'right',
	legendAlignmentVertical: 'top',
};

export const HorizontalBars: StoryObj< typeof BarChart > = Template.bind( {} );
HorizontalBars.args = {
	...legendStoryArgs,
	orientation: 'horizontal',
	legendAlign: 'right',
	legendAlignmentVertical: 'top',
};
`,h={Default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},AlignmentPositioning:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},VerticalOrientation:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},HorizontalBars:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}};const t={title:"JS Packages/Charts/Types/Bar Chart/Legend",component:y.A,parameters:{storySource:{source:`import React from 'react';
import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
import { BarChart } from '../../bar-chart';
import sampleData from './sample-data';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Charts/Types/Bar Chart/Legend',
  component: BarChart,
  parameters: {
    layout: 'centered'
  },
  decorators: legendDecorator,
  argTypes: legendArgTypes
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(BarChart, {
  ...args
});
const legendStoryArgs = {
  data: sampleData.slice(0, 3),
  // Use first 3 countries for cleaner legend
  height: 400,
  showLegend: true,
  legendOrientation: 'horizontal',
  withTooltips: true
};
export const Default = Template.bind({});
Default.args = {
  ...legendStoryArgs
};
export const AlignmentPositioning = Template.bind({});
AlignmentPositioning.args = {
  ...legendStoryArgs,
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};
export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  ...legendStoryArgs,
  legendOrientation: 'vertical',
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};
export const HorizontalBars = Template.bind({});
HorizontalBars.args = {
  ...legendStoryArgs,
  orientation: 'horizontal',
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"alignment-positioning":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"vertical-orientation":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"horizontal-bars":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}}},layout:"centered"},decorators:g.x,argTypes:g.r},o=u=>(0,p.jsx)(y.A,{...u}),c={data:e.A.slice(0,3),height:400,showLegend:!0,legendOrientation:"horizontal",withTooltips:!0},n=o.bind({});n.args={...c};const r=o.bind({});r.args={...c,legendAlign:"right",legendAlignmentVertical:"top"};const a=o.bind({});a.args={...c,legendOrientation:"vertical",legendAlign:"right",legendAlignmentVertical:"top"};const d=o.bind({});d.args={...c,orientation:"horizontal",legendAlign:"right",legendAlignmentVertical:"top"};const A=["Default","AlignmentPositioning","VerticalOrientation","HorizontalBars"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...d.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(_,i,l)=>{"use strict";l.d(i,{r:()=>p,x:()=>C});var m=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=l("../charts/src/providers/theme/themes.ts"),y=l("../charts/src/providers/theme/theme-provider.tsx"),e=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p={legendAlignmentHorizontal:{control:"select",options:["left","center","right"]},legendAlignmentVertical:{control:"select",options:["top","bottom"]},legendOrientation:{control:"select",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:g.QI,woo:g.pk},defaultValue:void 0}},C=[(h,{args:s})=>(0,e.jsx)(y.NP,{theme:s.theme,children:(0,e.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,e.jsx)(h,{})})})];try{p.displayName="legendArgTypes",p.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{C.displayName="legendDecorator",C.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:C.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(_,i,l)=>{var m=l("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");i.formatArgs=y,i.save=e,i.load=p,i.useColors=g,i.storage=C(),i.destroy=(()=>{let s=!1;return()=>{s||(s=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function g(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let s;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(s=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(s[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function y(s){if(s[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+s[0]+(this.useColors?"%c ":" ")+"+"+_.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;s.splice(1,0,t,"color: inherit");let o=0,c=0;s[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(o++,n==="%c"&&(c=o))}),s.splice(c,0,t)}i.log=console.debug||console.log||(()=>{});function e(s){try{s?i.storage.setItem("debug",s):i.storage.removeItem("debug")}catch{}}function p(){let s;try{s=i.storage.getItem("debug")||i.storage.getItem("DEBUG")}catch{}return!s&&typeof m<"u"&&"env"in m&&(s=m.env.DEBUG),s}function C(){try{return localStorage}catch{}}_.exports=l("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(i);const{formatters:h}=_.exports;h.j=function(s){try{return JSON.stringify(s)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(_,i,l)=>{function m(g){e.debug=e,e.default=e,e.coerce=o,e.disable=s,e.enable=C,e.enabled=t,e.humanize=l("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=c,Object.keys(g).forEach(n=>{e[n]=g[n]}),e.names=[],e.skips=[],e.formatters={};function y(n){let r=0;for(let a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0;return e.colors[Math.abs(r)%e.colors.length]}e.selectColor=y;function e(n){let r,a=null,d,A;function u(...f){if(!u.enabled)return;const F=u,b=Number(new Date),T=b-(r||b);F.diff=T,F.prev=r,F.curr=b,r=b,f[0]=e.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");let O=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,(B,x)=>{if(B==="%%")return"%";O++;const v=e.formatters[x];if(typeof v=="function"){const S=f[O];B=v.call(F,S),f.splice(O,1),O--}return B}),e.formatArgs.call(F,f),(F.log||e.log).apply(F,f)}return u.namespace=n,u.useColors=e.useColors(),u.color=e.selectColor(n),u.extend=p,u.destroy=e.destroy,Object.defineProperty(u,"enabled",{enumerable:!0,configurable:!1,get:()=>a!==null?a:(d!==e.namespaces&&(d=e.namespaces,A=e.enabled(n)),A),set:f=>{a=f}}),typeof e.init=="function"&&e.init(u),u}function p(n,r){const a=e(this.namespace+(typeof r>"u"?":":r)+n);return a.log=this.log,a}function C(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];const r=(typeof n=="string"?n:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const a of r)a[0]==="-"?e.skips.push(a.slice(1)):e.names.push(a)}function h(n,r){let a=0,d=0,A=-1,u=0;for(;a<n.length;)if(d<r.length&&(r[d]===n[a]||r[d]==="*"))r[d]==="*"?(A=d,u=a,d++):(a++,d++);else if(A!==-1)d=A+1,u++,a=u;else return!1;for(;d<r.length&&r[d]==="*";)d++;return d===r.length}function s(){const n=[...e.names,...e.skips.map(r=>"-"+r)].join(",");return e.enable(""),n}function t(n){for(const r of e.skips)if(h(n,r))return!1;for(const r of e.names)if(h(n,r))return!0;return!1}function o(n){return n instanceof Error?n.stack||n.message:n}function c(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}_.exports=m},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":_=>{var i=1e3,l=i*60,m=l*60,g=m*24,y=g*7,e=g*365.25;_.exports=function(t,o){o=o||{};var c=typeof t;if(c==="string"&&t.length>0)return p(t);if(c==="number"&&isFinite(t))return o.long?h(t):C(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function p(t){if(t=String(t),!(t.length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(o){var c=parseFloat(o[1]),n=(o[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return c*e;case"weeks":case"week":case"w":return c*y;case"days":case"day":case"d":return c*g;case"hours":case"hour":case"hrs":case"hr":case"h":return c*m;case"minutes":case"minute":case"mins":case"min":case"m":return c*l;case"seconds":case"second":case"secs":case"sec":case"s":return c*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function C(t){var o=Math.abs(t);return o>=g?Math.round(t/g)+"d":o>=m?Math.round(t/m)+"h":o>=l?Math.round(t/l)+"m":o>=i?Math.round(t/i)+"s":t+"ms"}function h(t){var o=Math.abs(t);return o>=g?s(t,o,g,"day"):o>=m?s(t,o,m,"hour"):o>=l?s(t,o,l,"minute"):o>=i?s(t,o,i,"second"):t+" ms"}function s(t,o,c,n){var r=o>=c*1.5;return Math.round(t/c)+" "+n+(r?"s":"")}}}]);
