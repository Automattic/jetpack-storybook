"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4903],{"../publicize-components/src/components/message-box-control/stories/index.stories.tsx":(T,i,e)=>{e.r(i),e.d(i,{CustomLabels:()=>u,Default:()=>c,Disabled:()=>l,Empty:()=>g,__namedExportsOrder:()=>k,default:()=>A});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../shared-extension-utils/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/textarea-control/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=r.__,s=r._n,t=()=>n("Write a custom message for your social audience here. This message will override your social post content.","jetpack-publicize-components"),p=()=>n("Message","jetpack-publicize-components");function y({label:a=p(),placeholder:D=t(),message:C="",onChange:x,disabled:f,maxLength:v,analyticsData:B=null}){const{recordEvent:j}=(0,m.st)(),S=(0,o.useRef)(!0),M=v-C.length,P=(0,o.useCallback)(E=>{x(E),S.current&&(j("jetpack_social_custom_message_changed",B),S.current=!1)},[B,S,x,j]);return(0,d.jsx)(h.A,{value:C,label:a,onChange:P,disabled:f,maxLength:v,placeholder:D,rows:4,help:(0,r.sprintf)(s("%d character remaining","%d characters remaining",M,"jetpack-publicize-components"),M),__nextHasNoMarginBottom:!0})}try{messageboxcontrol.displayName="messageboxcontrol",messageboxcontrol.__docgenInfo={description:`Wrapper around a textbox to restrict the number of characters and
display how many are remaining.`,displayName:"messageboxcontrol",props:{label:{defaultValue:{value:"getDefaultLabel()"},description:"The label for the message box",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"getPlaceholderText()"},description:"The placeholder text for the message box",name:"placeholder",required:!1,type:{name:"string"}},message:{defaultValue:{value:""},description:"The message to display",name:"message",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback to invoke as the message changes",name:"onChange",required:!0,type:{name:"(message: string) => void"}},disabled:{defaultValue:null,description:"Whether the control is disabled",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The maximum character length of the message",name:"maxLength",required:!0,type:{name:"number"}},analyticsData:{defaultValue:{value:"null"},description:"Data for tracking analytics",name:"analyticsData",required:!1,type:{name:"{ location: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../publicize-components/src/components/message-box-control/index.tsx#messageboxcontrol"]={docgenInfo:messageboxcontrol.__docgenInfo,name:"messageboxcontrol",path:"../publicize-components/src/components/message-box-control/index.tsx#messageboxcontrol"})}catch{}var L=`/* istanbul ignore file -- Ignore code coverage */
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
`,w={Default:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},Empty:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},Disabled:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},CustomLabels:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}}};const A={parameters:{storySource:{source:`/* istanbul ignore file -- Ignore code coverage */
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
};`,locationsMap:{default:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},empty:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},disabled:{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}},"custom-labels":{startLoc:{col:17,line:33},endLoc:{col:1,line:48},startBody:{col:17,line:33},endBody:{col:1,line:48}}}}},title:"JS Packages/Publicize Components/Message Box Control",component:y,argTypes:{onChange:{action:"changed"},maxLength:{control:{type:"number",min:10,max:500}},disabled:{control:"boolean"},analyticsData:{control:"object"},label:{control:"text"},placeholder:{control:"text"}}},b=a=>{const[D,C]=(0,o.useState)(a.message),x=(0,o.useCallback)(f=>{C(f),a.onChange(f)},[a]);return(0,d.jsx)(y,{message:D,onChange:x,disabled:a.disabled,maxLength:a.maxLength,analyticsData:a.analyticsData,label:a.label,placeholder:a.placeholder})},_={message:"Check out my latest blog post!",maxLength:280,disabled:!1,analyticsData:{location:"storybook"}},c=b.bind({});c.args=_;const g=b.bind({});g.args={..._,message:""};const l=b.bind({});l.args={..._,disabled:!0};const u=b.bind({});u.args={..._,message:"",label:"Custom Social Message",placeholder:"Type your personalized social media post here..."};const k=["Default","Empty","Disabled","CustomLabels"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...c.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...g.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/textarea-control/index.js":(T,i,e)=>{e.d(i,{A:()=>g});var o=e("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),r=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/font.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js");const p={huge:"1440px",wide:"1280px","x-large":"1080px",large:"960px",medium:"782px",small:"600px",mobile:"480px","zoomed-in":"280px"},y=l=>`@media (min-width: ${p[l]})`,L=(0,d.AH)("box-shadow:0 0 0 transparent;border-radius:",t.A.radiusSmall,";border:",t.A.borderWidth," solid ",s.l.ui.border,";@media not ( prefers-reduced-motion ){transition:box-shadow 0.1s linear;}",""),w=(0,d.AH)("border-color:",s.l.theme.accent,";box-shadow:0 0 0 calc( ",t.A.borderWidthFocus," - ",t.A.borderWidth," ) ",s.l.theme.accent,";outline:2px solid transparent;",""),A=(0,r.A)("textarea",{target:"e1w5nnrk0"})("width:100%;display:block;font-family:",(0,n.g)("default.fontFamily"),";line-height:20px;background:",s.l.theme.background,";color:",s.l.theme.foreground,";padding:9px 11px;",L,";font-size:",(0,n.g)("mobileTextMinFontSize"),";",y("small"),"{font-size:",(0,n.g)("default.fontSize"),";}&:focus{",w,";}&::-webkit-input-placeholder{color:",s.l.ui.darkGrayPlaceholder,";}&::-moz-placeholder{color:",s.l.ui.darkGrayPlaceholder,";}&:-ms-input-placeholder{color:",s.l.ui.darkGrayPlaceholder,";}.is-dark-theme &{&::-webkit-input-placeholder{color:",s.l.ui.lightGrayPlaceholder,";}&::-moz-placeholder{color:",s.l.ui.lightGrayPlaceholder,";}&:-ms-input-placeholder{color:",s.l.ui.lightGrayPlaceholder,";}}");var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _(l,u){const{__nextHasNoMarginBottom:k,label:a,hideLabelFromVision:D,value:C,help:x,onChange:f,rows:v=4,className:B,...j}=l,M=`inspector-textarea-control-${(0,o.A)(c)}`,P=E=>f(E.target.value);return(0,b.jsx)(h.Ay,{__nextHasNoMarginBottom:k,__associatedWPComponentName:"TextareaControl",label:a,hideLabelFromVision:D,id:M,help:x,className:B,children:(0,b.jsx)(A,{className:"components-textarea-control__input",id:M,rows:v,onChange:P,"aria-describedby":x?M+"__help":void 0,value:C,ref:u,...j})})}const c=(0,m.forwardRef)(_),g=c},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(T,i,e)=>{e.d(i,{A:()=>t});var o=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const h={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var r=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(p,y){const{style:L,...w}=(0,o.A)(p,"VisuallyHidden");return(0,d.jsx)(r.A,{ref:y,...w,style:{...h,...L||{}}})}const t=(0,m.KZ)(n,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(T,i,e)=>{e.d(i,{A:()=>d});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const m=new WeakMap;function h(n){const s=m.get(n)||0;return m.set(n,s+1),s}function r(n,s,t){return(0,o.useMemo)(()=>{if(t)return t;const p=h(n);return s?`${s}-${p}`:p},[n,t,s])}const d=r}}]);
