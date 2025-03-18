"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(y,l,r)=>{r.r(l),r.d(l,{Default:()=>t,ErrorStates:()=>u,FixedDimensions:()=>v,ManyDataSeries:()=>s,SingleSeries:()=>a,TimeSeries:()=>n,WithLegend:()=>i,WithVerticalLegend:()=>m,__namedExportsOrder:()=>w,default:()=>e});var p=r("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),c=r("../charts/src/components/bar-chart/bar-chart.tsx"),d=r("../charts/src/components/bar-chart/stories/sample-data.ts"),o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=`import trafficData from '../../line-chart/stories/site-traffic-sample';
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
`,_={Default:{startLoc:{col:23,line:26},endLoc:{col:1,line:35},startBody:{col:23,line:26},endBody:{col:1,line:35}},SingleSeries:{startLoc:{col:28,line:38},endLoc:{col:1,line:50},startBody:{col:28,line:38},endBody:{col:1,line:50}},TimeSeries:{startLoc:{col:26,line:53},endLoc:{col:1,line:77},startBody:{col:26,line:53},endBody:{col:1,line:77}},ManyDataSeries:{startLoc:{col:30,line:80},endLoc:{col:1,line:92},startBody:{col:30,line:80},endBody:{col:1,line:92}},WithLegend:{startLoc:{col:26,line:93},endLoc:{col:1,line:101},startBody:{col:26,line:93},endBody:{col:1,line:101}},WithVerticalLegend:{startLoc:{col:34,line:102},endLoc:{col:1,line:109},startBody:{col:34,line:102},endBody:{col:1,line:109}},FixedDimensions:{startLoc:{col:31,line:110},endLoc:{col:1,line:124},startBody:{col:31,line:110},endBody:{col:1,line:124}},ErrorStates:{startLoc:{col:27,line:125},endLoc:{col:1,line:169},startBody:{col:27,line:125},endBody:{col:1,line:169}}};const e={title:"JS Packages/Charts/Types/Bar Chart",component:c.A,parameters:{storySource:{source:`import trafficData from '../../line-chart/stories/site-traffic-sample';
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
};`,locationsMap:{default:{startLoc:{col:23,line:26},endLoc:{col:1,line:35},startBody:{col:23,line:26},endBody:{col:1,line:35}},"single-series":{startLoc:{col:28,line:38},endLoc:{col:1,line:50},startBody:{col:28,line:38},endBody:{col:1,line:50}},"time-series":{startLoc:{col:26,line:53},endLoc:{col:1,line:77},startBody:{col:26,line:53},endBody:{col:1,line:77}},"many-data-series":{startLoc:{col:30,line:80},endLoc:{col:1,line:92},startBody:{col:30,line:80},endBody:{col:1,line:92}},"with-legend":{startLoc:{col:26,line:93},endLoc:{col:1,line:101},startBody:{col:26,line:93},endBody:{col:1,line:101}},"with-vertical-legend":{startLoc:{col:34,line:102},endLoc:{col:1,line:109},startBody:{col:34,line:102},endBody:{col:1,line:109}},"fixed-dimensions":{startLoc:{col:31,line:110},endLoc:{col:1,line:124},startBody:{col:31,line:110},endBody:{col:1,line:124}},"error-states":{startLoc:{col:27,line:125},endLoc:{col:1,line:169},startBody:{col:27,line:125},endBody:{col:1,line:169}}}},layout:"centered"},decorators:[g=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(g,{})})]},t={args:{withTooltips:!0,data:[d.A[0],d.A[1],d.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},a={args:{...t.args,data:[d.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},n={args:{...t.args,data:[p.A[0]],options:{axis:{x:{tickFormat:g=>new Date(g).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},s={args:{...t.args,data:d.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},i={args:{...t.args,data:d.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},m={args:{...i.args,data:[d.A[0]],showLegend:!0,legendOrientation:"vertical"}},v={args:{...t.args,width:800,height:400,data:[d.A[0],d.A[1],d.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},u={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(c.A,{data:[]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(c.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};u.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const w=["Default","SingleSeries","TimeSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions","ErrorStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...i.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...m.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(y,l,r)=>{r.d(l,{A:()=>p});function p(c){return c?.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(y,l,r)=>{r.d(l,{A:()=>D});var p=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=r.n(c),o=["className","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}function _(e,t){if(e==null)return{};var a={},n=Object.keys(e),s,i;for(i=0;i<n.length;i++)s=n[i],!(t.indexOf(s)>=0)&&(a[s]=e[s]);return a}function D(e){var t=e.className,a=e.innerRef,n=_(e,o);return p.createElement("rect",h({ref:a,className:d()("visx-bar",t)},n))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(y,l,r)=>{r.d(l,{A:()=>D});var p=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=r.n(c),o=["from","to","fill","className","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}function _(e,t){if(e==null)return{};var a={},n=Object.keys(e),s,i;for(i=0;i<n.length;i++)s=n[i],!(t.indexOf(s)>=0)&&(a[s]=e[s]);return a}function D(e){var t=e.from,a=t===void 0?{x:0,y:0}:t,n=e.to,s=n===void 0?{x:1,y:1}:n,i=e.fill,m=i===void 0?"transparent":i,v=e.className,u=e.innerRef,w=_(e,o),g=a.x===s.x||a.y===s.y;return p.createElement("line",h({ref:u,className:d()("visx-line",v),x1:a.x,y1:a.y,x2:s.x,y2:s.y,fill:m,shapeRendering:g?"crispEdges":"auto"},w))}},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(y,l,r)=>{r.d(l,{A:()=>p});const p=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]}}]);
