"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6534],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(P,A,r)=>{r.d(A,{XI:()=>d});var m=r("storybook/internal/preview-api"),E=r("storybook/internal/preview-errors"),o=r("@storybook/global"),l=r("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),_=Object.defineProperty,U=(i,c)=>{for(var n in c)_(i,n,{get:c[n],enumerable:!0})},C="actions",v="storybook/actions",b=null,M=`${v}/action-event`,T=null,D="$___storybook.isCyclic",f={depth:10,clearOnStoryChange:!0,limit:50},S=(i={})=>{Object.assign(f,i)},I=(i,c)=>{let n=Object.getPrototypeOf(i);return!n||c(n)?n:I(n,c)},s=i=>!!(typeof i=="object"&&i&&I(i,c=>/^Synthetic(?:Base)?Event$/.test(c.constructor.name))&&typeof i.persist=="function"),a=i=>{if(s(i)){let c=Object.create(i.constructor.prototype,Object.getOwnPropertyDescriptors(i));c.persist();let n=Object.getOwnPropertyDescriptor(c,"view"),R=n?.value;return typeof R=="object"&&R?.constructor.name==="Window"&&Object.defineProperty(c,"view",{...n,value:Object.create(R.constructor.prototype)}),c}return i},u=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,l.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function d(i,c={}){let n={...f,...c},R=function(...O){if(c.implicit){let W=("__STORYBOOK_PREVIEW__"in o.global?o.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(j=>j.phase==="playing"||j.phase==="rendering");if(W){let j=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,K=new E.ImplicitActionsDuringRendering({phase:W.phase,name:i,deprecated:j});if(j)console.warn(K);else throw K}}let g=m.addons.getChannel(),y=u(),L=5,G=O.map(a),V=O.length>1?G:G[0],Y={id:y,count:0,data:{name:i,args:V},options:{...n,maxDepth:L+(n.depth||3),allowFunction:n.allowFunction||!1}};g.emit(M,Y)};return R.isAction=!0,R.implicit=c.implicit,R}var e=(...i)=>{let c=f,n=i;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(c={...f,...n.pop()});let R=n[0];(n.length!==1||typeof R=="string")&&(R={},n.forEach(g=>{R[g]=g}));let O={};return Object.keys(R).forEach(g=>{O[g]=d(R[g],c)}),O},p={};U(p,{argsEnhancers:()=>N,loaders:()=>w});var t=(i,c)=>typeof c[i]>"u"&&!(i in c),h=i=>{let{initialArgs:c,argTypes:n,id:R,parameters:{actions:O}}=i;if(!O||O.disable||!O.argTypesRegex||!n)return{};let g=new RegExp(O.argTypesRegex);return Object.entries(n).filter(([y])=>!!g.test(y)).reduce((y,[L,G])=>(t(L,c)&&(y[L]=d(L,{implicit:!0,id:R})),y),{})},x=i=>{let{initialArgs:c,argTypes:n,parameters:{actions:R}}=i;return R?.disable||!n?{}:Object.entries(n).filter(([O,g])=>!!g.action).reduce((O,[g,y])=>(t(g,c)&&(O[g]=d(typeof y.action=="string"?y.action:g)),O),{})},N=[x,h],k=!1,B=i=>{let{parameters:{actions:c}}=i;if(!c?.disable&&!k&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in o.global&&typeof o.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=o.global.__STORYBOOK_TEST_ON_MOCK_CALL__;n((R,O)=>{let g=R.getMockName();g!=="spy"&&(!/^next\/.*::/.test(g)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(y=>g.startsWith(y)))&&d(g)(O)}),k=!0}},w=[B],X=()=>definePreview(p)},"../ai-client/src/components/message/stories/index.stories.tsx":(P,A,r)=>{r.r(A),r.d(A,{Default:()=>T,Error:()=>e,Guideline:()=>S,Upgrade:()=>a,__namedExportsOrder:()=>p,default:()=>v});var m=r("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),E=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=r("../ai-client/src/types.ts"),l=r("../ai-client/src/components/message/index.tsx"),_=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),U=`/**
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
} from '../../../types.js';
import Message, {
	GuidelineMessage,
	UpgradeMessage,
	ErrorMessage,
	MESSAGE_SEVERITY_WARNING,
	MESSAGE_SEVERITY_ERROR,
	MESSAGE_SEVERITY_SUCCESS,
	MESSAGE_SEVERITY_INFO,
} from '../index.js';

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
`,C={Default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},Guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},Upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},Error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}};const v={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/**
 * Internal dependencies
 */
import { ERROR_SERVICE_UNAVAILABLE, ERROR_QUOTA_EXCEEDED, ERROR_MODERATION, ERROR_CONTEXT_TOO_LARGE, ERROR_NETWORK, ERROR_UNCLEAR_PROMPT, ERROR_RESPONSE } from '../../../types.js';
import Message, { GuidelineMessage, UpgradeMessage, ErrorMessage, MESSAGE_SEVERITY_WARNING, MESSAGE_SEVERITY_ERROR, MESSAGE_SEVERITY_SUCCESS, MESSAGE_SEVERITY_INFO } from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}}}},title:"JS Packages/AI Client/Message",component:l.Ay,decorators:[t=>(0,_.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,_.jsx)(t,{})})]},b=t=>(0,_.jsx)(l.Ay,{...t}),M={children:(0,_.jsx)("span",{children:"Message"})},T=b.bind({});T.args=M;const D=t=>(0,_.jsx)(l.Yj,{...t}),f={},S=D.bind({});S.args=f;const I=t=>(0,_.jsx)(l.AK,{requestsRemaining:t.requestsRemaining,severity:t.severity,onUpgradeClick:(0,m.XI)("onUpgradeClick")}),s={requestsRemaining:10,severity:null},a=I.bind({});a.args=s,a.argTypes={severity:{control:{type:"select"},options:["Default","Info","Warning","Error","Success"],mapping:{Default:null,Info:l.dB,Warning:l.zP,Error:l.XG,Success:l.Us}}};const u=t=>(0,_.jsx)(l.Kw,{error:t.error,code:t.code,onTryAgainClick:(0,m.XI)("onTryAgainClick"),onUpgradeClick:(0,m.XI)("onUpgradeClick")}),d={error:"An error occurred.",code:"error_service_unavailable"},e=u.bind({});e.args=d,e.argTypes={code:{control:{type:"select"},options:["Service Unavailable","Quota Exceeded","Moderation","Context Too Large","Network","Unclear Prompt","Response"],mapping:{"Service Unavailable":o.AZ,"Quota Exceeded":o.Or,Moderation:o.ud,"Context Too Large":o.cT,Network:o.mA,"Unclear Prompt":o.L9,Response:o.zn}}};const p=["Default","Guideline","Upgrade","Error"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  return <Message {...args} />;
}`,...T.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  return <GuidelineMessage {...args} />;
}`,...S.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <UpgradeMessage requestsRemaining={args.requestsRemaining} severity={args.severity} onUpgradeClick={action('onUpgradeClick')} />;
}`,...a.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  return <ErrorMessage error={args.error} code={args.code} onTryAgainClick={action('onTryAgainClick')} onUpgradeClick={action('onUpgradeClick')} />;
}`,...e.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(P,A,r)=>{r.d(A,{A:()=>C});var m=r("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),E=r("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _(v,b){const{href:M,children:T,className:D,rel:f="",...S}=v,I=[...new Set([...f.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),s=(0,m.A)("components-external-link",D),a=!!M?.startsWith("#"),u=d=>{a&&d.preventDefault(),v.onClick&&v.onClick(d)};return(0,l.jsxs)("a",{...S,className:s,href:M,onClick:u,target:"_blank",rel:I,ref:b,children:[(0,l.jsx)("span",{className:"components-external-link__contents",children:T}),(0,l.jsx)("span",{className:"components-external-link__icon","aria-label":(0,E.__)("(opens in a new tab)"),children:"\u2197"})]})}const C=(0,o.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+element@6.21.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(P,A,r)=>{r.d(A,{A:()=>I});var m=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let E,o,l,_;const U=/<(\/)?(\w+)\s*(\/)?>/g;function C(s,a,u,d,e){return{element:s,tokenStart:a,tokenLength:u,prevOffset:d,leadingTextStart:e,children:[]}}const v=(s,a)=>{if(E=s,o=0,l=[],_=[],U.lastIndex=0,!b(a))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(M(a));return(0,m.createElement)(m.Fragment,null,...l)},b=s=>{const a=typeof s=="object",u=a&&Object.values(s);return a&&u.length&&u.every(d=>(0,m.isValidElement)(d))};function M(s){const a=T(),[u,d,e,p]=a,t=_.length,h=e>o?o:null;if(!s[d])return D(),!1;switch(u){case"no-more-tokens":if(t!==0){const{leadingTextStart:B,tokenStart:w}=_.pop();l.push(E.substr(B,w))}return D(),!1;case"self-closed":return t===0?(h!==null&&l.push(E.substr(h,e-h)),l.push(s[d]),o=e+p,!0):(f(C(s[d],e,p)),o=e+p,!0);case"opener":return _.push(C(s[d],e,p,e+p,h)),o=e+p,!0;case"closer":if(t===1)return S(e),o=e+p,!0;const x=_.pop(),N=E.substr(x.prevOffset,e-x.prevOffset);x.children.push(N),x.prevOffset=e+p;const k=C(x.element,x.tokenStart,x.tokenLength,e+p);return k.children=x.children,f(k),o=e+p,!0;default:return D(),!1}}function T(){const s=U.exec(E);if(s===null)return["no-more-tokens"];const a=s.index,[u,d,e,p]=s,t=u.length;return p?["self-closed",e,a,t]:d?["closer",e,a,t]:["opener",e,a,t]}function D(){const s=E.length-o;s!==0&&l.push(E.substr(o,s))}function f(s){const{element:a,tokenStart:u,tokenLength:d,prevOffset:e,children:p}=s,t=_[_.length-1],h=E.substr(t.prevOffset,u-t.prevOffset);h&&t.children.push(h),t.children.push((0,m.cloneElement)(a,null,...p)),t.prevOffset=e||u+d}function S(s){const{element:a,leadingTextStart:u,prevOffset:d,tokenStart:e,children:p}=_.pop(),t=s?E.substr(d,s-d):E.substr(d);t&&p.push(t),u!==null&&l.push(E.substr(u,e-u)),l.push((0,m.cloneElement)(a,null,...p))}const I=v},"../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(P,A,r)=>{r.d(A,{A:()=>o});var m=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function E({icon:l,size:_=24,...U},C){return(0,m.cloneElement)(l,{width:_,height:_,...U,ref:C})}const o=(0,m.forwardRef)(E)},"../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(P,A,r)=>{r.d(A,{A:()=>l});var m=r("../../../node_modules/.pnpm/@wordpress+primitives@4.21.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),E=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,E.jsx)(m.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,E.jsx)(m.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})}}]);
