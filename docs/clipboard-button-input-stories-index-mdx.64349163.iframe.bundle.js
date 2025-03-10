(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8262,3424],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(m,n,o)=>{"use strict";o.d(n,{R:()=>y,x:()=>f});var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},p=r.createContext(e);function y(i){const l=r.useContext(p);return r.useMemo(function(){return typeof i=="function"?i(l):{...l,...i}},[l,i])}function f(i){let l;return i.disableParentContext?l=typeof i.components=="function"?i.components(e):i.components||e:l=y(i.components),r.createElement(p.Provider,{value:l},i.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(m,n,o)=>{"use strict";o.d(n,{XI:()=>j});var r=o("storybook/internal/preview-api"),e=o("storybook/internal/preview-errors"),p=o("@storybook/global"),y=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),f="actions",i="storybook/actions",l=null,u=`${i}/action-event`,_=null,t="$___storybook.isCyclic",O={depth:10,clearOnStoryChange:!0,limit:50},A=(d={})=>{Object.assign(O,d)},E=(d,a)=>{let s=Object.getPrototypeOf(d);return!s||a(s)?s:E(s,a)},C=d=>!!(typeof d=="object"&&d&&E(d,a=>/^Synthetic(?:Base)?Event$/.test(a.constructor.name))&&typeof d.persist=="function"),D=d=>{if(C(d)){let a=Object.create(d.constructor.prototype,Object.getOwnPropertyDescriptors(d));a.persist();let s=Object.getOwnPropertyDescriptor(a,"view"),c=s?.value;return typeof c=="object"&&c?.constructor.name==="Window"&&Object.defineProperty(a,"view",{...s,value:Object.create(c.constructor.prototype)}),a}return d},I=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,y.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function j(d,a={}){let s={...O,...a},c=function(...b){if(a.implicit){let v=("__STORYBOOK_PREVIEW__"in p.global?p.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(x=>x.phase==="playing"||x.phase==="rendering");if(v){let x=!window?.FEATURES?.disallowImplicitActionsInRenderV8,g=new e.ImplicitActionsDuringRendering({phase:v.phase,name:d,deprecated:x});if(x)console.warn(g);else throw g}}let h=r.addons.getChannel(),P=I(),M=5,k=b.map(D),R=b.length>1?k:k[0],T={id:P,count:0,data:{name:d,args:R},options:{...s,maxDepth:M+(s.depth||3),allowFunction:s.allowFunction||!1}};h.emit(u,T)};return c.isAction=!0,c.implicit=a.implicit,c}var L=(...d)=>{let a=O,s=d;s.length===1&&Array.isArray(s[0])&&([s]=s),s.length!==1&&typeof s[s.length-1]!="string"&&(a={...O,...s.pop()});let c=s[0];(s.length!==1||typeof c=="string")&&(c={},s.forEach(h=>{c[h]=h}));let b={};return Object.keys(c).forEach(h=>{b[h]=j(c[h],a)}),b}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(m,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>u});var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),p=o("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),y=o("../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist/index.mjs"),f=o("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),i=o("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function l(_){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,p.R)(),..._.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y.W8,{of:i}),`
`,(0,e.jsx)(t.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,e.jsx)(t.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,e.jsx)(y.Hl,{sourceState:"shown",of:i._default}),`
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
`,(0,e.jsx)(t.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function u(_={}){const{wrapper:t}={...(0,p.R)(),..._.components};return t?(0,e.jsx)(t,{..._,children:(0,e.jsx)(l,{..._})}):l(_)}},"../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive":m=>{function n(o){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive",m.exports=n},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive":m=>{function n(o){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive",m.exports=n},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive":m=>{function n(o){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive",m.exports=n},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(m,n,o)=>{"use strict";o.r(n),o.d(n,{__namedExportsOrder:()=>_,_default:()=>u,default:()=>i});var r=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),e=o("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),p=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=`import { action } from '@storybook/addon-actions';
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
`,f={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const i={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"Packages/VideoPress/Clipboard Button Input",component:e.A},u=(t=>(0,p.jsx)(e.A,{...t})).bind({});u.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,r.XI)("onCopy"),resetTime:3e3};const _=["_default"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...u.parameters?.docs?.source}}}}}]);
