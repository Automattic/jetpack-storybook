(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8104],{"../components/components/loading-placeholder/stories/index.stories.tsx":(c,i,e)=>{var h,m,g,_,y,x;"use strict";e.r(i),e.d(i,{Fixed:()=>s,Fluid:()=>t,__namedExportsOrder:()=>p,default:()=>o});var a=e("../components/components/loading-placeholder/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=`/**
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
`,l={Fluid:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}},Fixed:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}}};const o={title:"JS Packages/Components/Loading Placeholder",component:a.Z,parameters:{storySource:{source:`/**
 * Internal dependencies
 */
import LoadingPlaceholder from '..';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Loading Placeholder',
  component: LoadingPlaceholder,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof LoadingPlaceholder>);
const Template: ComponentStory<typeof LoadingPlaceholder> = args => <LoadingPlaceholder {...args} />;
export const Fluid = Template.bind({});
Fluid.decorators = [Story => <div style={{
  width: '200px',
  height: '300px'
}}>
            <Story />
        </div>];
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
};
Fluid.parameters = {
  ...Fluid.parameters,
  docs: {
    ...Fluid.parameters?.docs,
    source: {
      originalSource: "args => <LoadingPlaceholder {...args} />",
      ...Fluid.parameters?.docs?.source
    }
  }
};
Fixed.parameters = {
  ...Fixed.parameters,
  docs: {
    ...Fixed.parameters?.docs,
    source: {
      originalSource: "args => <LoadingPlaceholder {...args} />",
      ...Fixed.parameters?.docs?.source
    }
  }
};`,locationsMap:{fluid:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}},fixed:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}}}},layout:"centered"}},n=u=>(0,d.jsx)(a.Z,{...u});n.displayName="Template";const t=n.bind({});t.decorators=[u=>(0,d.jsx)("div",{style:{width:"200px",height:"300px"},children:(0,d.jsx)(u,{})})],t.argTypes={width:{table:{disable:!0}},height:{table:{disable:!0}}},t.args={width:null,height:null};const s=n.bind({});s.args={width:200,height:300},s.argTypes={width:{control:{type:"range",min:0,max:500,step:1}},height:{control:{type:"range",min:0,max:500,step:1}}},t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}},s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const p=["Fluid","Fixed"]},"../components/components/loading-placeholder/index.tsx":(c,i,e)=>{"use strict";e.d(i,{Z:()=>g});var a=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),d=e.n(a),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(l),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss"),t={};t.insert="head",t.singleton=!1;var s=o()(n.Z,t);const p=n.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=_=>{let{children:y=null,width:x=null,height:u=null,className:f=""}=_;return(0,h.jsx)("div",{className:d()(p.placeholder,f),style:{width:x,height:u},children:y})};m.displayName="LoadingPlaceholder";const g=m;try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch(_){}},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(c,i)=>{var e,a;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty;function r(){for(var l=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var t=typeof n;if(t==="string"||t==="number")l.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&l.push(s)}}else if(t==="object")if(n.toString===Object.prototype.toString)for(var p in n)d.call(n,p)&&n[p]&&l.push(p);else l.push(n.toString())}}return l.join(" ")}c.exports?(r.default=r,c.exports=r):(e=[],a=function(){return r}.apply(i,e),a!==void 0&&(c.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss":(c,i,e)=>{"use strict";e.d(i,{Z:()=>n});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(a),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(r),o=l()(d());o.push([c.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),o.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const n=o}}]);})();
