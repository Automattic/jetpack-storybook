"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9618,1366,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(S,g,t)=>{t.r(g),t.d(g,{MDXContext:()=>e,MDXProvider:()=>y,useMDXComponents:()=>x,withMDXComponents:()=>v});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=d.createContext({});function v(c){return m;function m(s){const a=x(s.components);return d.createElement(c,{...s,allComponents:a})}}function x(c){const m=d.useContext(e);return d.useMemo(()=>typeof c=="function"?c(m):{...m,...c},[m,c])}const r={};function y({components:c,children:m,disableParentContext:s}){let a;return s?a=typeof c=="function"?c({}):c||r:a=x(c),d.createElement(e.Provider,{value:a},m)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(S,g,t)=>{var d=Object.defineProperty,e=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,x=Object.prototype.hasOwnProperty,r=(s,a,i,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let h of v(a))!x.call(s,h)&&h!==i&&d(s,h,{get:()=>a[h],enumerable:!(n=e(a,h))||n.enumerable});return s},y=(s,a,i)=>(r(s,a,"default"),i&&r(i,a,"default")),c=s=>r(d({},"__esModule",{value:!0}),s),m={};S.exports=c(m),y(m,t("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),S.exports)},"../../packages/videopress/src/client/admin/components/input/stories/index.mdx":(S,g,t)=>{t.r(g),t.d(g,{default:()=>a});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),x=t.n(v),r=t("../../../node_modules/.pnpm/@storybook+blocks@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),y=t("../../packages/videopress/src/client/admin/components/input/index.tsx"),c=t("../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx");function m(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",hr:"hr"},(0,v.useMDXComponents)(),i.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.h_,{of:c}),`
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
`,(0,e.jsx)(r.Xz,{withSource:"open",children:(0,e.jsx)(r.oG,{id:"packages-videopress-input--search"})})]})}function s(i={}){const{wrapper:n}=Object.assign({},(0,v.useMDXComponents)(),i.components);return n?(0,e.jsx)(n,Object.assign({},i,{children:(0,e.jsx)(m,i)})):m(i)}const a=s},"../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx":(S,g,t)=>{var T,V,R,b,E,_,f,o,I,k,O,L,p,j,W;t.r(g),t.d(g,{Default:()=>h,Search:()=>D,TextArea:()=>u,WithIcon:()=>C,WithLabel:()=>w,__namedExportsOrder:()=>H,default:()=>s});var d=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),e=t("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),v=t("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/map-marker.js"),x=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../packages/videopress/src/client/admin/components/input/index.tsx"),y=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import { action } from '@storybook/addon-actions';
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
`,m={Default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithIcon:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithLabel:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},TextArea:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},Search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}};const s={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-icon":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-label":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"text-area":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}}}},title:"Packages/VideoPress/Input",component:r.II,argTypes:{size:{options:["small","large"],control:{type:"radio"}},type:{options:["text","textarea","number","url","email","password","tel","search"],control:{type:"select"}}}},a=P=>{(0,d.aD)("onEnter")(P)},i={placeholder:"Placeholder text",disabled:!1,loading:!1,size:"small",type:"text",label:""},n=P=>{const[M,A]=(0,x.useState)(""),z=B=>{A(B)};return(0,y.jsx)(r.II,{...P,value:M,onChange:z,onEnter:a})};n.displayName="Template";const h=n.bind({});h.args=i;const C=n.bind({});C.args={...i,icon:(0,y.jsx)(e.Z,{icon:v.Z,size:24})};const w=n.bind({});w.args={...i,label:"My Label"};const u=n.bind({});u.args={...i,type:"textarea"};const l=P=>{const[M,A]=(0,x.useState)(""),z=B=>{A(B),(0,d.aD)("onChange")(B)};return(0,y.jsx)(r.Mj,{...P,value:M,onChange:z,onEnter:a})};l.displayName="SearchInputTemplate";const D=l.bind({});D.args={disabled:!1,loading:!1,onEnter:(0,d.aD)("onEnter"),onChange:(0,d.aD)("onChange"),onSearch:(0,d.aD)("onSearch"),wait:500},h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(R=(V=h.parameters)==null?void 0:V.docs)==null?void 0:R.source}}},C.parameters={...C.parameters,docs:{...(b=C.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(_=(E=C.parameters)==null?void 0:E.docs)==null?void 0:_.source}}},w.parameters={...w.parameters,docs:{...(f=w.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(I=(o=w.parameters)==null?void 0:o.docs)==null?void 0:I.source}}},u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(L=(O=u.parameters)==null?void 0:O.docs)==null?void 0:L.source}}},D.parameters={...D.parameters,docs:{...(p=D.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(W=(j=D.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const H=["Default","WithIcon","WithLabel","TextArea","Search"]},"../../packages/videopress/src/client/admin/components/input/index.tsx":(S,g,t)=>{t.d(g,{II:()=>T,Mj:()=>V});var d=t("../components/components/text/index.tsx"),e=t("../components/components/icons/index.tsx"),v=t("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),x=t("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),y=t("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/close-small.js"),m=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=t.n(m),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(i),h=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss"),C={};C.insert="head",C.singleton=!1;var w=n()(h.Z,C);const u=h.Z.locals||{};var l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const D=r.__,H=b=>{let{className:E,disabled:_=!1,loading:f=!1,icon:o=null,endAdornment:I=null,onChange:k,onEnter:O,size:L="small",...p}=b;const j=(0,a.useCallback)(A=>{k!=null&&k(A.currentTarget.value)},[k]),W=(0,a.useCallback)(A=>{O!=null&&["Enter","NumpadEnter"].includes(A.code)&&O(A.currentTarget.value)},[O]),P={className:s()(u.input,{[u["with-icon"]]:o!=null}),onChange:j,onKeyUp:W,disabled:_,["aria-disabled"]:_},M=(p==null?void 0:p.type)==="textarea";return(0,l.jsx)("div",{className:s()(E,u["input-wrapper"],{[u.disabled]:_,[u.large]:L==="large",[u["is-textarea"]]:M}),children:M?(0,l.jsx)("textarea",{...p,...P}):(0,l.jsxs)(l.Fragment,{children:[f||o?(0,l.jsx)("div",{className:s()(u["icon-wrapper"],{[u.loader]:f}),children:f?(0,l.jsx)(v.ZP,{}):o}):null,(0,l.jsx)("input",{...p,...P,value:p.value}),I]})})};H.displayName="InputWrapper";const T=b=>{let{name:E,label:_,className:f,size:o="small",...I}=b;return _?(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)(d.ZP,{component:"label",variant:o==="small"?"body-small":"body",htmlFor:E,mb:1,className:u.label,children:_}),(0,l.jsx)(H,{name:E,size:o,...I})]}):(0,l.jsx)(H,{className:f,size:o,...I})},V=b=>{let{placeholder:E=D("Search your library","jetpack-videopress-pkg"),onSearch:_,wait:f=500,...o}=b;const I=(0,x.Z)(_,f),k=(0,a.useCallback)(p=>{var j;(j=o.onEnter)==null||j.call(o,p),_(p)},[o.onEnter,_]),O=(0,a.useCallback)(p=>{var j;(j=o.onChange)==null||j.call(o,p),I(p)},[o.onChange]),L=(0,a.useCallback)(()=>{var p;(p=o.onChange)==null||p.call(o,""),_("")},[o.onChange]);return(0,l.jsx)(T,{...o,icon:(0,l.jsx)(e.SearchIcon,{size:24}),placeholder:E,type:"text",onEnter:k,onChange:O,endAdornment:(0,l.jsx)(l.Fragment,{children:!!o.value&&(0,l.jsx)("div",{className:s()(u["icon-wrapper"]),children:(0,l.jsx)(y.Z,{icon:c.Z,onClick:L,className:s()(u["clear-icon"])})})})})};V.displayName="SearchInput";const R=null;try{T.displayName="Input",T.__docgenInfo={description:"Input component",displayName:"Input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"search"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#Input"]={docgenInfo:T.__docgenInfo,name:"Input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#Input"})}catch(b){}try{V.displayName="SearchInput",V.__docgenInfo={description:"Search Input component",displayName:"SearchInput",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}},onSearch:{defaultValue:null,description:"Callback to be invoked when the seacrhing",name:"onSearch",required:!0,type:{name:"(value: string) => unknown"}},wait:{defaultValue:{value:"500"},description:"The debounce time in milliseconds to wait\nbefore to invoke the `onSearch` callback.",name:"wait",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"]={docgenInfo:V.__docgenInfo,name:"SearchInput",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"})}catch(b){}try{input.displayName="input",input.__docgenInfo={description:"Input component",displayName:"input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"search"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#input"})}catch(b){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss":(S,g,t)=>{t.d(g,{Z:()=>y});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(d),v=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),x=t.n(v),r=x()(e());r.push([S.id,".ozPJkECzts6RTktIEHv7{cursor:auto;display:inline-block;color:var(--jp-gray-80)}.D3ebbH6XI1FHeD6HZcKP{--jp-input-wrapper-height: 40px;min-height:var(--jp-input-wrapper-height);padding:var(--spacing-base);border:1px solid var(--jp-black);border-radius:var(--jp-border-radius);background-color:var(--jp-white);display:flex;align-items:center;font-size:var(--font-body-small);box-sizing:border-box}.D3ebbH6XI1FHeD6HZcKP:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.D3ebbH6XI1FHeD6HZcKP.y1XlrKLlIpOvP83oHKlS{border-color:var(--jp-gray-10);background-color:var(--jp-gray);color:var(--jp-gray-20)}.D3ebbH6XI1FHeD6HZcKP.phGwlbYIiVpqQ1d4_wHs{padding:calc(var(--spacing-base)*2);font-size:var(--font-body)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci){height:var(--jp-input-wrapper-height)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci).phGwlbYIiVpqQ1d4_wHs{height:calc(var(--jp-input-wrapper-height) + var(--spacing-base)*2)}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S{font-size:unset;font-family:unset;width:100%;border:0;outline:none;background-color:transparent;box-shadow:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S:focus{box-shadow:none;outline:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S.L0sWBwtNiRXf1L4TcDQt{margin-left:var(--spacing-base)}.D3ebbH6XI1FHeD6HZcKP .OJ8b46rEJdBKbj1y7DPf{display:flex;align-items:center;justify-content:center;height:24px;width:24px;flex-shrink:0}.D3ebbH6XI1FHeD6HZcKP .si7WSLlOzZR9H8Pr4Hbw{cursor:pointer}.D3ebbH6XI1FHeD6HZcKP .JxInrTT3Xjd0xgF3pzrw svg{margin:0}",""]),r.locals={label:"ozPJkECzts6RTktIEHv7","input-wrapper":"D3ebbH6XI1FHeD6HZcKP",disabled:"y1XlrKLlIpOvP83oHKlS",large:"phGwlbYIiVpqQ1d4_wHs","is-textarea":"m01HDzyHTisAZoPDb3ci",input:"WEveooAUh3vBewTzzd4S","with-icon":"L0sWBwtNiRXf1L4TcDQt","icon-wrapper":"OJ8b46rEJdBKbj1y7DPf","clear-icon":"si7WSLlOzZR9H8Pr4Hbw",loader:"JxInrTT3Xjd0xgF3pzrw"};const y=r}}]);})();
