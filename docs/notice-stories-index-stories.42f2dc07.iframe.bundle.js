"use strict";(()=>{var Fe=Object.defineProperty;var Ke=(b,o,t)=>o in b?Fe(b,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):b[o]=t;var pe=(b,o,t)=>(Ke(b,typeof o!="symbol"?o+"":o,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../components/components/notice/stories/index.stories.jsx":(b,o,t)=>{var c,n,_,w,P,i,L,N,k,f,S,v;t.r(o),t.d(o,{__namedExportsOrder:()=>m,_default:()=>T,default:()=>I,error:()=>E,success:()=>h,warning:()=>x});var d=t("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),g=t("../components/components/button/index.tsx"),a=t("../components/components/notice/index.tsx"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import { ExternalLink } from '@wordpress/components';
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
`,p={_default:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},warning:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},success:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},error:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}}};const I={parameters:{storySource:{source:`import { ExternalLink } from '@wordpress/components';
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
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},warning:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},success:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},error:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}}}}},title:"JS Packages/Components/Notice",component:a.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},A=j=>(0,r.jsx)(a.Z,{...j});A.displayName="Template";const T=A.bind({});T.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(g.Z,{isPrimary:!0,children:"Install now"},"install"),(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const x=A.bind({});x.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,r.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,r.jsx)(g.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const h=A.bind({});h.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(g.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const E=A.bind({});E.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},T.parameters={...T.parameters,docs:{...(c=T.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Notice {...args} />",...(_=(n=T.parameters)==null?void 0:n.docs)==null?void 0:_.source}}},x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Notice {...args} />",...(i=(P=x.parameters)==null?void 0:P.docs)==null?void 0:i.source}}},h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Notice {...args} />",...(k=(N=h.parameters)==null?void 0:N.docs)==null?void 0:k.source}}},E.parameters={...E.parameters,docs:{...(f=E.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Notice {...args} />",...(v=(S=E.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const m=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(b,o,t)=>{var B,z,W,V,M,X,F,H,K;t.r(o),t.d(o,{Default:()=>S,Dismissable:()=>v,Duration:()=>j,__namedExportsOrder:()=>C,default:()=>k});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),a=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),u=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),p=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),I=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),A=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),T=t("../../plugins/protect/src/js/state/store.js"),x=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=t.n(x),E=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var c=h()(E.Z,m);const n=E.Z.locals||{};var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const w=a.__,P=({dismissable:D=!1,duration:R=null,floating:Z=!1,message:Q,type:ee="success"})=>{const{clearNotice:G}=(0,g.Z)(T.t);let J;switch(ee){case"success":J=r.Z;break;case"error":J=u.Z;break;case"info":default:J=p.Z}const Y=(0,d.useCallback)(()=>{G()},[G]);return(0,d.useEffect)(()=>{let $;return R&&($=setTimeout(G,R)),()=>clearTimeout($)},[G,R,Q]),(0,_.jsxs)("div",{className:`${n.notice} ${n[`notice--${ee}`]} ${Z?n["notice--floating"]:""}`,children:[(0,_.jsx)("div",{className:n.notice__icon,children:(0,_.jsx)(I.Z,{icon:J})}),(0,_.jsx)("div",{className:n.notice__message,children:Q}),D&&(0,_.jsx)("button",{className:n.notice__close,"aria-label":w("Dismiss notice.","jetpack-protect"),onClick:Y,children:(0,_.jsx)(I.Z,{icon:A.Z})})]})};P.displayName="Notice";const i=P;P.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}};var L=`import React from 'react';
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
`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},dismissable:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},duration:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}}},layout:"centered"},decorators:[D=>(0,_.jsx)("div",{style:{width:250},children:(0,_.jsx)(D,{})})]},f=D=>(0,_.jsx)(i,{...D});f.displayName="Template";const S=f.bind({});S.args={type:"success",message:"Code is poetry."};const v=f.bind({});v.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const j=f.bind({});j.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Notice {...args} />",...(W=(z=S.parameters)==null?void 0:z.docs)==null?void 0:W.source}}},v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:"args => <Notice {...args} />",...(X=(M=v.parameters)==null?void 0:M.docs)==null?void 0:X.source}}},j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Notice {...args} />",...(K=(H=j.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const C=["Default","Dismissable","Duration"]},"../../plugins/protect/src/js/state/store.js":(b,o,t)=>{t.d(o,{t:()=>ue,N:()=>Xe});var d=t("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.45.0/node_modules/@wordpress/api-fetch/build-module/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js");const u=r._n,p=r.__,I="SET_CREDENTIALS_STATE_IS_FETCHING",A="SET_CREDENTIALS_STATE",T="SET_STATUS",x="SET_STATUS_PROGRESS",h="START_SCAN_OPTIMISTICALLY",E="SET_STATUS_IS_FETCHING",m="SET_SCAN_IS_UNAVAILABLE",c="SET_SCAN_IS_ENQUEUING",n="SET_INSTALLED_PLUGINS",_="SET_INSTALLED_THEMES",w="SET_WP_VERSION",P="SET_JETPACK_SCAN",i="SET_PRODUCT_DATA",L="SET_THREAT_IS_UPDATING",N="SET_THREATS_ARE_FIXING",k="SET_MODAL",f="SET_NOTICE",S="CLEAR_NOTICE",v="SET_HAS_REQUIRED_PLAN",j="SET_ONBOARDING_PROGRESS",C="SET_WAF_IS_SEEN",B="SET_WAF_UPGRADE_IS_SEEN",z="SET_WAF_IS_ENABLED",W="SET_WAF_IS_UPDATING",V="SET_WAF_IS_TOGGLING",M="SET_WAF_CONFIG",X="SET_WAF_STATS",F=e=>({type:T,status:e}),H=e=>({type:x,currentProgress:e}),K=()=>({type:h}),D=()=>({dispatch:e})=>{(0,a.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(s=>e(ce(s)))},R=e=>(0,a.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),Z=(e=!1)=>async({dispatch:s})=>(s(Y(!0)),await new Promise((l,y)=>R(e).then(Q).then(O=>{s($(O.status==="unavailable")),s(F(g()(O))),l(O)}).catch(O=>{y(O)}).finally(()=>{s(Y(!1))}))),Q=(e,s=0)=>new Promise((l,y)=>{e.status==="unavailable"&&s<3?R(!0).then(O=>{setTimeout(()=>{Q(O,s+1).then(ne=>l(ne)).catch(ne=>y(ne))},5e3)}).catch(y):l(e)}),ee=()=>async({dispatch:e})=>await new Promise((s,l)=>(e(G(!0)),(0,a.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(y=>{e(J(y)),s(y)}).catch(y=>{l(y)}).finally(()=>{e(G(!1))}))),G=e=>({type:I,isFetching:e}),J=e=>({type:A,credentials:e}),Y=e=>({type:E,status:e}),$=e=>({type:m,status:e}),oe=e=>({type:c,isEnqueuing:e}),me=e=>({type:n,plugins:e}),_e=e=>({type:_,themes:e}),ge=e=>({type:w,version:e}),he=e=>({type:P,scan:e}),se=(e,s)=>({type:L,payload:{threatId:e,isUpdating:s}}),re=e=>({type:N,threatIds:e}),Ee=(e,s=()=>{})=>async({dispatch:l})=>(l(se(e,!0)),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>l(Z())).then(()=>l(U({type:"success",message:p("Threat ignored","jetpack-protect")}))).catch(()=>l(U({type:"error",message:p("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{l(se(e,!1)),s()}))),le=e=>async({dispatch:s})=>{const l=e.reduce((y,O)=>`${y}threat_ids[]=${O}&`,"jetpack-protect/v1/fix-threats-status?");return s(re(e)),await(0,a.Z)({path:l,method:"GET"}).then(async y=>{const O=Object.values(y.threats);if(O.filter(ae=>ae.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{s(le(e))},1e3)});if(!O.filter(ae=>ae.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{s(Z()),s(U({type:"success",message:(0,r.gB)(u("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{s(U({type:"error",message:p("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{s(re([]))})},fe=(e,s=()=>{})=>async({dispatch:l})=>(e.forEach(y=>{l(se(y,!0))}),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>l(U({type:"success",message:p("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>l(le(e)),1e3)}).catch(()=>l(U({type:"error",message:p("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(y=>{l(se(y,!1))}),s()}))),ve=(e=()=>{})=>async({dispatch:s})=>(s(oe(!0)),await new Promise(()=>(0,a.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{s(K()),setTimeout(()=>s(Z(!0)),5e3)}).catch(()=>s(U({type:"error",message:p("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{s(oe(!1)),e()}))),ye=e=>({type:k,payload:e}),U=e=>({type:f,payload:e}),be=()=>({type:S}),ce=e=>({type:v,hasRequiredPlan:e}),ie={checkCredentials:ee,setCredentials:J,setCredentialsIsFetching:G,setStatus:F,setStatusProgress:H,startScanOptimistically:K,refreshStatus:Z,setStatusIsFetching:Y,setScanIsEnqueuing:oe,setInstalledPlugins:me,setInstalledThemes:_e,setwpVersion:ge,setJetpackScan:he,ignoreThreat:Ee,setModal:ye,setNotice:U,clearNotice:be,fixThreats:fe,scan:ve,setThreatsAreFixing:re,refreshPlan:D,setHasRequiredPlan:ce,setScanIsUnavailable:$,setOnboardingProgress:e=>({type:j,progress:e}),setWafIsEnabled:e=>({type:z,isEnabled:e}),setWafIsSeen:e=>({type:C,isSeen:e}),setWafUpgradeIsSeen:e=>({type:B,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:W,isUpdating:e}),setWafIsToggling:e=>({type:V,isToggling:e}),setWafConfig:e=>({type:M,config:e}),setWafStats:e=>({type:X,stats:e})};var de=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const xe=(e=null,s)=>{switch(s.type){case A:return s.credentials}return e},Se=(e=!1,s)=>{switch(s.type){case I:return s.isFetching}return e},Te=(e={},s)=>{switch(s.type){case T:return s.status;case x:return{...e,currentProgress:s.currentProgress};case h:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},je=(e=!1,s)=>{switch(s.type){case E:return s.status}return e},we=(e=!1,s)=>{switch(s.type){case m:return s.status}return e},Ae=(e=!1,s)=>{switch(s.type){case c:return s.isEnqueuing}return e},Pe=(e={},s)=>{switch(s.type){case n:return s.plugins}return e},ke=(e={},s)=>{switch(s.type){case _:return s.themes}return e},Ne=(e={},s)=>{switch(s.type){case w:return s.version}return e},Oe=(e={},s)=>{switch(s.type){case P:return s.scan}return e},Ie=(e={},s)=>{switch(s.type){case L:return{...e,[s.payload.threatId]:s.payload.isUpdating}}return e},Le=(e=[],s)=>{switch(s.type){case N:return s.threatIds}return e},Ce=(e={},s)=>{switch(s.type){case k:return{...e,...s.payload}}return e},Be=(e={},s)=>{switch(s.type){case f:return{...e,...s.payload};case S:return{}}return e},De=(e=!1,s)=>{switch(s.type){case v:return s.hasRequiredPlan}return e},Re=(e=null,s)=>{switch(s.type){case j:return s.progress}return e},Ze={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Me=(e=Ze,s)=>{switch(s.type){case C:return{...e,isSeen:s.isSeen};case B:return{...e,upgradeIsSeen:s.upgradeIsSeen};case z:return{...e,isEnabled:s.isEnabled};case M:return{...e,config:s.config};case X:return{...e,stats:s.stats};case W:return{...e,isUpdating:s.isUpdating};case V:return{...e,isToggling:s.isToggling}}return e},Ge=(0,de.UY)({credentials:xe,credentialsIsFetching:Se,status:Te,statusIsFetching:je,scanIsUnavailable:we,scanIsEnqueuing:Ae,installedPlugins:Pe,installedThemes:ke,wpVersion:Ne,jetpackScan:Oe,threatsUpdating:Ie,modal:Ce,notice:Be,setThreatsFixing:Le,hasRequiredPlan:De,onboardingProgress:Re,waf:Me}),Ue={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const s=await(0,a.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(ie.setJetpackScan(s))}}},ze={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var s;return((s=e.modal)==null?void 0:s.type)||null},getModalProps:e=>{var s;return((s=e.modal)==null?void 0:s.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getOnboardingProgress:e=>e.onboardingProgress||null,getWaf:e=>e.waf};var We=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const q=class{static mayBeInit(s,l){q.store===null&&(q.store=(0,We.Z)(s,l),(0,de.z2)(q.store))}};let te=q;pe(te,"store",null);const Ve=te,ue="jetpack-protect";function Xe(){Ve.mayBeInit(ue,{__experimentalUseThunks:!0,reducer:Ge,actions:ie,selectors:ze,resolvers:Ue,initialState:g()(window.jetpackProtectInitialState)||{}})}},"../components/components/button/index.tsx":(b,o,t)=>{t.d(o,{Z:()=>_});var d=t("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),g=t("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),u=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=t.n(u),I=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=t.n(A),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),h={};h.insert="head",h.singleton=!1;var E=T()(x.Z,h);const m=x.Z.locals||{};var c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=(0,I.forwardRef)((w,P)=>{var R,Z;const{children:i,variant:L="primary",size:N="normal",weight:k="bold",icon:f,iconSize:S,disabled:v,isDestructive:j,isLoading:C,isExternalLink:B,className:z,text:W,fullWidth:V,...M}=w,X=p()(m.button,z,{[m.normal]:N==="normal",[m.small]:N==="small",[m.icon]:!!f,[m.loading]:C,[m.regular]:k==="regular",[m["full-width"]]:V,[m["is-icon-button"]]:!!f&&!i});M.ref=P;const F=N==="normal"?20:16,H=B&&(0,c.jsx)(a.Z,{size:F,icon:r.Z,className:m["external-icon"]}),K=B?"_blank":void 0,D=(i==null?void 0:i[0])&&i[0]!==null&&((Z=(R=i==null?void 0:i[0])==null?void 0:R.props)==null?void 0:Z.className)!=="components-tooltip";return(0,c.jsxs)(d.ZP,{target:K,variant:L,className:p()(X,{"has-text":!!f&&D}),icon:B?void 0:f,iconSize:S,disabled:v,"aria-disabled":v,isDestructive:j,text:W,...M,children:[C&&(0,c.jsx)(g.ZP,{}),(0,c.jsx)("span",{children:i}),H]})});n.displayName="Button";const _=n;try{n.displayName="Button",n.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(w){}},"../components/components/notice/index.tsx":(b,o,t)=>{t.d(o,{Z:()=>P});var d=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),g=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),u=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),p=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),I=t.n(p),A=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=t.n(T),h=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),E={};E.insert="head",E.singleton=!1;var m=x()(h.Z,E);const c=h.Z.locals||{};var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=i=>{switch(i){case"error":return d.Z;case"warning":return d.Z;case"info":return g.Z;case"success":return a.Z;default:return d.Z}},w=({level:i,title:L,children:N,actions:k,hideCloseButton:f,onClose:S})=>{const v=I()(c.container,c[`is-${i}`]);return(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("div",{className:c["icon-wrapper"],children:(0,n.jsx)(r.Z,{icon:_(i),className:c.icon})}),(0,n.jsxs)("div",{className:c["main-content"],children:[(0,n.jsx)("div",{className:c.title,children:L}),N,k&&k.length>0&&(0,n.jsx)("div",{className:c["action-bar"],children:k.map((j,C)=>(0,n.jsx)("div",{className:c.action,children:j},C))})]}),!f&&(0,n.jsx)("button",{"aria-label":"close",className:c["close-button"],onClick:S,children:(0,n.jsx)(r.Z,{icon:u.Z})})]})};w.displayName="Notice",w.defaultProps={level:"info",hideCloseButton:!1};const P=w},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(b,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),u=r()(g());u.push([b.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),u.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const p=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(b,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),u=r()(g());u.push([b.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),u.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const p=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(b,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=t.n(d),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),u=r()(g());u.push([b.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:rgba(0,0,0,0);border:none}",""]),u.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const p=u}}]);})();
