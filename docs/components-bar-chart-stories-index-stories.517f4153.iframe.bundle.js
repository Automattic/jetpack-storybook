"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(w,r,t)=>{t.r(r),t.d(r,{Default:()=>n,ErrorStates:()=>i,FixedDimensions:()=>m,ManyDataSeries:()=>c,SingleSeries:()=>l,SmartFormatting:()=>o,TimeSeries:()=>d,WithLegend:()=>s,WithVerticalLegend:()=>h,__namedExportsOrder:()=>y,default:()=>D});var p=t("../charts/src/components/line-chart/stories/large-values-sample.ts"),u=t("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),g=t("../charts/src/components/bar-chart/bar-chart.tsx"),a=t("../charts/src/components/bar-chart/stories/sample-data.ts"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=`import largeValuesData from '../../line-chart/stories/large-values-sample';
import trafficData from '../../line-chart/stories/site-traffic-sample';
import BarChart from '../bar-chart';
import data from './sample-data';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta< typeof BarChart > = {
	title: 'JS Packages/Charts/Types/Bar Chart',
	component: BarChart,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div
				style={ {
					resize: 'both',
					overflow: 'auto',
					padding: '2rem',
					width: '800px',
					maxWidth: '1200px',
					border: '1px dashed #ccc',
					display: 'inline-block',
				} }
			>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj< typeof BarChart >;

// Default story with multiple series
export const Default: Story = {
	args: {
		withTooltips: true,
		data: [ data[ 0 ], data[ 1 ], data[ 2 ] ], // limit to 3 series for better readability
		showLegend: false,
		legendOrientation: 'horizontal',
		gridVisibility: 'x',
	},
};

// Story with single data series
export const SingleSeries: Story = {
	args: {
		...Default.args,
		data: [ data[ 0 ] ],
	},
	parameters: {
		docs: {
			description: {
				story: 'Bar chart with a single data series.',
			},
		},
	},
};

// Story with single data series
export const TimeSeries: Story = {
	args: {
		...Default.args,
		data: [ trafficData[ 0 ] ],
		options: {
			axis: {
				x: {
					tickFormat: ( timestamp: number ) => {
						const date = new Date( timestamp );
						return date.toLocaleDateString( 'en-US', { dateStyle: 'short' } );
					},
				},
			},
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Bar chart with a time series.',
			},
		},
	},
};

// Story without tooltip
export const ManyDataSeries: Story = {
	args: {
		...Default.args,
		data,
	},
	parameters: {
		docs: {
			description: {
				story: 'Bar chart with many data series.',
			},
		},
	},
};

export const WithLegend = {
	args: {
		...Default.args,
		data,
		showTooltips: true,
		showLegend: true,
		legendOrientation: 'horizontal',
	},
};

export const WithVerticalLegend = {
	args: {
		...WithLegend.args,
		data: [ data[ 0 ] ],
		showLegend: true,
		legendOrientation: 'vertical',
	},
};

export const FixedDimensions: Story = {
	args: {
		...Default.args,
		width: 800,
		height: 400,
		data: [ data[ 0 ], data[ 1 ], data[ 2 ] ],
	},
	parameters: {
		docs: {
			description: {
				story: 'Bar chart with fixed dimensions that override the responsive behavior.',
			},
		},
	},
};

export const ErrorStates: StoryObj< typeof BarChart > = {
	render: () => (
		<div style={ { display: 'grid', gap: '20px' } }>
			<div>
				<h3>Empty Data</h3>
				<div style={ { width: '400px', height: '300px' } }>
					<BarChart data={ [] } />
				</div>
			</div>

			<div>
				<h3>Invalid Data</h3>
				<div style={ { width: '400px', height: '300px' } }>
					<BarChart
						data={ [
							{
								label: 'Invalid Series',
								data: [
									{ date: new Date( 'invalid' ), value: 10, label: 'Invalid Date' },
									{ date: new Date( '2024-01-02' ), value: null, label: 'Null Value' },
								],
								options: {},
							},
						] }
					/>
				</div>
			</div>
		</div>
	),
};

ErrorStates.parameters = {
	docs: {
		description: {
			story:
				'Examples of how the bar chart handles various error states including empty data and invalid data.',
		},
	},
};

// Story demonstrating Smart Formatting (formatYTick) with large values
export const SmartFormatting: Story = {
	args: {
		withTooltips: true,
		data: largeValuesData,
		showLegend: false,
		legendOrientation: 'horizontal',
		gridVisibility: 'x',
	},
};

SmartFormatting.parameters = {
	docs: {
		description: {
			story:
				'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.',
		},
	},
};
`,x={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:36},startBody:{col:23,line:27},endBody:{col:1,line:36}},SingleSeries:{startLoc:{col:28,line:39},endLoc:{col:1,line:51},startBody:{col:28,line:39},endBody:{col:1,line:51}},TimeSeries:{startLoc:{col:26,line:54},endLoc:{col:1,line:78},startBody:{col:26,line:54},endBody:{col:1,line:78}},ManyDataSeries:{startLoc:{col:30,line:81},endLoc:{col:1,line:93},startBody:{col:30,line:81},endBody:{col:1,line:93}},WithLegend:{startLoc:{col:26,line:94},endLoc:{col:1,line:102},startBody:{col:26,line:94},endBody:{col:1,line:102}},WithVerticalLegend:{startLoc:{col:34,line:103},endLoc:{col:1,line:110},startBody:{col:34,line:103},endBody:{col:1,line:110}},FixedDimensions:{startLoc:{col:31,line:111},endLoc:{col:1,line:125},startBody:{col:31,line:111},endBody:{col:1,line:125}},ErrorStates:{startLoc:{col:27,line:126},endLoc:{col:1,line:170},startBody:{col:27,line:126},endBody:{col:1,line:170}},SmartFormatting:{startLoc:{col:31,line:180},endLoc:{col:1,line:188},startBody:{col:31,line:180},endBody:{col:1,line:188}}};const D={title:"JS Packages/Charts/Types/Bar Chart",component:g.A,parameters:{storySource:{source:`import largeValuesData from '../../line-chart/stories/large-values-sample';
import trafficData from '../../line-chart/stories/site-traffic-sample';
import BarChart from '../bar-chart';
import data from './sample-data';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Charts/Types/Bar Chart',
  component: BarChart,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      resize: 'both',
      overflow: 'auto',
      padding: '2rem',
      width: '800px',
      maxWidth: '1200px',
      border: '1px dashed #ccc',
      display: 'inline-block'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
export default meta;
// Default story with multiple series
export const Default = {
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
};

// Story with single data series
export const SingleSeries = {
  args: {
    ...Default.args,
    data: [data[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
};

// Story with single data series
export const TimeSeries = {
  args: {
    ...Default.args,
    data: [trafficData[0]],
    options: {
      axis: {
        x: {
          tickFormat: timestamp => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
};

// Story without tooltip
export const ManyDataSeries = {
  args: {
    ...Default.args,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
};
export const WithLegend = {
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
};
export const WithVerticalLegend = {
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
};
export const FixedDimensions = {
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [data[0], data[1], data[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
};
export const ErrorStates = {
  render: () => /*#__PURE__*/_jsxs("div", {
    style: {
      display: 'grid',
      gap: '20px'
    },
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Empty Data"
      }), /*#__PURE__*/_jsx("div", {
        style: {
          width: '400px',
          height: '300px'
        },
        children: /*#__PURE__*/_jsx(BarChart, {
          data: []
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Invalid Data"
      }), /*#__PURE__*/_jsx("div", {
        style: {
          width: '400px',
          height: '300px'
        },
        children: /*#__PURE__*/_jsx(BarChart, {
          data: [{
            label: 'Invalid Series',
            data: [{
              date: new Date('invalid'),
              value: 10,
              label: 'Invalid Date'
            }, {
              date: new Date('2024-01-02'),
              value: null,
              label: 'Null Value'
            }],
            options: {}
          }]
        })
      })]
    })]
  })
};
ErrorStates.parameters = {
  docs: {
    description: {
      story: 'Examples of how the bar chart handles various error states including empty data and invalid data.'
    }
  }
};

// Story demonstrating Smart Formatting (formatYTick) with large values
export const SmartFormatting = {
  args: {
    withTooltips: true,
    data: largeValuesData,
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
};
SmartFormatting.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:27},endLoc:{col:1,line:36},startBody:{col:23,line:27},endBody:{col:1,line:36}},"single-series":{startLoc:{col:28,line:39},endLoc:{col:1,line:51},startBody:{col:28,line:39},endBody:{col:1,line:51}},"time-series":{startLoc:{col:26,line:54},endLoc:{col:1,line:78},startBody:{col:26,line:54},endBody:{col:1,line:78}},"many-data-series":{startLoc:{col:30,line:81},endLoc:{col:1,line:93},startBody:{col:30,line:81},endBody:{col:1,line:93}},"with-legend":{startLoc:{col:26,line:94},endLoc:{col:1,line:102},startBody:{col:26,line:94},endBody:{col:1,line:102}},"with-vertical-legend":{startLoc:{col:34,line:103},endLoc:{col:1,line:110},startBody:{col:34,line:103},endBody:{col:1,line:110}},"fixed-dimensions":{startLoc:{col:31,line:111},endLoc:{col:1,line:125},startBody:{col:31,line:111},endBody:{col:1,line:125}},"error-states":{startLoc:{col:27,line:126},endLoc:{col:1,line:170},startBody:{col:27,line:126},endBody:{col:1,line:170}},"smart-formatting":{startLoc:{col:31,line:180},endLoc:{col:1,line:188},startBody:{col:31,line:180},endBody:{col:1,line:188}}}},layout:"centered"},decorators:[v=>(0,e.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,e.jsx)(v,{})})]},n={args:{withTooltips:!0,data:[a.A[0],a.A[1],a.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},l={args:{...n.args,data:[a.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},d={args:{...n.args,data:[u.A[0]],options:{axis:{x:{tickFormat:v=>new Date(v).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},c={args:{...n.args,data:a.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},s={args:{...n.args,data:a.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},h={args:{...s.args,data:[a.A[0]],showLegend:!0,legendOrientation:"vertical"}},m={args:{...n.args,width:800,height:400,data:[a.A[0],a.A[1],a.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},i={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(g.A,{data:[]})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(g.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};i.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const o={args:{withTooltips:!0,data:p.A,showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}};o.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const y=["Default","SingleSeries","TimeSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions","ErrorStates","SmartFormatting"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...n.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [trafficData[0]],
    options: {
      axis: {
        x: {
          tickFormat: (timestamp: number) => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...s.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...h.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [data[0], data[1], data[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...o.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(w,r,t)=>{t.d(r,{A:()=>u});const u=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(w,r,t)=>{t.d(r,{A:()=>p});const p=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]}}]);
