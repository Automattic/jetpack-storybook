"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(w,m,e)=>{e.r(m),e.d(m,{Default:()=>t,ErrorStates:()=>D,FixedDimensions:()=>f,HorizontalBarChart:()=>L,ManyDataSeries:()=>o,SingleSeries:()=>c,SmartFormatting:()=>y,TimeSeries:()=>l,WithLegend:()=>x,WithPatterns:()=>g,WithVerticalLegend:()=>v,__namedExportsOrder:()=>C,default:()=>i});var u=e("../charts/src/components/line-chart/stories/large-values-sample.ts"),p=e("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),h=e("../charts/src/components/bar-chart/bar-chart.tsx"),s=e("../charts/src/components/bar-chart/stories/sample-data.ts"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`import largeValuesData from '../../line-chart/stories/large-values-sample';
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
`,_={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:66},startBody:{col:23,line:54},endBody:{col:1,line:66}},SingleSeries:{startLoc:{col:28,line:69},endLoc:{col:1,line:81},startBody:{col:28,line:69},endBody:{col:1,line:81}},TimeSeries:{startLoc:{col:26,line:84},endLoc:{col:1,line:108},startBody:{col:26,line:84},endBody:{col:1,line:108}},ManyDataSeries:{startLoc:{col:30,line:111},endLoc:{col:1,line:123},startBody:{col:30,line:111},endBody:{col:1,line:123}},WithLegend:{startLoc:{col:26,line:124},endLoc:{col:1,line:132},startBody:{col:26,line:124},endBody:{col:1,line:132}},WithVerticalLegend:{startLoc:{col:34,line:133},endLoc:{col:1,line:140},startBody:{col:34,line:133},endBody:{col:1,line:140}},FixedDimensions:{startLoc:{col:31,line:141},endLoc:{col:1,line:155},startBody:{col:31,line:141},endBody:{col:1,line:155}},WithPatterns:{startLoc:{col:28,line:156},endLoc:{col:1,line:167},startBody:{col:28,line:156},endBody:{col:1,line:167}},ErrorStates:{startLoc:{col:27,line:168},endLoc:{col:1,line:212},startBody:{col:27,line:168},endBody:{col:1,line:212}},SmartFormatting:{startLoc:{col:31,line:222},endLoc:{col:1,line:230},startBody:{col:31,line:222},endBody:{col:1,line:230}},HorizontalBarChart:{startLoc:{col:34,line:238},endLoc:{col:1,line:245},startBody:{col:34,line:238},endBody:{col:1,line:245}}};const i={title:"JS Packages/Charts/Types/Bar Chart",component:h.A,parameters:{storySource:{source:`/* wp:polyfill */
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
};`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:66},startBody:{col:23,line:54},endBody:{col:1,line:66}},"single-series":{startLoc:{col:28,line:69},endLoc:{col:1,line:81},startBody:{col:28,line:69},endBody:{col:1,line:81}},"time-series":{startLoc:{col:26,line:84},endLoc:{col:1,line:108},startBody:{col:26,line:84},endBody:{col:1,line:108}},"many-data-series":{startLoc:{col:30,line:111},endLoc:{col:1,line:123},startBody:{col:30,line:111},endBody:{col:1,line:123}},"with-legend":{startLoc:{col:26,line:124},endLoc:{col:1,line:132},startBody:{col:26,line:124},endBody:{col:1,line:132}},"with-vertical-legend":{startLoc:{col:34,line:133},endLoc:{col:1,line:140},startBody:{col:34,line:133},endBody:{col:1,line:140}},"fixed-dimensions":{startLoc:{col:31,line:141},endLoc:{col:1,line:155},startBody:{col:31,line:141},endBody:{col:1,line:155}},"with-patterns":{startLoc:{col:28,line:156},endLoc:{col:1,line:167},startBody:{col:28,line:156},endBody:{col:1,line:167}},"error-states":{startLoc:{col:27,line:168},endLoc:{col:1,line:212},startBody:{col:27,line:168},endBody:{col:1,line:212}},"smart-formatting":{startLoc:{col:31,line:222},endLoc:{col:1,line:230},startBody:{col:31,line:222},endBody:{col:1,line:230}},"horizontal-bar-chart":{startLoc:{col:34,line:238},endLoc:{col:1,line:245},startBody:{col:34,line:238},endBody:{col:1,line:245}}}},layout:"centered"},decorators:[a=>(0,n.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,n.jsx)(a,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},t={args:{withTooltips:!0,data:[s.A[0],s.A[1],s.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},c={args:{...t.args,data:[s.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},l={args:{...t.args,data:[p.A[0]],options:{axis:{x:{tickFormat:a=>new Date(a).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},o={args:{...t.args,data:s.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},x={args:{...t.args,data:s.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},v={args:{...x.args,showLegend:!0,legendOrientation:"vertical",height:600}},f={args:{...t.args,width:800,height:400,data:[s.A[0],s.A[1],s.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},g={args:{...t.args,withPatterns:!0,data:s.A.map(a=>({...a,data:a.data.filter(E=>parseInt(E.label)>=2016)}))}},D={render:()=>(0,n.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Empty Data"}),(0,n.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,n.jsx)(h.A,{data:[]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Data"}),(0,n.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,n.jsx)(h.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};D.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const y={args:{withTooltips:!0,data:u.A,showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}};y.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const L={args:{...t.args,data:[s.A[0],s.A[1],s.A[2]],orientation:"horizontal",gridVisibility:"none"}},C=["Default","SingleSeries","TimeSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","HorizontalBarChart"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...x.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    showLegend: true,
    legendOrientation: 'vertical',
    height: 600
  }
}`,...v.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...y.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...L.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(w,m,e)=>{e.d(m,{$:()=>C});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),p=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),h=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),s=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),n=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),d=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../charts/src/providers/theme/theme-provider.tsx"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(t),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),o={};o.insert="head",o.singleton=!1;var x=c()(l.A,o);const v=l.A.locals||{};function f(a){return a&&typeof a=="object"&&"value"in a&&typeof a.value<"u"?a.value:a}function g(a){return String(f(a))}function D({scale:a,labelFormat:E}){return(B,O)=>({datum:B,index:O,text:`${E(B,O)}`,value:a(B)})}var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={horizontal:"row",vertical:"column"},C=(0,r.forwardRef)(({items:a,className:E,orientation:B="horizontal",shape:O="rect",fill:F=g,size:R=g,labelFormat:k=f,labelTransform:M=D,shapeWidth:W=16,shapeHeight:I=16,shapeMargin:z="2px 4px 2px 0",labelAlign:V="left",labelFlex:U="1",labelMargin:K="0 4px",itemMargin:Y="0",itemDirection:N="row",legendLabelProps:H,...X},J)=>{const j=(0,i.RW)(),P=(0,d.A)({domain:a.map(b=>b.label),range:a.map(b=>b.color)}),G=P.domain(),$=(0,r.useCallback)(({index:b})=>a[b]?.shapeStyle??j.legendShapeStyles?.[b]??{},[a,j]);return(0,y.jsx)(p.A,{scale:P,labelFormat:k,labelTransform:M,children:b=>(0,y.jsx)("div",{ref:J,role:"list","data-testid":`legend-${B}`,className:(0,_.A)(v.legend,v[`legend--${B}`],E),style:{flexDirection:L[B],...j.legendContainerStyles},children:b.map((T,S)=>(0,y.jsxs)(h.A,{className:v["legend-item"],"data-testid":"legend-item",margin:Y,flexDirection:N,...X,children:[a[S]?.renderGlyph?(0,y.jsx)("svg",{width:a[S]?.glyphSize*2,height:a[S]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,y.jsx)(u.A,{children:a[S]?.renderGlyph({key:`legend-glyph-${T.text}`,datum:{},index:S,color:F(T),size:a[S]?.glyphSize,x:a[S]?.glyphSize,y:a[S]?.glyphSize})})}):(0,y.jsx)(s.A,{shape:O,height:I,width:W,margin:z,item:G[S],itemIndex:S,label:T,fill:F,size:R,shapeStyle:$}),(0,y.jsxs)(n.A,{style:{justifyContent:V,flex:U,margin:K,...j.legendLabelStyles},...H,children:[T.text,a.find(A=>A.label===T.text)?.value&&(0,y.jsx)("span",{className:v["legend-item-value"],children:a.find(A=>A.label===T.text)?.value})]})]},`legend-${T.text}-${S}`))})})});try{C.displayName="BaseLegend",C.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:C.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(w,m,e)=>{e.d(m,{A:()=>p});const p=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(w,m,e)=>{e.d(m,{A:()=>u});const u=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-margin.tsx":(w,m,e)=>{e.d(m,{a:()=>d});var u=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),p=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const n=(_,r,i)=>{const t=_.map(l=>r(l,0,[])),c=t.reduce((l,o)=>l.length>=o.length?l:o,t[0]);return(0,s.A)(c,i)},d=(_,r,i,t,c=!1)=>{const l=(0,h.useMemo)(()=>{const o=i.flatMap(g=>g.data);if(c)return o.map(g=>g.label||r.axis?.y?.tickFormat(g.date.getTime(),0,[]));const x=Math.min(...o.map(g=>g.value)),v=Math.max(...o.map(g=>g.value)),f=(0,u.A)({...r.yScale,domain:[x,v],range:[_,0]});return(0,p.A)(f,r.axis?.y?.numTicks)},[r,i,_,c]);return(0,h.useMemo)(()=>{const o={top:10,right:20,bottom:20,left:20},x=40,v=r.axis?.y?.orientation,f=v==="right"?t.axisStyles.y.right:t.axisStyles.y.left,D=(n(l,r.axis?.y?.tickFormat,f.axisLabel)??x)+(f?.tickLength??0);return v==="right"?o.right=D:o.left=D,r.axis?.x?.orientation==="top"&&(o.top=20,o.bottom=10),o},[r,t,l])}},"../charts/src/components/shared/use-element-height.ts":(w,m,e)=>{e.d(m,{v:()=>p});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p({initialHeight:h=0}={}){const[s,n]=(0,u.useState)(h),d=(0,u.useRef)(null);return[(0,u.useCallback)(r=>{if(d.current&&(d.current.disconnect(),d.current=null),r){const i=()=>{n(r.getBoundingClientRect().height||0)};i();const t=new window.ResizeObserver(i);t.observe(r),d.current=t}},[]),s]}},"../charts/src/components/shared/with-responsive.tsx":(w,m,e)=>{e.d(m,{F:()=>n});var u=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h={width:600,height:400},s=({resizeDebounceTime:d=300,maxWidth:_=1200,aspectRatio:r=.5})=>{const{parentRef:i,width:t}=(0,u.A)({debounceTime:d,enableDebounceLeadingCall:!0,initialSize:h}),c=t?Math.min(t,_):h.width,l=c*r;return{parentRef:i,width:c,height:l}};function n(d){return function({resizeDebounceTime:r=300,maxWidth:i=1200,aspectRatio:t=.5,...c}){const{parentRef:l,width:o,height:x}=s({resizeDebounceTime:r,maxWidth:i,aspectRatio:t});return(0,p.jsx)("div",{ref:l,style:{width:"100%"},children:(0,p.jsx)(d,{width:o,height:x,size:o,...c})})}}try{n.displayName="withResponsive",n.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:n.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(w,m,e)=>{e.d(m,{NP:()=>r,Ox:()=>_,RW:()=>d});var u=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../charts/src/providers/theme/themes.ts"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,p.createContext)(h.zQ),d=()=>(0,p.useContext)(n),_=i=>{const t=d();return(0,p.useMemo)(()=>{const c=(i??[]).map(l=>l.options?.stroke).filter(l=>!!l);return(0,u.A)({...t,colors:[...c,...t.colors??[]]})},[t,i])},r=({theme:i={},children:t})=>{const c={...h.zQ,...i};return(0,s.jsx)(n.Provider,{value:c,children:t})};try{r.displayName="ThemeProvider",r.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:r.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{d.displayName="useChartTheme",d.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:d.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{_.displayName="useXYChartTheme",_.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:_.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(w,m,e)=>{e.d(m,{QI:()=>p,pk:()=>h,zQ:()=>u});const u={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},p={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},h={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(w,m,e)=>{e.d(m,{A:()=>d});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(u),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(h),n=s()(p());n.push([w.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),n.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const d=n}}]);
