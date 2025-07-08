"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3011],{"../components/components/badge/stories/index.stories.tsx":(c,t,s)=>{s.r(t),s.d(t,{__namedExportsOrder:()=>r,_default:()=>e,default:()=>o});var d=s("../components/components/badge/index.tsx"),l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=`import Badge from '../index.tsx';

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
`,n={_default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const o={parameters:{storySource:{source:`import Badge from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/Badge",component:d.A,argTypes:{type:{control:{type:"select"},options:["info","danger","warning","success"]}}},e=(p=>(0,l.jsx)(d.A,{...p})).bind({});e.args={type:"info",children:"Hello World"};const r=["_default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...e.parameters?.docs?.source}}};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"Badge component",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"danger"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/badge/stories/index.stories.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"../components/components/badge/stories/index.stories.tsx#Badge"})}catch{}},"../components/components/badge/index.tsx":(c,t,s)=>{s.d(t,{A:()=>i});var d=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(l),n=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/badge/style.module.scss"),o={};o.insert="head",o.singleton=!1;var a=_()(n.A,o);const e=n.A.locals||{};var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=({children:m,className:g,variant:u,...f})=>{const y=(0,d.A)(e.badge,{[e["is-success"]]:u==="success",[e["is-warning"]]:u==="warning",[e["is-danger"]]:u==="danger"},g);return(0,r.jsx)("span",{className:y,...f,children:m})};try{badge.displayName="badge",badge.__docgenInfo={description:"Badge component",displayName:"badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"danger"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/badge/index.tsx#badge"]={docgenInfo:badge.__docgenInfo,name:"badge",path:"../components/components/badge/index.tsx#badge"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(c,t,s)=>{s.d(t,{A:()=>_});function d(n){var o,a,e="";if(typeof n=="string"||typeof n=="number")e+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(o=0;o<r;o++)n[o]&&(a=d(n[o]))&&(e&&(e+=" "),e+=a)}else for(a in n)n[a]&&(e&&(e+=" "),e+=a);return e}function l(){for(var n,o,a=0,e="",r=arguments.length;a<r;a++)(n=arguments[a])&&(o=d(n))&&(e&&(e+=" "),e+=o);return e}const _=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/badge/style.module.scss":(c,t,s)=>{s.d(t,{A:()=>a});var d=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=s.n(d),_=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=s.n(_),o=n()(l());o.push([c.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),o.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const a=o}}]);
