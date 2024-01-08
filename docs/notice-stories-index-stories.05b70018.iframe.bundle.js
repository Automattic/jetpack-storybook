"use strict";(()=>{var Ve=Object.defineProperty;var Xe=(b,o,t)=>o in b?Ve(b,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):b[o]=t;var ue=(b,o,t)=>(Xe(b,typeof o!="symbol"?o+"":o,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../components/components/notice/stories/index.stories.jsx":(b,o,t)=>{var c,n,_,w,P,i,C,N,k,f,T,v;t.r(o),t.d(o,{__namedExportsOrder:()=>m,_default:()=>S,default:()=>O,error:()=>E,success:()=>h,warning:()=>x});var d=t("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),g=t("../components/components/button/index.tsx"),a=t("../components/components/notice/index.tsx"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import { ExternalLink } from '@wordpress/components';
import Button from '../../button';
import Notice from '../index';

export default {
	title: 'JS Packages/Components/Notice',
	component: Notice,
	argTypes: {
		level: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'success', 'warning', 'error' ],
		},
		hideCloseButton: {
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = args => <Notice { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	level: 'info',
	title: 'Improve your hovercraft',
	children:
		'Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<Button key="install" isPrimary>
			Install now
		</Button>,
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};

export const warning = Template.bind( {} );
warning.args = {
	level: 'warning',
	title: 'Your hovercraft is full of eels.',
	children: (
		<div>
			Either your vehicle needs to be cleared, or some kind of translation error has occurred.
		</div>
	),
	actions: [
		<Button key="bail" isPrimary>
			Start Bailing
		</Button>,
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};

export const success = Template.bind( {} );
success.args = {
	level: 'success',
	title: 'Your hovercraft has been upgraded.',
	children: 'Please enjoy your newer, cooler hovercraft.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<Button key="start" isPrimary>
			Start crafting
		</Button>,
	],
	hideCloseButton: false,
};

export const error = Template.bind( {} );
error.args = {
	level: 'error',
	title: 'The eels have stolen your hovercraft.',
	children:
		'We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Eel">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};
`,p={_default:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},warning:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},success:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},error:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}}};const O={parameters:{storySource:{source:`import { ExternalLink } from '@wordpress/components';
import Button from '../../button';
import Notice from '../index';

export default {
	title: 'JS Packages/Components/Notice',
	component: Notice,
	argTypes: {
		level: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'success', 'warning', 'error' ],
		},
		hideCloseButton: {
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = args => <Notice { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	level: 'info',
	title: 'Improve your hovercraft',
	children:
		'Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<Button key="install" isPrimary>
			Install now
		</Button>,
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};

export const warning = Template.bind( {} );
warning.args = {
	level: 'warning',
	title: 'Your hovercraft is full of eels.',
	children: (
		<div>
			Either your vehicle needs to be cleared, or some kind of translation error has occurred.
		</div>
	),
	actions: [
		<Button key="bail" isPrimary>
			Start Bailing
		</Button>,
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};

export const success = Template.bind( {} );
success.args = {
	level: 'success',
	title: 'Your hovercraft has been upgraded.',
	children: 'Please enjoy your newer, cooler hovercraft.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<Button key="start" isPrimary>
			Start crafting
		</Button>,
	],
	hideCloseButton: false,
};

export const error = Template.bind( {} );
error.args = {
	level: 'error',
	title: 'The eels have stolen your hovercraft.',
	children:
		'We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Eel">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},warning:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},success:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},error:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}}}}},title:"JS Packages/Components/Notice",component:a.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},A=j=>(0,r.jsx)(a.Z,{...j});A.displayName="Template";const S=A.bind({});S.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(g.Z,{isPrimary:!0,children:"Install now"},"install"),(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const x=A.bind({});x.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,r.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,r.jsx)(g.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const h=A.bind({});h.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(g.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const E=A.bind({});E.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},S.parameters={...S.parameters,docs:{...(c=S.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Notice {...args} />",...(_=(n=S.parameters)==null?void 0:n.docs)==null?void 0:_.source}}},x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Notice {...args} />",...(i=(P=x.parameters)==null?void 0:P.docs)==null?void 0:i.source}}},h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Notice {...args} />",...(k=(N=h.parameters)==null?void 0:N.docs)==null?void 0:k.source}}},E.parameters={...E.parameters,docs:{...(f=E.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Notice {...args} />",...(v=(T=E.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const m=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(b,o,t)=>{var R,U,z,W,Z,V,J,X,H;t.r(o),t.d(o,{Default:()=>T,Dismissable:()=>v,Duration:()=>j,__namedExportsOrder:()=>D,default:()=>k});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),a=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),u=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),p=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),O=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),A=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),S=t("../../plugins/protect/src/js/state/store.js"),x=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=t.n(x),E=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var c=h()(E.Z,m);const n=E.Z.locals||{};var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const w=a.__,P=({dismissable:B=!1,duration:L=null,floating:F=!1,message:q,type:Q="success"})=>{const{clearNotice:K}=(0,g.Z)(S.t);let M;switch(Q){case"success":M=r.Z;break;case"error":M=u.Z;break;case"info":default:M=p.Z}const ee=(0,d.useCallback)(()=>{K()},[K]);return(0,d.useEffect)(()=>{let Y;return L&&(Y=setTimeout(K,L)),()=>clearTimeout(Y)},[K,L,q]),(0,_.jsxs)("div",{className:`${n.notice} ${n[`notice--${Q}`]} ${F?n["notice--floating"]:""}`,children:[(0,_.jsx)("div",{className:n.notice__icon,children:(0,_.jsx)(O.Z,{icon:M})}),(0,_.jsx)("div",{className:n.notice__message,children:q}),B&&(0,_.jsx)("button",{className:n.notice__close,"aria-label":w("Dismiss notice.","jetpack-protect"),onClick:ee,children:(0,_.jsx)(O.Z,{icon:A.Z})})]})};P.displayName="Notice";const i=P;P.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}};var C=`import React from 'react';
import Notice from '../index.jsx';

export default {
	title: 'Plugins/Protect/Notice',
	component: Notice,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 250 } }>
				<Story />
			</div>
		),
	],
};

const Template = args => <Notice { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
	type: 'success',
	message: 'Code is poetry.',
};

export const Dismissable = Template.bind( {} );
Dismissable.args = {
	type: 'success',
	dismissable: true,
	message: 'Dismiss this notice by clicking the close icon.',
};

export const Duration = Template.bind( {} );
Duration.args = {
	type: 'success',
	duration: 5000,
	message: 'This notice will self-destruct in five seconds.',
};
`,N={Default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},Dismissable:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},Duration:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}};const k={title:"Plugins/Protect/Notice",component:i,parameters:{storySource:{source:`import React from 'react';
import Notice from '../index.jsx';

export default {
	title: 'Plugins/Protect/Notice',
	component: Notice,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 250 } }>
				<Story />
			</div>
		),
	],
};

