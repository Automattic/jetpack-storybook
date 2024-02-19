"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5161],{"../components/components/boost-score-graph/stories/tooltip.stories.tsx":(m,s,o)=>{var a,p,i;o.r(s),o.d(s,{__namedExportsOrder:()=>d,_default:()=>t,default:()=>c});var r=o("../components/components/boost-score-graph/tooltip.tsx"),e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=`import { Tooltip } from '../tooltip';
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
`,u={_default:{startLoc:{col:17,line:23},endLoc:{col:1,line:25},startBody:{col:17,line:23},endBody:{col:1,line:25}}};const c={parameters:{storySource:{source:`import { Tooltip } from '../tooltip';
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
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:1,line:25},startBody:{col:17,line:23},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Boost Score Tooltip",component:r.u,argTypes:{period:{control:"object"}},decorators:[n=>(0,e.jsx)("div",{style:{width:"300px",margin:"200px auto",fontSize:"16px"},children:(0,e.jsx)(n,{})})]},l=n=>(0,e.jsx)(r.u,{...n});l.displayName="Template";const t=l.bind({});t.args={period:{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}},t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <Tooltip {...args} />;
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const d=["_default"]}}]);})();
