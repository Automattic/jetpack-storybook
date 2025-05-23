"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2771],{"../../packages/videopress/src/client/admin/components/checkbox/stories/index.stories.tsx":(i,d,e)=>{e.r(d),e.d(d,{__namedExportsOrder:()=>_,_default:()=>r,default:()=>t});var a=e("storybook/internal/preview-api"),p=e.n(a),c=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=`import { useArgs } from '@storybook/preview-api';
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
`,n={_default:{startLoc:{col:17,line:11},endLoc:{col:1,line:20},startBody:{col:17,line:11},endBody:{col:1,line:20}}};const t={title:"Packages/VideoPress/Checkbox",component:c.A,parameters:{storySource:{source:`import { useArgs } from '@storybook/preview-api';
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
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:1,line:20},startBody:{col:17,line:11},endBody:{col:1,line:20}}}},layout:"centered"}},r=(u=>{const[,m]=(0,a.useArgs)(),x=h=>m({checked:h});return(0,s.jsx)(c.A,{...u,onChange:x})}).bind({});r.args={checked:!0};const _=["_default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onChange = current => updateArgs({
    checked: current
  });
  return <Checkbox {...args} onChange={onChange} />;
}`,...r.parameters?.docs?.source}}}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(i,d,e)=>{e.d(d,{A:()=>u});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(c),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),n={};n.insert="head",n.singleton=!1;var t=s()(o.A,n);const l=o.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=(0,p.forwardRef)(({checked:m,onChange:x,className:h,children:k,htmlFor:g,dataTestId:b,...y},f)=>{const C=P=>{x?.(P.target.checked)};return(0,r.jsxs)("label",{htmlFor:g,className:l["checkbox-container"],"data-testid":b,children:[(0,r.jsx)("input",{...y,ref:f,type:"checkbox",checked:m,className:(0,a.A)(h,l.checkbox),onChange:C}),(0,r.jsx)("span",{className:l["checkbox-checkmark"]}),k]})});_.displayName="Checkbox";const u=_;try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}},dataTestId:{defaultValue:null,description:"",name:"dataTestId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(i,d,e)=>{e.d(d,{A:()=>c});function a(s){var o,n,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(o=0;o<l;o++)s[o]&&(n=a(s[o]))&&(t&&(t+=" "),t+=n)}else for(n in s)s[n]&&(t&&(t+=" "),t+=n);return t}function p(){for(var s,o,n=0,t="",l=arguments.length;n<l;n++)(s=arguments[n])&&(o=a(s))&&(t&&(t+=" "),t+=o);return t}const c=p},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(i,d,e)=>{e.d(d,{A:()=>n});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(c),o=s()(p());o.push([i.id,'.zzI8OxDFP6rdwPQNRTCP{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;height:20px;line-height:20px;margin-top:var(--spacing-base)}.zzI8OxDFP6rdwPQNRTCP .mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-green-40);margin:0 10px 0;position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px}.zzI8OxDFP6rdwPQNRTCP .mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.zzI8OxDFP6rdwPQNRTCP .mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.zzI8OxDFP6rdwPQNRTCP .mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-green-40)}.zzI8OxDFP6rdwPQNRTCP .mX6yyxYktM6iYgvgkxWq[type=checkbox]:not(:checked)+.Grj_7pyqOIOZSNVdlezs{display:none}.zzI8OxDFP6rdwPQNRTCP .mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}.zzI8OxDFP6rdwPQNRTCP .Grj_7pyqOIOZSNVdlezs{position:absolute;top:0;left:17px;height:20px;width:20px;box-sizing:border-box}.zzI8OxDFP6rdwPQNRTCP .Grj_7pyqOIOZSNVdlezs::after{position:absolute;left:0;top:2px;width:5px;height:11px;border:solid var(--jp-white);border-width:0 1.5px 1.5px 0;transform:rotate(37deg);content:""}',""]),o.locals={"checkbox-container":"zzI8OxDFP6rdwPQNRTCP",checkbox:"mX6yyxYktM6iYgvgkxWq","checkbox-checkmark":"Grj_7pyqOIOZSNVdlezs"};const n=o}}]);
