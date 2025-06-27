"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[381],{"../charts/src/components/pie-chart/stories/legend.stories.tsx":(h,s,e)=>{e.r(s),e.d(s,{AlignmentPositioning:()=>a,Default:()=>o,VerticalOrientation:()=>i,__namedExportsOrder:()=>u,default:()=>y});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),r=e("../charts/src/stories/legend-config.tsx"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
import { PieChart } from '../../pie-chart';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const data = [
	{
		label: 'Active Users',
		value: 65000,
		valueDisplay: '65K',
		percentage: 65,
	},
	{
		label: 'Inactive Users',
		value: 35000,
		valueDisplay: '35K',
		percentage: 35,
	},
];

const meta: Meta< typeof PieChart > = {
	title: 'JS Packages/Charts/Types/Donut Chart/Legend',
	component: PieChart,
	parameters: {
		layout: 'centered',
	},
	decorators: legendDecorator,
	argTypes: legendArgTypes,
} satisfies Meta< typeof PieChart >;

export default meta;

const Template: StoryFn< typeof PieChart > = args => <PieChart { ...args } />;

const legendStoryArgs = {
	width: 600,
	thickness: 0.4,
	gapScale: 0.03,
	padding: 20,
	cornerScale: 0.03,
	withTooltips: true,
	data,
	showLegend: true,
	legendOrientation: 'horizontal' as const,
	children: (
		<Group>
			<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
				User Activity
			</Text>
			<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
				Total: 100K Users
			</Text>
		</Group>
	),
};

export const Default: StoryObj< typeof PieChart > = Template.bind( {} );
Default.args = {
	...legendStoryArgs,
};

export const AlignmentPositioning: StoryObj< typeof PieChart > = Template.bind( {} );
AlignmentPositioning.args = {
	...legendStoryArgs,
	legendAlignmentHorizontal: 'right',
	legendAlignmentVertical: 'top',
};

export const VerticalOrientation: StoryObj< typeof PieChart > = Template.bind( {} );
VerticalOrientation.args = {
	...legendStoryArgs,
	legendOrientation: 'vertical',
	legendAlignmentHorizontal: 'right',
	legendAlignmentVertical: 'top',
};
`,m={Default:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},AlignmentPositioning:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},VerticalOrientation:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}}};const _=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],y={title:"JS Packages/Charts/Types/Donut Chart/Legend",component:n.A,parameters:{storySource:{source:`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
import { PieChart } from '../../pie-chart';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const data = [{
  label: 'Active Users',
  value: 65000,
  valueDisplay: '65K',
  percentage: 65
}, {
  label: 'Inactive Users',
  value: 35000,
  valueDisplay: '35K',
  percentage: 35
}];
const meta = {
  title: 'JS Packages/Charts/Types/Donut Chart/Legend',
  component: PieChart,
  parameters: {
    layout: 'centered'
  },
  decorators: legendDecorator,
  argTypes: legendArgTypes
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(PieChart, {
  ...args
});
const legendStoryArgs = {
  width: 600,
  thickness: 0.4,
  gapScale: 0.03,
  padding: 20,
  cornerScale: 0.03,
  withTooltips: true,
  data,
  showLegend: true,
  legendOrientation: 'horizontal',
  children: /*#__PURE__*/_jsxs(Group, {
    children: [/*#__PURE__*/_jsx(Text, {
      textAnchor: "middle",
      verticalAnchor: "middle",
      fontSize: 24,
      y: -16,
      children: "User Activity"
    }), /*#__PURE__*/_jsx(Text, {
      textAnchor: "middle",
      verticalAnchor: "middle",
      fontSize: 18,
      y: 16,
      children: "Total: 100K Users"
    })]
  })
};
export const Default = Template.bind({});
Default.args = {
  ...legendStoryArgs
};
export const AlignmentPositioning = Template.bind({});
AlignmentPositioning.args = {
  ...legendStoryArgs,
  legendAlignmentHorizontal: 'right',
  legendAlignmentVertical: 'top'
};
export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  ...legendStoryArgs,
  legendOrientation: 'vertical',
  legendAlignmentHorizontal: 'right',
  legendAlignmentVertical: 'top'
};`,locationsMap:{default:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},"alignment-positioning":{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},"vertical-orientation":{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}}}},layout:"centered"},decorators:r.x,argTypes:r.r},g=A=>(0,t.jsx)(n.A,{...A}),p={width:600,thickness:.4,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:_,showLegend:!0,legendOrientation:"horizontal",children:(0,t.jsxs)(l.A,{children:[(0,t.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,t.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})},o=g.bind({});o.args={...p};const a=g.bind({});a.args={...p,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const i=g.bind({});i.args={...p,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const u=["Default","AlignmentPositioning","VerticalOrientation"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...o.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...i.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(h,s,e)=>{e.d(s,{r:()=>n,x:()=>t});var l=e("../charts/src/providers/theme/themes.ts"),c=e("../charts/src/providers/theme/theme-provider.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:l.QI,woo:l.pk},defaultValue:void 0,table:{category:"Theme"}}},t=[(d,{args:m})=>(0,r.jsx)(c.NP,{theme:m.theme,children:(0,r.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,r.jsx)(d,{})})})];try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{t.displayName="legendDecorator",t.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:t.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}}}]);
