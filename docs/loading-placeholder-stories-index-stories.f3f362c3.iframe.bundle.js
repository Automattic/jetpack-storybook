"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9606],{"../components/components/loading-placeholder/stories/index.stories.tsx":(p,r,e)=>{e.r(r),e.d(r,{Fixed:()=>c,Fluid:()=>d,__namedExportsOrder:()=>m,default:()=>s});var l=e("../components/components/loading-placeholder/index.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=`/**
 * Internal dependencies
 */
import LoadingPlaceholder from '../index.tsx';
/**
 * Types
 */
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof LoadingPlaceholder > = {
	title: 'JS Packages/Components/Loading Placeholder',
	component: LoadingPlaceholder,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

const Template: StoryFn< typeof LoadingPlaceholder > = args => <LoadingPlaceholder { ...args } />;

export const Fluid = Template.bind( {} );
Fluid.decorators = [
	Story => (
		<div
			style={ {
				width: '200px',
				height: '300px',
			} }
		>
			<Story />
		</div>
	),
];

Fluid.argTypes = {
	width: {
		table: {
			disable: true,
		},
	},
	height: {
		table: {
			disable: true,
		},
	},
};

Fluid.args = {
	width: null,
	height: null,
};

export const Fixed = Template.bind( {} );

Fixed.args = {
	width: 200,
	height: 300,
};

Fixed.argTypes = {
	width: {
		control: {
			type: 'range',
			min: 0,
			max: 500,
			step: 1,
		},
	},
	height: {
		control: {
			type: 'range',
			min: 0,
			max: 500,
			step: 1,
		},
	},
};
`,n={Fluid:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}},Fixed:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}}};const s={title:"JS Packages/Components/Loading Placeholder",component:l.A,parameters:{storySource:{source:`/**
 * Internal dependencies
 */
import LoadingPlaceholder from '../index.tsx';
/**
 * Types
 */
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Loading Placeholder',
  component: LoadingPlaceholder,
  parameters: {
    layout: 'centered'
  }
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(LoadingPlaceholder, {
  ...args
});
export const Fluid = Template.bind({});
Fluid.decorators = [Story => /*#__PURE__*/_jsx("div", {
  style: {
    width: '200px',
    height: '300px'
  },
  children: /*#__PURE__*/_jsx(Story, {})
})];
Fluid.argTypes = {
  width: {
    table: {
      disable: true
    }
  },
  height: {
    table: {
      disable: true
    }
  }
};
Fluid.args = {
  width: null,
  height: null
};
export const Fixed = Template.bind({});
Fixed.args = {
  width: 200,
  height: 300
};
Fixed.argTypes = {
  width: {
    control: {
      type: 'range',
      min: 0,
      max: 500,
      step: 1
    }
  },
  height: {
    control: {
      type: 'range',
      min: 0,
      max: 500,
      step: 1
    }
  }
};`,locationsMap:{fluid:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}},fixed:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}}}},layout:"centered"}},t=_=>(0,a.jsx)(l.A,{..._}),d=t.bind({});d.decorators=[_=>(0,a.jsx)("div",{style:{width:"200px",height:"300px"},children:(0,a.jsx)(_,{})})],d.argTypes={width:{table:{disable:!0}},height:{table:{disable:!0}}},d.args={width:null,height:null};const c=t.bind({});c.args={width:200,height:300},c.argTypes={width:{control:{type:"range",min:0,max:500,step:1}},height:{control:{type:"range",min:0,max:500,step:1}}};const m=["Fluid","Fixed"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...d.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...c.parameters?.docs?.source}}}},"../components/components/loading-placeholder/index.tsx":(p,r,e)=>{e.d(r,{A:()=>m});var l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/loading-placeholder/style.module.scss"),o={};o.insert="head",o.singleton=!1;var s=i()(n.A,o);const t=n.A.locals||{};var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({children:_=null,width:u=null,height:h=null,className:g=""})=>(0,d.jsx)("div",{className:(0,l.A)(t.placeholder,g),style:{width:u,height:h},children:_});try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,r,e)=>{e.d(r,{A:()=>i});function l(n){var o,s,t="";if(typeof n=="string"||typeof n=="number")t+=n;else if(typeof n=="object")if(Array.isArray(n)){var d=n.length;for(o=0;o<d;o++)n[o]&&(s=l(n[o]))&&(t&&(t+=" "),t+=s)}else for(s in n)n[s]&&(t&&(t+=" "),t+=s);return t}function a(){for(var n,o,s=0,t="",d=arguments.length;s<d;s++)(n=arguments[s])&&(o=l(n))&&(t&&(t+=" "),t+=o);return t}const i=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/loading-placeholder/style.module.scss":(p,r,e)=>{e.d(r,{A:()=>s});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),o=n()(a());o.push([p.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),o.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const s=o}}]);
