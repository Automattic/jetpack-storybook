"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(p,n,e)=>{e.r(n),e.d(n,{Default:()=>l,ErrorStates:()=>s,FixedDimensions:()=>m,HorizontalBarChart:()=>h,ManyDataSeries:()=>v,SingleSeries:()=>u,SmartFormatting:()=>i,TimeSeries:()=>c,WithLegend:()=>r,WithVerticalLegend:()=>b,__namedExportsOrder:()=>w,default:()=>D});var o=e("../charts/src/components/line-chart/stories/large-values-sample.ts"),d=e("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),g=e("../charts/src/components/bar-chart/bar-chart.tsx"),a=e("../charts/src/components/bar-chart/stories/sample-data.ts"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import largeValuesData from '../../line-chart/stories/large-values-sample';
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
	argTypes: {
		maxWidth: {
			control: {
				type: 'number',
				min: 100,
				max: 1200,
			},
		},
		aspectRatio: {
			control: {
				type: 'number',
				min: 0,
				max: 1,
			},
		},
		resizeDebounceTime: {
			control: {
				type: 'number',
				min: 0,
				max: 10000,
			},
		},
	},
} satisfies Meta< typeof BarChart >;

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
		maxWidth: 1200,
		aspectRatio: 0.5,
		resizeDebounceTime: 300,
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
		showLegend: true,
		legendOrientation: 'vertical',
		height: 600,
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

