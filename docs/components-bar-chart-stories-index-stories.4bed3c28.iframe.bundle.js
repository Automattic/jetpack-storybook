"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(y,c,o)=>{o.r(c),o.d(c,{Default:()=>t,ErrorStates:()=>p,FixedDimensions:()=>s,ManyDataSeries:()=>n,SingleSeries:()=>a,WithLegend:()=>e,WithVerticalLegend:()=>r,__namedExportsOrder:()=>_,default:()=>m});var l=o("../charts/src/components/bar-chart/bar-chart.tsx"),i=o("../charts/src/components/bar-chart/stories/sample-data.ts"),d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=`import BarChart from '../bar-chart';
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
`,h={Default:{startLoc:{col:23,line:25},endLoc:{col:1,line:34},startBody:{col:23,line:25},endBody:{col:1,line:34}},SingleSeries:{startLoc:{col:28,line:37},endLoc:{col:1,line:49},startBody:{col:28,line:37},endBody:{col:1,line:49}},ManyDataSeries:{startLoc:{col:30,line:52},endLoc:{col:1,line:64},startBody:{col:30,line:52},endBody:{col:1,line:64}},WithLegend:{startLoc:{col:26,line:65},endLoc:{col:1,line:73},startBody:{col:26,line:65},endBody:{col:1,line:73}},WithVerticalLegend:{startLoc:{col:34,line:74},endLoc:{col:1,line:81},startBody:{col:34,line:74},endBody:{col:1,line:81}},FixedDimensions:{startLoc:{col:31,line:82},endLoc:{col:1,line:96},startBody:{col:31,line:82},endBody:{col:1,line:96}},ErrorStates:{startLoc:{col:27,line:97},endLoc:{col:1,line:141},startBody:{col:27,line:97},endBody:{col:1,line:141}}};const m={title:"JS Packages/Charts/Types/Bar Chart",component:l.A,parameters:{storySource:{source:`import BarChart from '../bar-chart';
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
};`,locationsMap:{default:{startLoc:{col:23,line:25},endLoc:{col:1,line:34},startBody:{col:23,line:25},endBody:{col:1,line:34}},"single-series":{startLoc:{col:28,line:37},endLoc:{col:1,line:49},startBody:{col:28,line:37},endBody:{col:1,line:49}},"many-data-series":{startLoc:{col:30,line:52},endLoc:{col:1,line:64},startBody:{col:30,line:52},endBody:{col:1,line:64}},"with-legend":{startLoc:{col:26,line:65},endLoc:{col:1,line:73},startBody:{col:26,line:65},endBody:{col:1,line:73}},"with-vertical-legend":{startLoc:{col:34,line:74},endLoc:{col:1,line:81},startBody:{col:34,line:74},endBody:{col:1,line:81}},"fixed-dimensions":{startLoc:{col:31,line:82},endLoc:{col:1,line:96},startBody:{col:31,line:82},endBody:{col:1,line:96}},"error-states":{startLoc:{col:27,line:97},endLoc:{col:1,line:141},startBody:{col:27,line:97},endBody:{col:1,line:141}}}},layout:"centered"},decorators:[v=>(0,d.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,d.jsx)(v,{})})]},t={args:{withTooltips:!0,data:[i.A[0],i.A[1],i.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},a={args:{...t.args,data:[i.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},n={args:{...t.args,data:i.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},e={args:{...t.args,data:i.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},r={args:{...e.args,data:[i.A[0]],showLegend:!0,legendOrientation:"vertical"}},s={args:{...t.args,width:800,height:400,data:[i.A[0],i.A[1],i.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},p={render:()=>(0,d.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Empty Data"}),(0,d.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,d.jsx)(l.A,{data:[]})})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Invalid Data"}),(0,d.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,d.jsx)(l.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};p.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const _=["Default","SingleSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions","ErrorStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...e.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...r.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(y,c,o)=>{o.d(c,{A:()=>l});function l(i){return i?.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(y,c,o)=>{o.d(c,{A:()=>m});var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=o("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=o.n(i),u=["className","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},h.apply(this,arguments)}function g(t,a){if(t==null)return{};var n={},e=Object.keys(t),r,s;for(s=0;s<e.length;s++)r=e[s],!(a.indexOf(r)>=0)&&(n[r]=t[r]);return n}function m(t){var a=t.className,n=t.innerRef,e=g(t,u);return l.createElement("rect",h({ref:n,className:d()("visx-bar",a)},e))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(y,c,o)=>{o.d(c,{A:()=>m});var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=o("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=o.n(i),u=["from","to","fill","className","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},h.apply(this,arguments)}function g(t,a){if(t==null)return{};var n={},e=Object.keys(t),r,s;for(s=0;s<e.length;s++)r=e[s],!(a.indexOf(r)>=0)&&(n[r]=t[r]);return n}function m(t){var a=t.from,n=a===void 0?{x:0,y:0}:a,e=t.to,r=e===void 0?{x:1,y:1}:e,s=t.fill,p=s===void 0?"transparent":s,_=t.className,v=t.innerRef,x=g(t,u),f=n.x===r.x||n.y===r.y;return l.createElement("line",h({ref:v,className:d()("visx-line",_),x1:n.x,y1:n.y,x2:r.x,y2:r.y,fill:p,shapeRendering:f?"crispEdges":"auto"},x))}}}]);
