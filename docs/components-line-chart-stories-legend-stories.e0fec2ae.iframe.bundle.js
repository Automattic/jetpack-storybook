"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3605],{"../charts/src/components/line-chart/stories/legend.stories.tsx":(h,i,e)=>{e.r(i),e.d(i,{AlignmentPositioning:()=>n,Default:()=>t,__namedExportsOrder:()=>_,default:()=>g});var d=e("../charts/src/stories/legend-config.tsx"),l=e("../charts/src/components/line-chart/line-chart.tsx"),r=e("../charts/src/components/line-chart/stories/config.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=`import { legendArgTypes } from '../../../stories/legend-config';
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
	legendAlign: 'right',
	legendAlignmentVertical: 'top',
};
`,a={Default:{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}},AlignmentPositioning:{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}}};const g={parameters:{storySource:{source:`import { legendArgTypes } from '../../../stories/legend-config';
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
      options: ['circle', 'rect']
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
  legendAlign: 'right',
  legendAlignmentVertical: 'top'
};`,locationsMap:{default:{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}},"alignment-positioning":{startLoc:{col:17,line:18},endLoc:{col:2,line:20},startBody:{col:17,line:18},endBody:{col:2,line:20}}}}},...r.N,title:"JS Packages/Charts/Types/Line Chart/Legend",argTypes:{...r.N.argTypes,...d.r,legendShape:{control:"select",options:["circle","rect"]}}},p=y=>(0,o.jsx)(l.A,{...y}),m={...r.p,showLegend:!0,height:400},t=p.bind({});t.args={...m};const n=p.bind({});n.args={...m,legendAlign:"right",legendAlignmentVertical:"top"};const _=["Default","AlignmentPositioning"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(h,i,e)=>{e.d(i,{r:()=>s,x:()=>a});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../charts/src/providers/theme/themes.ts"),r=e("../charts/src/providers/theme/theme-provider.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s={legendAlignmentHorizontal:{control:"select",options:["left","center","right"]},legendAlignmentVertical:{control:"select",options:["top","bottom"]},legendOrientation:{control:"select",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:l.QI,woo:l.pk},defaultValue:void 0}},a=[(c,{args:g})=>(0,o.jsx)(r.NP,{theme:g.theme,children:(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,o.jsx)(c,{})})})];try{s.displayName="legendArgTypes",s.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:s.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}try{a.displayName="legendDecorator",a.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"legendDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendDecorator"]={docgenInfo:a.__docgenInfo,name:"legendDecorator",path:"../charts/src/stories/legend-config.tsx#legendDecorator"})}catch{}}}]);
