(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[937],{"../components/components/spinner/stories/index.stories.jsx":(p,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>u,_default:()=>l,default:()=>o});var a=e("../components/components/spinner/index.jsx"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`import Spinner from '../index.jsx';

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
`,s={_default:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}}};const o={title:"JS Packages/Components/Spinner",component:a.A,argTypes:{color:{control:"color"}},parameters:{storySource:{source:`import Spinner from '../index.jsx';
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
export const _default = Template.bind({});`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}}}},backgrounds:{default:"dark"}}},l=(_=>(0,n.jsx)(a.A,{..._})).bind({}),u=["_default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...l.parameters?.docs?.source}}}},"../components/components/spinner/index.jsx":(p,t,e)=>{"use strict";e.d(t,{A:()=>f});var a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=e.n(a),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(d),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/spinner/style.scss"),r={};r.insert="head",r.singleton=!1;var l=s()(o.A,r);const u=o.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=({color:c="#FFFFFF",className:m="",size:y=20})=>{const j=m+" jp-components-spinner",S={width:y,height:y,fontSize:y,borderTopColor:c},T={borderTopColor:c,borderRightColor:c};return(0,_.jsx)("div",{className:j,children:(0,_.jsx)("div",{className:"jp-components-spinner__outer",style:S,children:(0,_.jsx)("div",{className:"jp-components-spinner__inner",style:T})})})};i.propTypes={color:n().string,className:n().string,size:n().number};const f=i;i.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/spinner/style.scss":(p,t,e)=>{"use strict";e.d(t,{A:()=>r});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),o=s()(n());o.push([p.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const r=o},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(p,t,e)=>{"use strict";var a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function d(){}d.resetWarningCache=n,p.exports=function(){function s(l,u,_,i,f,c){if(c!==a){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}s.isRequired=s;function o(){return s}var r={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:d,resetWarningCache:n};return r.PropTypes=r,r}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(p,t,e)=>{if(0)var a,n;else p.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":p=>{"use strict";var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=t}}]);
