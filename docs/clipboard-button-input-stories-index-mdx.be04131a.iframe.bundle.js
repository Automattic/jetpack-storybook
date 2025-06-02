(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8262,3424],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(h,i,n)=>{"use strict";n.d(i,{R:()=>x,x:()=>f});var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},u=c.createContext(e);function x(l){const _=c.useContext(u);return c.useMemo(function(){return typeof l=="function"?l(_):{..._,...l}},[_,l])}function f(l){let _;return l.disableParentContext?_=typeof l.components=="function"?l.components(e):l.components||e:_=x(l.components),c.createElement(u.Provider,{value:_},l.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(h,i,n)=>{"use strict";n.d(i,{XI:()=>O});var c=n("storybook/internal/preview-api"),e=n("storybook/internal/preview-errors"),u=n("@storybook/global"),x=n("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),f=Object.defineProperty,l=(s,r)=>{for(var o in r)f(s,o,{get:r[o],enumerable:!0})},_="actions",y="storybook/actions",b=null,t=`${y}/action-event`,N=null,F="$___storybook.isCyclic",v={depth:10,clearOnStoryChange:!0,limit:50},Y=(s={})=>{Object.assign(v,s)},k=(s,r)=>{let o=Object.getPrototypeOf(s);return!o||r(o)?o:k(o,r)},R=s=>!!(typeof s=="object"&&s&&k(s,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof s.persist=="function"),A=s=>{if(R(s)){let r=Object.create(s.constructor.prototype,Object.getOwnPropertyDescriptors(s));r.persist();let o=Object.getOwnPropertyDescriptor(r,"view"),a=o?.value;return typeof a=="object"&&a?.constructor.name==="Window"&&Object.defineProperty(r,"view",{...o,value:Object.create(a.constructor.prototype)}),r}return s},M=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,x.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function O(s,r={}){let o={...v,...r},a=function(...p){if(r.implicit){let I=("__STORYBOOK_PREVIEW__"in u.global?u.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(E=>E.phase==="playing"||E.phase==="rendering");if(I){let E=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,P=new e.ImplicitActionsDuringRendering({phase:I.phase,name:s,deprecated:E});if(E)console.warn(P);else throw P}}let d=c.addons.getChannel(),m=M(),g=5,j=p.map(A),U=p.length>1?j:j[0],W={id:m,count:0,data:{name:s,args:U},options:{...o,maxDepth:g+(o.depth||3),allowFunction:o.allowFunction||!1}};d.emit(t,W)};return a.isAction=!0,a.implicit=r.implicit,a}var V=(...s)=>{let r=v,o=s;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(r={...v,...o.pop()});let a=o[0];(o.length!==1||typeof a=="string")&&(a={},o.forEach(d=>{a[d]=d}));let p={};return Object.keys(a).forEach(d=>{p[d]=O(a[d],r)}),p},C={};l(C,{argsEnhancers:()=>w,loaders:()=>K});var T=(s,r)=>typeof r[s]>"u"&&!(s in r),L=s=>{let{initialArgs:r,argTypes:o,id:a,parameters:{actions:p}}=s;if(!p||p.disable||!p.argTypesRegex||!o)return{};let d=new RegExp(p.argTypesRegex);return Object.entries(o).filter(([m])=>!!d.test(m)).reduce((m,[g,j])=>(T(g,r)&&(m[g]=O(g,{implicit:!0,id:a})),m),{})},B=s=>{let{initialArgs:r,argTypes:o,parameters:{actions:a}}=s;return a?.disable||!o?{}:Object.entries(o).filter(([p,d])=>!!d.action).reduce((p,[d,m])=>(T(d,r)&&(p[d]=O(typeof m.action=="string"?m.action:d)),p),{})},w=[B,L],D=!1,S=s=>{let{parameters:{actions:r}}=s;if(!r?.disable&&!D&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in u.global&&typeof u.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=u.global.__STORYBOOK_TEST_ON_MOCK_CALL__;o((a,p)=>{let d=a.getMockName();d!=="spy"&&(!/^next\/.*::/.test(d)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(m=>d.startsWith(m)))&&O(d)(p)}),D=!0}},K=[S],X=()=>definePreview(C)},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(h,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>y});var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),x=n("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),f=n("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),l=n("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function _(b){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,u.R)(),...b.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.W8,{of:l}),`
`,(0,e.jsx)(t.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,e.jsx)(t.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,e.jsx)(x.Hl,{sourceState:"shown",of:l._default}),`
`,(0,e.jsx)(t.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(t.h3,{id:"text",children:"text"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,e.jsx)(t.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,e.jsx)(t.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"function"})]}),`
`,(0,e.jsxs)(t.li,{children:["default: ",(0,e.jsx)(t.code,{children:"noop"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,e.jsx)(t.h3,{id:"resettime",children:"resetTime"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["type: ",(0,e.jsx)(t.code,{children:"number"})]}),`
`,(0,e.jsxs)(t.li,{children:["default: ",(0,e.jsx)(t.code,{children:"3000"})]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function y(b={}){const{wrapper:t}={...(0,u.R)(),...b.components};return t?(0,e.jsx)(t,{...b,children:(0,e.jsx)(_,{...b})}):_(b)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":h=>{function i(n){var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",h.exports=i},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":h=>{function i(n){var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",h.exports=i},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":h=>{function i(n){var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",h.exports=i},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(h,i,n)=>{"use strict";n.r(i),n.d(i,{__namedExportsOrder:()=>b,_default:()=>y,default:()=>l});var c=n("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),e=n("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import { action } from '@storybook/addon-actions';
import ClipboardButtonInput from '..';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Clipboard Button Input',
	component: ClipboardButtonInput,
} as Meta< typeof ClipboardButtonInput >;

const Template: StoryFn< typeof ClipboardButtonInput > = args => {
	return <ClipboardButtonInput { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	text: 'Lorem Ipsum...',
	value:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
	onCopy: action( 'onCopy' ),
	resetTime: 3000,
};
`,f={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const l={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import ClipboardButtonInput from '..';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/VideoPress/Clipboard Button Input',
  component: ClipboardButtonInput
};
const Template = args => {
  return /*#__PURE__*/_jsx(ClipboardButtonInput, {
    ...args
  });
};
export const _default = Template.bind({});
_default.args = {
  text: 'Lorem Ipsum...',
  value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
  onCopy: action('onCopy'),
  resetTime: 3000
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"Packages/VideoPress/Clipboard Button Input",component:e.A},y=(t=>(0,u.jsx)(e.A,{...t})).bind({});y.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,c.XI)("onCopy"),resetTime:3e3};const b=["_default"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...y.parameters?.docs?.source}}}}}]);