export const HorizontalBarChart: Story = {
	args: {
		...Default.args,
		data: [ data[ 0 ], data[ 1 ], data[ 2 ] ],
		orientation: 'horizontal',
		gridVisibility: 'none',
	},
};
`,_={Default:{startLoc:{col:23,line:50},endLoc:{col:1,line:62},startBody:{col:23,line:50},endBody:{col:1,line:62}},SingleSeries:{startLoc:{col:28,line:65},endLoc:{col:1,line:77},startBody:{col:28,line:65},endBody:{col:1,line:77}},TimeSeries:{startLoc:{col:26,line:80},endLoc:{col:1,line:104},startBody:{col:26,line:80},endBody:{col:1,line:104}},ManyDataSeries:{startLoc:{col:30,line:107},endLoc:{col:1,line:119},startBody:{col:30,line:107},endBody:{col:1,line:119}},WithLegend:{startLoc:{col:26,line:120},endLoc:{col:1,line:128},startBody:{col:26,line:120},endBody:{col:1,line:128}},WithVerticalLegend:{startLoc:{col:34,line:129},endLoc:{col:1,line:136},startBody:{col:34,line:129},endBody:{col:1,line:136}},FixedDimensions:{startLoc:{col:31,line:137},endLoc:{col:1,line:151},startBody:{col:31,line:137},endBody:{col:1,line:151}},ErrorStates:{startLoc:{col:27,line:152},endLoc:{col:1,line:196},startBody:{col:27,line:152},endBody:{col:1,line:196}},SmartFormatting:{startLoc:{col:31,line:206},endLoc:{col:1,line:214},startBody:{col:31,line:206},endBody:{col:1,line:214}},HorizontalBarChart:{startLoc:{col:34,line:222},endLoc:{col:1,line:229},startBody:{col:34,line:222},endBody:{col:1,line:229}}};const D={title:"JS Packages/Charts/Types/Bar Chart",component:g.A,parameters:{storySource:{source:`import largeValuesData from '../../line-chart/stories/large-values-sample';
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
  })],
  argTypes: {
    maxWidth: {
      control: {
        type: 'number',
        min: 100,
        max: 1200
      }
    },
    aspectRatio: {
      control: {
        type: 'number',
        min: 0,
        max: 1
      }
    },
    resizeDebounceTime: {
      control: {
        type: 'number',
        min: 0,
        max: 10000
      }
    }
  }
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
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
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
    showLegend: true,
    legendOrientation: 'vertical',
    height: 600
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
};
export const HorizontalBarChart = {
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
};`,locationsMap:{default:{startLoc:{col:23,line:50},endLoc:{col:1,line:62},startBody:{col:23,line:50},endBody:{col:1,line:62}},"single-series":{startLoc:{col:28,line:65},endLoc:{col:1,line:77},startBody:{col:28,line:65},endBody:{col:1,line:77}},"time-series":{startLoc:{col:26,line:80},endLoc:{col:1,line:104},startBody:{col:26,line:80},endBody:{col:1,line:104}},"many-data-series":{startLoc:{col:30,line:107},endLoc:{col:1,line:119},startBody:{col:30,line:107},endBody:{col:1,line:119}},"with-legend":{startLoc:{col:26,line:120},endLoc:{col:1,line:128},startBody:{col:26,line:120},endBody:{col:1,line:128}},"with-vertical-legend":{startLoc:{col:34,line:129},endLoc:{col:1,line:136},startBody:{col:34,line:129},endBody:{col:1,line:136}},"fixed-dimensions":{startLoc:{col:31,line:137},endLoc:{col:1,line:151},startBody:{col:31,line:137},endBody:{col:1,line:151}},"error-states":{startLoc:{col:27,line:152},endLoc:{col:1,line:196},startBody:{col:27,line:152},endBody:{col:1,line:196}},"smart-formatting":{startLoc:{col:31,line:206},endLoc:{col:1,line:214},startBody:{col:31,line:206},endBody:{col:1,line:214}},"horizontal-bar-chart":{startLoc:{col:34,line:222},endLoc:{col:1,line:229},startBody:{col:34,line:222},endBody:{col:1,line:229}}}},layout:"centered"},decorators:[y=>(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,t.jsx)(y,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},l={args:{withTooltips:!0,data:[a.A[0],a.A[1],a.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},u={args:{...l.args,data:[a.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},c={args:{...l.args,data:[d.A[0]],options:{axis:{x:{tickFormat:y=>new Date(y).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},v={args:{...l.args,data:a.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},r={args:{...l.args,data:a.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},b={args:{...r.args,showLegend:!0,legendOrientation:"vertical",height:600}},m={args:{...l.args,width:800,height:400,data:[a.A[0],a.A[1],a.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},s={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,t.jsx)(g.A,{data:[]})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Data"}),(0,t.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,t.jsx)(g.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};s.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const i={args:{withTooltips:!0,data:o.A,showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}};i.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const h={args:{...l.args,data:[a.A[0],a.A[1],a.A[2]],orientation:"horizontal",gridVisibility:"none"}},w=["Default","SingleSeries","TimeSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions","ErrorStates","SmartFormatting","HorizontalBarChart"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...r.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    showLegend: true,
    legendOrientation: 'vertical',
    height: 600
  }
}`,...b.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...i.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...h.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/stories/sample-data.ts":(p,n,e)=>{e.d(n,{A:()=>d});const d=[{group:"United States",label:"United States",data:[{label:"1896",value:20},{label:"1900",value:47},{label:"1904",value:239},{label:"1908",value:47},{label:"1912",value:63},{label:"1920",value:95},{label:"1924",value:99},{label:"1928",value:56},{label:"1932",value:103},{label:"1936",value:56},{label:"1948",value:84},{label:"1952",value:76},{label:"1956",value:74},{label:"1960",value:71},{label:"1964",value:90},{label:"1968",value:107},{label:"1972",value:94},{label:"1976",value:94},{label:"1980",value:0},{label:"1984",value:174},{label:"1988",value:94},{label:"1992",value:108},{label:"1996",value:101},{label:"2000",value:93},{label:"2004",value:101},{label:"2008",value:112},{label:"2012",value:104},{label:"2016",value:121},{label:"2020",value:113},{label:"2024",value:126}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:7},{label:"1900",value:30},{label:"1904",value:1},{label:"1908",value:146},{label:"1912",value:41},{label:"1920",value:43},{label:"1924",value:34},{label:"1928",value:20},{label:"1932",value:16},{label:"1936",value:14},{label:"1948",value:23},{label:"1952",value:11},{label:"1956",value:24},{label:"1960",value:20},{label:"1964",value:18},{label:"1968",value:13},{label:"1972",value:18},{label:"1976",value:13},{label:"1980",value:21},{label:"1984",value:37},{label:"1988",value:24},{label:"1992",value:20},{label:"1996",value:15},{label:"2000",value:28},{label:"2004",value:30},{label:"2008",value:47},{label:"2012",value:65},{label:"2016",value:67},{label:"2020",value:65},{label:"2024",value:60}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:2},{label:"1920",value:0},{label:"1924",value:4},{label:"1928",value:5},{label:"1932",value:18},{label:"1936",value:20},{label:"1948",value:0},{label:"1952",value:9},{label:"1956",value:19},{label:"1960",value:18},{label:"1964",value:29},{label:"1968",value:25},{label:"1972",value:29},{label:"1976",value:25},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:14},{label:"1992",value:22},{label:"1996",value:14},{label:"2000",value:18},{label:"2004",value:37},{label:"2008",value:25},{label:"2012",value:38},{label:"2016",value:41},{label:"2020",value:58},{label:"2024",value:45}]},{group:"China",label:"China",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:0},{label:"1952",value:0},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:0},{label:"1968",value:0},{label:"1972",value:0},{label:"1976",value:0},{label:"1980",value:0},{label:"1984",value:32},{label:"1988",value:28},{label:"1992",value:54},{label:"1996",value:50},{label:"2000",value:59},{label:"2004",value:63},{label:"2008",value:100},{label:"2012",value:91},{label:"2016",value:70},{label:"2020",value:88},{label:"2024",value:91}]},{group:"France",label:"France",data:[{label:"1896",value:11},{label:"1900",value:101},{label:"1904",value:0},{label:"1908",value:19},{label:"1912",value:14},{label:"1920",value:41},{label:"1924",value:38},{label:"1928",value:21},{label:"1932",value:19},{label:"1936",value:19},{label:"1948",value:29},{label:"1952",value:18},{label:"1956",value:14},{label:"1960",value:5},{label:"1964",value:15},{label:"1968",value:15},{label:"1972",value:13},{label:"1976",value:9},{label:"1980",value:14},{label:"1984",value:28},{label:"1988",value:16},{label:"1992",value:29},{label:"1996",value:37},{label:"2000",value:38},{label:"2004",value:33},{label:"2008",value:43},{label:"2012",value:35},{label:"2016",value:42},{label:"2020",value:33},{label:"2024",value:55}]},{group:"Germany",label:"Germany",data:[{label:"1896",value:13},{label:"1900",value:8},{label:"1904",value:4},{label:"1908",value:22},{label:"1912",value:25},{label:"1928",value:31},{label:"1932",value:20},{label:"1936",value:89},{label:"1952",value:24},{label:"1956",value:64},{label:"1960",value:87},{label:"1964",value:96},{label:"1968",value:91},{label:"1972",value:133},{label:"1976",value:125},{label:"1980",value:126},{label:"1984",value:59},{label:"1988",value:142},{label:"1992",value:82},{label:"1996",value:65},{label:"2000",value:56},{label:"2004",value:48},{label:"2008",value:41},{label:"2012",value:44},{label:"2016",value:42},{label:"2020",value:37},{label:"2024",value:40}]},{group:"Australia",label:"Australia",data:[{label:"1896",value:0},{label:"1900",value:2},{label:"1904",value:0},{label:"1908",value:15},{label:"1912",value:7},{label:"1920",value:3},{label:"1924",value:6},{label:"1928",value:4},{label:"1932",value:5},{label:"1936",value:3},{label:"1948",value:13},{label:"1952",value:11},{label:"1956",value:35},{label:"1960",value:22},{label:"1964",value:18},{label:"1968",value:17},{label:"1972",value:8},{label:"1976",value:5},{label:"1980",value:9},{label:"1984",value:24},{label:"1988",value:14},{label:"1992",value:27},{label:"1996",value:41},{label:"2000",value:58},{label:"2004",value:49},{label:"2008",value:46},{label:"2012",value:35},{label:"2016",value:29},{label:"2020",value:46},{label:"2024",value:42}]},{group:"Poland",label:"Poland",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:5},{label:"1932",value:7},{label:"1936",value:6},{label:"1948",value:0},{label:"1952",value:4},{label:"1956",value:9},{label:"1960",value:21},{label:"1964",value:23},{label:"1968",value:18},{label:"1972",value:21},{label:"1976",value:26},{label:"1980",value:32},{label:"1984",value:0},{label:"1988",value:16},{label:"1992",value:19},{label:"1996",value:17},{label:"2000",value:14},{label:"2004",value:10},{label:"2008",value:10},{label:"2012",value:10},{label:"2016",value:11},{label:"2020",value:14},{label:"2024",value:15}]},{group:"Jamaica",label:"Jamaica",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:0},{label:"1908",value:0},{label:"1912",value:0},{label:"1920",value:0},{label:"1924",value:0},{label:"1928",value:0},{label:"1932",value:0},{label:"1936",value:0},{label:"1948",value:3},{label:"1952",value:2},{label:"1956",value:0},{label:"1960",value:0},{label:"1964",value:2},{label:"1968",value:1},{label:"1972",value:1},{label:"1976",value:2},{label:"1980",value:3},{label:"1984",value:3},{label:"1988",value:2},{label:"1992",value:4},{label:"1996",value:6},{label:"2000",value:9},{label:"2004",value:5},{label:"2008",value:11},{label:"2012",value:12},{label:"2016",value:11},{label:"2020",value:9},{label:"2024",value:10}]}]},"../charts/src/components/line-chart/stories/large-values-sample.ts":(p,n,e)=>{e.d(n,{A:()=>d});const d=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(p,n,e)=>{e.d(n,{A:()=>o});const o=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]}}]);
