"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8406],{"../components/components/jetpack-footer/stories/index.stories.tsx":(d,o,n)=>{n.r(o),n.d(o,{WithMenu:()=>e,__namedExportsOrder:()=>m,_default:()=>t,default:()=>c});var a=n("../components/components/jetpack-footer/index.tsx"),s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=`import JetpackFooter from '../index';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Jetpack Footer',
	component: JetpackFooter,
} as Meta< typeof JetpackFooter >;

const Template: StoryFn< typeof JetpackFooter > = args => <JetpackFooter { ...args } />;

const DefaultArgs = {
	moduleName: 'Jetpack',
	className: '',
	moduleNameHref: 'https://jetpack.com',
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	menu: [
		{
			label: 'Menu Item',
			href: '#',
		},
		{
			label: 'External Menu Item',
			href: '#',
			target: '_blank',
		},
		{
			label: 'Menu Item With Title',
			title: 'Hello, World!',
			href: '#',
		},
	],
};
`,i={_default:{startLoc:{col:17,line:7},endLoc:{col:2,line:9},startBody:{col:17,line:7},endBody:{col:2,line:9}},WithMenu:{startLoc:{col:17,line:7},endLoc:{col:2,line:9},startBody:{col:17,line:7},endBody:{col:2,line:9}}};const c={parameters:{storySource:{source:`import JetpackFooter from '../index';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Jetpack Footer',
  component: JetpackFooter
};
const Template = args => /*#__PURE__*/_jsx(JetpackFooter, {
  ...args
});
const DefaultArgs = {
  moduleName: 'Jetpack',
  className: '',
  moduleNameHref: 'https://jetpack.com'
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const WithMenu = Template.bind({});
WithMenu.args = {
  ...DefaultArgs,
  menu: [{
    label: 'Menu Item',
    href: '#'
  }, {
    label: 'External Menu Item',
    href: '#',
    target: '_blank'
  }, {
    label: 'Menu Item With Title',
    title: 'Hello, World!',
    href: '#'
  }]
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:2,line:9},startBody:{col:17,line:7},endBody:{col:2,line:9}},"with-menu":{startLoc:{col:17,line:7},endLoc:{col:2,line:9},startBody:{col:17,line:7},endBody:{col:2,line:9}}}}},title:"JS Packages/Components/Jetpack Footer",component:a.A},r=p=>(0,s.jsx)(a.A,{...p}),l={moduleName:"Jetpack",className:"",moduleNameHref:"https://jetpack.com"},t=r.bind({});t.args=l;const e=r.bind({});e.args={...l,menu:[{label:"Menu Item",href:"#"},{label:"External Menu Item",href:"#",target:"_blank"},{label:"Menu Item With Title",title:"Hello, World!",href:"#"}]};const m=["_default","WithMenu"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...t.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...e.parameters?.docs?.source}}}}}]);
