"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1366],{"../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx":(w,C,n)=>{var x,S,H,m,p,g,l,y,D,j,L,i,e,o,t;n.r(C),n.d(C,{Default:()=>v,Search:()=>I,TextArea:()=>d,WithIcon:()=>h,WithLabel:()=>E,__namedExportsOrder:()=>k,default:()=>B});var s=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.5/node_modules/@storybook/addon-actions/dist/index.mjs"),T=n("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),A=n("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/map-marker.js"),M=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=n("../../packages/videopress/src/client/admin/components/input/index.tsx"),b=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),z=`import { action } from '@storybook/addon-actions';
import { Icon, mapMarker } from '@wordpress/icons';
import { useState } from 'react';
import { Input, SearchInput } from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Input',
	component: Input,

	argTypes: {
		size: {
			options: [ 'small', 'large' ],
			control: { type: 'radio' },
		},
		type: {
			options: [ 'text', 'textarea', 'number', 'url', 'email', 'password', 'tel', 'search' ],
			control: { type: 'select' },
		},
	},
} as ComponentMeta< typeof Input >;

const onEnter = value => {
	action( 'onEnter' )( value );
};

const defaultArgs = {
	placeholder: 'Placeholder text',
	disabled: false,
	loading: false,
	size: 'small',
	type: 'text',
	label: '',
};

const Template: ComponentStory< typeof Input > = args => {
	const [ value, setValue ] = useState( '' );
	const onChange = inputValue => {
		setValue( inputValue );
	};

	return <Input { ...args } value={ value } onChange={ onChange } onEnter={ onEnter } />;
};

export const Default = Template.bind( {} );
Default.args = defaultArgs;

export const WithIcon = Template.bind( {} );
WithIcon.args = {
	...defaultArgs,
	icon: <Icon icon={ mapMarker } size={ 24 } />,
};

export const WithLabel = Template.bind( {} );
WithLabel.args = {
	...defaultArgs,
	label: 'My Label',
};

export const TextArea = Template.bind( {} );
TextArea.args = {
	...defaultArgs,
	type: 'textarea',
};

const SearchInputTemplate: ComponentStory< typeof SearchInput > = args => {
	const [ value, setValue ] = useState( '' );
	const onChange = inputValue => {
		setValue( inputValue );
		action( 'onChange' )( inputValue );
	};

	return <SearchInput { ...args } value={ value } onChange={ onChange } onEnter={ onEnter } />;
};

