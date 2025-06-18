"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3605],{"../charts/src/components/line-chart/stories/legend.stories.tsx":(p,s,e)=>{e.r(s),e.d(s,{Default:()=>t,Rectangle:()=>n,Vertical:()=>r,__namedExportsOrder:()=>g,default:()=>d});var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../charts/src/components/line-chart/line-chart.tsx"),c=e("../charts/src/components/line-chart/stories/config.tsx"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),L=`import React from 'react';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta: Meta< typeof LineChart > = {
	...lineChartMetaArgs,
	title: 'JS Packages/Charts/Types/Line Chart/Legend',
} satisfies Meta< typeof LineChart >;

export default meta;

const Template: StoryFn< typeof LineChart > = args => <LineChart { ...args } />;

const legendStoryArgs = {
	...lineChartStoryArgs,
	showLegend: true,
	height: 400,
};

export const Default: StoryObj< typeof LineChart > = Template.bind( {} );
Default.args = {
	...legendStoryArgs,
};

export const Rectangle: StoryObj< typeof LineChart > = Template.bind( {} );
Rectangle.args = {
	...legendStoryArgs,
	showLegend: true,
	legendShape: 'rect',
};

export const Vertical: StoryObj< typeof LineChart > = Template.bind( {} );
Vertical.args = {
	...legendStoryArgs,
	showLegend: true,
	legendOrientation: 'vertical',
};
`,y={Default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Rectangle:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Vertical:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}}};const d={parameters:{storySource:{source:`import React from 'react';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  ...lineChartMetaArgs,
  title: 'JS Packages/Charts/Types/Line Chart/Legend'
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(LineChart, {
  ...args
});
const legendStoryArgs = {
  ...lineChartStoryArgs,
  showLegend: true,
  height: 400
};
export const Default = Template.bind({});
Default.args = {
  ...legendStoryArgs
};
export const Rectangle = Template.bind({});
Rectangle.args = {
  ...legendStoryArgs,
  showLegend: true,
  legendShape: 'rect'
};
export const Vertical = Template.bind({});
Vertical.args = {
  ...legendStoryArgs,
  showLegend: true,
  legendOrientation: 'vertical'
};`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},rectangle:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},vertical:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}}}}},...c.N,title:"JS Packages/Charts/Types/Line Chart/Legend"},a=m=>(0,i.jsx)(l.A,{...m}),o={...c.p,showLegend:!0,height:400},t=a.bind({});t.args={...o};const n=a.bind({});n.args={...o,showLegend:!0,legendShape:"rect"};const r=a.bind({});r.args={...o,showLegend:!0,legendOrientation:"vertical"};const g=["Default","Rectangle","Vertical"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...r.parameters?.docs?.source}}}}}]);
