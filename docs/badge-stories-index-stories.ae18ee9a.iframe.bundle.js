"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3011],{"../components/components/badge/stories/index.stories.tsx":(c,l,e)=>{e.r(l),e.d(l,{__namedExportsOrder:()=>d,_default:()=>s,default:()=>n});var a=e("../components/components/badge/index.tsx"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=`import Badge from '../index.tsx';

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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/Badge",component:a.A,argTypes:{type:{control:{type:"select"},options:["info","danger","warning","success"]}}},s=(p=>(0,_.jsx)(a.A,{...p})).bind({});s.args={type:"info",children:"Hello World"};const d=["_default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...s.parameters?.docs?.source}}}},"../components/components/badge/index.tsx":(c,l,e)=>{e.d(l,{A:()=>u});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss"),t={};t.insert="head",t.singleton=!1;var s=o()(n.A,t);const d=n.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({children:i,className:g,variant:m,...j})=>{const y=(0,a.A)(d.badge,{[d["is-success"]]:m==="success",[d["is-warning"]]:m==="warning",[d["is-danger"]]:m==="danger"},g);return(0,p.jsx)("span",{className:y,...j,children:i})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,l,e)=>{e.d(l,{A:()=>r});function a(o){var n,t,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var d=o.length;for(n=0;n<d;n++)o[n]&&(t=a(o[n]))&&(s&&(s+=" "),s+=t)}else for(t in o)o[t]&&(s&&(s+=" "),s+=t);return s}function _(){for(var o,n,t=0,s="",d=arguments.length;t<d;t++)(o=arguments[t])&&(n=a(o))&&(s&&(s+=" "),s+=n);return s}const r=_},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss":(c,l,e)=>{e.d(l,{A:()=>t});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(a),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(r),n=o()(_());n.push([c.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),n.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const t=n}}]);
