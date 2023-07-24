"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6333],{"../../plugins/protect/src/js/components/textarea/stories/index.stories.jsx":(_,t,e)=>{var g,x,y,j,D,v;e.r(t),e.d(t,{Default:()=>a,Disabled:()=>s,__namedExportsOrder:()=>O,default:()=>P});var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(n),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/textarea/styles.module.scss"),o={};o.insert="head",o.singleton=!1;var f=c()(d.Z,o);const b=d.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=r=>{let{disabled:R=!1,id:u,label:T="",description:h="",placeholder:C="",rows:S=3,value:E="",onChange:k=()=>{}}=r;return(0,l.jsxs)("div",{children:[!!T&&(0,l.jsx)("label",{className:b.label,htmlFor:u,children:T}),!!h&&h,(0,l.jsx)("textarea",{className:b.textarea,disabled:R,placeholder:C,rows:S,id:u,name:u,onChange:k,value:E||""})]})};i.displayName="Textarea",i.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},description:{defaultValue:{value:"''",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},rows:{defaultValue:{value:"3",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const p=i;var B=`import React from 'react';
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
`,L={Default:{startLoc:{col:23,line:7},endLoc:{col:53,line:7},startBody:{col:23,line:7},endBody:{col:53,line:7}},Disabled:{startLoc:{col:24,line:13},endLoc:{col:54,line:13},startBody:{col:24,line:13},endBody:{col:54,line:13}}};const P={parameters:{storySource:{source:`import React from 'react';
import Textarea from '..';
export default {
  title: 'Plugins/Protect/Textarea',
  component: Textarea
};
export const Default = args => <Textarea {...args} />;
Default.args = {
  label: 'Textarea',
  placeholder: 'Code is poetry.',
  id: 'default'
};
export const Disabled = args => <Textarea {...args} />;
Disabled.args = {
  label: 'Disabled Textarea',
  id: 'disabled',
  children: 'Code is poetry.'
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <Textarea {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "args => <Textarea {...args} />",
      ...Disabled.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:7},endLoc:{col:53,line:7},startBody:{col:23,line:7},endBody:{col:53,line:7}},disabled:{startLoc:{col:24,line:13},endLoc:{col:54,line:13},startBody:{col:24,line:13},endBody:{col:54,line:13}}}}},title:"Plugins/Protect/Textarea",component:p},a=r=>(0,l.jsx)(p,{...r});a.displayName="Default",a.args={label:"Textarea",placeholder:"Code is poetry.",id:"default"};const s=r=>(0,l.jsx)(p,{...r});s.displayName="Disabled",s.args={label:"Disabled Textarea",id:"disabled",children:"Code is poetry."},a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Textarea {...args} />",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}},s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Textarea {...args} />",...(v=(D=s.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const O=["Default","Disabled"];a.__docgenInfo={description:"",methods:[],displayName:"Default"},s.__docgenInfo={description:"",methods:[],displayName:"Disabled"}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/textarea/styles.module.scss":(_,t,e)=>{e.d(t,{Z:()=>f});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(m),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(c),o=d()(n());o.push([_.id,".Wy8cV0D2PyZ2OG3RinER{display:block;width:100%;padding:var(--spacing-base) calc(var(--spacing-base)*1.5);font-size:var(--font-body);line-height:1.5;letter-spacing:-0.02em;color:var(--jp-black);background-color:var(--jp-white);border:1px solid var(--jp-gray-10);border-radius:var(--jp-border-radius);transition:box-shadow .1s ease-out}.Wy8cV0D2PyZ2OG3RinER::placeholder{color:var(--jp-gray-20)}.Wy8cV0D2PyZ2OG3RinER:focus{border:1px solid var(--jp-green);box-shadow:0 0 0 2px var(--jp-green-5)}.Wy8cV0D2PyZ2OG3RinER:hover:not(:disabled){border:1px solid var(--jp-green)}.Wy8cV0D2PyZ2OG3RinER:disabled{color:var(--jp-gray-30);background-color:var(--jp-gray-0)}.AWnoqm2TerY_3laCB_fu{display:block;margin-bottom:var(--spacing-base);color:var(--jp-black);font-size:var(--font-title-small);font-weight:600}",""]),o.locals={textarea:"Wy8cV0D2PyZ2OG3RinER",label:"AWnoqm2TerY_3laCB_fu"};const f=o}}]);})();
