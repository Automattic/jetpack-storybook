"use strict";(()=>{var Fe=Object.defineProperty;var Ke=(y,o,t)=>o in y?Fe(y,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):y[o]=t;var pe=(y,o,t)=>(Ke(y,typeof o!="symbol"?o+"":o,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../components/components/notice/stories/index.stories.jsx":(y,o,t)=>{var E,n,a,P,v,k,I,C,i,w,g,x;t.r(o),t.d(o,{__namedExportsOrder:()=>A,_default:()=>S,default:()=>O,error:()=>m,success:()=>b,warning:()=>T});var d=t("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),_=t("../components/components/button/index.tsx"),l=t("../components/components/notice/index.tsx"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import { ExternalLink } from '@wordpress/components';
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
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},warning:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},success:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},error:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}}}}},title:"JS Packages/Components/Notice",component:l.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},j=h=>(0,r.jsx)(l.Z,{...h});j.displayName="Template";const S=j.bind({});S.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(_.Z,{isPrimary:!0,children:"Install now"},"install"),(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const T=j.bind({});T.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,r.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,r.jsx)(_.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const b=j.bind({});b.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(_.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const m=j.bind({});m.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,r.jsx)(d.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Notice {...args} />",...(a=(n=S.parameters)==null?void 0:n.docs)==null?void 0:a.source}}},T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Notice {...args} />",...(k=(v=T.parameters)==null?void 0:v.docs)==null?void 0:k.source}}},b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Notice {...args} />",...(i=(C=b.parameters)==null?void 0:C.docs)==null?void 0:i.source}}},m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Notice {...args} />",...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const A=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(y,o,t)=>{var Z,W,M,B,V,X,F,K,J;t.r(o),t.d(o,{Default:()=>g,Dismissable:()=>x,Duration:()=>h,__namedExportsOrder:()=>R,default:()=>i});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),l=t("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),u=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),p=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),O=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),j=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),S=t("../../plugins/protect/src/js/state/store.js"),T=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(T),m=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),A={};A.insert="head",A.singleton=!1;var E=b()(m.Z,A);const n=m.Z.locals||{};var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=l.__,v=({dismissable:D=!1,duration:G=null,floating:U=!1,message:H,type:Q="success"})=>{const{clearNotice:L}=(0,_.Z)(S.t);let Y;switch(Q){case"success":Y=r.Z;break;case"error":Y=u.Z;break;case"info":default:Y=p.Z}const $=(0,d.useCallback)(()=>{L()},[L]);return(0,d.useEffect)(()=>{let q;return G&&(q=setTimeout(L,G)),()=>clearTimeout(q)},[L,G,H]),(0,a.jsxs)("div",{className:`${n.notice} ${n[`notice--${Q}`]} ${U?n["notice--floating"]:""}`,children:[(0,a.jsx)("div",{className:n.notice__icon,children:(0,a.jsx)(O.Z,{icon:Y})}),(0,a.jsx)("div",{className:n.notice__message,children:H}),D&&(0,a.jsx)("button",{className:n.notice__close,"aria-label":P("Dismiss notice.","jetpack-protect"),onClick:$,children:(0,a.jsx)(O.Z,{icon:j.Z})})]})};v.displayName="Notice";const k=v;v.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}};var I=`import React from 'react';
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
`,C={Default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},Dismissable:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},Duration:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}};const i={title:"Plugins/Protect/Notice",component:k,parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},dismissable:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},duration:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}}},layout:"centered"},decorators:[D=>(0,a.jsx)("div",{style:{width:250},children:(0,a.jsx)(D,{})})]},w=D=>(0,a.jsx)(k,{...D});w.displayName="Template";const g=w.bind({});g.args={type:"success",message:"Code is poetry."};const x=w.bind({});x.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const h=w.bind({});h.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <Notice {...args} />",...(M=(W=g.parameters)==null?void 0:W.docs)==null?void 0:M.source}}},x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Notice {...args} />",...(X=(V=x.parameters)==null?void 0:V.docs)==null?void 0:X.source}}},h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Notice {...args} />",...(J=(K=h.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const R=["Default","Dismissable","Duration"]},"../../plugins/protect/src/js/state/store.js":(y,o,t)=>{t.d(o,{t:()=>ue,N:()=>Xe});var d=t("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),_=t.n(d),l=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.50.0/node_modules/@wordpress/api-fetch/build-module/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js");const u=r._n,p=r.__,O="SET_CREDENTIALS_STATE_IS_FETCHING",j="SET_CREDENTIALS_STATE",S="SET_STATUS",T="SET_STATUS_PROGRESS",b="START_SCAN_OPTIMISTICALLY",m="SET_STATUS_IS_FETCHING",A="SET_SCAN_IS_UNAVAILABLE",E="SET_SCAN_IS_ENQUEUING",n="SET_INSTALLED_PLUGINS",a="SET_INSTALLED_THEMES",P="SET_WP_VERSION",v="SET_JETPACK_SCAN",k="SET_PRODUCT_DATA",I="SET_THREAT_IS_UPDATING",C="SET_THREATS_ARE_FIXING",i="SET_MODAL",w="SET_NOTICE",g="CLEAR_NOTICE",x="SET_HAS_REQUIRED_PLAN",h="SET_ONBOARDING_PROGRESS",R="SET_WAF_IS_SEEN",Z="SET_WAF_UPGRADE_IS_SEEN",W="SET_WAF_IS_ENABLED",M="SET_WAF_IS_UPDATING",B="SET_WAF_IS_TOGGLING",V="SET_WAF_CONFIG",X="SET_WAF_STATS",F=e=>({type:S,status:e}),K=e=>({type:T,currentProgress:e}),J=()=>({type:b}),D=()=>({dispatch:e})=>{(0,l.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(s=>e(ce(s)))},G=e=>(0,l.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),U=(e=!1)=>async({dispatch:s})=>(s($(!0)),await new Promise((c,f)=>G(e).then(H).then(N=>{s(q(N.status==="unavailable")),s(F(_()(N))),c(N)}).catch(N=>{f(N)}).finally(()=>{s($(!1))}))),H=(e,s=0)=>new Promise((c,f)=>{e.status==="unavailable"&&s<3?G(!0).then(N=>{setTimeout(()=>{H(N,s+1).then(ne=>c(ne)).catch(ne=>f(ne))},5e3)}).catch(f):c(e)}),Q=()=>async({dispatch:e})=>await new Promise((s,c)=>(e(L(!0)),(0,l.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(f=>{e(Y(f)),s(f)}).catch(f=>{c(f)}).finally(()=>{e(L(!1))}))),L=e=>({type:O,isFetching:e}),Y=e=>({type:j,credentials:e}),$=e=>({type:m,status:e}),q=e=>({type:A,status:e}),oe=e=>({type:E,isEnqueuing:e}),me=e=>({type:n,plugins:e}),_e=e=>({type:a,themes:e}),ge=e=>({type:P,version:e}),he=e=>({type:v,scan:e}),se=(e,s)=>({type:I,payload:{threatId:e,isUpdating:s}}),re=e=>({type:C,threatIds:e}),Ee=(e,s=()=>{})=>async({dispatch:c})=>(c(se(e,!0)),await new Promise(()=>(0,l.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>c(U())).then(()=>c(z({type:"success",message:p("Threat ignored","jetpack-protect")}))).catch(()=>c(z({type:"error",message:p("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{c(se(e,!1)),s()}))),le=e=>async({dispatch:s})=>{const c=e.reduce((f,N)=>`${f}threat_ids[]=${N}&`,"jetpack-protect/v1/fix-threats-status?");return s(re(e)),await(0,l.Z)({path:c,method:"GET"}).then(async f=>{const N=Object.values(f.threats);if(N.filter(ae=>ae.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{s(le(e))},1e3)});if(!N.filter(ae=>ae.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{s(U()),s(z({type:"success",message:(0,r.gB)(u("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{s(z({type:"error",message:p("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{s(re([]))})},ve=(e,s=()=>{})=>async({dispatch:c})=>(e.forEach(f=>{c(se(f,!0))}),await new Promise(()=>(0,l.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>c(z({type:"success",message:p("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>c(le(e)),1e3)}).catch(()=>c(z({type:"error",message:p("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(f=>{c(se(f,!1))}),s()}))),fe=(e=()=>{})=>async({dispatch:s})=>(s(oe(!0)),await new Promise(()=>(0,l.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{s(J()),setTimeout(()=>s(U(!0)),5e3)}).catch(()=>s(z({type:"error",message:p("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{s(oe(!1)),e()}))),ye=e=>({type:i,payload:e}),z=e=>({type:w,payload:e}),be=()=>({type:g}),ce=e=>({type:x,hasRequiredPlan:e}),ie={checkCredentials:Q,setCredentials:Y,setCredentialsIsFetching:L,setStatus:F,setStatusProgress:K,startScanOptimistically:J,refreshStatus:U,setStatusIsFetching:$,setScanIsEnqueuing:oe,setInstalledPlugins:me,setInstalledThemes:_e,setwpVersion:ge,setJetpackScan:he,ignoreThreat:Ee,setModal:ye,setNotice:z,clearNotice:be,fixThreats:ve,scan:fe,setThreatsAreFixing:re,refreshPlan:D,setHasRequiredPlan:ce,setScanIsUnavailable:q,setOnboardingProgress:e=>({type:h,progress:e}),setWafIsEnabled:e=>({type:W,isEnabled:e}),setWafIsSeen:e=>({type:R,isSeen:e}),setWafUpgradeIsSeen:e=>({type:Z,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:M,isUpdating:e}),setWafIsToggling:e=>({type:B,isToggling:e}),setWafConfig:e=>({type:V,config:e}),setWafStats:e=>({type:X,stats:e})};var de=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const xe=(e=null,s)=>{switch(s.type){case j:return s.credentials}return e},Se=(e=!1,s)=>{switch(s.type){case O:return s.isFetching}return e},Te=(e={},s)=>{switch(s.type){case S:return s.status;case T:return{...e,currentProgress:s.currentProgress};case b:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},je=(e=!1,s)=>{switch(s.type){case m:return s.status}return e},we=(e=!1,s)=>{switch(s.type){case A:return s.status}return e},Ae=(e=!1,s)=>{switch(s.type){case E:return s.isEnqueuing}return e},Pe=(e={},s)=>{switch(s.type){case n:return s.plugins}return e},ke=(e={},s)=>{switch(s.type){case a:return s.themes}return e},Ne=(e={},s)=>{switch(s.type){case P:return s.version}return e},Oe=(e={},s)=>{switch(s.type){case v:return s.scan}return e},Ie=(e={},s)=>{switch(s.type){case I:return{...e,[s.payload.threatId]:s.payload.isUpdating}}return e},Le=(e=[],s)=>{switch(s.type){case C:return s.threatIds}return e},Ce=(e={},s)=>{switch(s.type){case i:return{...e,...s.payload}}return e},Be=(e={},s)=>{switch(s.type){case w:return{...e,...s.payload};case g:return{}}return e},De=(e=!1,s)=>{switch(s.type){case x:return s.hasRequiredPlan}return e},Re=(e=null,s)=>{switch(s.type){case h:return s.progress}return e},Ze={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Me=(e=Ze,s)=>{switch(s.type){case R:return{...e,isSeen:s.isSeen};case Z:return{...e,upgradeIsSeen:s.upgradeIsSeen};case W:return{...e,isEnabled:s.isEnabled};case V:return{...e,config:s.config};case X:return{...e,stats:s.stats};case M:return{...e,isUpdating:s.isUpdating};case B:return{...e,isToggling:s.isToggling}}return e},Ge=(0,de.UY)({credentials:xe,credentialsIsFetching:Se,status:Te,statusIsFetching:je,scanIsUnavailable:we,scanIsEnqueuing:Ae,installedPlugins:Pe,installedThemes:ke,wpVersion:Ne,jetpackScan:Oe,threatsUpdating:Ie,modal:Ce,notice:Be,setThreatsFixing:Le,hasRequiredPlan:De,onboardingProgress:Re,waf:Me}),Ue={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const s=await(0,l.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(ie.setJetpackScan(s))}}},ze={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var s;return((s=e.modal)==null?void 0:s.type)||null},getModalProps:e=>{var s;return((s=e.modal)==null?void 0:s.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getOnboardingProgress:e=>e.onboardingProgress||null,getWaf:e=>e.waf};var We=t("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const ee=class{static mayBeInit(s,c){ee.store===null&&(ee.store=(0,We.Z)(s,c),(0,de.z2)(ee.store))}};let te=ee;pe(te,"store",null);const Ve=te,ue="jetpack-protect";function Xe(){Ve.mayBeInit(ue,{__experimentalUseThunks:!0,reducer:Ge,actions:ie,selectors:ze,resolvers:Ue,initialState:_()(window.jetpackProtectInitialState)||{}})}},"../components/components/button/index.tsx":(y,o,t)=>{t.d(o,{Z:()=>k});var d=t("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),_=t("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),u=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),p=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),O=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),j=t.n(O),S=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(T),m=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),A={};A.insert="head",A.singleton=!1;var E=b()(m.Z,A);const n=m.Z.locals||{};var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=r.__,v=(0,S.forwardRef)((I,C)=>{var Q,L;const{children:i,variant:w="primary",size:g="normal",weight:x="bold",icon:h,iconSize:R,disabled:Z,isDestructive:W,isLoading:M,isExternalLink:B,className:V,text:X,fullWidth:F,...K}=I,J=j()(n.button,V,{[n.normal]:g==="normal",[n.small]:g==="small",[n.icon]:!!h,[n.loading]:M,[n.regular]:x==="regular",[n["full-width"]]:F,[n["is-icon-button"]]:!!h&&!i});K.ref=C;const D=g==="normal"?20:16,G=B&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{size:D,icon:p.Z,className:n["external-icon"]}),(0,a.jsx)(d.Z,{as:"span",children:P("(opens in a new tab)","jetpack")})]}),U=B?"_blank":void 0,H=(i==null?void 0:i[0])&&i[0]!==null&&((L=(Q=i==null?void 0:i[0])==null?void 0:Q.props)==null?void 0:L.className)!=="components-tooltip";return(0,a.jsxs)(_.ZP,{target:U,variant:w,className:j()(J,{"has-text":!!h&&H}),icon:B?void 0:h,iconSize:R,disabled:Z,"aria-disabled":Z,isDestructive:W,text:X,...K,children:[M&&(0,a.jsx)(l.ZP,{}),(0,a.jsx)("span",{children:i}),G]})});v.displayName="Button";const k=v;try{v.displayName="Button",v.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:v.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(I){}},"../components/components/notice/index.tsx":(y,o,t)=>{t.d(o,{Z:()=>v});var d=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),_=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),u=t("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),p=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),O=t.n(p),j=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=t.n(S),b=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),m={};m.insert="head",m.singleton=!1;var A=T()(b.Z,m);const E=b.Z.locals||{};var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=k=>{switch(k){case"error":return d.Z;case"warning":return d.Z;case"info":return _.Z;case"success":return l.Z;default:return d.Z}},P=({level:k,title:I,children:C,actions:i,hideCloseButton:w,onClose:g})=>{const x=O()(E.container,E[`is-${k}`]);return(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("div",{className:E["icon-wrapper"],children:(0,n.jsx)(r.Z,{icon:a(k),className:E.icon})}),(0,n.jsxs)("div",{className:E["main-content"],children:[(0,n.jsx)("div",{className:E.title,children:I}),C,i&&i.length>0&&(0,n.jsx)("div",{className:E["action-bar"],children:i.map((h,R)=>(0,n.jsx)("div",{className:E.action,children:h},R))})]}),!w&&(0,n.jsx)("button",{"aria-label":"close",className:E["close-button"],onClick:g,children:(0,n.jsx)(r.Z,{icon:u.Z})})]})};P.displayName="Notice",P.defaultProps={level:"info",hideCloseButton:!1};const v=P},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(y,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=t.n(d),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(l),u=r()(_());u.push([y.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),u.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const p=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(y,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=t.n(d),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(l),u=r()(_());u.push([y.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),u.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const p=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(y,o,t)=>{t.d(o,{Z:()=>p});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=t.n(d),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(l),u=r()(_());u.push([y.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:rgba(0,0,0,0);border:none}",""]),u.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const p=u}}]);})();