"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7200],{"../components/components/spinner/stories/index.stories.jsx":(u,t,e)=>{var l,o,m;e.r(t),e.d(t,{__namedExportsOrder:()=>f,_default:()=>d,default:()=>r});var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../components/components/spinner/index.jsx"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Spinner from '../index.jsx';

export default {
	title: 'JS Packages/Components/Spinner',
	component: Spinner,
	argTypes: {
		color: { control: 'color' },
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};

const Template = args => <Spinner { ...args } />;

export const _default = Template.bind( {} );
`,p={_default:{startLoc:{col:17,line:18},endLoc:{col:46,line:18},startBody:{col:17,line:18},endBody:{col:46,line:18}}};const r={title:"JS Packages/Components/Spinner",component:n.Z,argTypes:{color:{control:"color"}},parameters:{storySource:{source:`
import React from 'react';
import Spinner from '../index.jsx';
export default {
  title: 'JS Packages/Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: 'color'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};
const Template = args => <Spinner {...args} />;
export const _default = Template.bind({});
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <Spinner {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:18},endLoc:{col:46,line:18},startBody:{col:17,line:18},endBody:{col:46,line:18}}}},backgrounds:{default:"dark"}}},a=s=>(0,c.jsx)(n.Z,{...s});a.displayName="Template";const d=a.bind({});d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Spinner {...args} />",...(m=(o=d.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const f=["_default"]},"../components/components/spinner/index.jsx":(u,t,e)=>{e.d(t,{Z:()=>m});var _=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=e.n(_),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(i),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),a={};a.insert="head",a.singleton=!1;var d=p()(r.Z,a);const f=r.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=s=>{const j=s.className+" jp-components-spinner",y={width:s.size,height:s.size,fontSize:s.size,borderTopColor:s.color},S={borderTopColor:s.color,borderRightColor:s.color};return(0,l.jsx)("div",{className:j,children:(0,l.jsx)("div",{className:"jp-components-spinner__outer",style:y,children:(0,l.jsx)("div",{className:"jp-components-spinner__inner",style:S})})})};o.displayName="Spinner",o.propTypes={color:n().string,className:n().string,size:n().number},o.defaultProps={color:"#FFFFFF",className:"",size:20},o.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}};const m=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(u,t,e)=>{e.d(t,{Z:()=>r});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(_),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(c),p=i()(n());p.push([u.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const r=p}}]);})();
