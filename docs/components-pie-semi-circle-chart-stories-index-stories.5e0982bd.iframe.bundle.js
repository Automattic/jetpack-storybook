"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(b,d,e)=>{e.r(d),e.d(d,{Default:()=>n,ErrorStates:()=>S,Responsiveness:()=>f,WithHorizontalLegend:()=>m,WithTooltips:()=>s,WithVerticalLegend:()=>h,__namedExportsOrder:()=>M,default:()=>y});var o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=`import { PieSemiCircleChart } from '../index';
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
`,c={Default:{startLoc:{col:23,line:68},endLoc:{col:1,line:80},startBody:{col:23,line:68},endBody:{col:1,line:80}},WithTooltips:{startLoc:{col:28,line:81},endLoc:{col:1,line:93},startBody:{col:28,line:81},endBody:{col:1,line:93}},WithHorizontalLegend:{startLoc:{col:36,line:94},endLoc:{col:1,line:101},startBody:{col:36,line:94},endBody:{col:1,line:101}},WithVerticalLegend:{startLoc:{col:34,line:102},endLoc:{col:1,line:108},startBody:{col:34,line:102},endBody:{col:1,line:108}},Responsiveness:{startLoc:{col:30,line:113},endLoc:{col:1,line:122},startBody:{col:30,line:113},endBody:{col:1,line:122}},ErrorStates:{startLoc:{col:27,line:123},endLoc:{col:1,line:187},startBody:{col:27,line:123},endBody:{col:1,line:187}}};const l=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}],i=x=>(0,t.jsx)("div",{style:{resize:"both",overflow:"hidden",padding:"2rem",width:"800px",aspectRatio:"2/1",minWidth:"400px",maxWidth:"1200px",height:"450px",border:"1px dashed #ccc"},children:(0,t.jsx)(x,{})}),y={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:o.A,parameters:{storySource:{source:`import { PieSemiCircleChart } from '../index';
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
};`,locationsMap:{default:{startLoc:{col:23,line:68},endLoc:{col:1,line:80},startBody:{col:23,line:68},endBody:{col:1,line:80}},"with-tooltips":{startLoc:{col:28,line:81},endLoc:{col:1,line:93},startBody:{col:28,line:81},endBody:{col:1,line:93}},"with-horizontal-legend":{startLoc:{col:36,line:94},endLoc:{col:1,line:101},startBody:{col:36,line:94},endBody:{col:1,line:101}},"with-vertical-legend":{startLoc:{col:34,line:102},endLoc:{col:1,line:108},startBody:{col:34,line:102},endBody:{col:1,line:108}},responsiveness:{startLoc:{col:30,line:113},endLoc:{col:1,line:122},startBody:{col:30,line:113},endBody:{col:1,line:122}},"error-states":{startLoc:{col:27,line:123},endLoc:{col:1,line:187},startBody:{col:27,line:123},endBody:{col:1,line:187}}}},layout:"centered"},decorators:[i],argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:5}}}},n={args:{width:600,thickness:.4,padding:20,data:l,label:"OS",note:"Windows +10%",clockwise:!0,showLegend:!1,legendOrientation:"horizontal"}},s={args:{...n.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},m={args:{...n.args,width:600,showLegend:!0,legendOrientation:"horizontal"}},h={args:{...n.args,showLegend:!0,legendOrientation:"vertical"}},_={...n.args};delete _.width;const f={args:_,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},S={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(o.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(o.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},M=["Default","WithTooltips","WithHorizontalLegend","WithVerticalLegend","Responsiveness","ErrorStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...h.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(b,d,e)=>{e.d(d,{$:()=>T});var o=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),t=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),r=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),c=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),l=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(y),s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),m={};m.insert="head",m.singleton=!1;var h=n()(s.A,m);const _=s.A.locals||{};function f(a){return a&&typeof a=="object"&&"value"in a&&typeof a.value<"u"?a.value:a}function S(a){return String(f(a))}function M({scale:a,labelFormat:A}){return(v,j)=>({datum:v,index:j,text:`${A(v,j)}`,value:a(v)})}var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={horizontal:"row",vertical:"column"},T=({items:a,className:A,orientation:v="horizontal",shape:j="rect",fill:k=S,size:P=S,labelFormat:D=f,labelTransform:z=M,shapeWidth:K=16,shapeHeight:Y=16,shapeMargin:H="2px 4px 2px 0",labelAlign:X="left",labelFlex:Z="1",labelMargin:F="0 4px",itemMargin:G="0",itemDirection:Q="row",legendLabelProps:J,...w})=>{const O=(0,l.A)({domain:a.map(E=>E.label),range:a.map(E=>E.color)}),V=O.domain(),W=(0,u.useCallback)(({index:E})=>a[E]?.shapeStyle??{},[a]);return(0,x.jsx)(o.A,{scale:O,labelFormat:D,labelTransform:z,children:E=>(0,x.jsx)("div",{role:"list","data-testid":`legend-${v}`,className:(0,i.A)(_.legend,_[`legend--${v}`],A),style:{flexDirection:g[v]},children:E.map((L,R)=>(0,x.jsxs)(t.A,{className:_["legend-item"],"data-testid":"legend-item",margin:G,flexDirection:Q,...w,children:[(0,x.jsx)(r.A,{shape:j,height:Y,width:K,margin:H,item:V[R],itemIndex:R,label:L,fill:k,size:P,shapeStyle:W}),(0,x.jsxs)(c.A,{label:L.text,flex:Z,margin:F,align:X,className:_["legend-item-label"],...J,children:[L.text,a.find(B=>B.label===L.text)?.value&&(0,x.jsx)("span",{className:_["legend-item-value"],children:a.find(B=>B.label===L.text)?.value})]})]},`legend-${L.text}-${R}`))})})};try{T.displayName="BaseLegend",T.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:T.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(b,d,e)=>{e.d(d,{A:()=>A});var o=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=e("../charts/src/providers/theme/theme-provider.tsx"),n=e("../charts/src/components/legend/base-legend.tsx"),s=e("../charts/src/components/shared/with-responsive.tsx"),m=e("../charts/src/components/tooltip/base-tooltip.tsx"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(h),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),S={};S.insert="head",S.singleton=!1;var M=_()(f.A,S);const x=f.A.locals||{};var g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T=v=>v.length?v.some(P=>P.percentage<0||P.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:v.reduce((P,D)=>P+D.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},a=({data:v,width:j=400,thickness:k=.4,clockwise:P=!0,withTooltips:D=!1,showLegend:z=!1,legendOrientation:K="horizontal",legendShape:Y="circle",label:H,note:X,className:Z})=>{const F=(0,y.RW)(),{tooltipOpen:G,tooltipLeft:Q,tooltipTop:J,tooltipData:w,hideTooltip:O,showTooltip:V}=(0,l.A)(),W=(0,u.useCallback)((p,C)=>{const q=(0,o.A)(p);q&&V({tooltipData:C.data,tooltipLeft:q.x,tooltipTop:q.y-10})},[V]),E=(0,u.useCallback)(()=>{O()},[O]),L=(0,u.useCallback)(p=>C=>{W(C,p)},[W]),{isValid:R,message:B}=T(v);if(!R)return(0,g.jsx)("div",{className:x["pie-semi-circle-chart"],children:(0,g.jsx)("svg",{width:j,height:j/2,"data-testid":"pie-chart-svg",children:(0,g.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:x.error,children:B})})});const $=j/2,I=.03,ee=j-I*2,te=$-I,U=Math.min(ee,te*2)/2,ne=U*(1-k+I),se=v.map((p,C)=>({...p,index:C})),ae=P?-Math.PI/2:Math.PI/2,oe=P?Math.PI/2:-Math.PI/2,N={value:p=>p.value,sort:(p,C)=>C.value-p.value,fill:p=>p.color||F.colors[p.index%F.colors.length]},re=v.map((p,C)=>({label:p.label,value:p.valueDisplay||p.value.toString(),color:N.fill({...p,index:C})}));return(0,g.jsxs)("div",{className:(0,i.A)("pie-semi-circle-chart",x["pie-semi-circle-chart"],Z),"data-testid":"pie-chart-container",children:[(0,g.jsx)("svg",{width:j,height:$,viewBox:`0 0 ${j} ${$}`,"data-testid":"pie-chart-svg",children:(0,g.jsxs)(t.A,{top:U,left:U,children:[(0,g.jsx)(r.A,{data:se,pieValue:N.value,outerRadius:U,innerRadius:ne,cornerRadius:3,padAngle:I,startAngle:ae,endAngle:oe,pieSort:N.sort,children:p=>p.arcs.map(C=>(0,g.jsx)("g",{onMouseMove:L(C),onMouseLeave:E,children:(0,g.jsx)("path",{d:p.path(C)||"",fill:N.fill(C.data),"data-testid":"pie-segment"})},C.data.label))}),(0,g.jsxs)(t.A,{children:[(0,g.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:x.label,children:H}),(0,g.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:x.note,children:X})]})]})}),D&&G&&w&&(0,g.jsx)(m.R,{data:{label:w.label,value:w.value,valueDisplay:w.valueDisplay},top:J||0,left:Q||0}),z&&(0,g.jsx)(n.$,{items:re,orientation:K,className:x["pie-semi-circle-chart-legend"],shape:Y})]})};a.displayName="PieSemiCircleChart";const A=(0,s.F)(a);try{a.displayName="PieSemiCircleChart",a.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:a.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/shared/with-responsive.tsx":(b,d,e)=>{e.d(d,{F:()=>r});var o=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r(c,l){const{maxWidth:i=1200,aspectRatio:u=.5,debounceTime:y=50}=l||{};return function(s){const{parentRef:m,width:h}=(0,o.A)({debounceTime:y,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),_=h?Math.min(h,i):600,f=s.height??_*u;return(0,t.jsx)("div",{ref:m,style:{width:"100%"},children:(0,t.jsx)(c,{width:_,height:f,size:_,...s})})}}try{r.displayName="withResponsive",r.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:r.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(b,d,e)=>{e.d(d,{R:()=>n});var o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(o),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var l=t()(r.A,c);const i=r.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({data:s})=>(0,u.jsxs)(u.Fragment,{children:[s?.label,": ",s?.valueDisplay||s?.value]}),n=({data:s,top:m,left:h,component:_=y,children:f,className:S})=>(0,u.jsx)("div",{className:i.tooltip,style:{top:m,left:h},role:"tooltip",children:f||s&&(0,u.jsx)(_,{data:s,className:S})});try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(b,d,e)=>{e.d(d,{NP:()=>y,Ox:()=>u,RW:()=>i});var o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../charts/src/providers/theme/themes.ts"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,t.createContext)(r.zQ),i=()=>(0,t.useContext)(l),u=n=>{const s=i();return(0,t.useMemo)(()=>{const m=(n??[]).map(h=>h.options?.stroke).filter(h=>!!h);return(0,o.A)({...s,colors:[...m,...s.colors??[]]})},[s,n])},y=({theme:n={},children:s})=>{const m={...r.zQ,...n};return(0,c.jsx)(l.Provider,{value:m,children:s})};try{y.displayName="ThemeProvider",y.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:y.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{i.displayName="useChartTheme",i.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:i.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{u.displayName="useXYChartTheme",u.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:u.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(b,d,e)=>{e.d(d,{QI:()=>t,pk:()=>r,zQ:()=>o});const o={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},r={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(b,d,e)=>{e.d(d,{A:()=>i});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),l=c()(t());l.push([b.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),l.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const i=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(b,d,e)=>{e.d(d,{A:()=>i});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),l=c()(t());l.push([b.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),l.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const i=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(b,d,e)=>{e.d(d,{A:()=>i});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),l=c()(t());l.push([b.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),l.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const i=l}}]);
