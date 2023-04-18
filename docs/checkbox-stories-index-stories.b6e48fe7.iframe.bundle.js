(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7068],{"../../packages/videopress/src/client/admin/components/checkbox/stories/index.stories.tsx":(_,d,e)=>{var l,h,u;"use strict";e.r(d),e.d(d,{__namedExportsOrder:()=>k,_default:()=>n,default:()=>r});var a=e("@storybook/client-api"),p=e.n(a),o=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import { useArgs } from '@storybook/client-api';
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
`,s={_default:{startLoc:{col:50,line:11},endLoc:{col:1,line:17},startBody:{col:50,line:11},endBody:{col:1,line:17}}};const r={title:"Packages/VideoPress/Checkbox",component:o.Z,parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api';
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
};`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:1,line:17},startBody:{col:50,line:11},endBody:{col:1,line:17}}}},layout:"centered"}},m=x=>{const[,g]=(0,a.useArgs)(),i=y=>g({checked:y});return(0,t.jsx)(o.Z,{...x,onChange:i})};m.displayName="Template";const n=m.bind({});n.args={checked:!0},n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onChange = current => updateArgs({
    checked: current
  });
  return <Checkbox {...args} onChange={onChange} />;
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const k=["_default"]},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(_,d,e)=>{"use strict";e.d(d,{Z:()=>h});var a=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),p=e.n(a),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(t),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),r={};r.insert="head",r.singleton=!1;var m=c()(s.Z,r);const n=s.Z.locals||{};var k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=(0,o.forwardRef)((u,x)=>{let{checked:g,onChange:i,className:y,...b}=u;const f=C=>{i==null||i(C.target.checked)};return(0,k.jsx)("input",{...b,ref:x,type:"checkbox",checked:g,className:p()(y,n.checkbox),onChange:f})});l.displayName="Checkbox";const h=l;try{l.displayName="Checkbox",l.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:l.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(u){}},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(_,d)=>{var e,a;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty;function o(){for(var t=[],c=0;c<arguments.length;c++){var s=arguments[c];if(s){var r=typeof s;if(r==="string"||r==="number")t.push(s);else if(Array.isArray(s)){if(s.length){var m=o.apply(null,s);m&&t.push(m)}}else if(r==="object")if(s.toString===Object.prototype.toString)for(var n in s)p.call(s,n)&&s[n]&&t.push(n);else t.push(s.toString())}}return t.join(" ")}_.exports?(o.default=o,_.exports=o):(e=[],a=function(){return o}.apply(d,e),a!==void 0&&(_.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(_,d,e)=>{"use strict";e.d(d,{Z:()=>s});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(o),c=t()(p());c.push([_.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),c.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const s=c}}]);})();
