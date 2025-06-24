"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[381],{"../charts/src/components/pie-chart/stories/legend.stories.tsx":(h,l,e)=>{e.r(l),e.d(l,{AlignmentPositioning:()=>o,Default:()=>r,VerticalOrientation:()=>s,__namedExportsOrder:()=>A,default:()=>u});var _=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),c=e("../charts/src/stories/legend-config.tsx"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=`import { Group } from '@visx/group';
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
	legendAlign: 'right',
	legendAlignmentVertical: 'top',
};

export const VerticalOrientation: StoryObj< typeof PieChart > = Template.bind( {} );
VerticalOrientation.args = {
	...legendStoryArgs,
	legendOrientation: 'vertical',
	legendAlign: 'right',
	legendAlignmentVertical: 'top',
};
`,d={Default:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},AlignmentPositioning:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},VerticalOrientation:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}}};const g=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],u={title:"JS Packages/Charts/Types/Donut Chart/Legend",component:n.A,parameters:{storySource:{source:`import { Group } from '@visx/group';
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
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};
export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  ...legendStoryArgs,
  legendOrientation: 'vertical',
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};`,locationsMap:{default:{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},"alignment-positioning":{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}},"vertical-orientation":{startLoc:{col:17,line:27},endLoc:{col:2,line:29},startBody:{col:17,line:27},endBody:{col:2,line:29}}}},layout:"centered"},decorators:c.x,argTypes:c.r},p=y=>(0,t.jsx)(n.A,{...y}),m={width:600,thickness:.4,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:g,showLegend:!0,legendOrientation:"horizontal",children:(0,t.jsxs)(_.A,{children:[(0,t.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,t.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})},r=p.bind({});r.args={...m};const o=p.bind({});o.args={...m,legendAlign:"right",legendAlignmentVertical:"top"};const s=p.bind({});s.args={...m,legendOrientation:"vertical",legendAlign:"right",legendAlignmentVertical:"top"};const A=["Default","AlignmentPositioning","VerticalOrientation"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...r.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...s.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(h,l,e)=>{e.d(l,{r:()=>t,x:()=>i});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/providers/theme/themes.ts"),c=e("../charts/src/providers/theme/theme-provider.tsx"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t={legendAlignmentHorizontal:{control:"select",options:["left","center","right"]},legendAlignmentVertical:{control:"select",options:["top","bottom"]},legendOrientation:{control:"select",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:a.QI,woo:a.pk},defaultValue:void 0}},i=[(d,{args:g})=>(0,n.jsx)(c.NP,{theme:g.theme,children:(0,n.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,n.jsx)(d,{})})})];try{t.displayName="legendArgTypes",t.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:t.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{i.displayName="legendDecorator",i.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:i.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}}}]);
