"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(h,_,n)=>{var a,y,f,w,S,A,C,U,D,v,O,R;n.r(_),n.d(_,{Default:()=>e,WithChildren:()=>s,WithMenu:()=>i,WithMenuForStandalone:()=>m,__namedExportsOrder:()=>o,default:()=>c});var u=n("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=n("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),r=n("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`/* eslint-disable react/react-in-jsx-scope */
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

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
`,P={Default:{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}},WithChildren:{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}},WithMenu:{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}},WithMenuForStandalone:{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}}};window.myJetpackRest={};const c={title:"Packages/My Jetpack/Product Card",component:l.ZP,parameters:{storySource:{source:`
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

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
`,locationsMap:{default:{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}},"with-children":{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}},"with-menu":{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}},"with-menu-for-standalone":{startLoc:{col:17,line:73},endLoc:{col:52,line:73},startBody:{col:17,line:73},endBody:{col:52,line:73}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[T=>(0,p.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,p.jsx)(T,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[r.N.ACTIVE,r.N.INACTIVE,r.N.ERROR,r.N.ABSENT,r.N.ABSENT_WITH_PLAN,r.N.NEEDS_PURCHASE,r.N.NEEDS_PURCHASE_OR_FREE]}}},g=T=>(0,p.jsx)(l.ZP,{...T});g.displayName="Template";const t={name:"Backup",description:"Save every change",status:r.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},e=g.bind({});e.args=t;const s=g.bind({});s.args={...t,children:(0,p.jsx)("div",{children:"Card Children"})};const i=g.bind({});i.args={...t,showMenu:!0,menuItems:[{label:"Upload",icon:u.Z}]};const m=g.bind({});m.args={...t,showMenu:!0,menuItems:[{label:"Upload",icon:u.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <ProductCard {...args} />",...(f=(y=e.parameters)==null?void 0:y.docs)==null?void 0:f.source}}},s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"args => <ProductCard {...args} />",...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}},i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:"args => <ProductCard {...args} />",...(D=(U=i.parameters)==null?void 0:U.docs)==null?void 0:D.source}}},m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ProductCard {...args} />",...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const o=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(h,_,n)=>{n.d(_,{Z:()=>r});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,u.createElement)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(h,_,n)=>{n.d(_,{Z:()=>r});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,u.createElement)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(h,_,n)=>{n.d(_,{Z:()=>r});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,u.createElement)(d.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(d.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../analytics/index.jsx":(h,_,n)=>{n.d(_,{Z:()=>g});var u=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),d=n.n(u);const l=d()("dops:analytics");let r,p;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function E(t,e){let s="";if(typeof t=="object"){for(const i in t)s+="&x_"+encodeURIComponent(i)+"="+encodeURIComponent(t[i]);l("Bumping stats %o",t)}else s="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e),l('Bumping stat "%s" in group "%s"',e,t);return s}function P(t,e){let s="";if(typeof t=="object"){for(const i in t)s+="&"+encodeURIComponent(i)+"="+encodeURIComponent(t[i]);l("Built stats %o",t)}else s="&"+encodeURIComponent(t)+"="+encodeURIComponent(e),l('Built stat "%s" in group "%s"',e,t);return s}const c={initialize:function(t,e,s){c.setUser(t,e),c.setSuperProps(s),c.identifyUser()},setGoogleAnalyticsEnabled:function(t,e=null){this.googleAnalyticsEnabled=t,this.googleAnalyticsKey=e},setMcAnalyticsEnabled:function(t){this.mcAnalyticsEnabled=t},setUser:function(t,e){p={ID:t,username:e}},setSuperProps:function(t){r=t},assignSuperProps:function(t){r=Object.assign(r||{},t)},mc:{bumpStat:function(t,e){const s=E(t,e);c.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+s+"&t="+Math.random())},bumpStatWithPageView:function(t,e){const s=P(t,e);c.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+s+"&t="+Math.random())}},pageView:{record:function(t,e){c.tracks.recordPageView(t),c.ga.recordPageView(t,e)}},purchase:{record:function(t,e,s,i,m,o,a){c.ga.recordPurchase(t,e,s,i,m,o,a)}},tracks:{recordEvent:function(t,e){if(e=e||{},t.indexOf("akismet_")!==0&&t.indexOf("jetpack_")!==0){l('- Event name must be prefixed by "akismet_" or "jetpack_"');return}r&&(l("- Super Props: %o",r),e=Object.assign(e,r)),l('Record event "%s" called with props %s',t,JSON.stringify(e)),window._tkq.push(["recordEvent",t,e])},recordJetpackClick:function(t){const e=typeof t=="object"?t:{target:t};c.tracks.recordEvent("jetpack_wpa_click",e)},recordPageView:function(t){c.tracks.recordEvent("akismet_page_view",{path:t})},setOptOut:function(t){l("Pushing setOptOut: %o",t),window._tkq.push(["setOptOut",t])}},ga:{initialized:!1,initialize:function(){let t={};c.ga.initialized||(p&&(t={userId:"u-"+p.ID}),window.ga("create",this.googleAnalyticsKey,"auto",t),c.ga.initialized=!0)},recordPageView:function(t,e){c.ga.initialize(),l("Recording Page View ~ [URL: "+t+"] [Title: "+e+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",t),window.ga("send",{hitType:"pageview",page:t,title:e}))},recordEvent:function(t,e,s,i){c.ga.initialize();let m="Recording Event ~ [Category: "+t+"] [Action: "+e+"]";typeof s!="undefined"&&(m+=" [Option Label: "+s+"]"),typeof i!="undefined"&&(m+=" [Option Value: "+i+"]"),l(m),this.googleAnalyticsEnabled&&window.ga("send","event",t,e,s,i)},recordPurchase:function(t,e,s,i,m,o,a){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:t,revenue:i,currency:a}),window.ga("ecommerce:addItem",{id:t,name:e,sku:s,price:m,quantity:o}),window.ga("ecommerce:send")}},identifyUser:function(){p&&window._tkq.push(["identifyUser",p.ID,p.username])},setProperties:function(t){window._tkq.push(["setProperties",t])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},g=c},"../../packages/my-jetpack/_inc/data/products/use-product.ts":(h,_,n)=>{n.d(_,{Z:()=>m});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../packages/my-jetpack/_inc/data/constants.ts"),l=n("../../packages/my-jetpack/_inc/data/use-simple-query.ts"),r=n("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts");const p=o=>Array.isArray(o)?o.map(a=>p(a)):typeof o=="object"&&o!==null?Object.fromEntries(Object.entries(o).map(([a,y])=>[a.replace(/([-_][a-z])/gi,f=>f.toUpperCase().replace(/[-_]/g,"")),p(y)])):o,E=p,P=o=>o.pricingForUi.productTerm==="year"?Math.round(o.pricingForUi.fullPrice/12*100)/100:o.pricingForUi.fullPrice,c=o=>o.pricingForUi.productTerm==="year"?Math.round(o.pricingForUi.discountPrice/12*100)/100:o.pricingForUi.discountPrice,g=()=>{const{items:o}=(0,r.$9)("products");return Object.entries(o).reduce((a,[y,f])=>({...a,[y]:s(f)}),{})},t=o=>(0,l.Z)({name:d.q9,query:{path:`${d.Jk}/${o}`},options:{enabled:!1}}),e=async(o,a)=>{const{data:y}=await a();window.myJetpackInitialState.products.items[o]=y},s=o=>{const a=E(o);return a.features=a.features||[],a.supportedProducts=a.supportedProducts||[],a.pricingForUi.fullPricePerMonth=P(a),a.pricingForUi.discountPricePerMonth=c(a),a},m=o=>{const a=g(),y=a==null?void 0:a[o],{refetch:f,isLoading:w}=t(o);return{detail:y,refetch:(0,u.useCallback)(()=>e(o,f),[o,f]),isLoading:w}}},"../../packages/my-jetpack/_inc/data/use-simple-query.ts":(h,_,n)=>{n.d(_,{Z:()=>p});var u=n("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js"),d=n("../../../node_modules/.pnpm/@wordpress+api-fetch@6.50.0/node_modules/@wordpress/api-fetch/build-module/index.js"),l=n("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const p=({name:E,query:P,options:c,errorMessage:g})=>{const t=(0,u.a)({queryKey:[E],queryFn:()=>(0,d.Z)(P),refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,...c}),{error:e,isError:s,isLoading:i}=t;return(0,l.o)({infoName:E,isError:!i&&s&&e.code!=="not_connected",overrideMessage:g}),t}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.ts":(h,_,n)=>{n.d(_,{Z:()=>E});var u=n("../analytics/index.jsx"),d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=n("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),r=n("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.ts");const E=()=>{var o;const{isUserConnected:P,connectedPlugins:c,userConnectionData:g={}}=(0,r.Z)(),{login:t,ID:e}=((o=g.currentUser)==null?void 0:o.wpcomUser)||{},{myJetpackVersion:s=""}=(0,l.$9)();(0,d.useEffect)(()=>{P&&e&&t&&u.Z.initialize(e,t)},[e,P,t]);const i=Object.keys(c||{}).sort().join(",").replaceAll("jetpack-","");return{recordEvent:(0,d.useCallback)((a,y)=>{u.Z.tracks.recordEvent(a,{...y,version:s,referring_plugins:i})},[])}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.ts":(h,_,n)=>{n.d(_,{Z:()=>r});var u=n("../connection/components/use-connection/index.jsx"),d=n("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts");const r=()=>{const{apiRoot:p,apiNonce:E}=(0,d.M_)(),{topJetpackMenuItemUrl:P,blogID:c}=(0,d.$9)(),g=(0,u.Z)({apiRoot:p,apiNonce:E}),{registrationNonce:t}=(0,d.vH)(),e=g.isRegistered;return{apiNonce:E,apiRoot:p,blogID:c,registrationNonce:t,...g,isSiteConnected:e,topJetpackMenuItemUrl:P}}}}]);})();
