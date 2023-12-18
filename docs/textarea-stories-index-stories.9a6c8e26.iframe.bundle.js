"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6333],{"../../plugins/protect/src/js/components/textarea/stories/index.stories.jsx":(u,r,e)=>{var x,y,g,j,v,D;e.r(r),e.d(r,{Default:()=>s,Disabled:()=>o,__namedExportsOrder:()=>O,default:()=>P});var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(n),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/textarea/styles.module.scss"),a={};a.insert="head",a.singleton=!1;var f=c()(d.Z,a);const b=d.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=({disabled:t=!1,id:p,label:T="",description:h="",placeholder:R="",rows:C=3,value:E="",onChange:S=()=>{}})=>(0,l.jsxs)("div",{children:[!!T&&(0,l.jsx)("label",{className:b.label,htmlFor:p,children:T}),!!h&&h,(0,l.jsx)("textarea",{className:b.textarea,disabled:t,placeholder:R,rows:C,id:p,name:p,onChange:S,value:E||""})]});i.displayName="Textarea";const _=i;i.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},description:{defaultValue:{value:"''",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},rows:{defaultValue:{value:"3",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};var k=`import React from 'react';
import Textarea from '..';

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
`,B={Default:{startLoc:{col:23,line:9},endLoc:{col:55,line:9},startBody:{col:23,line:9},endBody:{col:55,line:9}},Disabled:{startLoc:{col:24,line:16},endLoc:{col:56,line:16},startBody:{col:24,line:16},endBody:{col:56,line:16}}};const P={parameters:{storySource:{source:`import React from 'react';
import Textarea from '..';

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
`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:55,line:9},startBody:{col:23,line:9},endBody:{col:55,line:9}},disabled:{startLoc:{col:24,line:16},endLoc:{col:56,line:16},startBody:{col:24,line:16},endBody:{col:56,line:16}}}}},title:"Plugins/Protect/Textarea",component:_},s=t=>(0,l.jsx)(_,{...t});s.displayName="Default",s.args={label:"Textarea",placeholder:"Code is poetry.",id:"default"};const o=t=>(0,l.jsx)(_,{...t});o.displayName="Disabled",o.args={label:"Disabled Textarea",id:"disabled",children:"Code is poetry."},s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Textarea {...args} />",...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}},o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Textarea {...args} />",...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const O=["Default","Disabled"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/textarea/styles.module.scss":(u,r,e)=>{e.d(r,{Z:()=>f});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(m),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(c),a=d()(n());a.push([u.id,".Wy8cV0D2PyZ2OG3RinER{display:block;width:100%;padding:var(--spacing-base) calc(var(--spacing-base)*1.5);font-size:var(--font-body);line-height:1.5;letter-spacing:-0.02em;color:var(--jp-black);background-color:var(--jp-white);border:1px solid var(--jp-gray-10);border-radius:var(--jp-border-radius);transition:box-shadow .1s ease-out}.Wy8cV0D2PyZ2OG3RinER::placeholder{color:var(--jp-gray-20)}.Wy8cV0D2PyZ2OG3RinER:focus{border:1px solid var(--jp-green);box-shadow:0 0 0 2px var(--jp-green-5)}.Wy8cV0D2PyZ2OG3RinER:hover:not(:disabled){border:1px solid var(--jp-green)}.Wy8cV0D2PyZ2OG3RinER:disabled{color:var(--jp-gray-30);background-color:var(--jp-gray-0)}.AWnoqm2TerY_3laCB_fu{display:block;margin-bottom:var(--spacing-base);color:var(--jp-black);font-size:var(--font-title-small);font-weight:600}",""]),a.locals={textarea:"Wy8cV0D2PyZ2OG3RinER",label:"AWnoqm2TerY_3laCB_fu"};const f=a}}]);})();
