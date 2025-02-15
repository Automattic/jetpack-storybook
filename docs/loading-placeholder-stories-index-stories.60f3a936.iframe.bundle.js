"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9606],{"../components/components/loading-placeholder/stories/index.stories.tsx":(i,a,n)=>{n.r(a),n.d(a,{Fixed:()=>d,Fluid:()=>e,__namedExportsOrder:()=>p,default:()=>s});var l=n("../components/components/loading-placeholder/index.tsx"),r=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=`/**
 * Internal dependencies
 */
import LoadingPlaceholder from '../index.js';
/**
 * Types
 */
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Loading Placeholder',
	component: LoadingPlaceholder,
	parameters: {
		layout: 'centered',
	},
} as Meta< typeof LoadingPlaceholder >;

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
`,t={Fluid:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},Fixed:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}};const s={title:"JS Packages/Components/Loading Placeholder",component:l.A,parameters:{storySource:{source:`/**
 * Internal dependencies
 */
import LoadingPlaceholder from '../index.js';
/**
 * Types
 */
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Loading Placeholder',
  component: LoadingPlaceholder,
  parameters: {
    layout: 'centered'
  }
};
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
};`,locationsMap:{fluid:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}},fixed:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}}},layout:"centered"}},o=_=>(0,r.jsx)(l.A,{..._}),e=o.bind({});e.decorators=[_=>(0,r.jsx)("div",{style:{width:"200px",height:"300px"},children:(0,r.jsx)(_,{})})],e.argTypes={width:{table:{disable:!0}},height:{table:{disable:!0}}},e.args={width:null,height:null};const d=o.bind({});d.args={width:200,height:300},d.argTypes={width:{control:{type:"range",min:0,max:500,step:1}},height:{control:{type:"range",min:0,max:500,step:1}}};const p=["Fluid","Fixed"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...e.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...d.parameters?.docs?.source}}}},"../components/components/loading-placeholder/index.tsx":(i,a,n)=>{n.d(a,{A:()=>u});var l=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=n.n(c),s=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss"),o={};o.insert="head",o.singleton=!1;var e=t()(s.A,o);const d=s.A.locals||{};var p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({children:m=null,width:h=null,height:g=null,className:y=""})=>(0,p.jsx)("div",{className:(0,l.A)(d.placeholder,y),style:{width:h,height:g},children:m});try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(i,a,n)=>{n.d(a,{A:()=>c});function l(t){var s,o,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var d=t.length;for(s=0;s<d;s++)t[s]&&(o=l(t[s]))&&(e&&(e+=" "),e+=o)}else for(o in t)t[o]&&(e&&(e+=" "),e+=o);return e}function r(){for(var t,s,o=0,e="",d=arguments.length;o<d;o++)(t=arguments[o])&&(s=l(t))&&(e&&(e+=" "),e+=s);return e}const c=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss":(i,a,n)=>{n.d(a,{A:()=>o});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(l),c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=n.n(c),s=t()(r());s.push([i.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),s.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const o=s}}]);
