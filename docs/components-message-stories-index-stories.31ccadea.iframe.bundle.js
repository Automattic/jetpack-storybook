"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6534],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(b,O,e)=>{e.d(O,{XI:()=>_});var p=e("storybook/internal/preview-api"),d=e("storybook/internal/preview-errors"),o=e("@storybook/global"),r=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),u=Object.defineProperty,U=(l,c)=>{for(var t in c)u(l,t,{get:c[t],enumerable:!0})},h="actions",v="storybook/actions",I=null,M=`${v}/action-event`,T=null,D="$___storybook.isCyclic",f={depth:10,clearOnStoryChange:!0,limit:50},x=(l={})=>{Object.assign(f,l)},P=(l,c)=>{let t=Object.getPrototypeOf(l);return!t||c(t)?t:P(t,c)},a=l=>!!(typeof l=="object"&&l&&P(l,c=>/^Synthetic(?:Base)?Event$/.test(c.constructor.name))&&typeof l.persist=="function"),i=l=>{if(a(l)){let c=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));c.persist();let t=Object.getOwnPropertyDescriptor(c,"view"),R=t?.value;return typeof R=="object"&&R?.constructor.name==="Window"&&Object.defineProperty(c,"view",{...t,value:Object.create(R.constructor.prototype)}),c}return l},m=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,r.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function _(l,c={}){let t={...f,...c},R=function(...A){if(c.implicit){let W=("__STORYBOOK_PREVIEW__"in o.global?o.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(k=>k.phase==="playing"||k.phase==="rendering");if(W){let k=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,K=new d.ImplicitActionsDuringRendering({phase:W.phase,name:l,deprecated:k});if(k)console.warn(K);else throw K}}let g=p.addons.getChannel(),y=m(),j=5,G=A.map(i),V=A.length>1?G:G[0],Y={id:y,count:0,data:{name:l,args:V},options:{...t,maxDepth:j+(t.depth||3),allowFunction:t.allowFunction||!1}};g.emit(M,Y)};return R.isAction=!0,R.implicit=c.implicit,R}var n=(...l)=>{let c=f,t=l;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(c={...f,...t.pop()});let R=t[0];(t.length!==1||typeof R=="string")&&(R={},t.forEach(g=>{R[g]=g}));let A={};return Object.keys(R).forEach(g=>{A[g]=_(R[g],c)}),A},E={};U(E,{argsEnhancers:()=>w,loaders:()=>N});var s=(l,c)=>typeof c[l]>"u"&&!(l in c),C=l=>{let{initialArgs:c,argTypes:t,id:R,parameters:{actions:A}}=l;if(!A||A.disable||!A.argTypesRegex||!t)return{};let g=new RegExp(A.argTypesRegex);return Object.entries(t).filter(([y])=>!!g.test(y)).reduce((y,[j,G])=>(s(j,c)&&(y[j]=_(j,{implicit:!0,id:R})),y),{})},S=l=>{let{initialArgs:c,argTypes:t,parameters:{actions:R}}=l;return R?.disable||!t?{}:Object.entries(t).filter(([A,g])=>!!g.action).reduce((A,[g,y])=>(s(g,c)&&(A[g]=_(typeof y.action=="string"?y.action:g)),A),{})},w=[S,C],L=!1,B=l=>{let{parameters:{actions:c}}=l;if(!c?.disable&&!L&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in o.global&&typeof o.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=o.global.__STORYBOOK_TEST_ON_MOCK_CALL__;t((R,A)=>{let g=R.getMockName();g!=="spy"&&(!/^next\/.*::/.test(g)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(y=>g.startsWith(y)))&&_(g)(A)}),L=!0}},N=[B],X=()=>definePreview(E)},"../ai-client/src/components/message/stories/index.stories.tsx":(b,O,e)=>{e.r(O),e.d(O,{Default:()=>T,Error:()=>n,Guideline:()=>x,Upgrade:()=>i,__namedExportsOrder:()=>E,default:()=>v});var p=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../ai-client/src/types.ts"),r=e("../ai-client/src/components/message/index.tsx"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),U=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/**
 * Internal dependencies
 */
import {
	ERROR_SERVICE_UNAVAILABLE,
	ERROR_QUOTA_EXCEEDED,
	ERROR_MODERATION,
	ERROR_CONTEXT_TOO_LARGE,
	ERROR_NETWORK,
	ERROR_UNCLEAR_PROMPT,
	ERROR_RESPONSE,
} from '../../../types.ts';
import Message, {
	GuidelineMessage,
	UpgradeMessage,
	ErrorMessage,
	MESSAGE_SEVERITY_WARNING,
	MESSAGE_SEVERITY_ERROR,
	MESSAGE_SEVERITY_SUCCESS,
	MESSAGE_SEVERITY_INFO,
} from '../index.tsx';

