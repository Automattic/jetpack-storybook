"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(S,p,e)=>{var y,D,P,f,U,C,O,h,A,I,M,R;e.r(p),e.d(p,{Default:()=>o,WithChildren:()=>a,WithMenu:()=>u,WithMenuForStandalone:()=>m,__namedExportsOrder:()=>T,default:()=>E});var d=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../packages/my-jetpack/_inc/state/store.js"),i=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),s=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=`/* eslint-disable react/react-in-jsx-scope */
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
`,c={Default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithChildren:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenu:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenuForStandalone:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}};window.myJetpackRest={},(0,r.N)();const E={title:"Packages/My Jetpack/Product Card",component:i.ZP,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-children":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu-for-standalone":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[v=>(0,_.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,_.jsx)(v,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[s.N.ACTIVE,s.N.INACTIVE,s.N.ERROR,s.N.ABSENT,s.N.ABSENT_WITH_PLAN,s.N.NEEDS_PURCHASE,s.N.NEEDS_PURCHASE_OR_FREE]}}},t=v=>(0,_.jsx)(i.ZP,{...v});t.displayName="Template";const n={name:"Backup",description:"Save every change",status:s.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},o=t.bind({});o.args=n;const a=t.bind({});a.args={...n,children:(0,_.jsx)("div",{children:"Card Children"})};const u=t.bind({});u.args={...n,showMenu:!0,menuItems:[{label:"Upload",icon:d.Z}]};const m=t.bind({});m.args={...n,showMenu:!0,menuItems:[{label:"Upload",icon:d.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"args => <ProductCard {...args} />",...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.source}}},a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"args => <ProductCard {...args} />",...(C=(U=a.parameters)==null?void 0:U.docs)==null?void 0:C.source}}},u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:"args => <ProductCard {...args} />",...(A=(h=u.parameters)==null?void 0:h.docs)==null?void 0:A.source}}},m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"args => <ProductCard {...args} />",...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const T=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(S,p,e)=>{e.d(p,{Z:()=>i});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,d.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(l.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(S,p,e)=>{e.d(p,{Z:()=>i});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,d.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(l.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(S,p,e)=>{e.d(p,{Z:()=>i});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,d.createElement)(l.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,d.createElement)(l.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../analytics/index.jsx":(S,p,e)=>{e.d(p,{Z:()=>E});var d=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),l=e.n(d);const r=l()("dops:analytics");let i,s;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function _(t,n){let o="";if(typeof t=="object"){for(const a in t)o+="&x_"+encodeURIComponent(a)+"="+encodeURIComponent(t[a]);r("Bumping stats %o",t)}else o="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(n),r('Bumping stat "%s" in group "%s"',n,t);return o}function w(t,n){let o="";if(typeof t=="object"){for(const a in t)o+="&"+encodeURIComponent(a)+"="+encodeURIComponent(t[a]);r("Built stats %o",t)}else o="&"+encodeURIComponent(t)+"="+encodeURIComponent(n),r('Built stat "%s" in group "%s"',n,t);return o}const c={initialize:function(t,n,o){c.setUser(t,n),c.setSuperProps(o),c.identifyUser()},setGoogleAnalyticsEnabled:function(t,n=null){this.googleAnalyticsEnabled=t,this.googleAnalyticsKey=n},setMcAnalyticsEnabled:function(t){this.mcAnalyticsEnabled=t},setUser:function(t,n){s={ID:t,username:n}},setSuperProps:function(t){i=t},assignSuperProps:function(t){i=Object.assign(i||{},t)},mc:{bumpStat:function(t,n){const o=_(t,n);c.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+o+"&t="+Math.random())},bumpStatWithPageView:function(t,n){const o=w(t,n);c.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+o+"&t="+Math.random())}},pageView:{record:function(t,n){c.tracks.recordPageView(t),c.ga.recordPageView(t,n)}},purchase:{record:function(t,n,o,a,u,m,T){c.ga.recordPurchase(t,n,o,a,u,m,T)}},tracks:{recordEvent:function(t,n){if(n=n||{},t.indexOf("akismet_")!==0&&t.indexOf("jetpack_")!==0){r('- Event name must be prefixed by "akismet_" or "jetpack_"');return}i&&(r("- Super Props: %o",i),n=Object.assign(n,i)),r('Record event "%s" called with props %s',t,JSON.stringify(n)),window._tkq.push(["recordEvent",t,n])},recordJetpackClick:function(t){const n=typeof t=="object"?t:{target:t};c.tracks.recordEvent("jetpack_wpa_click",n)},recordPageView:function(t){c.tracks.recordEvent("akismet_page_view",{path:t})},setOptOut:function(t){r("Pushing setOptOut: %o",t),window._tkq.push(["setOptOut",t])}},ga:{initialized:!1,initialize:function(){let t={};c.ga.initialized||(s&&(t={userId:"u-"+s.ID}),window.ga("create",this.googleAnalyticsKey,"auto",t),c.ga.initialized=!0)},recordPageView:function(t,n){c.ga.initialize(),r("Recording Page View ~ [URL: "+t+"] [Title: "+n+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",t),window.ga("send",{hitType:"pageview",page:t,title:n}))},recordEvent:function(t,n,o,a){c.ga.initialize();let u="Recording Event ~ [Category: "+t+"] [Action: "+n+"]";typeof o!="undefined"&&(u+=" [Option Label: "+o+"]"),typeof a!="undefined"&&(u+=" [Option Value: "+a+"]"),r(u),this.googleAnalyticsEnabled&&window.ga("send","event",t,n,o,a)},recordPurchase:function(t,n,o,a,u,m,T){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:t,revenue:a,currency:T}),window.ga("ecommerce:addItem",{id:t,name:n,sku:o,price:u,quantity:m}),window.ga("ecommerce:send")}},identifyUser:function(){s&&window._tkq.push(["identifyUser",s.ID,s.username])},setProperties:function(t){window._tkq.push(["setProperties",t])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},E=c},"../connection/components/use-connection/index.jsx":(S,p,e)=>{e.d(p,{Z:()=>w});var d=e("../api/index.jsx"),l=e("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),r=e("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../connection/state/store.jsx");const _=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},w=({registrationNonce:c=_.registrationNonce,apiRoot:E=_.apiRoot,apiNonce:t=_.apiNonce,redirectUri:n,autoTrigger:o,from:a,skipUserConnection:u}={})=>{const{registerSite:m,connectUser:T,refreshConnectedPlugins:y}=(0,l.Z)(s.t),D=(0,r.Z)(g=>g(s.t).getRegistrationError()),{siteIsRegistering:P,userIsConnecting:f,userConnectionData:U,connectedPlugins:C,connectionErrors:O,isRegistered:h,isUserConnected:A,hasConnectedOwner:I,isOfflineMode:M}=(0,r.Z)(g=>({siteIsRegistering:g(s.t).getSiteIsRegistering(),userIsConnecting:g(s.t).getUserIsConnecting(),userConnectionData:g(s.t).getUserConnectionData(),connectedPlugins:g(s.t).getConnectedPlugins(),connectionErrors:g(s.t).getConnectionErrors(),isOfflineMode:g(s.t).getIsOfflineMode(),...g(s.t).getConnectionStatus()})),R=()=>{if(u){if(n)return window.location=n,Promise.resolve(n)}else return T({from:a,redirectUri:n});return Promise.resolve()},v=g=>(g&&g.preventDefault(),h?R():m({registrationNonce:c,redirectUri:n}).then(()=>R()));return(0,i.useEffect)(()=>{d.ZP.setApiRoot(E),d.ZP.setApiNonce(t)},[E,t]),(0,i.useEffect)(()=>{o&&!P&&!f&&v()},[]),{handleRegisterSite:v,handleConnectUser:R,refreshConnectedPlugins:y,isRegistered:h,isUserConnected:A,siteIsRegistering:P,userIsConnecting:f,registrationError:D,userConnectionData:U,hasConnectedOwner:I,connectedPlugins:C,connectionErrors:O,isOfflineMode:M}}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(S,p,e)=>{e.d(p,{Z:()=>s});var d=e("../analytics/index.jsx"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const s=()=>{var C;const{isUserConnected:_,connectedPlugins:w,userConnectionData:c={}}=(0,r.Z)(),{login:E,ID:t}=((C=c.currentUser)==null?void 0:C.wpcomUser)||{};(0,l.useEffect)(()=>{_&&t&&E&&d.Z.initialize(t,E)},[t,_,E]);const n=Object.keys(w||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:o,ga:a,mc:u,pageView:m,purchase:T,setGoogleAnalyticsEnabled:y,setMcAnalyticsEnabled:D,setProperties:P,tracks:f}=d.Z,U=(0,l.useCallback)((O,h)=>{var A;f.recordEvent(O,{...h,version:(A=window==null?void 0:window.myJetpackInitialState)==null?void 0:A.myJetpackVersion,referring_plugins:n})},[]);return{clearedIdentity:o,ga:a,mc:u,pageView:m,purchase:T,recordEvent:U,setGoogleAnalyticsEnabled:y,setMcAnalyticsEnabled:D,setProperties:P,tracks:f}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(S,p,e)=>{e.d(p,{Z:()=>l});var d=e("../connection/components/use-connection/index.jsx");function l(){const{apiRoot:r,apiNonce:i}=myJetpackRest,{topJetpackMenuItemUrl:s}=myJetpackInitialState,_=(0,d.Z)({apiRoot:r,apiNonce:i}),{registrationNonce:w}=JP_CONNECTION_INITIAL_STATE,c=_.isRegistered;return{apiNonce:i,apiRoot:r,registrationNonce:w,..._,isSiteConnected:c,topJetpackMenuItemUrl:s}}}}]);})();
