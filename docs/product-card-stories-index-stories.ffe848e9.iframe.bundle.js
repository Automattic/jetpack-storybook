"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(C,_,n)=>{var v,y,A,h,R,l,P,S,O,M,I,D;n.r(_),n.d(_,{Default:()=>o,WithChildren:()=>c,WithMenu:()=>m,WithMenuForStandalone:()=>E,__namedExportsOrder:()=>w,default:()=>g});var r=n("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../packages/my-jetpack/_inc/state/store.js"),a=n("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),s=n("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),T=`/* eslint-disable react/react-in-jsx-scope */
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
`,i={Default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithChildren:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenu:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},WithMenuForStandalone:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}};window.myJetpackRest={},(0,d.N)();const g={title:"Packages/My Jetpack/Product Card",component:a.ZP,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-children":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}},"with-menu-for-standalone":{startLoc:{col:17,line:76},endLoc:{col:52,line:76},startBody:{col:17,line:76},endBody:{col:52,line:76}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[U=>(0,u.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,u.jsx)(U,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[s.N.ACTIVE,s.N.INACTIVE,s.N.ERROR,s.N.ABSENT,s.N.ABSENT_WITH_PLAN,s.N.NEEDS_PURCHASE,s.N.NEEDS_PURCHASE_OR_FREE]}}},t=U=>(0,u.jsx)(a.ZP,{...U});t.displayName="Template";const e={name:"Backup",description:"Save every change",status:s.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},o=t.bind({});o.args=e;const c=t.bind({});c.args={...e,children:(0,u.jsx)("div",{children:"Card Children"})};const m=t.bind({});m.args={...e,showMenu:!0,menuItems:[{label:"Upload",icon:r.Z}]};const E=t.bind({});E.args={...e,showMenu:!0,menuItems:[{label:"Upload",icon:r.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ProductCard {...args} />",...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}},c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ProductCard {...args} />",...(l=(R=c.parameters)==null?void 0:R.docs)==null?void 0:l.source}}},m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:"args => <ProductCard {...args} />",...(O=(S=m.parameters)==null?void 0:S.docs)==null?void 0:O.source}}},E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:"args => <ProductCard {...args} />",...(D=(I=E.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const w=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(C,_,n)=>{n.d(_,{Z:()=>o});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=n.n(p),a=n("../../../node_modules/.pnpm/@wordpress+compose@6.27.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),s=n("../../../node_modules/.pnpm/@wordpress+deprecated@3.50.0/node_modules/@wordpress/deprecated/build-module/index.js"),u=n("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),T=n("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),i=n("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),g=n("../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const t=(c,m)=>{const{renderContent:E,renderToggle:w,className:v,contentClassName:y,expandOnMobile:A,headerTitle:h,focusOnMount:R,popoverProps:l,onClose:P,onToggle:S,style:O,open:M,defaultOpen:I,position:D,variant:U}=(0,u.y)(c,"Dropdown");D!==void 0&&(0,s.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[f,K]=(0,r.useState)(null),x=(0,r.useRef)(),[b,B]=(0,i.O)({defaultValue:I,value:M,onChange:S});function V(){var N;if(!x.current)return;const{ownerDocument:j}=x.current,L=(N=j==null?void 0:j.activeElement)==null?void 0:N.closest('[role="dialog"]');!x.current.contains(j.activeElement)&&(!L||L.contains(x.current))&&W()}function W(){P==null||P(),B(!1)}const k={isOpen:!!b,onToggle:()=>B(!b),onClose:W},F=!!(l!=null&&l.anchor)||!!(l!=null&&l.anchorRef)||!!(l!=null&&l.getAnchorRect)||!!(l!=null&&l.anchorRect);return(0,r.createElement)("div",{className:v,ref:(0,a.Z)([x,m,K]),tabIndex:-1,style:O},w(k),b&&(0,r.createElement)(g.ZP,{position:D,onClose:W,onFocusOutside:V,expandOnMobile:A,headerTitle:h,focusOnMount:R,offset:13,anchor:F?void 0:f,variant:U,...l,className:d()("components-dropdown__content",l==null?void 0:l.className,y)},E(k)))},o=(0,T.Iq)(t,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.16.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(C,_,n)=>{n.d(_,{O:()=>p});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function p({defaultValue:d,onChange:a,value:s}){const u=typeof s!="undefined",T=u?s:d,[i,g]=(0,r.useState)(T),t=u?s:i;let e;return u&&typeof a=="function"?e=a:!u&&typeof a=="function"?e=o=>{a(o),g(o)}:e=g,[t,e]}},"../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(C,_,n)=>{n.d(_,{Z:()=>a});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/@wordpress+primitives@3.48.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(C,_,n)=>{n.d(_,{Z:()=>a});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/@wordpress+primitives@3.48.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(C,_,n)=>{n.d(_,{Z:()=>a});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/@wordpress+primitives@3.48.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../analytics/index.jsx":(C,_,n)=>{n.d(_,{Z:()=>g});var r=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),p=n.n(r);const d=p()("dops:analytics");let a,s;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function u(t,e){let o="";if(typeof t=="object"){for(const c in t)o+="&x_"+encodeURIComponent(c)+"="+encodeURIComponent(t[c]);d("Bumping stats %o",t)}else o="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e),d('Bumping stat "%s" in group "%s"',e,t);return o}function T(t,e){let o="";if(typeof t=="object"){for(const c in t)o+="&"+encodeURIComponent(c)+"="+encodeURIComponent(t[c]);d("Built stats %o",t)}else o="&"+encodeURIComponent(t)+"="+encodeURIComponent(e),d('Built stat "%s" in group "%s"',e,t);return o}const i={initialize:function(t,e,o){i.setUser(t,e),i.setSuperProps(o),i.identifyUser()},setGoogleAnalyticsEnabled:function(t,e=null){this.googleAnalyticsEnabled=t,this.googleAnalyticsKey=e},setMcAnalyticsEnabled:function(t){this.mcAnalyticsEnabled=t},setUser:function(t,e){s={ID:t,username:e}},setSuperProps:function(t){a=t},assignSuperProps:function(t){a=Object.assign(a||{},t)},mc:{bumpStat:function(t,e){const o=u(t,e);i.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+o+"&t="+Math.random())},bumpStatWithPageView:function(t,e){const o=T(t,e);i.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+o+"&t="+Math.random())}},pageView:{record:function(t,e){i.tracks.recordPageView(t),i.ga.recordPageView(t,e)}},purchase:{record:function(t,e,o,c,m,E,w){i.ga.recordPurchase(t,e,o,c,m,E,w)}},tracks:{recordEvent:function(t,e){if(e=e||{},t.indexOf("akismet_")!==0&&t.indexOf("jetpack_")!==0){d('- Event name must be prefixed by "akismet_" or "jetpack_"');return}a&&(d("- Super Props: %o",a),e=Object.assign(e,a)),d('Record event "%s" called with props %s',t,JSON.stringify(e)),window._tkq.push(["recordEvent",t,e])},recordJetpackClick:function(t){const e=typeof t=="object"?t:{target:t};i.tracks.recordEvent("jetpack_wpa_click",e)},recordPageView:function(t){i.tracks.recordEvent("akismet_page_view",{path:t})},setOptOut:function(t){d("Pushing setOptOut: %o",t),window._tkq.push(["setOptOut",t])}},ga:{initialized:!1,initialize:function(){let t={};i.ga.initialized||(s&&(t={userId:"u-"+s.ID}),window.ga("create",this.googleAnalyticsKey,"auto",t),i.ga.initialized=!0)},recordPageView:function(t,e){i.ga.initialize(),d("Recording Page View ~ [URL: "+t+"] [Title: "+e+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",t),window.ga("send",{hitType:"pageview",page:t,title:e}))},recordEvent:function(t,e,o,c){i.ga.initialize();let m="Recording Event ~ [Category: "+t+"] [Action: "+e+"]";typeof o!="undefined"&&(m+=" [Option Label: "+o+"]"),typeof c!="undefined"&&(m+=" [Option Value: "+c+"]"),d(m),this.googleAnalyticsEnabled&&window.ga("send","event",t,e,o,c)},recordPurchase:function(t,e,o,c,m,E,w){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:t,revenue:c,currency:w}),window.ga("ecommerce:addItem",{id:t,name:e,sku:o,price:m,quantity:E}),window.ga("ecommerce:send")}},identifyUser:function(){s&&window._tkq.push(["identifyUser",s.ID,s.username])},setProperties:function(t){window._tkq.push(["setProperties",t])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},g=i},"../connection/components/use-connection/index.jsx":(C,_,n)=>{n.d(_,{Z:()=>T});var r=n("../api/index.jsx"),p=n("../../../node_modules/.pnpm/@wordpress+data@9.20.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),d=n("../../../node_modules/.pnpm/@wordpress+data@9.20.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../connection/state/store.jsx");const u=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},T=({registrationNonce:i=u.registrationNonce,apiRoot:g=u.apiRoot,apiNonce:t=u.apiNonce,redirectUri:e,autoTrigger:o,from:c,skipUserConnection:m}={})=>{const{registerSite:E,connectUser:w,refreshConnectedPlugins:v}=(0,p.Z)(s.t),y=(0,d.Z)(f=>f(s.t).getRegistrationError()),{siteIsRegistering:A,userIsConnecting:h,userConnectionData:R,connectedPlugins:l,connectionErrors:P,isRegistered:S,isUserConnected:O,hasConnectedOwner:M,isOfflineMode:I}=(0,d.Z)(f=>({siteIsRegistering:f(s.t).getSiteIsRegistering(),userIsConnecting:f(s.t).getUserIsConnecting(),userConnectionData:f(s.t).getUserConnectionData(),connectedPlugins:f(s.t).getConnectedPlugins(),connectionErrors:f(s.t).getConnectionErrors(),isOfflineMode:f(s.t).getIsOfflineMode(),...f(s.t).getConnectionStatus()})),D=()=>{if(m){if(e)return window.location=e,Promise.resolve(e)}else return w({from:c,redirectUri:e});return Promise.resolve()},U=f=>(f&&f.preventDefault(),S?D():E({registrationNonce:i,redirectUri:e}).then(()=>D()));return(0,a.useEffect)(()=>{r.ZP.setApiRoot(g),r.ZP.setApiNonce(t)},[g,t]),(0,a.useEffect)(()=>{o&&!A&&!h&&U()},[]),{handleRegisterSite:U,handleConnectUser:D,refreshConnectedPlugins:v,isRegistered:S,isUserConnected:O,siteIsRegistering:A,userIsConnecting:h,registrationError:y,userConnectionData:R,hasConnectedOwner:M,connectedPlugins:l,connectionErrors:P,isOfflineMode:I}}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(C,_,n)=>{n.d(_,{Z:()=>s});var r=n("../analytics/index.jsx"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const s=()=>{var l;const{isUserConnected:u,connectedPlugins:T,userConnectionData:i={}}=(0,d.Z)(),{login:g,ID:t}=((l=i.currentUser)==null?void 0:l.wpcomUser)||{};(0,p.useEffect)(()=>{u&&t&&g&&r.Z.initialize(t,g)},[t,u,g]);const e=Object.keys(T||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:o,ga:c,mc:m,pageView:E,purchase:w,setGoogleAnalyticsEnabled:v,setMcAnalyticsEnabled:y,setProperties:A,tracks:h}=r.Z,R=(0,p.useCallback)((P,S)=>{var O;h.recordEvent(P,{...S,version:(O=window==null?void 0:window.myJetpackInitialState)==null?void 0:O.myJetpackVersion,referring_plugins:e})},[]);return{clearedIdentity:o,ga:c,mc:m,pageView:E,purchase:w,recordEvent:R,setGoogleAnalyticsEnabled:v,setMcAnalyticsEnabled:y,setProperties:A,tracks:h}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(C,_,n)=>{n.d(_,{Z:()=>p});var r=n("../connection/components/use-connection/index.jsx");function p(){const{apiRoot:d,apiNonce:a}=myJetpackRest,{topJetpackMenuItemUrl:s}=myJetpackInitialState,u=(0,r.Z)({apiRoot:d,apiNonce:a}),T=u.isRegistered;return{apiNonce:a,apiRoot:d,...u,isSiteConnected:T,topJetpackMenuItemUrl:s}}}}]);})();
