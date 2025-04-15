"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(y,i,e)=>{e.r(i),e.d(i,{Default:()=>o,Doughnut:()=>_,ErrorStates:()=>m,Responsiveness:()=>g,WithHorizontalLegend:()=>p,WithTooltips:()=>j,WithTooltipsDoughnut:()=>h,WithVerticalLegend:()=>f,__namedExportsOrder:()=>M,default:()=>D});var d=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),s=e("../charts/src/providers/theme/theme-provider.tsx"),r=e("../charts/src/providers/theme/themes.ts"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { PieChart } from '../index';
import type { Meta, StoryObj } from '@storybook/react';

const data = [
	{
		label: 'MacOS',
		value: 30000,
		valueDisplay: '30K',
		percentage: 23,
	},
	{
		label: 'Linux',
		value: 22000,
		valueDisplay: '22K',
		percentage: 17,
	},
	{
		label: 'Windows',
		value: 80000,
		valueDisplay: '80K',
		percentage: 60,
	},
];

const meta = {
	title: 'JS Packages/Charts/Types/Pie Chart',
	component: PieChart,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		( Story, { args } ) => (
			<ThemeProvider theme={ args.theme }>
				<div
					style={ {
						resize: 'both',
						overflow: 'auto',
						padding: '2rem',
						width: '800px',
						aspectRatio: '1/1',
						minWidth: '400px',
						maxWidth: '1200px',
						height: '800px',
						border: '1px dashed #ccc',
					} }
				>
					<Story />
				</div>
			</ThemeProvider>
		),
	],
	argTypes: {
		size: {
			control: {
				type: 'range',
				min: 100,
				max: 800,
				step: 10,
				default: 400,
			},
		},
		thickness: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
		padding: {
			control: {
				type: 'range',
				min: 0,
				max: 100,
				step: 1,
			},
		},
		gapScale: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
		cornerScale: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
		legendOrientation: {
			control: 'radio',
			options: [ 'horizontal', 'vertical' ],
		},
		theme: {
			control: 'select',
			options: {
				default: undefined,
				jetpack: jetpackTheme,
				woo: wooTheme,
			},
			defaultValue: undefined,
		},
	},
} satisfies Meta< typeof PieChart >;

export default meta;
type Story = StoryObj< typeof PieChart >;

export const Default: Story = {
	args: {
		thickness: 1,
		gapScale: 0,
		padding: 20,
		cornerScale: 0,
		withTooltips: false,
		data,
		theme: 'default',
		showLegend: false,
		legendOrientation: 'horizontal',
	},
};

export const WithHorizontalLegend: Story = {
	args: {
		...Default.args,
		showLegend: true,
		size: 600,
		legendOrientation: 'horizontal',
	},
};

export const WithVerticalLegend: Story = {
	args: {
		...Default.args,
		showLegend: true,
		size: 600,
		legendOrientation: 'vertical',
	},
};

export const Doughnut: Story = {
	args: {
		...Default.args,
		thickness: 0.5,
		padding: 0,
		gapScale: 0.03,
		cornerScale: 0.03,
		children: (
			<Group>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
					\u{1F369} Doughnut
				</Text>
				<Text textAnchor="middle" verticalAnchor="middle" fill="#008A20" fontSize={ 18 } y={ 16 }>
					Three donuts for the price of one!
				</Text>
			</Group>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Doughnut chart variant with the thickness set to 0.5 (50%).',
			},
		},
	},
};

export const WithTooltips: Story = {
	args: {
		...Default.args,
		withTooltips: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Pie chart with interactive tooltips that appear on hover.',
			},
		},
	},
};

export const WithTooltipsDoughnut: Story = {
	args: {
		...Default.args,
		thickness: 0.5,
		withTooltips: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Doughnut chart with interactive tooltips that appear on hover.',
			},
		},
	},
};

const responsiveArgs = { ...Default.args };
delete responsiveArgs.size;
export const Responsiveness: Story = {
	args: responsiveArgs,
	parameters: {
		docs: {
			description: {
				story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.',
			},
		},
	},
};

