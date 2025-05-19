(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[937],{"../components/components/spinner/stories/index.stories.jsx":(p,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>u,_default:()=>l,default:()=>r});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../components/components/spinner/index.jsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=`import React from 'react';
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
`,o={_default:{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}}};const r={title:"JS Packages/Components/Spinner",component:n.A,argTypes:{color:{control:"color"}},parameters:{storySource:{source:`import React from 'react';
import Spinner from '../index.jsx';
import { jsx as _jsx } from "react/jsx-runtime";
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
const Template = args => /*#__PURE__*/_jsx(Spinner, {
  ...args
});
export const _default = Template.bind({});`,locationsMap:{default:{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}}}},backgrounds:{default:"dark"}}},l=(_=>(0,d.jsx)(n.A,{..._})).bind({}),u=["_default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...l.parameters?.docs?.source}}}},"../components/components/spinner/index.jsx":(p,t,e)=>{"use strict";e.d(t,{A:()=>y});var a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=e.n(a),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(s),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),i={};i.insert="head",i.singleton=!1;var l=o()(r.A,i);const u=r.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({color:c="#FFFFFF",className:j="",size:f=20})=>{const T=j+" jp-components-spinner",S={width:f,height:f,fontSize:f,borderTopColor:c},g={borderTopColor:c,borderRightColor:c};return(0,_.jsx)("div",{className:T,children:(0,_.jsx)("div",{className:"jp-components-spinner__outer",style:S,children:(0,_.jsx)("div",{className:"jp-components-spinner__inner",style:g})})})};m.propTypes={color:n().string,className:n().string,size:n().number};const y=m;m.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(p,t,e)=>{"use strict";e.d(t,{A:()=>r});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),o=s()(n());o.push([p.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const r=o},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(p,t,e)=>{"use strict";var a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function d(){}d.resetWarningCache=n,p.exports=function(){function s(i,l,u,_,m,y){if(y!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}s.isRequired=s;function o(){return s}var r={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:d,resetWarningCache:n};return r.PropTypes=r,r}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(p,t,e)=>{if(0)var a,n;else p.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":p=>{"use strict";var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=t}}]);
