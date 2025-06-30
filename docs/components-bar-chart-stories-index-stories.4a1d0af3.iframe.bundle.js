(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(w,o,d)=>{"use strict";d.r(o),d.d(o,{Default:()=>a,ErrorStates:()=>v,FixedDimensions:()=>l,HorizontalBarChart:()=>f,ManyDataSeries:()=>r,SingleSeries:()=>c,SmartFormatting:()=>p,TimeSeries:()=>e,WithPatterns:()=>m,__namedExportsOrder:()=>x,default:()=>n});var h=d("../charts/src/components/line-chart/stories/large-values-sample.ts"),g=d("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),D=d("../charts/src/components/bar-chart/bar-chart.tsx"),t=d("../charts/src/components/bar-chart/stories/sample-data.ts"),i=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=`import largeValuesData from '../../line-chart/stories/large-values-sample';
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
		data: [
			{
				...trafficData[ 0 ],
				label: 'Data with dateString and date',
				data: [
					...trafficData[ 0 ].data,
					{ dateString: '2024-01-31', value: 2230 },
					{ dateString: '2024-02-01', value: 2580 },
					{ date: new Date( '2024-02-02 00:00:00' ), value: 3500 },
					{ dateString: '2024-02-03 00:00:00', value: 1500 },
					{ dateString: '2024-02-04', value: 2500 },
					{ dateString: '2024-02-05 00:00', value: 3000 },
				],
			},
		],
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

export const WithPatterns: Story = {
	args: {
		...Default.args,
		withPatterns: true,
		data: data.map( country => {
			return {
				...country,
				data: country.data.filter( d => parseInt( d.label ) >= 2016 ),
			};
		} ),
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
`,u={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:64},startBody:{col:23,line:54},endBody:{col:1,line:64}},SingleSeries:{startLoc:{col:28,line:67},endLoc:{col:1,line:79},startBody:{col:28,line:67},endBody:{col:1,line:79}},TimeSeries:{startLoc:{col:26,line:82},endLoc:{col:1,line:128},startBody:{col:26,line:82},endBody:{col:1,line:128}},ManyDataSeries:{startLoc:{col:30,line:131},endLoc:{col:1,line:143},startBody:{col:30,line:131},endBody:{col:1,line:143}},FixedDimensions:{startLoc:{col:31,line:144},endLoc:{col:1,line:158},startBody:{col:31,line:144},endBody:{col:1,line:158}},WithPatterns:{startLoc:{col:28,line:159},endLoc:{col:1,line:170},startBody:{col:28,line:159},endBody:{col:1,line:170}},ErrorStates:{startLoc:{col:27,line:171},endLoc:{col:1,line:215},startBody:{col:27,line:171},endBody:{col:1,line:215}},SmartFormatting:{startLoc:{col:31,line:225},endLoc:{col:1,line:231},startBody:{col:31,line:225},endBody:{col:1,line:231}},HorizontalBarChart:{startLoc:{col:34,line:239},endLoc:{col:1,line:246},startBody:{col:34,line:239},endBody:{col:1,line:246}}};const n={title:"JS Packages/Charts/Types/Bar Chart",component:D.A,parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.filter */
/* wp:polyfill esnext.iterator.map */
import largeValuesData from '../../line-chart/stories/large-values-sample';
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
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
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
export const WithPatterns = {
  args: {
    ...Default.args,
    withPatterns: true,
    data: data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
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
};`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:64},startBody:{col:23,line:54},endBody:{col:1,line:64}},"single-series":{startLoc:{col:28,line:67},endLoc:{col:1,line:79},startBody:{col:28,line:67},endBody:{col:1,line:79}},"time-series":{startLoc:{col:26,line:82},endLoc:{col:1,line:128},startBody:{col:26,line:82},endBody:{col:1,line:128}},"many-data-series":{startLoc:{col:30,line:131},endLoc:{col:1,line:143},startBody:{col:30,line:131},endBody:{col:1,line:143}},"fixed-dimensions":{startLoc:{col:31,line:144},endLoc:{col:1,line:158},startBody:{col:31,line:144},endBody:{col:1,line:158}},"with-patterns":{startLoc:{col:28,line:159},endLoc:{col:1,line:170},startBody:{col:28,line:159},endBody:{col:1,line:170}},"error-states":{startLoc:{col:27,line:171},endLoc:{col:1,line:215},startBody:{col:27,line:171},endBody:{col:1,line:215}},"smart-formatting":{startLoc:{col:31,line:225},endLoc:{col:1,line:231},startBody:{col:31,line:225},endBody:{col:1,line:231}},"horizontal-bar-chart":{startLoc:{col:34,line:239},endLoc:{col:1,line:246},startBody:{col:34,line:239},endBody:{col:1,line:246}}}},layout:"centered"},decorators:[C=>(0,i.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,i.jsx)(C,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},a={args:{withTooltips:!0,data:[t.A[0],t.A[1],t.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},c={args:{...a.args,data:[t.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},e={args:{...a.args,data:[{...g.A[0],label:"Data with dateString and date",data:[...g.A[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:C=>new Date(C).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},r={args:{...a.args,data:t.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},l={args:{...a.args,width:800,height:400,data:[t.A[0],t.A[1],t.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},m={args:{...a.args,withPatterns:!0,data:t.A.map(C=>({...C,data:C.data.filter(b=>parseInt(b.label)>=2016)}))}},v={render:()=>(0,i.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Empty Data"}),(0,i.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,i.jsx)(D.A,{data:[]})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Invalid Data"}),(0,i.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,i.jsx)(D.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};v.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const p={args:{withTooltips:!0,data:h.A,gridVisibility:"x"}};p.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const f={args:{...a.args,data:[t.A[0],t.A[1],t.A[2]],orientation:"horizontal",gridVisibility:"none"}},x=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","HorizontalBarChart"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...a.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
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
}`,...e.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...m.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...p.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...f.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(w,o,d)=>{"use strict";d.d(o,{A:()=>g});const g=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(w,o,d)=>{"use strict";d.d(o,{A:()=>h});const h=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(w,o,d)=>{"use strict";d.d(o,{A:()=>D});function h(t){var i,y,u="";if(typeof t=="string"||typeof t=="number")u+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(i=0;i<s;i++)t[i]&&(y=h(t[i]))&&(u&&(u+=" "),u+=y)}else for(y in t)t[y]&&(u&&(u+=" "),u+=y);return u}function g(){for(var t,i,y=0,u="",s=arguments.length;y<s;y++)(t=arguments[y])&&(i=h(t))&&(u&&(u+=" "),u+=i);return u}const D=g},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(w,o,d)=>{var h=d("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");o.formatArgs=D,o.save=t,o.load=i,o.useColors=g,o.storage=y(),o.destroy=(()=>{let s=!1;return()=>{s||(s=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function g(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let s;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(s=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(s[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function D(s){if(s[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+s[0]+(this.useColors?"%c ":" ")+"+"+w.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;s.splice(1,0,n,"color: inherit");let a=0,c=0;s[0].replace(/%[a-zA-Z%]/g,e=>{e!=="%%"&&(a++,e==="%c"&&(c=a))}),s.splice(c,0,n)}o.log=console.debug||console.log||(()=>{});function t(s){try{s?o.storage.setItem("debug",s):o.storage.removeItem("debug")}catch{}}function i(){let s;try{s=o.storage.getItem("debug")||o.storage.getItem("DEBUG")}catch{}return!s&&typeof h<"u"&&"env"in h&&(s=h.env.DEBUG),s}function y(){try{return localStorage}catch{}}w.exports=d("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(o);const{formatters:u}=w.exports;u.j=function(s){try{return JSON.stringify(s)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(w,o,d)=>{function h(g){t.debug=t,t.default=t,t.coerce=a,t.disable=s,t.enable=y,t.enabled=n,t.humanize=d("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),t.destroy=c,Object.keys(g).forEach(e=>{t[e]=g[e]}),t.names=[],t.skips=[],t.formatters={};function D(e){let r=0;for(let l=0;l<e.length;l++)r=(r<<5)-r+e.charCodeAt(l),r|=0;return t.colors[Math.abs(r)%t.colors.length]}t.selectColor=D;function t(e){let r,l=null,m,v;function p(...f){if(!p.enabled)return;const x=p,C=Number(new Date),b=C-(r||C);x.diff=b,x.prev=r,x.curr=C,r=C,f[0]=t.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");let _=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,(S,B)=>{if(S==="%%")return"%";_++;const F=t.formatters[B];if(typeof F=="function"){const E=f[_];S=F.call(x,E),f.splice(_,1),_--}return S}),t.formatArgs.call(x,f),(x.log||t.log).apply(x,f)}return p.namespace=e,p.useColors=t.useColors(),p.color=t.selectColor(e),p.extend=i,p.destroy=t.destroy,Object.defineProperty(p,"enabled",{enumerable:!0,configurable:!1,get:()=>l!==null?l:(m!==t.namespaces&&(m=t.namespaces,v=t.enabled(e)),v),set:f=>{l=f}}),typeof t.init=="function"&&t.init(p),p}function i(e,r){const l=t(this.namespace+(typeof r>"u"?":":r)+e);return l.log=this.log,l}function y(e){t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=(typeof e=="string"?e:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const l of r)l[0]==="-"?t.skips.push(l.slice(1)):t.names.push(l)}function u(e,r){let l=0,m=0,v=-1,p=0;for(;l<e.length;)if(m<r.length&&(r[m]===e[l]||r[m]==="*"))r[m]==="*"?(v=m,p=l,m++):(l++,m++);else if(v!==-1)m=v+1,p++,l=p;else return!1;for(;m<r.length&&r[m]==="*";)m++;return m===r.length}function s(){const e=[...t.names,...t.skips.map(r=>"-"+r)].join(",");return t.enable(""),e}function n(e){for(const r of t.skips)if(u(e,r))return!1;for(const r of t.names)if(u(e,r))return!0;return!1}function a(e){return e instanceof Error?e.stack||e.message:e}function c(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}w.exports=h},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":w=>{var o=1e3,d=o*60,h=d*60,g=h*24,D=g*7,t=g*365.25;w.exports=function(n,a){a=a||{};var c=typeof n;if(c==="string"&&n.length>0)return i(n);if(c==="number"&&isFinite(n))return a.long?u(n):y(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))};function i(n){if(n=String(n),!(n.length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(a){var c=parseFloat(a[1]),e=(a[2]||"ms").toLowerCase();switch(e){case"years":case"year":case"yrs":case"yr":case"y":return c*t;case"weeks":case"week":case"w":return c*D;case"days":case"day":case"d":return c*g;case"hours":case"hour":case"hrs":case"hr":case"h":return c*h;case"minutes":case"minute":case"mins":case"min":case"m":return c*d;case"seconds":case"second":case"secs":case"sec":case"s":return c*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function y(n){var a=Math.abs(n);return a>=g?Math.round(n/g)+"d":a>=h?Math.round(n/h)+"h":a>=d?Math.round(n/d)+"m":a>=o?Math.round(n/o)+"s":n+"ms"}function u(n){var a=Math.abs(n);return a>=g?s(n,a,g,"day"):a>=h?s(n,a,h,"hour"):a>=d?s(n,a,d,"minute"):a>=o?s(n,a,o,"second"):n+" ms"}function s(n,a,c,e){var r=a>=c*1.5;return Math.round(n/c)+" "+e+(r?"s":"")}}}]);
