"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3011],{"../components/components/badge/stories/index.stories.tsx":(c,a,s)=>{s.r(a),s.d(a,{__namedExportsOrder:()=>_,_default:()=>e,default:()=>n});var t=s("../components/components/badge/index.tsx"),l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=`import Badge from '../index.tsx';

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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/Badge",component:t.A,argTypes:{type:{control:{type:"select"},options:["info","danger","warning","success"]}}},e=(u=>(0,l.jsx)(t.A,{...u})).bind({});e.args={type:"info",children:"Hello World"};const _=["_default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...e.parameters?.docs?.source}}}},"../components/components/badge/index.tsx":(c,a,s)=>{s.d(a,{A:()=>i});var t=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(l),o=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/badge/style.module.scss"),n={};n.insert="head",n.singleton=!1;var d=r()(o.A,n);const e=o.A.locals||{};var _=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=({children:m,className:g,variant:p,...f})=>{const y=(0,t.A)(e.badge,{[e["is-success"]]:p==="success",[e["is-warning"]]:p==="warning",[e["is-danger"]]:p==="danger"},g);return(0,_.jsx)("span",{className:y,...f,children:m})};try{badge.displayName="badge",badge.__docgenInfo={description:"Badge component",displayName:"badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/badge/index.tsx#badge"]={docgenInfo:badge.__docgenInfo,name:"badge",path:"../components/components/badge/index.tsx#badge"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,a,s)=>{s.d(a,{A:()=>r});function t(o){var n,d,e="";if(typeof o=="string"||typeof o=="number")e+=o;else if(typeof o=="object")if(Array.isArray(o)){var _=o.length;for(n=0;n<_;n++)o[n]&&(d=t(o[n]))&&(e&&(e+=" "),e+=d)}else for(d in o)o[d]&&(e&&(e+=" "),e+=d);return e}function l(){for(var o,n,d=0,e="",_=arguments.length;d<_;d++)(o=arguments[d])&&(n=t(o))&&(e&&(e+=" "),e+=n);return e}const r=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/badge/style.module.scss":(c,a,s)=>{s.d(a,{A:()=>d});var t=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=s.n(t),r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(r),n=o()(l());n.push([c.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),n.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const d=n}}]);
