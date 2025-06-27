(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8006],{"../charts/src/components/bar-chart/stories/legend.stories.tsx":(y,i,l)=>{"use strict";l.r(i),l.d(i,{AlignmentPositioning:()=>r,Default:()=>t,HorizontalBars:()=>d,VerticalOrientation:()=>a,__namedExportsOrder:()=>A,default:()=>n});var u=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=l("../charts/src/stories/legend-config.tsx"),p=l("../charts/src/components/bar-chart/bar-chart.tsx"),e=l("../charts/src/components/bar-chart/stories/sample-data.ts"),f=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),C=`import React from 'react';
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
`,_={Default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},AlignmentPositioning:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},VerticalOrientation:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},HorizontalBars:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}};const n={title:"JS Packages/Charts/Types/Bar Chart/Legend",component:p.A,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"alignment-positioning":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"vertical-orientation":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},"horizontal-bars":{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}}},layout:"centered"},decorators:g.x,argTypes:g.r},o=m=>(0,f.jsx)(p.A,{...m}),c={data:e.A.slice(0,3),height:400,showLegend:!0,legendOrientation:"horizontal",withTooltips:!0},t=o.bind({});t.args={...c};const r=o.bind({});r.args={...c,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const a=o.bind({});a.args={...c,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const d=o.bind({});d.args={...c,orientation:"horizontal",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const A=["Default","AlignmentPositioning","VerticalOrientation","HorizontalBars"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...t.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...d.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(y,i,l)=>{"use strict";l.d(i,{r:()=>e,x:()=>f});var u=l("../charts/src/providers/theme/themes.ts"),g=l("../charts/src/providers/theme/theme-provider.tsx"),p=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:u.QI,woo:u.pk},defaultValue:void 0,table:{category:"Theme"}}},f=[(C,{args:_})=>(0,p.jsx)(g.NP,{theme:_.theme,children:(0,p.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,p.jsx)(C,{})})})];try{e.displayName="legendArgTypes",e.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:e.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{f.displayName="legendDecorator",f.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:f.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(y,i,l)=>{var u=l("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");i.formatArgs=p,i.save=e,i.load=f,i.useColors=g,i.storage=C(),i.destroy=(()=>{let s=!1;return()=>{s||(s=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function g(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let s;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(s=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(s[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function p(s){if(s[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+s[0]+(this.useColors?"%c ":" ")+"+"+y.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;s.splice(1,0,n,"color: inherit");let o=0,c=0;s[0].replace(/%[a-zA-Z%]/g,t=>{t!=="%%"&&(o++,t==="%c"&&(c=o))}),s.splice(c,0,n)}i.log=console.debug||console.log||(()=>{});function e(s){try{s?i.storage.setItem("debug",s):i.storage.removeItem("debug")}catch{}}function f(){let s;try{s=i.storage.getItem("debug")||i.storage.getItem("DEBUG")}catch{}return!s&&typeof u<"u"&&"env"in u&&(s=u.env.DEBUG),s}function C(){try{return localStorage}catch{}}y.exports=l("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(i);const{formatters:_}=y.exports;_.j=function(s){try{return JSON.stringify(s)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(y,i,l)=>{function u(g){e.debug=e,e.default=e,e.coerce=o,e.disable=s,e.enable=C,e.enabled=n,e.humanize=l("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=c,Object.keys(g).forEach(t=>{e[t]=g[t]}),e.names=[],e.skips=[],e.formatters={};function p(t){let r=0;for(let a=0;a<t.length;a++)r=(r<<5)-r+t.charCodeAt(a),r|=0;return e.colors[Math.abs(r)%e.colors.length]}e.selectColor=p;function e(t){let r,a=null,d,A;function m(...h){if(!m.enabled)return;const b=m,F=Number(new Date),T=F-(r||F);b.diff=T,b.prev=r,b.curr=F,r=F,h[0]=e.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");let O=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,(B,v)=>{if(B==="%%")return"%";O++;const S=e.formatters[v];if(typeof S=="function"){const w=h[O];B=S.call(b,w),h.splice(O,1),O--}return B}),e.formatArgs.call(b,h),(b.log||e.log).apply(b,h)}return m.namespace=t,m.useColors=e.useColors(),m.color=e.selectColor(t),m.extend=f,m.destroy=e.destroy,Object.defineProperty(m,"enabled",{enumerable:!0,configurable:!1,get:()=>a!==null?a:(d!==e.namespaces&&(d=e.namespaces,A=e.enabled(t)),A),set:h=>{a=h}}),typeof e.init=="function"&&e.init(m),m}function f(t,r){const a=e(this.namespace+(typeof r>"u"?":":r)+t);return a.log=this.log,a}function C(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=(typeof t=="string"?t:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const a of r)a[0]==="-"?e.skips.push(a.slice(1)):e.names.push(a)}function _(t,r){let a=0,d=0,A=-1,m=0;for(;a<t.length;)if(d<r.length&&(r[d]===t[a]||r[d]==="*"))r[d]==="*"?(A=d,m=a,d++):(a++,d++);else if(A!==-1)d=A+1,m++,a=m;else return!1;for(;d<r.length&&r[d]==="*";)d++;return d===r.length}function s(){const t=[...e.names,...e.skips.map(r=>"-"+r)].join(",");return e.enable(""),t}function n(t){for(const r of e.skips)if(_(t,r))return!1;for(const r of e.names)if(_(t,r))return!0;return!1}function o(t){return t instanceof Error?t.stack||t.message:t}function c(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}y.exports=u},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":y=>{var i=1e3,l=i*60,u=l*60,g=u*24,p=g*7,e=g*365.25;y.exports=function(n,o){o=o||{};var c=typeof n;if(c==="string"&&n.length>0)return f(n);if(c==="number"&&isFinite(n))return o.long?_(n):C(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))};function f(n){if(n=String(n),!(n.length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(o){var c=parseFloat(o[1]),t=(o[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return c*e;case"weeks":case"week":case"w":return c*p;case"days":case"day":case"d":return c*g;case"hours":case"hour":case"hrs":case"hr":case"h":return c*u;case"minutes":case"minute":case"mins":case"min":case"m":return c*l;case"seconds":case"second":case"secs":case"sec":case"s":return c*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function C(n){var o=Math.abs(n);return o>=g?Math.round(n/g)+"d":o>=u?Math.round(n/u)+"h":o>=l?Math.round(n/l)+"m":o>=i?Math.round(n/i)+"s":n+"ms"}function _(n){var o=Math.abs(n);return o>=g?s(n,o,g,"day"):o>=u?s(n,o,u,"hour"):o>=l?s(n,o,l,"minute"):o>=i?s(n,o,i,"second"):n+" ms"}function s(n,o,c,t){var r=o>=c*1.5;return Math.round(n/c)+" "+t+(r?"s":"")}}}]);
