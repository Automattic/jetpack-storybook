"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5850],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(y,s,o)=>{o.d(s,{aD:()=>r.aD});var r=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),d=(...m)=>{let p=config,t=m;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(p={...config,...t.pop()});let e=t[0];(t.length!==1||typeof e=="string")&&(e={},t.forEach(a=>{e[a]=a}));let n={};return Object.keys(e).forEach(a=>{n[a]=action(e[a],p)}),n},i=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(y,s,o)=>{var u,c,l;o.r(s),o.d(s,{__namedExportsOrder:()=>a,_default:()=>n,default:()=>t});var r=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),d=o("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),i=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import { action } from '@storybook/addon-actions';
import ClipboardButtonInput from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Clipboard Button Input',
	component: ClipboardButtonInput,
} as ComponentMeta< typeof ClipboardButtonInput >;

const Template: ComponentStory< typeof ClipboardButtonInput > = args => {
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
`,p={_default:{startLoc:{col:62,line:8},endLoc:{col:1,line:10},startBody:{col:62,line:8},endBody:{col:1,line:10}}};const t={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import ClipboardButtonInput from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Clipboard Button Input',
  component: ClipboardButtonInput
} as ComponentMeta<typeof ClipboardButtonInput>);
const Template: ComponentStory<typeof ClipboardButtonInput> = args => {
  return <ClipboardButtonInput {...args} />;
};
export const _default = Template.bind({});
_default.args = {
  text: 'Lorem Ipsum...',
  value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
  onCopy: action('onCopy'),
  resetTime: 3000
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <ClipboardButtonInput {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:62,line:8},endLoc:{col:1,line:10},startBody:{col:62,line:8},endBody:{col:1,line:10}}}}},title:"Packages/VideoPress/Clipboard Button Input",component:d.Z},e=_=>(0,i.jsx)(d.Z,{..._});e.displayName="Template";const n=e.bind({});n.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,r.aD)("onCopy"),resetTime:3e3},n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const a=["_default"]}}]);})();
