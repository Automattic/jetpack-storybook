(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9535],{"../components/components/text/stories/headings.index.stories.tsx":(c,r,n)=>{var y,x,f,T,b,E,I,P,j;"use strict";n.r(r),n.d(r,{Default:()=>m,HeadlineH2:()=>p,HeadlineH3:()=>i,__namedExportsOrder:()=>w,default:()=>H});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../components/components/text/index.tsx"),o=n("../components/components/text/stories/style.module.scss"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import React from 'react';
import { H2, H3 } from '../index';
import styles from './style.module.scss';
import type { H3Props } from '../types';

const TIPOGRAPHY_WEIGHTS: Array< H3Props[ 'weight' ] > = [ 'regular', 'bold' ];

export default {
	title: 'JS Packages/Components/Text/Heading',
	component: H2,
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		weight: {
			control: { type: 'select' },
			options: TIPOGRAPHY_WEIGHTS,
		},
	},
};

/**
 * Helper component to create a the story.
 *
 * @param {object} props                   - Component props.
 * @param {React.Component} props.children - Icon component children.
 * @returns {React.Component}                Text component instance.
 */
function Instance( { children } ) {
	return (
		<div className={ styles.instance }>
			<span>Text above to the the component...</span>
			{ children }
			<span>Text below to the the component...</span>
		</div>
	);
}

const TemplateH2 = args => (
	<Instance>
		<H2 { ...args }>
			{ args?.children ||
				'Headline Medium - Manage your Jetpack plan and products all in one place' }
		</H2>
	</Instance>
);

const TemplateH3 = args => (
	<Instance>
		<H3 { ...args }>
			{ args?.children ||
				'Headline Small - Manage your Jetpack plan and products all in one place' }
		</H3>
	</Instance>
);

const Template = args => {
	return (
		<>
			<TemplateH2 { ...args } />
			<TemplateH3 { ...args } />
		</>
	);
};

const DefaultArgs = {};
export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const HeadlineH2 = TemplateH2.bind( {} );
HeadlineH2.storyName = 'H2';
HeadlineH2.args = {
	weight: 'bold',
} as H3Props;

export const HeadlineH3 = TemplateH3.bind( {} );
HeadlineH3.storyName = 'H3';
HeadlineH3.args = {
	weight: 'bold',
} as H3Props;
`,t={Default:{startLoc:{col:17,line:50},endLoc:{col:1,line:55},startBody:{col:17,line:50},endBody:{col:1,line:55}},HeadlineH2:{startLoc:{col:19,line:40},endLoc:{col:15,line:44},startBody:{col:19,line:40},endBody:{col:15,line:44}},HeadlineH3:{startLoc:{col:19,line:45},endLoc:{col:15,line:49},startBody:{col:19,line:45},endBody:{col:15,line:49}}};const u=["regular","bold"],H={parameters:{storySource:{source:`import React from 'react';
import { H2, H3 } from '../index';
import styles from './style.module.scss';
import type { H3Props } from '../types';
const TIPOGRAPHY_WEIGHTS: Array<H3Props['weight']> = ['regular', 'bold'];
export default {
  title: 'JS Packages/Components/Text/Heading',
  component: H2,
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },
    weight: {
      control: {
        type: 'select'
      },
      options: TIPOGRAPHY_WEIGHTS
    }
  }
};

/**
 * Helper component to create a the story.
 *
 * @param {object} props                   - Component props.
 * @param {React.Component} props.children - Icon component children.
 * @returns {React.Component}                Text component instance.
 */
function Instance({
  children
}) {
  return <div className={styles.instance}>
            <span>Text above to the the component...</span>
            {children}
            <span>Text below to the the component...</span>
        </div>;
}
const TemplateH2 = args => <Instance>
        <H2 {...args}>
            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}
        </H2>
    </Instance>;
const TemplateH3 = args => <Instance>
        <H3 {...args}>
            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}
        </H3>
    </Instance>;
