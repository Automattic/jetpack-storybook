"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2473],{"../components/components/text/stories/headings.index.stories.tsx":(g,r,o)=>{o.r(r),o.d(r,{Default:()=>l,HeadlineH2:()=>a,HeadlineH3:()=>t,__namedExportsOrder:()=>_,default:()=>m});var s=o("../components/components/text/index.tsx"),c=o("../components/components/text/stories/style.module.scss"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=`import { H2, H3 } from '../index.tsx';
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
`,h={Default:{startLoc:{col:17,line:54},endLoc:{col:1,line:62},startBody:{col:17,line:54},endBody:{col:1,line:62}},HeadlineH2:{startLoc:{col:19,line:42},endLoc:{col:2,line:47},startBody:{col:19,line:42},endBody:{col:2,line:47}},HeadlineH3:{startLoc:{col:19,line:48},endLoc:{col:2,line:53},startBody:{col:19,line:48},endBody:{col:2,line:53}}};const p=["regular","bold"],m={parameters:{storySource:{source:`import { H2, H3 } from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:54},endLoc:{col:1,line:62},startBody:{col:17,line:54},endBody:{col:1,line:62}},"headline-h-2":{startLoc:{col:19,line:42},endLoc:{col:2,line:47},startBody:{col:19,line:42},endBody:{col:2,line:47}},"headline-h-3":{startLoc:{col:19,line:48},endLoc:{col:2,line:53},startBody:{col:19,line:48},endBody:{col:2,line:53}}}}},title:"JS Packages/Components/Text/Heading",component:s.H2,argTypes:{children:{control:{type:"text"}},weight:{control:{type:"select"},options:p}}};function u({children:n}){return(0,e.jsxs)("div",{className:c.A.instance,children:[(0,e.jsx)("span",{children:"Text above to the the component..."}),n,(0,e.jsx)("span",{children:"Text below to the the component..."})]})}const i=n=>(0,e.jsx)(u,{children:(0,e.jsx)(s.H2,{...n,children:n?.children||"Headline Medium - Manage your Jetpack plan and products all in one place"})}),d=n=>(0,e.jsx)(u,{children:(0,e.jsx)(s.H3,{...n,children:n?.children||"Headline Small - Manage your Jetpack plan and products all in one place"})}),v=n=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i,{...n}),(0,e.jsx)(d,{...n})]}),H={},l=v.bind({});l.args=H;const a=i.bind({});a.storyName="H2",a.args={weight:"bold"};const t=d.bind({});t.storyName="H3",t.args={weight:"bold"};const _=["Default","HeadlineH2","HeadlineH3"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  return <>
            <TemplateH2 {...args} />
            <TemplateH3 {...args} />
        </>;
}`,...l.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Instance>
        <H2 {...args}>
            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}
        </H2>
    </Instance>`,...a.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Instance>
        <H3 {...args}>
            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}
        </H3>
    </Instance>`,...t.parameters?.docs?.source}}};try{H2.displayName="H2",H2.__docgenInfo={description:"Heading component - Medium size.",displayName:"H2",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'},{value:'"label"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text itself that will be rendered.",name:"children",required:!0,type:{name:"ReactNode"}},component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"FC<{ [prop: string]: unknown; }> | ElementType"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/text/stories/headings.index.stories.tsx#H2"]={docgenInfo:H2.__docgenInfo,name:"H2",path:"../components/components/text/stories/headings.index.stories.tsx#H2"})}catch{}}}]);
