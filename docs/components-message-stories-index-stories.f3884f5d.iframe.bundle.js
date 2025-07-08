"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6534],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(M,R,e)=>{e.d(R,{XI:()=>s});var _=e("storybook/internal/preview-api"),t=e("storybook/internal/preview-errors"),o=e("@storybook/global"),i=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),O=Object.defineProperty,C=(l,d)=>{for(var r in d)O(l,r,{get:d[r],enumerable:!0})},y="actions",v="storybook/actions",D=null,f=`${v}/action-event`,I=null,U="$___storybook.isCyclic",A={depth:10,clearOnStoryChange:!0,limit:50},P=(l={})=>{Object.assign(A,l)},b=(l,d)=>{let r=Object.getPrototypeOf(l);return!r||d(r)?r:b(r,d)},n=l=>!!(typeof l=="object"&&l&&b(l,d=>/^Synthetic(?:Base)?Event$/.test(d.constructor.name))&&typeof l.persist=="function"),p=l=>{if(n(l)){let d=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));d.persist();let r=Object.getOwnPropertyDescriptor(d,"view"),g=r?.value;return typeof g=="object"&&g?.constructor.name==="Window"&&Object.defineProperty(d,"view",{...r,value:Object.create(g.constructor.prototype)}),d}return l},u=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,i.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function s(l,d={}){let r={...A,...d},g=function(...T){if(d.implicit){let W=("__STORYBOOK_PREVIEW__"in o.global?o.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(j=>j.phase==="playing"||j.phase==="rendering");if(W){let j=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,K=new t.ImplicitActionsDuringRendering({phase:W.phase,name:l,deprecated:j});if(j)console.warn(K);else throw K}}let E=_.addons.getChannel(),x=u(),k=5,G=T.map(p),V=T.length>1?G:G[0],Y={id:x,count:0,data:{name:l,args:V},options:{...r,maxDepth:k+(r.depth||3),allowFunction:r.allowFunction||!1}};E.emit(f,Y)};return g.isAction=!0,g.implicit=d.implicit,g}var c=(...l)=>{let d=A,r=l;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(d={...A,...r.pop()});let g=r[0];(r.length!==1||typeof g=="string")&&(g={},r.forEach(E=>{g[E]=E}));let T={};return Object.keys(g).forEach(E=>{T[E]=s(g[E],d)}),T},a={};C(a,{argsEnhancers:()=>w,loaders:()=>N});var m=(l,d)=>typeof d[l]>"u"&&!(l in d),h=l=>{let{initialArgs:d,argTypes:r,id:g,parameters:{actions:T}}=l;if(!T||T.disable||!T.argTypesRegex||!r)return{};let E=new RegExp(T.argTypesRegex);return Object.entries(r).filter(([x])=>!!E.test(x)).reduce((x,[k,G])=>(m(k,d)&&(x[k]=s(k,{implicit:!0,id:g})),x),{})},S=l=>{let{initialArgs:d,argTypes:r,parameters:{actions:g}}=l;return g?.disable||!r?{}:Object.entries(r).filter(([T,E])=>!!E.action).reduce((T,[E,x])=>(m(E,d)&&(T[E]=s(typeof x.action=="string"?x.action:E)),T),{})},w=[S,h],L=!1,B=l=>{let{parameters:{actions:d}}=l;if(!d?.disable&&!L&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in o.global&&typeof o.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=o.global.__STORYBOOK_TEST_ON_MOCK_CALL__;r((g,T)=>{let E=g.getMockName();E!=="spy"&&(!/^next\/.*::/.test(E)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(x=>E.startsWith(x)))&&s(E)(T)}),L=!0}},N=[B],F=()=>definePreview(a)},"../ai-client/src/components/message/stories/index.stories.tsx":(M,R,e)=>{e.r(R),e.d(R,{Default:()=>f,Error:()=>s,Guideline:()=>A,Upgrade:()=>n,__namedExportsOrder:()=>c,default:()=>y});var _=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),t=e("../ai-client/src/types.ts"),o=e("../ai-client/src/components/message/index.tsx"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),O=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
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
`,C={Default:{startLoc:{col:24,line:21},endLoc:{col:1,line:25},startBody:{col:24,line:21},endBody:{col:1,line:25}},Guideline:{startLoc:{col:26,line:33},endLoc:{col:1,line:37},startBody:{col:26,line:33},endBody:{col:1,line:37}},Upgrade:{startLoc:{col:24,line:41},endLoc:{col:1,line:47},startBody:{col:24,line:41},endBody:{col:1,line:47}},Error:{startLoc:{col:22,line:69},endLoc:{col:1,line:76},startBody:{col:22,line:69},endBody:{col:1,line:76}}};const y={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:1,line:25},startBody:{col:24,line:21},endBody:{col:1,line:25}},guideline:{startLoc:{col:26,line:33},endLoc:{col:1,line:37},startBody:{col:26,line:33},endBody:{col:1,line:37}},upgrade:{startLoc:{col:24,line:41},endLoc:{col:1,line:47},startBody:{col:24,line:41},endBody:{col:1,line:47}},error:{startLoc:{col:22,line:69},endLoc:{col:1,line:76},startBody:{col:22,line:69},endBody:{col:1,line:76}}}}},title:"JS Packages/AI Client/Message",component:o.Ay,decorators:[a=>(0,i.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,i.jsx)(a,{})})]},v=a=>(0,i.jsx)(o.Ay,{...a}),D={children:(0,i.jsx)("span",{children:"Message"})},f=v.bind({});f.args=D;const I=a=>(0,i.jsx)(o.Yj,{...a}),U={},A=I.bind({});A.args=U;const P=a=>(0,i.jsx)(o.AK,{requestsRemaining:a.requestsRemaining,severity:a.severity,onUpgradeClick:(0,_.XI)("onUpgradeClick")}),b={requestsRemaining:10,severity:null},n=P.bind({});n.args=b,n.argTypes={severity:{control:{type:"select"},options:["Default","Info","Warning","Error","Success"],mapping:{Default:null,Info:o.dB,Warning:o.zP,Error:o.XG,Success:o.Us}}};const p=a=>(0,i.jsx)(o.Kw,{error:a.error,code:a.code,onTryAgainClick:(0,_.XI)("onTryAgainClick"),onUpgradeClick:(0,_.XI)("onUpgradeClick")}),u={error:"An error occurred.",code:"error_service_unavailable"},s=p.bind({});s.args=u,s.argTypes={code:{control:{type:"select"},options:["Service Unavailable","Quota Exceeded","Moderation","Context Too Large","Network","Unclear Prompt","Response"],mapping:{"Service Unavailable":t.AZ,"Quota Exceeded":t.Or,Moderation:t.ud,"Context Too Large":t.cT,Network:t.mA,"Unclear Prompt":t.L9,Response:t.zn}}};const c=["Default","Guideline","Upgrade","Error"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  return <Message {...args} />;
}`,...f.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  return <GuidelineMessage {...args} />;
}`,...A.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <UpgradeMessage requestsRemaining={args.requestsRemaining} severity={args.severity} onUpgradeClick={action('onUpgradeClick')} />;
}`,...n.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <ErrorMessage error={args.error} code={args.code} onTryAgainClick={action('onTryAgainClick')} onUpgradeClick={action('onUpgradeClick')} />;
}`,...s.parameters?.docs?.source}}};try{stories.displayName="stories",stories.__docgenInfo={description:"React component to render a block message.",displayName:"stories",props:{icon:{defaultValue:{value:"null"},description:"",name:"icon",required:!1,type:{name:"ReactNode"}},severity:{defaultValue:{value:"info"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'}]}},aiFeedbackThumbsOptions:{defaultValue:{value:`{
		showAIFeedbackThumbs: false,
		ratedItem: '',
		prompt: '',
		block: null,
		onRate: () => {},
	}`},description:"",name:"aiFeedbackThumbsOptions",required:!1,type:{name:"AiFeedbackThumbsOptions"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/message/stories/index.stories.tsx#stories"]={docgenInfo:stories.__docgenInfo,name:"stories",path:"../ai-client/src/components/message/stories/index.stories.tsx#stories"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(M,R,e)=>{e.d(R,{A:()=>y});var _=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.26.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function O(v,D){const{href:f,children:I,className:U,rel:A="",...P}=v,b=[...new Set([...A.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),n=(0,_.A)("components-external-link",U),p=!!f?.startsWith("#"),u=s=>{p&&s.preventDefault(),v.onClick&&v.onClick(s)};return(0,i.jsxs)("a",{...P,className:n,href:f,onClick:u,target:"_blank",rel:b,ref:D,children:[(0,i.jsx)("span",{className:"components-external-link__contents",children:I}),(0,i.jsx)("span",{className:"components-external-link__icon","aria-label":(0,t.__)("(opens in a new tab)"),children:"\u2197"})]})}const y=(0,o.forwardRef)(O)},"../../../node_modules/.pnpm/@wordpress+element@6.26.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(M,R,e)=>{e.d(R,{A:()=>b});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let t,o,i,O;const C=/<(\/)?(\w+)\s*(\/)?>/g;function y(n,p,u,s,c){return{element:n,tokenStart:p,tokenLength:u,prevOffset:s,leadingTextStart:c,children:[]}}const v=(n,p)=>{if(t=n,o=0,i=[],O=[],C.lastIndex=0,!D(p))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(f(p));return(0,_.createElement)(_.Fragment,null,...i)},D=n=>{const p=typeof n=="object",u=p&&Object.values(n);return p&&u.length&&u.every(s=>(0,_.isValidElement)(s))};function f(n){const p=I(),[u,s,c,a]=p,m=O.length,h=c>o?o:null;if(!n[s])return U(),!1;switch(u){case"no-more-tokens":if(m!==0){const{leadingTextStart:B,tokenStart:N}=O.pop();i.push(t.substr(B,N))}return U(),!1;case"self-closed":return m===0?(h!==null&&i.push(t.substr(h,c-h)),i.push(n[s]),o=c+a,!0):(A(y(n[s],c,a)),o=c+a,!0);case"opener":return O.push(y(n[s],c,a,c+a,h)),o=c+a,!0;case"closer":if(m===1)return P(c),o=c+a,!0;const S=O.pop(),w=t.substr(S.prevOffset,c-S.prevOffset);S.children.push(w),S.prevOffset=c+a;const L=y(S.element,S.tokenStart,S.tokenLength,c+a);return L.children=S.children,A(L),o=c+a,!0;default:return U(),!1}}function I(){const n=C.exec(t);if(n===null)return["no-more-tokens"];const p=n.index,[u,s,c,a]=n,m=u.length;return a?["self-closed",c,p,m]:s?["closer",c,p,m]:["opener",c,p,m]}function U(){const n=t.length-o;n!==0&&i.push(t.substr(o,n))}function A(n){const{element:p,tokenStart:u,tokenLength:s,prevOffset:c,children:a}=n,m=O[O.length-1],h=t.substr(m.prevOffset,u-m.prevOffset);h&&m.children.push(h),m.children.push((0,_.cloneElement)(p,null,...a)),m.prevOffset=c||u+s}function P(n){const{element:p,leadingTextStart:u,prevOffset:s,tokenStart:c,children:a}=O.pop(),m=n?t.substr(s,n-s):t.substr(s);m&&a.push(m),u!==null&&i.push(t.substr(u,c-u)),i.push((0,_.cloneElement)(p,null,...a))}const b=v},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(M,R,e)=>{e.d(R,{A:()=>o});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function t({icon:i,size:O=24,...C},y){return(0,_.cloneElement)(i,{width:O,height:O,...C,ref:y})}const o=(0,_.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(M,R,e)=>{e.d(R,{A:()=>i});var _=e("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,t.jsx)(_.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(_.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-down.js":(M,R,e)=>{e.d(R,{A:()=>i});var _=e("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,t.jsx)(_.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(_.wA,{d:"M19.8 4h-1.5l1 8h1.5l-1-8ZM17 5.8c-.1-1-1-1.8-2-1.8H6.8c-.9 0-1.7.6-1.9 1.4l-1.8 6C2.7 12.7 3.7 14 5 14h4.4l-.8 3.6c-.3 1.3.7 2.4 1.9 2.4h.2c.6 0 1.2-.3 1.6-.8l5-6.6c.3-.4.5-.9.4-1.5L17 5.7Zm-.9 5.9-5 6.6c0 .1-.2.2-.4.2h-.2c-.3 0-.6-.3-.5-.6l.8-3.6c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6H4.9c-.3 0-.6-.3-.5-.6l1.8-6c0-.2.3-.4.5-.4h8.2c.3 0 .5.2.5.4l.7 5.4v.4Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-up.js":(M,R,e)=>{e.d(R,{A:()=>i});var _=e("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,t.jsx)(_.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(_.wA,{d:"m3 12 1 8h1.5l-1-8H3Zm15.8-2h-4.4l.8-3.6c.3-1.3-.7-2.4-1.9-2.4h-.2c-.6 0-1.2.3-1.6.8l-5 6.6c-.3.4-.4.8-.4 1.2v.2l.7 5.4v.2c.2.9 1 1.5 1.9 1.5h8.2c.9 0 1.7-.6 1.9-1.4l1.8-6c.4-1.3-.6-2.6-1.9-2.6Zm.5 2.1-1.8 6c0 .2-.3.4-.5.4H8.8c-.3 0-.5-.2-.5-.4l-.7-5.4v-.4l5-6.6c0-.1.2-.2.4-.2h.2c.3 0 .6.3.5.6l-.8 3.6c-.1.4 0 .9.3 1.3s.7.6 1.2.6h4.4c.3 0 .6.3.5.6Z"})})}}]);
