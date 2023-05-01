(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7068],{"../../packages/videopress/src/client/admin/components/checkbox/stories/index.stories.tsx":(l,r,e)=>{var d,k,u;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>i,_default:()=>t,default:()=>s});var a=e("@storybook/client-api"),m=e.n(a),_=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import { useArgs } from '@storybook/client-api';
import Checkbox from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta< typeof Checkbox >;

const Template: ComponentStory< typeof Checkbox > = args => {
	const [ , updateArgs ] = useArgs();
	const onChange = current => updateArgs( { checked: current } );
	return <Checkbox { ...args } onChange={ onChange } />;
};

export const _default = Template.bind( {} );
_default.args = {
	checked: true,
};
`,c={_default:{startLoc:{col:50,line:11},endLoc:{col:1,line:17},startBody:{col:50,line:11},endBody:{col:1,line:17}}};const s={title:"Packages/VideoPress/Checkbox",component:_.Z,parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api';
import Checkbox from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Checkbox>);
const Template: ComponentStory<typeof Checkbox> = args => {
  const [, updateArgs] = useArgs();
  const onChange = current => updateArgs({
    checked: current
  });
  return <Checkbox {...args} onChange={onChange} />;
};
export const _default = Template.bind({});
_default.args = {
  checked: true
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [, updateArgs] = useArgs();\\n  const onChange = current => updateArgs({\\n    checked: current\\n  });\\n  return <Checkbox {...args} onChange={onChange} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:1,line:17},startBody:{col:50,line:11},endBody:{col:1,line:17}}}},layout:"centered"}},p=x=>{const[,g]=(0,a.useArgs)(),h=y=>g({checked:y});return(0,n.jsx)(_.Z,{...x,onChange:h})};p.displayName="Template";const t=p.bind({});t.args={checked:!0},t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onChange = current => updateArgs({
    checked: current
  });
  return <Checkbox {...args} onChange={onChange} />;
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};const i=["_default"]},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(l,r,e)=>{"use strict";e.d(r,{Z:()=>k});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(a),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(n),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),s={};s.insert="head",s.singleton=!1;var p=o()(c.Z,s);const t=c.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=(0,_.forwardRef)((u,x)=>{let{checked:g,onChange:h,className:y,...b}=u;const f=C=>{h==null||h(C.target.checked)};return(0,i.jsx)("input",{...b,ref:x,type:"checkbox",checked:g,className:m()(y,t.checkbox),onChange:f})});d.displayName="Checkbox";const k=d;try{d.displayName="Checkbox",d.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:d.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(u){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(l,r)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,_="[native code]";function n(){for(var o=[],c=0;c<arguments.length;c++){var s=arguments[c];if(s){var p=typeof s;if(p==="string"||p==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var t=n.apply(null,s);t&&o.push(t)}}else if(p==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var i in s)m.call(s,i)&&s[i]&&o.push(i)}}}return o.join(" ")}l.exports?(n.default=n,l.exports=n):(e=[],a=function(){return n}.apply(r,e),a!==void 0&&(l.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(l,r,e)=>{"use strict";e.d(r,{Z:()=>c});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(a),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(_),o=n()(m());o.push([l.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),o.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const c=o}}]);})();
