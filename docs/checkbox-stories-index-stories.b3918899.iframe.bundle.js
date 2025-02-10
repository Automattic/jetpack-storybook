"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2771],{"../../packages/videopress/src/client/admin/components/checkbox/stories/index.stories.tsx":(m,a,e)=>{e.r(a),e.d(a,{__namedExportsOrder:()=>_,_default:()=>r,default:()=>t});var c=e("storybook/internal/preview-api"),l=e.n(c),d=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=`import { useArgs } from '@storybook/preview-api';
import Checkbox from '..';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
} as Meta< typeof Checkbox >;

const Template: StoryFn< typeof Checkbox > = args => {
	const [ , updateArgs ] = useArgs();
	const onChange = current => updateArgs( { checked: current } );
	return <Checkbox { ...args } onChange={ onChange } />;
};

export const _default = Template.bind( {} );
_default.args = {
	checked: true,
};
`,n={_default:{startLoc:{col:17,line:11},endLoc:{col:1,line:20},startBody:{col:17,line:11},endBody:{col:1,line:20}}};const t={title:"Packages/VideoPress/Checkbox",component:d.A,parameters:{storySource:{source:`import { useArgs } from '@storybook/preview-api';
import Checkbox from '..';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/VideoPress/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  }
};
const Template = args => {
  const [, updateArgs] = useArgs();
  const onChange = current => updateArgs({
    checked: current
  });
  return /*#__PURE__*/_jsx(Checkbox, {
    ...args,
    onChange: onChange
  });
};
export const _default = Template.bind({});
_default.args = {
  checked: true
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:1,line:20},startBody:{col:17,line:11},endBody:{col:1,line:20}}}},layout:"centered"}},r=(u=>{const[,i]=(0,c.useArgs)(),x=k=>i({checked:k});return(0,s.jsx)(d.A,{...u,onChange:x})}).bind({});r.args={checked:!0};const _=["_default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onChange = current => updateArgs({
    checked: current
  });
  return <Checkbox {...args} onChange={onChange} />;
}`,...r.parameters?.docs?.source}}}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(m,a,e)=>{e.d(a,{A:()=>u});var c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(d),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),n={};n.insert="head",n.singleton=!1;var t=s()(o.A,n);const p=o.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=(0,l.forwardRef)(({checked:i,onChange:x,className:k,...g},h)=>{const b=y=>{x?.(y.target.checked)};return(0,r.jsx)("input",{...g,ref:h,type:"checkbox",checked:i,className:(0,c.A)(k,p.checkbox),onChange:b})});_.displayName="Checkbox";const u=_;try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(m,a,e)=>{e.d(a,{A:()=>d});function c(s){var o,n,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var p=s.length;for(o=0;o<p;o++)s[o]&&(n=c(s[o]))&&(t&&(t+=" "),t+=n)}else for(n in s)s[n]&&(t&&(t+=" "),t+=n);return t}function l(){for(var s,o,n=0,t="",p=arguments.length;n<p;n++)(s=arguments[n])&&(o=c(s))&&(t&&(t+=" "),t+=o);return t}const d=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(m,a,e)=>{e.d(a,{A:()=>n});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),o=s()(l());o.push([m.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),o.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const n=o}}]);
