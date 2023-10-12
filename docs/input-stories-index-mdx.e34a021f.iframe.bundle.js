"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9618,1366],{"../../packages/videopress/src/client/admin/components/input/stories/index.mdx":(H,g,a)=>{a.r(g),a.d(g,{default:()=>m});var p=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=a("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),k=a.n(v),r=a("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),E=a("../../packages/videopress/src/client/admin/components/input/index.tsx"),W=a("../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx");function w(c){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",hr:"hr"},(0,v.useMDXComponents)(),c.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.h_,{of:W}),`
`,(0,e.jsx)(n.h1,{id:"input",children:"Input"}),`
`,(0,e.jsx)(n.p,{children:"A simple input field."}),`
`,(0,e.jsx)(r.Xz,{withSource:"open",children:(0,e.jsx)(r.oG,{id:"packages-videopress-input--default"})}),`
`,(0,e.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The input value."}),`
`,(0,e.jsx)(n.h3,{id:"placeholder",children:"placeholder"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The input placeholder."}),`
`,(0,e.jsx)(n.h3,{id:"disabled",children:"disabled"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"boolean"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Whether the input is disabled."}),`
`,(0,e.jsx)(n.h3,{id:"icon",children:"icon"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"An optional icon."}),`
`,(0,e.jsx)(n.h3,{id:"onchange",children:"onChange"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"function"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Callback to be invoked when the input value changes."}),`
`,(0,e.jsx)(n.h3,{id:"onenter",children:"onEnter"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"function"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Callback to be invoked when the user presses the Enter key."}),`
`,(0,e.jsx)(n.hr,{}),`
`,(0,e.jsx)(n.h1,{id:"searchinput",children:"SearchInput"}),`
`,(0,e.jsx)(n.p,{children:"A search input field."}),`
`,(0,e.jsx)(r.Xz,{withSource:"open",children:(0,e.jsx)(r.oG,{id:"packages-videopress-input--search"})})]})}function x(c={}){const{wrapper:n}=Object.assign({},(0,v.useMDXComponents)(),c.components);return n?(0,e.jsx)(n,Object.assign({},c,{children:(0,e.jsx)(w,c)})):w(c)}const m=x},"../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx":(H,g,a)=>{var I,j,R,i,y,d,u,t,f,S,T,O,l,_,M;a.r(g),a.d(g,{Default:()=>b,Search:()=>C,TextArea:()=>s,WithIcon:()=>h,WithLabel:()=>A,__namedExportsOrder:()=>L,default:()=>x});var p=a("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),e=a("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),v=a("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/map-marker.js"),k=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=a("../../packages/videopress/src/client/admin/components/input/index.tsx"),E=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),W=`import { action } from '@storybook/addon-actions';
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
`,w={Default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithIcon:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithLabel:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},TextArea:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},Search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}};const x={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-icon":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-label":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"text-area":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}}}},title:"Packages/VideoPress/Input",component:r.II,argTypes:{size:{options:["small","large"],control:{type:"radio"}},type:{options:["text","textarea","number","url","email","password","tel","search"],control:{type:"select"}}}},m=D=>{(0,p.aD)("onEnter")(D)},c={placeholder:"Placeholder text",disabled:!1,loading:!1,size:"small",type:"text",label:""},n=D=>{const[P,V]=(0,k.useState)(""),z=B=>{V(B)};return(0,E.jsx)(r.II,{...D,value:P,onChange:z,onEnter:m})};n.displayName="Template";const b=n.bind({});b.args=c;const h=n.bind({});h.args={...c,icon:(0,E.jsx)(e.Z,{icon:v.Z,size:24})};const A=n.bind({});A.args={...c,label:"My Label"};const s=n.bind({});s.args={...c,type:"textarea"};const o=D=>{const[P,V]=(0,k.useState)(""),z=B=>{V(B),(0,p.aD)("onChange")(B)};return(0,E.jsx)(r.Mj,{...D,value:P,onChange:z,onEnter:m})};o.displayName="SearchInputTemplate";const C=o.bind({});C.args={disabled:!1,loading:!1,onEnter:(0,p.aD)("onEnter"),onChange:(0,p.aD)("onChange"),onSearch:(0,p.aD)("onSearch"),wait:500},b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(R=(j=b.parameters)==null?void 0:j.docs)==null?void 0:R.source}}},h.parameters={...h.parameters,docs:{...(i=h.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(d=(y=h.parameters)==null?void 0:y.docs)==null?void 0:d.source}}},A.parameters={...A.parameters,docs:{...(u=A.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(f=(t=A.parameters)==null?void 0:t.docs)==null?void 0:f.source}}},s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(O=(T=s.parameters)==null?void 0:T.docs)==null?void 0:O.source}}},C.parameters={...C.parameters,docs:{...(l=C.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(M=(_=C.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const L=["Default","WithIcon","WithLabel","TextArea","Search"]},"../../packages/videopress/src/client/admin/components/input/index.tsx":(H,g,a)=>{a.d(g,{II:()=>I,Mj:()=>j});var p=a("../components/components/text/index.tsx"),e=a("../components/components/icons/index.tsx"),v=a("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),k=a("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),r=a("../../../node_modules/.pnpm/@wordpress+i18n@4.43.0/node_modules/@wordpress/i18n/build-module/index.js"),E=a("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),W=a("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js"),w=a("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),x=a.n(w),m=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=a.n(c),b=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss"),h={};h.insert="head",h.singleton=!1;var A=n()(b.Z,h);const s=b.Z.locals||{};var o=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=r.__,L=i=>{let{className:y,disabled:d=!1,loading:u=!1,icon:t=null,endAdornment:f=null,onChange:S,onEnter:T,size:O="small",...l}=i;const _=(0,m.useCallback)(V=>{S!=null&&S(V.currentTarget.value)},[S]),M=(0,m.useCallback)(V=>{T!=null&&["Enter","NumpadEnter"].includes(V.code)&&T(V.currentTarget.value)},[T]),D={className:x()(s.input,{[s["with-icon"]]:t!=null}),onChange:_,onKeyUp:M,disabled:d,["aria-disabled"]:d},P=(l==null?void 0:l.type)==="textarea";return(0,o.jsx)("div",{className:x()(y,s["input-wrapper"],{[s.disabled]:d,[s.large]:O==="large",[s["is-textarea"]]:P}),children:P?(0,o.jsx)("textarea",{...l,...D}):(0,o.jsxs)(o.Fragment,{children:[u||t?(0,o.jsx)("div",{className:x()(s["icon-wrapper"],{[s.loader]:u}),children:u?(0,o.jsx)(v.ZP,{}):t}):null,(0,o.jsx)("input",{...l,...D,value:l.value}),f]})})};L.displayName="InputWrapper";const I=i=>{let{name:y,label:d,className:u,size:t="small",...f}=i;return d?(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)(p.ZP,{component:"label",variant:t==="small"?"body-small":"body",htmlFor:y,mb:1,className:s.label,children:d}),(0,o.jsx)(L,{name:y,size:t,...f})]}):(0,o.jsx)(L,{className:u,size:t,...f})},j=i=>{let{placeholder:y=C("Search your library","jetpack-videopress-pkg"),onSearch:d,wait:u=500,...t}=i;const f=(0,k.Z)(d,u),S=(0,m.useCallback)(l=>{var _;(_=t.onEnter)==null||_.call(t,l),d(l)},[t.onEnter,d]),T=(0,m.useCallback)(l=>{var _;(_=t.onChange)==null||_.call(t,l),f(l)},[t.onChange]),O=(0,m.useCallback)(()=>{var l;(l=t.onChange)==null||l.call(t,""),d("")},[t.onChange]);return(0,o.jsx)(I,{...t,icon:(0,o.jsx)(e.SearchIcon,{size:24}),placeholder:y,type:"text",onEnter:S,onChange:T,endAdornment:(0,o.jsx)(o.Fragment,{children:!!t.value&&(0,o.jsx)("div",{className:x()(s["icon-wrapper"]),children:(0,o.jsx)(E.Z,{icon:W.Z,onClick:O,className:x()(s["clear-icon"])})})})})};j.displayName="SearchInput";const R=null;try{I.displayName="Input",I.__docgenInfo={description:"Input component",displayName:"Input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"search"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#Input"]={docgenInfo:I.__docgenInfo,name:"Input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#Input"})}catch(i){}try{j.displayName="SearchInput",j.__docgenInfo={description:"Search Input component",displayName:"SearchInput",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}},onSearch:{defaultValue:null,description:"Callback to be invoked when the seacrhing",name:"onSearch",required:!0,type:{name:"(value: string) => unknown"}},wait:{defaultValue:{value:"500"},description:"The debounce time in milliseconds to wait\nbefore to invoke the `onSearch` callback.",name:"wait",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"]={docgenInfo:j.__docgenInfo,name:"SearchInput",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"})}catch(i){}try{input.displayName="input",input.__docgenInfo={description:"Input component",displayName:"input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"search"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#input"})}catch(i){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss":(H,g,a)=>{a.d(g,{Z:()=>E});var p=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=a.n(p),v=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),k=a.n(v),r=k()(e());r.push([H.id,".ozPJkECzts6RTktIEHv7{cursor:auto;display:inline-block;color:var(--jp-gray-80)}.D3ebbH6XI1FHeD6HZcKP{--jp-input-wrapper-height: 40px;min-height:var(--jp-input-wrapper-height);padding:var(--spacing-base);border:1px solid var(--jp-black);border-radius:var(--jp-border-radius);background-color:var(--jp-white);display:flex;align-items:center;font-size:var(--font-body-small);box-sizing:border-box}.D3ebbH6XI1FHeD6HZcKP:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.D3ebbH6XI1FHeD6HZcKP.y1XlrKLlIpOvP83oHKlS{border-color:var(--jp-gray-10);background-color:var(--jp-gray);color:var(--jp-gray-20)}.D3ebbH6XI1FHeD6HZcKP.phGwlbYIiVpqQ1d4_wHs{padding:calc(var(--spacing-base)*2);font-size:var(--font-body)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci){height:var(--jp-input-wrapper-height)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci).phGwlbYIiVpqQ1d4_wHs{height:calc(var(--jp-input-wrapper-height) + var(--spacing-base)*2)}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S{font-size:unset;font-family:unset;width:100%;border:0;outline:none;background-color:rgba(0,0,0,0);box-shadow:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S:focus{box-shadow:none;outline:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S.L0sWBwtNiRXf1L4TcDQt{margin-left:var(--spacing-base)}.D3ebbH6XI1FHeD6HZcKP .OJ8b46rEJdBKbj1y7DPf{display:flex;align-items:center;justify-content:center;height:24px;width:24px;flex-shrink:0}.D3ebbH6XI1FHeD6HZcKP .si7WSLlOzZR9H8Pr4Hbw{cursor:pointer}.D3ebbH6XI1FHeD6HZcKP .JxInrTT3Xjd0xgF3pzrw svg{margin:0}",""]),r.locals={label:"ozPJkECzts6RTktIEHv7","input-wrapper":"D3ebbH6XI1FHeD6HZcKP",disabled:"y1XlrKLlIpOvP83oHKlS",large:"phGwlbYIiVpqQ1d4_wHs","is-textarea":"m01HDzyHTisAZoPDb3ci",input:"WEveooAUh3vBewTzzd4S","with-icon":"L0sWBwtNiRXf1L4TcDQt","icon-wrapper":"OJ8b46rEJdBKbj1y7DPf","clear-icon":"si7WSLlOzZR9H8Pr4Hbw",loader:"JxInrTT3Xjd0xgF3pzrw"};const E=r}}]);})();
