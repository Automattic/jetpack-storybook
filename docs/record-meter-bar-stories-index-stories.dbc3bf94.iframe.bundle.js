(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[811],{"../components/components/record-meter-bar/stories/index.stories.tsx":(h,l,a)=>{"use strict";a.r(l),a.d(l,{LabelBeforeCount:()=>x,WithTotalCount:()=>v,__namedExportsOrder:()=>R,_default:()=>j,default:()=>C});var u=a("../number-formatters/src/index.ts"),_=a("../../../node_modules/.pnpm/@wordpress+i18n@5.22.0/node_modules/@wordpress/i18n/build-module/index.js"),y=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=a.n(m),c=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/record-meter-bar/style.scss"),t={};t.insert="head",t.singleton=!1;var r=p()(c.A,t);const d=c.A.locals||{};var n=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=_.__,i=({totalCount:w,items:k=[],showLegendLabelBeforeCount:M=!1,sortByCount:L,className:D,tableCaption:O,legendTitle:S,recordTypeLabel:I,recordCountLabel:N})=>{const W=(0,e.useMemo)(()=>w||k.reduce((B,{count:b})=>B+b,0),[k,w]),T=(0,e.useMemo)(()=>L?[...k].sort((B,b)=>L==="ascending"?B.count-b.count:b.count-B.count):k,[k,L]);return(0,n.jsxs)("div",{className:(0,y.A)("record-meter-bar",D),children:[(0,n.jsx)("div",{className:"record-meter-bar__items","aria-hidden":"true",children:T.map(({count:B,label:b,backgroundColor:P})=>{const E=(B/W*100).toPrecision(2);return(0,n.jsx)("div",{style:{backgroundColor:P,flexBasis:`${E}%`}},b)})}),(0,n.jsxs)("div",{className:"record-meter-bar__legend","aria-hidden":"true",children:[S&&(0,n.jsx)("div",{className:"record-meter-bar__legend--title",children:S}),(0,n.jsx)("ul",{className:"record-meter-bar__legend--items",children:T.map(({count:B,label:b,backgroundColor:P})=>{const E=(0,u.ZV)(B);return(0,n.jsxs)("li",{className:"record-meter-bar__legend--item",children:[(0,n.jsx)("div",{className:"record-meter-bar__legend--item-circle",style:{backgroundColor:P}}),!M&&(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"record-meter-bar__legend--item-count",children:E}),(0,n.jsx)("span",{className:"record-meter-bar__legend--item-label",children:b})]}),M&&(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"record-meter-bar__legend--item-label record-meter-bar__legend--item-label-first",children:b}),(0,n.jsxs)("span",{className:"record-meter-bar__legend--item-count",children:["(",E,")"]})]})]},b)})})]}),(0,n.jsxs)("table",{className:"screen-reader-text",children:[(0,n.jsx)("caption",{children:O||o("Summary of the records","jetpack-components")}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:I||o("Record type","jetpack-components")}),(0,n.jsx)("th",{scope:"col",children:N||o("Record count","jetpack-components")})]}),T.map(({label:B,count:b})=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:B}),(0,n.jsx)("td",{children:b})]},B))]})]})]})};var f=`import RecordMeterBar, { RecordMeterBarProps } from '../index.tsx';

export default {
	title: 'JS Packages/Components/RecordMeterBar',
	component: RecordMeterBar,
	argTypes: {
		sortByCount: {
			control: { type: 'select' },
			options: [ undefined, 'ascending', 'descending' ],
		},
	},
};

const Template = args => <RecordMeterBar { ...args } />;

const DefaultArgs: RecordMeterBarProps = {
	items: [
		{ count: 18, label: 'Posts', backgroundColor: '#00BA37' },
		{ count: 30, label: 'Plugins', backgroundColor: '#3895BA' },
		{ count: 52, label: 'Comments', backgroundColor: '#E68B28' },
		{ count: 24, label: 'Authors', backgroundColor: '#3859BA' },
	],
};

// Export Default story
export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const WithTotalCount = Template.bind( {} );
WithTotalCount.args = {
	...DefaultArgs,
	totalCount: 200,
};

export const LabelBeforeCount = Template.bind( {} );
LabelBeforeCount.args = {
	...DefaultArgs,
	showLegendLabelBeforeCount: true,
};
`,A={_default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},WithTotalCount:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},LabelBeforeCount:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const C={parameters:{storySource:{source:`import RecordMeterBar from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/RecordMeterBar',
  component: RecordMeterBar,
  argTypes: {
    sortByCount: {
      control: {
        type: 'select'
      },
      options: [undefined, 'ascending', 'descending']
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(RecordMeterBar, {
  ...args
});
const DefaultArgs = {
  items: [{
    count: 18,
    label: 'Posts',
    backgroundColor: '#00BA37'
  }, {
    count: 30,
    label: 'Plugins',
    backgroundColor: '#3895BA'
  }, {
    count: 52,
    label: 'Comments',
    backgroundColor: '#E68B28'
  }, {
    count: 24,
    label: 'Authors',
    backgroundColor: '#3859BA'
  }]
};

// Export Default story
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const WithTotalCount = Template.bind({});
WithTotalCount.args = {
  ...DefaultArgs,
  totalCount: 200
};
export const LabelBeforeCount = Template.bind({});
LabelBeforeCount.args = {
  ...DefaultArgs,
  showLegendLabelBeforeCount: true
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"with-total-count":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"label-before-count":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/RecordMeterBar",component:i,argTypes:{sortByCount:{control:{type:"select"},options:[void 0,"ascending","descending"]}}},g=w=>(0,n.jsx)(i,{...w}),F={items:[{count:18,label:"Posts",backgroundColor:"#00BA37"},{count:30,label:"Plugins",backgroundColor:"#3895BA"},{count:52,label:"Comments",backgroundColor:"#E68B28"},{count:24,label:"Authors",backgroundColor:"#3859BA"}]},j=g.bind({});j.args=F;const v=g.bind({});v.args={...F,totalCount:200};const x=g.bind({});x.args={...F,showLegendLabelBeforeCount:!0};const R=["_default","WithTotalCount","LabelBeforeCount"];j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"args => <RecordMeterBar {...args} />",...j.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <RecordMeterBar {...args} />",...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <RecordMeterBar {...args} />",...x.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(h,l,a)=>{"use strict";a.d(l,{A:()=>y});function u(e){var m,p,c="";if(typeof e=="string"||typeof e=="number")c+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(m=0;m<t;m++)e[m]&&(p=u(e[m]))&&(c&&(c+=" "),c+=p)}else for(p in e)e[p]&&(c&&(c+=" "),c+=p);return c}function _(){for(var e,m,p=0,c="",t=arguments.length;p<t;p++)(e=arguments[p])&&(m=u(e))&&(c&&(c+=" "),c+=m);return c}const y=_},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/record-meter-bar/style.scss":(h,l,a)=>{"use strict";a.d(l,{A:()=>p});var u=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=a.n(u),y=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=a.n(y),m=e()(_());m.push([h.id,".record-meter-bar{padding-block:1em}.record-meter-bar__items{height:2rem;display:flex;border-radius:1rem;overflow:hidden;margin-bottom:2em;background-color:var(--jp-gray-off)}.record-meter-bar__legend--items{display:flex;margin:0}.record-meter-bar__legend--item{display:flex;margin:0;margin-inline-end:1em;align-items:center}.record-meter-bar__legend--item-circle{width:1rem;height:1rem;display:inline-block;margin-inline-end:.4em;border-radius:100%}.record-meter-bar__legend--item-count{margin-inline-end:.4em}.record-meter-bar__legend--item-label-first{margin-inline-end:.4em}",""]);const p=m},"../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js":(h,l,a)=>{var u=a("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");l.formatArgs=y,l.save=e,l.load=m,l.useColors=_,l.storage=p(),l.destroy=(()=>{let t=!1;return()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),l.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function _(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let t;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(t=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(t[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function y(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+h.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let d=0,n=0;t[0].replace(/%[a-zA-Z%]/g,o=>{o!=="%%"&&(d++,o==="%c"&&(n=d))}),t.splice(n,0,r)}l.log=console.debug||console.log||(()=>{});function e(t){try{t?l.storage.setItem("debug",t):l.storage.removeItem("debug")}catch{}}function m(){let t;try{t=l.storage.getItem("debug")}catch{}return!t&&typeof u<"u"&&"env"in u&&(t=u.env.DEBUG),t}function p(){try{return localStorage}catch{}}h.exports=a("../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js")(l);const{formatters:c}=h.exports;c.j=function(t){try{return JSON.stringify(t)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}},"../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js":(h,l,a)=>{function u(_){e.debug=e,e.default=e,e.coerce=d,e.disable=t,e.enable=p,e.enabled=r,e.humanize=a("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=n,Object.keys(_).forEach(o=>{e[o]=_[o]}),e.names=[],e.skips=[],e.formatters={};function y(o){let s=0;for(let i=0;i<o.length;i++)s=(s<<5)-s+o.charCodeAt(i),s|=0;return e.colors[Math.abs(s)%e.colors.length]}e.selectColor=y;function e(o){let s,i=null,f,A;function C(...g){if(!C.enabled)return;const F=C,j=Number(new Date),v=j-(s||j);F.diff=v,F.prev=s,F.curr=j,s=j,g[0]=e.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");let x=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,(w,k)=>{if(w==="%%")return"%";x++;const M=e.formatters[k];if(typeof M=="function"){const L=g[x];w=M.call(F,L),g.splice(x,1),x--}return w}),e.formatArgs.call(F,g),(F.log||e.log).apply(F,g)}return C.namespace=o,C.useColors=e.useColors(),C.color=e.selectColor(o),C.extend=m,C.destroy=e.destroy,Object.defineProperty(C,"enabled",{enumerable:!0,configurable:!1,get:()=>i!==null?i:(f!==e.namespaces&&(f=e.namespaces,A=e.enabled(o)),A),set:g=>{i=g}}),typeof e.init=="function"&&e.init(C),C}function m(o,s){const i=e(this.namespace+(typeof s>"u"?":":s)+o);return i.log=this.log,i}function p(o){e.save(o),e.namespaces=o,e.names=[],e.skips=[];const s=(typeof o=="string"?o:"").trim().replace(" ",",").split(",").filter(Boolean);for(const i of s)i[0]==="-"?e.skips.push(i.slice(1)):e.names.push(i)}function c(o,s){let i=0,f=0,A=-1,C=0;for(;i<o.length;)if(f<s.length&&(s[f]===o[i]||s[f]==="*"))s[f]==="*"?(A=f,C=i,f++):(i++,f++);else if(A!==-1)f=A+1,C++,i=C;else return!1;for(;f<s.length&&s[f]==="*";)f++;return f===s.length}function t(){const o=[...e.names,...e.skips.map(s=>"-"+s)].join(",");return e.enable(""),o}function r(o){for(const s of e.skips)if(c(o,s))return!1;for(const s of e.names)if(c(o,s))return!0;return!1}function d(o){return o instanceof Error?o.stack||o.message:o}function n(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}h.exports=u},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":h=>{var l=1e3,a=l*60,u=a*60,_=u*24,y=_*7,e=_*365.25;h.exports=function(r,d){d=d||{};var n=typeof r;if(n==="string"&&r.length>0)return m(r);if(n==="number"&&isFinite(r))return d.long?c(r):p(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function m(r){if(r=String(r),!(r.length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(d){var n=parseFloat(d[1]),o=(d[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return n*e;case"weeks":case"week":case"w":return n*y;case"days":case"day":case"d":return n*_;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*l;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function p(r){var d=Math.abs(r);return d>=_?Math.round(r/_)+"d":d>=u?Math.round(r/u)+"h":d>=a?Math.round(r/a)+"m":d>=l?Math.round(r/l)+"s":r+"ms"}function c(r){var d=Math.abs(r);return d>=_?t(r,d,_,"day"):d>=u?t(r,d,u,"hour"):d>=a?t(r,d,a,"minute"):d>=l?t(r,d,l,"second"):r+" ms"}function t(r,d,n,o){var s=d>=n*1.5;return Math.round(r/n)+" "+o+(s?"s":"")}}}]);
