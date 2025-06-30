"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2194],{"../charts/src/components/pie-chart/stories/pie-legend.stories.tsx":(h,c,e)=>{e.r(c),e.d(c,{AlignmentPositioning:()=>n,Default:()=>t,VerticalOrientation:()=>o,__namedExportsOrder:()=>_,default:()=>y});var r=e("../charts/src/stories/legend-config.tsx"),d=e("../charts/src/components/pie-chart/pie-chart.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=`import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
import { PieChart } from '../../pie-chart';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const data = [
	{
		label: 'Desktop',
		value: 45000,
		valueDisplay: '45K',
		percentage: 45,
	},
	{
		label: 'Mobile',
		value: 35000,
		valueDisplay: '35K',
		percentage: 35,
	},
	{
		label: 'Tablet',
		value: 20000,
		valueDisplay: '20K',
		percentage: 20,
	},
];

const meta: Meta< typeof PieChart > = {
	title: 'JS Packages/Charts/Types/Pie Chart/Legend',
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
	data,
	width: 600,
	height: 600,
	thickness: 0, // Full pie (not donut)
	innerRadius: 0, // Explicitly set inner radius for full pie
	gapScale: 0.03,
	padding: 20,
	cornerScale: 0.03,
	withTooltips: true,
	showLegend: true,
	legendOrientation: 'horizontal' as const,
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
`,i={Default:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}},AlignmentPositioning:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}},VerticalOrientation:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}}};const s=[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],y={title:"JS Packages/Charts/Types/Pie Chart/Legend",component:d.A,parameters:{storySource:{source:`import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
import { PieChart } from '../../pie-chart';
import { jsx as _jsx } from "react/jsx-runtime";
const data = [{
  label: 'Desktop',
  value: 45000,
  valueDisplay: '45K',
  percentage: 45
}, {
  label: 'Mobile',
  value: 35000,
  valueDisplay: '35K',
  percentage: 35
}, {
  label: 'Tablet',
  value: 20000,
  valueDisplay: '20K',
  percentage: 20
}];
const meta = {
  title: 'JS Packages/Charts/Types/Pie Chart/Legend',
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
  data,
  width: 600,
  height: 600,
  thickness: 0,
  // Full pie (not donut)
  innerRadius: 0,
  // Explicitly set inner radius for full pie
  gapScale: 0.03,
  padding: 20,
  cornerScale: 0.03,
  withTooltips: true,
  showLegend: true,
  legendOrientation: 'horizontal'
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
};`,locationsMap:{default:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}},"alignment-positioning":{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}},"vertical-orientation":{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}}}},layout:"centered"},decorators:r.x,argTypes:r.r},g=u=>(0,a.jsx)(d.A,{...u}),p={data:s,width:600,height:600,thickness:0,innerRadius:0,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"horizontal"},t=g.bind({});t.args={...p};const n=g.bind({});n.args={...p,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const o=g.bind({});o.args={...p,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const _=["Default","AlignmentPositioning","VerticalOrientation"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...n.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...o.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(h,c,e)=>{e.d(c,{r:()=>l,x:()=>i});var r=e("../charts/src/providers/theme/themes.ts"),d=e("../charts/src/providers/theme/theme-provider.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:r.QI,woo:r.pk},defaultValue:void 0,table:{category:"Theme"}}},i=[(s,{args:m})=>(0,a.jsx)(d.NP,{theme:m.theme,children:(0,a.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,a.jsx)(s,{})})})];try{l.displayName="legendArgTypes",l.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{i.displayName="legendDecorator",i.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:i.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}}}]);