const Template = args => <Notice { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
	type: 'success',
	message: 'Code is poetry.',
};

export const Dismissable = Template.bind( {} );
Dismissable.args = {
	type: 'success',
	dismissable: true,
	message: 'Dismiss this notice by clicking the close icon.',
};

export const Duration = Template.bind( {} );
Duration.args = {
	type: 'success',
	duration: 5000,
	message: 'This notice will self-destruct in five seconds.',
};
`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},dismissable:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},duration:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}}},layout:"centered"},decorators:[B=>(0,_.jsx)("div",{style:{width:250},children:(0,_.jsx)(B,{})})]},f=B=>(0,_.jsx)(i,{...B});f.displayName="Template";const T=f.bind({});T.args={type:"success",message:"Code is poetry."};const v=f.bind({});v.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const j=f.bind({});j.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:"args => <Notice {...args} />",...(z=(U=T.parameters)==null?void 0:U.docs)==null?void 0:z.source}}},v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Notice {...args} />",...(V=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:V.source}}},j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:"args => <Notice {...args} />",...(H=(X=j.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};const D=["Default","Dismissable","Duration"]},"../../plugins/protect/src/js/state/store.js":(b,o,t)=>{t.d(o,{t:()=>de,N:()=>We});var d=t("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.45.0/node_modules/@wordpress/api-fetch/build-module/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js");const u=r._n,p=r.__,O="SET_CREDENTIALS_STATE_IS_FETCHING",A="SET_CREDENTIALS_STATE",S="SET_STATUS",x="SET_STATUS_PROGRESS",h="START_SCAN_OPTIMISTICALLY",E="SET_STATUS_IS_FETCHING",m="SET_SCAN_IS_UNAVAILABLE",c="SET_SCAN_IS_ENQUEUING",n="SET_INSTALLED_PLUGINS",_="SET_INSTALLED_THEMES",w="SET_WP_VERSION",P="SET_JETPACK_SCAN",i="SET_PRODUCT_DATA",C="SET_THREAT_IS_UPDATING",N="SET_THREATS_ARE_FIXING",k="SET_MODAL",f="SET_NOTICE",T="CLEAR_NOTICE",v="SET_HAS_REQUIRED_PLAN",j="SET_WAF_IS_SEEN",D="SET_WAF_UPGRADE_IS_SEEN",R="SET_WAF_IS_ENABLED",U="SET_WAF_IS_UPDATING",z="SET_WAF_IS_TOGGLING",W="SET_WAF_CONFIG",Z="SET_WAF_STATS",V=e=>({type:S,status:e}),J=e=>({type:x,currentProgress:e}),X=()=>({type:h}),H=()=>({dispatch:e})=>{(0,a.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(s=>e(le(s)))},B=e=>(0,a.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),L=(e=!1)=>async({dispatch:s})=>(s(M(!0)),await new Promise((l,y)=>B(e).then(F).then(I=>{s(ee(I.status==="unavailable")),s(V(g()(I))),l(I)}).catch(I=>{y(I)}).finally(()=>{s(M(!1))}))),F=(e,s=0)=>new Promise((l,y)=>{e.status==="unavailable"&&s<3?B(!0).then(I=>{setTimeout(()=>{F(I,s+1).then(ne=>l(ne)).catch(ne=>y(ne))},5e3)}).catch(y):l(e)}),q=()=>async({dispatch:e})=>await new Promise((s,l)=>(e(Q(!0)),(0,a.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(y=>{e(K(y)),s(y)}).catch(y=>{l(y)}).finally(()=>{e(Q(!1))}))),Q=e=>({type:O,isFetching:e}),K=e=>({type:A,credentials:e}),M=e=>({type:E,status:e}),ee=e=>({type:m,status:e}),Y=e=>({type:c,isEnqueuing:e}),pe=e=>({type:n,plugins:e}),me=e=>({type:_,themes:e}),_e=e=>({type:w,version:e}),ge=e=>({type:P,scan:e}),se=(e,s)=>({type:C,payload:{threatId:e,isUpdating:s}}),oe=e=>({type:N,threatIds:e}),he=(e,s=()=>{})=>async({dispatch:l})=>(l(se(e,!0)),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>l(L())).then(()=>l(G({type:"success",message:p("Threat ignored","jetpack-protect")}))).catch(()=>l(G({type:"error",message:p("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{l(se(e,!1)),s()}))),ae=e=>async({dispatch:s})=>{const l=e.reduce((y,I)=>`${y}threat_ids[]=${I}&`,"jetpack-protect/v1/fix-threats-status?");return s(oe(e)),await(0,a.Z)({path:l,method:"GET"}).then(async y=>{const I=Object.values(y.threats);if(I.filter(re=>re.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{s(ae(e))},1e3)});if(!I.filter(re=>re.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{s(L()),s(G({type:"success",message:(0,r.gB)(u("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{s(G({type:"error",message:p("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{s(oe([]))})},Ee=(e,s=()=>{})=>async({dispatch:l})=>(e.forEach(y=>{l(se(y,!0))}),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>l(G({type:"success",message:p("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>l(ae(e)),1e3)}).catch(()=>l(G({type:"error",message:p("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(y=>{l(se(y,!1))}),s()}))),fe=(e=()=>{})=>async({dispatch:s})=>(s(Y(!0)),await new Promise(()=>(0,a.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{s(X()),setTimeout(()=>s(L(!0)),5e3)}).catch(()=>s(G({type:"error",message:p("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{s(Y(!1)),e()}))),ve=e=>({type:k,payload:e}),G=e=>({type:f,payload:e}),ye=()=>({type:T}),le=e=>({type:v,hasRequiredPlan:e}),ce={checkCredentials:q,setCredentials:K,setCredentialsIsFetching:Q,setStatus:V,setStatusProgress:J,startScanOptimistically:X,refreshStatus:L,setStatusIsFetching:M,setScanIsEnqueuing:Y,setInstalledPlugins:pe,setInstalledThemes:me,setwpVersion:_e,setJetpackScan:ge,ignoreThreat:he,setModal:ve,setNotice:G,clearNotice:ye,fixThreats:Ee,scan:fe,setThreatsAreFixing:oe,refreshPlan:H,setHasRequiredPlan:le,setScanIsUnavailable:ee,setWafIsEnabled:e=>({type:R,isEnabled:e}),setWafIsSeen:e=>({type:j,isSeen:e}),setWafUpgradeIsSeen:e=>({type:D,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:U,isUpdating:e}),setWafIsToggling:e=>({type:z,isToggling:e}),setWafConfig:e=>({type:W,config:e}),setWafStats:e=>({type:Z,stats:e})};var ie=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const be=(e=null,s)=>{switch(s.type){case A:return s.credentials}return e},xe=(e=!1,s)=>{switch(s.type){case O:return s.isFetching}return e},Te=(e={},s)=>{switch(s.type){case S:return s.status;case x:return{...e,currentProgress:s.currentProgress};case h:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},Se=(e=!1,s)=>{switch(s.type){case E:return s.status}return e},je=(e=!1,s)=>{switch(s.type){case m:return s.status}return e},we=(e=!1,s)=>{switch(s.type){case c:return s.isEnqueuing}return e},Ae=(e={},s)=>{switch(s.type){case n:return s.plugins}return e},Pe=(e={},s)=>{switch(s.type){case _:return s.themes}return e},ke=(e={},s)=>{switch(s.type){case w:return s.version}return e},Ne=(e={},s)=>{switch(s.type){case P:return s.scan}return e},Ie=(e={},s)=>{switch(s.type){case C:return{...e,[s.payload.threatId]:s.payload.isUpdating}}return e},Oe=(e=[],s)=>{switch(s.type){case N:return s.threatIds}return e},Le=(e={},s)=>{switch(s.type){case k:return{...e,...s.payload}}return e},Ce=(e={},s)=>{switch(s.type){case f:return{...e,...s.payload};case T:return{}}return e},Be=(e=!1,s)=>{switch(s.type){case v:return s.hasRequiredPlan}return e},De={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Re=(e=De,s)=>{switch(s.type){case j:return{...e,isSeen:s.isSeen};case D:return{...e,upgradeIsSeen:s.upgradeIsSeen};case R:return{...e,isEnabled:s.isEnabled};case W:return{...e,config:s.config};case Z:return{...e,stats:s.stats};case U:return{...e,isUpdating:s.isUpdating};case z:return{...e,isToggling:s.isToggling}}return e},Ze=(0,ie.UY)({credentials:be,credentialsIsFetching:xe,status:Te,statusIsFetching:Se,scanIsUnavailable:je,scanIsEnqueuing:we,installedPlugins:Ae,installedThemes:Pe,wpVersion:ke,jetpackScan:Ne,threatsUpdating:Ie,modal:Le,notice:Ce,setThreatsFixing:Oe,hasRequiredPlan:Be,waf:Re}),Me={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const s=await(0,a.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(ce.setJetpackScan(s))}}},Ge={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var s;return((s=e.modal)==null?void 0:s.type)||null},getModalProps:e=>{var s;return((s=e.modal)==null?void 0:s.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getWaf:e=>e.waf};var Ue=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const $=class{static mayBeInit(s,l){$.store===null&&($.store=(0,Ue.Z)(s,l),(0,ie.z2)($.store))}};let te=$;ue(te,"store",null);const ze=te,de="jetpack-protect";function We(){ze.mayBeInit(de,{__experimentalUseThunks:!0,reducer:Ze,actions:ce,selectors:Ge,resolvers:Me,initialState:g()(window.jetpackProtectInitialState)||{}})}},"../components/components/button/index.tsx":(b,o,t)=>{t.d(o,{Z:()=>_});var d=t("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),g=t("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),u=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=t.n(u),O=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=t.n(A),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),h={};h.insert="head",h.singleton=!1;var E=S()(x.Z,h);const m=x.Z.locals||{};var c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=(0,O.forwardRef)((w,P)=>{var L,F;const{children:i,variant:C="primary",size:N="normal",weight:k="bold",icon:f,iconSize:T,disabled:v,isDestructive:j,isLoading:D,isExternalLink:R,className:U,text:z,fullWidth:W,...Z}=w,V=p()(m.button,U,{[m.normal]:N==="normal",[m.small]:N==="small",[m.icon]:!!f,[m.loading]:D,[m.regular]:k==="regular",[m["full-width"]]:W,[m["is-icon-button"]]:!!f&&!i});Z.ref=P;const J=N==="normal"?20:16,X=R&&(0,c.jsx)(a.Z,{size:J,icon:r.Z,className:m["external-icon"]}),H=R?"_blank":void 0,B=(i==null?void 0:i[0])&&i[0]!==null&&((F=(L=i==null?void 0:i[0])==null?void 0:L.props)==null?void 0:F.className)!=="components-tooltip";return(0,c.jsxs)(d.ZP,{target:H,variant:C,className:p()(V,{"has-text":!!f&&B}),icon:R?void 0:f,iconSize:T,disabled:v,"aria-disabled":v,isDestructive:j,text:z,...Z,children:[D&&(0,c.jsx)(g.ZP,{}),(0,c.jsx)("span",{children:i}),X]})});n.displayName="Button";const _=n;try{n.displayName="Button",n.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(w){}},"../components/components/notice/index.tsx":(b,o,t)=>{t.d(o,{Z:()=>P});var d=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),g=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),u=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),p=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),O=t.n(p),A=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=t.n(S),h=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),E={};E.insert="head",E.singleton=!1;var m=x()(h.Z,E);const c=h.Z.locals||{};var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=i=>{switch(i){case"error":return d.Z;case"warning":return d.Z;case"info":return g.Z;case"success":return a.Z;default:return d.Z}},w=({level:i,title:C,children:N,actions:k,hideCloseButton:f,onClose:T})=>{const v=O()(c.container,c[`is-${i}`]);return(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("div",{className:c["icon-wrapper"],children:(0,n.jsx)(r.Z,{icon:_(i),className:c.icon})}),(0,n.jsxs)("div",{className:c["main-content"],children:[(0,n.jsx)("div",{className:c.title,children:C}),N,k&&k.length>0&&(0,n.jsx)("div",{className:c["action-bar"],children:k.map((j,D)=>(0,n.jsx)("div",{className:c.action,children:j},D))})]}),!f&&(0,n.jsx)("button",{"aria-label":"close",className:c["close-button"],onClick:T,children:(0,n.jsx)(r.Z,{icon:u.Z})})]})};w.displayName="Notice",w.defaultProps={level:"info",hideCloseButton:!1};const P=w},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(b,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),u=r()(g());u.push([b.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),u.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const p=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(b,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),u=r()(g());u.push([b.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),u.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const p=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(b,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),u=r()(g());u.push([b.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:rgba(0,0,0,0);border:none}",""]),u.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const p=u}}]);})();
