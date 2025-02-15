"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3011],{"../components/components/badge/stories/index.stories.tsx":(c,l,e)=>{e.r(l),e.d(l,{__namedExportsOrder:()=>t,_default:()=>s,default:()=>n});var a=e("../components/components/badge/index.tsx"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=`import Badge from '../index.js';

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
`,o={_default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const n={parameters:{storySource:{source:`import Badge from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/Badge",component:a.A,argTypes:{type:{control:{type:"select"},options:["info","danger","warning","success"]}}},s=(p=>(0,_.jsx)(a.A,{...p})).bind({});s.args={type:"info",children:"Hello World"};const t=["_default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...s.parameters?.docs?.source}}}},"../components/components/badge/index.tsx":(c,l,e)=>{e.d(l,{A:()=>u});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss"),d={};d.insert="head",d.singleton=!1;var s=o()(n.A,d);const t=n.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({children:i,className:g,variant:m="info",...j})=>{const f=(0,a.A)(t.badge,{[t["is-success"]]:m==="success",[t["is-warning"]]:m==="warning",[t["is-danger"]]:m==="danger"},g);return(0,p.jsx)("span",{className:f,...j,children:i})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,l,e)=>{e.d(l,{A:()=>r});function a(o){var n,d,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var t=o.length;for(n=0;n<t;n++)o[n]&&(d=a(o[n]))&&(s&&(s+=" "),s+=d)}else for(d in o)o[d]&&(s&&(s+=" "),s+=d);return s}function _(){for(var o,n,d=0,s="",t=arguments.length;d<t;d++)(o=arguments[d])&&(n=a(o))&&(s&&(s+=" "),s+=n);return s}const r=_},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss":(c,l,e)=>{e.d(l,{A:()=>d});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(a),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(r),n=o()(_());n.push([c.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),n.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const d=n}}]);
