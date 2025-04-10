"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9606],{"../components/components/loading-placeholder/stories/index.stories.tsx":(p,r,e)=>{e.r(r),e.d(r,{Fixed:()=>a,Fluid:()=>d,__namedExportsOrder:()=>m,default:()=>t});var l=e("../components/components/loading-placeholder/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=`/**
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
`,n={Fluid:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}},Fixed:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}}};const t={title:"JS Packages/Components/Loading Placeholder",component:l.A,parameters:{storySource:{source:`/**
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
};`,locationsMap:{fluid:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}},fixed:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}}}},layout:"centered"}},o=_=>(0,c.jsx)(l.A,{..._}),d=o.bind({});d.decorators=[_=>(0,c.jsx)("div",{style:{width:"200px",height:"300px"},children:(0,c.jsx)(_,{})})],d.argTypes={width:{table:{disable:!0}},height:{table:{disable:!0}}},d.args={width:null,height:null};const a=o.bind({});a.args={width:200,height:300},a.argTypes={width:{control:{type:"range",min:0,max:500,step:1}},height:{control:{type:"range",min:0,max:500,step:1}}};const m=["Fluid","Fixed"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...d.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...a.parameters?.docs?.source}}}},"../components/components/loading-placeholder/index.tsx":(p,r,e)=>{e.d(r,{A:()=>_});var l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(i),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss"),t={};t.insert="head",t.singleton=!1;var o=n()(s.A,t);const d=s.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=({children:u=null,width:h=null,height:g=null,className:y=""})=>(0,a.jsx)("div",{className:(0,l.A)(d.placeholder,y),style:{width:h,height:g},children:u});try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,r,e)=>{e.d(r,{A:()=>i});function l(n){var s,t,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var d=n.length;for(s=0;s<d;s++)n[s]&&(t=l(n[s]))&&(o&&(o+=" "),o+=t)}else for(t in n)n[t]&&(o&&(o+=" "),o+=t);return o}function c(){for(var n,s,t=0,o="",d=arguments.length;t<d;t++)(n=arguments[t])&&(s=l(n))&&(o&&(o+=" "),o+=s);return o}const i=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss":(p,r,e)=>{e.d(r,{A:()=>t});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),s=n()(c());s.push([p.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),s.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const t=s}}]);
