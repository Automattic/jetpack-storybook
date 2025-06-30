(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8006],{"../charts/src/components/bar-chart/stories/legend.stories.tsx":(_,a,l)=>{"use strict";l.r(a),l.d(a,{AlignmentPositioning:()=>r,Default:()=>t,HorizontalBars:()=>g,VerticalOrientation:()=>i,__namedExportsOrder:()=>A,default:()=>n});var p=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=l("../charts/src/stories/legend-config.tsx"),C=l("../charts/src/components/bar-chart/bar-chart.tsx"),e=l("../charts/src/components/bar-chart/stories/sample-data.ts"),u=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import React from 'react';
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
	legendAlignmentHorizontal: 'right',
	legendAlignmentVertical: 'top',
};

export const VerticalOrientation: StoryObj< typeof BarChart > = Template.bind( {} );
VerticalOrientation.args = {
	...legendStoryArgs,
	legendOrientation: 'vertical',
	legendAlignmentHorizontal: 'right',
	legendAlignmentVertical: 'top',
};

export const HorizontalBars: StoryObj< typeof BarChart > = Template.bind( {} );
HorizontalBars.args = {
	...legendStoryArgs,
	orientation: 'horizontal',
	legendAlignmentHorizontal: 'right',
	legendAlignmentVertical: 'top',
};
`,c={Default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},AlignmentPositioning:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},VerticalOrientation:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},HorizontalBars:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}};const n={title:"JS Packages/Charts/Types/Bar Chart/Legend",component:C.A,parameters:{storySource:{source:`import React from 'react';
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
  legendAlignmentHorizontal: 'right',
  legendAlignmentVertical: 'top'
};
export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  ...legendStoryArgs,
  legendOrientation: 'vertical',
  legendAlignmentHorizontal: 'right',
  legendAlignmentVertical: 'top'
};
export const HorizontalBars = Template.bind({});
HorizontalBars.args = {
  ...legendStoryArgs,
  orientation: 'horizontal',
  legendAlignmentHorizontal: 'right',
  legendAlignmentVertical: 'top'
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"alignment-positioning":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"vertical-orientation":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"horizontal-bars":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}}},layout:"centered"},decorators:f.x,argTypes:f.r},s=h=>(0,u.jsx)(C.A,{...h}),d={data:e.A.slice(0,3),height:400,showLegend:!0,legendOrientation:"horizontal",withTooltips:!0},t=s.bind({});t.args={...d};const r=s.bind({});r.args={...d,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const i=s.bind({});i.args={...d,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const g=s.bind({});g.args={...d,orientation:"horizontal",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const A=["Default","AlignmentPositioning","VerticalOrientation","HorizontalBars"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...t.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...i.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...g.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(_,a,l)=>{"use strict";l.d(a,{r:()=>e,x:()=>u});var p=l("../charts/src/providers/theme/themes.ts"),f=l("../charts/src/providers/theme/theme-provider.tsx"),C=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:p.QI,woo:p.pk},defaultValue:void 0,table:{category:"Theme"}}},u=[(m,{args:c})=>(0,C.jsx)(f.NP,{theme:c.theme,children:(0,C.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,C.jsx)(m,{})})})];try{e.displayName="legendArgTypes",e.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:e.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{u.displayName="legendDecorator",u.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:u.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(_,a,l)=>{"use strict";l.d(a,{A:()=>C});function p(e){var u,m,c="";if(typeof e=="string"||typeof e=="number")c+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(u=0;u<o;u++)e[u]&&(m=p(e[u]))&&(c&&(c+=" "),c+=m)}else for(m in e)e[m]&&(c&&(c+=" "),c+=m);return c}function f(){for(var e,u,m=0,c="",o=arguments.length;m<o;m++)(e=arguments[m])&&(u=p(e))&&(c&&(c+=" "),c+=u);return c}const C=f},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(_,a,l)=>{var p=l("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");a.formatArgs=C,a.save=e,a.load=u,a.useColors=f,a.storage=m(),a.destroy=(()=>{let o=!1;return()=>{o||(o=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),a.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function f(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let o;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(o=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(o[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function C(o){if(o[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+o[0]+(this.useColors?"%c ":" ")+"+"+_.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;o.splice(1,0,n,"color: inherit");let s=0,d=0;o[0].replace(/%[a-zA-Z%]/g,t=>{t!=="%%"&&(s++,t==="%c"&&(d=s))}),o.splice(d,0,n)}a.log=console.debug||console.log||(()=>{});function e(o){try{o?a.storage.setItem("debug",o):a.storage.removeItem("debug")}catch{}}function u(){let o;try{o=a.storage.getItem("debug")||a.storage.getItem("DEBUG")}catch{}return!o&&typeof p<"u"&&"env"in p&&(o=p.env.DEBUG),o}function m(){try{return localStorage}catch{}}_.exports=l("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(a);const{formatters:c}=_.exports;c.j=function(o){try{return JSON.stringify(o)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(_,a,l)=>{function p(f){e.debug=e,e.default=e,e.coerce=s,e.disable=o,e.enable=m,e.enabled=n,e.humanize=l("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=d,Object.keys(f).forEach(t=>{e[t]=f[t]}),e.names=[],e.skips=[],e.formatters={};function C(t){let r=0;for(let i=0;i<t.length;i++)r=(r<<5)-r+t.charCodeAt(i),r|=0;return e.colors[Math.abs(r)%e.colors.length]}e.selectColor=C;function e(t){let r,i=null,g,A;function h(...y){if(!h.enabled)return;const b=h,F=Number(new Date),T=F-(r||F);b.diff=T,b.prev=r,b.curr=F,r=F,y[0]=e.coerce(y[0]),typeof y[0]!="string"&&y.unshift("%O");let O=0;y[0]=y[0].replace(/%([a-zA-Z%])/g,(B,x)=>{if(B==="%%")return"%";O++;const v=e.formatters[x];if(typeof v=="function"){const S=y[O];B=v.call(b,S),y.splice(O,1),O--}return B}),e.formatArgs.call(b,y),(b.log||e.log).apply(b,y)}return h.namespace=t,h.useColors=e.useColors(),h.color=e.selectColor(t),h.extend=u,h.destroy=e.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>i!==null?i:(g!==e.namespaces&&(g=e.namespaces,A=e.enabled(t)),A),set:y=>{i=y}}),typeof e.init=="function"&&e.init(h),h}function u(t,r){const i=e(this.namespace+(typeof r>"u"?":":r)+t);return i.log=this.log,i}function m(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=(typeof t=="string"?t:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const i of r)i[0]==="-"?e.skips.push(i.slice(1)):e.names.push(i)}function c(t,r){let i=0,g=0,A=-1,h=0;for(;i<t.length;)if(g<r.length&&(r[g]===t[i]||r[g]==="*"))r[g]==="*"?(A=g,h=i,g++):(i++,g++);else if(A!==-1)g=A+1,h++,i=h;else return!1;for(;g<r.length&&r[g]==="*";)g++;return g===r.length}function o(){const t=[...e.names,...e.skips.map(r=>"-"+r)].join(",");return e.enable(""),t}function n(t){for(const r of e.skips)if(c(t,r))return!1;for(const r of e.names)if(c(t,r))return!0;return!1}function s(t){return t instanceof Error?t.stack||t.message:t}function d(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}_.exports=p},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":_=>{var a=1e3,l=a*60,p=l*60,f=p*24,C=f*7,e=f*365.25;_.exports=function(n,s){s=s||{};var d=typeof n;if(d==="string"&&n.length>0)return u(n);if(d==="number"&&isFinite(n))return s.long?c(n):m(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))};function u(n){if(n=String(n),!(n.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(s){var d=parseFloat(s[1]),t=(s[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return d*e;case"weeks":case"week":case"w":return d*C;case"days":case"day":case"d":return d*f;case"hours":case"hour":case"hrs":case"hr":case"h":return d*p;case"minutes":case"minute":case"mins":case"min":case"m":return d*l;case"seconds":case"second":case"secs":case"sec":case"s":return d*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return d;default:return}}}}function m(n){var s=Math.abs(n);return s>=f?Math.round(n/f)+"d":s>=p?Math.round(n/p)+"h":s>=l?Math.round(n/l)+"m":s>=a?Math.round(n/a)+"s":n+"ms"}function c(n){var s=Math.abs(n);return s>=f?o(n,s,f,"day"):s>=p?o(n,s,p,"hour"):s>=l?o(n,s,l,"minute"):s>=a?o(n,s,a,"second"):n+" ms"}function o(n,s,d,t){var r=s>=d*1.5;return Math.round(n/d)+" "+t+(r?"s":"")}}}]);
