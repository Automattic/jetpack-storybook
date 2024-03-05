(()=>{var nt=Object.defineProperty;var st=(C,l,o)=>l in C?nt(C,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):C[l]=o;var G=(C,l,o)=>(st(C,typeof l!="symbol"?l+"":l,o),o);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(C,l,o)=>{var S,_,T,A,P,b,N,F,O,I,L,B;"use strict";o.r(l),o.d(l,{Default:()=>n,WithChildren:()=>a,WithMenu:()=>d,WithMenuForStandalone:()=>E,__namedExportsOrder:()=>D,default:()=>r});var u=o("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),p=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=o("../../packages/my-jetpack/_inc/state/store.js"),t=o("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),g=o("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),h=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=`/* eslint-disable react/react-in-jsx-scope */
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
`,i={Default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithChildren:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenu:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenuForStandalone:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}};window.myJetpackRest={},(0,f.N)();const r={title:"Packages/My Jetpack/Product Card",component:t.ZP,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-children":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu-for-standalone":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[R=>(0,h.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,h.jsx)(R,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[g.N.ACTIVE,g.N.INACTIVE,g.N.ERROR,g.N.ABSENT,g.N.ABSENT_WITH_PLAN,g.N.NEEDS_PURCHASE,g.N.NEEDS_PURCHASE_OR_FREE]}}},c=R=>(0,h.jsx)(t.ZP,{...R});c.displayName="Template";const m={name:"Backup",description:"Save every change",status:g.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},n=c.bind({});n.args=m;const a=c.bind({});a.args={...m,children:(0,h.jsx)("div",{children:"Card Children"})};const d=c.bind({});d.args={...m,showMenu:!0,menuItems:[{label:"Upload",icon:u.Z}]};const E=c.bind({});E.args={...m,showMenu:!0,menuItems:[{label:"Upload",icon:u.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"args => <ProductCard {...args} />",...(T=(_=n.parameters)==null?void 0:_.docs)==null?void 0:T.source}}},a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ProductCard {...args} />",...(b=(P=a.parameters)==null?void 0:P.docs)==null?void 0:b.source}}},d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:"args => <ProductCard {...args} />",...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}},E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:"args => <ProductCard {...args} />",...(B=(L=E.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const D=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(C,l,o)=>{"use strict";o.d(l,{Z:()=>t});var u=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,u.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(p.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(C,l,o)=>{"use strict";o.d(l,{Z:()=>t});var u=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,u.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(p.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(C,l,o)=>{"use strict";o.d(l,{Z:()=>t});var u=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,u.createElement)(p.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(p.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../packages/my-jetpack/_inc/state/store.js":(C,l,o)=>{"use strict";o.d(l,{t:()=>k,N:()=>et});var u=o("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js");const p="my-jetpack/v1",f="jetpack/v4/stats-app",t=`${p}/site/dismiss-welcome-banner`,g=e=>`${f}/sites/${e}/stats/highlights`,h="SET_AVAILABLE_LICENSES_IS_FETCHING",w="FETCH_AVAILABLE_LICENSES",i="SET_AVAILABLE_LICENSES",r="SET_STATS_COUNTS_IS_FETCHING",c="SET_STATS_COUNTS",m="SET_DISMISSED_WELCOME_BANNER_IS_FETCHING",n="SET_DISMISSED_WELCOME_BANNER",a="SET_GLOBAL_NOTICE",d="CLEAN_GLOBAL_NOTICE",E=e=>({type:r,isFetching:e}),D=e=>({type:h,isFetching:e}),S=()=>({type:w}),_=e=>({type:i,availableLicenses:e}),T=e=>({type:c,statsCounts:e}),A=e=>({type:m,isFetching:e}),P=e=>({type:n,hasBeenDismissed:e}),I={setAvailableLicensesIsFetching:D,fetchAvailableLicenses:S,setAvailableLicenses:_,setStatsCounts:T,setStatsCountsIsFetching:E,dismissWelcomeBanner:()=>async e=>{const{dispatch:s}=e;return s(A(!0)),(0,u.Z)({path:t,method:"POST"}).then(()=>{s(P(!0))}).finally(()=>{s(A(!1))})},...{setGlobalNotice:(e,s)=>({type:"SET_GLOBAL_NOTICE",message:e,options:s}),cleanGlobalNotice:()=>({type:"CLEAN_GLOBAL_NOTICE"})}};var L=o("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const B=(e={},s)=>{switch(s.type){case h:return{...e,isFetching:s.isFetching};case i:return{...e,items:(s==null?void 0:s.availableLicenses)||[]};default:return e}},R=(e={global:{}},s)=>{switch(s.type){case a:{const{message:y,options:v}=s;return{...e,global:{message:y,options:v}}}case d:return{...e,global:{}};default:return e}},H=(e={})=>e,V=(e={},s)=>{switch(s.type){case r:return{...e,isFetching:s.isFetching};case c:return{...e,data:(s==null?void 0:s.statsCounts)||{}};default:return e}},K=(e={},s)=>{switch(s.type){case m:return{...e,isFetching:s.isFetching};case n:return{...e,hasBeenDismissed:s.hasBeenDismissed};default:return e}},J=(e={},s)=>{switch(s.type){default:return e}},Z=(0,L.UY)({availableLicenses:B,notices:R,plugins:H,statsCounts:V,welcomeBanner:K,lifecycleStats:J});var j=o("../api/index.jsx"),$=o("../connection/state/store.jsx");const z={...{getAvailableLicenses:()=>async({dispatch:e})=>{e.setAvailableLicensesIsFetching(!0);try{const{apiRoot:s,apiNonce:y}=(window==null?void 0:window.myJetpackRest)||{};j.ZP.setApiRoot(s),j.ZP.setApiNonce(y);const v=await j.ZP.getUserLicenses();v&&v.items?e.setAvailableLicenses(v.items.filter(({attached_at:x,revoked_at:W})=>x===null&&W===null)):e.setAvailableLicenses([])}catch(s){e.setAvailableLicenses([])}finally{e.setAvailableLicensesIsFetching(!1)}},getStatsCounts:()=>async e=>{const{dispatch:s,registry:y}=e;s.setStatsCountsIsFetching(!0);const v=y.select($.t).getBlogId();try{s.setStatsCounts(await(0,u.Z)({path:g(v)})),s.setStatsCountsIsFetching(!1)}catch(x){s.setStatsCountsIsFetching(!1)}}}},X=e=>{var s;return(s=e.statsCounts)==null?void 0:s.data},Y=e=>e.lifecycleStats,Q={...{getStatsCounts:X,isFetchingStatsCounts:e=>{var s;return((s=e.statsCounts)==null?void 0:s.isFetching)||!1}},...{getGlobalNotice:e=>{var s;return(s=e.notices)==null?void 0:s.global}},getWelcomeBannerHasBeenDismissed:e=>{var s;return(s=e.welcomeBanner)==null?void 0:s.hasBeenDismissed},getGuessedSiteLifecycleStatus:e=>{const{modules:s,purchases:y,plugins:v,isSiteConnected:x,isUserConnected:W}=Y(e);return y.length===0&&s.length<3?(!W||!x)&&s.length===0&&v.length===1?"brand-new":"new":y.length===1&&s.length<10?"settling-in":"established"}};var q=o("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const U=class{static mayBeInit(s,y){U.store===null&&(U.store=(0,q.Z)(s,y),(0,L.z2)(U.store))}};let M=U;G(M,"store",null);const tt=M,k="my-jetpack";function et(){tt.mayBeInit(k,{__experimentalUseThunks:!0,reducer:Z,actions:I,selectors:Q,resolvers:z,initialState:window.myJetpackInitialState||{}})}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(C,l,o)=>{var u=o("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");l.formatArgs=f,l.save=t,l.load=g,l.useColors=p,l.storage=h(),l.destroy=(()=>{let i=!1;return()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),l.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function p(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function f(i){if(i[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+i[0]+(this.useColors?"%c ":" ")+"+"+C.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;i.splice(1,0,r,"color: inherit");let c=0,m=0;i[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(c++,n==="%c"&&(m=c))}),i.splice(m,0,r)}l.log=console.debug||console.log||(()=>{});function t(i){try{i?l.storage.setItem("debug",i):l.storage.removeItem("debug")}catch(r){}}function g(){let i;try{i=l.storage.getItem("debug")}catch(r){}return!i&&typeof u!="undefined"&&"env"in u&&(i=u.env.DEBUG),i}function h(){try{return localStorage}catch(i){}}C.exports=o("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(l);const{formatters:w}=C.exports;w.j=function(i){try{return JSON.stringify(i)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(C,l,o)=>{function u(p){t.debug=t,t.default=t,t.coerce=c,t.disable=w,t.enable=h,t.enabled=i,t.humanize=o("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),t.destroy=m,Object.keys(p).forEach(n=>{t[n]=p[n]}),t.names=[],t.skips=[],t.formatters={};function f(n){let a=0;for(let d=0;d<n.length;d++)a=(a<<5)-a+n.charCodeAt(d),a|=0;return t.colors[Math.abs(a)%t.colors.length]}t.selectColor=f;function t(n){let a,d=null,E,D;function S(..._){if(!S.enabled)return;const T=S,A=Number(new Date),P=A-(a||A);T.diff=P,T.prev=a,T.curr=A,a=A,_[0]=t.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");let b=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,(F,O)=>{if(F==="%%")return"%";b++;const I=t.formatters[O];if(typeof I=="function"){const L=_[b];F=I.call(T,L),_.splice(b,1),b--}return F}),t.formatArgs.call(T,_),(T.log||t.log).apply(T,_)}return S.namespace=n,S.useColors=t.useColors(),S.color=t.selectColor(n),S.extend=g,S.destroy=t.destroy,Object.defineProperty(S,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(E!==t.namespaces&&(E=t.namespaces,D=t.enabled(n)),D),set:_=>{d=_}}),typeof t.init=="function"&&t.init(S),S}function g(n,a){const d=t(this.namespace+(typeof a=="undefined"?":":a)+n);return d.log=this.log,d}function h(n){t.save(n),t.namespaces=n,t.names=[],t.skips=[];let a;const d=(typeof n=="string"?n:"").split(/[\s,]+/),E=d.length;for(a=0;a<E;a++)d[a]&&(n=d[a].replace(/\*/g,".*?"),n[0]==="-"?t.skips.push(new RegExp("^"+n.slice(1)+"$")):t.names.push(new RegExp("^"+n+"$")))}function w(){const n=[...t.names.map(r),...t.skips.map(r).map(a=>"-"+a)].join(",");return t.enable(""),n}function i(n){if(n[n.length-1]==="*")return!0;let a,d;for(a=0,d=t.skips.length;a<d;a++)if(t.skips[a].test(n))return!1;for(a=0,d=t.names.length;a<d;a++)if(t.names[a].test(n))return!0;return!1}function r(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}function c(n){return n instanceof Error?n.stack||n.message:n}function m(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}C.exports=u},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":C=>{var l=1e3,o=l*60,u=o*60,p=u*24,f=p*7,t=p*365.25;C.exports=function(r,c){c=c||{};var m=typeof r;if(m==="string"&&r.length>0)return g(r);if(m==="number"&&isFinite(r))return c.long?w(r):h(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function g(r){if(r=String(r),!(r.length>100)){var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(c){var m=parseFloat(c[1]),n=(c[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return m*t;case"weeks":case"week":case"w":return m*f;case"days":case"day":case"d":return m*p;case"hours":case"hour":case"hrs":case"hr":case"h":return m*u;case"minutes":case"minute":case"mins":case"min":case"m":return m*o;case"seconds":case"second":case"secs":case"sec":case"s":return m*l;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return m;default:return}}}}function h(r){var c=Math.abs(r);return c>=p?Math.round(r/p)+"d":c>=u?Math.round(r/u)+"h":c>=o?Math.round(r/o)+"m":c>=l?Math.round(r/l)+"s":r+"ms"}function w(r){var c=Math.abs(r);return c>=p?i(r,c,p,"day"):c>=u?i(r,c,u,"hour"):c>=o?i(r,c,o,"minute"):c>=l?i(r,c,l,"second"):r+" ms"}function i(r,c,m,n){var a=c>=m*1.5;return Math.round(r/m)+" "+n+(a?"s":"")}}}]);})();
