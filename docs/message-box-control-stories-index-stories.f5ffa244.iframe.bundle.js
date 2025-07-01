"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4903],{"../publicize-components/src/components/message-box-control/stories/index.stories.tsx":(v,b,a)=>{a.r(b),a.d(b,{CustomLabels:()=>o,Default:()=>s,Disabled:()=>t,Empty:()=>n,__namedExportsOrder:()=>j,default:()=>k});var l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=a("../shared-extension-utils/index.js"),B=a("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/textarea-control/index.js"),m=a("../../../node_modules/.pnpm/@wordpress+i18n@5.26.0/node_modules/@wordpress/i18n/build-module/index.js"),h=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=m.__,_=m._n,S=()=>x("Write a custom message for your social audience here. This message will override your social post content.","jetpack-publicize-components"),T=()=>x("Message","jetpack-publicize-components");function y({label:e=T(),placeholder:p=S(),message:g="",onChange:d,disabled:i,maxLength:C,analyticsData:f=null}){const{recordEvent:M}=(0,L.st)(),u=(0,l.useRef)(!0),D=C-g.length,w=(0,l.useCallback)(E=>{d(E),u.current&&(M("jetpack_social_custom_message_changed",f),u.current=!1)},[f,u,d,M]);return(0,h.jsx)(B.A,{value:g,label:e,onChange:w,disabled:i,maxLength:C,placeholder:p,rows:4,help:(0,m.sprintf)(_("%d character remaining","%d characters remaining",D,"jetpack-publicize-components"),D),__nextHasNoMarginBottom:!0})}try{messageboxcontrol.displayName="messageboxcontrol",messageboxcontrol.__docgenInfo={description:`Wrapper around a textbox to restrict the number of characters and
display how many are remaining.`,displayName:"messageboxcontrol",props:{label:{defaultValue:{value:"getDefaultLabel()"},description:"The label for the message box",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"getPlaceholderText()"},description:"The placeholder text for the message box",name:"placeholder",required:!1,type:{name:"string"}},message:{defaultValue:{value:""},description:"The message to display",name:"message",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback to invoke as the message changes",name:"onChange",required:!0,type:{name:"(message: string) => void"}},disabled:{defaultValue:null,description:"Whether the control is disabled",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The maximum character length of the message",name:"maxLength",required:!0,type:{name:"number"}},analyticsData:{defaultValue:{value:"null"},description:"Data for tracking analytics",name:"analyticsData",required:!1,type:{name:"{ location: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../publicize-components/src/components/message-box-control/index.tsx#messageboxcontrol"]={docgenInfo:messageboxcontrol.__docgenInfo,name:"messageboxcontrol",path:"../publicize-components/src/components/message-box-control/index.tsx#messageboxcontrol"})}catch{}var A=`/* istanbul ignore file -- Ignore code coverage */
import { useCallback, useState } from '@wordpress/element';
import MessageBoxControl, { MessageBoxControlProps } from '../';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Publicize Components/Message Box Control',
	component: MessageBoxControl,
	argTypes: {
		onChange: { action: 'changed' },
		maxLength: {
			control: { type: 'number', min: 10, max: 500 },
		},
		disabled: {
			control: 'boolean',
		},
		analyticsData: {
			control: 'object',
		},
		label: {
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
	},
} satisfies Meta< typeof MessageBoxControl >;

const Template: StoryFn< typeof MessageBoxControl > = ( args: MessageBoxControlProps ) => {
	const [ message, setMessage ] = useState( args.message );

	const handleChange = useCallback(
		( newMessage: string ) => {
			setMessage( newMessage );
			args.onChange( newMessage );
		},
		[ args ]
	);

	return (
		<MessageBoxControl
			message={ message }
			onChange={ handleChange }
			disabled={ args.disabled }
			maxLength={ args.maxLength }
			analyticsData={ args.analyticsData }
			label={ args.label }
			placeholder={ args.placeholder }
		/>
	);
};

const DefaultArgs = {
	message: 'Check out my latest blog post!',
	maxLength: 280,
	disabled: false,
	analyticsData: { location: 'storybook' },
};

// Export Default story
export const Default = Template.bind( {} );
Default.args = DefaultArgs;

// Empty state
export const Empty = Template.bind( {} );
Empty.args = {
	...DefaultArgs,
	message: '',
};

// Disabled state
export const Disabled = Template.bind( {} );
Disabled.args = {
	...DefaultArgs,
	disabled: true,
};

// Custom Label and Placeholder
export const CustomLabels = Template.bind( {} );
CustomLabels.args = {
	...DefaultArgs,
	message: '',
	label: 'Custom Social Message',
	placeholder: 'Type your personalized social media post here...',
};
`,P={Default:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},Empty:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},Disabled:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},CustomLabels:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}}};const k={parameters:{storySource:{source:`/* istanbul ignore file -- Ignore code coverage */
import { useCallback, useState } from '@wordpress/element';
import MessageBoxControl from '../';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Publicize Components/Message Box Control',
  component: MessageBoxControl,
  argTypes: {
    onChange: {
      action: 'changed'
    },
    maxLength: {
      control: {
        type: 'number',
        min: 10,
        max: 500
      }
    },
    disabled: {
      control: 'boolean'
    },
    analyticsData: {
      control: 'object'
    },
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    }
  }
};
const Template = args => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback(newMessage => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return /*#__PURE__*/_jsx(MessageBoxControl, {
    message: message,
    onChange: handleChange,
    disabled: args.disabled,
    maxLength: args.maxLength,
    analyticsData: args.analyticsData,
    label: args.label,
    placeholder: args.placeholder
  });
};
const DefaultArgs = {
  message: 'Check out my latest blog post!',
  maxLength: 280,
  disabled: false,
  analyticsData: {
    location: 'storybook'
  }
};

// Export Default story
export const Default = Template.bind({});
Default.args = DefaultArgs;

// Empty state
export const Empty = Template.bind({});
Empty.args = {
  ...DefaultArgs,
  message: ''
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultArgs,
  disabled: true
};

// Custom Label and Placeholder
export const CustomLabels = Template.bind({});
CustomLabels.args = {
  ...DefaultArgs,
  message: '',
  label: 'Custom Social Message',
  placeholder: 'Type your personalized social media post here...'
};`,locationsMap:{default:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},empty:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},disabled:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},"custom-labels":{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}}}}},title:"JS Packages/Publicize Components/Message Box Control",component:y,argTypes:{onChange:{action:"changed"},maxLength:{control:{type:"number",min:10,max:500}},disabled:{control:"boolean"},analyticsData:{control:"object"},label:{control:"text"},placeholder:{control:"text"}}},r=e=>{const[p,g]=(0,l.useState)(e.message),d=(0,l.useCallback)(i=>{g(i),e.onChange(i)},[e]);return(0,h.jsx)(y,{message:p,onChange:d,disabled:e.disabled,maxLength:e.maxLength,analyticsData:e.analyticsData,label:e.label,placeholder:e.placeholder})},c={message:"Check out my latest blog post!",maxLength:280,disabled:!1,analyticsData:{location:"storybook"}},s=r.bind({});s.args=c;const n=r.bind({});n.args={...c,message:""};const t=r.bind({});t.args={...c,disabled:!0};const o=r.bind({});o.args={...c,message:"",label:"Custom Social Message",placeholder:"Type your personalized social media post here..."};const j=["Default","Empty","Disabled","CustomLabels"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...n.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...t.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...o.parameters?.docs?.source}}}}}]);
