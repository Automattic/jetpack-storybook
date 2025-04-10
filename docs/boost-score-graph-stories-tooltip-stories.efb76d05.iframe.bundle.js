"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9044],{"../components/components/boost-score-graph/stories/tooltip.stories.tsx":(p,s,o)=>{o.r(s),o.d(s,{__namedExportsOrder:()=>a,_default:()=>t,default:()=>l});var r=o("../components/components/boost-score-graph/tooltip.tsx"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=`import { Tooltip } from '../tooltip.tsx';
import type { Meta } from '@storybook/react';

const meta: Meta< typeof Tooltip > = {
	title: 'JS Packages/Components/Boost Score Tooltip',
	component: Tooltip,
	argTypes: {
		period: {
			control: 'object',
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '300px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

export default meta;

const Template = args => {
	return <Tooltip { ...args } />;
};
export const _default = Template.bind( {} );
_default.args = {
	period: {
		timestamp: 1689772803000,
		dimensions: {
			desktop_overall_score: 75,
			mobile_overall_score: 52,
			desktop_cls: 0.088,
			desktop_lcp: 3.2,
			desktop_tbt: 0,
			mobile_cls: 0.088,
			mobile_lcp: 3.2,
			mobile_tbt: 0,
		},
	},
};
`,i={_default:{startLoc:{col:17,line:21},endLoc:{col:1,line:25},startBody:{col:17,line:21},endBody:{col:1,line:25}}};const l={parameters:{storySource:{source:`import { Tooltip } from '../tooltip.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Boost Score Tooltip',
  component: Tooltip,
  argTypes: {
    period: {
      control: 'object'
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      width: '300px',
      margin: '200px auto',
      fontSize: '16px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
export default meta;
const Template = args => {
  return /*#__PURE__*/_jsx(Tooltip, {
    ...args
  });
};
export const _default = Template.bind({});
_default.args = {
  period: {
    timestamp: 1689772803000,
    dimensions: {
      desktop_overall_score: 75,
      mobile_overall_score: 52,
      desktop_cls: 0.088,
      desktop_lcp: 3.2,
      desktop_tbt: 0,
      mobile_cls: 0.088,
      mobile_lcp: 3.2,
      mobile_tbt: 0
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:1,line:25},startBody:{col:17,line:21},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Boost Score Tooltip",component:r.m,argTypes:{period:{control:"object"}},decorators:[n=>(0,e.jsx)("div",{style:{width:"300px",margin:"200px auto",fontSize:"16px"},children:(0,e.jsx)(n,{})})]},t=(n=>(0,e.jsx)(r.m,{...n})).bind({});t.args={period:{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}};const a=["_default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <Tooltip {...args} />;
}`,...t.parameters?.docs?.source}}}}}]);
