"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(S,d,e)=>{e.r(d),e.d(d,{Default:()=>n,ErrorStates:()=>g,Responsiveness:()=>v,WithHorizontalLegend:()=>_,WithTooltips:()=>s,WithVerticalLegend:()=>i,__namedExportsOrder:()=>w,default:()=>f});var o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=`import { PieSemiCircleChart } from '../index';
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
`,c={Default:{startLoc:{col:23,line:68},endLoc:{col:1,line:80},startBody:{col:23,line:68},endBody:{col:1,line:80}},WithTooltips:{startLoc:{col:28,line:81},endLoc:{col:1,line:93},startBody:{col:28,line:81},endBody:{col:1,line:93}},WithHorizontalLegend:{startLoc:{col:36,line:94},endLoc:{col:1,line:101},startBody:{col:36,line:94},endBody:{col:1,line:101}},WithVerticalLegend:{startLoc:{col:34,line:102},endLoc:{col:1,line:108},startBody:{col:34,line:102},endBody:{col:1,line:108}},Responsiveness:{startLoc:{col:30,line:113},endLoc:{col:1,line:122},startBody:{col:30,line:113},endBody:{col:1,line:122}},ErrorStates:{startLoc:{col:27,line:123},endLoc:{col:1,line:187},startBody:{col:27,line:123},endBody:{col:1,line:187}}};const r=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}],l=x=>(0,t.jsx)("div",{style:{resize:"both",overflow:"hidden",padding:"2rem",width:"800px",aspectRatio:"2/1",minWidth:"400px",maxWidth:"1200px",height:"450px",border:"1px dashed #ccc"},children:(0,t.jsx)(x,{})}),f={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:o.A,parameters:{storySource:{source:`import { PieSemiCircleChart } from '../index';
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
};`,locationsMap:{default:{startLoc:{col:23,line:68},endLoc:{col:1,line:80},startBody:{col:23,line:68},endBody:{col:1,line:80}},"with-tooltips":{startLoc:{col:28,line:81},endLoc:{col:1,line:93},startBody:{col:28,line:81},endBody:{col:1,line:93}},"with-horizontal-legend":{startLoc:{col:36,line:94},endLoc:{col:1,line:101},startBody:{col:36,line:94},endBody:{col:1,line:101}},"with-vertical-legend":{startLoc:{col:34,line:102},endLoc:{col:1,line:108},startBody:{col:34,line:102},endBody:{col:1,line:108}},responsiveness:{startLoc:{col:30,line:113},endLoc:{col:1,line:122},startBody:{col:30,line:113},endBody:{col:1,line:122}},"error-states":{startLoc:{col:27,line:123},endLoc:{col:1,line:187},startBody:{col:27,line:123},endBody:{col:1,line:187}}}},layout:"centered"},decorators:[l],argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:5}}}},n={args:{width:600,thickness:.4,padding:20,data:r,label:"OS",note:"Windows +10%",clockwise:!0,showLegend:!1,legendOrientation:"horizontal"}},s={args:{...n.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},_={args:{...n.args,width:600,showLegend:!0,legendOrientation:"horizontal"}},i={args:{...n.args,showLegend:!0,legendOrientation:"vertical"}},h={...n.args};delete h.width;const v={args:h,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},g={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(o.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(o.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},w=["Default","WithTooltips","WithHorizontalLegend","WithVerticalLegend","Responsiveness","ErrorStates"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...i.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(S,d,e)=>{e.d(d,{$:()=>i});var o=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),t=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(c),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),p={};p.insert="head",p.singleton=!1;var f=r()(l.A,p);const n=l.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={horizontal:"row",vertical:"column"},i=({items:h,className:v,orientation:g="horizontal"})=>{const w=(0,t.A)({domain:h.map(x=>x.label),range:h.map(x=>x.color)});return(0,s.jsx)("div",{className:(0,a.A)(n.legend,n[`legend--${g}`],v),role:"list","data-testid":`legend-${g}`,children:(0,s.jsx)(o.A,{scale:w,direction:_[g],shape:"rect",shapeWidth:16,shapeHeight:16,className:n["legend-items"],children:x=>(0,s.jsx)("div",{className:n[`legend--${g}`],children:x.map(m=>(0,s.jsxs)("div",{className:n["legend-item"],role:"listitem","data-testid":"legend-item",children:[(0,s.jsx)("svg",{width:16,height:16,role:"img",children:(0,s.jsx)("rect",{width:16,height:16,fill:m.value,className:n["legend-item-swatch"],"data-testid":"legend-marker",role:"presentation"})}),(0,s.jsxs)("span",{className:n["legend-item-label"],children:[m.text,h.find(P=>P.label===m.text)?.value&&(0,s.jsx)("span",{className:n["legend-item-value"],children:h.find(P=>P.label===m.text)?.value})]})]},m.text))})})})};try{i.displayName="BaseLegend",i.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:i.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(S,d,e)=>{e.d(d,{A:()=>V});var o=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),r=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../charts/src/providers/theme/theme-provider.tsx"),n=e("../charts/src/components/legend/base-legend.tsx"),s=e("../charts/src/components/shared/with-responsive.tsx"),_=e("../charts/src/components/tooltip/base-tooltip.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(i),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),g={};g.insert="head",g.singleton=!1;var w=h()(v.A,g);const x=v.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=C=>C.length?C.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:C.reduce((E,L)=>E+L.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},T=({data:C,width:j=400,thickness:k=.4,clockwise:E=!0,withTooltips:L=!1,showLegend:U=!1,legendOrientation:N="horizontal",label:K,note:z,className:Y})=>{const M=(0,f.RW)(),{tooltipOpen:H,tooltipLeft:X,tooltipTop:Z,tooltipData:b,hideTooltip:W,showTooltip:F}=(0,r.A)(),I=(0,p.useCallback)((u,y)=>{const B=(0,o.A)(u);B&&F({tooltipData:y.data,tooltipLeft:B.x,tooltipTop:B.y-10})},[F]),G=(0,p.useCallback)(()=>{W()},[W]),J=(0,p.useCallback)(u=>y=>{I(y,u)},[I]),{isValid:Q,message:$}=P(C);if(!Q)return(0,m.jsx)("div",{className:x["pie-semi-circle-chart"],children:(0,m.jsx)("svg",{width:j,height:j/2,"data-testid":"pie-chart-svg",children:(0,m.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:x.error,children:$})})});const R=j/2,D=.03,q=j-D*2,ee=R-D,A=Math.min(q,ee*2)/2,te=A*(1-k+D),ne=C.map((u,y)=>({...u,index:y})),se=E?-Math.PI/2:Math.PI/2,oe=E?Math.PI/2:-Math.PI/2,O={value:u=>u.value,sort:(u,y)=>y.value-u.value,fill:u=>u.color||M.colors[u.index%M.colors.length]},ae=C.map((u,y)=>({label:u.label,value:u.valueDisplay||u.value.toString(),color:O.fill({...u,index:y})}));return(0,m.jsxs)("div",{className:(0,l.A)("pie-semi-circle-chart",x["pie-semi-circle-chart"],Y),"data-testid":"pie-chart-container",children:[(0,m.jsx)("svg",{width:j,height:R,viewBox:`0 0 ${j} ${R}`,"data-testid":"pie-chart-svg",children:(0,m.jsxs)(t.A,{top:A,left:A,children:[(0,m.jsx)(a.A,{data:ne,pieValue:O.value,outerRadius:A,innerRadius:te,cornerRadius:3,padAngle:D,startAngle:se,endAngle:oe,pieSort:O.sort,children:u=>u.arcs.map(y=>(0,m.jsx)("g",{onMouseMove:J(y),onMouseLeave:G,children:(0,m.jsx)("path",{d:u.path(y)||"",fill:O.fill(y.data),"data-testid":"pie-segment"})},y.data.label))}),(0,m.jsxs)(t.A,{children:[(0,m.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:x.label,children:K}),(0,m.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:x.note,children:z})]})]})}),L&&H&&b&&(0,m.jsx)(_.R,{data:{label:b.label,value:b.value,valueDisplay:b.valueDisplay},top:Z||0,left:X||0}),U&&(0,m.jsx)(n.$,{items:ae,orientation:N,className:x["pie-semi-circle-chart-legend"]})]})};T.displayName="PieSemiCircleChart";const V=(0,s.F)(T);try{T.displayName="PieSemiCircleChart",T.__docgenInfo={description:"",displayName:"PieSemiCircleChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"400"},description:"Width of the chart in pixels; height would be half of this value calculated automatically.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text to display above the chart",name:"label",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"0.4"},description:"Thickness of the pie chart. A value between 0 and 1",name:"thickness",required:!1,type:{name:"number"}},clockwise:{defaultValue:{value:"true"},description:`Direction of chart rendering
true for clockwise, false for counter-clockwise`,name:"clockwise",required:!1,type:{name:"boolean"}},note:{defaultValue:null,description:"Note text to display below the label",name:"note",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"]={docgenInfo:T.__docgenInfo,name:"PieSemiCircleChart",path:"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx#PieSemiCircleChart"})}catch{}},"../charts/src/components/shared/with-responsive.tsx":(S,d,e)=>{e.d(d,{F:()=>a});var o=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(c,r){const{maxWidth:l=1200,aspectRatio:p=.5,debounceTime:f=50}=r||{};return function(s){const{parentRef:_,width:i}=(0,o.A)({debounceTime:f,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),h=i?Math.min(i,l):600,v=s.height??h*p;return(0,t.jsx)("div",{ref:_,style:{width:"100%"},children:(0,t.jsx)(c,{width:h,height:v,size:h,...s})})}}try{a.displayName="withResponsive",a.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:a.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(S,d,e)=>{e.d(d,{R:()=>n});var o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(o),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var r=t()(a.A,c);const l=a.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({data:s})=>(0,p.jsxs)(p.Fragment,{children:[s?.label,": ",s?.valueDisplay||s?.value]}),n=({data:s,top:_,left:i,component:h=f,children:v,className:g})=>(0,p.jsx)("div",{className:l.tooltip,style:{top:_,left:i},role:"tooltip",children:v||s&&(0,p.jsx)(h,{data:s,className:g})});try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(S,d,e)=>{e.d(d,{NP:()=>f,Ox:()=>p,RW:()=>l});var o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/providers/theme/themes.ts"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,t.createContext)(a.zQ),l=()=>(0,t.useContext)(r),p=n=>{const s=l();return(0,t.useMemo)(()=>{const _=(n??[]).map(i=>i.options?.stroke).filter(i=>!!i);return(0,o.A)({...s,colors:[..._,...s.colors??[]]})},[s,n])},f=({theme:n={},children:s})=>{const _={...a.zQ,...n};return(0,c.jsx)(r.Provider,{value:_,children:s})};try{f.displayName="ThemeProvider",f.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:f.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{l.displayName="useChartTheme",l.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:l.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{p.displayName="useXYChartTheme",p.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:p.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(S,d,e)=>{e.d(d,{QI:()=>t,pk:()=>a,zQ:()=>o});const o={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},a={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(S,d,e)=>{e.d(d,{A:()=>l});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),r=c()(t());r.push([S.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),r.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const l=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(S,d,e)=>{e.d(d,{A:()=>l});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),r=c()(t());r.push([S.id,".xQEsZ9upN7GZLvXugRlk{position:relative;text-align:center}.u28WZeoUdhsFAVkB8ttn{margin-top:1rem}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),r.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart-legend":"u28WZeoUdhsFAVkB8ttn",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const l=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(S,d,e)=>{e.d(d,{A:()=>l});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),r=c()(t());r.push([S.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),r.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const l=r}}]);
