"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(f,c,e)=>{e.r(c),e.d(c,{Default:()=>n,Doughnut:()=>a,ErrorStates:()=>l,Responsiveness:()=>i,WithTooltips:()=>o,WithTooltipsDoughnut:()=>s,__namedExportsOrder:()=>x,default:()=>v});var m=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),u=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../charts/src/providers/theme/themes.ts"),r=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),T=`import { Group } from '@visx/group';
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
		theme: {
			control: 'select',
			options: {
				default: undefined,
				jetpack: jetpackTheme,
				woo: wooTheme,
			},
			defaultValue: undefined,
		},
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
`,D={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:132},startBody:{col:23,line:122},endBody:{col:1,line:132}},Doughnut:{startLoc:{col:24,line:133},endLoc:{col:1,line:164},startBody:{col:24,line:133},endBody:{col:1,line:164}},WithTooltips:{startLoc:{col:28,line:165},endLoc:{col:1,line:177},startBody:{col:28,line:165},endBody:{col:1,line:177}},WithTooltipsDoughnut:{startLoc:{col:36,line:178},endLoc:{col:1,line:191},startBody:{col:36,line:178},endBody:{col:1,line:191}},Responsiveness:{startLoc:{col:30,line:196},endLoc:{col:1,line:205},startBody:{col:30,line:196},endBody:{col:1,line:205}},ErrorStates:{startLoc:{col:27,line:206},endLoc:{col:1,line:270},startBody:{col:27,line:206},endBody:{col:1,line:270}}};const g=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],v={title:"JS Packages/Charts/Types/Pie Chart",component:r.A,parameters:{storySource:{source:`import { Group } from '@visx/group';
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
    theme: {
      control: 'select',
      options: {
        default: undefined,
        jetpack: jetpackTheme,
        woo: wooTheme
      },
      defaultValue: undefined
    },
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
export const Default = {
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    theme: 'default'
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
};`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:132},startBody:{col:23,line:122},endBody:{col:1,line:132}},doughnut:{startLoc:{col:24,line:133},endLoc:{col:1,line:164},startBody:{col:24,line:133},endBody:{col:1,line:164}},"with-tooltips":{startLoc:{col:28,line:165},endLoc:{col:1,line:177},startBody:{col:28,line:165},endBody:{col:1,line:177}},"with-tooltips-doughnut":{startLoc:{col:36,line:178},endLoc:{col:1,line:191},startBody:{col:36,line:178},endBody:{col:1,line:191}},responsiveness:{startLoc:{col:30,line:196},endLoc:{col:1,line:205},startBody:{col:30,line:196},endBody:{col:1,line:205}},"error-states":{startLoc:{col:27,line:206},endLoc:{col:1,line:270},startBody:{col:27,line:206},endBody:{col:1,line:270}}}},layout:"centered"},decorators:[(_,{args:y})=>(0,t.jsx)(u.NP,{theme:y.theme,children:(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,t.jsx)(_,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:"select",options:{default:void 0,jetpack:p.QI,woo:p.pk},defaultValue:void 0},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},n={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:g,theme:"default"}},a={args:{...n.args,thickness:.5,padding:0,gapScale:.03,cornerScale:.03,children:(0,t.jsxs)(m.A,{children:[(0,t.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,t.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},o={args:{...n.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},s={args:{...n.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},h={...n.args};delete h.size;const i={args:h,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},l={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(r.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(r.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(r.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(r.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},x=["Default","Doughnut","WithTooltips","WithTooltipsDoughnut","Responsiveness","ErrorStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    theme: 'default'
  }
}`,...n.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}}}]);
