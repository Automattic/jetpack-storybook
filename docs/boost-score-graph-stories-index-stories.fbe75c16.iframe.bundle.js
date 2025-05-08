(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1889],{"../components/components/boost-score-graph/stories/index.stories.tsx":(C,r,d)=>{"use strict";d.r(r),d.d(r,{__namedExportsOrder:()=>i,_default:()=>s,default:()=>n});var _=d("../components/components/boost-score-graph/index.tsx"),m=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),v=`import { BoostScoreGraph } from '../index.tsx';
import type { Meta } from '@storybook/react';

const exampleRawResponse = {
	data: {
		_meta: {
			start: 1689772803000,
			end: 1690647000000,
		},
		periods: [
			{
				timestamp: 1690636803000,
				dimensions: {
					desktop_overall_score: 86,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689772803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689859203000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 49,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689945603000,
				dimensions: {
					desktop_overall_score: 20,
					mobile_overall_score: 30,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690032003000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 40,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690118403000,
				dimensions: {
					desktop_overall_score: 55,
					mobile_overall_score: 45,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690204803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690291203000,
				dimensions: {
					desktop_overall_score: 70,
					mobile_overall_score: 50,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690377603000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 90,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690464003000,
				dimensions: {
					desktop_overall_score: 80,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690550403000,
				dimensions: {
					desktop_overall_score: 85,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
		],
	},
};

const meta: Meta< typeof BoostScoreGraph > = {
	title: 'JS Packages/Components/Boost Score Graph',
	component: BoostScoreGraph,
	argTypes: {
		startDate: { control: 'date' },
		endDate: { control: 'date' },
		title: { control: 'string', defaultValue: 'Title' },
		isPlaceholder: { control: 'boolean', defaultValue: false },
	},
	decorators: [
		Story => (
			<div style={ { width: '80%', maxWidth: '1320px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	startDate: exampleRawResponse.data._meta.start,
	endDate: exampleRawResponse.data._meta.end,
	periods: exampleRawResponse.data.periods,
	isPlaceholder: false,
};

export default meta;

const Template = args => <BoostScoreGraph { ...args } />;
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,t={_default:{startLoc:{col:17,line:180},endLoc:{col:2,line:182},startBody:{col:17,line:180},endBody:{col:2,line:182}}};const p={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}]}},b={parameters:{storySource:{source:`import { BoostScoreGraph } from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const exampleRawResponse = {
  data: {
    _meta: {
      start: 1689772803000,
      end: 1690647000000
    },
    periods: [{
      timestamp: 1690636803000,
      dimensions: {
        desktop_overall_score: 86,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689772803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689859203000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 49,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689945603000,
      dimensions: {
        desktop_overall_score: 20,
        mobile_overall_score: 30,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690032003000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 40,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690118403000,
      dimensions: {
        desktop_overall_score: 55,
        mobile_overall_score: 45,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690204803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690291203000,
      dimensions: {
        desktop_overall_score: 70,
        mobile_overall_score: 50,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690377603000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 90,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690464003000,
      dimensions: {
        desktop_overall_score: 80,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690550403000,
      dimensions: {
        desktop_overall_score: 85,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }]
  }
};
const meta = {
  title: 'JS Packages/Components/Boost Score Graph',
  component: BoostScoreGraph,
  argTypes: {
    startDate: {
      control: 'date'
    },
    endDate: {
      control: 'date'
    },
    title: {
      control: 'string',
      defaultValue: 'Title'
    },
    isPlaceholder: {
      control: 'boolean',
      defaultValue: false
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      width: '80%',
      maxWidth: '1320px',
      margin: '200px auto',
      fontSize: '16px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const defaultValues = {
  startDate: exampleRawResponse.data._meta.start,
  endDate: exampleRawResponse.data._meta.end,
  periods: exampleRawResponse.data.periods,
  isPlaceholder: false
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(BoostScoreGraph, {
  ...args
});
export const _default = Template.bind({});
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:180},endLoc:{col:2,line:182},startBody:{col:17,line:180},endBody:{col:2,line:182}}}}},title:"JS Packages/Components/Boost Score Graph",component:_.W,argTypes:{startDate:{control:"date"},endDate:{control:"date"},title:{control:"string",defaultValue:"Title"},isPlaceholder:{control:"boolean",defaultValue:!1}},decorators:[e=>(0,m.jsx)("div",{style:{width:"80%",maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,m.jsx)(e,{})})]},a={startDate:p.data._meta.start,endDate:p.data._meta.end,periods:p.data.periods,isPlaceholder:!1},n=b,s=(e=>(0,m.jsx)(_.W,{...e})).bind({});s.args=a;const i=["_default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <BoostScoreGraph {...args} />",...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(C,r,d)=>{"use strict";d.d(r,{A:()=>v});function _(t){var p,b,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(p=0;p<n;p++)t[p]&&(b=_(t[p]))&&(a&&(a+=" "),a+=b)}else for(b in t)t[b]&&(a&&(a+=" "),a+=b);return a}function m(){for(var t,p,b=0,a="",n=arguments.length;b<n;b++)(t=arguments[b])&&(p=_(t))&&(a&&(a+=" "),a+=p);return a}const v=m},"../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js":(C,r,d)=>{var _=d("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");r.formatArgs=v,r.save=t,r.load=p,r.useColors=m,r.storage=b(),r.destroy=(()=>{let n=!1;return()=>{n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),r.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function m(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let n;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(n=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(n[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function v(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+C.exports.humanize(this.diff),!this.useColors)return;const o="color: "+this.color;n.splice(1,0,o,"color: inherit");let s=0,i=0;n[0].replace(/%[a-zA-Z%]/g,e=>{e!=="%%"&&(s++,e==="%c"&&(i=s))}),n.splice(i,0,o)}r.log=console.debug||console.log||(()=>{});function t(n){try{n?r.storage.setItem("debug",n):r.storage.removeItem("debug")}catch{}}function p(){let n;try{n=r.storage.getItem("debug")}catch{}return!n&&typeof _<"u"&&"env"in _&&(n=_.env.DEBUG),n}function b(){try{return localStorage}catch{}}C.exports=d("../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js")(r);const{formatters:a}=C.exports;a.j=function(n){try{return JSON.stringify(n)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}}},"../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js":(C,r,d)=>{function _(m){t.debug=t,t.default=t,t.coerce=s,t.disable=n,t.enable=b,t.enabled=o,t.humanize=d("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),t.destroy=i,Object.keys(m).forEach(e=>{t[e]=m[e]}),t.names=[],t.skips=[],t.formatters={};function v(e){let l=0;for(let c=0;c<e.length;c++)l=(l<<5)-l+e.charCodeAt(c),l|=0;return t.colors[Math.abs(l)%t.colors.length]}t.selectColor=v;function t(e){let l,c=null,u,g;function f(...k){if(!f.enabled)return;const h=f,F=Number(new Date),S=F-(l||F);h.diff=S,h.prev=l,h.curr=F,l=F,k[0]=t.coerce(k[0]),typeof k[0]!="string"&&k.unshift("%O");let y=0;k[0]=k[0].replace(/%([a-zA-Z%])/g,(x,j)=>{if(x==="%%")return"%";y++;const w=t.formatters[j];if(typeof w=="function"){const A=k[y];x=w.call(h,A),k.splice(y,1),y--}return x}),t.formatArgs.call(h,k),(h.log||t.log).apply(h,k)}return f.namespace=e,f.useColors=t.useColors(),f.color=t.selectColor(e),f.extend=p,f.destroy=t.destroy,Object.defineProperty(f,"enabled",{enumerable:!0,configurable:!1,get:()=>c!==null?c:(u!==t.namespaces&&(u=t.namespaces,g=t.enabled(e)),g),set:k=>{c=k}}),typeof t.init=="function"&&t.init(f),f}function p(e,l){const c=t(this.namespace+(typeof l>"u"?":":l)+e);return c.log=this.log,c}function b(e){t.save(e),t.namespaces=e,t.names=[],t.skips=[];const l=(typeof e=="string"?e:"").trim().replace(" ",",").split(",").filter(Boolean);for(const c of l)c[0]==="-"?t.skips.push(c.slice(1)):t.names.push(c)}function a(e,l){let c=0,u=0,g=-1,f=0;for(;c<e.length;)if(u<l.length&&(l[u]===e[c]||l[u]==="*"))l[u]==="*"?(g=u,f=c,u++):(c++,u++);else if(g!==-1)u=g+1,f++,c=f;else return!1;for(;u<l.length&&l[u]==="*";)u++;return u===l.length}function n(){const e=[...t.names,...t.skips.map(l=>"-"+l)].join(",");return t.enable(""),e}function o(e){for(const l of t.skips)if(a(e,l))return!1;for(const l of t.names)if(a(e,l))return!0;return!1}function s(e){return e instanceof Error?e.stack||e.message:e}function i(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}C.exports=_},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":C=>{var r=1e3,d=r*60,_=d*60,m=_*24,v=m*7,t=m*365.25;C.exports=function(o,s){s=s||{};var i=typeof o;if(i==="string"&&o.length>0)return p(o);if(i==="number"&&isFinite(o))return s.long?a(o):b(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function p(o){if(o=String(o),!(o.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(s){var i=parseFloat(s[1]),e=(s[2]||"ms").toLowerCase();switch(e){case"years":case"year":case"yrs":case"yr":case"y":return i*t;case"weeks":case"week":case"w":return i*v;case"days":case"day":case"d":return i*m;case"hours":case"hour":case"hrs":case"hr":case"h":return i*_;case"minutes":case"minute":case"mins":case"min":case"m":return i*d;case"seconds":case"second":case"secs":case"sec":case"s":return i*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}function b(o){var s=Math.abs(o);return s>=m?Math.round(o/m)+"d":s>=_?Math.round(o/_)+"h":s>=d?Math.round(o/d)+"m":s>=r?Math.round(o/r)+"s":o+"ms"}function a(o){var s=Math.abs(o);return s>=m?n(o,s,m,"day"):s>=_?n(o,s,_,"hour"):s>=d?n(o,s,d,"minute"):s>=r?n(o,s,r,"second"):o+" ms"}function n(o,s,i,e){var l=s>=i*1.5;return Math.round(o/i)+" "+e+(l?"s":"")}}}]);
