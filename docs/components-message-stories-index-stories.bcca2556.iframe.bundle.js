"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6534],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(x,E,o)=>{o.d(E,{XI:()=>a});var d=o("storybook/internal/preview-api"),c=o("storybook/internal/preview-errors"),i=o("@storybook/global"),s=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),_="actions",f="storybook/actions",O=null,A=`${f}/action-event`,v=null,y="$___storybook.isCyclic",m={depth:10,clearOnStoryChange:!0,limit:50},S=(r={})=>{Object.assign(m,r)},T=(r,e)=>{let n=Object.getPrototypeOf(r);return!n||e(n)?n:T(n,e)},R=r=>!!(typeof r=="object"&&r&&T(r,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof r.persist=="function"),h=r=>{if(R(r)){let e=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),t=n?.value;return typeof t=="object"&&t?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(t.constructor.prototype)}),e}return r},l=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,s.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function a(r,e={}){let n={...m,...e},t=function(...g){if(e.implicit){let I=("__STORYBOOK_PREVIEW__"in i.global?i.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(U=>U.phase==="playing"||U.phase==="rendering");if(I){let U=!window?.FEATURES?.disallowImplicitActionsInRenderV8,j=new c.ImplicitActionsDuringRendering({phase:I.phase,name:r,deprecated:U});if(U)console.warn(j);else throw j}}let u=d.addons.getChannel(),M=l(),C=5,D=g.map(h),P=g.length>1?D:D[0],L={id:M,count:0,data:{name:r,args:P},options:{...n,maxDepth:C+(n.depth||3),allowFunction:n.allowFunction||!1}};u.emit(A,L)};return t.isAction=!0,t.implicit=e.implicit,t}var p=(...r)=>{let e=m,n=r;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(e={...m,...n.pop()});let t=n[0];(n.length!==1||typeof t=="string")&&(t={},n.forEach(u=>{t[u]=u}));let g={};return Object.keys(t).forEach(u=>{g[u]=a(t[u],e)}),g}},"../ai-client/src/components/message/stories/index.stories.tsx":(x,E,o)=>{o.r(E),o.d(E,{Default:()=>m,Error:()=>e,Guideline:()=>R,Upgrade:()=>a,__namedExportsOrder:()=>n,default:()=>A});var d=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=o("../ai-client/src/types.ts"),s=o("../ai-client/src/components/message/index.tsx"),_=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`/**
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
`,O={Default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},Guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},Upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},Error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}};const A={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}}}},title:"JS Packages/AI Client/Message",component:s.Ay,decorators:[t=>(0,_.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,_.jsx)(t,{})})]},v=t=>(0,_.jsx)(s.Ay,{...t}),y={children:(0,_.jsx)("span",{children:"Message"})},m=v.bind({});m.args=y;const S=t=>(0,_.jsx)(s.Yj,{...t}),T={},R=S.bind({});R.args=T;const h=t=>(0,_.jsx)(s.AK,{requestsRemaining:t.requestsRemaining,severity:t.severity,onUpgradeClick:(0,d.XI)("onUpgradeClick")}),l={requestsRemaining:10,severity:null},a=h.bind({});a.args=l,a.argTypes={severity:{control:{type:"select"},options:["Default","Info","Warning","Error","Success"],mapping:{Default:null,Info:s.dB,Warning:s.zP,Error:s.XG,Success:s.Us}}};const p=t=>(0,_.jsx)(s.Kw,{error:t.error,code:t.code,onTryAgainClick:(0,d.XI)("onTryAgainClick"),onUpgradeClick:(0,d.XI)("onUpgradeClick")}),r={error:"An error occurred.",code:"error_service_unavailable"},e=p.bind({});e.args=r,e.argTypes={code:{control:{type:"select"},options:["Service Unavailable","Quota Exceeded","Moderation","Context Too Large","Network","Unclear Prompt","Response"],mapping:{"Service Unavailable":i.AZ,"Quota Exceeded":i.Or,Moderation:i.ud,"Context Too Large":i.cT,Network:i.mA,"Unclear Prompt":i.L9,Response:i.zn}}};const n=["Default","Guideline","Upgrade","Error"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  return <Message {...args} />;
}`,...m.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  return <GuidelineMessage {...args} />;
}`,...R.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <UpgradeMessage requestsRemaining={args.requestsRemaining} severity={args.severity} onUpgradeClick={action('onUpgradeClick')} />;
}`,...a.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  return <ErrorMessage error={args.error} code={args.code} onTryAgainClick={action('onTryAgainClick')} onUpgradeClick={action('onUpgradeClick')} />;
}`,...e.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(x,E,o)=>{o.d(E,{A:()=>O});var d=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=o("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),i=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _(A,v){const{href:y,children:m,className:S,rel:T="",...R}=A,h=[...new Set([...T.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),l=(0,d.A)("components-external-link",S),a=!!y?.startsWith("#"),p=r=>{a&&r.preventDefault(),A.onClick&&A.onClick(r)};return(0,s.jsxs)("a",{...R,className:l,href:y,onClick:p,target:"_blank",rel:h,ref:v,children:[(0,s.jsx)("span",{className:"components-external-link__contents",children:m}),(0,s.jsx)("span",{className:"components-external-link__icon","aria-label":(0,c.__)("(opens in a new tab)"),children:"\u2197"})]})}const O=(0,i.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+element@6.17.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(x,E,o)=>{o.d(E,{A:()=>h});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let c,i,s,_;const f=/<(\/)?(\w+)\s*(\/)?>/g;function O(l,a,p,r,e){return{element:l,tokenStart:a,tokenLength:p,prevOffset:r,leadingTextStart:e,children:[]}}const A=(l,a)=>{if(c=l,i=0,s=[],_=[],f.lastIndex=0,!v(a))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(y(a));return(0,d.createElement)(d.Fragment,null,...s)},v=l=>{const a=typeof l=="object",p=a&&Object.values(l);return a&&p.length&&p.every(r=>(0,d.isValidElement)(r))};function y(l){const a=m(),[p,r,e,n]=a,t=_.length,g=e>i?i:null;if(!l[r])return S(),!1;switch(p){case"no-more-tokens":if(t!==0){const{leadingTextStart:D,tokenStart:P}=_.pop();s.push(c.substr(D,P))}return S(),!1;case"self-closed":return t===0?(g!==null&&s.push(c.substr(g,e-g)),s.push(l[r]),i=e+n,!0):(T(O(l[r],e,n)),i=e+n,!0);case"opener":return _.push(O(l[r],e,n,e+n,g)),i=e+n,!0;case"closer":if(t===1)return R(e),i=e+n,!0;const u=_.pop(),M=c.substr(u.prevOffset,e-u.prevOffset);u.children.push(M),u.prevOffset=e+n;const C=O(u.element,u.tokenStart,u.tokenLength,e+n);return C.children=u.children,T(C),i=e+n,!0;default:return S(),!1}}function m(){const l=f.exec(c);if(l===null)return["no-more-tokens"];const a=l.index,[p,r,e,n]=l,t=p.length;return n?["self-closed",e,a,t]:r?["closer",e,a,t]:["opener",e,a,t]}function S(){const l=c.length-i;l!==0&&s.push(c.substr(i,l))}function T(l){const{element:a,tokenStart:p,tokenLength:r,prevOffset:e,children:n}=l,t=_[_.length-1],g=c.substr(t.prevOffset,p-t.prevOffset);g&&t.children.push(g),t.children.push((0,d.cloneElement)(a,null,...n)),t.prevOffset=e||p+r}function R(l){const{element:a,leadingTextStart:p,prevOffset:r,tokenStart:e,children:n}=_.pop(),t=l?c.substr(r,l-r):c.substr(r);t&&n.push(t),p!==null&&s.push(c.substr(p,e-p)),s.push((0,d.cloneElement)(a,null,...n))}const h=A},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(x,E,o)=>{o.d(E,{A:()=>i});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c({icon:s,size:_=24,...f},O){return(0,d.cloneElement)(s,{width:_,height:_,...f,ref:O})}const i=(0,d.forwardRef)(c)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(x,E,o)=>{o.d(E,{A:()=>s});var d=o("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,c.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,c.jsx)(d.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-down.js":(x,E,o)=>{o.d(E,{A:()=>s});var d=o("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,c.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,c.jsx)(d.wA,{d:"M19.8 4h-1.5l1 8h1.5l-1-8ZM17 5.8c-.1-1-1-1.8-2-1.8H6.8c-.9 0-1.7.6-1.9 1.4l-1.8 6C2.7 12.7 3.7 14 5 14h4.4l-.8 3.6c-.3 1.3.7 2.4 1.9 2.4h.2c.6 0 1.2-.3 1.6-.8l5-6.6c.3-.4.5-.9.4-1.5L17 5.7Zm-.9 5.9-5 6.6c0 .1-.2.2-.4.2h-.2c-.3 0-.6-.3-.5-.6l.8-3.6c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6H4.9c-.3 0-.6-.3-.5-.6l1.8-6c0-.2.3-.4.5-.4h8.2c.3 0 .5.2.5.4l.7 5.4v.4Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-up.js":(x,E,o)=>{o.d(E,{A:()=>s});var d=o("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,c.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,c.jsx)(d.wA,{d:"m3 12 1 8h1.5l-1-8H3Zm15.8-2h-4.4l.8-3.6c.3-1.3-.7-2.4-1.9-2.4h-.2c-.6 0-1.2.3-1.6.8l-5 6.6c-.3.4-.4.8-.4 1.2v.2l.7 5.4v.2c.2.9 1 1.5 1.9 1.5h8.2c.9 0 1.7-.6 1.9-1.4l1.8-6c.4-1.3-.6-2.6-1.9-2.6Zm.5 2.1-1.8 6c0 .2-.3.4-.5.4H8.8c-.3 0-.5-.2-.5-.4l-.7-5.4v-.4l5-6.6c0-.1.2-.2.4-.2h.2c.3 0 .6.3.5.6l-.8 3.6c-.1.4 0 .9.3 1.3s.7.6 1.2.6h4.4c.3 0 .6.3.5.6Z"})})}}]);