export const Search = SearchInputTemplate.bind( {} );
Search.args = {
	disabled: false,
	loading: false,
	onEnter: action( 'onEnter' ),
	onChange: action( 'onChange' ),
	onSearch: action( 'onSearch' ),
	wait: 500,
};
`,O={Default:{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},WithIcon:{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},WithLabel:{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},TextArea:{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},Search:{startLoc:{col:66,line:66},endLoc:{col:1,line:74},startBody:{col:66,line:66},endBody:{col:1,line:74}}};const B={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { Icon, mapMarker } from '@wordpress/icons';
import { useState } from 'react';
import { Input, SearchInput } from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Input',
	component: Input,

	argTypes: {
		size: {
			options: [ 'small', 'large' ],
			control: { type: 'radio' },
		},
		type: {
			options: [ 'text', 'textarea', 'number', 'url', 'email', 'password', 'tel', 'search' ],
			control: { type: 'select' },
		},
	},
} as ComponentMeta< typeof Input >;

const onEnter = value => {
	action( 'onEnter' )( value );
};

const defaultArgs = {
	placeholder: 'Placeholder text',
	disabled: false,
	loading: false,
	size: 'small',
	type: 'text',
	label: '',
};

const Template: ComponentStory< typeof Input > = args => {
	const [ value, setValue ] = useState( '' );
	const onChange = inputValue => {
		setValue( inputValue );
	};

	return <Input { ...args } value={ value } onChange={ onChange } onEnter={ onEnter } />;
};

export const Default = Template.bind( {} );
Default.args = defaultArgs;

export const WithIcon = Template.bind( {} );
WithIcon.args = {
	...defaultArgs,
	icon: <Icon icon={ mapMarker } size={ 24 } />,
};

export const WithLabel = Template.bind( {} );
WithLabel.args = {
	...defaultArgs,
	label: 'My Label',
};

export const TextArea = Template.bind( {} );
TextArea.args = {
	...defaultArgs,
	type: 'textarea',
};

const SearchInputTemplate: ComponentStory< typeof SearchInput > = args => {
	const [ value, setValue ] = useState( '' );
	const onChange = inputValue => {
		setValue( inputValue );
		action( 'onChange' )( inputValue );
	};

	return <SearchInput { ...args } value={ value } onChange={ onChange } onEnter={ onEnter } />;
};

export const Search = SearchInputTemplate.bind( {} );
Search.args = {
	disabled: false,
	loading: false,
	onEnter: action( 'onEnter' ),
	onChange: action( 'onChange' ),
	onSearch: action( 'onSearch' ),
	wait: 500,
};
`,locationsMap:{default:{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},"with-icon":{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},"with-label":{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},"text-area":{startLoc:{col:49,line:36},endLoc:{col:1,line:43},startBody:{col:49,line:36},endBody:{col:1,line:43}},search:{startLoc:{col:66,line:66},endLoc:{col:1,line:74},startBody:{col:66,line:66},endBody:{col:1,line:74}}}}},title:"Packages/VideoPress/Input",component:_.II,argTypes:{size:{options:["small","large"],control:{type:"radio"}},type:{options:["text","textarea","number","url","email","password","tel","search"],control:{type:"select"}}}},u=f=>{(0,s.aD)("onEnter")(f)},a={placeholder:"Placeholder text",disabled:!1,loading:!1,size:"small",type:"text",label:""},c=f=>{const[V,R]=(0,M.useState)(""),W=K=>{R(K)};return(0,b.jsx)(_.II,{...f,value:V,onChange:W,onEnter:u})};c.displayName="Template";const v=c.bind({});v.args=a;const h=c.bind({});h.args={...a,icon:(0,b.jsx)(T.Z,{icon:A.Z,size:24})};const E=c.bind({});E.args={...a,label:"My Label"};const d=c.bind({});d.args={...a,type:"textarea"};const r=f=>{const[V,R]=(0,M.useState)(""),W=K=>{R(K),(0,s.aD)("onChange")(K)};return(0,b.jsx)(_.Mj,{...f,value:V,onChange:W,onEnter:u})};r.displayName="SearchInputTemplate";const I=r.bind({});I.args={disabled:!1,loading:!1,onEnter:(0,s.aD)("onEnter"),onChange:(0,s.aD)("onChange"),onSearch:(0,s.aD)("onSearch"),wait:500},v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(H=(S=v.parameters)==null?void 0:S.docs)==null?void 0:H.source}}},h.parameters={...h.parameters,docs:{...(m=h.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(g=(p=h.parameters)==null?void 0:p.docs)==null?void 0:g.source}}},E.parameters={...E.parameters,docs:{...(l=E.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(D=(y=E.parameters)==null?void 0:y.docs)==null?void 0:D.source}}},d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(i=(L=d.parameters)==null?void 0:L.docs)==null?void 0:i.source}}},I.parameters={...I.parameters,docs:{...(e=I.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(t=(o=I.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const k=["Default","WithIcon","WithLabel","TextArea","Search"]},"../components/components/icons/index.tsx":(w,C,n)=>{n.r(C),n.d(C,{AntiSpamIcon:()=>v,BackupIcon:()=>h,BoostIcon:()=>E,CheckmarkIcon:()=>p,ClipboardIcon:()=>g,CrmIcon:()=>d,ExtrasIcon:()=>r,JetpackIcon:()=>l,ProtectIcon:()=>I,ScanIcon:()=>k,SearchIcon:()=>x,ShareIcon:()=>y,SocialIcon:()=>S,SocialServiceIcon:()=>i,StarIcon:()=>m,VideopressIcon:()=>H,getIconBySlug:()=>L});var s=n("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),T=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),A=n.n(T),M=n("../../../node_modules/.pnpm/social-logos@2.5.6_react@18.2.0/node_modules/social-logos/react/index.js"),_=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=n.n(_),z=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/style.module.scss"),O={};O.insert="head",O.singleton=!1;var B=b()(z.Z,O);const u=z.Z.locals||{};var a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=({className:e,size:o=24,viewBox:t="0 0 24 24",opacity:f=1,color:V="#2C3338",children:R})=>{const W={className:A()(u.iconWrapper,e),width:o,height:o,viewBox:t,opacity:f,fill:void 0};return V&&(W.fill=V),(0,a.jsx)(s.Wj,{...W,fillRule:"evenodd",clipRule:"evenodd",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(s.G,{opacity:f,children:R})})};c.displayName="IconWrapper";const v=({opacity:e=1,size:o,color:t})=>(0,a.jsxs)(c,{size:o,opacity:e,color:t,children:[(0,a.jsx)(s.y$,{d:"M13.2,4.7l4.7,12.8c0.4,1.1,1,1.5,2.1,1.6c0.1,0,0.1,0,0.1,0l0.1,0.1l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1 s0,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1s-0.1,0-0.2,0h-5.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1 c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1l0.1-0.1c0,0,0.1,0,0.2,0c0.5,0,1.1-0.2,1.1-0.8c0-0.3-0.1-0.5-0.2-0.8l-1.1-3.1 c-0.1-0.2-0.1-0.2-0.2-0.2h-4.3c-0.7,0-1.5,0-1.9,0.9l-1.1,2.4C7.1,17.6,7,17.8,7,18.1c0,0.8,1,0.9,1.6,0.9c0.1,0,0.1,0,0.2,0 L8.8,19l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1s-0.1,0.1-0.1,0.1l-0.1,0.1c-0.1,0-0.1,0-0.2,0H4.1c-0.1,0-0.1,0-0.1,0 c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1L4,19c0,0,0.1,0,0.1,0C5.2,19,5.5,18.5,6,17.5 l5.4-12.4c0.2-0.5,0.8-1,1.3-1C13,4.2,13.1,4.4,13.2,4.7z M9.1,13.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.1h4.4 c0.3,0,0.4-0.1,0.4-0.3c0-0.1,0-0.2-0.1-0.3l-1.2-3.5c-0.3-0.8-0.8-1.9-0.8-2.7c0-0.1,0-0.1-0.1-0.1c0,0-0.1,0-0.1,0.1 c-0.1,0.6-0.4,1.2-0.7,1.7L9.1,13.1z"}),(0,a.jsx)(s.y$,{d:"M13.2,4.7l4.7,12.8c0.4,1.1,1,1.5,2.1,1.6c0.1,0,0.1,0,0.1,0l0.1,0.1l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1 s0,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1s-0.1,0-0.2,0h-5.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1 c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1l0.1-0.1c0,0,0.1,0,0.2,0c0.5,0,1.1-0.2,1.1-0.8c0-0.3-0.1-0.5-0.2-0.8l-1.1-3.1 c-0.1-0.2-0.1-0.2-0.2-0.2h-4.3c-0.7,0-1.5,0-1.9,0.9l-1.1,2.4C7.1,17.6,7,17.8,7,18.1c0,0.8,1,0.9,1.6,0.9c0.1,0,0.1,0,0.2,0 L8.8,19l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1s-0.1,0.1-0.1,0.1l-0.1,0.1c-0.1,0-0.1,0-0.2,0H4.1c-0.1,0-0.1,0-0.1,0 c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1L4,19c0,0,0.1,0,0.1,0C5.2,19,5.5,18.5,6,17.5 l5.4-12.4c0.2-0.5,0.8-1,1.3-1C13,4.2,13.1,4.4,13.2,4.7z M9.1,13.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.1h4.4 c0.3,0,0.4-0.1,0.4-0.3c0-0.1,0-0.2-0.1-0.3l-1.2-3.5c-0.3-0.8-0.8-1.9-0.8-2.7c0-0.1,0-0.1-0.1-0.1c0,0-0.1,0-0.1,0.1 c-0.1,0.6-0.4,1.2-0.7,1.7L9.1,13.1z"}),(0,a.jsx)(s.y$,{d:"M21.6,12.5c0,0.6-0.3,1-0.9,1c-0.6,0-0.8-0.3-0.8-0.8c0-0.6,0.4-1,0.9-1C21.3,11.7,21.6,12.1,21.6,12.5z"}),(0,a.jsx)(s.y$,{d:"M4.1,12.5c0,0.6-0.3,1-0.9,1s-0.8-0.3-0.8-0.8c0-0.6,0.4-1,0.9-1S4.1,12.1,4.1,12.5z"})]});v.displayName="AntiSpamIcon";const h=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{d:"M2.1,5.8c0-0.1,0-0.1,0-0.2c0-0.2,0.1-0.5,0.1-0.7c0.1-0.4,0.4-0.6,0.7-0.8l8.3-2.9c0.1-0.1,0.3-0.1,0.4-0.1l0.5,0.1 l8.3,2.9c0.3,0.2,0.5,0.4,0.7,0.7c0.2,0.2,0.2,0.4,0.2,0.7c0,0.1,0,0.1,0,0.2v0.1c-0.1,0.5-0.2,0.9-0.3,1.4 c-0.2,0.4-0.3,1.2-0.7,2.2c-0.3,1-0.7,2.1-1.1,3.1c-0.5,1-1,2.1-1.6,3.3s-1.4,2.3-2.2,3.5c-0.9,1.1-1.8,2.2-2.8,3.1 c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4c-1.2-1.1-2.4-2.4-3.5-4c-1-1.6-1.9-3-2.5-4.3c-0.6-1.3-1.1-2.7-1.6-4 C2.8,8.7,2.5,7.6,2.3,7C2.3,6.5,2.1,6.1,2.1,5.8z M2.9,5.9c0,0.2,0.1,0.4,0.1,0.8C3.1,7,3.2,7.5,3.5,8.2C3.7,9,3.9,9.7,4.2,10.6 c0.3,0.7,0.7,1.7,1.1,2.7c0.4,1,1,2,1.5,2.9c0.5,1,1.2,1.9,1.9,2.9c0.8,1,1.6,1.9,2.4,2.6c0.2,0.2,0.4,0.2,0.5,0.2 c0.2,0,0.4-0.1,0.5-0.2c1.2-1,2.2-2.3,3.2-3.8c1-1.5,1.8-2.8,2.3-4c0.6-1.3,1.1-2.5,1.5-3.9c0.4-1.3,0.7-2.2,0.9-2.8 c0.1-0.5,0.2-1,0.3-1.3c0-0.1,0-0.1,0-0.1c0-0.2,0-0.3-0.1-0.4C20.3,5.2,20.2,5.1,20,5L12,2.1c0,0-0.1,0-0.2,0s-0.1,0-0.1,0h-0.2 l-8,2.8C3.2,5,3.1,5.2,3,5.3C2.9,5.5,2.9,5.6,2.9,5.8C2.9,5.8,2.9,5.8,2.9,5.9z M5.9,6.7h3l2.8,7l2.8-7h3c-0.1,0.1-0.2,0.5-0.3,0.8 C17,7.8,17,8.2,16.8,8.4c-0.1,0.3-0.2,0.5-0.4,0.8c0,0.1-0.1,0.1-0.1,0.1s-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.1,0 c-0.1,0-0.2,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1s-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.1l-0.4,1.1 c-1.3,3.3-2.1,5.2-2.3,5.8h-2.2l-1-2.4c-0.1-0.3-0.3-0.8-0.5-1.3c-0.1-0.3-0.3-0.8-0.5-1.3L8,10.8c-0.1-0.1-0.1-0.2-0.1-0.4 C7.8,10.2,7.7,10,7.7,9.8C7.6,9.7,7.5,9.5,7.4,9.4C7.3,9.3,7.3,9.3,7.3,9.3c-0.1,0-0.2,0-0.2,0s-0.1,0-0.1,0 C6.6,8.5,6.3,7.6,5.9,6.7z"})});h.displayName="BackupIcon";const E=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M4.19505 16.2545C4.47368 16.561 4.94802 16.5836 5.25451 16.3049L10.2595 11.7549L14.2842 15.2765L19 10.5607V13.75H20.5V9.5V8.75239V8.7476V8H19.7529H19.7471H19H14.75V9.5H17.9393L14.2158 13.2235L10.2405 9.74507L4.2455 15.195C3.93901 15.4737 3.91642 15.948 4.19505 16.2545Z"})});E.displayName="BoostIcon";const d=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{d:"M15.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-2.25 6v-2a2.75 2.75 0 0 0-2.75-2.75h-4A2.75 2.75 0 0 0 3.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5Zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0 1 20.25 15ZM9.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"})});d.displayName="CrmIcon";const r=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{d:"M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5ZM12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-1.5v6a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h6V4Z"})});r.displayName="ExtrasIcon";const I=({opacity:e=1,size:o,className:t,color:f})=>(0,a.jsxs)(c,{className:t,size:o,opacity:e,color:f,children:[(0,a.jsx)(s.y$,{d:"M12 3.17627L18.75 6.24445V10.8183C18.75 14.7173 16.2458 18.4089 12.7147 19.5735C12.2507 19.7265 11.7493 19.7265 11.2853 19.5735C7.75416 18.4089 5.25 14.7173 5.25 10.8183V6.24445L12 3.17627ZM6.75 7.21032V10.8183C6.75 14.1312 8.89514 17.2057 11.7551 18.149C11.914 18.2014 12.086 18.2014 12.2449 18.149C15.1049 17.2057 17.25 14.1312 17.25 10.8183V7.21032L12 4.82396L6.75 7.21032Z"}),(0,a.jsx)(s.y$,{d:"M15.5291 10.0315L11.1818 14.358L8.47095 11.66L9.52907 10.5968L11.1818 12.2417L14.4709 8.96826L15.5291 10.0315Z"})]});I.displayName="ProtectIcon";const k=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{d:"m12 3.176 6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 0 1-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176ZM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21Z"})});k.displayName="ScanIcon";const x=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{d:"M17.5 11.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1.5 0a5.5 5.5 0 0 1-9.142 4.121l-3.364 2.943-.988-1.128 3.373-2.952A5.5 5.5 0 1 1 19 11.5Z"})});x.displayName="SearchIcon";const S=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{d:"M15.5 3.97809V18.0219L7.5 15.5977V20H6V15.1431L3.27498 14.3173C2.22086 13.9979 1.5 13.0262 1.5 11.9248V10.0752C1.5 8.97375 2.22087 8.00207 3.27498 7.68264L15.5 3.97809ZM14 16L7.5 14.0303L7.5 7.96969L14 5.99999V16ZM6 8.42423L6 13.5757L3.70999 12.8818C3.28835 12.754 3 12.3654 3 11.9248V10.0752C3 9.63462 3.28835 9.24595 3.70999 9.11818L6 8.42423ZM17.5 11.75H21.5V10.25H17.5V11.75ZM21.5 16L17.5 15V13.5L21.5 14.5V16ZM17.5 8.5L21.5 7.5V6L17.5 7V8.5Z"})});S.displayName="SocialIcon";const H=({opacity:e=1,size:o,color:t})=>(0,a.jsx)(c,{size:o,opacity:e,color:t,children:(0,a.jsx)(s.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M4.3,6.2c0.8,0,1.6,0.6,1.8,1.4l2.3,7.9c0,0,0,0,0,0l2.7-9.3h1.5h4.2c2.9,0,4.9,1.9,4.9,4.7c0,2.9-2,4.7-5,4.7 h-2h-2.5l-0.5,1.5c-0.4,1.4-1.7,2.3-3.2,2.3c-1.4,0-2.7-0.9-3.2-2.3L2.5,8.7C2.1,7.4,3,6.2,4.3,6.2z M13,12.8h2.9c1.3,0,2-0.7,2-1.9 c0-1.2-0.8-1.8-2-1.8h-1.7L13,12.8z"})});H.displayName="VideopressIcon";const m=({size:e,className:o=u["star-icon"],color:t})=>(0,a.jsx)(c,{className:o,size:e,color:t,children:(0,a.jsx)(s.y$,{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});m.displayName="StarIcon";const p=({size:e,className:o=u["checkmark-icon"],color:t})=>(0,a.jsx)(c,{className:o,size:e,color:t,children:(0,a.jsx)(s.y$,{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});p.displayName="CheckmarkIcon";const g=({size:e,className:o=u["clipboard-icon"],color:t})=>(0,a.jsx)(c,{className:o,size:e,color:t,children:(0,a.jsx)(s.y$,{d:"M5.625 5.5H15.375C15.444 5.5 15.5 5.55596 15.5 5.625V15.375C15.5 15.444 15.444 15.5 15.375 15.5H5.625C5.55596 15.5 5.5 15.444 5.5 15.375V5.625C5.5 5.55596 5.55596 5.5 5.625 5.5ZM4 5.625C4 4.72754 4.72754 4 5.625 4H15.375C16.2725 4 17 4.72754 17 5.625V10V15.375C17 16.2725 16.2725 17 15.375 17C15.375 17 6.52246 17 5.625 17C4.72754 17 4 16.2725 4 15.375V5.625ZM18.5 17.2812V8.28125H20V17.2812C20 18.7995 18.7704 20 17.2511 20H6.25V18.5H17.2511C17.9409 18.5 18.5 17.9721 18.5 17.2812Z"})});g.displayName="ClipboardIcon";const l=({size:e,className:o=u.jetpack,color:t})=>(0,a.jsxs)(c,{className:o,size:e,color:t,viewBox:"0 0 32 32",children:[(0,a.jsx)(s.y$,{className:"jetpack-logo__icon-circle",d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z"}),(0,a.jsx)(s.mg,{fill:"#fff",points:"15,19 7,19 15,3"}),(0,a.jsx)(s.mg,{fill:"#fff",points:"17,29 17,13 25,13"})]});l.displayName="JetpackIcon";const y=({size:e=16,className:o,color:t})=>(0,a.jsx)(c,{className:o,size:e,color:t,viewBox:"0 0 16 16",children:(0,a.jsx)(s.y$,{fill:"#161722",fillRule:"evenodd",d:"M8.3 4.66C3.85 5.308.727 9.75.034 13.69l-.02.117c-.137.842.809 1.232 1.446.68 2.013-1.745 3.648-2.475 5.318-2.719a10.482 10.482 0 011.524-.103v2.792c0 .694.82 1.041 1.3.55l6.176-6.307a.79.79 0 00.012-1.088L9.614 1.004C9.14.496 8.301.84 8.301 1.542v3.117zm1.525-1.175v1.85a.773.773 0 01-.654.77l-.655.096c-2.133.311-3.987 1.732-5.295 3.672-.472.7-.854 1.44-1.143 2.18a12.32 12.32 0 011.675-.972c1.58-.75 3.048-.972 4.548-.972h.762a.77.77 0 01.762.779v1.69l4.347-4.44-4.347-4.653z",clipRule:"evenodd"})});y.displayName="ShareIcon";const j={...{"anti-spam":v,backup:h,boost:E,crm:d,extras:r,protect:I,scan:k,search:x,social:S,star:m,videopress:H,jetpack:l,share:y}};function L(e){return j[e]?j[e]:null}const i=({serviceName:e,className:o})=>(0,a.jsx)(M.Z,{className:A()(u.socialIcon,u[e],o),icon:e});i.displayName="SocialServiceIcon";try{L.displayName="getIconBySlug",L.__docgenInfo={description:"Return icon component by slug.",displayName:"getIconBySlug",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/icons/index.tsx#getIconBySlug"]={docgenInfo:L.__docgenInfo,name:"getIconBySlug",path:"../components/components/icons/index.tsx#getIconBySlug"})}catch(e){}},"../../packages/videopress/src/client/admin/components/input/index.tsx":(w,C,n)=>{n.d(C,{II:()=>x,Mj:()=>S});var s=n("../components/components/text/index.tsx"),T=n("../components/components/icons/index.tsx"),A=n("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),M=n("../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),_=n("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),b=n("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),z=n("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js"),O=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),B=n.n(O),u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=n.n(a),v=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss"),h={};h.insert="head",h.singleton=!1;var E=c()(v.Z,h);const d=v.Z.locals||{};var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=_.__,k=({className:m,disabled:p=!1,loading:g=!1,icon:l=null,endAdornment:y=null,onChange:D,onEnter:j,size:L="small",...i})=>{const e=(0,u.useCallback)(V=>{D!=null&&D(V.currentTarget.value)},[D]),o=(0,u.useCallback)(V=>{j!=null&&["Enter","NumpadEnter"].includes(V.code)&&j(V.currentTarget.value)},[j]),t={className:B()(d.input,{[d["with-icon"]]:l!=null}),onChange:e,onKeyUp:o,disabled:p,["aria-disabled"]:p},f=(i==null?void 0:i.type)==="textarea";return(0,r.jsx)("div",{className:B()(m,d["input-wrapper"],{[d.disabled]:p,[d.large]:L==="large",[d["is-textarea"]]:f}),children:f?(0,r.jsx)("textarea",{...i,...t}):(0,r.jsxs)(r.Fragment,{children:[g||l?(0,r.jsx)("div",{className:B()(d["icon-wrapper"],{[d.loader]:g}),children:g?(0,r.jsx)(A.ZP,{}):l}):null,(0,r.jsx)("input",{...i,...t,value:i.value}),y]})})};k.displayName="InputWrapper";const x=({name:m,label:p,className:g,size:l="small",...y})=>p?(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)(s.ZP,{component:"label",variant:l==="small"?"body-small":"body",htmlFor:m,mb:1,className:d.label,children:p}),(0,r.jsx)(k,{name:m,size:l,...y})]}):(0,r.jsx)(k,{className:g,size:l,...y}),S=({placeholder:m=I("Search your library","jetpack-videopress-pkg"),onSearch:p,wait:g=500,...l})=>{const y=(0,M.Z)(p,g),D=(0,u.useCallback)(i=>{var e;(e=l.onEnter)==null||e.call(l,i),p(i)},[l.onEnter,p]),j=(0,u.useCallback)(i=>{var e;(e=l.onChange)==null||e.call(l,i),y(i)},[l.onChange]),L=(0,u.useCallback)(()=>{var i;(i=l.onChange)==null||i.call(l,""),p("")},[l.onChange]);return(0,r.jsx)(x,{...l,icon:(0,r.jsx)(T.SearchIcon,{size:24}),placeholder:m,type:"text",onEnter:D,onChange:j,endAdornment:(0,r.jsx)(r.Fragment,{children:!!l.value&&(0,r.jsx)("div",{className:B()(d["icon-wrapper"]),children:(0,r.jsx)(b.Z,{icon:z.Z,onClick:L,className:B()(d["clear-icon"])})})})})};S.displayName="SearchInput";const H=null;try{x.displayName="Input",x.__docgenInfo={description:"Input component",displayName:"Input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#Input"]={docgenInfo:x.__docgenInfo,name:"Input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#Input"})}catch(m){}try{S.displayName="SearchInput",S.__docgenInfo={description:"Search Input component",displayName:"SearchInput",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}},onSearch:{defaultValue:null,description:"Callback to be invoked when the seacrhing",name:"onSearch",required:!0,type:{name:"(value: string) => unknown"}},wait:{defaultValue:{value:"500"},description:"The debounce time in milliseconds to wait\nbefore to invoke the `onSearch` callback.",name:"wait",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"]={docgenInfo:S.__docgenInfo,name:"SearchInput",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"})}catch(m){}try{input.displayName="input",input.__docgenInfo={description:"Input component",displayName:"input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#input"})}catch(m){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/style.module.scss":(w,C,n)=>{n.d(C,{Z:()=>b});var s=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=n.n(s),A=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),M=n.n(A),_=M()(T());_.push([w.id,".apKL9Ss3_VG17UJxrqA7{fill:#000}.mPQsBbrT0lnK5PN87XAD,.RdHYWyEJCh6gES99YSu0{fill:var(--jp-green-primary)}.GA8vQ8oWE0KMBEs53S69{fill:#757575}.GA8vQ8oWE0KMBEs53S69.d0ejA5VoldoIeKYCUDvQ{fill:var(--color-facebook);border-radius:50% !important}.GA8vQ8oWE0KMBEs53S69.Sa4u44MpcByTxKv8DClD{fill:var(--color-instagram)}.GA8vQ8oWE0KMBEs53S69.lMGQ7ZxAgCCQLWdmJU3O{fill:var(--color-twitter)}.GA8vQ8oWE0KMBEs53S69.B44pmqA3Fj6ggj1iTSk8{fill:var(--color-linkedin)}.GA8vQ8oWE0KMBEs53S69.UXzi4VWKpAQHvzG1WX7A{fill:var(--color-tumblr)}.GA8vQ8oWE0KMBEs53S69.mEOE0FjyALIk_mQWtG_D{fill:var(--color-gplus)}.GA8vQ8oWE0KMBEs53S69.bNdhCs6HfW0LZJBmuplQ{fill:var(--color-mastodon)}.GA8vQ8oWE0KMBEs53S69.DD6IRNLM6RtMSkEbqcdB{fill:var(--color-nextdoor);border-radius:50%}.GA8vQ8oWE0KMBEs53S69.Sa4u44MpcByTxKv8DClD{fill:var(--color-instagram)}.GA8vQ8oWE0KMBEs53S69.zq0rq48hGYT8nLWWship{fill:var(--color-whatsapp)}",""]),_.locals={"star-icon":"apKL9Ss3_VG17UJxrqA7",jetpack:"mPQsBbrT0lnK5PN87XAD","checkmark-icon":"RdHYWyEJCh6gES99YSu0",socialIcon:"GA8vQ8oWE0KMBEs53S69",facebook:"d0ejA5VoldoIeKYCUDvQ",instagram:"Sa4u44MpcByTxKv8DClD",twitter:"lMGQ7ZxAgCCQLWdmJU3O",linkedin:"B44pmqA3Fj6ggj1iTSk8",tumblr:"UXzi4VWKpAQHvzG1WX7A",google:"mEOE0FjyALIk_mQWtG_D",mastodon:"bNdhCs6HfW0LZJBmuplQ",nextdoor:"DD6IRNLM6RtMSkEbqcdB",whatsapp:"zq0rq48hGYT8nLWWship"};const b=_},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss":(w,C,n)=>{n.d(C,{Z:()=>b});var s=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=n.n(s),A=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),M=n.n(A),_=M()(T());_.push([w.id,".ozPJkECzts6RTktIEHv7{cursor:auto;display:inline-block;color:var(--jp-gray-80)}.D3ebbH6XI1FHeD6HZcKP{--jp-input-wrapper-height: 40px;min-height:var(--jp-input-wrapper-height);padding:var(--spacing-base);border:1px solid var(--jp-black);border-radius:var(--jp-border-radius);background-color:var(--jp-white);display:flex;align-items:center;font-size:var(--font-body-small);box-sizing:border-box}.D3ebbH6XI1FHeD6HZcKP:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.D3ebbH6XI1FHeD6HZcKP.y1XlrKLlIpOvP83oHKlS{border-color:var(--jp-gray-10);background-color:var(--jp-gray);color:var(--jp-gray-20)}.D3ebbH6XI1FHeD6HZcKP.phGwlbYIiVpqQ1d4_wHs{padding:calc(var(--spacing-base)*2);font-size:var(--font-body)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci){height:var(--jp-input-wrapper-height)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci).phGwlbYIiVpqQ1d4_wHs{height:calc(var(--jp-input-wrapper-height) + var(--spacing-base)*2)}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S{font-size:unset;font-family:unset;width:100%;border:0;outline:none;background-color:rgba(0,0,0,0);box-shadow:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S:focus{box-shadow:none;outline:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S.L0sWBwtNiRXf1L4TcDQt{margin-left:var(--spacing-base)}.D3ebbH6XI1FHeD6HZcKP .OJ8b46rEJdBKbj1y7DPf{display:flex;align-items:center;justify-content:center;height:24px;width:24px;flex-shrink:0}.D3ebbH6XI1FHeD6HZcKP .si7WSLlOzZR9H8Pr4Hbw{cursor:pointer}.D3ebbH6XI1FHeD6HZcKP .JxInrTT3Xjd0xgF3pzrw svg{margin:0}",""]),_.locals={label:"ozPJkECzts6RTktIEHv7","input-wrapper":"D3ebbH6XI1FHeD6HZcKP",disabled:"y1XlrKLlIpOvP83oHKlS",large:"phGwlbYIiVpqQ1d4_wHs","is-textarea":"m01HDzyHTisAZoPDb3ci",input:"WEveooAUh3vBewTzzd4S","with-icon":"L0sWBwtNiRXf1L4TcDQt","icon-wrapper":"OJ8b46rEJdBKbj1y7DPf","clear-icon":"si7WSLlOzZR9H8Pr4Hbw",loader:"JxInrTT3Xjd0xgF3pzrw"};const b=_}}]);})();
