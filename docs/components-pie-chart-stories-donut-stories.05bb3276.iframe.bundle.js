"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":(v,h,n)=>{n.r(h),n.d(h,{CustomTheme:()=>a,Default:()=>e,ErrorStates:()=>i,Thin:()=>s,WithVerticalLegend:()=>r,WithoutCenter:()=>o,__namedExportsOrder:()=>g,default:()=>x});var p=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),l=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),m=n("../charts/src/providers/theme/theme-provider.tsx"),c=n("../charts/src/providers/theme/themes.ts"),d=n("../charts/src/components/pie-chart/pie-chart.tsx"),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),T=`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { PieChart } from '../../pie-chart';
import type { Meta, StoryObj } from '@storybook/react';

const data = [
	{
		label: 'Active Users',
		value: 65000,
		valueDisplay: '65K',
		percentage: 65,
	},
	{
		label: 'Inactive Users',
		value: 35000,
		valueDisplay: '35K',
		percentage: 35,
	},
];

const meta = {
	title: 'JS Packages/Charts/Types/Donut Chart',
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
	},
} satisfies Meta< typeof PieChart >;

export default meta;
type Story = StoryObj< typeof PieChart >;

export const Default: Story = {
	args: {
		thickness: 0.4,
		gapScale: 0.03,
		padding: 20,
		cornerScale: 0.03,
		withTooltips: true,
		data,
		theme: 'default',
		showLegend: true,
		legendOrientation: 'horizontal',
		children: (
			<Group>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
					User Activity
				</Text>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
					Total: 100K Users
				</Text>
			</Group>
		),
	},
};

export const WithVerticalLegend: Story = {
	args: {
		...Default.args,
		legendOrientation: 'vertical',
	},
};

export const WithoutCenter: Story = {
	args: {
		...Default.args,
		children: undefined,
	},
};

export const CustomTheme: Story = {
	args: {
		...Default.args,
		theme: wooTheme,
	},
};

export const ErrorStates: Story = {
	render: () => (
		<div style={ { display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(2, 1fr)' } }>
			<div>
				<h3>Empty Data</h3>
				<PieChart size={ 300 } thickness={ 0.6 } data={ [] } />
			</div>
			<div>
				<h3>Single Value</h3>
				<PieChart
					size={ 300 }
					thickness={ 0.6 }
					data={ [ { label: 'Single', value: 100, percentage: 100 } ] }
				/>
			</div>
		</div>
	),
};

export const Thin: Story = {
	args: {
		...Default.args,
		thickness: 0.2,
		gapScale: 0.01,
		children: (
			<Group>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
					Thin Donut
				</Text>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
					Thickness: 20%
				</Text>
			</Group>
		),
	},
};
`,f={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:115},startBody:{col:23,line:88},endBody:{col:1,line:115}},WithVerticalLegend:{startLoc:{col:34,line:116},endLoc:{col:1,line:121},startBody:{col:34,line:116},endBody:{col:1,line:121}},WithoutCenter:{startLoc:{col:29,line:122},endLoc:{col:1,line:127},startBody:{col:29,line:122},endBody:{col:1,line:127}},CustomTheme:{startLoc:{col:27,line:128},endLoc:{col:1,line:133},startBody:{col:27,line:128},endBody:{col:1,line:133}},ErrorStates:{startLoc:{col:27,line:134},endLoc:{col:1,line:163},startBody:{col:27,line:134},endBody:{col:1,line:163}},Thin:{startLoc:{col:20,line:164},endLoc:{col:1,line:185},startBody:{col:20,line:164},endBody:{col:1,line:185}}};const u=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],x={title:"JS Packages/Charts/Types/Donut Chart",component:d.A,parameters:{storySource:{source:`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { PieChart } from '../../pie-chart';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const data = [{
  label: 'Active Users',
  value: 65000,
  valueDisplay: '65K',
  percentage: 65
}, {
  label: 'Inactive Users',
  value: 35000,
  valueDisplay: '35K',
  percentage: 35
}];
const meta = {
  title: 'JS Packages/Charts/Types/Donut Chart',
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
    }
  }
};
export default meta;
export const Default = {
  args: {
    thickness: 0.4,
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    theme: 'default',
    showLegend: true,
    legendOrientation: 'horizontal',
    children: /*#__PURE__*/_jsxs(Group, {
      children: [/*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 24,
        y: -16,
        children: "User Activity"
      }), /*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 18,
        y: 16,
        children: "Total: 100K Users"
      })]
    })
  }
};
export const WithVerticalLegend = {
  args: {
    ...Default.args,
    legendOrientation: 'vertical'
  }
};
export const WithoutCenter = {
  args: {
    ...Default.args,
    children: undefined
  }
};
export const CustomTheme = {
  args: {
    ...Default.args,
    theme: wooTheme
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
        thickness: 0.6,
        data: []
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Single Value"
      }), /*#__PURE__*/_jsx(PieChart, {
        size: 300,
        thickness: 0.6,
        data: [{
          label: 'Single',
          value: 100,
          percentage: 100
        }]
      })]
    })]
  })
};
export const Thin = {
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    children: /*#__PURE__*/_jsxs(Group, {
      children: [/*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 24,
        y: -16,
        children: "Thin Donut"
      }), /*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 18,
        y: 16,
        children: "Thickness: 20%"
      })]
    })
  }
};`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:115},startBody:{col:23,line:88},endBody:{col:1,line:115}},"with-vertical-legend":{startLoc:{col:34,line:116},endLoc:{col:1,line:121},startBody:{col:34,line:116},endBody:{col:1,line:121}},"without-center":{startLoc:{col:29,line:122},endLoc:{col:1,line:127},startBody:{col:29,line:122},endBody:{col:1,line:127}},"custom-theme":{startLoc:{col:27,line:128},endLoc:{col:1,line:133},startBody:{col:27,line:128},endBody:{col:1,line:133}},"error-states":{startLoc:{col:27,line:134},endLoc:{col:1,line:163},startBody:{col:27,line:134},endBody:{col:1,line:163}},thin:{startLoc:{col:20,line:164},endLoc:{col:1,line:185},startBody:{col:20,line:164},endBody:{col:1,line:185}}}},layout:"centered"},decorators:[(_,{args:y})=>(0,t.jsx)(m.NP,{theme:y.theme,children:(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,t.jsx)(_,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:"select",options:{default:void 0,jetpack:c.QI,woo:c.pk},defaultValue:void 0}}},e={args:{thickness:.4,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:u,theme:"default",showLegend:!0,legendOrientation:"horizontal",children:(0,t.jsxs)(p.A,{children:[(0,t.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,t.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},r={args:{...e.args,legendOrientation:"vertical"}},o={args:{...e.args,children:void 0}},a={args:{...e.args,theme:c.pk}},i={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(d.A,{size:300,thickness:.6,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Value"}),(0,t.jsx)(d.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},s={args:{...e.args,thickness:.2,gapScale:.01,children:(0,t.jsxs)(p.A,{children:[(0,t.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,t.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},g=["Default","WithVerticalLegend","WithoutCenter","CustomTheme","ErrorStates","Thin"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 0.4,
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    theme: 'default',
    showLegend: true,
    legendOrientation: 'horizontal',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...e.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    legendOrientation: 'vertical'
  }
}`,...r.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...o.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    theme: wooTheme
  }
}`,...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart size={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>
}`,...i.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...s.parameters?.docs?.source}}}}}]);
