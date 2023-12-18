"use strict";(()=>{var Ve=Object.defineProperty;var Xe=(j,o,s)=>o in j?Ve(j,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):j[o]=s;var de=(j,o,s)=>(Xe(j,typeof o!="symbol"?o+"":o,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../components/components/notice/stories/index.stories.jsx":(j,o,s)=>{var l,n,m,x,T,u,k,b,I,A,N,S;s.r(o),s.d(o,{__namedExportsOrder:()=>p,_default:()=>E,default:()=>w,error:()=>y,success:()=>f,warning:()=>d});var c=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),_=s("../components/components/button/index.tsx"),r=s("../components/components/notice/index.tsx"),a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),g=`import { ExternalLink } from '@wordpress/components';
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
`,i={_default:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},warning:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},success:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},error:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}}};const w={parameters:{storySource:{source:`import { ExternalLink } from '@wordpress/components';
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
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},warning:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},success:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}},error:{startLoc:{col:17,line:23},endLoc:{col:47,line:23},startBody:{col:17,line:23},endBody:{col:47,line:23}}}}},title:"JS Packages/Components/Notice",component:r.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},h=O=>(0,a.jsx)(r.Z,{...O});h.displayName="Template";const E=h.bind({});E.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,a.jsx)(_.Z,{isPrimary:!0,children:"Install now"},"install"),(0,a.jsx)(c.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const d=h.bind({});d.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,a.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,a.jsx)(_.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,a.jsx)(c.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const f=h.bind({});f.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,a.jsx)(_.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const y=h.bind({});y.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,a.jsx)(c.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},E.parameters={...E.parameters,docs:{...(l=E.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Notice {...args} />",...(m=(n=E.parameters)==null?void 0:n.docs)==null?void 0:m.source}}},d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Notice {...args} />",...(u=(T=d.parameters)==null?void 0:T.docs)==null?void 0:u.source}}},f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Notice {...args} />",...(I=(b=f.parameters)==null?void 0:b.docs)==null?void 0:I.source}}},y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:"args => <Notice {...args} />",...(S=(N=y.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const p=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(j,o,s)=>{var y,p,l,n,m,x,T,u,k;s.r(o),s.d(o,{Default:()=>h,Dismissable:()=>E,Duration:()=>d,__namedExportsOrder:()=>f,default:()=>i});var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=s("../../plugins/protect/src/js/components/notice/index.jsx"),r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import React from 'react';
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
`,g={Default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},Dismissable:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},Duration:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}};const i={title:"Plugins/Protect/Notice",component:_.Z,parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},dismissable:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}},duration:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}}},layout:"centered"},decorators:[b=>(0,r.jsx)("div",{style:{width:250},children:(0,r.jsx)(b,{})})]},w=b=>(0,r.jsx)(_.Z,{...b});w.displayName="Template";const h=w.bind({});h.args={type:"success",message:"Code is poetry."};const E=w.bind({});E.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const d=w.bind({});d.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Notice {...args} />",...(l=(p=h.parameters)==null?void 0:p.docs)==null?void 0:l.source}}},E.parameters={...E.parameters,docs:{...(n=E.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Notice {...args} />",...(x=(m=E.parameters)==null?void 0:m.docs)==null?void 0:x.source}}},d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"args => <Notice {...args} />",...(k=(u=d.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const f=["Default","Dismissable","Duration"]},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(j,o,s)=>{s.d(o,{Z:()=>p});var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=s.n(_),a=s("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),g=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),i=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),w=s("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),h=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js");function E(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const d=(0,w.Z)(h.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function f(l,n){const{href:m,children:x,className:T,rel:u="",...k}=l,b=[...new Set([...u.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),I=r()("components-external-link",T),A=!!(m!=null&&m.startsWith("#")),N=S=>{A&&S.preventDefault(),l.onClick&&l.onClick(S)};return(0,c.createElement)("a",{...k,className:I,href:m,onClick:N,target:"_blank",rel:b,ref:n},x,(0,c.createElement)(i.Z,{as:"span"},(0,a.__)("(opens in a new tab)")),(0,c.createElement)(d,{icon:g.Z,className:"components-external-link__icon"}))}const p=(0,c.forwardRef)(f)},"../../plugins/protect/src/js/components/notice/index.jsx":(j,o,s)=>{s.d(o,{Z:()=>u});var c=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),_=s("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),r=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),a=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),g=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),i=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),w=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),h=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),E=s("../../plugins/protect/src/js/state/store.js"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=s.n(d),y=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),p={};p.insert="head",p.singleton=!1;var l=f()(y.Z,p);const n=y.Z.locals||{};var m=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const x=_.__,T=({dismissable:k=!1,duration:b=null,floating:I=!1,message:A,type:N="success"})=>{const{clearNotice:S}=(0,c.Z)(E.t);let O;switch(N){case"success":O=r.Z;break;case"error":O=a.Z;break;case"info":default:O=g.Z}const C=(0,h.useCallback)(()=>{S()},[S]);return(0,h.useEffect)(()=>{let B;return b&&(B=setTimeout(S,b)),()=>clearTimeout(B)},[S,b,A]),(0,m.jsxs)("div",{className:`${n.notice} ${n[`notice--${N}`]} ${I?n["notice--floating"]:""}`,children:[(0,m.jsx)("div",{className:n.notice__icon,children:(0,m.jsx)(i.Z,{icon:O})}),(0,m.jsx)("div",{className:n.notice__message,children:A}),k&&(0,m.jsx)("button",{className:n.notice__close,"aria-label":x("Dismiss notice.","jetpack-protect"),onClick:C,children:(0,m.jsx)(i.Z,{icon:w.Z})})]})};T.displayName="Notice";const u=T;T.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}}},"../../plugins/protect/src/js/state/store.js":(j,o,s)=>{s.d(o,{t:()=>ie,N:()=>ze});var c=s("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),_=s.n(c),r=s("../../../node_modules/.pnpm/@wordpress+api-fetch@6.44.0/node_modules/@wordpress/api-fetch/build-module/index.js"),a=s("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js");const g=a._n,i=a.__,w="SET_CREDENTIALS_STATE_IS_FETCHING",h="SET_CREDENTIALS_STATE",E="SET_STATUS",d="SET_STATUS_PROGRESS",f="START_SCAN_OPTIMISTICALLY",y="SET_STATUS_IS_FETCHING",p="SET_SCAN_IS_UNAVAILABLE",l="SET_SCAN_IS_ENQUEUING",n="SET_INSTALLED_PLUGINS",m="SET_INSTALLED_THEMES",x="SET_WP_VERSION",T="SET_JETPACK_SCAN",u="SET_PRODUCT_DATA",k="SET_THREAT_IS_UPDATING",b="SET_THREATS_ARE_FIXING",I="SET_MODAL",A="SET_NOTICE",N="CLEAR_NOTICE",S="SET_HAS_REQUIRED_PLAN",O="SET_WAF_IS_SEEN",C="SET_WAF_UPGRADE_IS_SEEN",B="SET_WAF_IS_ENABLED",G="SET_WAF_IS_UPDATING",W="SET_WAF_IS_TOGGLING",z="SET_WAF_CONFIG",Z="SET_WAF_STATS",V=e=>({type:E,status:e}),Q=e=>({type:d,currentProgress:e}),X=()=>({type:f}),Y=()=>({dispatch:e})=>{(0,r.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(t=>e(ae(t)))},F=e=>(0,r.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),R=(e=!1)=>async({dispatch:t})=>(t(q(!0)),await new Promise((v,P)=>F(e).then(M).then(L=>{t(oe(L.status==="unavailable")),t(V(_()(L))),v(L)}).catch(L=>{P(L)}).finally(()=>{t(q(!1))}))),M=(e,t=0)=>new Promise((v,P)=>{e.status==="unavailable"&&t<3?F(!0).then(L=>{setTimeout(()=>{M(L,t+1).then(H=>v(H)).catch(H=>P(H))},5e3)}).catch(P):v(e)}),ue=()=>async({dispatch:e})=>await new Promise((t,v)=>(e($(!0)),(0,r.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(P=>{e(ne(P)),t(P)}).catch(P=>{v(P)}).finally(()=>{e($(!1))}))),$=e=>({type:w,isFetching:e}),ne=e=>({type:h,credentials:e}),q=e=>({type:y,status:e}),oe=e=>({type:p,status:e}),ee=e=>({type:l,isEnqueuing:e}),pe=e=>({type:n,plugins:e}),me=e=>({type:m,themes:e}),_e=e=>({type:x,version:e}),ge=e=>({type:T,scan:e}),K=(e,t)=>({type:k,payload:{threatId:e,isUpdating:t}}),se=e=>({type:b,threatIds:e}),he=(e,t=()=>{})=>async({dispatch:v})=>(v(K(e,!0)),await new Promise(()=>(0,r.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>v(R())).then(()=>v(D({type:"success",message:i("Threat ignored","jetpack-protect")}))).catch(()=>v(D({type:"error",message:i("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{v(K(e,!1)),t()}))),re=e=>async({dispatch:t})=>{const v=e.reduce((P,L)=>`${P}threat_ids[]=${L}&`,"jetpack-protect/v1/fix-threats-status?");return t(se(e)),await(0,r.Z)({path:v,method:"GET"}).then(async P=>{const L=Object.values(P.threats);if(L.filter(te=>te.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{t(re(e))},1e3)});if(!L.filter(te=>te.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{t(R()),t(D({type:"success",message:(0,a.gB)(g("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{t(D({type:"error",message:i("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{t(se([]))})},Ee=(e,t=()=>{})=>async({dispatch:v})=>(e.forEach(P=>{v(K(P,!0))}),await new Promise(()=>(0,r.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>v(D({type:"success",message:i("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>v(re(e)),1e3)}).catch(()=>v(D({type:"error",message:i("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(P=>{v(K(P,!1))}),t()}))),fe=(e=()=>{})=>async({dispatch:t})=>(t(ee(!0)),await new Promise(()=>(0,r.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{t(X()),setTimeout(()=>t(R(!0)),5e3)}).catch(()=>t(D({type:"error",message:i("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{t(ee(!1)),e()}))),ve=e=>({type:I,payload:e}),D=e=>({type:A,payload:e}),ye=()=>({type:N}),ae=e=>({type:S,hasRequiredPlan:e}),le={checkCredentials:ue,setCredentials:ne,setCredentialsIsFetching:$,setStatus:V,setStatusProgress:Q,startScanOptimistically:X,refreshStatus:R,setStatusIsFetching:q,setScanIsEnqueuing:ee,setInstalledPlugins:pe,setInstalledThemes:me,setwpVersion:_e,setJetpackScan:ge,ignoreThreat:he,setModal:ve,setNotice:D,clearNotice:ye,fixThreats:Ee,scan:fe,setThreatsAreFixing:se,refreshPlan:Y,setHasRequiredPlan:ae,setScanIsUnavailable:oe,setWafIsEnabled:e=>({type:B,isEnabled:e}),setWafIsSeen:e=>({type:O,isSeen:e}),setWafUpgradeIsSeen:e=>({type:C,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:G,isUpdating:e}),setWafIsToggling:e=>({type:W,isToggling:e}),setWafConfig:e=>({type:z,config:e}),setWafStats:e=>({type:Z,stats:e})};var ce=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const be=(e=null,t)=>{switch(t.type){case h:return t.credentials}return e},xe=(e=!1,t)=>{switch(t.type){case w:return t.isFetching}return e},je=(e={},t)=>{switch(t.type){case E:return t.status;case d:return{...e,currentProgress:t.currentProgress};case f:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},Te=(e=!1,t)=>{switch(t.type){case y:return t.status}return e},Se=(e=!1,t)=>{switch(t.type){case p:return t.status}return e},we=(e=!1,t)=>{switch(t.type){case l:return t.isEnqueuing}return e},Ae=(e={},t)=>{switch(t.type){case n:return t.plugins}return e},Pe=(e={},t)=>{switch(t.type){case m:return t.themes}return e},ke=(e={},t)=>{switch(t.type){case x:return t.version}return e},Ie=(e={},t)=>{switch(t.type){case T:return t.scan}return e},Ne=(e={},t)=>{switch(t.type){case k:return{...e,[t.payload.threatId]:t.payload.isUpdating}}return e},Oe=(e=[],t)=>{switch(t.type){case b:return t.threatIds}return e},Le=(e={},t)=>{switch(t.type){case I:return{...e,...t.payload}}return e},Ce=(e={},t)=>{switch(t.type){case A:return{...e,...t.payload};case N:return{}}return e},Be=(e=!1,t)=>{switch(t.type){case S:return t.hasRequiredPlan}return e},De={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Re=(e=De,t)=>{switch(t.type){case O:return{...e,isSeen:t.isSeen};case C:return{...e,upgradeIsSeen:t.upgradeIsSeen};case B:return{...e,isEnabled:t.isEnabled};case z:return{...e,config:t.config};case Z:return{...e,stats:t.stats};case G:return{...e,isUpdating:t.isUpdating};case W:return{...e,isToggling:t.isToggling}}return e},Ze=(0,ce.UY)({credentials:be,credentialsIsFetching:xe,status:je,statusIsFetching:Te,scanIsUnavailable:Se,scanIsEnqueuing:we,installedPlugins:Ae,installedThemes:Pe,wpVersion:ke,jetpackScan:Ie,threatsUpdating:Ne,modal:Le,notice:Ce,setThreatsFixing:Oe,hasRequiredPlan:Be,waf:Re}),Me={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const t=await(0,r.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(le.setJetpackScan(t))}}},Ue={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var t;return((t=e.modal)==null?void 0:t.type)||null},getModalProps:e=>{var t;return((t=e.modal)==null?void 0:t.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getWaf:e=>e.waf};var Ge=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const U=class{static mayBeInit(t,v){U.store===null&&(U.store=(0,Ge.Z)(t,v),(0,ce.z2)(U.store))}};let J=U;de(J,"store",null);const We=J,ie="jetpack-protect";function ze(){We.mayBeInit(ie,{__experimentalUseThunks:!0,reducer:Ze,actions:le,selectors:Ue,resolvers:Me,initialState:_()(window.jetpackProtectInitialState)||{}})}},"../components/components/button/index.tsx":(j,o,s)=>{s.d(o,{Z:()=>m});var c=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),_=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),r=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),g=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=s.n(g),w=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=s.n(h),d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),f={};f.insert="head",f.singleton=!1;var y=E()(d.Z,f);const p=d.Z.locals||{};var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=(0,w.forwardRef)((x,T)=>{var R,M;const{children:u,variant:k="primary",size:b="normal",weight:I="bold",icon:A,iconSize:N,disabled:S,isDestructive:O,isLoading:C,isExternalLink:B,className:G,text:W,fullWidth:z,...Z}=x,V=i()(p.button,G,{[p.normal]:b==="normal",[p.small]:b==="small",[p.icon]:!!A,[p.loading]:C,[p.regular]:I==="regular",[p["full-width"]]:z,[p["is-icon-button"]]:!!A&&!u});Z.ref=T;const Q=b==="normal"?20:16,X=B&&(0,l.jsx)(r.Z,{size:Q,icon:a.Z,className:p["external-icon"]}),Y=B?"_blank":void 0,F=(u==null?void 0:u[0])&&u[0]!==null&&((M=(R=u==null?void 0:u[0])==null?void 0:R.props)==null?void 0:M.className)!=="components-tooltip";return(0,l.jsxs)(c.ZP,{target:Y,variant:k,className:i()(V,{"has-text":!!A&&F}),icon:B?void 0:A,iconSize:N,disabled:S,"aria-disabled":S,isDestructive:O,text:W,...Z,children:[C&&(0,l.jsx)(_.ZP,{}),(0,l.jsx)("span",{children:u}),X]})});n.displayName="Button";const m=n;try{n.displayName="Button",n.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(x){}},"../components/components/notice/index.tsx":(j,o,s)=>{s.d(o,{Z:()=>T});var c=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),_=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),r=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),a=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),g=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),i=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),w=s.n(i),h=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),E=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=s.n(E),f=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),y={};y.insert="head",y.singleton=!1;var p=d()(f.Z,y);const l=f.Z.locals||{};var n=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=u=>{switch(u){case"error":return c.Z;case"warning":return c.Z;case"info":return _.Z;case"success":return r.Z;default:return c.Z}},x=({level:u,title:k,children:b,actions:I,hideCloseButton:A,onClose:N})=>{const S=w()(l.container,l[`is-${u}`]);return(0,n.jsxs)("div",{className:S,children:[(0,n.jsx)("div",{className:l["icon-wrapper"],children:(0,n.jsx)(a.Z,{icon:m(u),className:l.icon})}),(0,n.jsxs)("div",{className:l["main-content"],children:[(0,n.jsx)("div",{className:l.title,children:k}),b,I&&I.length>0&&(0,n.jsx)("div",{className:l["action-bar"],children:I.map((O,C)=>(0,n.jsx)("div",{className:l.action,children:O},C))})]}),!A&&(0,n.jsx)("button",{"aria-label":"close",className:l["close-button"],onClick:N,children:(0,n.jsx)(a.Z,{icon:g.Z})})]})};x.displayName="Notice",x.defaultProps={level:"info",hideCloseButton:!1};const T=x},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(j,o,s)=>{s.d(o,{Z:()=>i});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(c),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(r),g=a()(_());g.push([j.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),g.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const i=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(j,o,s)=>{s.d(o,{Z:()=>i});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(c),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(r),g=a()(_());g.push([j.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),g.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const i=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(j,o,s)=>{s.d(o,{Z:()=>i});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(c),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=s.n(r),g=a()(_());g.push([j.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:rgba(0,0,0,0);border:none}",""]),g.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const i=g}}]);})();
