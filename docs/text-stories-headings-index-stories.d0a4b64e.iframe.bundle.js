"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2473],{"../components/components/text/stories/headings.index.stories.tsx":(u,_,n)=>{n.r(_),n.d(_,{Default:()=>i,HeadlineH2:()=>c,HeadlineH3:()=>p,__namedExportsOrder:()=>E,default:()=>m});var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=n("../components/components/text/index.tsx"),r=n("../components/components/text/stories/style.module.scss"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=`import React from 'react';
import { H2, H3 } from '../index.js';
import styles from './style.module.scss';
import type { H3Props } from '../types.js';

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
 * @param {object}          props          - Component props.
 * @param {React.Component} props.children - Icon component children.
 * @return {React.Component}                Text component instance.
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
`,o={Default:{startLoc:{col:17,line:55},endLoc:{col:1,line:63},startBody:{col:17,line:55},endBody:{col:1,line:63}},HeadlineH2:{startLoc:{col:19,line:43},endLoc:{col:2,line:48},startBody:{col:19,line:43},endBody:{col:2,line:48}},HeadlineH3:{startLoc:{col:19,line:49},endLoc:{col:2,line:54},startBody:{col:19,line:49},endBody:{col:2,line:54}}};const t=["regular","bold"],m={parameters:{storySource:{source:`import React from 'react';
import { H2, H3 } from '../index.js';
import styles from './style.module.scss';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const TIPOGRAPHY_WEIGHTS = ['regular', 'bold'];
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
 * @param {object}          props          - Component props.
 * @param {React.Component} props.children - Icon component children.
 * @return {React.Component}                Text component instance.
 */
function Instance({
  children
}) {
  return /*#__PURE__*/_jsxs("div", {
    className: styles.instance,
    children: [/*#__PURE__*/_jsx("span", {
      children: "Text above to the the component..."
    }), children, /*#__PURE__*/_jsx("span", {
      children: "Text below to the the component..."
    })]
  });
}
const TemplateH2 = args => /*#__PURE__*/_jsx(Instance, {
  children: /*#__PURE__*/_jsx(H2, {
    ...args,
    children: args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'
  })
});
const TemplateH3 = args => /*#__PURE__*/_jsx(Instance, {
  children: /*#__PURE__*/_jsx(H3, {
    ...args,
    children: args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'
  })
});
const Template = args => {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(TemplateH2, {
      ...args
    }), /*#__PURE__*/_jsx(TemplateH3, {
      ...args
    })]
  });
};
const DefaultArgs = {};
export const Default = Template.bind({});
Default.args = DefaultArgs;
export const HeadlineH2 = TemplateH2.bind({});
HeadlineH2.storyName = 'H2';
HeadlineH2.args = {
  weight: 'bold'
};
export const HeadlineH3 = TemplateH3.bind({});
HeadlineH3.storyName = 'H3';
HeadlineH3.args = {
  weight: 'bold'
};`,locationsMap:{default:{startLoc:{col:17,line:55},endLoc:{col:1,line:63},startBody:{col:17,line:55},endBody:{col:1,line:63}},"headline-h-2":{startLoc:{col:19,line:43},endLoc:{col:2,line:48},startBody:{col:19,line:43},endBody:{col:2,line:48}},"headline-h-3":{startLoc:{col:19,line:49},endLoc:{col:2,line:54},startBody:{col:19,line:49},endBody:{col:2,line:54}}}}},title:"JS Packages/Components/Text/Heading",component:l.H2,argTypes:{children:{control:{type:"text"}},weight:{control:{type:"select"},options:t}}};function H({children:a}){return(0,e.jsxs)("div",{className:r.A.instance,children:[(0,e.jsx)("span",{children:"Text above to the the component..."}),a,(0,e.jsx)("span",{children:"Text below to the the component..."})]})}const g=a=>(0,e.jsx)(H,{children:(0,e.jsx)(l.H2,{...a,children:a?.children||"Headline Medium - Manage your Jetpack plan and products all in one place"})}),h=a=>(0,e.jsx)(H,{children:(0,e.jsx)(l.H3,{...a,children:a?.children||"Headline Small - Manage your Jetpack plan and products all in one place"})}),y=a=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g,{...a}),(0,e.jsx)(h,{...a})]}),x={},i=y.bind({});i.args=x;const c=g.bind({});c.storyName="H2",c.args={weight:"bold"};const p=h.bind({});p.storyName="H3",p.args={weight:"bold"};const E=["Default","HeadlineH2","HeadlineH3"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <>
            <TemplateH2 {...args} />
            <TemplateH3 {...args} />
        </>;
}`,...i.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Instance>
        <H2 {...args}>
            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}
        </H2>
    </Instance>`,...c.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Instance>
        <H3 {...args}>
            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}
        </H3>
    </Instance>`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(u,_,n)=>{n.d(_,{A:()=>r});function d(e){var s,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var m=e.length;for(s=0;s<m;s++)e[s]&&(o=d(e[s]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function l(){for(var e,s,o=0,t="",m=arguments.length;o<m;o++)(e=arguments[o])&&(s=d(e))&&(t&&(t+=" "),t+=s);return t}const r=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(u,_,n)=>{n.d(_,{A:()=>o});var d=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(d),r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=n.n(r),s=e()(l());s.push([u.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),s.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const o=s},"../components/components/text/stories/style.module.scss":(u,_,n)=>{n.d(_,{A:()=>o});var d=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(d),r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),e={};e.insert="head",e.singleton=!1;var s=l()(r.A,e);const o=r.A.locals||{}}}]);
