"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3011],{"../components/components/badge/stories/index.stories.tsx":(p,a,e)=>{e.r(a),e.d(a,{__namedExportsOrder:()=>f,_default:()=>r,default:()=>j});var l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(_),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss"),n={};n.insert="head",n.singleton=!1;var d=s()(o.A,n);const t=o.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({children:u,className:y,variant:m,...x})=>{const k=(0,l.A)(t.badge,{[t["is-success"]]:m==="success",[t["is-warning"]]:m==="warning",[t["is-danger"]]:m==="danger"},y);return(0,i.jsx)("span",{className:k,...x,children:u})};var S=`import Badge from '../index.js';

export default {
	title: 'JS Packages/Components/Badge',
	component: Badge,
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'danger', 'warning', 'success' ],
		},
	},
};

const Template = args => <Badge { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	type: 'info',
	children: 'Hello World',
};
`,b={_default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const j={parameters:{storySource:{source:`import Badge from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Badge',
  component: Badge,
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: ['info', 'danger', 'warning', 'success']
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(Badge, {
  ...args
});
export const _default = Template.bind({});
_default.args = {
  type: 'info',
  children: 'Hello World'
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/Badge",component:g,argTypes:{type:{control:{type:"select"},options:["info","danger","warning","success"]}}},r=(u=>(0,i.jsx)(g,{...u})).bind({});r.args={type:"info",children:"Hello World"};const f=["_default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,a,e)=>{e.d(a,{A:()=>_});function l(s){var o,n,d="";if(typeof s=="string"||typeof s=="number")d+=s;else if(typeof s=="object")if(Array.isArray(s)){var t=s.length;for(o=0;o<t;o++)s[o]&&(n=l(s[o]))&&(d&&(d+=" "),d+=n)}else for(n in s)s[n]&&(d&&(d+=" "),d+=n);return d}function c(){for(var s,o,n=0,d="",t=arguments.length;n<t;n++)(s=arguments[n])&&(o=l(s))&&(d&&(d+=" "),d+=o);return d}const _=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss":(p,a,e)=>{e.d(a,{A:()=>n});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(l),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(_),o=s()(c());o.push([p.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),o.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const n=o}}]);
