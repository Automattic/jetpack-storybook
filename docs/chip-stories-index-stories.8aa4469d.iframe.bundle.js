"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4978],{"../components/components/chip/stories/index.stories.tsx":(c,a,s)=>{s.r(a),s.d(a,{__namedExportsOrder:()=>j,_default:()=>l,default:()=>y});var _=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=s.n(p),o=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/chip/style.module.scss"),t={};t.insert="head",t.singleton=!1;var n=e()(o.A,t);const d=o.A.locals||{};var i=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({type:m="info",text:f})=>{const x=(0,r.A)(d.chip,d[`is-${m}`]);return(0,i.jsx)("span",{className:x,children:f})};var h=`import React from 'react';
import Chip from '../index.tsx';

export default {
	title: 'JS Packages/Components/Chip',
	component: Chip,
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'new' ],
		},
	},
};

const Template = args => <Chip { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	type: 'new',
	text: 'new',
};
`,T={_default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}};const y={parameters:{storySource:{source:`import React from 'react';
import Chip from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Chip',
  component: Chip,
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: ['info', 'new']
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(Chip, {
  ...args
});
export const _default = Template.bind({});
_default.args = {
  type: 'new',
  text: 'new'
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}}}},title:"JS Packages/Components/Chip",component:u,argTypes:{type:{control:{type:"select"},options:["info","new"]}}},l=(m=>(0,i.jsx)(u,{...m})).bind({});l.args={type:"new",text:"new"};const j=["_default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <Chip {...args} />",...l.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,a,s)=>{s.d(a,{A:()=>p});function _(e){var o,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var d=e.length;for(o=0;o<d;o++)e[o]&&(t=_(e[o]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function r(){for(var e,o,t=0,n="",d=arguments.length;t<d;t++)(e=arguments[t])&&(o=_(e))&&(n&&(n+=" "),n+=o);return n}const p=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/chip/style.module.scss":(c,a,s)=>{s.d(a,{A:()=>t});var _=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(_),p=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(p),o=e()(r());o.push([c.id,'.x4ebL6QOoJEDeYYjR06H{display:inline-block;border-radius:3px;background-color:var(--jp-gray-5);color:var(--jp-gray-50);padding:0 6px;margin:0 8px;text-transform:uppercase;font-size:10px;font-weight:700;line-height:20px;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}.x4ebL6QOoJEDeYYjR06H.qbTOTIwtl3ioB2_6MskX{background-color:var(--jp-green-5);color:var(--jp-green-50)}',""]),o.locals={chip:"x4ebL6QOoJEDeYYjR06H","is-new":"qbTOTIwtl3ioB2_6MskX"};const t=o}}]);
