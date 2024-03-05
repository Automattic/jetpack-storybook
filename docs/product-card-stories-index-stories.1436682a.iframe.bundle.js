(()=>{var z=Object.defineProperty;var X=(C,l,n)=>l in C?z(C,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):C[l]=n;var W=(C,l,n)=>(X(C,typeof l!="symbol"?l+"":l,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(C,l,n)=>{var h,_,T,A,F,w,O,b,I,D,U,B;"use strict";n.r(l),n.d(l,{Default:()=>e,WithChildren:()=>a,WithMenu:()=>d,WithMenuForStandalone:()=>f,__namedExportsOrder:()=>P,default:()=>s});var u=n("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),E=n("../../packages/my-jetpack/_inc/state/store.js"),t=n("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),g=n("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),S=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=`/* eslint-disable react/react-in-jsx-scope */
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

initStore();

export default {
	title: 'Packages/My Jetpack/Product Card',
	component: ProductCard,
	parameters: {
		layout: 'centered',
		actions: {
			argTypesRegex: '^on.*',
		},
		controls: {
			exclude: '^on.*',
		},
		backgrounds: {
			default: 'light',
			values: [ { name: 'light', value: 'var(--jp-white-off)' } ],
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '100vw', maxWidth: 400 } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		menuItems: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		slug: {
			control: 'select',
			options: [
				'anti-spam',
				'backup',
				'boost',
				'crm',
				'extras',
				'protect',
				'scan',
				'social',
				'search',
				'videopress',
			],
		},
		status: {
			control: 'select',
			options: [
				PRODUCT_STATUSES.ACTIVE,
				PRODUCT_STATUSES.INACTIVE,
				PRODUCT_STATUSES.ERROR,
				PRODUCT_STATUSES.ABSENT,
				PRODUCT_STATUSES.ABSENT_WITH_PLAN,
				PRODUCT_STATUSES.NEEDS_PURCHASE,
				PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE,
			],
		},
	},
};

const Template = args => <ProductCard { ...args } />;

const DefaultArgs = {
	name: 'Backup',
	description: 'Save every change',
	status: PRODUCT_STATUSES.ACTIVE,
	admin: true,
	slug: 'backup',
	isFetching: false,
	showMenu: false,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const WithChildren = Template.bind( {} );
WithChildren.args = {
	...DefaultArgs,
	children: <div>Card Children</div>,
};

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
};

export const WithMenuForStandalone = Template.bind( {} );
WithMenuForStandalone.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
	onInstallStandalone: () => alert( 'Installing standalone plugin' ),
	onActivateStandalone: () => alert( 'Activating standalone plugin' ),
	hasStandalonePlugin: true,
	isStandaloneInstalled: false,
	isStandaloneActive: false,
};
`,i={Default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithChildren:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenu:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenuForStandalone:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}};window.myJetpackRest={},(0,E.N)();const s={title:"Packages/My Jetpack/Product Card",component:t.ZP,parameters:{storySource:{source:`
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

initStore();

export default {
	title: 'Packages/My Jetpack/Product Card',
	component: ProductCard,
	parameters: {
		layout: 'centered',
		actions: {
			argTypesRegex: '^on.*',
		},
		controls: {
			exclude: '^on.*',
		},
		backgrounds: {
			default: 'light',
			values: [ { name: 'light', value: 'var(--jp-white-off)' } ],
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '100vw', maxWidth: 400 } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		menuItems: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		slug: {
			control: 'select',
			options: [
				'anti-spam',
				'backup',
				'boost',
				'crm',
				'extras',
				'protect',
				'scan',
				'social',
				'search',
				'videopress',
			],
		},
		status: {
			control: 'select',
			options: [
				PRODUCT_STATUSES.ACTIVE,
				PRODUCT_STATUSES.INACTIVE,
				PRODUCT_STATUSES.ERROR,
				PRODUCT_STATUSES.ABSENT,
				PRODUCT_STATUSES.ABSENT_WITH_PLAN,
				PRODUCT_STATUSES.NEEDS_PURCHASE,
				PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE,
			],
		},
	},
};

const Template = args => <ProductCard { ...args } />;

const DefaultArgs = {
	name: 'Backup',
	description: 'Save every change',
	status: PRODUCT_STATUSES.ACTIVE,
	admin: true,
	slug: 'backup',
	isFetching: false,
	showMenu: false,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const WithChildren = Template.bind( {} );
WithChildren.args = {
	...DefaultArgs,
	children: <div>Card Children</div>,
};

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
};

export const WithMenuForStandalone = Template.bind( {} );
WithMenuForStandalone.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
	onInstallStandalone: () => alert( 'Installing standalone plugin' ),
	onActivateStandalone: () => alert( 'Activating standalone plugin' ),
	hasStandalonePlugin: true,
	isStandaloneInstalled: false,
	isStandaloneActive: false,
};
`,locationsMap:{default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-children":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu-for-standalone":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[R=>(0,S.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,S.jsx)(R,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[g.N.ACTIVE,g.N.INACTIVE,g.N.ERROR,g.N.ABSENT,g.N.ABSENT_WITH_PLAN,g.N.NEEDS_PURCHASE,g.N.NEEDS_PURCHASE_OR_FREE]}}},c=R=>(0,S.jsx)(t.ZP,{...R});c.displayName="Template";const m={name:"Backup",description:"Save every change",status:g.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},e=c.bind({});e.args=m;const a=c.bind({});a.args={...m,children:(0,S.jsx)("div",{children:"Card Children"})};const d=c.bind({});d.args={...m,showMenu:!0,menuItems:[{label:"Upload",icon:u.Z}]};const f=c.bind({});f.args={...m,showMenu:!0,menuItems:[{label:"Upload",icon:u.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ProductCard {...args} />",...(T=(_=e.parameters)==null?void 0:_.docs)==null?void 0:T.source}}},a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ProductCard {...args} />",...(w=(F=a.parameters)==null?void 0:F.docs)==null?void 0:w.source}}},d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:"args => <ProductCard {...args} />",...(I=(b=d.parameters)==null?void 0:b.docs)==null?void 0:I.source}}},f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"args => <ProductCard {...args} />",...(B=(U=f.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const P=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(C,l,n)=>{"use strict";n.d(l,{Z:()=>t});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,u.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(p.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(C,l,n)=>{"use strict";n.d(l,{Z:()=>t});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,u.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(p.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(C,l,n)=>{"use strict";n.d(l,{Z:()=>t});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,u.createElement)(p.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(p.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../packages/my-jetpack/_inc/state/store.js":(C,l,n)=>{"use strict";n.d(l,{t:()=>L,N:()=>V});var u=n("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js");const p="my-jetpack/v1",E="jetpack/v4/stats-app",t=`${p}/site/dismiss-welcome-banner`,g=o=>`${E}/sites/${o}/stats/highlights`,S="SET_STATS_COUNTS_IS_FETCHING",y="SET_STATS_COUNTS",i="SET_DISMISSED_WELCOME_BANNER_IS_FETCHING",s="SET_DISMISSED_WELCOME_BANNER",c="SET_GLOBAL_NOTICE",m="CLEAN_GLOBAL_NOTICE",e=o=>({type:S,isFetching:o}),a=o=>({type:y,statsCounts:o}),d=o=>({type:i,isFetching:o}),f=o=>({type:s,hasBeenDismissed:o}),A={setStatsCounts:a,setStatsCountsIsFetching:e,dismissWelcomeBanner:()=>async o=>{const{dispatch:r}=o;return r(d(!0)),(0,u.Z)({path:t,method:"POST"}).then(()=>{r(f(!0))}).finally(()=>{r(d(!1))})},...{setGlobalNotice:(o,r)=>({type:"SET_GLOBAL_NOTICE",message:o,options:r}),cleanGlobalNotice:()=>({type:"CLEAN_GLOBAL_NOTICE"})}};var F=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const w=(o={global:{}},r)=>{switch(r.type){case c:{const{message:v,options:x}=r;return{...o,global:{message:v,options:x}}}case m:return{...o,global:{}};default:return o}},O=(o={})=>o,b=(o={},r)=>{switch(r.type){case S:return{...o,isFetching:r.isFetching};case y:return{...o,data:(r==null?void 0:r.statsCounts)||{}};default:return o}},I=(o={},r)=>{switch(r.type){case i:return{...o,isFetching:r.isFetching};case s:return{...o,hasBeenDismissed:r.hasBeenDismissed};default:return o}},D=(o={},r)=>{switch(r.type){default:return o}},B=(0,F.UY)({notices:w,plugins:O,statsCounts:b,welcomeBanner:I,lifecycleStats:D});var R=n("../connection/state/store.jsx");const k={...{getStatsCounts:()=>async o=>{const{dispatch:r,registry:v}=o;r.setStatsCountsIsFetching(!0);const x=v.select(R.t).getBlogId();try{r.setStatsCounts(await(0,u.Z)({path:g(x)})),r.setStatsCountsIsFetching(!1)}catch(j){r.setStatsCountsIsFetching(!1)}}}},G=o=>{var r;return(r=o.statsCounts)==null?void 0:r.data},K=o=>o.lifecycleStats,H={...{getStatsCounts:G,isFetchingStatsCounts:o=>{var r;return((r=o.statsCounts)==null?void 0:r.isFetching)||!1}},...{getGlobalNotice:o=>{var r;return(r=o.notices)==null?void 0:r.global}},getWelcomeBannerHasBeenDismissed:o=>{var r;return(r=o.welcomeBanner)==null?void 0:r.hasBeenDismissed},getGuessedSiteLifecycleStatus:o=>{const{modules:r,purchases:v,plugins:x,isSiteConnected:j,isUserConnected:$}=K(o);return v.length===0&&r.length<3?(!$||!j)&&r.length===0&&x.length===1?"brand-new":"new":v.length===1&&r.length<10?"settling-in":"established"}};var J=n("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const M=class{static mayBeInit(r,v){M.store===null&&(M.store=(0,J.Z)(r,v),(0,F.z2)(M.store))}};let N=M;W(N,"store",null);const Z=N,L="my-jetpack";function V(){Z.mayBeInit(L,{__experimentalUseThunks:!0,reducer:B,actions:A,selectors:H,resolvers:k,initialState:window.myJetpackInitialState||{}})}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(C,l,n)=>{var u=n("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");l.formatArgs=E,l.save=t,l.load=g,l.useColors=p,l.storage=S(),l.destroy=(()=>{let i=!1;return()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),l.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function p(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function E(i){if(i[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+i[0]+(this.useColors?"%c ":" ")+"+"+C.exports.humanize(this.diff),!this.useColors)return;const s="color: "+this.color;i.splice(1,0,s,"color: inherit");let c=0,m=0;i[0].replace(/%[a-zA-Z%]/g,e=>{e!=="%%"&&(c++,e==="%c"&&(m=c))}),i.splice(m,0,s)}l.log=console.debug||console.log||(()=>{});function t(i){try{i?l.storage.setItem("debug",i):l.storage.removeItem("debug")}catch(s){}}function g(){let i;try{i=l.storage.getItem("debug")}catch(s){}return!i&&typeof u!="undefined"&&"env"in u&&(i=u.env.DEBUG),i}function S(){try{return localStorage}catch(i){}}C.exports=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(l);const{formatters:y}=C.exports;y.j=function(i){try{return JSON.stringify(i)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(C,l,n)=>{function u(p){t.debug=t,t.default=t,t.coerce=c,t.disable=y,t.enable=S,t.enabled=i,t.humanize=n("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),t.destroy=m,Object.keys(p).forEach(e=>{t[e]=p[e]}),t.names=[],t.skips=[],t.formatters={};function E(e){let a=0;for(let d=0;d<e.length;d++)a=(a<<5)-a+e.charCodeAt(d),a|=0;return t.colors[Math.abs(a)%t.colors.length]}t.selectColor=E;function t(e){let a,d=null,f,P;function h(..._){if(!h.enabled)return;const T=h,A=Number(new Date),F=A-(a||A);T.diff=F,T.prev=a,T.curr=A,a=A,_[0]=t.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");let w=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,(b,I)=>{if(b==="%%")return"%";w++;const D=t.formatters[I];if(typeof D=="function"){const U=_[w];b=D.call(T,U),_.splice(w,1),w--}return b}),t.formatArgs.call(T,_),(T.log||t.log).apply(T,_)}return h.namespace=e,h.useColors=t.useColors(),h.color=t.selectColor(e),h.extend=g,h.destroy=t.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(f!==t.namespaces&&(f=t.namespaces,P=t.enabled(e)),P),set:_=>{d=_}}),typeof t.init=="function"&&t.init(h),h}function g(e,a){const d=t(this.namespace+(typeof a=="undefined"?":":a)+e);return d.log=this.log,d}function S(e){t.save(e),t.namespaces=e,t.names=[],t.skips=[];let a;const d=(typeof e=="string"?e:"").split(/[\s,]+/),f=d.length;for(a=0;a<f;a++)d[a]&&(e=d[a].replace(/\*/g,".*?"),e[0]==="-"?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function y(){const e=[...t.names.map(s),...t.skips.map(s).map(a=>"-"+a)].join(",");return t.enable(""),e}function i(e){if(e[e.length-1]==="*")return!0;let a,d;for(a=0,d=t.skips.length;a<d;a++)if(t.skips[a].test(e))return!1;for(a=0,d=t.names.length;a<d;a++)if(t.names[a].test(e))return!0;return!1}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}function c(e){return e instanceof Error?e.stack||e.message:e}function m(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}C.exports=u},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":C=>{var l=1e3,n=l*60,u=n*60,p=u*24,E=p*7,t=p*365.25;C.exports=function(s,c){c=c||{};var m=typeof s;if(m==="string"&&s.length>0)return g(s);if(m==="number"&&isFinite(s))return c.long?y(s):S(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};function g(s){if(s=String(s),!(s.length>100)){var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(s);if(c){var m=parseFloat(c[1]),e=(c[2]||"ms").toLowerCase();switch(e){case"years":case"year":case"yrs":case"yr":case"y":return m*t;case"weeks":case"week":case"w":return m*E;case"days":case"day":case"d":return m*p;case"hours":case"hour":case"hrs":case"hr":case"h":return m*u;case"minutes":case"minute":case"mins":case"min":case"m":return m*n;case"seconds":case"second":case"secs":case"sec":case"s":return m*l;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return m;default:return}}}}function S(s){var c=Math.abs(s);return c>=p?Math.round(s/p)+"d":c>=u?Math.round(s/u)+"h":c>=n?Math.round(s/n)+"m":c>=l?Math.round(s/l)+"s":s+"ms"}function y(s){var c=Math.abs(s);return c>=p?i(s,c,p,"day"):c>=u?i(s,c,u,"hour"):c>=n?i(s,c,n,"minute"):c>=l?i(s,c,l,"second"):s+" ms"}function i(s,c,m,e){var a=c>=m*1.5;return Math.round(s/m)+" "+e+(a?"s":"")}}}]);})();