export const ErrorStates: Story = {
	render: () => (
		<div style={ { display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(2, 1fr)' } }>
			<div>
				<h3>Empty Data</h3>
				<PieChart size={ 300 } data={ [] } />
			</div>
			<div>
				<h3>Invalid Percentage Total</h3>
				<PieChart
					size={ 300 }
					data={ [
						{ label: 'A', value: 30, percentage: 30 },
						{ label: 'B', value: 40, percentage: 40 },
					] } // Only adds up to 70%
				/>
			</div>
			<div>
				<h3>Negative Values</h3>
				<PieChart
					size={ 300 }
					data={ [
						{ label: 'A', value: -30, percentage: -30 },
						{ label: 'B', value: 130, percentage: 130 },
					] }
				/>
			</div>
			<div>
				<h3>Single Data Point</h3>
				<PieChart size={ 300 } data={ [ { label: 'A', value: 100, percentage: 100 } ] } />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Examples of how the pie chart handles various error states and edge cases.',
			},
		},
	},
};
`,T={Default:{startLoc:{col:23,line:105},endLoc:{col:1,line:117},startBody:{col:23,line:105},endBody:{col:1,line:117}},WithHorizontalLegend:{startLoc:{col:36,line:118},endLoc:{col:1,line:125},startBody:{col:36,line:118},endBody:{col:1,line:125}},WithVerticalLegend:{startLoc:{col:34,line:126},endLoc:{col:1,line:133},startBody:{col:34,line:126},endBody:{col:1,line:133}},Doughnut:{startLoc:{col:24,line:134},endLoc:{col:1,line:165},startBody:{col:24,line:134},endBody:{col:1,line:165}},WithTooltips:{startLoc:{col:28,line:166},endLoc:{col:1,line:178},startBody:{col:28,line:166},endBody:{col:1,line:178}},WithTooltipsDoughnut:{startLoc:{col:36,line:179},endLoc:{col:1,line:192},startBody:{col:36,line:179},endBody:{col:1,line:192}},Responsiveness:{startLoc:{col:30,line:197},endLoc:{col:1,line:206},startBody:{col:30,line:197},endBody:{col:1,line:206}},ErrorStates:{startLoc:{col:27,line:207},endLoc:{col:1,line:271},startBody:{col:27,line:207},endBody:{col:1,line:271}}};const c=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],D={title:"JS Packages/Charts/Types/Pie Chart",component:n.A,parameters:{storySource:{source:`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { PieChart } from '../index';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const data = [{
  label: 'MacOS',
  value: 30000,
  valueDisplay: '30K',
  percentage: 23
}, {
  label: 'Linux',
  value: 22000,
  valueDisplay: '22K',
  percentage: 17
}, {
  label: 'Windows',
  value: 80000,
  valueDisplay: '80K',
  percentage: 60
}];
const meta = {
  title: 'JS Packages/Charts/Types/Pie Chart',
  component: PieChart,
  parameters: {
    layout: 'centered'
  },
  decorators: [(Story, {
    args
  }) => /*#__PURE__*/_jsx(ThemeProvider, {
    theme: args.theme,
    children: /*#__PURE__*/_jsx("div", {
      style: {
        resize: 'both',
        overflow: 'auto',
        padding: '2rem',
        width: '800px',
        aspectRatio: '1/1',
        minWidth: '400px',
        maxWidth: '1200px',
        height: '800px',
        border: '1px dashed #ccc'
      },
      children: /*#__PURE__*/_jsx(Story, {})
    })
  })],
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 100,
        max: 800,
        step: 10,
        default: 400
      }
    },
    thickness: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    padding: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    },
    gapScale: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    cornerScale: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    legendOrientation: {
      control: 'radio',
      options: ['horizontal', 'vertical']
    },
    theme: {
      control: 'select',
      options: {
        default: undefined,
        jetpack: jetpackTheme,
        woo: wooTheme
      },
      defaultValue: undefined
    }
  }
};
export default meta;
export const Default = {
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    theme: 'default',
    showLegend: false,
    legendOrientation: 'horizontal'
  }
};
export const WithHorizontalLegend = {
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'horizontal'
  }
};
export const WithVerticalLegend = {
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'vertical'
  }
};
export const Doughnut = {
  args: {
    ...Default.args,
    thickness: 0.5,
    padding: 0,
    gapScale: 0.03,
    cornerScale: 0.03,
    children: /*#__PURE__*/_jsxs(Group, {
      children: [/*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 24,
        y: -16,
        children: "\\uD83C\\uDF69 Doughnut"
      }), /*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fill: "#008A20",
        fontSize: 18,
        y: 16,
        children: "Three donuts for the price of one!"
      })]
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart variant with the thickness set to 0.5 (50%).'
      }
    }
  }
};
export const WithTooltips = {
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
};
export const WithTooltipsDoughnut = {
  args: {
    ...Default.args,
    thickness: 0.5,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart with interactive tooltips that appear on hover.'
      }
    }
  }
};
const responsiveArgs = {
  ...Default.args
};
delete responsiveArgs.size;
export const Responsiveness = {
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
};
export const ErrorStates = {
  render: () => /*#__PURE__*/_jsxs("div", {
    style: {
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Empty Data"
      }), /*#__PURE__*/_jsx(PieChart, {
        size: 300,
        data: []
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Invalid Percentage Total"
      }), /*#__PURE__*/_jsx(PieChart, {
        size: 300,
        data: [{
          label: 'A',
          value: 30,
          percentage: 30
        }, {
          label: 'B',
          value: 40,
          percentage: 40
        }] // Only adds up to 70%
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Negative Values"
      }), /*#__PURE__*/_jsx(PieChart, {
        size: 300,
        data: [{
          label: 'A',
          value: -30,
          percentage: -30
        }, {
          label: 'B',
          value: 130,
          percentage: 130
        }]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Single Data Point"
      }), /*#__PURE__*/_jsx(PieChart, {
        size: 300,
        data: [{
          label: 'A',
          value: 100,
          percentage: 100
        }]
      })]
    })]
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:105},endLoc:{col:1,line:117},startBody:{col:23,line:105},endBody:{col:1,line:117}},"with-horizontal-legend":{startLoc:{col:36,line:118},endLoc:{col:1,line:125},startBody:{col:36,line:118},endBody:{col:1,line:125}},"with-vertical-legend":{startLoc:{col:34,line:126},endLoc:{col:1,line:133},startBody:{col:34,line:126},endBody:{col:1,line:133}},doughnut:{startLoc:{col:24,line:134},endLoc:{col:1,line:165},startBody:{col:24,line:134},endBody:{col:1,line:165}},"with-tooltips":{startLoc:{col:28,line:166},endLoc:{col:1,line:178},startBody:{col:28,line:166},endBody:{col:1,line:178}},"with-tooltips-doughnut":{startLoc:{col:36,line:179},endLoc:{col:1,line:192},startBody:{col:36,line:179},endBody:{col:1,line:192}},responsiveness:{startLoc:{col:30,line:197},endLoc:{col:1,line:206},startBody:{col:30,line:197},endBody:{col:1,line:206}},"error-states":{startLoc:{col:27,line:207},endLoc:{col:1,line:271},startBody:{col:27,line:207},endBody:{col:1,line:271}}}},layout:"centered"},decorators:[(L,{args:z})=>(0,t.jsx)(s.N,{theme:z.theme,children:(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,t.jsx)(L,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},legendOrientation:{control:"radio",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:r.QI,woo:r.pk},defaultValue:void 0}}},o={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:c,theme:"default",showLegend:!1,legendOrientation:"horizontal"}},p={args:{...o.args,showLegend:!0,size:600,legendOrientation:"horizontal"}},f={args:{...o.args,showLegend:!0,size:600,legendOrientation:"vertical"}},_={args:{...o.args,thickness:.5,padding:0,gapScale:.03,cornerScale:.03,children:(0,t.jsxs)(d.A,{children:[(0,t.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,t.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},j={args:{...o.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},h={args:{...o.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},P={...o.args};delete P.size;const g={args:P,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},m={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(n.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},M=["Default","WithHorizontalLegend","WithVerticalLegend","Doughnut","WithTooltips","WithTooltipsDoughnut","Responsiveness","ErrorStates"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    theme: 'default',
    showLegend: false,
    legendOrientation: 'horizontal'
  }
}`,...o.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'horizontal'
  }
}`,...p.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'vertical'
  }
}`,...f.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    padding: 0,
    gapScale: 0.03,
    cornerScale: 0.03,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    \u{1F369} Doughnut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fill="#008A20" fontSize={18} y={16}>
                    Three donuts for the price of one!
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart variant with the thickness set to 0.5 (50%).'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} data={[]} />
            </div>
            <div>
                <h3>Invalid Percentage Total</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 30,
        percentage: 30
      }, {
        label: 'B',
        value: 40,
        percentage: 40
      }]} // Only adds up to 70%
      />
            </div>
            <div>
                <h3>Negative Values</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: -30,
        percentage: -30
      }, {
        label: 'B',
        value: 130,
        percentage: 130
      }]} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(y,i,e)=>{e.d(i,{$:()=>o});var d=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss"),u={};u.insert="head",u.singleton=!1;var T=n()(t.A,u);const c=t.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D={horizontal:"row",vertical:"column"},o=({items:p,className:f,orientation:_="horizontal"})=>{const j=(0,a.A)({domain:p.map(h=>h.label),range:p.map(h=>h.color)});return(0,l.jsx)("div",{className:(0,s.A)(c.legend,c[`legend--${_}`],f),role:"list","data-testid":`legend-${_}`,children:(0,l.jsx)(d.A,{scale:j,direction:D[_],shape:"rect",shapeWidth:16,shapeHeight:16,className:c["legend-items"],children:h=>(0,l.jsx)("div",{className:c[`legend--${_}`],children:h.map(P=>(0,l.jsxs)("div",{className:c["legend-item"],role:"listitem","data-testid":"legend-item",children:[(0,l.jsx)("svg",{width:16,height:16,role:"img",children:(0,l.jsx)("rect",{width:16,height:16,fill:P.value,className:c["legend-item-swatch"],"data-testid":"legend-marker",role:"presentation"})}),(0,l.jsxs)("span",{className:c["legend-item-label"],children:[P.text,p.find(g=>g.label===P.text)?.value&&(0,l.jsx)("span",{className:c["legend-item-value"],children:p.find(g=>g.label===P.text)?.value})]})]},P.text))})})})};try{o.displayName="BaseLegend",o.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:o.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(y,i,e)=>{e.d(i,{A:()=>z});var d=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const T=({withTooltips:v})=>{const{tooltipOpen:O,tooltipLeft:w,tooltipTop:E,tooltipData:b,hideTooltip:C,showTooltip:R}=(0,n.A)(),W=(0,t.useCallback)((B,F)=>{if(!v)return;const A=(0,r.A)(B);A&&R({tooltipData:F,tooltipLeft:A.x,tooltipTop:A.y-10})},[v,R]),I=(0,t.useCallback)(()=>{v&&C()},[v,C]);return{onMouseMove:W,onMouseLeave:I,tooltipOpen:O,tooltipData:b||null,tooltipLeft:w,tooltipTop:E}};var c=e("../charts/src/providers/theme/theme-provider.tsx"),l=e("../charts/src/providers/theme/themes.ts"),D=e("../charts/src/components/legend/base-legend.tsx"),o=e("../charts/src/components/shared/with-responsive.tsx"),p=e("../charts/src/components/tooltip/base-tooltip.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(f),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss"),h={};h.insert="head",h.singleton=!1;var P=_()(j.A,h);const g=j.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=v=>{if(!v.length)return{isValid:!1,message:"No data available"};if(v.some(E=>E.percentage<0||E.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const w=v.reduce((E,b)=>E+b.percentage,0);return Math.abs(w-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},L=({data:v,withTooltips:O=!1,className:w,showLegend:E,legendOrientation:b,size:C,thickness:R=1,padding:W=20,gapScale:I=0,cornerScale:B=0,children:F=null})=>{const A=(0,c.R)(),{onMouseMove:G,onMouseLeave:J,tooltipOpen:X,tooltipData:V,tooltipLeft:Q,tooltipTop:$}=T({withTooltips:O}),{isValid:Z,message:q}=M(v);if(!Z)return(0,m.jsx)("div",{className:(0,s.A)("pie-chart",g["pie-chart"],w),children:(0,m.jsx)("div",{className:g["error-message"],children:q})});const K=C,N=C,ee=Math.min(K,N)/2,te=K/2,ne=N/2,se=I*(2*Math.PI/v.length),k=ee-W,Y=k*(1-R),oe=(k-Y)/2,ae=B?Math.min(B*k,oe):0,re=v.map((x,S)=>({...x,index:S})),H={value:x=>x.value,fill:x=>x?.color||A.colors[x.index]},le=v.map((x,S)=>({label:x.label,value:x.value.toString(),color:A.colors[S%A.colors.length]}));return(0,m.jsxs)("div",{className:(0,s.A)("pie-chart",g["pie-chart"],w),children:[(0,m.jsx)("svg",{viewBox:`0 0 ${C} ${C}`,preserveAspectRatio:"xMidYMid meet",width:C,height:C,children:(0,m.jsxs)(d.A,{top:ne,left:te,children:[(0,m.jsx)(a.A,{data:re,pieValue:H.value,outerRadius:k,innerRadius:Y,padAngle:se,cornerRadius:ae,children:x=>x.arcs.map((S,ie)=>{const[de,ce]=x.path.centroid(S),pe=S.endAngle-S.startAngle>=.25,ue=me=>G(me,S.data),U={d:x.path(S)||"",fill:H.fill(S.data)};return O&&(U.onMouseMove=ue,U.onMouseLeave=J),(0,m.jsxs)("g",{children:[(0,m.jsx)("path",{...U}),pe&&(0,m.jsx)("text",{x:de,y:ce,dy:".33em",fill:A.labelBackgroundColor||l.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:S.data.label})]},`arc-${ie}`)})}),F]})}),E&&(0,m.jsx)(D.$,{items:le,orientation:b,className:g["pie-chart-legend"]}),O&&X&&V&&(0,m.jsx)(p.R,{data:V,top:$||0,left:Q||0,style:{transform:"translate(-50%, -100%)"}})]})};L.displayName="PieChart";const z=(0,o.F)(L);try{L.displayName="PieChart",L.__docgenInfo={description:"",displayName:"PieChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"unknown"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"unknown"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:L.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch{}},"../charts/src/components/shared/with-responsive.tsx":(y,i,e)=>{e.d(i,{F:()=>s});var d=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function s(r,n){const{maxWidth:t=1200,aspectRatio:u=.5,debounceTime:T=50}=n||{};return function(l){const{parentRef:D,width:o}=(0,d.A)({debounceTime:T,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),p=o?Math.min(o,t):600,f=l.height??p*u;return(0,a.jsx)("div",{ref:D,style:{width:"100%"},children:(0,a.jsx)(r,{width:p,height:f,size:p,...l})})}}try{s.displayName="withResponsive",s.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:s.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(y,i,e)=>{e.d(i,{R:()=>c});var d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(d),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss"),r={};r.insert="head",r.singleton=!1;var n=a()(s.A,r);const t=s.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T=({data:l})=>(0,u.jsxs)(u.Fragment,{children:[l?.label,": ",l?.valueDisplay||l?.value]}),c=({data:l,top:D,left:o,component:p=T,children:f,className:_})=>(0,u.jsx)("div",{className:t.tooltip,style:{top:D,left:o},role:"tooltip",children:f||l&&(0,u.jsx)(p,{data:l,className:_})});try{c.displayName="BaseTooltip",c.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:c.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(y,i,e)=>{e.d(i,{N:()=>t,R:()=>n});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/providers/theme/themes.ts"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,d.createContext)(a.zQ),n=()=>(0,d.useContext)(r),t=({theme:u={},children:T})=>{const c={...a.zQ,...u};return(0,s.jsx)(r.Provider,{value:c,children:T})};try{t.displayName="ThemeProvider",t.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:t.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{n.displayName="useChartTheme",n.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:n.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(y,i,e)=>{e.d(i,{QI:()=>a,pk:()=>s,zQ:()=>d});const d={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},a={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},s={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss":(y,i,e)=>{e.d(i,{A:()=>t});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(d),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),n=r()(a());n.push([y.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),n.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const t=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss":(y,i,e)=>{e.d(i,{A:()=>t});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(d),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),n=r()(a());n.push([y.id,".s6qS3V8pL7zk4p_SuIGQ{position:relative}",""]),n.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const t=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss":(y,i,e)=>{e.d(i,{A:()=>t});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(d),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),n=r()(a());n.push([y.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),n.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const t=n}}]);
