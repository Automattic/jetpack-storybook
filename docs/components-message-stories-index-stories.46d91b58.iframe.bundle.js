"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6534],{"../ai-client/src/components/message/stories/index.stories.tsx":(O,d,r)=>{r.r(d),r.d(d,{Default:()=>i,Error:()=>a,Guideline:()=>c,Upgrade:()=>s,__namedExportsOrder:()=>T,default:()=>E});var l=r("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),U=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=r("../ai-client/src/types.ts"),n=r("../ai-client/src/components/message/index.tsx"),o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=`/**
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
`,M={Default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},Guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},Upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},Error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}};const E={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:24,line:22},endLoc:{col:1,line:26},startBody:{col:24,line:22},endBody:{col:1,line:26}},guideline:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},upgrade:{startLoc:{col:24,line:42},endLoc:{col:1,line:48},startBody:{col:24,line:42},endBody:{col:1,line:48}},error:{startLoc:{col:22,line:70},endLoc:{col:1,line:77},startBody:{col:22,line:70},endBody:{col:1,line:77}}}}},title:"JS Packages/AI Client/Message",component:n.Ay,decorators:[e=>(0,o.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,o.jsx)(e,{})})]},g=e=>(0,o.jsx)(n.Ay,{...e}),R={children:(0,o.jsx)("span",{children:"Message"})},i=g.bind({});i.args=R;const p=e=>(0,o.jsx)(n.Yj,{...e}),_={},c=p.bind({});c.args=_;const u=e=>(0,o.jsx)(n.AK,{requestsRemaining:e.requestsRemaining,severity:e.severity,onUpgradeClick:(0,l.XI)("onUpgradeClick")}),m={requestsRemaining:10,severity:null},s=u.bind({});s.args=m,s.argTypes={severity:{control:{type:"select"},options:["Default","Info","Warning","Error","Success"],mapping:{Default:null,Info:n.dB,Warning:n.zP,Error:n.XG,Success:n.Us}}};const S=e=>(0,o.jsx)(n.Kw,{error:e.error,code:e.code,onTryAgainClick:(0,l.XI)("onTryAgainClick"),onUpgradeClick:(0,l.XI)("onUpgradeClick")}),A={error:"An error occurred.",code:"error_service_unavailable"},a=S.bind({});a.args=A,a.argTypes={code:{control:{type:"select"},options:["Service Unavailable","Quota Exceeded","Moderation","Context Too Large","Network","Unclear Prompt","Response"],mapping:{"Service Unavailable":t.AZ,"Quota Exceeded":t.Or,Moderation:t.ud,"Context Too Large":t.cT,Network:t.mA,"Unclear Prompt":t.L9,Response:t.zn}}};const T=["Default","Guideline","Upgrade","Error"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <Message {...args} />;
}`,...i.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  return <GuidelineMessage {...args} />;
}`,...c.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <UpgradeMessage requestsRemaining={args.requestsRemaining} severity={args.severity} onUpgradeClick={action('onUpgradeClick')} />;
}`,...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ErrorMessage error={args.error} code={args.code} onTryAgainClick={action('onTryAgainClick')} onUpgradeClick={action('onUpgradeClick')} />;
}`,...a.parameters?.docs?.source}}}}}]);
