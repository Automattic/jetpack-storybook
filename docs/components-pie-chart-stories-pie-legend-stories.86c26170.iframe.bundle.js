"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2194],{"../charts/src/components/pie-chart/stories/pie-legend.stories.tsx":(h,c,e)=>{e.r(c),e.d(c,{AlignmentPositioning:()=>n,Default:()=>t,VerticalOrientation:()=>r,__namedExportsOrder:()=>y,default:()=>u});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/stories/legend-config.tsx"),d=e("../charts/src/components/pie-chart/pie-chart.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=`import React from 'react';
import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
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
`,l={Default:{startLoc:{col:17,line:31},endLoc:{col:2,line:33},startBody:{col:17,line:31},endBody:{col:2,line:33}},AlignmentPositioning:{startLoc:{col:17,line:31},endLoc:{col:2,line:33},startBody:{col:17,line:31},endBody:{col:2,line:33}},VerticalOrientation:{startLoc:{col:17,line:31},endLoc:{col:2,line:33},startBody:{col:17,line:31},endBody:{col:2,line:33}}};const s=[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],u={title:"JS Packages/Charts/Types/Pie Chart/Legend",component:d.A,parameters:{storySource:{source:`import React from 'react';
import { legendArgTypes, legendDecorator } from '../../../stories/legend-config';
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
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};
export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  ...legendStoryArgs,
  legendOrientation: 'vertical',
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};`,locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:2,line:33},startBody:{col:17,line:31},endBody:{col:2,line:33}},"alignment-positioning":{startLoc:{col:17,line:31},endLoc:{col:2,line:33},startBody:{col:17,line:31},endBody:{col:2,line:33}},"vertical-orientation":{startLoc:{col:17,line:31},endLoc:{col:2,line:33},startBody:{col:17,line:31},endBody:{col:2,line:33}}}},layout:"centered"},decorators:o.x,argTypes:o.r},g=f=>(0,a.jsx)(d.A,{...f}),p={data:s,width:600,height:600,thickness:0,innerRadius:0,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"horizontal"},t=g.bind({});t.args={...p};const n=g.bind({});n.args={...p,legendAlign:"right",legendAlignmentVertical:"top"};const r=g.bind({});r.args={...p,legendOrientation:"vertical",legendAlign:"right",legendAlignmentVertical:"top"};const y=["Default","AlignmentPositioning","VerticalOrientation"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...r.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(h,c,e)=>{e.d(c,{r:()=>i,x:()=>l});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/providers/theme/themes.ts"),d=e("../charts/src/providers/theme/theme-provider.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i={legendAlignmentHorizontal:{control:"select",options:["left","center","right"]},legendAlignmentVertical:{control:"select",options:["top","bottom"]},legendOrientation:{control:"select",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:o.QI,woo:o.pk},defaultValue:void 0}},l=[(s,{args:m})=>(0,a.jsx)(d.NP,{theme:m.theme,children:(0,a.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,a.jsx)(s,{})})})];try{i.displayName="legendArgTypes",i.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:i.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{l.displayName="legendDecorator",l.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:l.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}}}]);