const Template = args => {
  return <>
            <TemplateH2 {...args} />
            <TemplateH3 {...args} />
        </>;
};
const DefaultArgs = {};
export const Default = Template.bind({});
Default.args = DefaultArgs;
export const HeadlineH2 = TemplateH2.bind({});
HeadlineH2.storyName = 'H2';
HeadlineH2.args = ({
  weight: 'bold'
} as H3Props);
export const HeadlineH3 = TemplateH3.bind({});
HeadlineH3.storyName = 'H3';
HeadlineH3.args = ({
  weight: 'bold'
} as H3Props);
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <>\\n            <TemplateH2 {...args} />\\n            <TemplateH3 {...args} />\\n        </>;\\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
HeadlineH2.parameters = {
  ...HeadlineH2.parameters,
  docs: {
    ...HeadlineH2.parameters?.docs,
    source: {
      originalSource: "args => <Instance>\\n        <H2 {...args}>\\n            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}\\n        </H2>\\n    </Instance>",
      ...HeadlineH2.parameters?.docs?.source
    }
  }
};
HeadlineH3.parameters = {
  ...HeadlineH3.parameters,
  docs: {
    ...HeadlineH3.parameters?.docs,
    source: {
      originalSource: "args => <Instance>\\n        <H3 {...args}>\\n            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}\\n        </H3>\\n    </Instance>",
      ...HeadlineH3.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:50},endLoc:{col:1,line:55},startBody:{col:17,line:50},endBody:{col:1,line:55}},"headline-h-2":{startLoc:{col:19,line:40},endLoc:{col:15,line:44},startBody:{col:19,line:40},endBody:{col:15,line:44}},"headline-h-3":{startLoc:{col:19,line:45},endLoc:{col:15,line:49},startBody:{col:19,line:45},endBody:{col:15,line:49}}}}},title:"JS Packages/Components/Text/Heading",component:a.H2,argTypes:{children:{control:{type:"text"}},weight:{control:{type:"select"},options:u}}};function _(s){let{children:M}=s;return(0,e.jsxs)("div",{className:o.Z.instance,children:[(0,e.jsx)("span",{children:"Text above to the the component..."}),M,(0,e.jsx)("span",{children:"Text below to the the component..."})]})}_.displayName="Instance";const h=s=>(0,e.jsx)(_,{children:(0,e.jsx)(a.H2,{...s,children:(s==null?void 0:s.children)||"Headline Medium - Manage your Jetpack plan and products all in one place"})});h.displayName="TemplateH2";const g=s=>(0,e.jsx)(_,{children:(0,e.jsx)(a.H3,{...s,children:(s==null?void 0:s.children)||"Headline Small - Manage your Jetpack plan and products all in one place"})});g.displayName="TemplateH3";const D=s=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h,{...s}),(0,e.jsx)(g,{...s})]}),S={},m=D.bind({});m.args=S;const p=h.bind({});p.storyName="H2",p.args={weight:"bold"};const i=g.bind({});i.storyName="H3",i.args={weight:"bold"},m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <>
            <TemplateH2 {...args} />
            <TemplateH3 {...args} />
        </>;
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}},p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Instance>
        <H2 {...args}>
            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}
        </H2>
    </Instance>`,...(E=(b=p.parameters)==null?void 0:b.docs)==null?void 0:E.source}}},i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => <Instance>
        <H3 {...args}>
            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}
        </H3>
    </Instance>`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const w=["Default","HeadlineH2","HeadlineH3"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(c,r)=>{var n,d;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var u=typeof t;if(u==="string"||u==="number")e.push(t);else if(Array.isArray(t)){if(t.length){var H=o.apply(null,t);H&&e.push(H)}}else if(u==="object")if(t.toString===Object.prototype.toString)for(var _ in t)a.call(t,_)&&t[_]&&e.push(_);else e.push(t.toString())}}return e.join(" ")}c.exports?(o.default=o,c.exports=o):(n=[],d=function(){return o}.apply(r,n),d!==void 0&&(c.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(c,r,n)=>{"use strict";n.d(r,{Z:()=>t});var d=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(d),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),e=n.n(o),l=e()(a());l.push([c.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),l.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const t=l},"../components/components/text/stories/style.module.scss":(c,r,n)=>{"use strict";n.d(r,{Z:()=>t});var d=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(d),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),e={};e.insert="head",e.singleton=!1;var l=a()(o.Z,e);const t=o.Z.locals||{}}}]);})();
