"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9618,1366],{"../../packages/videopress/src/client/admin/components/input/stories/index.mdx":(W,v,n)=>{n.r(v),n.d(v,{default:()=>m});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),V=n.n(y),u=n("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),j=n("../../packages/videopress/src/client/admin/components/input/index.tsx"),P=n("../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx");function z(s){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",hr:"hr"},(0,y.useMDXComponents)(),s.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.h_,{of:P}),`
`,(0,a.jsx)(e.h1,{id:"input",children:"Input"}),`
`,(0,a.jsx)(e.p,{children:"A simple input field."}),`
`,(0,a.jsx)(u.Xz,{withSource:"open",children:(0,a.jsx)(u.oG,{id:"packages-videopress-input--default"})}),`
`,(0,a.jsx)(e.h2,{id:"api",children:"API"}),`
`,(0,a.jsx)(e.h3,{id:"value",children:"value"}),`
`,(0,a.jsxs)(e.ul,{children:[`
`,(0,a.jsxs)(e.li,{children:["type: ",(0,a.jsx)(e.code,{children:"string"})]}),`
`]}),`
`,(0,a.jsx)(e.p,{children:"The input value."}),`
`,(0,a.jsx)(e.h3,{id:"placeholder",children:"placeholder"}),`
`,(0,a.jsxs)(e.ul,{children:[`
`,(0,a.jsxs)(e.li,{children:["type: ",(0,a.jsx)(e.code,{children:"string"})]}),`
`]}),`
`,(0,a.jsx)(e.p,{children:"The input placeholder."}),`
`,(0,a.jsx)(e.h3,{id:"disabled",children:"disabled"}),`
`,(0,a.jsxs)(e.ul,{children:[`
`,(0,a.jsxs)(e.li,{children:["type: ",(0,a.jsx)(e.code,{children:"boolean"})]}),`
`]}),`
`,(0,a.jsx)(e.p,{children:"Whether the input is disabled."}),`
`,(0,a.jsx)(e.h3,{id:"icon",children:"icon"}),`
`,(0,a.jsxs)(e.ul,{children:[`
`,(0,a.jsxs)(e.li,{children:["type: ",(0,a.jsx)(e.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,a.jsx)(e.p,{children:"An optional icon."}),`
`,(0,a.jsx)(e.h3,{id:"onchange",children:"onChange"}),`
`,(0,a.jsxs)(e.ul,{children:[`
`,(0,a.jsxs)(e.li,{children:["type: ",(0,a.jsx)(e.code,{children:"function"})]}),`
`]}),`
`,(0,a.jsx)(e.p,{children:"Callback to be invoked when the input value changes."}),`
`,(0,a.jsx)(e.h3,{id:"onenter",children:"onEnter"}),`
`,(0,a.jsxs)(e.ul,{children:[`
`,(0,a.jsxs)(e.li,{children:["type: ",(0,a.jsx)(e.code,{children:"function"})]}),`
`]}),`
`,(0,a.jsx)(e.p,{children:"Callback to be invoked when the user presses the Enter key."}),`
`,(0,a.jsx)(e.hr,{}),`
`,(0,a.jsx)(e.h1,{id:"searchinput",children:"SearchInput"}),`
`,(0,a.jsx)(e.p,{children:"A search input field."}),`
`,(0,a.jsx)(u.Xz,{withSource:"open",children:(0,a.jsx)(u.oG,{id:"packages-videopress-input--search"})})]})}function M(s={}){const{wrapper:e}=Object.assign({},(0,y.useMDXComponents)(),s.components);return e?(0,a.jsx)(e,Object.assign({},s,{children:(0,a.jsx)(z,s)})):z(s)}const m=M},"../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx":(W,v,n)=>{var S,b,w,h,E,_,g,d,D,A,C,O,o,t,c;n.r(v),n.d(v,{Default:()=>f,Search:()=>I,TextArea:()=>p,WithIcon:()=>x,WithLabel:()=>L,__namedExportsOrder:()=>B,default:()=>M});var r=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),a=n("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),y=n("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/map-marker.js"),V=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=n("../../packages/videopress/src/client/admin/components/input/index.tsx"),j=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`import { action } from '@storybook/addon-actions';
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
`,z={Default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithIcon:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithLabel:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},TextArea:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},Search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}};const M={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { Icon, mapMarker } from '@wordpress/icons';
import { useState } from 'react';
import { Input, SearchInput } from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: ['text', 'textarea', 'number', 'url', 'email', 'password', 'tel', 'search'],
      control: {
        type: 'select'
      }
    }
  }
} as ComponentMeta<typeof Input>);
const onEnter = value => {
  action('onEnter')(value);
};
const defaultArgs = {
  placeholder: 'Placeholder text',
  disabled: false,
  loading: false,
  size: 'small',
  type: 'text',
  label: ''
};
const Template: ComponentStory<typeof Input> = args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
};
export const Default = Template.bind({});
Default.args = defaultArgs;
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: <Icon icon={mapMarker} size={24} />
};
export const WithLabel = Template.bind({});
WithLabel.args = {
  ...defaultArgs,
  label: 'My Label'
};
export const TextArea = Template.bind({});
TextArea.args = {
  ...defaultArgs,
  type: 'textarea'
};
const SearchInputTemplate: ComponentStory<typeof SearchInput> = args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
};
export const Search = SearchInputTemplate.bind({});
Search.args = {
  disabled: false,
  loading: false,
  onEnter: action('onEnter'),
  onChange: action('onChange'),
  onSearch: action('onSearch'),
  wait: 500
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState('');\\n  const onChange = inputValue => {\\n    setValue(inputValue);\\n  };\\n  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;\\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
WithIcon.parameters = {
  ...WithIcon.parameters,
  docs: {
    ...WithIcon.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState('');\\n  const onChange = inputValue => {\\n    setValue(inputValue);\\n  };\\n  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;\\n}",
      ...WithIcon.parameters?.docs?.source
    }
  }
};
WithLabel.parameters = {
  ...WithLabel.parameters,
  docs: {
    ...WithLabel.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState('');\\n  const onChange = inputValue => {\\n    setValue(inputValue);\\n  };\\n  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;\\n}",
      ...WithLabel.parameters?.docs?.source
    }
  }
};
TextArea.parameters = {
  ...TextArea.parameters,
  docs: {
    ...TextArea.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState('');\\n  const onChange = inputValue => {\\n    setValue(inputValue);\\n  };\\n  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;\\n}",
      ...TextArea.parameters?.docs?.source
    }
  }
};
Search.parameters = {
  ...Search.parameters,
  docs: {
    ...Search.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState('');\\n  const onChange = inputValue => {\\n    setValue(inputValue);\\n    action('onChange')(inputValue);\\n  };\\n  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;\\n}",
      ...Search.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-icon":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-label":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"text-area":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}}}},title:"Packages/VideoPress/Input",component:u.II,argTypes:{size:{options:["small","large"],control:{type:"radio"}},type:{options:["text","textarea","number","url","email","password","tel","search"],control:{type:"select"}}}},m=l=>{(0,r.aD)("onEnter")(l)},s={placeholder:"Placeholder text",disabled:!1,loading:!1,size:"small",type:"text",label:""},e=l=>{const[k,T]=(0,V.useState)(""),N=H=>{T(H)};return(0,j.jsx)(u.II,{...l,value:k,onChange:N,onEnter:m})};e.displayName="Template";const f=e.bind({});f.args=s;const x=e.bind({});x.args={...s,icon:(0,j.jsx)(a.Z,{icon:y.Z,size:24})};const L=e.bind({});L.args={...s,label:"My Label"};const p=e.bind({});p.args={...s,type:"textarea"};const i=l=>{const[k,T]=(0,V.useState)(""),N=H=>{T(H),(0,r.aD)("onChange")(H)};return(0,j.jsx)(u.Mj,{...l,value:k,onChange:N,onEnter:m})};i.displayName="SearchInputTemplate";const I=i.bind({});I.args={disabled:!1,loading:!1,onEnter:(0,r.aD)("onEnter"),onChange:(0,r.aD)("onChange"),onSearch:(0,r.aD)("onSearch"),wait:500},f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(w=(b=f.parameters)==null?void 0:b.docs)==null?void 0:w.source}}},x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(_=(E=x.parameters)==null?void 0:E.docs)==null?void 0:_.source}}},L.parameters={...L.parameters,docs:{...(g=L.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(D=(d=L.parameters)==null?void 0:d.docs)==null?void 0:D.source}}},p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.source}}},I.parameters={...I.parameters,docs:{...(o=I.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(c=(t=I.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const B=["Default","WithIcon","WithLabel","TextArea","Search"]},"../components/components/icons/index.tsx":(W,v,n)=>{n.r(v),n.d(v,{AntiSpamIcon:()=>f,BackupIcon:()=>x,BoostIcon:()=>L,CheckmarkIcon:()=>E,ClipboardIcon:()=>_,CrmIcon:()=>p,ExtrasIcon:()=>i,JetpackIcon:()=>g,ProtectIcon:()=>I,ScanIcon:()=>B,SearchIcon:()=>S,ShareIcon:()=>d,SocialIcon:()=>b,SocialServiceIcon:()=>O,StarIcon:()=>h,VideopressIcon:()=>w,getIconBySlug:()=>C});var r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),y=n.n(a),V=n("../../../node_modules/.pnpm/social-logos@2.5.6_react@18.2.0/node_modules/social-logos/react/index.js"),u=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=n.n(u),P=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/style.module.scss"),z={};z.insert="head",z.singleton=!1;var M=j()(P.Z,z);const m=P.Z.locals||{};var s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=o=>{let{className:t,size:c=24,viewBox:l="0 0 24 24",opacity:k=1,color:T="#2C3338",children:N}=o;const H={className:y()(m.iconWrapper,t),width:c,height:c,viewBox:l,opacity:k,fill:void 0};return T&&(H.fill=T),(0,s.jsx)(r.Wj,{...H,fillRule:"evenodd",clipRule:"evenodd",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(r.G,{opacity:k,children:N})})};e.displayName="IconWrapper";const f=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsxs)(e,{size:c,opacity:t,color:l,children:[(0,s.jsx)(r.y$,{d:"M13.2,4.7l4.7,12.8c0.4,1.1,1,1.5,2.1,1.6c0.1,0,0.1,0,0.1,0l0.1,0.1l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1 s0,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1s-0.1,0-0.2,0h-5.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1 c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1l0.1-0.1c0,0,0.1,0,0.2,0c0.5,0,1.1-0.2,1.1-0.8c0-0.3-0.1-0.5-0.2-0.8l-1.1-3.1 c-0.1-0.2-0.1-0.2-0.2-0.2h-4.3c-0.7,0-1.5,0-1.9,0.9l-1.1,2.4C7.1,17.6,7,17.8,7,18.1c0,0.8,1,0.9,1.6,0.9c0.1,0,0.1,0,0.2,0 L8.8,19l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1s-0.1,0.1-0.1,0.1l-0.1,0.1c-0.1,0-0.1,0-0.2,0H4.1c-0.1,0-0.1,0-0.1,0 c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1L4,19c0,0,0.1,0,0.1,0C5.2,19,5.5,18.5,6,17.5 l5.4-12.4c0.2-0.5,0.8-1,1.3-1C13,4.2,13.1,4.4,13.2,4.7z M9.1,13.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.1h4.4 c0.3,0,0.4-0.1,0.4-0.3c0-0.1,0-0.2-0.1-0.3l-1.2-3.5c-0.3-0.8-0.8-1.9-0.8-2.7c0-0.1,0-0.1-0.1-0.1c0,0-0.1,0-0.1,0.1 c-0.1,0.6-0.4,1.2-0.7,1.7L9.1,13.1z"}),(0,s.jsx)(r.y$,{d:"M13.2,4.7l4.7,12.8c0.4,1.1,1,1.5,2.1,1.6c0.1,0,0.1,0,0.1,0l0.1,0.1l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1 s0,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1s-0.1,0-0.2,0h-5.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1 c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1l0.1-0.1c0,0,0.1,0,0.2,0c0.5,0,1.1-0.2,1.1-0.8c0-0.3-0.1-0.5-0.2-0.8l-1.1-3.1 c-0.1-0.2-0.1-0.2-0.2-0.2h-4.3c-0.7,0-1.5,0-1.9,0.9l-1.1,2.4C7.1,17.6,7,17.8,7,18.1c0,0.8,1,0.9,1.6,0.9c0.1,0,0.1,0,0.2,0 L8.8,19l0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.1s-0.1,0.1-0.1,0.1l-0.1,0.1c-0.1,0-0.1,0-0.2,0H4.1c-0.1,0-0.1,0-0.1,0 c-0.1,0-0.1-0.1-0.1-0.1l-0.1-0.1c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2s0-0.1,0.1-0.1L4,19c0,0,0.1,0,0.1,0C5.2,19,5.5,18.5,6,17.5 l5.4-12.4c0.2-0.5,0.8-1,1.3-1C13,4.2,13.1,4.4,13.2,4.7z M9.1,13.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.1h4.4 c0.3,0,0.4-0.1,0.4-0.3c0-0.1,0-0.2-0.1-0.3l-1.2-3.5c-0.3-0.8-0.8-1.9-0.8-2.7c0-0.1,0-0.1-0.1-0.1c0,0-0.1,0-0.1,0.1 c-0.1,0.6-0.4,1.2-0.7,1.7L9.1,13.1z"}),(0,s.jsx)(r.y$,{d:"M21.6,12.5c0,0.6-0.3,1-0.9,1c-0.6,0-0.8-0.3-0.8-0.8c0-0.6,0.4-1,0.9-1C21.3,11.7,21.6,12.1,21.6,12.5z"}),(0,s.jsx)(r.y$,{d:"M4.1,12.5c0,0.6-0.3,1-0.9,1s-0.8-0.3-0.8-0.8c0-0.6,0.4-1,0.9-1S4.1,12.1,4.1,12.5z"})]})};f.displayName="AntiSpamIcon";const x=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{d:"M2.1,5.8c0-0.1,0-0.1,0-0.2c0-0.2,0.1-0.5,0.1-0.7c0.1-0.4,0.4-0.6,0.7-0.8l8.3-2.9c0.1-0.1,0.3-0.1,0.4-0.1l0.5,0.1 l8.3,2.9c0.3,0.2,0.5,0.4,0.7,0.7c0.2,0.2,0.2,0.4,0.2,0.7c0,0.1,0,0.1,0,0.2v0.1c-0.1,0.5-0.2,0.9-0.3,1.4 c-0.2,0.4-0.3,1.2-0.7,2.2c-0.3,1-0.7,2.1-1.1,3.1c-0.5,1-1,2.1-1.6,3.3s-1.4,2.3-2.2,3.5c-0.9,1.1-1.8,2.2-2.8,3.1 c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4c-1.2-1.1-2.4-2.4-3.5-4c-1-1.6-1.9-3-2.5-4.3c-0.6-1.3-1.1-2.7-1.6-4 C2.8,8.7,2.5,7.6,2.3,7C2.3,6.5,2.1,6.1,2.1,5.8z M2.9,5.9c0,0.2,0.1,0.4,0.1,0.8C3.1,7,3.2,7.5,3.5,8.2C3.7,9,3.9,9.7,4.2,10.6 c0.3,0.7,0.7,1.7,1.1,2.7c0.4,1,1,2,1.5,2.9c0.5,1,1.2,1.9,1.9,2.9c0.8,1,1.6,1.9,2.4,2.6c0.2,0.2,0.4,0.2,0.5,0.2 c0.2,0,0.4-0.1,0.5-0.2c1.2-1,2.2-2.3,3.2-3.8c1-1.5,1.8-2.8,2.3-4c0.6-1.3,1.1-2.5,1.5-3.9c0.4-1.3,0.7-2.2,0.9-2.8 c0.1-0.5,0.2-1,0.3-1.3c0-0.1,0-0.1,0-0.1c0-0.2,0-0.3-0.1-0.4C20.3,5.2,20.2,5.1,20,5L12,2.1c0,0-0.1,0-0.2,0s-0.1,0-0.1,0h-0.2 l-8,2.8C3.2,5,3.1,5.2,3,5.3C2.9,5.5,2.9,5.6,2.9,5.8C2.9,5.8,2.9,5.8,2.9,5.9z M5.9,6.7h3l2.8,7l2.8-7h3c-0.1,0.1-0.2,0.5-0.3,0.8 C17,7.8,17,8.2,16.8,8.4c-0.1,0.3-0.2,0.5-0.4,0.8c0,0.1-0.1,0.1-0.1,0.1s-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.1,0 c-0.1,0-0.2,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1s-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.1l-0.4,1.1 c-1.3,3.3-2.1,5.2-2.3,5.8h-2.2l-1-2.4c-0.1-0.3-0.3-0.8-0.5-1.3c-0.1-0.3-0.3-0.8-0.5-1.3L8,10.8c-0.1-0.1-0.1-0.2-0.1-0.4 C7.8,10.2,7.7,10,7.7,9.8C7.6,9.7,7.5,9.5,7.4,9.4C7.3,9.3,7.3,9.3,7.3,9.3c-0.1,0-0.2,0-0.2,0s-0.1,0-0.1,0 C6.6,8.5,6.3,7.6,5.9,6.7z"})})};x.displayName="BackupIcon";const L=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M4.19505 16.2545C4.47368 16.561 4.94802 16.5836 5.25451 16.3049L10.2595 11.7549L14.2842 15.2765L19 10.5607V13.75H20.5V9.5V8.75239V8.7476V8H19.7529H19.7471H19H14.75V9.5H17.9393L14.2158 13.2235L10.2405 9.74507L4.2455 15.195C3.93901 15.4737 3.91642 15.948 4.19505 16.2545Z"})})};L.displayName="BoostIcon";const p=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{d:"M15.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-2.25 6v-2a2.75 2.75 0 0 0-2.75-2.75h-4A2.75 2.75 0 0 0 3.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5Zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0 1 20.25 15ZM9.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"})})};p.displayName="CrmIcon";const i=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{d:"M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5ZM12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-1.5v6a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h6V4Z"})})};i.displayName="ExtrasIcon";const I=o=>{let{opacity:t=1,size:c,className:l,color:k}=o;return(0,s.jsxs)(e,{className:l,size:c,opacity:t,color:k,children:[(0,s.jsx)(r.y$,{d:"M12 3.17627L18.75 6.24445V10.8183C18.75 14.7173 16.2458 18.4089 12.7147 19.5735C12.2507 19.7265 11.7493 19.7265 11.2853 19.5735C7.75416 18.4089 5.25 14.7173 5.25 10.8183V6.24445L12 3.17627ZM6.75 7.21032V10.8183C6.75 14.1312 8.89514 17.2057 11.7551 18.149C11.914 18.2014 12.086 18.2014 12.2449 18.149C15.1049 17.2057 17.25 14.1312 17.25 10.8183V7.21032L12 4.82396L6.75 7.21032Z"}),(0,s.jsx)(r.y$,{d:"M15.5291 10.0315L11.1818 14.358L8.47095 11.66L9.52907 10.5968L11.1818 12.2417L14.4709 8.96826L15.5291 10.0315Z"})]})};I.displayName="ProtectIcon";const B=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{d:"m12 3.176 6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 0 1-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176ZM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21Z"})})};B.displayName="ScanIcon";const S=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{d:"M17.5 11.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1.5 0a5.5 5.5 0 0 1-9.142 4.121l-3.364 2.943-.988-1.128 3.373-2.952A5.5 5.5 0 1 1 19 11.5Z"})})};S.displayName="SearchIcon";const b=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{d:"M15.5 3.97809V18.0219L7.5 15.5977V20H6V15.1431L3.27498 14.3173C2.22086 13.9979 1.5 13.0262 1.5 11.9248V10.0752C1.5 8.97375 2.22087 8.00207 3.27498 7.68264L15.5 3.97809ZM14 16L7.5 14.0303L7.5 7.96969L14 5.99999V16ZM6 8.42423L6 13.5757L3.70999 12.8818C3.28835 12.754 3 12.3654 3 11.9248V10.0752C3 9.63462 3.28835 9.24595 3.70999 9.11818L6 8.42423ZM17.5 11.75H21.5V10.25H17.5V11.75ZM21.5 16L17.5 15V13.5L21.5 14.5V16ZM17.5 8.5L21.5 7.5V6L17.5 7V8.5Z"})})};b.displayName="SocialIcon";const w=o=>{let{opacity:t=1,size:c,color:l}=o;return(0,s.jsx)(e,{size:c,opacity:t,color:l,children:(0,s.jsx)(r.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M4.3,6.2c0.8,0,1.6,0.6,1.8,1.4l2.3,7.9c0,0,0,0,0,0l2.7-9.3h1.5h4.2c2.9,0,4.9,1.9,4.9,4.7c0,2.9-2,4.7-5,4.7 h-2h-2.5l-0.5,1.5c-0.4,1.4-1.7,2.3-3.2,2.3c-1.4,0-2.7-0.9-3.2-2.3L2.5,8.7C2.1,7.4,3,6.2,4.3,6.2z M13,12.8h2.9c1.3,0,2-0.7,2-1.9 c0-1.2-0.8-1.8-2-1.8h-1.7L13,12.8z"})})};w.displayName="VideopressIcon";const h=o=>{let{size:t,className:c=m["star-icon"],color:l}=o;return(0,s.jsx)(e,{className:c,size:t,color:l,children:(0,s.jsx)(r.y$,{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})})};h.displayName="StarIcon";const E=o=>{let{size:t,className:c=m["checkmark-icon"],color:l}=o;return(0,s.jsx)(e,{className:c,size:t,color:l,children:(0,s.jsx)(r.y$,{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})})};E.displayName="CheckmarkIcon";const _=o=>{let{size:t,className:c=m["clipboard-icon"],color:l}=o;return(0,s.jsx)(e,{className:c,size:t,color:l,children:(0,s.jsx)(r.y$,{d:"M5.625 5.5H15.375C15.444 5.5 15.5 5.55596 15.5 5.625V15.375C15.5 15.444 15.444 15.5 15.375 15.5H5.625C5.55596 15.5 5.5 15.444 5.5 15.375V5.625C5.5 5.55596 5.55596 5.5 5.625 5.5ZM4 5.625C4 4.72754 4.72754 4 5.625 4H15.375C16.2725 4 17 4.72754 17 5.625V10V15.375C17 16.2725 16.2725 17 15.375 17C15.375 17 6.52246 17 5.625 17C4.72754 17 4 16.2725 4 15.375V5.625ZM18.5 17.2812V8.28125H20V17.2812C20 18.7995 18.7704 20 17.2511 20H6.25V18.5H17.2511C17.9409 18.5 18.5 17.9721 18.5 17.2812Z"})})};_.displayName="ClipboardIcon";const g=o=>{let{size:t,className:c=m.jetpack,color:l}=o;return(0,s.jsxs)(e,{className:c,size:t,color:l,viewBox:"0 0 32 32",children:[(0,s.jsx)(r.y$,{className:"jetpack-logo__icon-circle",d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z"}),(0,s.jsx)(r.mg,{fill:"#fff",points:"15,19 7,19 15,3"}),(0,s.jsx)(r.mg,{fill:"#fff",points:"17,29 17,13 25,13"})]})};g.displayName="JetpackIcon";const d=o=>{let{size:t=16,className:c,color:l}=o;return(0,s.jsx)(e,{className:c,size:t,color:l,viewBox:"0 0 16 16",children:(0,s.jsx)(r.y$,{fill:"#161722",fillRule:"evenodd",d:"M8.3 4.66C3.85 5.308.727 9.75.034 13.69l-.02.117c-.137.842.809 1.232 1.446.68 2.013-1.745 3.648-2.475 5.318-2.719a10.482 10.482 0 011.524-.103v2.792c0 .694.82 1.041 1.3.55l6.176-6.307a.79.79 0 00.012-1.088L9.614 1.004C9.14.496 8.301.84 8.301 1.542v3.117zm1.525-1.175v1.85a.773.773 0 01-.654.77l-.655.096c-2.133.311-3.987 1.732-5.295 3.672-.472.7-.854 1.44-1.143 2.18a12.32 12.32 0 011.675-.972c1.58-.75 3.048-.972 4.548-.972h.762a.77.77 0 01.762.779v1.69l4.347-4.44-4.347-4.653z",clipRule:"evenodd"})})};d.displayName="ShareIcon";const A={...{"anti-spam":f,backup:x,boost:L,crm:p,extras:i,protect:I,scan:B,search:S,social:b,star:h,videopress:w,jetpack:g,share:d}};function C(o){return A[o]?A[o]:null}const O=o=>{let{serviceName:t,className:c}=o;return(0,s.jsx)(V.Z,{className:y()(m.socialIcon,m[t],c),icon:t})};O.displayName="SocialServiceIcon";try{C.displayName="getIconBySlug",C.__docgenInfo={description:"Return icon component by slug.",displayName:"getIconBySlug",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/icons/index.tsx#getIconBySlug"]={docgenInfo:C.__docgenInfo,name:"getIconBySlug",path:"../components/components/icons/index.tsx#getIconBySlug"})}catch(o){}},"../../packages/videopress/src/client/admin/components/input/index.tsx":(W,v,n)=>{n.d(v,{II:()=>S,Mj:()=>b});var r=n("../components/components/text/index.tsx"),a=n("../components/components/icons/index.tsx"),y=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),V=n("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),u=n("../../../node_modules/.pnpm/@wordpress+i18n@4.43.0/node_modules/@wordpress/i18n/build-module/index.js"),j=n("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),P=n("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js"),z=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),M=n.n(z),m=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=n.n(s),f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss"),x={};x.insert="head",x.singleton=!1;var L=e()(f.Z,x);const p=f.Z.locals||{};var i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=u.__,B=h=>{let{className:E,disabled:_=!1,loading:g=!1,icon:d=null,endAdornment:D=null,onChange:A,onEnter:C,size:O="small",...o}=h;const t=(0,m.useCallback)(T=>{A!=null&&A(T.currentTarget.value)},[A]),c=(0,m.useCallback)(T=>{C!=null&&["Enter","NumpadEnter"].includes(T.code)&&C(T.currentTarget.value)},[C]),l={className:M()(p.input,{[p["with-icon"]]:d!=null}),onChange:t,onKeyUp:c,disabled:_,["aria-disabled"]:_},k=(o==null?void 0:o.type)==="textarea";return(0,i.jsx)("div",{className:M()(E,p["input-wrapper"],{[p.disabled]:_,[p.large]:O==="large",[p["is-textarea"]]:k}),children:k?(0,i.jsx)("textarea",{...o,...l}):(0,i.jsxs)(i.Fragment,{children:[g||d?(0,i.jsx)("div",{className:M()(p["icon-wrapper"],{[p.loader]:g}),children:g?(0,i.jsx)(y.ZP,{}):d}):null,(0,i.jsx)("input",{...o,...l,value:o.value}),D]})})};B.displayName="InputWrapper";const S=h=>{let{name:E,label:_,className:g,size:d="small",...D}=h;return _?(0,i.jsxs)("div",{className:g,children:[(0,i.jsx)(r.ZP,{component:"label",variant:d==="small"?"body-small":"body",htmlFor:E,mb:1,className:p.label,children:_}),(0,i.jsx)(B,{name:E,size:d,...D})]}):(0,i.jsx)(B,{className:g,size:d,...D})},b=h=>{let{placeholder:E=I("Search your library","jetpack-videopress-pkg"),onSearch:_,wait:g=500,...d}=h;const D=(0,V.Z)(_,g),A=(0,m.useCallback)(o=>{var t;(t=d.onEnter)==null||t.call(d,o),_(o)},[d.onEnter,_]),C=(0,m.useCallback)(o=>{var t;(t=d.onChange)==null||t.call(d,o),D(o)},[d.onChange]),O=(0,m.useCallback)(()=>{var o;(o=d.onChange)==null||o.call(d,""),_("")},[d.onChange]);return(0,i.jsx)(S,{...d,icon:(0,i.jsx)(a.SearchIcon,{size:24}),placeholder:E,type:"text",onEnter:A,onChange:C,endAdornment:(0,i.jsx)(i.Fragment,{children:!!d.value&&(0,i.jsx)("div",{className:M()(p["icon-wrapper"]),children:(0,i.jsx)(j.Z,{icon:P.Z,onClick:O,className:M()(p["clear-icon"])})})})})};b.displayName="SearchInput";const w=null;try{S.displayName="Input",S.__docgenInfo={description:"Input component",displayName:"Input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"search"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#Input"]={docgenInfo:S.__docgenInfo,name:"Input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#Input"})}catch(h){}try{b.displayName="SearchInput",b.__docgenInfo={description:"Search Input component",displayName:"SearchInput",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}},onSearch:{defaultValue:null,description:"Callback to be invoked when the seacrhing",name:"onSearch",required:!0,type:{name:"(value: string) => unknown"}},wait:{defaultValue:{value:"500"},description:"The debounce time in milliseconds to wait\nbefore to invoke the `onSearch` callback.",name:"wait",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"]={docgenInfo:b.__docgenInfo,name:"SearchInput",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"})}catch(h){}try{input.displayName="input",input.__docgenInfo={description:"Input component",displayName:"input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"search"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#input"})}catch(h){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/style.module.scss":(W,v,n)=>{n.d(v,{Z:()=>j});var r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(r),y=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),V=n.n(y),u=V()(a());u.push([W.id,".apKL9Ss3_VG17UJxrqA7{fill:#000}.mPQsBbrT0lnK5PN87XAD,.RdHYWyEJCh6gES99YSu0{fill:var(--jp-green-primary)}.GA8vQ8oWE0KMBEs53S69{fill:#757575}.GA8vQ8oWE0KMBEs53S69.d0ejA5VoldoIeKYCUDvQ{fill:var(--color-facebook);border-radius:50% !important}.GA8vQ8oWE0KMBEs53S69.Sa4u44MpcByTxKv8DClD{fill:var(--color-instagram)}.GA8vQ8oWE0KMBEs53S69.lMGQ7ZxAgCCQLWdmJU3O{fill:var(--color-twitter)}.GA8vQ8oWE0KMBEs53S69.B44pmqA3Fj6ggj1iTSk8{fill:var(--color-linkedin)}.GA8vQ8oWE0KMBEs53S69.UXzi4VWKpAQHvzG1WX7A{fill:var(--color-tumblr)}.GA8vQ8oWE0KMBEs53S69.mEOE0FjyALIk_mQWtG_D{fill:var(--color-gplus)}.GA8vQ8oWE0KMBEs53S69.bNdhCs6HfW0LZJBmuplQ{fill:var(--color-mastodon)}.GA8vQ8oWE0KMBEs53S69.Sa4u44MpcByTxKv8DClD{fill:var(--color-instagram)}.GA8vQ8oWE0KMBEs53S69.zq0rq48hGYT8nLWWship{fill:var(--color-whatsapp)}",""]),u.locals={"star-icon":"apKL9Ss3_VG17UJxrqA7",jetpack:"mPQsBbrT0lnK5PN87XAD","checkmark-icon":"RdHYWyEJCh6gES99YSu0",socialIcon:"GA8vQ8oWE0KMBEs53S69",facebook:"d0ejA5VoldoIeKYCUDvQ",instagram:"Sa4u44MpcByTxKv8DClD",twitter:"lMGQ7ZxAgCCQLWdmJU3O",linkedin:"B44pmqA3Fj6ggj1iTSk8",tumblr:"UXzi4VWKpAQHvzG1WX7A",google:"mEOE0FjyALIk_mQWtG_D",mastodon:"bNdhCs6HfW0LZJBmuplQ",whatsapp:"zq0rq48hGYT8nLWWship"};const j=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss":(W,v,n)=>{n.d(v,{Z:()=>j});var r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(r),y=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),V=n.n(y),u=V()(a());u.push([W.id,".ozPJkECzts6RTktIEHv7{cursor:auto;display:inline-block;color:var(--jp-gray-80)}.D3ebbH6XI1FHeD6HZcKP{--jp-input-wrapper-height: 40px;min-height:var(--jp-input-wrapper-height);padding:var(--spacing-base);border:1px solid var(--jp-black);border-radius:var(--jp-border-radius);background-color:var(--jp-white);display:flex;align-items:center;font-size:var(--font-body-small);box-sizing:border-box}.D3ebbH6XI1FHeD6HZcKP:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.D3ebbH6XI1FHeD6HZcKP.y1XlrKLlIpOvP83oHKlS{border-color:var(--jp-gray-10);background-color:var(--jp-gray);color:var(--jp-gray-20)}.D3ebbH6XI1FHeD6HZcKP.phGwlbYIiVpqQ1d4_wHs{padding:calc(var(--spacing-base)*2);font-size:var(--font-body)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci){height:var(--jp-input-wrapper-height)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci).phGwlbYIiVpqQ1d4_wHs{height:calc(var(--jp-input-wrapper-height) + var(--spacing-base)*2)}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S{font-size:unset;font-family:unset;width:100%;border:0;outline:none;background-color:rgba(0,0,0,0);box-shadow:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S:focus{box-shadow:none;outline:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S.L0sWBwtNiRXf1L4TcDQt{margin-left:var(--spacing-base)}.D3ebbH6XI1FHeD6HZcKP .OJ8b46rEJdBKbj1y7DPf{display:flex;align-items:center;justify-content:center;height:24px;width:24px;flex-shrink:0}.D3ebbH6XI1FHeD6HZcKP .si7WSLlOzZR9H8Pr4Hbw{cursor:pointer}.D3ebbH6XI1FHeD6HZcKP .JxInrTT3Xjd0xgF3pzrw svg{margin:0}",""]),u.locals={label:"ozPJkECzts6RTktIEHv7","input-wrapper":"D3ebbH6XI1FHeD6HZcKP",disabled:"y1XlrKLlIpOvP83oHKlS",large:"phGwlbYIiVpqQ1d4_wHs","is-textarea":"m01HDzyHTisAZoPDb3ci",input:"WEveooAUh3vBewTzzd4S","with-icon":"L0sWBwtNiRXf1L4TcDQt","icon-wrapper":"OJ8b46rEJdBKbj1y7DPf","clear-icon":"si7WSLlOzZR9H8Pr4Hbw",loader:"JxInrTT3Xjd0xgF3pzrw"};const j=u}}]);})();
