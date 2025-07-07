"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4978],{"../components/components/chip/stories/index.stories.tsx":(i,a,n)=>{n.r(a),n.d(a,{__namedExportsOrder:()=>f,_default:()=>l,default:()=>u});var p=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(_),e=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/chip/style.module.scss"),s={};s.insert="head",s.singleton=!1;var t=r()(e.A,s);const o=e.A.locals||{};var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({type:c="info",text:y})=>{const h=(0,p.A)(o.chip,o[`is-${c}`]);return(0,d.jsx)("span",{className:h,children:y})};try{chip.displayName="chip",chip.__docgenInfo={description:"Chip component",displayName:"chip",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"new"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/chip/index.tsx#chip"]={docgenInfo:chip.__docgenInfo,name:"chip",path:"../components/components/chip/index.tsx#chip"})}catch{}var g=`import Chip from '../index.tsx';

export default {
	title: 'JS Packages/Components/Chip',
	component: Chip,
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'new' ],
		},
	},
};

const Template = args => <Chip { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	type: 'new',
	text: 'new',
};
`,C={_default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}};const u={parameters:{storySource:{source:`import Chip from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Chip',
  component: Chip,
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: ['info', 'new']
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(Chip, {
  ...args
});
export const _default = Template.bind({});
_default.args = {
  type: 'new',
  text: 'new'
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}}}}},title:"JS Packages/Components/Chip",component:m,argTypes:{type:{control:{type:"select"},options:["info","new"]}}},l=(c=>(0,d.jsx)(m,{...c})).bind({});l.args={type:"new",text:"new"};const f=["_default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <Chip {...args} />",...l.parameters?.docs?.source}}};try{Chip.displayName="Chip",Chip.__docgenInfo={description:"Chip component",displayName:"Chip",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"new"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/chip/stories/index.stories.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"../components/components/chip/stories/index.stories.tsx#Chip"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(i,a,n)=>{n.d(a,{A:()=>r});function p(e){var s,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var d=e.length;for(s=0;s<d;s++)e[s]&&(t=p(e[s]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function _(){for(var e,s,t=0,o="",d=arguments.length;t<d;t++)(e=arguments[t])&&(s=p(e))&&(o&&(o+=" "),o+=s);return o}const r=_},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/chip/style.module.scss":(i,a,n)=>{n.d(a,{A:()=>t});var p=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=n.n(p),r=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=n.n(r),s=e()(_());s.push([i.id,'.x4ebL6QOoJEDeYYjR06H{display:inline-block;border-radius:3px;background-color:var(--jp-gray-5);color:var(--jp-gray-50);padding:0 6px;margin:0 8px;text-transform:uppercase;font-size:10px;font-weight:700;line-height:20px;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}.x4ebL6QOoJEDeYYjR06H.qbTOTIwtl3ioB2_6MskX{background-color:var(--jp-green-5);color:var(--jp-green-50)}',""]),s.locals={chip:"x4ebL6QOoJEDeYYjR06H","is-new":"qbTOTIwtl3ioB2_6MskX"};const t=s}}]);
