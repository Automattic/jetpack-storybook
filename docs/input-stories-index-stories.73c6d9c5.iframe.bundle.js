"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1366],{"../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx":(W,T,e)=>{var v,b,B,l,m,s,r,n,h,f,y,w,o,c,H;e.r(T),e.d(T,{Default:()=>p,Search:()=>_,TextArea:()=>t,WithIcon:()=>u,WithLabel:()=>V,__namedExportsOrder:()=>O,default:()=>C});var d=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),k=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/icon/index.js"),L=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/map-marker.js"),j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../packages/videopress/src/client/admin/components/input/index.tsx"),x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),R=`import { action } from '@storybook/addon-actions';
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
`,K={Default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithIcon:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithLabel:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},TextArea:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},Search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}};const C={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-icon":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-label":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"text-area":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}}}},title:"Packages/VideoPress/Input",component:i.II,argTypes:{size:{options:["small","large"],control:{type:"radio"}},type:{options:["text","textarea","number","url","email","password","tel","search"],control:{type:"select"}}}},g=I=>{(0,d.aD)("onEnter")(I)},D={placeholder:"Placeholder text",disabled:!1,loading:!1,size:"small",type:"text",label:""},E=I=>{const[A,S]=(0,j.useState)(""),z=P=>{S(P)};return(0,x.jsx)(i.II,{...I,value:A,onChange:z,onEnter:g})};E.displayName="Template";const p=E.bind({});p.args=D;const u=E.bind({});u.args={...D,icon:(0,x.jsx)(k.Z,{icon:L.Z,size:24})};const V=E.bind({});V.args={...D,label:"My Label"};const t=E.bind({});t.args={...D,type:"textarea"};const a=I=>{const[A,S]=(0,j.useState)(""),z=P=>{S(P),(0,d.aD)("onChange")(P)};return(0,x.jsx)(i.Mj,{...I,value:A,onChange:z,onEnter:g})};a.displayName="SearchInputTemplate";const _=a.bind({});_.args={disabled:!1,loading:!1,onEnter:(0,d.aD)("onEnter"),onChange:(0,d.aD)("onChange"),onSearch:(0,d.aD)("onSearch"),wait:500},p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(B=(b=p.parameters)==null?void 0:b.docs)==null?void 0:B.source}}},u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(s=(m=u.parameters)==null?void 0:m.docs)==null?void 0:s.source}}},V.parameters={...V.parameters,docs:{...(r=V.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(h=(n=V.parameters)==null?void 0:n.docs)==null?void 0:h.source}}},t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}},_.parameters={..._.parameters,docs:{...(o=_.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(H=(c=_.parameters)==null?void 0:c.docs)==null?void 0:H.source}}};const O=["Default","WithIcon","WithLabel","TextArea","Search"]},"../../packages/videopress/src/client/admin/components/input/index.tsx":(W,T,e)=>{e.d(T,{II:()=>v,Mj:()=>b});var d=e("../components/components/text/index.tsx"),k=e("../components/components/icons/index.tsx"),L=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+compose@6.13.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+i18n@4.36.0/node_modules/@wordpress/i18n/build-module/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/icon/index.js"),R=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/close-small.js"),K=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),C=e.n(K),g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),D=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(D),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss"),u={};u.insert="head",u.singleton=!1;var V=E()(p.Z,u);const t=p.Z.locals||{};var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=i.__,O=l=>{let{className:m,disabled:s=!1,loading:r=!1,icon:n=null,endAdornment:h=null,onChange:f,onEnter:y,size:w="small",...o}=l;const c=(0,g.useCallback)(S=>{f!=null&&f(S.currentTarget.value)},[f]),H=(0,g.useCallback)(S=>{y!=null&&["Enter","NumpadEnter"].includes(S.code)&&y(S.currentTarget.value)},[y]),I={className:C()(t.input,{[t["with-icon"]]:n!=null}),onChange:c,onKeyUp:H,disabled:s,["aria-disabled"]:s},A=(o==null?void 0:o.type)==="textarea";return(0,a.jsx)("div",{className:C()(m,t["input-wrapper"],{[t.disabled]:s,[t.large]:w==="large",[t["is-textarea"]]:A}),children:A?(0,a.jsx)("textarea",{...o,...I}):(0,a.jsxs)(a.Fragment,{children:[r||n?(0,a.jsx)("div",{className:C()(t["icon-wrapper"],{[t.loader]:r}),children:r?(0,a.jsx)(L.ZP,{}):n}):null,(0,a.jsx)("input",{...o,...I,value:o.value}),h]})})};O.displayName="InputWrapper";const v=l=>{let{name:m,label:s,className:r,size:n="small",...h}=l;return s?(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)(d.ZP,{component:"label",variant:n==="small"?"body-small":"body",htmlFor:m,mb:1,className:t.label,children:s}),(0,a.jsx)(O,{name:m,size:n,...h})]}):(0,a.jsx)(O,{className:r,size:n,...h})},b=l=>{let{placeholder:m=_("Search your library","jetpack-videopress-pkg"),onSearch:s,wait:r=500,...n}=l;const h=(0,j.Z)(s,r),f=(0,g.useCallback)(o=>{var c;(c=n.onEnter)==null||c.call(n,o),s(o)},[n.onEnter,s]),y=(0,g.useCallback)(o=>{var c;(c=n.onChange)==null||c.call(n,o),h(o)},[n.onChange]),w=(0,g.useCallback)(()=>{var o;(o=n.onChange)==null||o.call(n,""),s("")},[n.onChange]);return(0,a.jsx)(v,{...n,icon:(0,a.jsx)(k.SearchIcon,{size:24}),placeholder:m,type:"text",onEnter:f,onChange:y,endAdornment:(0,a.jsx)(a.Fragment,{children:!!n.value&&(0,a.jsx)("div",{className:C()(t["icon-wrapper"]),children:(0,a.jsx)(x.Z,{icon:R.Z,onClick:w,className:C()(t["clear-icon"])})})})})};b.displayName="SearchInput";const B=null;try{v.displayName="Input",v.__docgenInfo={description:"Input component",displayName:"Input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#Input"]={docgenInfo:v.__docgenInfo,name:"Input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#Input"})}catch(l){}try{b.displayName="SearchInput",b.__docgenInfo={description:"Search Input component",displayName:"SearchInput",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}},onSearch:{defaultValue:null,description:"Callback to be invoked when the seacrhing",name:"onSearch",required:!0,type:{name:"(value: string) => unknown"}},wait:{defaultValue:{value:"500"},description:"The debounce time in milliseconds to wait\nbefore to invoke the `onSearch` callback.",name:"wait",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"]={docgenInfo:b.__docgenInfo,name:"SearchInput",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"})}catch(l){}try{input.displayName="input",input.__docgenInfo={description:"Input component",displayName:"input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#input"})}catch(l){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss":(W,T,e)=>{e.d(T,{Z:()=>x});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),k=e.n(d),L=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),j=e.n(L),i=j()(k());i.push([W.id,".ozPJkECzts6RTktIEHv7{cursor:auto;display:inline-block;color:var(--jp-gray-80)}.D3ebbH6XI1FHeD6HZcKP{--jp-input-wrapper-height: 40px;min-height:var(--jp-input-wrapper-height);padding:var(--spacing-base);border:1px solid var(--jp-black);border-radius:var(--jp-border-radius);background-color:var(--jp-white);display:flex;align-items:center;font-size:var(--font-body-small);box-sizing:border-box}.D3ebbH6XI1FHeD6HZcKP:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.D3ebbH6XI1FHeD6HZcKP.y1XlrKLlIpOvP83oHKlS{border-color:var(--jp-gray-10);background-color:var(--jp-gray);color:var(--jp-gray-20)}.D3ebbH6XI1FHeD6HZcKP.phGwlbYIiVpqQ1d4_wHs{padding:calc(var(--spacing-base)*2);font-size:var(--font-body)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci){height:var(--jp-input-wrapper-height)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci).phGwlbYIiVpqQ1d4_wHs{height:calc(var(--jp-input-wrapper-height) + var(--spacing-base)*2)}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S{font-size:unset;font-family:unset;width:100%;border:0;outline:none;background-color:transparent;box-shadow:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S:focus{box-shadow:none;outline:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S.L0sWBwtNiRXf1L4TcDQt{margin-left:var(--spacing-base)}.D3ebbH6XI1FHeD6HZcKP .OJ8b46rEJdBKbj1y7DPf{display:flex;align-items:center;justify-content:center;height:24px;width:24px;flex-shrink:0}.D3ebbH6XI1FHeD6HZcKP .si7WSLlOzZR9H8Pr4Hbw{cursor:pointer}.D3ebbH6XI1FHeD6HZcKP .JxInrTT3Xjd0xgF3pzrw svg{margin:0}",""]),i.locals={label:"ozPJkECzts6RTktIEHv7","input-wrapper":"D3ebbH6XI1FHeD6HZcKP",disabled:"y1XlrKLlIpOvP83oHKlS",large:"phGwlbYIiVpqQ1d4_wHs","is-textarea":"m01HDzyHTisAZoPDb3ci",input:"WEveooAUh3vBewTzzd4S","with-icon":"L0sWBwtNiRXf1L4TcDQt","icon-wrapper":"OJ8b46rEJdBKbj1y7DPf","clear-icon":"si7WSLlOzZR9H8Pr4Hbw",loader:"JxInrTT3Xjd0xgF3pzrw"};const x=i}}]);})();
