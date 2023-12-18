(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7068],{"../../packages/videopress/src/client/admin/components/checkbox/stories/index.stories.tsx":(l,d,e)=>{var r,x,u;"use strict";e.r(d),e.d(d,{__namedExportsOrder:()=>i,_default:()=>t,default:()=>o});var c=e("@storybook/client-api"),m=e.n(c),_=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=`import { useArgs } from '@storybook/client-api';
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
`,a={_default:{startLoc:{col:52,line:13},endLoc:{col:1,line:17},startBody:{col:52,line:13},endBody:{col:1,line:17}}};const o={title:"Packages/VideoPress/Checkbox",component:_.Z,parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api';
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
`,locationsMap:{default:{startLoc:{col:52,line:13},endLoc:{col:1,line:17},startBody:{col:52,line:13},endBody:{col:1,line:17}}}},layout:"centered"}},p=k=>{const[,h]=(0,c.useArgs)(),y=g=>h({checked:g});return(0,n.jsx)(_.Z,{...k,onChange:y})};p.displayName="Template";const t=p.bind({});t.args={checked:!0},t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onChange = current => updateArgs({
    checked: current
  });
  return <Checkbox {...args} onChange={onChange} />;
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const i=["_default"]},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(l,d,e)=>{"use strict";e.d(d,{Z:()=>x});var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(c),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),o={};o.insert="head",o.singleton=!1;var p=s()(a.Z,o);const t=a.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=(0,_.forwardRef)(({checked:u,onChange:k,className:h,...y},g)=>{const b=f=>{k==null||k(f.target.checked)};return(0,i.jsx)("input",{...y,ref:g,type:"checkbox",checked:u,className:m()(h,t.checkbox),onChange:b})});r.displayName="Checkbox";const x=r;try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:r.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(u){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(l,d)=>{var e,c;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,_="[native code]";function n(){for(var s=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var p=typeof o;if(p==="string"||p==="number")s.push(o);else if(Array.isArray(o)){if(o.length){var t=n.apply(null,o);t&&s.push(t)}}else if(p==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){s.push(o.toString());continue}for(var i in o)m.call(o,i)&&o[i]&&s.push(i)}}}return s.join(" ")}l.exports?(n.default=n,l.exports=n):(e=[],c=function(){return n}.apply(d,e),c!==void 0&&(l.exports=c))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(l,d,e)=>{"use strict";e.d(d,{Z:()=>a});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(c),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(_),s=n()(m());s.push([l.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),s.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const a=s}}]);})();
