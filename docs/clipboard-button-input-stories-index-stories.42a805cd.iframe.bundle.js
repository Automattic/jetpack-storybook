"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3424],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(v,p,r)=>{r.d(p,{XI:()=>O});var m=r("storybook/internal/preview-api"),l=r("storybook/internal/preview-errors"),c=r("@storybook/global"),_=r("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),C="actions",y="storybook/actions",x=null,s=`${y}/action-event`,b=null,g="$___storybook.isCyclic",u={depth:10,clearOnStoryChange:!0,limit:50},L=(e={})=>{Object.assign(u,e)},f=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:f(t,o)},k=e=>!!(typeof e=="object"&&e&&f(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),D=e=>{if(k(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),n=t?.value;return typeof n=="object"&&n?.constructor.name==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(n.constructor.prototype)}),o}return e},A=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,_.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function O(e,o={}){let t={...u,...o},n=function(...i){if(o.implicit){let I=("__STORYBOOK_PREVIEW__"in c.global?c.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(I){let d=!window?.FEATURES?.disallowImplicitActionsInRenderV8,h=new l.ImplicitActionsDuringRendering({phase:I.phase,name:e,deprecated:d});if(d)console.warn(h);else throw h}}let a=m.addons.getChannel(),P=A(),R=5,E=i.map(D),B=i.length>1?E:E[0],j={id:P,count:0,data:{name:e,args:B},options:{...t,maxDepth:R+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(s,j)};return n.isAction=!0,n.implicit=o.implicit,n}var T=(...e)=>{let o=u,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(o={...u,...t.pop()});let n=t[0];(t.length!==1||typeof n=="string")&&(n={},t.forEach(a=>{n[a]=a}));let i={};return Object.keys(n).forEach(a=>{i[a]=O(n[a],o)}),i}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(v,p,r)=>{r.r(p),r.d(p,{__namedExportsOrder:()=>b,_default:()=>s,default:()=>y});var m=r("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),l=r("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),c=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=`import { action } from '@storybook/addon-actions';
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
`,C={_default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}};const y={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:1,line:12},startBody:{col:17,line:8},endBody:{col:1,line:12}}}}},title:"Packages/VideoPress/Clipboard Button Input",component:l.A},s=(g=>(0,c.jsx)(l.A,{...g})).bind({});s.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,m.XI)("onCopy"),resetTime:3e3};const b=["_default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...s.parameters?.docs?.source}}}}}]);
