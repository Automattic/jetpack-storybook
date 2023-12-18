(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8104],{"../components/components/loading-placeholder/stories/index.stories.tsx":(c,r,t)=>{var i,_,g,m,y,x;"use strict";t.r(r),t.d(r,{Fixed:()=>s,Fluid:()=>e,__namedExportsOrder:()=>p,default:()=>n});var l=t("../components/components/loading-placeholder/index.tsx"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=`/**
 * Internal dependencies
 */
import LoadingPlaceholder from '..';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Loading Placeholder',
	component: LoadingPlaceholder,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta< typeof LoadingPlaceholder >;

const Template: ComponentStory< typeof LoadingPlaceholder > = args => (
	<LoadingPlaceholder { ...args } />
);

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
`,a={Fluid:{startLoc:{col:62,line:18},endLoc:{col:1,line:20},startBody:{col:62,line:18},endBody:{col:1,line:20}},Fixed:{startLoc:{col:62,line:18},endLoc:{col:1,line:20},startBody:{col:62,line:18},endBody:{col:1,line:20}}};const n={title:"JS Packages/Components/Loading Placeholder",component:l.Z,parameters:{storySource:{source:`/**
 * Internal dependencies
 */
import LoadingPlaceholder from '..';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Loading Placeholder',
	component: LoadingPlaceholder,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta< typeof LoadingPlaceholder >;

const Template: ComponentStory< typeof LoadingPlaceholder > = args => (
	<LoadingPlaceholder { ...args } />
);

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
`,locationsMap:{fluid:{startLoc:{col:62,line:18},endLoc:{col:1,line:20},startBody:{col:62,line:18},endBody:{col:1,line:20}},fixed:{startLoc:{col:62,line:18},endLoc:{col:1,line:20},startBody:{col:62,line:18},endBody:{col:1,line:20}}}},layout:"centered"}},o=u=>(0,d.jsx)(l.Z,{...u});o.displayName="Template";const e=o.bind({});e.decorators=[u=>(0,d.jsx)("div",{style:{width:"200px",height:"300px"},children:(0,d.jsx)(u,{})})],e.argTypes={width:{table:{disable:!0}},height:{table:{disable:!0}}},e.args={width:null,height:null};const s=o.bind({});s.args={width:200,height:300},s.argTypes={width:{control:{type:"range",min:0,max:500,step:1}},height:{control:{type:"range",min:0,max:500,step:1}}},e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...(g=(_=e.parameters)==null?void 0:_.docs)==null?void 0:g.source}}},s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const p=["Fluid","Fixed"]},"../components/components/loading-placeholder/index.tsx":(c,r,t)=>{"use strict";t.d(r,{Z:()=>g});var l=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=t.n(l),h=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(a),o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss"),e={};e.insert="head",e.singleton=!1;var s=n()(o.Z,e);const p=o.Z.locals||{};var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=({children:m=null,width:y=null,height:x=null,className:u=""})=>(0,i.jsx)("div",{className:d()(p.placeholder,u),style:{width:y,height:x},children:m});_.displayName="LoadingPlaceholder";const g=_;try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch(m){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,r)=>{var t,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,h="[native code]";function a(){for(var n=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var s=typeof e;if(s==="string"||s==="number")n.push(e);else if(Array.isArray(e)){if(e.length){var p=a.apply(null,e);p&&n.push(p)}}else if(s==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var i in e)d.call(e,i)&&e[i]&&n.push(i)}}}return n.join(" ")}c.exports?(a.default=a,c.exports=a):(t=[],l=function(){return a}.apply(r,t),l!==void 0&&(c.exports=l))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss":(c,r,t)=>{"use strict";t.d(r,{Z:()=>o});var l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(l),h=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(h),n=a()(d());n.push([c.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),n.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const o=n}}]);})();
