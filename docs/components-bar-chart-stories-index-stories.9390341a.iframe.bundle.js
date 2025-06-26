(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(C,i,t)=>{"use strict";t.r(i),t.d(i,{Default:()=>n,ErrorStates:()=>x,FixedDimensions:()=>h,HorizontalBarChart:()=>_,ManyDataSeries:()=>o,SingleSeries:()=>l,SmartFormatting:()=>c,TimeSeries:()=>r,WithPatterns:()=>p,__namedExportsOrder:()=>D,default:()=>a});var u=t("../charts/src/components/line-chart/stories/large-values-sample.ts"),m=t("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),y=t("../charts/src/components/bar-chart/bar-chart.tsx"),e=t("../charts/src/components/bar-chart/stories/sample-data.ts"),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`import largeValuesData from '../../line-chart/stories/large-values-sample';
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
`,v={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:64},startBody:{col:23,line:54},endBody:{col:1,line:64}},SingleSeries:{startLoc:{col:28,line:67},endLoc:{col:1,line:79},startBody:{col:28,line:67},endBody:{col:1,line:79}},TimeSeries:{startLoc:{col:26,line:82},endLoc:{col:1,line:106},startBody:{col:26,line:82},endBody:{col:1,line:106}},ManyDataSeries:{startLoc:{col:30,line:109},endLoc:{col:1,line:121},startBody:{col:30,line:109},endBody:{col:1,line:121}},FixedDimensions:{startLoc:{col:31,line:122},endLoc:{col:1,line:136},startBody:{col:31,line:122},endBody:{col:1,line:136}},WithPatterns:{startLoc:{col:28,line:137},endLoc:{col:1,line:148},startBody:{col:28,line:137},endBody:{col:1,line:148}},ErrorStates:{startLoc:{col:27,line:149},endLoc:{col:1,line:193},startBody:{col:27,line:149},endBody:{col:1,line:193}},SmartFormatting:{startLoc:{col:31,line:203},endLoc:{col:1,line:209},startBody:{col:31,line:203},endBody:{col:1,line:209}},HorizontalBarChart:{startLoc:{col:34,line:217},endLoc:{col:1,line:224},startBody:{col:34,line:217},endBody:{col:1,line:224}}};const a={title:"JS Packages/Charts/Types/Bar Chart",component:y.A,parameters:{storySource:{source:`/* wp:polyfill */
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
};`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:64},startBody:{col:23,line:54},endBody:{col:1,line:64}},"single-series":{startLoc:{col:28,line:67},endLoc:{col:1,line:79},startBody:{col:28,line:67},endBody:{col:1,line:79}},"time-series":{startLoc:{col:26,line:82},endLoc:{col:1,line:106},startBody:{col:26,line:82},endBody:{col:1,line:106}},"many-data-series":{startLoc:{col:30,line:109},endLoc:{col:1,line:121},startBody:{col:30,line:109},endBody:{col:1,line:121}},"fixed-dimensions":{startLoc:{col:31,line:122},endLoc:{col:1,line:136},startBody:{col:31,line:122},endBody:{col:1,line:136}},"with-patterns":{startLoc:{col:28,line:137},endLoc:{col:1,line:148},startBody:{col:28,line:137},endBody:{col:1,line:148}},"error-states":{startLoc:{col:27,line:149},endLoc:{col:1,line:193},startBody:{col:27,line:149},endBody:{col:1,line:193}},"smart-formatting":{startLoc:{col:31,line:203},endLoc:{col:1,line:209},startBody:{col:31,line:203},endBody:{col:1,line:209}},"horizontal-bar-chart":{startLoc:{col:34,line:217},endLoc:{col:1,line:224},startBody:{col:34,line:217},endBody:{col:1,line:224}}}},layout:"centered"},decorators:[b=>(0,d.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,d.jsx)(b,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},n={args:{withTooltips:!0,data:[e.A[0],e.A[1],e.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},l={args:{...n.args,data:[e.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},r={args:{...n.args,data:[m.A[0]],options:{axis:{x:{tickFormat:b=>new Date(b).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},o={args:{...n.args,data:e.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},h={args:{...n.args,width:800,height:400,data:[e.A[0],e.A[1],e.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},p={args:{...n.args,withPatterns:!0,data:e.A.map(b=>({...b,data:b.data.filter(F=>parseInt(F.label)>=2016)}))}},x={render:()=>(0,d.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Empty Data"}),(0,d.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,d.jsx)(y.A,{data:[]})})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Invalid Data"}),(0,d.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,d.jsx)(y.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};x.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const c={args:{withTooltips:!0,data:u.A,gridVisibility:"x"}};c.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const _={args:{...n.args,data:[e.A[0],e.A[1],e.A[2]],orientation:"horizontal",gridVisibility:"none"}},D=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","HorizontalBarChart"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
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
}`,...l.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...c.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,..._.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(C,i,t)=>{"use strict";t.d(i,{$:()=>F});var u=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),m=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),y=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),e=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),d=t("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),f=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),v=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=t("../charts/src/providers/theme/theme-provider.tsx"),n=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(n),r=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),o={};o.insert="head",o.singleton=!1;var h=l()(r.A,o);const p=r.A.locals||{};function x(g){return g&&typeof g=="object"&&"value"in g&&typeof g.value<"u"?g.value:g}function c(g){return String(x(g))}function _({scale:g,labelFormat:T}){return(S,j)=>({datum:S,index:j,text:`${T(S,j)}`,value:g(S)})}var D=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b={horizontal:"row",vertical:"column"},F=(0,s.forwardRef)(({items:g,className:T,orientation:S="horizontal",alignmentHorizontal:j="center",alignmentVertical:L="bottom",shape:P="rect",fill:O=c,size:M=c,labelFormat:I=x,labelTransform:z=_,shapeWidth:W=16,shapeHeight:V=16,shapeMargin:Y="2px 4px 2px 0",labelAlign:U="left",labelFlex:K="1",labelMargin:N="0 4px",itemMargin:H="0",itemDirection:G="row",legendLabelProps:J,...X},$)=>{const A=(0,a.RW)(),R=(0,f.A)({domain:g.map(B=>B.label),range:g.map(B=>B.color)}),Q=R.domain(),Z=(0,s.useCallback)(({index:B})=>g[B]?.shapeStyle??A.legendShapeStyles?.[B]??{},[g,A]);return(0,D.jsx)(m.A,{scale:R,labelFormat:I,labelTransform:z,children:B=>(0,D.jsx)("div",{ref:$,role:"list","data-testid":`legend-${S}`,className:(0,v.A)(p.legend,p[`legend--${S}`],p[`legend--horizontal-align-${j}`],p[`legend--vertical-align-${L}`],T),style:{flexDirection:b[S],...A.legendContainerStyles},children:B.map((E,w)=>(0,D.jsxs)(y.A,{className:p["legend-item"],"data-testid":"legend-item",margin:H,flexDirection:G,...X,children:[g[w]?.renderGlyph?(0,D.jsx)("svg",{width:g[w]?.glyphSize*2,height:g[w]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,D.jsx)(u.A,{children:g[w]?.renderGlyph({key:`legend-glyph-${E.text}`,datum:{},index:w,color:O(E),size:g[w]?.glyphSize,x:g[w]?.glyphSize,y:g[w]?.glyphSize})})}):(0,D.jsx)(e.A,{shape:P,height:V,width:W,margin:Y,item:Q[w],itemIndex:w,label:E,fill:O,size:M,shapeStyle:Z}),(0,D.jsxs)(d.A,{style:{justifyContent:U,flex:K,margin:N,...A.legendLabelStyles},...J,children:[E.text,g.find(k=>k.label===E.text)?.value&&(0,D.jsx)("span",{className:p["legend-item-value"],children:g.find(k=>k.label===E.text)?.value})]})]},`legend-${E.text}-${w}`))})})});try{F.displayName="BaseLegend",F.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignmentHorizontal:{defaultValue:{value:"center"},description:"",name:"alignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},alignmentVertical:{defaultValue:{value:"bottom"},description:"",name:"alignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:F.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(C,i,t)=>{"use strict";t.d(i,{A:()=>m});const m=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(C,i,t)=>{"use strict";t.d(i,{A:()=>u});const u=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-margin.tsx":(C,i,t)=>{"use strict";t.d(i,{a:()=>f});var u=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),m=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),y=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const d=(v,s,a)=>{const n=v.map(r=>s(r,0,[])),l=n.reduce((r,o)=>r.length>=o.length?r:o,n[0]);return(0,e.A)(l,a)},f=(v,s,a,n,l=!1)=>{const r=(0,y.useMemo)(()=>{const o=a.flatMap(c=>c.data);if(l)return o.map(c=>c.label||s.axis?.y?.tickFormat(c.date.getTime(),0,[]));const h=Math.min(...o.map(c=>c.value)),p=Math.max(...o.map(c=>c.value)),x=(0,u.A)({...s.yScale,domain:[h,p],range:[v,0]});return(0,m.A)(x,s.axis?.y?.numTicks)},[s,a,v,l]);return(0,y.useMemo)(()=>{const o={top:10,right:20,bottom:20,left:20},h=40,p=s.axis?.y?.orientation,x=p==="right"?n.axisStyles.y.right:n.axisStyles.y.left,_=(d(r,s.axis?.y?.tickFormat,x.axisLabel)??h)+(x?.tickLength??0);return p==="right"?o.right=_:o.left=_,s.axis?.x?.orientation==="top"&&(o.top=20,o.bottom=10),o},[s,n,r])}},"../charts/src/components/shared/use-element-height.ts":(C,i,t)=>{"use strict";t.d(i,{v:()=>m});var u=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function m({initialHeight:y=0}={}){const[e,d]=(0,u.useState)(y),f=(0,u.useRef)(null);return[(0,u.useCallback)(s=>{if(f.current&&(f.current.disconnect(),f.current=null),s){const a=()=>{d(s.getBoundingClientRect().height||0)};a();const n=new window.ResizeObserver(a);n.observe(s),f.current=n}},[]),e]}},"../charts/src/components/shared/with-responsive.tsx":(C,i,t)=>{"use strict";t.d(i,{F:()=>e});var u=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({resizeDebounceTime:d=300,maxWidth:f=1200,aspectRatio:v=.5})=>{const{parentRef:s,width:a}=(0,u.A)({debounceTime:d,enableDebounceLeadingCall:!0}),n=a>0?Math.min(a,f):0,l=n*v;return{parentRef:s,width:n,height:l}};function e(d){return function({resizeDebounceTime:v=300,maxWidth:s=1200,aspectRatio:a=.5,...n}){const{parentRef:l,width:r,height:o}=y({resizeDebounceTime:v,maxWidth:s,aspectRatio:a});return(0,m.jsx)("div",{ref:l,style:{width:"100%",height:n.height??"auto"},children:(0,m.jsx)(d,{width:r,height:o,size:r,...n})})}}try{e.displayName="withResponsive",e.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:e.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(C,i,t)=>{"use strict";t.d(i,{NP:()=>s,Ox:()=>v,RW:()=>f});var u=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=t("../charts/src/providers/theme/themes.ts"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,m.createContext)(y.zQ),f=()=>(0,m.useContext)(d),v=a=>{const n=f();return(0,m.useMemo)(()=>{const l=(a??[]).map(r=>r.options?.stroke).filter(r=>!!r);return(0,u.A)({...n,colors:[...l,...n.colors??[]]})},[n,a])},s=({theme:a={},children:n})=>{const l={...y.zQ,...a};return(0,e.jsx)(d.Provider,{value:l,children:n})};try{s.displayName="ThemeProvider",s.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:s.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{f.displayName="useChartTheme",f.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:f.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{v.displayName="useXYChartTheme",v.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:v.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(C,i,t)=>{"use strict";t.d(i,{QI:()=>m,pk:()=>y,zQ:()=>u});const u={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},y={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(C,i,t)=>{"use strict";t.d(i,{A:()=>f});var u=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(u),y=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=t.n(y),d=e()(m());d.push([C.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.MYFewOP21Y4GVm663D6z{position:relative}.MYFewOP21Y4GVm663D6z.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.MYFewOP21Y4GVm663D6z.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.MYFewOP21Y4GVm663D6z.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.soJYpRSvEDNrcSctfKPg{position:relative}.soJYpRSvEDNrcSctfKPg.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.soJYpRSvEDNrcSctfKPg.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.soJYpRSvEDNrcSctfKPg.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),d.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend--vertical-align-top":"MYFewOP21Y4GVm663D6z","legend--horizontal-align-left":"Sla7_x8BgBrFt0ij9Wti","legend--horizontal-align-center":"UW_XpeIz_5GpmlfPHgO7","legend--horizontal-align-right":"z_v3d3imptbDEps1ycxC","legend--vertical-align-bottom":"soJYpRSvEDNrcSctfKPg","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const f=d},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(C,i,t)=>{var u=t("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");i.formatArgs=y,i.save=e,i.load=d,i.useColors=m,i.storage=f(),i.destroy=(()=>{let s=!1;return()=>{s||(s=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function m(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let s;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(s=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(s[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function y(s){if(s[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+s[0]+(this.useColors?"%c ":" ")+"+"+C.exports.humanize(this.diff),!this.useColors)return;const a="color: "+this.color;s.splice(1,0,a,"color: inherit");let n=0,l=0;s[0].replace(/%[a-zA-Z%]/g,r=>{r!=="%%"&&(n++,r==="%c"&&(l=n))}),s.splice(l,0,a)}i.log=console.debug||console.log||(()=>{});function e(s){try{s?i.storage.setItem("debug",s):i.storage.removeItem("debug")}catch{}}function d(){let s;try{s=i.storage.getItem("debug")||i.storage.getItem("DEBUG")}catch{}return!s&&typeof u<"u"&&"env"in u&&(s=u.env.DEBUG),s}function f(){try{return localStorage}catch{}}C.exports=t("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(i);const{formatters:v}=C.exports;v.j=function(s){try{return JSON.stringify(s)}catch(a){return"[UnexpectedJSONParseError]: "+a.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(C,i,t)=>{function u(m){e.debug=e,e.default=e,e.coerce=n,e.disable=s,e.enable=f,e.enabled=a,e.humanize=t("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=l,Object.keys(m).forEach(r=>{e[r]=m[r]}),e.names=[],e.skips=[],e.formatters={};function y(r){let o=0;for(let h=0;h<r.length;h++)o=(o<<5)-o+r.charCodeAt(h),o|=0;return e.colors[Math.abs(o)%e.colors.length]}e.selectColor=y;function e(r){let o,h=null,p,x;function c(..._){if(!c.enabled)return;const D=c,b=Number(new Date),F=b-(o||b);D.diff=F,D.prev=o,D.curr=b,o=b,_[0]=e.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");let g=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,(S,j)=>{if(S==="%%")return"%";g++;const L=e.formatters[j];if(typeof L=="function"){const P=_[g];S=L.call(D,P),_.splice(g,1),g--}return S}),e.formatArgs.call(D,_),(D.log||e.log).apply(D,_)}return c.namespace=r,c.useColors=e.useColors(),c.color=e.selectColor(r),c.extend=d,c.destroy=e.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>h!==null?h:(p!==e.namespaces&&(p=e.namespaces,x=e.enabled(r)),x),set:_=>{h=_}}),typeof e.init=="function"&&e.init(c),c}function d(r,o){const h=e(this.namespace+(typeof o>"u"?":":o)+r);return h.log=this.log,h}function f(r){e.save(r),e.namespaces=r,e.names=[],e.skips=[];const o=(typeof r=="string"?r:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const h of o)h[0]==="-"?e.skips.push(h.slice(1)):e.names.push(h)}function v(r,o){let h=0,p=0,x=-1,c=0;for(;h<r.length;)if(p<o.length&&(o[p]===r[h]||o[p]==="*"))o[p]==="*"?(x=p,c=h,p++):(h++,p++);else if(x!==-1)p=x+1,c++,h=c;else return!1;for(;p<o.length&&o[p]==="*";)p++;return p===o.length}function s(){const r=[...e.names,...e.skips.map(o=>"-"+o)].join(",");return e.enable(""),r}function a(r){for(const o of e.skips)if(v(r,o))return!1;for(const o of e.names)if(v(r,o))return!0;return!1}function n(r){return r instanceof Error?r.stack||r.message:r}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}C.exports=u},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":C=>{var i=1e3,t=i*60,u=t*60,m=u*24,y=m*7,e=m*365.25;C.exports=function(a,n){n=n||{};var l=typeof a;if(l==="string"&&a.length>0)return d(a);if(l==="number"&&isFinite(a))return n.long?v(a):f(a);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(a))};function d(a){if(a=String(a),!(a.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(a);if(n){var l=parseFloat(n[1]),r=(n[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return l*e;case"weeks":case"week":case"w":return l*y;case"days":case"day":case"d":return l*m;case"hours":case"hour":case"hrs":case"hr":case"h":return l*u;case"minutes":case"minute":case"mins":case"min":case"m":return l*t;case"seconds":case"second":case"secs":case"sec":case"s":return l*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}}}function f(a){var n=Math.abs(a);return n>=m?Math.round(a/m)+"d":n>=u?Math.round(a/u)+"h":n>=t?Math.round(a/t)+"m":n>=i?Math.round(a/i)+"s":a+"ms"}function v(a){var n=Math.abs(a);return n>=m?s(a,n,m,"day"):n>=u?s(a,n,u,"hour"):n>=t?s(a,n,t,"minute"):n>=i?s(a,n,i,"second"):a+" ms"}function s(a,n,l,r){var o=n>=l*1.5;return Math.round(a/l)+" "+r+(o?"s":"")}}}]);
