"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5143],{"../charts/src/components/line-chart/stories/tooltip.stories.tsx":(h,n,e)=>{e.r(n),e.d(n,{CrosshairHorizontal:()=>i,CrosshairVertical:()=>u,Crosshairs:()=>s,Custom:()=>D,Default:()=>r,NoTooltips:()=>d,__namedExportsOrder:()=>x,default:()=>b});var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=e("../charts/src/components/line-chart/line-chart.tsx"),w=e("../charts/src/components/line-chart/stories/config.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=`import React from 'react';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta: Meta< typeof LineChart > = {
	...lineChartMetaArgs,
	title: 'JS Packages/Charts/Types/Line Chart/Tooltips',
} satisfies Meta< typeof LineChart >;

export default meta;

const Template: StoryFn< typeof LineChart > = args => <LineChart { ...args } />;

const tooltipStoryArgs = {
	...lineChartStoryArgs,
	withTooltipCrosshairs: false,
};

export const Default: StoryObj< typeof LineChart > = Template.bind( {} );
Default.args = {
	...tooltipStoryArgs,
};

export const NoTooltips: StoryObj< typeof LineChart > = Template.bind( {} );
NoTooltips.args = {
	...tooltipStoryArgs,
	withTooltips: false,
};

export const Crosshairs: StoryObj< typeof LineChart > = Template.bind( {} );
Crosshairs.args = {
	...tooltipStoryArgs,
	withTooltipCrosshairs: {
		showVertical: true,
		showHorizontal: true,
	},
};

export const CrosshairVertical: StoryObj< typeof LineChart > = Template.bind( {} );
CrosshairVertical.args = {
	...tooltipStoryArgs,
	withTooltipCrosshairs: {
		showVertical: true,
	},
};

export const CrosshairHorizontal: StoryObj< typeof LineChart > = Template.bind( {} );
CrosshairHorizontal.args = {
	...tooltipStoryArgs,
	withTooltipCrosshairs: {
		showHorizontal: true,
	},
};

export const Custom: StoryObj< typeof LineChart > = Template.bind( {} );
Custom.args = {
	...tooltipStoryArgs,
	renderTooltip: ( { tooltipData } ) => {
		const nearestDatum = tooltipData?.nearestDatum?.datum;
		if ( ! nearestDatum ) return null;

		const tooltipPoints = Object.entries( tooltipData?.datumByKey || {} )
			.map( ( [ key, { datum } ] ) => ( {
				key,
				value: datum.value as number,
			} ) )
			.sort( ( a, b ) => b.value - a.value );

		return (
			<div>
				<h3>{ nearestDatum?.date?.toLocaleDateString() } \u{1F4AF} </h3>

				<table style={ { border: '1px solid black', borderCollapse: 'collapse' } }>
					<tbody>
						{ tooltipPoints.map( point => (
							<tr style={ { border: '1px solid black' } } key={ point.key }>
								<td style={ { border: '1px solid black' } }>{ point.key }</td>
								<td>{ point.value }</td>
							</tr>
						) ) }
					</tbody>
				</table>
			</div>
		);
	},
};
`,_={Default:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},NoTooltips:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},Crosshairs:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},CrosshairVertical:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},CrosshairHorizontal:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},Custom:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}}};const b={parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
import React from 'react';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  ...lineChartMetaArgs,
  title: 'JS Packages/Charts/Types/Line Chart/Tooltips'
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(LineChart, {
  ...args
});
const tooltipStoryArgs = {
  ...lineChartStoryArgs,
  withTooltipCrosshairs: false
};
export const Default = Template.bind({});
Default.args = {
  ...tooltipStoryArgs
};
export const NoTooltips = Template.bind({});
NoTooltips.args = {
  ...tooltipStoryArgs,
  withTooltips: false
};
export const Crosshairs = Template.bind({});
Crosshairs.args = {
  ...tooltipStoryArgs,
  withTooltipCrosshairs: {
    showVertical: true,
    showHorizontal: true
  }
};
export const CrosshairVertical = Template.bind({});
CrosshairVertical.args = {
  ...tooltipStoryArgs,
  withTooltipCrosshairs: {
    showVertical: true
  }
};
export const CrosshairHorizontal = Template.bind({});
CrosshairHorizontal.args = {
  ...tooltipStoryArgs,
  withTooltipCrosshairs: {
    showHorizontal: true
  }
};
export const Custom = Template.bind({});
Custom.args = {
  ...tooltipStoryArgs,
  renderTooltip: ({
    tooltipData
  }) => {
    const nearestDatum = tooltipData?.nearestDatum?.datum;
    if (!nearestDatum) return null;
    const tooltipPoints = Object.entries(tooltipData?.datumByKey || {}).map(([key, {
      datum
    }]) => ({
      key,
      value: datum.value
    })).sort((a, b) => b.value - a.value);
    return /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsxs("h3", {
        children: [nearestDatum?.date?.toLocaleDateString(), " \\uD83D\\uDCAF "]
      }), /*#__PURE__*/_jsx("table", {
        style: {
          border: '1px solid black',
          borderCollapse: 'collapse'
        },
        children: /*#__PURE__*/_jsx("tbody", {
          children: tooltipPoints.map(point => /*#__PURE__*/_jsxs("tr", {
            style: {
              border: '1px solid black'
            },
            children: [/*#__PURE__*/_jsx("td", {
              style: {
                border: '1px solid black'
              },
              children: point.key
            }), /*#__PURE__*/_jsx("td", {
              children: point.value
            })]
          }, point.key))
        })
      })]
    });
  }
};`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},"no-tooltips":{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},crosshairs:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},"crosshair-vertical":{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},"crosshair-horizontal":{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}},custom:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}}}}},...w.N,title:"JS Packages/Charts/Types/Line Chart/Tooltips"},l=c=>(0,a.jsx)(v.A,{...c}),o={...w.p,withTooltipCrosshairs:!1},r=l.bind({});r.args={...o};const d=l.bind({});d.args={...o,withTooltips:!1};const s=l.bind({});s.args={...o,withTooltipCrosshairs:{showVertical:!0,showHorizontal:!0}};const u=l.bind({});u.args={...o,withTooltipCrosshairs:{showVertical:!0}};const i=l.bind({});i.args={...o,withTooltipCrosshairs:{showHorizontal:!0}};const D=l.bind({});D.args={...o,renderTooltip:({tooltipData:c})=>{const g=c?.nearestDatum?.datum;if(!g)return null;const T=Object.entries(c?.datumByKey||{}).map(([t,{datum:p}])=>({key:t,value:p.value})).sort((t,p)=>p.value-t.value);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{children:[g?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,a.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:(0,a.jsx)("tbody",{children:T.map(t=>(0,a.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,a.jsx)("td",{style:{border:"1px solid black"},children:t.key}),(0,a.jsx)("td",{children:t.value})]},t.key))})})]})}};const x=["Default","NoTooltips","Crosshairs","CrosshairVertical","CrosshairHorizontal","Custom"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...r.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...d.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...i.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/config.tsx":(h,n,e)=>{e.d(n,{N:()=>y,p:()=>_});var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=e("../charts/src/components/line-chart/line-chart.tsx"),w=e("../charts/src/components/line-chart/stories/sample-data.ts"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y={title:"JS Packages/Charts/Types/Line Chart",component:v.A,parameters:{layout:"centered"},decorators:[C=>(0,a.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,a.jsx)(C,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},_={data:w.A,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0}},"../charts/src/components/line-chart/stories/sample-data.ts":(h,n,e)=>{e.d(n,{A:()=>v});const v=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}]}}]);
