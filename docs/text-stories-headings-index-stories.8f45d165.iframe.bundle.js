"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2473],{"../components/components/text/stories/headings.index.stories.tsx":(h,l,s)=>{s.r(l),s.d(l,{Default:()=>o,HeadlineH2:()=>t,HeadlineH3:()=>a,__namedExportsOrder:()=>g,default:()=>H});var r=s("../components/components/text/index.tsx"),p=s("../components/components/text/stories/style.module.scss"),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import { H2, H3 } from '../index.tsx';
import styles from './style.module.scss';
import type { H3Props } from '../types.ts';
import type { Component } from 'react';

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
 * @param {object}    props          - Component props.
 * @param {Component} props.children - Icon component children.
 * @return {Component}                Text component instance.
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
`,y={Default:{startLoc:{col:17,line:54},endLoc:{col:1,line:62},startBody:{col:17,line:54},endBody:{col:1,line:62}},HeadlineH2:{startLoc:{col:19,line:42},endLoc:{col:2,line:47},startBody:{col:19,line:42},endBody:{col:2,line:47}},HeadlineH3:{startLoc:{col:19,line:48},endLoc:{col:2,line:53},startBody:{col:19,line:48},endBody:{col:2,line:53}}};const m=["regular","bold"],H={parameters:{storySource:{source:`import { H2, H3 } from '../index.tsx';
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
 * @param {object}    props          - Component props.
 * @param {Component} props.children - Icon component children.
 * @return {Component}                Text component instance.
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
};`,locationsMap:{default:{startLoc:{col:17,line:54},endLoc:{col:1,line:62},startBody:{col:17,line:54},endBody:{col:1,line:62}},"headline-h-2":{startLoc:{col:19,line:42},endLoc:{col:2,line:47},startBody:{col:19,line:42},endBody:{col:2,line:47}},"headline-h-3":{startLoc:{col:19,line:48},endLoc:{col:2,line:53},startBody:{col:19,line:48},endBody:{col:2,line:53}}}}},title:"JS Packages/Components/Text/Heading",component:r.H2,argTypes:{children:{control:{type:"text"}},weight:{control:{type:"select"},options:m}}};function c({children:e}){return(0,n.jsxs)("div",{className:p.A.instance,children:[(0,n.jsx)("span",{children:"Text above to the the component..."}),e,(0,n.jsx)("span",{children:"Text below to the the component..."})]})}const d=e=>(0,n.jsx)(c,{children:(0,n.jsx)(r.H2,{...e,children:e?.children||"Headline Medium - Manage your Jetpack plan and products all in one place"})}),i=e=>(0,n.jsx)(c,{children:(0,n.jsx)(r.H3,{...e,children:e?.children||"Headline Small - Manage your Jetpack plan and products all in one place"})}),_=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{...e}),(0,n.jsx)(i,{...e})]}),u={},o=_.bind({});o.args=u;const t=d.bind({});t.storyName="H2",t.args={weight:"bold"};const a=i.bind({});a.storyName="H3",a.args={weight:"bold"};const g=["Default","HeadlineH2","HeadlineH3"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <>
            <TemplateH2 {...args} />
            <TemplateH3 {...args} />
        </>;
}`,...o.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Instance>
        <H2 {...args}>
            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}
        </H2>
    </Instance>`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Instance>
        <H3 {...args}>
            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}
        </H3>
    </Instance>`,...a.parameters?.docs?.source}}}}}]);