export default {
	title: 'JS Packages/AI Client/Message',
	component: Message,
	decorators: [
		Story => (
			<div style={ { backgroundColor: 'transparent' } }>
				<Story />
			</div>
		),
	],
};

const DefaultTemplate = args => {
	return <Message { ...args } />;
};

const DefaultArgs = {
	children: <span>Message</span>,
};

export const Default = DefaultTemplate.bind( {} );
Default.args = DefaultArgs;

const GuidelineTemplate = args => {
	return <GuidelineMessage { ...args } />;
};

const GuidelineArgs = {};

export const Guideline = GuidelineTemplate.bind( {} );
Guideline.args = GuidelineArgs;

const UpgradeTemplate = args => {
	return (
		<UpgradeMessage
			requestsRemaining={ args.requestsRemaining }
			severity={ args.severity }
			onUpgradeClick={ action( 'onUpgradeClick' ) }
		/>
	);
};

const UpgradeArgs = {
	requestsRemaining: 10,
	severity: null,
};

export const Upgrade = UpgradeTemplate.bind( {} );
Upgrade.args = UpgradeArgs;
Upgrade.argTypes = {
	severity: {
		control: {
			type: 'select',
		},
		options: [ 'Default', 'Info', 'Warning', 'Error', 'Success' ],
		mapping: {
			Default: null,
			Info: MESSAGE_SEVERITY_INFO,
			Warning: MESSAGE_SEVERITY_WARNING,
			Error: MESSAGE_SEVERITY_ERROR,
			Success: MESSAGE_SEVERITY_SUCCESS,
		},
	},
};

const ErrorTemplate = args => {
	return (
		<ErrorMessage
			error={ args.error }
			code={ args.code }
			onTryAgainClick={ action( 'onTryAgainClick' ) }
			onUpgradeClick={ action( 'onUpgradeClick' ) }
		/>
	);
};

const ErrorArgs = {
	error: 'An error occurred.',
	code: 'error_service_unavailable',
};

