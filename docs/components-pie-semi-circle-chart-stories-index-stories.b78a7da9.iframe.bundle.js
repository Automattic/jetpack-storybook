"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(S,d,e)=>{e.r(d),e.d(d,{Default:()=>n,ErrorStates:()=>y,Responsiveness:()=>g,WithHorizontalLegend:()=>_,WithTooltips:()=>s,WithVerticalLegend:()=>p,__namedExportsOrder:()=>B,default:()=>f});var a=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=`import { PieSemiCircleChart } from '../index';
import type { Meta, StoryObj } from '@storybook/react';

const data = [
	{
		label: 'MacOS',
		value: 30000,
		valueDisplay: '30K',
		percentage: 5,
	},
	{
		label: 'Linux',
		value: 22000,
		valueDisplay: '22K',
		percentage: 1,
	},
	{
		label: 'Windows',
		value: 80000,
		valueDisplay: '80K',
		percentage: 2,
	},
];

const ResponsiveDecorator = Story => (
	<div
		style={ {
			resize: 'both',
			overflow: 'hidden',
			padding: '2rem',
			width: '800px',
			aspectRatio: '2/1',
			minWidth: '400px',
			maxWidth: '1200px',
			height: '450px',
			border: '1px dashed #ccc',
		} }
	>
		<Story />
	</div>
);

const meta = {
	title: 'JS Packages/Charts/Types/Pie Semi Circle Chart',
	component: PieSemiCircleChart,
	parameters: {
		layout: 'centered',
	},
	decorators: [ ResponsiveDecorator ],
	argTypes: {
		width: {
			control: {
				type: 'range',
				min: 100,
				max: 1000,
				step: 10,
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
				step: 5,
			},
		},
	},
} satisfies Meta< typeof PieSemiCircleChart >;

export default meta;
type Story = StoryObj< typeof PieSemiCircleChart >;

export const Default: Story = {
	args: {
		width: 600,
		thickness: 0.4,
		padding: 20,
		data,
		label: 'OS',
		note: 'Windows +10%',
		clockwise: true,
		showLegend: false,
		legendOrientation: 'horizontal',
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
				story: 'Semi-circle pie chart with interactive tooltips that appear on hover.',
			},
		},
	},
};

export const WithHorizontalLegend: Story = {
	args: {
		...Default.args,
		width: 600,
		showLegend: true,
		legendOrientation: 'horizontal',
	},
};

export const WithVerticalLegend: Story = {
	args: {
		...Default.args,
		showLegend: true,
		legendOrientation: 'vertical',
	},
};

const responsiveArgs = { ...Default.args };
delete responsiveArgs.width;
export const Responsiveness: Story = {
	args: responsiveArgs,
	parameters: {
		docs: {
			description: {
				story:
					'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.',
			},
		},
	},
};

