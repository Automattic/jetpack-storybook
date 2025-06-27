"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3605],{"../charts/src/components/line-chart/stories/legend.stories.tsx":(h,a,e)=>{e.r(a),e.d(a,{AlignmentPositioning:()=>o,Default:()=>r,__namedExportsOrder:()=>_,default:()=>m});var i=e("../charts/src/stories/legend-config.tsx"),c=e("../charts/src/components/line-chart/line-chart.tsx"),t=e("../charts/src/components/line-chart/stories/config.tsx"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=`import { legendArgTypes } from '../../../stories/legend-config';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta: Meta< typeof LineChart > = {
	...lineChartMetaArgs,
	title: 'JS Packages/Charts/Types/Line Chart/Legend',
	argTypes: {
		...lineChartMetaArgs.argTypes,
		...legendArgTypes,
		legendShape: {
			control: 'select',
			options: [ 'circle', 'rect' ],
			table: { category: 'Legend' },
		},
	},
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

export const AlignmentPositioning: StoryObj< typeof LineChart > = Template.bind( {} );
AlignmentPositioning.args = {
	...legendStoryArgs,
	legendAlignmentHorizontal: 'right',
	legendAlignmentVertical: 'top',
};
`,l={Default:{startLoc:{col:17,line:21},endLoc:{col:2,line:23},startBody:{col:17,line:21},endBody:{col:2,line:23}},AlignmentPositioning:{startLoc:{col:17,line:21},endLoc:{col:2,line:23},startBody:{col:17,line:21},endBody:{col:2,line:23}}};const m={parameters:{storySource:{source:`import { legendArgTypes } from '../../../stories/legend-config';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  ...lineChartMetaArgs,
  title: 'JS Packages/Charts/Types/Line Chart/Legend',
  argTypes: {
    ...lineChartMetaArgs.argTypes,
    ...legendArgTypes,
    legendShape: {
      control: 'select',
      options: ['circle', 'rect'],
      table: {
        category: 'Legend'
      }
    }
  }
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
export const AlignmentPositioning = Template.bind({});
AlignmentPositioning.args = {
  ...legendStoryArgs,
  legendAlignmentHorizontal: 'right',
  legendAlignmentVertical: 'top'
};`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:2,line:23},startBody:{col:17,line:21},endBody:{col:2,line:23}},"alignment-positioning":{startLoc:{col:17,line:21},endLoc:{col:2,line:23},startBody:{col:17,line:21},endBody:{col:2,line:23}}}}},...t.N,title:"JS Packages/Charts/Types/Line Chart/Legend",argTypes:{...t.N.argTypes,...i.r,legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}}}},d=y=>(0,n.jsx)(c.A,{...y}),p={...t.p,showLegend:!0,height:400},r=d.bind({});r.args={...p};const o=d.bind({});o.args={...p,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const _=["Default","AlignmentPositioning"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...r.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...o.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(h,a,e)=>{e.d(a,{r:()=>n,x:()=>s});var i=e("../charts/src/providers/theme/themes.ts"),c=e("../charts/src/providers/theme/theme-provider.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={showLegend:{control:"boolean",table:{category:"Legend"}},legendAlignmentHorizontal:{control:"select",options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:"select",options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:"select",options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:"select",options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:"boolean",table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:"select",options:{default:void 0,jetpack:i.QI,woo:i.pk},defaultValue:void 0,table:{category:"Theme"}}},s=[(l,{args:g})=>(0,t.jsx)(c.NP,{theme:g.theme,children:(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,t.jsx)(l,{})})})];try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{s.displayName="legendDecorator",s.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:s.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}}}]);
