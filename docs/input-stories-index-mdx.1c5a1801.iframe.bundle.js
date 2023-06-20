"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9618,1366],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(P,h,n)=>{n.d(h,{NF:()=>d,Zo:()=>v,ah:()=>i,pC:()=>e});var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=l.createContext({});function d(a){return r;function r(m){const s=i(m.components);return l.createElement(a,{...m,allComponents:s})}}function i(a){const r=l.useContext(e);return l.useMemo(()=>typeof a=="function"?a(r):{...r,...a},[r,a])}const _={};function v({components:a,children:r,disableParentContext:m}){let s;return m?s=typeof a=="function"?a({}):a||_:s=i(a),l.createElement(e.Provider,{value:s},r)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(P,h,n)=>{n.d(h,{_:()=>i,r:()=>v});var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/@storybook+react-dom-shim@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),d=n("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i={code:d.bD,a:d.Ct,...d.lO},_=class extends l.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(a){let{showException:r}=this.props;r(a)}render(){let{hasError:a}=this.state,{children:r}=this.props;return a?null:r}},v=class{constructor(){this.render=async(a,r,m)=>{let s={...i,...r==null?void 0:r.components};return new Promise((t,C)=>{n.e(2002).then(n.bind(n,"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:x})=>(0,e.l)(l.createElement(_,{showException:C,key:Math.random()},l.createElement(x,{components:s},l.createElement(d.WI,{context:a,docsParameter:r}))),m)).then(t)})},this.unmount=a=>{(0,e.K)(a)}}}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs":(P,h,n)=>{n.d(h,{Hw:()=>d.Hw,Xz:()=>d.Xz,h_:()=>d.h_,oG:()=>d.oG});var l=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),e=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs"),d=n("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs")},"../../packages/videopress/src/client/admin/components/input/stories/index.mdx":(P,h,n)=>{n.r(h),n.d(h,{default:()=>m});var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=n("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),i=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),_=n("../../packages/videopress/src/client/admin/components/input/index.tsx"),v=n("../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx");function a(s){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",hr:"hr"},(0,d.ah)(),s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h_,{of:v}),`
`,(0,e.jsx)(t.h1,{id:"input",children:"Input"}),`
`,(0,e.jsx)(t.p,{children:"A simple input field."}),`
`,(0,e.jsx)(i.Xz,{withSource:"open",children:(0,e.jsx)(i.oG,{id:"packages-videopress-input--default"})}),`
`,(0,e.jsx)(t.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(t.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"The input value."}),`
`,(0,e.jsx)(t.h3,{id:"placeholder",children:"placeholder"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"The input placeholder."}),`
`,(0,e.jsx)(t.h3,{id:"disabled",children:"disabled"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"boolean"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"Whether the input is disabled."}),`
`,(0,e.jsx)(t.h3,{id:"icon",children:"icon"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"An optional icon."}),`
`,(0,e.jsx)(t.h3,{id:"onchange",children:"onChange"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"function"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"Callback to be invoked when the input value changes."}),`
`,(0,e.jsx)(t.h3,{id:"onenter",children:"onEnter"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"function"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"Callback to be invoked when the user presses the Enter key."}),`
`,(0,e.jsx)(t.hr,{}),`
`,(0,e.jsx)(t.h1,{id:"searchinput",children:"SearchInput"}),`
`,(0,e.jsx)(t.p,{children:"A search input field."}),`
`,(0,e.jsx)(i.Xz,{withSource:"open",children:(0,e.jsx)(i.oG,{id:"packages-videopress-input--search"})})]})}function r(s={}){const{wrapper:t}=Object.assign({},(0,d.ah)(),s.components);return t?(0,e.jsx)(t,Object.assign({},s,{children:(0,e.jsx)(a,s)})):a(s)}const m=r},"../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx":(P,h,n)=>{var D,T,H,y,j,g,b,o,I,k,V,M,p,E,R;n.r(h),n.d(h,{Default:()=>x,Search:()=>S,TextArea:()=>u,WithIcon:()=>f,WithLabel:()=>L,__namedExportsOrder:()=>W,default:()=>m});var l=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),e=n("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/map-marker.js"),i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=n("../../packages/videopress/src/client/admin/components/input/index.tsx"),v=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import { action } from '@storybook/addon-actions';
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
`,r={Default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithIcon:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},WithLabel:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},TextArea:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},Search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}};const m={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-icon":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"with-label":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},"text-area":{startLoc:{col:47,line:35},endLoc:{col:1,line:41},startBody:{col:47,line:35},endBody:{col:1,line:41}},search:{startLoc:{col:64,line:59},endLoc:{col:1,line:66},startBody:{col:64,line:59},endBody:{col:1,line:66}}}}},title:"Packages/VideoPress/Input",component:_.II,argTypes:{size:{options:["small","large"],control:{type:"radio"}},type:{options:["text","textarea","number","url","email","password","tel","search"],control:{type:"select"}}}},s=A=>{(0,l.aD)("onEnter")(A)},t={placeholder:"Placeholder text",disabled:!1,loading:!1,size:"small",type:"text",label:""},C=A=>{const[w,O]=(0,i.useState)(""),K=B=>{O(B)};return(0,v.jsx)(_.II,{...A,value:w,onChange:K,onEnter:s})};C.displayName="Template";const x=C.bind({});x.args=t;const f=C.bind({});f.args={...t,icon:(0,v.jsx)(e.Z,{icon:d.Z,size:24})};const L=C.bind({});L.args={...t,label:"My Label"};const u=C.bind({});u.args={...t,type:"textarea"};const c=A=>{const[w,O]=(0,i.useState)(""),K=B=>{O(B),(0,l.aD)("onChange")(B)};return(0,v.jsx)(_.Mj,{...A,value:w,onChange:K,onEnter:s})};c.displayName="SearchInputTemplate";const S=c.bind({});S.args={disabled:!1,loading:!1,onEnter:(0,l.aD)("onEnter"),onChange:(0,l.aD)("onChange"),onSearch:(0,l.aD)("onSearch"),wait:500},x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(H=(T=x.parameters)==null?void 0:T.docs)==null?void 0:H.source}}},f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(g=(j=f.parameters)==null?void 0:j.docs)==null?void 0:g.source}}},L.parameters={...L.parameters,docs:{...(b=L.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(I=(o=L.parameters)==null?void 0:o.docs)==null?void 0:I.source}}},u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(M=(V=u.parameters)==null?void 0:V.docs)==null?void 0:M.source}}},S.parameters={...S.parameters,docs:{...(p=S.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(R=(E=S.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const W=["Default","WithIcon","WithLabel","TextArea","Search"]},"../../packages/videopress/src/client/admin/components/input/index.tsx":(P,h,n)=>{n.d(h,{II:()=>D,Mj:()=>T});var l=n("../components/components/text/index.tsx"),e=n("../components/components/icons/index.tsx"),d=n("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),i=n("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),_=n("../../../node_modules/.pnpm/@wordpress+i18n@4.35.0/node_modules/@wordpress/i18n/build-module/index.js"),v=n("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=n("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/close-small.js"),r=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=n.n(r),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=n.n(t),x=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss"),f={};f.insert="head",f.singleton=!1;var L=C()(x.Z,f);const u=x.Z.locals||{};var c=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=_.__,W=y=>{let{className:j,disabled:g=!1,loading:b=!1,icon:o=null,endAdornment:I=null,onChange:k,onEnter:V,size:M="small",...p}=y;const E=(0,s.useCallback)(O=>{k!=null&&k(O.currentTarget.value)},[k]),R=(0,s.useCallback)(O=>{V!=null&&["Enter","NumpadEnter"].includes(O.code)&&V(O.currentTarget.value)},[V]),A={className:m()(u.input,{[u["with-icon"]]:o!=null}),onChange:E,onKeyUp:R,disabled:g,["aria-disabled"]:g},w=(p==null?void 0:p.type)==="textarea";return(0,c.jsx)("div",{className:m()(j,u["input-wrapper"],{[u.disabled]:g,[u.large]:M==="large",[u["is-textarea"]]:w}),children:w?(0,c.jsx)("textarea",{...p,...A}):(0,c.jsxs)(c.Fragment,{children:[b||o?(0,c.jsx)("div",{className:m()(u["icon-wrapper"],{[u.loader]:b}),children:b?(0,c.jsx)(d.ZP,{}):o}):null,(0,c.jsx)("input",{...p,...A,value:p.value}),I]})})};W.displayName="InputWrapper";const D=y=>{let{name:j,label:g,className:b,size:o="small",...I}=y;return g?(0,c.jsxs)("div",{className:b,children:[(0,c.jsx)(l.ZP,{component:"label",variant:o==="small"?"body-small":"body",htmlFor:j,mb:1,className:u.label,children:g}),(0,c.jsx)(W,{name:j,size:o,...I})]}):(0,c.jsx)(W,{className:b,size:o,...I})},T=y=>{let{placeholder:j=S("Search your library","jetpack-videopress-pkg"),onSearch:g,wait:b=500,...o}=y;const I=(0,i.Z)(g,b),k=(0,s.useCallback)(p=>{var E;(E=o.onEnter)==null||E.call(o,p),g(p)},[o.onEnter,g]),V=(0,s.useCallback)(p=>{var E;(E=o.onChange)==null||E.call(o,p),I(p)},[o.onChange]),M=(0,s.useCallback)(()=>{var p;(p=o.onChange)==null||p.call(o,""),g("")},[o.onChange]);return(0,c.jsx)(D,{...o,icon:(0,c.jsx)(e.SearchIcon,{size:24}),placeholder:j,type:"text",onEnter:k,onChange:V,endAdornment:(0,c.jsx)(c.Fragment,{children:!!o.value&&(0,c.jsx)("div",{className:m()(u["icon-wrapper"]),children:(0,c.jsx)(v.Z,{icon:a.Z,onClick:M,className:m()(u["clear-icon"])})})})})};T.displayName="SearchInput";const H=null;try{D.displayName="Input",D.__docgenInfo={description:"Input component",displayName:"Input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#Input"]={docgenInfo:D.__docgenInfo,name:"Input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#Input"})}catch(y){}try{T.displayName="SearchInput",T.__docgenInfo={description:"Search Input component",displayName:"SearchInput",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}},onSearch:{defaultValue:null,description:"Callback to be invoked when the seacrhing",name:"onSearch",required:!0,type:{name:"(value: string) => unknown"}},wait:{defaultValue:{value:"500"},description:"The debounce time in milliseconds to wait\nbefore to invoke the `onSearch` callback.",name:"wait",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"]={docgenInfo:T.__docgenInfo,name:"SearchInput",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"})}catch(y){}try{input.displayName="input",input.__docgenInfo={description:"Input component",displayName:"input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#input"})}catch(y){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss":(P,h,n)=>{n.d(h,{Z:()=>v});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(l),d=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=n.n(d),_=i()(e());_.push([P.id,".ozPJkECzts6RTktIEHv7{cursor:auto;display:inline-block;color:var(--jp-gray-80)}.D3ebbH6XI1FHeD6HZcKP{--jp-input-wrapper-height: 40px;min-height:var(--jp-input-wrapper-height);padding:var(--spacing-base);border:1px solid var(--jp-black);border-radius:var(--jp-border-radius);background-color:var(--jp-white);display:flex;align-items:center;font-size:var(--font-body-small);box-sizing:border-box}.D3ebbH6XI1FHeD6HZcKP:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.D3ebbH6XI1FHeD6HZcKP.y1XlrKLlIpOvP83oHKlS{border-color:var(--jp-gray-10);background-color:var(--jp-gray);color:var(--jp-gray-20)}.D3ebbH6XI1FHeD6HZcKP.phGwlbYIiVpqQ1d4_wHs{padding:calc(var(--spacing-base)*2);font-size:var(--font-body)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci){height:var(--jp-input-wrapper-height)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci).phGwlbYIiVpqQ1d4_wHs{height:calc(var(--jp-input-wrapper-height) + var(--spacing-base)*2)}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S{font-size:unset;font-family:unset;width:100%;border:0;outline:none;background-color:transparent;box-shadow:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S:focus{box-shadow:none;outline:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S.L0sWBwtNiRXf1L4TcDQt{margin-left:var(--spacing-base)}.D3ebbH6XI1FHeD6HZcKP .OJ8b46rEJdBKbj1y7DPf{display:flex;align-items:center;justify-content:center;height:24px;width:24px;flex-shrink:0}.D3ebbH6XI1FHeD6HZcKP .si7WSLlOzZR9H8Pr4Hbw{cursor:pointer}.D3ebbH6XI1FHeD6HZcKP .JxInrTT3Xjd0xgF3pzrw svg{margin:0}",""]),_.locals={label:"ozPJkECzts6RTktIEHv7","input-wrapper":"D3ebbH6XI1FHeD6HZcKP",disabled:"y1XlrKLlIpOvP83oHKlS",large:"phGwlbYIiVpqQ1d4_wHs","is-textarea":"m01HDzyHTisAZoPDb3ci",input:"WEveooAUh3vBewTzzd4S","with-icon":"L0sWBwtNiRXf1L4TcDQt","icon-wrapper":"OJ8b46rEJdBKbj1y7DPf","clear-icon":"si7WSLlOzZR9H8Pr4Hbw",loader:"JxInrTT3Xjd0xgF3pzrw"};const v=_}}]);})();
