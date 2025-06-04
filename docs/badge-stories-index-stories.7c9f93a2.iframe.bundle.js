"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3011],{"../components/components/badge/stories/index.stories.tsx":(c,l,s)=>{s.r(l),s.d(l,{__namedExportsOrder:()=>t,_default:()=>e,default:()=>n});var a=s("../components/components/badge/index.tsx"),_=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=`import Badge from '../index.tsx';

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
`,o={_default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const n={parameters:{storySource:{source:`import Badge from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/Badge",component:a.A,argTypes:{type:{control:{type:"select"},options:["info","danger","warning","success"]}}},e=(p=>(0,_.jsx)(a.A,{...p})).bind({});e.args={type:"info",children:"Hello World"};const t=["_default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...e.parameters?.docs?.source}}}},"../components/components/badge/index.tsx":(c,l,s)=>{s.d(l,{A:()=>m});var a=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(r),n=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/badge/style.module.scss"),d={};d.insert="head",d.singleton=!1;var e=o()(n.A,d);const t=n.A.locals||{};var p=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({children:i,className:g,variant:u,...j})=>{const y=(0,a.A)(t.badge,{[t["is-success"]]:u==="success",[t["is-warning"]]:u==="warning",[t["is-danger"]]:u==="danger"},g);return(0,p.jsx)("span",{className:y,...j,children:i})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,l,s)=>{s.d(l,{A:()=>r});function a(o){var n,d,e="";if(typeof o=="string"||typeof o=="number")e+=o;else if(typeof o=="object")if(Array.isArray(o)){var t=o.length;for(n=0;n<t;n++)o[n]&&(d=a(o[n]))&&(e&&(e+=" "),e+=d)}else for(d in o)o[d]&&(e&&(e+=" "),e+=d);return e}function _(){for(var o,n,d=0,e="",t=arguments.length;d<t;d++)(o=arguments[d])&&(n=a(o))&&(e&&(e+=" "),e+=n);return e}const r=_},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/badge/style.module.scss":(c,l,s)=>{s.d(l,{A:()=>d});var a=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(a),r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(r),n=o()(_());n.push([c.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),n.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const d=n}}]);