export const ErrorStates: Story = {
	render: () => (
		<div style={ { display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(2, 1fr)' } }>
			<div>
				<h3>Empty Data</h3>
				<PieSemiCircleChart width={ 300 } data={ [] } />
			</div>

			<div>
				<h3>Zero Total Percentage</h3>
				<PieSemiCircleChart
					width={ 300 }
					data={ [
						{ label: 'A', value: 0, percentage: 0 },
						{ label: 'B', value: 0, percentage: 0 },
					] }
				/>
			</div>

			<div>
				<h3>Negative Values</h3>
				<PieSemiCircleChart
					width={ 300 }
					data={ [
						{ label: 'A', value: -30, percentage: -30 },
						{ label: 'B', value: 130, percentage: 130 },
					] }
				/>
			</div>

			<div>
				<h3>Single Data Point</h3>
				<PieSemiCircleChart
					width={ 300 }
					data={ [ { label: 'Single Point', value: 100, percentage: 100 } ] }
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Examples of how the semi-circle pie chart handles various error states and edge cases.',
			},
		},
	},
};
`,c={Default:{startLoc:{col:23,line:68},endLoc:{col:1,line:80},startBody:{col:23,line:68},endBody:{col:1,line:80}},WithTooltips:{startLoc:{col:28,line:81},endLoc:{col:1,line:93},startBody:{col:28,line:81},endBody:{col:1,line:93}},WithHorizontalLegend:{startLoc:{col:36,line:94},endLoc:{col:1,line:101},startBody:{col:36,line:94},endBody:{col:1,line:101}},WithVerticalLegend:{startLoc:{col:34,line:102},endLoc:{col:1,line:108},startBody:{col:34,line:102},endBody:{col:1,line:108}},Responsiveness:{startLoc:{col:30,line:113},endLoc:{col:1,line:122},startBody:{col:30,line:113},endBody:{col:1,line:122}},ErrorStates:{startLoc:{col:27,line:123},endLoc:{col:1,line:187},startBody:{col:27,line:123},endBody:{col:1,line:187}}};const r=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}],l=j=>(0,t.jsx)("div",{style:{resize:"both",overflow:"hidden",padding:"2rem",width:"800px",aspectRatio:"2/1",minWidth:"400px",maxWidth:"1200px",height:"450px",border:"1px dashed #ccc"},children:(0,t.jsx)(j,{})}),f={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:a.A,parameters:{storySource:{source:`import { PieSemiCircleChart } from '../index';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const data = [{
  label: 'MacOS',
  value: 30000,
  valueDisplay: '30K',
  percentage: 5
}, {
  label: 'Linux',
  value: 22000,
  valueDisplay: '22K',
  percentage: 1
}, {
  label: 'Windows',
  value: 80000,
  valueDisplay: '80K',
  percentage: 2
}];
const ResponsiveDecorator = Story => /*#__PURE__*/_jsx("div", {
  style: {
    resize: 'both',
    overflow: 'hidden',
    padding: '2rem',
    width: '800px',
    aspectRatio: '2/1',
    minWidth: '400px',
    maxWidth: '1200px',
    height: '450px',
    border: '1px dashed #ccc'
  },
  children: /*#__PURE__*/_jsx(Story, {})
});
const meta = {
  title: 'JS Packages/Charts/Types/Pie Semi Circle Chart',
  component: PieSemiCircleChart,
  parameters: {
    layout: 'centered'
  },
  decorators: [ResponsiveDecorator],
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 100,
        max: 1000,
        step: 10
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
        step: 5
      }
    }
  }
};
export default meta;
export const Default = {
  args: {
    width: 600,
    thickness: 0.4,
    padding: 20,
    data,
    label: 'OS',
    note: 'Windows +10%',
    clockwise: true,
    showLegend: false,
    legendOrientation: 'horizontal'
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
        story: 'Semi-circle pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
};
export const WithHorizontalLegend = {
  args: {
    ...Default.args,
    width: 600,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
};
export const WithVerticalLegend = {
  args: {
    ...Default.args,
    showLegend: true,
    legendOrientation: 'vertical'
  }
};
const responsiveArgs = {
  ...Default.args
};
delete responsiveArgs.width;
export const Responsiveness = {
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
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
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        width: 300,
        data: []
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Zero Total Percentage"
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        width: 300,
        data: [{
          label: 'A',
          value: 0,
          percentage: 0
        }, {
          label: 'B',
          value: 0,
          percentage: 0
        }]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Negative Values"
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        width: 300,
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
      }), /*#__PURE__*/_jsx(PieSemiCircleChart, {
        width: 300,
        data: [{
          label: 'Single Point',
          value: 100,
          percentage: 100
        }]
      })]
    })]
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the semi-circle pie chart handles various error states and edge cases.'
      }
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:68},endLoc:{col:1,line:80},startBody:{col:23,line:68},endBody:{col:1,line:80}},"with-tooltips":{startLoc:{col:28,line:81},endLoc:{col:1,line:93},startBody:{col:28,line:81},endBody:{col:1,line:93}},"with-horizontal-legend":{startLoc:{col:36,line:94},endLoc:{col:1,line:101},startBody:{col:36,line:94},endBody:{col:1,line:101}},"with-vertical-legend":{startLoc:{col:34,line:102},endLoc:{col:1,line:108},startBody:{col:34,line:102},endBody:{col:1,line:108}},responsiveness:{startLoc:{col:30,line:113},endLoc:{col:1,line:122},startBody:{col:30,line:113},endBody:{col:1,line:122}},"error-states":{startLoc:{col:27,line:123},endLoc:{col:1,line:187},startBody:{col:27,line:123},endBody:{col:1,line:187}}}},layout:"centered"},decorators:[l],argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:5}}}},n={args:{width:600,thickness:.4,padding:20,data:r,label:"OS",note:"Windows +10%",clockwise:!0,showLegend:!1,legendOrientation:"horizontal"}},s={args:{...n.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},_={args:{...n.args,width:600,showLegend:!0,legendOrientation:"horizontal"}},p={args:{...n.args,showLegend:!0,legendOrientation:"vertical"}},b={...n.args};delete b.width;const g={args:b,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},y={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(a.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(a.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(a.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(a.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},B=["Default","WithTooltips","WithHorizontalLegend","WithVerticalLegend","Responsiveness","ErrorStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    width: 600,
    thickness: 0.4,
    padding: 20,
    data,
    label: 'OS',
    note: 'Windows +10%',
    clockwise: true,
    showLegend: false,
    legendOrientation: 'horizontal'
  }
}`,...n.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,..._.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieSemiCircleChart width={300} data={[]} />
            </div>

            <div>
                <h3>Zero Total Percentage</h3>
                <PieSemiCircleChart width={300} data={[{
        label: 'A',
        value: 0,
        percentage: 0
      }, {
        label: 'B',
        value: 0,
        percentage: 0
      }]} />
            </div>

            <div>
                <h3>Negative Values</h3>
                <PieSemiCircleChart width={300} data={[{
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
                <PieSemiCircleChart width={300} data={[{
        label: 'Single Point',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the semi-circle pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(S,d,e)=>{e.d(d,{$:()=>P});var a=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),t=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),o=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),c=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),r=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../charts/src/providers/theme/theme-provider.tsx"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(n),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),p={};p.insert="head",p.singleton=!1;var b=s()(_.A,p);const g=_.A.locals||{};function y(m){return m&&typeof m=="object"&&"value"in m&&typeof m.value<"u"?m.value:m}function B(m){return String(y(m))}function j({scale:m,labelFormat:C}){return(v,A)=>({datum:v,index:A,text:`${C(v,A)}`,value:m(v)})}var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const U={horizontal:"row",vertical:"column"},P=({items:m,className:C,orientation:v="horizontal",shape:A="rect",fill:E=B,size:M=B,labelFormat:N=y,labelTransform:z=j,shapeWidth:K=16,shapeHeight:Y=16,shapeMargin:H="2px 4px 2px 0",labelAlign:X="left",labelFlex:W="1",labelMargin:Z="0 4px",itemMargin:G="0",itemDirection:Q="row",legendLabelProps:R,...F})=>{const w=(0,f.RW)(),k=(0,r.A)({domain:m.map(L=>L.label),range:m.map(L=>L.color)}),J=k.domain(),$=(0,h.useCallback)(({index:L})=>m[L]?.shapeStyle??w.legendShapeStyles?.[L]??{},[m,w]);return(0,i.jsx)(a.A,{scale:k,labelFormat:N,labelTransform:z,children:L=>(0,i.jsx)("div",{role:"list","data-testid":`legend-${v}`,className:(0,l.A)(g.legend,g[`legend--${v}`],C),style:{flexDirection:U[v],...w.legendContainerStyles},children:L.map((D,O)=>(0,i.jsxs)(t.A,{className:g["legend-item"],"data-testid":"legend-item",margin:G,flexDirection:Q,...F,children:[(0,i.jsx)(o.A,{shape:A,height:Y,width:K,margin:H,item:J[O],itemIndex:O,label:D,fill:E,size:M,shapeStyle:$}),(0,i.jsxs)(c.A,{style:{justifyContent:X,flex:W,margin:Z,...w.legendLabelStyles},...R,children:[D.text,m.find(T=>T.label===D.text)?.value&&(0,i.jsx)("span",{className:g["legend-item-value"],children:m.find(T=>T.label===D.text)?.value})]})]},`legend-${D.text}-${O}`))})})};try{P.displayName="BaseLegend",P.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:P.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(S,d,e)=>{e.d(d,{A:()=>m});var a=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),r=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../charts/src/providers/theme/theme-provider.tsx"),n=e("../charts/src/components/legend/base-legend.tsx"),s=e("../charts/src/components/shared/with-responsive.tsx"),_=e("../charts/src/components/tooltip/base-tooltip.tsx"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(p),g=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),y={};y.insert="head",y.singleton=!1;var B=b()(g.A,y);const j=g.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const U=C=>C.length?C.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:C.reduce((E,M)=>E+M.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},P=({data:C,width:v=400,thickness:A=.4,clockwise:E=!0,withTooltips:M=!1,showLegend:N=!1,legendOrientation:z="horizontal",legendShape:K="circle",label:Y,note:H,className:X})=>{const W=(0,f.RW)(),{tooltipOpen:Z,tooltipLeft:G,tooltipTop:Q,tooltipData:R,hideTooltip:F,showTooltip:w}=(0,r.A)(),k=(0,h.useCallback)((u,x)=>{const q=(0,a.A)(u);q&&w({tooltipData:x.data,tooltipLeft:q.x,tooltipTop:q.y-10})},[w]),J=(0,h.useCallback)(()=>{F()},[F]),$=(0,h.useCallback)(u=>x=>{k(x,u)},[k]),{isValid:L,message:D}=U(C);if(!L)return(0,i.jsx)("div",{className:j["pie-semi-circle-chart"],children:(0,i.jsx)("svg",{width:v,height:v/2,"data-testid":"pie-chart-svg",children:(0,i.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:j.error,children:D})})});const O=v/2,T=.03,ee=v-T*2,te=O-T,V=Math.min(ee,te*2)/2,ne=V*(1-A+T),se=C.map((u,x)=>({...u,index:x})),ae=E?-Math.PI/2:Math.PI/2,oe=E?Math.PI/2:-Math.PI/2,I={value:u=>u.value,sort:(u,x)=>x.value-u.value,fill:u=>u.color||W.colors[u.index%W.colors.length]},re=C.map((u,x)=>({label:u.label,value:u.valueDisplay||u.value.toString(),color:I.fill({...u,index:x})}));return(0,i.jsxs)("div",{className:(0,l.A)("pie-semi-circle-chart",j["pie-semi-circle-chart"],X),"data-testid":"pie-chart-container",children:[(0,i.jsx)("svg",{width:v,height:O,viewBox:`0 0 ${v} ${O}`,"data-testid":"pie-chart-svg",children:(0,i.jsxs)(t.A,{top:V,left:V,children:[(0,i.jsx)(o.A,{data:se,pieValue:I.value,outerRadius:V,innerRadius:ne,cornerRadius:3,padAngle:T,startAngle:ae,endAngle:oe,pieSort:I.sort,children:u=>u.arcs.map(x=>(0,i.jsx)("g",{onMouseMove:$(x),onMouseLeave:J,children:(0,i.jsx)("path",{d:u.path(x)||"",fill:I.fill(x.data),"data-testid":"pie-segment"})},x.data.label))}),(0,i.jsxs)(t.A,{children:[(0,i.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:j.label,children:Y}),(0,i.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:j.note,children:H})]})]})}),M&&Z&&R&&(0,i.jsx)(_.R,{data:{label:R.label,value:R.value,valueDisplay:R.valueDisplay},top:Q||0,left:G||0}),N&&(0,i.jsx)(n.$,{items:re,orientation:z,className:j["pie-semi-circle-chart-legend"],shape:K})]})};P.displayName="PieSemiCircleChart";const m=(0,s.F)(P);try{P.displayName="PieSemiCircleChart",P.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:P.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/shared/with-responsive.tsx":(S,d,e)=>{e.d(d,{F:()=>o});var a=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o(c,r){const{maxWidth:l=1200,aspectRatio:h=.5,debounceTime:f=50}=r||{};return function(s){const{parentRef:_,width:p}=(0,a.A)({debounceTime:f,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),b=p?Math.min(p,l):600,g=s.height??b*h;return(0,t.jsx)("div",{ref:_,style:{width:"100%"},children:(0,t.jsx)(c,{width:b,height:g,size:b,...s})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(S,d,e)=>{e.d(d,{R:()=>n});var a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(a),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var r=t()(o.A,c);const l=o.A.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({data:s})=>(0,h.jsxs)(h.Fragment,{children:[s?.label,": ",s?.valueDisplay||s?.value]}),n=({data:s,top:_,left:p,component:b=f,children:g,className:y})=>(0,h.jsx)("div",{className:l.tooltip,style:{top:_,left:p},role:"tooltip",children:g||s&&(0,h.jsx)(b,{data:s,className:y})});try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(S,d,e)=>{e.d(d,{NP:()=>f,Ox:()=>h,RW:()=>l});var a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/providers/theme/themes.ts"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,t.createContext)(o.zQ),l=()=>(0,t.useContext)(r),h=n=>{const s=l();return(0,t.useMemo)(()=>{const _=(n??[]).map(p=>p.options?.stroke).filter(p=>!!p);return(0,a.A)({...s,colors:[..._,...s.colors??[]]})},[s,n])},f=({theme:n={},children:s})=>{const _={...o.zQ,...n};return(0,c.jsx)(r.Provider,{value:_,children:s})};try{f.displayName="ThemeProvider",f.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:f.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{l.displayName="useChartTheme",l.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:l.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{h.displayName="useXYChartTheme",h.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:h.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(S,d,e)=>{e.d(d,{QI:()=>t,pk:()=>o,zQ:()=>a});const a={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},o={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(S,d,e)=>{e.d(d,{A:()=>l});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(a),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(o),r=c()(t());r.push([S.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),r.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const l=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(S,d,e)=>{e.d(d,{A:()=>l});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(a),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(o),r=c()(t());r.push([S.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),r.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const l=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(S,d,e)=>{e.d(d,{A:()=>l});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(a),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(o),r=c()(t());r.push([S.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),r.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const l=r}}]);
