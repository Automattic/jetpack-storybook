(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8006],{"../charts/src/components/bar-chart/stories/legend.stories.tsx":(_,a,l)=>{"use strict";l.r(a),l.d(a,{AlignmentPositioning:()=>t,Default:()=>c,HorizontalBars:()=>i,VerticalOrientation:()=>r,__namedExportsOrder:()=>f,default:()=>o});var g=l("../charts/src/stories/legend-config.tsx"),p=l("../charts/src/components/bar-chart/bar-chart.tsx"),C=l("../charts/src/components/bar-chart/stories/sample-data.ts"),e=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=`import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
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
`,m={Default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},AlignmentPositioning:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},VerticalOrientation:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},HorizontalBars:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const o={title:"JS Packages/Charts/Types/Bar Chart/Legend",component:p.A,parameters:{storySource:{source:`import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"alignment-positioning":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"vertical-orientation":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"horizontal-bars":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}},layout:"centered"},decorators:g.x,argTypes:g.r},n=A=>(0,e.jsx)(p.A,{...A}),s={data:C.A.slice(0,3),height:400,showLegend:!0,legendOrientation:"horizontal",withTooltips:!0},c=n.bind({});c.args={...s};const t=n.bind({});t.args={...s,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const r=n.bind({});r.args={...s,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const i=n.bind({});i.args={...s,orientation:"horizontal",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const f=["Default","AlignmentPositioning","VerticalOrientation","HorizontalBars"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...c.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...t.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...i.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(_,a,l)=>{"use strict";l.d(a,{r:()=>e,x:()=>u});var g=l("../charts/src/providers/theme/themes.ts"),p=l("../charts/src/providers/theme/theme-provider.tsx"),C=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:g.QI,woo:g.pk},defaultValue:void 0,table:{category:"Theme"}}},u=[(m,{args:d})=>(0,C.jsx)(p.NP,{theme:d.theme,children:(0,C.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,C.jsx)(m,{})})})];try{e.displayName="legendArgTypes",e.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:e.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{u.displayName="legendDecorator",u.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:u.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(_,a,l)=>{"use strict";l.d(a,{A:()=>C});function g(e){var u,m,d="";if(typeof e=="string"||typeof e=="number")d+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(u=0;u<o;u++)e[u]&&(m=g(e[u]))&&(d&&(d+=" "),d+=m)}else for(m in e)e[m]&&(d&&(d+=" "),d+=m);return d}function p(){for(var e,u,m=0,d="",o=arguments.length;m<o;m++)(e=arguments[m])&&(u=g(e))&&(d&&(d+=" "),d+=u);return d}const C=p},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(_,a,l)=>{var g=l("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");a.formatArgs=C,a.save=e,a.load=u,a.useColors=p,a.storage=m(),a.destroy=(()=>{let o=!1;return()=>{o||(o=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),a.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function p(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let o;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(o=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(o[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function C(o){if(o[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+o[0]+(this.useColors?"%c ":" ")+"+"+_.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;o.splice(1,0,n,"color: inherit");let s=0,c=0;o[0].replace(/%[a-zA-Z%]/g,t=>{t!=="%%"&&(s++,t==="%c"&&(c=s))}),o.splice(c,0,n)}a.log=console.debug||console.log||(()=>{});function e(o){try{o?a.storage.setItem("debug",o):a.storage.removeItem("debug")}catch{}}function u(){let o;try{o=a.storage.getItem("debug")||a.storage.getItem("DEBUG")}catch{}return!o&&typeof g<"u"&&"env"in g&&(o=g.env.DEBUG),o}function m(){try{return localStorage}catch{}}_.exports=l("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(a);const{formatters:d}=_.exports;d.j=function(o){try{return JSON.stringify(o)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(_,a,l)=>{function g(p){e.debug=e,e.default=e,e.coerce=s,e.disable=o,e.enable=m,e.enabled=n,e.humanize=l("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=c,Object.keys(p).forEach(t=>{e[t]=p[t]}),e.names=[],e.skips=[],e.formatters={};function C(t){let r=0;for(let i=0;i<t.length;i++)r=(r<<5)-r+t.charCodeAt(i),r|=0;return e.colors[Math.abs(r)%e.colors.length]}e.selectColor=C;function e(t){let r,i=null,f,A;function h(...y){if(!h.enabled)return;const b=h,F=Number(new Date),T=F-(r||F);b.diff=T,b.prev=r,b.curr=F,r=F,y[0]=e.coerce(y[0]),typeof y[0]!="string"&&y.unshift("%O");let B=0;y[0]=y[0].replace(/%([a-zA-Z%])/g,(O,x)=>{if(O==="%%")return"%";B++;const v=e.formatters[x];if(typeof v=="function"){const S=y[B];O=v.call(b,S),y.splice(B,1),B--}return O}),e.formatArgs.call(b,y),(b.log||e.log).apply(b,y)}return h.namespace=t,h.useColors=e.useColors(),h.color=e.selectColor(t),h.extend=u,h.destroy=e.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>i!==null?i:(f!==e.namespaces&&(f=e.namespaces,A=e.enabled(t)),A),set:y=>{i=y}}),typeof e.init=="function"&&e.init(h),h}function u(t,r){const i=e(this.namespace+(typeof r>"u"?":":r)+t);return i.log=this.log,i}function m(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=(typeof t=="string"?t:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const i of r)i[0]==="-"?e.skips.push(i.slice(1)):e.names.push(i)}function d(t,r){let i=0,f=0,A=-1,h=0;for(;i<t.length;)if(f<r.length&&(r[f]===t[i]||r[f]==="*"))r[f]==="*"?(A=f,h=i,f++):(i++,f++);else if(A!==-1)f=A+1,h++,i=h;else return!1;for(;f<r.length&&r[f]==="*";)f++;return f===r.length}function o(){const t=[...e.names,...e.skips.map(r=>"-"+r)].join(",");return e.enable(""),t}function n(t){for(const r of e.skips)if(d(t,r))return!1;for(const r of e.names)if(d(t,r))return!0;return!1}function s(t){return t instanceof Error?t.stack||t.message:t}function c(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}_.exports=g},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":_=>{var a=1e3,l=a*60,g=l*60,p=g*24,C=p*7,e=p*365.25;_.exports=function(n,s){s=s||{};var c=typeof n;if(c==="string"&&n.length>0)return u(n);if(c==="number"&&isFinite(n))return s.long?d(n):m(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))};function u(n){if(n=String(n),!(n.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(s){var c=parseFloat(s[1]),t=(s[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return c*e;case"weeks":case"week":case"w":return c*C;case"days":case"day":case"d":return c*p;case"hours":case"hour":case"hrs":case"hr":case"h":return c*g;case"minutes":case"minute":case"mins":case"min":case"m":return c*l;case"seconds":case"second":case"secs":case"sec":case"s":return c*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function m(n){var s=Math.abs(n);return s>=p?Math.round(n/p)+"d":s>=g?Math.round(n/g)+"h":s>=l?Math.round(n/l)+"m":s>=a?Math.round(n/a)+"s":n+"ms"}function d(n){var s=Math.abs(n);return s>=p?o(n,s,p,"day"):s>=g?o(n,s,g,"hour"):s>=l?o(n,s,l,"minute"):s>=a?o(n,s,a,"second"):n+" ms"}function o(n,s,c,t){var r=s>=c*1.5;return Math.round(n/c)+" "+t+(r?"s":"")}}}]);