export const Error = ErrorTemplate.bind( {} );
Error.args = ErrorArgs;
Error.argTypes = {
	code: {
		control: {
			type: 'select',
		},
		options: [
			'Service Unavailable',
			'Quota Exceeded',
			'Moderation',
			'Context Too Large',
			'Network',
			'Unclear Prompt',
			'Response',
		],
		mapping: {
			'Service Unavailable': ERROR_SERVICE_UNAVAILABLE,
			'Quota Exceeded': ERROR_QUOTA_EXCEEDED,
			Moderation: ERROR_MODERATION,
			'Context Too Large': ERROR_CONTEXT_TOO_LARGE,
			Network: ERROR_NETWORK,
			'Unclear Prompt': ERROR_UNCLEAR_PROMPT,
			Response: ERROR_RESPONSE,
		},
	},
};
`,h={Default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},Guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},Upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},Error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}};const v={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/**
 * Internal dependencies
 */
import { ERROR_SERVICE_UNAVAILABLE, ERROR_QUOTA_EXCEEDED, ERROR_MODERATION, ERROR_CONTEXT_TOO_LARGE, ERROR_NETWORK, ERROR_UNCLEAR_PROMPT, ERROR_RESPONSE } from '../../../types.ts';
import Message, { GuidelineMessage, UpgradeMessage, ErrorMessage, MESSAGE_SEVERITY_WARNING, MESSAGE_SEVERITY_ERROR, MESSAGE_SEVERITY_SUCCESS, MESSAGE_SEVERITY_INFO } from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/AI Client/Message',
  component: Message,
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      backgroundColor: 'transparent'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const DefaultTemplate = args => {
  return /*#__PURE__*/_jsx(Message, {
    ...args
  });
};
const DefaultArgs = {
  children: /*#__PURE__*/_jsx("span", {
    children: "Message"
  })
};
export const Default = DefaultTemplate.bind({});
Default.args = DefaultArgs;
const GuidelineTemplate = args => {
  return /*#__PURE__*/_jsx(GuidelineMessage, {
    ...args
  });
};
const GuidelineArgs = {};
export const Guideline = GuidelineTemplate.bind({});
Guideline.args = GuidelineArgs;
const UpgradeTemplate = args => {
  return /*#__PURE__*/_jsx(UpgradeMessage, {
    requestsRemaining: args.requestsRemaining,
    severity: args.severity,
    onUpgradeClick: action('onUpgradeClick')
  });
};
const UpgradeArgs = {
  requestsRemaining: 10,
  severity: null
};
export const Upgrade = UpgradeTemplate.bind({});
Upgrade.args = UpgradeArgs;
Upgrade.argTypes = {
  severity: {
    control: {
      type: 'select'
    },
    options: ['Default', 'Info', 'Warning', 'Error', 'Success'],
    mapping: {
      Default: null,
      Info: MESSAGE_SEVERITY_INFO,
      Warning: MESSAGE_SEVERITY_WARNING,
      Error: MESSAGE_SEVERITY_ERROR,
      Success: MESSAGE_SEVERITY_SUCCESS
    }
  }
};
const ErrorTemplate = args => {
  return /*#__PURE__*/_jsx(ErrorMessage, {
    error: args.error,
    code: args.code,
    onTryAgainClick: action('onTryAgainClick'),
    onUpgradeClick: action('onUpgradeClick')
  });
};
const ErrorArgs = {
  error: 'An error occurred.',
  code: 'error_service_unavailable'
};
export const Error = ErrorTemplate.bind({});
Error.args = ErrorArgs;
Error.argTypes = {
  code: {
    control: {
      type: 'select'
    },
    options: ['Service Unavailable', 'Quota Exceeded', 'Moderation', 'Context Too Large', 'Network', 'Unclear Prompt', 'Response'],
    mapping: {
      'Service Unavailable': ERROR_SERVICE_UNAVAILABLE,
      'Quota Exceeded': ERROR_QUOTA_EXCEEDED,
      Moderation: ERROR_MODERATION,
      'Context Too Large': ERROR_CONTEXT_TOO_LARGE,
      Network: ERROR_NETWORK,
      'Unclear Prompt': ERROR_UNCLEAR_PROMPT,
      Response: ERROR_RESPONSE
    }
  }
};`,locationsMap:{default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}}}},title:"JS Packages/AI Client/Message",component:r.Ay,decorators:[s=>(0,u.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,u.jsx)(s,{})})]},I=s=>(0,u.jsx)(r.Ay,{...s}),M={children:(0,u.jsx)("span",{children:"Message"})},T=I.bind({});T.args=M;const D=s=>(0,u.jsx)(r.Yj,{...s}),f={},x=D.bind({});x.args=f;const P=s=>(0,u.jsx)(r.AK,{requestsRemaining:s.requestsRemaining,severity:s.severity,onUpgradeClick:(0,p.XI)("onUpgradeClick")}),a={requestsRemaining:10,severity:null},i=P.bind({});i.args=a,i.argTypes={severity:{control:{type:"select"},options:["Default","Info","Warning","Error","Success"],mapping:{Default:null,Info:r.dB,Warning:r.zP,Error:r.XG,Success:r.Us}}};const m=s=>(0,u.jsx)(r.Kw,{error:s.error,code:s.code,onTryAgainClick:(0,p.XI)("onTryAgainClick"),onUpgradeClick:(0,p.XI)("onUpgradeClick")}),_={error:"An error occurred.",code:"error_service_unavailable"},n=m.bind({});n.args=_,n.argTypes={code:{control:{type:"select"},options:["Service Unavailable","Quota Exceeded","Moderation","Context Too Large","Network","Unclear Prompt","Response"],mapping:{"Service Unavailable":o.AZ,"Quota Exceeded":o.Or,Moderation:o.ud,"Context Too Large":o.cT,Network:o.mA,"Unclear Prompt":o.L9,Response:o.zn}}};const E=["Default","Guideline","Upgrade","Error"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  return <Message {...args} />;
}`,...T.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  return <GuidelineMessage {...args} />;
}`,...x.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <UpgradeMessage requestsRemaining={args.requestsRemaining} severity={args.severity} onUpgradeClick={action('onUpgradeClick')} />;
}`,...i.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <ErrorMessage error={args.error} code={args.code} onTryAgainClick={action('onTryAgainClick')} onUpgradeClick={action('onUpgradeClick')} />;
}`,...n.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(b,O,e)=>{e.d(O,{A:()=>h});var p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(v,I){const{href:M,children:T,className:D,rel:f="",...x}=v,P=[...new Set([...f.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),a=(0,p.A)("components-external-link",D),i=!!M?.startsWith("#"),m=_=>{i&&_.preventDefault(),v.onClick&&v.onClick(_)};return(0,r.jsxs)("a",{...x,className:a,href:M,onClick:m,target:"_blank",rel:P,ref:I,children:[(0,r.jsx)("span",{className:"components-external-link__contents",children:T}),(0,r.jsx)("span",{className:"components-external-link__icon","aria-label":(0,d.__)("(opens in a new tab)"),children:"\u2197"})]})}const h=(0,o.forwardRef)(u)},"../../../node_modules/.pnpm/@wordpress+element@6.24.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(b,O,e)=>{e.d(O,{A:()=>P});var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let d,o,r,u;const U=/<(\/)?(\w+)\s*(\/)?>/g;function h(a,i,m,_,n){return{element:a,tokenStart:i,tokenLength:m,prevOffset:_,leadingTextStart:n,children:[]}}const v=(a,i)=>{if(d=a,o=0,r=[],u=[],U.lastIndex=0,!I(i))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(M(i));return(0,p.createElement)(p.Fragment,null,...r)},I=a=>{const i=typeof a=="object",m=i&&Object.values(a);return i&&m.length&&m.every(_=>(0,p.isValidElement)(_))};function M(a){const i=T(),[m,_,n,E]=i,s=u.length,C=n>o?o:null;if(!a[_])return D(),!1;switch(m){case"no-more-tokens":if(s!==0){const{leadingTextStart:B,tokenStart:N}=u.pop();r.push(d.substr(B,N))}return D(),!1;case"self-closed":return s===0?(C!==null&&r.push(d.substr(C,n-C)),r.push(a[_]),o=n+E,!0):(f(h(a[_],n,E)),o=n+E,!0);case"opener":return u.push(h(a[_],n,E,n+E,C)),o=n+E,!0;case"closer":if(s===1)return x(n),o=n+E,!0;const S=u.pop(),w=d.substr(S.prevOffset,n-S.prevOffset);S.children.push(w),S.prevOffset=n+E;const L=h(S.element,S.tokenStart,S.tokenLength,n+E);return L.children=S.children,f(L),o=n+E,!0;default:return D(),!1}}function T(){const a=U.exec(d);if(a===null)return["no-more-tokens"];const i=a.index,[m,_,n,E]=a,s=m.length;return E?["self-closed",n,i,s]:_?["closer",n,i,s]:["opener",n,i,s]}function D(){const a=d.length-o;a!==0&&r.push(d.substr(o,a))}function f(a){const{element:i,tokenStart:m,tokenLength:_,prevOffset:n,children:E}=a,s=u[u.length-1],C=d.substr(s.prevOffset,m-s.prevOffset);C&&s.children.push(C),s.children.push((0,p.cloneElement)(i,null,...E)),s.prevOffset=n||m+_}function x(a){const{element:i,leadingTextStart:m,prevOffset:_,tokenStart:n,children:E}=u.pop(),s=a?d.substr(_,a-_):d.substr(_);s&&E.push(s),m!==null&&r.push(d.substr(m,n-m)),r.push((0,p.cloneElement)(i,null,...E))}const P=v},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(b,O,e)=>{e.d(O,{A:()=>o});var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d({icon:r,size:u=24,...U},h){return(0,p.cloneElement)(r,{width:u,height:u,...U,ref:h})}const o=(0,p.forwardRef)(d)},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(b,O,e)=>{e.d(O,{A:()=>r});var p=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,d.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(p.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-down.js":(b,O,e)=>{e.d(O,{A:()=>r});var p=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,d.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(p.wA,{d:"M19.8 4h-1.5l1 8h1.5l-1-8ZM17 5.8c-.1-1-1-1.8-2-1.8H6.8c-.9 0-1.7.6-1.9 1.4l-1.8 6C2.7 12.7 3.7 14 5 14h4.4l-.8 3.6c-.3 1.3.7 2.4 1.9 2.4h.2c.6 0 1.2-.3 1.6-.8l5-6.6c.3-.4.5-.9.4-1.5L17 5.7Zm-.9 5.9-5 6.6c0 .1-.2.2-.4.2h-.2c-.3 0-.6-.3-.5-.6l.8-3.6c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6H4.9c-.3 0-.6-.3-.5-.6l1.8-6c0-.2.3-.4.5-.4h8.2c.3 0 .5.2.5.4l.7 5.4v.4Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-up.js":(b,O,e)=>{e.d(O,{A:()=>r});var p=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,d.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(p.wA,{d:"m3 12 1 8h1.5l-1-8H3Zm15.8-2h-4.4l.8-3.6c.3-1.3-.7-2.4-1.9-2.4h-.2c-.6 0-1.2.3-1.6.8l-5 6.6c-.3.4-.4.8-.4 1.2v.2l.7 5.4v.2c.2.9 1 1.5 1.9 1.5h8.2c.9 0 1.7-.6 1.9-1.4l1.8-6c.4-1.3-.6-2.6-1.9-2.6Zm.5 2.1-1.8 6c0 .2-.3.4-.5.4H8.8c-.3 0-.5-.2-.5-.4l-.7-5.4v-.4l5-6.6c0-.1.2-.2.4-.2h.2c.3 0 .6.3.5.6l-.8 3.6c-.1.4 0 .9.3 1.3s.7.6 1.2.6h4.4c.3 0 .6.3.5.6Z"})})}}]);
