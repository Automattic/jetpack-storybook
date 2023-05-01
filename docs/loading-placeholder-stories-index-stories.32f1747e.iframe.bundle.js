(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8104],{"../components/components/loading-placeholder/stories/index.stories.tsx":(c,r,n)=>{var i,m,g,_,y,x;"use strict";n.r(r),n.d(r,{Fixed:()=>s,Fluid:()=>e,__namedExportsOrder:()=>p,default:()=>t});var a=n("../components/components/loading-placeholder/index.tsx"),l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=`/**
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
`,d={Fluid:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}},Fixed:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}}};const t={title:"JS Packages/Components/Loading Placeholder",component:a.Z,parameters:{storySource:{source:`/**
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
};`,locationsMap:{fluid:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}},fixed:{startLoc:{col:60,line:16},endLoc:{col:100,line:16},startBody:{col:60,line:16},endBody:{col:100,line:16}}}},layout:"centered"}},o=u=>(0,l.jsx)(a.Z,{...u});o.displayName="Template";const e=o.bind({});e.decorators=[u=>(0,l.jsx)("div",{style:{width:"200px",height:"300px"},children:(0,l.jsx)(u,{})})],e.argTypes={width:{table:{disable:!0}},height:{table:{disable:!0}}},e.args={width:null,height:null};const s=o.bind({});s.args={width:200,height:300},s.argTypes={width:{control:{type:"range",min:0,max:500,step:1}},height:{control:{type:"range",min:0,max:500,step:1}}},e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}},s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"args => <LoadingPlaceholder {...args} />",...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const p=["Fluid","Fixed"]},"../components/components/loading-placeholder/index.tsx":(c,r,n)=>{"use strict";n.d(r,{Z:()=>g});var a=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=n.n(a),h=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=n.n(d),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss"),e={};e.insert="head",e.singleton=!1;var s=t()(o.Z,e);const p=o.Z.locals||{};var i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=_=>{let{children:y=null,width:x=null,height:u=null,className:f=""}=_;return(0,i.jsx)("div",{className:l()(p.placeholder,f),style:{width:x,height:u},children:y})};m.displayName="LoadingPlaceholder";const g=m;try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch(_){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,r)=>{var n,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,h="[native code]";function d(){for(var t=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var s=typeof e;if(s==="string"||s==="number")t.push(e);else if(Array.isArray(e)){if(e.length){var p=d.apply(null,e);p&&t.push(p)}}else if(s==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var i in e)l.call(e,i)&&e[i]&&t.push(i)}}}return t.join(" ")}c.exports?(d.default=d,c.exports=d):(n=[],a=function(){return d}.apply(r,n),a!==void 0&&(c.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss":(c,r,n)=>{"use strict";n.d(r,{Z:()=>o});var a=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(a),h=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=n.n(h),t=d()(l());t.push([c.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),t.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const o=t}}]);})();
