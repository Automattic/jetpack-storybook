"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5143],{"../charts/src/components/line-chart/stories/tooltip.stories.tsx":(L,u,p)=>{p.r(u),p.d(u,{CrosshairHorizontal:()=>i,CrosshairVertical:()=>l,Crosshairs:()=>a,Custom:()=>c,Default:()=>s,NoTooltips:()=>n,__namedExportsOrder:()=>g,default:()=>_});var C=p("../charts/src/components/line-chart/line-chart.tsx"),m=p("../charts/src/components/line-chart/stories/config.tsx"),t=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),T=`import LineChart from '../line-chart';
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
`,x={Default:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},NoTooltips:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},Crosshairs:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},CrosshairVertical:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},CrosshairHorizontal:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},Custom:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}}};const _={parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
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
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},"no-tooltips":{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},crosshairs:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},"crosshair-vertical":{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},"crosshair-horizontal":{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}},custom:{startLoc:{col:17,line:11},endLoc:{col:2,line:13},startBody:{col:17,line:11},endBody:{col:2,line:13}}}}},...m.N,title:"JS Packages/Charts/Types/Line Chart/Tooltips"},r=d=>(0,t.jsx)(C.A,{...d}),e={...m.p,withTooltipCrosshairs:!1},s=r.bind({});s.args={...e};const n=r.bind({});n.args={...e,withTooltips:!1};const a=r.bind({});a.args={...e,withTooltipCrosshairs:{showVertical:!0,showHorizontal:!0}};const l=r.bind({});l.args={...e,withTooltipCrosshairs:{showVertical:!0}};const i=r.bind({});i.args={...e,withTooltipCrosshairs:{showHorizontal:!0}};const c=r.bind({});c.args={...e,renderTooltip:({tooltipData:d})=>{const y=d?.nearestDatum?.datum;if(!y)return null;const b=Object.entries(d?.datumByKey||{}).map(([o,{datum:h}])=>({key:o,value:h.value})).sort((o,h)=>h.value-o.value);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("h3",{children:[y?.date?.toLocaleDateString()," \u{1F4AF} "]}),(0,t.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:(0,t.jsx)("tbody",{children:b.map(o=>(0,t.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,t.jsx)("td",{style:{border:"1px solid black"},children:o.key}),(0,t.jsx)("td",{children:o.value})]},o.key))})})]})}};const g=["Default","NoTooltips","Crosshairs","CrosshairVertical","CrosshairHorizontal","Custom"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...a.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...l.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...i.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}}}}]);
