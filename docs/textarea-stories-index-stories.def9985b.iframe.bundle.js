"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5718],{"../../plugins/protect/src/js/components/textarea/stories/index.stories.jsx":(m,r,e)=>{e.r(r),e.d(r,{Default:()=>s,Disabled:()=>a,__namedExportsOrder:()=>g,default:()=>y});var _=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(_),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/textarea/styles.module.scss"),o={};o.insert="head",o.singleton=!1;var n=i()(d.A,o);const c=d.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=({disabled:t=!1,id:p,label:b="",description:f="",placeholder:v="",rows:D=3,value:j="",onChange:T=()=>{}})=>(0,l.jsxs)("div",{children:[!!b&&(0,l.jsx)("label",{className:c.label,htmlFor:p,children:b}),!!f&&f,(0,l.jsx)("textarea",{className:c.textarea,disabled:t,placeholder:v,rows:D,id:p,name:p,onChange:T,value:j||""})]}),u=x;x.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},description:{defaultValue:{value:"''",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},rows:{defaultValue:{value:"3",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};var h=`import Textarea from '..';

export default {
	title: 'Plugins/Protect/Textarea',
	component: Textarea,
};

export const Default = args => <Textarea { ...args } />;
Default.args = {
	label: 'Textarea',
	placeholder: 'Code is poetry.',
	id: 'default',
};

export const Disabled = args => <Textarea { ...args } />;
Disabled.args = {
	label: 'Disabled Textarea',
	id: 'disabled',
	children: 'Code is poetry.',
};
`,E={Default:{startLoc:{col:23,line:7},endLoc:{col:2,line:9},startBody:{col:23,line:7},endBody:{col:2,line:9}},Disabled:{startLoc:{col:24,line:15},endLoc:{col:2,line:17},startBody:{col:24,line:15},endBody:{col:2,line:17}}};const y={parameters:{storySource:{source:`import Textarea from '..';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Plugins/Protect/Textarea',
  component: Textarea
};
export const Default = args => /*#__PURE__*/_jsx(Textarea, {
  ...args
});
Default.args = {
  label: 'Textarea',
  placeholder: 'Code is poetry.',
  id: 'default'
};
export const Disabled = args => /*#__PURE__*/_jsx(Textarea, {
  ...args
});
Disabled.args = {
  label: 'Disabled Textarea',
  id: 'disabled',
  children: 'Code is poetry.'
};`,locationsMap:{default:{startLoc:{col:23,line:7},endLoc:{col:2,line:9},startBody:{col:23,line:7},endBody:{col:2,line:9}},disabled:{startLoc:{col:24,line:15},endLoc:{col:2,line:17},startBody:{col:24,line:15},endBody:{col:2,line:17}}}}},title:"Plugins/Protect/Textarea",component:u},s=t=>(0,l.jsx)(u,{...t});s.args={label:"Textarea",placeholder:"Code is poetry.",id:"default"};const a=t=>(0,l.jsx)(u,{...t});a.args={label:"Disabled Textarea",id:"disabled",children:"Code is poetry."};const g=["Default","Disabled"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Textarea {...args} />",...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <Textarea {...args} />",...a.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/textarea/styles.module.scss":(m,r,e)=>{e.d(r,{A:()=>c});var _=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(_),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),n=o()(i());n.push([m.id,".Wy8cV0D2PyZ2OG3RinER{display:block;width:100%;padding:var(--spacing-base) calc(var(--spacing-base)*1.5);font-size:var(--font-body);line-height:1.5;letter-spacing:-0.02em;color:var(--jp-black);background-color:var(--jp-white);border:1px solid var(--jp-gray-10);border-radius:var(--jp-border-radius);transition:box-shadow .1s ease-out}.Wy8cV0D2PyZ2OG3RinER::placeholder{color:var(--jp-gray-20)}.Wy8cV0D2PyZ2OG3RinER:focus{border:1px solid var(--jp-green);box-shadow:0 0 0 2px var(--jp-green-5)}.Wy8cV0D2PyZ2OG3RinER:hover:not(:disabled){border:1px solid var(--jp-green)}.Wy8cV0D2PyZ2OG3RinER:disabled{color:var(--jp-gray-30);background-color:var(--jp-gray-0)}.AWnoqm2TerY_3laCB_fu{display:block;margin-bottom:var(--spacing-base);color:var(--jp-black);font-size:var(--font-title-small);font-weight:600}",""]),n.locals={textarea:"Wy8cV0D2PyZ2OG3RinER",label:"AWnoqm2TerY_3laCB_fu"};const c=n}}]);
