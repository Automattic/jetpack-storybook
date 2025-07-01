(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[811],{"../components/components/record-meter-bar/stories/index.stories.tsx":(h,l,a)=>{"use strict";a.r(l),a.d(l,{LabelBeforeCount:()=>j,WithTotalCount:()=>A,__namedExportsOrder:()=>R,_default:()=>F,default:()=>C});var u=a("../number-formatters/src/index.ts"),f=a("../../../node_modules/.pnpm/@wordpress+i18n@5.26.0/node_modules/@wordpress/i18n/build-module/index.js"),y=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=a.n(m),c=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/record-meter-bar/style.scss"),o={};o.insert="head",o.singleton=!1;var t=p()(c.A,o);const d=c.A.locals||{};var n=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=f.__,i=({totalCount:v,items:T=[],showLegendLabelBeforeCount:L=!1,sortByCount:k,className:O,tableCaption:I,legendTitle:P,recordTypeLabel:D,recordCountLabel:N})=>{const W=(0,e.useMemo)(()=>v||T.reduce((B,{count:b})=>B+b,0),[T,v]),M=(0,e.useMemo)(()=>k?[...T].sort((B,b)=>k==="ascending"?B.count-b.count:b.count-B.count):T,[T,k]);return(0,n.jsxs)("div",{className:(0,y.A)("record-meter-bar",O),children:[(0,n.jsx)("div",{className:"record-meter-bar__items","aria-hidden":"true",children:M.map(({count:B,label:b,backgroundColor:S})=>{const E=(B/W*100).toPrecision(2);return(0,n.jsx)("div",{style:{backgroundColor:S,flexBasis:`${E}%`}},b)})}),(0,n.jsxs)("div",{className:"record-meter-bar__legend","aria-hidden":"true",children:[P&&(0,n.jsx)("div",{className:"record-meter-bar__legend--title",children:P}),(0,n.jsx)("ul",{className:"record-meter-bar__legend--items",children:M.map(({count:B,label:b,backgroundColor:S})=>{const E=(0,u.ZV)(B);return(0,n.jsxs)("li",{className:"record-meter-bar__legend--item",children:[(0,n.jsx)("div",{className:"record-meter-bar__legend--item-circle",style:{backgroundColor:S}}),!L&&(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"record-meter-bar__legend--item-count",children:E}),(0,n.jsx)("span",{className:"record-meter-bar__legend--item-label",children:b})]}),L&&(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"record-meter-bar__legend--item-label record-meter-bar__legend--item-label-first",children:b}),(0,n.jsxs)("span",{className:"record-meter-bar__legend--item-count",children:["(",E,")"]})]})]},b)})})]}),(0,n.jsxs)("table",{className:"screen-reader-text",children:[(0,n.jsx)("caption",{children:I||r("Summary of the records","jetpack-components")}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:D||r("Record type","jetpack-components")}),(0,n.jsx)("th",{scope:"col",children:N||r("Record count","jetpack-components")})]}),M.map(({label:B,count:b})=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:B}),(0,n.jsx)("td",{children:b})]},B))]})]})]})};try{recordmeterbar.displayName="recordmeterbar",recordmeterbar.__docgenInfo={description:"Generate Record Meter bar",displayName:"recordmeterbar",props:{totalCount:{defaultValue:null,description:"Total number of items for the record meter. If not provided, its is the sum of item.count of all items.",name:"totalCount",required:!1,type:{name:"number"}},items:{defaultValue:{value:"[]"},description:"The items to display in Record meter.",name:"items",required:!1,type:{name:"RecordMeterBarItem[]"}},showLegendLabelBeforeCount:{defaultValue:{value:"false"},description:"The formatting style for legend item display. If not provided, it defaults to showing legend label after count",name:"showLegendLabelBeforeCount",required:!1,type:{name:"boolean"}},sortByCount:{defaultValue:null,description:"The sort style for legend item. If not provided, it defaults to no sorting.",name:"sortByCount",required:!1,type:{name:"enum",value:[{value:'"ascending"'},{value:'"descending"'}]}},className:{defaultValue:null,description:"Additional class name to be added to the component",name:"className",required:!1,type:{name:"string"}},tableCaption:{defaultValue:null,description:"Table caption",name:"tableCaption",required:!1,type:{name:"string"}},legendTitle:{defaultValue:null,description:"Title/label for the legend",name:"legendTitle",required:!1,type:{name:"string"}},recordTypeLabel:{defaultValue:null,description:"Recorc type label for screen readers",name:"recordTypeLabel",required:!1,type:{name:"string"}},recordCountLabel:{defaultValue:null,description:"Record count label for screen readers",name:"recordCountLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/record-meter-bar/index.tsx#recordmeterbar"]={docgenInfo:recordmeterbar.__docgenInfo,name:"recordmeterbar",path:"../components/components/record-meter-bar/index.tsx#recordmeterbar"})}catch{}var _=`import RecordMeterBar, { RecordMeterBarProps } from '../index.tsx';

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
`,w={_default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},WithTotalCount:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},LabelBeforeCount:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const C={parameters:{storySource:{source:`import RecordMeterBar from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"with-total-count":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"label-before-count":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/RecordMeterBar",component:i,argTypes:{sortByCount:{control:{type:"select"},options:[void 0,"ascending","descending"]}}},g=v=>(0,n.jsx)(i,{...v}),x={items:[{count:18,label:"Posts",backgroundColor:"#00BA37"},{count:30,label:"Plugins",backgroundColor:"#3895BA"},{count:52,label:"Comments",backgroundColor:"#E68B28"},{count:24,label:"Authors",backgroundColor:"#3859BA"}]},F=g.bind({});F.args=x;const A=g.bind({});A.args={...x,totalCount:200};const j=g.bind({});j.args={...x,showLegendLabelBeforeCount:!0};const R=["_default","WithTotalCount","LabelBeforeCount"];F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"args => <RecordMeterBar {...args} />",...F.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"args => <RecordMeterBar {...args} />",...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"args => <RecordMeterBar {...args} />",...j.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(h,l,a)=>{"use strict";a.d(l,{A:()=>y});function u(e){var m,p,c="";if(typeof e=="string"||typeof e=="number")c+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(m=0;m<o;m++)e[m]&&(p=u(e[m]))&&(c&&(c+=" "),c+=p)}else for(p in e)e[p]&&(c&&(c+=" "),c+=p);return c}function f(){for(var e,m,p=0,c="",o=arguments.length;p<o;p++)(e=arguments[p])&&(m=u(e))&&(c&&(c+=" "),c+=m);return c}const y=f},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/record-meter-bar/style.scss":(h,l,a)=>{"use strict";a.d(l,{A:()=>p});var u=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=a.n(u),y=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=a.n(y),m=e()(f());m.push([h.id,".record-meter-bar{padding-block:1em}.record-meter-bar__items{height:2rem;display:flex;border-radius:1rem;overflow:hidden;margin-bottom:2em;background-color:var(--jp-gray-off)}.record-meter-bar__legend--items{display:flex;margin:0}.record-meter-bar__legend--item{display:flex;margin:0;margin-inline-end:1em;align-items:center}.record-meter-bar__legend--item-circle{width:1rem;height:1rem;display:inline-block;margin-inline-end:.4em;border-radius:100%}.record-meter-bar__legend--item-count{margin-inline-end:.4em}.record-meter-bar__legend--item-label-first{margin-inline-end:.4em}",""]);const p=m},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(h,l,a)=>{var u=a("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");l.formatArgs=y,l.save=e,l.load=m,l.useColors=f,l.storage=p(),l.destroy=(()=>{let o=!1;return()=>{o||(o=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),l.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function f(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let o;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(o=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(o[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function y(o){if(o[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+o[0]+(this.useColors?"%c ":" ")+"+"+h.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;o.splice(1,0,t,"color: inherit");let d=0,n=0;o[0].replace(/%[a-zA-Z%]/g,r=>{r!=="%%"&&(d++,r==="%c"&&(n=d))}),o.splice(n,0,t)}l.log=console.debug||console.log||(()=>{});function e(o){try{o?l.storage.setItem("debug",o):l.storage.removeItem("debug")}catch{}}function m(){let o;try{o=l.storage.getItem("debug")||l.storage.getItem("DEBUG")}catch{}return!o&&typeof u<"u"&&"env"in u&&(o=u.env.DEBUG),o}function p(){try{return localStorage}catch{}}h.exports=a("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(l);const{formatters:c}=h.exports;c.j=function(o){try{return JSON.stringify(o)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(h,l,a)=>{function u(f){e.debug=e,e.default=e,e.coerce=d,e.disable=o,e.enable=p,e.enabled=t,e.humanize=a("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=n,Object.keys(f).forEach(r=>{e[r]=f[r]}),e.names=[],e.skips=[],e.formatters={};function y(r){let s=0;for(let i=0;i<r.length;i++)s=(s<<5)-s+r.charCodeAt(i),s|=0;return e.colors[Math.abs(s)%e.colors.length]}e.selectColor=y;function e(r){let s,i=null,_,w;function C(...g){if(!C.enabled)return;const x=C,F=Number(new Date),A=F-(s||F);x.diff=A,x.prev=s,x.curr=F,s=F,g[0]=e.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");let j=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,(v,T)=>{if(v==="%%")return"%";j++;const L=e.formatters[T];if(typeof L=="function"){const k=g[j];v=L.call(x,k),g.splice(j,1),j--}return v}),e.formatArgs.call(x,g),(x.log||e.log).apply(x,g)}return C.namespace=r,C.useColors=e.useColors(),C.color=e.selectColor(r),C.extend=m,C.destroy=e.destroy,Object.defineProperty(C,"enabled",{enumerable:!0,configurable:!1,get:()=>i!==null?i:(_!==e.namespaces&&(_=e.namespaces,w=e.enabled(r)),w),set:g=>{i=g}}),typeof e.init=="function"&&e.init(C),C}function m(r,s){const i=e(this.namespace+(typeof s>"u"?":":s)+r);return i.log=this.log,i}function p(r){e.save(r),e.namespaces=r,e.names=[],e.skips=[];const s=(typeof r=="string"?r:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const i of s)i[0]==="-"?e.skips.push(i.slice(1)):e.names.push(i)}function c(r,s){let i=0,_=0,w=-1,C=0;for(;i<r.length;)if(_<s.length&&(s[_]===r[i]||s[_]==="*"))s[_]==="*"?(w=_,C=i,_++):(i++,_++);else if(w!==-1)_=w+1,C++,i=C;else return!1;for(;_<s.length&&s[_]==="*";)_++;return _===s.length}function o(){const r=[...e.names,...e.skips.map(s=>"-"+s)].join(",");return e.enable(""),r}function t(r){for(const s of e.skips)if(c(r,s))return!1;for(const s of e.names)if(c(r,s))return!0;return!1}function d(r){return r instanceof Error?r.stack||r.message:r}function n(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}h.exports=u},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":h=>{var l=1e3,a=l*60,u=a*60,f=u*24,y=f*7,e=f*365.25;h.exports=function(t,d){d=d||{};var n=typeof t;if(n==="string"&&t.length>0)return m(t);if(n==="number"&&isFinite(t))return d.long?c(t):p(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function m(t){if(t=String(t),!(t.length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(d){var n=parseFloat(d[1]),r=(d[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*e;case"weeks":case"week":case"w":return n*y;case"days":case"day":case"d":return n*f;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*l;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function p(t){var d=Math.abs(t);return d>=f?Math.round(t/f)+"d":d>=u?Math.round(t/u)+"h":d>=a?Math.round(t/a)+"m":d>=l?Math.round(t/l)+"s":t+"ms"}function c(t){var d=Math.abs(t);return d>=f?o(t,d,f,"day"):d>=u?o(t,d,u,"hour"):d>=a?o(t,d,a,"minute"):d>=l?o(t,d,l,"second"):t+" ms"}function o(t,d,n,r){var s=d>=n*1.5;return Math.round(t/n)+" "+r+(s?"s":"")}}}]);
