"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(b,d,e)=>{e.r(d),e.d(d,{Default:()=>s,ErrorStates:()=>g,Responsiveness:()=>x,WithHorizontalLegend:()=>c,WithTooltips:()=>a,WithVerticalLegend:()=>p,__namedExportsOrder:()=>M,default:()=>_});var l=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=`import { PieSemiCircleChart } from '../index';
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
`,u={Default:{startLoc:{col:23,line:89},endLoc:{col:1,line:101},startBody:{col:23,line:89},endBody:{col:1,line:101}},WithTooltips:{startLoc:{col:28,line:102},endLoc:{col:1,line:114},startBody:{col:28,line:102},endBody:{col:1,line:114}},WithHorizontalLegend:{startLoc:{col:36,line:115},endLoc:{col:1,line:122},startBody:{col:36,line:115},endBody:{col:1,line:122}},WithVerticalLegend:{startLoc:{col:34,line:123},endLoc:{col:1,line:129},startBody:{col:34,line:123},endBody:{col:1,line:129}},Responsiveness:{startLoc:{col:30,line:134},endLoc:{col:1,line:143},startBody:{col:30,line:134},endBody:{col:1,line:143}},ErrorStates:{startLoc:{col:27,line:144},endLoc:{col:1,line:208},startBody:{col:27,line:144},endBody:{col:1,line:208}}};const o=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}],r=P=>(0,t.jsx)("div",{style:{resize:"both",overflow:"hidden",padding:"2rem",width:"800px",aspectRatio:"2/1",minWidth:"400px",maxWidth:"1200px",height:"450px",border:"1px dashed #ccc"},children:(0,t.jsx)(P,{})}),_={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:l.A,parameters:{storySource:{source:`import { PieSemiCircleChart } from '../index';
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
};`,locationsMap:{default:{startLoc:{col:23,line:89},endLoc:{col:1,line:101},startBody:{col:23,line:89},endBody:{col:1,line:101}},"with-tooltips":{startLoc:{col:28,line:102},endLoc:{col:1,line:114},startBody:{col:28,line:102},endBody:{col:1,line:114}},"with-horizontal-legend":{startLoc:{col:36,line:115},endLoc:{col:1,line:122},startBody:{col:36,line:115},endBody:{col:1,line:122}},"with-vertical-legend":{startLoc:{col:34,line:123},endLoc:{col:1,line:129},startBody:{col:34,line:123},endBody:{col:1,line:129}},responsiveness:{startLoc:{col:30,line:134},endLoc:{col:1,line:143},startBody:{col:30,line:134},endBody:{col:1,line:143}},"error-states":{startLoc:{col:27,line:144},endLoc:{col:1,line:208},startBody:{col:27,line:144},endBody:{col:1,line:208}}}},layout:"centered"},decorators:[r],argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:5}},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},s={args:{width:600,thickness:.4,padding:20,data:o,label:"OS",note:"Windows +10%",clockwise:!0,showLegend:!1,legendOrientation:"horizontal"}},a={args:{...s.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},c={args:{...s.args,width:600,showLegend:!0,legendOrientation:"horizontal"}},p={args:{...s.args,showLegend:!0,legendOrientation:"vertical"}},y={...s.args};delete y.width;const x={args:y,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},g={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(l.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(l.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(l.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(l.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},M=["Default","WithTooltips","WithHorizontalLegend","WithVerticalLegend","Responsiveness","ErrorStates"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...c.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...p.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(b,d,e)=>{e.d(d,{$:()=>A});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),i=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),u=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),o=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),r=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/providers/theme/theme-provider.tsx"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(a),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),y={};y.insert="head",y.singleton=!1;var x=c()(p.A,y);const g=p.A.locals||{};function M(n){return n&&typeof n=="object"&&"value"in n&&typeof n.value<"u"?n.value:n}function P(n){return String(M(n))}function v({scale:n,labelFormat:T}){return(D,C)=>({datum:D,index:C,text:`${T(D,C)}`,value:n(D)})}var E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w={horizontal:"row",vertical:"column"},A=(0,_.forwardRef)(({items:n,className:T,orientation:D="horizontal",shape:C="rect",fill:O=P,size:K=P,labelFormat:Y=M,labelTransform:H=v,shapeWidth:X=16,shapeHeight:G=16,shapeMargin:Z="2px 4px 2px 0",labelAlign:V="left",labelFlex:Q="1",labelMargin:$="0 4px",itemMargin:J="0",itemDirection:R="row",legendLabelProps:k,...F},I)=>{const B=(0,s.RW)(),z=(0,r.A)({domain:n.map(j=>j.label),range:n.map(j=>j.color)}),q=z.domain(),ee=(0,_.useCallback)(({index:j})=>n[j]?.shapeStyle??B.legendShapeStyles?.[j]??{},[n,B]);return(0,E.jsx)(t.A,{scale:z,labelFormat:Y,labelTransform:H,children:j=>(0,E.jsx)("div",{ref:I,role:"list","data-testid":`legend-${D}`,className:(0,h.A)(g.legend,g[`legend--${D}`],T),style:{flexDirection:w[D],...B.legendContainerStyles},children:j.map((L,S)=>(0,E.jsxs)(i.A,{className:g["legend-item"],"data-testid":"legend-item",margin:J,flexDirection:R,...F,children:[n[S]?.renderGlyph?(0,E.jsx)("svg",{width:n[S]?.glyphSize*2,height:n[S]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,E.jsx)(l.A,{children:n[S]?.renderGlyph({key:`legend-glyph-${L.text}`,datum:{},index:S,color:O(L),size:n[S]?.glyphSize,x:n[S]?.glyphSize,y:n[S]?.glyphSize})})}):(0,E.jsx)(u.A,{shape:C,height:G,width:X,margin:Z,item:q[S],itemIndex:S,label:L,fill:O,size:K,shapeStyle:ee}),(0,E.jsxs)(o.A,{style:{justifyContent:V,flex:Q,margin:$,...B.legendLabelStyles},...k,children:[L.text,n.find(W=>W.label===L.text)?.value&&(0,E.jsx)("span",{className:g["legend-item-value"],children:n.find(W=>W.label===L.text)?.value})]})]},`legend-${L.text}-${S}`))})})});try{A.displayName="BaseLegend",A.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:A.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(b,d,e)=>{e.d(d,{A:()=>A});var l=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),i=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),u=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../charts/src/providers/theme/theme-provider.tsx"),s=e("../charts/src/components/legend/base-legend.tsx"),a=e("../charts/src/components/shared/with-responsive.tsx"),c=e("../charts/src/components/tooltip/base-tooltip.tsx"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(p),x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),g={};g.insert="head",g.singleton=!1;var M=y()(x.A,g);const P=x.A.locals||{};var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=n=>n.length?n.some(C=>C.percentage<0||C.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:n.reduce((C,O)=>C+O.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},w=({data:n,width:T=400,thickness:D=.4,clockwise:C=!0,withTooltips:O=!1,showLegend:K=!1,legendOrientation:Y="horizontal",legendShape:H="circle",label:X,note:G,className:Z})=>{const V=(0,_.RW)(),{tooltipOpen:Q,tooltipLeft:$,tooltipTop:J,tooltipData:R,hideTooltip:k,showTooltip:F}=(0,o.A)(),I=(0,h.useCallback)((m,f)=>{const te=(0,l.A)(m);te&&F({tooltipData:f.data,tooltipLeft:te.x,tooltipTop:te.y-10})},[F]),B=(0,h.useCallback)(()=>{k()},[k]),z=(0,h.useCallback)(m=>f=>{I(f,m)},[I]),{isValid:q,message:ee}=E(n);if(!q)return(0,v.jsx)("div",{className:P["pie-semi-circle-chart"],children:(0,v.jsx)("svg",{width:T,height:T/2,"data-testid":"pie-chart-svg",children:(0,v.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:P.error,children:ee})})});const j=T/2,L=.03,S=T-L*2,W=j-L,U=Math.min(S,W*2)/2,ne=U*(1-D+L),se=n.map((m,f)=>({...m,index:f})),ae=C?-Math.PI/2:Math.PI/2,oe=C?Math.PI/2:-Math.PI/2,N={value:m=>m.value,sort:(m,f)=>f.value-m.value,fill:m=>m.color||V.colors[m.index%V.colors.length]},re=n.map((m,f)=>({label:m.label,value:m.valueDisplay||m.value.toString(),color:N.fill({...m,index:f})}));return(0,v.jsxs)("div",{className:(0,r.A)("pie-semi-circle-chart",P["pie-semi-circle-chart"],Z),"data-testid":"pie-chart-container",children:[(0,v.jsx)("svg",{width:T,height:j,viewBox:`0 0 ${T} ${j}`,"data-testid":"pie-chart-svg",children:(0,v.jsxs)(t.A,{top:U,left:U,children:[(0,v.jsx)(i.A,{data:se,pieValue:N.value,outerRadius:U,innerRadius:ne,cornerRadius:3,padAngle:L,startAngle:ae,endAngle:oe,pieSort:N.sort,children:m=>m.arcs.map(f=>(0,v.jsx)("g",{onMouseMove:z(f),onMouseLeave:B,children:(0,v.jsx)("path",{d:m.path(f)||"",fill:N.fill(f.data),"data-testid":"pie-segment"})},f.data.label))}),(0,v.jsxs)(t.A,{children:[(0,v.jsx)(u.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:P.label,children:X}),(0,v.jsx)(u.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:P.note,children:G})]})]})}),O&&Q&&R&&(0,v.jsx)(c.R,{data:{label:R.label,value:R.value,valueDisplay:R.valueDisplay},top:J||0,left:$||0}),K&&(0,v.jsx)(s.$,{items:re,orientation:Y,className:P["pie-semi-circle-chart-legend"],shape:H})]})};w.displayName="PieSemiCircleChart";const A=(0,a.F)(w);try{w.displayName="PieSemiCircleChart",w.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:w.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/shared/with-responsive.tsx":(b,d,e)=>{e.d(d,{F:()=>o});var l=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i={width:600,height:400},u=({resizeDebounceTime:r=300,maxWidth:h=1200,aspectRatio:_=.5})=>{const{parentRef:s,width:a}=(0,l.A)({debounceTime:r,enableDebounceLeadingCall:!0,initialSize:i}),c=a?Math.min(a,h):i.width,p=c*_;return{parentRef:s,width:c,height:p}};function o(r){return function({resizeDebounceTime:_=300,maxWidth:s=1200,aspectRatio:a=.5,...c}){const{parentRef:p,width:y,height:x}=u({resizeDebounceTime:_,maxWidth:s,aspectRatio:a});return(0,t.jsx)("div",{ref:p,style:{width:"100%"},children:(0,t.jsx)(r,{width:y,height:x,size:y,...c})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(b,d,e)=>{e.d(d,{R:()=>s});var l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),u={};u.insert="head",u.singleton=!1;var o=t()(i.A,u);const r=i.A.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=({data:a})=>(0,h.jsxs)(h.Fragment,{children:[a?.label,": ",a?.valueDisplay||a?.value]}),s=({data:a,top:c,left:p,component:y=_,children:x,className:g})=>(0,h.jsx)("div",{className:r.tooltip,style:{top:c,left:p},role:"tooltip",children:x||a&&(0,h.jsx)(y,{data:a,className:g})});try{s.displayName="BaseTooltip",s.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:s.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(b,d,e)=>{e.d(d,{NP:()=>_,Ox:()=>h,RW:()=>r});var l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../charts/src/providers/theme/themes.ts"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.createContext)(i.zQ),r=()=>(0,t.useContext)(o),h=s=>{const a=r();return(0,t.useMemo)(()=>{const c=(s??[]).map(p=>p.options?.stroke).filter(p=>!!p);return(0,l.A)({...a,colors:[...c,...a.colors??[]]})},[a,s])},_=({theme:s={},children:a})=>{const c={...i.zQ,...s};return(0,u.jsx)(o.Provider,{value:c,children:a})};try{_.displayName="ThemeProvider",_.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:_.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{r.displayName="useChartTheme",r.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:r.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{h.displayName="useXYChartTheme",h.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:h.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(b,d,e)=>{e.d(d,{QI:()=>t,pk:()=>i,zQ:()=>l});const l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},i={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(b,d,e)=>{e.d(d,{A:()=>r});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(i),o=u()(t());o.push([b.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),o.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const r=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(b,d,e)=>{e.d(d,{A:()=>r});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(i),o=u()(t());o.push([b.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const r=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(b,d,e)=>{e.d(d,{A:()=>r});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(i),o=u()(t());o.push([b.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const r=o}}]);
