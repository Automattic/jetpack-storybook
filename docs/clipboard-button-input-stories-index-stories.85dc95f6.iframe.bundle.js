"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3424],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(k,m,a)=>{a.d(m,{XI:()=>p});var g=a("storybook/internal/preview-api"),_=a("storybook/internal/preview-errors"),l=a("@storybook/global"),h=a("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),E=Object.defineProperty,O=(e,o)=>{for(var t in o)E(e,t,{get:o[t],enumerable:!0})},L="actions",d="storybook/actions",x=null,b=`${d}/action-event`,V=null,W="$___storybook.isCyclic",y={depth:10,clearOnStoryChange:!0,limit:50},U=(e={})=>{Object.assign(y,e)},v=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:v(t,o)},P=e=>!!(typeof e=="object"&&e&&v(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),B=e=>{if(P(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),r=t?.value;return typeof r=="object"&&r?.constructor.name==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(r.constructor.prototype)}),o}return e},D=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,h.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(e,o={}){let t={...y,...o},r=function(...s){if(o.implicit){let A=("__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(A){let u=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,R=new _.ImplicitActionsDuringRendering({phase:A.phase,name:e,deprecated:u});if(u)console.warn(R);else throw R}}let n=g.addons.getChannel(),i=D(),c=5,f=s.map(B),Y=s.length>1?f:f[0],N={id:i,count:0,data:{name:e,args:Y},options:{...t,maxDepth:c+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(b,N)};return r.isAction=!0,r.implicit=o.implicit,r}var F=(...e)=>{let o=y,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(o={...y,...t.pop()});let r=t[0];(t.length!==1||typeof r=="string")&&(r={},t.forEach(n=>{r[n]=n}));let s={};return Object.keys(r).forEach(n=>{s[n]=p(r[n],o)}),s},I={};O(I,{argsEnhancers:()=>w,loaders:()=>K});var T=(e,o)=>typeof o[e]>"u"&&!(e in o),j=e=>{let{initialArgs:o,argTypes:t,id:r,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!t)return{};let n=new RegExp(s.argTypesRegex);return Object.entries(t).filter(([i])=>!!n.test(i)).reduce((i,[c,f])=>(T(c,o)&&(i[c]=p(c,{implicit:!0,id:r})),i),{})},S=e=>{let{initialArgs:o,argTypes:t,parameters:{actions:r}}=e;return r?.disable||!t?{}:Object.entries(t).filter(([s,n])=>!!n.action).reduce((s,[n,i])=>(T(n,o)&&(s[n]=p(typeof i.action=="string"?i.action:n)),s),{})},w=[S,j],C=!1,M=e=>{let{parameters:{actions:o}}=e;if(!o?.disable&&!C&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in l.global&&typeof l.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=l.global.__STORYBOOK_TEST_ON_MOCK_CALL__;t((r,s)=>{let n=r.getMockName();n!=="spy"&&(!/^next\/.*::/.test(n)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>n.startsWith(i)))&&p(n)(s)}),C=!0}},K=[M],$=()=>definePreview(I)},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(k,m,a)=>{a.r(m),a.d(m,{__namedExportsOrder:()=>x,_default:()=>d,default:()=>O});var g=a("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),_=a("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=`import { action } from '@storybook/addon-actions';
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
`,E={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const O={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"Packages/VideoPress/Clipboard Button Input",component:_.A},d=(b=>(0,l.jsx)(_.A,{...b})).bind({});d.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,g.XI)("onCopy"),resetTime:3e3};const x=["_default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...d.parameters?.docs?.source}}}}}]);
